/* Countdown.js < http://countdownjs.org/ > // 2.3.3 // MIT */
var module,countdown=function(r){function v(a,b){var c=a.getTime();a.setUTCMonth(a.getUTCMonth()+b);return Math.round((a.getTime()-c)/864E5)}function t(a){var b=a.getTime(),c=new Date(b);c.setUTCMonth(a.getUTCMonth()+1);return Math.round((c.getTime()-b)/864E5)}function h(a,b){return a+" "+(1===a?p[b]:q[b])}function n(){}function l(a,b,c,g,f,d){0<=a[c]&&(b+=a[c],delete a[c]);b/=f;if(1>=b+1)return 0;if(0<=a[g]){a[g]=+(a[g]+b).toFixed(d);switch(g){case "seconds":if(60!==a.seconds||isNaN(a.minutes))break; a.minutes++;a.seconds=0;case "minutes":if(60!==a.minutes||isNaN(a.hours))break;a.hours++;a.minutes=0;case "hours":if(24!==a.hours||isNaN(a.days))break;a.days++;a.hours=0;case "days":if(7!==a.days||isNaN(a.weeks))break;a.weeks++;a.days=0;case "weeks":if(a.weeks!==t(a.refMonth)/7||isNaN(a.months))break;a.months++;a.weeks=0;case "months":if(12!==a.months||isNaN(a.years))break;a.years++;a.months=0;case "years":if(10!==a.years||isNaN(a.decades))break;a.decades++;a.years=0;case "decades":if(10!==a.decades|| isNaN(a.centuries))break;a.centuries++;a.decades=0;case "centuries":if(10!==a.centuries||isNaN(a.millennia))break;a.millennia++;a.centuries=0}return 0}return b}function w(a,b,c,g,f,d){a.start=b;a.end=c;a.units=g;a.value=c.getTime()-b.getTime();if(0>a.value){var h=c;c=b;b=h}a.refMonth=new Date(b.getFullYear(),b.getMonth(),15);try{a.millennia=0;a.centuries=0;a.decades=0;a.years=c.getUTCFullYear()-b.getUTCFullYear();a.months=c.getUTCMonth()-b.getUTCMonth();a.weeks=0;a.days=c.getUTCDate()-b.getUTCDate(); a.hours=c.getUTCHours()-b.getUTCHours();a.minutes=c.getUTCMinutes()-b.getUTCMinutes();a.seconds=c.getUTCSeconds()-b.getUTCSeconds();a.milliseconds=c.getUTCMilliseconds()-b.getUTCMilliseconds();var k;0>a.milliseconds?(k=s(-a.milliseconds/1E3),a.seconds-=k,a.milliseconds+=1E3*k):1E3<=a.milliseconds&&(a.seconds+=m(a.milliseconds/1E3),a.milliseconds%=1E3);0>a.seconds?(k=s(-a.seconds/60),a.minutes-=k,a.seconds+=60*k):60<=a.seconds&&(a.minutes+=m(a.seconds/60),a.seconds%=60);0>a.minutes?(k=s(-a.minutes/ 60),a.hours-=k,a.minutes+=60*k):60<=a.minutes&&(a.hours+=m(a.minutes/60),a.minutes%=60);0>a.hours?(k=s(-a.hours/24),a.days-=k,a.hours+=24*k):24<=a.hours&&(a.days+=m(a.hours/24),a.hours%=24);for(;0>a.days;)a.months--,a.days+=v(a.refMonth,1);7<=a.days&&(a.weeks+=m(a.days/7),a.days%=7);0>a.months?(k=s(-a.months/12),a.years-=k,a.months+=12*k):12<=a.months&&(a.years+=m(a.months/12),a.months%=12);10<=a.years&&(a.decades+=m(a.years/10),a.years%=10,10<=a.decades&&(a.centuries+=m(a.decades/10),a.decades%= 10,10<=a.centuries&&(a.millennia+=m(a.centuries/10),a.centuries%=10)));b=0;!(g&1024)||b>=f?(a.centuries+=10*a.millennia,delete a.millennia):a.millennia&&b++;!(g&512)||b>=f?(a.decades+=10*a.centuries,delete a.centuries):a.centuries&&b++;!(g&256)||b>=f?(a.years+=10*a.decades,delete a.decades):a.decades&&b++;!(g&128)||b>=f?(a.months+=12*a.years,delete a.years):a.years&&b++;!(g&64)||b>=f?(a.months&&(a.days+=v(a.refMonth,a.months)),delete a.months,7<=a.days&&(a.weeks+=m(a.days/7),a.days%=7)):a.months&& b++;!(g&32)||b>=f?(a.days+=7*a.weeks,delete a.weeks):a.weeks&&b++;!(g&16)||b>=f?(a.hours+=24*a.days,delete a.days):a.days&&b++;!(g&8)||b>=f?(a.minutes+=60*a.hours,delete a.hours):a.hours&&b++;!(g&4)||b>=f?(a.seconds+=60*a.minutes,delete a.minutes):a.minutes&&b++;!(g&2)||b>=f?(a.milliseconds+=1E3*a.seconds,delete a.seconds):a.seconds&&b++;if(!(g&1)||b>=f){var e=l(a,0,"milliseconds","seconds",1E3,d);if(e&&(e=l(a,e,"seconds","minutes",60,d))&&(e=l(a,e,"minutes","hours",60,d))&&(e=l(a,e,"hours","days", 24,d))&&(e=l(a,e,"days","weeks",7,d))&&(e=l(a,e,"weeks","months",t(a.refMonth)/7,d))){g=e;var n,p=a.refMonth,q=p.getTime(),r=new Date(q);r.setUTCFullYear(p.getUTCFullYear()+1);n=Math.round((r.getTime()-q)/864E5);if(e=l(a,g,"months","years",n/t(a.refMonth),d))if(e=l(a,e,"years","decades",10,d))if(e=l(a,e,"decades","centuries",10,d))if(e=l(a,e,"centuries","millennia",10,d))throw Error("Fractional unit overflow");}}}finally{delete a.refMonth}return a}function d(a,b,c,d,f){var h;c=+c||222;d=0<d?d:NaN; f=0<f?20>f?Math.round(f):20:0;"function"===typeof a?(h=a,a=null):a instanceof Date||(a=null!==a&&isFinite(a)?new Date(a):null);"function"===typeof b?(h=b,b=null):b instanceof Date||(b=null!==b&&isFinite(b)?new Date(b):null);if(!a&&!b)return new n;if(!h)return w(new n,a||new Date,b||new Date,c,d,f);var l=c&1?1E3/30:c&2?1E3:c&4?6E4:c&8?36E5:c&16?864E5:6048E5,k,e=function(){h(w(new n,a||new Date,b||new Date,c,d,f),k)};e();return k=setInterval(e,l)}var s=Math.ceil,m=Math.floor,p,q,u;n.prototype.toString= function(){var a=u(this),b=a.length;if(!b)return"";1<b&&(a[b-1]="and "+a[b-1]);return a.join(", ")};n.prototype.toHTML=function(a){a=a||"span";var b=u(this),c=b.length;if(!c)return"";for(var d=0;d<c;d++)b[d]="\x3c"+a+"\x3e"+b[d]+"\x3c/"+a+"\x3e";--c&&(b[c]="and "+b[c]);return b.join(", ")};u=function(a){var b=[],c=a.millennia;c&&b.push(h(c,10));(c=a.centuries)&&b.push(h(c,9));(c=a.decades)&&b.push(h(c,8));(c=a.years)&&b.push(h(c,7));(c=a.months)&&b.push(h(c,6));(c=a.weeks)&&b.push(h(c,5));(c=a.days)&& b.push(h(c,4));(c=a.hours)&&b.push(h(c,3));(c=a.minutes)&&b.push(h(c,2));(c=a.seconds)&&b.push(h(c,1));(c=a.milliseconds)&&b.push(h(c,0));return b};d.MILLISECONDS=1;d.SECONDS=2;d.MINUTES=4;d.HOURS=8;d.DAYS=16;d.WEEKS=32;d.MONTHS=64;d.YEARS=128;d.DECADES=256;d.CENTURIES=512;d.MILLENNIA=1024;d.DEFAULTS=222;d.ALL=2047;d.setLabels=function(a,b){a=a||[];a.split&&(a=a.split("|"));b=b||[];b.split&&(b=b.split("|"));for(var c=0;10>=c;c++)p[c]=a[c]||p[c],q[c]=b[c]||q[c]};(d.resetLabels=function(){p="millisecond second minute hour day week month year decade century millennium".split(" "); q="milliseconds seconds minutes hours days weeks months years decades centuries millennia".split(" ")})();r&&r.exports&&(r.exports=d);return d}(module);

/* Vtex CountDown // 1.3 // Carlos Vincius [Quatro Digital] // MIT */
if("function"!==typeof(String.prototype.trim))String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"");};
(function($){
	"use strict";

	if(typeof $.fn.vtexCountdown === "function") return;

	$.fn.vtexCountdown = function(opts){
	    var defaults = {
			element : "p[class*='|']", // Elemento em que esta a promoção. Normalmente o sistema gera um "<p>"
			separator:"|", // Caracter que separa o nome da promoção de sua data limite no título
			dateSeparator:"/", // Separador de data, usado entre o número de dias, mês e ano
			hourSeparator:":", // Separador de horas
			outputFormat:1, // [1] Dias, hrs, min., seg. - [2] hrs, min., seg. // Modelo de impressão do contador
			// HTML onde será montado o contador
			htmlFormat : '<span class="days qd-cp-timeinfo">%days% <span class="vtex-cd_p qd-cp-text">dias</span><span class="vtex-cd_s qd-cp-text">dias</span> </span><span class="hours qd-cp-timeinfo">%hours% <span class="vtex-cd_p qd-cp-text">horas</span><span class="vtex-cd_s qd-cp-text">hora</span> </span><span class="minutes qd-cp-timeinfo">%minutes% <span class="vtex-cd_p qd-cp-text">minutos</span><span class="vtex-cd_s qd-cp-text">minuto</span> </span><span class="seconds qd-cp-timeinfo">%seconds% <span class="vtex-cd_p qd-cp-text">segundos</span><span class="vtex-cd_s qd-cp-text">segundo</span> </span>',
			updatInterval:1000, // Intervalo de atualização do contador na tela em milesegundos. 1000 milisegundos = 1 segundo
			callback:function(){}, // Callback após renderizar o contador.
			updateCallback:function(){}, // Callback após cada atualização
			removeDateText : true, // Se "true" irá remover a data do nome da promoção, exibindo ao usuário apenas o título dela
			displayElement : null // Opção para definir um seletor ou um elemento jQuery no qual será exibido o contador
		};
	    var options = jQuery.extend({}, defaults, opts);
		var $this = $(this);
		var elem = $this.find(options.element).first();
		var _console="object"==typeof(console);
		
		// Definindo o elemento que receberá o contador
		var displayElement = options.displayElement ? $this.find(options.displayElement) : $this;

		// Reporting Errors
		if(elem.length<1){if(_console) console.log("[Erro] Elemento com o nome da promoção não encontrado \n ("+elem.selector+")"); return $this;}

		var promoText=elem.text()||"";
		// Reporting Errors
		if(promoText.indexOf(options.separator)<0){if(_console) console.log("[Erro] Separador “"+options.separator+"” não encontrado."); return $this;}
		
		// Get Date / Hour
		var promoDateText=promoText.split(options.separator).pop().trim();
		var promoTimeStamp=promoDateText.split(" ");
		var promoDate=(promoTimeStamp[0]||"").split(options.dateSeparator);
		var promoHour=(promoTimeStamp[1]||"").split(options.hourSeparator);
		var finalDate=new Date(promoDate[2],(promoDate[1]-1),promoDate[0],promoHour[0],promoHour[1]);
		// Reporting Errors
		if(promoDate.length<3 || promoHour.length<2 || isNaN(finalDate.getTime())){if(_console) console.log("[Erro] Data Inválida “"+promoDateText+"”, \n utilize o padrão: DD/MM/AAAA HH:MM"); return $this;}
		
		var currentDate = new Date();
		var days = "", hours = "", minutes = "", seconds = "";
		var daysElem = $(""), hoursElem = $(""), minutesElem = $(""), secondsElem = $("");
		var daysElemP = $(""), hoursElemP = $(""), minutesElemP = $(""), secondsElemP = $("");
		var daysElemS = $(""), hoursElemS = $(""), minutesElemS = $(""), secondsElemS = $("");
		var updateIntreval = null;
		var milliseconds = 0;
		
		var functions = {
			removeDateText:function()
			{
				if(options.removeDateText)
					elem.text(elem.text().replace(options.separator, "").replace(promoDateText, ""));
			},
			getTimeRemaining : function(){
				currentDate.setMilliseconds(currentDate.getMilliseconds()+options.updatInterval);
				
				if(options.outputFormat === 2)
					var cd=countdown(currentDate, finalDate, countdown.HOURS|countdown.MINUTES|countdown.SECONDS);
				else
					var cd=countdown(currentDate, finalDate, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);
				
				days = cd.days > 9? cd.days : "0" + (cd.days || 0);
				hours = cd.hours > 9? cd.hours : "0" + cd.hours;
				minutes = cd.minutes > 9? cd.minutes : "0" + cd.minutes;
				seconds = cd.seconds > 9? cd.seconds : "0" + cd.seconds;
				
				functions.updateHtml();
			},
			toDate:function(dotNetDate)
			{
				var monthsList={jan:0,fev:1,mar:2,abr:3,mai:4,jun:5,jul:6,ago:7,set:8,out:9,nov:10,dez:11};
				var dateArray=dotNetDate
					.replace(/[a-z]{3}/,function(a){return monthsList[a]||"";})
					.replace(",","").split(" ");
				var horary=dateArray[3].split(":");
				currentDate=new Date(dateArray[2],dateArray[0],dateArray[1],horary[0],horary[1],horary[2]);
				// Reporting Errors
				if(isNaN(currentDate.getTime()))
				{
					if(_console) console.log("Erro ao processar a data retornada via Ajax \n “"+dotNetDate+"”");
					currentDate=new Date();
				}
			},
			splitChar : function(str){
				var span, out = "", strArray;
				
				span = '<span class="qd-cp-char">#value</span>';
				str = str.toString();
				strArray = str.split("");
				for(var k in strArray){
					if(typeof strArray[k] === "function") continue;
					out += '<span class="qd-cp-char qd-cp-' + k + '">' + strArray[k] + '</span>';
				}

				return out;
			},
			updateHtml : function(){
				secondsElem.html(functions.splitChar(seconds));
				minutesElem.html(functions.splitChar(minutes));
				hoursElem.html(functions.splitChar(hours));
				daysElem.html(functions.splitChar(days));
				
				if(seconds==1){
					secondsElemP.hide();
					secondsElemS.show();
				}
				else{
					secondsElemS.hide();
					secondsElemP.show();
				}

				if(minutes==1)
				{
					minutesElemP.hide();
					minutesElemS.show();
				}
				else
				{
					minutesElemS.hide();
					minutesElemP.show();
				}

				if(hours==1)
				{
					hoursElemP.hide();
					hoursElemS.show();
				}
				else
				{
					hoursElemS.hide();
					hoursElemP.show();
				}

				if(days==1)
				{
					daysElemP.hide();
					daysElemS.show();
				}
				else
				{
					daysElemS.hide();
					daysElemP.show();
				}

				// Verificando se já foi iniciado o contador
				if(updateIntreval === null){
					$this.removeClass("vtex-cd_loading");
					functions.updateCounter();
					options.callback();
				}
				else
					options.updateCallback();
			},
			formatHtml:function()
			{
				var html=  options.htmlFormat
					.replace("%days%",'<span class="vtex-cd_days qd-cp-digits"></span>')
					.replace("%hours%",'<span class="vtex-cd_hours qd-cp-digits"></span>')
					.replace("%minutes%",'<span class="vtex-cd_minutes qd-cp-digits"></span>')
					.replace("%seconds%",'<span class="vtex-cd_seconds qd-cp-digits"></span>');
				var jHtml = $(html);

				daysElem = jHtml.find(".vtex-cd_days");
				hoursElem = jHtml.find(".vtex-cd_hours");
				minutesElem = jHtml.find(".vtex-cd_minutes");
				secondsElem = jHtml.find(".vtex-cd_seconds");
				daysElemP = daysElem.siblings(".vtex-cd_p");
				hoursElemP = hoursElem.siblings(".vtex-cd_p");
				minutesElemP = minutesElem.siblings(".vtex-cd_p");
				secondsElemP = secondsElem.siblings(".vtex-cd_p");
				daysElemS = daysElem.siblings(".vtex-cd_s");
				hoursElemS = hoursElem.siblings(".vtex-cd_s");
				minutesElemS = minutesElem.siblings(".vtex-cd_s");
				secondsElemS = secondsElem.siblings(".vtex-cd_s");
				
				displayElement.addClass("vtex-cd_loading").append(jHtml);
			},
			updateCounter:function(){
				updateIntreval = setInterval(functions.getTimeRemaining, options.updatInterval);
			}
		};
		
		$.ajax({
			"url":"/no-cache/HoraAtualServidor.aspx",
			"data":"html",
			"success":function(data, textStatus, jqXHR){
				functions.toDate(data.toLowerCase().trim());
				functions.getTimeRemaining();
			},
			"error":function(jqXHR, textStatus, errorThrown){
				if(_console) console.log("Erro na requisição Ajax");
				functions.getTimeRemaining();
			}
		});
		
		functions.removeDateText();
		functions.formatHtml();
	};
})(jQuery);