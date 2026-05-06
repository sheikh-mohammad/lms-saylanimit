const signUpHandler = () => {
  const cnic = document.getElementById("cnic").value;
  const dob = document.getElementById("dob").value;
  const password = document.getElementById("password").value;

  const user = {
    cnic,
    dob,
    password,
  };

  const users = localStorage.getItem("users");
  const userArr = JSON.parse(users);

  if (!users) {
    localStorage.setItem("users", JSON.stringify([user]));
  } else {
    const duplicateCheck = checkDuplicate(user);
    if (!duplicateCheck) {
      userArr.push(user);
      localStorage.setItem("users", JSON.stringify(userArr));
    } else {
      console.log("duplicateCheck");
    }
  }
};

const checkDuplicate = (checkUser) => {
  const users = localStorage.getItem("users");
  const userArr = JSON.parse(users);

  const userExist = userArr.find((user) => {
    if (user.cnic == checkUser.cnic) {
      return true;
    }
  });

  return userExist;
};

const loginRoute = () => {
  location.replace("./login.html");
};

const signUpRoute = () => {
  location.replace("./signup.html");
};