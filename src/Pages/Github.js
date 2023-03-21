import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import "../Styles/Leaderboard.css";

export default function Github() {
  const [usersData, setUserData] = useState([]);
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [expanded, setExpanded] = useState("false");
  // useEffect(() => {
  //   const datafetch = [];
  //   const names = ["nagaphbilla", "Vedavyas11062004", "Jitendra-Abhiram"];
  //   function fetchRequests() {
  //     for (let i = 0; i < names.length; i++) {
  //       datafetch.push(
  //         fetch(`https://api.github.com/users/${names[i]}`).then((data) =>
  //           data.json()
  //         )
  //       );
  //     }
  //   }
  //   fetchRequests();
  //   function allData() {
  //     Promise.all(datafetch).then((data) => {
  //       console.log(data);
  //       setUserData(data);
  //     });
  //   }
  //   allData();
  // }, []);

  useEffect(() => {
    fetch("https://leaderboard-backend.onrender.com/api/data/github")
      .then((res) => res.json())
      .then((data) => {
        console.log("data=", data);
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

  function sorting(users) {
    users.sort((a, b) => b.rating - a.rating);
    let i = 1;
    const rankusers = users.map((e) => {
      return {
        ...e,
        rank: i++,
      };
    });
    return rankusers;
  }

  const rankusers = sorting(users);
  function Friends(rankusers) {
    const userfriends = rankusers.filter(function (objFromA) {
      return friends.find(function (objFromB) {
        return objFromA.name === objFromB.name;
      });
    });
    return userfriends;
  }
  function remainingUsers(rankusers) {
    const allusers = rankusers.filter(function (objFromA) {
      return !friends.find(function (objFromB) {
        return objFromA.name === objFromB.name;
      });
    });
    return allusers;
  }
  const userfriends = Friends(rankusers);
  const allusers = remainingUsers(rankusers);

  function displayArray(friends, userfriends, allusers) {
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
    // console.log(lastindex);
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
    return displayarr;
  }

  // console.log(displayarr);
  const displayarr = displayArray(friends, userfriends, allusers);
  // grouping done

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
            rating="Repos"
            issuesolved="Problems solved"
            tag="User Name"
            displayarr={displayarr}
          />
        )}
      </div>
    </div>
  );
}
