
// - - しりとりページに関する関数 - - 
		 
// 繰り返し処理の中身
function Show_passage() {
   game_time += 0.1;   // カウントアップ
   var msg = "試合時間： " + game_time.toFixed(1) + "秒";   // 表示文作成
   $("#time").html(msg);   // 表示更新
}
 
// 繰り返し処理の開始
function Start_time() {
   game_time = 0;
   PassageID = setInterval('Show_passage()',100);   // タイマーをセット(1000ms間隔)
}
 
// 繰り返し処理の中止
function Stop_time() {
   clearInterval( PassageID );   // タイマーのクリア
   game_time_list.push(game_time.toFixed(1));
}

// 文字列の最後の文字(ひらがな)をインデックス番号に変換
// String.fromCharCode(12354) -> "あ"
// 'あ'.charCodeAt(0) -> 12354
function Hira_to_num(correct_answer) {
	const len = correct_answer.length;
	
	correct_answer = Kana_to_hira(correct_answer);
	hira = correct_answer.slice(len - 1, len);
	
	let code = hira.charCodeAt(0);
	let num;

	if ('ぁ'.charCodeAt(0) <= code && code <= 'お'.charCodeAt(0)) {
		num = (code - 'ぁ'.charCodeAt(0) - 1) / 2;
	} else if ('か'.charCodeAt(0) <= code && code <= 'ど'.charCodeAt(0)) {	
		if ('っ'.charCodeAt(0) <= code) code--;
		num = 5 + (code - 'か'.charCodeAt(0)) / 2 + ((code + 1) % 2) * 38.5;
	} else if ('な'.charCodeAt(0) <= code && code <= 'の'.charCodeAt(0)) {
		num = 20 + code - 'な'.charCodeAt(0);
	} else if ('は'.charCodeAt(0) <= code && code <= 'ぽ'.charCodeAt(0)) {
		num = code - 'は'.charCodeAt(0);
		if (num % 3 === 0) {
			num = 25 + (num / 3);
		} else if (num % 3 === 1) {
			num = 59 + (num - 1) / 3;
		} else if (num % 3 === 2) {
			num = 64 + (num - 2) / 3;
		}
	} else if ('ま'.charCodeAt(0) <= code && code <= 'も'.charCodeAt(0)) {
		num = 30 + code - 'ま'.charCodeAt(0);
	} else if ('ゃ'.charCodeAt(0) <= code && code <= 'よ'.charCodeAt(0)) {
		num = 35 + Math.floor((code - 'ゃ'.charCodeAt(0)) / 2);
	} else if ('ら'.charCodeAt(0) <= code && code <= 'ろ'.charCodeAt(0)) {
		num = 38 + code - 'ら'.charCodeAt(0);
	} else if (hira === 'わ') {
		num = 43;
	} else if (hira === 'ー') {
		let hira2 = correct_answer.slice(len - 2, len - 1);
		let num2 = Hira_to_num(hira2);
		if (num2 <= 34) {
			return num2 % 5;
		} else if (35 <= num2 && num2 <= 37) {
			return (num2 % 5) * 2;
		} else if (38 <= num2 && num2 <= 42) {
			return (num2 + 2) % 5;
		} else if (num2 === 43) {
			return 0;
		} else if (44 <= num2 && num2 <= 68) {
			return (num2 + 1) % 5;
		}
	} else {
		num = -1;
	}
	
	return num;
}

// 単語の最後の文字(ひらがな)を返す
function Sirimoji(word) {
	let hira_siri = Kana_to_hira(word.slice(word.length - 1, word.length));
	
    // 「－」などのとき
    if (hira_siri === 'ゃ') {
        hira_siri = 'や';
    } else if (hira_siri === 'ゅ') {
        hira_siri = 'ゆ';
    } else if (hira_siri === 'ょ') {
        hira_siri = 'よ';
    } else if (hira_siri === 'ー') {
    	let num = Hira_to_num(word);
        if (num === 0) {
            hira_siri = 'あ';
        } else if (num === 1) {
            hira_siri = 'い';
        } else if (num === 2) {
            hira_siri = 'う';
        } else if (num === 3) {
            hira_siri = 'え';
        } else if (num === 4) {
            hira_siri = 'お';
        }
    }
    
    return hira_siri;
}

// 分岐ありならis_bunkiはtrue
function Bunki_hantei(answers) {
	
    if (answers.length < 2) {
    	return false;
	}
	
	let is_bunki = false;
	let hira_siri = new Array();
	
	for (let i = 0; i < answers.length; i++) {
		hira_siri[i] = Sirimoji(answers[i]);
	}
	
	for (let i = 0; i < answers.length - 1; i++) {
    	if (hira_siri[i] !== hira_siri[i+1]) {
        	is_bunki = true;
        	break;
        }
    }
    
    return is_bunki;
}

// 最も効果的なひらがなを求める
function Nice_hira(answers) {
	let min_stock = 999;
	let nice_hira;
	for (let i = 0; i < answers.length; i++) {
    	
    	const hira_siri = Sirimoji(answers[i]);
		const num = Hira_to_num(hira_siri);
		
		if (num < 0) continue;
		
		if (min_stock > DATA[num].length) {
			min_stock = DATA[num].length;
			nice_hira = hira_siri;
		}
	}
    
    return nice_hira;
}

// HPゲージの配色
function Coloring(your_HP, adv_HP) {

	if (your_HP === 3) {
	    $("#your_mass_1").css("background", "linear-gradient(#00FF00, #DDEE90)");
	    $("#your_mass_2").css("background", "linear-gradient(#00FF00, #DDEE90)");
	    $("#your_mass_3").css("background", "linear-gradient(#00FF00, #DDEE90)");
	} else if (your_HP === 2) {
	    $("#your_mass_1").css("background", "linear-gradient(#FFFF00, #FFFAAA)");
	    $("#your_mass_2").css("background", "linear-gradient(#FFFF00, #FFFAAA)");
	    $("#your_mass_3").css("background", "transparent");
	} else if (your_HP === 1) {
	    $("#your_mass_1").css("background", "linear-gradient(#FF0000, #FFA07A)");
	    $("#your_mass_2").css("background", "transparent");
	    $("#your_mass_3").css("background", "transparent");
	} else if (your_HP <= 0) {
	    $("#your_mass_1").css("background", "transparent");
	    $("#your_mass_2").css("background", "transparent");
	    $("#your_mass_3").css("background", "transparent");
	}

	if (adv_HP >= 21) {
	    $("#adv_mass_1").css("background", "linear-gradient(#00FF00, #99EE90)");
	    $("#adv_mass_2").css("background", "linear-gradient(#00FF00, #99EE90)");
	    $("#adv_mass_3").css("background", "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) " + (30 - adv_HP) * 10 + "%, #00FF00 " + (30 - adv_HP) * 10 + "%, #00FF00 100%)");
	} else if (adv_HP >= 11) {
	    $("#adv_mass_1").css("background", "linear-gradient(#FFFF00, #FFFA66)");
	    $("#adv_mass_2").css("background", "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) " + (20 - adv_HP) * 10 + "%, #FFFF00 " + (20 - adv_HP) * 10 + "%, #FFFF00 100%)");
	    $("#adv_mass_3").css("background", "transparent");
	} else if (adv_HP >= 1) {
	    $("#adv_mass_1").css("background", "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) " + (10 - adv_HP) * 10 + "%, #FF0000 " + (10 - adv_HP) * 10 + "%, #FF0000 100%)");
	    $("#adv_mass_2").css("background", "transparent");
	    $("#adv_mass_3").css("background", "transparent");
	} else if (adv_HP <= 0) {
	    $("#adv_mass_1").css("background", "transparent");
	    $("#adv_mass_2").css("background", "transparent");
	    $("#adv_mass_3").css("background", "transparent");
	}
}
