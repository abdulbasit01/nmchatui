import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import Send from "./components/send";
import Twitter from "./components/twitter";
import Discord from "./components/discord";
import Telegram from "./components/telegram";
import SignIn from "./components/signIn";
import Help from "./components/help";
import Setting from "./components/setting";
import Add from "./components/add";
import Logo from "./components/logo";
import Copy from "./components/copy";
import Exapmle from "./components/exapmle";
import { Input } from "@chakra-ui/react";

import './index.css'
import axios from "axios";
const App = () => {
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
      <Box bg={"#202027"} width={"300px"} height={"100vh"}>
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
                  >
                    {" "}
                    {text.q}
                  </Text>
                </Box>
                <Box>
                  {text?.a && <>
                    <Box
                      bg="#202027"
                      borderTopRadius={"8px"}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      mt="2"
                      mx={"auto"}
                      px="3"
                      py="1"
                      width={"755px"}
                    >
                      <Box></Box>
                      <Box><Copy /></Box>
                    </Box>
                    <Text
                      bg={"#000"}
                      mx={"auto"}
                      borderBottomRadius={"8px"}
                      width={"755px"}
                      py="1"
                      px="3"
                      className="newrespo"
                    >

                      {text?.a ?? text.a}
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

export default App