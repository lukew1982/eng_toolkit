$(document).ready(function() {
    $('#calculate').on('click', function() {
        var afhrs = (parseInt($('#curhrs').val() * 60)) + parseInt($('#curmins').val());
        var inhrs = (parseInt($('#afhrs1').val() * 60)) + parseInt($('#afmins1').val());
        var ecuhrs = (parseInt($('#ecuhrs1').val() * 60)) + parseInt($('#ecumins1').val());
        var result = afhrs - inhrs + ecuhrs;
        
        if (isNaN(result)) {
            $('#result').text('Error: You have entered a value that is not a number.').removeClass('highlight').addClass('error');
        } else if (afhrs  < inhrs) {
            $('#result').text('Error: A/F hours on installation cannot be greater than current A/F hours.').removeClass('highlight').addClass('error');
        } else  if (($('#curmins').val()) > 59 || ($('#afmins1').val()) > 59 || ($('#ecumins1').val()) > 59) {
            $('#result').text('Error: The value of the minutes field cannot be greater than 59.').removeClass('highlight').addClass('error');
        } else {
            $('#result').text(Math.floor(result / 60) + ' : ' + ("0" + (result % 60)).slice(-2)).removeClass('error').addClass('highlight');
        }
    });
    $('#reset').on('click', function() {
        $('#afhrs1').val('');
        $('#afmins1').val('');
        $('#ecuhrs1').val('');
        $('#ecumins1').val('');
    });
});