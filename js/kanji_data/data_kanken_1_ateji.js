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

const KANKEN = "1_ateji";
const KENTEI_NAME = "当て字(漢検１級)";
const FILE_NAME = "kanken_1_ateji"; // 「○○.html」などで使用
const GENRE = [["当て字", "外国地名"]];
const GENRE_EN = ["ateji", "gaikoku"];
const Q_NUM = [20, 20, 10]; // 大問ごとの問題数
const UNIT_SCORE = [2, 2, 2]; // 大問ごとにおける一問正解の配点
const MAX_SCORE = 100; // 満点
const GOKAKU_SCORE = 90; // 合格点

let QUESTION_STR = new Array(); // 問題文＋配点
let DATA = new Array(); // 出題漢字,正解

// 多次元配列の生成
for (let i=0; i<10; i++) {
	QUESTION_STR[i] = new Array();
	DATA[i] = new Array();
}

QUESTION_STR[0] = "次の熟字訓・当て字の読みを答えなさい。"

DATA[0][0] = new Array(
	["膃肭臍", "オットセイ"],
	["燐寸", "マッチ"],
	["花楸樹", "ななかまど"],
	["角鴟", "みみずく"],
	["醤蝦(「糠蝦」とも)", "あみ"],
	["秧鶏", "くいな"],
	["蛞蝓", "なめくじ"],
	["金縷梅", "まんさく"],
	["鹿驚", "かかし"],
	["稚鰤", "わらさ"],
	["下風", "おろし"],
	["凌霄花", "のうぜんかずら,のうぜんか,のうぜん"],
	["水蠆", "やご,やまめ"],
	["海鷂魚", "えい"],
	["洋墨", "インク,インキ"],
	["雪花菜", "おから,きらず"],
	["木天蓼", "またたび"],
	["零余子", "むかご,ぬかご"],
	["山毛欅", "ぶな"],
	["響尾蛇", "がらがらへび"],
	["蝙蝠", "こうもり"],
	["蝌蚪", "おたまじゃくし"],
	["羊栖菜", "ひじき"],
	["釦鈕", "ボタン"],
	["不如帰", "ほととぎす"],
	["蹈鞴(「踏鞴」とも)", "たたら"],
	["紫丁香花", "ライラック,リラ"],
	["罌粟", "けし"],
	["油漆", "ペンキ,ペイント"],
	["海獺", "らっこ"],
	["虎魚", "おこぜ"],
	["杜若", "かきつばた"],
	["坩堝", "るつぼ"],
	["三鞭酒", "シャンパン,シャンペン"],
	["海鼠腸", "このわた"],
	["牽牛花", "あさがお"],
	["洋琴", "ピアノ"],
	["顳顬(「蟀谷」とも)", "こめかみ"],
	["蜚蠊", "ごきぶり,あぶらむし"],
	["猟虎", "らっこ"],
	["羚羊", "かもしか"],
	["海盤車", "ひとで"],
	["弥撒", "ミサ"],
	["柳葉魚", "ししゃも"],
	["塘蒿", "セロリ"],
	["辛夷", "こぶし"],
	["土瀝青", "アスファルト"],
	["長尾驢", "カンガルー"],
	["樹懶", "なまけもの"],
	["蚯蚓", "みみず"],
	["玉蜀黍", "とうもろこし"],
	["鹿尾菜", "ひじき"],
	["寄生木", "やどりぎ"],
	["賽子(「骰子」とも)", "さい,さいころ"],
	["慈姑", "くわい"],
	["鳶尾", "いちはつ"],
	["矮鶏", "チャボ"],
	["珠鶏", "ほろほろちょう"],
	["沢瀉", "おもだか"],
	["通条花", "きぶし"],
	["雲母", "きらら"],
	["洋傘(「パラソル」は漢検範囲外)", "こうもり"],
	["塵芥虫", "ごみむし"],
	["歩行虫", "おさむし,ごみむし"],
	["破落戸(「無頼」とも)", "ごろつき"],
	["洋刀(「無剣」とも)", "サーベル"],
	["茶梅", "さざんか"],
	["髑髏", "しゃれこうべ,されこうべ"],
	["馬鮫魚", "さわら"],
	["勒魚", "しいら"],
	["静寂(「無言」とも)", "しじま"],
	["玉蕈", "しめじ"],
	["初中後", "しょっちゅう"],
	["醢汁(「塩汁」とも)", "しょっつる"],
	["絡新婦", "じょろうぐも"],
	["素面(「白面」とも)", "しらふ"],
	["角力", "すもう"],
	["雪踏", "せった"],
	["内障", "そこひ"],
	["微風", "そよかぜ"],
	["冬青", "そよご"],
	["幫間", "たいこもち"],
	["手弱女", "たおやめ"],
	["鉄刀木", "たがやさん"],
	["山車", "だし"],
	["草石蚕", "ちょろぎ"],
	["寒蝉", "つくつくぼうし"],
	["吉丁虫", "たまむし"],
	["楽車", "だんじり"],
	["手斧", "ちょうな"],
	["一寸", "ちょっと"],
	["海螺", "つぶ"],
	["飛礫", "つぶて"],
	["心算", "つもり"],
	["雀鷹(「雀鷂」とも)", "つみ"],
	["紡錘", "つむ"],
	["黴雨", "つゆ"],
	["回青橙", "だいだい"],
	["長吻虻", "つりあぶ"],
	["天蚕糸", "てぐす"],
	["瓊脂", "ところてん"],
	["桃花鳥", "とき"],
	["蜷局", "とぐろ"],
	["鶏冠", "とさか"],
	["七葉樹", "とち"],
	["把手", "とって"],
	["舎人", "とねり"],
	["海桐花", "とべら"],
	["黄蜀葵(「黄葵」とも)", "とろろあおい"],
	["等閑", "なおざり"],
	["就中", "なかんずく"],
	["眉尖刀", "なぎなた"],
	["余波", "なごり"],
	["竹節虫", "ななふし"],
	["蝸螺", "にな"],
	["接骨木", "にわとこ"],
	["射干玉(「野干玉」とも)", "ぬばたま"],
	["盗汗", "ねあせ"],
	["杜松", "ねず"],
	["高襟", "ハイカラ"],
	["首途", "かどで"],
	["蕃瓜樹", "パパイア"],
	["莎草", "かやつりぐさ,ささめ,はますげ"],
	["玫瑰", "はまなす"],
	["竹根蛇", "ひばかり"],
	["檜皮", "ひわだ"],
	["家猪", "ぶた"],
	["番瀝青", "ペンキ"],
	["竹麦魚", "ほうぼう"],
	["鉄脚梨", "ぼけ"],
	["乾鰯", "ほしか"],
	["乾海鼠", "ほしこ"],
	["油点草", "ほととぎす"],
	["梭尾螺", "ほらがい"],
	["喞筒", "ポンプ"],
	["蝸牛被", "まいまいかぶり"],
	["密夫", "まおとこ"],
	["海人草(「海仁草」とも)", "まくり"],
	["擬宝珠", "ぎぼし,ぎぼうし"],
	["股座", "またぐら"],
	["団居(「円居」とも)", "まどい"],
	["虎子", "まる"],
	["針孔", "めど,みず"],
	["鼓虫(「鼓豆虫」とも)", "みずすまし"],
	["壬生菜", "みぶな"],
	["海松布", "みるめ"],
	["海布", "め"],
	["繍眼児", "めじろ"],
	["赤目魚", "めなだ"],
	["磯蚯蚓", "いそめ"],
	["没分暁漢", "わからずや"],
	["晩生(「晩稲」とも)", "おくて"],
	["豆腐皮", "ゆば"],
	["蚊母鳥", "よたか"],
	["噯気", "おくび"],
	["鶏児腸", "よめな"],
	["円座", "わろうだ"],
	["方頭魚", "かながしら"],
	["東風", "こち"],
	["袋鼠", "カンガルー"],
	["気障", "きざ"],
	["泡糖", "カルメラ"],
	["海石榴", "つばき"],
	["山茶", "つばき"],
	["早生(「早稲」とも)", "わせ"],
	["聒聒児", "くつわむし"],
	["遠近", "おちこち"],
	["二合半", "こなから"],
	["鶏冠木", "かえで"],
	["天牛", "かみきり,かみきりむし"],
	["梭魚(「梭子魚」とも)", "かます"],
	["大角豆", "ささげ,ささぎ"],
	["鬼蜻蜓", "おにやんま"],
	["土竜", "もぐら"],
	["殺陣", "たて"],
	["合歓", "ねむ,ねむのき,ねぶ,ねぶのき"],
	["苜蓿", "うまごやし"],
	["翻車魚", "まんぼう,まんぼうざめ,うきぎ"],
	["蟋蟀", "こおろぎ"],
	["水鶏", "くいな"],
	["蜥蜴", "とかげ"],
	["飯匙倩", "はぶ"],
	["虎杖", "いたどり"],
	["繁縷", "はこべ,はこべら"],
	["鬼灯", "ほおずき"],
	["海鞘", "ほや"],
	["浮塵子", "うんか"],
	["蟒蛇", "うわばみ"],
	["木乃伊", "ミイラ"],
	["掏摸(「掏児」とも)", "すり"],
	["金海鼠", "きんこ"],
	["葛籠", "つづら"],
	["梅花皮", "かいらぎ"],
	["赤楝蛇(「山楝蛇」とも)", "やまかがし"],
	["鹹草", "あしたば"],
	["番紅花", "サフラン"],
	["蠑螈", "いもり"],
	["沓手鳥", "ほととぎす"],
	["磯魚", "いさな"],
	["白地", "あからさま"],
	["細魚(「針魚」とも)", "さより"],
	["驀地", "まっしぐら"],
	["飛白", "かすり"],
	["覆盆子", "いちご"],
	["酸漿", "ほおずき"],
	["気質", "かたぎ"],
	["王余魚", "かれい"],
	["蜉蝣", "かげろう"],
	["海驢", "あしか"],
	["螽斯", "きりぎりす"],
	["蕃椒", "とうがらし"],
	["虎耳草", "ゆきのした"],
	["洋酒", "ジン"],
	["羊歯", "しだ"],
	["老海鼠", "ほや"],
	["角子(「角髪」とも)", "みずら"],
	["総角", "あげまき"],
	["雨虎", "あめふらし"],
	["熬海鼠", "いりこ"],
	["病葉", "わくらば"],
	["百舌(「百舌鳥」とも)", "もず"],
	["木賊", "とくさ"],
	["山葵", "わさび"],
	["水母", "くらげ"],
	["似非(「似而非」とも)", "えせ"],
	["朱鷺", "とき"],
	["独活", "うど"],
	["終日", "ひねもす,ひもすがら"],
	["終夜", "よもすがら"],
	["雀斑", "そばかす"],
	["未通女", "おぼこ"],
	["海豹(「水豹」とも)", "あざらし"],
	["栄螺(「拳螺」とも)", "さざえ"],
	["蒲公英", "たんぽぽ"],
	["躑躅", "つつじ"],
	["飛蛩", "いなご"],
	["飛蝗(「蝗虫」とも)", "ばった"],
	["柘榴(「石榴」とも)", "ざくろ"],
	["蕪菁", "かぶ,かぶら"],
	["斑鳩", "いかる,いかるが"],
	["風信子", "ヒヤシンス"],
	["胡桃(「山胡桃」とも)", "くるみ"],
	["草鞋", "わらじ"],
	["鼴鼠", "もぐら"],
	["向日葵", "ひまわり"],
	["木偶", "でく"],
	["産土", "うぶすな"],
	["山梔子(「梔子・卮子」とも)", "くちなし"],
	["鵁鶄", "ごいさぎ"],
	["壁虎", "やもり"],
	["海胆(「海栗」とも)", "うに"],
	["囈語(「譫言」とも)", "うわごと"],
	["鱲子", "からすみ"],
	["鷦鷯", "みそさざい"],
	["雲脂(「頭垢」とも)", "ふけ"],
	["橄欖", "オリーブ"],
	["莫大小", "メリヤス"],
	["胡頽子(「茱萸」とも)", "ぐみ"],
	["蚰蜒", "げじげじ,げじ"],
	["香蕈", "しいたけ"],
	["石斑魚", "うぐい"],
	["公孫樹", "いちょう"],
	["蕁麻", "いらくさ"],
	["石決明", "あわび"],
	["翻筋斗", "もんどり"],
	["含嗽", "うがい"],
	["衣魚(「紙魚」とも)", "しみ"],
	["汗疹(「汗肬」とも)", "あせも"],
	["縹緻", "きりょう"],
	["瞿麦", "なでしこ"],
	["文身", "いれずみ"],
	["眩暈", "めまい"],
	["玄鳥(「乙鳥」とも)", "つばめ"],
	["馬酔木", "あせび,あしび"],
	["燭魚(「雷魚」とも)", "はたはた"],
	["黄楊(「柘植」とも)", "つげ"],
	["杜鵑", "ほととぎす"],
	["金雀児(「金雀枝」とも)", "エニシダ"],
	["胡蜂", "すずめばち"],
	["枸橘(「枳殻」とも)", "からたち,からたちばな"],
	["羅漢柏", "あすなろ,あすはひのき"],
	["鼯鼠", "むささび,ももんが"],
	["大蒜", "にんにく"],
	["鮎魚女", "あいなめ"],
	["冬眠鼠", "やまね"],
	["後朝", "きぬぎぬ"],
	["蟷螂", "かまきり"],
	["通草(「木通」とも)", "あけび"],
	["海蘊(「海雲」とも)", "もずく"],
	["壁蝨", "だに"],
	["車前草", "おおばこ"],
	["裲襠", "うちかけ"],
	["甜瓜", "まくわうり,まくわ"],
	["螻蛄", "けら"],
	["木槿", "むくげ,もくげ"],
	["発条(「撥条」とも)", "ばね,ぜんまい"],
	["弾機", "ばね"],
	["朱欒(「香欒」とも)", "ザボン"],
	["筆頭菜", "つくし"],
	["山桜桃", "ゆすらうめ"],
	["蟾蜍", "ひき,ひきがえる,がま,がまがえる"],
	["善知鳥", "うとう"],
	["椿象", "かめむし,くさむし"],
	["金糸雀", "カナリア"],
	["鶤鶏", "しゃも,とうまる"],
	["蛤仔", "あさり"],
	["孑孒(「孑孑」とも)", "ぼうふら"],
	["天糸瓜(「糸瓜」とも)", "へちま"],
	["以来", "このかた"],
	["蜀魂", "ほととぎす"],
	["忍冬(「荵冬」とも)", "すいかずら"],
	["紙縒(「紙撚」とも)", "こより"],
	["熨斗", "のし"],
	["壁虎", "やもり"],
	["石竜子", "とかげ"],
	["天鵞絨", "ビロード"],
	["三和土", "たたき"],
	["魚籠", "びく"],
	["卓袱台", "ちゃぶだい"],
	["鞦韆", "ぶらんこ"],
	["虎落", "もがり"],
	["面皰", "にきび"],
	["海狸", "ビーバー"],
	["皁莢", "さいかち"],
	["満天星", "どうだん,どうだんつつじ"],
	["海扇", "ほたてがい"],
	["澪標", "みおつくし,みおじるし"],
	["麺麭", "パン"],
	["八仙花", "あじさい"],
	["沙蚕", "ごかい"],
	["褞袍(「縕袍」とも)", "どてら"],
	["地楡", "われもこう"],
	["九十九折", "つづらおり"],
	["木菟", "みみずく,ずく"],
	["胡籙", "やなぐい"],
	["四阿", "あずまや"],
	["鉄漿", "おはぐろ,かね"],
	["鳩尾", "みぞおち,みずおち"],
	["紅娘", "てんとうむし"],
	["綜麻", "へそ"],
	["埋葬虫", "しでむし"],
	["黒海布", "くろめ"],
	["白頭鳥", "ひよどり"],
	["甘露子", "ちょろぎ"],
	["可惜", "あたら"],
	["髪菜", "いぎす"],
	["仏掌薯", "つくねいも"],
	["急度", "きっと"],
	["汗衫", "かざみ"],
	["科白", "せりふ"]
);

DATA[0][1] = new Array(
	["敵娼", "あいかた"],
	["緑啄木鳥", "あおげら"],
	["水綿", "あおみどろ"],
	["満江紅", "あかうきくさ"],
	["怪鴟", "よたか"],
	["地血", "あかね"],
	["柳葉菜", "あかばな"],
	["明衣", "あかは,あかはとり"],
	["榔楡", "あきにれ"],
	["盤領", "あげくび"],
	["丁翁", "あけび"],
	["白辛樹", "あさがら"],
	["土常山", "あまちゃ"],
	["絞股藍", "あまちゃづる"],
	["山慈姑", "あまな"],
	["紫菜", "あまのり"],
	["大葉藻", "あまも"],
	["退紅", "あらぞめ"],
	["苞苴", "つと,あらまき"],
	["金線魚(「金糸魚」とも)", "いとよりだい"],
	["土荊芥", "ありたそう"],
	["欠唇(「兎唇」とも)", "いぐち"],
	["大角草", "いささぐさ"],
	["茅膏菜", "いしもちそう"],
	["蚊母樹", "いすのき"],
	["縮縫", "いせ"],
	["木蓮子", "いたび"],
	["赤檮", "いちい"],
	["鱏鰉魚", "ちょうざめ"],
	["裙蔕菜", "わかめ"],
	["神巫", "いちこ"],
	["鴟尾草", "いちはつ"],
	["黄麻", "いちび,つなそ"],
	["鹿蹄草", "いちやくそう"],
	["磚子苗", "いぬくぐ"],
	["仙毛欅", "いぬぶな"],
	["羅漢松", "いぬまき"],
	["水蠟樹", "いぼたのき"],
	["斥候", "うかみ"],
	["泛子", "うき"],
	["五加(「五加木」とも)", "うこぎ"],
	["楊櫨木", "うつぎ"],
	["現人", "うつせみ"],
	["猪籠草", "うつぼかずら"],
	["土当帰", "うど,のだけ"],
	["連銭草", "かきどおし"],
	["連枝草", "うまごやし"],
	["落霜紅", "うめもどき"],
	["白梨樹", "うらじろのき"],
	["後妻(「次妻」とも)", "うわなり"],
	["胞衣", "えな"],
	["黄心樹", "おがたまのき"],
	["珍珠菜", "おかとらのお"],
	["珍珠花", "ゆきやなぎ"],
	["麻幹", "おがら"],
	["清器", "おかわ"],
	["尺蠖", "おぎむし,(しゃくとりむし)"],
	["金沸草", "おぐるま"],
	["旋覆花", "おぐるま"],
	["江籬", "おごのり"],
	["前胡", "のだけ"],
	["紫茉莉", "おしろいばな"],
	["海狗", "おっとせい"],
	["小連翹", "おとぎりそう"],
	["敗醬", "おとこえし"],
	["野芝麻", "おどりこそう"],
	["荊棘", "おどろ"],
	["牛筋草", "おひしば"],
	["紅樹", "おひるぎ"],
	["花仙", "かいどう"],
	["槭樹", "かえで"],
	["馬蹄草", "かきどおし"],
	["火光", "かぎろい"],
	["杜夫魚", "かくぶつ"],
	["水夫(「水手」とも)", "かこ"],
	["金襖子", "かじかがえる"],
	["搗布", "かじめ"],
	["黄鶏", "かしわ"],
	["石陰子", "かせ"],
	["鳩酸草", "かたばみ"],
	["火魚", "かながしら"],
	["蛇舅母", "かなへび"],
	["海金砂", "かにくさ"],
	["擬蠍", "かにむし"],
	["慈鳥", "からす"],
	["青茅", "かりやす"],
	["甲乙(「上下」とも)", "かるめる"],
	["土器", "かわらけ"],
	["杜衡", "かんあおい"],
	["惟神(「随神」とも)", "かんながら"],
	["貫木", "かんぬき"],
	["懸鉤子", "きいちご"],
	["細螺(「扁螺」とも)", "きさご"],
	["長寿花", "きずいせん"],
	["半銭(「寸半」とも)", "きなか"],
	["仙人帽", "きぬがさたけ"],
	["独脚蜂", "きばち"],
	["旌節花", "きぶし"],
	["木五倍子", "きぶし"],
	["紫萼", "ぎぼうし"],
	["光参", "きんこ"],
	["紅南瓜", "きんとうが"],
	["蒟醬", "キンマ"],
	["威霊仙", "くがいそう"],
	["傀儡(「傀儡子」とも)", "くぐつ"],
	["白屈菜", "くさのおう"],
	["黄連花", "くされだま"],
	["香橘", "くねんぼ"],
	["山白竹", "くまざさ"],
	["馬鞭草", "くまつづら"],
	["山藤(「蛇藤」とも)", "くまやなぎ"],
	["苦参", "くらら"],
	["呉桃", "くるみ"],
	["蔵人", "くろうど,くらんど"],
	["桄榔(「桄榔子」とも)", "くろつぐ"],
	["海神(「海若」とも)", "わたつみ,わだつみ"],
	["烏樟(「鉤樟」とも)", "くろもじ"],
	["烏芋", "くわい"],
	["野蚕", "くわご"],
	["合子草", "ごきづる"],
	["烏木", "こくたん"],
	["越橘", "こけもも"],
	["金漆", "こしあぶら"],
	["帯下", "こしけ"],
	["瞽女", "ごぜ"],
	["鴨舌草", "こなぎ"],
	["鴨跖草", "つゆくさ"],
	["小水葱", "こなぎ"],
	["木末", "こぬれ"],
	["海鼠子", "このこ"],
	["玄参(「黒参」とも)", "ごまのはぐさ"],
	["兄鷂", "このり"],
	["野鴉椿", "ごんずい"],
	["楊桐", "さかき"],
	["月額(「月代」とも)", "さかやき"],
	["三毬杖", "さぎちょう"],
	["粟米草", "ざくろそう"],
	["青箭魚", "さごし"],
	["小竹", "ささ"],
	["胡銅器(「響銅」とも)", "さはり"],
	["松蘿", "さるおがせ"],
	["怕痒樹", "さるすべり"],
	["紫薇", "さるすべり"],
	["胡孫眼", "さるのこしかけ"],
	["山梗葉", "さわぎきょう"],
	["寿光木", "さわぐるみ"],
	["花柏", "さわら"],
	["弱檜", "さわら"],
	["牛尾菜", "しおで"],
	["望潮", "しおまねき"],
	["竜爪稗", "しこくびえ"],
	["小灰蝶", "しじみちょう"],
	["笑靨花", "しじみばな"],
	["上枝", "ほつえ"],
	["下枝", "しずえ"],
	["鞋底魚", "したびらめ"],
	["吐綬鶏", "しちめんちょう"],
	["胡蝶花", "しゃが"],
	["南燭", "しゃしゃんぼ"],
	["天社蛾", "しゃちほこが"],
	["沿階草", "じゃのひげ"],
	["白及", "しらん"],
	["挙尾虫", "しりあげむし"],
	["後方", "しりえ"],
	["首級", "しるし"],
	["白灯蛾", "しろひとり"],
	["瑞香", "じんちょうげ"],
	["接続草", "すぎな"],
	["問荊", "すぎな"],
	["酸塊", "すぐり"],
	["従者", "ずさ"],
	["生絹", "すずし"],
	["天蛾", "すずめが"],
	["看麦娘", "すずめのてっぽう"],
	["棠梨", "ずみ"],
	["石花", "せ,(かき)"],
	["傴僂", "せむし,くぐせ"],
	["鬼鍼草", "せんだんぐさ"],
	["剪秋羅", "せんのう"],
	["当薬", "せんぶり"],
	["紫萁", "ぜんまい"],
	["若干", "そこばく,そくばく"],
	["雀卵斑", "そばかす"],
	["征箭(「征矢」とも)", "そや"],
	["洋玉蘭", "たいさんぼく"],
	["大芥菜", "たかな"],
	["担桶", "たご"],
	["栄蘭", "たこのき"],
	["海燕", "たこのまくら"],
	["生計(「方便」とも)", "たつき,たずき"],
	["裁着(「裁衣」とも)", "たっつけ"],
	["水豆児", "たぬきも"],
	["玉環菜", "ちょろぎ"],
	["海鏡", "つきひがい"],
	["不知不識", "しらずしらず"],
	["狗尾草", "えのころぐさ"],
	["狼尾草", "ちからしば"],
	["金粟蘭", "ちゃらん"],
	["水甘草", "ちょうじそう"],
	["江浦草", "つくも"],
	["地錦", "つた"],
	["山珊瑚", "つちあけび"],
	["蛇菰", "つちとりもち"],
	["酸棗", "さねぶとなつめ"],
	["瀉腹", "くだりばら"],
	["地胆", "つちはんみょう"],
	["防已", "つづらふじ"],
	["鴾毛", "つきげ"],
	["海嘯", "つなみ"],
	["光桃(「油桃」とも)", "つばいもも"],
	["菜瓜", "つけうり"],
	["四照花", "やまぼうし"],
	["鷸子", "つぶり"],
	["何首烏", "つるどくだみ"],
	["羊乳", "つるにんじん"],
	["槓杆", "てこ"],
	["勾欄", "てすり"],
	["草蝦", "てながえび"],
	["石花菜", "てんぐさ"],
	["偽瓢虫", "てんとうむしだまし"],
	["三角楓", "とうかえで"],
	["左右", "とかく"],
	["蝘蜓", "とかげ"],
	["鯨波", "とき"],
	["秦皮", "とねりこ"],
	["宿直", "とのい"],
	["金線蛙", "とのさまがえる"],
	["点火", "とぼし"],
	["草烏頭", "とりかぶと"],
	["野老", "ところ"],
	["菜椿象(「菜亀虫」とも)", "ながめ"],
	["水葱", "なぎ"],
	["竹柏", "なぎ"],
	["山芹菜", "なべな"],
	["続断", "なべな"],
	["常歩", "なみあし"],
	["黄精", "なるこゆり"],
	["苦棟樹", "にがき"],
	["黄瓜菜", "にがな"],
	["滷汁", "にがり"],
	["郁李", "にわうめ"],
	["胡蘿蔔", "にんじん"],
	["叩頭虫", "ぬかずきむし"],
	["烏珠(「烏玉」とも)", "ぬばたま"],
	["女貞", "ねずみもち"],
	["仰領", "のけくび"],
	["和尚菜", "のぶき"],
	["山石榴", "のぼたん"],
	["生血", "のり"],
	["偃松", "はいまつ"],
	["胡枝子(「胡枝花」とも)", "はぎ"],
	["玉鈴花", "はくうんぼく"],
	["六月雪", "はくちょうげ"],
	["雁来紅", "はげいとう"],
	["錦帯花", "はこねうつぎ"],
	["白楊", "はこやなぎ"],
	["虎茄", "はしりどころ"],
	["黄櫨", "はぜのき"],
	["青頭菌", "はつたけ"],
	["紫荊", "はなずおう"],
	["知母", "はなすげ"],
	["牛縻", "はなづら"],
	["鼠麴草", "ははこぐさ"],
	["蔓荊", "はまごう"],
	["黄槿", "はまぼう"],
	["文珠蘭", "はまゆう"],
	["馬銜", "はみ"],
	["金花虫", "はむし"],
	["一葉", "はらん"],
	["三白草", "はんげしょう"],
	["廂間", "ひあわい"],
	["枸榾", "ひいらぎ"],
	["射干", "ひおうぎ"],
	["石蒜", "ひがんばな"],
	["陰行草", "ひきよもぎ"],
	["睡蓮", "ひつじぐさ"],
	["睡菜", "みつがしわ"],
	["石韋", "ひとつば"],
	["山丹", "ひめゆり"],
	["神籬", "ひもろぎ"],
	["檜柏", "びゃくしん"],
	["金糸桃", "びようやなぎ"],
	["顋門", "ひよめき"],
	["曹白魚", "ひら"],
	["鼓子花(「旋花」とも)", "ひるがお"],
	["眼子菜", "ひるむしろ"],
	["蒲葵", "びろう"],
	["金翅雀", "ひわ"],
	["白花菜", "ふうちょうそう"],
	["款冬", "ふき,やまぶき"],
	["酔魚草", "ふじうつぎ"],
	["五倍子", "ふし"],
	["蘭草", "ふじばかま"],
	["鵲豆", "ふじまめ"],
	["及己", "ふたりしずか"],
	["恭菜", "ふだんそう"],
	["女青", "へくそかずら"],
	["牛皮凍", "へくそかずら"],
	["巻子", "へそ"],
	["靫負", "ゆげい"],
	["染指草", "ほうせんか"],
	["行器", "ほかい"],
	["山小菜", "ほたるぶくろ"],
	["人面竹", "ほていちく"],
	["塊芋(「土芋」とも)", "ほど"],
	["元宝草", "ほとけのざ"],
	["斑杖", "まむしぐさ"],
	["三稜草(「黒三稜」とも)", "みくり"],
	["浮薔", "みずあおい"],
	["金線草", "みずひき"],
	["巧婦鳥", "みそさざい"],
	["千屈菜", "みそはぎ"],
	["扁柏", "ひのき"],
	["野蜀葵", "みつば"],
	["省沽油", "みつばうつぎ"],
	["黄瑞香", "みつまた"],
	["益母草", "めはじき"],
	["船首", "みよし"],
	["野木瓜(「郁子」とも)", "むべ"],
	["鉄掃箒", "めどはぎ"],
	["裳階(「裳層」とも)", "もこし"],
	["厚皮香", "もっこく"],
	["紅絹", "もみ"],
	["妄榧", "もみ"],
	["九面芋", "やつがしら"],
	["鶏眼草", "やはずそう"],
	["天名精", "やぶたばこ"],
	["胡蝶樹", "やぶでまり"],
	["商陸", "やまごぼう"],
	["野山薬", "やまのいも"],
	["暗争(「暗闘」とも)", "だんまり"],
	["麗春花", "ひなげし"],
	["鱠残魚", "しらうお"],
	["豹脚蚊", "やぶか"],
	["弟鷹", "だい"],
	["兄鷹", "しょう"],
	["鹿薬", "ゆきざさ"],
	["噴雪花", "ゆきやなぎ"],
	["雇仲居(「雇女」とも)", "やとな"],
	["沃度丁幾", "ヨードチンキ"],
	["左手", "ゆんで"],
	["右手", "めて"],
	["霍公鳥", "ほととぎす"],
	["矮鹿", "まめじか"],
	["満俺", "マンガン"],
	["英斤", "ポンド"],
	["苦菜", "のげし"],
	["訛声", "だみごえ"],
	["帖紙(「畳紙」とも)", "たとうがみ"],
	["春宮", "とうぐう"]
);

DATA[0][2] = new Array(
	["蕎麦葉貝母", "うばゆり"],
	["側金盞花", "ふくじゅそう"],
	["景天", "べんけいそう"],
	["釵子股", "ぼうらん"],
	["両下", "まや"],
	["玉柏", "まんねんすぎ"],
	["鐙靼", "みずお"],
	["完骨", "みみせせ,せせ"],
	["行縢", "むかばき"],
	["金剛纂", "やつで"],
	["腸線", "ガット"],
	["虎掌", "うらしまそう"],
	["髫髪", "うない"],
	["十大功労", "ひいらぎなんてん"],
	["貫衆", "やぶそてつ"],
	["長庚", "ゆうずつ,ゆうつず"],
	["尸童", "よりまし"],
	["洋妾", "らしゃめん"],
	["池溝", "うなて"],
	["移徙", "わたまし"],
	["菟糸", "ねなしかずら"],
	["鼠李", "くろうめもどき"],
	["沢漆", "とうだいぐさ"],
	["爵牀", "きつねのまご"],
	["百両金", "からたちばな"],
	["憑子", "たのもし"],
	["東風菜", "しらやまぎく"],
	["狗舌草", "さわおぐるま"],
	["君遷子", "しなのがき"],
	["績麻", "うみお,うみそ"],
	["小角", "くだのふえ"],
	["大角", "はらのふえ,はら"],
	["主水", "もんど"],
	["僂麻質斯", "リウマチ"],
	["臭牡丹樹", "くさぎ"],
	["山蘿蔔", "まつむしそう"],
	["銚釐", "ちろり"],
	["仙蓼", "われもこう"],
	["灯台木", "みずき"],
	["松楊", "ちしゃのき"],
	["窃衣", "やぶじらみ"],
	["水蠟樹蠟虫", "いぼたろうむし"],
	["金瘡小草", "きらんそう"],
	["編木", "びんざさら"],
	["落葵", "つるむらさき"],
	["礬水", "どうさ"],
	["槐葉蘋", "さんしょうも"],
	["鴉葱", "しらいとそう"],
	["樗蚕", "しんじゅさん"],
	["蚕簿(「射翳」とも)", "まぶし"],
	["海州常山", "くさぎ"],
	["見風乾", "あかしで"],
	["窩主", "けいず"],
	["荷包牡丹", "けまんそう"],
	["拍板", "びんざさら"],
	["桃金嬢", "てんにんか"],
	["王不留行", "どうかんそう"],
	["蟹足腫", "ケロイド"],
	["麻葉繡毬", "こでまり"],
	["乾児", "こぶん"],
	["銚子", "さしなべ,さすなべ"],
	["南五味子", "さねかずら"],
	["遮莫", "さもあらばあれ"],
	["大戟", "たかとうだい"],
	["身柱(「天柱」とも)", "ちりけ"],
	["天青地白", "ちちこぐさ"],
	["金魚蝨(「魚蝨」とも)", "ちょう"],
	["蜀椒", "なるはじかみ,さんしょう"],
	["烏臼", "なんきんはぜ"],
	["野菰", "なんばんぎせる"],
	["水鼈", "とちかがみ"],
	["左義長", "どんど"],
	["玉蘭", "はくもくれん"],
	["馬尾毛", "ばす"],
	["爆米", "はぜ"],
	["瓶爾小草", "はなやすり"],
	["陰地蕨", "はなわらび"],
	["蛇牀", "はまぜり"],
	["蜘蛛抱蛋", "はらん"],
	["刺楸", "はりぎり"],
	["紫参", "はるとらのお"],
	["杠谷樹", "ひいらぎ"],
	["石松", "ひかげのかずら"],
	["小舌", "ひこ"],
	["漏蘆", "ひごたい"],
	["赤栴檀", "ひめしゃら"],
	["白英", "ひよどりじょうご"],
	["山蘭", "ひよどりばな"],
	["憑坐", "よりまし"],
	["八角金盤", "やつで"],
	["頑癬", "たむし"],
	["白禿瘡(「白癬」とも)", "しらくも"],
	["傴僂", "せむし,くぐせ"],
	["建蘭", "するがらん"],
	["小櫱", "めぎ"],
	["聞道(「聞説」とも)", "きくならく"],
	["規尼涅", "キニーネ"],
	["弧光灯", "アークトウ"],
	["贖児", "あがちご"],
	["朝臣", "あそん"]
);

QUESTION_STR[1] = "次の外国地名の読みを答えなさい。"

DATA[1][0] = new Array(
	["愛斯蘭", "アイスランド"],
	["愛蘭", "アイルランド"],
	["阿爾及", "アルジェリア"],
	["英吉利", "イギリス"],
	["伊色剌", "イスラエル"],
	["烏克蘭", "ウクライナ"],
	["宇柳具", "ウルグアイ"],
	["埃及", "エジプト"],
	["墺太利", "オーストリア"],
	["和蘭", "オランダ"],
	["幾肉亜", "ギニア"],
	["玖馬", "キューバ"],
	["希臘", "ギリシャ"],
	["牙買加", "ジャマイカ"],
	["新嘉坡", "シンガポール"],
	["瑞西", "スイス"],
	["瑞典", "スウェーデン"],
	["蘇丹", "スーダン"],
	["西班牙", "スペイン"],
	["丁抹", "デンマーク"],
	["独逸", "ドイツ"],
	["土耳古", "トルコ"],
	["新西蘭", "ニュージーランド"],
	["泥婆羅", "ネパール"],
	["諾威", "ノルウェー"],
	["巴羅貝", "パラグアイ"],
	["洪牙利", "ハンガリー"],
	["比律賓", "フィリピン"],
	["芬蘭", "フィンランド"],
	["仏蘭西", "フランス"],
	["勃牙利", "ブルガリア"],
	["越南", "ベトナム"],
	["秘露", "ペルー"],
	["白耳義", "ベルギー"],
	["波蘭", "ポーランド"],
	["葡萄牙", "ポルトガル"],
	["墨西哥", "メキシコ"],
	["露西亜", "ロシア"],
	["莫臥児", "モンゴル"],
	["雅典", "アテネ"],
	["亜馬生", "アマゾン"],
	["英蘭", "イングランド"],
	["維納", "ウィーン,ウイーン"],
	["牛津", "オックスフォード"],
	["改羅", "カイロ"],
	["甲谷佗", "カルカッタ"],
	["瓜姆", "グアム"],
	["角布", "ケープタウン"],
	["剣橋", "ケンブリッジ"],
	["高加索", "コーカサス"],
	["戈壁", "ゴビ"],
	["古倫母", "コロンボ"],
	["撒哈拉", "サハラ"],
	["聖市", "サンパウロ"],
	["桑港", "サンフランシスコ"],
	["舎路", "シアトル"],
	["悉徳尼", "シドニー"],
	["爪哇", "ジャワ"],
	["寿府", "ジュネーブ"],
	["蘇素", "スエズ"],
	["蘇格蘭", "スコットランド"],
	["士篤恒", "ストックホルム"],
	["聖路易", "セントルイス"],
	["得撒", "テキサス"],
	["多倫多", "トロント"],
	["新英土", "ニューイングランド"],
	["紐瀬流", "ニュージャージー"],
	["紐育", "ニューヨーク"],
	["巴古達(「報達」とも)", "バグダッド"],
	["聖林", "ハリウッド"],
	["布哇", "ハワイ"],
	["晩克坡", "バンクーバー"],
	["漢堡", "ハンブルク"],
	["費府", "フィラデルフィア"],
	["伯林", "ベルリン"],
	["澳門", "マカオ"],
	["馬徳里", "マドリード"],
	["馬耳塞", "マルセイユ"],
	["米西西皮", "ミシシッピ"],
	["閔行", "ミュンヘン"],
	["莫斯科", "モスクワ"],
	["欧羅巴", "ヨーロッパ"],
	["羅馬", "ローマ"],
	["羅府", "ロサンゼルス"],
	["路照", "ロッテルダム"],
	["倫敦", "ロンドン"],
	["華盛頓", "ワシントン"]
);
