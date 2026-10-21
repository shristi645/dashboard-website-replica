export const dashboardMarkup = `<style>:root{box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px);--bg:#08111f;--card:#101d30;--tx:#eaf2ff;--mu:#91a5c4;--bd:#243650;--map:#0b1728;--rd:#1d304a;--ok:#2dd4a7;--wa:#fbbf24;--cr:#fb5268;--ca:#b38cff;--fa:#9baac0;--ac:#49e0c1}
:root[data-theme=light]{--bg:#eef4f7;--card:#ffffff;--tx:#102239;--mu:#5c7089;--bd:#d6e1e9;--map:#e7f0f4;--rd:#cedce4;--ok:#128a69;--wa:#b77908;--cr:#d83f58;--ca:#7653be;--fa:#65758a;--ac:#087e8b}
html{scroll-padding-top:env(safe-area-inset-top,0px)}
*{box-sizing:border-box}body{margin:0;background:radial-gradient(ellipse at 10% -10%,rgba(73,224,193,.12),transparent 40%),radial-gradient(ellipse at 100% 5%,rgba(87,128,255,.13),transparent 36%),var(--bg);color:var(--tx);font:14px/1.5 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;letter-spacing:.01em}
header{padding:18px clamp(16px,3vw,36px);border-bottom:1px solid var(--bd);display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between}
h1{font-size:clamp(17px,2vw,23px);margin:0;font-weight:800;letter-spacing:-.04em}h1 span{color:var(--ac)}
.sim{font-size:10px;background:rgba(251,191,36,.12);color:#fbbf24;border:1px solid rgba(251,191,36,.32);padding:6px 11px;border-radius:99px;letter-spacing:.12em;font-weight:800}
main{display:grid;gap:18px;padding:clamp(12px,2.4vw,30px);grid-template-columns:1fr;max-width:1600px;margin:auto}
@media(min-width:1000px){main{grid-template-columns:minmax(0,1.35fr) minmax(340px,.85fr)}}
.card{background:linear-gradient(145deg,rgba(255,255,255,.025),transparent 45%),var(--card);border:1px solid var(--bd);border-radius:18px;padding:clamp(14px,1.7vw,22px);box-shadow:0 12px 34px rgba(0,0,0,.14)}
h2{font-size:11px;margin:0 0 14px;color:var(--mu);text-transform:uppercase;letter-spacing:.15em;font-weight:800}
.stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-bottom:16px}
.stat{text-align:left;border:1px solid var(--bd);border-radius:14px;padding:14px 13px;background:rgba(255,255,255,.025);min-width:0}.stat b{font-size:clamp(22px,2.4vw,30px);display:block;line-height:1.15;letter-spacing:-.05em}.stat small{color:var(--mu);font-size:10px;text-transform:uppercase;letter-spacing:.07em;font-weight:700}
svg{width:100%;height:auto;display:block;background:linear-gradient(135deg,rgba(73,224,193,.035),transparent 50%),var(--map);border:1px solid var(--bd);border-radius:15px}
.pin{cursor:pointer}
button{font:inherit;font-size:12px;font-weight:700;border:1px solid var(--bd);background:rgba(255,255,255,.035);color:var(--tx);padding:9px 12px;border-radius:10px;cursor:pointer}
button:hover{border-color:var(--ac);background:rgba(73,224,193,.08)}button.p{background:var(--ac);color:#071620;border-color:var(--ac);font-weight:800}
.row{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
.badge{display:inline-block;padding:4px 9px;border-radius:99px;color:#fff;font-size:10px;letter-spacing:.035em;font-weight:800}
.gauge{height:12px;background:var(--map);border-radius:99px;position:relative;overflow:hidden;border:1px solid var(--bd)}
.fill{height:100%;transition:width .2s}.mk{position:absolute;top:0;bottom:0;width:2px}
input[type=range]{width:100%}label{font-size:13px;color:var(--mu);display:block;margin-top:6px}
table{width:100%;border-collapse:collapse;font-size:13px}td,th{text-align:left;padding:5px 4px;border-bottom:1px solid var(--bd)}
.scroll{overflow-x:auto}.feed{max-height:300px;overflow:auto;font-size:12px}.feed div{padding:12px 2px;border-bottom:1px solid var(--bd);line-height:1.65}
.phone{border:1px solid var(--bd);border-radius:16px;padding:16px;background:linear-gradient(135deg,rgba(73,224,193,.07),transparent),var(--map);font-size:13px;min-height:84px;line-height:1.8}
small.n{color:var(--mu)}
#wb .w{background:rgba(251,82,104,.12);border:1px solid rgba(251,82,104,.35);color:#ff8090;border-radius:12px;padding:12px 14px;margin-bottom:12px;font-weight:700}
.sr{border-top:1px solid var(--bd);padding-top:6px;margin-top:8px}
header{position:sticky;top:env(safe-area-inset-top,0px);z-index:5;background:rgba(8,17,31,.88);backdrop-filter:blur(18px);box-shadow:0 8px 28px rgba(0,0,0,.16)}
h2{padding-bottom:12px;border-bottom:1px solid var(--bd)}
tbody tr:hover{background:var(--map)}
button{transition:border-color .15s,background .15s}button.p:hover{filter:brightness(1.08)}
button:focus-visible,input:focus-visible{outline:2px solid var(--ac);outline-offset:2px}
.lg{display:flex;flex-wrap:wrap;gap:12px;font-size:12px;color:var(--mu);margin:8px 0}.lg i{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:5px;vertical-align:-1px}
.pl{transform-box:fill-box;transform-origin:center;animation:pu 1.4s ease-out infinite}
@keyframes pu{from{transform:scale(1);opacity:.55}to{transform:scale(2.1);opacity:0}}
@media(prefers-reduced-motion:reduce){.pl{animation:none}.fill{transition:none}}
@media(max-width:620px){.stats{grid-template-columns:repeat(2,minmax(0,1fr))}header{align-items:flex-start}main{gap:12px}.stat{padding:12px}}
body{background:radial-gradient(circle at 15% 0%,rgba(73,224,193,.08),transparent 45%),radial-gradient(circle at 90% 20%,rgba(87,128,255,.08),transparent 40%),var(--bg)}
header{background:rgba(8,17,31,.88);color:var(--tx);border-bottom:1px solid var(--bd)}h1 span{color:var(--ac)}
.card{animation:in .45s ease both;transition:border-color .2s,box-shadow .2s}.card:hover{border-color:rgba(73,224,193,.28);box-shadow:0 16px 40px rgba(0,0,0,.2)}
@keyframes in{from{opacity:0;transform:translateY(10px)}}
button{border-radius:10px}button:active{transform:scale(.96)}
.stat{border-radius:12px;transition:transform .2s}.stat:hover{transform:translateY(-2px)}
#map{box-shadow:inset 0 0 0 1px var(--bd)}.pin{transition:filter .15s}.pin:hover{filter:brightness(1.2) drop-shadow(0 2px 4px rgba(0,0,0,.35))}
.pipe{stroke-dasharray:7 7;animation:fl 1s linear infinite}@keyframes fl{to{stroke-dashoffset:-14}}
.fill{position:relative;overflow:hidden}.fill::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);transform:translateX(-100%);animation:sh 2.2s linear infinite}@keyframes sh{to{transform:translateX(100%)}}
.badge{box-shadow:0 1px 3px rgba(0,0,0,.2)}
.storm{display:flex;gap:6px;flex-wrap:wrap;padding:8px;border-radius:12px;background:var(--map);margin:8px 0;align-items:center;font-size:13px;color:var(--mu)}
@media(prefers-reduced-motion:reduce){.pipe,.fill::after,.card{animation:none}.card:hover,.stat:hover{transform:none}}
.menu{display:flex;gap:4px;background:var(--map);padding:5px;border:1px solid var(--bd);border-radius:13px;margin:14px 0;overflow-x:auto}.menu .tb{flex:1;white-space:nowrap;border:0;background:transparent;color:var(--mu);border-radius:9px;padding:10px 12px}.menu .tb.on{background:rgba(73,224,193,.12);color:var(--ac);font-weight:800;box-shadow:inset 0 0 0 1px rgba(73,224,193,.18)}.uh{display:flex;justify-content:space-between;gap:8px;align-items:flex-start}.pn[hidden]{display:none}.pn{animation:in .25s ease both}</style>

<header><h1>◈ WYR<span>WATCH</span></h1><span class="sim">SIMULATION · demo data, not test results</span></header>
<div style="max-width:1600px;margin:0 auto;padding:22px clamp(12px,2.4vw,30px) 0"><div style="color:var(--ac);font-size:10px;font-weight:900;letter-spacing:.2em;text-transform:uppercase;margin-bottom:7px">CITY INFRASTRUCTURE INTELLIGENCE</div><div style="font-size:clamp(24px,3.2vw,38px);font-weight:850;letter-spacing:-.055em;line-height:1.12">See the risk. <span style="color:var(--ac)">Before it rises.</span></div><p style="margin:8px 0 0;color:var(--mu);max-width:650px;font-size:13px">A command-center prototype for monitoring manhole water levels, cover tampering, device health, and early-warning events.</p></div>
<main>
<section class="card">
<h2>01 / Live sensor network</h2><div id="wb"></div>
<div class="stats"><div class="stat"><b id="nU">0</b><small>Units</small></div><div class="stat"><b id="nTot">0</b><small>Total sensors</small></div><div class="stat"><b id="nOk">0</b><small>Sensors normal</small></div><div class="stat"><b id="nAl">0</b><small>Need attention</small></div></div>
<svg viewBox="0 0 600 380" id="map"></svg>
<div class="lg"><span><i style="background:var(--ok)"></i>Normal</span><span><i style="background:var(--wa)"></i>Warning</span><span><i style="background:var(--cr)"></i>Critical</span><span><i style="background:var(--ca)"></i>Cover alert</span><span><i style="background:var(--fa)"></i>Device fault</span></div>
<div class="row"><button onclick="addU()">+ Add unit</button><button onclick="remU()">− Remove selected unit</button><button onclick="init()">Reset demo</button></div>
<div class="storm"><b>Storm demo:</b><button class="p" onclick="go(1)">🌧 Start storm</button><button onclick="go(-1)">💧 Drain</button><button onclick="go(0)">■ Stop</button><span>Water rises in all sensors and alerts fire as levels cross Warning and Critical.</span></div>
<small class="n">Each unit holds several sensors placed line by line, and the number differs per unit. The dots under each pin are its sensors. Click a pin to select it. Locations are demo positions.</small>
<div class="scroll" style="margin-top:8px"><table><thead><tr><th>ID</th><th>Location</th><th>Zone</th><th>Sensors</th><th>Status</th><th>Min batt</th></tr></thead><tbody id="tb"></tbody></table></div>
</section>
<section style="display:grid;gap:12px;align-content:start">
<div class="card"><h2>02 / Unit diagnostics</h2><div id="sel"></div></div>
<div class="card"><h2>03 / Event stream</h2><div class="feed" id="feed"></div></div>
<div class="card"><h2>04 / Citizen alert preview</h2><div class="phone" id="ph"></div></div>
</section>
</main>
<footer style="text-align:center;font-size:12px;color:var(--mu);padding:8px 12px 16px">WYRWATCH · SMART INFRASTRUCTURE CONCEPT &nbsp; / &nbsp; Simulation data only — hardware specifications pending validation.</footer>
<script>
var names=["Main St & 1st Ave","Oak Rd Junction","Riverside Park Gate","Depot Yard North","Market Square","School Lane","Industrial Park Gate 2","Campus East Entry","Harbor View Rd","Elm St Underpass","Terminal Access Rd","Hilltop Circle"];
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
init();
</script>`;
