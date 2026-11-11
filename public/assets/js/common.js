var byrNavi = window.BYR_NAVI || {};

// common.js

// menu
$(document).ready(function () {
    // fix menu when passed
    $('.masthead').visibility({
        once: false,
        onBottomPassed: function () {
            $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function () {
            $('.fixed.menu').transition('fade out');
        }
    });
    // create sidebar and attach to menu open
    $('.ui.sidebar').sidebar('attach events', '.toc.item');
});

// masthead background
$('.ui.inverted.masthead.segment').addClass(`bg${Math.ceil(Math.random() * 14)}`).removeClass('zoomed');

if (byrNavi.matomo && byrNavi.matomo.siteId) {
// analytics
$.getJSON(byrNavi.matomo.url, {
    'module': 'API',
    'method': 'VisitsSummary.getVisits',
    'idSite': byrNavi.matomo.siteId,
    'period': 'day',
    'date': 'yesterday',
    'format': 'JSON',
    'token_auth': byrNavi.matomo.token
}, function (data) {
    $('#yesterday-visits').text(data.value);
});
$.getJSON(byrNavi.matomo.url, {
    'module': 'API',
    'method': 'VisitsSummary.getActions',
    'idSite': byrNavi.matomo.siteId,
    'period': 'day',
    'date': 'yesterday',
    'format': 'JSON',
    'token_auth': byrNavi.matomo.token
}, function (data) {
    $('#yesterday-actions').text(data.value);
});
(function updateAnalytics() {
    if (!document.hidden) {
        $.getJSON(byrNavi.matomo.url, {
            'module': 'API',
            'method': 'VisitsSummary.getVisits',
            'idSite': byrNavi.matomo.siteId,
            'period': 'day',
            'date': 'today',
            'format': 'JSON',
            'token_auth': byrNavi.matomo.token
        }, function (data) {
            $('#today-visits').text(data.value);
        });
        $.getJSON(byrNavi.matomo.url, {
            'module': 'API',
            'method': 'VisitsSummary.getActions',
            'idSite': byrNavi.matomo.siteId,
            'period': 'day',
            'date': 'today',
            'format': 'JSON',
            'token_auth': byrNavi.matomo.token
        }, function (data) {
            $('#today-actions').text(data.value);
        });
    };
    setTimeout(function () {
        updateAnalytics();
    }, byrNavi.updateInterval);
})();
}
