//
$(function(){

    //navList
    $("#navList li").click(function(){
        var index = $(this).index();
        console.log($(this).index())
        $(this).addClass("liIsActive").siblings().removeClass("liIsActive")
        $(".module").eq(index).removeClass("displayNone").siblings().addClass("displayNone")
    })
})