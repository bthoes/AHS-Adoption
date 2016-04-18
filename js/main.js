var navButton = document.querySelector('.nav-icon');
navButton.addEventListener('click', function() {
	console.log('click');
	document.querySelector('body')
	.classList
	.toggle('sidebar-open');
});

var navButton = document.querySelector('.nav-close');
navButton.addEventListener('click', function() {
	console.log('close');
	document.querySelector('body')
	.classList
	.toggle('sidebar-open');
});