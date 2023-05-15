import React, { useState } from 'react'
import { Box, Textarea } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import Send from "../components/send";
import Twitter from "../components/twitter";
import Discord from "../components/discord";
import Telegram from "../components/telegram";
import SignIn from "../components/signIn";
import Help from "../components/help";
import Setting from "../components/setting";
import Add from "../components/add";
import Logo from "../components/logo";
import Copy from "../components/copy";
import Exapmle from "../components/exapmle";
import { Input } from "@chakra-ui/react";
import '../index.css'
import axios from "axios";
import Sidebar from '../components/common/Sidebar';

const Laonding = () => {
  const [prompt, setPrompt] = useState("")
  const [prompts, setPrompts] = useState([{
    q: "How do i secure my assets on the blockchain",
    a: null
  },
  {
    q: "How can you avoid falling victim to a crypto scam or Ponzi scheme?",
    a: null
  },
  {
    q: "What is a DDoS attack and how can it affect cryptocurrency exchanges?",
    a: null
  }
  ])
  const getResponse = async () => {
    if (!prompt || prompt === '') {
      return;
    }
    const formData = new FormData()
    formData.append('text', prompt)
    axios.post("https://api.airpet.ai/api/blockchain/", formData).then(resp => {
      const a = resp?.data?.response
      const response = {
        q: prompt,
        a: a
      }
      const deepPromots = [...prompts]
      deepPromots.unshift(response)
      setPrompts(deepPromots)
      setPrompt("")
    }).catch(error => console.log(error))
  }
  return (
    <Box display={"flex"} textColor={'white'}>
      <Sidebar />

      <Box className="leftbg" bg={"transparent"} width={"full"} pt={"30px"}>
        <Box display={"flex"} textAlign={'center'} flexDir={'column'} justifyContent={"center"} alignItems={'center'} width={"full"}>
          <Box display={'flex'} flexDir={"column"} gap={"10px"} justifyContent={'center'} alignItems={'center'}>
            <Logo />
            <Exapmle />
          </Box>
          <Box mt="20px">
            <Heading mt={"10px"} textAlign={'center'} fontFamily={"Work Sans"} fontSize={'xl'}>Examples</Heading>
          </Box>
        </Box>
        <Box mt={"30px"} height={"350px"} maxHeight={"350px"} overflowY={"scroll"} css={{ "&::-webkit-scrollbar": { display: "none" } }}>
          {prompts.map((text) => {
            return (
              <Box py="3">
                <Box
                  bg={"#3F3F4C"}
                  mx={"auto"}
                  borderRadius={"8px"}
                  width={"755px"}
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
        </Box>

        <Box
          position="relative"
          style={{ bottom: "-110px" }}
          display={"flex"}
          flexDir={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          bg={"#353541"}
          borderRadius={"12px"}
          mx={"auto"}
          width={"857px"}
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

export default Laonding