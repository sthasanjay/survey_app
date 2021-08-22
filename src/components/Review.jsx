import React, { useState } from "react";
import { Link } from "react-router-dom";
import SurveyData from "./SurveyData";
import arrow from "../img/arrow.png";
import arrow1 from "../img/arrow1.png";
import eye1 from "../img/eye1.png";
import eye2 from "../img/eye.png";

const Review = (props) => {
  const [memory, setMemory] = useState(props.location.state.memory);
  const [counter, setCounter] = useState(0);
  const [eye, setEye] = useState(false);

  const totalScore = () => {
    const totalCorrect = memory.filter((value) => {
      return value.result === "correct";
    });
    return totalCorrect.length;
  };

  const isIncorrect = (questionId, answerId) => {
    const findQuestion = memory.find(
      (value) => value.questionId === questionId
    );
    if (findQuestion.answerId === answerId) {
      if (findQuestion.result === "incorrect") {
        return true;
      }
    }

    const a = false;

    if (a) {
      console.log("true");
    } else {
      console.log("false");
    }
  };

  return (
    <div className="container-fluid question">
      <div className="heading">
        <h2>Review</h2>
      </div>

      <div className="title total-review text-center">
        <h1>Total score : {totalScore()}</h1>
      </div>

      <div className="inner-div mx-auto">
        <div>
          <p className="title">Question: {SurveyData[counter].questionId} </p>
        </div>

        <div className="que">
          <p className="m-0">{SurveyData[counter].question}</p>
        </div>
        <div className="container-fluid">
          <div className="row gx-4">
            {SurveyData[counter].options.map((value, index) => {
              return (
                <div className="col-sm-6 option-container">
                  <div
                    className={`option ${
                      SurveyData[counter].correctAnswer === value.answerId
                        ? "correct"
                        : ""
                    } ${
                      isIncorrect(
                        SurveyData[counter].questionId,
                        value.answerId
                      )
                        ? "incorrect"
                        : ""
                    }`}
                  >
                    <p>{value.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="btn-div">
        <button
          onClick={() => setCounter(counter - 1)}
          className={`black ${counter > 0 ? "" : "hidden"}`}
        >
          Back
        </button>
        <button
          onClick={() => setCounter(counter + 1)}
          className={`${counter === 9 ? "hidden" : ""} `}
        >
          Next
        </button>
        <button
          className={`btn-finish review-finish ${
            counter === 9 ? "" : "hidden"
          }`}
        >
          <Link className="finish pe-2" to="/">
            Exit
          </Link>
          <img src={arrow} alt="arrow" className="arrow-icon" />
        </button>
      </div>
      <div className={eye ? "stats-box open" : "stats-box"}>
        <div className="eye-icon" onClick={() => setEye(!eye)}>
          <img src={eye ? eye2 : eye1} alt="eye" />
        </div>
        <h1 className="px-4 text-center py-2">Stats</h1>
        <div className="stats-list p-4">
          {memory.map((value, index) => {
            return (
              <p className="text-center">
                <img
                  src={arrow1}
                  className={`white-arrow pe-2 ${
                    counter === index ? "" : "hidden"
                  }`}
                  alt="arrow"
                />
                <span className="pe-3">Question: {value.questionId}</span>
                <img src={`./img/${value.result}.png`} alt="mark" />
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Review;
