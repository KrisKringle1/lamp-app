const list = document.querySelector(".list");
const form = document.getElementById("form");

const getNotes = async () => {
  await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response.json());
    })
    .catch((error) => {
      console.log("there was an error");
    });
};

const get = async function () {
  const resp = await fetch("http://localhost:8888/connect.php", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await resp.json();
  for (const index in json) {
    const li = document.createElement("li");
    const note = document.createTextNode(json[index].note);
    li.appendChild(note);
    list.appendChild(li);
  }
};

const post = async function (title, note) {
  const response = await fetch("http://localhost:8888/createnote.php", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, note }),
  });
  return response.text();
};

form.addEventListener("submit", (event) => {
  const url = "http://localhost:8888/createnote.php";
  event.preventDefault();
  const title = form.elements["title"].value;
  const note = form.elements["note"].value;
  const data = { title, note };
  // post(title, note);
  post(title, note).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
});
document.querySelector(".load").addEventListener("click", get);
