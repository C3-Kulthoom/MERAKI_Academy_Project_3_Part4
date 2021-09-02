import React from 'react'
import { useState  , useEffect} from "react";
import axios from "axios"
import { useParams} from "react-router-dom";
export default function Dashboard() {
const [ articles, setArticles] = useState([{title: " knqksanK"  ,  discription: "jdkbjscbjscb bcnb jjjncjnj"}])
const [updatedTitle ,setupdatedTitle] = useState([{title: "IAM UPDATED"  ,  discription: "jdkbjscbjscb bcnb jjjncjnj"}])
const [updateddescription ,setupdateddescription] = useState([{title: " IAM UPDATED "  ,  discription: "jdkbjscbjscb bcnb jjjncjnj"}])
const newup ={updatedTitle,updateddescription}
const  getAll =()=>{

    axios.get(`http://localhost:5000/articles`).then((res) => {
        console.log(res.data.articles);
        setArticles(res.data.articles);
    });}
   const deleteart =(_id)=>{

    axios.delete(`http://localhost:5000/articles/${_id}`).then((res) => {
        console.log(res.data.articles);
     getAll();
    });
   }

   const updateart =(_id)=>{

    axios.put(`http://localhost:5000/articles/${_id}`,newup).then((res) => {
        console.log(res.data.articles);
     getAll();
    });
   }



  useEffect(() => {getAll()} , [])
    return (
        <>
    
        <div  style={{border:"solid  2px red " }} >
        <p>Dashboard</p> 
        <button className="getall" style={{border:"black  ,2px "}}   onClick={getAll}  > GET ALL ARTICLES </button> 
        </div>
         <div>
         {
        articles.map((e,i) => {
            console.log(e);
            console.log(articles);
          return (
          <div  key = {i} style ={{display:'grid'  , justifyContent:"wrap"  ,border : "2px solid"  }} >
               <div  style ={{display:'flex' }} ><h1>{e.title} </h1>  </div>
              <p>{e.description}</p> 
              <input type= "text" placeholder ="update title"  onChange={(e)=>{setupdatedTitle(e.target.value)}}/>
              <input type= "text" placeholder ="update description"onChange={(e)=>{setupdateddescription(e.target.value)}}/>
            <div style ={{display:'flex' }}> 
              <button style={{backgroundColor:"red"}} onClick={()=>{deleteart(e._id)}}> X  </button>
              <button style={{backgroundColor:"blue"}} onClick={()=>{updateart(e._id)}}> UPDATE </button>
              </div>
              </div>)})}
        
        
        </div>

        </>
    )
}