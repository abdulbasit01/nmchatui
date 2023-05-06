import React from "react";
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
import Exapmle from "./components/exapmle";
import { Input } from "@chakra-ui/react";
import './index.css'
const App = () => {
  return (
    <Box display={"flex"} textColor={'white'}>
      <Box bg={"#202027"} width={"240px"} height={"100vh"}>
        <Box
          width={"220px"}
          height={"40px"}
          justifyContent={"space-between"}
          display={"flex"}
          mt={5}
          border={"2px"}
          mx={"10px"}
          borderColor={"gray.600"}
          borderRadius={"0.4rem"}
          pt={"6px"}
          pr={'4px'}
        >
          <Heading fontSize={"md"} fontFamily={"Work Sans"} px={'10px'}>
            New Chat
          </Heading>
          <Add />
        </Box>
        <Box mt={"15px"} mx={"15px"} height={"60vh"}>
          <Text fontSize={"sm"}>
            <span style={{ color: "#7BE57B" }}>Sign in</span>  to be able to save sessions and manage your accounts
          </Text>
        </Box>
        <Box>
          <Box display={"flex"} ml={"13px"} gap={"3"}>
            <SignIn />{" "}
            <Text fontSize={"sm"}>
              Sign in
            </Text>
          </Box>

          <Box mt={"15px"}>
            <Box display={"flex"} ml={"13px"} gap={"3"}>
              <Help />{" "}
              <Text fontSize={"sm"}>
                Help
              </Text>
            </Box>
          </Box>
          <Box mt={"15px"}>
            <Box display={"flex"} ml={"13px"} gap={"3"}>
              <Setting />{" "}
              <Text fontSize={"sm"}>
                Setting
              </Text>
            </Box>
          </Box>

          <Box display={"flex"} my={"25px"}>
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

      <Box bg={"transparent"} width={"full"} pt={"30px"}>
        <Box display={"flex"} textAlign={'center'} flexDir={'column'} justifyContent={"center"} alignItems={'center'} width={"full"}>
          <Box display={'flex'} flexDir={"column"} gap={"10px"} justifyContent={'center'} alignItems={'center'}>
            <Logo />
            <Exapmle />
          </Box>
          <Box my="20px">
            <Heading mt={"10px"} textAlign={'center'} fontFamily={"Work Sans"} fontSize={'xl'}>Examples</Heading>
          </Box>
        </Box>
        <Box mt={"30px"} height={"370px"}>
          <Box
            bg={"#3F3F4C"}
            mx={"auto"}
            borderRadius={"12px"}
            width={"600px"}
            height={"67px"}
          >
            {" "}
            <Text
              fontFamily={"Work Sans"}
              fontWeight={400}
              fontSize={"18px"}
              py={"10px"}
              px={"10px"}
              my={"10px"}
            >
              {" "}
              How do i secure my assets on the blockchain
            </Text>
          </Box>
          <Box
            bg={"#3F3F4C"}
            mx={"auto"}
            borderRadius={"12px"}
            width={"600px"}
            height={"67px"}
          >
            {" "}
            <Text
              fontFamily={"Work Sans"}
              fontWeight={400}
              fontSize={"18px"}
              py={"10px"}
              px={"10px"}
              my={"10px"}
            >
              {" "}
              How can you avoid falling victim to a crypto scam or Ponzi scheme?
            </Text>
          </Box>
          <Box
            bg={"#3F3F4C"}
            mx={"auto"}
            borderRadius={"12px"}
            width={"600px"}
            height={"67px"}
          >
            {" "}
            <Text
              fontFamily={"Work Sans"}
              fontWeight={400}
              fontSize={"18px"}
              py={"10px"}
              px={"10px"}
              my={"10px"}
            >
              What is a DDoS attack and how can it affect cryptocurrency
              exchanges?
            </Text>
          </Box>
        </Box>

        <Box
          position="relative"
          style={{ bottom: "-50px" }}
          display={"flex"}
          flexDir={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          bg={"#3F3F4C"}
          borderRadius={"12px"}
          mx={"auto"}
          width={"650px"}
          height={'60px'}
          px={"10px"}
          mb={'10px'}
        >
          <Input
            fontFamily={"Work Sans"}
            fontWeight={400}
            fontSize={"18px"}
            variant='flushed'
            border="0"
            placeholder="Start typing a message"
          />

          <Send />
        </Box>
      </Box>
    </Box>
  )
}

export default App