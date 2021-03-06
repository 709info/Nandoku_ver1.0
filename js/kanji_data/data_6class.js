
/*

DATA[大問][小問] = new Array(
	["漢字", "読み"],
	...
}

*/
const CLASS = 6;
const KENTEI_NAME = "六級";
const FILE_NAME = "6class"; // 「○○.html」などで使用
const GENRE = [["植物", "魚介類", "鳥類", "動物", "常用熟字訓"],
			   	["訓読み"],
			   	["熟語"]];
const Q_NUM = [10, 10, 5]; // 大問ごとの問題数
const UNIT_SCORE = [4, 4, 4]; // 大問ごとにおける一問正解の配点
const MAX_SCORE = 100; // 満点
const GOKAKU_SCORE = 80; // 合格点

let QUESTION_STR = new Array(); // 問題文＋配点
let DATA = new Array(); // 出題漢字,正解

// 多次元配列の生成
for (let i=0; i<10; i++) {
	QUESTION_STR[i] = new Array();
	DATA[i] = new Array();
}


QUESTION_STR[0][0] = "次の植物を表す漢字の読みを答えなさい。"

DATA[0][0] = new Array(
["葵", "あおい"],
["茜", "あかね"],
["紫陽花(「しようか」以外で)", "あじさい"],
["翌檜", "あすなろ"],
["小豆", "あずき,(しょうず)"],
["杏:杏子", "あんず"],
["苺", "いちご"],
["無花果(＋「い」から始まる)", "いちじく,(いちじゅく)"],
["独活(「どっかつ」以外で)", "うど,(つちたら)"],
["梅", "うめ"],
["女郎花", "おみなえし,(おみなめし)"],
["万年青(＋「お」から始まる)", "おもと"],
["楓", "かえで"],
["柿(※「こけら」とは別字)", "かき"],
["杜若(＋「か」から始まる):燕子花(＋「か」から始まる)", "かきつばた"],
["柏", "かしわ,(かえ)"],
["南瓜", "かぼちゃ,(ぼぶら)"],
["菊", "きく"],
["胡瓜", "きゅうり,(きうり),(そばうり)"],
["銀杏", "ぎんなん,いちょう"],
["胡桃", "くるみ"],
["牛蒡", "ごぼう,(ごんぼ),(うまふぶき)"],
["山茶花", "さざんか,(さんさか)"],
["砂糖黍", "さとうきび"],
["百日紅(＋「さ」から始まる)", "さるすべり"],
["柘榴:石榴(「せきりゅう」以外で)", "ざくろ"],
["石南花(＋「し」から始まる):石楠花(＋「し」から始まる)", "しゃくなげ"],
["生姜", "しょうが"],
["馬鈴薯", "じゃがいも,ばれいしょ"],
["西瓜", "すいか,(さいうり)"],
["筍(＋かな４文字)", "たけのこ"],
["煙草(「えんそう」以外で)", "たばこ"],
["蒲公英(「ほこうえい」以外で)", "たんぽぽ"],
["土筆(「どひつ」以外で)", "つくし,(つくづくし),(つくしんぼ)"],
["唐辛子", "とうがらし"],
["団栗", "どんぐり"],
["茄子", "なす,なすび"],
["撫子", "なでしこ"],
["人参", "にんじん,(かのにげぐさ)"],
["葱", "ねぎ,(き)"],
["薔薇", "ばら,(しょうび),(そうび)"],
["向日葵", "ひまわり,(ひゅうがあおい)"],
["枇杷", "びわ"],
["葡萄", "ぶどう,(えび)"],
["糸瓜", "へちま,(いとうり)"],
["牡丹", "ぼたん"],
["蜜柑", "みかん,(みつかん)"],
["水雲(＋「も」から始まる):海雲(＋「も」から始まる)", "もずく,(もぞこ):もずく"],
["柚子", "ゆず"],
["落花生", "らっかせい"],
["林檎", "りんご,(りんきん),(りゅうごう)"],
["檸檬", "れもん,(ねいもう),(れも)"]
);

QUESTION_STR[0][1] = "次の魚介類を表す漢字の読みを答えなさい。"

DATA[0][1] = new Array(
["浅蜊", "あさり"],
["鯵", "あじ"],
["穴子", "あなご"],
["鮎", "あゆ"],
["烏賊(＋「い」から始まる)", "いか"],
["伊勢蝦", "いせえび"],
["鰯", "いわし"],
["海老", "えび"],
["鰹", "かつお"],
["蟹", "かに"],
["海月(「かいげつ」以外で)", "くらげ"],
["鯉", "こい"],
["鮭", "さけ,しゃけ,(さかな),(ふぐ)"],
["栄螺(＋「さ」から始まる):拳螺(＋「さ」から始まる)", "さざえ,(さざい):さざえ"],
["山椒魚", "さんしょううお"],
["秋刀魚", "さんま"],
["柳葉魚", "ししゃも,(やなぎもろこ)"],
["蜆(＋「し」から始まる)", "しじみ"],
["介党鱈", "すけとうだら"],
["鯛", "たい"],
["太刀魚", "たちうお,(たちのうお)"],
["鱈", "たら"],
["飛魚", "とびうお,(あご)"],
["泥鰌(＋「ど」から始まる)", "どじょう"],
["海鼠(＋「な」から始まる)", "なまこ,(こ),(かいそ)"],
["鯰", "なまず"],
["蛤(＋「は」から始まる)", "はまぐり,(はま)"],
["海星(「かいせい」以外で)", "ひとで"],
["鮃", "ひらめ"],
["河豚", "ふぐ,(ふく),(ふくべ),(かとん)"],
["鮒(＋「ふ」から始まる)", "ふな"],
["帆立貝", "ほたてがい"],
["鮪", "まぐろ,(しび)"],
["馬刀貝", "まてがい"],
["眼張", "めばる"],
["山女:山女魚", "やまめ"],
["公魚(＋「わ」から始まる)", "わかさぎ"]
);

QUESTION_STR[0][2] = "次の鳥類を表す漢字の読みを答えなさい。"

DATA[0][2] = new Array(
["合鴨", "あいがも"],
["家鴨(＋「あ」から始まる)", "あひる"],
["阿房鳥", "あほうどり"],
["音呼", "いんこ"],
["鶯(＋「う」から始まる)", "うぐいす"],
["烏骨鶏", "うこっけい"],
["鶉(＋「う」から始まる)", "うずら"],
["鸚鵡(＋「お」から始まる)", "おうむ"],
["鴛鴦", "おしどり,えんおう,(おし)"],
["郭公", "かっこう,ほととぎす"],
["鴎(＋「か」から始まる)", "かもめ"],
["烏(※「とり」とは別字)", "からす,(う)"],
["軽鴨", "かるがも"],
["鵝鳥", "がちょう"],
["雉子(＋「き」から始まる)", "きじ,(きぎす),(きぎし)"],
["啄木鳥", "きつつき,(けら),(けらつつき)"],
["水鶏(＋「く」から始まる)", "くいな"],
["孔雀", "くじゃく"],
["鷺", "さぎ"],
["四十雀", "しじゅうから"],
["十姉妹", "じゅうしまつ"],
["雀", "すずめ"],
["鷹", "たか"],
["駝鳥", "だちょう"],
["燕(＋「つ」から始まる)", "つばめ,(つばくろ),(つばくら),(つばくらめ)"],
["鶴", "つる"],
["鳶", "とび,とんび"],
["鶏", "にわとり,とり,(くた),(くたかけ)"],
["鳩", "はと"],
["隼", "はやぶさ"],
["雲雀(＋「ひ」から始まる)", "ひばり"],
["梟(＋「ふ」から始まる)", "ふくろう,(ふくろ)"],
["不如帰(「ふじょき」以外で)", "ほととぎす"],
["木菟(＋「み」または「ず」から始まる)", "みみずく,ずく"],
["百舌(＋「も」から始まる)", "もず"],
["鷲", "わし"]
);

QUESTION_STR[0][3] = "次の動物を表す漢字の読みを答えなさい。"

DATA[0][3] = new Array(
["海豹(＋「あ」から始まる)", "あざらし"],
["浣熊", "あらいぐま"],
["食蟻獣(＋「あ」から始まる)", "ありくい"],
["鼬(＋「い」から始まる)", "いたち"],
["猪", "いのしし,(い),(しし)"],
["海豚", "いるか"],
["兎", "うさぎ,(う)"],
["河馬", "かば"],
["川獺", "かわうそ"],
["狐", "きつね"],
["麒麟", "きりん"],
["鯨", "くじら,(いさな),(いさ)"],
["犀(＋かな２文字)", "さい"],
["縞馬", "しまうま"],
["儒艮", "じゅごん"],
["海象(＋「セ」から始まる)", "セイウチ"],
["狸", "たぬき,(たたけ),(たたげ)"],
["馴鹿(＋「ト」から始まる)", "トナカイ,(じゅんろく)"],
["鼠", "ねずみ,(ねず)"],
["豹", "ひょう"],
["蝮(＋「ま」から始まる)", "まむし"],
["土竜(＋「も」から始まる)", "もぐら,(もぐらもち)"],
["山羊", "やぎ"],
["駱駝", "らくだ"],
["栗鼠", "りす"]
);

QUESTION_STR[0][4] = "次の常用熟字訓の読みを答えなさい。"

DATA[0][4] = new Array(
["小豆", "あずき"],
["海女", "あま"],
["硫黄", "いおう"],
["意気地", "いくじ"],
["田舎", "いなか"],
["息吹", "いぶき"],
["乳母", "うば"],
["大海原", "おおうなばら"],
["叔父:伯父", "おじ"],
["乙女", "おとめ"],
["叔母:伯母", "おば"],
["母屋:母家", "おもや,もや"],
["神楽", "かぐら"],
["河岸(＋かな２文字)", "かし"],
["風邪", "かぜ"],
["蚊帳", "かや"],
["為替", "かわせ"],
["玄人", "くろうと"],
["桟敷", "さじき,(さんじき)"],
["五月晴れ", "さつきばれ"],
["早苗", "さなえ"],
["五月雨", "さみだれ"],
["雑魚", "ざこ"],
["時雨", "しぐれ"],
["竹刀", "しない"],
["芝生", "しばふ"],
["三味線", "しゃみせん"],
["師走", "しわす"],
["砂利", "じゃり"],
["数珠", "じゅず"],
["数寄屋", "すきや"],
["草履", "ぞうり"],
["太刀", "たち"],
["足袋(＋「た」から始まる)", "たび"],
["稚児", "ちご"],
["梅雨", "つゆ"],
["伝馬船", "てんません"],
["凸凹", "でこぼこ"],
["投網", "とあみ"],
["読経", "どきょう"],
["仲人", "なこうど"],
["名残", "なごり"],
["雪崩", "なだれ"],
["野良", "のら"],
["祝詞(＋「の」から始まる)", "のりと"],
["波止場", "はとば"],
["日和", "ひより"],
["吹雪", "ふぶき"],
["神酒", "みき"],
["土産", "みやげ"],
["猛者", "もさ"],
["紅葉", "もみじ"],
["木綿", "もめん,(ゆう)"],
["最寄り", "もより"],
["八百長", "やおちょう"],
["大和", "やまと"],
["浴衣", "ゆかた"],
["行方", "ゆくえ"],
["寄席", "よせ"],
["若人", "わこうど"]
);

QUESTION_STR[1][0] = "次の漢字の読みを<u>送り仮名も含めて</u>答えなさい。"

DATA[1][0] = new Array(
["喘ぐ(＋「あ」から始まる)", "あえぐ"],
["敢えて", "あえて"],
["和える", "あえる"],
["蒼い", "あおい"],
["扇ぐ", "あおぐ"],
["青褪める", "あおざめる"],
["煽る", "あおる"],
["呷る(＋「あ」から始まる)", "あおる"],
["呆れる", "あきれる"],
["憧れる", "あこがれる"],
["欺く", "あざむく"],
["嘲笑う", "あざわらう"],
["強ち", "あながち"],
["侮る", "あなどる,(あなずる)"],
["予め", "あらかじめ"],
["有難い", "ありがたい"],
["如何わしい", "いかがわしい"],
["厳つい", "いかつい"],
["幾つ", "いくつ"],
["憩う", "いこう"],
["潔い", "いさぎよい"],
["些か", "いささか"],
["戴く", "いただく"],
["悼む", "いたむ"],
["慈しむ", "いつくしむ,(うつくしむ)"],
["戒める", "いましめる"],
["未だ", "いまだ,まだ"],
["色褪せる", "いろあせる"],
["曰く(※「日」とは別字)", "いわく,(のたまわく)"],
["承る", "うけたまわる"],
["疎い", "うとい"],
["促す", "うながす"],
["頷く(＋「う」から始まる)", "うなずく"],
["麗らか", "うららか"],
["愁い", "うれい"],
["可笑しい", "おかしい"],
["冒す", "おかす"],
["怠る", "おこたる"],
["厳か", "おごそか"],
["雄叫び", "おたけび,(おさけび)"],
["穏やか", "おだやか"],
["陥れる", "おとしいれる"],
["脅かす", "おどかす,おびやかす"],
["戦く", "おののく,わななく"],
["怯える", "おびえる"],
["却って", "かえって"],
["掲げる", "かかげる"],
["齧る", "かじる,(かぶる)"],
["傍ら", "かたわら"],
["予て", "かねて"],
["醸す", "かもす"],
["絡む", "からむ"],
["窮まる", "きわまる"],
["牛耳る", "ぎゅうじる"],
["口遊む", "くちずさむ"],
["覆す", "くつがえす,(ふくす)"],
["口説く", "くどく"],
["遮る", "さえぎる,(さいぎる)"],
["遡る", "さかのぼる"],
["諭す", "さとす"],
["宛ら(＋「さ」から始まる)", "さながら"],
["寂しい:淋しい", "さびしい,さみしい,(さむしい)"],
["晒す:曝す", "さらす"],
["虐げる", "しいたげる,(せたげる)"],
["暫く(※「漸く」とは別字)", "しばらく,(しまらく)"],
["萎む", "しぼむ"],
["喋る", "しゃべる"],
["薦める", "すすめる"],
["即ち", "すなわち"],
["図々しい", "ずうずうしい"],
["雪ぐ", "そそぐ,すすぐ"],
["唆す", "そそのかす,(そそなかす),(そそのわかす)"],
["堪える", "たえる,こらえる,こたえる"],
["集る", "たかる"],
["嗜む", "たしなむ,(たしむ)"],
["携える", "たずさえる"],
["佇む", "たたずむ"],
["漂う", "ただよう"],
["盾突く", "たてつく"],
["奉る", "たてまつる,(まつる)"],
["賜る", "たまわる,(たもる),(とうばる)"],
["容易い", "たやすい"],
["戯れる", "たわむれる,じゃれる,(たわぶれる),(ざれる)"],
["啄む", "ついばむ"],
["司る", "つかさどる"],
["掴む", "つかむ"],
["繕う", "つくろう"],
["抓る", "つねる"],
["募る", "つのる"],
["呟く", "つぶやく"],
["円ら", "つぶら"],
["紡ぐ", "つむぐ"],
["艶やか", "つややか,あでやか,(なまやか)"],
["尊ぶ:貴ぶ", "とうとぶ,たっとぶ:とうとぶ,たっとぶ,(あてぶ)"],
["尖る(＋「と」から始まる)", "とがる,(とんがる)"],
["滞る", "とどこおる"],
["轟く", "とどろく,(とどめく),(どどめく)"],
["弔う", "とむらう"],
["尚且つ", "なおかつ"],
["慰める", "なぐさめる"],
["準える", "なぞらえる,(なずらえる)"],
["宥める", "なだめる"],
["懐く", "なつく,(いだく),(うだく),(なずく)"],
["罵る", "ののしる,(のる)"],
["歪む", "ひずむ,ゆがむ,(いがむ)"],
["偏に(＋「ひ」から始まる)", "ひとえに,(かたほに)"],
["塞ぐ", "ふさぐ,(ひさぐ),(ふたぐ)"],
["相応しい", "ふさわしい"],
["太々しい", "ふてぶてしい"],
["紛れる", "まぎれる,(まぐれる)"],
["塗す", "まぶす,(まめす)"],
["蝕む", "むしばむ"],
["毟る", "むしる"],
["喧しい", "やかましい,かまびすしい"],
["緩やか", "ゆるやか"],
["漸く(※「暫く」とは別字)", "ようやく"],
["過る", "よぎる"],
["弁える", "わきまえる"]
);

QUESTION_STR[2][0] = "次の熟語の読みを<u>音読みで</u>答えなさい。"

DATA[2][0] = new Array(
["愛嬌", "あいきょう"],
["阿吽", "あうん"],
["唖然", "あぜん,(あくぜん)"],
["安堵", "あんど"],
["安寧", "あんねい"],
["威嚇", "いかく"],
["有頂天", "うちょうてん"],
["壊死", "えし"],
["押印", "おういん"],
["凹凸", "おうとつ"],
["横柄", "おうへい"],
["汚濁", "おだく"],
["緩急", "かんきゅう"],
["完璧", "かんぺき"],
["骸骨", "がいこつ"],
["脅威", "きょうい"],
["驚愕", "きょうがく"],
["矯正", "きょうせい"],
["亀裂", "きれつ"],
["駆逐", "くちく"],
["供養", "くよう"],
["勲章", "くんしょう"],
["形骸化", "けいがいか"],
["稽古", "けいこ"],
["軽蔑", "けいべつ"],
["痙攣", "けいれん"],
["怪我", "けが"],
["血痕", "けっこん"],
["懸念", "けねん,(けんねん)"],
["絢爛", "けんらん"],
["解熱", "げねつ"],
["厳粛", "げんしゅく"],
["香辛料", "こうしんりょう"],
["膠着", "こうちゃく"],
["勾配", "こうばい"],
["虚仮", "こけ"],
["姑息", "こそく"],
["懇願", "こんがん"],
["渾身", "こんしん"],
["昏睡", "こんすい"],
["建立(「けんりつ」以外で)", "こんりゅう"],
["語彙", "ごい"],
["轟音", "ごうおん"],
["御法度", "ごはっと"],
["催促", "さいそく"],
["裁縫", "さいほう"],
["左遷", "させん"],
["颯爽", "さっそう"],
["殺戮", "さつりく"],
["嗜好", "しこう"],
["醜態", "しゅうたい"],
["竣工", "しゅんこう"],
["奨励", "しょうれい"],
["所轄", "しょかつ"],
["真髄", "しんずい"],
["辛抱", "しんぼう"],
["親睦", "しんぼく"],
["辛辣", "しんらつ"],
["若干", "じゃっかん"],
["潤滑", "じゅんかつ"],
["成就", "じょうじゅ"],
["枢軸", "すうじく"],
["逝去", "せいきょ"],
["脊椎", "せきつい"],
["贅沢", "ぜいたく"],
["前哨戦", "ぜんしょうせん"],
["喪心", "そうしん"],
["忖度", "そんたく"],
["憎悪", "ぞうお"],
["怠慢", "たいまん"],
["惰性", "だせい"],
["堕落", "だらく"],
["団欒", "だんらん"],
["緻密", "ちみつ"],
["抽出", "ちゅうしゅつ"],
["治癒", "ちゆ"],
["彫琢", "ちょうたく"],
["頂戴", "ちょうだい"],
["淘汰", "とうた"],
["獰猛", "どうもう"],
["捏造", "ねつぞう,(でつぞう)"],
["脳震盪", "のうしんとう"],
["拝啓", "はいけい"],
["撥水", "はっすい"],
["溌剌", "はつらつ"],
["頒布", "はんぷ"],
["凡例", "はんれい"],
["抜擢", "ばってき"],
["晩餐", "ばんさん"],
["匹敵", "ひってき"],
["秘匿", "ひとく"],
["復讐", "ふくしゅう"],
["払拭", "ふっしょく,(ふっしき)"],
["訃報", "ふほう"],
["鳳凰", "ほうおう"],
["蓬莱", "ほうらい"],
["発端", "ほったん"],
["翻弄", "ほんろう"],
["呆然", "ぼうぜん"],
["勃発", "ぼっぱつ"],
["煩悩", "ぼんのう"],
["蔓延", "まんえん"],
["矛盾", "むじゅん"],
["朦朧", "もうろう"],
["勿論", "もちろん"],
["野次", "やじ"],
["憂鬱", "ゆううつ"],
["容赦", "ようしゃ"],
["繚乱", "りょうらん"],
["輪廻", "りんね"],
["漏洩", "ろうえい,(ろうせつ)"],
["狼狽", "ろうばい"],
["緑青", "ろくしょう"],
["肋骨", "ろっこつ"],
["浪漫", "ろまん,ろうまん"],
["呂律", "ろれつ,(りょりつ)"],
["湾曲", "わんきょく"]
);
