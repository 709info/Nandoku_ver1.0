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
KANJI[3] = new Array();

var YOMI = new Array();
YOMI[0] = new Array();
YOMI[1] = new Array();
YOMI[2] = new Array();
YOMI[3] = new Array();

var QUESTION_STR = new Array();
QUESTION_STR[0] = new Array ();
QUESTION_STR[1] = new Array ();
QUESTION_STR[2] = new Array ();
QUESTION_STR[3] = new Array ();

// Q1

QUESTION_STR[0][0] = '<h4 style="padding:20px">[一] 次の植物を表す漢字の読みを<u>平仮名で</u>答えなさい。（4点×10問）</h4>';

KANJI[0][0] = new Array("燕子花","糸瓜","柚子","林檎","胡瓜","石南花",
					  "撫子","向日葵","紫陽花","牡丹","茜","蒲公英",
					  "葵","翌檜","杏","無花果","独活","団栗",
					  "楓","西瓜","胡桃","牛蒡","山茶花",
				      "葡萄","葱","薔薇","小豆","女郎花",
				      "万年青","南瓜","煙草","砂糖黍","土筆",
				      "百日紅","茄子","銀杏","柏","枇杷");
					  
YOMI[0][0] = new Array("かきつばた","へちま","ゆず","りんご","きゅうり","しゃくなげ",
				  "なでしこ","ひまわり","あじさい","ぼたん","あかね","たんぽぽ",
				  "あおい","あすなろ","あんず","いちじく:いちじゅく","うど","どんぐり",
				  "かえで","すいか","くるみ","ごぼう","さざんか:さんさか",
				  "ぶどう","ねぎ","ばら","あずき","おみなえし",
				  "おもと","かぼちゃ","たばこ","さとうきび","つくし",
				  "さるすべり","なす","ぎんなん:いちょう","かしわ","びわ");

QUESTION_STR[0][1] = '<h4 style="padding:20px">[一] 次の魚介類を表す漢字の読みを<u>平仮名で</u>答えなさい。（4点×10問）</h4>';

KANJI[0][1] = new Array("鮎魚女","烏賊","鮎","糸魚","蛸",
				  "海老","笠子","河豚","牡蠣",
				  "太刀魚","海鼠","蛤","公魚","山女魚",
				  "眼張","鰹","鮪","秋刀魚","柳葉魚",
				  "浅蜊","鯛","鯉","鮭","泥鰌",
				  "馬刀貝","伊勢蝦","蜆","帆立貝","蟹",
				  "栄螺","鮃","介党鱈","鯰","飛魚");
					  
YOMI[0][1] = new Array("あいなめ","いか","あゆ","いとよ:いとうお","たこ",
				  "えび","かさご","ふぐ","かき",
				  "たちうお","なまこ","はまぐり","わかさぎ","やまめ",
				  "めばる","かつお","まぐろ:しび","さんま","ししゃも",
				  "あさり","たい","こい","さけ:しゃけ","どじょう",
				  "まてがい","いせえび","しじみ","ほたてがい","かに",
				  "さざえ","ひらめ","すけとうだら","なまず","とびうお");
					  
QUESTION_STR[0][2] = '<h4 style="padding:20px">[一] 次の鳥類を表す漢字の読みを<u>平仮名で</u>答えなさい。（4点×10問）</h4>';
					  
KANJI[0][2] = new Array("家鴨","鶯","鸚鵡","合鴨","烏",
				  "啄木鳥","水鶏","孔雀","鷺","四十雀",
				  "背黄青鸚哥","鷹","鷲","駝鳥","隼",
				  "不如帰","百舌","木菟","雲雀","梟",
				  "鴛鴦","信天翁","郭公","鵞鳥","鶉",
				  "鳩","十姉妹","燕","椋鳥","鳶",
				  "雉","烏骨鶏");

YOMI[0][2] = new Array("あひる","うぐいす","おうむ","あいがも","からす:う",
				  "きつつき:けら:けらつつき","くいな","くじゃく","さぎ","しじゅうから",
				  "せきせいいんこ","たか","わし","だちょう","はやぶさ",
				  "ほととぎす:ふじょき","もず","みみずく:ずく","ひばり","ふくろう",
				  "おしどり:おし:えんおう","あほうどり","ほととぎす:かっこう","がちょう","うずら",
				  "はと","じゅうしまつ","つばめ","むくどり","とび:とんび",
				  "きじ","うこっけい");

QUESTION_STR[0][3] = '<h4 style="padding:20px">[一] 次の哺乳類・小動物を表す漢字の読みを<u>平仮名で</u>答えなさい。（4点×10問）</h4>';
					  
KANJI[0][3] = new Array("海豹","海豚","葦鹿","浣熊","食蟻獣",
				  "鼬","猪","川獺","鼠","蝮",
				  "麒麟","蝙蝠","犀","山椒魚","縞馬",
				  "鯱","儒艮","海象","海馬","馴鹿",
				  "樹懶","貘","土竜","守宮","山羊",
				  "駱駝","栗鼠","鴨嘴");
				  
YOMI[0][3] = new Array("あざらし:かいひょう","いるか","あしか","あらいぐま","ありくい",
				  "いたち","いのしし","かわうそ","ねずみ","まむし",
				  "きりん","こうもり:かわほり","さい","さんしょううお","しまうま",
				  "しゃちほこ:しゃち","じゅごん","せいうち","たつのおとしご:とど:せいうち","となかい",
				  "なまけもの","ばく","もぐら","やもり","やぎ",
				  "らくだ","りす","かものはし");

// Q2

QUESTION_STR[1][0] = '<h4 style="padding:20px">[二] 次の漢字の読みを<u>送り仮名も含めて</u>答えなさい。（4点×10問）</h4>';

KANJI[1][0] = new Array("準える","呟く","固より","寧ろ","懇ろ","喧しい",
					  "嘲る","相応しい","漸く","尖る","揶揄う","弁える",
					  "論う","予め","些か","聳える","即ち","北叟笑む",
					  "確り","彷徨う","躊躇う","虐げる","流離う",
					  "五月蠅い","雪ぐ","恰も","毟る","強ち",
					  "偏に","仄暗い","徐に","暫く","蝕む",
					  "宛ら","罵る","戦く","草臥れる","纏める",
					  "狼狽える","予て","囁く","紛れる","円ら",
					  "扇ぐ","青褪める","傍ら","塗す","集る",
					  "諭す","唆す","跪く","蒼い","過る","労る",
				      "呆れる","欺く","艶やか","肖る","晒す",
				      "阿る","司る","歪む","宥める","恭しい",
				      "疎い","頷く","辿る","可笑しい","厳か");
				  
YOMI[1][0] = new Array("なぞらえる","つぶやく","もとより","むしろ","ねんごろ","かまびすしい:やかましい",
				  "あざける","ふさわしい","ようやく","とがる","からかう","わきまえる",
				  "あげつらう","あらかじめ","いささか","そびえる","すなわち","ほくそえむ",
				  "しっかり","さまよう","ためらう","しいたげる","さすらう",
				  "うるさい","そそぐ:すすぐ","あたかも","むしる","あながち",
				  "ひとえに","ほのぐらい","おもむろに","しばらく","むしばむ",
				  "さながら","ののしる","おののく","くたびれる","まとめる",
				  "うろたえる","かねて","ささやく","まぎれる","つぶら",
				  "あおぐ","あおざめる","かたわら","まぶす","たかる",
				  "さとす","そそのかす","ひざまずく","あおい","よぎる","いたわる",
				  "あきれる","あざむく","つややか:あでやか","あやかる","さらす",
				  "おもねる","つかさどる","ひずむ:ゆがむ","なだめる","うやうやしい",
				  "うとい","うなずく","たどる","おかしい","おごそか");
	
// Q3

QUESTION_STR[2][0] = '<h4 style="padding:20px">[三] 次の熟語の読みを<u>音読みで</u>答えなさい。（4点×5問）</h4>';

KANJI[2][0] = new Array("渾身","鬱憤","昏睡","恫喝",
					  "彫琢","勿論","冒涜","困憊","団欒",
					  "捏造","彷彿","痙攣","揶揄",
					  "撥水","鳳凰","朦朧","爛漫","蓬莱",
					  "蘊蓄","硫黄","壊死","溌剌","脳震盪",
					  "辛辣","獰猛","齷齪","安堵","軽蔑",
					  "末裔","御用達","颯爽","野次","幸先",
					  "淘汰","抜擢","煩悩","繚乱","狼狽",
				      "頂戴","呆然","建立","蔓延","絢爛",
				  	  "膠着","可塑性","殺戮","嗜好","復讐",
				      "血痕","骸骨","杜撰","晩餐","治癒");

YOMI[2][0] = new Array("こんしん","うっぷん","こんすい","どうかつ",
				  "ちょうたく","もちろん","ぼうとく","こんぱい","だんらん",
				  "ねつぞう:でつぞう","ほうふつ","けいれん","やゆ",
				  "はっすい","ほうおう","もうろう","らんまん","ほうらい",
				  "うんちく","いおう","えし","はつらつ","のうしんとう",
				  "しんらつ","どうもう","あくせく","あんど","けいべつ",
				  "まつえい","ごようたし","さっそう","やじ","さいさき",
				  "とうた","ばってき","ぼんのう","りょうらん","ろうばい",
				  "ちょうだい","ぼうぜん","こんりゅう","まんえん","けんらん",
				  "こうちゃく","かそせい","さつりく","しこう","ふくしゅう",
				  "けっこん","がいこつ","ずさん","ばんさん","ちゆ");