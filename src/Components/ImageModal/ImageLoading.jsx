import React from "react";

const ImageLoading = () => {
  return (
    <ModalContent bg={"transparent"} shadow={"none"}>
      <ModalBody>
        <Loader text1={"Loading Awesome"} text2={"Image..."} />
      </ModalBody>
    </ModalContent>
  );
};

export default ImageLoading;
