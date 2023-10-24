import { Box, HStack, Heading, Image, Text, VStack, useColorMode } from '@chakra-ui/react'
import React from 'react'
import {BiLike} from 'react-icons/bi';
const ImageCard = ({username,imageUrl,likes,profileImage}) => {
const {colorMode} = useColorMode();  
  return (
<Box  padding={0}  bg={colorMode==="dark"?"gray.700":"white"}   margin={5}   overflow={"hidden"}  border="1px solid " borderColor={colorMode==="dark"?"transparent":"gray.300"}  rounded={"lg"} height={"auto"} width={["340px","340px","340px","400px"]} >
<VStack padding={0} >
  <Image src={imageUrl}  ></Image>
 <HStack width={'full'} justifyContent={"space-between"} padding={4}>
  <HStack  >
    <Image src={profileImage} height={10} width={10} rounded={"full"} ></Image>
    <VStack alignItems={"start"}  >
    <Heading size={"sm"}  fontWeight={"bold"}>{username}</Heading>
    <Text  fontSize={"13px"} marginTop={"-5px"} fontWeight={600} textColor={"gray.500"} ><i> @julirobert</i></Text>
    </VStack>
  </HStack>
  <HStack>
  <BiLike  fontSize={"20px"} />
  <Text fontWeight={700} >{likes}k</Text>
  </HStack>
 </HStack>

</VStack>
    
</Box>
  )
}

export default ImageCard
