$(document).ready(function(){
	$(".backtop").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 1300)
    });
   function redMoreclick(event){
        $(".more").on("click",function () {
            $(this).prev().slideToggle(200);
                $(".more").addClass("visible");
                //$(".sticky-navigation-bar .nav-partition").css("border","none");
                    $(".inner").first().addClass("moremenu-enabled").mouseleave(function() {
                        $(this).removeClass("moremenu-enabled");
                        $(".mcontent").hide();
                        $(".more").removeClass("visible");
                        $(".sticky-navigation-bar .nav-partition").css("border","1px solide")
                    });
        });
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
    checkRedbarVisble();
    redMoreclick();
    testingMoreclick();
});
$(".fixed-gray-header").delay(400).fadeIn(500);
$(".sticky-navigation-bar").delay(500).fadeIn(100);
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
               $(".partition-description").css("margin-top","290px")
            } else {
               $(".sticky-navigation-bar").removeClass("fixed-header");
               $(".partition-description").css("margin-top","130px")
            }
            //homepage fixed header
            if ($(this).scrollTop() > 1040) {
                    $(".fixed-gray-header").addClass("fixed-gray-header-style");
                } else {
                $(".fixed-gray-header").removeClass("fixed-gray-header-style");
            }
        }
        stickyHeader();
    }
});
$(window).load(function() {
        setTimeout(function(){
            locationHashChanged();
        },500);   
    });
    function locationHashChanged(){
        var hashVal = window.location.hash.replace('#','');
        if(hashVal){
            var offsetVal = $('.'+hashVal).offset().top - 210;
            $.scrollTo(offsetVal,400);    
        }
        
    }
if ($(window).width() > 768) {
    window.onhashchange = locationHashChanged;
}