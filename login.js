// Función para crear cookies
function createCookie(name, value, seconds) {
  const date = new Date();
  date.setTime(date.getTime() + seconds * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Función para leer cookies
function readCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

// Limpiar formulario al cargar la página
window.addEventListener("load", () => {
  loginForm.reset();

  const session = readCookie("session");
  if (session) {
    alert("Ya tienes una sesión activa. Redirigiendo...");
    window.location.href = "welcome.html";
  }
});

// Manejar el envío del formulario
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    // Simular inicio de sesión
    createCookie("session", username, 60);
    alert("Inicio de sesión exitoso. Redirigiendo...");
    window.location.href = "welcome.html";
  } else {
    alert("Por favor, completa todos los campos.");
  }
});
