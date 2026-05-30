const textArea = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

textArea.addEventListener("input",()=> {
    const length = textArea.value.length;
    charCount.innerText = length;
})