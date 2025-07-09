// ==== Fungsi Login ====
function loginUser() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const storedUsername = localStorage.getItem("kpml_user");
  const storedPassword = localStorage.getItem("kpml_pass");

  if (username === storedUsername && password === storedPassword) {
    alert("Login berhasil!");
    localStorage.setItem("logged_in", "yes");
    window.location = "dashboard.html";
  } else {
    alert("Username atau password salah.");
  }
}

// ==== Fungsi Daftar ====
function registerUser() {
  const username = document.getElementById("reg-username").value;
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;

  if (!username || !email || !password) {
    alert("Isi semua kolom!");
    return;
  }

  localStorage.setItem("kpml_user", username);
  localStorage.setItem("kpml_email", email);
  localStorage.setItem("kpml_pass", password);

  alert("Pendaftaran berhasil! Silakan login.");
  window.location = "index.html";
}

// ==== Fungsi Logout (bisa juga dipindah ke dashboard.html) ====
function logoutUser() {
  localStorage.removeItem("logged_in");
  window.location = "index.html";
    }
