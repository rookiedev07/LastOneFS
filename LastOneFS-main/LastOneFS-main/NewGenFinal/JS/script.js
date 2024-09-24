document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('serv1');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    function togglediv() {
        if (overlay.style.display === "none" || overlay.style.display === "") {
            overlay.style.display = "block";
            document.body.classList.add('blurred');
        } else {
            overlay.style.display = "none";
            document.body.classList.remove('blurred');
        }
    }
    toggleBtn.addEventListener('click', togglediv);
    closeBtn.addEventListener('click', togglediv);
});
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('serv2');
    const overlay = document.getElementById('overlay2');
    const closeBtn = document.getElementById('closeBtn2');

    function togglediv() {
        if (overlay.style.display === "none" || overlay.style.display === "") {
            overlay.style.display = "block";
            document.body.classList.add('blurred');
        } else {
            overlay.style.display = "none";
            document.body.classList.remove('blurred');
        }
    }
    toggleBtn.addEventListener('click', togglediv);
    closeBtn.addEventListener('click', togglediv);
});
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('serv3');
    const overlay = document.getElementById('overlay3');
    const closeBtn = document.getElementById('closeBtn3');

    function togglediv() {
        if (overlay.style.display === "none" || overlay.style.display === "") {
            overlay.style.display = "block";
            document.body.classList.add('blurred');
        } else {
            overlay.style.display = "none";
            document.body.classList.remove('blurred');
        }
    }
    toggleBtn.addEventListener('click', togglediv);
    closeBtn.addEventListener('click', togglediv);
});
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('plan1');
    const overlay = document.getElementById('form1');
    const closeBtn = document.getElementById('closeBtn4');
    const GetWorkout = document.getElementById('submitBtn');

    function togglediv() {
        if (overlay.style.display === "none" || overlay.style.display === "") {
            overlay.style.display = "block";
            document.body.classList.add('blurred');
        } else {
            overlay.style.display = "none";
            document.body.classList.remove('blurred');
        }
    }
    toggleBtn.addEventListener('click', togglediv);
    closeBtn.addEventListener('click', togglediv);
});
