console.log('This would be the main JS file.');


var headUrl = 'http://ivansimeyko.github.io/Ajax_example/';
var htmlList = ['simple_1.html' ,'simple_2.html', 'simple_3.html'];

/*function loadHtmlFiles(element) {
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

htmlList.forEach( loadHtmlFiles );*/

function loadFirstPart() {

    $(htmlList).each(function(index, element){
        console.log('load ', element);
        $.ajax({
            url: headUrl + this.element(),
            success: function(data) {
                console.log('load ', element);
                //$('.wrapper').append(data);
                $(document.body).append(element);

             },
        error: function(data) {
          console.error(data);
        }
        });
    })
}

loadFirstPart();

//adding reading json files
var jsonList = ['some_1.json', 'some_2.json', 'some_3.json'];

function loadJSONFiles(element) {
	$.ajax({
		dataType: 'json',
		method: 'GET',
		url: headUrl + element,    // here did not understand
		success: function(data) {
            console.log('load JSON Files')
			var wrapDiv = $('<div>');
			wrapDiv.html('<h2>' + data.title + '</h2><p>' + data.desc + '</p>');
			$('#designer-templates').append(wrapDiv);
		},
		error: function(data) {
		  console.error(data);
		}
	});
}
jsonList.forEach( loadJSONFiles );

//adding reading image
var loadedImageCount = 0;
var imgArray = ['dhango_applications_tw.jpg', 'fund_epur.jpg', 'JavaScriptArray.jpg'];

function checkLoadedImages() {
    loadedImageCount++;
    if (loadedImageCount == imgArray.length) {
        console.log('make a slide show');
        $('#img').cycle({ fx: 'scrollLeft', speed: 1000, timeout: 2000 });
    }
}

function loadImages(element) {
    var img = new Image();
    img.src = element;
    img.onload = function () {
    $('#img').append(img);
        checkLoadedImages();
    };
}
imgArray.forEach(loadImages);