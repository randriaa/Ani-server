import React from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Sidebar from "./SideBar";


const DashboardLayout = () => {

  const theme = useTheme();

  console.log(theme);

  return (
    <Stack direction="row">
      {/* SideBar */}
      <Sidebar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
