import {ResizeObserver, ScrollRevealObserver} from '../utils/observers/index';
import jsLevelScale from './js-level-scale';
import jsLevelCounter from './js-level-counter';
import infoInputs from './info-inputs';
import infoStamp from './info-stamp';
import skills from './skills';

$(document).ready(() => {
	const $window = $(window);
	const resizeObserver = new ResizeObserver($window);
	const scrollRevealObserver = new ScrollRevealObserver($window);

	infoInputs($window, resizeObserver, scrollRevealObserver);
	infoStamp($window, resizeObserver, scrollRevealObserver);
	jsLevelScale($window, resizeObserver, scrollRevealObserver);
	jsLevelCounter($window, resizeObserver, scrollRevealObserver);
	skills($window, resizeObserver, scrollRevealObserver);
});
