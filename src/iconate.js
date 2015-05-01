/*! iconate.js - v0.3.0 - 2015-04-27
 * http://bitshadow.github.io/iconatejs/
 * Copyright (c) 2015 Jignesh Kakadiya; Licensed MIT */

/*global window */
/*global document */
(function() {
    'use strict';

    var DELAY = 600;
    var DEFAULT_DURATION = 600;
    var TEST_INTERVAL = 10;
    var ONE_SECOND = 1000;
    var MAX_FRAMES = 100;
    var frameCounter = 1;

    var currentTime = Date.now || function() {
        return new Date().getTime();
    };

    var time = currentTime();
    var timer1 = setInterval(func1, TEST_INTERVAL);
    var timer2 = setInterval(func1, TEST_INTERVAL);

    function func1() {
        var elapsedTime = currentTime() - time;
        if (elapsedTime >= ONE_SECOND) {
            clearInterval(timer1);
            clearInterval(timer2);
        }

        frameCounter = frameCounter + 1;
    }

    var throttle = function(func, wait, options) {
        var context, args, result, timeout = null,
            previous = 0;
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

    function setAnimation(element, animType, duration) {
        element.style.setProperty('-webkit-animation', animType + ' ' + duration + 's');
        element.style.setProperty('animation', animType + ' ' + duration + 's');
        element.style.setProperty('-moz-animation', animType + ' ' + duration + 's');
        element.style.setProperty('-o-animation', animType + ' ' + duration + 's');
    }

    function removeAnimation(element) {
        element.style.removeProperty('-webkit-animation');
        element.style.removeProperty('animation');
        element.style.removeProperty('-moz-animation');
        element.style.removeProperty('-o-animation');
    }

    function changeClasses(element, from, to) {
        if (element.classList.contains(from)) {
            element.classList.remove(from);
        }

        element.classList.add(to);
    }

    function iconate(el, options, callback) {
        var duration, interval, showPercent;
        options = options || {};

        // var result = document.getElementById('result');
        duration = options.duration || DEFAULT_DURATION;
        interval = duration / MAX_FRAMES;

        function animationStartHandler() {
            var currentPercent = 0,
                averageFrames;

            showPercent = window.setInterval(function() {
                currentPercent = currentPercent < MAX_FRAMES ? currentPercent + 1 : 0;
                averageFrames = Math.max(parseInt(frameCounter / 4, 10), 40);
                if (currentPercent === averageFrames) {
                    changeClasses(el, options.from, options.to);
                }

                // result.innerHTML = currentPercent;
            }, interval);
        }

        function animationEndHandler() {
            window.clearInterval(showPercent);
            removeAnimation(el);
            removePrefixedEventHandler(el, 'AnimationEnd', animationEndHandler);
            removePrefixedEventHandler(el, 'AnimationStart', animationStartHandler);

            if (callback && typeof callback === 'function') {
                callback();
            }
        }

        addPrefixedEventHandler(el, 'AnimationStart', animationStartHandler, false);
        addPrefixedEventHandler(el, 'AnimationEnd', animationEndHandler, false);

        var debouncedClickHandler = throttle(function() {
            var durationInSec = duration / ONE_SECOND;

            setAnimation(el, options.animation, durationInSec);
        }, duration);

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
