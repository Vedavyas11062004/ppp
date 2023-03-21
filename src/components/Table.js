import React, { useState } from "react";
import "../Styles/Leaderboard.css";
import leftarrow from "../Asserts/chevron-left.svg";
import rightarrow from "../Asserts/chevron-right.svg";
export default function Table({ rating, issuesolved, tag, list, displayarr }) {
  const [indexPage, setindex] = useState(0);

  return (
    <div>
      <table className="table">
        <thead className="table__headings">
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>{rating}</th>
            {/* <th>{issuesolved}</th> */}
            <th>{tag}</th>
          </tr>
        </thead>
        <tbody>
          {displayarr[indexPage].map((user) => {
            return (
              <tr key={user.name}>
                <td>{user.rank}</td>
                <td>{user.name}</td>
                <td>{user.rating}</td>
                <td>{user.tag}</td>
                {/* <td> - </td> */}
              </tr>
            );
          })}
          <tr>
            <td colSpan={1}>
              <button
                onClick={() => {
                  if (indexPage > 0) {
                    setindex(indexPage - 1);
                  } else {
                    setindex(0);
                  }
                }}
              >
                <span>
                  <img src={leftarrow} alt=""></img>
                </span>
              </button>
            </td>
            <td colSpan={2}>page number {indexPage + 1}</td>
            <td colSpan={1}>
              <button
                onClick={() => {
                  if (indexPage < displayarr.length - 1) {
                    setindex(indexPage + 1);
                  } else {
                    setindex(displayarr.length - 1);
                  }
                }}
              >
                <span>
                  <img src={rightarrow} alt=""></img>
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
