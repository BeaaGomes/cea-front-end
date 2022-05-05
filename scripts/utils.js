const api_path = "http://localhost:8000"; //Add the API path here

function makeRequest(method, path, success, data = null, is_image = false) {
    token = sessionStorage.getItem("token")

    $.ajax({
        method,
        url: api_path + "/api/" + path,
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

function fullImagePath(partial_path) {
    return api_path + "/storage/" + partial_path.substring(6)
}

function formatPrice(price) {
    price = parseFloat(price).toFixed(2)
    return "R$" + price
}