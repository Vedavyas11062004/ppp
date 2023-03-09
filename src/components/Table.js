import React, { useState } from "react";
import "../Styles/Leaderboard.css";
import leftarrow from "../Asserts/chevron-left.svg";
import rightarrow from "../Asserts/chevron-right.svg";
export default function Table(props) {
  const users = [
    {
      name: "jitendra",
      rating: 1700,
      problems: 300,
      tag: "expert",
    },
    {
      name: "phani",
      rating: 1750,
      problems: 300,
      tag: "expert",
    },
    {
      name: "vedavyas",
      rating: 1700,
      problems: 320,
      tag: "expert",
    },
    {
      name: "uday",
      rating: 1680,
      problems: 350,
      tag: "expert",
    },
    {
      name: "a",
      rating: 1700,
      problems: 300,
      tag: "expert",
    },
    {
      name: "b",
      rating: 1750,
      problems: 300,
      tag: "expert",
    },
    {
      name: "c",
      rating: 1700,
      problems: 320,
      tag: "expert",
    },
    {
      name: "d",
      rating: 1680,
      problems: 350,
      tag: "expert",
    },
    {
      name: "e",
      rating: 1700,
      problems: 300,
      tag: "expert",
    },
    {
      name: "f",
      rating: 1750,
      problems: 300,
      tag: "expert",
    },
    {
      name: "g",
      rating: 1700,
      problems: 320,
      tag: "expert",
    },
    {
      name: "h",
      rating: 1680,
      problems: 350,
      tag: "expert",
    },
    {
      name: "i",
      rating: 1700,
      problems: 320,
      tag: "expert",
    },
    {
      name: "j",
      rating: 1680,
      problems: 350,
      tag: "expert",
    },
  ];
  const friends = [
    {
      name: "vedavyas",
    },
    {
      name: "uday",
    },
    {
      name: "a",
      rating: 1700,
      problems: 300,
      tag: "expert",
    },
    {
      name: "b",
      rating: 1750,
      problems: 300,
      tag: "expert",
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
  // end

  const [indexPage, setindex] = useState(0);

  return (
    <div>
      <table className="table">
        <thead className="table__headings">
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>{props.rating}</th>
            <th>{props.issuesolved}</th>
            <th>{props.tag}</th>
          </tr>
        </thead>
        <tbody>
          {displayarr[indexPage].map((user) => {
            return (
              <tr key={user.name}>
                <td>{user.rank}</td>
                <td>{user.name}</td>
                <td>{user.rating}</td>
                <td>{user.problems}</td>
                <td>{user.tag}</td>
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
            <td colSpan={3}>
              page number {indexPage+1}
            </td>
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
