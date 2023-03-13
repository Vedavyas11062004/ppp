import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import "../Styles/Leaderboard.css";

export default function Codechef() {
  const users = [
    {
      name: "jitendra",
      rating: 1700,
      problems: 300,
      tag: "4*",
    },
    {
      name: "phani",
      rating: 1750,
      problems: 300,
      tag: "4*",
    },
    {
      name: "vedavyas",
      rating: 1700,
      problems: 320,
      tag: "5*",
    },
    {
      name: "uday",
      rating: 1680,
      problems: 350,
      tag: "4*",
    },
  ];
  const friends = [
    {
      name: "vedavyas",
    },
    {
      name: "uday",
    },
  ];
  users.sort((a, b) => b.rating - a.rating);
  let i = 1;
  const rankusers = users.map((e) => {
    return {
      ...e,
      rank: i++,
    };
  });

  const allusers = rankusers.filter(function (objFromA) {
    return !friends.find(function (objFromB) {
      return objFromA.name === objFromB.name;
    });
  });
  const userfriends = rankusers.filter(function (objFromA) {
    return friends.find(function (objFromB) {
      return objFromA.name === objFromB.name;
    });
  });

  //  logic of converting into array of arrays
  let lastindex = 0;
  const displayarr = [];
  if (friends.length > 8) {
    const n = Math.trunc(friends.length / 8);
    const r = friends.length % 8;
    let subindex = 0;
    for (let j = 0; j < n; j++) {
      const subarr = [];
      for (let i = 0; i < 8; i++) {
        subarr.push(userfriends[subindex]);
        subindex++;
      }
      displayarr.push(subarr);
    }
    if (r > 0) {
      const subarrremaing = [];
      for (let i = 0; i < r; i++) {
        subarrremaing.push(userfriends[subindex]);
        subindex++;
      }
      for (let i = r; i < r + allusers.length && i < 8; i++) {
        subarrremaing.push(allusers[lastindex]);
        lastindex++;
      }
      displayarr.push(subarrremaing);
    }
  } else {
    const r = friends.length % 8;
    if (r > 0) {
      let subindex = 0;
      const subarrremaing = [];
      for (let i = 0; i < r; i++) {
        subarrremaing.push(userfriends[subindex]);
        subindex++;
      }
      for (let i = r; i < r + allusers.length && i < 8; i++) {
        subarrremaing.push(allusers[lastindex]);
        lastindex++;
      }
      displayarr.push(subarrremaing);
    }
  }

  // grouping 8 start
  const totalleft = allusers.length - lastindex;
  console.log(lastindex);
  const loops = Math.trunc(totalleft / 8);
  const remaining = totalleft % 8;
  let num = lastindex;
  for (let j = 0; j < loops; j++) {
    const subarr = [];
    for (let i = 0; i < 8; i++) {
      subarr.push(allusers[num]);
      num++;
    }
    displayarr.push(subarr);
  }
  if (remaining > 0) {
    const subarrremaing = [];
    for (let i = 0; i < remaining; i++) {
      subarrremaing.push(allusers[num]);
      num++;
    }
    displayarr.push(subarrremaing);
  }
  console.log(displayarr);

  // grouping done

  const [expanded, setExpanded] = useState("false");
  console.log(expanded);
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
        <Table
          rating="Rating"
          issuesolved="Problems solved"
          tag="Tag"
          displayarr={displayarr}
        />
      </div>
    </div>
  );
}
