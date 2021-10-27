import React, { useEffect, useState } from "react";
// import getIt from "get-it";
// import jsonResponse from "get-it/lib/middleware/jsonResponse";
// import promise from "get-it/lib/middleware/promise";
import { DashboardWidget } from "@sanity/dashboard";
import { Grid, Card, Text, Box, Button, Container } from "@sanity/ui";
// import styled from "styled-components";
import { IntentLink } from "part:@sanity/base/router";
import { Router, useRouter } from "@sanity/state-router";
import PagesComponent from "../pages";
import BlogsComponent from "../blogs";
import FormsComponent from "../forms";
import PaymentsComponent from "../payments";
import AnalyticsComponent from "../Analytics";

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
        <path d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-20h7.362c4.156 0 2.638 6 2.638 6s2.313-.635 4.067-.133l1.952-1.976c-2.214-2.807-5.762-5.891-7.83-5.891h-10.189v24h20v-7.98l-2 2.025z" />
      </svg>
    ),
    name: "Pages",
    link: "pages",
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
        <path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-3v-1h3v1zm0 2h-3v1h3v-1zm0 3h-10v1h10v-1zm-5-6h-5v4h5v-4z" />
      </svg>
    ),
    name: "Blogs",
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
        <path d="M3.44 2l-.439-2h17.994l-.439 2h-17.116zm-1.44 3l-.439-2h20.879l-.44 2h-20zm10.099 10.716l.004.283h-5.939l-.048-.292c-.133-.779-.177-1.224.582-1.43.842-.227 1.684-.429 1.168-1.289-1.627-2.546-.849-3.99.634-3.99 1.454 0 2.516 1.39 1.355 3.99-.348.854.5 1.056 1.401 1.289.801.208.834.655.843 1.439zm6.628-4.716h-4.784l-.028 1h4.675l.137-1zm.273-2h-5l-.028.999h4.892l.136-.999zm-.548 4h-4.566l-.029.999h4.459l.136-.999zm-.273 2h-4.351l-.028.999h4.241l.138-.999zm5.821 3h-24l2 6h20l2-6zm-20.625-2l-1.085-8.001h19.411l-1.119 8.001h2.021l1.397-10h-24l1.356 10h2.019z" />
      </svg>
    ),
    name: "Forms",
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
        <path d="M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm0 13.5c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-6.5h20v6.5zm0-9.5h-20v-1.5c0-.276.224-.5.5-.5h19c.276 0 .5.224.5.5v1.5zm-9 6h-9v-1h9v1zm-3 2h-6v-1h6v1zm10-2h-3v-1h3v1z" />
      </svg>
    ),
    name: "Payments",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 24 24"
        fill="#193868"
      >
        <path d="M2 14h-2v-5h2v5zm3 0h-2v-9h2v9zm3 0h-2v-7h2v7zm3 0h-2v-3h2v3zm13 3.586l-2.831-2.832c.522-.79.831-1.735.831-2.754 0-2.761-2.238-5-5-5s-5 2.239-5 5 2.238 5 5 5c1.019 0 1.964-.309 2.755-.832l2.831 2.832 1.414-1.414zm-10-5.586c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z" />
      </svg>
    ),
    name: "Analytics",
  },
];

function DashboardComponent() {
  const router = useRouter();
  const [component, setComponent] = React.useState("");

  const handleRoute = (route) => {
    setComponent(route);
  };

  if (component === "Pages") {
    return <PagesComponent />;
  } else if (component === "Blogs") {
    return <BlogsComponent />;
  } else if (component === "Forms") {
    return <FormsComponent />;
  } else if (component === "Payments") {
    return <PaymentsComponent />;
  } else if (component === "Analytics") {
    return <AnalyticsComponent />;
  }
  return (
    <Container width={10} style={{ background: "#EEEFF3" }} padding={4}>
      <Text size={2}>Dashboard</Text>
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
                  onClick={() => handleRoute(item.name)}
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

export default DashboardComponent;
