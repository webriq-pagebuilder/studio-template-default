import React, { useState, useEffect } from "react";
import { useToast, Tooltip, Box, Text } from "@sanity/ui";
import { useDocumentOperation, useValidationStatus } from "@sanity/react-hooks";
import { processData } from "../../stripeActions/process-data";
import sanityClient from "part:@sanity/base/client";
import {
  SANITY_STUDIO_DEV_SITE_URL,
  SANITY_STUDIO_PRODUCTION_SITE_URL,
} from "../../config";
import { useSecrets } from "sanity-secrets";
import { namespace, getAuthHeaders } from "../sanity-secrets/config";

const client = sanityClient.withConfig({ apiVersion: "v2021-10-21" });

export default function createProductsPublishAction(props) {
  const { type, draft } = props;
  const toast = useToast();
  const { isValidating, markers } = useValidationStatus(props.id, props.type);
  const { publish } = useDocumentOperation(props.id, props.type);
  const [isPublishing, setIsPublishing] = useState(false);
  const { secrets } = useSecrets(namespace);

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

  useEffect(() => {
    const payload = !props.draft
      ? {
          data: props?.published?.variants,
          variant: props?.published?.variant,
          type: props?.published?._type,
        }
      : {
          data: props?.draft?.variants,
          variant: props?.draft?.variant,
          type: props?.draft?._type,
        };

    async function create() {
      const response = await processData(payload);

      if (response) {
        toast.push({
          status: response.status === 500 ? "error" : "success",
          title: response.statusText,
        });
      }
    }

    publish.disabled !== "ALREADY_PUBLISHED" &&
      publish.disabled !== "NO_CHANGES" &&
      create();
  }, [isPublishing]);

  const isDisabled = markers.length !== 0 || isPublishing;

  return {
    disabled: isDisabled || !draft,
    label: [
      "page",
      "post",
      "category",
      "author",
      "mainProduct",
      "mainCollection",
      "cartPage",
      "wishlistPage",
    ].includes(type) ? (
      <CustomPublishLabel hasErrors={isDisabled} isPublishing={isPublishing} />
    ) : isPublishing ? (
      "Saving..."
    ) : (
      "Save"
    ),
    onHandle: async () => {
      // for documents of type 'mainProduct', call addOrUpdate API endpoint on publish
      if (type === "mainProduct") {
        const id = props?.draft?._id || props?.id;

        if (secrets) {
          try {
            await client
              .fetch("*[_id==$documentId]", { documentId: id })
              .then(async (result) => {
                await fetch(`${siteUrl}/api/ecwid/products/`, {
                  method: !props?.published ? "POST" : "PUT", // check if our page has been published or has unpublished edits
                  headers: getAuthHeaders(namespace), // pass sanity secrets to header
                  body: { ...result },
                });
              });
          } catch (error) {
            console.log("Error: ", error);
          }
        }
      }

      // This will update the button text
      setIsPublishing(true);

      // Perform the publish
      publish.execute();

      // Signal that the action is completed
      props.onComplete();
    },
  };
}

function CustomPublishLabel({ hasErrors = false, isPublishing = false }) {
  if (hasErrors) {
    return (
      <Tooltip
        content={
          <Box padding={2}>
            <Text size={2}>
              There are validation errors that need to be fixed
              <br /> before this document can be published!
            </Text>
          </Box>
        }
        placement="top"
        portal
      >
        <span>Publish</span>
      </Tooltip>
    );
  }

  return isPublishing ? <span>Publishing...</span> : <span>Publish</span>;
}
