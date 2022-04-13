import React , {useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
// import BeadLoader from "react-spinners/BeatLoader";
// import BarLoader from "react-spinners/BarLoader";
// import BounceLoader from "react-spinners/BounceLoader";
import DotLoader from "react-spinners/DotLoader";
// import BarLoader from "react-spinners/BarLoader"

import "./Loader.css"

// const override = `
// display:inline;
// margin:200px auto;
// border-color:red;`;

const App = ()=>{
  const [isLoading , setIsLoading] = useState(true);
  // const [start , setStart] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
      // setStart(false);
      
    }, 2500);
  })
  return (
    <div className="loader">

      {/* <DotLoader css={override} size={30}  loading={isLoading}  /> */}
      <DotLoader size={30}  loading={isLoading}  />
    </div>
    // <div className="app">
    //   {/* hello welcome to ebarber */}
    //   {start?
    //   :
    //  ( <div className="app_start">
    //     Hello ji welcome to ebarber
    //   </div>)}
      
    // </div>
  )

}
export default App;