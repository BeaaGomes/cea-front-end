token = sessionStorage.getItem("token")
if (token == null) {
    window.location.href = "index.html";
}