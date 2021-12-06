var validate = (callback) => {
  var user = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  $("#duser").text(" ");
  $("#dpass").text(" ");
  var count = 0;

  if (user.trim() === "admin" && pass.trim() === "12345") {
    localStorage.setItem("username", "admin");
    callback();
  } else if (user.trim() !== "" && pass.trim() !== "") {
    $("#dpass").text("Wrong Username or Password ");
    $("#dpass").css("color", "red");
  }
  if (user.trim() === "") {
    $("#duser").text("Username cannot be blank");
    $("#duser").css("color", "red");
  }
  if (pass.trim() === "") {
    $("#dpass").text("Password cannot be blank");
    $("#dpass").css("color", "red");
  }
};

function redirect() {
  location.href = "./todo.html";
}
