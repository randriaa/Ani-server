import { Box, Stack } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Chat_History } from "../../data";
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from "./MsgTypes";


const Message = () => {

    const theme = useTheme();
    return (
        <Stack height={"100%"}>
            <Box width={"100%"} sx={{
                backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : "#0B2537",
            }}
                p={3}>
                <Stack spacing={3}>
                    {Chat_History.map((el) => {
                        switch (el.type) {
                            case "divider":
                                // Timeline
                                return <Timeline el={el} />
                            case "msg":
                                switch (el.subtype) {
                                    case "img":
                                        // img msg
                                        return <MediaMsg el={el} />
                                    case "doc":
                                        // Doc msg
                                        return <DocMsg el={el} />
                                    case "link":
                                        // Link msg
                                        return <LinkMsg el={el} />
                                    case "reply":
                                        // Reply msg
                                        return <ReplyMsg el={el} />
                                    default:
                                        // Text message 
                                        return <TextMsg el={el} />
                                }
                                break;
                            default:
                                return <></>;
                        }
                    })}

                </Stack>
            </Box>
        </Stack>
    )
}

export default Message