

// - - 検定のページに関する関数 - - 


// 試験・実況スタイルのフィールド構成
function Make_play_style_field() {
	
	const play_style = ["test", "live"];
	const play_style_text = ["試験スタイル", "実況スタイル"];
	
    for (let i = 0; i < play_style.length; i++) {
    	let html = 	'<article id="'+ play_style[i] +'_panel" class="panel play_style_panel">' +
		            '	<a name="' + play_style[i] + '" onclick="Get_play_style(this);">' +
		            '		<p>'+　play_style_text[i]　+'</p>'+
		            '	</a>'+
		            '</article>';

		$("#play_style_panels").append(html);
	}
}

// ジャンルフィールド構成
function Make_genre_field() {
	
    if (typeof(GENRE_FIELD_HEIGHT) !== "undefined") {
        $('#genre_field').css("height", GENRE_FIELD_HEIGHT);
    }

	const GENRE_LENGTH = GENRE[0].length;
	
	// cssのためのクラス属性追加
	
	let class_name = '_genre_length_'+ GENRE_LENGTH;
	
	if (typeof(CLASS) !== "undefined") {
		class_name = 'class' + class_name;
	} else if (typeof(KANKEN) !== "undefined") {
		class_name = 'kanken' + class_name;
	}
	
	$('#genre_panels').addClass(class_name);
	
    for (let i = 0; i < GENRE_LENGTH; i++) {
    	let html;	
		if (typeof(CLASS) !== "undefined") {
			
			html =  '<article class="panel genre_panel" name="'+ GENRE[0][i] +'">' +
					'	<a name="' + i + '" onclick="Get_genre(this);">'+
					'		<p class="text_on_class_genre">'+ GENRE[0][i] +'</p>'+
					'	</a>'+
					'</article>';
			
		} else if (typeof(KANKEN) !== "undefined") {
			
		    html =  '<article class="panel genre_panel" name="'+ GENRE[0][i] +'">'+
		            '	<a name="' + i + '" onclick="Get_genre(this);">'+
		            '		<div id="medal_'+ GENRE_EN[i] +'"></div>'+
				    '   	<p class="text_on_kanken_genre">'+ GENRE[0][i] +'</p>'+
				    '   	<p id="cookie_'+ GENRE_EN[i] +'" class="cookie_text_on_genre"></p>'+
				    '   	<p id="'+ GENRE_EN[i] +'_nokori" class="nokori_text_on_genre"></p>'+
		            '	</a>'+
		            '</article>';
		}
		
		$("#genre_panels").append(html);
	}
}

// 試験・とことんページへの切り替え
function Go_to_test_page() {
	
	// - - 難読検定モード - -
	
	if (typeof CLASS !== "undefined") {
        $('#genre_field').fadeOut('normal', function() {
            $('.genre_panel').hide();
            $('#test_field').fadeIn();
            if (typeof(GENRE[0]) !== "undefined") {
        		$('.zoom_up').css('position', 'relative');
        	}
            $('#kentei_level, #gokaku_line, #display_time').addClass('anim1');
        });
        
        return;
	}
	
	// - - 漢検モード - -
	
	if (mode === '試験' || mode === 'とことん') {
	    let field_id;
		if (mode === '試験' || DATA[genre].length < 2) {
			field_id = '#genre_field';
	    } else if (mode === 'とことん') {
			field_id = '#level_field';
		}
		
		if (mode === 'とことん') {
            $("#button_next, #button_finish").hide();

            if (is_tokoton_second) {
                $("#tokoton_kekka").hide();
                $("#clear_num").removeClass('anim1');
                $("#tokoton_texts, #tokoton_text, #tokoton_text2").show();
            }

			$('.kensaku_panel').hide().css('opacity', '0');
		}
		
	    $(field_id).fadeOut('normal', function() {
	    	
	        $('#test_field').fadeIn();
	        
            $("#button_saiten").show();
	    	$('.zoom_up').css('position', 'relative');
	        if (mode === '試験') {
	            $('#kentei_level, #gokaku_line, #display_time, #genre_text').addClass('anim1');
	            $('#tokoton_text, #tokoton_text2').hide();
	        } else if (mode === 'とことん') {
	            $('#kentei_level, #gokaku_line, #genre_text').hide();
	            $('#tokoton_text, #tokoton_text2').addClass('anim1');
	        }
	    });
	} else if (mode === "復習") {
	    $('#genre_field').fadeOut('normal', function() {
	        $('#fukusyuu_field').fadeIn();
	        $('#fukusyuu_text').addClass('anim1');
	        $(".genre_panel").hide();
	        $("#button_all_answer").show();
	    });
	}
}

// 実況ページへの切り替え
function Go_to_kentei_page() {
	
	let all_q_num = 0;
	
    for (let i = 0; i < GENRE.length; i++) {
    	
    	const genre = genre_list[i];
    	const genre_name = GENRE[i][genre];
    	const haiten_text = Q_NUM[i]+'問（'+ (UNIT_SCORE[i] * Q_NUM[i]) +'点）';
    	
    	let html =  '<div id="panel_'+i+'_on_live" class="genre_panel_animation" style="GENRE_POSITION ANIMATION">' +
	                '	<article class="panel genre_panel_on_live" name="'+ genre_name +'">' +
			        '    	<p id="genre_on_clear_line">'+ genre_name +'</p>' +
			        '    </article>' +
			        '    <p id="haiten_on_clear_line" style="GENRE_POSITION_HAITEN">'+ haiten_text +'</p>' +
		            '</div>';

		if (GENRE.length === 1) {
	    	html = Replace(html, [
	    				["GENRE_POSITION", "top:"+ (35+ 15*i) +"%; left:4%;"],
	    				["GENRE_POSITION_HAITEN", "top:"+ (100 + 40*i) +"%; left:40%;"],
	    				["ANIMATION", "animation-delay:"+ (0.4 + 0.2*i) +"s; opacity:0;"]
	    	]);
	    } else if (GENRE.length === 3) {
	    	html = Replace(html, [
	    				["GENRE_POSITION", "top:"+ (25+ 15*i) +"%; left:4%;"],
	    				["GENRE_POSITION_HAITEN", "top:"+ (100 + 40*i) +"%; left:40%;"],
	    				["ANIMATION", "animation-delay:"+ (0.4 + 0.2*i) +"s; opacity:0;"]
	    	]);
	    } else if (GENRE.length === 4) {
	    	html = Replace(html, [
	    				["GENRE_POSITION", "top:"+ (17+ 15*i) +"%; left:4%;"],
	    				["GENRE_POSITION_HAITEN", "top:"+ (100 + 40*i) +"%; left:40%;"],
	    				["ANIMATION", "animation-delay:"+ (0.4 + 0.2*i) +"s; opacity:0;"]
	    	]);
	    }
    	
		$("#panel_on_clear_line").append(html);
		
		all_q_num += Q_NUM[i];
	}
	
	$("#clear_line_text_on_live").css("animation-delay", (0.4 + (0.2 * GENRE.length))+"s")
								 .html(MAX_SCORE+"点中<br><y>"+GOKAKU_SCORE+"点</y>で合格");
	$("#q_num_text_on_live").html("出題する問題数：<y>"+ all_q_num +"問</y>");

    $('#genre_field').fadeOut('normal', function() {
        $('.genre_panel').hide();
        $('#q_num_text_on_live, .genre_panel_animation').addClass('anim1');
        $('#clear_line_text_on_live').addClass('anim2');
        $('#live_field, #button_kentei_start').fadeIn();
    });
}

// 実況ページへの切り替え
function Go_to_live_page() {
	
	$("#button_kentei_start").css("pointer-events", "none");
	
    One_kanji_on_live();
    
    for (let i = 0; i < GENRE.length; i++) {
    	$('#panel_'+i+'_on_live').css("animation-delay", "0s");
    }
    $('#clear_line_text_on_live, #q_num_text_on_live').css("animation-delay", "0s");
    $('#q_num_text_on_live, .genre_panel_animation').removeClass('anim1').addClass('anim1_out');
    $('#clear_line_text_on_live').removeClass('anim2').addClass('anim2_out');
    
    $('#button_kentei_start').fadeOut('normal', function() {
        $('#one_genre_on_live, #button_start').fadeIn();
        $("#button_kentei_start").css("pointer-events", "auto");
    });
}

// 試験についてのテキストの表示
function Show_kentei_texts() {
	if (mode === "試験") {
	    $("#kentei_level").html(KENTEI_LEVEL);
	    $("#gokaku_line").html(GOKAKU_LINE);
	    $("#display_time").html("経過時間：0.0秒");
	} else if (mode === "とことん") {
	    $("#tokoton_text").html("とことんモード　登録数：" + kanji_num + "問");
	    $("#tokoton_text2").html("ここまでの出題数：" + kanji_asked + "問 / 残り" + (kanji_num - kanji_asked) + "問");
	}
}

// 解答フォームの構成・表示
function Make_form() {
	
	let main_q_num = 0;
	let selector = "#form_on_";
	
	// 大問の数(main_q_num)をカウント
	if (mode === "試験") {
		
	    for (let main_q = 0; main_q < MAIN_Q_NUM; main_q++) {
	    	if (typeof KANKEN !== "undefined" && !DATA[genre][main_q]) break;
	    	
	    	main_q_num++;
	    }
	    
	    selector += "test";
	    
	} else if (mode === "とことん") {

	    main_q_num = 1;
	    selector += "test";
	    
	} else if (mode === "復習") {

	    for (let genre_f = 0; genre_f < GENRE[0].length; genre_f++) {
	    	for (let level_f = 0; level_f < LEVEL.length; level_f++) {
	    		if (!LIST[genre_f][level_f]) continue;
		    	main_q_num++;
	    	}
	    }
	    
	    selector += "fukusyuu";
	}

	// <form>内のコンテンツを出力
    for (let main_q = 0; main_q < main_q_num; main_q++) {

    	let html =  '<p id="question_Q' + (main_q + 1) + '" class="question"></p>' +
	                '<div id="test_Q' + (main_q + 1) + '"></div>';
    	
		$(selector).append(html);
    }
}

// 問題文の構成・表示
function Make_question(main_q, genre, level, question) {

    let number = "";
    let haiten = "";

	if (typeof CLASS !== "undefined") {

		number = "["+ To_kansuji(main_q + 1) +"]";
		haiten = "("+ UNIT_SCORE[main_q] +"点×"+ Q_NUM[main_q] +"問)";

	} else if (typeof KANKEN !== "undefined") {
		    
		const is_level_undef = (DATA[genre].length < 2);
		
		if (is_level_undef) {
	    	number = '[レベル無]';
	    } else {
	    	number = '[レベル'+ (level + 1) +']';
	    }
	    
	    if (mode === '試験') {
	    	// 配点
	    	if (DATA[genre].length === 1) {
	        	haiten = "("+UNIT_SCORE[main_q]+"点×50問)";
	        } else if (DATA[genre].length === 2) {
	        	if (level === 0) {
	        		haiten = "("+UNIT_SCORE[main_q]+"点×30問)";
	        	} else if (level === 1) {
	        		haiten = "("+UNIT_SCORE[main_q]+"点×20問)";
	        	}
	        } else {
	        	haiten = "("+UNIT_SCORE[main_q]+"点×"+Q_NUM[main_q]+"問)";
	        }
	    }
	    
	}

	$("#question_Q" + (main_q + 1)).html(number +' '+ question +' '+ haiten);
}

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

// <table>要素の構成
function Make_table(selector, double_column) {
	
	let html = '<table class="test_table float_left"></table>';
	if (double_column) html +=  '<table class="test_table float_right"></table>';
	
	$(selector).html(html);
}

// 試験問題の構成
function Make_toi_and_kanji(data, double_column, q, q_num, main_q) {
	const kanji = data[0];
	const yomi = data[1];
	const condition = data[2];

	// - - テーブルの構成 - -

	const Qq = 'Q' + (main_q + 1) + 'q' + (q + 1);
	const url = "https://www.google.co.jp/search?q="+ kanji + "+" + yomi.split(",")[0];
	
    let html =  '<tr>' +
	            '	<th>' +
	            '		<h4><toi>問' + (q + 1) + '</toi><kanji class="zoom_up">' + Add_uni_tag(kanji) + '</kanji></h4>' +
	            '	</th>' +
	            '	<td>' +
	        	'		<p id="condition_' + Qq + '" class="condition">' + condition + '</p>' +
	            '		<input class="input_of_answer" type="text" name="' + Qq + '">' +
	        	'		<p id="answer_' + Qq + '" class="answer"></p>' +
	        	'		<div class="center mini_panel kensaku_panel">' +
	        	'			<a href='+ url +' target="_blank"><p>検索</p></a>' +
	        	'		</div>' +
	            '	</td>' +
	            '</tr>';
    
	let selector = "#test_Q" + (main_q + 1) + " .float_";
    if (double_column && q >= q_num / 2) {
    	selector += "right";
    } else {
    	selector += "left";
	}
	
	$(selector).append(html);
}

/* 採点関連 */

// 正誤判定
// matched_answer  : (受検者の解答と一致した)答え
// answers : 別解も含む答え一式
function Check_answer(input, yomi) {

    let is_correct = false;

	if (input) {
	    // 空白類を取り除く・カナをひらがなに変換
	    input = input.replace(/\s+/g, "");
	    input = Kana_to_hira(input);
	} else {
		input = "";
	}
	
    // 別解ごとに配列に格納
    yomi = yomi.replace(/[()]/g, ""); // 括弧を削除
    yomi = Kana_to_hira(yomi);
    const answers = yomi.split(",");

    // 正誤判定(別解を一つずつチェック)
    let matched_answer;
    for (let i = 0; i < answers.length; i++) {
        if (input === answers[i]) {
            is_correct = true;
            matched_answer = answers[i];
            break;
        }
    }

    return [is_correct, matched_answer, answers];
}

// フィールド内のカラーリング
function Coloring_field(is_correct, field_name) {
	
	// 正解なら赤色に 不正解なら青色に
	const color = ((is_correct) ? 'coral' : 'cornflowerblue');
	const input_name = 'input[name="' + field_name + '"]';
	
    $(input_name).css('background-color', color);
}

// 正解・別解の表示
function Show_answers(data, yomi, field_name) {
    const is_correct = data[0];
    const answer = data[1];
    const answers = data[2];
    
    // 受検者が正解し、かつ別解なし　→　表示なし
    if (is_correct && answers.length === 1) return;
    
	const answer_elem = document.getElementById('answer_' + field_name);
	
    if (!(is_correct)) {
        // 不正解のとき 正解の書き込み
        answer_elem.innerHTML = yomi;
    } else if (answers.length >= 2) {
        // 別解があるとき 別解の書き込み
        answer_elem.innerHTML = "別解:" + Replace(yomi, [
            [answer + ",", ""],
            ["," + answer, ""],
            ["(" + answer + "),", ""],
            [",(" + answer + ")", ""]
        ]);
    }

    // 正解・別解の表示
    $('#answer_' + field_name).show();
}

// アニメーションでカウントアップ
function Count_up(score) {
    let num = 0;
    const target = score;
    const speed = 20;

    setInterval(function() {
        if (num === target) {
        	$('#saiten_kekka').children().addClass('anim1');
            $('#result_time, #score_form').addClass('anim1');
            if (judge === "満点") {
                $("#result_gold").fadeIn();
            } else if (judge === "合格") {
                $("#result_silver").fadeIn();
            } else if (judge === "あと少し") {
                $("#result_bronze").fadeIn();
            }
        }
        if (num <= target) {
            $('#count_up').html(num + "点");
            num++;
        }
    }, speed);
}

// アニメーションでカウントアップ
function Count_up_on_live(score) {
    let num = 0;
    const target = score;
    const speed = 20;

    setInterval(function() {
        if (num === target) {
	        $("#judge_on_live, #button_home_on_live").show().addClass('anim1');
            if (judge === "満点") {
                $("#result_gold_on_live").fadeIn();
				$('#girl_manten').show().addClass("anim2");
            } else if (judge === "合格") {
                $("#result_silver_on_live").fadeIn();
				$('#girl_gokaku').show().addClass("anim2");
            } else if (judge === "あと少し") {
                $("#result_bronze_on_live").fadeIn();
				$('#girl_sukoshi').show().addClass("anim2");
            } else {
				$('#girl_none').show().addClass("anim2");
            }
        }
        if (num <= target) {
            $('#count_up_on_live').html(num + "点");
            num++;
        }
    }, speed);
}

// 採点結果をtwitterボタンに反映
function Set_tweet_button(score) {
	let id;
	let twitter_text;

	if (mode === "試験") {
		id = "#a_tweet";
		twitter_text = "【" + KENTEI_NAME + "】採点結果：あなたの得点は"+ score +"点/"+ MAX_SCORE +"点です。"+
        			 "\n「難読漢字検定」" + MEDAL_IMAGE[judge];
	} else if (mode === "とことん") {
		id = "#a_tweet_tokoton";
        twitter_text = "【" + KENTEI_NAME + "】"+ GENRE[0][genre] +"を合計" + kanji_clear + "問クリアしました。";
	} else if (mode === "復習") {
		id = "#a_tweet_fukusyuu";
        twitter_text = "【復習】"+KENTEI_NAME+"を" + score + "問克服しました。";
	}
	
    const twitter_url = 'https://twitter.com/share?url=http://din17549.php.xdomain.jp/index.php' +
		                '&text=' + encodeURI(twitter_text) +
		                '&hashtags=' + encodeURI("難読漢字検定,フリーゲーム") +
		                '&count=none&lang=ja';

    $(id).attr('href', twitter_url);
}


// - - 漢検トレーニングのページに関する関数 - - 


// 漢検の登録リスト(cookie)からの格納
function Data_set() {
	IS_ALL_LIST_NULL = true;
	ALL_LIST_NUM = 0; // 総登録数
	ALL_ASKED_NUM = 0; // 総出題数

	let GENRE_LENGTH = GENRE[0].length;

	for (let genre = 0; genre < GENRE_LENGTH; genre++) {
        for (let level = 0; level < LEVEL.length; level++) {
        
        	const cookie = COOKIE + '_' + GENRE_EN[genre] + '_' + LEVEL_EN[level];
        	
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
			
			// KANJI_CLEAR格納
			const clear = Number(Get_cookie(cookie + '_clear'));
			KANJI_CLEAR[genre][level] = clear;
			
			// KANJI_ASKED格納
			const asked = Number(Get_cookie(cookie + '_asked'));
			KANJI_ASKED[genre][level] = asked;
			ALL_ASKED_NUM += asked;
    	}
    }
}

// レベル選択画面の表示
function Show_level_panels() {

	// 試験モードもしくは
	// レベルがない場合は出題開始
	if (mode === '試験' || DATA[genre].length < 2) {
		level = 0;
    	Be_on_the_test();
    	return;
    }

	// - - - レベルパネルの構成 - - -
    
    const LEVEL_LENGTH = DATA[genre].length;
    
	$('#level_panels').addClass('kanken_level_length_'+ LEVEL_LENGTH);
	
    for (let level = 0; level < LEVEL_LENGTH; level++) {
    	
		const num = DATA[genre][level].length;
		const asked = KANJI_ASKED[genre][level];
		
    	let html =  '<article name="レベル'+ (level+1) +'" class="panel level_panel">'+
		            '	<a name="' + level + '" onclick="Get_level(this);">'+
		            '		<p class="text_on_level">'+ LEVEL[level] +'</p>'+
		            '		<p class="nokori_text_on_level">残り：'+ (num - asked) +'</p>'+
		            '	</a>'+
		            '</article>';

		$("#level_panels").append(html);
	}
	
	// レベル選択画面の表示
    $('#genre_field').fadeOut('normal', function() {
        $('#level_field').fadeIn();
    });
}

// モード変更を画面上に反映
function Reflect_mode() {
	// ジャンルパネル内の表示設定
	$('input[name="mode"]').prop("checked", (mode === '試験') ? true : false);
	
	// 「スコア」と「残り問題数」の入れ替え
    for (let genre = 0; genre < GENRE[0].length; genre++) {
    	const id_score = '#cookie_' + GENRE_EN[genre];
    	const id_nokori = '#' + GENRE_EN[genre] + '_nokori';
    	
		const id_add = (mode === '試験') ? (id_score) : (id_nokori);
		const id_hide = (mode === '試験') ? (id_nokori) : (id_score);
		
        $(id_add).addClass('anim1');
        $(id_hide).hide();
    }
    
    // 復習リスト内の表示
    if (IS_ALL_LIST_NULL) {
        $("#cookie_fukusyuu").html('登録数：--');
        $("#fukusyuu_panel a").css("cursor", "not-allowed");
    } else {
        $("#cookie_fukusyuu").html('登録数：' + ALL_LIST_NUM);
    }
}

// モードの切り替え
function Switch_mode() {
    if (mode === 'とことん') {
        mode = '試験';
        for (let genre = 0; genre < GENRE[0].length; genre++) {
            $('#' + GENRE_EN[genre] + '_nokori').hide();
            $('#cookie_' + GENRE_EN[genre]).show().addClass('anim1');
        }
    } else if (mode === '試験') {
        mode = 'とことん';
        for (let genre = 0; genre < GENRE[0].length; genre++) {
            $('#cookie_' + GENRE_EN[genre]).hide();
            $('#' + GENRE_EN[genre] + '_nokori').show().addClass('anim1');
        }
    }

    Write_cookie(mode, 'mode_switch');
}

// ジャンル画面内の表示
function Show_genre_data() {
    for (let genre = 0; genre < GENRE[0].length; genre++) {
    
    	let highest_score = Get_cookie(COOKIE + '_' + GENRE_EN[genre]);
		if (highest_score === null) highest_score = "--";
    	
        $('#cookie_' + GENRE_EN[genre]).html('最高点：' + highest_score);

		// レベル別残り登録数の表示
		let kanji_num = 0;
		let kanji_asked = 0;
		for (let level = 0; level < LEVEL.length; level++) {
			if (!DATA[genre][level]) {
				continue;
			}
            kanji_num += DATA[genre][level].length;
            kanji_asked += KANJI_ASKED[genre][level];
        }
        $('#' + GENRE_EN[genre] + '_nokori').html('残り：' + (kanji_num - kanji_asked));

        if (highest_score === "--") continue;

        // メダル画像の表示
        Show_medal_on_genre('#medal_' + GENRE_EN[genre], highest_score, MAX_SCORE, GOKAKU_SCORE);
    }
}

// パネル上のメダル表示
function Show_medal_on_genre(id, high_score, manten, gokaku) {

	let medal;
    if (high_score == manten) {
        medal = "gold";
    } else if (high_score >= gokaku) {
        medal = "silver";
    } else if (high_score >= gokaku - 30) {
        medal = "bronze";
    } else {
    	return;
    }
    
    $(id).html('<img src="../img/'+ medal +'.png" class="medal_on_genre">');
}

// とことん紹介ページの表示・非表示
function Show_intro() {
    $('#genre_field').fadeOut('normal', function() {
        $('#about_tokoton_field').fadeIn();
    });
}
function Hide_intro() {
    $("html").animate({
        scrollTop: 0
    });
    $('#about_tokoton_field').fadeOut('normal', function() {
        $('#genre_field').fadeIn();
    });
}

// 編集ページの表示・非表示
function Show_edit() {

	// 記録テーブル構成
	
	$("#th_all_asked").html(ALL_ASKED_NUM);
	$("#th_all_fukusyuu").html(ALL_LIST_NUM);
	
	for (let genre = 0; genre < GENRE[0].length; genre++) {
		
		let html =  '<table class="edit_table" border="1">';
		let genre_html = '<th rowspan="3">' + GENRE[0][genre] + '</th>';
		
        for (let level = 0; level < LEVEL.length; level++) {
        	
        	if (typeof KANJI_ASKED[genre][level] === "undefined") {
        		break;
        	}
        	
        	if (level !== 0) genre_html = "";
        	
	        html += '<tr>' +
					'	'+ genre_html +
					'	<th>レベル'+(level+1)+'</th>' +
					'	<th id="th_asked_g'+(genre+1)+'l'+(level+1)+ '" name="num">'+KANJI_ASKED[genre][level]+'</th>' +
            		'	<td>' +
					'		<div class="mini_panel reset_panel">' +
	        		'			<a id="asked_g'+(genre+1)+'l'+(level+1)+'" onClick="Reset_asked(this);">' +
	        		'				<p>リセット</p>' +
	        		'			</a>' +
	        		'		</div>' +
           			'	</td>' +
           			'</tr>';
        }
        html +=  '</table>';
        
    	$('#edit_table_ask').append(html);
    }

	// 記録テーブル構成
	for (let genre = 0; genre < GENRE[0].length; genre++) {
		
		let html =  '<table class="edit_table" border="1">';
		let genre_html = '<th rowspan="3">' + GENRE[0][genre] + '</th>';
		
        for (let level = 0; level < LEVEL.length; level++) {
        	
        	if (!DATA[genre][level]) break;
        	
        	if (!LIST_NUM[genre][level]) {
        		LIST_NUM[genre][level] = 0;
        	}
        	
        	if (level !== 0) genre_html = "";
        	
	        html += '<tr>' +
					'	' + genre_html +
					'	<th>レベル'+(level+1)+'</th>' +
					'	<th id="th_fukusyuu_g'+(genre+1)+'l'+(level+1)+ '" name="num">'+LIST_NUM[genre][level]+'</th>' +
            		'	<td>' +
					'		<div class="mini_panel reset_panel">' +
	        		'			<a id="fukusyuu_g'+(genre+1)+'l'+(level+1)+'" onClick="Reset_fukusyuu(this);">' +
	        		'				<p>消去</p>' +
	        		'			</a>' +
	        		'		</div>' +
           			'	</td>' +
           			'</tr>';
        }
        html +=  '</table>';
        
    	$('#edit_table_fukusyuu').append(html);
    }

    $('#genre_field').fadeOut('normal', function() {
        $('#edit_field').fadeIn();
    });
}
function Hide_edit() {
	Data_set();
	Show_genre_data();
	Reflect_mode();
	
    $("html").animate({
        scrollTop: 0
    });
    $('#edit_field').fadeOut('normal', function() {
        $('#genre_field').fadeIn();
    });
}

// kanji_askedのリセット
function Reset_asked(elem) {
	
    if (!confirm("一度リセットしたデータは復元できません。\n本当によろしいですか?")) {
        return;
    }
    
    if (elem.id === "all_asked") {
		for (let genre = 0; genre < GENRE[0].length; genre++) {
            for (let level = 0; level < LEVEL.length; level++) {
        		Write_cookie(0, COOKIE + '_' + GENRE_EN[genre] + '_'+LEVEL_EN[level]+'_asked');
        		$('#th_asked_g'+(genre+1)+'l'+(level+1)).html(0).hide().fadeIn();
        	}
    	}
    	$('#th_all_asked').html(0).hide().fadeIn();
    	
    	return;
    }
    
    genre = Number(elem.id[7]) - 1;
    level = Number(elem.id[9]) - 1;

    const asked = Get_cookie(COOKIE + '_' + GENRE_EN[genre] + '_'+LEVEL_EN[level]+'_asked');
    if (asked === null) return;
    ALL_ASKED_NUM -= asked;
    $('#th_all_asked').html(ALL_ASKED_NUM).hide().fadeIn();
    Write_cookie(0, COOKIE + '_' + GENRE_EN[genre] + '_'+LEVEL_EN[level]+'_asked');
    $('#th_asked_g'+(genre+1)+'l'+(level+1)).html(0).hide().fadeIn();
}

// 復習リストのリセット
function Reset_fukusyuu(elem) {
	
    if (!confirm("一度消去したデータは復元できません。\n本当によろしいですか?")) {
        return;
    }
    
    if (elem.id === "all_fukusyuu") {
		for (let genre = 0; genre < GENRE[0].length; genre++) {
            for (let level = 0; level < LEVEL.length; level++) {
        		Write_cookie(null, COOKIE + '_' + GENRE_EN[genre] + '_'+LEVEL_EN[level]+'_list');
        		$('#th_fukusyuu_g'+(genre+1)+'l'+(level+1)).html(0).hide().fadeIn();
        	}
    	}
    	$('#th_all_fukusyuu').html(0).hide().fadeIn();
    	
    	return;
    }
    
    genre = Number(elem.id[10]) - 1;
    level = Number(elem.id[12]) - 1;

    const list = Get_cookie(COOKIE + '_' + GENRE_EN[genre] + '_'+LEVEL_EN[level]+'_list');
    if (list === null) return;
    ALL_LIST_NUM -= list.split(",").length;
    $('#th_all_fukusyuu').html(ALL_LIST_NUM).hide().fadeIn();
    Write_cookie(null, COOKIE + '_' + GENRE_EN[genre] + '_'+LEVEL_EN[level]+'_list');
    $('#th_fukusyuu_g'+(genre+1)+'l'+(level+1)).html(0).hide().fadeIn();
}

// 「戻る」パネルの移動
function Move_back_panel(BACK_PANEL_ID) {
    for (let i = 0; i < BACK_PANEL_ID.length; i++) {
		const initPosition = $(BACK_PANEL_ID[i]).offset().top;
		
	    $(window).scroll(function() {
		    const scroll = $(document).scrollTop();
		 
		    // 移動後ポジション
		    let movePosition = initPosition + scroll - 100;

		    if (movePosition < 0) movePosition = 0;
		    $(BACK_PANEL_ID[i]).animate({
		        top : movePosition + "px"
		    }, {
		        duration : 800,
		        queue : false
		    });
	    });
    }
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
		    if (v == remove_index) array_list.splice(i, 1);
		});

		list = array_list.join(',');

	    Write_cookie(list, cookie);
}

// お疲れページの表示
function Show_otsukare_page() {
	
    const is_level_undef = (DATA[genre].length < 2);
    if (is_level_undef) level = 0;
    
    // 出題する問題が残っていないかを判定
	const asked = KANJI_ASKED[genre][level];
	const len = DATA[genre][level].length;
	const is_over = (asked >= len);

    if (is_over) {
    	// すべて出題した場合
        let field_id;
        if (is_level_undef) {
			field_id = '#genre_field';
        } else {
			field_id = '#level_field';
        }
        $(field_id).fadeOut('normal', function() {
            $('#test_field').fadeIn();
            $("#button_saiten, #clear_line, #tokoton_texts").hide();
            $('#a_tweet_tokoton').show();
            $('#full_tokoton, #a_tweet_tokoton').addClass('anim1');
        });
        $("#full_tokoton").show();
        $('#full_tokoton, #otsukare').addClass('anim1');
    } else {
    	// 中断の場合
        $("#full_tokoton").hide();
        $('#otsukare').addClass('anim1');
    }

    $("#tokoton_kekka, #form_on_test, #button_next, #button_finish").hide();
    $("#finish_kekka, #button_home").show();
    $('#finish_kekka').children().addClass('anim1');
}

// 繰り返し処理の中身
function Show_time() {
   kentei_time += 0.1;   // カウントアップ
   const msg = "経過時間： <span style='width:200px;'>" + kentei_time.toFixed(1) + "秒</span>";   // 表示文作成
   document.getElementById("display_time").innerHTML = msg;   // 表示更新
}
 
// 繰り返し処理の開始
function Start_time() {
   kentei_time = 0;
   PassageID = setInterval('Show_time()',100);   // タイマーをセット(100ms間隔)
}

// 繰り返し処理の中止
function Stop_time() {
   clearInterval( PassageID );   // タイマーのクリア
}
