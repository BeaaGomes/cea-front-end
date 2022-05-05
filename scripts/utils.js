function fullImagePath(partial_path) {
    return "http://localhost:8000/storage/" + partial_path.substring(6)
}

function formatPrice(price) {
    price = parseFloat(price).toFixed(2)
    return "R$" + price
}