import React from "react";
import s from "./Post.module.css";

export default function Post(props){
    return (
      <div className={s.main}>
          <div>
              <img className={s.logo} src="https://image.flaticon.com/icons/png/128/168/168868.png" alt="your avatar"/>
          </div>
          <div>
              <span className={s.text}>{props.text}</span>
              <h5>Likes: {props.likes} people</h5>
          </div>
      </div>
    );
}