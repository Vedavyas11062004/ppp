import React from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import "../Styles/Leaderboard.css";

export default function Codeforces() {
  return (
    <div className="table__container">
      <h1 className="heading">Home/<span>Codeforces</span></h1>
      <Sidebar/>
      <Table rating="Rating" issuesolved="Questions Solved" tag="Tag"/>
    </div>
  );
}
