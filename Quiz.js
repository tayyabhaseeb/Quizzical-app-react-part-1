import React, { useState } from "react";

import dataObj from "../data";
import Question from "./Question";

export default function Quiz() {
  const [data, setData] = useState(dataObj);

  const questions = data.results.map((obj) => {
    return <Question obj={obj} />;
  });

  return (
    <div className="ques-cont-parent">
      <div className="ques-cont">
        {questions}
        <div className="btn-cont">
          {/* <button className="check-ans-btn">check answers</button> */}
          <p>You score 3 / 5 correct answers</p>
          <button className="play-ans-btn">Play Again</button>
        </div>
      </div>
    </div>
  );
}
