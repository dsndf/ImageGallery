import { HStack, Link, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { Context } from "../../Context/ApiContext";
import Loader from "../Loader/Loader";
const Gallery = ({ onOpen }) => {
  const { apiData, setImageDetails, loader, setImageDetailLoader } =
    useContext(Context);
  const c1Data = apiData && apiData.slice(0, 6);
  const c2Data = apiData && apiData.slice(6, 12);
  const c3Data = apiData && apiData.slice(12, 18);
  const columns = [c1Data, c2Data, c3Data];
  const getImageDetailHandler = (imageId) => {
    setImageDetailLoader(true);
    onOpen();
    getImageDetails(imageId);
  };
  const getImageDetails = async (imageId) => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/photos/${imageId}/?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setImageDetails(data);
      setImageDetailLoader(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  if (loader) {
    return <Loader />;
  }
  return (
    <HStack
      wrap={"wrap"}
      alignItems={"start"}
      justifyContent={"center"}
      paddingY={10}
    >
      {columns &&
        columns.map((column, i) => {
          return (
            <VStack key={i} justifyContent={"start"}>
              {column &&
                column.map((v) => {
                  return (
                    <Link
                      key={v?.id}
                      onClick={() => getImageDetailHandler(v?.id)}
                    >
                      <ImageCard
                        username={v?.user?.name}
                        profileImage={v?.user?.profile_image?.small}
                        likes={v?.likes}
                        imageUrl={v?.urls?.regular}
                      />
                    </Link>
                  );
                })}
            </VStack>
          );
        })}
    </HStack>
  );
};

export default Gallery;
