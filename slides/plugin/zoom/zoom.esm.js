var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=function(t){return t&&t.Math==Math&&t},n=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||function(){return this}()||Function("return this")(),r={},o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u=Function.prototype.call,c=u.bind?u.bind(u):function(){return u.apply(u,arguments)},a={},s={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,f=l&&!s.call({1:2},1);a.f=f?function(t){var e=l(this,t);return!!e&&e.enumerable}:s;var d,y,m=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},p=Function.prototype,g=p.bind,b=p.call,v=g&&g.bind(b),h=g?function(t){return t&&v(b,t)}:function(t){return t&&function(){return b.apply(t,arguments)}},w=h,x=w({}.toString),O=w("".slice),S=function(t){return O(x(t),8,-1)},T=h,E=o,j=S,I=n.Object,P=T("".split),z=E((function(){return!I("z").propertyIsEnumerable(0)}))?function(t){return"String"==j(t)?P(t,""):I(t)}:I,R=n.TypeError,C=function(t){if(null==t)throw R("Can't call method on "+t);return t},k=z,M=C,L=function(t){return k(M(t))},_=function(t){return"function"==typeof t},W=_,A=function(t){return"object"==typeof t?null!==t:W(t)},F=n,N=_,D=function(t){return N(t)?t:void 0},Y=function(t,e){return arguments.length<2?D(F[t]):F[t]&&F[t][e]},K=h({}.isPrototypeOf),X=n,B=Y("navigator","userAgent")||"",H=X.process,U=X.Deno,G=H&&H.versions||U&&U.version,$=G&&G.v8;$&&(y=(d=$.split("."))[0]>0&&d[0]<4?1:+(d[0]+d[1])),!y&&B&&(!(d=B.match(/Edge\/(\d+)/))||d[1]>=74)&&(d=B.match(/Chrome\/(\d+)/))&&(y=+d[1]);var q=y,V=o,J=!!Object.getOwnPropertySymbols&&!V((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&q&&q<41})),Q=J&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Z=Y,tt=_,et=K,nt=Q,rt=n.Object,ot=nt?function(t){return"symbol"==typeof t}:function(t){var e=Z("Symbol");return tt(e)&&et(e.prototype,rt(t))},it=n.String,ut=_,ct=function(t){try{return it(t)}catch(t){return"Object"}},at=n.TypeError,st=function(t){if(ut(t))return t;throw at(ct(t)+" is not a function")},lt=c,ft=_,dt=A,yt=n.TypeError,mt={exports:{}},pt=n,gt=Object.defineProperty,bt=function(t,e){try{gt(pt,t,{value:e,configurable:!0,writable:!0})}catch(n){pt[t]=e}return e},vt=bt,ht=n["__core-js_shared__"]||vt("__core-js_shared__",{}),wt=ht;(mt.exports=function(t,e){return wt[t]||(wt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.3",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var xt=C,Ot=n.Object,St=function(t){return Ot(xt(t))},Tt=h({}.hasOwnProperty),Et=Object.hasOwn||function(t,e){return Tt(St(t),e)},jt=h,It=0,Pt=Math.random(),zt=jt(1..toString),Rt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+zt(++It+Pt,36)},Ct=n,kt=mt.exports,Mt=Et,Lt=Rt,_t=J,Wt=Q,At=kt("wks"),Ft=Ct.Symbol,Nt=Ft&&Ft.for,Dt=Wt?Ft:Ft&&Ft.withoutSetter||Lt,Yt=function(t){if(!Mt(At,t)||!_t&&"string"!=typeof At[t]){var e="Symbol."+t;_t&&Mt(Ft,t)?At[t]=Ft[t]:At[t]=Wt&&Nt?Nt(e):Dt(e)}return At[t]},Kt=c,Xt=A,Bt=ot,Ht=function(t,e){var n=t[e];return null==n?void 0:st(n)},Ut=function(t,e){var n,r;if("string"===e&&ft(n=t.toString)&&!dt(r=lt(n,t)))return r;if(ft(n=t.valueOf)&&!dt(r=lt(n,t)))return r;if("string"!==e&&ft(n=t.toString)&&!dt(r=lt(n,t)))return r;throw yt("Can't convert object to primitive value")},Gt=Yt,$t=n.TypeError,qt=Gt("toPrimitive"),Vt=function(t,e){if(!Xt(t)||Bt(t))return t;var n,r=Ht(t,qt);if(r){if(void 0===e&&(e="default"),n=Kt(r,t,e),!Xt(n)||Bt(n))return n;throw $t("Can't convert object to primitive value")}return void 0===e&&(e="number"),Ut(t,e)},Jt=ot,Qt=function(t){var e=Vt(t,"string");return Jt(e)?e:e+""},Zt=A,te=n.document,ee=Zt(te)&&Zt(te.createElement),ne=function(t){return ee?te.createElement(t):{}},re=ne,oe=!i&&!o((function(){return 7!=Object.defineProperty(re("div"),"a",{get:function(){return 7}}).a})),ie=i,ue=c,ce=a,ae=m,se=L,le=Qt,fe=Et,de=oe,ye=Object.getOwnPropertyDescriptor;r.f=ie?ye:function(t,e){if(t=se(t),e=le(e),de)try{return ye(t,e)}catch(t){}if(fe(t,e))return ae(!ue(ce.f,t,e),t[e])};var me={},pe=n,ge=A,be=pe.String,ve=pe.TypeError,he=function(t){if(ge(t))return t;throw ve(be(t)+" is not an object")},we=i,xe=oe,Oe=he,Se=Qt,Te=n.TypeError,Ee=Object.defineProperty;me.f=we?Ee:function(t,e,n){if(Oe(t),e=Se(e),Oe(n),xe)try{return Ee(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Te("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var je=me,Ie=m,Pe=i?function(t,e,n){return je.f(t,e,Ie(1,n))}:function(t,e,n){return t[e]=n,t},ze={exports:{}},Re=_,Ce=ht,ke=h(Function.toString);Re(Ce.inspectSource)||(Ce.inspectSource=function(t){return ke(t)});var Me,Le,_e,We=Ce.inspectSource,Ae=_,Fe=We,Ne=n.WeakMap,De=Ae(Ne)&&/native code/.test(Fe(Ne)),Ye=mt.exports,Ke=Rt,Xe=Ye("keys"),Be=function(t){return Xe[t]||(Xe[t]=Ke(t))},He={},Ue=De,Ge=n,$e=h,qe=A,Ve=Pe,Je=Et,Qe=ht,Ze=Be,tn=He,en=Ge.TypeError,nn=Ge.WeakMap;if(Ue||Qe.state){var rn=Qe.state||(Qe.state=new nn),on=$e(rn.get),un=$e(rn.has),cn=$e(rn.set);Me=function(t,e){if(un(rn,t))throw new en("Object already initialized");return e.facade=t,cn(rn,t,e),e},Le=function(t){return on(rn,t)||{}},_e=function(t){return un(rn,t)}}else{var an=Ze("state");tn[an]=!0,Me=function(t,e){if(Je(t,an))throw new en("Object already initialized");return e.facade=t,Ve(t,an,e),e},Le=function(t){return Je(t,an)?t[an]:{}},_e=function(t){return Je(t,an)}}var sn={set:Me,get:Le,has:_e,enforce:function(t){return _e(t)?Le(t):Me(t,{})},getterFor:function(t){return function(e){var n;if(!qe(e)||(n=Le(e)).type!==t)throw en("Incompatible receiver, "+t+" required");return n}}},ln=i,fn=Et,dn=Function.prototype,yn=ln&&Object.getOwnPropertyDescriptor,mn=fn(dn,"name"),pn=mn&&"something"===function(){}.name,gn=mn&&(!ln||ln&&yn(dn,"name").configurable),bn=n,vn=_,hn=Et,wn=Pe,xn=bt,On=We,Sn={EXISTS:mn,PROPER:pn,CONFIGURABLE:gn}.CONFIGURABLE,Tn=sn.get,En=sn.enforce,jn=String(String).split("String");(ze.exports=function(t,e,n,r){var o,i=!!r&&!!r.unsafe,u=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet,a=r&&void 0!==r.name?r.name:e;vn(n)&&("Symbol("===String(a).slice(0,7)&&(a="["+String(a).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!hn(n,"name")||Sn&&n.name!==a)&&wn(n,"name",a),(o=En(n)).source||(o.source=jn.join("string"==typeof a?a:""))),t!==bn?(i?!c&&t[e]&&(u=!0):delete t[e],u?t[e]=n:wn(t,e,n)):u?t[e]=n:xn(e,n)})(Function.prototype,"toString",(function(){return vn(this)&&Tn(this).source||On(this)}));var In={},Pn=Math.ceil,zn=Math.floor,Rn=function(t){var e=+t;return e!=e||0===e?0:(e>0?zn:Pn)(e)},Cn=Rn,kn=Math.max,Mn=Math.min,Ln=Rn,_n=Math.min,Wn=function(t){return t>0?_n(Ln(t),9007199254740991):0},An=L,Fn=function(t,e){var n=Cn(t);return n<0?kn(n+e,0):Mn(n,e)},Nn=function(t){return Wn(t.length)},Dn=function(t){return function(e,n,r){var o,i=An(e),u=Nn(i),c=Fn(r,u);if(t&&n!=n){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},Yn={includes:Dn(!0),indexOf:Dn(!1)},Kn=Et,Xn=L,Bn=Yn.indexOf,Hn=He,Un=h([].push),Gn=function(t,e){var n,r=Xn(t),o=0,i=[];for(n in r)!Kn(Hn,n)&&Kn(r,n)&&Un(i,n);for(;e.length>o;)Kn(r,n=e[o++])&&(~Bn(i,n)||Un(i,n));return i},$n=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],qn=Gn,Vn=$n.concat("length","prototype");In.f=Object.getOwnPropertyNames||function(t){return qn(t,Vn)};var Jn={};Jn.f=Object.getOwnPropertySymbols;var Qn=Y,Zn=In,tr=Jn,er=he,nr=h([].concat),rr=Qn("Reflect","ownKeys")||function(t){var e=Zn.f(er(t)),n=tr.f;return n?nr(e,n(t)):e},or=Et,ir=rr,ur=r,cr=me,ar=o,sr=_,lr=/#|\.prototype\./,fr=function(t,e){var n=yr[dr(t)];return n==pr||n!=mr&&(sr(e)?ar(e):!!e)},dr=fr.normalize=function(t){return String(t).replace(lr,".").toLowerCase()},yr=fr.data={},mr=fr.NATIVE="N",pr=fr.POLYFILL="P",gr=fr,br=n,vr=r.f,hr=Pe,wr=ze.exports,xr=bt,Or=function(t,e){for(var n=ir(e),r=cr.f,o=ur.f,i=0;i<n.length;i++){var u=n[i];or(t,u)||r(t,u,o(e,u))}},Sr=gr,Tr={};Tr[Yt("toStringTag")]="z";var Er,jr=n,Ir="[object z]"===String(Tr),Pr=_,zr=S,Rr=Yt("toStringTag"),Cr=jr.Object,kr="Arguments"==zr(function(){return arguments}()),Mr=Ir?zr:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Cr(t),Rr))?n:kr?zr(e):"Object"==(r=zr(e))&&Pr(e.callee)?"Arguments":r},Lr=n.String,_r=he,Wr=o,Ar=n.RegExp,Fr=Wr((function(){var t=Ar("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),Nr=Fr||Wr((function(){return!Ar("a","y").sticky})),Dr={BROKEN_CARET:Fr||Wr((function(){var t=Ar("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:Nr,UNSUPPORTED_Y:Fr},Yr=Gn,Kr=$n,Xr=Object.keys||function(t){return Yr(t,Kr)},Br=me,Hr=he,Ur=L,Gr=Xr,$r=i?Object.defineProperties:function(t,e){Hr(t);for(var n,r=Ur(e),o=Gr(e),i=o.length,u=0;i>u;)Br.f(t,n=o[u++],r[n]);return t},qr=Y("document","documentElement"),Vr=he,Jr=$r,Qr=$n,Zr=He,to=qr,eo=ne,no=Be("IE_PROTO"),ro=function(){},oo=function(t){return"<script>"+t+"<\/script>"},io=function(t){t.write(oo("")),t.close();var e=t.parentWindow.Object;return t=null,e},uo=function(){try{Er=new ActiveXObject("htmlfile")}catch(t){}var t,e;uo="undefined"!=typeof document?document.domain&&Er?io(Er):((e=eo("iframe")).style.display="none",to.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(oo("document.F=Object")),t.close(),t.F):io(Er);for(var n=Qr.length;n--;)delete uo.prototype[Qr[n]];return uo()};Zr[no]=!0;var co,ao,so=Object.create||function(t,e){var n;return null!==t?(ro.prototype=Vr(t),n=new ro,ro.prototype=null,n[no]=t):n=uo(),void 0===e?n:Jr(n,e)},lo=o,fo=n.RegExp,yo=lo((function(){var t=fo(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),mo=o,po=n.RegExp,go=mo((function(){var t=po("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),bo=c,vo=h,ho=function(t){if("Symbol"===Mr(t))throw TypeError("Cannot convert a Symbol value to a string");return Lr(t)},wo=function(){var t=_r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},xo=Dr,Oo=mt.exports,So=so,To=sn.get,Eo=yo,jo=go,Io=Oo("native-string-replace",String.prototype.replace),Po=RegExp.prototype.exec,zo=Po,Ro=vo("".charAt),Co=vo("".indexOf),ko=vo("".replace),Mo=vo("".slice),Lo=(ao=/b*/g,bo(Po,co=/a/,"a"),bo(Po,ao,"a"),0!==co.lastIndex||0!==ao.lastIndex),_o=xo.BROKEN_CARET,Wo=void 0!==/()??/.exec("")[1];(Lo||Wo||_o||Eo||jo)&&(zo=function(t){var e,n,r,o,i,u,c,a=this,s=To(a),l=ho(t),f=s.raw;if(f)return f.lastIndex=a.lastIndex,e=bo(zo,f,l),a.lastIndex=f.lastIndex,e;var d=s.groups,y=_o&&a.sticky,m=bo(wo,a),p=a.source,g=0,b=l;if(y&&(m=ko(m,"y",""),-1===Co(m,"g")&&(m+="g"),b=Mo(l,a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==Ro(l,a.lastIndex-1))&&(p="(?: "+p+")",b=" "+b,g++),n=new RegExp("^(?:"+p+")",m)),Wo&&(n=new RegExp("^"+p+"$(?!\\s)",m)),Lo&&(r=a.lastIndex),o=bo(Po,y?n:a,b),y?o?(o.input=Mo(o.input,g),o[0]=Mo(o[0],g),o.index=a.lastIndex,a.lastIndex+=o[0].length):a.lastIndex=0:Lo&&o&&(a.lastIndex=a.global?o.index+o[0].length:r),Wo&&o&&o.length>1&&bo(Io,o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&d)for(o.groups=u=So(null),i=0;i<d.length;i++)u[(c=d[i])[0]]=o[c[1]];return o});(function(t,e){var n,r,o,i,u,c=t.target,a=t.global,s=t.stat;if(n=a?br:s?br[c]||xr(c,{}):(br[c]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(u=vr(n,r))&&u.value:n[r],!Sr(a?r:c+(s?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Or(i,o)}(t.sham||o&&o.sham)&&hr(i,"sham",!0),wr(n,r,i,t)}})({target:"RegExp",proto:!0,forced:/./.exec!==zo},{exec:zo});
/*!
 * reveal.js Zoom plugin
 */
var Ao={id:"zoom",init:function(t){t.getRevealElement().addEventListener("mousedown",(function(e){var n=/Linux/.test(window.navigator.platform)?"ctrl":"alt",r=(t.getConfig().zoomKey?t.getConfig().zoomKey:n)+"Key",o=t.getConfig().zoomLevel?t.getConfig().zoomLevel:2;e[r]&&!t.isOverview()&&(e.preventDefault(),No.to({x:e.clientX,y:e.clientY,scale:o,pan:!1}))}))}},Fo=function(){return Ao},No=function(){var t=1,e=0,n=0,r=-1,o=-1,i="WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style;function u(e,n){var r=a();if(e.width=e.width||1,e.height=e.height||1,e.x-=(window.innerWidth-e.width*n)/2,e.y-=(window.innerHeight-e.height*n)/2,i)if(1===n)document.body.style.transform="",document.body.style.OTransform="",document.body.style.msTransform="",document.body.style.MozTransform="",document.body.style.WebkitTransform="";else{var o=r.x+"px "+r.y+"px",u="translate("+-e.x+"px,"+-e.y+"px) scale("+n+")";document.body.style.transformOrigin=o,document.body.style.OTransformOrigin=o,document.body.style.msTransformOrigin=o,document.body.style.MozTransformOrigin=o,document.body.style.WebkitTransformOrigin=o,document.body.style.transform=u,document.body.style.OTransform=u,document.body.style.msTransform=u,document.body.style.MozTransform=u,document.body.style.WebkitTransform=u}else 1===n?(document.body.style.position="",document.body.style.left="",document.body.style.top="",document.body.style.width="",document.body.style.height="",document.body.style.zoom=""):(document.body.style.position="relative",document.body.style.left=-(r.x+e.x)/n+"px",document.body.style.top=-(r.y+e.y)/n+"px",document.body.style.width=100*n+"%",document.body.style.height=100*n+"%",document.body.style.zoom=n);t=n,document.documentElement.classList&&(1!==t?document.documentElement.classList.add("zoomed"):document.documentElement.classList.remove("zoomed"))}function c(){var r=.12*window.innerWidth,o=.12*window.innerHeight,i=a();n<o?window.scroll(i.x,i.y-14/t*(1-n/o)):n>window.innerHeight-o&&window.scroll(i.x,i.y+(1-(window.innerHeight-n)/o)*(14/t)),e<r?window.scroll(i.x-14/t*(1-e/r),i.y):e>window.innerWidth-r&&window.scroll(i.x+(1-(window.innerWidth-e)/r)*(14/t),i.y)}function a(){return{x:void 0!==window.scrollX?window.scrollX:window.pageXOffset,y:void 0!==window.scrollY?window.scrollY:window.pageYOffset}}return i&&(document.body.style.transition="transform 0.8s ease",document.body.style.OTransition="-o-transform 0.8s ease",document.body.style.msTransition="-ms-transform 0.8s ease",document.body.style.MozTransition="-moz-transform 0.8s ease",document.body.style.WebkitTransition="-webkit-transform 0.8s ease"),document.addEventListener("keyup",(function(e){1!==t&&27===e.keyCode&&No.out()})),document.addEventListener("mousemove",(function(r){1!==t&&(e=r.clientX,n=r.clientY)})),{to:function(e){if(1!==t)No.out();else{if(e.x=e.x||0,e.y=e.y||0,e.element){var n=e.element.getBoundingClientRect();e.x=n.left-20,e.y=n.top-20,e.width=n.width+40,e.height=n.height+40}void 0!==e.width&&void 0!==e.height&&(e.scale=Math.max(Math.min(window.innerWidth/e.width,window.innerHeight/e.height),1)),e.scale>1&&(e.x*=e.scale,e.y*=e.scale,u(e,e.scale),!1!==e.pan&&(r=setTimeout((function(){o=setInterval(c,1e3/60)}),800)))}},out:function(){clearTimeout(r),clearInterval(o),u({x:0,y:0},1),t=1},magnify:function(t){this.to(t)},reset:function(){this.out()},zoomLevel:function(){return t}}}();export{Fo as default};
