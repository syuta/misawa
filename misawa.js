var req = new XMLHttpRequest();
req.open(
    "GET",
	"http://jigokuno.com/",
    true);
req.onreadystatechange = function() {
	var altSize = 5;
	var srcSize = 5;
	if (req.readyState == 4 && req.status == 200) {
		var html = req.responseText;
		//最新のentry_areaを取得
		var text1 = html.substring(html.indexOf('<div class="article-body-inner">'));
		var text2 = text1.substring(0,text1.indexOf('</a>'));

		//タイトル取り出し
		var titleStart = text2.substring(text2.indexOf('alt="') + altSize);
		var title = titleStart.substring(0,titleStart.indexOf('"'));
		var horesase_title = document.getElementById("horesase_title");
		horesase_title.innerHTML = "<font size=2>"+ title +"</font>";

		//画像URL取り出し
		var imageStart = text2.substring(text2.indexOf('src="') + srcSize);
		var imageUrl = imageStart.substring(0,imageStart.indexOf('"'));
		var horesase_image = document.getElementById("horesase_image");
		horesase_image.src = imageUrl;
		horesase_image.height = 320;
		horesase_image.width = 240;
	}
};


req.send(null);
