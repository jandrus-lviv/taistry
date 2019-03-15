const clockPlaceholder = document.querySelector('.clock');
setInterval(() => clockPlaceholder.innerText = (new Date()).toLocaleTimeString(), 1000);

$(function() {
    $('.smooth').on('click', function(event) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});