/**
 * @externs
 */

/**
 * @constructor
 * @param {Element} wrapper
 * @param {Object} config
 */
var IScroll = function(wrapper, config){};

/**
 * @public
 */
IScroll.prototype.refresh = function(){};

/**
 * @public
 */
IScroll.prototype.enable = function(){};

/**
 * @public
 */
IScroll.prototype.disable = function(){};

/**
 * @public
 */
IScroll.prototype.destroy = function(){};

/**
 * @public
 * @param {string|number} event
 * @param {Function} callback
 */
IScroll.prototype.on = function(event, callback){};

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @param {number=} optTime
 */
IScroll.prototype.scrollTo = function(x, y, optTime){};

/**
 * @public
 * @param {Element} element
 * @param {number} ms
 * @param {(number|boolean)=} offsetX
 * @param {(number|boolean)=} offsetY
 */
IScroll.prototype.scrollToElement = function(element, ms, offsetX, offsetY){};