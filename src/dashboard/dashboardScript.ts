export const dashboardScript = `var names=["Main St & 1st Ave","Oak Rd Junction","Riverside Park Gate","Depot Yard North","Market Square","School Lane","Industrial Park Gate 2","Campus East Entry","Harbor View Rd","Elm St Underpass","Terminal Access Rd","Hilltop Circle"];
var zones=["Downtown","Residential","Park","Industrial","Downtown","Residential","Industrial","Campus","Waterfront","Residential","Airport","Residential"];
var pos=[[90,80],[250,60],[430,90],[520,200],[300,170],[140,200],[90,300],[260,290],[420,290],[540,300],[200,130],[360,240]];
var C=[3,5,2,4,3,6,2,4,5,3,4,2];
var U=[],sel=0,log=[],q=function(i){return document.getElementById(i)};
var col={Normal:"var(--ok)",Warning:"var(--wa)",Critical:"var(--cr)","Cover Alert":"var(--ca)","Device Fault":"var(--fa)"};
var rk={Normal:0,"Device Fault":1,"Cover Alert":2,Warning:3,Critical:4};
function mkS(i,k){return{id:"S"+(k+1),level:8+((i*7+k*5)%12),fault:false,batt:100-((i*3+k*2)%15)}}
function mk(i){var s=[];for(var k=0;k<C[i];k++)s.push(mkS(i,k));return{id:"MH-"+String(i+1).padStart(2,"0"),name:names[i],zone:zones[i],x:pos[i][0],y:pos[i][1],warn:50,crit:75,cover:"Closed",s:s,n:i}}
function ss(u,x){return x.fault?"Device Fault":x.level>=u.crit?"Critical":x.level>=u.warn?"Warning":"Normal"}
function st(u){var r="Normal";u.s.forEach(function(x){var c=ss(u,x);if(rk[c]>rk[r])r=c});if(u.cover!="Closed"&&rk["Cover Alert"]>rk[r])r="Cover Alert";return r}
function init(){if(T)clearInterval(T);F=null;U=[];for(var i=0;i<6;i++)U.push(mk(i));sel=0;log=[];render()}
function note(u,m,s){log.unshift({t:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),id:u.id,n:u.name,m:m,s:s});log=log.slice(0,30)}
function snap(u){return u.s.map(function(x){return ss(u,x)}).concat(u.cover)}
function chg(u,fn,nr){var b=snap(u);fn();var a=snap(u);if(a.length==b.length)a.forEach(function(v,i){if(v==b[i])return;if(i==u.s.length)v=="Closed"?note(u,"Cover closed.","Normal"):note(u,"Cover "+u.cover.toLowerCase()+".","Cover Alert");else{var x=u.s[i];note(u,x.id+": "+(v=="Normal"?"back to normal.":v=="Device Fault"?"stopped reporting. Check sensor.":"water level "+x.level+"%"),v)}});nr?renderMain():render()}
function sv(fn){var u=U[sel];chg(u,function(){fn(u)})}
function lvc(u,x){return x.level>=u.crit?"var(--cr)":x.level>=u.warn?"var(--wa)":"var(--ok)"}
function upS(j){var u=U[sel],x=u.s[j],c=ss(u,x);q("sb"+j).textContent=c;q("sb"+j).style.background=col[c];q("sl"+j).textContent=x.level;q("sf"+j).style.width=x.level+"%";q("sf"+j).style.background=lvc(u,x);var s=st(u);q("ub").textContent=s;q("ub").style.background=col[s]}
function lv(j,v){var u=U[sel];chg(u,function(){u.s[j].level=+v},1);upS(j)}
function th(k,v){var u=U[sel];chg(u,function(){u[k]=+v;if(u.warn>=u.crit){if(k=="warn")u.crit=Math.min(95,u.warn+5);else u.warn=u.crit-5}},1);q("wv").textContent=u.warn;q("cv").textContent=u.crit;q("rw").value=u.warn;q("rc").value=u.crit;u.s.forEach(function(x,j){upS(j)});document.querySelectorAll(".mw").forEach(function(e){e.style.left=u.warn+"%"});document.querySelectorAll(".mc").forEach(function(e){e.style.left=u.crit+"%"})}
function addU(){if(U.length<12){var n=0;while(U.some(function(u){return u.n===n}))n++;U.push(mk(n));U.sort(function(a,b){return a.n-b.n});sel=U.findIndex(function(u){return u.n===n});F=null;render()}}
function remU(){if(U.length>1){U.splice(sel,1);if(sel>=U.length)sel=U.length-1;F=null;render()}}
function addS(){var u=U[sel];if(u.s.length<8){u.s.push(mkS(u.n,u.s.length));render()}}
function remS(){var u=U[sel];if(u.s.length>1){u.s.pop();render()}}
var F=null;
function vis(){return F===null?U:U.filter(function(u){return u.n===F})}
function pick(i){sel=i;F=U[i].n;render()}
function showAll(){F=null;render()}
var T=null;
function tick(d){U.forEach(function(u){chg(u,function(){u.s.forEach(function(x){if(!x.fault)x.level=Math.max(0,Math.min(100,x.level+Math.round(d*(1+Math.random()*3))))})},1)});var r=q("sel").querySelectorAll('input[oninput^="lv"]');U[sel].s.forEach(function(x,j){upS(j);if(r[j])r[j].value=x.level})}
function go(d){if(T)clearInterval(T);T=null;if(d)T=setInterval(function(){tick(d)},700)}
function renderMain(){
var V=vis(),fu=F===null?null:V[0],tot=0,ok=0,wl=[];
V.forEach(function(u){u.s.forEach(function(x){tot++;var c=ss(u,x);if(c=="Normal")ok++;if(c=="Warning")wl.push(u.id+" "+x.id)})});
nU.textContent=V.length;nTot.textContent=tot;nOk.textContent=ok;nAl.textContent=tot-ok;
wb.innerHTML=wl.length?'<div class="w">⚠ WARNING LEVEL: '+wl.length+' sensor'+(wl.length>1?'s':'')+' – '+wl.join(", ")+'</div>':'';
if(fu)wb.innerHTML='<div style="background:var(--map);border-radius:10px;padding:8px 10px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap"><span>Viewing only <b>'+fu.id+' · '+fu.name+'</b></span><button onclick="showAll()">← Show all units</button></div>'+wb.innerHTML;
var s=(fu?'<g transform="translate(300 190) scale(2.2) translate('+(-fu.x)+' '+(-fu.y-12)+')">':'')+'<rect x="0" y="170" width="600" height="26" fill="var(--rd)"/><rect x="0" y="50" width="600" height="20" fill="var(--rd)"/><rect x="0" y="270" width="600" height="20" fill="var(--rd)"/><rect x="230" y="0" width="22" height="380" fill="var(--rd)"/><rect x="480" y="0" width="22" height="380" fill="var(--rd)"/><text x="300" y="372" text-anchor="middle" font-size="10" fill="var(--mu)">Demo street map</text>';
V.forEach(function(u){var i=U.indexOf(u);var w=u.s.some(function(x){return ss(u,x)=="Warning"});var n=u.s.length,sp=9,x0=u.x-(n-1)*sp/2;
s+='<g class="pin" onclick="pick('+i+')"><title>'+u.name+' · '+u.s.length+' sensors · '+st(u)+'</title>'+(rk[st(u)]>=3?'<circle class="pl" cx="'+u.x+'" cy="'+u.y+'" r="13" fill="'+col[st(u)]+'"/>':'')+'<circle cx="'+u.x+'" cy="'+u.y+'" r="'+(i==sel?17:13)+'" fill="'+col[st(u)]+'" stroke="'+(i==sel?"var(--tx)":"#fff")+'" stroke-width="3"/><text x="'+u.x+'" y="'+(u.y+4)+'" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">'+(u.n+1)+'</text><line x1="'+x0+'" x2="'+(x0+(n-1)*sp)+'" y1="'+(u.y+24)+'" y2="'+(u.y+24)+'" stroke="var(--mu)"/>';
u.s.forEach(function(x,k){s+='<circle cx="'+(x0+k*sp)+'" cy="'+(u.y+24)+'" r="3.5" fill="'+col[ss(u,x)]+'" stroke="var(--card)"/>'});
s+='<text x="'+u.x+'" y="'+(u.y+39)+'" text-anchor="middle" font-size="10" fill="var(--mu)">'+u.id+' · '+n+' sensors</text>';
if(w)s+='<rect x="'+(u.x-26)+'" y="'+(u.y-40)+'" width="52" height="16" rx="8" fill="var(--cr)"/><text x="'+u.x+'" y="'+(u.y-28)+'" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">WARNING</text>';
s+='</g>'});
map.innerHTML=s+(fu?'</g>':'');
tb.innerHTML=V.map(function(u){var i=U.indexOf(u),x=st(u),b=Math.min.apply(null,u.s.map(function(y){return y.batt}));return'<tr onclick="pick('+i+')" style="cursor:pointer;'+(i==sel?"background:var(--map)":"")+'"><td>'+u.id+'</td><td>'+u.name+'</td><td>'+u.zone+'</td><td>'+u.s.length+'</td><td><span class="badge" style="background:'+col[x]+'">'+x+'</span></td><td>'+b+'%</td></tr>'}).join("");
var L=fu?log.filter(function(l){return l.id==fu.id}):log;feed.innerHTML=L.length?L.map(function(l){return'<div><b>'+l.t+'</b> · '+l.id+' '+l.n+'<br><span class="badge" style="background:'+col[l.s]+'">'+l.s+'</span> '+l.m+'</div>'}).join(""):'<small class="n">No alerts yet.</small>';
ph.innerHTML=L.length?'<b>[Brand Name] Alert</b><br>'+L[0].s+' at '+L[0].n+' ('+L[0].id+')<br>'+L[0].m:'No new alerts.'}
var TAB="sensors";
function setTab(t){TAB=t;document.querySelectorAll("#sel .tb").forEach(function(b){b.classList.toggle("on",b.dataset.t==t)});document.querySelectorAll("#sel .pn").forEach(function(p){p.hidden=p.dataset.t!=t})}
function renderSel(){var u=U[sel],x=st(u);
var h='<div class="uh"><div><b>'+u.id+' · '+u.name+'</b><br><small class="n">'+u.zone+' · '+u.s.length+' sensors · position '+u.x+', '+u.y+' (demo)</small></div><span class="badge" id="ub" style="background:'+col[x]+'">'+x+'</span></div>';
var tabs=[["sensors","Sensors ("+u.s.length+")"],["levels","Alert levels"],["cover","Cover"],["manage","Manage"]];
h+='<div class="menu">'+tabs.map(function(t){return'<button class="tb'+(t[0]==TAB?' on':'')+'" data-t="'+t[0]+'" onclick="setTab(\\''+t[0]+'\\')">'+t[1]+'</button>'}).join("")+'</div>';
h+='<div class="pn" data-t="sensors"'+(TAB=="sensors"?'':' hidden')+'>';
u.s.forEach(function(y,j){var c=ss(u,y);
h+='<div class="sr"><b>'+y.id+'</b> <span class="badge" id="sb'+j+'" style="background:'+col[c]+'">'+c+'</span> <small class="n">battery '+y.batt+'% · signal '+(y.fault?"none":"OK")+'</small><label>Water level: <span id="sl'+j+'">'+y.level+'</span>%</label><div class="gauge"><div class="fill" id="sf'+j+'" style="width:'+y.level+'%;background:'+lvc(u,y)+'"></div><div class="mk mw" style="left:'+u.warn+'%;background:var(--wa)"></div><div class="mk mc" style="left:'+u.crit+'%;background:var(--cr)"></div></div><input type="range" min="0" max="100" value="'+y.level+'" '+(y.fault?"disabled":"")+' oninput="lv('+j+',this.value)"><div class="row"><button onclick="sv(function(u){u.s['+j+'].fault=true})">Simulate failure</button><button class="p" onclick="sv(function(u){u.s['+j+'].fault=false;u.s['+j+'].batt=100})">Swap module</button></div></div>'});
h+='</div>';
h+='<div class="pn" data-t="levels"'+(TAB=="levels"?'':' hidden')+'><label>Warning level: <span id="wv">'+u.warn+'</span>%</label><input id="rw" type="range" min="10" max="90" value="'+u.warn+'" oninput="th(\\'warn\\',this.value)"><label>Critical level: <span id="cv">'+u.crit+'</span>%</label><input id="rc" type="range" min="15" max="95" value="'+u.crit+'" oninput="th(\\'crit\\',this.value)"><small class="n">These levels apply to every sensor in this unit. Warning always stays below Critical.</small></div>';
h+='<div class="pn" data-t="cover"'+(TAB=="cover"?'':' hidden')+'><label>Cover position: <b>'+u.cover+'</b></label><div class="row"><button onclick="sv(function(u){u.cover=\\'Opened\\'})">Open</button><button onclick="sv(function(u){u.cover=\\'Tilted\\'})">Tilt</button><button onclick="sv(function(u){u.cover=\\'Moved\\'})">Move</button><button onclick="sv(function(u){u.cover=\\'Removed\\'})">Remove</button><button class="p" onclick="sv(function(u){u.cover=\\'Closed\\'})">Close</button></div><small class="n">Any position other than Closed raises a Cover Alert.</small></div>';
h+='<div class="pn" data-t="manage"'+(TAB=="manage"?'':' hidden')+'><label>Sensors in this unit: <b>'+u.s.length+'</b> (1 to 8)</label><div class="row"><button onclick="addS()">+ Add sensor</button><button onclick="remS()">− Remove sensor</button></div><label>Unit</label><div class="row"><button onclick="remU()" style="color:var(--cr)">Remove this unit</button></div></div>';
h+='<small class="n" style="display:block;margin-top:8px">Demo values only. Reporting interval, battery life and ratings: [Confirm specs].</small>';
q("sel").innerHTML=h}
function render(){renderMain();renderSel()}
init();`;
