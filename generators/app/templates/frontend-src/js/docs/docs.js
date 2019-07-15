(function ($) {
    $('.js-copy-to-clipboard').on('click', function(){
        $this = $(this);
        var desiredText = $this[0].innerHTML;
        desiredText = desiredText.trim();

        if ($this.hasClass("docs-type-style__name")) {
            desiredText = "@include " + desiredText + ";";
        }
        $this.addClass("is-visible");
        $this.attr("aria-label", "Copied!");
        copyToClipboard(desiredText);

        setTimeout(function() {
            $this.removeClass("is-visible");
        }, 500, $this);
    });

    // pri kliku na button se do promenne text nacte zkompilovanej zdrojak
    function copyToClipboard(text) {
        event.preventDefault();

        // vloz zdrojak do textarey
        $('#clipboard-textarea').val(text);

        // plugin ma u tlacitek .js-copy target nastaven na textareu, odkud to nakopiruje do schranky
        new ClipboardJS('.js-copy-to-clipboard');
        // new Clipboard('.js-copy');
    }

    if ($(".js-docs-tabs").length) {
        const $docParent = $(".js-docs-tabs");
        const $docTab = $(".docs-tabs__tab");

        $docTab.on("click", function() {
            $this = $(this);
            let tabNumber = $this.data("tab");
            let activeTab = false;

            if ($this.hasClass("is-active")) {
                activeTab = true;
            }

            $this.closest($docParent).find(".docs-tabs__content").removeClass("is-active");
            $this.closest($docParent).find(".docs-tabs__tab").removeClass("is-active");
            if (activeTab !== true ) {
                $this.closest($docParent).find("[data-content=" + tabNumber + "]").addClass("is-active");
                $this.addClass("is-active");
            } else {
                activeTab = false;
            }
        });
    }


    const toggleGrid = function() {
        const currentGridStatus = localStorage.getItem('rulers');

        if (currentGridStatus == null) {
            localStorage.setItem('rulers', 1);
            setGrid();
        } else {
            localStorage.removeItem('rulers');
            setGrid();
        }
    }

    const setGrid = function() {
        const currentGridStatus = localStorage.getItem('rulers');
        if (currentGridStatus == 1) {
            $('body').addClass('docs-grid-rulers');
            $('.js-toggle-grid').attr('aria-checked', "true");
        } else {
            $('body').removeClass('docs-grid-rulers');
            $('.js-toggle-grid').attr('aria-checked', "false");
        }
    }

    $(window).on('load', setGrid());

    $('.js-toggle-grid').on('click', function(event){
        toggleGrid();
    });





    const toggleDebugView = function() {
        const currentDebugViewStatus = localStorage.getItem('debugView');

        if (currentDebugViewStatus == null) {
            localStorage.setItem('debugView', 1);
            setDebugView();
        } else {
            localStorage.removeItem('debugView');
            setDebugView();
        }
    }

    const setDebugView = function() {
        const currentDebugViewStatus = localStorage.getItem('debugView');
        if (currentDebugViewStatus == 1) {
            $('body').addClass('docs-debug-view');
            $('.js-toggle-debug-view').attr('aria-checked', "true");
        } else {
            $('body').removeClass('docs-debug-view');
            $('.js-toggle-debug-view').attr('aria-checked', "false");
        }
    }

    $(window).on('load', setDebugView());

    $('.js-toggle-debug-view').on('click', function(event){
        toggleDebugView();
    });





    const toggleDevView = function() {
        const currentDevViewStatus = localStorage.getItem('devView');

        if (currentDevViewStatus == null) {
            localStorage.setItem('devView', 1);
            setDevView();
        } else {
            localStorage.removeItem('devView');
            setDevView();
        }
    }

    const setDevView = function() {
        const currentDevViewStatus = localStorage.getItem('devView');
        if (currentDevViewStatus == 1) {
            $('body').addClass('docs-dev-view');
            $('.js-toggle-dev-view').attr('aria-checked', "true");
        } else {
            $('body').removeClass('docs-dev-view');
            $('.js-toggle-dev-view').attr('aria-checked', "false");
        }
    }

    $(window).on('load', setDevView());

    $('.js-toggle-dev-view').on('click', function(event){
        toggleDevView();
    });





    const togglePaddingRulers = function() {
        const currentPaddingStatus = localStorage.getItem('paddingRulers');

        if (currentPaddingStatus == null) {
            localStorage.setItem('paddingRulers', 1);
            setPaddingRulers();
        } else {
            localStorage.removeItem('paddingRulers');
            setPaddingRulers();
        }
    }

    const setPaddingRulers = function() {
        const currentPaddingStatus = localStorage.getItem('paddingRulers');
        if (currentPaddingStatus == 1) {
            $('body').addClass('docs-padding-rulers');
            $('.js-toggle-padding-rulers').attr('aria-checked', "true");
        } else {
            $('body').removeClass('docs-padding-rulers');
            $('.js-toggle-padding-rulers').attr('aria-checked', "false");
        }
    }

    $(window).on('load', setPaddingRulers());

    $('.js-toggle-padding-rulers').on('click', function(event){
        togglePaddingRulers();
    });





    const changeBackground = function(desiredBackground) {
        localStorage.removeItem('background');
        localStorage.setItem('background', desiredBackground);
        setBackground();
    }

    const setBackground = function() {
        const currentBackgroundStatus = localStorage.getItem('background');
        if (currentBackgroundStatus == 'white') {
            $('body').removeClass('docs-bg-black');
            $('body').addClass('docs-bg-white');
        } else if (currentBackgroundStatus == 'black') {
            $('body').removeClass('docs-bg-white');
            $('body').addClass('docs-bg-black');
        } else {
            $('body').removeClass('docs-bg-white');
            $('body').removeClass('docs-bg-black');
        }
    }

    $(window).on('load', setBackground());

    $('.js-toggle-color button').on('click', function(event){
        var desiredBackground = $(this).attr("data-color");
        changeBackground(desiredBackground);
    });









    // // measure padding values
    // var declaredPaddingLeft = getDeclaredProperty('.content__cell');
    // // var declaredPaddingRight = getDeclaredProperty('.content__cell', 'paddingRight');
    // // console.log(declaredPaddingLeft);

    // function getDeclaredProperty(className){
    //     for (var s = 0; s < document.styleSheets.length; s++){
    //         // toto mi najde stylopisy a jejich pravidla
    //         var rules = document.styleSheets[s].rules || document.styleSheets[s].cssRules;
    //         // console.log(rules);

    //         // toto iteruje v ramci pravidel,
    //         for (var r = 0; r < rules.length; r++){
    //             var rule = rules[r];
    //             // console.log(rule);

    //             if (rule.selectorText == className){
    //                 console.log('match!');
    //                 console.log(rule);
    //                 return rule.style.paddingLeft;
    //             }
    //         }
    //     }
    //     return undefined;
    // }


    // // set those measured padding values to pseudo element
    // var addRule = (function (style) {
    //     var sheet = document.head.appendChild(style).sheet;
    //     return function (selector, css) {
    //         var propText = typeof css === "string" ? css : Object.keys(css).map(function (p) {
    //             return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
    //         }).join(";");
    //         sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
    //     };
    // })(document.createElement("style"));

    // addRule(".docs-padding-rulers .content__cell:before", {
    //     width: declaredPaddingLeft,
    //     background: "red",
    //     content: declaredPaddingLeft
    // });

    // addRule(".docs-padding-rulers .content__cell:after", {
    //     width: declaredPaddingRight,
    //     background: "orange",
    //     content: declaredPaddingRight
    // });

})(jQuery);



// arrow nav
(function ($) {
    // find all enabled links
    let $links = $('.docs-nav__main-item .docs-nav__sub-item.is-enabled .docs-nav__sub-link'); // .docs-nav__main-item .docs-nav__sub-item.is-enabled .docs-nav__subsub-item.is-enabled .docs-nav__subsub-link

    // get and clean url path of current page
    var currentPathName = window.location.pathname; // Returns path only
    currentPathName = currentPathName.substring(1);

    // compare active path with links in array, thus find current link
    let currentLink;
    $links.each(function(){
        if (($(this).attr('href')).includes('#')) {
            hrefPos = ($(this).attr('href')).indexOf("#");
            currentLinkHref = ($(this).attr('href'));
            currentLinkHref = currentLinkHref.slice(0, hrefPos);
        } else {
            currentLinkHref = ($(this).attr('href'));
        }

        if (currentLinkHref == currentPathName) {
            currentLink = $(this);
            currentLink.addClass('is-active');
            return currentLink;
        }
    });

    // find active neighbours

    if (currentLink.closest('.docs-nav__sub-item').prevAll('.docs-nav__sub-item.is-enabled').first().find('a')) {
        prevLink = currentLink.closest('.docs-nav__sub-item').prevAll('.docs-nav__sub-item.is-enabled').first().find('.docs-nav__subsub-item.is-enabled .docs-nav__subsub-link');
    } else {
        prevLink = currentLink.closest('.docs-nav__sub-item').prevAll('.docs-nav__sub-item.is-enabled').first().find('a');
    }

    let nextLink = currentLink.closest('.docs-nav__sub-item').nextAll('.docs-nav__sub-item.is-enabled').first().find('a');

    // rigger on arrow keyboard press
    function navigate(e) {
        if (e.which == 37) {
            prevLink[0].click();
        }
        if (e.which == 39) {
            nextLink[0].click();
        }
    }
    window.addEventListener('keydown', navigate);

})(jQuery);





// accordion
    (function ($) {
        let $parent = $(".js-documentation-accordion");
        let $tab = $(".js-documentation-accordion-tab");

        $tab.on("click", function() {
            $this = $(this);
            $this.closest($parent).toggleClass("is-active");
        });
    })(jQuery);

// // slideTo.js
//             $(".js-slideTo").click(function (event) {
//                 event.preventDefault();
//                 slideTo(this);
//             });

//             function slideTo(element) {
//                 $this = $(element);
//                 distance = $this.attr("data-distance");
//                 if (typeof(distance) == "undefined") {
//                     distance = 136; // .documentation-cg-category-header + margin-bottom
//                 }

//                 target = $this.attr("data-target");
//                 if (!target) {
//                     target = $this.attr("href");
//                 }

//                 $("html, body").animate({scrollTop: $(target).offset().top - distance}, 500);
//             }

//             if ($(".js-slideTo-onLoad").length) {
//                 slideTo($(".js-slideTo-onLoad").first());
//             }
//         })(jQuery);

(function ($) {
    var color = '';
    $('.docs-color').each(function() {
        var x = $(this).css('backgroundColor');
        $(this).find('.docs-color__rgba').append(x);
        hexc(x);
        $(this).find('.docs-color__hex').append(color);
    });

    $('.docs-color__sample').each(function() {
        var x = $(this).css('backgroundColor');
        $(this).closest('.docs-color__variable-item').find('.docs-color__rgba').append(x);
        hexc(x);
        $(this).closest('.docs-color__variable-item').find('.docs-color__hex').append(color);
    });

    function hexc(colorval) {
        var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        if (parts == null) {
            color = "0";
        } else {
            delete(parts[0]);
            for (var i = 1; i <= 3; ++i) {
                parts[i] = parseInt(parts[i]).toString(16);
                if (parts[i].length == 1) parts[i] = '0' + parts[i];
            }
            color = '#' + parts.join('');
        }
    }
})(jQuery);

(function ($) {
    $('.docs-type-scale__sample').each(function() {
        var fontSize = $(this).css('fontSize');
        var lineHeight = $(this).css('lineHeight');
        $(this).closest('.docs-type-scale__item').find('.docs-type-scale__font-size').append(fontSize);
        $(this).closest('.docs-type-scale__item').find('.docs-type-scale__line-height').append(lineHeight);
    })
})(jQuery);

(function ($) {
    $('.docs-type-style__sample').each(function() {
        var fontSize = $(this).css('fontSize');
        var lineHeight = $(this).css('lineHeight');
        var fontWeight = $(this).css('fontWeight');
        $(this).closest('.docs-type-style__item').find('.docs-type-style__font-size').append(fontSize);
        $(this).closest('.docs-type-style__item').find('.docs-type-style__line-height').append(lineHeight);
        $(this).closest('.docs-type-style__item').find('.docs-type-style__font-weight').append(fontWeight);
    })
})(jQuery);

//         // <script>
//         (function() {
//                 $('.js-toggle-vertical-guidelines').on('click', function(e){
//                     e.preventDefault();
//                     $('body').toggleClass('doc-grid-lines');
//                 });
//         })(jQuery);
//     // </script>
