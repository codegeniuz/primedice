var _____WB$wombat$assign$function_____=function(t){return self._wb_wombat&&self._wb_wombat.local_init&&self._wb_wombat.local_init(t)||self[t]};self.__WB_pmw||(self.__WB_pmw=function(t){return this.__WB_source=t,this});{_____WB$wombat$assign$function_____("window"),_____WB$wombat$assign$function_____("self");let t=_____WB$wombat$assign$function_____("document");_____WB$wombat$assign$function_____("location"),_____WB$wombat$assign$function_____("top"),_____WB$wombat$assign$function_____("parent"),_____WB$wombat$assign$function_____("frames"),_____WB$wombat$assign$function_____("opener");function Ticker(i){this.config={strLength:6},this.selector=i,this.ticker=$(i),this.init=function(){var i=this;this.ticker.flightboard({lettersImage:"css/img/numbers.png",lettersSize:[32,44],lettersSeq:"1234567890",maxLength:this.config.strLength,flips:0,pause:1e3,messages:[i.intToStr(this.ticker.data("value"))],afterFlip:function(){i.ticker.flightboard("stop")}}),$(t).on("update",this.selector,(function(){i.ticker.flightboard("option",{messages:[i.intToStr($(this).data("value"))]}),i.ticker.flightboard("flip")}))},this.intToStr=function(t){for(t=parseFloat(t),t=isNaN(t)?"0":t.toString();t.length<this.config.strLength;)t="0"+t;return t},this.update=function(t){this.ticker.data("value",t).trigger("update")}}function Placeholder(t){this.selector=t,this.el=$(t),this.init=function(){this.el.each((function(){var t=$(this),i=t.outerWidth(),e=t.outerHeight();t.wrap('<span class="input" style="position:relative; display:inline-block"></span>'),$("<span></span>").css({display:"inline-block",width:i,height:e,lineHeight:e+"px",position:"absolute",top:0,left:0}).data("placeholder",t.prop("placeholder")).on("click",(function(){var t=$(this);input=t.siblings("input"),t.html("").hide();var i=$.trim(input.val());input.focus().val("").val(i),input.on("blur",(function(){""==$.trim(input.val())&&t.html(t.data("placeholder")).show()}))})).insertAfter(t),""==$.trim(t.val())&&t.siblings("span").html(t.prop("placeholder")),t.removeAttr("placeholder")}))}}function Tabs(i,e){this.navigation=i,this.containers=e,this.init=function(){var i=this,e=0,s=$(i.navigation),n=$(i.containers);n.hide(),$(t).on("click",i.navigation,(function(t){e=s.index(this),s.filter(".active").removeClass("active"),$(this).addClass("active"),n.filter(":not(:eq("+e+"))").hide(),n.eq(e).show(),n.find(".tooltip:visible").hide()})),s.filter(".active").length?s.filter(".active").click():s.filter(":first").click()}}function Tooltip(i,e){this.selector=i,this.event=e,this.init=function(i){var e=this;$(e.selector);$(t).on(e.event,e.selector,(function(t){$(t.target).is("strong")&&($(this).closest("table").find(".tooltip:visible").hide(),$(this).find("> .tooltip").fadeIn(200))})),$(t).on("click",e.selector+" .heading span, "+e.selector+" .h span",(function(t){$(this).closest(".tooltip").fadeOut(100)})),$(t).on("click",(function(t){var i=$(t.target),e=i.parent().children(".tooltip"),s=i.children(".tooltip");i.closest(".tooltip").length||(e.addClass("clicktarget"),s.addClass("clicktarget"),$(".tooltip:not(.clicktarget)").fadeOut(100),e.removeClass("clicktarget"),s.removeClass("clicktarget"))}))}}function UI(){this.editAccountPopup=function(){$(t).on("click",".account .edit",(function(){$(this).siblings(".tooltip").fadeIn(100)})),$(t).on("click",".account .tooltip .heading span",(function(){$(this).closest(".tooltip").fadeOut(100)})),$(t).on("submit",".account .tooltip form",(function(){$.post("name_change.php",$(this).serialize())}))},this.QRCode=function(){$(t).on("click",".deposit p",(function(){$(this).siblings(".tooltip").fadeIn(100)}))}}function Copy(t,i,e){this.selector=t,this.copyTarget=i,this.targetIsVal=e,this.init=function(){var t=$(this.copyTarget),i=this.targetIsVal?t.val():t.html();$(this.selector).zclip({path:"js/ZeroClipboard.swf",copy:i,afterCopy:function(){}})}}$((function(){new Placeholder("input[placeholder]").init();var t=new Ticker("#betsTicker");t.init(),testTicker(t);var i=new Ticker("#wagersTicker");i.init(),testTicker2(i),new Tooltip(".table strong:has(.tooltip)","click").init(),new Tabs("section.table > ul li","section.table > article").init();var e=new UI;e.editAccountPopup(),e.QRCode(),new Copy("header article.inner.left .deposit .copy","header article.inner.left .deposit input",!0).init(),Bet.init(),Bet.calculateOnChange(),LastBets.init(),void 0!==$.fn.customSelect&&$("select").customSelect()}));var Bet={formSelector:"#bet",init:function(){var i=this;this.form=$(this.formSelector),this.input=this.form.find("input:first"),this.val=this.input.val(),this.statsHolder=this.form.siblings(".stats"),this.statsR=this.statsHolder.find("strong:eq(0)"),this.statsW=this.statsHolder.find("strong:eq(1)"),this.statsM=this.statsHolder.find("strong:eq(2)"),this.stats={R:this.statsR.html(),W:this.statsW.html(),M:this.statsM.html()},$(t).on("click",this.formSelector+" button",(function(){return i.val=2*i.toFloatNumber(i.input.val()),i.input.val(i.val),i.recalculate(),!1}))},refreshStats:function(){this.stats.R=this.toFloatNumber(this.statsR.html()),this.stats.W=this.toFloatNumber(this.statsW.html()),this.stats.M=this.toFloatNumber(this.statsM.html())},calculateOnChange:function(){var i=this;$(t).on("keyup change",this.formSelector+" input:first",(function(){i.refreshStats();var t=i.toFloatNumber(i.input.val()),e=i.stats.R,s=100-i.stats.R,n=100/s*.99,o=n*t;e=(e=(e=e<2?2:e)>99.99?99.99:e).toFixed(2),o=(o=(o=o.toString()).indexOf(".")>-1?o+"00000000000":o+".00000000000").substring(0,11),o="."==(o=0==parseFloat(o)||isNaN(parseFloat(o))?"Bet Return":o).substring(10,11)?o.substring(0,10):o,s=s.toFixed(2)+"%",n=n.toFixed(3)+"x",i.statsR.html(e),i.statsW.html(s),i.statsM.html(n),$("header article.inner.right input:first").val(o).siblings("span").click(),i.refreshStats()}))},recalculate:function(){$(this.formSelector+" input:first").trigger("change")},toFloatNumber:function(t){return isNaN(parseFloat(t))?0:parseFloat(t)}},LastBets={selector:"#last_bets .last_bets",buffer:"#last_bets #buffer",interval:null,init:function(){var t=this;t.checkLatestBets(),t.interval=setInterval((function(){t.checkLatestBets()}),5e3)},checkLatestBets:function(){var t=$(this.selector).find(".body"),i=$(this.buffer),e=t.find(".row:first").attr("count");i.load("latest_bets_new.php?id=1&type=html&limit=5&id="+e,(function(){var e=$(i.html()).filter(".row"),s=0;e.each((function(){var i=$(this);setTimeout((function(){t.find(".row:first").hasClass("odd")||i.addClass("odd"),t.prepend(i).css("paddingTop",0),t.animate({paddingTop:50},900,"easeInQuad",(function(){for(;t.find(".row").length>25;)t.find(".row:last").remove()}))}),900*s),s++}))}))}};function getRandomInt(t,i){return Math.floor(Math.random()*(i-t+1))+t}function testTicker(t,i){i=parseInt(i),i=isNaN(i)?getRandomInt(1e3,1e4):i,$.get("number_bets.php",(function(i){t.update(i),t.ticker.data("value",i)})),setTimeout((function(){testTicker(t,getRandomInt(4e3,1e4))}),getRandomInt(4e3,1e4))}function testTicker2(t,i){i=parseInt(i),i=isNaN(i)?getRandomInt(1e3,1e4):i,$.get("number_wagers.php",(function(i){t.update(i),t.ticker.data("value",i)})),setTimeout((function(){testTicker2(t,getRandomInt(4e3,1e4))}),getRandomInt(4e3,1e4))}}