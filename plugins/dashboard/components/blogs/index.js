import React, { useEffect, useState } from "react";
// import getIt from "get-it";
// import jsonResponse from "get-it/lib/middleware/jsonResponse";
// import promise from "get-it/lib/middleware/promise";
import { DashboardWidget } from "@sanity/dashboard";
import { Grid, Card, Text, Box, Button, Container } from "@sanity/ui";
// import styled from "styled-components";
import { IntentLink } from "part:@sanity/base/router";
import { Router, useRouter } from "@sanity/state-router";
import DashboardComponent from "../dashboard";

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
        <path d="M14.568.075c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702zm7.432 10.925v13h-20v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3zm-15 1.5c0 .828.672 1.5 1.501 1.5.827 0 1.499-.672 1.499-1.5s-.672-1.5-1.499-1.5c-.829 0-1.501.672-1.501 1.5zm10 6.5l-3.5-6-2.093 2.968-1.31-.968-3.097 4h10z" />
      </svg>
    ),
    name: "Posts",
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
    name: "Categories",
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
        <path d="M24 24h-24v-24h24v24zm-2-22h-20v20h20v-20zm-4.118 14.064c-2.293-.529-4.427-.993-3.394-2.945 3.146-5.942.834-9.119-2.488-9.119-3.388 0-5.643 3.299-2.488 9.119 1.064 1.963-1.15 2.427-3.394 2.945-2.048.473-2.124 1.49-2.118 3.269l.004.667h15.993l.003-.646c.007-1.792-.062-2.815-2.118-3.29z" />
      </svg>
    ),
    name: "Authors",
  },
];

function BlogsComponent() {
  const router = useRouter();
  const [component, setComponent] = React.useState("");

  const handleRoute = (route) => {
    setComponent(route);
  };

  if (component === "Dashboard") {
    return <DashboardComponent />;
  }
  return (
    <Container width={10} style={{ background: "#EEEFF3" }} padding={4}>
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
          weight="bold"
          style={{ color: "#193868", marginRight: 7 }}
        >
          /
        </Text>
        <Text size={2} weight="bold" style={{ color: "#193868" }}>
          Blogs
        </Text>
      </Box>
      <hr />
      <Box style={{ display: "flex" }}>
        <Grid columns={[2, 3, 4, 5]} gap={1}>
          {items.map((item) => {
            return (
              <Card
                padding={3}
                style={{ background: "transparent", textAlign: "center" }}
              >
                <Button
                  fontSize={[2, 2, 3]}
                  icon={item.icon}
                  mode="ghost"
                  tone="default"
                  padding={2}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 10,
                    marginBottom: 10,
                    cursor: "pointer",
                    background: "transparent",
                  }}
                />
                <Text size={1} style={{ color: "#193868" }} weight="bold">
                  {item.name}
                </Text>
              </Card>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}

export default BlogsComponent;
