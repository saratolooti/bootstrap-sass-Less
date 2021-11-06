$(document).ready(() => {
    $('#mycarousel').carousel({ interval:2000 });
    
    //pause and play button carousel
    $('#carouselButten').click(()=>{
        if($('#carouselButten').children('span').hasClass('fa-pause'))
        {
            $('#mycarousel').carousel('pause');
            $('#carouselButten').children('span').removeClass('fa-pause');
            $('#carouselButten').children('span').addClass('fa-play');
        }
        else
        {
            $('#mycarousel').carousel('cycle');
            $('#carouselButten').children('span').removeClass('fa-play');
            $('#carouselButten').children('span').addClass('fa-pause');
        }
    });

    //login modal
    $('#loginModalBtn').click(() => {
        $('#loginModel').modal('toggle');
    });
    $('#modalCloseBtn').click(() => {
        $('#loginModel').modal('hide');
    });

    //reserve modal
    $('#reserveModalBtn').click(() => {
        $('#reserveModal').modal('toggle');
    });
    $('#modalCloseBtnR').click(() => {
        $('#reserveModal').modal('hide');
    });


});
