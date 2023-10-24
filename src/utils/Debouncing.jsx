const debouncing = ()=>{
let tid;
return  (setApiData,setLoader,keyword)=>{
if(tid){
    clearTimeout(tid);
    console.log("clear");
} 
setLoader(true);
tid = setTimeout(async ()=>{
    try{
    console.log("called afetr 3 sec")
    const url = `${process.env.REACT_APP_BASE_URL}/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_KEY}&query=${keyword}&per_page=24`;
    const responseData = await fetch(url);
    const data = await responseData.json();
    setApiData(data.results); 
    setLoader(false);}
    catch(err){
        console.log(err.message);
    }
},3000)
  
}


} 

export const searchHandler = debouncing();