import React from "react";
import s from "./Post.module.css";

export default function Post(){
    return (
      <div className={s.main}>
          <div>
              <img className={s.avatar} src="avatar.jpg" alt="avatar"/>
          </div>
          <div>
              <span>Some text here</span>
              <h5>Likes: 12 people</h5>
          </div>
      </div>
    );
}