$(document).ready(function () {

    var tabs = function () {
        $('.tab-item').click(function() {
            var tabName = $(this).attr('show-tab');
            $(this).addClass('tab-item--active').siblings().removeClass('tab-item--active');
            $('.enlight-body .' + tabName).addClass('tab--active').siblings().removeClass('tab--active');
        });
    };

    tabs();
});