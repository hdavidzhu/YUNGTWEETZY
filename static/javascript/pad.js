// The MIT License (MIT)

// Copyright (c) 2013 Yat Choi

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var textpad = document.getElementById("textpad");

var rhymeRequest = function(word) {
		$("#rhyming-word").html(word);
		$.ajax({
			url: "/rhyme?word=" + word,
			data: word,
			type: "GET",
			success: function(result) {
				$("#pad-output").html("");
				var obj = $.parseJSON(result);
				for (var i = 0; i < obj.length; i++) {
					var html = "<a class='rhymeword'>" + obj[i] + "</a>\&nbsp;\&nbsp;\t\t\t\t\t"
					$("#pad-output").append(html);
				}
				console.log("succss" + word);
			}
		})
	};

function getSelection() {
	var start = textpad.selectionStart;
	var end = textpad.selectionEnd;
	return textpad.value.substring(start,end);
}

var lastSelected;

$('#textpad').click(function(e) {
	lastSelected = getSelection();
});

$("#pad-rhyme-button").click(function() {
	rhymeRequest(lastSelected);
});

