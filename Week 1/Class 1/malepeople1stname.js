const users = [
  {
    firstname: "Mrinal",
    roll: 10,
    gender: "male"
  },
  {
    firstname: "Pragati",
    roll: 17,
    gender: "female"
  },
  {
    firstname: "Kittu",
    roll: 17,
    gender: "male"
  },
  {
    firstname: "Babu",
    roll: 17,
    gender: "female"
  }
];
for (let i = 0; i < users.length; i++) {
  if (users[i]["gender"] == "male") {
    console.log(users[i]["firstname"]);
  }
}
