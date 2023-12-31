import React from "react";
import { Box, Divider, IconButton, Stack, Avatar, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Logo from "../../assets/Images/logo.ico"
import useSettings from "../../hooks/useSettings"
import { Nav_Buttons, Profile_Menu } from "../../data"
import { Gear } from "phosphor-react";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import MaterialUISwitch from "../../components/MaterialUISwitch"


const Sidebar = () => {

    const theme = useTheme();

    const [selected, setSelected] = useState(0);
    console.log(theme);

    const { onToggleMode } = useSettings();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box p={2} sx={{ backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(80,7,72, 0.25)", height: "100vh", width: 100 }}>
            <Stack direction="column" alignItems="center" sx={{ height: "100%" }} justifyContent="space-between" spacing={3}>
                <Stack alignItems="center" spacing={4}>
                    <Box sx={{
                        backgroundColor: theme.palette.mode === "light" ? theme.palette.primary.main : '#001e3c',
                        height: 64,
                        width: 64,
                        borderRadius: 1.5
                    }}>
                        <img src={Logo} alt="Chat app" />
                    </Box>
                    <Stack sx={{ width: "max-content" }} direction="column" alignItems="center" spacing={3}>
                        {Nav_Buttons.map((el) =>
                            el.index === selected ?
                                <Box px={1} sx={{ backgroundColor: theme.palette.mode === "light" ? theme.palette.primary.main : '#001e3c', borderRadius: 1.5 }}>
                                    <IconButton sx={{ width: "max-content", color: "#fff" }} key={el.index}>
                                        {el.icon}
                                    </IconButton>
                                </Box>
                                : <IconButton
                                    onClick={() => {
                                        setSelected(el.index)
                                    }}
                                    sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : "#fff" }}
                                    key={el.index}>
                                    {el.icon}
                                </IconButton>
                        )}
                        <Divider sx={{ width: "48px" }} />
                        {selected === 4 ?
                            <Box
                                px={1}
                                sx={{ backgroundColor: theme.palette.mode === "light" ? theme.palette.primary.main : '#001e3c', borderRadius: 1.5 }}>
                                <IconButton sx={{ width: "max-content", color: "#fff" }}>
                                    <Gear />
                                </IconButton>
                            </Box>
                            :
                            <IconButton onClick={() => {
                                setSelected(4)
                            }}
                                sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : "#fff" }}>
                                <Gear />
                            </IconButton>
                        }
                    </Stack>
                </Stack>
                <Stack spacing={4} alignItems="center" >
                    {/* Switch */}
                    <MaterialUISwitch onChange={() => {
                        onToggleMode();
                    }} defaultChecked />
                    <Avatar id="demo-positioned-menu"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        src={faker.image.avatar()} />
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <Stack spacing={1} p={1}>
                            {Profile_Menu.map((el) => (
                                <MenuItem onClick={handleClick}>
                                    <Stack sx={{ width: 100 }} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                        <span>{el.title}</span>
                                        {el.icon}
                                    </Stack>
                                </MenuItem>
                            ))}
                        </Stack>
                    </Menu>
                </Stack>


            </Stack>
        </Box>
    );
};

export default Sidebar;
