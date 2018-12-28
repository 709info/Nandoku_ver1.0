/*
KANJI[][] = new Array("","","","","",
				  "","","","","",
				  "","","","","",
				  "","","","","");

YOMI[][] = new Array("","","","","",
				  "","","","","",
				  "","","","","",
				  "","","","","");
*/

var KANJI = new Array();
KANJI[0] = new Array();
KANJI[1] = new Array();
KANJI[2] = new Array();

var YOMI = new Array();
YOMI[0] = new Array();
YOMI[1] = new Array();
YOMI[2] = new Array();

var QUESTION_STR = new Array();
QUESTION_STR[0] = new Array ();
QUESTION_STR[1] = new Array ();
QUESTION_STR[2] = new Array ();
QUESTION_STR[3] = new Array ();
// Q1

QUESTION_STR[0][0] = '<h4 style="padding:20px">[一] 次の物・部位を表す漢字を<u>訓読みで</u>答えなさい。（4点×10問）</h4>';

KANJI[0][0] = new Array("鉄漿","塵箱",
				  "吃逆","雀斑","旋毛",
				  "睫毛","障泥","飛白","帷子","鏝",
				  "賽子","笊","鋤","三和土","束子",
				  "鑿","長押","梃子","鉈","暖簾",
				  "発条","抽斗","鑢","坩堝","轆轤",
				  "弾機","鉞");
				  
YOMI[0][0] = new Array("おはぐろ:かね","ごみばこ",
				  "しゃっくり","そばかす","つむじ",
				  "まつげ","あおり","かすり","かたびら","こて",
				  "さいころ","ざる","すき","たたき","たわし",
				  "のみ","なげし","てこ","なた","のれん",
				  "ばね","ひきだし","やすり","るつぼ","ろくろ",
				  "ばね","まさかり");
				  
QUESTION_STR[0][1] = '<h4 style="padding:20px">[一] 次の動物を表す漢字を<u>平仮名で</u>答えなさい。（4点×10問）</h4>';

KANJI[0][1] = new Array("海驢","蜥蜴","蟾蜍","猩々","大熊猫",
				  "海狸","蝙蝠","膃肭臍","鰐","玉筋魚",
				  "虎魚","食蛇獣","蒿雀","花鶏","鸊鷉",
				  "金糸雀","騾馬","羊駝","驢馬","豪猪",
				  "鷦鷯","告天子","鸛","翡翠","鵲",
				  "鵺","鴫","鷂","朱鷺","鴻",
				  "冬眠鼠");
				  
YOMI[0][1] = new Array("あしか","とかげ:せきえき","ひきがえる","おらうーたん:おらんうーたん:しょうじょう","ぱんだ",
				  "びーばー","こうもり","おっとせい","わに","いかなご",
				  "おこぜ","まんぐーす","あおじ","あとり","かいつぶり",
				  "かなりあ","らば","らま","ろば","やまあらし",
				  "みそさざい","ひばり","こうのとり","かわせみ:ひすい","かささぎ",
				  "ぬえ","しぎ","はいたか:はしたか","とき","おおとり:ひしくい",
				  "やまね");

QUESTION_STR[0][2] = '<h4 style="padding:20px">[一] 次の植物・食べ物を表す漢字を<u>平仮名で</u>答えなさい。（4点×10問）</h4>';

KANJI[0][2] = new Array("石蓴","水綿","藜","菖蒲","薊",
				  "紫羅欄花","海髪","苜蓿","巻耳","牛膝",
				  "鳶尾","酢漿草","酸漿","薇","薺","紫薇",
				  "満天星","朮","馬酔木","木通","扁桃");

YOMI[0][2] = new Array("あおさ","あおみどろ","あかざ","あやめ:しょうぶ","あざみ",
				  "あらせいとう","いぎす","うまごやし:もくしゅく","おなもみ","いのこずち:ごしつ",
				  "いちはつ:えんび","かたばみ:そじょうそう","ほおずき","ぜんまい:のえんどう","なずな:はまびし","さるすべり:しび",
				  "どうだんつつじ:どうだん:まんてんせい","おけら:うけら:もちあわ","あせび:あしび","あけび","アーモンド");

// Q2

QUESTION_STR[1][0] = '<h4 style="padding:20px">[二] 次の漢字一文字を<u>訓読みで</u>答えなさい。（4点×10問）</h4>';

KANJI[1][0] = new Array("丫","痂","嚏","黴","黶","靄",
				  "瘋","拇","皸","熱","飆","運","閂",
				  "鳧","鱟","孑","屍","謀","愈",
				  "抑","羹","閨","鉄","銅","秤","脛",
				  "鼾","諱","嗽","項","裃","叢","転");
				  
YOMI[1][0] = new Array("あげまき:つのがみ","かさぶた","くしゃみ","かび","ほくろ","もや",
				  "ずつう","おやゆび","あかぎれ","ほとぼり","つむじかぜ:かぜ","さだめ","かんぬき",
				  "けり:かも","かぶとがに","ぼうふら","しかばね","はかりごと","いよいよ",
				  "そもそも","あつもの","ねや","くろがね","あかがね","はかり","すね:はぎ",
				  "いびき","いみな","うがい","うなじ","かみしも","くさむら","くるり");
	
QUESTION_STR[1][1] = '<h4 style="padding:20px">[二] 次の漢字の読みを<u>送り仮名も含めて</u>答えなさい。（4点×10問）</h4>';

KANJI[1][1] = new Array("嘶く","苟も","蔑む","潤びる","穿つ",
				  "隠る","誂える","革める","燻る","衒う","寛ぐ",
				  "鑑みる","慮る","逞しい","屈む","悴む",
				  "姦しい","窘める","喧しい","軋む","辷る");

YOMI[1][1] = new Array("いななく","いやしくも","さげすむ","ほとびる","うがつ",
				  "こもる","あつらえる","あらためる","いぶる","てらう","くつろぐ",
				  "かんがみる","おもんぱかる","たくましい","かがむ","かじかむ",
				  "かしましい","たしなめる","かまびすしい:やかましい","きしむ","すべる");

// Q3

QUESTION_STR[2][0] = '<h4 style="padding:20px">[三] 次の熟語の読みを<u>音読みで</u>答えなさい。（4点×5問）</h4>';

KANJI[2][0] = new Array("嚢中","歪曲","女衒","蹂躙","軋轢",
				  "癲癇","齟齬","寂寞","静謐","瀟洒","辟易",
				  "逼塞","猥褻","饒舌","贔屓","罵詈",
				  "讒謗","猜疑","憔悴","慇懃","霹靂");

YOMI[2][0] = new Array("のうちゅう","わいきょく","ぜげん","じゅうりん","あつれき",
				  "てんかん","そご","せきばく","せいひつ","しょうしゃ","へきえき",
				  "ひっそく","わいせつ","じょうぜつ","ひいき","ばり",
				  "ざんぼう","さいぎ","しょうすい","いんぎん","へきれき");