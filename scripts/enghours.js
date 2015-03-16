$(document).ready(function() {
    $('#calculate').on('click', function() {
        var afhrs = (parseInt($('#curhrs').val() * 60)) + parseInt($('#curmins').val());
        var inhrs = (parseInt($('#afhrs1').val() * 60)) + parseInt($('#afmins1').val());
        var ecuhrs = (parseInt($('#ecuhrs1').val() * 60)) + parseInt($('#ecumins1').val());
        var result = afhrs - inhrs + ecuhrs;
        $('#result').text(Math.floor(result / 60) + ' : ' + result % 60).addClass('res1');
    });
    $('#reset').on('click', function() {
        $('#afhrs1').val('');
        $('#afmins1').val('');
        $('#ecuhrs1').val('');
        $('#ecumins1').val('');
    });
});