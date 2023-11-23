let search = document.querySelector("#search");
let qrimg = document.querySelector("#qrimg");
let loader = document.querySelector("#loading");

search.addEventListener("click", () => {
    loader.style.display = "block";

    // Corrected the variable name to "input" and fixed the string interpolation
    let input = document.querySelector("#textInput").value;
    let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;

    // Added an error handling for the image load event
    qrimg.onload = function () {
        loader.style.display = "none";
    };

    // Added an error handling for the image load event
    qrimg.onerror = function () {
        alert("Failed to load the QR code image.");
        loader.style.display = "none";
    };

    qrimg.src = api;
});