import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import "../Styles/Leaderboard.css";
// import listbutton from "../Asserts/list.svg";

export default function Codeforces() {
  const [expanded, setExpanded] = useState('false');
  console.log(expanded);
  const toggle_action = () => {
    if (expanded === 'true') {
      setExpanded('false');
    } else {
      setExpanded('true');
    }
  };
  return (
    <div className="table__container">
      <div className="table__left">{<Sidebar expanded={expanded} />}</div>
      <div className="table__right">
        <div className="top">
          <h1 className="heading">
            Home/<span>Codeforces</span>
          </h1>
          <button aria-expanded={expanded} onClick={toggle_action}>
            {/* <span>
              <img src={listbutton} alt=""></img>
            </span> */}
          </button>
        </div>
        <Table rating="Rating" issuesolved="Questions Solved" tag="Tag" />
      </div>
    </div>
  );
}
