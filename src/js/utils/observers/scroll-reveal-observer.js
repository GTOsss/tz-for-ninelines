import BaseObserver from './base-observer';

function ScrollRevealObserver($window) {
	BaseObserver.apply(this);
	this.$window = $window;

	$window.scroll(this.callHandlers.bind(this));
}

ScrollRevealObserver.prototype = Object.create(BaseObserver.prototype);
ScrollRevealObserver.constructor = ScrollRevealObserver;

/**
 * Создает функцию для проверки достигнул ли элемент при скроле.
 * @param offset Расстояние до элемента перед срабатыванием callback.
 * @param $element Элемент за которым нужно следить.
 * @param callback Срабатывает при достижении скрола.
 * @return function Проверяет достигнут ли объект при текущем скроле и вызывает callback.
 */
function createCheckOffset(offset, $element, callback) {
	function check() {
		let triggerOffset = this.$window.scrollTop() + this.$window.height() - offset;
		let elementOffset = $element.offset().top;

		if (elementOffset < triggerOffset) {
			callback();
		}
	}

	return check.bind(this);
}

/**
 * Добавляет подписку на достижение элемента при скроле.
 * @param offset Расстояние до элемента перед срабатыванием handler.
 * @param $element Элемент за которым нужно следить.
 * @param handler Срабатывает при достижении скрола.
 */
function subscribe(offset, $element, handler) {
	if (typeof handler === 'function') {
		this.listeners.push(this.createCheckOffset(offset, $element, handler));
	}
}

ScrollRevealObserver.prototype.createCheckOffset = createCheckOffset;
ScrollRevealObserver.prototype.subscribe = subscribe;

export default ScrollRevealObserver;
