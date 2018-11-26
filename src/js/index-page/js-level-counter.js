import {getRotationDegrees} from '../utils/dom-utils';
import {firstAnimateDuration, offsetReveal, delay} from './js-level-scale';

// параметры скрипта
const minValue = 0; // со скольки начинается рассчет
const maxValue = 999; // максимальное значение счетчика
const endValue = 650; // если указано - конечное значение после анимации стрелки

export default ($window, resizeObserver, scrollRevealObserver) => {
	const $counter = $('#jsLevelCount');
	const $arrow = $('#jsScaleArrow');
	let timerIdCounter;
	let timerIdStop;
	let isStopCounter = false;

	const stopCounter = () => {
		isStopCounter = true;
		if (typeof endValue !== 'undefined') {
			$counter.text(endValue);
		}
	};

	const counter = (value) => {
		if (!timerIdStop) {
			timerIdStop = setTimeout(stopCounter, firstAnimateDuration);
		}
		clearTimeout(timerIdCounter);
		if (!isStopCounter) {
			$counter.text(Math.round(getRotationDegrees($arrow) * (maxValue / 180)));
			setTimeout(() => counter(value + 1), 100);
		}
	};

	const startCounter = () => counter(minValue);

	const checkOffset = scrollRevealObserver.createCheckOffset(offsetReveal, $arrow, startCounter);

	resizeObserver.subscribe(checkOffset);
	scrollRevealObserver.subscribe(offsetReveal, $arrow, startCounter);
	setTimeout(checkOffset, delay);
};
