var current_checked = 3
var visible_overlay = "#axis_set_01"
var user_clicked = false;
var carousel_handle = null;
var animating = false
function mod(n, m) {
    return ((n % m) + m) % m;
  }


$(document).ready(function() {
    $('.more-info').hide();

    $("#hide-terms").click(function(e){
        $(".term-box-words").slideToggle( 'slow', function(){
            var text = $("#hide-terms").text();
            $("#hide-terms").text(
                text == "显示" ? "隐藏" : "显示");
         });
    })

    $(".modal-dialog").click(function(e){
    })

    /*
    var myModalEl = document.getElementById('download-beautiful-modal')
    myModalEl.addEventListener('hidden.bs.modal', function (event) {
      // do something...
      alert("BROKE")
    })
    */



    $(".dropdown-item").hover(function(e){
        $('.download-click-section').hide();
        $(this).children('.download-click-section').show();
        e.stopPropagation();
    }, function(e) {
        $('.download-click-section').hide();

    })

    $('.mapbox').bind('contextmenu',function() { return false; });

    $('img').on('dragstart', function(event) { event.preventDefault(); });


    $(".phone-banner-box").click(function(e){
        set_modal_pic(this.id)
        $('#myModal').modal('toggle');

    })


    $(".map-effect").hover(
        function(e){
            if($('.map-container-info').is(":hidden")){

                $(".map-container-info").fadeIn(200);
            }
            switch(e.target.id) {
                case "area_01":
                    $("#slice-map").attr('src', "https://menard.pha.jhu.edu/MapoftheUniverse/Images/WebMap_V02/near.png")
                    $(".map-container-info > h1").text(information[4].title)
                    $(".map-container-info>img").attr('src', information[4].img)
                    $(".map-container-info>p").text(information[4].caption)
                    break;
                case "area_02":
                    $("#slice-map").attr('src', "https://menard.pha.jhu.edu/MapoftheUniverse/Images/WebMap_V02/red.png")
                    $(".map-container-info > h1").text(information[3].title)
                    $(".map-container-info>img").attr('src', information[3].img)
                    $(".map-container-info>p").text(information[3].caption)
                    break;
                case "area_03":
                    $("#slice-map").attr('src', "https://menard.pha.jhu.edu/MapoftheUniverse/Images/WebMap_V02/quasars.png")
                    $(".map-container-info > h1").text(information[2].title)
                    $(".map-container-info>img").attr('src', information[2].img)
                    $(".map-container-info>p").text(information[2].caption)
                    break;
                case "area_04":
                    $("#slice-map").attr('src', "https://menard.pha.jhu.edu/MapoftheUniverse/Images/WebMap_V02/cmb.png")
                    $(".map-container-info > h1").text(information[1].title)
                    $(".map-container-info>img").attr('src', information[1].img)
                    $(".map-container-info>p").text(information[1].caption)
                    break;
                case "area_05":
                    $("#slice-map").attr('src', "https://menard.pha.jhu.edu/MapoftheUniverse/Images/WebMap_V02/galaxies.png")
                    $(".map-container-info > h1").text(information[9].title)
                    $(".map-container-info>img").attr('src', information[9].img)
                    $(".map-container-info>p").text(information[9].caption)
                    break;
                case "axis_01":
                    $(".map-container-info > h1").text(information[7].title)
                    $(".map-container-info>img").attr('src', information[7].img)
                    $(".map-container-info>p").text(information[7].caption)
                    break;
                case "axis_02":
                    $(".map-container-info > h1").text(information[5].title)
                    $(".map-container-info>img").attr('src', information[5].img)
                    $(".map-container-info>p").text(information[5].caption)
                    break;
                case "axis_03":
                    $(".map-container-info > h1").text(information[6].title)
                    $(".map-container-info>img").attr('src', information[6].img)
                    $(".map-container-info>p").text(information[6].caption)
                    break;
                case "axis_04":
                    $(".map-container-info > h1").text(information[8].title)
                    $(".map-container-info>img").attr('src', information[8].img)
                    $(".map-container-info>p").text(information[8].caption)
                    break;
            }
        }, function(){
            $(".map-container-info").fadeOut(100);
            $("#slice-map").attr('src', "https://menard.pha.jhu.edu/MapoftheUniverse/Images/WebMap_V02/total.png")
        }
    )

    $(".dropdown-menu-center").click(function(e){
        e.stopPropagation();
        $('.download-click-section').hide();

     })


    $(".bottom-arrow").click(function(e){
        $('html, body').animate({scrollTop:$(".scroll-to-map").offset().top + $(".scroll-to-map").outerHeight() - $(window).height(), easing: 'linear'},{ duration: 2000, easing: "linear", complete: function () {
            }})
    })



    $(".info-accordion").click(function(e){
        console.log("INFO")
        var myClass = $(this).attr("class");

        if(myClass.includes("collapsed")){

            $('.other-col').removeClass('col-lg-3 this-col-change');
            $('.other-col').addClass('col-lg-6');
        } else {

            $('.other-col').removeClass('col-lg-6');
            $('.other-col').addClass('col-lg-3 this-col-change');
        }

        $(".more-info").hide();
        $(".read-more").show();
        $('.info-col').removeClass('col-lg-6');
        $('.info-col').addClass('col-lg-3');



    })


    let toggle_banner = false;
    $(".description").click(function(e){
        /*
        if ($("#full").is(":checked")) {
            $("#outer_from_full").hide();
        } else {
            $("#full").prop('checked', true);
            zoomlevel()
        }
        */
       $(".hover-map-overlay").fadeOut("fast")

        if(carousel_handle) {
            clearInterval(carousel_handle)
            carousel_handle = null
        }

        var images = $(".description img")

        images.each(function(index){
            var data_src = $(this).attr('data-src')
            $(this).attr("src", data_src)

        })

    })

    $(".banner-switch").click (function(e) {
        var images = $(".banner-section img")
        images.each(function(index){
            var data_src = $(this).attr('data-src')
            if(data_src){
                console.log(data_src)
            }
            $(this).attr("src", data_src)
        })


        if(!toggle_banner) {
            $(".map-section").fadeOut(400, function() {
                $(".banner-section").fadeIn(800)
                $(window).scrollTop($(".banner-section").offset().top + $(".banner-section").outerHeight() - $(window).height())
            })

            $(".cover").hide()

            toggle_banner = true;
        } else {
            $(".banner-section").fadeOut(400, function() {
                $(".map-section").fadeIn(800)
                $(".cover").show()
                $(window).scrollTop($(".scroll-to-map").offset().top + $(".scroll-to-map").outerHeight() - $(window).height())
            })

            toggle_banner = false

        }
    })

    $(".zoom-icon").click(function(e){

        change = 1
        if ($(e.target).hasClass('plus-icon')) {
            change = -1
        } else {
            change = 1
        }
        clearInterval(carousel_handle)
        options = ["#full", "#outer", "#near",  "#close", "#near_galaxy_view"]
        var checked = $("input[name=options-outlined]:checked").val()
        var other_checked = $("input[name=options-outlined2]:checked").val()
        var true_checked = 0
        var order = ['3', '2', '1', '4', '5']
        if (checked != current_checked) {
            $('input:radio[name=options-outlined2][value=' + checked + ']').prop('checked', true);
            //$('input:radio[name=options-outlined2][value=' + checked + ']').click();
            true_checked = checked
        } else {
            $('input:radio[name=options-outlined][value=' + other_checked + ']').prop('checked', true);
            //$('input:radio[name=options-outlined][value=' + other_checked + ']').click();
            true_checked = other_checked
        }

        console.log(typeof(true_checked))

        $(options[mod((order.indexOf(true_checked)+ change),5)]).prop('checked', true);
        zoomlevel()


    })

    $('.select-button').hover(function(e){
        id = this.id
        if(current_checked == 3 && id == "near_label" ) {
            overlay_show = "#near_from_full"
        } else if (current_checked == 3 && id == "outer_label") {
            overlay_show = "#outer_from_full"
        } else if(current_checked == 2 && id == "near_label") {
            overlay_show = "#near_from_outer"
        } else if(current_checked == 2 && (id == "close_label" || id == "near_galaxy_view_label")) {
            overlay_show = "#close_from_outer"
        } else if (current_checked == 3 && (id == "close_label" || id == "near_galaxy_view_label")) {
            overlay_show = "#close_from_full"
        } else if (current_checked == 1 && (id == "close_label" || id == "near_galaxy_view_label")) {
            overlay_show = "#close_from_near"
        }
         else {
            overlay_show = "none"
            console.log("HOVERING HERE")
        }
        if(overlay_show != "none") {
            console.log("SHOWING")
            $(overlay_show).show()
        }
    }, function(e) {
        $(overlay_show).hide()
    })

    $('input').on('change', function() {
        console.log("CHANGING")
        user_clicked = true;
        console.log("CHANGING INPUT")
        zoomlevel()
    });

    $('.zoom_button').click(function() {
        clearInterval(carousel_handle)

    })

    $(".banner-switch-hover").hover(function(e){
        $("#overlay").fadeIn("fast", function(){})
    }, function(e){
        console.log("OFF")
        $("#overlay").fadeOut("fast", function(){})
    })
    /*
    $(".banner-switch-near").hover(function(e){
        $("#overlay").fadeIn("fast", function(){})
    }, function(e){
        console.log("OFF")
        $("#overlay").fadeOut("fast", function(){})
    })
    */
    $(".banner-info-box >p> .term-hover").hover(function(e){
        $(this).parent().siblings('img.explanation_image').hide()
        $(this).parent().siblings('img.skyview_image').show()
    }, function(e) {
        $(this).parent().siblings('img.explanation_image').show()
        $(this).parent().siblings('img.skyview_image').hide()
    })

    $(window).scroll(function() {

        var top_of_element = $(".mapbox").offset().top;
        var bottom_of_element = $(".mapbox").offset().top + $(".mapbox").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            // the element is visible, do something
            if (!animating){
                console.log("TRYING TO CAROUSEL AGAIN")
                carousel()
                animating = true
            }

        } else {
            $("#full").prop('checked', true);
            zoomlevel()
            clearInterval(carousel_handle)
            animating = false;
        }

        var windowTop = $(this).scrollTop()
        var windowBottom = $(this).scrollTop() + $(window).outerHeight()
        var elementTop = $(".banner-outline").offset().top;
        var percentage = (windowTop - elementTop) / $(".banner-outline").outerHeight() * 100;
        var bottomPercentage = (windowBottom - elementTop) / $(".banner-outline").outerHeight() * 100;
        percentage = Math.max(Math.min(percentage, 100), 0)

        bottomPercentage = Math.min(bottomPercentage, 100)
        $(".banner-navigator-section").css({top: percentage + "%"})
        $(".banner-navigator-section").css({height: bottomPercentage - percentage + "%"})
        var barPos = $(".bar_container").offset().top - $(".banner-outline").offset().top
        var galaxyHeight = $(".banner-outline").outerHeight();

        var barPercentage = barPos/galaxyHeight
        lookback = 13.74 -  barPercentage * 13.74
        $("#sidebar-lookback-time").html((lookback).toFixed(1));
        $("#sidebar-lookback-time_2").html((lookback).toFixed(1));
        var fade = $('.fade');
        var range = 400;
        var st = $(this).scrollTop();
        var center = st + $(window).outerHeight() * (2/4);

        var scroll_msg = $(".scroll-up-message");
        var scrollPercent =  $(window).scrollTop() / ($(document).height() - $(window).height());

        scroll_msg.css({opacity: 1-  (1-scrollPercent) *6 })
        fade.each(function () {
            var offset = $(this).offset().top;
            var height = $(this).outerHeight();
            offset = offset + height / 2;
            var perc = Math.pow((center - offset) /  ($(window).outerHeight()/2), 2)

            if(center-offset > 0){
                $(this).css({ 'opacity': 1 - perc });
            } else {
                $(this).css({ 'opacity': 1 - perc });
            }
        });

    })


    $(".banner-modal").click(function(e) {
        set_modal_pic(e.target.id)
    })

    $(".banner-info-box-content").click(function(e) {
        set_modal_pic($(this).parent().parent().attr("id"))
    })


    $(".banner-tick").click(function() {
        var id = $(this).attr('id');
    })

    $(".banner-info-box").click(function(e) {
        $('#myModal').modal('toggle');
        set_modal_pic($(this).attr('id') )
    })

    $('#myModal').on('hidden.bs.modal', function () {
        // do something…
        set_modal_pic(-1 )
    })

    $(".banner-navigator, .edit").click(function(e) {
        var parentOffset = $(this).parent().offset();
        var posX = $(this).position().left,
            posY = $(this).position().top;
        height = $(this).parent().outerHeight();
        var percentage = ((e.pageY - parentOffset.top)/height)
        var pixelposition = $(".banner-outline").offset().top + $('.banner-outline').outerHeight() * percentage - ($(window).outerHeight()/2)
        window.scrollTo({
            top: pixelposition,
            left: 0,
            behavior: 'smooth'
          })

    })
})

function carousel() {

    options = ["#outer", "#near",  "#close", "#near_galaxy_view", "#full"]
    hover_options = ["#outer_from_full", "#near_from_outer", "#close_from_near", "#Galaxy_View"]
    option_index = 0

    carousel_handle = setInterval(function(){
        console.log(option_index)
        if (option_index %2 || option_index == 6) {

            if(option_index == 7) {
                option_index = 8
            }

            $(hover_options[Math.floor(option_index/2)]).fadeOut()

            $(options[Math.floor(option_index/2)]).prop('checked', true);
            zoomlevel()

        } else {
            $(hover_options[Math.floor(option_index/2)]).fadeIn(300)
        }

        option_index += 1
        option_index = option_index%9

    }, 3000);

}

const information = {
    1: {title: "宇宙微波背景辐射", caption: "这是大爆炸后不久、137亿年前发出的第一道闪光的真实照片。这道光已被宇宙膨胀拉伸，以无线电波的形式到达我们这里。这就是可观测宇宙的边缘。", img: "Images/Explanations/cmb_illust.png"},
    2: {title: "类星体", caption: "类星体是位于某些星系中心的超大质量黑洞。当它们吸积周围的气体时，会变得极其明亮，可以在整个宇宙中被观测到。它们的光呈蓝色。在这些距离上，星系已经太暗，斯隆数字巡天望远镜无法观测到。", img: "Images/Explanations/Quasar@300x.png" },
    3: {title: "明亮红星系", caption: "类星体是位于某些星系中心的超大质量黑洞。当它们吸积周围的气体时，会变得极其明亮，可以在整个宇宙中被观测到。它们的光呈蓝色。在这些距离上，星系已经太暗，斯隆数字巡天望远镜无法观测到。", img: "Images/Placeholder images/Example Explanations/LRG.jpeg"},
    4: {title: "近处星系", caption: "每个点都是一个星系。它们共同组成了丝状结构。旋涡星系暗淡且呈蓝色。椭圆星系呈黄色且更加明亮。我们可以在更远处看到它们。", img: "Images/Explanations/Near_placeholder.png" },
    5: {title: "红移", caption: ""红移"是天文学中的一个关键概念。这个术语可以从字面理解——光的波长被拉伸，因此光看起来向光谱的红色端"偏移"了。声波在声源相对于观察者运动时也会发生类似的现象。", img: "Images/Explanations/Redshift@300x.png"},
    6: {title: "回溯时间", caption: "从我们在地球上探测到光线到它最初被天体发出之间经过的时间，被称为"回溯时间"。天体离我们越远，我们就是在看越久远的过去。", img: "Images/Explanations/Lookback Time@300x.png" },
    7: {title: "天球角度", caption: "这是天空中这么小的一个切片…… ", img: "Images/Placeholder images/Example Explanations/Example Explanations/Lookback.jpeg" },
    8: {title: "你在这里", caption: "我们目前身处银河系，在太阳系中，在地球上。", img: "Images/Explanations/You are Here@300x.png" },
    9: {title: "星系", caption: "星系是由尘埃、气体、暗物质以及从一百万到一万亿颗恒星组成的庞大系统，它们被引力束缚在一起。几乎所有大型星系的中心都被认为存在超大质量黑洞。", img: "Images/Explanations/Galaxies_wikipedia cropped.png" },
}



$(document).on("click", function (event) {
    // If the target is not the container or a child of the container, then process
    // the click event for outside of the container.
    if ($(event.target).closest(".info-box").length === 0 && $(event.target).closest(".accordion-button").length != 1 && $(event.target).closest(".zoom-container").length != 1) {
        console.log("ABC")
        $('.collapse').collapse('hide')
        $(".more-info").hide();
        $('.other-col').removeClass('col-lg-3');
        $('.other-col').addClass('col-lg-6');

        $('.this-col').removeClass('col-lg-6');
        $('.this-col').addClass('col-lg-3');

        $('.other-col-2').removeClass('col-lg-6');
        $('.other-col-2').addClass('col-lg-8');

        $('.this-col-2').removeClass('col-lg-6');
        $('.this-col-2').addClass('col-lg-4');
    }
    var $target = $(event.target);
    $('.download-click-section').hide();

  });


function set_modal_pic(id) {
    switch(id){
        case "banner-info-1": case "phone-banner-1":
            $(".modal-body > img").attr('src', modal_info[1]["img"])
            $(".modal-header > h1").text(modal_info[1]["header"])
            $(".modal-footer > p").text(modal_info[1]["caption"])

            break;
        case "banner-info-2":
            $(".modal-body > img").attr('src', modal_info[2]["img"])
            $(".modal-header > h1").text(modal_info[2]["header"])
            $(".modal-footer > p").text(modal_info[2]["caption"])
            break;
        case "banner-info-3":
            $(".modal-body > img").attr('src', modal_info[3]["img"])
            $(".modal-header > h1").text(modal_info[3]["header"])
            $(".modal-footer > p").text(modal_info[3]["caption"])

            break;
        case "banner-info-4":
            $(".modal-body > img").attr('src', modal_info[4]["img"])
            $(".modal-header > h1").text(modal_info[4]["header"])
            $(".modal-footer > p").text(modal_info[4]["caption"])
            break;
        case "banner-info-5":
            $(".modal-body > img").attr('src', modal_info[5]["img"])
            $(".modal-header > h1").text(modal_info[5]["header"])
            $(".modal-footer > p").text(modal_info[5]["caption"])
            break;
        case "banner-info-6":
            $(".modal-body > img").attr('src', modal_info[6]["img"])
            $(".modal-header > h1").text(modal_info[6]["header"])
            $(".modal-footer > p").text(modal_info[6]["caption"])
            break;
        default:
            $(".modal-body > img").attr('src', "")
            $(".modal-header > h1").text("")
            $(".modal-footer > p").text("")

    }

}

function zoomlevel() {
    var checked = $("input[name=options-outlined]:checked").val()
    var other_checked = $("input[name=options-outlined2]:checked").val()
    var true_checked = 0

    if (checked != current_checked) {
        $('input:radio[name=options-outlined2][value=' + checked + ']').prop('checked', true);
        //$('input:radio[name=options-outlined2][value=' + checked + ']').click();
        true_checked = checked
    } else {
        $('input:radio[name=options-outlined][value=' + other_checked + ']').prop('checked', true);
        //$('input:radio[name=options-outlined][value=' + other_checked + ']').click();
        true_checked = other_checked
    }

    console.log(true_checked)

    var axis_overlay = ""
    if(true_checked == 1) {
        axis_overlay = "#axis_set_03";
    } else if (true_checked == 2) {
        axis_overlay = "#axis_set_02";
    } else if (true_checked == 4) {
        axis_overlay = "#axis_set_04";

    } else if(true_checked == 5) {
        axis_overlay = "#axis_set_05"
    } else {
        axis_overlay = "#axis_set_01";
    }
    $("#black-overlay").fadeIn("fast", function() {
        $(".hover-map-overlay").hide()
        $(visible_overlay).hide()
        $(axis_overlay).show()
        $("#black-overlay").fadeOut("fast", function(){});
        visible_overlay = axis_overlay
        current_checked = true_checked
    })
}

const modal_info = {
    1: {img: "https://menard.pha.jhu.edu/MapoftheUniverse/Images/Skyview/V_01/cmb.jpeg", header: "宇宙微波背景辐射", caption: "这是大爆炸后不久、137亿年前发出的第一道闪光的真实照片。这道光已被宇宙膨胀拉伸，以无线电波的形式到达我们这里。这就是可观测宇宙的边缘。"},
    2: {img: "https://menard.pha.jhu.edu/MapoftheUniverse/Images/Skyview/V_01/12.jpeg", header: "红移类星体", caption: "在这些距离上，宇宙的膨胀如此剧烈，以至于类星体发出的蓝色光子被拉伸而显得更红。再远一些，我们会遇到一个宇宙中充满氢气的时期，氢气阻止了我们今天能观测到的可见光的传播。这个时期被称为"黑暗时代"。"},
    3: {img: "https://menard.pha.jhu.edu/MapoftheUniverse/Images/Skyview/V_01/8.5.jpg", header: "类星体", caption: "类星体是位于某些星系中心的超大质量黑洞。当它们吸积周围的气体和恒星时，会变得极其明亮，可以在整个宇宙中被观测到。它们的光呈蓝色。"},
    4: {img: "https://menard.pha.jhu.edu/MapoftheUniverse/Images/Skyview/V_01/4.5.jpeg", header: "红移椭圆星系", caption: "随着宇宙膨胀，光子被拉伸，天体看起来更红。椭圆星系就是这种情况。在这些距离上，它们在我们看来呈红色。由于我们不再能探测到较暗的旋涡星系，丝状结构变得不太明显。"},
    5: {img: "https://menard.pha.jhu.edu/MapoftheUniverse/Images/Skyview/V_01/1.8.jpeg", header: "椭圆星系", caption: "椭圆星系呈黄色，比旋涡星系明亮得多。我们可以在更远处看到它们。"},
    6: {img: "https://menard.pha.jhu.edu/MapoftheUniverse/Images/Skyview/V_01/0.1.jpeg", header: "旋涡星系", caption: "每个点都是一个以其表观颜色显示的星系。旋涡星系较暗且呈蓝色。我们的银河系就是一个蓝色的旋涡星系，如果我们能从外部观察它，它看起来就像其中之一。"},
}
