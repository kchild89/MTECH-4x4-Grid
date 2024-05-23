$(document).ready(function () {
    for (let i = 0; i < 16; i++) {
        $('#grid-container').append('<div class="box"></div>');
    }

    $('.box').click(function () {
        $(this).toggleClass('clicked');
    });
});
