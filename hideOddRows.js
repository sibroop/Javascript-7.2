// JavaScript Document
var rows = document.querySelectorAll('tr:nth-child(odd)');
function myFunction(){
	for(var i = 0; i < rows.length; i++){
    rows[i].style.display = 'none';
}
}