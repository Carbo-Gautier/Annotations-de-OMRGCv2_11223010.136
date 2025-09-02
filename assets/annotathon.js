/* 
    Annotathon - Online collaborative bioinformatics training suite
    Copyright (C) 2008  P. Hingamp

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function ptCode(s,a,b) {
     var re1 = '....'.substr(0, a);
     var re2 = '....'.substr(0, b);
     var code = '\"'+s+'\".split(\"#\").reverse().join(\"\")';
     code += '.replace(/('+re2+')('+re1+')/g,\"$2$1\").replace(/_/g,\"\")';
     code = eval(code);
     return(code);
}
var up;

var min1,sec1;

var cmin1,csec1,swinit;

swinit=0;


function Display(min,sec) {

	var disp;
	var lmin=min;

	if(lmin<=9) {disp=" 0";}
	else if(lmin>59 && lmin<=119) {
		disp=" 1:";
		lmin = lmin - 60;
		if(lmin<=9) {disp+="0";}
	}else if(lmin>119 && lmin<=179) {
		disp=" 2:";
		lmin = lmin - 120;
		if(lmin<=9) {disp+="0";}
	}else if(lmin>179) {
		disp=" 3:";
		lmin = lmin - 180;
		if(lmin<=9) {disp+="0";}
	}
	else disp=" ";

	disp+=lmin+":";

	if(sec<=9) disp+="0"+sec;

	else disp+=sec;

	return(disp); }

function Up() {
	if ( swinit==0 && document.getElementById('sw1') ) {
		cmin1=0;

		csec1=0;

		/*min1=0+Minutes(document.main.swmax.value);*/

		/*sec1=0+Seconds(document.main.swmax.value);*/
	
		swinit = 1;

		UpRepeat(); 
		}
	}

function UpRepeat() {

	csec1++;

	if(csec1==60) { csec1=0; cmin1++; }

	var mdisp=Display(cmin1,csec1);
	document.main.sw1.value=mdisp;

	/**if(cmin1==min1) {alert("Vous avez déjà passé "+min1+" minutes à corriger ce lot!");}*/

	up=setTimeout("UpRepeat()",1000); }


/**
 * AJAX IRC...
 */

function submitenter(myfield,e)
{
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	else return true;

	if (keycode == 13)
  	 {
		if (document.getElementById('irc_version').value=='long'){
			submitIRC_tab();
		}else{
	  	 	submitIRC();
		}
  	 	return false;
  	 }
	else
  	 return true;
}

function doubleload(){
	ircloop()
	/**load();*/
}

function ircloop(){
	var param = '';
	if(document.main.public_chat){
		param = 'public_chat=' + getChecked(document.main.public_chat) + '&' 
	}else{
		param = 'public_chat=public&' 
	}
	//if(document.main.scope_chat){
	//	param = param +  'scope_chat=' + getChecked(document.main.scope_chat) + '&' 
	//}else{
	//	param = param +  'scope_chat=world&' 
	//}
	
		Up();// start stopwatch for evaluation form
	
	if (document.getElementById('irc_version')){
		if (document.getElementById('irc_version').value=='long'){
			param = param + 'irc_version=long';
		}
		setTimeout('ircloop();',30000);
		ircWrite("ajax_irc.php", param);
	}
}

function createXHR() 
{
    var request = false;
        try {
            request = new ActiveXObject('Msxml2.XMLHTTP');
        }
        catch (err2) {
            try {
                request = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (err3) {
				try {
				request = new XMLHttpRequest();
			}
			catch (err1) {
				request = false;
				}
            }
        }
    return request;
}

function ircWrite(url, content)
	{ 
		var xhr = createXHR();

		xhr.onreadystatechange=function()
		{ 
			if(xhr.readyState == 4)
			{
				//eval(xhr.responseText); 
				//var r = ;
				//document.getElementById('chat').value=xhr.responseText;
				if (document.getElementById('irc_version').value=='long'){
					document.getElementById('tabchat').innerHTML=xhr.responseText;
				}else{
					document.getElementById('chat').innerHTML=xhr.responseText;
				}
				//alert(r);
			}
		}
		xhr.open("POST", url, true);		
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(content); 
	} 
function getChecked(pub){
			for(var i = 0; i < pub.length; i++) {
				if(pub[i].checked) { return pub[i].value; }
			}
}
function detachIRC_tab(){
	window.open("irc.php", "_blank", "toolbar=no, status=yes, scrollbars=yes, resizable=yes, width=850, height=300, location=no");
	location.href='?actionjs=cart';
}
function submitIRC_tab()
	{ 
		var content = escape(document.main.irc_sentence.value);
		var param = '';
		if(document.main.public_chat){
			param = 'public_chat=' + getChecked(document.main.public_chat) + '&' 
		}
		ircWrite("ajax_irc.php", param + "&irc_version=long&irc_sentence=" + content);
		document.main.irc_sentence.value='';
	} 

function submitIRC()
	{ 
		var content = escape(document.menu.irc_sentence.value);
		var param = '';
		if(document.main.public_chat){
			param = 'public_chat=' + getChecked(document.main.public_chat) + '&' 
		}
		ircWrite("ajax_irc.php", param + '&irc_sentence=' + content);
		document.menu.irc_sentence.value='';
	} 


function confirmAction(theMessage,my_orf_id,my_action)
{
    var is_confirmed = confirm(theMessage);
    if (is_confirmed) {
    	document.main.orf_id.value = my_orf_id;
    	document.main.actionjs.value = my_action;
	document.main.submit();
    }
    return is_confirmed;
} 

function backStage(my_orf_code)
{
    var is_confirmed = confirm('Are you sure you want to revert '+ my_orf_code +' to previous stage?');
    if (is_confirmed) {
    	document.main.orf_code.value = my_orf_code;
    	document.main.actionjs.value = 'backStage';
	document.main.submit();
    }
    return is_confirmed;
} 
function nextStage(my_orf_code)
{
    var is_confirmed = confirm('Are you sure you want to push '+ my_orf_code +' to next stage?');
    if (is_confirmed) {
    	document.main.orf_code.value = my_orf_code;
    	document.main.actionjs.value = 'nextStage';
	document.main.submit();
    }
    return is_confirmed;
} 
function seeForum(my_action)
{
    	document.main.actionjs.value = my_action;
	document.main.submit();
}

function montre(id) {
	var d = document.getElementById(id);
	if (d) {
		if(d.style.display=='inline'){
			d.style.display='none';
		}else{
			d.style.display='inline';
		}
	}
	//}
}

function markThreadId(id)
{
    	document.main.mark_thread_id.value = id;
    	document.main.actionjs.value = 'markThread';
	document.main.submit();
}

function send(my_orf_id,my_action)
{
    	document.main.orf_id.value = my_orf_id;
    	document.main.actionjs.value = my_action;
	document.main.submit();
}

function sendMarking(my_orf_id)
{
    	document.main.mega_orf_id.value = my_orf_id;
	document.main.submit();
}
function sendMarkingSingle(my_orf_code)
{
    	document.main.mega_orf_single_code.value = my_orf_code;
	document.main.submit();
}

function sendView(my_orf_code)
{
    	document.main.orf_code.value = my_orf_code;
	document.main.actionjs.value = 'peek';
	document.main.submit();
}

function sendAdd(my_orf_id)
{
    	document.main.orf_admin_add.value = my_orf_id;
	document.main.submit();
}
function sendEdit(my_orf_id)
{
    	document.main.orf_admin_edit.value = my_orf_id;
	document.main.submit();
}
function sendComp(my_orf_id)
{
    	document.main.mega_orf_id.value = my_orf_id;
    	document.main.actionjs.value = 'CompView';
	document.main.submit();
}
function expand(param)
	{
	param.style.display=(param.style.display=="none")?"":"none";
	}
function collapse(param,anchor)
	{
	param.style.display=(param.style.display=="none")?"":"none";
	location.hash = anchor;
	//param.focus();
	}
function forumScope()
	{
	document.main.forum_narrow.selected=(document.main.forum_narrow.value=="on")?"":"on";
	document.main.submit();
	}

