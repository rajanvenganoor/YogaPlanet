document.addEventListener("DOMContentLoaded", function () {

    function toggleImages() {
        const maturityField = document.querySelectorAll('input[name="maturity"]');
        let selectedValue = null;

        maturityField.forEach(function (radio) {
            if (radio.checked) {
                selectedValue = radio.value;
            }
        });

        const imageField = document.getElementById("id_image");
        const cimageField = document.getElementById("id_cimage");

        if (!imageField || !cimageField) return;

        if (selectedValue === "A") {
            cimageField.disabled = true;
            imageField.disabled = false;
        }
        else if (selectedValue === "C") {
            imageField.disabled = true;
            cimageField.disabled = false;
        }
        else {
            imageField.disabled = false;
            cimageField.disabled = false;
        }
    }

    // Run on page load
    toggleImages();

    // Run when maturity changes
    document.querySelectorAll('input[name="maturity"]').forEach(function (radio) {
        radio.addEventListener("change", toggleImages);
    });

});
