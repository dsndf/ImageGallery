import React from 'react'
import './Loader.css'
import { Box, Container, Text, VStack } from '@chakra-ui/react'
const Loader = ({text1,text2}) => {
  return (
 <Container   maxHeight={"full"}  padding={20}  maxWidth={"100vw"}  >
 <VStack  justifyContent={"center"} alignItems={"center"}  height={"full"} >
 <div className="three-body">
<div className="three-body__dot"></div>
<div className="three-body__dot"></div>
<div className="three-body__dot"></div>
</div>
<Box fontWeight={600} textColor={"gray.400"} textAlign={"center"}>
<Text>{text1?text1:"Loading some awesome"}</Text>
<Text>{text2?text2:"Images..."}</Text>
</Box>
</VStack>
        </Container>

  )
}

export default Loader
