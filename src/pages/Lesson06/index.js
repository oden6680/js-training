import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart06";
import instruction from "./instruction.md";

const convertData = (input) => {
  const gender_color = {
    男性: "blue", 女性: "red",
  };
  const data = input.map(({ gender, x, y }) => {
    return {
      color: gender_color[gender], gender, bmi: x / (y / 100) ** 2, weight: x, height: y,
    };
  });
  return data;
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer06"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 06"
      Chart={Chart}
    />
  );
};

export default Lesson;
