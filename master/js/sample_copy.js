$(function(){
  $("h1").css('color','red');
});

	function getJSON() {
	i=0;
	var arr1;
	var num2;
	var req = new XMLHttpRequest();// XMLHttpRequest オブジェクトを生成する
		req.onreadystatechange = function() {  // XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
		if(req.readyState == 4 && req.status == 200){ // サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合

			var tmp = req.responseText;
			arr1 = JSON.parse(tmp)
			num2 = JSON.stringify(arr1)
		}
	};
	req.open("GET", "https://raw.githubusercontent.com/jigjp/intern_exam/master/fukui_event.json", false);
	req.send(null);    // 実際にサーバーへリクエストを送信


    var EventData = arr1;
/*		[
        {id:1, name:"Billy Bob", age:"12", gender:"male", height:1, col:"red", dob:"", cheese:1},
        {id:2, name:"Mary May", age:"1", gender:"female", height:2, col:"blue", dob:"14/05/1982", cheese:true},
    ]
*/

    var dataTable = new Tabulator("#example-table", {
//				data:tableData,
				data:EventData,
        layout:"fitColumns",
				pagination:"local",
  		  paginationSize:10,
  		  paginationSizeSelector:[10, 20, 30, 200],
        columns:[
            {title:"イベント名", field:"event_name", headerFilter:"input"},
            {title:"説明文", field:"description", headerFilter:"input"},
            {title:"備考", field:"remarks", headerFilter:"input"},
            {title:"カテゴリ", field:"category", headerFilter:"input"},
            {title:"開始日", field:"start_date", sorter:"date",sorterParams:{format:"YYYY/MM/DD"}},
            {title:"終了日", field:"end_date", sorter:"date",sorterParams:{format:"YYYY/MM/DD"}},
            {title:"問い合わせ先", field:"contact", headerFilter:"input"},
						{title:"連絡先", field:"contact_phone_number", headerFilter:"input"},
						{title:"会場", field:"event_place", headerFilter:"input"},
						{title:"会場HP", field:"event_place_url", formatter:"link", headerFilter:"input"},
						{title:"会場住所", field:"address", headerFilter:"input"},
						{title:"メールアドレス", field:"mail_address", visible:"false"},
						{title:"アクセス", field:"transportation", headerFilter:"input"},
        ],
    })
	}