/**
 * Helper class for app development with Javascript
 * @author Guilherme Gades Vargas <guilherme.gades@hotmail.com>
 * @version 1.0.0
 */
var Helper = (function() {
    "use strict";

    /**
     * Public funtions
     */
    var Public = {
        removeClass: function(el, className) {
            if (el !== undefined) {
                if (el.classList)
                    el.classList.remove(className)
                else if (Public.hasClass(el, className)) {
                    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
                    el.className = el.className.replace(reg, ' ')
                }
            }
        },

        addClass: function(el, className) {
            if (el.classList)
                el.classList.add(className)
            else if (!Public.hasClass(el, className)) el.className += " " + className
        },

        hasClass: function(el, className) {
            if (el.classList)
                return el.classList.contains(className)
            else
                return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
        }
    };

    /**
     * Private funtions
     */
    var Private = {};

    return Public;
})();