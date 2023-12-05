import { Box, Stack } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";


const Conversation = () => {

    const theme = useTheme();
    return (
        <Stack height={"100%"} maxHeight={"100vw"} width={"auto"}>
            {/* Chat Header */}
            <Header />
            {/* Msg */}
            <Box sx={{ flexGrow: 1, overflowY: "scroll" }}>
                <Message />
            </Box>

            {/* Chat Footer */}
            <Footer />

        </Stack>
    )
}

export default Conversation