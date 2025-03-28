document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".buy-btn").forEach(button => {
        button.addEventListener("click", function() {
            alert("Product added to cart!");
        });
    });
});
