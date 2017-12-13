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
 * @type {number}
 */
Swiper.prototype.activeIndex;

/**
 * @public
 * @type {Array<Element>}
 */
Swiper.prototype.slides;

/**
 * @public
 * @type {Array<Element>}
 */
Swiper.prototype.container;

/**
 * @public
 * @type {Array<Element>}
 */
Swiper.prototype.bullets;

/**
 * @public
 * @param {boolean=} runCallbacks
 * @param {number=} speed
 */
Swiper.prototype.slideNext = function(runCallbacks, speed){};

/**
 * @public
 * @param {boolean=} runCallbacks
 * @param {number=} speed
 */
Swiper.prototype.slidePrev = function(runCallbacks, speed){};

/**
 * @public
 * @param {number} index
 * @param {number=} speed
 * @param {boolean=} runCallbacks
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
 * @param {boolean=} updateTranslate
 */
Swiper.prototype.update = function(updateTranslate){};

/**
 * @public
 * @param {Element|string|Array<Element>} slide
 */
Swiper.prototype.prependSlide = function(slide){};

/**
 * @public
 * @param {Element|string|Array<Element>} slide
 */
Swiper.prototype.appendSlide = function(slide){};

/**
 * @public
 * @param {Array<number>|number} slideIndex
 */
Swiper.prototype.removeSlide = function(slideIndex){};

/**
 * @public
 */
Swiper.prototype.updateAutoHeight = function(){};