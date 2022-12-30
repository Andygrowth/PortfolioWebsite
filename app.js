//Navbar scroll
window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) { document.getElementById("navbar").classList.add("scrolled");}

    else{
        document.getElementById ("navbar").classList.remove("scrolled");
    }
}
//AOS
AOS.init({
    duration: 800,
});
//Numbers
let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseFloat(valueDisplay.getAttribute
    ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue +=1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});
//Contact form hero


