import React from "react";
import Card from "../../components/card/Card";
import css from "./Audio.module.scss";
import guitar from "../../assets/img/guitar.jpg";

const Audio = () => {
  const list = [
    "Mixing & Mastering",
    "Live Entertainment",
    "House of Worship",
    "Books on Tape",
  ];

  return (
    <section>
      <Card
        title="Audio"
        icon="icon-mic"
        list={list}
        img={guitar}
        alt="Recording Studio"
      >
        filler
      </Card>
    </section>
  );
};

export default Audio;
