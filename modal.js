/* Where website messages go. To switch to a team inbox, change TO.
   To copy the office admin on every message, put their address in CC. */
window.TP_MAIL={TO:"thomasdalcamo@gmail.com",CC:""};
window.tpMailto=function(subj,body){var M=window.TP_MAIL;return "mailto:"+M.TO+"?"+(M.CC?"cc="+encodeURIComponent(M.CC)+"&":"")+"subject="+encodeURIComponent(subj)+"&body="+encodeURIComponent(body)};
(function(){var bs=document.querySelectorAll('.fem'),m=document.getElementById('emodal');if(!bs.length||!m)return;
var c=m.querySelector('.emcard'),f=m.querySelector('form'),last;
function fs(){return [].slice.call(c.querySelectorAll('a[href],button,input,textarea')).filter(function(e){return !e.disabled&&e.offsetParent!==null})}
function open(e){e&&e.preventDefault();last=document.activeElement;m.hidden=false;document.documentElement.classList.add('emo');f.elements.message.focus();setTimeout(function(){f.elements.message.focus()},30)}
function close(){m.hidden=true;document.documentElement.classList.remove('emo');(last||bs[0]).focus()}
[].forEach.call(bs,function(x){x.addEventListener('click',open)});
m.addEventListener('click',function(e){if(e.target===m||e.target.closest('.emx'))close()});
document.addEventListener('keydown',function(e){if(m.hidden)return;if(e.key==='Escape'){close();return}
 if(e.key==='Tab'){var a=fs(),i=a[0],z=a[a.length-1];if(e.shiftKey&&document.activeElement===i){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();i.focus()}}});
f.addEventListener('submit',function(e){e.preventDefault();if(!f.reportValidity())return;var v=function(n){return f.elements[n].value.trim()};
 var n=v('name'),body=v('message')+(n?'\n\n— '+n:'');
 location.href=tpMailto(n?'Website inquiry from '+n:'Website inquiry',body)});
})();
