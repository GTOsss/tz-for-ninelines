// параметры скрипта
export const offsetReveal = 50; // отступ от стрелки в скроле при котором запускается анимация
export const firstAnimateDuration = 3300; // кол-во ms при первой анимации стрелки
export const delay = 4000; // задержка если элемент с самого начала в пределах видимости
const firstArrowGoal = 25; // куда полетит стрелка в первый раз (мин = -90 макс = 90)

export default ($window, resizeObserver, scrollRevealObserver) => {
	let timerIdFirstAnimate;
	let startAnimation = false;
	const $arrow = $('#jsScaleArrow');

	$arrow.css({transitionDuration: `${firstAnimateDuration}ms`});

	const animation = () => {
		if (!startAnimation) {
			startAnimation = true;
			$arrow.css({transform: `rotateZ(${firstArrowGoal}deg)`});
			clearTimeout(timerIdFirstAnimate);
			timerIdFirstAnimate = setTimeout(() => {
				$arrow.css({animationName: 'wobble'});
			}, firstAnimateDuration);
		}
	};

	const checkOffset = scrollRevealObserver.createCheckOffset(offsetReveal, $arrow, animation);

	resizeObserver.subscribe(checkOffset);
	scrollRevealObserver.subscribe(offsetReveal, $arrow, animation);
	setTimeout(checkOffset, delay);
};
