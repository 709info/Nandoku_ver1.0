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

const KANKEN = "jun1_jukugo";
const KENTEI_NAME = "熟語の読み(漢検準１級)";
const FILE_NAME = "kanken_jun1_jukugo"; // 「○○.html」などで使用
const GENRE = [["熟語"]];
const GENRE_EN = ["jukugo"];
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

 QUESTION_STR[0] = "%E6%AC%A1%E3%81%AE%E6%BC%A2%E5%AD%97%E3%81%AE%E8%AA%AD%E3%81%BF%E3%82%92%E9%9F%B3%E8%AA%AD%E3%81%BF%E3%81%A7%E7%AD%94%E3%81%88%E3%81%AA%E3%81%95%E3%81%84%E3%80%82"

DATA[0][0] = new Array(
["%E8%92%BC%E6%B5%B7", "%E3%81%9D%E3%81%86%E3%81%8B%E3%81%84"],
["%E6%A5%95%E5%86%86", "%E3%81%A0%E3%81%88%E3%82%93"],
["%E9%9D%AD%E5%B8%AF", "%E3%81%98%E3%82%93%E3%81%9F%E3%81%84"],
["%E5%80%A6%E6%80%A0%E6%84%9F", "%E3%81%91%E3%82%93%E3%81%9F%E3%81%84%E3%81%8B%E3%82%93"],
["%E5%92%B3%E5%94%BE", "%E3%81%8C%E3%81%84%E3%81%A0"],
["%E7%8B%90%E7%8B%B8", "%E3%81%93%E3%82%8A"],
["%E7%99%BD%E7%8B%90", "%E3%81%B3%E3%82%83%E3%81%A3%E3%81%93"],
["%E6%B1%9A%E7%80%86", "%E3%81%8A%E3%81%A8%E3%81%8F"],
["%E8%91%9B%E8%A1%A3", "%E3%81%8B%E3%81%A4%E3%81%84"],
["%E8%93%8B%E4%B8%96", "%E3%81%8C%E3%81%84%E3%81%9B%E3%81%84"],
["%E6%BE%B1%E7%B2%89", "%E3%81%A7%E3%82%93%E3%81%B7%E3%82%93"],
["%E5%BD%A2%E9%AA%B8", "%E3%81%91%E3%81%84%E3%81%8C%E3%81%84"],
["%E6%8B%B3%E5%9B%BA", "%E3%81%92%E3%82%93%E3%81%93"],
["%E9%98%BF%E7%89%87%E7%AA%9F", "%E3%81%82%E3%81%B8%E3%82%93%E3%81%8F%E3%81%A4"],
["%E5%AE%A5%E6%81%95", "%E3%82%86%E3%81%86%E3%81%98%E3%82%87"],
["%E6%81%A9%E8%AA%BC", "%E3%81%8A%E3%82%93%E3%81%8E"],
["%E6%9B%B3%E8%88%AA", "%E3%81%88%E3%81%84%E3%81%93%E3%81%86"],
["%E5%B0%96%E5%85%B5", "%E3%81%9B%E3%82%93%E3%81%BA%E3%81%84"],
["%E5%A1%B5%E8%8A%A5", "%E3%81%98%E3%82%93%E3%81%8B%E3%81%84"],
["%E6%AE%8B%E8%9F%AC", "%E3%81%96%E3%82%93%E3%81%9B%E3%82%93"],
["%E8%95%A9%E5%B0%BD", "%E3%81%A8%E3%81%86%E3%81%98%E3%82%93"],
["%E8%B4%8B%E9%80%A0", "%E3%81%8C%E3%82%93%E3%81%9E%E3%81%86"],
["%E7%B8%9E%E7%B4%A0", "%E3%81%93%E3%81%86%E3%81%9D"],
["%E7%85%BD%E5%8B%95", "%E3%81%9B%E3%82%93%E3%81%A9%E3%81%86"],
["%E4%BE%AE%E8%94%91", "%E3%81%B6%E3%81%B9%E3%81%A4"],
["%E7%94%BB%E9%A4%85", "%E3%81%8C%E3%81%B9%E3%81%84%2C%E3%81%8C%E3%81%B8%E3%81%84"],
["%E9%B4%BB%E6%AF%9B", "%E3%81%93%E3%81%86%E3%82%82%E3%81%86"],
["%E9%A0%93%E6%8C%AB", "%E3%81%A8%E3%82%93%E3%81%96"],
["%E6%AD%8E%E5%A3%B0", "%E3%81%9F%E3%82%93%E3%81%9B%E3%81%84"],
["%E4%B8%B2%E6%AE%BA", "%E3%81%9B%E3%82%93%E3%81%95%E3%81%A4"],
["%E7%AD%86%E9%8B%92", "%E3%81%B2%E3%81%A3%E3%81%BD%E3%81%86"],
["%E7%89%A1%E4%B8%B9", "%E3%81%BC%E3%81%9F%E3%82%93"],
["%E8%94%BD%E8%AD%B7", "%E3%81%B8%E3%81%84%E3%81%94"],
["%E5%BC%98%E6%AF%85", "%E3%81%93%E3%81%86%E3%81%8D"],
["%E5%BC%98%E8%AA%93", "%E3%81%90%E3%81%9C%E3%81%84"],
["%E7%B7%A8%E8%BC%AF", "%E3%81%B8%E3%82%93%E3%81%97%E3%82%85%E3%81%86"],
["%E6%85%B0%E6%92%AB", "%E3%81%84%E3%81%B6"],
["%E9%A6%A8%E9%A6%99", "%E3%81%91%E3%81%84%E3%81%93%E3%81%86"],
["%E6%AC%A3%E5%BF%AB", "%E3%81%8D%E3%82%93%E3%81%8B%E3%81%84"],
["%E8%B7%A8%E7%B7%9A%E6%A9%8B", "%E3%81%93%E3%81%9B%E3%82%93%E3%81%8D%E3%82%87%E3%81%86"],
["%E5%AF%93%E6%84%8F", "%E3%81%90%E3%81%86%E3%81%84"],
["%E7%A8%BD%E5%8F%A4", "%E3%81%91%E3%81%84%E3%81%93"],
["%E5%B2%A8%E5%B3%BB", "%E3%81%9D%E3%81%97%E3%82%85%E3%82%93"],
["%E6%9D%9C%E7%B5%B6", "%E3%81%A8%E3%81%9C%E3%81%A4"],
["%E7%A6%BF%E7%AD%86", "%E3%81%A8%E3%81%8F%E3%81%B2%E3%81%A4"],
["%E6%83%87%E6%9C%B4", "%E3%81%98%E3%82%85%E3%82%93%E3%81%BC%E3%81%8F"],
["%E6%8F%83%E5%88%88", "%E3%81%9B%E3%82%93%E3%81%8C%E3%81%84"],
["%E6%94%AA%E4%B9%B1", "%E3%81%8B%E3%81%8F%E3%82%89%E3%82%93%2C%E3%81%93%E3%81%86%E3%82%89%E3%82%93"],
["%E6%B1%80%E6%B8%9A", "%E3%81%A6%E3%81%84%E3%81%97%E3%82%87"],
["%E6%AB%9B%E6%AF%94", "%E3%81%97%E3%81%A3%E3%81%B4"],
["%E8%A8%BB%E9%87%88", "%E3%81%A1%E3%82%85%E3%81%86%E3%81%97%E3%82%83%E3%81%8F"],
["%E6%9E%95%E9%A0%AD", "%E3%81%A1%E3%82%93%E3%81%A8%E3%81%86"],
["%E8%84%87%E6%81%AF", "%E3%81%8D%E3%82%87%E3%81%86%E3%81%9D%E3%81%8F"],
["%E8%89%B6%E5%86%B6", "%E3%81%88%E3%82%93%E3%82%84"],
["%E8%A3%9C%E7%B6%B4", "%E3%81%BB%E3%81%A6%E3%81%A4%2C%E3%81%BB%E3%81%A6%E3%81%84"],
["%E6%91%BA%E6%89%87", "%E3%81%97%E3%82%87%E3%81%86%E3%81%9B%E3%82%93"],
["%E9%87%A3%E9%89%A4", "%E3%81%A1%E3%82%87%E3%81%86%E3%81%93%E3%81%86"],
["%E4%BC%BD%E7%BE%85", "%E3%81%8D%E3%82%83%E3%82%89"],
["%E5%8F%B6%E5%92%8C", "%E3%81%8D%E3%82%87%E3%81%86%E3%82%8F"],
["%E6%93%BE%E4%B9%B1", "%E3%81%98%E3%82%87%E3%81%86%E3%82%89%E3%82%93"],
["%E5%8B%BE%E5%BC%95", "%E3%81%93%E3%81%86%E3%81%84%E3%82%93"],
["%E8%80%BD%E8%AA%AD", "%E3%81%9F%E3%82%93%E3%81%A9%E3%81%8F"],
["%E6%82%89%E7%9A%86", "%E3%81%97%E3%81%A3%E3%81%8B%E3%81%84"],
["%E5%B2%A1%E9%99%B5", "%E3%81%93%E3%81%86%E3%82%8A%E3%82%87%E3%81%86"],
["%E5%88%BA%E7%B9%A1", "%E3%81%97%E3%81%97%E3%82%85%E3%81%86"],
["%E5%BE%8B%E5%91%82", "%E3%82%8A%E3%81%A4%E3%82%8A%E3%82%87"],
["%E6%92%9E%E7%9D%80", "%E3%81%A9%E3%81%86%E3%81%A1%E3%82%83%E3%81%8F"],
["%E7%B6%BE%E7%BE%85", "%E3%82%8A%E3%82%87%E3%81%86%E3%82%89"],
["%E5%9F%8E%E7%A0%A6", "%E3%81%98%E3%82%87%E3%81%86%E3%81%95%E3%81%84"],
["%E5%BC%9B%E7%B7%A9", "%E3%81%97%E3%81%8B%E3%82%93"],
["%E9%9F%B3%E5%8F%89", "%E3%81%8A%E3%82%93%E3%81%95"],
["%E4%BA%91%E4%BA%91", "%E3%81%86%E3%82%93%E3%81%AC%E3%82%93"],
["%E4%BB%87%E6%95%B5", "%E3%81%8D%E3%82%85%E3%81%86%E3%81%A6%E3%81%8D"],
["%E4%BB%80%E5%99%A8", "%E3%81%98%E3%82%85%E3%81%86%E3%81%8D"],
["%E5%8B%BF%E8%AB%96", "%E3%82%82%E3%81%A1%E3%82%8D%E3%82%93"],
["%E7%A2%BA%E4%B9%8E", "%E3%81%8B%E3%81%A3%E3%81%93"],
["%E5%90%83%E9%9F%B3", "%E3%81%8D%E3%81%A4%E3%81%8A%E3%82%93"],
["%E5%85%87%E6%82%AA", "%E3%81%8D%E3%82%87%E3%81%86%E3%81%82%E3%81%8F"],
["%E6%BD%AE%E6%B1%90", "%E3%81%A1%E3%82%87%E3%81%86%E3%81%9B%E3%81%8D"],
["%E8%82%8B%E9%AA%A8", "%E3%82%8D%E3%81%A3%E3%81%93%E3%81%A4"],
["%E5%A4%A9%E4%BD%91", "%E3%81%A6%E3%82%93%E3%82%86%E3%81%86"],
["%E6%B0%B8%E5%8A%AB", "%E3%81%88%E3%81%84%E3%81%94%E3%81%86"],
["%E5%AE%8F%E9%81%A0", "%E3%81%93%E3%81%86%E3%81%88%E3%82%93"],
["%E6%9D%93%E5%AD%90", "%E3%81%97%E3%82%83%E3%81%8F%E3%81%97"],
["%E5%AE%8B%E9%9F%B3", "%E3%81%9D%E3%81%86%E3%81%8A%E3%82%93"],
["%E5%91%86%E7%84%B6", "%E3%81%BC%E3%81%86%E3%81%9C%E3%82%93"],
["%E6%B7%B7%E6%B2%8C", "%E3%81%93%E3%82%93%E3%81%A8%E3%82%93"],
["%E6%89%AE%E9%A3%BE", "%E3%81%B5%E3%82%93%E3%81%97%E3%82%87%E3%81%8F"],
["%E5%BA%87%E8%AD%B7", "%E3%81%B2%E3%81%94"],
["%E8%8A%99%E8%93%89", "%E3%81%B5%E3%82%88%E3%81%86"],
["%E4%BC%B6%E5%AE%98", "%E3%82%8C%E3%81%84%E3%81%8B%E3%82%93"],
["%E4%BF%A0%E5%AE%A2", "%E3%81%8D%E3%82%87%E3%81%86%E3%81%8B%E3%81%8F"],
["%E6%80%AF%E5%BC%B1", "%E3%81%8D%E3%82%87%E3%81%86%E3%81%98%E3%82%83%E3%81%8F"],
["%E8%B5%B0%E7%8B%97", "%E3%81%9D%E3%81%86%E3%81%8F"],
["%E5%A7%91%E6%81%AF", "%E3%81%93%E3%81%9D%E3%81%8F"],
["%E4%BD%BC%E4%BA%BA", "%E3%81%93%E3%81%86%E3%81%98%E3%82%93"],
["%E6%98%82%E9%80%B2", "%E3%81%93%E3%81%86%E3%81%97%E3%82%93"],
["%E4%BD%B3%E8%82%B4", "%E3%81%8B%E3%81%93%E3%81%86"],
["%E5%BF%BD%E7%84%B6", "%E3%81%93%E3%81%A4%E3%81%9C%E3%82%93"],
["%E6%98%8F%E8%BF%B7", "%E3%81%93%E3%82%93%E3%82%81%E3%81%84"],
["%E4%BB%8F%E9%99%80", "%E3%81%B6%E3%81%A3%E3%81%A0"],
["%E6%9E%87%E6%9D%B7", "%E3%81%B3%E3%82%8F"],
["%E7%90%B5%E7%90%B6", "%E3%81%B3%E3%82%8F"],
["%E6%8C%89%E6%91%A9", "%E3%81%82%E3%82%93%E3%81%BE"],
["%E6%BC%8F%E6%B4%A9", "%E3%82%8D%E3%81%86%E3%81%88%E3%81%84%2C%E3%82%8D%E3%81%86%E3%81%9B%E3%81%A4"],
["%E9%87%88%E8%BF%A6", "%E3%81%97%E3%82%83%E3%81%8B"],
["%E6%81%B0%E5%A5%BD", "%E3%81%8B%E3%81%A3%E3%81%93%E3%81%86"],
["%E6%8A%95%E5%87%BD", "%E3%81%A8%E3%81%86%E3%81%8B%E3%82%93"],
["%E5%B7%B7%E9%96%93", "%E3%81%93%E3%81%86%E3%81%8B%E3%82%93"],
["%E7%8F%8A%E7%91%9A", "%E3%81%95%E3%82%93%E3%81%94"],
["%E7%A9%BF%E5%AD%94", "%E3%81%9B%E3%82%93%E3%81%93%E3%81%86"],
["%E5%85%AB%E7%B4%98", "%E3%81%AF%E3%81%A3%E3%81%93%E3%81%86"],
["%E5%89%83%E9%AB%AA", "%E3%81%A6%E3%81%84%E3%81%AF%E3%81%A4"],
["%E5%95%9E%E7%84%B6(%E3%80%8C%E2%80%95%E3%81%A8%E3%81%97%E3%81%A6%E5%A3%B0%E3%82%82%E5%87%BA%E3%81%AA%E3%81%84%E3%80%8D)", "%E3%81%82%E3%81%9C%E3%82%93"],
["%E7%8B%AD%E7%AA%84", "%E3%81%8D%E3%82%87%E3%81%86%E3%81%95%E3%81%8F"],
["%E9%99%BA%E5%B3%BB", "%E3%81%91%E3%82%93%E3%81%97%E3%82%85%E3%82%93"],
["%E5%A4%A9%E7%A7%A4", "%E3%81%A6%E3%82%93%E3%81%B3%E3%82%93"],
["%E8%84%86%E5%BC%B1", "%E3%81%9C%E3%81%84%E3%81%98%E3%82%83%E3%81%8F"],
["%E9%96%83%E5%85%89", "%E3%81%9B%E3%82%93%E3%81%93%E3%81%86"],
["%E5%97%9C%E5%A5%BD", "%E3%81%97%E3%81%93%E3%81%86"],
["%E5%A4%96%E5%A5%97", "%E3%81%8C%E3%81%84%E3%81%A8%E3%81%86"],
["%E7%8B%BC%E7%8B%BD", "%E3%82%8D%E3%81%86%E3%81%B0%E3%81%84"],
["%E5%8C%AA%E8%B3%8A", "%E3%81%B2%E3%81%9E%E3%81%8F"],
["%E8%B1%B9%E5%A4%89", "%E3%81%B2%E3%82%87%E3%81%86%E3%81%B8%E3%82%93"],
["%E5%A8%A9%E7%97%9B", "%E3%81%B9%E3%82%93%E3%81%A4%E3%81%86"],
["%E8%93%AC%E8%90%8A", "%E3%81%BB%E3%81%86%E3%82%89%E3%81%84"],
["%E6%80%9D%E6%83%9F", "%E3%81%97%E3%81%84"],
["%E9%B3%B3%E5%87%B0", "%E3%81%BB%E3%81%86%E3%81%8A%E3%81%86"],
["%E8%A2%88%E8%A3%9F", "%E3%81%91%E3%81%95"],
["%E7%A7%98%E8%A8%A3", "%E3%81%B2%E3%81%91%E3%81%A4"],
["%E5%B8%AD%E6%8D%B2", "%E3%81%9B%E3%81%A3%E3%81%91%E3%82%93"],
["%E6%A2%B1%E5%8C%85", "%E3%81%93%E3%82%93%E3%81%BD%E3%81%86"],
["%E6%8D%B7%E5%BE%84", "%E3%81%97%E3%82%87%E3%81%86%E3%81%91%E3%81%84"],
["%E6%9C%AB%E6%A2%A2", "%E3%81%BE%E3%81%A3%E3%81%97%E3%82%87%E3%81%86"],
["%E6%93%8D%E8%88%B5", "%E3%81%9D%E3%81%86%E3%81%A0"],
["%E6%8D%BA%E5%8D%B0", "%E3%81%AA%E3%81%A4%E3%81%84%E3%82%93"],
["%E6%B7%98%E6%B1%B0", "%E3%81%A8%E3%81%86%E3%81%9F"],
["%E8%91%A1%E8%90%84", "%E3%81%B6%E3%81%A9%E3%81%86"],
["%E7%B3%9F%E7%B2%95", "%E3%81%9D%E3%81%86%E3%81%AF%E3%81%8F"],
["%E5%9F%A0%E9%A0%AD", "%E3%81%B5%E3%81%A8%E3%81%86"],
["%E6%8D%A7%E8%85%B9", "%E3%81%BB%E3%81%86%E3%81%B5%E3%81%8F"],
["%E5%89%B2%E7%83%B9", "%E3%81%8B%E3%81%A3%E3%81%BD%E3%81%86"],
["%E7%90%89%E7%92%83", "%E3%82%8B%E3%82%8A"],
["%E6%B7%8B%E7%97%85", "%E3%82%8A%E3%82%93%E3%81%B3%E3%82%87%E3%81%86"],
["%E5%87%B1%E6%AD%8C", "%E3%81%8C%E3%81%84%E3%81%8B"],
["%E7%A8%80%E6%9C%89", "%E3%81%91%E3%81%86"],
["%E7%8E%89%E7%91%9B", "%E3%81%8E%E3%82%87%E3%81%8F%E3%81%88%E3%81%84"],
["%E5%8F%A3%E8%85%94", "%E3%81%93%E3%81%86%E3%81%93%E3%81%86%2C%E3%81%93%E3%81%86%E3%81%8F%E3%81%86"],
["%E5%96%A7%E9%A8%92", "%E3%81%91%E3%82%93%E3%81%9D%E3%81%86"],
["%E7%AB%A3%E5%B7%A5", "%E3%81%97%E3%82%85%E3%82%93%E3%81%93%E3%81%86"],
["%E5%BC%B7%E9%9D%B1", "%E3%81%8D%E3%82%87%E3%81%86%E3%81%98%E3%82%93"],
["%E6%A3%B2%E6%81%AF", "%E3%81%9B%E3%81%84%E3%81%9D%E3%81%8F"],
["%E6%B9%8A%E6%B3%8A", "%E3%81%9D%E3%81%86%E3%81%AF%E3%81%8F"],
["%E5%AE%89%E5%A0%B5", "%E3%81%82%E3%82%93%E3%81%A9"],
["%E4%BD%8D%E7%89%8C", "%E3%81%84%E3%81%AF%E3%81%84"],
["%E7%B5%A2%E9%A3%BE", "%E3%81%91%E3%82%93%E3%81%97%E3%82%87%E3%81%8F"],
["%E5%BE%AE%E7%A6%84", "%E3%81%B3%E3%82%8D%E3%81%8F"],
["%E9%B3%A9%E8%88%8E", "%E3%81%8D%E3%82%85%E3%81%86%E3%81%97%E3%82%83"],
["%E5%AE%98%E7%89%92", "%E3%81%8B%E3%82%93%E3%81%A1%E3%82%87%E3%81%86"],
["%E5%8D%91%E8%B3%A4", "%E3%81%B2%E3%81%9B%E3%82%93"],
["%E6%A8%AA%E6%BA%A2", "%E3%81%8A%E3%81%86%E3%81%84%E3%81%A4"],
["%E5%87%84%E6%83%A8", "%E3%81%9B%E3%81%84%E3%81%95%E3%82%93"],
["%E6%80%A8%E5%BF%B5", "%E3%81%8A%E3%82%93%E3%81%AD%E3%82%93"],
["%E6%86%BE%E6%80%A8", "%E3%81%8B%E3%82%93%E3%81%88%E3%82%93"],
["%E4%BF%84%E7%84%B6", "%E3%81%8C%E3%81%9C%E3%82%93"],
["%E8%98%87%E7%94%9F", "%E3%81%9D%E3%81%9B%E3%81%84"],
["%E6%8E%8C%E7%AF%87", "%E3%81%97%E3%82%87%E3%81%86%E3%81%B8%E3%82%93"],
["%E7%81%BC%E7%86%B1", "%E3%81%97%E3%82%83%E3%81%8F%E3%81%AD%E3%81%A4"],
["%E5%87%8C%E9%A7%95", "%E3%82%8A%E3%82%87%E3%81%86%E3%81%8C"],
["%E6%AD%AA%E6%9B%B2", "%E3%82%8F%E3%81%84%E3%81%8D%E3%82%87%E3%81%8F"],
["%E8%91%9B%E8%97%A4", "%E3%81%8B%E3%81%A3%E3%81%A8%E3%81%86"],
["%E6%99%A6%E6%9C%94", "%E3%81%8B%E3%81%84%E3%81%95%E3%81%8F"],
["%E6%A4%BF%E5%AF%BF", "%E3%81%A1%E3%82%93%E3%81%98%E3%82%85"],
["%E5%8C%BA%E5%8A%83", "%E3%81%8F%E3%81%8B%E3%81%8F"],
["%E6%89%95%E6%8B%AD", "%E3%81%B5%E3%81%A3%E3%81%97%E3%82%87%E3%81%8F%2C%E3%81%B5%E3%81%A3%E3%81%97%E3%81%8D"],
["%E5%A0%86%E6%9C%B1", "%E3%81%A4%E3%81%84%E3%81%97%E3%82%85%2C(%E3%81%9F%E3%81%84%E3%81%97%E3%82%85)"],
["%E5%87%8B%E6%AE%8B", "%E3%81%A1%E3%82%87%E3%81%86%E3%81%96%E3%82%93"],
["%E9%BC%8E%E8%AB%87", "%E3%81%A6%E3%81%84%E3%81%A0%E3%82%93"],
["%E5%BB%9F%E5%A0%82", "%E3%81%B3%E3%82%87%E3%81%86%E3%81%A9%E3%81%86"],
["%E4%B8%80%E7%9E%A5", "%E3%81%84%E3%81%A1%E3%81%B9%E3%81%A4"],
["%E5%BA%96%E5%8E%A8", "%E3%81%BB%E3%81%86%E3%81%A1%E3%82%85%E3%81%86"],
["%E6%8E%AC%E6%B0%B4", "%E3%81%8D%E3%81%8F%E3%81%99%E3%81%84"],
["%E8%AC%AC%E8%A6%8B", "%E3%81%B3%E3%82%85%E3%81%86%E3%81%91%E3%82%93"],
["%E5%92%BD%E5%96%89", "%E3%81%84%E3%82%93%E3%81%93%E3%81%86"],
["%E5%92%BD%E4%B8%8B", "%E3%81%88%E3%82%93%E3%81%8B%2C%E3%81%88%E3%82%93%E3%81%92"],
["%E8%A2%96%E7%8F%8D", "%E3%81%97%E3%82%85%E3%81%86%E3%81%A1%E3%82%93"],
["%E8%AC%99%E9%81%9C", "%E3%81%91%E3%82%93%E3%81%9D%E3%82%93"],
["%E8%82%87%E5%9B%BD", "%E3%81%A1%E3%82%87%E3%81%86%E3%81%93%E3%81%8F"],
["%E8%B1%8A%E9%A0%AC", "%E3%81%BB%E3%81%86%E3%81%8D%E3%82%87%E3%81%86"],
["%E9%AC%B1%E5%8B%83", "%E3%81%86%E3%81%A4%E3%81%BC%E3%81%A4"],
["%E7%89%99%E5%9F%8E", "%E3%81%8C%E3%81%98%E3%82%87%E3%81%86"],
["%E6%99%A6%E6%B8%8B", "%E3%81%8B%E3%81%84%E3%81%98%E3%82%85%E3%81%86"],
["%E5%85%9C%E5%B7%BE", "%E3%81%A8%E3%81%8D%E3%82%93"],
["%E5%8E%A9%E8%88%8E", "%E3%81%8D%E3%82%85%E3%81%86%E3%81%97%E3%82%83"],
["%E8%A9%A3%E6%8B%9D", "%E3%81%91%E3%81%84%E3%81%AF%E3%81%84"],
["%E9%87%8E%E7%8B%90", "%E3%82%84%E3%81%93"],
["%E7%87%A6%E7%87%A6", "%E3%81%95%E3%82%93%E3%81%95%E3%82%93"],
["%E6%92%AD%E6%A4%8D", "%E3%81%AF%E3%81%97%E3%82%87%E3%81%8F"],
["%E5%93%80%E6%86%90", "%E3%81%82%E3%81%84%E3%82%8C%E3%82%93"],
["%E8%86%9D%E4%B8%8B", "%E3%81%97%E3%81%A3%E3%81%8B"],
["%E9%A6%B4%E8%87%B4", "%E3%81%98%E3%82%85%E3%82%93%E3%81%A1"],
["%E5%90%BB%E5%90%88", "%E3%81%B5%E3%82%93%E3%81%94%E3%81%86"],
["%E8%80%81%E7%88%BA", "%E3%82%8D%E3%81%86%E3%82%84"],
["%E6%80%92%E6%BF%A4", "%E3%81%A9%E3%81%A8%E3%81%86"],
["%E9%81%A1%E8%A1%8C", "%E3%81%9D%E3%81%93%E3%81%86"],
["%E8%8C%85%E8%88%8E", "%E3%81%BC%E3%81%86%E3%81%97%E3%82%83"],
["%E9%A5%97%E5%AE%B4", "%E3%81%8D%E3%82%87%E3%81%86%E3%81%88%E3%82%93"],
["%E7%89%A2%E5%AE%88", "%E3%82%8D%E3%81%86%E3%81%97%E3%82%85"],
["%E6%8C%BD%E8%BB%8A", "%E3%81%B0%E3%82%93%E3%81%97%E3%82%83"],
["%E7%BF%BB%E5%BC%84", "%E3%81%BB%E3%82%93%E3%82%8D%E3%81%86"],
["%E6%91%B8%E7%B4%A2", "%E3%82%82%E3%81%95%E3%81%8F"],
["%E8%92%99%E5%8F%A4", "%E3%82%82%E3%81%86%E3%81%93"],
["%E6%BA%9C%E9%A3%B2", "%E3%82%8A%E3%82%85%E3%81%86%E3%81%84%E3%82%93"],
["%E7%85%89%E7%93%A6", "%E3%82%8C%E3%82%93%E3%81%8C"],
["%E6%96%A1%E6%97%8B", "%E3%81%82%E3%81%A3%E3%81%9B%E3%82%93"],
["%E5%BB%93%E7%84%B6", "%E3%81%8B%E3%81%8F%E3%81%9C%E3%82%93"],
["%E7%81%8C%E6%B0%B4", "%E3%81%8B%E3%82%93%E3%81%99%E3%81%84"],
["%E5%A4%A7%E8%85%BF", "%E3%81%A0%E3%81%84%E3%81%9F%E3%81%84"],
["%E5%BD%AB%E7%90%A2", "%E3%81%A1%E3%82%87%E3%81%86%E3%81%9F%E3%81%8F"],
["%E8%BF%82%E9%81%A0", "%E3%81%86%E3%81%88%E3%82%93"],
["%E9%A0%B8%E9%AA%A8", "%E3%81%91%E3%81%84%E3%81%93%E3%81%A4"],
["%E8%8F%AF%E5%83%91", "%E3%81%8B%E3%81%8D%E3%82%87%E3%81%86"],
["%E5%88%87%E7%91%B3", "%E3%81%9B%E3%81%A3%E3%81%95"],
["%E5%88%80%E6%A7%8D", "%E3%81%A8%E3%81%86%E3%81%9D%E3%81%86"],
["%E6%BA%B6%E9%8A%91", "%E3%82%88%E3%81%86%E3%81%9B%E3%82%93"],
["%E7%AB%B6%E6%BC%95", "%E3%81%8D%E3%82%87%E3%81%86%E3%81%9D%E3%81%86"],
["%E6%B5%81%E6%9A%A2", "%E3%82%8A%E3%82%85%E3%81%86%E3%81%A1%E3%82%87%E3%81%86"],
["%E7%A2%A7%E7%8E%89", "%E3%81%B8%E3%81%8D%E3%81%8E%E3%82%87%E3%81%8F"],
["%E9%9E%8D%E4%B8%8A", "%E3%81%82%E3%82%93%E3%81%98%E3%82%87%E3%81%86"],
["%E6%87%90%E7%B7%AC", "%E3%81%8B%E3%81%84%E3%82%81%E3%82%93"],
["%E8%BD%9F%E9%9F%B3", "%E3%81%94%E3%81%86%E3%81%8A%E3%82%93"],
["%E7%80%95%E6%AD%BB", "%E3%81%B2%E3%82%93%E3%81%97"],
["%E7%96%8F%E6%9E%97", "%E3%81%9D%E3%82%8A%E3%82%93"]
);

DATA[0][1] = new Array(
["%E5%BC%93%E7%AE%AD", "%E3%81%8D%E3%82%85%E3%81%86%E3%81%9B%E3%82%93"],
["%E8%B1%8E%E5%AD%90", "%E3%81%98%E3%82%85%E3%81%97"],
["%E9%9B%8C%E8%95%8A", "%E3%81%97%E3%81%9A%E3%81%84"],
["%E8%80%B6%E8%98%87", "%E3%82%84%E3%81%9D"],
["%E9%A2%A8%E9%90%B8", "%E3%81%B5%E3%81%86%E3%81%9F%E3%81%8F"],
["%E6%B5%AE%E8%85%AB", "%E3%81%B5%E3%81%97%E3%82%85"],
["%E8%86%9D%E8%A1%8C", "%E3%81%97%E3%81%A3%E3%81%93%E3%81%86"],
["%E5%A3%BA%E4%B8%AD", "%E3%81%93%E3%81%A1%E3%82%85%E3%81%86"],
["%E5%8D%B1%E6%AE%86", "%E3%81%8D%E3%81%9F%E3%81%84"],
["%E5%9A%A2%E4%B8%AD", "%E3%81%AE%E3%81%86%E3%81%A1%E3%82%85%E3%81%86"],
["%E9%96%93%E8%AB%9C", "%E3%81%8B%E3%82%93%E3%81%A1%E3%82%87%E3%81%86"],
["%E9%9A%A0%E9%81%81", "%E3%81%84%E3%82%93%E3%81%A8%E3%82%93"],
["%E9%81%81%E5%B7%A1", "%E3%81%97%E3%82%85%E3%82%93%E3%81%98%E3%82%85%E3%82%93"],
["%E9%80%99%E8%88%AC", "%E3%81%97%E3%82%83%E3%81%AF%E3%82%93"],
["%E7%94%9C%E9%85%92", "%E3%81%A6%E3%82%93%E3%81%97%E3%82%85"],
["%E6%81%A2%E9%83%AD", "%E3%81%8B%E3%81%84%E3%81%8B%E3%81%8F"],
["%E8%AB%AE%E8%AB%8F", "%E3%81%97%E3%81%97%E3%82%85"],
["%E6%B7%B5%E7%8E%84", "%E3%81%88%E3%82%93%E3%81%92%E3%82%93"],
["%E7%A5%81%E5%AF%92", "%E3%81%8D%E3%81%8B%E3%82%93"],
["%E6%88%9A%E5%AE%B9", "%E3%81%9B%E3%81%8D%E3%82%88%E3%81%86"],
["%E6%97%AD%E6%97%A5", "%E3%81%8D%E3%82%87%E3%81%8F%E3%81%98%E3%81%A4"],
["%E5%8F%A9%E9%A0%AD", "%E3%81%93%E3%81%86%E3%81%A8%E3%81%86"],
["%E5%9C%AD%E8%A7%92", "%E3%81%91%E3%81%84%E3%81%8B%E3%81%8F"],
["%E5%8D%92%E4%BC%8D", "%E3%81%9D%E3%81%A4%E3%81%94"],
["%E8%80%8C%E7%AB%8B", "%E3%81%98%E3%82%8A%E3%81%A4"],
["%E6%88%8E%E5%A4%B7", "%E3%81%98%E3%82%85%E3%81%86%E3%81%84"],
["%E6%89%98%E9%89%A2", "%E3%81%9F%E3%81%8F%E3%81%AF%E3%81%A4"],
["%E6%9D%8F%E6%9E%97", "%E3%81%8D%E3%82%87%E3%81%86%E3%82%8A%E3%82%93"],
["%E8%89%B6%E5%A6%93", "%E3%81%88%E3%82%93%E3%81%8E"],
["%E6%B1%B2%E6%B1%B2", "%E3%81%8D%E3%82%85%E3%81%86%E3%81%8D%E3%82%85%E3%81%86"],
["%E6%B8%A9%E7%81%B8", "%E3%81%8A%E3%82%93%E3%81%8D%E3%82%85%E3%81%86"],
["%E5%90%BE%E5%85%84", "%E3%81%94%E3%81%91%E3%81%84"],
["%E5%9D%90%E8%87%A5", "%E3%81%96%E3%81%8C"],
["%E6%9D%96%E5%88%91", "%E3%81%98%E3%82%87%E3%81%86%E3%81%91%E3%81%84"],
["%E5%90%9E%E8%88%9F", "%E3%81%A9%E3%82%93%E3%81%97%E3%82%85%E3%81%86"],
["%E9%95%B7%E5%BA%9A", "%E3%81%A1%E3%82%87%E3%81%86%E3%81%93%E3%81%86"],
["%E8%82%A1%E8%82%B1", "%E3%81%93%E3%81%93%E3%81%86"],
["%E5%9D%A4%E5%BE%B3", "%E3%81%93%E3%82%93%E3%81%A8%E3%81%8F"],
["%E4%BA%9B%E4%BA%8B", "%E3%81%95%E3%81%98"],
["%E5%A4%A9%E7%AB%BA", "%E3%81%A6%E3%82%93%E3%81%98%E3%81%8F"],
["%E5%A6%BE%E5%A9%A6", "%E3%81%97%E3%82%87%E3%81%86%E3%81%B5"],
["%E7%9B%9B%E6%98%8C", "%E3%81%9B%E3%81%84%E3%81%97%E3%82%87%E3%81%86"],
["%E7%94%BB%E5%B8%96", "%E3%81%8C%E3%81%98%E3%82%87%E3%81%86"],
["%E5%9D%A6%E5%A4%B7", "%E3%81%9F%E3%82%93%E3%81%84"],
["%E9%9B%91%E6%B2%93", "%E3%81%96%E3%81%A3%E3%81%A8%E3%81%86"],
["%E7%9F%B3%E6%96%A7", "%E3%81%9B%E3%81%8D%E3%81%B5"],
["%E5%90%8C%E6%9C%8B", "%E3%81%A9%E3%81%86%E3%81%BB%E3%81%86"],
["%E9%83%81%E6%96%87", "%E3%81%84%E3%81%8F%E3%81%B6%E3%82%93"],
["%E5%A7%A6%E8%A8%88", "%E3%81%8B%E3%82%93%E3%81%91%E3%81%84"],
["%E7%AB%B9%E7%AB%BF", "%E3%81%A1%E3%81%A3%E3%81%8B%E3%82%93"],
["%E7%A5%9E%E7%A5%87", "%E3%81%97%E3%82%93%E3%81%8E"],
["%E6%9F%B4%E8%8D%8A", "%E3%81%95%E3%81%84%E3%81%91%E3%81%84"],
["%E5%BF%AB%E5%93%89", "%E3%81%8B%E3%81%84%E3%81%95%E3%81%84"],
["%E6%AD%BB%E5%B1%8D", "%E3%81%97%E3%81%97"],
["%E6%9F%81%E6%89%8B", "%E3%81%A0%E3%81%97%E3%82%85"],
["%E5%9E%A2%E9%9B%A2", "%E3%81%93%E3%82%8A"],
["%E5%9E%A2%E8%A1%A3", "%E3%81%93%E3%81%86%E3%81%84"],
["%E7%84%A1%E5%9E%A2", "%E3%82%80%E3%81%8F"],
["%E4%BF%8A%E5%BD%A6", "%E3%81%97%E3%82%85%E3%82%93%E3%81%92%E3%82%93"],
["%E7%8C%AE%E7%9B%83", "%E3%81%91%E3%82%93%E3%81%B1%E3%81%84"],
["%E4%BA%AE%E7%84%B6", "%E3%82%8A%E3%82%87%E3%81%86%E3%81%9C%E3%82%93"],
["%E5%B5%AF%E5%B3%A8", "%E3%81%95%E3%81%8C"],
["%E6%A1%94%E6%A2%97", "%E3%81%8D%E3%81%8D%E3%82%87%E3%81%86%2C%E3%81%91%E3%81%A3%E3%81%93%E3%81%86"],
["%E6%9B%B8%E7%AC%88", "%E3%81%97%E3%82%87%E3%81%8D%E3%82%85%E3%81%86"],
["%E7%9F%A9%E5%BD%A2", "%E3%81%8F%E3%81%91%E3%81%84"],
["%E6%A1%82%E5%BA%B5", "%E3%81%91%E3%81%84%E3%81%82%E3%82%93"],
["%E7%8F%AA%E8%97%BB", "%E3%81%91%E3%81%84%E3%81%9D%E3%81%86"],
["%E6%99%83%E6%99%83", "%E3%81%93%E3%81%86%E3%81%93%E3%81%86"],
["%E6%B5%A9%E7%84%B6", "%E3%81%93%E3%81%86%E3%81%9C%E3%82%93"],
["%E7%83%8F%E5%85%8E", "%E3%81%86%E3%81%A8"],
["%E7%88%BE%E5%BE%8C", "%E3%81%98%E3%81%94"],
["%E9%9A%A0%E6%A0%96", "%E3%81%84%E3%82%93%E3%81%9B%E3%81%84"],
["%E7%B4%90%E5%B8%AF", "%E3%81%A1%E3%82%85%E3%81%86%E3%81%9F%E3%81%84"],
["%E5%93%A8%E6%88%92", "%E3%81%97%E3%82%87%E3%81%86%E3%81%8B%E3%81%84"],
["%E6%99%8B%E5%B1%B1", "%E3%81%97%E3%82%93%E3%81%96%E3%82%93"],
["%E7%9A%AE%E7%96%B9", "%E3%81%B2%E3%81%97%E3%82%93"],
["%E6%8C%BA%E5%87%BA", "%E3%81%A6%E3%81%84%E3%81%97%E3%82%85%E3%81%A4"],
["%E8%A3%85%E9%87%98", "%E3%81%9D%E3%81%86%E3%81%A6%E3%81%84"],
["%E7%B5%83%E6%AD%8C", "%E3%81%92%E3%82%93%E3%81%8B"],
["%E7%87%95%E9%9B%80", "%E3%81%88%E3%82%93%E3%81%98%E3%82%83%E3%81%8F"],
["%E5%A8%BC%E5%A6%93", "%E3%81%97%E3%82%87%E3%81%86%E3%81%8E"],
["%E8%8F%96%E8%92%B2", "%E3%81%97%E3%82%87%E3%81%86%E3%81%B6"],
["%E9%80%97%E7%95%99", "%E3%81%A8%E3%81%86%E3%82%8A%E3%82%85%E3%81%86"],
["%E9%9A%8E%E6%A2%AF", "%E3%81%8B%E3%81%84%E3%81%A6%E3%81%84"],
["%E8%9B%8B%E7%99%BD", "%E3%81%9F%E3%82%93%E3%81%B1%E3%81%8F"],
["%E5%AE%B6%E7%8C%AA", "%E3%81%8B%E3%81%A1%E3%82%87"],
["%E7%A5%88%E7%A6%B1", "%E3%81%8D%E3%81%A8%E3%81%86"],
["%E8%8F%A9%E8%96%A9", "%E3%81%BC%E3%81%95%E3%81%A4"],
["%E9%81%AD%E9%80%A2", "%E3%81%9D%E3%81%86%E3%81%BB%E3%81%86"],
["%E8%90%8C%E8%8A%BD", "%E3%81%BB%E3%81%86%E3%81%8C"],
["%E7%A4%A6%E7%9F%B3", "%E3%81%93%E3%81%86%E3%81%9B%E3%81%8D"],
["%E6%8E%A0%E5%A5%AA", "%E3%82%8A%E3%82%83%E3%81%8F%E3%81%A0%E3%81%A4"],
["%E6%B6%8C%E5%87%BA", "%E3%82%86%E3%81%86%E3%81%97%E3%82%85%E3%81%A4%2C%E3%82%88%E3%81%86%E3%81%97%E3%82%85%E3%81%A4"],
["%E6%A9%8B%E6%A2%81", "%E3%81%8D%E3%82%87%E3%81%86%E3%82%8A%E3%82%87%E3%81%86"],
["%E8%8F%B1%E8%8A%B1", "%E3%82%8A%E3%82%87%E3%81%86%E3%81%8B"],
["%E9%B4%BB%E9%9B%81", "%E3%81%93%E3%81%86%E3%81%8C%E3%82%93"],
["%E8%91%B5%E5%90%91", "%E3%81%8D%E3%81%93%E3%81%86"],
["%E5%96%AC%E6%9C%A8", "%E3%81%8D%E3%82%87%E3%81%86%E3%81%BC%E3%81%8F"],
["%E6%AC%BD%E4%BB%B0", "%E3%81%8D%E3%82%93%E3%81%8E%E3%82%87%E3%81%86%2C%E3%81%8D%E3%82%93%E3%81%94%E3%81%86"],
["%E5%89%A3%E6%88%9F", "%E3%81%91%E3%82%93%E3%81%92%E3%81%8D"],
["%E7%AD%86%E7%A1%AF", "%E3%81%B2%E3%81%A3%E3%81%91%E3%82%93"],
["%E7%8A%80%E8%A7%92", "%E3%81%95%E3%81%84%E3%81%8B%E3%81%8F"],
["%E6%83%B9%E8%B5%B7", "%E3%81%98%E3%82%83%E3%81%A3%E3%81%8D"],
["%E5%96%8B%E5%96%8B", "%E3%81%A1%E3%82%87%E3%81%86%E3%81%A1%E3%82%87%E3%81%86"],
["%E8%85%AB%E8%84%B9", "%E3%81%97%E3%82%85%E3%81%A1%E3%82%87%E3%81%86"],
["%E6%BD%91%E5%A2%A8", "%E3%81%AF%E3%81%A4%E3%81%BC%E3%81%8F"],
["%E7%84%9A%E6%9B%B8", "%E3%81%B5%E3%82%93%E3%81%97%E3%82%87"],
["%E9%81%A5%E9%81%A5", "%E3%82%88%E3%81%86%E3%82%88%E3%81%86"],
["%E7%A7%98%E5%AF%86%E8%A3%A1", "%E3%81%B2%E3%81%BF%E3%81%A4%E3%82%8A"],
["%E5%B1%B1%E9%9A%88", "%E3%81%95%E3%82%93%E3%82%8F%E3%81%84"],
["%E5%AE%B6%E7%A6%BD", "%E3%81%8B%E3%81%8D%E3%82%93"],
["%E7%BD%AB%E7%B4%99", "%E3%81%91%E3%81%84%E3%81%97"],
["%E9%A7%86%E9%A6%B3", "%E3%81%8F%E3%81%A1"],
["%E9%BC%93%E9%89%A6", "%E3%81%93%E3%81%9B%E3%81%84"],
["%E9%89%A6%E9%BC%93", "%E3%81%97%E3%82%87%E3%81%86%E3%81%93"],
["%E5%98%89%E9%9D%96", "%E3%81%8B%E3%81%9B%E3%81%84"],
["%E5%A4%8F%E6%A5%9A", "%E3%81%8B%E3%81%9D"],
["%E7%A2%87%E6%B3%8A", "%E3%81%A6%E3%81%84%E3%81%AF%E3%81%8F"],
["%E6%B1%A0%E5%A1%98", "%E3%81%A1%E3%81%A8%E3%81%86"],
["%E9%80%BC%E5%A1%9E", "%E3%81%B2%E3%81%A3%E3%81%9D%E3%81%8F"],
["%E8%AA%B0%E4%BD%95", "%E3%81%99%E3%81%84%E3%81%8B"],
["%E8%8C%85%E8%8C%A8", "%E3%81%BC%E3%81%86%E3%81%97"],
["%E8%A1%A3%E8%A2%B4", "%E3%81%84%E3%81%93"],
["%E8%83%A1%E4%B9%B1", "%E3%81%86%E3%82%8D%E3%82%93"],
["%E7%A0%A5%E7%A4%AA", "%E3%81%97%E3%82%8C%E3%81%84"],
["%E7%89%9F%E9%A3%9F", "%E3%81%BC%E3%81%86%E3%81%97%E3%82%87%E3%81%8F"],
["%E7%BF%B0%E5%A2%A8", "%E3%81%8B%E3%82%93%E3%81%BC%E3%81%8F"],
["%E6%AD%A3%E9%96%8F", "%E3%81%9B%E3%81%84%E3%81%98%E3%82%85%E3%82%93"],
["%E7%86%8A%E6%8E%8C", "%E3%82%86%E3%81%86%E3%81%97%E3%82%87%E3%81%86"],
["%E5%A4%99%E8%B5%B7", "%E3%81%97%E3%82%85%E3%81%A3%E3%81%8D%2C%E3%81%97%E3%82%85%E3%81%8F%E3%81%8D"],
["%E8%9A%8A%E8%99%BB", "%E3%81%B6%E3%82%93%E3%81%BC%E3%81%86"],
["%E9%A0%81%E5%B2%A9", "%E3%81%91%E3%81%A4%E3%81%8C%E3%82%93"],
["%E7%88%AA%E7%89%99", "%E3%81%9D%E3%81%86%E3%81%8C"],
["%E9%9E%A0%E5%95%8F", "%E3%81%8D%E3%81%8F%E3%82%82%E3%82%93"],
["%E8%8E%AB%E9%80%86", "%E3%81%B0%E3%81%8F%E3%81%8E%E3%82%83%E3%81%8F"],
["%E8%8E%AB%E6%98%A5", "%E3%81%BC%E3%81%97%E3%82%85%E3%82%93"],
["%E8%8D%BB%E8%8A%B1", "%E3%81%A6%E3%81%8D%E3%81%8B"],
["%E9%82%91%E8%90%BD", "%E3%82%86%E3%81%86%E3%82%89%E3%81%8F"],
["%E7%A8%B2%E7%B2%9F", "%E3%81%A8%E3%81%86%E3%81%9E%E3%81%8F"],
["%E7%BF%AB%E5%BC%84", "%E3%81%8C%E3%82%93%E3%82%8D%E3%81%86"],
["%E4%BA%8C%E7%AB%AA", "%E3%81%AB%E3%81%98%E3%82%85"],
["%E7%84%A1%E7%A2%8D", "%E3%82%80%E3%81%92%2C(%E3%82%80%E3%81%8C%E3%81%84)"],
["%E7%A2%8D%E5%AD%90", "%E3%81%8C%E3%81%84%E3%81%97"],
["%E7%83%8F%E6%9C%89", "%E3%81%86%E3%82%86%E3%81%86"],
["%E8%96%AC%E5%8C%99", "%E3%82%84%E3%81%8F%E3%81%97"],
["%E6%9C%89%E5%8D%A6", "%E3%81%86%E3%81%91"],
["%E5%8D%A6%E8%BE%9E", "%E3%81%8B%E3%81%98"],
["%E5%8D%A6%E4%BD%93", "%E3%81%91%E3%81%A3%E3%81%9F%E3%81%84"],
["%E6%80%A5%E7%81%98", "%E3%81%8D%E3%82%85%E3%81%86%E3%81%A0%E3%82%93%2C(%E3%81%8D%E3%82%85%E3%81%86%E3%81%9F%E3%82%93)"],
["%E8%8E%9E%E7%88%BE", "%E3%81%8B%E3%82%93%E3%81%98"],
["%E5%AC%B0%E9%B1%97", "%E3%81%88%E3%81%84%E3%82%8A%E3%82%93"],
["%E6%8E%A9%E8%93%8B", "%E3%81%88%E3%82%93%E3%81%8C%E3%81%84"],
["%E4%BB%B0%E8%87%A5", "%E3%81%8E%E3%82%87%E3%81%86%E3%81%8C"],
["%E4%B8%8D%E5%B1%91", "%E3%81%B5%E3%81%9B%E3%81%A4"],
["%E8%9A%A4%E8%B5%B7", "%E3%81%9D%E3%81%86%E3%81%8D"],
["%E5%BC%A5%E7%B8%AB", "%E3%81%B3%E3%81%BB%E3%81%86%2C(%E3%81%B3%E3%81%BC%E3%81%86)"],
["%E9%BB%9B%E9%9D%92", "%E3%81%9F%E3%81%84%E3%81%9B%E3%81%84"],
["%E5%81%8F%E9%A0%97", "%E3%81%B8%E3%82%93%E3%81%B1"],
["%E5%B7%BD%E4%BD%8D", "%E3%81%9D%E3%82%93%E3%81%84"],
["%E4%BF%97%E8%AB%BA", "%E3%81%9E%E3%81%8F%E3%81%92%E3%82%93"],
["%E5%83%BB%E9%81%A0", "%E3%81%B8%E3%81%8D%E3%81%88%E3%82%93"],
["%E4%BD%B3%E8%BE%B0", "%E3%81%8B%E3%81%97%E3%82%93"],
["%E7%83%8F%E9%B7%BA", "%E3%81%86%E3%82%8D"],
["%E6%8F%96%E6%8B%9D", "%E3%82%86%E3%81%86%E3%81%AF%E3%81%84"],
["%E7%94%A5%E5%A7%AA", "%E3%81%9B%E3%81%84%E3%81%A6%E3%81%A4"],
["%E9%8C%AB%E6%9D%96", "%E3%81%97%E3%82%83%E3%81%8F%E3%81%98%E3%82%87%E3%81%86"],
["%E8%91%9B%E7%93%9C", "%E3%81%8B%E3%81%A3%E3%81%8B"],
["%E8%B5%AB%E7%81%BC", "%E3%81%8B%E3%81%8F%E3%81%97%E3%82%83%E3%81%8F"],
["%E8%81%A1%E6%85%A7", "%E3%81%9D%E3%81%86%E3%81%91%E3%81%84"],
["%E6%99%BA%E6%85%A7", "%E3%81%A1%E3%81%88"],
["%E4%BA%80%E5%8D%9C", "%E3%81%8D%E3%81%BC%E3%81%8F"],
["%E8%B1%8A%E7%A8%94", "%E3%81%BB%E3%81%86%E3%81%98%E3%82%93"],
["%E5%B0%A4%E7%89%A9", "%E3%82%86%E3%81%86%E3%81%B6%E3%81%A4"],
["%E6%B2%83%E9%A5%92", "%E3%82%88%E3%81%8F%E3%81%98%E3%82%87%E3%81%86"],
["%E6%86%82%E6%82%B6", "%E3%82%86%E3%81%86%E3%82%82%E3%82%93"],
["%E5%8E%A9%E8%82%A5", "%E3%81%8D%E3%82%85%E3%81%86%E3%81%B2"],
["%E5%8E%AD%E9%9B%A2", "%E3%81%8A%E3%82%93%E3%82%8A%2C%E3%81%88%E3%82%93%E3%82%8A"],
["%E5%80%A6%E5%8E%AD", "%E3%81%91%E3%82%93%E3%81%88%E3%82%93"],
["%E5%85%9C%E7%8E%87%E5%A4%A9", "%E3%81%A8%E3%81%9D%E3%81%A4%E3%81%A6%E3%82%93"],
["%E5%A5%BD%E5%A5%BD%E7%88%BA", "%E3%81%93%E3%81%86%E3%81%93%E3%81%86%E3%82%84"],
["%E6%A8%97%E6%9D%90", "%E3%81%A1%E3%82%87%E3%81%96%E3%81%84"],
["%E6%9B%BE%E9%81%8A", "%E3%81%9D%E3%81%86%E3%82%86%E3%81%86"],
["%E9%89%A4%E9%A4%8C", "%E3%81%93%E3%81%86%E3%81%98"],
["%E9%B9%BF%E6%9F%B4", "%E3%82%8D%E3%81%8F%E3%81%95%E3%81%84"],
["%E5%BB%A0%E8%88%8E", "%E3%81%97%E3%82%87%E3%81%86%E3%81%97%E3%82%83"],
["%E7%B5%A2%E9%A3%BE", "%E3%81%91%E3%82%93%E3%81%97%E3%82%87%E3%81%8F"],
["%E8%B1%A1%E7%AE%B8", "%E3%81%9E%E3%81%86%E3%81%A1%E3%82%87"],
["%E6%8B%AD%E6%B5%84", "%E3%81%97%E3%82%87%E3%81%8F%E3%81%98%E3%82%87%E3%81%86"],
["%E6%88%8E%E9%A6%AC", "%E3%81%98%E3%82%85%E3%81%86%E3%81%B0"],
["%E9%B6%AF%E9%81%B7", "%E3%81%8A%E3%81%86%E3%81%9B%E3%82%93"],
["%E8%A1%A3%E6%A1%81", "%E3%81%84%E3%81%93%E3%81%86"],
["%E5%84%B2%E5%90%9B", "%E3%81%A1%E3%82%87%E3%81%8F%E3%82%93"],
["%E5%AD%9C%E5%AD%9C", "%E3%81%97%E3%81%97"],
["%E5%A4%AA%E9%96%A4", "%E3%81%9F%E3%81%84%E3%81%93%E3%81%86"],
["%E5%8A%AB%E7%81%AB", "%E3%81%94%E3%81%86%E3%81%8B"],
["%E6%95%A6%E6%9C%B4", "%E3%81%A8%E3%82%93%E3%81%BC%E3%81%8F"],
["%E6%9B%9D%E6%9B%B8", "%E3%81%B0%E3%81%8F%E3%81%97%E3%82%87"],
["%E7%A9%BF%E6%9F%B3", "%E3%81%9B%E3%82%93%E3%82%8A%E3%82%85%E3%81%86"],
["%E4%B8%9E%E7%9B%B8", "%E3%81%98%E3%82%87%E3%81%86%E3%81%97%E3%82%87%E3%81%86"],
["%E6%B4%9B%E9%99%BD", "%E3%82%89%E3%81%8F%E3%82%88%E3%81%86"],
["%E6%B2%83%E5%9C%9F", "%E3%82%88%E3%81%8F%E3%81%A9"],
["%E9%AD%81%E5%82%91", "%E3%81%8B%E3%81%84%E3%81%91%E3%81%A4"],
["%E5%82%AD%E5%BD%B9", "%E3%82%88%E3%81%86%E3%81%88%E3%81%8D"],
["%E5%B1%B1%E7%A8%9C", "%E3%81%95%E3%82%93%E3%82%8A%E3%82%87%E3%81%86"],
["%E8%94%9A%E7%84%B6", "%E3%81%86%E3%81%A4%E3%81%9C%E3%82%93"],
["%E7%B4%99%E9%B3%B6", "%E3%81%97%E3%81%88%E3%82%93"],
["%E7%81%8C%E4%BB%8F%E4%BC%9A", "%E3%81%8B%E3%82%93%E3%81%B6%E3%81%A4%E3%81%88"],
["%E7%AE%95%E5%B1%B1(%E3%80%8C%E2%80%95%E3%81%AE%E5%BF%97%E3%80%8D)", "%E3%81%8D%E3%81%96%E3%82%93"],
["%E8%A8%8A%E5%95%8F", "%E3%81%98%E3%82%93%E3%82%82%E3%82%93"],
["%E5%B2%B1%E5%B1%B1", "%E3%81%9F%E3%81%84%E3%81%96%E3%82%93"],
["%E5%8B%BF%E6%80%AA", "%E3%82%82%E3%81%A3%E3%81%91"],
["%E8%84%82%E8%86%8F", "%E3%81%97%E3%81%93%E3%81%86"],
["%E6%A6%9B%E8%8D%8A", "%E3%81%97%E3%82%93%E3%81%91%E3%81%84"],
["%E6%98%8E%E6%9A%A2", "%E3%82%81%E3%81%84%E3%81%A1%E3%82%87%E3%81%86"],
["%E7%B4%BA%E7%A2%A7", "%E3%81%93%E3%82%93%E3%81%BA%E3%81%8D"],
["%E6%B0%B4%E9%B7%97", "%E3%81%99%E3%81%84%E3%81%8A%E3%81%86"],
["%E6%B8%93%E6%BE%97", "%E3%81%91%E3%81%84%E3%81%8B%E3%82%93"],
["%E9%86%8D%E9%86%90", "%E3%81%A0%E3%81%84%E3%81%94"],
["%E8%BD%8D%E9%AE%92", "%E3%81%A6%E3%81%A3%E3%81%B7"],
["%E9%A6%AC%E9%90%99", "%E3%81%B0%E3%81%A8%E3%81%86"],
["%E9%B0%90%E9%AD%9A", "%E3%81%8C%E3%81%8F%E3%81%8E%E3%82%87"],
["%E8%81%BE%E5%95%9E", "%E3%82%8D%E3%81%86%E3%81%82"],
["%E9%B7%B9%E6%8F%9A", "%E3%81%8A%E3%81%86%E3%82%88%E3%81%86"],
["%E8%92%BC%E9%B7%B9", "%E3%81%9D%E3%81%86%E3%82%88%E3%81%86"],
["%E7%B3%BE%E7%BA%8F", "%E3%81%8D%E3%82%85%E3%81%86%E3%81%A6%E3%82%93"],
["%E9%A1%9E%E7%BA%82", "%E3%82%8B%E3%81%84%E3%81%95%E3%82%93"]
);

DATA[0][2] = new Array(
["%E9%9E%8D%E8%BD%A1", "%E3%81%82%E3%82%93%E3%81%B3"],
["%E4%BB%94%E8%82%A9", "%E3%81%97%E3%81%91%E3%82%93"],
["%E5%8D%AF%E6%9C%88", "%E3%81%BC%E3%81%86%E3%81%92%E3%81%A4"],
["%E9%A0%BD%E5%BC%9B", "%E3%81%9F%E3%81%84%E3%81%97"],
["%E4%BA%A8%E9%80%9A", "%E3%81%93%E3%81%86%E3%81%A4%E3%81%86"],
["%E4%BA%A8%E7%86%9F", "%E3%81%BB%E3%81%86%E3%81%98%E3%82%85%E3%81%8F"],
["%E7%8C%AE%E8%8A%B9", "%E3%81%91%E3%82%93%E3%81%8D%E3%82%93"],
["%E8%A1%86%E7%94%AB", "%E3%81%97%E3%82%85%E3%81%86%E3%81%BB"],
["%E5%B0%AD%E5%B0%AD", "%E3%81%8E%E3%82%87%E3%81%86%E3%81%8E%E3%82%87%E3%81%86"],
["%E9%AD%AF%E9%88%8D", "%E3%82%8D%E3%81%A9%E3%82%93"],
["%E7%B7%91%E8%8B%94", "%E3%82%8A%E3%82%87%E3%81%8F%E3%81%9F%E3%81%84"],
["%E5%AE%AE%E5%A8%83", "%E3%81%8D%E3%82%85%E3%81%86%E3%81%82%E3%81%84"],
["%E6%BA%80%E7%9B%88", "%E3%81%BE%E3%82%93%E3%81%88%E3%81%84"],
["%E8%A1%BF%E5%96%89", "%E3%81%8D%E3%82%93%E3%81%93%E3%81%86"],
["%E8%BF%BA%E5%85%AC(%E3%80%8C%E4%B9%83%E5%85%AC%E3%80%8D%E3%81%A8%E3%82%82)", "%E3%81%A0%E3%81%84%E3%81%93%E3%81%86"],
["%E8%AC%80%E5%8F%9B", "%E3%82%80%E3%81%BB%E3%82%93"],
["%E6%AF%98%E6%B2%99%E9%96%80%E5%A4%A9", "%E3%81%B3%E3%81%97%E3%82%83%E3%82%82%E3%82%93%E3%81%A6%E3%82%93"],
["%E7%9B%A4%E6%A1%93", "%E3%81%B0%E3%82%93%E3%81%8B%E3%82%93"],
["%E6%B5%A9%E8%95%A9", "%E3%81%93%E3%81%86%E3%81%A8%E3%81%86"],
["%E7%9A%90%E9%AD%9A", "%E3%81%93%E3%81%86%E3%81%8E%E3%82%87"],
["%E9%8C%A6%E7%B4%97", "%E3%81%8D%E3%82%93%E3%81%97%E3%82%83"],
["%E6%99%92%E6%9B%B8", "%E3%81%95%E3%81%84%E3%81%97%E3%82%87"],
["%E7%BF%A0%E5%B5%90", "%E3%81%99%E3%81%84%E3%82%89%E3%82%93"],
["%E6%A0%B4%E6%AA%80", "%E3%81%9B%E3%82%93%E3%81%A0%E3%82%93"],
["%E8%9A%A4%E5%A4%9C", "%E3%81%9D%E3%81%86%E3%82%84"],
["%E5%AD%9D%E6%82%8C", "%E3%81%93%E3%81%86%E3%81%A6%E3%81%84"],
["%E6%A2%A7%E6%A1%90", "%E3%81%94%E3%81%A8%E3%81%86"],
["%E6%8B%B3%E5%8C%AA", "%E3%81%91%E3%82%93%E3%81%B4"],
["%E5%9C%92%E5%9C%83", "%E3%81%88%E3%82%93%E3%81%BD"],
["%E5%98%89%E7%A6%8E", "%E3%81%8B%E3%81%A6%E3%81%84"],
["%E9%9C%8A%E5%B3%AF", "%E3%82%8C%E3%81%84%E3%81%BB%E3%81%86"],
["%E6%A0%97%E7%83%88", "%E3%82%8A%E3%81%A4%E3%82%8C%E3%81%A4"],
["%E5%A3%AC%E7%94%B3", "%E3%81%98%E3%82%93%E3%81%97%E3%82%93"],
["%E4%B8%8A%E6%A2%93", "%E3%81%98%E3%82%87%E3%81%86%E3%81%97"],
["%E8%A1%A3%E7%AC%A5", "%E3%81%84%E3%81%97"],
["%E8%85%95%E9%87%A7", "%E3%82%8F%E3%82%93%E3%81%9B%E3%82%93"],
["%E6%90%94%E6%93%BE", "%E3%81%9D%E3%81%86%E3%81%98%E3%82%87%E3%81%86"],
["%E6%AA%AE%E6%98%A7", "%E3%81%A8%E3%81%86%E3%81%BE%E3%81%84"],
["%E5%BD%AC%E5%BD%AC", "%E3%81%B2%E3%82%93%E3%81%B4%E3%82%93"],
["%E9%BB%84%E6%A5%8A", "%E3%81%93%E3%81%86%E3%82%88%E3%81%86"],
["%E7%83%B9%E7%82%8A", "%E3%81%BB%E3%81%86%E3%81%99%E3%81%84"],
["%E5%8A%AB%E6%8E%A0", "%E3%81%94%E3%81%86%E3%82%8A%E3%82%83%E3%81%8F"],
["%E7%89%A1%E8%A0%A3", "%E3%81%BC%E3%82%8C%E3%81%84"],
["%E6%B7%B5%E5%8F%A2", "%E3%81%88%E3%82%93%E3%81%9D%E3%81%86"],
["%E4%BA%95%E8%9B%99", "%E3%81%9B%E3%81%84%E3%81%82"],
["%E6%B8%A5%E6%81%A9", "%E3%81%82%E3%81%8F%E3%81%8A%E3%82%93"],
["%E5%A0%B0%E5%A1%9E", "%E3%81%88%E3%82%93%E3%81%9D%E3%81%8F"],
["%E6%BA%9D%E6%B8%A0", "%E3%81%93%E3%81%86%E3%81%8D%E3%82%87"],
["%E6%96%AF%E5%AD%A6", "%E3%81%97%E3%81%8C%E3%81%8F"],
["%E8%9F%AC%E8%9C%8E", "%E3%81%9B%E3%82%93%E3%81%91%E3%82%93"],
["%E8%9C%98%E8%9B%9B", "%E3%81%A1%E3%81%A1%E3%82%85%2C%E3%81%A1%E3%81%A1%E3%82%85%E3%81%86"],
["%E8%88%9F%E7%AD%8F", "%E3%81%97%E3%82%85%E3%81%86%E3%81%B0%E3%81%A4"],
["%E6%96%90%E7%84%B6", "%E3%81%B2%E3%81%9C%E3%82%93"],
["%E6%96%8C%E6%96%8C", "%E3%81%B2%E3%82%93%E3%81%B4%E3%82%93"],
["%E5%B1%A2%E6%AC%A1", "%E3%82%8B%E3%81%98"],
["%E8%91%A6%E7%AC%A5", "%E3%81%84%E3%81%97"],
["%E8%9B%BE%E7%BF%A0", "%E3%81%8C%E3%81%99%E3%81%84"],
["%E8%92%90%E8%8D%B7", "%E3%81%97%E3%82%85%E3%81%86%E3%81%8B"],
["%E7%94%B0%E9%BC%A0", "%E3%81%A7%E3%82%93%E3%81%9D"],
["%E7%AA%AA%E4%B8%8B", "%E3%82%8F%E3%81%8B"],
["%E8%BC%AF%E7%A9%86", "%E3%81%97%E3%82%85%E3%81%86%E3%81%BC%E3%81%8F"],
["%E5%8F%AA%E7%AE%A1", "%E3%81%97%E3%81%8B%E3%82%93"],
["%E5%B7%B1%E5%B7%B3", "%E3%81%8D%E3%81%97"],
["%E5%98%89%E7%8C%B7", "%E3%81%8B%E3%82%86%E3%81%86"],
["%E6%A1%91%E6%9F%98", "%E3%81%9D%E3%81%86%E3%81%97%E3%82%83"],
["%E4%B9%99%E4%BA%A5", "%E3%81%84%E3%81%A4%E3%81%8C%E3%81%84"],
["%E5%85%81%E5%8F%AF", "%E3%81%84%E3%82%93%E3%81%8B"],
["%E7%89%9D%E7%89%A1", "%E3%81%B2%E3%82%93%E3%81%BC"],
["%E8%8B%A7%E9%BA%BB", "%E3%81%A1%E3%82%87%E3%81%BE"],
["%E9%8B%92%E9%8F%91", "%E3%81%BB%E3%81%86%E3%81%A6%E3%81%8D"],
["%E8%8A%8B%E7%B2%A5", "%E3%81%86%E3%81%97%E3%82%85%E3%81%8F"],
["%E7%B2%A5%E6%96%87", "%E3%81%84%E3%81%8F%E3%81%B6%E3%82%93"],
["%E5%9D%A4%E8%BC%BF", "%E3%81%93%E3%82%93%E3%82%88"],
["%E7%A0%A7%E6%9D%B5", "%E3%81%A1%E3%82%93%E3%81%97%E3%82%87"],
["%E4%B9%83%E8%87%B3", "%E3%81%AA%E3%81%84%E3%81%97"],
["%E9%B3%B3%E9%9B%9B", "%E3%81%BB%E3%81%86%E3%81%99%E3%81%86"],
["%E5%BC%BC%E5%8C%A1", "%E3%81%B2%E3%81%A3%E3%81%8D%E3%82%87%E3%81%86"],
["%E7%95%A2%E7%94%9F", "%E3%81%B2%E3%81%A3%E3%81%9B%E3%81%84"],
["%E8%91%BA%E8%8C%85", "%E3%81%97%E3%82%85%E3%81%86%E3%81%BC%E3%81%86"],
["%E5%A2%A8%E7%85%A4", "%E3%81%BC%E3%81%8F%E3%81%B0%E3%81%84"],
["%E8%91%B1%E9%9D%92", "%E3%81%9D%E3%81%86%E3%81%9B%E3%81%84"],
["%E5%BD%BC%E6%AD%A4", "%E3%81%B2%E3%81%97"],
["%E9%87%9C%E7%AB%88", "%E3%81%B5%E3%81%9D%E3%81%86"],
["%E8%87%BC%E6%9D%B5", "%E3%81%8D%E3%82%85%E3%81%86%E3%81%97%E3%82%87"],
["%E4%B9%9E%E9%AA%B8", "%E3%81%8D%E3%81%A4%E3%81%8C%E3%81%84"],
["%E7%A6%B0%E5%AE%9C", "%E3%81%AD%E3%81%8E"],
["%E5%BE%BD%E7%AB%A0", "%E3%81%8D%E3%81%97%E3%82%87%E3%81%86"],
["%E7%A6%BE%E9%BB%8D", "%E3%81%8B%E3%81%97%E3%82%87"],
["%E9%80%A3%E4%BA%99", "%E3%82%8C%E3%82%93%E3%81%93%E3%81%86"],
["%E8%BC%AF%E6%9F%94", "%E3%81%97%E3%82%85%E3%81%86%E3%81%98%E3%82%85%E3%81%86"],
["%E5%A4%A7%E5%98%97%E4%BC%9A", "%E3%81%A0%E3%81%84%E3%81%98%E3%82%87%E3%81%86%E3%81%88"],
["%E6%A4%BF%E8%90%B1", "%E3%81%A1%E3%82%93%E3%81%91%E3%82%93"],
["%E4%BE%83%E7%9B%B4", "%E3%81%8B%E3%82%93%E3%81%A1%E3%82%87%E3%81%8F"],
["%E9%87%9C%E7%94%91", "%E3%81%B5%E3%81%9D%E3%81%86"],
["%E4%B9%9D%E7%9A%90", "%E3%81%8D%E3%82%85%E3%81%86%E3%81%93%E3%81%86"],
["%E5%8D%BF%E7%9B%B8", "%E3%81%91%E3%81%84%E3%81%97%E3%82%87%E3%81%86"],
["%E8%93%91%E7%AC%A0", "%E3%81%95%E3%82%8A%E3%82%85%E3%81%86"],
["%E7%A8%97%E5%8F%B2", "%E3%81%AF%E3%81%84%E3%81%97"],
["%E8%8D%8F%E8%8B%92", "%E3%81%98%E3%82%93%E3%81%9C%E3%82%93"],
["%E5%BE%8C%E8%83%A4", "%E3%81%93%E3%81%86%E3%81%84%E3%82%93"],
["%E6%BF%A4%E5%A3%B0", "%E3%81%A8%E3%81%86%E3%81%9B%E3%81%84"],
["%E9%B9%BF%E8%8C%B8", "%E3%82%8D%E3%81%8F%E3%81%98%E3%82%87%E3%81%86"],
["%E7%B9%AD%E7%B4%AC", "%E3%81%91%E3%82%93%E3%81%A1%E3%82%85%E3%81%86"],
["%E5%B0%BB%E5%9D%90", "%E3%81%93%E3%81%86%E3%81%96"],
["%E7%A6%BE%E7%A9%8E", "%E3%81%8B%E3%81%88%E3%81%84"],
["%E7%B7%91%E5%9F%9C", "%E3%82%8A%E3%82%87%E3%81%8F%E3%82%84"],
["%E5%AF%85%E7%95%8F", "%E3%81%84%E3%82%93%E3%81%84"],
["%E9%85%8B%E9%A0%98", "%E3%81%97%E3%82%85%E3%81%86%E3%82%8A%E3%82%87%E3%81%86"],
["%E5%BD%AA%E8%94%9A", "%E3%81%B2%E3%82%85%E3%81%86%E3%81%86%E3%81%A4%2C%E3%81%B2%E3%82%87%E3%81%86%E3%81%86%E3%81%A4"],
["%E6%AB%93%E5%A3%B0", "%E3%82%8D%E3%81%9B%E3%81%84"],
["%E7%91%9E%E7%A9%A3", "%E3%81%9A%E3%81%84%E3%81%98%E3%82%87%E3%81%86"],
["%E8%B2%B0%E8%B5%A6", "%E3%81%9B%E3%81%84%E3%81%97%E3%82%83"],
["%E5%AF%A9%E8%A8%8A", "%E3%81%97%E3%82%93%E3%81%98%E3%82%93"],
["%E8%81%AF%E7%8F%A0", "%E3%82%8C%E3%82%93%E3%81%98%E3%82%85"],
["%E8%88%9B%E9%A6%B3", "%E3%81%9B%E3%82%93%E3%81%A1"],
["%E5%91%A8%E5%8C%9D", "%E3%81%97%E3%82%85%E3%81%86%E3%81%9D%E3%81%86"],
["%E6%B9%9B%E7%84%B6(%E3%80%8C%E2%80%95%E3%81%9F%E3%82%8B%E6%B0%B4%E3%81%AE%E5%BA%95%E3%80%8D)", "%E3%81%9F%E3%82%93%E3%81%9C%E3%82%93"],
["%E9%A0%97%E5%83%BB", "%E3%81%AF%E3%81%B8%E3%81%8D"],
["%E8%91%A3%E7%9D%A3", "%E3%81%A8%E3%81%86%E3%81%A8%E3%81%8F"],
["%E7%89%BD%E7%89%9B%E6%98%9F", "%E3%81%91%E3%82%93%E3%81%8E%E3%82%85%E3%81%86%E3%81%9B%E3%81%84"],
["%E6%9A%A2%E8%8C%82", "%E3%81%A1%E3%82%87%E3%81%86%E3%82%82"],
["%E9%84%AD%E9%87%8D", "%E3%81%A6%E3%81%84%E3%81%A1%E3%82%87%E3%81%86"],
["%E5%99%82%E6%B2%93", "%E3%81%9D%E3%82%93%E3%81%A8%E3%81%86"],
["%E8%96%99%E9%AB%AA", "%E3%81%A1%E3%81%AF%E3%81%A4"]
);
