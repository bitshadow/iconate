/*! iconate.js - v0.3.0 - 2015-05-01
* http://bitshadow.github.io/iconatejs/
* Copyright (c) 2015 Jignesh Kakadiya; Licensed MIT */

/*! iconate.js - v0.3.0 - 2015-04-27
* http://bitshadow.github.io/iconatejs/
* Copyright (c) 2015 Jignesh Kakadiya; Licensed MIT */

/*global window */
/*global document */
(function() {
    'use strict';

    var DELAY = 600;
    var ICONATE_PERF_COUNTER = 1;
    var INTERVAL_DURATION = 10;

    // 1s
    var MAX_DURATION = 1000;
    var MAX_PERCENTAGE = 100;

    var currentTime = Date.now || function() {
        return new Date().getTime();
    };

    var time = currentTime();
    var timer1 = setInterval(func1, INTERVAL_DURATION);
    var timer2 = setInterval(func1, INTERVAL_DURATION);

    function func1() {
        var elapsedTime = Date.now() - time;
        if (elapsedTime >= MAX_DURATION) {
            clearInterval(timer1);
            clearInterval(timer2);
        }

        ICONATE_PERF_COUNTER = ICONATE_PERF_COUNTER + 1;
    }

    var throttle = function(func, wait, options) {
        var context, args, result, timeout = null, previous = 0;
        if (!options) {
            options = {};
        }

        var later = function() {
            previous = options.leading === false ? 0 : currentTime();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) {
                context = args = null;
            }
        };

        return function() {
            var now = currentTime();
            if (!previous && options.leading === false) {
                previous = now;
            }

            var remaining = wait - (now - previous);
            context = this;
            args = arguments;

            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    window.clearTimeout(timeout);
                    timeout = null;
                }

                previous = now;
                result = func.apply(context, args);

                if (!timeout) {
                    context = args = null;
                }
            } else if (!timeout && options.trailing !== false) {
                timeout = window.setTimeout(later, remaining);
            }

            return result;
        };
    };

    var pfx = ['webkit', 'moz', 'MS', 'o', ''];
    function addPrefixedEventHandler(element, type, callback) {
        for (var p = 0; p < pfx.length; p++) {
            if (!pfx[p]) {
                type = type.toLowerCase();
            }

            element.addEventListener(pfx[p] + type, callback, false);
        }
    }

    function removePrefixedEventHandler(element, type, callback) {
        for (var p = 0; p < pfx.length; p++) {
            if (!pfx[p]) {
                type = type.toLowerCase();
            }

            element.removeEventListener(pfx[p] + type, callback, false);
        }
    }

    function iconate(el, options, callback) {
        options = options || {};

        // var result = document.getElementById('result');
        var intervalTime = DELAY / MAX_PERCENTAGE;
        var showPercent;

        function animationStartHandler() {
            var currentPercent = 0;
            showPercent = window.setInterval(function() {
                if (currentPercent < MAX_PERCENTAGE) {
                    currentPercent += 1;
                } else {
                    currentPercent = 0;
                }

                var AVERAGE_PERF_COUNTER = parseInt(ICONATE_PERF_COUNTER / 4, 10);
                AVERAGE_PERF_COUNTER = AVERAGE_PERF_COUNTER < 40 ? 40 : AVERAGE_PERF_COUNTER;
                if (currentPercent === AVERAGE_PERF_COUNTER) {
                    if (el.classList.contains(options.from)) {
                        el.classList.remove(options.from);
                    }

                    el.classList.add(options.to);
                }

                // result.innerHTML = currentPercent;
            }, intervalTime);
        }

        function animationEndHandler() {
            window.clearInterval(showPercent);
            el.style.removeProperty('-webkit-animation');
            el.style.removeProperty('animation');
            el.style.removeProperty('-moz-animation');
            el.style.removeProperty('-o-animation');

            removePrefixedEventHandler(el, 'AnimationEnd', animationEndHandler);
            removePrefixedEventHandler(el, 'AnimationStart', animationStartHandler);

            if (callback && typeof callback === 'function') {
                callback();
            }
        }

        addPrefixedEventHandler(el, 'AnimationStart', animationStartHandler, false);
        addPrefixedEventHandler(el, 'AnimationEnd', animationEndHandler, false);

        var debouncedClickHandler = throttle(function() {
            var delay = options.duration || (DELAY / MAX_DURATION);

            el.style.setProperty('-webkit-animation', options.animation + ' ' + delay + 's');
            el.style.setProperty('animation', options.animation + ' ' + delay + 's');
            el.style.setProperty('-moz-animation', options.animation + ' ' + delay + 's');
            el.style.setProperty('-o-animation', options.animation + ' ' + delay + 's');
        }, 450);

        debouncedClickHandler();
    }

    // commonjs
    if (typeof exports === 'object') {
        module.exports = iconate;
    }

    // AMD module
    else if (typeof define === 'function' && define.amd) {
        define([], iconate);
    }

    // Browser global
    else {
        window.iconate = iconate;
    }
}());
