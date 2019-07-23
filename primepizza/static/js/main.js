$(document).ready(function () {
    svg4everybody({});

    var bannerSlider = function () {
        $('.js-banner').slick({
            slidesToShow: 1,
            arrows: false,
            autoplay: false,
            dots: true,
            autoplaySpeed: 1500,
            customPaging : function(slider, i) {
                return '<span class="banner__dots-border"><a href="javascript:void(0);" class="banner__dots"></a></span>';
            },
        });

    };

    var tabsCatalog = function () {
        $('.catalog-navigation__item').click(function() {
            var tabName = $(this).attr('show-tab');
            $(this).addClass('catalog-navigation__item--active').siblings().removeClass('catalog-navigation__item--active');
            $('.catalog-body .' + tabName).addClass('catalog-tab--active').siblings().removeClass('catalog-tab--active');
        });
    };

    var sendwich = function () {
        var $hideElement = $('.sandwich__content');
        $('.sandwich__open-btn').on('click', function(){
            $hideElement.addClass('sandwich__content-opend');
        });
        $('.sandwich__close-btn').on('click', function(){
            $hideElement.removeClass('sandwich__content-opend');
        });
    };

    var spinner = function () {
        $("#spinner")
            .spinner('delay', 200) //delay in ms
            .spinner('changed', function(e, newVal, oldVal) {
                // trigger lazed, depend on delay option.
            })
            .spinner('changing', function(e, newVal, oldVal) {
                // trigger immediately
            });
    };

    var popupLink = function () {
        $('.js-popup-link').magnificPopup({
            showCloseBtn: false
        });
    };

    var fileUpload = function () {
        $(".file-upload input[type=file]").change(function () {
            var filename = $(this).val().replace(/.*\\/, "");
            $(this).closest('.file-upload').find('.file-upload__btn_text').html(filename);
        });
    };

    var formValidate = function () {
        $('form').each(function () {
          $(this).on('submit', function () {
              $(this).validate({
                  rules: {
                      name: 'required',
                      phone: 'required',
                      email: 'required',
                      password: 'required'
                  },
                  messages: {
                      name: 'Введите корректное имя',
                      phone: 'Введите корректный номер',
                      email: 'Введите корректный email',
                      password: 'Введите корректный пароль'
                  },
                  errorPlacement: function (error, element) {
                      element.attr("placeholder", error[0].outerText);
                  }
              });
              if ($(this).valid()) {
                var wrap = $(this)[0].closest('.hide-on-success');
                if (wrap) {
                    $(wrap).siblings('.show-on-success').show();
                    $(wrap).hide();
                }
              }
              return false;
          })
        });
    };

    var tabsCheckout = function () {
        $('.btn-payment').click(function() {
            var tabName = $(this).attr('show-tab');
            $(this).addClass('btn-payment--active').siblings().removeClass('btn-payment--active');
            $('.checkout__payment-body .' + tabName).addClass('checkout__payment-tab--active').siblings().removeClass('checkout__payment-tab--active');
        });
    };

    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

    function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

    var tabsCheckoutType = function tabsCheckoutType() {
    var btn = document.querySelectorAll('.btn-payment__type');

      _toConsumableArray(btn).forEach(function (element) {
        element.addEventListener('click', function (evt) {
          evt.preventDefault;
          var current = document.querySelector('.btn-payment__type--active');
          current.classList.remove('btn-payment__type--active');
          element.classList.add('btn-payment__type--active');
        });
      });
    };


    var scrollTab = function () {
      $(document).ready(function() {
        $("a.scrollto").click(function() {
          var elementClick = $(this).attr("href")
          var destination = $(elementClick).offset().top;
          jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
          }, 800);
          return false;
  });
});
    }

    tabsCatalog();
    bannerSlider();
    sendwich();
    spinner();
    popupLink();
    fileUpload();
    formValidate();
    tabsCheckout();
    tabsCheckoutType();
    scrollTab();
});