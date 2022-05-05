function makeRequest(method, path, success, data = null, is_image = false) {
    token = sessionStorage.getItem("token")

    $.ajax({
        method,
        url: `http://localhost:8000/api/${path}`,
        processData: !is_image,
        contentType: is_image ? false : "application/x-www-form-urlencoded; charset=UTF-8",
        cache: false,
        enctype: 'multipart/form-data',
        headers: {
            "Authorization": `Bearer ${token}`
        },
        data,
        success
    })
}