$(function () {
    $('.companies').hide();
    $('.stations li').click(function () {
        $('.companies').hide();
        $('.stations li').removeClass('selected');
        $(this).addClass('selected');
        var toShow = $(this).data('stationid');
        $('#' + toShow).show();
    });

    $('.companies li').click(function () {
        $('.companies li').removeClass('selected');
        $(this).addClass('selected');
    });

    $('#add_form label').click(function () {
        $(this).parents('.group').find('label').removeClass('toggled');
        $(this).addClass('toggled');
    });
    
});