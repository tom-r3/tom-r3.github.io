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

function viewLinkedIn() {
	window.location.href = 'https://www.linkedin.com/in/tom-r3/';
}

function viewCourses() {
	window.location.href = 'resume.html#courses';
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
