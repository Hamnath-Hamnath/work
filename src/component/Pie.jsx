import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function Pie(props) {
  const [executionID, setExecutionId] = useState(props.executionID);
  const series = [44, 55, 13];
  const options = {
    chart: {
      height: "100%",
      // width: 380,
      type: "pie"
    },
    colors: ["#34523f", "#446b52", "#395a45"],
    // labels: ["Pass", "Fail"],
    dataLabels: {
      enabled: false
    },
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 0, 0]
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ],
    legend: {
      show: false,
      position: "bottom",
      fontSize: "14px",
      fontWeight: 500,
      markers: {
        width: 22,
        height: 10,
        strokeWidth: 0,
        radius: 0
      }
    }
  };
  return (
    <div className="result_pie">
      <div className="row  justify-content-between">
        <div className="col col-sm-12 col-md-6 col-lg-7 ">
          {/* <div className="ml-0"> */}
          <ReactApexChart
            options={options}
            series={series}
            type="pie"
            width={350}
          />
          {/* </div> */}
        </div>
        <div className="col col-sm-12 col-md-6 col-lg-5 result_pie_details px-4">
          {/* <div className="table-responsive"> */}
          <table className=" table table-borderless">
            <tbody>
              <tr>
                <td>Total Testcases</td>
                <td className="result_pie_data">: 4</td>
              </tr>
              {/* <tr>
                  <td>Executed By </td>
                  <td  className="result_pie_data">: {executedBy}</td>
                </tr> */}
              {/* <tr>
                  <td>Type </td>
                  <td  className="result_pie_data">: Automated</td>
                </tr> */}
              <tr>
                <td>Duration</td>
                <td className="result_pie_data">: 0.4s</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  //  :
  // (
  //   <div className="col-sm-12 col-md-12 col-lg-12 result_right_container">
  //     <h2 className="msg">No content to show</h2>
  //   </div>
  // )
  // );
}
