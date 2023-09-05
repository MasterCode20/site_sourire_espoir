$(document).ready(function(){
    $("#myVideo").bind('play', function(){
        $(".btn-play i").removeClass('fa-play').addClass('fa-pause');
    });
    $("#myVideo").bind('pause', function(){
        $(".btn-play i").removeClass('fa-pause').addClass('fa-play');
    });
    $(".btn-play").click(function(){
        if($("#myVideo").get(0).paused){
            $("#myVideo").get(0).play();
        }
        else{
            $("#myVideo").get(0).pause();
        }
    });
    $("#myVideo").bind('timeupdate', function(){
        var progressBar = document.getElementById('progress');
        var percentage = Math.floor((100 / $("#myVideo").get(0).duration) * $("#myVideo").get(0).currentTime);
        $(progressBar).css('width', percentage+'%').attr('aria-valuenow', percentage);
        $(".currentTime").text(formatTime($("#myVideo").get(0).currentTime));
        $(".totalTime").text(formatTime($("#myVideo").get(0).duration));
    });
    function formatTime(time){
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time - minutes * 60);
        if(seconds < 10){
            seconds = '0'+seconds;
        }
        return minutes+':'+seconds;
    }
});