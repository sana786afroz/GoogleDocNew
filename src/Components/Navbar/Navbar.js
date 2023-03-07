// import React from 'react'
// import style from './Navbar.module.css'
// export default function Navbar(){
//     return(
//       <div className={style.home}>
//         <h1>this is Navbar</h1>
//       </div>
//     )
// }
import React, { useState } from "react";

import { Icons } from "../../Const";
import { FcDocument } from "react-icons/fc";
import style from "./Navbar.module.css";
import {FcDownload} from "react-icons/fc"

export default function Navbar() {
  function handleAction(element) {
    console.log(element.action);
    document.execCommand(`${element.action}`);
  }
  function handledownload(){
    
  }
  return (
    <>
      <div>
      <img
          src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
          alt="img"
        /><span className={style.google}>Google Document</span>
      </div>

      <div className={style.main}>
        <div className={style.logo}>
          <div className={style.docIcon}> </div>

          {Icons.map((element, index) => (
            <button
              className={style.btn}
              onClick={() => handleAction(element)}
              key={index}
            >
              {element.icons}
            </button>
          ))}
         
        </div>

        <div className={style.page} contentEditable="true"></div>
        <div className={style.download} onClick={handledownload}><FcDownload/></div>
      </div>
    </>
  );
}
