document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("biggerButton");
    const moo = document.getElementById("moo");
    const textArea = document.querySelector("textarea");

    btn.onclick = () => {
        btn.style.fontSize = "24pt";
    }

    moo.onclick = () => {
      textArea.value = textArea.value.toUpperCase();

      var parts = textArea.value.split(".");
      newText = parts.join("-Moo. ");

      textArea.value = newText;
    }

});

function applyStyles() {
    const fancy = document.getElementById("Fancy");
    const boring = document.getElementById("Boring");
    const textArea = document.querySelector("textarea");

    alert("Style changed!");
    
    if (fancy.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
    if (boring.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}