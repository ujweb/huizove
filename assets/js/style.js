$("button.quantity-minus").on("click", function (e) {
	e.preventDefault();
	var $this = $(this);
	var $input = $this.closest("div").find("input");
	var value = parseInt($input.val());
	if (value > 2) {
		value = value - 1;
	} else {
		value = 1;
	}
	$input.val(value);
	document.getElementById('qty').value = document.getElementById('product_quantity').value;
	document.getElementById('qty2').value = document.getElementById('product_quantity').value;
});
$("button.quantity-plus").on("click", function (e) {
	e.preventDefault();
	var $this = $(this);
	var $input = $this.closest("div").find("input");
	var value = parseInt($input.val());
	if (value < 100) {
		value = value + 1;
	} else {
		value = 100;
	}
	$input.val(value);
	document.getElementById('qty').value = document.getElementById('product_quantity').value;
	document.getElementById('qty2').value = document.getElementById('product_quantity').value;
});

function y2bResize() {
	$(".product-body iframe[src*='youtube']").each(function() {
		var bodyWidth = $('.product-body').width();
		$(this).attr('height', bodyWidth * 0.5625);
	})
}
y2bResize();

$('.navbar-toggler, nav.sidebar .btn-close').on('click', function(){
	$('body').toggleClass('opened');
	$('nav.sidebar, .black').toggleClass('opened');
	$('nav.navcart').slideUp();
});

$('.d-md-none .cart').on('click', function(){
	$('body').toggleClass('opened');
	$('nav.navcart').slideToggle();
});

$('.black').on('click', function(){
	$('body, nav.sidebar, .black').removeClass('opened');
});

$('nav.sidebar ul.menu > li > a > button').on('click', function(e){
	$(this).toggleClass('icon-angle-down icon-angle-up');
	$(this).parent('a').siblings('ul').slideToggle();
	return false;
});

$('.modal, button.btn-close').on('click', function(){
	$('body').removeClass('modal-open');
	$('.modal').fadeOut();
});

$('.modal-content').on('click', function(e){
	e.stopPropagation();
});

$('#login, #login2').on('click', function(){
	$('body').addClass('modal-open');
	$('#signin').fadeIn();
	$('nav.navcart').slideUp();
	$('nav.sidebar').removeClass('opened');
});

$('#tracking-btn, #tracking-btn2').on('click', function(){
	$('body').addClass('modal-open');
	$('#tracking').fadeIn();
	$('nav.navcart').slideUp();
	$('nav.sidebar').removeClass('opened');
});

$('#find-order').on('click', function(){
	$('body').addClass('modal-open');
	$('#tracking').fadeOut();
	$('#order').fadeIn();
});

$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: false,
	centerMode: false,
	focusOnSelect: false,
	prevArrow:"<button type='button' class='slick-prev'><i class='icon icon-angle-left'></i></button>",
	nextArrow:"<button type='button' class='slick-next'><i class='icon icon-angle-right'></i></button>"
});

$(window).resize(function(){
	y2bResize();
});
$(window).scroll(function(){
	var scroll = $(this).scrollTop(),
		height = $(this).height();
	if ( scroll > ( height / 3 ) ) {
		$('.fixed-fuction, .fixed-cart').fadeIn();
	} else {
		$('.fixed-fuction, .fixed-cart').fadeOut();
	}
});
