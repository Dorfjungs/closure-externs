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
 * @type {Object}
 */
Swiper.prototype.pagination;

/**
 * @public
 * @type {Element}
 */
Swiper.prototype.pagination.el;

/**
 * @public
 * @type {Array<Element>}
 */
Swiper.prototype.pagination.bullets;

/**
 * @public
 * @param {number=} speed
 * @param {boolean=} runCallbacks
 */
Swiper.prototype.slideNext = function(speed, runCallbacks){};

/**
 * @public
 * @param {number=} speed
 * @param {boolean=} runCallbacks
 */
Swiper.prototype.slidePrev = function(speed, runCallbacks){};

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
 * @type {Object}
 */
Swiper.prototype.autoplay;

/**
 * @public
 */
Swiper.prototype.autoplay.start = function(){};

/**
 * @public
 */
Swiper.prototype.autoplay.stop = function(){};

/**
 * @public
 */
Swiper.prototype.update = function(){};

/**
 * @public
 */
Swiper.prototype.init = function(){};

/**
 * @public
 */
Swiper.prototype.updateSize = function(){}

/**
 * @public
 */
Swiper.prototype.updateSlides = function(){}

/**
 * @public
 */
Swiper.prototype.updateProgress = function(){}

/**
 * @public
 */
Swiper.prototype.updateSlidesClasses = function(){}

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
 * @param {string} name
 * @param {Function} callback
 */
Swiper.prototype.on = function(name, callback){};