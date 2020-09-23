exports.action = function (data) {
try{
var request = require('request');





	console.log(data+" les data recus")
	var moment = require('moment');moment.locale('fr'); 
	var util = require('util');
	var fs = require('fs');
var request = require('request');

	
	var heure = "";
	var datedujour = "";
	var dicton = "";
	var lune = "";
	var soleil = "";
	var saint = ""

		//heure
		if (data.heure !== undefined) {
			var date = new Date();
			var heure = 'il est ' + date.getHours() + ' heure ';
			if (date.getMinutes() > 0) {
				heure += date.getMinutes();
			}

if (date.getHours()<6){heure=heure+"|il est tot|que fais tu debout à cette heure si matinal ?|tu ne devrais pas etre couché ?" }
if (date.getHours()>22){heure=heure+ "|il est tard|tu devrais aller te coucher|tu vas avoir du mal à te lever" }
if ( (date.getHours()>10) && (date.getHours()<13) ){ heure=heure+"|bientot l'heure de l'apéro|bientot l'heure de manger" }
if ( (date.getHours()>18) && (date.getHours()<21) ){ heure=heure+"|bientot l'heure de l'apéro|bientot l'heure de manger" }

		}
		//date
		if (data.date !== undefined) {
			var datedujour = moment().format("dddd DD MMMM YYYY")
				var datedujour = "nous somme le : " + datedujour

		}


		//lune+soleil

	function lunesaint(heure, datedujour, dicton, lune, soleil, saint) {
		function dictondujour(heure, datedujour, dicton, lune, soleil, saint) {
			if (data.dicton !== undefined) {

				var chiffreduJour = Number(moment().format("DD"));
				var ligne = 0;chiffreduJour=chiffreduJour-1
				switch (moment().format("MM")) {
				case '01':
					ligne = chiffreduJour + 16;
					break;
				case '02':
					ligne = chiffreduJour + 52;
					break;
				case '03':
					ligne = chiffreduJour + 86;
					break;
				case '04':
					ligne = chiffreduJour + 122;
					break;
				case '05':
					ligne = chiffreduJour + 157;
					break;
				case '06':
					ligne = chiffreduJour + 193;
					break;
				case '07':
					ligne = chiffreduJour + 228;
					break;
				case '08':
					ligne = chiffreduJour + 264;
					break;
				case '09':
					ligne = chiffreduJour + 300;
					break;
				case '10':
					ligne = chiffreduJour + 335;
					break;
				case '11':
					ligne = chiffreduJour + 371;
					break;
				case '12':
					ligne = chiffreduJour + 406;
					break;
				}
				var request = require('request');
				var cheerio = require('cheerio');

				var url = "https://www.meteocontact.fr/pour-aller-plus-loin/dictons"
					request({
						'uri': url
					}, function (error, response, html) {

						var $ = cheerio.load(html);

						dicton = $('.box-page > p:nth-child(' + ligne + ')').text().split('|')[1];
						//var splits = result.split('|');
						console.log(dicton);
						//console.log(result[1]);
						//dicton = result[1];
						lunedujour(heure, datedujour, dicton, lune, soleil, saint);
						return ;
					});

			} else {
				lunedujour(heure, datedujour, dicton, lune, soleil, saint);
				return ;
			}
		}
		function lunedujour(heure, datedujour, dicton, lune, soleil, saint) {

			if (data.lune !== undefined) {
				request({
					'uri': 'http://www.calendrier-lunaire.net'
				}, function (error, response, html) {
					var $ = require('cheerio').load(html, {
							xmlMode: false,
							ignoreWhitespace: false,
							lowerCaseTags: false
						});

					var lune = $('#listborder2 > li:nth-child(1)').text() + " de lune "
						var lune = lune + $('#listborder2 > li:nth-child(2)').text()
						var lune = lune + $('#listborder2 > li:nth-child(6)').text()
						var lune = lune + $('#listborder2 > li:nth-child(8)').text()
						var lune = lune.replace('Nom de la phase : ', " ")
						var lune = lune.replace(/»/gi, " ")
						//soleil
						var soleil = $('.TBdoubleColTD6 > div:nth-child(1)').text()
						var lune = lune + " soleil " + soleil

						console.log(lune)
						console.log(soleil)
						saintdujour(heure, datedujour, dicton, lune, soleil, saint)
						return 
				}); //fin request
			} //fin if data lune
			else {
				saintdujour(heure, datedujour, dicton, lune, soleil, saint);
				return 
			}
		} //fin fnct lunedujour


		//saint du jour

		function saintdujour(heure, datedujour, dicton, lune, soleil, saint) {
			if (data.saint !== undefined) {
				request({
					'uri': 'http://fetedujour.fr/'
				}, function (error, response, html) {
					var $ = require('cheerio').load(html, {
							xmlMode: false,
							ignoreWhitespace: false,
							lowerCaseTags: false
						});
					var saint = $('.h1 > h1:nth-child(1)').text()
						console.log(saint)
						speak(heure, datedujour, dicton, lune, soleil, saint);
					return 
				}); //fin request
			} //fin if
			else {
				speak(heure, datedujour, dicton, lune, soleil, saint);
				return 
			}
		} //fin fnct saint du jour

		dictondujour(heure, datedujour, dicton, lune, soleil, saint)
		
	} //fin fnct lunesaint


	function speak(heure, datedujour, dicton, lune, soleil, saint) { //evoie au plug speak
		var nomduplugin = "time" //ou autre nom....
			var valeurduspeak = datedujour + heure + lune +  saint +  dicton //phrase à dire


JarvisIASpeech(valeurduspeak)
		return 
	} //fin fnct speak
	console.log(heure, datedujour, dicton, lune, soleil, saint)
	lunesaint(heure, datedujour, dicton, lune, soleil, saint)
}catch(err){console.log(err);return }
}
