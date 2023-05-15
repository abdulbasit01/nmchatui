import React, { useState } from 'react'
import { Box, Button, Flex, Textarea } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import Send from "../components/send";
import Logo from "../components/logo";
import Copy from "../components/copy";
import Exapmle from "../components/exapmle";
import { Input } from "@chakra-ui/react";
import '../index.css'
import axios from "axios";
import Sidebar from '../components/common/Sidebar';
import Current from '../components/current';
import Save from '../components/save';
import Export from '../components/export';
import Brain from '../components/brain';

const Prompt = () => {
    const [currentTask, updateTasks] = useState(
        [
            {
                t: "Research and implement new recipe ideas to add variety to the menu.",
            },
            {
                t: "Research and implement new recipe ideas to add variety to the menu.",
            },
            {
                t: "Research and implement new recipe ideas to add variety to the menu.",
            },
            {
                t: "Research and implement new recipe ideas to add variety to the menu.",
            }
        ]
    )
    const [prompt, setPrompt] = useState("")
    const [prompts, setPrompts] = useState([{
        q: "What is a DDoS attack and how can it affect cryptocurrency exchanges?",
        a: null
    }
    ])
    const getResponse = async () => {
        if (!prompt || prompt === '') {
            return;
        }
        // const formData = new FormData()
        // formData.append('text', prompt)
        // axios.post("https://api.airpet.ai/api/blockchain/", formData).then(resp => {
        //     const a = resp?.data?.response
        //     const response = {
        //         q: prompt,
        //         a: a
        //     }
        //     const deepPromots = [...prompts]
        //     deepPromots.unshift(response)
        //     setPrompts(deepPromots)
        //     setPrompt("")
        // }).catch(error => console.log(error))
    }
    return (
        <Box display={"flex"} textColor={'white'}>
            <Sidebar />

            <Box className="leftbg" bg={"transparent"} width={"full"} pt={"30px"}>
                <Box mt={"30px"} height={"600px"} maxHeight={"600px"} overflowY={"scroll"} css={{ "&::-webkit-scrollbar": { display: "none" } }}>
                    {prompts.map((text) => {
                        return (
                            <Box py="3">
                                <Box
                                    bg={"#3F3F4C"}
                                    mx={"auto"}
                                    borderRadius={"8px"}
                                    width={"950px"}
                                    maxWidth={"950px"}
                                >
                                    {" "}
                                    <Text
                                        fontFamily={"Work Sans"}
                                        fontWeight={400}
                                        fontSize={"18px"}
                                        py={"10px"}
                                        px={"20px"}
                                        my={"5px"}
                                        color={"#B6B6C3"}

                                    >
                                        {" "}
                                        {text.q}
                                    </Text>
                                </Box>
                                <Box>
                                    {text?.a && <>
                                        <Box
                                            bg={"#353541"}
                                            borderTopRadius={"8px"}
                                            display={"flex"}
                                            justifyContent={"space-between"}
                                            alignItems={"center"}
                                            mt="2"
                                            mx={"auto"}
                                            px="3"
                                            py="4"
                                            width={"755px"}
                                        >
                                            <Box></Box>
                                            <Box><Copy /></Box>
                                        </Box>
                                        <Text
                                            bg={"#353541"}
                                            mx={"auto"}
                                            borderBottomRadius={"8px"}
                                            width={"755px"}
                                            py="1"
                                            px="3"
                                            color={"#B6B6C3"}
                                            className="newrespo"
                                        >

                                            <Textarea width="full" readOnly border={0} rows={15}
                                                css={{ "&::-webkit-scrollbar": { display: "none" } }}
                                                value={text?.a ?? text.a} />

                                        </Text>
                                    </>}
                                </Box>
                            </Box>
                        )
                    })}
                    <Flex
                        py="3"
                        mx={"auto"}
                        borderRadius={"8px"}
                        width={"950px"}
                        mxWidth={"950px"}
                        justifyContent={"space-between"}

                    >
                        <Box
                            flex={"5"}
                            bg="#3f3f4c"
                            mx={"auto"}
                            borderRadius={"8px"}
                            height={"450px"}
                            pt="3"
                            maxHeight={"450px"}
                        >
                            <Box>
                                <Box display={"flex"} justifyContent={"flex-end"}>
                                    <Text me="4">
                                        <Save />
                                    </Text>
                                    <Text me="4">
                                        <Export />
                                    </Text>
                                </Box>
                                {/* thinking */}
                                <Box
                                    px="6"
                                    py="6"
                                    color="#b6b6c3"
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Brain />
                                    <Text mx="2" as="b">
                                        THINKING
                                    </Text>
                                </Box>
                                <Box
                                    width={"full"}
                                    p="0"
                                    px="6"
                                    color="#b6b6c3"
                                >
                                    <Text >
                                        To perform the sub-task of researching and implementing new recipe ideas to add variety to the menu in order to achieve the overall objective of making better dishes, I suggest the following steps:
                                    </Text>
                                </Box>
                                <Box borderBottom={"2px"} borderColor={"#49495A"} py="4">
                                </Box>
                                {/* thinking */}
                                {/* thoughts */}
                                <Box
                                    px="6"
                                    py="6"
                                    color="#b6b6c3" display={"flex"} alignItems={"center"} >
                                    <Brain />
                                    <Text mx="2" as="b">
                                        THOUGHT
                                    </Text>
                                </Box>
                                <Box
                                    width={"full"}
                                    p="0"
                                    px="6"
                                    color="#b6b6c3"
                                >
                                    <Text >
                                        To perform the sub-task of researching and implementing new recipe ideas to add variety to the menu in order to achieve the overall objective of making better dishes, I suggest the following steps:
                                    </Text>
                                </Box>
                                <Box borderBottom={"2px"} borderColor={"#49495A"} py="4">
                                </Box>
                                {/* thoughts */}

                            </Box>
                        </Box>
                        <Box
                            flex={"2"}
                            bg="#3f3f4c"
                            mx="2"
                            borderRadius={"8px"}
                            px="5"
                            height={"450px"}
                            maxHeight={"450px"}
                            overflowY={"scroll"} css={{ "&::-webkit-scrollbar": { display: "none" } }}
                        >
                            <Box
                                pt="3"
                                display={"flex"}
                                justifyContent={"center"}

                            >
                                <Text mx="2">
                                    <Current />
                                </Text>
                                <Text mx="2" color={"#B6B6C3"}>
                                    Current Task
                                </Text>
                            </Box>
                            {currentTask.map((task) => {
                                return (
                                    <Box
                                        pt="3"
                                        display={"flex"}
                                        justifyContent={"center"}
                                        color="#b6b6c3"
                                        fontSize={"sm"}

                                    >
                                        <Box
                                            borderRadius={"10px"}
                                            border={"1px"}
                                            p="2"
                                            borderColor={"#4E7248"}
                                        >
                                            {task.t}
                                        </Box>
                                    </Box>
                                )
                            })}

                        </Box>
                    </Flex>
                </Box>

                <Box
                    position="relative"
                    style={{ bottom: "-0" }}
                    display={"flex"}
                    flexDir={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    bg={"#353541"}
                    borderRadius={"12px"}
                    mx={"auto"}
                    width={"800px"}
                    height={'60px'}
                    px={"10px"}
                >
                    <Input
                        fontFamily={"Work Sans"}
                        fontWeight={400}
                        fontSize={"18px"}
                        variant='unstyled'
                        placeholder="Start typing a message"
                        value={prompt}
                        onChange={({ target }) => { setPrompt(target.value) }}
                    />

                    <Text onClick={getResponse}><Send /></Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Prompt