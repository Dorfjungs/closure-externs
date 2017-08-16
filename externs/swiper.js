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
 * @type {Array<Element>}
 */
Swiper.prototype.bullets;

/**
 * @public
 * @param {boolean} runCallbacks
 * @param {number} speed
 */
Swiper.prototype.slideNext = function(runCallbacks, speed){};

/**
 * @public
 * @param {boolean} runCallbacks
 * @param {number} speed
 */
Swiper.prototype.slidePrev = function(runCallbacks, speed){};

/**
 * @public
 * @param {number} index
 * @param {number} speed
 * @param {boolean} runCallbacks
 */
Swiper.prototype.slideTo = function(index, speed, runCallbacks){};

/**
 * @public
 * @param {boolean} deleteInstance
 * @param {boolean} cleanupStyles
 */
Swiper.prototype.destroy = function(deleteInstance, cleanupStyles){};

/**
 * @public
 */
Swiper.prototype.startAutoplay = function(){};

/**
 * @public
 */
Swiper.prototype.stopAutoplay = function(){};

/**
 * @public
 */
Swiper.prototype.update = function(){};
