$(function() {

	const items = $('.questions .questions__item .questions__content');
	const modal = $('.modal');

	items.hide();

	$('.questions__head').on('click', e => {
		const item = $(e.target).closest('.questions__item');
		item.find('.questions__content').slideToggle();
		item.toggleClass('questions__item_active');
	});

	$('.show-modal').on('click', e => {
		modal.toggleClass('modal_shown');
	});

	modal.find('.modal__bg').on('click', () => {
		modal.toggleClass('modal_shown');
	});

	$('.to-services').on('click', () => {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#services").offset().top
		}, 500);
	});

	$('.to-questions').on('click', () => {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#questions").offset().top
		}, 500);
	});

	$('.to-price').on('click', () => {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#price").offset().top
		}, 500);
	});

	$('#info-form').on('submit', e => {
		e.preventDefault();

		const form = $(e.target);
		const name = form.find('input[name=name]').val();
		const phone = form.find('input[name=phone]').val();

		$.post('/mail.php', { name, phone });
	});

	$('#order-form').on('submit', e => {
		e.preventDefault();

		const form = $(e.target);
		const service = form.find('select').val();
		const name = form.find('input[name=name]').val();
		const phone = form.find('input[name=phone]').val();

		$.post('/mail.php', { name, phone, service });
	});
});

