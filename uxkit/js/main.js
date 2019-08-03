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

var text = document.getElementById('myText');
var myData;
var postData = window.localStorage.getItem("save");
var reset = text.innerHTML;
// if no data
if (postData == null || postData == '') {
    myData = text.innerHTML;
    // store default value
    window.localStorage.setItem("save", myData);
    // make it placeholder style
    text.classList.remove('changed');
} else {
    // if there is a value post it
    text.innerHTML = postData;
    // make dark text
    text.classList.add('changed');
}

function saveChanges() {
    event.preventDefault();
    // store the current value
    myData = text.innerHTML;
    // local store the value
    window.localStorage.setItem("save", myData);
    text.classList.add('changed');
}