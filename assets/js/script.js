const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if(username === "" || password === "") {
        errorMsg.textContent = "⚠ Please fill all fields";
    } else {
    window.open("welcome.html", "_blank");
    }
})