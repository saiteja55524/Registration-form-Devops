
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (!name || !email || !password || !confirmPassword) {
        showMessage("Please fill in all fields.", "red");
        return;
    }

    if (password.length < 6) {
        showMessage("Password must have at least 6 characters.", "red");
        return;
    }

    if (password !== confirmPassword) {
        showMessage("Passwords do not match.", "red");
        return;
    }

    showMessage("Registration successful! (Demo only)", "green");
    form.reset();
});

function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}
