const showData = document.getElementById("data");

const savedData = localStorage.getItem("savedText");

if (savedData) {
  showData.textContent = savedData;
} else {
  showData.textContent = "No hay datos guardados.";
}
