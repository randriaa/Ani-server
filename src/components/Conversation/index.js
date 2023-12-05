import { Box, Stack } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";


const Conversation = () => {

    const theme = useTheme();
    return (
        <Stack height={"100vh"} maxHeight={"100vw"} width={"auto"} >
            {/* Chat Header */}
            <Header />
            {/* Msg */}

            <Stack sx={{
                flexGrow: 1, overflowY: "scroll",
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
            }}>
                <Message />
            </Stack >


            {/* Chat Footer */}
            <Footer />

        </Stack>
    )
}

export default Conversation