import React, { useState, useEffect } from "react";
import { useToast } from "@sanity/ui";
import { useDocumentOperation, useValidationStatus } from "@sanity/react-hooks";
import sanityClient from "part:@sanity/base/client";
import {
  SANITY_STUDIO_DEV_SITE_URL,
  SANITY_STUDIO_PRODUCTION_SITE_URL,
  SANITY_STUDIO_STORE_PREVIEW_SECRET,
} from "../../config";
import { useSecrets } from "sanity-secrets";
import { namespace, getAuthHeaders } from "../sanity-secrets/config";

const client = sanityClient.withConfig({ apiVersion: "v2021-10-21" });

export default function createMainProductPublishAction(props) {
  const { type, draft } = props;
  const toast = useToast();
  const { isValidating, markers } = useValidationStatus(props.id, props.type);
  const { publish } = useDocumentOperation(props.id, props.type);
  const [isPublishing, setIsPublishing] = useState(false);

  // store the secret token into sanity-secrets
  let { secrets } = useSecrets(namespace);
  secrets = SANITY_STUDIO_STORE_PREVIEW_SECRET;

  // return the siteURL to use on development or production
  let siteUrl = SANITY_STUDIO_DEV_SITE_URL;
  if (!window.location.hostname.includes("localhost")) {
    siteUrl = SANITY_STUDIO_PRODUCTION_SITE_URL;
  }

  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false);
    }
  }, [props]);

  const isDisabled = markers.length !== 0 || isPublishing;

  return {
    disabled: isDisabled || !draft,
    label: isPublishing ? <span>Publishing...</span> : <span>Publish</span>,
    onHandle: async () => {
      // for documents of type 'mainProduct', call addOrUpdate API endpoint on publish
      const id = props?.draft?._id || props?.id;

      // make sure we have our secrets and id values
      if (secrets && id) {
        try {
          // fetch for the required document data by doing a query using the document ID
          const getData = await client
            .fetch("*[_id==$documentId]", { documentId: id })
            .then((result) => result);

          // with data available, do the API request and pass the required data as payload
          if (getData) {
            await fetch(`${siteUrl}/api/ecwid/products`, {
              method: !props?.published ? "POST" : "PUT", // check if out page has been published or is a draft
              headers: getAuthHeaders(secrets), // pass sanity secrets to header
              body: { ...getData },
            }).then((response) => {
              if (!response.ok) {
                // show toast notification on failed request
                console.log(response);
                toast.push({
                  status: "error",
                  title: "Unable to proceed with request! Please see logs.",
                });
                throw new Error("Failed to do POST/PUT request");
              }

              // show toast notification on successful request
              toast.push({
                status: "success",
                title: `Successfully ${
                  !props?.published ? "added" : "updated"
                } product on Ecwid store!`,
              });
            });
          }
        } catch (error) {
          console.log("Error: ", error);

          // show toast notification on failed request
          toast.push({
            status: "error",
            title: "Unable to proceed with request! Please see logs.",
          });
        }
      }
    },
  };
}
