$(document).ready(function () {

    $('#jsCurrentYear').text(new Date().getFullYear());
 
    particlesJS.load('particles-js', 'js/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

});

