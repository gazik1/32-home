function task1() {
  let button = document.getElementById("task1");
  let session = sessionStorage.getItem("background-color");
  let current = session && !isNaN(session) ? session : 0;
  let color = ["aliceblue", "aqua", "blueviolet", "cadetblue", "yellow"];

  document.body.style.backgroundColor = color[current % 5];

  button.addEventListener("click", () => {
    current++;
    document.body.style.backgroundColor = color[current % 5];
    sessionStorage.setItem("background-color", String(current));
  });
}
task1();

function task2() {
    console.log(localStorage.getItem("name"));
  let boolean = localStorage.getItem("name") && localStorage.getItem("email");
  let user = boolean
    ? {
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email")
      }
    : null;
  if (user) {
    setTimeout(()=>{alert(`Добрый день ${user.name} ${user.email}`)},500)
  }
  let form = document.getElementById("task2");
  let text = form.textName;
  let email = form.textEmail;

  form.addEventListener("submit", even => {
    localStorage.clear();
    localStorage.setItem("name", text.value);
    localStorage.setItem("email", email.value);
  });
}
task2();
