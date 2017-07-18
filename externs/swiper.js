/**
 * @externs
 */

/**
 * @constructor
 * @param {Element|string} target
 * @param {Object} config
 */
var Swiper = function(target, config){};

/**
 * @public
 * @type {boolean}
 */
Swiper.prototype.animating;

/**
 * @public
 * @type {number}
 */
Swiper.prototype.realIndex;

/**
 * @public
 * @type {Array<Element>}
 */
Swiper.prototype.slides;

/**
 * @public
 */
Swiper.prototype.slideNext = function(){};

/**
 * @public
 */
Swiper.prototype.slidePrev = function(){};

/**
 * @public
 * @param {boolean} deleteInstance
 * @param {boolean} cleanupStyles
 */
Swiper.prototype.destroy = function(deleteInstance, cleanupStyles){};