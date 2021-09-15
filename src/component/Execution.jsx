import React, { useState } from "react";
import Header from "./Header";
import MUIDataTable from "mui-datatables";
function Execution() {
  const [suiteName, setSuiteName] = useState([
    "Suite 1",
    "Suite 2",
    "Suite 3",
    "Suite 4"
  ]);
  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "company",
      label: "Company",
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: true,
        sort: false
      }
    }
  ];

  const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" }
  ];

  const options = {
    filterType: "none",
    download: false
  };
  return (
    <>
      <Header currentlyActive={"Execution"} />
      <div className="container-fluid" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-10 ">
            <div></div>
            <MUIDataTable data={data} columns={columns} options={options} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Execution;
