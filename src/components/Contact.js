import { Avatar, Box, Button, Divider, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from "phosphor-react";
import React from "react";
import { ToggleSidebar } from "../redux/slices/app";
import { useDispatch } from "react-redux";
import { faker } from "@faker-js/faker";
import AntSwitch from "./AntSwitch";

const Contact = () => {

    const theme = useTheme();
    const dispatch = useDispatch();
    return (
        <Box sx={{ width: 320, height: "100vh" }}>
            <Stack sx={{ height: "100%" }}>
                {/* Header */}
                <Box sx={{
                    boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
                    width: "100%",
                    backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
                }}>

                    <Stack sx={{ height: "100%", p: 2 }} direction={"row"} alignItems={"center"} justifyContent="space-between" spacing={3}>
                        <Typography variant="subtitle2">Contact Info</Typography>
                        <IconButton onClick={() => {
                            dispatch(ToggleSidebar());

                        }}>
                            <X />
                        </IconButton>
                    </Stack>

                </Box>

                {/* Body */}
                <Stack sx={{
                    height: "100%",
                    position: "relative",
                    flexGrow: 1,
                    overflowY: "scroll",
                    '&::-webkit-scrollbar': {
                        width: '0.4em'
                    },
                    '&::-webkit-scrollbar-track': {
                        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(0,0,0,.1)',
                        borderRadius: 2,
                    }
                }}
                    p={3}
                    spacing={3}>
                    <Stack alignItems={"center"} direction={"row"} spacing={2}>
                        <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} sx={{ height: 64, width: 64 }} />
                        <Stack spacing={0.5}>
                            <Typography variant="article" fontWeight={600}>
                                {faker.name.fullName()}
                            </Typography>
                            <Typography variant="body2" fontWeight={500}>
                                {'+33 7 60 40 28 67'}
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
                        <Stack spacing={1} alignItems={"center"}>
                            <IconButton>
                                <Phone />
                            </IconButton>
                            <Typography variant="overline">
                                Voice
                            </Typography>
                        </Stack>
                        <Stack spacing={1} alignItems={"center"}>
                            <IconButton>
                                <VideoCamera />
                            </IconButton>
                            <Typography variant="overline">
                                Video
                            </Typography>
                        </Stack>
                    </Stack>

                    <Divider />

                    <Stack spacing={0.5}>
                        <Typography variant="article">About</Typography>
                        <Typography variant="body2">Not spacify</Typography>
                    </Stack>

                    <Divider />

                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Typography variant="subtitle2">Media, Link & Docs</Typography>
                        <Button endIcon={<CaretRight />}>401</Button>
                    </Stack>

                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                        {[1, 2, 3].map((el) => (
                            <Box>
                                <img src={faker.image.food()} alt={faker.name.fullName()} />
                            </Box>
                        ))}
                    </Stack>

                    <Divider />
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Stack direction={"row"} spacing={2} alignItems={"center"}>
                            <Star size={21} />
                            <Typography variant="subtitle2">Starred Message</Typography>
                        </Stack>
                        <IconButton>
                            <CaretRight />
                        </IconButton>
                    </Stack>

                    <Divider />

                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Stack direction={"row"} spacing={2} alignItems={"center"}>
                            <Bell size={21} />
                            <Typography variant="subtitle2">Mute Notifications</Typography>
                        </Stack>
                        <AntSwitch />
                    </Stack>

                    <Divider />

                    <Typography>1 group in common</Typography>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                        <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                        <Stack spacing={0.5}>
                            <Typography variant="subtitle2">Coding Monk</Typography>
                            <Typography variant="caption">Owl, Parrot, You</Typography>
                        </Stack>
                    </Stack>

                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        <Button startIcon={<Prohibit />} fullWidth variant="outlined">
                            Block
                        </Button>
                        <Button startIcon={<Trash />} fullWidth variant="outlined">
                            Delete
                        </Button>
                    </Stack>


                </Stack>
            </Stack>
        </Box>
    );
};

export default Contact;