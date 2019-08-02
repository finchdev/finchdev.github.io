$(document).ready(function () {

    var tabs = function () {
        $('.tab-item').click(function() {
            var tabName = $(this).attr('show-tab');
            $('.enlight-body .tab .enlight-body .tab').removeClass('tab--active');
            $(this).addClass('tab-item--active').siblings().removeClass('tab-item--active');
            $('.enlight-body .' + tabName).addClass('tab--active').siblings().removeClass('tab--active').find().removeClass('tab--active');
        });
    };

    var fileUpload = function () {
        $(".file-upload input[type=file]").change(function(){
            var filename = $(this).val().replace(/.*\\/, "");
            $(this).closest('.file-upload').find('.file-upload__text').html(filename);
        });
    };

    var rangeSlider = function () {
        var slider = document.getElementById("slider");

        slider.oninput = function() {
            $('.fill').css('width', this.value + '%');
        }
    };

    var scrollTo = function () {
        $("a.scrollto").click(function() {
            var elementClick = $(this).attr("href")
            var destination = $(elementClick).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 800);
            return false;
        });
    };

    scrollTo();
    tabs();
    fileUpload();
    rangeSlider();

});