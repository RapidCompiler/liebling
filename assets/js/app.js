<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! headroom.js */ "./node_modules/headroom.js/dist/headroom.js");
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(headroom_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide/dist/glide.modular.esm */ "./node_modules/@glidejs/glide/dist/glide.modular.esm.js");
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/esm/index.all.js");
/* harmony import */ var shave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shave */ "./node_modules/shave/dist/shave.es.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var fuse_js_dist_fuse_basic_esm_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fuse.js/dist/fuse.basic.esm.min.js */ "./node_modules/fuse.js/dist/fuse.basic.esm.min.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers */ "./js/helpers.js");








jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  if (Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["isRTL"])()) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('dir', 'rtl').addClass('rtl');
  }

  var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
  var $header = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-header');
  var $openMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-menu');
  var $closeMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-close-menu');
  var $menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-menu');
  var $toggleSubmenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-toggle-submenu');
  var $submenuOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-submenu-option')[0];
  var $submenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-submenu');
  var $recentSlider = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-recent-slider');
  var $openSecondaryMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-secondary-menu');
  var $openSearch = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-search');
  var $closeSearch = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-close-search');
  var $search = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-search');
  var $inputSearch = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-search');
  var $searchResults = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-search-results');
  var $searchNoResults = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-no-results');
  var $toggleDarkMode = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-toggle-darkmode');
  var $closeNotification = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-notification-close');
  var currentSavedTheme = localStorage.getItem('theme');
  var fuse = null;
  var submenuIsOpen = false;
  var secondaryMenuTippy = null;

  function showSubmenu() {
    $header.addClass('submenu-is-active');
    $toggleSubmenu.addClass('active');
    $submenu.removeClass('closed').addClass('opened');
  }

  function hideSubmenu() {
    $header.removeClass('submenu-is-active');
    $toggleSubmenu.removeClass('active');
    $submenu.removeClass('opened').addClass('closed');
  }

  function toggleScrollVertical() {
    $body.toggleClass('no-scroll-y');
  }

  function trySearchFeature() {
    if (typeof ghostSearchApiKey !== 'undefined') {
      getAllPosts(ghostHost, ghostSearchApiKey);
    } else {
      $openSearch.css('visibility', 'hidden');
      $closeSearch.remove();
      $search.remove();
    }
  }

  function getAllPosts(host, key) {
    var api = new GhostContentAPI({
      url: host,
      key: key,
      version: 'v2'
    });
    var allPosts = [];
    var fuseOptions = {
      shouldSort: true,
      ignoreLocation: true,
      findAllMatches: true,
      includeScore: true,
      minMatchCharLength: 2,
      keys: ['title', 'custom_excerpt']
    };
    api.posts.browse({
      limit: 'all',
      fields: 'id, title, url, published_at, custom_excerpt'
    }).then(function (posts) {
      for (var i = 0, len = posts.length; i < len; i++) {
        allPosts.push(posts[i]);
      }

      fuse = new fuse_js_dist_fuse_basic_esm_min_js__WEBPACK_IMPORTED_MODULE_6__["default"](allPosts, fuseOptions);
    })["catch"](function (err) {
      console.log(err);
    });
  }

  var showNotification = function showNotification(typeNotification) {
    var $notification = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-alert[data-notification=\"".concat(typeNotification, "\"]"));
    $notification.addClass('opened');
    setTimeout(function () {
      closeNotification($notification);
    }, 5000);
  };

  var closeNotification = function closeNotification($notification) {
    $notification.removeClass('opened');
    var url = window.location.toString();

    if (url.indexOf('?') > 0) {
      var cleanUrl = url.substring(0, url.indexOf('?'));
      window.history.replaceState({}, document.title, cleanUrl);
    }
  };

  var checkForActionParameter = function checkForActionParameter() {
    var action = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getParameterByName"])('action');
    var stripe = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getParameterByName"])('stripe');

    if (action === 'subscribe') {
      showNotification('subscribe');
    }

    if (action === 'signup') {
      window.location = "".concat(ghostHost, "/signup/?action=checkout");
    }

    if (action === 'checkout') {
      showNotification('signup');
    }

    if (action === 'signin') {
      showNotification('signin');
    }

    if (stripe === 'success') {
      showNotification('checkout');
    }
  };

  $openMenu.click(function () {
    $header.addClass('mobile-menu-opened');
    $menu.addClass('opened');
    toggleScrollVertical();
  });
  $closeMenu.click(function () {
    $header.removeClass('mobile-menu-opened');
    $menu.removeClass('opened');
    toggleScrollVertical();
  });
  $toggleSubmenu.click(function () {
    submenuIsOpen = !submenuIsOpen;

    if (submenuIsOpen) {
      showSubmenu();
    } else {
      hideSubmenu();
    }
  });
  $openSearch.click(function () {
    $search.addClass('opened');
    setTimeout(function () {
      $inputSearch.focus();
    }, 400);
    toggleScrollVertical();
  });
  $closeSearch.click(function () {
    $inputSearch.blur();
    $search.removeClass('opened');
    toggleScrollVertical();
  });
  $inputSearch.keyup(function () {
    if ($inputSearch.val().length > 0 && fuse) {
      var results = fuse.search($inputSearch.val());
      var bestResults = results.filter(function (result) {
        if (result.score <= 0.5) {
          return result;
        }
      });
      var htmlString = '';

      if (bestResults.length > 0) {
        for (var i = 0, len = bestResults.length; i < len; i++) {
          htmlString += "\n          <article class=\"m-result\">            <a href=\"".concat(bestResults[i].item.url, "\" class=\"m-result__link\">              <h3 class=\"m-result__title\">").concat(bestResults[i].item.title, "</h3>              <span class=\"m-result__date\">").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(bestResults[i].item.published_at), "</span>            </a>          </article>");
        }

        $searchNoResults.hide();
        $searchResults.html(htmlString);
        $searchResults.show();
      } else {
        $searchResults.html('');
        $searchResults.hide();
        $searchNoResults.show();
      }
    } else {
      $searchResults.html('');
      $searchResults.hide();
      $searchNoResults.hide();
    }
  });
  $toggleDarkMode.change(function () {
    if ($toggleDarkMode.is(':checked')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
  $closeNotification.click(function () {
    closeNotification(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent());
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).click(function (e) {
    if (submenuIsOpen) {
      if ($submenuOption && !$submenuOption.contains(e.target)) {
        submenuIsOpen = false;
        hideSubmenu();
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).keyup(function (e) {
    if (e.key === 'Escape' && $search.hasClass('opened')) {
      $closeSearch.click();
    }
  });

  if (currentSavedTheme) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('data-theme', currentSavedTheme);

    if (currentSavedTheme === 'dark') {
      $toggleDarkMode.attr('checked', true);
    }
  } else {
    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["isDarkMode"])()) {
      $toggleDarkMode.attr('checked', true);
    }
  }

  if ($header.length > 0) {
    var headroom = new headroom_js__WEBPACK_IMPORTED_MODULE_1___default.a($header[0], {
      tolerance: {
        down: 10,
        up: 20
      },
      offset: 15,
      onUnpin: function onUnpin() {
        if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["isMobile"])() && secondaryMenuTippy) {
          var desktopSecondaryMenuTippy = secondaryMenuTippy[0];

          if (desktopSecondaryMenuTippy && desktopSecondaryMenuTippy.state.isVisible) {
            desktopSecondaryMenuTippy.hide();
          }
        }
      }
    });
    headroom.init();
  }

  if ($recentSlider.length > 0) {
    var recentSlider = new _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_2__["default"]('.js-recent-slider', {
      type: 'slider',
      rewind: false,
      perView: 4,
      swipeThreshold: false,
      dragThreshold: false,
      gap: 0,
      direction: Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["isRTL"])() ? 'rtl' : 'ltr',
      breakpoints: {
        1024: {
          perView: 3,
          swipeThreshold: 80,
          dragThreshold: 120
        },
        768: {
          perView: 2,
          swipeThreshold: 80,
          dragThreshold: 120,
          peek: {
            before: 0,
            after: 115
          }
        },
        568: {
          perView: 1,
          swipeThreshold: 80,
          dragThreshold: 120,
          peek: {
            before: 0,
            after: 115
          }
        }
      }
    });
    recentSlider.on('mount.after', function () {
      Object(shave__WEBPACK_IMPORTED_MODULE_4__["default"])('.js-recent-article-title', 50);
    });
    recentSlider.mount({
      Swipe: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_2__["Swipe"],
      Breakpoints: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"]
    });
  }

  if (typeof disableFadeAnimation === 'undefined' || !disableFadeAnimation) {
    aos__WEBPACK_IMPORTED_MODULE_5___default.a.init({
      once: true,
      startEvent: 'DOMContentLoaded'
    });
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-aos]').addClass('no-aos-animation');
  }

  if ($openSecondaryMenu.length > 0) {
    var template = document.getElementById('secondary-navigation-template');
    secondaryMenuTippy = Object(tippy_js__WEBPACK_IMPORTED_MODULE_3__["default"])('.js-open-secondary-menu', {
      content: template.innerHTML,
      arrow: true,
      trigger: 'click',
      interactive: true
    });
  }

  Object(tippy_js__WEBPACK_IMPORTED_MODULE_3__["default"])('.js-tooltip');
  Object(shave__WEBPACK_IMPORTED_MODULE_4__["default"])('.js-article-card-title', 100);
  Object(shave__WEBPACK_IMPORTED_MODULE_4__["default"])('.js-article-card-title-no-image', 250);
  checkForActionParameter();
  trySearchFeature();
});

/***/ }),

/***/ "./js/helpers.js":
/*!***********************!*\
  !*** ./js/helpers.js ***!
  \***********************/
/*! exports provided: isRTL, isMobile, isDarkMode, formatDate, getParameterByName, adjustImageGallery, managePostImages, makeImagesZoomable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRTL", function() { return isRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDarkMode", function() { return isDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameterByName", function() { return getParameterByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustImageGallery", function() { return adjustImageGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managePostImages", function() { return managePostImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeImagesZoomable", function() { return makeImagesZoomable; });
var isRTL = function isRTL() {
  var $html = document.querySelector('html');
  return ['ar', 'he', 'fa'].includes($html.getAttribute('lang'));
};
var isMobile = function isMobile() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '768px';
  return window.matchMedia("(max-width: ".concat(width, ")")).matches;
};
var isDarkMode = function isDarkMode() {
  var darkModeMatcher = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  return darkModeMatcher && darkModeMatcher.matches;
};
var formatDate = function formatDate(date) {
  if (date) {
    return new Date(date).toLocaleDateString(document.documentElement.lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return '';
};
var getParameterByName = function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp("[?&]".concat(name, "(=([^&#]*)|&|#|$)"));
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
var adjustImageGallery = function adjustImageGallery() {
  var images = document.querySelectorAll('.kg-gallery-image img');

  for (var i = 0, len = images.length; i < len; i++) {
    var container = images[i].closest('.kg-gallery-image');
    var width = images[i].attributes.width.value;
    var height = images[i].attributes.height.value;
    var ratio = width / height;
    container.style.flex = "".concat(ratio, " 1 0%");
  }
};
var managePostImages = function managePostImages($) {
  $('.js-post-content').find('img').each(function () {
    if (!$(this).closest('figure').hasClass('kg-bookmark-card') && !$(this).parent().is('a')) {
      $(this).addClass('js-zoomable');
    }

    var $figcaption = $(this).parent().find('figcaption');

    if ($figcaption) {
      $(this).attr('alt', $figcaption.text());
    } else {
      $(this).attr('alt', '');
    }
  });
};
var makeImagesZoomable = function makeImagesZoomable($, mediumZoom) {
  var zoom = mediumZoom('.js-zoomable');
  zoom.on('open', function (event) {
    if (isMobile() && $(event.target).parent().hasClass('kg-gallery-image')) {
      setTimeout(function () {
        var $mediumZoomImage = $('.medium-zoom-image--opened');
        var transform = $mediumZoomImage[0].style.transform;
        var scale = transform.substr(0, transform.indexOf(' '));
        var scaleValue = parseFloat(scale.substr(scale.indexOf('(') + 1).split(')')[0]);
        var translate = transform.substr(transform.indexOf(' ') + 1);
        var translateY = parseFloat(translate.split(',')[1]);
        var newTranslateY = translateY < 0 ? scaleValue * translateY + translateY : scaleValue * translateY - translateY;
        var newTransform = "scale(1) translate3d(0, ".concat(newTranslateY, "px, 0)");
        $mediumZoomImage.addClass('medium-zoom-image-mobile');
        $mediumZoomImage[0].style.transform = newTransform;
      }, 10);
    }
  });
  zoom.on('close', function () {
    if (isMobile() && $(event.target).parent().hasClass('kg-gallery-image')) {
      var $mediumZoomImage = $('.medium-zoom-image');
      $mediumZoomImage.removeClass('medium-zoom-image-mobile');
    }
  });
};

/***/ }),

/***/ 1:
/*!*************************!*\
  !*** multi ./js/app.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ymir/repos/thebridge/liebling/src/js/app.js */"./js/app.js");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(e,t,n){"use strict";n.r(t),n.d(t,"isRTL",(function(){return a})),n.d(t,"isMobile",(function(){return o})),n.d(t,"isDarkMode",(function(){return s})),n.d(t,"formatDate",(function(){return i})),n.d(t,"getParameterByName",(function(){return r})),n.d(t,"adjustImageGallery",(function(){return c})),n.d(t,"managePostImages",(function(){return l})),n.d(t,"makeImagesZoomable",(function(){return d}));var a=function(){var e=document.querySelector("html");return["ar","he","fa"].includes(e.getAttribute("lang"))},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(e,")")).matches},s=function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return e&&e.matches},i=function(e){return e?new Date(e).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},r=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")).exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},c=function(){for(var e=document.querySelectorAll(".kg-gallery-image img"),t=0,n=e.length;t<n;t++){var a=e[t].closest(".kg-gallery-image"),o=e[t].attributes.width.value/e[t].attributes.height.value;a.style.flex="".concat(o," 1 0%")}},l=function(e){e(".js-post-content").find("img").each((function(){e(this).closest("figure").hasClass("kg-bookmark-card")||e(this).parent().is("a")||e(this).addClass("js-zoomable");var t=e(this).parent().find("figcaption");t?e(this).attr("alt",t.text()):e(this).attr("alt","")}))},d=function(e,t){var n=t(".js-zoomable");n.on("open",(function(t){o()&&e(t.target).parent().hasClass("kg-gallery-image")&&setTimeout((function(){var t=e(".medium-zoom-image--opened"),n=t[0].style.transform,a=n.substr(0,n.indexOf(" ")),o=parseFloat(a.substr(a.indexOf("(")+1).split(")")[0]),s=n.substr(n.indexOf(" ")+1),i=parseFloat(s.split(",")[1]),r="scale(1) translate3d(0, ".concat(i<0?o*i+i:o*i-i,"px, 0)");t.addClass("medium-zoom-image-mobile"),t[0].style.transform=r}),10)})),n.on("close",(function(){o()&&e(event.target).parent().hasClass("kg-gallery-image")&&e(".medium-zoom-image").removeClass("medium-zoom-image-mobile")}))}},13:function(e,t,n){e.exports=n(14)},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(8),i=n.n(s),r=n(2),c=n(6),l=n(3),d=n(10),u=n.n(d),m=n(11),h=n(1);o()(document).ready((function(){Object(h.isRTL)()&&o()("html").attr("dir","rtl").addClass("rtl");var e,t,n=o()("body"),a=o()(".js-header"),s=o()(".js-open-menu"),d=o()(".js-close-menu"),f=o()(".js-menu"),g=o()(".js-toggle-submenu"),p=o()(".js-submenu-option")[0],v=o()(".js-submenu"),b=o()(".js-recent-slider"),w=o()(".js-open-secondary-menu"),j=o()(".js-open-search"),k=o()(".js-close-search"),y=o()(".js-search"),C=o()(".js-input-search"),O=o()(".js-search-results"),T=o()(".js-no-results"),x=o()(".js-toggle-darkmode"),S=o()(".js-notification-close"),M=o()(".js-main-nav"),_=o()(".js-main-nav-left"),I=localStorage.getItem("theme"),L=null,A=!1,D=null,z=function(){a.removeClass("submenu-is-active"),g.removeClass("active"),v.removeClass("opened").addClass("closed")},B=function(){n.toggleClass("no-scroll-y")},E=function(e,t){var n=new GhostContentAPI({url:e,key:t,version:"v2"}),a=[],o={shouldSort:!0,ignoreLocation:!0,findAllMatches:!0,includeScore:!0,minMatchCharLength:2,keys:["title","custom_excerpt","tags.name"]};n.posts.browse({limit:"all",include:"tags",fields:"id, title, url, published_at, custom_excerpt"}).then((function(e){for(var t=0,n=e.length;t<n;t++)a.push(e[t]);L=new m.a(a,o)})).catch((function(e){console.log(e)}))},H=function(e){var t=o()('.js-alert[data-notification="'.concat(e,'"]'));t.addClass("opened"),setTimeout((function(){P(t)}),5e3)},P=function(e){e.removeClass("opened");var t=window.location.toString();if(t.indexOf("?")>0){var n=t.substring(0,t.indexOf("?"));window.history.replaceState({},document.title,n)}},R=function(e){Object(h.isMobile)()||(e?(M.addClass("toggle-overflow"),_.addClass("toggle-overflow")):(M.removeClass("toggle-overflow"),_.removeClass("toggle-overflow")))};(s.click((function(){a.addClass("mobile-menu-opened"),f.addClass("opened"),B()})),d.click((function(){a.removeClass("mobile-menu-opened"),f.removeClass("opened"),B()})),g.click((function(){(A=!A)?(a.addClass("submenu-is-active"),g.addClass("active"),v.removeClass("closed").addClass("opened")):z()})),j.click((function(){y.addClass("opened"),setTimeout((function(){C.focus()}),400),B()})),k.click((function(){C.blur(),y.removeClass("opened"),B()})),C.keyup((function(){if(C.val().length>0&&L){var e=L.search(C.val()).filter((function(e){if(e.score<=.5)return e})),t="";if(e.length>0){for(var n=0,a=e.length;n<a;n++)t+='\n          <article class="m-result">            <a href="'.concat(e[n].item.url,'" class="m-result__link">              <h3 class="m-result__title">').concat(e[n].item.title,'</h3>              <span class="m-result__date">').concat(Object(h.formatDate)(e[n].item.published_at),"</span>            </a>          </article>");T.hide(),O.html(t),O.show()}else O.html(""),O.hide(),T.show()}else O.html(""),O.hide(),T.hide()})),x.change((function(){x.is(":checked")?(o()("html").attr("data-theme","dark"),localStorage.setItem("theme","dark")):(o()("html").attr("data-theme","light"),localStorage.setItem("theme","light"))})),x.hover((function(){R(!0)}),(function(){R(!1)})),S.click((function(){P(o()(this).parent())})),o()(window).click((function(e){A&&p&&!p.contains(e.target)&&(A=!1,z())})),o()(document).keyup((function(e){"Escape"===e.key&&y.hasClass("opened")&&k.click()})),I?(o()("html").attr("data-theme",I),"dark"===I&&x.attr("checked",!0)):Object(h.isDarkMode)()&&x.attr("checked",!0),a.length>0)&&new i.a(a[0],{tolerance:{down:10,up:20},offset:15,onUnpin:function(){if(!Object(h.isMobile)()&&D){var e=D[0];e&&e.state.isVisible&&e.hide()}}}).init();if(b.length>0){var V=new r.d(".js-recent-slider",{type:"slider",rewind:!1,perView:4,swipeThreshold:!1,dragThreshold:!1,gap:0,direction:Object(h.isRTL)()?"rtl":"ltr",breakpoints:{1024:{perView:3,swipeThreshold:80,dragThreshold:120},768:{perView:2,swipeThreshold:80,dragThreshold:120,peek:{before:0,after:115}},568:{perView:1,swipeThreshold:80,dragThreshold:120,peek:{before:0,after:115}}}});V.on("mount.after",(function(){Object(l.a)(".js-recent-article-title",50)})),V.mount({Swipe:r.c,Breakpoints:r.a})}if("undefined"!=typeof disableFadeAnimation&&disableFadeAnimation?o()("[data-aos]").addClass("no-aos-animation"):u.a.init({once:!0,startEvent:"DOMContentLoaded"}),w.length>0){var F=document.getElementById("secondary-navigation-template");D=Object(c.a)(".js-open-secondary-menu",{content:F.innerHTML,allowHTML:!0,arrow:!0,trigger:"click",interactive:!0,onShow:function(){R(!0)},onHidden:function(){R(!1)}})}Object(c.a)(".js-tooltip"),Object(l.a)(".js-article-card-title",100),Object(l.a)(".js-article-card-title-no-image",250),e=Object(h.getParameterByName)("action"),t=Object(h.getParameterByName)("stripe"),"subscribe"===e&&H("subscribe"),"signup"===e&&(window.location="".concat(ghostHost,"/signup/?action=checkout")),"checkout"===e&&H("signup"),"signin"===e&&H("signin"),"success"===t&&H("checkout"),"undefined"!=typeof ghostSearchApiKey?E(ghostHost,ghostSearchApiKey):(j.css("visibility","hidden"),k.remove(),y.remove())}))}},[[13,0,1]]]);
>>>>>>> upstream/master
