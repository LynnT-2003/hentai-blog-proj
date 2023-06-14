import { useState, useEffect, useContext } from "react";
import { formatISO9075 } from "date-fns";
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";

  return (
    <div className="post-page">
      <h1 style={{ marginTop: "0px", marginBottom: "0px" }}>
        {postInfo.title}
      </h1>
      {/*  */}

      <div
        className="author"
        style={{ marginTop: "0px", marginBottom: "0.75em" }}
      >
        {/* <time>{formatISO9075(new Date(postInfo.createdAt))}</time> */}
        by @{postInfo.author.username}
      </div>
      <div className="image">
        <img
          src={`http://localhost:4000/${postInfo.cover}`}
          alt=""
          style={{
            width: "100%",
            height: "30em",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  );
}
