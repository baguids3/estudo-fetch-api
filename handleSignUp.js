const form = document.getElementById('signupForm');
const responseDiv = document.getElementById('responseData');

async function handleSignUp(event) {
  event.preventDefault();
  const userData = {
    name: document.getElementById('nameInput').value,
    email: document.getElementById('emailInput').value,
    password: document.getElementById('passwordInput').value,
  }

  const reqHeader = new Headers();
  reqHeader.append('Content-Type', 'application/json');

  const response = await fetch('http://192.168.15.5:7777/signup', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: reqHeader,
  });

  const responseData = await response.json();

  showUserData(responseData);
  console.log(responseData);
}

function showUserData(user) {
  responseDiv.innerHTML = "";

  const idh4 = document.createElement("h4");
  const nameh4 = document.createElement("h4");
  const emailh4 = document.createElement("h4");
  const passwordh4 = document.createElement("h4");

  idh4.innerHTML = "id: " + user.id;
  nameh4.innerHTML = "name: " + user.name;
  emailh4.innerHTML = "email: " + user.email;
  passwordh4.innerHTML = "password: " + user.password;

  responseDiv.appendChild(idh4);
  responseDiv.appendChild(nameh4);
  responseDiv.appendChild(emailh4);
  responseDiv.appendChild(passwordh4);

}

form.addEventListener('submit', handleSignUp);