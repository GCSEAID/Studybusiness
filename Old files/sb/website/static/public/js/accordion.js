
function makeAccWork() {
    document.querySelectorAll(".accordion-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const accContent = btn.nextElementSibling;
            btn.classList.toggle("accordion-btn-active");

            if (btn.classList.contains("accordion-btn-active")) {
                accContent.style = "max-height: 100%;padding: 1.5rem;"
                // accContent.style.maxHeight = accContent.scrollHeight + "px";
            } else {
                accContent.style.maxHeight = 0;
                accContent.style = "padding: 0px 15px;"
            }
        });
    });
}