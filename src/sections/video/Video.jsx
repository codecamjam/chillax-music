import React from "react";
import CardItem from "../../components/card/Card";
import css from "./Video.module.scss";
import conference from "../../assets/img/conference.jpg";

const Video = () => {
  const list = [
    "Conferences & Seminars",
    "News & Broadcasting",
    "Performing Arts",
    "Nature/Outdoors",
  ];

  const text = "Gizmos and gadgets to capture the magic!";
  return (
    <section>
      <CardItem
        title="Video"
        icon="icon-video-camera"
        text={text}
        list={list}
        img={conference}
        alt="Clay streaming church service"
      >
        filler
      </CardItem>
    </section>
  );
};

export default Video;
