$('img').click(function () {  
    if (src = $(this).attr('src') != $(this).attr('alt-img')) {
        $(this).attr('src', $(this).attr('alt-img'));
    } else {
        $(this).attr('src', $(this).attr('origin'));

    }
})