// Select elements
const inputField = document.querySelector("input");
const qrContainer = document.querySelector(".qrcode");
let btn = document.querySelector("button");
const body = document.body;

// Create QR code instance
const qrcode = new QRCode(qrContainer);

// Generate initial QR code
qrcode.makeCode("Why did you scan me?");

// Function to generate QR
function generateQr() {
    const inputValue = inputField.value.trim();

    if (inputValue === "") {
        alert("Input field cannot be blank!");
        return;
    }

    qrcode.makeCode(inputValue);
}

// Listen for Enter key press
inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        generateQr();
    }
});
let mode = "light"//dark
btn.addEventListener('click',function(){
    if(mode === "light"){
        mode = "dark";
        btn.innerText = "Light Mode";
        
    }
    else{
        mode = "light";
        btn.innerText = "Dark Mode";      
    }
})
//Toggle Dark Mode
function toggleDarkMode() {
    body.classList.toggle("dark-mode");

    // Store user preference in local storage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Apply saved theme on page load
// window.onload = () => {
//     if (localStorage.getItem("theme") === "dark") {
//         body.classList.add("dark-mode");
//     }
// };
