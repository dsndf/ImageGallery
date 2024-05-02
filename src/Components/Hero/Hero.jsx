import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Heading,
  Input,
  Link,
  ListItem,
  Switch,
  Text,
  UnorderedList,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import { Context } from "../../Context/ApiContext";
import { searchHandler } from "../../utils/Debouncing";
const Hero = () => {
  const { keyword, setKeyword, setApiData, setLoader, loader } =
    useContext(Context);
  const { colorMode, toggleColorMode } = useColorMode();
  const [state, setState] = useState(""); // THIS IS FOR SECOND SEARCH BAR
  const [isOpen, setIsOpen] = useState(false);

  const drawerCloseHandler = () => {
    setIsOpen(false);
  };
  const drawerOpenHandler = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (keyword) {
      searchHandler(setApiData, setLoader, keyword);
    } else if (state) {
      searchHandler(setApiData, setLoader, state);
    }
    return;
  }, [keyword, state]);
  return (
    <Container maxWidth={"100vw"} padding={0}>
      <Box paddingY={"5"} paddingX={[8, 8, 8, 20]} float={""}>
        <HStack
          justifyContent={[
            "space-between",
            "space-between",
            "space-between",
            "space-around",
          ]}
        >
          <Link href="/">
            {" "}
            <Heading
              width={"auto"}
              size={"lg"}
              fontWeight={"light"}
              fontFamily={"'Lobster', sans-serif"}
            >
              Image Gallery
            </Heading>
          </Link>

          <Box position={"relative"} display={["none", , "none", "block"]}>
            <GoSearch
              style={{
                top: "13px",
                left: "10px",
                position: "absolute",
                zIndex: 1,
                fontSize: "20px",
                color: "gray",
              }}
            />
            <Input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              textColor="gray.200"
              _placeholder={{ color: "gray.400" }}
              _focusVisible={{ outline: "none" }}
              paddingY={"6"}
              paddingLeft={"10"}
              fontSize={"14px"}
              rounded={"md"}
              bgColor={colorMode === "light" ? "gray.100" : "gray.700"}
              variant={"outline"}
              _focus={{ borderColor: "transparent" }}
              border={"none"}
              placeholder="Search images here"
              width={"md"}
            ></Input>
          </Box>
          <UnorderedList
            display={["none", , "none", "block"]}
            listStyleType={"none"}
            fontWeight={"bold"}
            fontSize={"15px"}
          >
            <HStack spacing={"5"}>
              <ListItem>Explore</ListItem>
              <ListItem>Collection</ListItem>
              <ListItem>Community</ListItem>
            </HStack>
          </UnorderedList>
          <HStack display={["none", "none", "none", "flex"]}>
            <Text fontSize={"15px"} fontWeight={"bold"}>
              Dark Mode
            </Text>
            <Switch
              isChecked={colorMode === "dark"}
              onChange={toggleColorMode}
            />
          </HStack>
          <HStack display={["flex", "flex", "flex", "none"]}>
            <GoSearch fontSize={25} />
            <AiOutlineMenu onClick={drawerOpenHandler} fontSize={25} />
          </HStack>
        </HStack>
        <Drawer isOpen={isOpen} onClose={drawerCloseHandler} placement="right">
          <DrawerOverlay />

          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Dark Mode</DrawerHeader>
            <DrawerBody>
              <Switch
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
              />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      {(!loader && keyword ? true : false) && (
        <Box>
          <Heading
            size={"2xl"}
            textColor={"gray.600"}
            padding={[10, 10, 10, 20]}
          >
            {keyword}
          </Heading>
        </Box>
      )}
      {!keyword && (
        <Box
          margin={0}
          position={"relative"}
          bgImage={
            "https://images.unsplash.com/photo-1514496959998-c01c40915c5f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc2MTR8MHwxfHNlYXJjaHw1fHxzbm93JTIwbW91bnRhaW5zfGVufDB8fHx8MTY5NzcwMjkwMnww&ixlib=rb-4.0.3&q=85"
          }
          backgroundPosition={"center"}
          backgroundSize={"cover"}
          height={"350px"}
          zIndex={0}
        >
          <Box
            zIndex={1}
            position={"absolute"}
            top={0}
            bottom={0}
            right={0}
            left={0}
            bgColor={"black"}
            opacity={"0.5"}
          ></Box>
          <Box
            zIndex={10}
            position={"absolute"}
            top={0}
            bottom={0}
            right={0}
            left={0}
          >
            <VStack
              justifyContent={"center"}
              height={"100%"}
              textAlign={"center"}
            >
              <Heading textColor={"white"} fontWeight={500} marginBottom={3}>
                Download High Quality Images by creators
              </Heading>
              <Text textColor={"gray.400"}>
                Over 2.4 millions+ stock Images by our tailented community
              </Text>
              <Box position={"relative"} width={["80%", , , "50%"]}>
                <GoSearch
                  style={{
                    top: "17px",
                    left: "15px",
                    position: "absolute",
                    zIndex: 1,
                    fontSize: "24px",
                    color: "gray",
                  }}
                />
                <Input
                  type="text"
                  textColor="gray.600"
                  _placeholder={{ color: "gray.500" }}
                  _focusVisible={{ outline: "none" }}
                  fontSize={[12, 12, 14]}
                  placeholder="Search high resolution images here"
                  paddingY="7"
                  bgColor="white"
                  paddingLeft={"12"}
                  onChange={(e) => setState(e.target.value)}
                ></Input>
              </Box>
            </VStack>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Hero;
