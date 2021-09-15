import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import Header from "./Header";
import Pie from "./Pie";
import ResultTableOne from "./Tabel/Result1";
import ResultTableTwo from "./Tabel/Result2";
import { Route } from "react-router-dom";

function Result(props) {
  const [currentExecutionID, setCurrentExecutionID] = useState("");
  const handleChange = (executionID) => {
    setCurrentExecutionID(executionID);
  };
  useEffect(() => {
    let currentPath = props.history.location.pathname;
    if (currentPath === "/result") {
      setCurrentExecutionID("");
    }
  }, [props]);
  return (
    <>
      <Header currentlyActive={"Result"} />
      <div className="container-fluid">
        <div className="row">
          <h3>
            Result : {currentExecutionID === "" ? "-" : currentExecutionID}
          </h3>
          <div className="col-6">
            <div
              className="rounded border border-secondary"
              style={{ width: "100%" }}
            >
              <Bar />
            </div>
          </div>
          <div className="col-6">
            <div
              className="rounded border border-secondary"
              style={{ width: "100%" }}
            >
              <Pie />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-3">
            <Route path={"/result"} exact>
              <ResultTableOne {...props} onChange={handleChange} />;
            </Route>
            <Route path={"/result/executioID"} exact>
              <ResultTableTwo
                {...props}
                onChange={handleChange}
                executionID={currentExecutionID}
              />
            </Route>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
