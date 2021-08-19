import React from "react";
import CardItem from "../../components/card/Card";
import css from "./Video.module.scss";
import photography from "../../assets/img/photography.jpg";

const Video = () => {
  const list = [
    "Conferences & Seminars",
    "News & Broadcasting",
    "Nature/Outdoors",
    "Performing Arts",
  ];

  return (
    <section>
      <CardItem
        title="Video"
        icon="icon-video-camera"
        list={list}
        img={photography}
        alt="Clay streaming church service"
      >
        filler
      </CardItem>
    </section>
  );
};

export default Video;
