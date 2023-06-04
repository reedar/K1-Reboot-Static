import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';

const swiper = new Swiper(document.getElementById('testimonials-swiper'), {
	loop: true,
	modules: [Navigation, Pagination],
	slidesPerView: 3,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'bullets',
	},
});
