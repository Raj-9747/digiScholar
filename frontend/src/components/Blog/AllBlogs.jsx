import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import "./AllBlogs.css";

function AllBlogs() {

  const [data, setData] = useState();

  const getBlogsData = async () => {
    console.log("In function");
    const res = await fetch("http://localhost:5000/blog", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("Data is : ", data);
    setData(data.blogs);
  }
  useEffect(() => {
    getBlogsData();
  }, []);

  if (!data) {
    return <h1>Loading...</h1>
  }
  else {
    return (
      <div className="main-post">
        <div className="head">
          <h1>See Our Blogs</h1>
          <h3>
            Stay current with all the latest scholarships , applications and more.
          </h3>
        </div>
        <div className="grid">
          {data.map((post) => {
            return (
              <div className="card-blog" key={post._id}>
                <img className="temp-image" src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1064.jpg" alt={"Error"} />
                <p>"{post.content}"</p>
                <Link to={`/blog/${post._id}`} className="link">
                  <span className="postAuthor">{post.title}</span>
                </Link><br /><br />
                <span className="createdAt">CreatedAt :{post.createdAt}</span>
                <span className="updatedAt">UpdatedAt :{post.updatedAt}</span>
              </div>
            );
          })}
        </div>
      </div >

    );
  }
}

export default AllBlogs;


