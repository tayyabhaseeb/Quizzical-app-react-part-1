import React from "react";

export default function Question(props) {
  return (
    <div className="question-comp">
      <h3>{props.obj.question}</h3>
      <div className="options-answers">
        {props.obj.incorrect_answers.map((ele) => {
          return (
            <div className="radio-buttons-cont">
              <input
                type="radio"
                id="answer"
                name="answer"
                value={ele}
                //   checked={formData.employment === "unemployed"}
                //   onChange={handleChange}
              />
              <label htmlFor="answer">{ele}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

{
  /* <button>{ele}</button>; */
}
