import React, { createContext, useEffect, useState } from "react";
export const Context = createContext();
const ApiContext = ({ children }) => {
  const [apiData, setApiData] = useState(localStorage.data?JSON.parse(localStorage.data):[]);
  const [keyword, setKeyword] = useState("");
  const [imageId, setImageId] = useState("");
  const [imageDetails, setImageDetails] = useState("");
  const [loader,setLoader] = useState(false);
  const [imageDetailLoader,setImageDetailLoader] = useState(false);
  const getApiData = async () => {
    try{
    setLoader(true);
    const url = `${process.env.REACT_APP_BASE_URL}/photos/?client_id=CL6uKaUNLSJeXZCKGt69uH3Vh-TkpYZWZpW-WRUtXfc&per_page=23`;
    const responseData = await fetch(url);
    const data = await responseData.json();
    localStorage.data = JSON.stringify(data);
    setApiData(data);
    setLoader(false);
    }
    catch(err){
    console.log(err.message);
    }

  };
  useEffect(() => {
    if(!keyword){
   getApiData();
    }
  }, [keyword]);

  return (
    <Context.Provider value={{imageDetailLoader,setImageDetailLoader,loader,setLoader, apiData, setApiData, keyword, setKeyword,imageId,setImageId ,imageDetails,setImageDetails}}>
      {children}
    </Context.Provider>
  );
};

export default ApiContext;
