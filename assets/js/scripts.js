const button = document.getElementById("mode-selector");

button.addEventListener("click",changeStyles);

function changeStyles() {
    var nodeList  = document.querySelectorAll('h1, button, footer, body');

    for (let i = 0; i < nodeList.length; i++) {
        if (nodeList[i].id == "page-title") {
            if (nodeList[i].textContent == "Light Mode ON") {
                nodeList[i].textContent = "Dark Mode ON";
            } else{
                nodeList[i].textContent = "Light Mode ON";
            }
        }
        if (nodeList[i].id == "mode-selector") {
            if (nodeList[i].textContent == "Light Mode") {
                nodeList[i].textContent = "Dark Mode";
            } else{
                nodeList[i].textContent = "Light Mode";
            }
        }
        nodeList[i].classList.toggle("dark-mode");
    }
}

