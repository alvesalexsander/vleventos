$(".rslides").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 1500,            // Integer: Speed of the transition, in milliseconds
    timeout: 6000,          // Integer: Time between slide transitions, in milliseconds
});

function menu() {
    document.getElementById("myDropdown").classList.toggle("show");
}