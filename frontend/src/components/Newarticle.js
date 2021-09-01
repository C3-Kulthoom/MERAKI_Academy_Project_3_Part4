import React from 'react'
import { useState } from 'react';
import axios from "axios"


export const NewArticle=({token})=> {
    let [title, setTitle] = useState("");
    let [discription, setDiscription] = useState("");
    let [massage, setMassage] = useState("");
    const creatNewArt =()=>
{

        let newArt = {
            title ,
            discription
          };
          axios.post(`http://localhost:5000/NewArticle`,`headers:{
            'Authorization': Bearer${token}
            } `, newArt).then((res) => {
            console.log(res)
           
     
         });
         setMassage(("user added  successfully "))
     }  
        


    return (
        <>
        <div>
            NEW ARTICLE 
        </div>
        <div> 
<input type ="text" placeholder ="article title here"   onChange={(e) => {
          setTitle((title = e.target.value)) }}/>
            </div>
            <br/>
            <div> 
<textarea placeholder="article discription here"  onChange={(e) => {
          setDiscription((discription = e.target.value)) }}/>
        </div>

        <button  onClick={creatNewArt} >
creat new article
        </button>
        <p>{massage}</p>
        </>
    )
}

export default NewArticle

