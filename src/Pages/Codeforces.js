import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import "../Styles/Leaderboard.css";
import { sorting, remainingUsers, displayArray, Friends } from "../Utils.js";

export default function Codeforces() {
  const [friends, setFriends] = useState([
    {
      name: "Veda_vyas_Reddy",
    },
    {
      name: "nagaphbilla",
    },
  ]);
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let coders = [
      "nagaphbilla",
      "sharath__chandra",
      "Narendra_Vasa",
      "Veda_vyas_Reddy",
      "Jitendra_Abhiram",
      "vishalg17",
      "Benq",
      "jiangly",
      "ko_osaga",
      "zh0ukangyang",
    ];
    let url = "https://codeforces.com/api/user.info?handles=";
    for (const user of coders) {
      url += user + ";";
    }
    let data = [];
    if (isLoading) {
      fetch(url)
        .then((data) => data.json())
        .then((result) => {
          result["result"].map((user) => {
            const details = {
              name: user["handle"],
              rating: user["rating"],
              tag: user["rank"],
            };
            return data.push(details);
          });
        })
        .then(() => {
          setUsers(data);
          setLoading(false);
        });
    }
  }, [isLoading]);

  const rankusers = sorting(users);
  const userfriends = Friends(rankusers, friends);
  const allusers = remainingUsers(rankusers, friends);
  const displayarr = displayArray(friends, userfriends, allusers);
  // end

  const [expanded, setExpanded] = useState("false");
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
            Home/<span>Codeforces</span>
          </h1>
          <button aria-expanded={expanded} onClick={toggle_action}></button>
        </div>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <Table
            rating="Rating"
            issuesolved="Questions Solved"
            tag="Tag"
            displayarr={displayarr}
          />
        )}
      </div>
    </div>
  );
}
