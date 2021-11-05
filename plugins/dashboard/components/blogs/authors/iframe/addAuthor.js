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

function AddAuthor() {
  const [component, setComponent] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 6000);
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
          width: "1560px",
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
            Add Author
          </Text>
        </Box>
      </Box>
      <div
        style={{
          width: "1900px",
          height: "1080px",
          overflow: "hidden",
          marginTop: "-130px",
          marginLeft: "-350px",
        }}
      >
        <iframe
          src={`/intent/create/template=author;type=author/`}
          width="100%"
          height="100%"
          style={{ border: "none" }}
          scrolling="no"
        />
      </div>
    </Container>
  );
}

export default AddAuthor;
