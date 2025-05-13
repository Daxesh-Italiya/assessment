const a = [
  { userID: 1, Name: "Jhon" },
  { userID: 3 },
  { userID: 5, Name: "Jatin" },
  { userID: 6, Name: "Juhil" },
  { userID: 7, Name: "nikunj" },
];

const b = [
  { userID: 1, DateOfBirth: "02-05-2008" },
  { userID: 2, DateOfBirth: "05-05-2008" },
  { userID: 3, DateOfBirth: "07-05-2004" },
  { userID: 4, DateOfBirth: "08-04-2010" },
  { userID: 5, DateOfBirth: "12-05-2003" },
  { userID: 6, DateOfBirth: "15-05-2007" }
];

const mergeUserData = (a, b) => {
const abMergedData = [];
const userObjectMap = new Map();
const newRecord = {}


a.forEach(user => {
    userObjectMap.set(user.userID, { Name: user.Name, DateOfBirth: null });
});

b.forEach(user => {
    if (userObjectMap.has(user.userID)) {
      userObjectMap.get(user.userID).DateOfBirth = user.DateOfBirth;
    } else {
      userObjectMap.set(user.userID, { Name: null, DateOfBirth: user.DateOfBirth });
    }
});
  
userObjectMap.forEach((value, key) => {
    abMergedData.push({ userID: key, ...value });
});
  
abMergedData.sort((a, b) => a.userID - b.userID);

return abMergedData;
}
const final1StTaskArray = mergeUserData(a, b)
console.log(final1StTaskArray);


const analytics = (inputArr) => {
  let nameMissCount = 0;
  let dobMissCount = 0;
  const monthYear = {};
  inputArr.forEach((user) => {
    if (!user.Name) nameMissCount++;
    if (!user.DateOfBirth) {
      dobMissCount++;
    }
    if (user.DateOfBirth) {
  const dob = user.DateOfBirth.split("-");
  const groupBy = `${dob[1]}-${dob[2]}`;
  
  if (!monthYear[groupBy]) {
      monthYear[groupBy] = {
        count: 1,
        dob: user.DateOfBirth,
        userId: user.userID
      };
    }else {
      if (user.DateOfBirth > monthYear[groupBy].dob) {
        monthYear[groupBy].count = monthYear[groupBy].count + 1
        monthYear[groupBy].youngerUserName = user.Name;
        monthYear[groupBy].dob = user.DateOfBirth;
      }
    }
    }
    
  }) 
  
  
  
 
  
  return ({nameMissCount, dobMissCount, monthYear})
  
}

console.log(analytics(final1StTaskArray))
