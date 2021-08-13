import React from "react";

const Result = () => {
  return (
    <div className="container-fluid result">
      <div className="heading">
        <h2>Result</h2>
      </div>

      <div className="title">
        <h1>Total score : 7</h1>
      </div>

      <div className="res_value">
        <p>
          question: 1
          <img src="./img/correct.png" alt="mark" />
        </p>
      </div>
    </div>
  );
};

export default Result;
