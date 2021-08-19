import React from "react";
import Card from "../../components/card/Card";
import css from "./Audio.module.scss";
import studio from "../../assets/img/studio.jpg";

const Audio = () => {
  const text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste maiores temporibus beatae quibusdam rem, laborum eum harum nostrum quisquam,cupiditate molestias totam corrupti eius sint nisi recusandae neque animi laboriosam!`;
  return (
    <section>
      <Card
        title="Audio"
        icon="icon-music"
        text={text}
        img={studio}
        alt="Recording Studio"
      >
        filler
      </Card>
    </section>
  );
};

export default Audio;
