import React from "react";
import CardItem from "../../components/card/Card";
import css from "./Streaming.module.scss";
import worship from "../../assets/img/worship.jpg";

const Streaming = () => {
  const list = ["Live Events", "Services", "Podcasts", "Radio"];

  return (
    <section>
      <CardItem
        title="Stream"
        icon="icon-podcast"
        list={list}
        img={worship}
        alt="Clay streaming church service"
      >
        filler
      </CardItem>
    </section>
  );
};

export default Streaming;
