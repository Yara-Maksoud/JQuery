
$('#fadeOut').click(function() {
    $('.fade h3').fadeOut();
})

$('#fadeIn').click(function() {
    $('.fade h3').fadeIn();
})

$('#showPic').click(function() {
    $('img').show();
})

$('#hidePic').click(function() {
    $('img').hide();
    $('h4').hide();
})

$('#append').click(function(){
    $('.pic').append('<h4> Where the mountain hugs the sea </h4>')
})

$('#addInput').click(function(){
    $('#addName').html("<h2>Please enter your name here!</h2> <input type='text'>");
    $('input').addClass('inputName');
    $('#addName').append('<div><h1></h1></div>');
    $('h1').addClass('greeting')
    $('.greeting').css('display', 'none');
    $('.inputName').on('change', function(){
        const userName = $('.inputName').val();
        $('.greeting').css('backgroundColor', 'lightBlue');
        $('.greeting').text(`Hello ${userName}, Welcome to our website!`);
        $('.greeting').slideDown('slow');

    })
})