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
import DashboardComponent from "../../../dashboard";
import BlogsComponent from "../..";
import AuthorsComponent from "..";
import { BsTrashFill } from "react-icons/bs";
import { useDocumentOperation } from "@sanity/react-hooks";
import sanityClient from "part:@sanity/base/client";

function EditPost({ posts }) {
  const { id, name } = posts;
  const publishId = String(id).startsWith("drafts.")
    ? String(id).replace("drafts.", "")
    : id;
  const toast = useToast();
  const { del } = useDocumentOperation(publishId, "author");
  const [component, setComponent] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [loadingDelete, setLoadingDelete] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const onClose = React.useCallback(() => setOpen(false), []);
  const client = sanityClient.withConfig({ apiVersion: "v1" });

  const handleOpenDelete = () => {
    setOpen(true);
  };

  const confirmDelete = () => {
    setLoadingDelete(true);
    del.execute();
    try {
      setTimeout(async function () {
        const res = await client.fetch(
          `*[_type == "post" && _id == "${publishId}"]`
        );
        console.log(res);
        if (res.length === 0) {
          toast.push({
            status: "success",
            title: "Post has been deleted",
          });
          setComponent("Websites");
        } else {
          toast.push({
            status: "error",
            title: "The post you are trying to delete is used to a page.",
          });
        }
        setLoadingDelete(false);
      }, 3000);
      setOpen(false);
    } catch (error) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 5000);
  }, []);

  const handleRoute = (route) => {
    setComponent(route);
  };

  if (component === "Dashboard") {
    return <DashboardComponent />;
  } else if (component === "Blogs") {
    return <BlogsComponent />;
  } else if (component === "Authors") {
    return <AuthorsComponent />;
  }

  return (
    <Container width={10}>
      {open && (
        <Dialog
          header={`Are you sure you want to delete this post: ${name}?`}
          id="delete-page"
          onClose={onClose}
          zOffset={1000}
        >
          <Box
            padding={4}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Button
              mode="default"
              tone="success"
              onClick={confirmDelete}
              style={{ cursor: "pointer" }}
            >
              Confirm
            </Button>
            <Button
              mode="default"
              tone="caution"
              onClick={onClose}
              style={{ cursor: "pointer" }}
            >
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
      <div
        style={{
          position: "absolute",
          top: 58,
          width: "1550px",
          height: loadingDelete ? "980px" : "1px",
          backgroundColor: "black",
          opacity: "80%",
          zIndex: 1,
          marginTop: "11px",
          borderTop: "1px solid lightgray",
        }}
      >
        {loadingDelete && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "400px",
              color: "white",
            }}
          >
            <h3>Deleting {name}...</h3>
          </div>
        )}
      </div>
      <Box
        style={{
          backgroundColor: "#EEEFF3",
          height: "42px",
          width: "1560px",
          position: "absolute",
          padding: "4px",
        }}
      />
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: 20,
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
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
            onClick={() => handleRoute("Blogs", null)}
          >
            Blogs
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
            onClick={() => handleRoute("Authors", null)}
          >
            Authors
          </Text>
          <Text
            size={2}
            weight="bold"
            style={{ color: "#193868", marginRight: 7 }}
          >
            /
          </Text>
          <Text size={2} weight="bold" style={{ color: "#193868" }}>
            {name}
          </Text>
        </Box>
        <Box style={{ marginRight: 30 }}>
          <Text>
            <Tooltip
              content={
                <Box padding={2}>
                  <Text muted size={1}>
                    Delete Author
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
                tone="critical"
                onClick={handleOpenDelete}
                style={{ cursor: "pointer" }}
              />
            </Tooltip>
          </Text>
        </Box>
      </Box>
      <div
        style={{
          width: "1900px",
          height: "1080px",
          overflow: "hidden",
          marginTop: "-140px",
          marginLeft: "-350px",
        }}
      >
        <iframe
          src={`/intent/edit/id=${id}/`}
          width="100%"
          height="100%"
          style={{ border: "none" }}
          scrolling="no"
        />
      </div>
    </Container>
  );
}

export default EditPost;
