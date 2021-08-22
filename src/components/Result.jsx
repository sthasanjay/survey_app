import React from "react";
import { Link } from "react-router-dom";

const Result = (props) => {
  const totalScore = () => {
    const totalCorrect = props.location.state.filter((value) => {
      return value.result === "correct";
    });
    return totalCorrect.length;
  };

  return (
    <div className="container-fluid result">
      <div className="heading">
        <h2>Result</h2>
      </div>

      <div className="title">
        <h1>Total score : {totalScore()}</h1>
      </div>

      <div className="res_value">
        {props.location.state.map((value) => {
          return (
            <p>
              <span className="pe-3">Question: {value.questionId}</span>
              <img src={`./img/${value.result}.png`} alt="mark" />
            </p>
          );
        })}
      </div>

      <div className="btn d-flex justify-content-center m-5 pe-3">
        <button className="end">
          <Link to="/" className="linkEnd">
            Exit
          </Link>
        </button>
        <button className="review">
          <Link
            to={{
              pathname: "/review",
              state: { memory: props.location.state, startReview: true },
            }}
            className="linkReview"
          >
            Review
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Result;
