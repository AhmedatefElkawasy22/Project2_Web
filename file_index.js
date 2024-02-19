let email = document.getElementById("input1");
let password = document.getElementById("input2");
let msgerror = document.getElementsByClassName("pp")[0];
let msgerror1 = document.getElementsByClassName("pp")[1];
let login = document.getElementById("input3");

if (login.addEventListener("click", () => {
    let value_email = email.value;
    if (value_email.includes("@")) {
      msgerror.style.display = "none";
    } else {
      msgerror.style.display = "block";
    }
    let value_pass = password.value;
    if (value_email == "") {
      msgerror1.style.display = "block";
    } else {
      msgerror1.style.display = "none";
    }
  })
);
