import React from "react";
import DashboardComponent from "./components/dashboard";
import { DashboardWidget } from "@sanity/dashboard";

function Dashboard() {
  return <DashboardComponent />;
}

export default {
  name: "dashboard",
  component: Dashboard,
};
