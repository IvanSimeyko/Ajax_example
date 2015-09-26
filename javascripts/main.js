console.log('This would be the main JS file.');



var headUrl = 'http://ivansimeyko.github.io/Ajax_example/';
var htmlList = ['simple_1.html' ,'simple_2.html', 'simple_3.html'];

function loadHtmlFiles(element) {
	$.ajax({
        //address of the request
		url: headUrl + element,
        /// if true
		success: function(data) {
			//$('.wrapper').append(data);
			$(document.body).append(data);
		},
		error: function(data) {
		  console.error(data);
		}
	});
}

htmlList.forEach( loadHtmlFiles );
