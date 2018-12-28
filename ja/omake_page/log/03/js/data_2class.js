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

QUESTION_STR[0][0] = '<h4 style="padding:20px">[二] 次の漢字を<u>平仮名で(送り仮名も含めて)</u>答えなさい。（5点×10問）</h4>';

KANJI[0][0] = new Array("鼷（6文字）","珠穆朗瑪","皮卡丘","枉（6文字）","棍（5文字）",
				  "綦（5文字）","恁（5文字）","緝く","厶る","丨く","丨む",
				  "風（4文字）","鱏","対（4文字）","里（4文字）","粉（6文字）",
				  "泉海魚","乙醇","魵","蛞（7文字）","鮦","鈣","莠（6文字）");

YOMI[0][0] = new Array("はつかねずみ","ちょもらんま","ぴかちゅう","むじつのつみ","ならずもの",
				  "もえぎいろ","このような","ひかりかがやく","ござる","しりぞく","すすむ",
				  "ならわし","えい","つれあい","みちのり","でしめーとる",
				  "うなぎ","えたのーる","えび","おたまじゃくし","かつお","かるしうむ","ねこじゃらし");

// Q2

QUESTION_STR[1][0] = '<h4 style="padding:20px">[二] 次の人名を<u>カタカナで</u>答えなさい。（5点×10問）</h4>';

KANJI[1][0] = new Array("耶蘇","易卜生","愛迪生","思格尓","康徳",
				  "居利","克利奥佩特剌","格勒格力","歌白尼","閣龍",
				  "沙翁","叔伯特","勺旁","斯達林","但丁",
				  "卓別麟","成吉思汗","丁尼生","那波列翁","尼通",
				  "保羅","巴哈","福特","佛蘭格林","倍根",
				  "貝多芬","伯理","麦唐納","馬哈黙","馬克斯",
				  "密爾敦","梅特林克","門得尓","摩西","莫差特",
				  "孟徳斯鳩","約色弗","林肯","列寧","瓦格納",
				  "瓦的");

YOMI[1][0] = new Array("イエス","イプセン","エジソン","エンゲルス","カント",
				  "キュリー","クレオパトラ","グレゴリー","コペルニクス","コロンブス",
				  "シェークスピア","シューベルト","ショパン","スターリン","ダンテ",
				  "チャップリン","チンギスハン","テニソン","ナポレオン","ニュートン",
				  "パウロ","バッハ","フォード","フランクリン","ベーコン",
				  "ベートーベン","ペリー","マクドナルド","マホメット","マルクス",
				  "ミルトン","メーテルリンク","メンデル","モーセ","モーツァルト",
				  "モンテスキュー","ヨセフ","リンカーン","レーニン","ワグナー",
				  "ワット");
