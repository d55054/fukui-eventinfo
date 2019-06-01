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
	}

    var tableData = 
/*		[
        {id:1, name:"Billy Bob", age:"12", gender:"male", height:1, col:"red", dob:"", cheese:1},
        {id:2, name:"Mary May", age:"1", gender:"female", height:2, col:"blue", dob:"14/05/1982", cheese:true},
    ]
*/
    var dataTable = new Tabulator("#example-table", {
//				data:tableData,
				data:EventData,
        layout:"fitColumns",
        columns:[
            {title:"Name", field:"event_name"},
            {title:"Age", field:"age"},
            {title:"Gender", field:"gender"},
            {title:"Height", field:"height"},
            {title:"Favourite Color", field:"col"},
            {title:"Date Of Birth", field:"dob"},
            {title:"Cheese Preference", field:"cheese"},
        ],
    })