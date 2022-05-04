function makeRequest(method, path, success, data = null) {
    token = sessionStorage.getItem("token")

    $.ajax({
        method,
        url: `http://localhost:8000/api/${path}`,
        headers: {
            "Authorization": `Bearer ${token}`
        },
        data,
        success
    })
}