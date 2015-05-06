#iconate.js
*A call to transform your existing icons in cool trendy way*

`iconate.js` is tiny performant library for cross-browser icon transformation animations in your projects.

##[View Demo](http://bitshadow.github.io/iconate)

Installation
------------
- [Download zip](https://github.com/bitshadow/iconate/archive/master.zip).

**Note**: **iconate.js** also supports AMD and commonJS module pattern.


## Basic Usage
1. Include the Stylesheet and Javascript files on your html.

    ```
        <head>
            <link rel="stylesheet" href="iconate.min.css">
        </head>

        <body>
            <!-- if you are using font-awesome -->
            <i id="icon" class="fa fa-bars fa-lg"></i>

            <!-- if you are using glyphicons -->
            <span class="glyphicons glyphicons-menu-hamburger"></span>

            /**
             * Your Template
             */

            <script type="text/javascript" src="iconate.min.js">
        </body>
    ```

2. You can animate an icon on click event.

    ```
        var iconElement = document.getElementById('icon'),
            options = {
                from: 'fa-bars',
                to: 'fa-arrow-right',
                animation: 'rubberBand'
            };

        iconElement.addEventListener('click', function() {
            iconate(this, options);
        });
    ```



3. You can pass following AnimationTypes to iconate call.
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
    * `animation` - You can choose any animation from above listed animation types.  (ex. 'fadeOutRight')
* `callback` - Optional callback to execute after animation completes.

Browser Support
---------------

Should work with chrome 4+, ie 10+, firefox 16, safari 4, opera 12.1, 15.

License
-------

Copyright (c) 2015 Jignesh Kakadiya, http://bitshadow.github.io
Licensed under the [MIT license](http://opensource.org/licenses/MIT).