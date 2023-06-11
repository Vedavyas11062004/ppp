import React, { useEffect, useState } from "react";
import { useAuth } from "../Authentication/Auth";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import "../Styles/Leaderboard.css";
import {sorting,Friends,remainingUsers,displayArray} from '../Utils.js'
export default function Github() {
  const [usersData, setUserData] = useState([]);
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [expanded, setExpanded] = useState("false");
  const auth=useAuth();
  
  useEffect(() => {
    fetch("https://leaderboard-backend.onrender.com/api/data/github")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  useEffect(() => {
    function setuserele() {
      const pushArr = usersData.map((ele) => {
        return {
          name: ele.name,
          rating: ele.contributions,
          tag: ele.username,
        };
      });
      setUsers(pushArr);
    }
    setuserele();
  }, [usersData]);

  const rankusers = sorting(users);
  const userfriends = Friends(rankusers,friends);
  const allusers = remainingUsers(rankusers,friends);
  const displayarr = displayArray(friends, userfriends, allusers);

  const toggle_action = () => {
    if (expanded === "true") {
      setExpanded("false");
    } else {
      setExpanded("true");
    }
  };

  return (
    <div className="table__container">
      <div className="table__left">{<Sidebar expanded={expanded} />}</div>
      <div className="table__right">
        <div className="top">
          <h1 className="heading">
            Home/<span>Github</span>
          </h1>
          <button aria-expanded={expanded} onClick={toggle_action}></button>
        </div>
        {users.length && (
          <Table
            rating="Contributions"
            issuesolved="Problems solved"
            tag="User Name"
            displayarr={displayarr}
          />
        )}
      </div>
    </div>
  );
}
