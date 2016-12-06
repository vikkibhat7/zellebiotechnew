$(document).ready(function(){
    $(".backtop").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 1300)
    });
   function redMoreclick(event){
            var rm = $(".more"),
            moreText = "More",
            lessText = "Less";
            ishoverOn = false;
            rm.click(function () {
                $(this).prev().slideToggle(40);
                if($(this).text() == moreText){
                    $(this).css("background-image", "url(images/arrowinside.png)").addClass("less");
                    $(".inner").first().addClass("moremenu-enabled");
                     $(".nav-partition grey-a,.nav-partition.grey-a:hover").css("border","none ");
                    $(this).text(lessText);
                }else{
                    $(this).text(moreText);
                    $(this).css("background-image", "url(images/arrowwhite.png)").removeClass("less");
                    $(".inner").first().removeClass("moremenu-enabled");
                }          
        });
        // $(".more").on("click",function () {
        //     $(this).prev().slideToggle(200);
        //         $(".more").addClass("visible");
        //             $(".sticky-navigation-bar .nav-partition:hover").css("border","none");
        //             $(".inner").first().addClass("moremenu-enabled").mouseleave(function() {
        //                 $(this).removeClass("moremenu-enabled");
        //                 $(".mcontent").hide();
        //                 $(".more").removeClass("visible");
        //               });
        // });
   }
   function testingMoreclick(){
        var rm = $(".morelink"),
        moreText = "More",
        lessText = "Less";
        rm.click(function () {
            $(this).prev().slideToggle(100);
            if($(this).text() == moreText){
                $(this).css("background-image", "url(images/arrowup.png)");
                $(this).text(lessText);
            }else{
                $(this).text(moreText);
                $(this).css("background-image", "url(images/arrowdown.png)");
            }
            
        });
    }
    function checkRedbarVisble(){
        moreText = "More";
        $(".sticky-navigation-bar p a").on("click",function(){
            
        });
    }
    function productPageRoutes(){
        $(".sec1").on("click",function(){
            window.location.href="/office.html";
        });
        $(".sec2").on("click",function(){
            window.location.href="/lab.html";
        });

        $(".blockurl1").on("click",function(){
            window.location.href="/charles.html";
        });
        $(".blockurl2").on("click",function(){
            window.location.href="/protagen.html";
        });
        $(".blockurl3").on("click",function(){
            window.location.href="/eugenex.html";
        });
        $(".blockurl4").on("click",function(){
            window.location.href="/cygnus.html";
        });
        $(".blockurl5").on("click",function(){
            window.location.href="/minerva.html";
        });
        $(".blockurl6").on("click",function(){
            window.location.href="/bioconcept.html";
        });
        $(".blockurl7").on("click",function(){
            window.location.href="/innochemistry.html";
        });
        $(".blockurl8").on("click",function(){
            window.location.href="/cyclex.html";
        });
        $(".blockurl9").on("click",function(){
            window.location.href="/dojindo.html";
        });
        $(".blockurl10").on("click",function(){
            window.location.href="/acris.html";
        });
        $(".blockurl11").on("click",function(){
            window.location.href="/southern.html";
        });
        $(".blockurl12").on("click",function(){
            window.location.href="/assaybio.html";
        });
        $(".blockurl13").on("click",function(){
            window.location.href="/aviva.html";
        });
        $(".blockurl14").on("click",function(){
            window.location.href="/meridian.html";
        });
        $(".blockurl15").on("click",function(){
            window.location.href="/discoverx.html";
        });
    }
    function downloadclick(){
        $(".downloadclick").on("click",function(){
           download("hello world", "data.xls", "text/plain");
        });
        
    }
    downloadclick();
    productPageRoutes();
    checkRedbarVisble();
    redMoreclick();
    testingMoreclick();
});
// $(".fixed-gray-header").delay(400).fadeIn(500);
$(".sticky-navigation-bar").delay(500).show();
$(window).scroll(function() {
    if ($(window).width() > 600) {
        function stickyHeader(){
            if ($(this).scrollTop() > 1000) {
                $(".backtop").show();
            } else {
               $(".backtop").hide();
            }
            //labpage fixed header
            if ($(this).scrollTop() > 592) {
                $(".sticky-navigation-bar").addClass("fixed-header");
                $(".partition-description").css("margin-top","350px");
                $(".labpage-wrapper .fixed-gray-header").show().addClass("fixed-gray-header-style");
                $(".sticky-navigation-bar").css("top","95px");
            } else {
                $(".sticky-navigation-bar").removeClass("fixed-header");
               $(".labpage-wrapper .fixed-gray-header").removeClass("fixed-gray-header-style").hide();
                $(".partition-description").css("margin-top","130px");
            }
            //homepage fixed header gray
            if ($(this).scrollTop() > 595) {
                $(".homepage .fixed-gray-header").show().addClass("fixed-gray-header-style");
            } else {
                $(".homepage .fixed-gray-header").removeClass("fixed-gray-header-style").hide();
            }
            if ($(this).scrollTop() > 590) {
                $(".productpage-wrapper .fixed-gray-header").show().addClass("fixed-gray-header-style");
            } else {
               $(".productpage-wrapper .fixed-gray-header").removeClass("fixed-gray-header-style").hide();
            }
        }
        stickyHeader();
    }
});
$( window ).resize(function() {
    $winwidth = $(window).width();
    //$( ".logo" ).css("left",$winwidth/6)
});
$(window).load(function() {
        setTimeout(function(){
            locationHashChanged();
        },500);   
    });
    function locationHashChanged(){
        var hashVal = window.location.hash.replace('#','');
        if(hashVal){
            var offsetVal = $('.'+hashVal).offset().top-300;
            $.scrollTo(offsetVal,100);    
        }
        
    }
if ($(window).width() > 768) {
    window.onhashchange = locationHashChanged;
}