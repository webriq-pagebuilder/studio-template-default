import React from "react";
import { CopyIcon } from "@sanity/icons"
import { DuplicatePageSettings, DialogFooter } from "../../components/actions";
import { useClient } from "sanity";

export default function CustomDuplicateAction(props) {
  const documentId = !props?.draft ? props?.id : props?.draft?._id;
  const document = props?.drafts || props?.published;

  const sanityClient = useClient({ apiVersion: "2021-10-21" });

  const [page, setPage] = React.useState(null);
  const [variants, setVariants] = React.useState(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    page: document,
    title: document?.title || document?.name,
    sections: document?.sections,
  })

  return {
    icon: CopyIcon,
    tone: "primary",
    label: "Duplicate",
    onHandle: async () => {
      // fetch all ADDED sections for the current document
      await sanityClient
        .fetch(
          `*[_id == $documentId][0]{ 
            ...,
            sections[]->{
              ...,
              "current": true,
              "include": true,
              "replaced": false,
              "isEditing": false, 
            }, 
          }`, 
          { documentId: documentId }
        )
        .then(async (result) => {
          setPage(result);

          // fetch all the variants based on the section type added in current document
          if(result?.sections?.length !== 0) {
            await sanityClient
              .fetch(
                `*[_type in $sections] {
                  ...,
                  "current": true,
                  "include": true,
                  "replaced": false,
                  "isEditing": false,
                }`,
                { sections: result?.sections?.map((section) => section?._type) }
            )
            .then((result) => setVariants(result));
          }
        });

      setDialogOpen(true);
    },
    dialog: dialogOpen && {
      type: "dialog",
      onClose: () => {
        setDialogOpen(false);
      },
      header: "Duplicate document content",
      content: (
        <DuplicatePageSettings {...{ 
            page, 
            variants, 
            setValues, 
            setDialogOpen 
          }} 
        />
      ),
      footer:(
        <DialogFooter {...{ 
            page, 
            title: page?.title, 
            sections: page?.sections, 
            dialogFn: setDialogOpen,
            values 
          }} 
        />
      )
    }
  }
}