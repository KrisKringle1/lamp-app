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
  console.log("get ran");
  const resp = await fetch("http://localhost:8888/connect.php", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await resp.json();
  for (const index in json) {
    const id = json[index].id;
    const li = document.createElement("li");
    li.classList.add("item");
    const note = document.createTextNode(json[index].note);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    const x = document.createTextNode("x");
    deleteButton.appendChild(x);

    deleteButton.addEventListener("click", async (e) => {
      console.log(id);
      await fetch("http://localhost:8888/delete.php", {
        methond: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
      }).then((res) => console.log("res ", res));
    });

    li.appendChild(note);
    li.appendChild(deleteButton);
    list.appendChild(li);
  }
};

get();

const post = async function (title, note) {
  const response = await fetch("http://localhost:8888/createnote.php", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, note }),
  });
};

form.addEventListener("submit", (event) => {
  const url = "http://localhost:8888/createnote.php";
  event.preventDefault();
  let title = form.elements["title"].value;
  let note = form.elements["note"].value;
  const data = { title, note };
  // post(title, note);
  post(title, note).then((data) => {
    const li = document.createElement("li");
    li.classList.add("item");
    const newNote = document.createTextNode(note);
    li.appendChild(newNote);
    list.appendChild(li);
  });
});
