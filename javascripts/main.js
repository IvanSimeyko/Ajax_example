console.log('This would be the main JS file.');


var headUrl = 'http://ivansimeyko.github.io/Ajax_example/';
var htmlList = ['simple_1.html' ,'simple_2.html'];

var ajaxResult = 0;
var $divLeft = $('<div>');
$divLeft.css({
	position: 'absolute',
	width: '500px',
	height: '500px',
	left: '-500px',
	border: '1px solid red'
});
var $divRight = $('<div>');
$divRight.css({
	position: 'absolute',
	width: '500px',
	height: '500px',
	right: '-500px',
	border: '1px solid red'
});
$.ajax({
	url: headUrl + htmlList[0],
	success: function(data) {
		$divLeft.html(data);
		$(document.body).append($divLeft);

		animateDivs();
	},
	error: function(data) {
	  console.error(data);
	}
});

$.ajax({
	url: headUrl + htmlList[1],
	success: function(data) {

		$divRight.html(data);
		$(document.body).append($divRight);

		animateDivs();
	},
	error: function(data) {
	  console.error(data);
	}
});

function animateDivs() {
	ajaxResult++;
	if (ajaxResult === 2) {
		$divLeft.animate({left: 0}, 1500);
		$divRight.animate({right: 0}, 1500);
	}
}


var someDeffered = $.ajax(headUrl + htmlList[0]);

someDeffered.then(function(result){
    console.log('loadhtmlList[0]');
    console.log(JSON.stringify(result));

    $('#html_1').append(result);
	    return $.ajax(headUrl + htmlList[1])

	}).then(function(result){
        console.log('loadhtmlList[1]');
	    console.log(JSON.stringify(result));

        $('#html_2').append(result);
	    //return $('#html_cycle').cycle({ fx: 'scrollLeft', speed: 1000, timeout: 2000 });
    });


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

/*
function loadHtmlFiles() {

    $(htmlList).each(function(index, element){
        $.ajax({
            url: headUrl + element,
            success: function(data) {
                //$('.wrapper').append(data);
                console.log('load ', element);
                $(document.body).append(data);
             },
        error: function(data) {
          console.error(data);
        }
        });
    })
}

loadHtmlFiles();

//adding reading json files
var jsonList = ['some_1.json', 'some_2.json', 'some_3.json'];

function loadJSONFiles(element) {
    $(jsonList).each(function(index, element){
        $.ajax({
		dataType: 'json',
		method: 'GET',
		url: headUrl + element,
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
    })
}

loadJSONFiles();

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
imgArray.forEach(loadImages);*/
