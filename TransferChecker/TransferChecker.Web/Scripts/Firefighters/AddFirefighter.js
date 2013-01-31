$(function () {
    $('.companies li').click(function () {
        $('.companies li').removeClass('selected');
        $(this).addClass('selected');
    });

    $('.add_form label input').click(function () {
        $(this).parent().parent('.group').find('label').removeClass('toggled');
        $(this).parent().addClass('toggled');
    });
    
});