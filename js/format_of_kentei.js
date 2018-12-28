
// - - タイトルの設定 - -

const TITLE = "難読漢字検定 - " + KENTEI_NAME;
let PAGE_TITLE;

if (typeof(CLASS) !== "undefined") {
	PAGE_TITLE = "難読漢字検定 " + KENTEI_NAME;
} else if (typeof(KANKEN) !== "undefined") {
	PAGE_TITLE = KENTEI_NAME;
}

// - - 背景の設定 - -

let BACKGROUND_URL;

if (typeof(CLASS) !== "undefined") {
	BACKGROUND_URL = "../img/img" + CLASS + ".jpg";
} else if (typeof(ICHIRAN) !== "undefined") {
	BACKGROUND_URL = "../img/img_ichiran.jpg";
} else if (typeof(KANKEN) !== "undefined") {
	BACKGROUND_URL = "../img/img_kanken.jpg";
}

const MAIN_Q_NUM = Q_NUM.length; // 大問の数
const KENTEI_LEVEL = '検定レベル：' + KENTEI_NAME;
const GOKAKU_LINE = '合格ライン：'+ MAX_SCORE +'点中'+ GOKAKU_SCORE +'点以上';
const COOKIE = FILE_NAME;


// - - ジャンルパネルの設定 - -

// パネル位置の設定
let GENRE_FIELD_HEIGHT;

if (typeof(CLASS) !== "undefined") {
	
	if (GENRE[0].length <= 3) {
		GENRE_FIELD_HEIGHT = "340px";
	} else {
		GENRE_FIELD_HEIGHT = "470px";
	}
	
} else if (typeof(KANKEN) !== "undefined") {
	
	GENRE_FIELD_HEIGHT = "430px";
}

// - - レベルパネルの設定 - -

const LEVEL = ["LEVEL 1", "LEVEL 2", "LEVEL 3"];
const LEVEL_EN = ["level1", "level2", "level3"];

// - - Twitter用画像の設定 - -

let MEDAL_IMAGE; // 合格したときのTwitter用画像

if (FILE_NAME === "6class") {
	MEDAL_IMAGE = {"満点":"t.co/b7KisIGcaG", "合格":"t.co/FtC7ur4IF5", "あと少し":"t.co/AQ3EzUtajU", "不合格":""};
} else if (FILE_NAME === "5class") {
	MEDAL_IMAGE = {"満点":"t.co/c4q8AcCcq1", "合格":"t.co/1T9Zqwfx11", "あと少し":"t.co/1jLh7dBZTS", "不合格":""};
} else if (FILE_NAME === "4class") {
	MEDAL_IMAGE = {"満点":"t.co/tjACUEMGBz", "合格":"t.co/7r08yfY5AM", "あと少し":"t.co/OREdNhCkRf", "不合格":""};
} else if (FILE_NAME === "3class") {
	MEDAL_IMAGE = {"満点":"t.co/qF6L8Kn3Ht", "合格":"t.co/N8Rt9Uied9", "あと少し":"t.co/uZRMsIK03G", "不合格":""};
} else if (FILE_NAME === "2class") {
	MEDAL_IMAGE = {"満点":"t.co/tUHG7PxZ9X", "合格":"t.co/sZYPRm4FnU", "あと少し":"t.co/72O9nyL3C9", "不合格":""};
} else if (FILE_NAME === "1class") {
	MEDAL_IMAGE = {"満点":"t.co/9aDyZh7mFD", "合格":"t.co/TpRfoOPugx", "あと少し":"t.co/MoO9h6Asmx", "不合格":""};
} else if (FILE_NAME === "kanken_1_ateji") {
	MEDAL_IMAGE = {"満点":"t.co/QrnDArCcWw", "合格":"t.co/HJXxC67et8", "あと少し":"t.co/kKy6SfzxbU", "不合格":""};
} else if (FILE_NAME === "kanken_1_jukugo") {
	MEDAL_IMAGE = {"満点":"t.co/DB8BYX6pEN", "合格":"t.co/sLCJD5HsW1", "あと少し":"t.co/EeITdNnXeo", "不合格":""};
} else if (FILE_NAME === "kanken_jun1_jukugo") {
	MEDAL_IMAGE = {"満点":"t.co/DB8BYX6pEN", "合格":"t.co/sLCJD5HsW1", "あと少し":"t.co/EeITdNnXeo", "不合格":""};
} else if (FILE_NAME === "kanken_1_kun") {
	MEDAL_IMAGE = {"満点":"t.co/7teSBuqK73", "合格":"t.co/RpgRS8UiWF", "あと少し":"t.co/zEzP46eipQ", "不合格":""};
} else if (FILE_NAME === "kanken_jun1_kun") {
	MEDAL_IMAGE = {"満点":"t.co/7teSBuqK73", "合格":"t.co/RpgRS8UiWF", "あと少し":"t.co/zEzP46eipQ", "不合格":""};
}