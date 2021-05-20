function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) {
            startime = currentTime;
        }
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
    var section1 = document.querySelector('#section1');
    section1.addEventListener('click', function() {
        smoothScroll('#section2', 1000);
    });
}






function numberValidation() {

    var n = document.signup.numbers.value;

    if (isNaN(n)) {
        document.getElementById(
                "numberText").innerHTML =
            "Please enter Numeric value";
        return false;
    } else {
        document.getElementById(
                "numberText").innerHTML =
            "Numeric value is: " + n;
        return true;
    }
}