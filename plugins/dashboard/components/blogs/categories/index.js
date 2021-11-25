import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  Text,
  Box,
  Button,
  Container,
  Stack,
  Tooltip,
} from "@sanity/ui";
import DashboardComponent from "../../dashboard";
import BlogsComponent from "..";
import sanityClient from "part:@sanity/base/client";
import { urlFor } from "../../../utils/imageBuilder";
import { EditIcon, TrashIcon } from "@sanity/icons";
import { AiOutlineUserAdd, AiOutlineEye } from "react-icons/ai";
import { CgFileAdd } from "react-icons/cg";
import EditCategory from "./iframe/editCategory";
import AddCategory from "./iframe/addCategory";

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
    name: "Landing Pages",
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

function CategoriesComponent() {
  const [component, setComponent] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [categories, setCategories] = React.useState("");
  const client = sanityClient.withConfig({ apiVersion: "v1" });

  const handleRoute = (route, id, name) => {
    setComponent(route);
    setCategory({ id, name });
  };

  async function getCategories() {
    await client
      .fetch('*[_type == "category"] | order(_updatedAt desc)')
      .then((data) => setCategories(data));
  }

  React.useEffect(() => {
    client && getCategories();
  }, []);
  console.log(category);
  if (component === "Dashboard") {
    return <DashboardComponent />;
  } else if (component === "EditCategory") {
    return <EditCategory category={category} />;
  } else if (component === "Blogs") {
    return <BlogsComponent />;
  } else if (component === "AddCategory") {
    return <AddCategory />;
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
            onClick={() => handleRoute("Dashboard")}
          >
            Dashboard
          </Text>
          <Text
            size={2}
            style={{ color: "lightgray", marginRight: 7, cursor: "pointer" }}
          >
            /
          </Text>
          <Text
            size={2}
            style={{ color: "lightgray", marginRight: 7, cursor: "pointer" }}
            onClick={() => handleRoute("Blogs")}
          >
            Blogs
          </Text>
          <Text
            size={2}
            weight="bold"
            style={{ color: "#193868", marginRight: 7 }}
          >
            /
          </Text>
          <Text size={2} weight="bold" style={{ color: "#193868" }}>
            Categories
          </Text>
        </Box>
        <Box style={{ marginRight: 30 }}>
          <Text>
            <Tooltip
              content={
                <Box padding={2}>
                  <Text muted size={1}>
                    Add Category
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
                onClick={() => handleRoute("AddCategory", null, null)}
                style={{ cursor: "pointer" }}
              />
            </Tooltip>
          </Text>
        </Box>
      </Box>
      <hr />
      <Box style={{ display: "flex", padding: 5 }}>
        {!categories ? (
          <Text>Loading...</Text>
        ) : categories.length === 0 ? (
          <Text>
            No Categories to display, Click the{" "}
            <span style={{ fontWeight: "bold" }}>Add Category Button</span> to
            add a new one.
          </Text>
        ) : (
          <Grid columns={[2, 3, 4, 6]} gap={[1]} autoRows="auto">
            {categories.map((category) => {
              return (
                <Card
                  padding={2}
                  style={{
                    background: "transparent",
                    border: "1px solid lightgray",
                    maxWidth: "220px",
                    width: "220px",
                  }}
                  key={category.title}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text size={1} style={{ color: "#193868" }} weight="bold">
                      {category.title}
                    </Text>

                    <Box display="flex" style={{ justifyContent: "flex-end" }}>
                      {/* <Button
                        style={{
                          cursor: "pointer",
                          width: 25,
                          height: 25,
                          marginRight: 5,
                        }}
                        onClick={() => handleEdit(category.title)}
                        mode="ghost"
                        tone="primary"
                        icon={<EditIcon />}
                      /> */}
                      <Button
                        style={{
                          cursor: "pointer",
                          width: 25,
                          height: 25,
                        }}
                        onClick={() =>
                          handleRoute(
                            "EditCategory",
                            category._id,
                            category.title
                          )
                        }
                        mode="ghost"
                        tone="caution"
                        icon={<AiOutlineEye />}
                      />
                    </Box>
                  </Box>
                </Card>
              );
            })}
          </Grid>
        )}
      </Box>
    </Container>
  );
}

export default CategoriesComponent;
