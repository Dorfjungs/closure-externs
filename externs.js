/**
 * @externs
 *
 * Just a combined file of the greensock externs from netzbewegung.
 * Thanks to Ralf Sandig @ netzbewegung (https://github.com/netzbewegung/greensock-closure-externs)
 */

/** Core */

/**
 * @type {Object}
 */
var com = {};

/**
 * @type {Object}
 */
com.greensock;

/**
 * @type {Object}
 */
com.greensock.core;

/**
 * @type {Object}
 */
com.greensock.easing;

/**
 * @type {Object}
 */
com.greensock.plugins;

/**
 * @type {Object}
 */
com.greensock.events;

/**
 * @type {Object}
 */
com.greensock.utils;

/** Easing */

/** @type {Object} */
com.greensock.easing.CustomEase;

/**
 * @param {string} name
 * @param {string} easing
 * @return {Function}
 */
com.greensock.easing.CustomEase.create = function(name, easing){};

/**
 * @param {Function=} func
 * @param {Array=} extraParams
 * @param {number=} type
 * @param {number=} power
 * @constructor
 */
com.greensock.easing.Ease = function(func, extraParams, type, power){};

/**
 * @param {number} progress
 * @returns {number}
 */
com.greensock.easing.Ease.prototype.getRatio = function(progress){};

/**
 * @constructor
 */
com.greensock.easing.EaseLookup = function(){};

/**
 * @param {string} name
 * @returns {com.greensock.easing.Ease}
 */
com.greensock.easing.EaseLookup.find = function(name){};

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Back = function(){};

/**
 * @type {com.greensock.easing.Back}
 */
com.greensock.easing.Back.easeIn;

/**
 * @type {com.greensock.easing.Back}
 */
com.greensock.easing.Back.easeInOut;

/**
 * @type {com.greensock.easing.Back}
 */
com.greensock.easing.Back.easeOut;

/**
 * @param {number=} linearRatio
 * @param {number=} power
 * @param {number=} yoyoMode
 * @returns {com.greensock.easing.Back}
 */
com.greensock.easing.Back.prototype.config = function(linearRatio, power, yoyoMode){};

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Bounce = function(){};

/**
 * @type {com.greensock.easing.Bounce}
 */
com.greensock.easing.Bounce.easeIn;

/**
 * @type {com.greensock.easing.Bounce}
 */
com.greensock.easing.Bounce.easeInOut;

/**
 * @type {com.greensock.easing.Bounce}
 */
com.greensock.easing.Bounce.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Circ = function(){};

/**
 * @type {com.greensock.easing.Bounce}
 */
com.greensock.easing.Circ.easeIn;

/**
 * @type {com.greensock.easing.Bounce}
 */
com.greensock.easing.Circ.easeInOut;

/**
 * @type {com.greensock.easing.Bounce}
 */
com.greensock.easing.Circ.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Cubic = function(){};

/**
 * @type {com.greensock.easing.Cubic}
 */
com.greensock.easing.Cubic.easeIn;

/**
 * @type {com.greensock.easing.Cubic}
 */
com.greensock.easing.Cubic.easeInOut;

/**
 * @type {com.greensock.easing.Cubic}
 */
com.greensock.easing.Cubic.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Elastic = function(){};

/**
 * @type {com.greensock.easing.Elastic}
 */
com.greensock.easing.Elastic.easeIn;

/**
 * @type {com.greensock.easing.Elastic}
 */
com.greensock.easing.Elastic.easeInOut;

/**
 * @type {com.greensock.easing.Elastic}
 */
com.greensock.easing.Elastic.easeOut;

/**
 * @param {number=} linearRatio
 * @param {number=} power
 * @param {number=} yoyoMode
 * @returns {com.greensock.easing.Elastic}
 */
com.greensock.easing.Elastic.prototype.config = function(linearRatio, power, yoyoMode){};

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Expo = function(){};

/**
 * @type {com.greensock.easing.Expo}
 */
com.greensock.easing.Expo.easeIn;

/**
 * @type {com.greensock.easing.Expo}
 */
com.greensock.easing.Expo.easeInOut;

/**
 * @type {com.greensock.easing.Expo}
 */
com.greensock.easing.Expo.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Linear = function(){};

/**
 * @type {com.greensock.easing.Linear}
 */
com.greensock.easing.Linear.ease;

/**
 * @type {com.greensock.easing.Linear}
 */
com.greensock.easing.Linear.easeIn;

/**
 * @type {com.greensock.easing.Linear}
 */
com.greensock.easing.Linear.easeInOut;

/**
 * @type {com.greensock.easing.Linear}
 */
com.greensock.easing.Linear.easeNone;

/**
 * @type {com.greensock.easing.Linear}
 */
com.greensock.easing.Linear.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Power0 = function(){};

/**
 * @type {com.greensock.easing.Power0}
 */
com.greensock.easing.Power0.easeIn;

/**
 * @type {com.greensock.easing.Power0}
 */
com.greensock.easing.Power0.easeInOut;

/**
 * @type {com.greensock.easing.Power0}
 */
com.greensock.easing.Power0.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Power1 = function(){};

/**
 * @type {com.greensock.easing.Power1}
 */
com.greensock.easing.Power1.easeIn;

/**
 * @type {com.greensock.easing.Power1}
 */
com.greensock.easing.Power1.easeInOut;

/**
 * @type {com.greensock.easing.Power1}
 */
com.greensock.easing.Power1.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Power2 = function(){};

/**
 * @type {com.greensock.easing.Power2}
 */
com.greensock.easing.Power2.easeIn;

/**
 * @type {com.greensock.easing.Power2}
 */
com.greensock.easing.Power2.easeInOut;

/**
 * @type {com.greensock.easing.Power2}
 */
com.greensock.easing.Power2.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Power3 = function(){};

/**
 * @type {com.greensock.easing.Power3}
 */
com.greensock.easing.Power3.easeIn;

/**
 * @type {com.greensock.easing.Power3}
 */
com.greensock.easing.Power3.easeInOut;

/**
 * @type {com.greensock.easing.Power3}
 */
com.greensock.easing.Power3.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Power4 = function(){};

/**
 * @type {com.greensock.easing.Power4}
 */
com.greensock.easing.Power4.easeIn;

/**
 * @type {com.greensock.easing.Power4}
 */
com.greensock.easing.Power4.easeInOut;

/**
 * @type {com.greensock.easing.Power4}
 */
com.greensock.easing.Power4.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Quad = function(){};

/**
 * @type {com.greensock.easing.Quad}
 */
com.greensock.easing.Quad.easeIn;

/**
 * @type {com.greensock.easing.Quad}
 */
com.greensock.easing.Quad.easeInOut;

/**
 * @type {com.greensock.easing.Quad}
 */
com.greensock.easing.Quad.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Quart = function(){};

/**
 * @type {com.greensock.easing.Quart}
 */
com.greensock.easing.Quart.easeIn;

/**
 * @type {com.greensock.easing.Quart}
 */
com.greensock.easing.Quart.easeInOut;

/**
 * @type {com.greensock.easing.Quart}
 */
com.greensock.easing.Quart.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Quint = function(){};

/**
 * @type {com.greensock.easing.Quint}
 */
com.greensock.easing.Quint.easeIn;

/**
 * @type {com.greensock.easing.Quint}
 */
com.greensock.easing.Quint.easeInOut;

/**
 * @type {com.greensock.easing.Quint}
 */
com.greensock.easing.Quint.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Sine = function(){};

/**
 * @type {com.greensock.easing.Sine}
 */
com.greensock.easing.Sine.easeIn;

/**
 * @type {com.greensock.easing.Sine}
 */
com.greensock.easing.Sine.easeInOut;

/**
 * @type {com.greensock.easing.Sine}
 */
com.greensock.easing.Sine.easeOut;

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.Strong = function(){};

/**
 * @type {com.greensock.easing.Strong}
 */
com.greensock.easing.Strong.easeIn;

/**
 * @type {com.greensock.easing.Strong}
 */
com.greensock.easing.Strong.easeInOut;

/**
 * @type {com.greensock.easing.Strong}
 */
com.greensock.easing.Strong.easeOut;

/**
 * @param {Object=} vars
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.RoughEase = function(vars){};

/**
 * @type {com.greensock.easing.RoughEase}
 */
com.greensock.easing.RoughEase.ease;

/**
 * @param {Object=} vars
 * @returns {com.greensock.easing.RoughEase}
 */
com.greensock.easing.RoughEase.prototype.config = function(vars){};

/**
 * @param {number=} linearRatio
 * @param {number=} power
 * @param {boolean=} yoyoMode
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.SlowMo = function(linearRatio, power, yoyoMode){};

/**
 * @type {com.greensock.easing.SlowMo}
 */
com.greensock.easing.SlowMo.ease;

/**
 * @param {number=} linearRatio
 * @param {number=} power
 * @param {boolean=} yoyoMode
 * @returns {com.greensock.easing.SlowMo}
 */
com.greensock.easing.SlowMo.prototype.config = function(linearRatio, power, yoyoMode){};

/**
 * @param {number} steps
 * @constructor
 * @extends {com.greensock.easing.Ease}
 */
com.greensock.easing.SteppedEase = function(steps){};

/**
 * @param {number} steps
 * @returns {com.greensock.easing.SteppedEase}
 */
com.greensock.easing.SteppedEase.config = function(steps){};

/** Animation */

/**
 * @param {number=} duration
 * @param {Object=} vars
 * @constructor
 */
com.greensock.core.Animation = function(duration, vars){};

/**
 * @type {*}
 */
com.greensock.core.Animation.prototype.data;

/**
 * @const {com.greensock.core.SimpleTimeline}
 */
com.greensock.core.Animation.prototype.timeline;

/**
 * @type {Object}
 */
com.greensock.core.Animation.prototype.vars;

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.core.Animation.prototype.delay = function(value){};

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.core.Animation.prototype.duration = function(value){};

/**
 * @param {string} type
 * @param {Function=} callback
 * @param {Array=} params
 * @param {*=} scope
 * @returns {*}
 */
com.greensock.core.Animation.prototype.eventCallback = function(type, callback, params, scope){};

com.greensock.core.Animation.prototype.invalidate = function(){};

/**
 * @returns {boolean}
 */
com.greensock.core.Animation.prototype.isActive = function(){};

/**
 * @param {Object=} vars
 * @param {Object=} object
 */
com.greensock.core.Animation.prototype.kill = function(vars, object){};

/**
 * @param {(number|string)=} atTime
 * @param {boolean=} supressEvents
 */
com.greensock.core.Animation.prototype.pause = function(atTime, supressEvents){};

/**
 * @param {boolean=} value
 * @returns {boolean}
 */
com.greensock.core.Animation.prototype.paused = function(value){};

/**
 * @param {(number|string)=} from
 * @param {boolean=} suppressEvents
 */
com.greensock.core.Animation.prototype.play = function(from, suppressEvents){};

/**
 * @param {number=} value
 * @param {boolean=} suppressEvents
 * @returns {number}
 */
com.greensock.core.Animation.prototype.progress = function(value, suppressEvents){};

/**
 * @param {boolean=} includeDelay
 * @param {boolean=} suppressEvents
 */
com.greensock.core.Animation.prototype.restart = function(includeDelay, suppressEvents){};

/**
 * @param {(number|string)=} from
 * @param {boolean=} suppressEvents
 */
com.greensock.core.Animation.prototype.resume = function(from, suppressEvents){};

/**
 * @param {(number|string)=} from
 * @param {boolean=} suppressEvents
 */
com.greensock.core.Animation.prototype.reverse = function(from, suppressEvents){};

/**
 * @param {boolean=} value
 * @returns {boolean}
 */
com.greensock.core.Animation.prototype.reversed = function(value){};

/**
 * @param {(number|string)=} time
 * @param {boolean=} suppressEvents
 */
com.greensock.core.Animation.prototype.seek = function(time, suppressEvents){};

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.core.Animation.prototype.startTime = function(value){};

/**
 * @param {boolean=} includeRepeats
 * @returns {number}
 */
com.greensock.core.Animation.prototype.endTime = function(includeRepeats){};

/**
 * @param {number=} value
 * @param {boolean=} suppressEvents
 * @returns {number}
 */
com.greensock.core.Animation.prototype.time = function(value, suppressEvents){};

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.core.Animation.prototype.timeScale = function(value){};

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.core.Animation.prototype.totalDuration = function(value){};

/**
 * @param {number=} value
 * @param {boolean=} suppressEvents
 * @returns {number}
 */
com.greensock.core.Animation.prototype.totalProgress = function(value, suppressEvents){};

/**
 * @param {number=} time
 * @param {boolean=} suppressEvents
 * @returns {number}
 */
com.greensock.core.Animation.prototype.totalTime = function(time, suppressEvents){};

/** Plugins */

/**
 * @constructor
 */
com.greensock.plugins.BezierPlugin = function(){};

/**
 * @param {Array} values
 * @param {number=} curviness
 * @param {boolean=} quadratic
 * @param {string=} correlate
 * @param {*=} prepend
 * @param {boolean=} calcDifs
 * @returns {*}
 */
com.greensock.plugins.BezierPlugin.bezierThrough = function(values, curviness, quadratic, correlate, prepend, calcDifs){};

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @returns {Array}
 */
com.greensock.plugins.BezierPlugin.cubicToQuadratic = function(a, b, c, d){};

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {*}
 */
com.greensock.plugins.BezierPlugin.quadraticToCubic = function(a, b, c){};

/**
 * @constructor
 */
com.greensock.plugins.CSSRulePlugin = function(){};

/**
 * @param {string} selector
 * @returns {*}
 */
com.greensock.plugins.CSSRulePlugin.getRule = function(selector){};

/**
 * @constructor
 */
com.greensock.plugins.ThrowPropsPlugin = function(){};

/**
 * @type {number}
 */
com.greensock.plugins.ThrowPropsPlugin.defaultResistance;

/**
 * @param {number} velocity
 * @param {*} ease
 * @param {number} duration
 * @param {number=} checkPoint
 * @returns {number}
 */
com.greensock.plugins.ThrowPropsPlugin.calculateChange = function(velocity, ease, duration, checkPoint){};

/**
 * @param {number} start
 * @param {number} end
 * @param {number} velocity
 * @param {*} ease
 * @param {number=} checkPoint
 * @returns {number}
 */
com.greensock.plugins.ThrowPropsPlugin.calculateDuration = function(start, end, velocity, ease, checkPoint){};

/**
 * @param {Object} target
 * @param {Object} vars
 * @param {number=} maxDuration
 * @param {number=} minDuration
 * @param {number=} overshootTolerance
 * @returns {number}
 */
com.greensock.plugins.ThrowPropsPlugin.calculateTweenDuration = function(target, vars, maxDuration, minDuration, overshootTolerance){};

/**
 * @param {Object} target
 * @param {string} prop
 * @returns {number}
 */
com.greensock.plugins.ThrowPropsPlugin.getVelocity = function(target, prop){};

/**
 * @param {Object} target
 * @param {string=} prop
 * @returns {boolean}
 */
com.greensock.plugins.ThrowPropsPlugin.isTracking = function(target, prop){};

/**
 * @param {Object} target
 * @param {Object} vars
 * @param {number=} maxDuration
 * @param {number=} minDuration
 * @param {number=} overshootTolerance
 * @returns {com.greensock.TweenLite}
 */
com.greensock.plugins.ThrowPropsPlugin.to = function(target, vars, maxDuration, minDuration, overshootTolerance){};

/**
 * @param {Object} target
 * @param {string} props
 * @param {string} type
 * @returns {com.greensock.utils.VelocityTracker}
 */
com.greensock.plugins.ThrowPropsPlugin.track = function(target, props, type){};

/**
 * @param {Object} target
 * @param {string=} props
 */
com.greensock.plugins.ThrowPropsPlugin.untrack = function(target, props){};

/** TweenLite */

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 * @constructor
 * @extends {com.greensock.core.Animation}
 */
com.greensock.TweenLite = function(target, duration, vars){};

/**
 * @const {Object}
 */
com.greensock.TweenLite.prototype.target;

/**
 * @type {com.greensock.easing.Ease}
 */
com.greensock.TweenLite.defaultEase;

/**
 * @type {string}
 */
com.greensock.TweenLite.defaultOverwrite;

/**
 * @type {Function}
 */
com.greensock.TweenLite.onOverwrite;

/**
 * @type {*}
 */
com.greensock.TweenLite.selector;

/**
 * @type {Object}
 */
com.greensock.TweenLite.ticker;

/**
 * @param {boolean} value
 */
com.greensock.TweenLite.ticker.useRAF = function(value){};

/**
 * @param {number} delay
 * @param {Function} callback
 * @param {Array=} params
 * @param {*=} scope
 * @param {boolean=} useFrames
 * @returns {com.greensock.TweenLite}
 */
com.greensock.TweenLite.delayedCall = function(delay, callback, params, scope, useFrames){};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 * @returns {com.greensock.TweenLite}
 */
com.greensock.TweenLite.from = function(target, duration, vars){};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} fromVars
 * @param {Object} toVars
 * @returns {com.greensock.TweenLite}
 */
com.greensock.TweenLite.fromTo = function(target, duration, fromVars, toVars){};

/**
 * @param {*} target
 * @param {boolean=} onlyActive
 * @returns {Array}
 */
com.greensock.TweenLite.getTweensOf = function(target, onlyActive){};

/**
 * @param {Function} func
 */
com.greensock.TweenLite.killDelayedCallsTo = function(func){};

/**
 * @param {*} target
 * @param {boolean=} onlyActive
 * @param {Object=} vars
 */
com.greensock.TweenLite.killTweensOf = function(target, onlyActive, vars){};

/**
 * @param {number} threshold
 * @param {number} adjustedLag
 */
com.greensock.TweenLite.lagSmoothing = function(threshold, adjustedLag){};

com.greensock.TweenLite.render = function(){};

/**
 * @param {Object} target
 * @param {Object} vars
 * @returns {com.greensock.TweenLite}
 */
com.greensock.TweenLite.set = function(target, vars){};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 * @returns {com.greensock.TweenLite}
 */
com.greensock.TweenLite.to = function(target, duration, vars){};

/** TweenMax */

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 * @constructor
 * @extends {com.greensock.TweenLite}
 */
com.greensock.TweenMax = function(target, duration, vars){};

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.TweenMax.prototype.repeat = function(value){};

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.TweenMax.prototype.repeatDelay = function(value){};

/**
 * @param {Object} vars
 * @param {boolean=} resetDuration
 * @returns {com.greensock.TweenMax}
 */
com.greensock.TweenMax.prototype.updateTo = function(vars, resetDuration){};

/**
 * @param {boolean=} value
 * @returns {boolean}
 */
com.greensock.TweenMax.prototype.yoyo = function(value){};

/**
 * @type {Object}
 */
com.greensock.TweenMax.ticker;

/**
 * @param {number} delay
 * @param {Function} callback
 * @param {Array=} params
 * @param {*=} scope
 * @param {boolean=} useFrames
 * @returns {com.greensock.TweenMax}
 */
com.greensock.TweenMax.delayedCall = function(delay, callback, params, scope, useFrames){};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 * @returns {com.greensock.TweenMax}
 */
com.greensock.TweenMax.from = function(target, duration, vars){};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} fromVars
 * @param {Object} toVars
 * @returns {com.greensock.TweenMax}
 */
com.greensock.TweenMax.fromTo = function(target, duration, fromVars, toVars){};

/**
 * @param {boolean} includeTimelines
 * @returns {Array}
 */
com.greensock.TweenMax.getAllTweens = function(includeTimelines){};

/**
 * @param {*} target
 * @param {boolean=} onlyActive
 * @returns {Array}
 */
com.greensock.TweenMax.getTweensOf = function(target, onlyActive){};

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.TweenMax.globalTimeScale = function(value){};

/**
 * @param {Object} target
 * @returns {boolean}
 */
com.greensock.TweenMax.isTweening = function(target){};

/**
 * @param {boolean=} complete
 * @param {boolean=} tweens
 * @param {boolean=} delayedCalls
 * @param {boolean=} timelines
 */
com.greensock.TweenMax.killAll = function(complete, tweens, delayedCalls, timelines){};

/**
 * @param {Object} parent
 * @param {boolean=} complete
 */
com.greensock.TweenMax.killChildTweensOf = function(parent, complete){};

/**
 * @param {Function} func
 */
com.greensock.TweenMax.killDelayedCallsTo = function(func){};

/**
 * @param {*} target
 * @param {Object=} vars
 */
com.greensock.TweenMax.killTweensOf = function(target, vars){};

/**
 * @param {Number} threshold
 * @param {Number} adjustedLag
 */
com.greensock.TweenMax.lagSmoothing = function(threshold, adjustedLag){};

/**
 * @param {boolean=} tweens
 * @param {boolean=} delayedCalls
 * @param {boolean=} timelines
 * @deprecated
 */
com.greensock.TweenMax.pauseAll = function(tweens, delayedCalls, timelines){};

/**
 * @param {boolean=} tweens
 * @param {boolean=} delayedCalls
 * @param {boolean=} timelines
 * @deprecated
 */
com.greensock.TweenMax.resumeAll = function(tweens, delayedCalls, timelines){};

/**
 * @param {Object} target
 * @param {Object} vars
 * @returns {com.greensock.TweenMax}
 */
com.greensock.TweenMax.set = function(target, vars){};

/**
 * @param {Array} targets
 * @param {number} duration
 * @param {Object} vars
 * @param {number=} stagger
 * @param {Function=} onCompleteAll
 * @param {Array=} onCompleteAllParams
 * @param {*=} onCompleteAllScope
 * @returns {Array}
 */
com.greensock.TweenMax.staggerFrom = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope){};

/**
 * @param {Array} targets
 * @param {number} duration
 * @param {Object} fromVars
 * @param {Object} toVars
 * @param {number=} stagger
 * @param {Function=} onCompleteAll
 * @param {Array=} onCompleteAllParams
 * @param {*=} onCompleteAllScope
 * @returns {Array}
 */
com.greensock.TweenMax.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope){};

/**
 * @param {Array} targets
 * @param {number} duration
 * @param {Object} vars
 * @param {number=} stagger
 * @param {Function=} onCompleteAll
 * @param {Array=} onCompleteAllParams
 * @param {*=} onCompleteAllScope
 * @returns {Array}
 */
com.greensock.TweenMax.staggerTo = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope){};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 * @returns {com.greensock.TweenMax}
 */
com.greensock.TweenMax.to = function(target, duration, vars){};

/** SimpleTimeLine */

/**
 * @param {Object=} vars
 * @constructor
 * @extends {com.greensock.core.Animation}
 */
com.greensock.core.SimpleTimeline = function(vars){};

/**
 * @type {boolean}
 */
com.greensock.core.SimpleTimeline.prototype.autoRemoveChildren;

/**
 * @type {boolean}
 */
com.greensock.core.SimpleTimeline.prototype.smoothChildTiming;

/**
 * @param {*} child
 * @param {(number|string)=} position
 * @param {string=} align
 * @param {number=} stagger
 * @returns {com.greensock.core.SimpleTimeline}
 */
com.greensock.core.SimpleTimeline.prototype.add = function(child, position, align, stagger){};

/**
 * @param {number} time
 * @param {boolean=} suppressEvents
 * @param {boolean=} force
 */
com.greensock.core.SimpleTimeline.prototype.render = function(time, suppressEvents, force){};

/** TimelineLite */

/**
 * @param {Object=} vars
 * @constructor
 * @extends {com.greensock.core.SimpleTimeline}
 */
com.greensock.TimelineLite = function(vars){};

/**
 * @param {string} label
 * @param {string|number} position
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.addLabel = function(label, position){};

/**
 * @param {(string|number)=} position
 * @param {Function=} callback
 * @param {Array=} params
 * @param {*=} scope
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.addPause = function(position, callback, params, scope){};

/**
 * @param {Function} callback
 * @param {Array=} params
 * @param {*=} scope
 * @param {(string|number)=} position
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.call = function(callback, params, scope, position){};

/**
 * @param {boolean=} labels
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.clear = function(labels){};

com.greensock.TimelineLite.prototype.stop = function(){};

/**
 * @param {Object|Array.<Object>} target
 * @param {number} duration
 * @param {Object} vars
 * @param {(string|number)=} position
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.from = function(target, duration, vars, position){};

/**
 * @param {Object|Array.<Object>} target
 * @param {number} duration
 * @param {Object} fromVars
 * @param {Object} toVars
 * @param {(string|number)=} position
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.fromTo = function(target, duration, fromVars, toVars, position){};

/**
 * @param {boolean=} nested
 * @param {boolean=} tweens
 * @param {boolean=} timelines
 * @param {number=} ignoreBeforeTime
 * @returns {Array}
 */
com.greensock.TimelineLite.prototype.getChildren = function(nested, tweens, timelines, ignoreBeforeTime){};

/**
 * @param {string} label
 * @return {number}
 */
com.greensock.TimelineLite.prototype.getLabelTime = function(label){};

/**
 * @param {Object} target
 * @param {boolean=} nested
 * @returns {Array}
 */
com.greensock.TimelineLite.prototype.getTweensOf = function(target, nested){};

/**
 * @returns {com.greensock.core.Animation}
 */
com.greensock.TimelineLite.prototype.recent = function(){};

/**
 * @param {*} value
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.remove = function(value){};

/**
 * @param {string} label
 * @returns {*}
 */
com.greensock.TimelineLite.prototype.removeLabel = function(label){};

/**
 * @param {Object} target
 * @param {Object} vars
 * @param {(string|number)=} position
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.set = function(target, vars, position){};

/**
 * @param {number} amount
 * @param {boolean=} adjustLabels
 * @param {number=} ignoreBeforeTime
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.shiftChildren = function(amount, adjustLabels, ignoreBeforeTime){};

/**
 * @param {Array} targets
 * @param {number} duration
 * @param {Object} vars
 * @param {number=} stagger
 * @param {(string|number)=} position
 * @param {Function=} onCompleteAll
 * @param {Array=} onCompleteAllParams
 * @param {*=} onCompleteScope
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.staggerFrom = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteScope){};

/**
 * @param {Array} targets
 * @param {number} duration
 * @param {Object} fromVars
 * @param {Object} toVars
 * @param {number=} stagger
 * @param {(string|number)=} position
 * @param {Function=} onCompleteAll
 * @param {Array=} onCompleteAllParams
 * @param {*=} onCompleteScope
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteScope){};

/**
 * @param {Array} targets
 * @param {number} duration
 * @param {Object} vars
 * @param {number=} stagger
 * @param {(string|number)=} position
 * @param {Function=} onCompleteAll
 * @param {Array=} onCompleteAllParams
 * @param {*=} onCompleteScope
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.staggerTo = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteScope){};

/**
 * @param {Object|Array.<Object>} target
 * @param {number} duration
 * @param {Object} vars
 * @param {(string|number)=} position
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.prototype.to = function(target, duration, vars, position){};

/**
 * @returns {boolean}
 */
com.greensock.TimelineLite.prototype.useFrames = function(){};

/**
 * @param {Object=} vars
 * @param {boolean=} omitDelayedCalls
 * @returns {com.greensock.TimelineLite}
 */
com.greensock.TimelineLite.exportRoot = function(vars, omitDelayedCalls){};

/** TimelineMax */

/**
 * @param {Object=} vars
 * @constructor
 * @extends {com.greensock.TimelineLite}
 */
com.greensock.TimelineMax = function(vars){};

/**
 * @param {Function} callback
 * @param {string|number} position
 * @param {Array=} params
 * @param {*=} scope
 */
com.greensock.TimelineMax.prototype.addCallback = function(callback, position, params, scope){};

/**
 * @param {string=} value
 * @returns {string}
 */
com.greensock.TimelineMax.prototype.currentLabel = function(value){};

/**
 * @param {boolean=} nested
 * @param {boolean=} tweens
 * @param {boolean=} timelines
 * @returns {Array}
 */
com.greensock.TimelineMax.prototype.getActive = function(nested, tweens, timelines){};

/**
 * @param {number=} time
 * @returns {string}
 */
com.greensock.TimelineMax.prototype.getLabelAfter = function(time){};

/**
 * @param {number=} time
 * @returns {string}
 */
com.greensock.TimelineMax.prototype.getLabelBefore = function(time){};

/**
 * @returns {Array}
 */
com.greensock.TimelineMax.prototype.getLabelsArray = function(){};

/**
 * @param {Function} callback
 * @param {(string|number)=} timeOrLabel
 * @returns {com.greensock.TimelineMax}
 */
com.greensock.TimelineMax.prototype.removeCallback = function(callback, timeOrLabel){};

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.TimelineMax.prototype.repeat = function(value){};

/**
 * @param {number=} value
 * @returns {number}
 */
com.greensock.TimelineMax.prototype.repeatDelay = function(value){};

/**
 * @param {(string|number)=} fromPosition
 * @param {(string|number)=} toPosition
 * @param {Object=} vars
 * @returns {com.greensock.TweenLite}
 */
com.greensock.TimelineMax.prototype.tweenFromTo = function(fromPosition, toPosition, vars){};

/**
 * @param {string|number} position
 * @param {Object=} vars
 * @returns {com.greensock.TweenLite}
 */
com.greensock.TimelineMax.prototype.tweenTo = function(position, vars){};

/**
 * @param {boolean=} value
 * @returns {boolean}
 */
com.greensock.TimelineMax.prototype.yoyo = function(value){};

/**
 * @param {Object=} vars
 * @param {boolean=} omitDelayedCalls
 * @returns {com.greensock.TimelineMax}
 */
com.greensock.TimelineMax.exportRoot = function(vars, omitDelayedCalls){};

/** VelocityTracker */

/**
 * @constructor
 */
com.greensock.utils.VelocityTracker = function(){};

/**
 * @type {Object}
 */
com.greensock.utils.VelocityTracker.prototype.target;

/**
 * @param {string} prop
 * @param {string=} type
 */
com.greensock.utils.VelocityTracker.prototype.addProp = function(prop, type){};

/**
 * @param {string} prop
 * @returns {number}
 */
com.greensock.utils.VelocityTracker.prototype.getVelocity = function(prop){};

/**
 * @param {string} prop
 * @returns {boolean}
 */
com.greensock.utils.VelocityTracker.prototype.isTrackingProp = function(prop){};

/**
 * @param {string} prop
 */
com.greensock.utils.VelocityTracker.prototype.removeProp = function(prop){};

/**
 * @param {Object} target
 * @returns {com.greensock.utils.VelocityTracker}
 */
com.greensock.utils.VelocityTracker.getByTarget = function(target){};

/**
 * @param {Object} target
 * @param {string=} prop
 * @returns {boolean}
 */
com.greensock.utils.VelocityTracker.isTracking = function(target, prop){};

/**
 * @param {Object} target
 * @param {string=} props
 * @param {string=} type
 * @returns {com.greensock.utils.VelocityTracker}
 */
com.greensock.utils.VelocityTracker.track = function(target, props, type){};

/**
 * @param {Object} target
 * @param {string=} props
 */
com.greensock.utils.VelocityTracker.untrack = function(target, props){};

/** SplitText */

/**
 * @param {*} target
 * @param {Object=} vars
 * @constructor
 */
com.greensock.utils.SplitText = function(target, vars){};

/**
 * @type {Array<Element>}
 */
com.greensock.utils.SplitText.prototype.chars;

/**
 * @type {Array<Element>}
 */
com.greensock.utils.SplitText.prototype.lines;

/**
 * @type {Array<Element>}
 */
com.greensock.utils.SplitText.prototype.words;

com.greensock.utils.SplitText.prototype.revert = function(){};

/**
 * @type {*}
 */
com.greensock.utils.SplitText.selector;

/**
 * @param {Object=} vars
 */
com.greensock.utils.SplitText.split = function(vars){};
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
