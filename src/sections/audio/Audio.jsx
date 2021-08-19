import React from "react";
import Card from "../../components/card/Card";
import css from "./Audio.module.scss";
import studio from "../../assets/img/studio.jpg";

const Audio = () => {
  const list = [
    "Mixing and Mastering",
    "Live Entertainment",
    "House of Worship",
    "Books on Tape",
  ];

  const text = "The highest quality sound in town!";
  return (
    <section>
      <Card
        title="Audio"
        icon="icon-mic"
        text={text}
        list={list}
        img={studio}
        alt="Recording Studio"
      >
        filler
      </Card>
    </section>
  );
};

export default Audio;
