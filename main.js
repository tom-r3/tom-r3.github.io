function showContact() {
	var main = document.getElementById('main');
	var contact = document.getElementById('contact');
	main.style.display = 'none';
	contact.style.display = 'block';
}

function hideContact() {
	var x = document.getElementById('main');
	main.style.display = 'block';
	contact.style.display = 'none';
}
