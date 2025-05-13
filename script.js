const qrText = document.getElementById("qrText");
const sizes = document.getElementById("sizes");
const GenerateBtn = document.getElementById("GenerateBtn");
const DownloadBtn = document.getElementById("DownloadBtn");
const qrContainer = document.getElementById("qrBody");

let size = sizes.value;

GenerateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isEmptyInput();
})


function isEmptyInput(){
    if(qrText.value.length>0){
        generateQR();
    }
    else{
        alert("Please enter the text or url to generate the QR Code ")
    }
}

sizes.addEventListener("change",(e)=>{
    size=e.target.value
})


function generateQR() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        width: size,
        height: size,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}

DownloadBtn.addEventListener("click", () => {
    let img = document.querySelector("#qrBody img");
    if (img) {
        let imgAtt = img.getAttribute("src");
        DownloadBtn.setAttribute("href", imgAtt);
    } 
    else {
        let canvas = document.querySelector("canvas");
        if (canvas) {
            DownloadBtn.setAttribute("href", canvas.toDataURL());
        }
    }
    DownloadBtn.setAttribute("download", "qrcode.png");
});
