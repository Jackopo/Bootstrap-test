/*
	All the Javascript function called in the app

*/

$('.nav-list').affix({
	offset: {
		top: 0,
		bottom: 20
	}
});

$('[data-spy="scroll"]').each(function () {
	var $spy = $(this).scrollspy('refresh')
});

$('.tooltip-element').tooltip({selector: "a[data-toggle=tooltip]"});


/*
	.carousel('cycle')

	Cycles through the carousel items from left to right.
	.carousel('pause')

	Stops the carousel from cycling through items.
	.carousel(number)

	Cycles the carousel to a particular frame (0 based, similar to an array).
	.carousel('prev')

	Cycles to the previous item.
	.carousel('next')

	Cycles to the next item.
 */

$('#myCarousel').carousel('cycle');
