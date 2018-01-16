# iconate.js
*A call to transform your existing icons in a cool trendy way*

`iconate.js` is a tiny performant library for cross-browser icon transformation animations in your projects.

## [Demo](http://bitshadow.github.io/iconate)

Installation
------------
- NPM: `npm install iconate`
- Bower: `bower install iconate`
- [Download zip](https://github.com/bitshadow/iconate/archive/master.zip).

**Note**: **iconate.js** also supports AMD and commonJS module pattern.


## Basic Usage
1. Include the Stylesheet and Javascript files in your html.

    ```html
    <link rel="stylesheet" href="iconate.min.css">
    <script type="text/javascript" src="iconate.min.js">
    ```
2. Create icon element.

    ```html
    <i id="icon" class="fa fa-bars fa-lg"></i>
    ```
3. Animate icon from `fa-bar` to `fa-arrow-right` with `rubberBand` animation.

    ```js
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

![Chrome](https://user-images.githubusercontent.com/574802/34985987-f0d3fea4-fadb-11e7-8270-3f0f484ed72c.png) |
![Firefox](https://user-images.githubusercontent.com/574802/34985991-f124e094-fadb-11e7-9ebc-f5c4f69ae1c1.png) |
![IE](https://user-images.githubusercontent.com/574802/34985990-f0fd3cec-fadb-11e7-8f2b-57e23816161f.png) |
![Opera](https://user-images.githubusercontent.com/574802/34985992-f14f87fe-fadb-11e7-9a9c-9ad3617cd4d2.png) |
![Safari](https://user-images.githubusercontent.com/574802/34985993-f17e4544-fadb-11e7-890a-e3801da59be1.png) |
--- | --- | --- | --- | --- |
4+ ✔ | 16+ ✔ | 10+ ✔ | 15+ ✔ | 6+ ✔ |

License
-------

Copyright (c) 2015 Jignesh Kakadiya, http://bitshadow.github.io
Licensed under the [MIT license](http://opensource.org/licenses/MIT).
