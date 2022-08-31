// old way oaf making request using XMLHttpRequest
// const req = new XMLHttpRequest();

// req.onload = function () {
//   console.log("IT LOADED");
//   const data = JSON.parse(this.responseText);
//   console.log(data.name, data.height);
// };
// req.onerror = function () {
//   console.log("ERROR!");
//   console.log(this);
// };
// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();

//requesting API using fetch

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED", res);
//     return res.JSON;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

//requesting API using AXIOS
// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESPONSE", res);
//   })
//   .catch((e) => {
//     console.log("ERROR", e);
//   });
const getPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (e) {
    console.log("ERROR", e);
  }
};

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLi = document.createElement("li");
  newLi.append(jokeText);
  jokes.append(newLi);
};
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("http://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch {
    return "SORRY NO JOKES TODAY!!";
  }
};

button.addEventListener("click", addNewJoke);
