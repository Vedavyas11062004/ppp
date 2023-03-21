export const sorting = (users) => {
  users.sort((a, b) => b.rating - a.rating);
  let i = 1;
  const rankusers = users.map((e) => {
    return {
      ...e,
      rank: i++,
    };
  });
  return rankusers;
};

export const Friends = (rankusers, friends) => {
  const userfriends = rankusers.filter(function (objFromA) {
    return friends.find(function (objFromB) {
      return objFromA.name === objFromB.name;
    });
  });
  return userfriends;
};

export const remainingUsers = (rankusers, friends) => {
  const allusers = rankusers.filter(function (objFromA) {
    return !friends.find(function (objFromB) {
      return objFromA.name === objFromB.name;
    });
  });
  return allusers;
};

export const displayArray = (friends, userfriends, allusers) => {
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
};
