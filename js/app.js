$(function() {
	var c = new Coder("style-text");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*Hello,My name is Polly Pang a Data Scientist with developing and digital marketing background.</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*</div>",2000);
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div>Solid skill in statistical analysis, data wrangling, and machine learning</p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*Let'S GO! With my animated CV</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>*</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>-webkit-transition</span>: <span class='bef_value'> all 1s</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*Add some magic...</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*Let's Change!</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>html</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>background</span>: <span class='bef_value'>rgb(63, 82, 99)</span>;</div>");
	c.setClass("html", [{
		"name": "background",
		"val": "rgb(63, 82, 99)"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*Lets change the font color</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>pre,a</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>color</span>: <span class='bef_value'>white</span>;</div>");
	c.setClass("pre,a", [{
		"name": "color",
		"val": "white"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*emm...the page looks nicer now...</div>");
	
	c.load("<div class='bef_comment writecode'>&nbsp;*Let create a new window!!</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>pre</span><span class='bef_key'>:not(:empty)</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>overflow</span>: <span class='bef_value'>hidden</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "overflow",
		"val": "hidden"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>background</span>: <span class='bef_value'>rgb(48, 48, 48)</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "background",
		"val": "rgb(48, 48, 48)"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>border</span>: <span class='bef_value'>1px solid #ccc</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "border",
		"val": "1px solid #ccc"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>max-height</span>: <span class='bef_value'>44.6%</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "max-height",
		"val": "44.6%"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>width</span>: <span class='bef_value'>49%</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "width",
		"val": "49%"
	}]);
	$('#pre:not(:empty)').addClass("toarea");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>font-size</span>: <span class='bef_value'>14<span class='bef_px'>px</span></span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "font-size",
		"val": "14px"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>font-family</span>: <span class='bef_value'>monospace</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "font-family",
		"val": "monospace"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>padding</span>: <span class='bef_value'>10<span class='bef_px'>px</span> 10<span class='bef_px'>px</span> 20<span class='bef_px'>px</span></span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "padding",
		"val": "10px 10px 20px"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>box-shadow</span>: <span class='bef_value'>-4<span class='bef_px'>px</span> 4<span class='bef_px'>px</span> 2<span class='bef_px'>px</span> 0 rgba(0,0,0,0.3)</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "box-shadow",
		"val": "-4px 4px 2px 0 rgba(0,0,0,0.3)"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>white-space</span>: <span class='bef_value'>pre-wrap</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "white-space",
		"val": "pre-wrap"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>outline</span>: <span class='bef_value'>0</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "outline",
		"val": "0"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*OK，let's do some transform</div>");

	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>#style-text</span> {</div>");
  	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>-webkit-transform</span>: <span class='bef_value'>translateX(95%)</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform",
		"val": "translateX(95%)"
	}]);
  	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>position</span>: <span class='bef_value'>absolute</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "position",
		"val": "absolute"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	
	c.load("<div class='bef_comment writecode'>&nbsp;*Lets change the font color</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>.comment</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#857F6B</span>; <span class='bef_key'>font-style</span>: <span class='bef_value'>italic</span>; }</div>");
	c.addClass(".bef_comment","comment");
	c.load("<div class='code writecode'><span class='bef_selector'>.selector</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#E69F0F</span>; }</div>");
	c.addClass(".bef_selector","selector");
	c.load("<div class='code writecode'><span class='selector'>.selector .key</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#64D5EA</span>; }</div>");
	c.addClass(".bef_key","key");
	c.load("<div class='code writecode'><span class='selector'>.key</span>&nbsp;{ <span class='key'>color</span>: <span class='bef_value'>#64D5EA</span>; }</div>");
	c.load("<div class='code writecode'><span class='selector'>.value</span>&nbsp;{ <span class='key'>color</span>: <span class='bef_value'>#BE84F2</span>; }</div>");
	c.addClass(".bef_value","value");
	c.load("<div class='code writecode'><span class='selector'>.value.px</span>&nbsp;{ <span class='key'>color</span>: <span class='value'>#F92772</span>; }</div></p>");
	c.addClass(".value .bef_px","px");
	c.load("<p><div class='comment writecode'>/**</div>");
	
	c.load("<div class='comment writecode'>&nbsp;*Now LETS DO some 3D Animation</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#content</span> {</div>");
  	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-perspective</span>: <span class='value'>1000<span class='px'>px</span></span>;</div>");
  	c.setClass("#content", [{
		"name": "-webkit-perspective",
		"val": "1000px"
	}]);
  	c.load("<div class='code writecode'>}</div></p>");
  	c.load("<p><div class='code writecode'><span class='selector'>#style-text</span> {</div>");
  	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>translateX(98.5%) rotateY(-10deg)</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform",
		"val": "translateX(98.5%) rotateY(-10deg)"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform-origin</span>: <span class='value'>right</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform-origin",
		"val": "right"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='key'>max-height</span>: <span class='value'>94.5%</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "max-height",
		"val": "94.5%"
	}]);
  	c.load("<div class='code writecode'>}</div></p>");
  	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*PLEASE SEE MY RESUME</div>");
	c.load("<div class='comment writecode'>&nbsp;*It's not only fancy colors.</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.addClass("#work-text","pre_work-text");
	c.load("<p><div class='code writecode'><span class='selector'>pre</span><span class='key'>:not(#style-text)</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateY(10deg)</span>;</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform-origin</span>: <span class='value'>left</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	var r = new Coder("work-text");
	r.load("<div id='md'></div>");
	var w = new Coder("md");
	w.load("<h1 class='writecode'>Resume</h1>");
	w.load("<p><div class='writecode'>Polly Pang</div>");
	w.load("<div class='writecode'>Data scientist</div</div>");

	w.load("<h1 class='writecode'>Contact ME</h1>");
	w.load("<ul>");
	w.load("<li class='writecode'>Email:miru11104627@gmail.com</li>");
	w.load("<li class='writecode'>linkedin:<a href='https://www.linkedin.com/in/fanpang/'>www.linkedin.com/in/fanpang</a></li>");

	w.load("<h1 class='writecode'>SKILLS</h1>");
	w.load("<ul>");
	w.load("<li class='writecode'>CODING SKILL:Python,R,JavaScript,SQL</li>");
	w.load("<li class='writecode'>DATA VISUALIZATION: Tableau, PowerBI</li>");
	w.load("<li class='writecode'>MACHINE LEARNING:Linear, logistic regressions, Decision Trees, Random forests, KNN, PCA, Naive Bayes,NLP</li>");
	w.load("<li class='writecode'>ANALYSIS SKILL:statistical testing, forecasting, classification, A/B testing, Network Analysis,Market Basket Analysis</li>");
	w.load("<li class='writecode'>VERSION CONTROL:Git, Docker</li>");
	w.load("<li class='writecode'>BIG DATA:	AWS, Hadoop, Spark</li>");
	w.load("</ul>");

	w.load("<h1 class='writecode'>PROFESSIONAL EXPERIENCE</h1>");
	w.load("<ul>");

	w.load("<p> <b>Data analyst</b>, Red Cube Production &nbsp; November 2021 &#8211; September 2022</p>");
	w.load("<li class='writecode'>Analyzed marketing & sales data with python to segment and filter 1k+ raw sales data, visualized into reports using Tableau/Excel, and delivered to stakeholders <br> on a weekly basis.</li>");
	w.load("<li class='writecode'>Tracked and analyzed advertising data/PPC plan through Facebook, google ads to enhance advertising strategies, saved 15% on Facebook paid ad plan.</li>");
	w.load("<li class='writecode'>Designed and built Sales DB(SQL), shorted order checked time by 1 hour per day.</li>");

	w.load("<p> <b>Demand Generation Specialist</b>, ITWC, Toronto, ON &nbsp; March 2020 &#8211; August 2021 </p>");
	w.load("<li class='writecode'>Extracted 10k+ audience info from channels, with python and Excel. Create campaign reports, reported to 5 PMs weekly.</li>");
	w.load("<li class='writecode'>Maintained and operated audience service database (SQL), Set up ETL data pipelines, performed data quality control using python and decreased the churn rate by 3%.</li>");
	w.load("<li class='writecode'>Collaborated with Email marketing team, and optimized audience retention strategy by performing A/B testing for promo emails within a quarter, achieving a 10% <br> maximum lift on email opening rate.</li>");
	w.load("<li class='writecode'>Designed 4 auto dashboards, monitored campaign health, created campaign track reports every 30 mins with ERP system, optimizing on-time rate by 12%.</li>");
	w.load("<li class='writecode>Presented insights to stakeholders, help with business decision-making.</li>");

	w.load("<p> <b>oftware Developer</b>, Net2net IT Solution, Mississauga, ON &nbsp; September 2019 &#8211; December 2019 </p>");
	w.load("<li class='writecode'>Performed and evaluated A/B testing to optimize booking payment port for Craig Travel, executed 4 versions of the home pages & booking forms with a result of improving ROI by 4%.</li>");
	w.load("<li class='writecode'>Enhanced SEO effort & conversion funnel with Google Analytics, lucky orange, Mozbar to merge paid traffic plan and saved 4k budget for small business.</li>");
	w.load("<li class='writecode'>Presented new-add functions to clients (both tech&non-tech) before each delivery.</li>");
	w.load("<li class='writecode'>Designed 4 auto dashboards, monitored campaign health, created campaign track reports every 30 mins with ERP system, optimizing on-time rate by 12%.</li>");
	w.load("</ul>");

	w.load("<h1 class='writecode'>EDUCATION</h1>");
	w.load("<p> <b>Brainstation</b> Data Scientist Diploma &nbsp; November 2022 &#8211; March 2023</p>");
	w.load("<p> <b>University of Windsor, ON</b> Master of Applied Computing, Computer Science &nbsp; September 2016 &#8211; August 2018</p>");




	
	
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*Maybe you are not satisfy with the layout...</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#work-text</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateX(0deg) rotateY(190deg) rotateZ(180deg)</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#work-text #md</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateY(190deg) rotateZ(180deg)</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*ALL right let'S GO!</div>");
	
	c.load("<div class='comment writecode'>&nbsp;*Let me make the resume move~~~~~</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.setClass("#work-text", [{
		"name": "-webkit-transform",
		"val": "rotateX(0deg) rotateY(190deg) rotateZ(180deg)"
	}]);
	c.setClass("#work-text #md", [{
		"name": "-webkit-transform",
		"val": "rotateY(190deg) rotateZ(180deg)"
	}]);
	c.load("<p><div class='comment writecode'>/**</div>");

	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>font-family</span>: <span class='value'>'Helvetica Neue', Helvetica, sans-serif</span>;</div>");
	c.setClass("#md", [{
		"name": "font-family",
		"val": "'Helvetica Neue', Helvetica, sans-serif"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md h1</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>border-bottom</span>: <span class='value'>1px solid #ccc</span>;</div>");
	c.setClass("#md h1", [{
		"name": "border-bottom",
		"val": "1px solid #ccc"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='key'>padding-bottom</span>: <span class='value'>5px</span>;</div>");
	c.setClass("#md h1", [{
		"name": "padding-bottom",
		"val": "5px"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md li</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>margin</span>: <span class='value'>5<span class='px'>px</span> 0</span>;</div>");
	c.setClass("#md li", [{
		"name": "margin",
		"val": "5px 0"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md h1,#md ul</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>margin</span>: <span class='value'>0</span>;</div>");
	c.setClass("#md h1,#md ul", [{
		"name": "margin",
		"val": "0"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*Feel Free to connect</div>");
	c.load("<div class='comment writecode'>&nbsp;*Thank U！</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");

});

var m = 0;

var Coder = function(dom) {
	this._dom = dom;
};

Coder.prototype = {
	constructor: Coder,
	load: function(code, second) {
		var dom = this._dom;
		var o = this;
		var _second = second ? second : 1000;
		_second = m + _second;
		setTimeout(function() {
			$('#' + dom).scrollTop( $('#' + dom)[0].scrollHeight );
			$("#" + dom).append(code);
		}, _second);
		m = _second;
	},
	setClass: function(dom, styles,second) {
		var _second = second ? second : 0;
		_second = m + _second;
		for (var i in styles) {
			setTimeout(function() {
				$(dom).css(styles[i].name, styles[i].val);
			}, _second);
		}
		m = _second;
	},
	addClass:function(dom,className){
		var second = m;
		setTimeout(function() {
			$(dom).addClass(className);
		}, second);
	}
}