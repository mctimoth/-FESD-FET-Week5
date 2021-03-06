#FESD FET Week 5
# Topic 5: jQuery, AJAX

https://github.com/markjszy/frontend-demos/tree/main/topic5
​
* jQuery
    * historical perspective: origins of jQuery - what problems does jQuery solve?
    * jQuery's place in the JavaScript ecosystem
        * "vanilla" JavaScript
        * jQuery: general-purpose library to ease DOM manipulation, event handling, Ajax
        * "opinionated/focused" libraries, frameworks
    * core concepts
        * introducing $
            * distinction between *jQuery object methods* and *jQuery methods*
                * jQuery object methods: 
                    * act on a *selection*
                    * are in the `$.fn` namespace
                    * automatically receive and return the selection as `this` (allows convenient chaining, among other things)
                    * example: in `$('h1').remove()`, `remove()` is an object method
                * jQuery methods
                    * do not act on a selection
                    * are in the top-level jQuery namespace `$`
                    * not automatically passed any arguments
                    * return value will vary
                    * example: `$.each()` utility method
            * general usage: (see [the jQuery object](https://learn.jquery.com/using-jquery-core/jquery-object/))
            * commonly used object methods 
                * invoking the jQuery function with a CSS selector returns a jQuery object wrapping any matching element(s)
                    * most of the time with jQuery you are going  to be working with "wrapped" elements.
                    * common convention to name jQuery object variables with a preceding `$`, e.g. `let $myHeaders = $('h1');`
                    * you can "unwrap" with array-like subscripting or with convenience methods like `.get()`
                    * jQuery objects are *not* 'live': they do not keep up with changes to the document
                * `$(document).ready()` (see https://learn.jquery.com/using-jquery-core/document-ready/)
                    * often shortened to `$(function() { .... })`
                * `.text()`: get or set text in element
                * `.val()`: get or set value on input element
                * `.attr()`: get or set attributes
                * `.after()`. `.before()`, `.append()`, `.prepend()`
                * `.empty()`, `.remove()`
                * `.hide()`, `.show()`
                * `.on()` to add event handlers
            * commonly used jQuery methods (note: some fading in use as ES2015+ adoption allows safe use of "vanilla" JS)
                * `$.get`, `$.post`
                    * see XMLHttpRequest for the "hard way" (vanilla JS)[https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started#step_3_%E2%80%93_a_simple_example]
                * utilities: `$.each`, `$.extend`, `$.trim`, `$.proxy` (example alternative: `Function.prototype.bind`)
    * resources 
        * [jQuery learning center](https://learn.jquery.com/)
        * [Using jQuery core](https://learn.jquery.com/using-jquery-core/)
* AJAX ("Asynchronous JavaScript and XML")
    * historical perspective: why was/is Ajax a big deal?...no more full-page refreshes
    * references
        * [MDN guide on AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)
        * HTTP verbs overview (GET/POST/PUT/PATCH/DELETE) (see MDN overview)[https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods]