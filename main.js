function showContact() {
	var main = document.getElementById('main');
	var contact = document.getElementById('contact');
	main.style.display = 'none';
	contact.style.display = 'block';
}

function hideContact() {
	var main = document.getElementById('main');
	var contact = document.getElementById('contact');
	main.style.display = 'block';
	contact.style.display = 'none';
}

function showResume() {
	window.location.href = 'resume.pdf';
}
