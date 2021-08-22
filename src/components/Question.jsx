import React, { useState } from "react";
import { Link } from "react-router-dom";
import SurveyData from "./SurveyData";
import arrow from "../img/arrow.png";

const Question = (props) => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);

  const selectOption = (questionId, answerId, correctAnswer) => {
    const dataObj = {
      questionId: questionId,
      answerId: answerId,
      correctAnswer: correctAnswer,
      result: answerId === correctAnswer ? "correct" : "incorrect",
    };

    const isAlreadyChosen = data.find((value) => {
      return value.questionId === questionId;
    });

    if (isAlreadyChosen) {
      const updatedObject = data.map((value) => {
        if (isAlreadyChosen.questionId === value.questionId) {
          return {
            ...value,
            answerId: answerId,
            result: answerId === correctAnswer ? "correct" : "incorrect",
          };
        }
        return value;
      });
      setData(updatedObject);
    } else {
      setData((prevArr) => [...prevArr, dataObj]);
    }
  };

  const isSelected = (questionId, answerId) => {
    if (data.length > 0) {
      const isAvailable = data.find((value) => {
        return value.questionId === questionId;
      });
      if (isAvailable) {
        if (isAvailable.answerId === answerId) {
          return true;
        } else {
          return false;
        }
      }
    }
  };

  const checkValidation = () => {
    const isAvailable = data.find((value) => {
      return value.questionId === (counter + 1).toString();
    });
    if (isAvailable) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="container-fluid question">
      <div className="heading">
        <h2>Survey</h2>
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
                      isSelected(SurveyData[counter].questionId, value.answerId)
                        ? "bordered"
                        : ""
                    }`}
                    onClick={() =>
                      selectOption(
                        SurveyData[counter].questionId,
                        value.answerId,
                        SurveyData[counter].correctAnswer
                      )
                    }
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
          className={`${counter === 9 ? "hidden" : ""} ${
            checkValidation() ? "" : "disabled"
          }`}
        >
          Next
        </button>
        <button
          className={`btn-finish ${counter === 9 ? "" : "hidden"}  ${
            checkValidation() ? "" : "disabled"
          }`}
        >
          <Link
            className="finish pe-2"
            to={{ pathname: "/result", state: data }}
          >
            Finish
          </Link>
          <img src={arrow} alt="arrow" className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default Question;
