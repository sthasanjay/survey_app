import React, { useState } from "react";
import { Link } from "react-router-dom";
import SurveyData from "./SurveyData";

const Question = () => {
  const [counter, setCounter] = useState(0);
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
                <div className="col-sm-6 ">
                  <div
                    className={
                      index === 0
                        ? "option me-2 my-4  "
                        : index === 2
                        ? "option me-2 my-4 "
                        : "option ms-2 my-4 "
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
        <button onClick={() => setCounter(counter - 1)} className="black">
          back
        </button>
        <button onClick={() => setCounter(counter + 1)}>Next</button>
        <button className="btn-finish">
          <Link
            className="finish"
            // to={{ pathname: "/result", state: result }}
          >
            Finish
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Question;
