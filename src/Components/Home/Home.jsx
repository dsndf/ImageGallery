import Hero from "../Hero/Hero";
import Gallery from "../Gallery/Gallery";
import { Fragment } from "react";
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
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import ImageModal from "../ImageModal/ImageModal";
const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
return (  
      <Fragment>
      <Hero />
      <Gallery  onOpen={onOpen}  />         
      <ImageModal  isOpen={isOpen} onClose={onClose} />
      </Fragment> 
      );
};
export default Home;
