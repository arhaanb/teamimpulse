function duoBtn1() {
	document.getElementById('day-two').classList.add("crip");
	document.getElementById('day-two').classList.remove("selected");
	document.getElementById('day-one').classList.add("selected");
	document.getElementById('day-one').classList.remove("crip");
	document.getElementById('rulescontent').classList.add("don1");
	document.getElementById('rulescontent').classList.remove("don2");
	document.getElementById('examplecontent').classList.remove("don1");
	document.getElementById('examplecontent').classList.add("don2");
}

function duoBtn2() {
	document.getElementById('day-one').classList.add("crip");
	document.getElementById('day-one').classList.remove("selected");
	document.getElementById('day-two').classList.add("selected");
	document.getElementById('day-two').classList.remove("crip");
	document.getElementById('rulescontent').classList.remove("don1");
	document.getElementById('rulescontent').classList.add("don2");
	document.getElementById('examplecontent').classList.add("don1");
	document.getElementById('examplecontent').classList.remove("don2");
}