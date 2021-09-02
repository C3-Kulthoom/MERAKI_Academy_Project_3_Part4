import React from 'react'
import { useState  , useEffect} from "react";
import axios from "axios"
export default function Dashboard() {
    
const [ articles, setArticles] = useState([{title: " knqksanK"  ,  discription: "jdkbjscbjscb bcnb jjjncjnj"}])
const [title ,setTitle] = useState([{title: "IAM UPDATED"  ,  discription: "jdkbjscbjscb bcnb jjjncjnj"}])
const [description ,setDiscription] = useState([{title: " IAM UPDATED "  ,  discription: "jdkbjscbjscb bcnb jjjncjnj"}])

let [massage, setMassage] = useState("");
const  getAll =()=>{

    axios.get(`http://localhost:5000/articles`).then((res) => {
        console.log(res.data.articles);
        setArticles(res.data.articles);
    });}
   const deleteart =(_id)=>{

    axios.delete(`http://localhost:5000/articles/${_id}`).then((res) => {
        console.log(res.data.articles);
     getAll();
     setMassage("Success delete article")
    });
   }

   const updateart =(_id)=>{

    let newup ={title,description}
    axios.put(`http://localhost:5000/articles/${_id}`,newup).then((res) => {
        console.log(res.data.articles);
      getAll();
      setMassage("Success updated")
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
              <input type= "text" placeholder ="update title"  onChange={(e)=>{setTitle(e.target.value)}}/>
              <input type= "text" placeholder ="update description"onChange={(e)=>{setDiscription(e.target.value)}}/>
            <div style ={{display:'flex' }}> 
              <button style={{backgroundColor:"red"}} onClick={()=>{deleteart(e._id)}}> X  </button>
              <button style={{backgroundColor:"blue"}} onClick={()=>{updateart(e._id)}}> UPDATE </button>
              </div>
              <p>{massage}</p>
              </div>)})}
        
        
        </div>

        </>
    )
}