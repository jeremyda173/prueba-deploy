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
  
  // Función para eliminar cookies
  function deleteAllCookies() {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookieName = cookies[i].split("=")[0];
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    }
  }
  
  // Verificar si hay sesión activa
  const session = readCookie("session");
  if (!session) {
    alert("Tu sesión ha expirado. Redirigiendo al login...");
    window.location.href = "login.html";
  } else {
    document.getElementById("username").textContent = session;
  }
  
  // Manejar el botón de cerrar sesión
  const logoutButton = document.getElementById("logoutButton");
  logoutButton.addEventListener("click", () => {
    deleteAllCookies();
    alert("Has cerrado sesión correctamente. Reiniciando...");
    location.reload(true);
    setTimeout(() => {
      window.location.href = "/index.html";
    }, 500);
  });
  