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

var jsonList = ['some_1.json', 'some_2.json', 'some_3.json'];

function loadJSONFiles(element) {
	$.ajax({
		dataType: 'json',
		method: 'GET',
		url: headUrl + element,
		success: function(data) {
			var wrapDiv = $('<div>');
			wrapDiv.html('<h2>' + data.title + '</h2><p>' + data.desc + '</p>');
			//$('section').append(wrapDiv);
		},
		error: function(data) {
		  console.error(data);
		}
	});
}
jsonList.forEach( loadJSONFiles );
