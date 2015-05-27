#iconate.js [![npm version](https://badge.fury.io/js/iconate.svg)](http://badge.fury.io/js/iconate)
*A call to transform your existing icons in a cool trendy way*

`iconate.js` is a tiny performant library for cross-browser icon transformation animations in your projects.

##[Demo](http://bitshadow.github.io/iconate)

Installation
------------
- NPM: `npm install iconate`
- Bower: `bower install iconate`
- [Download zip](https://github.com/bitshadow/iconate/archive/master.zip).

**Note**: **iconate.js** also supports AMD and commonJS module pattern.


## Basic Usage
1. Include the Stylesheet and Javascript files in your html.

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

![Chrome](https://camo.githubusercontent.com/3bfe3f8c64cf4e968b3d45f587c291853a1b8035/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f6368726f6d652f6368726f6d655f34387834382e706e67) | ![Firefox](https://camo.githubusercontent.com/0a3d07e334548501ef5b7c20a75fc1a4e9457566/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f66697265666f782f66697265666f785f34387834382e706e67) | ![IE](https://camo.githubusercontent.com/439d1528b7dc0a003ff74eaeb1fe30d24bb6c904/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f696e7465726e65742d6578706c6f7265722f696e7465726e65742d6578706c6f7265725f34387834382e706e67) | ![Opera](https://camo.githubusercontent.com/ef1c2ea75ec9ec27156ec690f03b8b44e9c0e996/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f6f706572612f6f706572615f34387834382e706e67) | ![Safari](https://camo.githubusercontent.com/7e8c82eab10c4686d5d94a5875ba436750ac33d7/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7361666172692f7361666172695f34387834382e706e67)
--- | --- | --- | --- | --- |
4+ ✔ | 16+ ✔ | 10+ ✔ | 15+ ✔ | 6+ ✔ |

License
-------

Copyright (c) 2015 Jignesh Kakadiya, http://bitshadow.github.io
Licensed under the [MIT license](http://opensource.org/licenses/MIT).
