// Welcome Message
console.log("Portfolio Website Loaded Successfully");

//page fade animation
window.onload=function(){
    document.body.style.opacity="1";
};

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Contact Form
const form = document.querySelector("form");

if(form){
    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you for contacting me!");

        form.reset();
    });
}
