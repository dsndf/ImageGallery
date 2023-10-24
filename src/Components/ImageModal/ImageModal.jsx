import React, { useContext } from 'react'
import { Context } from '../../Context/ApiContext'
import { BiLike, BiLogoInstagram, BiLogoTwitter,BiShare,BiInfoCircle } from "react-icons/bi";
import {
    Box,
    Button,
    HStack,
    Heading,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Stack,
    Text,
    VStack,
  } from "@chakra-ui/react";
import Loader from '../Loader/Loader';
import { abbreviateNumber } from 'js-abbreviation-number';
const ImageModal = ({isOpen,onClose}) => {
const {imageDetails,imageDetailLoader} = useContext(Context); 
  return (
    <Modal isOpen={isOpen} onClose={onClose}   >
    <ModalOverlay />
 {
  !imageDetailLoader?<ModalContent
      position={"relative"}   
      maxWidth={"80%"}
      rounded={"lg"}
      padding={0}
    >
      <ModalCloseButton
        position={"absolute"}
        top={"-5"}
        zIndex={"10"}
        right={"-4"}
        padding={5}
        bgColor={"#ffffff78"}
        rounded={"full"}
      />
      <ModalBody padding={0}  >
        <Box position={"relative"}>
          <Image
            height={"500px"}
            width={"100%"}
          src={imageDetails?.urls?.full}
          ></Image>
          <Box padding={6} position={"absolute"} width={"full"} bottom={0}>
         <Stack justifyContent={"space-between"} flexDirection={["column","column","row"]}  >
         <Box   >
          <HStack >
            <Button fontSize={"13px"} fontWeight={"300"}  border={"1px solid white"} bgColor={"transparent"} textColor={"white"} gap={2} > <BiShare /> share</Button>
            <Button   fontSize={"13px"} fontWeight={"300"}  border={"1px solid white"} bgColor={"transparent"} textColor={"white"}  gap={2}   ><BiInfoCircle/> info</Button>
          
          </HStack>
         </Box>
         <Button  textColor={"white"} bgColor={"green.400"} fontWeight={500} fontSize={"13px"} width={["150px","150px","auto"]}  >Download image</Button>
         </Stack>
          </Box>
        </Box>

        <Box padding={6} paddingTop={10}> 
          <Stack justifyContent={"space-between"}  flexDirection={["column","column","row"]} >
            <Stack gap={[5,5,10]}  flexDirection={["column","column","row"]}   >
              <HStack>
                <Image
                  rounded={"lg"}
                  src={imageDetails?.user?.profile_image?.medium}
                />
                <Box>
                  <VStack alignItems={"start"}>
                    <Heading fontSize={"18px"}>{imageDetails?.user?.name}</Heading>
                    <Text
                      fontSize={"14px"}
                      fontWeight={500}
                      textColor={"gray.500"}
                    >
                      <i>@{imageDetails?.user?.username}</i>
                    </Text>
                  </VStack>
                </Box>
              </HStack>
              <Box
                fontSize={"14px"}
                fontWeight={500}
                textColor={"gray.400"}
              >
                <HStack  alignItems={"center"} height={"full"} >
                  <Text>
                    <HStack gap={"-1"}>
                      <BiLogoInstagram fontSize={"19px"} />{" "}
                      <i>/{imageDetails?.user?.social?.instagram_username}</i>
                    </HStack>
                  </Text>
                  <Text>
                    <HStack gap={"0"}>
                      <BiLogoTwitter fontSize={"19px"} />
                      <i>/{imageDetails?.user?.social?.twitter_username}</i>
                    </HStack>
                  </Text>
                </HStack>
              </Box>
            </Stack>
            <HStack gap={5}>
              <Text fontWeight={600} textColor={"gray.500"} fontSize={"16px"}  >
         
                { abbreviateNumber(imageDetails?.downloads,2)} downloads
              </Text>
              <Text
            
                fontWeight={600}
                textColor={"gray.500"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
              >
                <BiLike fontSize={"20px"} /> {abbreviateNumber(imageDetails?.likes)}
              </Text>
            </HStack>
          </Stack>
          <br />
          <Heading fontWeight={700} fontSize={"15px"}>
            Related Tags
          </Heading>
          <HStack wrap={"wrap"} gap={5} paddingTop={4}>
            <Button fontSize={"13px"} textColor={"gray.500"}>
              Animal Tag
            </Button>
{
      imageDetails?.tags&&imageDetails.tags.map((v)=>{
        return <Button fontSize={"13px"} textColor={"gray.500"}>
           {v?.title}           
            </Button>
      })
}

      
          </HStack>
        </Box>
      </ModalBody>
    </ModalContent>:<ModalContent  bg={"transparent"} shadow={"none"} ><ModalBody><Loader  text1={"Loading Awesome"} text2={"Image..."}  /></ModalBody> </ModalContent>
 }
  </Modal>
  )
}

export default ImageModal
