import React from "react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Header = () => {
  const [addVideo, setAddVideo] = useState("");
  const [video, setVideo] = useState("");
  //   const handleChange = (event) => {
  //     const value = event.target.value;
  //     setAddVideo({
  //       ...addVideo,
  //       [event.target.name]: value,
  //     });
  //   };

  const uploadVideo = (event) => {
    event.preventDefault();
    console.log(addVideo);

    const formData = new FormData();
    formData.append("video", video);
  };
  return (
    <div>
      header here
      <form onSubmit={uploadVideo}>
        <input
          type="file"
          //   accept="video/*"
          accept=".mov,.mp4"
          name="video"
          onChange={(event) => setAddVideo(event.target.files[0])}
          //   value={addVideo}
        />
        <button className="uploadVideoBtn">UPLOAD VIDEO</button>
      </form>
   
    </div>
  );
};
export default Header;
