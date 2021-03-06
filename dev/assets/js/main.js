! function (t) {
    t.fn.mapping = function (e) {
        var i = t.extend({}, {}, e),
            n = {
                selector: t(this),
                department: "",
                destination: "",
                from: function (e) {
                    try {
                        return this.department = t(e), this
                    } catch (t) {}
                },
                to: function (e) {
                    try {
                        return this.destination = t(e), this
                    } catch (t) {}
                },
                use: function (t) {
                    try {
                        switch (t) {
                            case "appendTo":
                                this.department.appendTo(this.destination);
                                break;
                            case "prependTo":
                                this.department.prependTo(this.destination);
                                break;
                            case "insertAfter":
                                this.department.insertAfter(this.destination);
                                break;
                            case "insertBefore":
                                this.department.insertBefore(this.destination)
                        }
                    } catch (t) {}
                }
            };
        return this.switch = function (t) {
            t.matches ? n.from(n.selector).to(i.mobileWrapper).use(i.mobileMethod) : n.from(n.selector).to(i.desktopWrapper).use(i.desktopMethod)
        }, this.initialize = function () {
            var t = window.matchMedia("(max-width: " + i.breakpoint + "px)");
            return this.switch(t), t.addListener(this.switch), this
        }, this.initialize()
    }
}(jQuery)
function slideSwiper(){
    $('.c-banner__slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        vertical: true,
    });
    $('.c-listitem__slide').slick({
        slidesToShow: 4,
        arrows: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
          },
        ]
    });
    $('.c-infosingle__slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<div class="c-content__button--next"> <i class="fas fa-chevron-right"></i> </div>',
        prevArrow: '<div class="c-content__button--prev"> <i class="fas fa-chevron-left"></i> </div>'
    })
}
function menuActive() {
    $('.is-btn__togglemenu').on('click', function(){
        $('.is-btn__togglemenu').toggleClass('active')
        $('.c-header__navsp').toggleClass('active')
    })
}
function navMenu(){
    let menuRightTo = $('.c-header .c-nav').mapping({
      mobileWrapper: '.c-header .c-header__navsp',
      mobileMethod: 'appendTo',
      desktopWrapper: '.c-header .c-header__logo',
      desktopMethod: 'insertAfter',
      breakpoint: 767,
    });
}
function scrollheight() {
    $('.is-scrollToTop').on('click', function (){
      var body = $("html, body");
      body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
    });
    })
    $(window).scroll(function(){
      let height = 100;
      if($(window).scrollTop() > height) {
        $('.is-scrollToTop').addClass('active')
      }
      else {
        $('.is-scrollToTop').removeClass('active')
      }
    })
}


function activeLi(){
    $('.c-nav__normal ul li').on('click', function(){
        let a = $(this).children().hasClass('c-nav__child')
        if(a == true){
            $(this).children().toggleClass('active')
        }
    });
    $('.c-nav__background ul li').on('click', function(){
        let a = $(this).children().hasClass('c-nav__child')
        if(a == true){
            $(this).children().toggleClass('active')
        }
    });
}


$( document ).ready(function() {
    slideSwiper();
    navMenu();
    scrollheight();
    menuActive();
    activeLi();
});


