import BaseObserver from './base-observer';

function ResizeObserver($window) {
	BaseObserver.apply(this);
	let timerIdScroll;

	const onResize = (e) => {
		clearTimeout(timerIdScroll);
		timerIdScroll = setTimeout(() => {
			this.callHandlers(e);
		}, 300);
	};

	$window.resize(onResize);
}

ResizeObserver.prototype = Object.create(BaseObserver.prototype);
ResizeObserver.constructor = ResizeObserver;

export default ResizeObserver;
