
const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");


buttonText.addEventListener('click', function() {
    
    const text = inputText.value;

    localStorage.setItem("savedText", text);
    inputText.value = "";
});
