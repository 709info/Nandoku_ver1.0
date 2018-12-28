
const CLASS = 1;
const KENTEI_NAME = "一級";
const FILE_NAME = "1class"; // 「○○.html」などで使用
const GENRE = [["究極"]];
const Q_NUM = [40]; // 大問ごとの問題数
const UNIT_SCORE = [5]; // 大問ごとにおける一問正解の配点
const MAX_SCORE = 200; // 満点
const GOKAKU_SCORE = 180; // 合格点

let QUESTION_STR = new Array(); // 問題文＋配点
let DATA = new Array(); // 出題漢字,正解

// 多次元配列の生成
for (let i=0; i<10; i++) {
	QUESTION_STR[i] = new Array();
	DATA[i] = new Array();
}


QUESTION_STR[0][0] = "次の漢字の読みを<u>送り仮名も含めて</u>答えなさい。"

DATA[0][0] = new Array(
["𠃐う", "あう"],
["𦮙", "あおい"],
["黿(かな６文字で)", "あおうみがめ"],
["厃ぐ", "あおぐ"],
["佒(かな４文字で)", "あおむけ"],
["戽(かな４文字で)", "あかくみ"],
["𦴛", "あかね"],
["紫参(当て字読み)", "あきのたむらそう"],
["异げる", "あげる"],
["荇菜(当て字読み)", "あさざ"],
["孋(かな３文字で)", "あざな"],
["她る", "あざる"],
["禸(かな４文字で)", "あしあと"],
["尮(かな４文字で)", "あしなえ"],
["阿閦", "あしゅく"],
["𦦲る", "あずかる"],
["射垜(当て字読み)", "あずち"],
["匃える", "あたえる"],
["亼まる", "あつまる"],
["鬷まる", "あつまる"],
["勼める", "あつめる"],
["挖く", "あばく"],
["𠀘(かな２文字で)", "あま,あめ"],
["𠕲(かな２文字で)", "あめ,あま"],
["谿蓀(当て字読み)", "あやめ"],
["盬(かな４文字で)", "あらしお"],
["誩う", "あらそいいう"],
["皛れる", "あらわれる"],
["奻う", "いいあらそう"],
["彧々", "いくいく"],
["𡗽(かな３文字で)", "いくさ"],
["蟈(かな５文字で)", "いさごむし"],
["𠧗る", "いじる"],
["𠯕く", "いたく"],
["𠫠に", "いたずらに"],
["衋む", "いたむ"],
["佫る", "いたる"],
["儭る", "いたる"],
["檾(かな３文字で)", "いちび"],
["鐿", "イッテルビウム,(イチルビュウム),(イチルビウム)"],
["釔", "イットリウム,(イトリウム),(イトリュウム)"],
["侎しむ", "いつくしむ"],
["㐅つ", "いつつ"],
["嚜る", "いつわる"],
["夎る", "いつわる"],
["卝い", "いとけない"],
["軟条海棠(当て字読み)", "いとざくら"],
["𠄋(かな３文字で)", "いぬい"],
["櫰(かな６文字で)", "いぬえんじゅ"],
["讄る", "いのる"],
["靉靅", "いはい"],
["骪骳", "いひ"],
["石薄荷(当て字読み)", "いぶきじゃこうそう"],
["拳参(当て字読み)", "いぶきとらのお"],
["邪蒿(当て字読み)", "いぶきぼうふう"],
["鬱悒し", "いぶせし"],
["𠾅る", "いる"],
["𦥺る", "いる"],
["𢒸(かな２文字で)", "いろ"],
["勻円", "いんえん"],
["秦吉了(当て字読み)", "いんこ,きゅうかんちょう"],
["涒粼", "いんりん"],
["奫潫", "いんわん"],
["韋白斯特(当て字読み)", "ウェブスター"],
["韋柏(当て字読み)", "ウェーバー"],
["罽(かな４文字で)", "うおあみ"],
["黄伯労(当て字読み)", "うぐいす"],
["博黍(当て字読み)", "うぐいす"],
["吪く", "うごく"],
["黲い", "うすあおぐろい"],
["夋る", "うずくまる,おごりいる"],
["𠂤い", "うずたかい"],
["鰞𩽠", "うそく,うぞく"],
["惢う", "うたがう"],
["侄る", "うつる"],
["匫", "うつわ"],
["侲(かな４文字で)", "うまかい,はしため"],
["土青木香(当て字読み)", "うまのすずくさ"],
["匑う", "うやまう"],
["儱(かな４文字で)", "うやむや"],
["侼む", "うらむ"],
["讟む", "うらむ"],
["𠀞らか", "うららか"],
["泧𤅻", "えつかく"],
["以丁堡(当て字読み)", "エディンバラ"],
["㫃蹇", "えんけん"],
["镺𨱶", "おうどう"],
["眾い", "おおい"],
["侜す", "おおいかくす"],
["匸う", "おおう"],
["襾う", "おおう"],
["𠤈(かな４文字で)", "おおとり"],
["芣苡(当て字読み)", "おおばこ"],
["天女花(当て字読み)", "おおやまれんげ"],
["丠", "おか"],
["𠀌(かな２文字で)", "おか"],
["伿る", "おこたる"],
["彂る", "おこる"],
["伳る", "おごる"],
["乿める", "おさめる"],
["俆い", "おそい"],
["佂てる", "おそれあわてる"],
["伀れる", "おそれる"],
["伈れる", "おそれる"],
["𠂖(かな４文字で)", "おとうと"],
["𠌺える", "おとろえる"],
["闝れる", "おぼれる"],
["𢎜ぶ", "およぶ"],
["凥る", "おる"],
["𠨰(かな３文字で)", "おんな"],
["㱾㱼", "かいかい"],
["𠿔𠌢", "かいげき"],
["虺尵", "かいたい"],
["獬豸", "かいち"],
["竵扁法", "かいへんほう"],
["頮面", "かいめん"],
["买う", "かう"],
["斣う", "かえあう"],
["鼃(かな３文字で)", "かえる"],
["颬々", "かか"],
["𡕜む", "かがむ,こごむ"],
["书く", "かく"],
["瀥瀑", "かくばく"],
["乚れる", "かくれる"],
["𠆭る", "かげる"],
["舃", "かささぎ"],
["囜い", "かしこい"],
["𠫬か", "かすか"],
["祘える", "かぞえる"],
["侄い", "かたい"],
["捦る", "かたくとる"],
["蠃", "かたつむり"],
["夨ける", "かたむける"],
["𠅡つ", "かつ"],
["𤁪𤁫", "かつちゅつ"],
["𦯚蔞", "かつろう"],
["𠁴(かな２文字で)", "かめ"],
["藼", "かや,かんぞう"],
["佡い", "かるい"],
["薛(かな６文字で)", "かわらよもぎ"],
["忒わる", "かわる"],
["尷𠆷", "かんかい"],
["凲尬", "かんかい"],
["𧧴䜕", "かんかい"],
["疳𥢼", "かんしゃく"],
["酣奭", "かんせき"],
["䓿𧂄", "かんたん"],
["扂(かな４文字で)", "かんぬき"],
["乾癟", "かんべつ"],
["𪙿𪙯", "があく"],
["鸑鷟", "がくさく"],
["齾々", "がつがつ"],
["𡉅𡉆", "がろう"],
["簋", "き"],
["忯㥴", "きい"],
["𠔛踞", "ききょ"],
["夔牛", "きぎゅう"],
["𡉵す", "きざす"],
["蘄茝", "きし"],
["瘋(かな４文字で)", "きちがい"],
["圥(かな３文字で)", "きのこ"],
["隳廃", "きはい"],
["严しい", "きびしい"],
["屩子", "きゃくし"],
["唁唁", "きゃんきゃん,わんわん"],
["𪚸𪓰", "きょしゅう"],
["莎鶏(当て字読み)", "きりぎりす"],
["晷漏", "きろう"],
["廞𢋼", "きんき"],
["巌桂(当て字読み)", "きんもくせい"],
["䓵蘛", "くいく"],
["厏う", "くいちがう"],
["匭る", "くくる"],
["兗る", "くくる"],
["丵", "くさのむらがり"],
["觹", "くじり,つのぎり"],
["賏(かな５文字で)", "くびかざり"],
["𡳟鼊", "くへき"],
["乪", "くま"],
["蟱", "くも"],
["匨(かな２文字で)", "くら"],
["伡", "くるま"],
["矪(かな４文字で)", "くるりや"],
["榘彠", "くわく"],
["𧫟髁", "けいか"],
["𧦂詬", "けいこう"],
["鱖鯞", "けいしゅう"],
["蘮蒘", "けいじょ"],
["惸独", "けいどく"],
["丮據", "けききょ"],
["𤄎沐", "けきぼく"],
["奊詬", "けっこう"],
["決讞", "けつげつ"],
["魚児牡丹(当て字読み)", "けまんそう"],
["𠖜る", "けむる"],
["𤰓る", "けむる"],
["韅靷", "けんいん"],
["芡實", "けんじつ"],
["鈐𨬍", "けんた"],
["隉寪", "げつぎ"],
["臲𠒄", "げつごつ"],
["𩖁𪚇", "げつしゃく"],
["牻手児苗(当て字読み)", "げんのしょうこ"],
["𠚙(かな４文字で)", "こうがい"],
["殽烝", "こうじょう"],
["擤齈", "こうどう"],
["康里巙巙", "こうりきき"],
["凳", "こしかけ"],
["壛(かな４文字で)", "こしかけ"],
["攱(かな４文字で)", "こしかけ"],
["𠃥る", "こぞる"],
["𠃬ぐ", "ことほぐ"],
["𠭵ぐ", "ことほぐ"],
["𠝅る", "ことわる"],
["崽(かな３文字で)", "こども"],
["匼う", "こびへつらう"],
["𡈍れる", "こぼれる"],
["痧", "コレラ"],
["夗", "ころがりうす"],
["煞す", "ころす"],
["㱎干", "こんかん"],
["跟屨", "こんく"],
["龔察洛夫(当て字読み)", "ゴンチャロフ"],
["𠥧(かな４文字で)", "さかずき"],
["塔婆(当て字読み)", "さかたざめ"],
["卣(かな４文字で)", "さかだる,さけつぼ"],
["奭ん", "さかん"],
["𧢱(かな２文字で)", "さが"],
["𠮍す", "さがす"],
["鵞毛玉鳳花(当て字読み)", "さぎそう"],
["刕く", "さく"],
["嘂ける", "さける"],
["佹える", "ささえる"],
["倳む", "さしこむ"],
["讞く", "さばく"],
["盡(かな７文字で)", "さもあらばあれ"],
["猴刺脱(当て字読み)", "さるすべり"],
["菝葜(当て字読み)", "さるとりいばら"],
["鵞耳櫪(当て字読み)", "さわしば"],
["𧥘る", "さわる"],
["𠊩僽", "さんしゅう"],
["痠𡳚", "さんせい"],
["丯する", "さんらんする"],
["囤", "ざる"],
["𠇍る", "しかる"],
["䅩䅓", "しく"],
["𧥕蠵", "しけい"],
["蘛る", "しげる"],
["啝う", "したがう"],
["侞す", "したがえならす,したがへならす"],
["海州骨砕補(当て字読み)", "しのぶぐさ"],
["夃く", "しばらく"],
["宲む", "しまいこむ"],
["灕む", "しみこむ"],
["蠟嘴(当て字読み)", "しめ"],
["𪓰𪓿", "しゅうし"],
["卙卙", "しゅうしゅう"],
["喌々", "しゅくしゅく"],
["𠘧𠘧", "しゅしゅ"],
["馵足", "しゅそく"],
["呛哼", "しょうこう"],
["稱娖", "しょうさく"],
["𠆰䀾", "しょうと"],
["秲𥣬", "しらい"],
["麪櫧(当て字読み)", "しらかし"],
["𠘄(かな３文字で)", "しるし"],
["𠲲い", "しわい"],
["甡甡", "しんしん"],
["叒木", "じゃくぼく"],
["囁吺", "じょうじゅ"],
["蓚山大黄(当て字読み)", "すいば"],
["騶𠈌", "すうぐ"],
["丰(かな３文字で)", "すがた"],
["匩う", "すくう"],
["叵る", "すこぶる"],
["夵む", "すすむ"],
["乵む", "すすむ"],
["兟む", "すすむ"],
["㒪(かな２文字で)", "すず"],
["夢卜子(当て字読み)", "すずしろ"],
["土酥(当て字読み)", "すずしろ"],
["鬌", "すずしろ"],
["䔍魯馬(当て字読み)", "すずしろ"],
["禾菁(当て字読み)", "すずな"],
["骪く", "すておく"],
["𠄕ち", "すなわち"],
["𠚝ち", "すなわち"],
["𠧤ち", "すなわち"],
["耍い", "すばやい"],
["紫花地丁(当て字読み)", "すみれ"],
["毈(かな３文字で)", "すもり"],
["兓い", "するどい"],
["戜い", "するどい"],
["冃(かな３文字で)", "ずきん"],
["尨蹄子(当て字読み)", "せ"],
["石荠苎", "せきせいねい"],
["粼(かな４文字で)", "せせらぎ"],
["巀𡿗", "せつげつ"],
["蠿蟊", "せつぼう"],
["吕", "せぼね"],
["戹い", "せまい"],
["勥る", "せまる"],
["奰る", "せまる,いかる"],
["鯪", "せんざんこう"],
["𢛈懘", "せんせい"],
["甴曱", "そうおう"],
["草𥤁", "そうしゅん"],
["牂牂", "そうそう"],
["𥞝𥞝", "そうそう"],
["㒊譶", "そうとう"],
["仠う", "そこなう"],
["毓てる", "そだてる"],
["𤖤える", "そなえる"],
["癶く", "そむく"],
["弨る", "そりかえる"],
["聉顡", "たいがい"],
["嬝やか", "たおやか"],
["蒼鸇(当て字読み)", "たか"],
["簂(かな６文字で)", "たかみのもの"],
["俋す", "たがやす"],
["斲輪", "たくりん"],
["𡡙羿", "たげい"],
["伒ける", "たすける"],
["𠬻る", "たてまつる"],
["舙る", "たばかる,(たはかる)"],
["檐不帰(当て字読み)", "たばこ"],
["𡀓(かな４文字で)", "たましい"],
["𠁽(かな４文字で)", "たまたま"],
["氹", "ためいけ"],
["檃(かな３文字で)", "ためぎ"],
["𠃀れる", "たれる,しだれる"],
["忐忑", "たんとく"],
["鼉太鼓", "だだいこ"],
["鱅", "ちちかぶり"],
["垙(かな３文字で)", "ちまた"],
["𨛜(かな３文字で)", "ちまた"],
["仲𤳳", "ちゅうき"],
["㑙𠑄", "ちょうしょう"],
["𦧄(かな２文字で)", "ちり,ごみ"],
["𠂂に", "ついに"],
["𠕍(かな３文字で)", "つかさ"],
["𠕞ぐ", "つぐ"],
["草血竭(当て字読み)", "つた"],
["凷(かな４文字で)", "つちくれ,かたまり"],
["侗む", "つつしむ"],
["臫む", "つつしむ"],
["𠉦に", "つとに"],
["𠄨に", "つねに"],
["軖", "つむぎくるま"],
["㕚(かな２文字で)", "つめ"],
["弜い", "つよい"],
["靎", "つる"],
["馬蹄急就草(当て字読み)", "つわぶき"],
["𠑅𠈕", "ていか"],
["䵺墥", "ていたん"],
["侻(かな３文字で)", "てがる"],
["𧨩䜝", "てんたん"],
["墊没", "てんぼつ"],
["㞮る", "でる"],
["𠍹𦤻", "とうしつ"],
["戇陋", "とうろう"],
["冂い", "とおい"],
["𠁅(かな３文字で)", "ところ"],
["亗", "とし,よわい"],
["蹔する", "とっしんする"],
["捆える", "ととのえる"],
["掯る", "とどこおる"],
["厸(かな３文字で)", "となり"],
["𦱹に", "ともに"],
["乕(かな２文字で)", "とら"],
["𠪳(かな２文字で)", "とら"],
["丣(かな２文字で)", "とり"],
["勶る", "とりさる"],
["畾(かな３文字で)", "とりで"],
["揓る", "とる"],
["攟る", "とる"],
["䇣𥯑", "どうきん"],
["獿人", "どうじん"],
["櫧子(当て字読み)", "どんぐり"],
["亾い", "ない"],
["𠅺る", "なおる"],
["兏い", "ながい"],
["𠘷い", "ながい"],
["𠆦ら", "ながら"],
["乁れる", "ながれる"],
["丢つ", "なげうつ"],
["丟つ", "なげうつ"],
["仙人指甲蘭(当て字読み)", "なごらん"],
["公爹菜(当て字読み)", "なずな"],
["旖く", "なびく"],
["黄精葉鉤吻(当て字読み)", "なべわり"],
["羴い", "なまぐさい"],
["冭らか", "なめらか"],
["习う", "ならう"],
["乑つ", "ならびたつ"],
["佴ぶ", "ならぶ"],
["为る", "なる"],
["𠄒とする", "なんなんとする"],
["魗む", "にくむ"],
["蚦(かな５文字で)", "にしきへび"],
["黄雀(当て字読み)", "にゅうないすずめ"],
["車下李(当て字読み)", "にわうめ"],
["多葉郁李(当て字読み)", "にわざくら"],
["襵(かな３文字で)", "ぬいめ"],
["山菉豆(当て字読み)", "ぬすびとはぎ"],
["𠉭む", "ぬすむ"],
["齃(かな３文字で)", "ねいき"],
["屃(かな３文字で)", "ねいき,いびき"],
["寗い", "ねがい"],
["啽囈(当て字読み)", "ねごと"],
["讆", "ねごと"],
["苕(かな７文字で)", "のうぜんかずら"],
["獿獀", "のうそう"],
["浓汤", "のうたん,のんたん"],
["僝る", "ののしる"],
["僽る", "ののしる"],
["㠭べる", "のべる"],
["佱(かな２文字で)", "のり"],
["𠅟る", "のる"],
["𠰔(かな５文字で)", "はかりごと"],
["匓る", "はかる"],
["随軍茶(当て字読み)", "はぎ"],
["伯𠍳", "はくえき"],
["瓝槊", "はくさく"],
["𢑾矟", "はくさく"],
["𨑕", "はさ"],
["蠼螋(当て字読み)", "はさみむし"],
["閞(かな８文字で)", "はしらのますがた"],
["騳る", "はしる"],
["刅める", "はじめる"],
["𢎚む", "はずむ"],
["㞈㞉", "はつさつ"],
["𦧵す", "はなす"],
["儵い", "はやい"],
["戫い", "はやい"],
["耎い", "はやい"],
["𠥻い", "はやい"],
["𤕬い", "はやい"],
["譶(かな４文字で)", "はやくち"],
["𤖍る", "はやる"],
["笸箩", "はら"],
["夝れる", "はれる"],
["螌蝥", "はんみょう"],
["麥虋冬", "ばくもんどう"],
["𥀏㗩", "ばしゅう"],
["䯦骱", "ばっかつ"],
["瀎潏", "ばつけつ"],
["𠣉杰", "ばんけつ"],
["屉", "ひきだし,かけご"],
["彎う", "ひきまかなう"],
["仾める", "ひくめる"],
["俼ぐ", "ひさぐ"],
["乆しい", "ひさしい"],
["巿(「シ」とは別字)", "ひざかけ"],
["𠃋(かな２文字で)", "ひじ"],
["𠫔(かな２文字で)", "ひじ"],
["𠄵(かな３文字で)", "ひじり"],
["蘸す", "ひたす"],
["咇𠰱", "ひつしつ"],
["堃(かな５文字で)", "ひつじさる"],
["朩しい", "ひとしい"],
["亝しい", "ひとしい"],
["焭(かな５文字で)", "ひとりもの"],
["乴る", "ひねる"],
["暚(かな５文字で)", "ひのひかり"],
["噪天(当て字読み)", "ひばり"],
["𢀏𢀏", "ひひ"],
["𪒵𪒵", "ひひ"],
["𦦷𦦷", "ひひ"],
["囟(かな４文字で)", "ひよめき"],
["厇く", "ひらく"],
["豳風", "ひんぷう"],
["敉寧", "びねい"],
["鉜𠥺", "ふうおう"],
["牻牛児", "ふうろそう"],
["芙𠙢", "ふきょ"],
["鯸鮧魚(当て字読み)", "ふぐ"],
["𠄰ける", "ふける"],
["鬴鍑", "ふふう"],
["氐(かな３文字で)", "ふもと"],
["𠝷鶞", "ふんちゅん"],
["彘", "ぶた"],
["鼙鼓", "へいこ"],
["𠍯𠋱", "へつしつ"],
["𡙼扭", "へつじゅう"],
["𥝀(かな２文字で)", "へび"],
["𪓢𪓹", "べいば"],
["𤑺𢍝", "べきれい"],
["𤑺𥯵", "べきれい"],
["㒝偰", "べつせつ"],
["癙", "ペスト"],
["虣虐", "ほうぎゃく"],
["匉訇", "ほうこう"],
["𦿑る", "ほうむる"],
["𡵅", "ほき"],
["黼冔", "ほく"],
["僰文", "ほくぶん"],
["𪖈𪔿", "ほくほく"],
["繄", "ほこばくろ,ほこぶくろ"],
["嶲(かな５文字で)", "ほととぎす"],
["嚫す", "ほどこす"],
["𠇜す", "ほどこす"],
["𢒃す", "ほどこす"],
["卟吩", "ほふん"],
["吲む", "ほほえむ"],
["戩す", "ほろぼす"],
["渺㵿", "ぼうきょう"],
["冇骨消", "ぼうこつしょう"],
["𧐟𦯌", "ぼうぼう"],
["釙(かな５文字で)", "ポロニウム"],
["繃標烏(当て字読み)", "ポンペイウス"],
["伩せる", "まかせる"],
["𨤏く", "まく"],
["𠤛(かな３文字で)", "まこと"],
["夛に", "まさに"],
["𠅫る", "まさる"],
["冞", "ますます"],
["麦哲倫(当て字読み)", "マゼラン"],
["桃葉衛矛(当て字読み)", "まゆみ"],
["仢(かな５文字で)", "まるきばし"],
["粆", "ミクロン,マイクロメートル"],
["女匠桃虫(当て字読み)", "みそさざい"],
["襪雀(当て字読み)", "みそさざい"],
["倠い", "みにくい"],
["噕い", "みにくい"],
["嬽い", "みめよい"],
["閿る", "みる"],
["闆る", "みる"],
["嘬る", "むさぼる"],
["亄る", "むさぼる"],
["伕(かな５文字で)", "むすめむこ"],
["罿", "むそうあみ"],
["牸(かな３文字で)", "めうし"],
["匌る", "めぐる"],
["垽る", "めぐる"],
["夒(かな３文字で)", "めざる"],
["𠭙す", "もうす"],
["𧀋菇", "もく"],
["匄める", "もとめる"],
["丿る", "もとる"],
["哧", "ものみ"],
["堲(かな４文字で)", "やきつち,もえさし"],
["嘼う", "やしなう"],
["佾い", "やすい"],
["蠲", "やすで"],
["𠭳らか", "やすらか"],
["奀せる", "やせる"],
["烏蘞苺(「うれんばい」以外で)", "やぶがらし"],
["乜", "やぶにらみ"],
["禾葉土麦冬(当て字読み)", "やぶらん"],
["俷る", "やぶる"],
["褎然", "ゆうぜん"],
["冘豫", "ゆうよ"],
["窳圔", "ゆおう"],
["啙む", "ゆがむ"],
["尦む", "ゆきなやむ"],
["𦦬る", "ゆずる"],
["麿蘢(当て字読み)", "ゆり"],
["豸める", "ゆるめる"],
["逌やか", "ゆるやか"],
["𠮳𠮴", "ようおう"],
["耺耾", "ようこう"],
["𡴂じる", "よじる"],
["𠃢つ", "よつ"],
["伷(かな３文字で)", "よつぎ"],
["囙る", "よる"],
["茝(かな５文字で)", "よろいぐさ"],
["衎ぶ", "よろこぶ"],
["𠃡(かな３文字で)", "よろず"],
["俀い", "よわい"],
["另外", "れいがい"],
["盭夫", "れいふ"],
["菈𦿚", "ろうとう"],
["玈弓", "ろきゅう"],
["彔蔌", "ろくそく"],
["溛瀤", "わかい"],
["𧁇い", "わかい"],
["𦴘る", "わかる"],
["𠔁れる", "わかれる"],
["冎ける", "わける"],
["𠄢る", "わたる"],
["鼉", "わに"]
);