$(function(){
    var time = 6;

    function redirect() {
        setTimeout(redirect, 1000);
        $(".timer").html(time);
        if(time == 0){
            window.location.href="end.html";
        }

        time --;
    }

    redirect();

});

