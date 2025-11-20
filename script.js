const bar = document.getElementById("bar");
const nav = document.getElementById("nav-links");
const close = document.getElementById("close");

if(bar) {
    bar.addEventListener('click', ()=> {
        nav.classList.toggle('active');
        nav.style.transition = "0.3s";
    })  

    close.addEventListener('click', ()=> {
        nav.classList.toggle('active');
        nav.style.transition = "0.3s";
    })

}

// Modal functionality
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("account-modal");
    const openModalBtn = document.getElementById("open-modal");
    const closeModalBtn = document.querySelector(".close-btn");
    const hideModel = document.getElementById("closed");

    // Open modal
    openModalBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Close modal when "X" is clicked
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    hideModel.addEventListener("click",() => {
        modal.style.display = "none";
        document.querySelector(".Cleartext").value = "";
        document.querySelector(".CleartextEmail").value = "";
        document.querySelector(".CleartextPassword").value = "";
    })

    // Close modal if clicked outside the modal content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Brightness

const Sun = document.getElementById("changeTheme");
const Title1 = document.querySelector("#product1 h2");
const Title1Par = document.querySelector("#product1 p");
const pro1 = document.querySelectorAll(".pro");
const product2 = document.getElementById("#product2");
// const pro2 = document.querySelectorAll(".pro");
const banner = document.getElementById("banner");
Sun.addEventListener("click", () =>{
    document.body.classList.toggle("darkMode");
    Title1.classList.toggle("darkMode");
    Title1Par.classList.toggle("darkMode");
    pro1.forEach(el => el.classList.toggle("darkMode"));  // Toggle dark mode for all product elements
    // pro2.forEach(el => el.classList.toggle("darkMode"));  // Toggle dark mode for all product elements
    banner.classList.toggle("darkMode");z
})

