import React from "react";
import {
  Tooltip,
  Dialog,
  Text,
  Box,
  Button,
  Container,
  useToast,
} from "@sanity/ui";
import PagesComponent from "..";
import WebsitesComponent from "../websites";
import DashboardComponent from "../../dashboard";
import { BsTrashFill } from "react-icons/bs";
import { useDocumentOperation } from "@sanity/react-hooks";
import sanityClient from "part:@sanity/base/client";

function EditPage({ page }) {
  const { id, title } = page;
  const publishId = String(id).startsWith("drafts.")
    ? String(id).replace("drafts.", "")
    : id;
  const toast = useToast();
  const client = sanityClient.withConfig({ apiVersion: "v1" });
  const { del } = useDocumentOperation(publishId, "page");
  const [component, setComponent] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const onClose = React.useCallback(() => setOpen(false), []);

  const [pages, setPages] = React.useState(null);

  async function getPages() {
    await client.fetch('*[_type == "page"]').then((data) => setPages(data));
  }

  React.useEffect(() => {
    client && getPages();
  }, [open, del]);

  React.useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 7000);
  }, [id]);

  const handleDelete = () => {
    setOpen(true);
  };

  const confirmDelete = async () => {
    del.execute();
    await client.fetch('*[_type == "page"]').then((data) => {
      const pageStatus = data.filter(
        (page) => id === page._id || publishId === page._id
      );

      if (pageStatus.length >= 1) {
        toast.push({
          status: "error",
          title: "The page you are trying to delete is linked to another page.",
        });
      } else {
        toast.push({
          status: "success",
          title: "Page has been deleted",
        });
      }
    });

    setOpen(false);
    // setComponent("Websites");
  };

  const handleRoute = (route) => {
    setComponent(route);
  };

  if (component === "Dashboard") {
    return <DashboardComponent />;
  } else if (component === "Websites") {
    return <WebsitesComponent />;
  } else if (component === "Pages") {
    return <PagesComponent />;
  }

  return (
    <Container width={10}>
      {open && (
        <Dialog
          header="Are you sure you want to delete this page?"
          id="delete-page"
          onClose={onClose}
          zOffset={1000}
        >
          <Box
            padding={4}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Button mode="default" tone="success" onClick={confirmDelete}>
              Confirm
            </Button>
            <Button mode="default" tone="caution" onClick={onClose}>
              Cancel
            </Button>
          </Box>
        </Dialog>
      )}
      <div
        style={{
          position: "absolute",
          top: 58,
          width: "1550px",
          height: loading ? "980px" : "1px",
          backgroundColor: "#EEEFF3",
          zIndex: 1,
          marginTop: "11px",
          borderTop: "1px solid lightgray",
        }}
      >
        {loading && <h4>Loading Contents...</h4>}
      </div>
      <Box
        style={{
          backgroundColor: "#EEEFF3",
          height: "42px",
          width: "1542px",
          position: "absolute",
          padding: "4px",
        }}
      />
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            paddingTop: "20px",
            border: "none",
          }}
        >
          <Text
            size={2}
            style={{ color: "lightgray", marginRight: 7, cursor: "pointer" }}
            onClick={() => handleRoute("Dashboard", null)}
          >
            Dashboard
          </Text>
          <Text
            size={2}
            weight="bold"
            style={{ color: "lightgray", marginRight: 7 }}
          >
            /
          </Text>
          <Text
            size={2}
            style={{ color: "lightgray", marginRight: 7, cursor: "pointer" }}
            onClick={() => handleRoute("Pages", null)}
          >
            Pages
          </Text>
          <Text
            size={2}
            weight="bold"
            style={{ color: "lightgray", marginRight: 7 }}
          >
            /
          </Text>
          <Text
            size={2}
            style={{ color: "lightgray", marginRight: 7, cursor: "pointer" }}
            onClick={() => handleRoute("Websites", null)}
          >
            Websites
          </Text>
          <Text
            size={2}
            weight="bold"
            style={{ color: "#193868", marginRight: 7 }}
          >
            /
          </Text>
          <Text size={2} weight="bold" style={{ color: "#193868" }}>
            {title}
          </Text>
        </Box>
        <Box style={{ zIndex: 2, marginRight: "20px", marginTop: "20px" }}>
          <Text>
            <Tooltip
              content={
                <Box padding={2}>
                  <Text muted size={1}>
                    Delete Page
                  </Text>
                </Box>
              }
              fallbackPlacements={["right", "left"]}
              placement="top"
              portal
            >
              <Button
                icon={BsTrashFill}
                fontSize={2}
                mode="bleed"
                padding="2"
                tone="caution"
                disabled={loading ? true : false}
                onClick={handleDelete}
                style={{ cursor: "pointer" }}
              />
            </Tooltip>
          </Text>
        </Box>
      </Box>
      <div
        style={{
          height: "1020px",
          width: "205px",
          backgroundColor: "#EEEFF3",
          position: "absolute",
        }}
      />
      <div
        style={{
          width: "1900px",
          height: "1080px",
          overflow: "hidden",
          marginTop: "-97px",
          marginLeft: "-500px",
        }}
      >
        <iframe
          src={`/desk/pages;${publishId}`}
          width="100%"
          height="100%"
          style={{ border: "none" }}
          scrolling="no"
        />
      </div>
    </Container>
  );
}

export default EditPage;
