let search = document.querySelector("#search");
let qrimg = document.querySelector("#qrimg");
let loader = document.querySelector("#loading");

function voice() {
    let recog = new webkitSpeechRecognition(); 
    recog.lang = "en-GB";
    
    recog.onresult = function (event) {
        console.log(event);
        document.getElementById("textInput").value = event.results[0][0].transcript;
    };
    
    recog.start();
}
search.addEventListener("click", () => {
    loader.style.display = "block";

    let input = document.querySelector("#textInput").value;
    let api = `https://quickchart.io/qr?text=${input}&dark=0d7339&ecLevel=H&margin=1&size=150`;

    qrimg.onload = function () {
        loader.style.display = "none";
    };

    qrimg.onerror = function () {
        alert("Failed to load the QR code image.");
        loader.style.display = "none";
    };

    qrimg.src = api;
});
