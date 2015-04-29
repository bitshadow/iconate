(function() {
    'use strict';

    var fromEl = document.querySelector('.dropdown--from'),
        toEl = document.querySelector('.dropdown--to'),
        animateEl = document.querySelector('.dropdown--animate'),
        iconEl = document.getElementById('icon'),
        triggerAnimationEl = document.querySelector('.trigger-anim'),
        config = {
            prevFromValue: '',
            prevToValue: '',
            prevAnimateValue: '',
            fromClass: fromEl.value,
            toClass: toEl.value,
            effectType: animateEl.value
        };

    fromEl.addEventListener('change', updateIcon);
    toEl.addEventListener('change', updateIcon);
    fromEl.addEventListener('focus', updatePreviousValues);
    toEl.addEventListener('focus', updatePreviousValues);
    animateEl.addEventListener('change', updateEffectType);

    function animate(e) {
        e.preventDefault();
        iconate(iconEl, {
            from: config.fromClass,
            to: config.toClass,
            animation: config.effectType
        });

        var temp = config.fromClass;
        config.fromClass = config.toClass;
        config.toClass = temp;
    }

    function updateEffectType(e) {
        config.effectType = e.target.value;
        animate();
    }

    function updatePreviousValues(e) {
        config.prevFromValue = e.target.value;
        config.prevToValue = toEl.value;
    }

    function updateIcon(e) {
        var fromValue, toValue, animateValue;

        iconEl.classList.remove(config.prevFromValue);
        iconEl.classList.remove(config.prevToValue);

        iconEl.classList.add(fromEl.value);

        config.fromClass = fromEl.value;
        config.toClass = toEl.value;
    }

    iconEl.classList.add(config.fromClass);
    iconEl.addEventListener('click', animate);
    triggerAnimationEl.addEventListener('click', animate);

})();
