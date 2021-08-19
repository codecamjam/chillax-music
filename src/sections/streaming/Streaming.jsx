import React from "react";
import CardItem from "../../components/card/Card";
import css from "./Streaming.module.scss";
import conference from "../../assets/img/conference.jpg";

const Streaming = () => {
  const list = ["Live Events", "Services", "Podcasts", "Radio"];

  const text = "The highest quality in live streaming guaranteed";
  return (
    <section>
      <CardItem
        title="Live Stream"
        icon="icon-podcast"
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

export default Streaming;
