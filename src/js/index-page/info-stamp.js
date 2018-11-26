import {TweenMax, Bounce} from 'gsap/TweenMax';

// параметры скрипта
const offsetReveal = 50; // отступ от печати в скроле при котором запускается анимация

export default ($window, resizeObserver, scrollRevealObserver) => {
	const $stamp = $('#infoStamp');

	const stampAnimation = () => {
		TweenMax.to($stamp, 0.5, {
			css: {
				opacity: 1,
				scale: '1',
			},
			ease: Bounce.easeOut,
			delay: 2,
		});
	};

	const checkOffset = scrollRevealObserver.createCheckOffset(offsetReveal, $stamp, stampAnimation);

	resizeObserver.subscribe(checkOffset);
	scrollRevealObserver.subscribe(offsetReveal, $stamp, stampAnimation);
	checkOffset();
};
