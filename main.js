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
	window.location.href = 'resume.html';
}

function viewResume() {
	window.location.href = 'resume.html#resume';
}

function downloadResume() {
	window.location.href = 'resume.pdf';
}

function showBusiness() {
	window.location.href = 'business.html';
}

function showProjects() {
	window.location.href = 'projects.html';
}

function goHome() {
	window.location.href = 'index.html';
}
