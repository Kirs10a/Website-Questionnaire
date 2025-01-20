document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");
    const iti = window.intlTelInput(phoneInput, {
        preferredCountries: ["za", "us", "gb"],
        initialCountry: "auto",
        geoIpLookup: function (callback) {
            fetch("https://ipinfo.io/json")
                .then((res) => res.json())
                .then((data) => callback(data.country))
                .catch(() => callback("us"));
        },
    });

    window.toggleLogoOptions = function () {
        const logoOption = document.getElementById("logo").value;
        const uploadSection = document.getElementById("logoUploadSection");
        const canvasSection = document.getElementById("logoCanvasSection");

        if (logoOption === "upload") {
            uploadSection.style.display = "block";
            canvasSection.style.display = "none";
        } else if (logoOption === "draw") {
            uploadSection.style.display = "none";
            canvasSection.style.display = "block";
        } else {
            uploadSection.style.display = "none";
            canvasSection.style.display = "none";
        }
    };

    window.clearCanvas = function () {
        const canvas = document.getElementById("logoCanvas");
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    // Light mode switch functionality
    const toggleBtn = document.getElementById('toggleBtn');
    const body = document.body;

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            toggleBtn.textContent = 'Switch to Dark Mode';
        } else {
            toggleBtn.textContent = 'Switch to Light Mode';
        }
    });
});
