var alarm = document.getElementById('click');
	alarm.onclick = function creatingAlert(e){ 
	e.target.style.backgroundColor = 'lightgreen';
	alarm.onclick = creatingAlert;
	alert('Hello tutor! I Am Successful.');
}
