import React from "react";
import { useState } from "react";
import axios from "axios";

export const NewArticle = ({ token }) => {
  let [title, setTitle] = useState("");
  let [description, setDiscription] = useState("");
  let [massage, setMassage] = useState("");
  const creatNewArt = () => {
    let newArt = {
      title,
      description,
    };
    axios
      .post(`http://localhost:5000/articles`, newArt, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setMassage("article added succesfully");
      })
      .catch((err) => {
        console.log(err);
        setMassage(
          "Error happened while creating a new article, please try again"
        );
      });
  };

  return (
    <>
      <div>NEW ARTICLE</div>
      <div>
        <input
          type="text"
          placeholder="article title here"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <textarea
          placeholder="article discription here"
          onChange={(e) => {
            setDiscription(e.target.value);
          }}
        />
      </div>

      <button onClick={creatNewArt}>creat new article</button>
      <p>{massage}</p>
    </>
  );
};

export default NewArticle;
