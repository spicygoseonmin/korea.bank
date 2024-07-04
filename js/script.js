$(document).ready(function(){

    // // 서브메뉴 전체가 보여지는 코드
    // $(".menu-list > li").mouseover(function(){
    //     $(".submenu").stop().slideDown(500)
    // }).mouseout(function(){
    //     $(".submenu").stop().slideUp(500)
    // })

    // 상단 메뉴에 해당하는 서브메뉴가 보여지는 코드
    $(".menu-list > li").mouseover(function(){
        // console.log(this);
        $(this).find(".submenu").stop().slideDown(500)
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp(500)
    });

    // 이미지 슬라이드
setInterval(function(){
    $(".slideImg-list").delay(2000);
    $(".slideImg-list").animate({ marginLeft: -1200 });
    $(".slideImg-list").delay(2000);
    $(".slideImg-list").animate({ marginLeft: -2400 });
    $(".slideImg-list").delay(2000);
    $(".slideImg-list").animate({ marginLeft: 0 });
});



    // tapmenu
    $(function(){
        $(".tabmenu > li > a").click(function(){
            // console.log(this);
            // console.log는 변수가 작용하고 있는지 F12번에 내역을 남겨줌 
            $(this).parent().addClass("active").siblings().removeClass("active");
        });
    });

    // 모달창 기능
    $(".popup").click(function(){
        $(".modal").addClass("active")
    });
    // 모달창 닫기 기능
    $(".modal-close").click(function(){
        $(".modal").removeClass("active")
    });

});