import React from "react";
import sanityClient from "part:@sanity/base/client";
import { Text, Box, Button, Container, Tooltip } from "@sanity/ui";
import "./style.css";
import DashboardComponent from "../../dashboard";
import PagesComponent from "..";
import { AiOutlineEye } from "react-icons/ai";
import { CgFileAdd } from "react-icons/cg";
import EditPage from "../iframe/editPage";

const items = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="#193868"
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" />
      </svg>
    ),
    name: "Website",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="#193868"
      >
        <path d="M14.666 8.334v3.666l1.463-2.215-1.463-1.451zm-3.092 4.167c.66-.384 1.242-.864 1.758-1.447v1.369c-.445.393-.926.731-1.449 1.018l-.309-.94zm-3.255 2.041c-.652.083-1.57.125-2.319.125v-.97c.688 0 1.551-.037 2.152-.113l.167.958zm2.789-.725l-.036.015c-.586.246-1.22.437-1.91.573l-.167-.958c.655-.131 1.257-.315 1.809-.556l.304.926zm10.892-13.817l-3 11-4.064-3.62 3.9-4.117-5.229 3.614-3.607-.877 12-6zm-3.015 14.779c0 4.546-5.777 9.221-8.221 9.221h-8.764v-22h11.527l-4 2h-5.527v18h5.938c4.155 0 2.638-6 2.638-6 3.349.921 6.003.403 6.003-3.21.28.65.406 1.318.406 1.989z" />
      </svg>
    ),
    name: "Microsites",
  },
];

function WebsitesComponent() {
  const [component, setComponent] = React.useState("");
  const client = sanityClient.withConfig({ apiVersion: "v1" });
  const [pages, setPages] = React.useState(null);
  const [page, setPage] = React.useState("");

  async function getPages() {
    await client.fetch('*[_type == "page"]').then((data) => setPages(data));
  }

  React.useEffect(() => {
    client && getPages();
  }, []);

  const handleRoute = (route, id, title) => {
    setComponent(route);

    setPage({ id, title });
  };

  if (component === "Dashboard") {
    return <DashboardComponent />;
  } else if (component === "Pages") {
    return <PagesComponent />;
  } else if (component === "Edit") {
    return <EditPage page={page} />;
  }
  return (
    <Container width={10} style={{ background: "#EEEFF3" }} padding={4}>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Text
            size={2}
            style={{ color: "lightgray", marginRight: 7, cursor: "pointer" }}
            onClick={() => handleRoute("Dashboard", null, null)}
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
            onClick={() => handleRoute("Pages", null, null)}
          >
            Pages
          </Text>
          <Text
            size={2}
            weight="bold"
            style={{ color: "#193868", marginRight: 7 }}
          >
            /
          </Text>
          <Text size={2} weight="bold" style={{ color: "#193868" }}>
            Websites
          </Text>
        </Box>
        <Box style={{ marginRight: 30 }}>
          <Text>
            <Tooltip
              content={
                <Box padding={2}>
                  <Text muted size={1}>
                    Add Page
                  </Text>
                </Box>
              }
              fallbackPlacements={["right", "left"]}
              placement="top"
              portal
            >
              <Button
                icon={CgFileAdd}
                fontSize={4}
                mode="bleed"
                padding="2"
                tone="primary"
                // onClick={handleDelete}
                style={{ cursor: "pointer" }}
              />
            </Tooltip>
          </Text>
        </Box>
      </Box>
      <hr />

      <table>
        <tr>
          <th style={{ minWidth: 400 }}>Page name</th>
          <th>Slug</th>
          <th>Status</th>
          <th>Published date</th>
          <th>Option</th>
        </tr>
        {pages?.map((page) => {
          const date = new Date(page._updatedAt);

          return (
            <tr>
              <td key={page._id}>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.568.075c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702zm7.432 10.925v13h-20v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3zm-16 5h5v-4h-5v4zm12 2h-12v1h12v-1zm0-3h-5v1h5v-1zm0-3h-5v1h5v-1z" />
                  </svg>
                  <Text style={{ marginLeft: 10 }} weight="bold" size={1}>
                    {!page.title || page.title === "" ? "Untitled" : page.title}
                  </Text>
                </Box>
              </td>
              <td>
                <Text weight="bold" size={1}>
                  {!page.slug?.current
                    ? ""
                    : page.slug?.current === "home"
                    ? "/"
                    : `/${page.slug?.current}`}
                </Text>
              </td>
              <td>
                <Text
                  weight="bold"
                  size={1}
                  style={{ fontStyle: "italic", color: "#868686" }}
                >
                  {String(page._id)?.startsWith("drafts.")
                    ? "Draft"
                    : "Published"}
                </Text>
              </td>
              <td>
                <Text weight="bold" size={1}>
                  <span style={{ fontStyle: "italic", color: "#868686" }}>
                    Last edited on{" "}
                  </span>
                  <span>
                    {date.toLocaleString("default", { month: "long" })}{" "}
                    {date.getDay()}
                  </span>
                </Text>
              </td>
              <td>
                <Button
                  icon={AiOutlineEye}
                  fontSize={2}
                  mode="bleed"
                  padding="2"
                  style={{ cursor: "pointer" }}
                  // onClick={() => handleEdit({ id: page._id, type: page._type })}
                  onClick={() => handleRoute("Edit", page._id, page.title)}
                />
                {/* <Button
                  icon={MdDelete}
                  fontSize={2}
                  mode="bleed"
                  padding="2"
                  onClick={() => handleDelete(page._id)}
                /> */}
              </td>
            </tr>
          );
        })}
      </table>
    </Container>
  );
}

export default WebsitesComponent;
