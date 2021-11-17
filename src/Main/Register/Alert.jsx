import React from "react";
import "./Alert.scss";

const Alert = ({ test, setTest }) => {
  return (
    <>
      {test ? (
        <div className="alert">
          <div className="alert-first">
            <div>Congratulations</div>
            <div>{"You have successfully passed the registration"}</div>
          </div>

          <div className="btn btn-alert">
            <div className="in-btn" onClick={() => setTest(false)}>
              Great
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Alert;
