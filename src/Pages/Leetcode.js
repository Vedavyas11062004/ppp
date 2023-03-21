import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import "../Styles/Leaderboard.css";
import { sorting, Friends, remainingUsers, displayArray } from "../Utils.js";

export default function Leetcode() {
  const [friends, setFriends] = useState([]);
  const [usersData, setUserData] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://leaderboard-backend.onrender.com/api/data/leetcode")
      .then((res) => res.json())
      .then((data) => {
        // console.log("data-",data);
        setUserData(data);
      });
  }, []);

  // console.log("userData=",usersData);
  useEffect(() => {
    function setuserele() {
      const pushArr = usersData.map((ele) => {
        return {
          name: ele.name,
          rating:
            ele.data.matchedUser !== null
              ? Math.round(ele.data.userContestRanking.rating)
              : "-",
          tag:
            ele.data.matchedUser !== null
              ? ele.data.matchedUser.submitStats.acSubmissionNum[0].count
              : "-",
        };
      });
      setUsers(pushArr);
    }
    setuserele();
  }, [usersData]);

  const rankusers = sorting(users);
  const userfriends = Friends(rankusers, friends);
  const allusers = remainingUsers(rankusers, friends);
  const displayarr = displayArray(friends, userfriends, allusers);

  const [expanded, setExpanded] = useState("false");
  // console.log(expanded);
  const toggle_action = () => {
    if (expanded === "true") {
      setExpanded("false");
    } else {
      setExpanded("true");
    }
  };

  // end
  return (
    <div className="table__container">
      <div className="table__left">{<Sidebar expanded={expanded} />}</div>
      <div className="table__right">
        <div className="top">
          <h1 className="heading">
            Home/<span> Leetcode</span>
          </h1>
          <button aria-expanded={expanded} onClick={toggle_action}></button>
        </div>
        {users.length && (
          <Table
            rating="Rating"
            issuesolved="Problems Solved"
            tag="Problems solved"
            displayarr={displayarr}
          />
        )}
      </div>
    </div>
  );
}
