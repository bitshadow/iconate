#iconate.js [![npm version](https://badge.fury.io/js/iconate.svg)](http://badge.fury.io/js/iconate)[![Comment-on-Github.Party](https://img.shields.io/badge/Comment%20on-Github.Party-yellow.svg)](https://github.party/item?id=51)
*A call to transform your existing icons in cool trendy way*

`iconate.js` is tiny performant library for cross-browser icon transformation animations in your projects.

##[Demo](http://bitshadow.github.io/iconate)

Installation
------------
- NPM: `npm install iconate`
- Bower: `bower install iconate`
- [Download zip](https://github.com/bitshadow/iconate/archive/master.zip).

**Note**: **iconate.js** also supports AMD and commonJS module pattern.


## Basic Usage
1. Include the Stylesheet and Javascript files on your html.

    ```
        <link rel="stylesheet" href="iconate.min.css">
        <script type="text/javascript" src="iconate.min.js">
    ```
2. Create icon element.

    ```
       <i id="icon" class="fa fa-bars fa-lg"></i>
    ```
3. Animate icon from `fa-bar` to `fa-arrow-right` with `rubberBand` animation.

    ```
        var iconElement = document.getElementById('icon');
        var options = {
            from: 'fa-bars',
            to: 'fa-arrow-right',
            animation: 'rubberBand'
        };

        iconate(iconElement, options);
    ```


3. Following AnimationTypes can be used in iconate call.
    * `rollOutRight`
    * `rollOutLeft`
    * `rubberBand`
    * `zoomOut`
    * `zoomIn`
    * `fadeOut`
    * `fadeOutRight`
    * `fadeOutLeft`
    * `fadeOutTop`
    * `fadeOutBottom`
    * `horizontalFlip`
    * `verticalFlip`
    * `bounceOutBottom`
    * `bounceOutTop`
    * `bounceOutLeft`
    * `bounceOutRight`
    * `rotateClockwise`
    * `rotateAntiClockwise`
    * `tada`


Public API
----------

### iconate(element, [, options] [, callback] )

Animate an icon element.
* `element` - Icon Element to perform operations on.
* `options` - Object containing options to control the animation.
    * `from` - Current icon class name (ex. 'fa-bars' in case of font-awesome)
    * `to` - Final icon class name (ex. 'fa-arrow-right')
    * `animation` - You can choose any animation from above listed animation types.  (ex. 'fadeOutRight')(default: 'zoomOut')
* `callback` - Optional callback to execute after animation completes.

Browser Support
---------------

Tested with chrome 4+, ie 10+, firefox 16+, safari 6+, opera 15+.


License
-------

Copyright (c) 2015 Jignesh Kakadiya, http://bitshadow.github.io
Licensed under the [MIT license](http://opensource.org/licenses/MIT).
