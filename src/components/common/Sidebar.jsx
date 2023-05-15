import React from 'react'
import Twitter from "../../components/twitter";
import Discord from "../../components/discord";
import Telegram from "../../components/telegram";
import SignIn from "../../components/signIn";
import Help from "../../components/help";
import Setting from "../../components/setting";
import Add from "../../components/add";
import { Box, Heading, Text } from '@chakra-ui/react';
const Sidebar = () => {
    return (
        <Box bg={"#202027"} width={"300px"} height={"100vh"} shadow={'lg'}>
            <Box
                width={"280px"}
                height={"43px"}
                justifyContent={"space-between"}
                display={"flex"}
                mt={4}
                border={"2px"}
                mx={"10px"}
                borderColor={"gray.600"}
                borderRadius={"0.4rem"}
                py={"8px"}
                px={'10px'}
            >
                <Heading className="newchat" color={"#B6B6C3"} fontWeight={"light"} fontSize={"md"}>
                    New Chat
                </Heading>
                <Add />
            </Box>
            <Box mt={"15px"} mx={"15px"} height={"54vh"}>
                <Text fontSize={"sm"}>
                    <span style={{ color: "#7BE57B" }}>Sign in  </span>
                    <span style={{ color: "#B6B6C3" }}>
                        to be able to save sessions and manage your accounts
                    </span>
                </Text>
            </Box>
            <Box>
                <Box display={"flex"} ml={"13px"} my="30px" px="10px" gap={"3"}>
                    <SignIn />
                    <Text fontSize={"sm"} color={"#B6B6C3"}>
                        Sign in
                    </Text>
                </Box>

                <Box display={"flex"} ml={"13px"} my="30px" px="10px" gap={"3"}>
                    <Help />{" "}
                    <Text fontSize={"sm"} color={"#B6B6C3"}>
                        Help
                    </Text>
                </Box>
                <Box display={"flex"} ml={"13px"} my="30px" px="10px" gap={"3"}>
                    <Setting />{" "}
                    <Text fontSize={"sm"} color={"#B6B6C3"}>
                        Setting
                    </Text>
                </Box>

                <Box display={"flex"} my={"50px"}>
                    <Box
                        bg={"#383844"}
                        borderRadius={"0.5rem"}
                        width={"50px"}
                        height={"40px"}
                        ml={"25px"}
                        mr={"10px"}
                        px={"15px"}
                        py={"9px"}
                    >
                        <Twitter />
                    </Box>
                    <Box
                        bg={"#383844"}
                        borderRadius={"0.5rem"}
                        width={"50px"}
                        height={"40px"}
                        mx={"10px"}
                        px={"15px"}
                        py={"9px"}
                    >
                        <Discord />
                    </Box>
                    <Box
                        bg={"#383844"}
                        borderRadius={"0.5rem"}
                        width={"50px"}
                        height={"40px"}
                        mx={"10px"}
                        px={"13px"}
                        py={"9px"}
                    >
                        <Telegram />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar