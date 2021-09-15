import React from "react";
import MuiDataTable from "mui-datatables";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Result1(props) {
  const history = useHistory();
  const columns = [
    {
      name: "id",
      label: "ExecutionID",
      options: {
        filter: true
      }
    },
    {
      name: "suite",
      label: "Test Suite Name",
      options: {
        filter: false,
        sort: false
      }
    },
    {
      name: "description",
      label: "Description",
      options: {
        filter: false,
        sort: true
      }
    },
    {
      name: "status",
      label: "Status",
      options: {
        filter: false,
        sort: false
      }
    },
    {
      name: "time",
      label: "Ellapsed time",
      options: {
        filter: false,
        sort: false
      }
    }
  ];

  const options = {
    filterType: "checkbox",
    responsive: "scroll",
    selectableRows: false,
    rowsPerPage: 4,
    rowsPerPageOptions: [5, 10, 15],
    print: false,
    download: true,
    fixedHeader: false,
    onRowClick: (rowData, value) => {
      console.log("Props data => ", rowData[0]);
      props.onChange(rowData[0]);
      history.push("/result/executionID");
    },
    textLabels: {
      body: {
        noMatch: "No executed cases record Found!"
      }
    }
  };
  const theme = createMuiTheme({
    overrides: {
      MuiTableCell: {
        head: {
          background: "#8fc1e3"
        }
      }
      // MuiToolbar: { root: { display: "none" } }
    }
  });
  const data = [
    {
      id: "001",
      suite: "TEST SUITE 1",
      description: "working",
      status: "Completed",
      time: "0.5s"
    },
    {
      id: "002",
      suite: "TEST SUITE 1",
      description: "working",
      status: "Completed",
      time: "0.5s"
    },
    {
      id: "003",
      suite: "TEST SUITE 1",
      description: "working",
      status: "Completed",
      time: "0.5s"
    },
    {
      id: "004",
      suite: "TEST SUITE 1",
      description: "working",
      status: "Completed",
      time: "0.5s"
    }
  ];

  return (
    <div className="tableHeight">
      <MuiThemeProvider theme={theme}>
        <MuiDataTable data={data} columns={columns} options={options} />
      </MuiThemeProvider>
    </div>
  );
}
export default Result1;
