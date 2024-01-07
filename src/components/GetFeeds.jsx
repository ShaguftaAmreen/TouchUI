import React, { useState, useEffect } from "react";
import axios from "axios";
import PostLike from "./PostLike";
import PostComment from "./PostComment";

const GetFeeds = () => {
  const [feeds, setFeeds] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchFeeds = async () => {
    try {
      const response = await axios.post(
        "https://test.touchapp.in/api/getFeeds",
        { offset: 0 },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFtbXVjaGFyeSIsInVzZXJpZCI6NDY0NiwiaWF0IjoxNzAwMjA1NDc3fQ.0RESjwG_r1twIt8rEWa8FA-euaQool6Nc-bT6khQaZA",
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({ offset: 0 }),
        }
      );

      if (response.status === 200) {
        setFeeds(response.data.data);
        console.log(response.data);
        console.log("post_file:", response.data.post_file);
        console.log("post_file type:", typeof response.data.post_file);
      } else {
        console.error("Error fetching feeds: ", response.status);
      }
    } catch (error) {
      console.error("Error fetching feeds: ", error);
    }
  };

  const handleSubmit = () => {
    fetchFeeds();
  };

  useEffect(() => {
    fetchFeeds();
  }, [offset, limit, token]);

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <div
        style={{
          textAlign: "center",
          marginLeft: "350px",
          backgroundColor: "black",
        }}
      >
        {feeds.map((data) => (
          <div
            key={data.id}
            style={{
              padding: "20px",
              textAlign: "center",
              border: "none",
              border: "1px solid white",
              width: "702px",
            }}
          >
            <div
              style={{
                width: "680px",
                display: "flex",
                border: "1px solid white",
              }}
            >
              <img
                src={data.profile_pic}
                alt=""
                style={{ width: "50px", borderRadius: "10px" }}
              />
              <h3>{data.username}</h3>
            </div>
            <div>
              {data.post_file && (
                <img
                  src={JSON.parse(data.post_file)[0].path}
                  alt={data.caption}
                  height="400px"
                  width="400px"
                />
              )}
            </div>
            <div
              style={{
                alignItems: "center",
                width: "680px",
                display: "flex",
                justifyContent: "space-around",
                border: "1px solid white",
              }}
            >
              <div>
                <PostLike />{" "}
                <span>
                  <PostComment />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetFeeds;