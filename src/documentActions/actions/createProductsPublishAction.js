import { useState, useEffect } from "react";
import { useDocumentOperation } from "@sanity/react-hooks";
import { useToast } from "@sanity/ui";
import { processData } from "../../stripeActions/process-data";

export default function createProductsPublishAction(props) {
  const { type } = props;
  const toast = useToast();
  const { publish } = useDocumentOperation(props.id, props.type);
  const [isPublishing, setIsPublishing] = useState(false);

  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false);
    }
  }, [props]);

  useEffect(() => {
    const payload = !props.draft
      ? props?.publish?.sections
      : props.draft.sections;

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

  if (type === "page") {
    return {
      disabled: publish.disabled,
      label: isPublishing ? "Publishing…" : "Publish",
      onHandle: () => {
        // This will update the button text
        setIsPublishing(true);

        // Perform the publish
        publish.execute();

        // Signal that the action is completed
        props.onComplete();
      },
    };
  } else {
    return {
      disabled: publish.disabled,
      label: isPublishing ? "Saving..." : "Save",
      onHandle: () => {
        // This will update the button text
        setIsPublishing(true);

        // Perform the publish
        publish.execute();

        // Signal that the action is completed
        props.onComplete();
      },
    };
  }
}
