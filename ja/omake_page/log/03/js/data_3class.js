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

QUESTION_STR[0][0] = '<h4 style="padding:20px">[一] 次の虫を表す漢字を<u>平仮名で</u>答えなさい。（3点×10問）</h4>';

KANJI[0][0] = new Array("蠹魚","吉丁虫","水黽","白灯蛾",
				  "笄蛭","叩頭虫","長吻虻","天蛾",
				  "豹脚蚊","鼠姑","螽","小灰蝶",
				  "蟾蜍","蝌蚪","蠹","黽","蠖",
				  "蚊蜻蛉","寒蝉","鼓豆虫","蟇子");

YOMI[0][0] = new Array("しみ","たまむし","あめんぼ","しろひとり",
				  "こうがいびる","こめつきむし","つりあぶ","すずめが",
				  "やぶか","わらじむし","いなご","しじみちょう",
				  "ひきがえる","おたまじゃくし","きくいむし:しみ","あおがえる","しゃくとりむし",
				  "うすばかげろう","つくつくぼうし","みずすまし","ぶゆ：ぶよ");

QUESTION_STR[0][1] = '<h4 style="padding:20px">[一] 次の魚介類を表す漢字を<u>平仮名で</u>答えなさい。（3点×10問）</h4>';

KANJI[0][1] = new Array("青蝦","青竜蝦","章魚","蚌","老海鼠",
				  "梭尾螺","蟶貝","鯯","鯢","魹",
				  "鯧","鱷","銀口魚","琵琶魚","鱏",
				  "王余魚","鼠頭魚","三文魚","馬鮫魚","鬼頭魚",
				  "犁頭魚","松江魚","魚虎","金鎗魚","丁斑魚",
				  "霊螺子","硴","十脚","海燕");

YOMI[0][1] = new Array("しばえび","しゃこ","たこ","はまぐり","ほや",
				  "ほらがい","まてがい","このしろ","さんしょううお","とど",
				  "まながつお","わに","あゆ","あんこう","えい",
				  "かれい","きす","さけ","さわら","しいら",
				  "しゅもくざめ","すずき","はりせんぼん","まぐろ","めだか",
				  "うに","かき","さくらえび","たこのまくら");

// Q2

QUESTION_STR[1][0] = '<h4 style="padding:20px">[二] 次の漢字を<u>訓読みで(送り仮名も含めて)</u>答えなさい。（3点×10問）</h4>';

KANJI[1][0] = new Array("嗇か","咫い","尸る","曩に",
				  "殯","爨ぐ","纛","罕に","羸れる","麤しい",
				  "肆","徊う","讒う","贅な","齲","纜",
				  "絮","亟","孼い","壎","丐","蝟",
				  "仍に","犢","冤","誄","誣る",
				  "蘞い","醢汁","扈る","遑しい","闃か",
				  "丕きい","倪","囹","售る","庠",
				  "翹てる","聿い","熙ぶ","齦","糴",
				  "齬う","糵","笨な","皁い","黜ける",
				  "麑");

YOMI[1][0] = new Array("やぶさか","ちかい:みじかい","つかさどる","さきに",
				  "かりもがり","かしぐ","はたぼこ","まれに","つかれる","あらあらしい",
				  "ほしいまま","さまよう","へつらう","よけいな","むしば","ともづな",
				  "わたいれ:わた","しばしば","わざわい","つちぶえ","こじき","はりねずみ",
				  "しきりに","こうし","ぬれぎぬ:あだ","しのびごと:いのりごと","そしる",
				  "えぐい","しょっつる","はびこる","あわただしい","しずか",
				  "おおきい","ながしめ:きわ","ひとや","うる","まなびや",
				  "つまだてる","すばやい","よろこぶ","はぐき","かいよね:いりよね",
				  "くいちがう","もやし:こうじ","そまつな","くろい","しりぞける",
				  "かのこ");

// Q3

QUESTION_STR[2][0] = '<h4 style="padding:20px">[三] 次の熟語の読みを<u>音読みで</u>答えなさい。（3点×10問）</h4>';

KANJI[2][0] = new Array("丫髻","丕図","麕集","冉冉",
				  "咫尺","自售","嫩葉","已己巳己","秉彝",
				  "撫恤","愆尤","懋績","瀛海","倏忽",
				  "貧窶","糴糶","縹緲","大纛","羸瘦",
				  "耋艾","垢膩","芟除","朶頤",
				  "覬覦","忠謇","贏輸","赧然",
				  "醯醢","韜略","餒虎","円顱","庠序",
				  "飫聞","髫齔","鹵莽","黜陟","耿然",
				  "壎篪","熙笑","鼕鼕","齲歯","孑孒");

YOMI[2][0] = new Array("あけい","ひと","くんしゅう","ぜんぜん",
				  "しせき","じしゅう","どんよう","いこみき","へいい",
				  "ぶじゅつ","けんゆう","ぼうせき","えいかい","しゅっこつ",
				  "ひんく","ちょうてき","ひょうびょう","だいとう","るいそう",
				  "てつがい","こうじ","さんじょ:せんじょ","だい",
				  "きゆ","ちゅうけん","えいゆ:えいしゅ","たんぜん",
				  "けいかい","とうりゃく","だいこ","えんろ","しょうじょ",
				  "よぶん","ちょうしん","ろもう","ちゅっちょく","こうぜん",
				  "けんち","きしょう","とうとう","うし:くし","けっきょう");

// Q4

QUESTION_STR[3][0] = '<h4 style="padding:20px">[一] 次の都市名を表す漢字を<u>カタカナで</u>答えなさい。（2点×5問）</h4>';

KANJI[3][0] = new Array("雅典","亜馬生","亜武的達","阿羅斯加","阿爾卑斯",
				  "亜歴山特","英蘭","維納","牛津","鄂霍次克",
				  "改羅","加里保爾尼","甲谷佗","瓜姆","格林威治",
				  "角布","剣橋","高加索","戈壁","古倫母",
				  "君府","撒哈拉","聖市","桑港","舎路",
				  "悉徳尼","爪哇","寿府","蘇素","蘇格蘭",
				  "士篤恒","聖路易","得撒","多倫多","新英土",
				  "紐瀬流","紐育","報達","聖林","布哇",
				  "晩克坡","漢堡","喜馬拉雅","費府","倍諾愛勒",
				  "佛羅里達","伯林","澳門","馬徳里","馬耳塞",
				  "曼澈斯特","米西西皮","閔行","莫斯科","欧羅巴",
				  "羅馬","羅府","路照","倫敦","華盛頓");

YOMI[3][0] = new Array("アテネ","アマゾン","アムステルダム","アラスカ","アルプス",
				  "アレクサンドリア","イングランド","ウィーン:ウイーン","オックスフォード","オホーツク",
				  "カイロ","カリフォルニア","カルカッタ","グアム","グリニッジ",
				  "ケープタウン","ケンブリッジ","コーカサス","ゴビ","コロンボ",
				  "コンスタンチノープル","サハラ","サンパウロ","サンフランシスコ","シアトル",
				  "シドニー","ジャワ","ジュネーブ","スエズ","スコットランド",
				  "ストックホルム","セントルイス","テキサス","トロント","ニューイングランド",
				  "ニュージャージー","ニューヨーク","バグダッド","ハリウッド","ハワイ",
				  "バンクーバー","ハンブルク","ヒマラヤ","フィラデルフィア","ブエノスアイレス",
				  "フロリダ","ベルリン","マカオ","マドリード","マルセイユ",
				  "マンチェスター","ミシシッピ","ミュンヘン","モスクワ","ヨーロッパ",
				  "ローマ","ロサンゼルス","ロッテルダム","ロンドン","ワシントン");