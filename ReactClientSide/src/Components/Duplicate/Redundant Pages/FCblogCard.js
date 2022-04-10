import React from "react";
import classes from "./blogcard.module.css";

const BlogCard = (props) => {
  return (
    <div className={classes.blogcard} key={props.id}>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
};

export default BlogCard;
