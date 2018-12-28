

// - - 検定のページに関する関数 - - 


// 漢字・読み・条件の取得
function Get_data(main_q, genre, i) {
    let kanji = DATA[main_q][genre][i][0];
    let yomi = DATA[main_q][genre][i][1];

    // 別表記がある場合はランダムで決定
    if (kanji.split(":").length >= 2) {
        const n = Math.floor(Math.random() * kanji.split(":").length);
        kanji = kanji.split(":")[n];

        if (yomi.split(":").length >= 2) {
            yomi = yomi.split(":")[n];
        }
    }

    // 「漢字」と「条件」を別々に取得
    let condition = "";
    if (kanji.split("(").length === 2) {
        condition = kanji.split("(")[1].split(")")[0]; // 括弧の中身を取り出す
        kanji = kanji.split("(")[0]; // 漢字のみ
    }
    
    return [kanji, yomi, condition];
}

// 漢検の登録リスト(cookie)からの格納
function Data_set() {
	IS_ALL_LIST_NULL = true;
	ALL_LIST_NUM = 0; // 総登録数
	ALL_ASKED_NUM = 0; // 総出題数

	for (let genre = 0; genre < GENRE[0].length; genre++) {
        for (let level = 0; level < LEVEL.length; level++) {
        
        	const cookie = COOKIE + '_' + GENRE_EN[genre] + '_'+LEVEL_EN[level];
        	
        	// LIST格納
        	const list = Get_cookie(cookie + '_list');
    		LIST[genre][level] = list;
    		
        	// LIST_NUM ALL_LIST_NUM格納
            if (list !== null) {
            	const num = list.split(",").length;
            	LIST_NUM[genre][level] = num;
            	ALL_LIST_NUM += num;
				IS_ALL_LIST_NULL = false;
			}

			if (!DATA[genre][level]) continue;
			
			// DATA_CLEAR格納
			const clear = Number(Get_cookie(cookie + '_clear'));
			KANJI_CLEAR[genre][level] = clear;
			
			// KANJI_ASKED格納
			const asked = Number(Get_cookie(cookie + '_asked'));
			KANJI_ASKED[genre][level] = asked;
			ALL_ASKED_NUM += asked;
    	}
    }
}

// 問題一覧を表示
function Show_ichiran() {

	// 記録テーブル構成
	let is_undef = false;
    let str = "";
	for (let genre = 0; genre < GENRE[0].length; genre++) {
        for (let level = 0; level < LEVEL.length; level++) {
        	
        	if (typeof(DATA[genre][level]) === "undefined") continue;
        	
        	// 復習リスト
			let list_array;
            if (LIST[genre][level] !== null) {
	            list_array = LIST[genre][level].split(",");
	        }

        	str +=  '<h3>＜'+ GENRE[0][genre] +' レベル'+ (level + 1) +'＞</h3>';

		    str +=  '<table class="ichiran_table" border="1">' +
					'	<tr class="legend">' +
					'		<th>漢字</th>' +
					'		<th>読み</th>' +
					'		<th>備考</th>' +
					'	</tr>' +
					'</table>';
        	for (let i = 0; i < DATA[genre][level].length; i++) {

				// 漢字・読み・条件を取得
				const data = Get_data(genre, level, i);
				const kanji = data[0], yomi = data[1].replace(/,/g, "<br>");
				let condition;
				if (data[2] !== "") {
					condition = data[2];
				} else {
					condition = "- -";
				}
				let url = "https://www.google.co.jp/search?q="+ kanji + "+" + yomi.split("<br>")[0];

				const kanji_array = data[0].match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
				let kanji_html = "";
				
				for (let j = 0; kanji_array[j]; j++) {
					let kanji_url = 'http://www.kanjipedia.jp/search?k=' + kanji_array[j] + '&kt=1&sk=leftHand';
					kanji_html += '<a class="a_kanji_pedia" href="' + kanji_url + '" target="_blank">' + Add_uni_tag(kanji_array[j]) + '</a>';
				}

				let html_checked = "";
				let add_class = "";
				if (typeof(list_array) !== "undefined" && list_array.indexOf(String(i)) >= 0) {
					html_checked = 'checked="checked"';
				} else {
					add_class = "no_check";
				}

			    str +=  '<table id="g'+genre+'l'+level+'q'+i+'" class="ichiran_table '+add_class+'" border="1">' +
						'	<tr class="ichiran">' +
						'		<th><input type="checkbox" class="checkbox_of_ichiran" name="g'+genre+'l'+level+'q'+i+'" '+ html_checked +' onClick="Check_box(this);"></th>'+
						'		<th><div class="link_kanji_pedia">' + kanji_html + '</div></th>' +
						'		<th>' + yomi + '</th>' +
						'		<th>' + condition + '</th>' +
			            '		<td>' +
			        	'			<div class="center mini_panel kensaku_panel">' +
			        	'				<a href="' + url + '" target="_blank"><p>検索</p></a>' +
			        	'			</div>' +
			            '		</td>' +
						'	</tr>' +
						'</table>';
			}
		}
    }
    $('#ichiran_table_here').html(str);
}

function Check_box(elem) {
	let name_string = elem.name;
	const genre_of_list = Number(name_string[1]);
	const level_of_list = Number(name_string[3]);
	const q_of_list = Number(name_string.slice(5));

	const cookie = COOKIE + '_' + GENRE_EN[genre_of_list] + '_' + LEVEL_EN[level_of_list] + '_list';
	
	if (elem.checked) {
		Add_to_list(q_of_list, cookie);
		
		// クリア数をcookieに記録
        kanji_clear = Number(Get_cookie(cookie + '_clear'));
        Write_cookie(kanji_clear - 1, cookie + '_clear');
        
	} else {
		
		Remove_from_list(q_of_list, cookie);

		// クリア数をcookieに記録
        kanji_clear = Number(Get_cookie(cookie + '_clear'));
        Write_cookie(kanji_clear + 1, cookie + '_clear');
	}
	
    let elem_table = document.getElementById('g'+genre_of_list+'l'+level_of_list+'q'+q_of_list);
	    elem_table.classList.toggle('no_check').toggle('checked');
}

// 復習リストに追加
function Add_to_list(add_index, cookie) {
	let list = Get_cookie(cookie);
	
	if (list) {
		list += ",";
	} else {
		list = "";
	}
    list += String(add_index);
    
    Write_cookie(list, cookie);
}

// 復習リストからの削除
function Remove_from_list(remove_index, cookie) {
		let list = Get_cookie(cookie);
		let array_list = list.split(","); 

		// 最後の1個ならnullを格納(＝空にする)
	    if (array_list.length === 1) {
	    	Write_cookie(null, cookie);
	    	return;
	    }

		array_list.some(function(v, i){
		    if (v==remove_index) array_list.splice(i,1);
		});

		const str = array_list.join(',');

	    Write_cookie(str, cookie);
}
