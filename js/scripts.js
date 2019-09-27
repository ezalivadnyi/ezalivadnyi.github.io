$(document).ready(function () {

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'js/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    var myFullpage = new fullpage('#fullpage', {
		sectionsColor: [
		    'rgba(31, 183, 255, 0.51)',
            'rgba(0, 0, 0, 0.23)',
            'rgba(73, 119, 204, 0.42)',
            'rgba(38, 14, 236, 0.18)',
            'rgba(16, 255, 0, 0.22)',
            'rgba(176, 178, 180, 0.52)'
        ],
        anchors:['page-header', 'skillsPage', 'advantagesPage', 'portfolioPage', 'contactsPage', 'page-footer'],
        menu: '#menu',
        lazyLoad: true
	});

    // Scroll Down The Window when click on first screen's button.
    // var $scroll_btn = document.getElementById('js-scroll-down');
    // var $js_skills_screen = document.getElementById('js-skills-screen');
    // $scroll_btn.addEventListener("click", function (ev) {
    //     var position = $js_skills_screen.getBoundingClientRect().top + window.scrollY;
    //     console.log(position);
    //
    //     window.scrollTo(0, position);
    // })
});

