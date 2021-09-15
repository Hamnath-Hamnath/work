import React from "react";
import ReactApexChart from "react-apexcharts";

function Bar() {
  const series = [
    {
      name: "Passed",
      data: [10, 11, 12, 1, 8]
    }
  ];

  const options = {
    chart: {
      type: "bar",
      width: 300,
      height: 280,
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        colors: ["black"],
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false | '<img src="/static/icons/reset.png" width="20">',
          customIcons: []
        },
        export: {
          csv: {
            filename: undefined,
            columnDelimiter: ",",
            headerCategory: "category",
            headerValue: "value",
            dateFormatter(timestamp) {
              return new Date(timestamp).toDateString();
            }
          },
          svg: {
            filename: undefined
          },
          png: {
            filename: undefined
          }
        },
        autoSelected: "zoom"
      }
    },
    colors: ["#a7d69b"],
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
      show: true,
      position: "bottom",
      fontSize: "14px",
      fontWeight: 500,
      markers: {
        width: 22,
        height: 10,
        strokeWidth: 0,
        radius: 0
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: ["001", "002", "003", "004", "005"]
    },
    yaxis: {
      title: {
        text: ""
      }
    },
    legend: {
      show: true,
      position: "bottom",
      fontSize: "14px",
      fontWeight: 500,
      markers: {
        width: 22,
        height: 10,
        strokeWidth: 0,
        radius: 0
      }
    },
    animation: {
      duration: 5000
    }
  };
  return (
    <div className="p-3">
      <div className="Bar_border">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={300}
        />
      </div>
    </div>
  );
}

export default Bar;
