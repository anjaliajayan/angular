function _classCallCheck(e,b){if(!(e instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,b){for(var t=0;t<b.length;t++){var i=b[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,b,t){return b&&_defineProperties(e.prototype,b),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{VZZs:function(e,b,t){"use strict";t.r(b);var i,n,a=t("ofXK"),o=t("eIsa"),d=t("fXoL"),c=((i=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){$(document).ready((function(){$(".menu .item").tab(),$(".ui.checkbox").checkbox("attach events",".toggle.button"),$(".ui.dropdown").dropdown()}))}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=d.Kb({type:i,selectors:[["app-create-package"]],decls:260,vars:0,consts:[[1,"ui","fluid","container","_custom-padd"],[1,"preset-header"],[1,"ui","fluid","container"],[1,"preset"],[1,"preset_form"],[1,"ui","form"],[1,"preset_form__inner"],[1,"ui","header"],[1,"basic-header"],[1,"field"],[1,"five","fields"],[1,"three","wide","field"],["type","text","name","packagCode","placeholder","Package Code"],["type","text","name","package-name","placeholder","Package Name"],[1,"ui","selection","dropdown","fluid"],["type","hidden","name","region"],[1,"dropdown","icon"],[1,"default","text"],[1,"menu"],["data-value","1",1,"item"],["data-value","0",1,"item"],["type","hidden","name","category"],[1,"ui","fluid","search","selection","dropdown","fluid"],["type","hidden","name","country"],["data-value","af",1,"item"],[1,"af","flag"],["data-value","ax",1,"item"],[1,"ax","flag"],["data-value","al",1,"item"],[1,"al","flag"],["data-value","dz",1,"item"],[1,"dz","flag"],["data-value","as",1,"item"],[1,"as","flag"],["data-value","ad",1,"item"],[1,"ad","flag"],["data-value","ao",1,"item"],[1,"ao","flag"],["data-value","ai",1,"item"],[1,"ai","flag"],["data-value","ag",1,"item"],[1,"ag","flag"],["data-value","ar",1,"item"],[1,"ar","flag"],["data-value","am",1,"item"],[1,"am","flag"],["data-value","aw",1,"item"],[1,"aw","flag"],["data-value","au",1,"item"],[1,"au","flag"],["data-value","at",1,"item"],[1,"at","flag"],["data-value","az",1,"item"],[1,"az","flag"],["data-value","bs",1,"item"],[1,"bs","flag"],["data-value","bh",1,"item"],[1,"bh","flag"],["type","text","name","destCountry","placeholder","Destination,Country "],[1,"fields"],[1,"five","wide","field"],[1,"ui","checkbox","flight_check"],["type","checkbox","name","flights"],[1,"ui","checkbox","hotel_check"],["type","checkbox","name","hotel"],["type","text","name","packMax","placeholder","Package Days(Max 30 days)"],["type","text","name","packagePrice","placeholder","Package Price "],["type","text","name","discount","placeholder","Discount in % "],["type","text","name","discount","placeholder","Package Stock"],[1,"ui","checkbox","featured_check"],["type","checkbox","name","featured"],[1,"ui","checkbox","online_check"],["type","checkbox","name","online"],[1,"ui","checkbox","offline_check"],["type","checkbox","name","offline"],[1,"ui","tiny","header"],["type","text","name","departure","placeholder","Departure"],["type","text","name","arrival","placeholder","Arrival"],[1,"ui","button","addHotel_btn"],[1,"addHotel_text"],[1,"ui","grid"],[1,"eight","wide","column","ckEditor-area"],["data","Hello, world!"],[1,"eight","wide","column"],[1,"eight","wide","field"],["type","text","name","departure","placeholder","Youtube web link"],[1,"ui","striped","table"],[1,"upload"],[1,"file_choose"],["type","file","name","uploadPhoto"],["href","url"],["type","hidden","name","tourOverview"],[1,"ui","right","floated","button","submit_btn"],[1,"submit_text"]],template:function(e,b){1&e&&(d.Wb(0,"div",0),d.Wb(1,"h3"),d.Wb(2,"span",1),d.Jc(3,"Preset Package"),d.Vb(),d.Vb(),d.Vb(),d.Wb(4,"div",2),d.Wb(5,"div",3),d.Wb(6,"div",4),d.Wb(7,"div",5),d.Wb(8,"div",6),d.Wb(9,"h4",7),d.Wb(10,"span",8),d.Jc(11,"Basic Information"),d.Vb(),d.Vb(),d.Wb(12,"div",9),d.Wb(13,"div",10),d.Wb(14,"div",11),d.Rb(15,"input",12),d.Vb(),d.Wb(16,"div",11),d.Rb(17,"input",13),d.Vb(),d.Wb(18,"div",11),d.Wb(19,"div",14),d.Rb(20,"input",15),d.Rb(21,"i",16),d.Wb(22,"div",17),d.Jc(23,"Region"),d.Vb(),d.Wb(24,"div",18),d.Wb(25,"div",19),d.Jc(26,"-------"),d.Vb(),d.Wb(27,"div",20),d.Jc(28,"-----"),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Wb(29,"div",11),d.Wb(30,"div",14),d.Rb(31,"input",21),d.Rb(32,"i",16),d.Wb(33,"div",17),d.Jc(34,"Category"),d.Vb(),d.Wb(35,"div",18),d.Wb(36,"div",19),d.Jc(37,"------"),d.Vb(),d.Wb(38,"div",20),d.Jc(39,"-----"),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Wb(40,"div",11),d.Wb(41,"div",22),d.Rb(42,"input",23),d.Rb(43,"i",16),d.Wb(44,"div",17),d.Jc(45,"Select Country"),d.Vb(),d.Wb(46,"div",18),d.Wb(47,"div",24),d.Rb(48,"i",25),d.Jc(49,"Afghanistan"),d.Vb(),d.Wb(50,"div",26),d.Rb(51,"i",27),d.Jc(52,"Aland Islands"),d.Vb(),d.Wb(53,"div",28),d.Rb(54,"i",29),d.Jc(55,"Albania"),d.Vb(),d.Wb(56,"div",30),d.Rb(57,"i",31),d.Jc(58,"Algeria"),d.Vb(),d.Wb(59,"div",32),d.Rb(60,"i",33),d.Jc(61,"American Samoa"),d.Vb(),d.Wb(62,"div",34),d.Rb(63,"i",35),d.Jc(64,"Andorra"),d.Vb(),d.Wb(65,"div",36),d.Rb(66,"i",37),d.Jc(67,"Angola"),d.Vb(),d.Wb(68,"div",38),d.Rb(69,"i",39),d.Jc(70,"Anguilla"),d.Vb(),d.Wb(71,"div",40),d.Rb(72,"i",41),d.Jc(73,"Antigua"),d.Vb(),d.Wb(74,"div",42),d.Rb(75,"i",43),d.Jc(76,"Argentina"),d.Vb(),d.Wb(77,"div",44),d.Rb(78,"i",45),d.Jc(79,"Armenia"),d.Vb(),d.Wb(80,"div",46),d.Rb(81,"i",47),d.Jc(82,"Aruba"),d.Vb(),d.Wb(83,"div",48),d.Rb(84,"i",49),d.Jc(85,"Australia"),d.Vb(),d.Wb(86,"div",50),d.Rb(87,"i",51),d.Jc(88,"Austria"),d.Vb(),d.Wb(89,"div",52),d.Rb(90,"i",53),d.Jc(91,"Azerbaijan"),d.Vb(),d.Wb(92,"div",54),d.Rb(93,"i",55),d.Jc(94,"Bahamas"),d.Vb(),d.Wb(95,"div",56),d.Rb(96,"i",57),d.Jc(97,"Bahrain"),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Wb(98,"div",9),d.Wb(99,"div",10),d.Wb(100,"div",11),d.Rb(101,"input",58),d.Vb(),d.Vb(),d.Vb(),d.Wb(102,"div",9),d.Rb(103,"hr"),d.Vb(),d.Wb(104,"div",9),d.Wb(105,"h4",7),d.Wb(106,"span",8),d.Jc(107,"Package Items"),d.Vb(),d.Vb(),d.Wb(108,"div",59),d.Wb(109,"div",60),d.Wb(110,"div",61),d.Rb(111,"input",62),d.Wb(112,"label"),d.Jc(113,"Flights"),d.Vb(),d.Vb(),d.Wb(114,"div",63),d.Rb(115,"input",64),d.Wb(116,"label"),d.Jc(117,"Hotels"),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Wb(118,"div",59),d.Wb(119,"div",11),d.Rb(120,"input",65),d.Vb(),d.Wb(121,"div",11),d.Rb(122,"input",66),d.Vb(),d.Wb(123,"div",11),d.Rb(124,"input",67),d.Vb(),d.Wb(125,"div",11),d.Rb(126,"input",68),d.Vb(),d.Vb(),d.Wb(127,"div",59),d.Wb(128,"div",60),d.Wb(129,"div",69),d.Rb(130,"input",70),d.Wb(131,"label"),d.Jc(132,"Featured"),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Wb(133,"div",9),d.Rb(134,"hr"),d.Vb(),d.Wb(135,"h4",7),d.Wb(136,"span",8),d.Jc(137,"Flight Itinery Details"),d.Vb(),d.Vb(),d.Wb(138,"div",9),d.Wb(139,"div",59),d.Wb(140,"div",60),d.Wb(141,"div",71),d.Rb(142,"input",72),d.Wb(143,"label"),d.Jc(144,"Online"),d.Vb(),d.Vb(),d.Wb(145,"div",73),d.Rb(146,"input",74),d.Wb(147,"label"),d.Jc(148,"Offline"),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Wb(149,"div",75),d.Jc(150,"Flight Option 1"),d.Vb(),d.Wb(151,"div",59),d.Wb(152,"div",11),d.Rb(153,"input",76),d.Vb(),d.Wb(154,"div",11),d.Rb(155,"input",77),d.Vb(),d.Vb(),d.Wb(156,"div",9),d.Rb(157,"hr"),d.Vb(),d.Vb(),d.Wb(158,"h4",7),d.Wb(159,"span",8),d.Jc(160,"Hotel Itinery Details"),d.Vb(),d.Vb(),d.Wb(161,"div",9),d.Wb(162,"div",59),d.Wb(163,"div",60),d.Wb(164,"div",71),d.Rb(165,"input",72),d.Wb(166,"label"),d.Jc(167,"Online"),d.Vb(),d.Vb(),d.Wb(168,"div",73),d.Rb(169,"input",74),d.Wb(170,"label"),d.Jc(171,"Offline"),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Wb(172,"div",9),d.Wb(173,"button",78),d.Wb(174,"span",79),d.Jc(175,"Add Hotel"),d.Vb(),d.Vb(),d.Vb(),d.Wb(176,"div",9),d.Rb(177,"hr"),d.Vb(),d.Wb(178,"div",9),d.Wb(179,"div",80),d.Wb(180,"div",81),d.Rb(181,"ckeditor",82),d.Vb(),d.Wb(182,"div",83),d.Wb(183,"div",75),d.Jc(184,"Supporting images / Documents"),d.Vb(),d.Wb(185,"div",84),d.Rb(186,"input",85),d.Vb(),d.Wb(187,"div",9),d.Wb(188,"table",86),d.Wb(189,"tbody"),d.Wb(190,"tr"),d.Wb(191,"td"),d.Wb(192,"div",87),d.Wb(193,"span",88),d.Jc(194,"Choose photo"),d.Vb(),d.Rb(195,"input",89),d.Vb(),d.Vb(),d.Wb(196,"td"),d.Wb(197,"i"),d.Jc(198,"No of file choosen"),d.Vb(),d.Vb(),d.Wb(199,"td"),d.Jc(200,"Destination Image"),d.Vb(),d.Vb(),d.Wb(201,"tr"),d.Wb(202,"td"),d.Wb(203,"div",87),d.Wb(204,"span",88),d.Jc(205,"Choose photo"),d.Vb(),d.Rb(206,"input",89),d.Vb(),d.Vb(),d.Wb(207,"td"),d.Wb(208,"i"),d.Jc(209,"No of file choosen"),d.Vb(),d.Vb(),d.Wb(210,"td"),d.Jc(211,"Banner Image"),d.Vb(),d.Vb(),d.Wb(212,"tr"),d.Wb(213,"td"),d.Wb(214,"div",87),d.Wb(215,"span",88),d.Jc(216,"Choose photo"),d.Vb(),d.Rb(217,"input",89),d.Vb(),d.Vb(),d.Wb(218,"td"),d.Wb(219,"i"),d.Jc(220,"No of file choosen"),d.Vb(),d.Vb(),d.Wb(221,"td"),d.Jc(222,"Slider Image"),d.Vb(),d.Vb(),d.Wb(223,"tr"),d.Wb(224,"td"),d.Wb(225,"div",87),d.Wb(226,"span",88),d.Jc(227,"Choose photo"),d.Vb(),d.Rb(228,"input",89),d.Vb(),d.Vb(),d.Wb(229,"td"),d.Wb(230,"i"),d.Jc(231,"No of file choosen"),d.Vb(),d.Vb(),d.Wb(232,"td"),d.Jc(233,"Package PDF"),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Wb(234,"div",9),d.Wb(235,"a",90),d.Jc(236,"+ Add Day"),d.Vb(),d.Vb(),d.Vb(),d.Wb(237,"div",9),d.Rb(238,"hr"),d.Vb(),d.Wb(239,"h4",7),d.Wb(240,"span",8),d.Jc(241,"Additional Informations"),d.Vb(),d.Vb(),d.Wb(242,"div",80),d.Wb(243,"div",83),d.Wb(244,"div",84),d.Wb(245,"div",14),d.Rb(246,"input",91),d.Rb(247,"i",16),d.Wb(248,"div",17),d.Jc(249,"Tour Overview"),d.Vb(),d.Wb(250,"div",18),d.Wb(251,"div",19),d.Jc(252,"-------"),d.Vb(),d.Wb(253,"div",20),d.Jc(254,"-----"),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Wb(255,"div",81),d.Rb(256,"ckeditor",82),d.Vb(),d.Vb(),d.Wb(257,"button",92),d.Wb(258,"span",93),d.Jc(259,"Submit"),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb())},directives:[o.a],styles:["._custom-padd[_ngcontent-%COMP%]{padding:0 25px!important}.update-header[_ngcontent-%COMP%]{color:#4f4f4f;font-size:20px;font-weight:200;line-height:22px;margin-left:30px}.ui.fluid.container[_ngcontent-%COMP%]{padding:25px}.preset[_ngcontent-%COMP%]{background-color:#fff;box-shadow:3px 1px 4px 0 rgba(0,0,0,.4);border-radius:20px}.preset_form[_ngcontent-%COMP%]{width:100%;height:auto;padding:50px}.basic-header[_ngcontent-%COMP%]{font-family:Helvetica}hr[_ngcontent-%COMP%]{overflow:visible;border:.5px solid #e0e0e0}.update_btn[_ngcontent-%COMP%], hr[_ngcontent-%COMP%]{box-sizing:border-box}.update_btn[_ngcontent-%COMP%]{border-radius:3px;background-color:#3867b1;border:1px solid #fff;box-shadow:inset 0 1px 34px 0 rgba(0,0,0,.5),0 1px 1px 0 rgba(0,0,0,.5);padding-right:35px;margin-top:15px}.update_text[_ngcontent-%COMP%]{color:#fff;font-family:Helvetica;font-size:13px;font-weight:500;line-height:15px;padding-left:10px}.addHotel_btn[_ngcontent-%COMP%]{border-radius:3px;background-color:#3867b1}.addHotel_text[_ngcontent-%COMP%]{color:#fff;font-family:Helvetica;font-size:11px;font-weight:500;line-height:12px}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{font-size:12px}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{font-size:12px}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{font-size:12px}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{font-size:12px}.dropdown[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:12px}.hotel_check[_ngcontent-%COMP%], .offline_check[_ngcontent-%COMP%]{padding-left:17px}div.upload[_ngcontent-%COMP%]{box-sizing:border-box;height:15px;width:123px;border-radius:3px;background-color:#fff;border:.5px solid grey;box-shadow:0 .25px .1px 0 rgba(0,0,0,.5)}div.upload[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:block!important;width:123px!important;height:15px!important;opacity:0!important;overflow:hidden!important}.file_choose[_ngcontent-%COMP%]{position:relative;left:27px;bottom:6px;color:#4f4f4f;font-family:Helvetica;font-size:9px;line-height:10px}.submit_btn[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:3px;background-color:#3867b1;border:1px solid #fff;box-shadow:inset 0 1px 34px 0 rgba(0,0,0,.5),0 1px 1px 0 rgba(0,0,0,.5);padding-right:35px}.submit_text[_ngcontent-%COMP%]{color:#fff;font-family:Helvetica;font-size:13px;font-weight:500;line-height:15px;padding-left:10px}"]}),i),l=t("tyNb"),r=[{path:"",component:c}],p=((n=function e(){_classCallCheck(this,e)}).\u0275mod=d.Ob({type:n}),n.\u0275inj=d.Nb({factory:function(e){return new(e||n)},imports:[[l.j.forChild(r)],l.j]}),n);t.d(b,"CreatePackageModule",(function(){return f}));var u,f=((u=function e(){_classCallCheck(this,e)}).\u0275mod=d.Ob({type:u}),u.\u0275inj=d.Nb({factory:function(e){return new(e||u)},imports:[[a.c,o.b,p]]}),u)}}]);