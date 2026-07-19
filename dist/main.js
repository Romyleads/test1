(()=>{var um=0,wf=1,fm=2;var ka=1,dm=2,Io=3,Mr=0,yi=1,Qi=2,Pn=0,Es=1,jr=2,Ef=3,Af=4,pm=5;var Xr=100,mm=101,gm=102,_m=103,xm=104,vm=200,ym=201,Sm=202,Mm=203,pc=204,mc=205,bm=206,Tm=207,wm=208,Em=209,Am=210,Cm=211,Rm=212,Pm=213,Im=214,gc=0,_c=1,xc=2,As=3,vc=4,yc=5,Sc=6,Mc=7,Cf=0,Dm=1,Lm=2,Gn=0,Va=1,Ha=2,Ga=3,Ps=4,Wa=5,Xa=6,Ya=7;var Rf=300,Qr=301,Is=302,Jc=303,Kc=304,qa=306,bc=1e3,Qn=1001,Tc=1002,jt=1003,Nm=1004;var Za=1005;var si=1006,jc=1007;var $r=1008;var $i=1009,Pf=1010,If=1011,Do=1012,Qc=1013,Wn=1014,Xn=1015,oi=1016,$c=1017,eh=1018,Lo=1020,Df=35902,Lf=35899,Nf=1021,Of=1022,In=1023,$n=1026,es=1027,Uf=1028,th=1029,ts=1030,ih=1031;var nh=1033,Ja=33776,Ka=33777,ja=33778,Qa=33779,rh=35840,sh=35841,oh=35842,ah=35843,lh=36196,ch=37492,hh=37496,uh=37488,fh=37489,$a=37490,dh=37491,ph=37808,mh=37809,gh=37810,_h=37811,xh=37812,vh=37813,yh=37814,Sh=37815,Mh=37816,bh=37817,Th=37818,wh=37819,Eh=37820,Ah=37821,Ch=36492,Rh=36494,Ph=36495,Ih=36283,Dh=36284,el=36285,Lh=36286;var ya=2300,wc=2301,dc=2302,df=2303,pf=2400,mf=2401,gf=2402;var Om=3200;var Nh=0,Um=1,wr="",Vi="srgb",Sa="srgb-linear",Ma="linear",pt="srgb";var Ts=7680;var _f=519,Fm=512,Bm=513,zm=514,Oh=515,km=516,Vm=517,Uh=518,Hm=519,xf=35044;var Ff="300 es",Vn=2e3,vo=2001;function q_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Z_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ba(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gm(){let r=ba("canvas");return r.style.display="block",r}var Up={},yo=null;function Bf(...r){let e="THREE."+r.shift();yo?yo("log",e,...r):console.log(e,...r)}function Wm(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ze(...r){r=Wm(r);let e="THREE."+r.shift();if(yo)yo("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ve(...r){r=Wm(r);let e="THREE."+r.shift();if(yo)yo("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ws(...r){let e=r.join(" ");e in Up||(Up[e]=!0,ze(...r))}function Xm(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Ym={[gc]:_c,[xc]:Sc,[vc]:Mc,[As]:yc,[_c]:gc,[Sc]:xc,[Mc]:vc,[yc]:As},er=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}},Ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fp=1234567,_o=Math.PI/180,So=180/Math.PI;function No(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ei[r&255]+Ei[r>>8&255]+Ei[r>>16&255]+Ei[r>>24&255]+"-"+Ei[e&255]+Ei[e>>8&255]+"-"+Ei[e>>16&15|64]+Ei[e>>24&255]+"-"+Ei[t&63|128]+Ei[t>>8&255]+"-"+Ei[t>>16&255]+Ei[t>>24&255]+Ei[i&255]+Ei[i>>8&255]+Ei[i>>16&255]+Ei[i>>24&255]).toLowerCase()}function ct(r,e,t){return Math.max(e,Math.min(t,r))}function zf(r,e){return(r%e+e)%e}function J_(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function K_(r,e,t){return r!==e?(t-r)/(e-r):0}function va(r,e,t){return(1-t)*r+t*e}function j_(r,e,t,i){return va(r,e,1-Math.exp(-t*i))}function Q_(r,e=1){return e-Math.abs(zf(r,e*2)-e)}function $_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ex(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function tx(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ix(r,e){return r+Math.random()*(e-r)}function nx(r){return r*(.5-Math.random())}function rx(r){r!==void 0&&(Fp=r);let e=Fp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sx(r){return r*_o}function ox(r){return r*So}function ax(r){return(r&r-1)===0&&r!==0}function lx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function cx(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hx(r,e,t,i,n){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),d=s((e-i)/2),u=o((e-i)/2),f=s((i-e)/2),p=o((i-e)/2);switch(n){case"XYX":r.set(a*h,l*d,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*h,a*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function go(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ki(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var is={DEG2RAD:_o,RAD2DEG:So,generateUUID:No,clamp:ct,euclideanModulo:zf,mapLinear:J_,inverseLerp:K_,lerp:va,damp:j_,pingpong:Q_,smoothstep:$_,smootherstep:ex,randInt:tx,randFloat:ix,randFloatSpread:nx,seededRandom:rx,degToRad:sx,radToDeg:ox,isPowerOfTwo:ax,ceilPowerOfTwo:lx,floorPowerOfTwo:cx,setQuaternionFromProperEuler:hx,normalize:ki,denormalize:go},Oe=class r{static{r.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Cn=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=s[o+0],f=s[o+1],p=s[o+2],_=s[o+3];if(d!==_||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*_;m<0&&(u=-u,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let S=Math.acos(m),A=Math.sin(S);g=Math.sin(g*S)/A,a=Math.sin(a*S)/A,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+_*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+_*a;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[o],u=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-a*f,e[t+2]=c*p+h*f+a*u-l*d,e[t+3]=h*p-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(s/2),u=l(i/2),f=l(n/2),p=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-n)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(s-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,n=-n,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class r{static{r.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),h=2*(a*t-s*n),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=n+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hu.copy(this).projectOnVector(e),this.sub(Hu)}reflect(e){return this.sub(Hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hu=new z,Bp=new Cn,Ke=class r{static{r.prototype.isMatrix3=!0}constructor(e,t,i,n,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,c)}set(e,t,i,n,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],_=n[0],m=n[3],g=n[6],S=n[1],A=n[4],y=n[7],b=n[2],w=n[5],E=n[8];return s[0]=o*_+a*S+l*b,s[3]=o*m+a*A+l*w,s[6]=o*g+a*y+l*E,s[1]=c*_+h*S+d*b,s[4]=c*m+h*A+d*w,s[7]=c*g+h*y+d*E,s[2]=u*_+f*S+p*b,s[5]=u*m+f*A+p*w,s[8]=u*g+f*y+p*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,p=t*d+i*u+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=d*_,e[1]=(n*c-h*i)*_,e[2]=(a*i-n*o)*_,e[3]=u*_,e[4]=(h*t-n*l)*_,e[5]=(n*s-a*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gu.makeScale(e,t)),this}rotate(e){return ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gu.makeRotation(-e)),this}translate(e,t){return ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Gu=new Ke,zp=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kp=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ux(){let r={enabled:!0,workingColorSpace:Sa,spaces:{},convert:function(n,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===pt&&(n.r=Sr(n.r),n.g=Sr(n.g),n.b=Sr(n.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(n.r=xo(n.r),n.g=xo(n.g),n.b=xo(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===wr?Ma:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Sa]:{primaries:e,whitePoint:i,transfer:Ma,toXYZ:zp,fromXYZ:kp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vi},outputColorSpaceConfig:{drawingBufferColorSpace:Vi}},[Vi]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:zp,fromXYZ:kp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vi}}}),r}var st=ux();function Sr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var no,Ec=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{no===void 0&&(no=ba("canvas")),no.width=e.width,no.height=e.height;let n=no.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=no}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ba("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Sr(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Sr(t[i]/255)*255):t[i]=Sr(t[i]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fx=0,Mo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=No(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(Wu(n[o].image)):s.push(Wu(n[o]))}else s=Wu(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function Wu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ec.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var dx=0,Xu=new z,mi=class r extends er{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=Qn,n=Qn,s=si,o=$r,a=In,l=$i,c=r.DEFAULT_ANISOTROPY,h=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=No(),this.name="",this.source=new Mo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xu).x}get height(){return this.source.getSize(Xu).y}get depth(){return this.source.getSize(Xu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bc:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bc:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mi.DEFAULT_IMAGE=null;mi.DEFAULT_MAPPING=Rf;mi.DEFAULT_ANISOTROPY=1;var Tt=class r{static{r.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,y=(f+1)/2,b=(g+1)/2,w=(h+u)/4,E=(d+_)/4,x=(p+m)/4;return A>y&&A>b?A<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(A),n=w/i,s=E/i):y>b?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=w/n,s=x/n):b<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(b),i=E/s,n=x/s),this.set(i,n,s,t),this}let S=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(d-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ac=class extends er{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let n={width:e,height:t,depth:i.depth},s=new mi(n),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:si,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Mo(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends Ac{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ta=class extends mi{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=jt,this.minFilter=jt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cc=class extends mi{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=jt,this.minFilter=jt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pt=class r{static{r.prototype.isMatrix4=!0}constructor(e,t,i,n,s,o,a,l,c,h,d,u,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,c,h,d,u,f,p,_,m)}set(e,t,i,n,s,o,a,l,c,h,d,u,f,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/ro.setFromMatrixColumn(e,0).length(),s=1/ro.setFromMatrixColumn(e,1).length(),o=1/ro.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,_=c*d;t[0]=u+_*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,_=c*d;t[0]=u-_*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,_=a*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=_-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-_*d}else if(e.order==="XZY"){let u=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(px,e,mx)}lookAt(e,t,i){let n=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),zr.crossVectors(i,an),zr.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),zr.crossVectors(i,an)),zr.normalize(),kl.crossVectors(an,zr),n[0]=zr.x,n[4]=kl.x,n[8]=an.x,n[1]=zr.y,n[5]=kl.y,n[9]=an.y,n[2]=zr.z,n[6]=kl.z,n[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],_=i[6],m=i[10],g=i[14],S=i[3],A=i[7],y=i[11],b=i[15],w=n[0],E=n[4],x=n[8],T=n[12],C=n[1],I=n[5],D=n[9],X=n[13],W=n[2],O=n[6],H=n[10],U=n[14],Z=n[3],ee=n[7],P=n[11],le=n[15];return s[0]=o*w+a*C+l*W+c*Z,s[4]=o*E+a*I+l*O+c*ee,s[8]=o*x+a*D+l*H+c*P,s[12]=o*T+a*X+l*U+c*le,s[1]=h*w+d*C+u*W+f*Z,s[5]=h*E+d*I+u*O+f*ee,s[9]=h*x+d*D+u*H+f*P,s[13]=h*T+d*X+u*U+f*le,s[2]=p*w+_*C+m*W+g*Z,s[6]=p*E+_*I+m*O+g*ee,s[10]=p*x+_*D+m*H+g*P,s[14]=p*T+_*X+m*U+g*le,s[3]=S*w+A*C+y*W+b*Z,s[7]=S*E+A*I+y*O+b*ee,s[11]=S*x+A*D+y*H+b*P,s[15]=S*T+A*X+y*U+b*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],S=l*f-c*u,A=a*f-c*d,y=a*u-l*d,b=o*f-c*h,w=o*u-l*h,E=o*d-a*h;return t*(_*S-m*A+g*y)-i*(p*S-m*b+g*w)+n*(p*A-_*b+g*E)-s*(p*y-_*w+m*E)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(s*h-a*l)+n*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],S=t*a-i*o,A=t*l-n*o,y=t*c-s*o,b=i*l-n*a,w=i*c-s*a,E=n*c-s*l,x=h*_-d*p,T=h*m-u*p,C=h*g-f*p,I=d*m-u*_,D=d*g-f*_,X=u*g-f*m,W=S*X-A*D+y*I+b*C-w*T+E*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/W;return e[0]=(a*X-l*D+c*I)*O,e[1]=(n*D-i*X-s*I)*O,e[2]=(_*E-m*w+g*b)*O,e[3]=(u*w-d*E-f*b)*O,e[4]=(l*C-o*X-c*T)*O,e[5]=(t*X-n*C+s*T)*O,e[6]=(m*y-p*E-g*A)*O,e[7]=(h*E-u*y+f*A)*O,e[8]=(o*D-a*C+c*x)*O,e[9]=(i*C-t*D-s*x)*O,e[10]=(p*w-_*y+g*S)*O,e[11]=(d*y-h*w-f*S)*O,e[12]=(a*T-o*I-l*x)*O,e[13]=(t*I-i*T+n*x)*O,e[14]=(_*A-p*b-m*S)*O,e[15]=(h*b-d*A+u*S)*O,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,p=s*d,_=o*h,m=o*d,g=a*d,S=l*c,A=l*h,y=l*d,b=i.x,w=i.y,E=i.z;return n[0]=(1-(_+g))*b,n[1]=(f+y)*b,n[2]=(p-A)*b,n[3]=0,n[4]=(f-y)*w,n[5]=(1-(u+g))*w,n[6]=(m+S)*w,n[7]=0,n[8]=(p+A)*E,n[9]=(m-S)*E,n[10]=(1-(u+_))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=ro.set(n[0],n[1],n[2]).length(),a=ro.set(n[4],n[5],n[6]).length(),l=ro.set(n[8],n[9],n[10]).length();s<0&&(o=-o),Bn.copy(this);let c=1/o,h=1/a,d=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,t.setFromRotationMatrix(Bn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,n,s,o,a=Vn,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n),p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===Vn)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===vo)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,s,o,a=Vn,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-n),u=-(t+e)/(t-e),f=-(i+n)/(i-n),p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===Vn)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===vo)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ro=new z,Bn=new Pt,px=new z(0,0,0),mx=new z(1,1,1),zr=new z,kl=new z,an=new z,Vp=new Pt,Hp=new Cn,br=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hp.setFromEuler(this),this.setFromQuaternion(Hp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};br.DEFAULT_ORDER="XYZ";var bo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gx=0,Gp=new z,so=new Cn,mr=new Pt,Vl=new z,pa=new z,_x=new z,xx=new Cn,Wp=new z(1,0,0),Xp=new z(0,1,0),Yp=new z(0,0,1),qp={type:"added"},vx={type:"removed"},oo={type:"childadded",child:null},Yu={type:"childremoved",child:null},xi=class r extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new z,t=new br,i=new Cn,n=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Ke}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.multiply(so),this}rotateOnWorldAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.premultiply(so),this}rotateX(e){return this.rotateOnAxis(Wp,e)}rotateY(e){return this.rotateOnAxis(Xp,e)}rotateZ(e){return this.rotateOnAxis(Yp,e)}translateOnAxis(e,t){return Gp.copy(e).applyQuaternion(this.quaternion),this.position.add(Gp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wp,e)}translateY(e){return this.translateOnAxis(Xp,e)}translateZ(e){return this.translateOnAxis(Yp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vl.copy(e):Vl.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(pa,Vl,this.up):mr.lookAt(Vl,pa,this.up),this.quaternion.setFromRotationMatrix(mr),n&&(mr.extractRotation(n.matrixWorld),so.setFromRotationMatrix(mr),this.quaternion.premultiply(so.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qp),oo.child=e,this.dispatchEvent(oo),oo.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vx),Yu.child=e,this.dispatchEvent(Yu),Yu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qp),oo.child=e,this.dispatchEvent(oo),oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,_x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,xx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};xi.DEFAULT_UP=new z(0,1,0);xi.DEFAULT_MATRIX_AUTO_UPDATE=!0;xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=class extends xi{constructor(){super(),this.isGroup=!0,this.type="Group"}},yx={type:"move"},To=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yx)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new An;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function qu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Ne=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=st.workingColorSpace){if(e=zf(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=qu(o,s,e+1/3),this.g=qu(o,s,e),this.b=qu(o,s,e-1/3)}return st.colorSpaceToWorking(this,n),this}setStyle(e,t=Vi){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vi){let i=qm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vi){return st.workingToColorSpace(Ai.copy(this),e),Math.round(ct(Ai.r*255,0,255))*65536+Math.round(ct(Ai.g*255,0,255))*256+Math.round(ct(Ai.b*255,0,255))}getHexString(e=Vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Ai.copy(this),t);let i=Ai.r,n=Ai.g,s=Ai.b,o=Math.max(i,n,s),a=Math.min(i,n,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Ai.copy(this),t),e.r=Ai.r,e.g=Ai.g,e.b=Ai.b,e}getStyle(e=Vi){st.workingToColorSpace(Ai.copy(this),e);let t=Ai.r,i=Ai.g,n=Ai.b;return e!==Vi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+t,kr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(kr),e.getHSL(Hl);let i=va(kr.h,Hl.h,t),n=va(kr.s,Hl.s,t),s=va(kr.l,Hl.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ai=new Ne;Ne.NAMES=qm;var wa=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var wo=class extends xi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new br,this.environmentIntensity=1,this.environmentRotation=new br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},zn=new z,gr=new z,Zu=new z,_r=new z,ao=new z,lo=new z,Zp=new z,Ju=new z,Ku=new z,ju=new z,Qu=new Tt,$u=new Tt,ef=new Tt,yr=class r{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),zn.subVectors(e,t),n.cross(zn);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){zn.subVectors(n,t),gr.subVectors(i,t),Zu.subVectors(e,t);let o=zn.dot(zn),a=zn.dot(gr),l=zn.dot(Zu),c=gr.dot(gr),h=gr.dot(Zu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return s.set(1-f-p,p,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,i,n,s,o,a,l){return this.getBarycoord(e,t,i,n,_r)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_r.x),l.addScaledVector(o,_r.y),l.addScaledVector(a,_r.z),l)}static getInterpolatedAttribute(e,t,i,n,s,o){return Qu.setScalar(0),$u.setScalar(0),ef.setScalar(0),Qu.fromBufferAttribute(e,t),$u.fromBufferAttribute(e,i),ef.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(Qu,s.x),o.addScaledVector($u,s.y),o.addScaledVector(ef,s.z),o}static isFrontFacing(e,t,i,n){return zn.subVectors(i,t),gr.subVectors(e,t),zn.cross(gr).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),zn.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,o,a;ao.subVectors(n,i),lo.subVectors(s,i),Ju.subVectors(e,i);let l=ao.dot(Ju),c=lo.dot(Ju);if(l<=0&&c<=0)return t.copy(i);Ku.subVectors(e,n);let h=ao.dot(Ku),d=lo.dot(Ku);if(h>=0&&d<=h)return t.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ao,o);ju.subVectors(e,s);let f=ao.dot(ju),p=lo.dot(ju);if(p>=0&&f<=p)return t.copy(s);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(lo,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Zp.subVectors(s,n),a=(d-h)/(d-h+(f-p)),t.copy(n).addScaledVector(Zp,a);let g=1/(m+_+u);return o=_*g,a=u*g,t.copy(i).addScaledVector(ao,o).addScaledVector(lo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yr=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gl.copy(i.boundingBox)),Gl.applyMatrix4(e.matrixWorld),this.union(Gl)}let n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Wl.subVectors(this.max,ma),co.subVectors(e.a,ma),ho.subVectors(e.b,ma),uo.subVectors(e.c,ma),Vr.subVectors(ho,co),Hr.subVectors(uo,ho),ys.subVectors(co,uo);let t=[0,-Vr.z,Vr.y,0,-Hr.z,Hr.y,0,-ys.z,ys.y,Vr.z,0,-Vr.x,Hr.z,0,-Hr.x,ys.z,0,-ys.x,-Vr.y,Vr.x,0,-Hr.y,Hr.x,0,-ys.y,ys.x,0];return!tf(t,co,ho,uo,Wl)||(t=[1,0,0,0,1,0,0,0,1],!tf(t,co,ho,uo,Wl))?!1:(Xl.crossVectors(Vr,Hr),t=[Xl.x,Xl.y,Xl.z],tf(t,co,ho,uo,Wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xr=[new z,new z,new z,new z,new z,new z,new z,new z],kn=new z,Gl=new Yr,co=new z,ho=new z,uo=new z,Vr=new z,Hr=new z,ys=new z,ma=new z,Wl=new z,Xl=new z,Ss=new z;function tf(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Ss.fromArray(r,s);let a=n.x*Math.abs(Ss.x)+n.y*Math.abs(Ss.y)+n.z*Math.abs(Ss.z),l=e.dot(Ss),c=t.dot(Ss),h=i.dot(Ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ti=new z,Yl=new Oe,Sx=0,Hi=class extends er{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xf,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yl.fromBufferAttribute(this,t),Yl.applyMatrix3(e),this.setXY(t,Yl.x,Yl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix3(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix4(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyNormalMatrix(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.transformDirection(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=go(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ki(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=go(t,this.array)),t}setX(e,t){return this.normalized&&(t=ki(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=go(t,this.array)),t}setY(e,t){return this.normalized&&(t=ki(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=go(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ki(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=go(t,this.array)),t}setW(e,t){return this.normalized&&(t=ki(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ki(t,this.array),i=ki(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ki(t,this.array),i=ki(i,this.array),n=ki(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=ki(t,this.array),i=ki(i,this.array),n=ki(n,this.array),s=ki(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ea=class extends Hi{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Aa=class extends Hi{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var pi=class extends Hi{constructor(e,t,i){super(new Float32Array(e),t,i)}},Mx=new Yr,ga=new z,nf=new z,tr=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Mx.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);let t=ga.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ga,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(nf)),this.expandByPoint(ga.copy(e.center).sub(nf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bx=0,En=new Pt,rf=new xi,fo=new z,ln=new Yr,_a=new Yr,di=new z,vi=class r extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q_(e)?Aa:Ea)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return rf.lookAt(e),rf.updateMatrix(),this.applyMatrix4(rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pi(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(di.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(di),di.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(di)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];_a.setFromBufferAttribute(a),this.morphTargetsRelative?(di.addVectors(ln.min,_a.min),ln.expandByPoint(di),di.addVectors(ln.max,_a.max),ln.expandByPoint(di)):(ln.expandByPoint(_a.min),ln.expandByPoint(_a.max))}ln.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)di.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(di));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)di.fromBufferAttribute(a,c),l&&(fo.fromBufferAttribute(e,c),di.add(fo)),n=Math.max(n,i.distanceToSquared(di))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Hi(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new z,l[x]=new z;let c=new z,h=new z,d=new z,u=new Oe,f=new Oe,p=new Oe,_=new z,m=new z;function g(x,T,C){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,C),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,T),p.fromBufferAttribute(s,C),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),a[x].add(_),a[T].add(_),a[C].add(_),l[x].add(m),l[T].add(m),l[C].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,T=S.length;x<T;++x){let C=S[x],I=C.start,D=C.count;for(let X=I,W=I+D;X<W;X+=3)g(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let A=new z,y=new z,b=new z,w=new z;function E(x){b.fromBufferAttribute(n,x),w.copy(b);let T=a[x];A.copy(T),A.sub(b.multiplyScalar(b.dot(T))).normalize(),y.crossVectors(w,T);let I=y.dot(l[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,I)}for(let x=0,T=S.length;x<T;++x){let C=S[x],I=C.start,D=C.count;for(let X=I,W=I+D;X<W;X+=3)E(e.getX(X+0)),E(e.getX(X+1)),E(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Hi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new z,s=new z,o=new z,a=new z,l=new z,c=new z,h=new z,d=new z;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)di.fromBufferAttribute(e,t),di.normalize(),e.setXYZ(t,di.x,di.y,di.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new Hi(u,h,d)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Tx=0,ir=class extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=No(),this.name="",this.type="Material",this.blending=Es,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pc&&(i.blendSrc=this.blendSrc),this.blendDst!==mc&&(i.blendDst=this.blendDst),this.blendEquation!==Xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_f&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Oe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var vr=new z,sf=new z,ql=new z,Gr=new z,of=new z,Zl=new z,af=new z,Cs=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){sf.copy(e).add(t).multiplyScalar(.5),ql.copy(t).sub(e).normalize(),Gr.copy(this.origin).sub(sf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ql),a=Gr.dot(this.direction),l=-Gr.dot(ql),c=Gr.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=s*h,d>=0)if(u>=-p)if(u<=p){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(sf).addScaledVector(ql,u),f}intersectSphere(e,t){vr.subVectors(e.center,this.origin);let i=vr.dot(this.direction),n=vr.dot(vr)-i*i,s=e.radius*e.radius;if(n>s)return null;let o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,i,n,s){of.subVectors(t,e),Zl.subVectors(i,e),af.crossVectors(of,Zl);let o=this.direction.dot(af),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gr.subVectors(this.origin,e);let l=a*this.direction.dot(Zl.crossVectors(Gr,Zl));if(l<0)return null;let c=a*this.direction.dot(of.cross(Gr));if(c<0||l+c>o)return null;let h=-a*Gr.dot(af);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rn=class extends ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=Cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jp=new Pt,Ms=new Cs,Jl=new tr,Kp=new z,Kl=new z,jl=new z,Ql=new z,lf=new z,$l=new z,jp=new z,ec=new z,Ut=class extends xi{constructor(e=new vi,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let a=this.morphTargetInfluences;if(s&&a){$l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(lf.fromBufferAttribute(d,e),o?$l.addScaledVector(lf,h):$l.addScaledVector(lf.sub(t),h))}t.add($l)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(s),Ms.copy(e.ray).recast(e.near),!(Jl.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(Jl,Kp)===null||Ms.origin.distanceToSquared(Kp)>(e.far-e.near)**2))&&(Jp.copy(s).invert(),Ms.copy(e.ray).applyMatrix4(Jp),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,i){let n,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],S=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,b=A;y<b;y+=3){let w=a.getX(y),E=a.getX(y+1),x=a.getX(y+2);n=tc(this,g,e,i,c,h,d,w,E,x),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let S=a.getX(m),A=a.getX(m+1),y=a.getX(m+2);n=tc(this,o,e,i,c,h,d,S,A,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],S=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,b=A;y<b;y+=3){let w=y,E=y+1,x=y+2;n=tc(this,g,e,i,c,h,d,w,E,x),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let S=m,A=m+1,y=m+2;n=tc(this,o,e,i,c,h,d,S,A,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function wx(r,e,t,i,n,s,o,a){let l;if(e.side===yi?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,e.side===Mr,a),l===null)return null;ec.copy(a),ec.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(ec);return c<t.near||c>t.far?null:{distance:c,point:ec.clone(),object:r}}function tc(r,e,t,i,n,s,o,a,l,c){r.getVertexPosition(a,Kl),r.getVertexPosition(l,jl),r.getVertexPosition(c,Ql);let h=wx(r,e,t,i,Kl,jl,Ql,jp);if(h){let d=new z;yr.getBarycoord(jp,Kl,jl,Ql,d),n&&(h.uv=yr.getInterpolatedAttribute(n,a,l,c,d,new Oe)),s&&(h.uv1=yr.getInterpolatedAttribute(s,a,l,c,d,new Oe)),o&&(h.normal=yr.getInterpolatedAttribute(o,a,l,c,d,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new z,materialIndex:0};yr.getNormal(Kl,jl,Ql,u.normal),h.face=u,h.barycoord=d}return h}var Rc=class extends mi{constructor(e=null,t=1,i=1,n,s,o,a,l,c=jt,h=jt,d,u){super(null,o,a,l,c,h,n,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cf=new z,Ex=new z,Ax=new Ke,jn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=cf.subVectors(i,t).cross(Ex.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(cf),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ax.getNormalMatrix(e),n=this.coplanarPoint(cf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},bs=new tr,Cx=new Oe(.5,.5),ic=new z,Eo=class{constructor(e=new jn,t=new jn,i=new jn,n=new jn,s=new jn,o=new jn){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn,i=!1){let n=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],p=s[8],_=s[9],m=s[10],g=s[11],S=s[12],A=s[13],y=s[14],b=s[15];if(n[0].setComponents(c-o,f-h,g-p,b-S).normalize(),n[1].setComponents(c+o,f+h,g+p,b+S).normalize(),n[2].setComponents(c+a,f+d,g+_,b+A).normalize(),n[3].setComponents(c-a,f-d,g-_,b-A).normalize(),i)n[4].setComponents(l,u,m,y).normalize(),n[5].setComponents(c-l,f-u,g-m,b-y).normalize();else if(n[4].setComponents(c-l,f-u,g-m,b-y).normalize(),t===Vn)n[5].setComponents(c+l,f+u,g+m,b+y).normalize();else if(t===vo)n[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);let t=Cx.distanceTo(e.center);return bs.radius=.7071067811865476+t,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(ic.x=n.normal.x>0?e.max.x:e.min.x,ic.y=n.normal.y>0?e.max.y:e.min.y,ic.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ao=class extends ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Pc=new z,Ic=new z,Qp=new Pt,xa=new Cs,nc=new tr,hf=new z,$p=new z,Dc=class extends xi{constructor(e=new vi,t=new Ao){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Pc.fromBufferAttribute(t,n-1),Ic.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Pc.distanceTo(Ic);e.setAttribute("lineDistance",new pi(i,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(n),nc.radius+=s,e.ray.intersectsSphere(nc)===!1)return;Qp.copy(n).invert(),xa.copy(e.ray).applyMatrix4(Qp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){let g=h.getX(_),S=h.getX(_+1),A=rc(this,e,xa,l,g,S,_);A&&t.push(A)}if(this.isLineLoop){let _=h.getX(p-1),m=h.getX(f),g=rc(this,e,xa,l,_,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){let g=rc(this,e,xa,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=rc(this,e,xa,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function rc(r,e,t,i,n,s,o){let a=r.geometry.attributes.position;if(Pc.fromBufferAttribute(a,n),Ic.fromBufferAttribute(a,s),t.distanceSqToSegment(Pc,Ic,hf,$p)>i)return;hf.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(hf);if(!(c<e.near||c>e.far))return{distance:c,point:$p.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var em=new z,tm=new z,Ca=class extends Dc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)em.fromBufferAttribute(t,n),tm.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+em.distanceTo(tm);e.setAttribute("lineDistance",new pi(i,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Co=class extends ir{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},im=new Pt,vf=new Cs,sc=new tr,oc=new z,Ra=class extends xi{constructor(e=new vi,t=new Co){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sc.copy(i.boundingSphere),sc.applyMatrix4(n),sc.radius+=s,e.ray.intersectsSphere(sc)===!1)return;im.copy(n).invert(),vf.copy(e.ray).applyMatrix4(im);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,_=f;p<_;p++){let m=c.getX(p);oc.fromBufferAttribute(d,m),nm(oc,m,l,n,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,_=f;p<_;p++)oc.fromBufferAttribute(d,p),nm(oc,p,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function nm(r,e,t,i,n,s,o){let a=vf.distanceSqToPoint(r);if(a<t){let l=new z;vf.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Pa=class extends mi{constructor(e=[],t=Qr,i,n,s,o,a,l,c,h){super(e,t,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ia=class extends mi{constructor(e,t,i,n,s,o,a,l,c){super(e,t,i,n,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Tr=class extends mi{constructor(e,t,i=Wn,n,s,o,a=jt,l=jt,c,h=$n,d=1){if(h!==$n&&h!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Lc=class extends Tr{constructor(e,t=Wn,i=Qr,n,s,o=jt,a=jt,l,c=$n){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,n,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Da=class extends mi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},nr=class r extends vi{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};let a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,n,o,2),p("x","z","y",1,-1,e,i,-t,n,o,3),p("x","y","z",1,-1,e,t,i,n,s,4),p("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new pi(c,3)),this.setAttribute("normal",new pi(h,3)),this.setAttribute("uv",new pi(d,2));function p(_,m,g,S,A,y,b,w,E,x,T){let C=y/E,I=b/x,D=y/2,X=b/2,W=w/2,O=E+1,H=x+1,U=0,Z=0,ee=new z;for(let P=0;P<H;P++){let le=P*I-X;for(let _e=0;_e<O;_e++){let je=_e*C-D;ee[_]=je*S,ee[m]=le*A,ee[g]=W,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[g]=w>0?1:-1,h.push(ee.x,ee.y,ee.z),d.push(_e/E),d.push(1-P/x),U+=1}}for(let P=0;P<x;P++)for(let le=0;le<E;le++){let _e=u+le+O*P,je=u+le+O*(P+1),qe=u+(le+1)+O*(P+1),He=u+(le+1)+O*P;l.push(_e,je,He),l.push(je,qe,He),Z+=6}a.addGroup(f,Z,T),f+=Z,u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ac=new z,lc=new z,uf=new z,cc=new yr,La=class extends vi{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(_o*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:m,c:g}=cc;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),cc.getNormal(uf),d[0]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,d[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,d[2]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let S=0;S<3;S++){let A=(S+1)%3,y=d[S],b=d[A],w=cc[h[S]],E=cc[h[A]],x=`${y}_${b}`,T=`${b}_${y}`;T in u&&u[T]?(uf.dot(u[T].normal)<=s&&(f.push(w.x,w.y,w.z),f.push(E.x,E.y,E.z)),u[T]=null):x in u||(u[x]={index0:c[S],index1:c[A],normal:uf.clone()})}}for(let p in u)if(u[p]){let{index0:_,index1:m}=u[p];ac.fromBufferAttribute(a,_),lc.fromBufferAttribute(a,m),f.push(ac.x,ac.y,ac.z),f.push(lc.x,lc.y,lc.z)}this.setAttribute("position",new pi(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Hn=class r extends vi{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=e/a,u=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let S=g*u-o;for(let A=0;A<c;A++){let y=A*d-s;p.push(y,-S,0),_.push(0,0,1),m.push(A/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){let A=S+c*g,y=S+c*(g+1),b=S+1+c*(g+1),w=S+1+c*g;f.push(A,y,w),f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new pi(p,3)),this.setAttribute("normal",new pi(_,3)),this.setAttribute("uv",new pi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};function Ds(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];if(rm(n))n.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(rm(n[0])){let s=[];for(let o=0,a=n.length;o<a;o++)s[o]=n[o].clone();e[t][i]=s}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Ri(r){let e={};for(let t=0;t<r.length;t++){let i=Ds(r[t]);for(let n in i)e[n]=i[n]}return e}function rm(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Rx(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function kf(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var hn={clone:Ds,merge:Ri},Px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nt=class extends ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Px,this.fragmentShader=Ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=Rx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new Ne().setHex(n.value);break;case"v2":this.uniforms[i].value=new Oe().fromArray(n.value);break;case"v3":this.uniforms[i].value=new z().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Tt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ke().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Pt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ro=class extends Nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Rs=class extends ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Na=class extends Rs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Nc=class extends ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Om,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oc=class extends ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function hc(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}var qr=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let o;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=t[++i],e<n)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break i}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let o=0;o!==n;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Uc=class extends qr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pf,endingEnd:pf}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,o=e+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case mf:s=e,a=2*t-i;break;case gf:s=n.length-2,a=t+n[s]-n[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case mf:o=e,l=2*i-t;break;case gf:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-t)/(n-t),_=p*p,m=_*p,g=-u*m+2*u*_-u*p,S=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*p+1,A=(-1-f)*m+(1.5+f)*_+.5*p,y=f*m-f*_;for(let b=0;b!==a;++b)s[b]=g*o[h+b]+S*o[c+b]+A*o[l+b]+y*o[d+b];return s}},Fc=class extends qr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},Bc=class extends qr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},zc=class extends qr{interpolate_(e,t,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-t)/(n-t),_=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*_+o[l+m]*p;return s}let u=a*2,f=e-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=f*u+p*2,S=d[g],A=d[g+1],y=e*u+p*2,b=h[y],w=h[y+1],E=(i-t)/(n-t),x,T,C,I,D;for(let X=0;X<8;X++){x=E*E,T=x*E,C=1-E,I=C*C,D=I*C;let O=D*t+3*I*E*S+3*C*x*b+T*n-i;if(Math.abs(O)<1e-10)break;let H=3*I*(S-t)+6*C*E*(b-S)+3*x*(n-b);if(Math.abs(H)<1e-10)break;E=E-O/H,E=Math.max(0,Math.min(1,E))}s[p]=D*_+3*I*E*A+3*C*x*w+T*m}return s}},cn=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hc(t,this.TimeBufferType),this.values=hc(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:hc(e.times,Array),values:hc(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new zc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ya:t=this.InterpolantFactoryMethodDiscrete;break;case wc:t=this.InterpolantFactoryMethodLinear;break;case dc:t=this.InterpolantFactoryMethodSmooth;break;case df:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ze("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return wc;case this.InterpolantFactoryMethodSmooth:return dc;case this.InterpolantFactoryMethodBezier:return df}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,o=n-1;for(;s!==n&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ve("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&Z_(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===dc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let _=t[d+p];if(_!==t[u+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=wc;var Zr=class extends cn{constructor(e,t,i){super(e,t,i)}};Zr.prototype.ValueTypeName="bool";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=ya;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends cn{constructor(e,t,i,n){super(e,t,i,n)}};kc.prototype.ValueTypeName="color";var Vc=class extends cn{constructor(e,t,i,n){super(e,t,i,n)}};Vc.prototype.ValueTypeName="number";var Hc=class extends qr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t),c=e*a;for(let h=c+a;c!==h;c+=4)Cn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Oa=class extends cn{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}};Oa.prototype.ValueTypeName="quaternion";Oa.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends cn{constructor(e,t,i){super(e,t,i)}};Jr.prototype.ValueTypeName="string";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=ya;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends cn{constructor(e,t,i,n){super(e,t,i,n)}};Gc.prototype.ValueTypeName="vector";var Wc=class{constructor(e,t,i){let n=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zm=new Wc,Xc=class{constructor(e){this.manager=e!==void 0?e:Zm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Xc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yc=class extends xi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var ff=new Pt,sm=new z,om=new z,yf=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=$i,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;sm.setFromMatrixPosition(e.matrixWorld),t.position.copy(sm),om.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(om),t.updateMatrixWorld(),ff.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ff,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===vo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ff)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uc=new z,fc=new Cn,Kn=new z,Ua=class extends xi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(uc,fc,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,fc,Kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(uc,fc,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,fc,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wr=new z,am=new Oe,lm=new Oe,Ci=class extends Ua{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=So*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return So*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,t){return this.getViewBounds(e,am,lm),t.subVectors(lm,am)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_o*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Kr=class extends Ua{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Sf=class extends yf{constructor(){super(new Kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Po=class extends Yc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xi.DEFAULT_UP),this.updateMatrix(),this.target=new xi,this.shadow=new Sf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var po=-90,mo=1,qc=class extends xi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ci(po,mo,e,t);n.layers=this.layers,this.add(n);let s=new Ci(po,mo,e,t);s.layers=this.layers,this.add(s);let o=new Ci(po,mo,e,t);o.layers=this.layers,this.add(o);let a=new Ci(po,mo,e,t);a.layers=this.layers,this.add(a);let l=new Ci(po,mo,e,t);l.layers=this.layers,this.add(l);let c=new Ci(po,mo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Zc=class extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Fa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Dx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Dx(){this._document.hidden===!1&&this.reset()}var Vf="\\[\\]\\.:\\/",Lx=new RegExp("["+Vf+"]","g"),Hf="[^"+Vf+"]",Nx="[^"+Vf.replace("\\.","")+"]",Ox=/((?:WC+[\/:])*)/.source.replace("WC",Hf),Ux=/(WCOD+)?/.source.replace("WCOD",Nx),Fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hf),Bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hf),zx=new RegExp("^"+Ox+Ux+Fx+Bx+"$"),kx=["material","materials","bones","map"],Mf=class{constructor(e,t,i){let n=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Lt=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lx,"")}static parseTrackName(e){let t=zx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);kx.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[n];if(o===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=Mf;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sw=new Float32Array(1);var cm=new Pt,Ba=class{constructor(e,t,i=0,n=1/0){this.ray=new Cs(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cm),this}intersectObject(e,t=!0,i=[]){return bf(e,this,i,t),i.sort(hm),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)bf(e[n],this,i,t);return i.sort(hm),i}};function hm(r,e){return r.distance-e.distance}function bf(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)bf(s[o],e,t,!0)}}var za=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ze("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Tf=class r{static{r.prototype.isMatrix2=!0}constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=n,this}};function Gf(r,e,t,i){let n=Vx(i);switch(t){case Nf:return r*e;case Uf:return r*e/n.components*n.byteLength;case th:return r*e/n.components*n.byteLength;case ts:return r*e*2/n.components*n.byteLength;case ih:return r*e*2/n.components*n.byteLength;case Of:return r*e*3/n.components*n.byteLength;case In:return r*e*4/n.components*n.byteLength;case nh:return r*e*4/n.components*n.byteLength;case Ja:case Ka:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ja:case Qa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sh:case ah:return Math.max(r,16)*Math.max(e,8)/4;case rh:case oh:return Math.max(r,8)*Math.max(e,8)/2;case lh:case ch:case uh:case fh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case hh:case $a:case dh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case gh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case _h:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case vh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case yh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case bh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Th:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case wh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ch:case Rh:case Ph:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ih:case Dh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case el:case Lh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vx(r){switch(r){case $i:case Pf:return{byteLength:1,components:1};case Do:case If:case oi:return{byteLength:2,components:1};case $c:case eh:return{byteLength:2,components:4};case Wn:case Qc:case Xn:return{byteLength:4,components:1};case Df:case Lf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function _g(){let r=null,e=!1,t=null,i=null;function n(s,o){t(s,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Gx(r){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var Wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ev=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ev=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Av=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ov=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Uv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$v=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ey=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ty=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ry=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ly=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,py=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,my=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_y=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,My=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,by=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ay=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ry=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Py=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ly=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Oy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,By=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$y=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Wx,alphahash_pars_fragment:Xx,alphamap_fragment:Yx,alphamap_pars_fragment:qx,alphatest_fragment:Zx,alphatest_pars_fragment:Jx,aomap_fragment:Kx,aomap_pars_fragment:jx,batching_pars_vertex:Qx,batching_vertex:$x,begin_vertex:ev,beginnormal_vertex:tv,bsdfs:iv,iridescence_fragment:nv,bumpmap_pars_fragment:rv,clipping_planes_fragment:sv,clipping_planes_pars_fragment:ov,clipping_planes_pars_vertex:av,clipping_planes_vertex:lv,color_fragment:cv,color_pars_fragment:hv,color_pars_vertex:uv,color_vertex:fv,common:dv,cube_uv_reflection_fragment:pv,defaultnormal_vertex:mv,displacementmap_pars_vertex:gv,displacementmap_vertex:_v,emissivemap_fragment:xv,emissivemap_pars_fragment:vv,colorspace_fragment:yv,colorspace_pars_fragment:Sv,envmap_fragment:Mv,envmap_common_pars_fragment:bv,envmap_pars_fragment:Tv,envmap_pars_vertex:wv,envmap_physical_pars_fragment:Uv,envmap_vertex:Ev,fog_vertex:Av,fog_pars_vertex:Cv,fog_fragment:Rv,fog_pars_fragment:Pv,gradientmap_pars_fragment:Iv,lightmap_pars_fragment:Dv,lights_lambert_fragment:Lv,lights_lambert_pars_fragment:Nv,lights_pars_begin:Ov,lights_toon_fragment:Fv,lights_toon_pars_fragment:Bv,lights_phong_fragment:zv,lights_phong_pars_fragment:kv,lights_physical_fragment:Vv,lights_physical_pars_fragment:Hv,lights_fragment_begin:Gv,lights_fragment_maps:Wv,lights_fragment_end:Xv,lightprobes_pars_fragment:Yv,logdepthbuf_fragment:qv,logdepthbuf_pars_fragment:Zv,logdepthbuf_pars_vertex:Jv,logdepthbuf_vertex:Kv,map_fragment:jv,map_pars_fragment:Qv,map_particle_fragment:$v,map_particle_pars_fragment:ey,metalnessmap_fragment:ty,metalnessmap_pars_fragment:iy,morphinstance_vertex:ny,morphcolor_vertex:ry,morphnormal_vertex:sy,morphtarget_pars_vertex:oy,morphtarget_vertex:ay,normal_fragment_begin:ly,normal_fragment_maps:cy,normal_pars_fragment:hy,normal_pars_vertex:uy,normal_vertex:fy,normalmap_pars_fragment:dy,clearcoat_normal_fragment_begin:py,clearcoat_normal_fragment_maps:my,clearcoat_pars_fragment:gy,iridescence_pars_fragment:_y,opaque_fragment:xy,packing:vy,premultiplied_alpha_fragment:yy,project_vertex:Sy,dithering_fragment:My,dithering_pars_fragment:by,roughnessmap_fragment:Ty,roughnessmap_pars_fragment:wy,shadowmap_pars_fragment:Ey,shadowmap_pars_vertex:Ay,shadowmap_vertex:Cy,shadowmask_pars_fragment:Ry,skinbase_vertex:Py,skinning_pars_vertex:Iy,skinning_vertex:Dy,skinnormal_vertex:Ly,specularmap_fragment:Ny,specularmap_pars_fragment:Oy,tonemapping_fragment:Uy,tonemapping_pars_fragment:Fy,transmission_fragment:By,transmission_pars_fragment:zy,uv_pars_fragment:ky,uv_pars_vertex:Vy,uv_vertex:Hy,worldpos_vertex:Gy,background_vert:Wy,background_frag:Xy,backgroundCube_vert:Yy,backgroundCube_frag:qy,cube_vert:Zy,cube_frag:Jy,depth_vert:Ky,depth_frag:jy,distance_vert:Qy,distance_frag:$y,equirect_vert:eS,equirect_frag:tS,linedashed_vert:iS,linedashed_frag:nS,meshbasic_vert:rS,meshbasic_frag:sS,meshlambert_vert:oS,meshlambert_frag:aS,meshmatcap_vert:lS,meshmatcap_frag:cS,meshnormal_vert:hS,meshnormal_frag:uS,meshphong_vert:fS,meshphong_frag:dS,meshphysical_vert:pS,meshphysical_frag:mS,meshtoon_vert:gS,meshtoon_frag:_S,points_vert:xS,points_frag:vS,shadow_vert:yS,shadow_frag:SS,sprite_vert:MS,sprite_frag:bS},ye={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},sr={basic:{uniforms:Ri([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Ri([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Ri([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Ri([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Ri([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ne(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Ri([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Ri([ye.points,ye.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Ri([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Ri([ye.common,ye.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Ri([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Ri([ye.sprite,ye.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Ri([ye.common,ye.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Ri([ye.lights,ye.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};sr.physical={uniforms:Ri([sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Fh={r:0,b:0,g:0},TS=new Pt,xg=new Ke;xg.set(-1,0,0,0,1,0,0,0,1);function wS(r,e,t,i,n,s){let o=new Ne(0),a=n===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let y=S.backgroundBlurriness>0;A=e.get(A,y)}return A}function p(S){let A=!1,y=f(S);y===null?m(o,a):y&&y.isColor&&(m(y,1),A=!0);let b=r.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(S,A){let y=f(A);y&&(y.isCubeTexture||y.mapping===qa)?(c===void 0&&(c=new Ut(new nr(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:Ds(sr.backgroundCube.uniforms),vertexShader:sr.backgroundCube.vertexShader,fragmentShader:sr.backgroundCube.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(TS.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(xg),c.material.toneMapped=st.getTransfer(y.colorSpace)!==pt,(h!==y||d!==y.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ut(new Hn(2,2),new Nt({name:"BackgroundMaterial",uniforms:Ds(sr.background.uniforms),vertexShader:sr.background.vertexShader,fragmentShader:sr.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=st.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(Fh,kf(r)),t.buffers.color.setClear(Fh.r,Fh.g,Fh.b,A,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,A=1){o.set(S),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:p,addToRenderList:_,dispose:g}}function ES(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null),s=n,o=!1;function a(I,D,X,W,O){let H=!1,U=d(I,W,X,D);s!==U&&(s=U,c(s.object)),H=f(I,W,X,O),H&&p(I,W,X,O),O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(I,D,X,W),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function h(I){return r.deleteVertexArray(I)}function d(I,D,X,W){let O=W.wireframe===!0,H=i[D.id];H===void 0&&(H={},i[D.id]=H);let U=I.isInstancedMesh===!0?I.id:0,Z=H[U];Z===void 0&&(Z={},H[U]=Z);let ee=Z[X.id];ee===void 0&&(ee={},Z[X.id]=ee);let P=ee[O];return P===void 0&&(P=u(l()),ee[O]=P),P}function u(I){let D=[],X=[],W=[];for(let O=0;O<t;O++)D[O]=0,X[O]=0,W[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:W,object:I,attributes:{},index:null}}function f(I,D,X,W){let O=s.attributes,H=D.attributes,U=0,Z=X.getAttributes();for(let ee in Z)if(Z[ee].location>=0){let le=O[ee],_e=H[ee];if(_e===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(_e=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(_e=I.instanceColor)),le===void 0||le.attribute!==_e||_e&&le.data!==_e.data)return!0;U++}return s.attributesNum!==U||s.index!==W}function p(I,D,X,W){let O={},H=D.attributes,U=0,Z=X.getAttributes();for(let ee in Z)if(Z[ee].location>=0){let le=H[ee];le===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(le=I.instanceColor));let _e={};_e.attribute=le,le&&le.data&&(_e.data=le.data),O[ee]=_e,U++}s.attributes=O,s.attributesNum=U,s.index=W}function _(){let I=s.newAttributes;for(let D=0,X=I.length;D<X;D++)I[D]=0}function m(I){g(I,0)}function g(I,D){let X=s.newAttributes,W=s.enabledAttributes,O=s.attributeDivisors;X[I]=1,W[I]===0&&(r.enableVertexAttribArray(I),W[I]=1),O[I]!==D&&(r.vertexAttribDivisor(I,D),O[I]=D)}function S(){let I=s.newAttributes,D=s.enabledAttributes;for(let X=0,W=D.length;X<W;X++)D[X]!==I[X]&&(r.disableVertexAttribArray(X),D[X]=0)}function A(I,D,X,W,O,H,U){U===!0?r.vertexAttribIPointer(I,D,X,O,H):r.vertexAttribPointer(I,D,X,W,O,H)}function y(I,D,X,W){_();let O=W.attributes,H=X.getAttributes(),U=D.defaultAttributeValues;for(let Z in H){let ee=H[Z];if(ee.location>=0){let P=O[Z];if(P===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(P=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(P=I.instanceColor)),P!==void 0){let le=P.normalized,_e=P.itemSize,je=e.get(P);if(je===void 0)continue;let qe=je.buffer,He=je.type,K=je.bytesPerElement,oe=He===r.INT||He===r.UNSIGNED_INT||P.gpuType===Qc;if(P.isInterleavedBufferAttribute){let ne=P.data,Ae=ne.stride,ke=P.offset;if(ne.isInstancedInterleavedBuffer){for(let Te=0;Te<ee.locationSize;Te++)g(ee.location+Te,ne.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Te=0;Te<ee.locationSize;Te++)m(ee.location+Te);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let Te=0;Te<ee.locationSize;Te++)A(ee.location+Te,_e/ee.locationSize,He,le,Ae*K,(ke+_e/ee.locationSize*Te)*K,oe)}else{if(P.isInstancedBufferAttribute){for(let ne=0;ne<ee.locationSize;ne++)g(ee.location+ne,P.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let ne=0;ne<ee.locationSize;ne++)m(ee.location+ne);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let ne=0;ne<ee.locationSize;ne++)A(ee.location+ne,_e/ee.locationSize,He,le,_e*K,_e/ee.locationSize*ne*K,oe)}}else if(U!==void 0){let le=U[Z];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(ee.location,le);break;case 3:r.vertexAttrib3fv(ee.location,le);break;case 4:r.vertexAttrib4fv(ee.location,le);break;default:r.vertexAttrib1fv(ee.location,le)}}}}S()}function b(){T();for(let I in i){let D=i[I];for(let X in D){let W=D[X];for(let O in W){let H=W[O];for(let U in H)h(H[U].object),delete H[U];delete W[O]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;let D=i[I.id];for(let X in D){let W=D[X];for(let O in W){let H=W[O];for(let U in H)h(H[U].object),delete H[U];delete W[O]}}delete i[I.id]}function E(I){for(let D in i){let X=i[D];for(let W in X){let O=X[W];if(O[I.id]===void 0)continue;let H=O[I.id];for(let U in H)h(H[U].object),delete H[U];delete O[I.id]}}}function x(I){for(let D in i){let X=i[D],W=I.isInstancedMesh===!0?I.id:0,O=X[W];if(O!==void 0){for(let H in O){let U=O[H];for(let Z in U)h(U[Z].object),delete U[Z];delete O[H]}delete X[W],Object.keys(X).length===0&&delete i[D]}}}function T(){C(),o=!0,s!==n&&(s=n,c(s.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function AS(r,e,t){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function CS(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(E){return!(E!==In&&i.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let x=E===oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==$i&&i.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Xn&&!x)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:y,maxSamples:b,samples:w}}function RS(r){let e=this,t=null,i=0,n=!1,s=!1,o=new jn,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!n||p===null||p.length===0||s&&!m)s?h(null):c();else{let S=s?0:i,A=S*4,y=g.clippingState||null;l.value=y,y=h(p,u,A,f);for(let b=0;b!==A;++b)y[b]=t[b];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,y=f;A!==_;++A,y+=4)o.copy(d[A]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var ns=4,Jm=[.125,.215,.35,.446,.526,.582],Ls=20,PS=256,tl=new Kr,Km=new Ne,Wf=null,Xf=0,Yf=0,qf=!1,IS=new z,Fo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){let{size:o=256,position:a=IS}=s;Wf=this._renderer.getRenderTarget(),Xf=this._renderer.getActiveCubeFace(),Yf=this._renderer.getActiveMipmapLevel(),qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wf,Xf,Yf),this._renderer.xr.enabled=qf,e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wf=this._renderer.getRenderTarget(),Xf=this._renderer.getActiveCubeFace(),Yf=this._renderer.getActiveMipmapLevel(),qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:si,minFilter:si,generateMipmaps:!1,type:oi,format:In,colorSpace:Sa,depthBuffer:!1},n=jm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jm(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=DS(s)),this._blurMaterial=NS(s,e,t),this._ggxMaterial=LS(s,e,t)}return n}_compileMaterial(e){let t=new Ut(new vi,e);this._renderer.compile(t,tl)}_sceneToCubeUV(e,t,i,n,s){let l=new Ci(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Km),d.toneMapping=Gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new nr,new Rn({name:"PMREM.Background",side:yi,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,g=!0):(m.color.copy(Km),g=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));let b=this._cubeSize;Oo(n,y*b,A>2?b:0,b,b),d.setRenderTarget(n),g&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Qr||e.mapping===Is;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=$m()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qm());let s=n?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Oo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,tl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:p}=this,_=this._sizeLods[i],m=3*_*(i>p-ns?i-p+ns:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Oo(s,m,g,3*_,2*_),n.setRenderTarget(s),n.render(a,tl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-i,Oo(e,m,g,3*_,2*_),n.setRenderTarget(e),n.render(a,tl)}_blur(e,t,i,n,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",s),this._halfBlur(o,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[n];d.material=c;let u=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ls-1),_=s/p,m=isFinite(s)?1+Math.floor(h*_):Ls;m>Ls&&ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ls}`);let g=[],S=0;for(let E=0;E<Ls;++E){let x=E/_,T=Math.exp(-x*x/2);g.push(T),E===0?S+=T:E<m&&(S+=2*T)}for(let E=0;E<g.length;E++)g[E]=g[E]/S;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:A}=this;u.dTheta.value=p,u.mipInt.value=A-i;let y=this._sizeLods[n],b=3*y*(n>A-ns?n-A+ns:0),w=4*(this._cubeSize-y);Oo(t,b,w,3*y,2*y),l.setRenderTarget(t),l.render(d,tl)}};function DS(r){let e=[],t=[],i=[],n=r,s=r-ns+1+Jm.length;for(let o=0;o<s;o++){let a=Math.pow(2,n);e.push(a);let l=1/a;o>r-ns?l=Jm[o-r+ns-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,_=3,m=2,g=1,S=new Float32Array(_*p*f),A=new Float32Array(m*p*f),y=new Float32Array(g*p*f);for(let w=0;w<f;w++){let E=w%3*2/3-1,x=w>2?0:-1,T=[E,x,0,E+2/3,x,0,E+2/3,x+1,0,E,x,0,E+2/3,x+1,0,E,x+1,0];S.set(T,_*p*w),A.set(u,m*p*w);let C=[w,w,w,w,w,w];y.set(C,g*p*w)}let b=new vi;b.setAttribute("position",new Hi(S,_)),b.setAttribute("uv",new Hi(A,m)),b.setAttribute("faceIndex",new Hi(y,g)),i.push(new Ut(b,null)),n>ns&&n--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function jm(r,e,t){let i=new Wt(r,e,t);return i.texture.mapping=qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oo(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function LS(r,e,t){return new Nt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function NS(r,e,t){let i=new Float32Array(Ls),n=new z(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Qm(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function $m(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Vh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var zh=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Pa(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new nr(5,5,5),s=new Nt({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yi,blending:Pn});s.uniforms.tEquirect.value=t;let o=new Ut(n,s),a=t.minFilter;return t.minFilter===$r&&(t.minFilter=si),new qc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(s)}};function OS(r){let e=new WeakMap,t=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===Jc||f===Kc)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new zh(p.height);return _.fromEquirectangularTexture(r,u),e.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===Jc||f===Kc,_=f===Qr||f===Is;if(p||_){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new Fo(r)),m=p?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return p&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new Fo(r)),m=p?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Jc?u.mapping=Qr:f===Kc&&(u.mapping=Is),u}function l(u){let f=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function US(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&ws("WebGLRenderer: "+i+" extension not supported."),n}}}function FS(r,e,t,i){let n={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete n[u.id];let f=s.get(u);f&&(e.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return n[u.id]===!0||(u.addEventListener("dispose",o),n[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],r.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(f!==null){let S=f.array;_=f.version;for(let A=0,y=S.length;A<y;A+=3){let b=S[A+0],w=S[A+1],E=S[A+2];u.push(b,w,w,E,E,b)}}else{let S=p.array;_=p.version;for(let A=0,y=S.length/3-1;A<y;A+=3){let b=A+0,w=A+1,E=A+2;u.push(b,w,w,E,E,b)}}let m=new(p.count>=65535?Aa:Ea)(u,1);m.version=_;let g=s.get(d);g&&e.remove(g),s.set(d,m)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function BS(r,e,t){let i;function n(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(i,u,s,d*o),t.update(u,i,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(i,u,s,d*o,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];t.update(_,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zS(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function kS(r,e,t){let i=new WeakMap,n=new Tt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let T=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],A=0;f===!0&&(A=1),p===!0&&(A=2),_===!0&&(A=3);let y=a.attributes.position.count*A,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*b*4*d),E=new Ta(w,y,b,d);E.type=Xn,E.needsUpdate=!0;let x=A*4;for(let C=0;C<d;C++){let I=m[C],D=g[C],X=S[C],W=y*b*4*C;for(let O=0;O<I.count;O++){let H=O*x;f===!0&&(n.fromBufferAttribute(I,O),w[W+H+0]=n.x,w[W+H+1]=n.y,w[W+H+2]=n.z,w[W+H+3]=0),p===!0&&(n.fromBufferAttribute(D,O),w[W+H+4]=n.x,w[W+H+5]=n.y,w[W+H+6]=n.z,w[W+H+7]=0),_===!0&&(n.fromBufferAttribute(X,O),w[W+H+8]=n.x,w[W+H+9]=n.y,w[W+H+10]=n.z,w[W+H+11]=X.itemSize===4?n.w:1)}}u={count:d,texture:E,size:new Oe(y,b)},i.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function VS(r,e,t,i,n){let s=new WeakMap;function o(c){let h=n.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var HS={[Va]:"LINEAR_TONE_MAPPING",[Ha]:"REINHARD_TONE_MAPPING",[Ga]:"CINEON_TONE_MAPPING",[Ps]:"ACES_FILMIC_TONE_MAPPING",[Xa]:"AGX_TONE_MAPPING",[Ya]:"NEUTRAL_TONE_MAPPING",[Wa]:"CUSTOM_TONE_MAPPING"};function GS(r,e,t,i,n,s){let o=new Wt(e,t,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,depthTexture:n?new Tr(e,t):void 0}),a=new Wt(e,t,{type:oi,depthBuffer:!1,stencilBuffer:!1}),l=new vi;l.setAttribute("position",new pi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new pi([0,2,0,0,2,0],2));let c=new Ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ut(l,c),d=new Kr(-1,1,1,-1,0,1),u=null,f=null,p=!1,_,m=null,g=[],S=!1;this.setSize=function(A,y){o.setSize(A,y),a.setSize(A,y);for(let b=0;b<g.length;b++){let w=g[b];w.setSize&&w.setSize(A,y)}},this.setEffects=function(A){g=A,S=g.length>0&&g[0].isRenderPass===!0;let y=o.width,b=o.height;for(let w=0;w<g.length;w++){let E=g[w];E.setSize&&E.setSize(y,b)}},this.begin=function(A,y){if(p||A.toneMapping===Gn&&g.length===0)return!1;if(m=y,y!==null){let b=y.width,w=y.height;(o.width!==b||o.height!==w)&&this.setSize(b,w)}return S===!1&&A.setRenderTarget(o),_=A.toneMapping,A.toneMapping=Gn,!0},this.hasRenderPass=function(){return S},this.end=function(A,y){A.toneMapping=_,p=!0;let b=o,w=a;for(let E=0;E<g.length;E++){let x=g[E];if(x.enabled!==!1&&(x.render(A,w,b,y),x.needsSwap!==!1)){let T=b;b=w,w=T}}if(u!==A.outputColorSpace||f!==A.toneMapping){u=A.outputColorSpace,f=A.toneMapping,c.defines={},st.getTransfer(u)===pt&&(c.defines.SRGB_TRANSFER="");let E=HS[f];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,A.setRenderTarget(m),A.render(h,d),m=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}var vg=new mi,Kf=new Tr(1,1),yg=new Ta,Sg=new Cc,Mg=new Pa,eg=[],tg=[],ig=new Float32Array(16),ng=new Float32Array(9),rg=new Float32Array(4);function Bo(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=eg[n];if(s===void 0&&(s=new Float32Array(n),eg[n]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function ai(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function li(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Hh(r,e){let t=tg[e];t===void 0&&(t=new Int32Array(e),tg[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function WS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function XS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ai(t,e))return;r.uniform2fv(this.addr,e),li(t,e)}}function YS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ai(t,e))return;r.uniform3fv(this.addr,e),li(t,e)}}function qS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ai(t,e))return;r.uniform4fv(this.addr,e),li(t,e)}}function ZS(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ai(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),li(t,e)}else{if(ai(t,i))return;rg.set(i),r.uniformMatrix2fv(this.addr,!1,rg),li(t,i)}}function JS(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ai(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),li(t,e)}else{if(ai(t,i))return;ng.set(i),r.uniformMatrix3fv(this.addr,!1,ng),li(t,i)}}function KS(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ai(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),li(t,e)}else{if(ai(t,i))return;ig.set(i),r.uniformMatrix4fv(this.addr,!1,ig),li(t,i)}}function jS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function QS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ai(t,e))return;r.uniform2iv(this.addr,e),li(t,e)}}function $S(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ai(t,e))return;r.uniform3iv(this.addr,e),li(t,e)}}function eM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ai(t,e))return;r.uniform4iv(this.addr,e),li(t,e)}}function tM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function iM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ai(t,e))return;r.uniform2uiv(this.addr,e),li(t,e)}}function nM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ai(t,e))return;r.uniform3uiv(this.addr,e),li(t,e)}}function rM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ai(t,e))return;r.uniform4uiv(this.addr,e),li(t,e)}}function sM(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(Kf.compareFunction=t.isReversedDepthBuffer()?Uh:Oh,s=Kf):s=vg,t.setTexture2D(e||s,n)}function oM(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Sg,n)}function aM(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Mg,n)}function lM(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||yg,n)}function cM(r){switch(r){case 5126:return WS;case 35664:return XS;case 35665:return YS;case 35666:return qS;case 35674:return ZS;case 35675:return JS;case 35676:return KS;case 5124:case 35670:return jS;case 35667:case 35671:return QS;case 35668:case 35672:return $S;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return iM;case 36295:return nM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}function hM(r,e){r.uniform1fv(this.addr,e)}function uM(r,e){let t=Bo(e,this.size,2);r.uniform2fv(this.addr,t)}function fM(r,e){let t=Bo(e,this.size,3);r.uniform3fv(this.addr,t)}function dM(r,e){let t=Bo(e,this.size,4);r.uniform4fv(this.addr,t)}function pM(r,e){let t=Bo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function mM(r,e){let t=Bo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function gM(r,e){let t=Bo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _M(r,e){r.uniform1iv(this.addr,e)}function xM(r,e){r.uniform2iv(this.addr,e)}function vM(r,e){r.uniform3iv(this.addr,e)}function yM(r,e){r.uniform4iv(this.addr,e)}function SM(r,e){r.uniform1uiv(this.addr,e)}function MM(r,e){r.uniform2uiv(this.addr,e)}function bM(r,e){r.uniform3uiv(this.addr,e)}function TM(r,e){r.uniform4uiv(this.addr,e)}function wM(r,e,t){let i=this.cache,n=e.length,s=Hh(t,n);ai(i,s)||(r.uniform1iv(this.addr,s),li(i,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Kf:o=vg;for(let a=0;a!==n;++a)t.setTexture2D(e[a]||o,s[a])}function EM(r,e,t){let i=this.cache,n=e.length,s=Hh(t,n);ai(i,s)||(r.uniform1iv(this.addr,s),li(i,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Sg,s[o])}function AM(r,e,t){let i=this.cache,n=e.length,s=Hh(t,n);ai(i,s)||(r.uniform1iv(this.addr,s),li(i,s));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Mg,s[o])}function CM(r,e,t){let i=this.cache,n=e.length,s=Hh(t,n);ai(i,s)||(r.uniform1iv(this.addr,s),li(i,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||yg,s[o])}function RM(r){switch(r){case 5126:return hM;case 35664:return uM;case 35665:return fM;case 35666:return dM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return _M;case 35667:case 35671:return xM;case 35668:case 35672:return vM;case 35669:case 35673:return yM;case 5125:return SM;case 36294:return MM;case 36295:return bM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return CM}}var jf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cM(t.type)}},Qf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RM(t.type)}},$f=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,o=n.length;s!==o;++s){let a=n[s];a.setValue(e,t[a.id],i)}}},Zf=/(\w+)(\])?(\[|\.)?/g;function sg(r,e){r.seq.push(e),r.map[e.id]=e}function PM(r,e,t){let i=r.name,n=i.length;for(Zf.lastIndex=0;;){let s=Zf.exec(i),o=Zf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){sg(t,c===void 0?new jf(a,r,e):new Qf(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new $f(a),sg(t,d)),t=d}}}var Uo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);PM(a,l,this)}let n=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(o):s.push(o);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let o=e[n];o.id in t&&i.push(o)}return i}};function og(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var IM=37297,DM=0;function LM(r,e){let t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var ag=new Ke;function NM(r){st._getMatrix(ag,st.workingColorSpace,r);let e=`mat3( ${ag.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(r)){case Ma:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function lg(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+LM(r.getShaderSource(e),a)}else return s}function OM(r,e){let t=NM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var UM={[Va]:"Linear",[Ha]:"Reinhard",[Ga]:"Cineon",[Ps]:"ACESFilmic",[Xa]:"AgX",[Ya]:"Neutral",[Wa]:"Custom"};function FM(r,e){let t=UM[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Bh=new z;function BM(){st.getLuminanceCoefficients(Bh);let r=Bh.x.toFixed(4),e=Bh.y.toFixed(4),t=Bh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function kM(r){let e=[];for(let t in r){let i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function VM(r,e){let t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(e,n),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function nl(r){return r!==""}function cg(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var HM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(r){return r.replace(HM,WM)}var GM=new Map;function WM(r,e){let t=$e[e];if(t===void 0){let i=GM.get(e);if(i!==void 0)t=$e[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ed(t)}var XM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(r){return r.replace(XM,YM)}function YM(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function fg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var qM={[ka]:"SHADOWMAP_TYPE_PCF",[Io]:"SHADOWMAP_TYPE_VSM"};function ZM(r){return qM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var JM={[Qr]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[qa]:"ENVMAP_TYPE_CUBE_UV"};function KM(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":JM[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var jM={[Is]:"ENVMAP_MODE_REFRACTION"};function QM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":jM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $M={[Cf]:"ENVMAP_BLENDING_MULTIPLY",[Dm]:"ENVMAP_BLENDING_MIX",[Lm]:"ENVMAP_BLENDING_ADD"};function eb(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":$M[r.combine]||"ENVMAP_BLENDING_NONE"}function tb(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ib(r,e,t,i){let n=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ZM(t),c=KM(t),h=QM(t),d=eb(t),u=tb(t),f=zM(t),p=kM(s),_=n.createProgram(),m,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(nl).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(nl).join(`
`),g.length>0&&(g+=`
`)):(m=[fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),g=[fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Gn?FM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,OM("linearToOutputTexel",t.outputColorSpace),BM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nl).join(`
`)),o=ed(o),o=cg(o,t),o=hg(o,t),a=ed(a),a=cg(a,t),a=hg(a,t),o=ug(o),a=ug(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let A=S+m+o,y=S+g+a,b=og(n,n.VERTEX_SHADER,A),w=og(n,n.FRAGMENT_SHADER,y);n.attachShader(_,b),n.attachShader(_,w),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function E(I){if(r.debug.checkShaderErrors){let D=n.getProgramInfoLog(_)||"",X=n.getShaderInfoLog(b)||"",W=n.getShaderInfoLog(w)||"",O=D.trim(),H=X.trim(),U=W.trim(),Z=!0,ee=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,b,w);else{let P=lg(n,b,"vertex"),le=lg(n,w,"fragment");Ve("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+P+`
`+le)}else O!==""?ze("WebGLProgram: Program Info Log:",O):(H===""||U==="")&&(ee=!1);ee&&(I.diagnostics={runnable:Z,programLog:O,vertexShader:{log:H,prefix:m},fragmentShader:{log:U,prefix:g}})}n.deleteShader(b),n.deleteShader(w),x=new Uo(n,_),T=VM(n,_)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(_,IM)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}var nb=0,td=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new id(e),t.set(e,i)),i}},id=class{constructor(e){this.id=nb++,this.code=e,this.usedTimes=0}};function rb(r){return r===ts||r===$a||r===el}function sb(r,e,t,i,n,s){let o=new bo,a=new td,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,C,I,D,X){let W=I.fog,O=D.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||H,U),ee=Z&&Z.mapping===qa?Z.image.height:null,P=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&ze("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let le=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,_e=le!==void 0?le.length:0,je=0;O.morphAttributes.position!==void 0&&(je=1),O.morphAttributes.normal!==void 0&&(je=2),O.morphAttributes.color!==void 0&&(je=3);let qe,He,K,oe;if(P){let ie=sr[P];qe=ie.vertexShader,He=ie.fragmentShader}else{qe=x.vertexShader,He=x.fragmentShader;let ie=a.getVertexShaderStage(x),Fe=a.getFragmentShaderStage(x);a.update(x,ie,Fe),K=ie.id,oe=Fe.id}let ne=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),ke=D.isInstancedMesh===!0,Te=D.isBatchedMesh===!0,lt=!!x.map,Me=!!x.matcap,Ge=!!Z,Ye=!!x.aoMap,Xe=!!x.lightMap,Y=!!x.bumpMap&&x.wireframe===!1,ft=!!x.normalMap,xt=!!x.displacementMap,At=!!x.emissiveMap,Ze=!!x.metalnessMap,mt=!!x.roughnessMap,N=x.anisotropy>0,Vt=x.clearcoat>0,We=x.dispersion>0,R=x.iridescence>0,v=x.sheen>0,B=x.transmission>0,V=N&&!!x.anisotropyMap,J=Vt&&!!x.clearcoatMap,he=Vt&&!!x.clearcoatNormalMap,ae=Vt&&!!x.clearcoatRoughnessMap,j=R&&!!x.iridescenceMap,Q=R&&!!x.iridescenceThicknessMap,de=v&&!!x.sheenColorMap,Ee=v&&!!x.sheenRoughnessMap,pe=!!x.specularMap,fe=!!x.specularColorMap,ce=!!x.specularIntensityMap,Pe=B&&!!x.transmissionMap,Ue=B&&!!x.thicknessMap,L=!!x.gradientMap,ue=!!x.alphaMap,$=x.alphaTest>0,me=!!x.alphaHash,ge=!!x.extensions,te=Gn;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(te=r.toneMapping);let re={shaderID:P,shaderType:x.type,shaderName:x.name,vertexShader:qe,fragmentShader:He,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Te,batchingColor:Te&&D._colorsTexture!==null,instancing:ke,instancingColor:ke&&D.instanceColor!==null,instancingMorph:ke&&D.morphTexture!==null,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:lt,matcap:Me,envMap:Ge,envMapMode:Ge&&Z.mapping,envMapCubeUVHeight:ee,aoMap:Ye,lightMap:Xe,bumpMap:Y,normalMap:ft,displacementMap:xt,emissiveMap:At,normalMapObjectSpace:ft&&x.normalMapType===Um,normalMapTangentSpace:ft&&x.normalMapType===Nh,packedNormalMap:ft&&x.normalMapType===Nh&&rb(x.normalMap.format),metalnessMap:Ze,roughnessMap:mt,anisotropy:N,anisotropyMap:V,clearcoat:Vt,clearcoatMap:J,clearcoatNormalMap:he,clearcoatRoughnessMap:ae,dispersion:We,iridescence:R,iridescenceMap:j,iridescenceThicknessMap:Q,sheen:v,sheenColorMap:de,sheenRoughnessMap:Ee,specularMap:pe,specularColorMap:fe,specularIntensityMap:ce,transmission:B,transmissionMap:Pe,thicknessMap:Ue,gradientMap:L,opaque:x.transparent===!1&&x.blending===Es&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:$,alphaHash:me,combine:x.combine,mapUv:lt&&p(x.map.channel),aoMapUv:Ye&&p(x.aoMap.channel),lightMapUv:Xe&&p(x.lightMap.channel),bumpMapUv:Y&&p(x.bumpMap.channel),normalMapUv:ft&&p(x.normalMap.channel),displacementMapUv:xt&&p(x.displacementMap.channel),emissiveMapUv:At&&p(x.emissiveMap.channel),metalnessMapUv:Ze&&p(x.metalnessMap.channel),roughnessMapUv:mt&&p(x.roughnessMap.channel),anisotropyMapUv:V&&p(x.anisotropyMap.channel),clearcoatMapUv:J&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(x.sheenRoughnessMap.channel),specularMapUv:pe&&p(x.specularMap.channel),specularColorMapUv:fe&&p(x.specularColorMap.channel),specularIntensityMapUv:ce&&p(x.specularIntensityMap.channel),transmissionMapUv:Pe&&p(x.transmissionMap.channel),thicknessMapUv:Ue&&p(x.thicknessMap.channel),alphaMapUv:ue&&p(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ft||N),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(lt||ue),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&ft===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ae,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:je,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:te,decodeVideoTexture:lt&&x.map.isVideoTexture===!0&&st.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:At&&x.emissiveMap.isVideoTexture===!0&&st.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qi,flipSided:x.side===yi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ge&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&x.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(g(T,x),S(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function g(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function A(x){let T=f[x.type],C;if(T){let I=sr[T];C=hn.clone(I.uniforms)}else C=x.uniforms;return C}function y(x,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new ib(r,T,x,n),c.push(C),h.set(T,C)),C}function b(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:A,acquireProgram:y,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:E}}function ob(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function ab(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function dg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function pg(){let r=[],e=0,t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,_,m,g){let S=r[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},r[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=p,S.materialVariant=o(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=m,S.group=g),e++,S}function l(u,f,p,_,m,g){let S=a(u,f,p,_,m,g);p.transmission>0?i.push(S):p.transparent===!0?n.push(S):t.push(S)}function c(u,f,p,_,m,g){let S=a(u,f,p,_,m,g);p.transmission>0?i.unshift(S):p.transparent===!0?n.unshift(S):t.unshift(S)}function h(u,f,p){t.length>1&&t.sort(u||ab),i.length>1&&i.sort(f||dg),n.length>1&&n.sort(f||dg),p&&(t.reverse(),i.reverse(),n.reverse())}function d(){for(let u=e,f=r.length;u<f;u++){let p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:d,sort:h}}function lb(){let r=new WeakMap;function e(i,n){let s=r.get(i),o;return s===void 0?(o=new pg,r.set(i,[o])):n>=s.length?(o=new pg,s.push(o)):o=s[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function cb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ne};break;case"SpotLight":t={position:new z,direction:new z,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function hb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var ub=0;function fb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function db(r){let e=new cb,t=hb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);let n=new z,s=new Pt,o=new Pt;function a(c){let h=0,d=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,S=0,A=0,y=0,b=0,w=0,E=0;c.sort(fb);for(let T=0,C=c.length;T<C;T++){let I=c[T],D=I.color,X=I.intensity,W=I.distance,O=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ts?O=I.shadow.map.texture:O=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=D.r*X,d+=D.g*X,u+=D.b*X;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],X);E++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let U=I.shadow,Z=t.get(I);Z.shadowIntensity=U.intensity,Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize=U.mapSize,i.directionalShadow[f]=Z,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=I.shadow.matrix,S++}i.directional[f]=H,f++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(D).multiplyScalar(X),H.distance=W,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[_]=H;let U=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,U.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[_]=U.matrix,I.castShadow){let Z=t.get(I);Z.shadowIntensity=U.intensity,Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize=U.mapSize,i.spotShadow[_]=Z,i.spotShadowMap[_]=O,y++}_++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(D).multiplyScalar(X),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=H,m++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let U=I.shadow,Z=t.get(I);Z.shadowIntensity=U.intensity,Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize=U.mapSize,Z.shadowCameraNear=U.camera.near,Z.shadowCameraFar=U.camera.far,i.pointShadow[p]=Z,i.pointShadowMap[p]=O,i.pointShadowMatrix[p]=I.shadow.matrix,A++}i.point[p]=H,p++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(X),H.groundColor.copy(I.groundColor).multiplyScalar(X),i.hemi[g]=H,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let x=i.hash;(x.directionalLength!==f||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==g||x.numDirectionalShadows!==S||x.numPointShadows!==A||x.numSpotShadows!==y||x.numSpotMaps!==b||x.numLightProbes!==E)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,x.directionalLength=f,x.pointLength=p,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=g,x.numDirectionalShadows=S,x.numPointShadows=A,x.numSpotShadows=y,x.numSpotMaps=b,x.numLightProbes=E,i.version=ub++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,m=h.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){let A=c[g];if(A.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),d++}else if(A.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),f++}else if(A.isRectAreaLight){let y=i.rectArea[p];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(A.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(A.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),u++}else if(A.isHemisphereLight){let y=i.hemi[_];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function mg(r){let e=new db(r),t=[],i=[],n=[];function s(u){d.camera=u,t.length=0,i.length=0,n.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function l(u){n.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function pb(r){let e=new WeakMap;function t(n,s=0){let o=e.get(n),a;return o===void 0?(a=new mg(r),e.set(n,[a])):s>=o.length?(a=new mg(r),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_b=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],xb=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],gg=new Pt,il=new z,Jf=new z;function vb(r,e,t){let i=new Eo,n=new Oe,s=new Oe,o=new Tt,a=new Nc,l=new Oc,c={},h=t.maxTextureSize,d={[Mr]:yi,[yi]:Mr,[Qi]:Qi},u=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:mb,fragmentShader:gb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new vi;p.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ut(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ka;let g=this.type;this.render=function(w,E,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===dm&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ka);let T=r.getRenderTarget(),C=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Pn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let X=g!==this.type;X&&E.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(O=>O.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,O=w.length;W<O;W++){let H=w[W],U=H.shadow;if(U===void 0){ze("WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;n.copy(U.mapSize);let Z=U.getFrameExtents();n.multiply(Z),s.copy(U.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/Z.x),n.x=s.x*Z.x,U.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/Z.y),n.y=s.y*Z.y,U.mapSize.y=s.y));let ee=r.state.buffers.depth.getReversed();if(U.camera._reversedDepth=ee,U.map===null||X===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Io){if(H.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Wt(n.x,n.y,{format:ts,type:oi,minFilter:si,magFilter:si,generateMipmaps:!1}),U.map.texture.name=H.name+".shadowMap",U.map.depthTexture=new Tr(n.x,n.y,Xn),U.map.depthTexture.name=H.name+".shadowMapDepth",U.map.depthTexture.format=$n,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=jt,U.map.depthTexture.magFilter=jt}else H.isPointLight?(U.map=new zh(n.x),U.map.depthTexture=new Lc(n.x,Wn)):(U.map=new Wt(n.x,n.y),U.map.depthTexture=new Tr(n.x,n.y,Wn)),U.map.depthTexture.name=H.name+".shadowMap",U.map.depthTexture.format=$n,this.type===ka?(U.map.depthTexture.compareFunction=ee?Uh:Oh,U.map.depthTexture.minFilter=si,U.map.depthTexture.magFilter=si):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=jt,U.map.depthTexture.magFilter=jt);U.camera.updateProjectionMatrix()}let P=U.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<P;le++){if(U.map.isWebGLCubeRenderTarget)r.setRenderTarget(U.map,le),r.clear();else{le===0&&(r.setRenderTarget(U.map),r.clear());let _e=U.getViewport(le);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),D.viewport(o)}if(H.isPointLight){let _e=U.camera,je=U.matrix,qe=H.distance||_e.far;qe!==_e.far&&(_e.far=qe,_e.updateProjectionMatrix()),il.setFromMatrixPosition(H.matrixWorld),_e.position.copy(il),Jf.copy(_e.position),Jf.add(_b[le]),_e.up.copy(xb[le]),_e.lookAt(Jf),_e.updateMatrixWorld(),je.makeTranslation(-il.x,-il.y,-il.z),gg.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),U._frustum.setFromProjectionMatrix(gg,_e.coordinateSystem,_e.reversedDepth)}else U.updateMatrices(H);i=U.getFrustum(),y(E,x,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===Io&&S(U,x),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(T,C,I)};function S(w,E){let x=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Wt(n.x,n.y,{format:ts,type:oi})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,x,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,x,f,_,null)}function A(w,E,x,T){let C=null,I=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)C=I;else if(C=x.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let D=C.uuid,X=E.uuid,W=c[D];W===void 0&&(W={},c[D]=W);let O=W[X];O===void 0&&(O=C.clone(),W[X]=O,E.addEventListener("dispose",b)),C=O}if(C.visible=E.visible,C.wireframe=E.wireframe,T===Io?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:d[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=r.properties.get(C);D.light=x}return C}function y(w,E,x,T,C){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Io)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let X=e.update(w),W=w.material;if(Array.isArray(W)){let O=X.groups;for(let H=0,U=O.length;H<U;H++){let Z=O[H],ee=W[Z.materialIndex];if(ee&&ee.visible){let P=A(w,ee,T,C);w.onBeforeShadow(r,w,E,x,X,P,Z),r.renderBufferDirect(x,null,X,P,w,Z),w.onAfterShadow(r,w,E,x,X,P,Z)}}}else if(W.visible){let O=A(w,W,T,C);w.onBeforeShadow(r,w,E,x,X,O,null),r.renderBufferDirect(x,null,X,O,w,null),w.onAfterShadow(r,w,E,x,X,O,null)}}let D=w.children;for(let X=0,W=D.length;X<W;X++)y(D[X],E,x,T,C)}function b(w){w.target.removeEventListener("dispose",b);for(let x in c){let T=c[x],C=w.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function yb(r,e){function t(){let L=!1,ue=new Tt,$=null,me=new Tt(0,0,0,0);return{setMask:function(ge){$!==ge&&!L&&(r.colorMask(ge,ge,ge,ge),$=ge)},setLocked:function(ge){L=ge},setClear:function(ge,te,re,ie,Fe){Fe===!0&&(ge*=ie,te*=ie,re*=ie),ue.set(ge,te,re,ie),me.equals(ue)===!1&&(r.clearColor(ge,te,re,ie),me.copy(ue))},reset:function(){L=!1,$=null,me.set(-1,0,0,0)}}}function i(){let L=!1,ue=!1,$=null,me=null,ge=null;return{setReversed:function(te){if(ue!==te){let re=e.get("EXT_clip_control");te?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),ue=te;let ie=ge;ge=null,this.setClear(ie)}},getReversed:function(){return ue},setTest:function(te){te?ne(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(te){$!==te&&!L&&(r.depthMask(te),$=te)},setFunc:function(te){if(ue&&(te=Ym[te]),me!==te){switch(te){case gc:r.depthFunc(r.NEVER);break;case _c:r.depthFunc(r.ALWAYS);break;case xc:r.depthFunc(r.LESS);break;case As:r.depthFunc(r.LEQUAL);break;case vc:r.depthFunc(r.EQUAL);break;case yc:r.depthFunc(r.GEQUAL);break;case Sc:r.depthFunc(r.GREATER);break;case Mc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=te}},setLocked:function(te){L=te},setClear:function(te){ge!==te&&(ge=te,ue&&(te=1-te),r.clearDepth(te))},reset:function(){L=!1,$=null,me=null,ge=null,ue=!1}}}function n(){let L=!1,ue=null,$=null,me=null,ge=null,te=null,re=null,ie=null,Fe=null;return{setTest:function(se){L||(se?ne(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(se){ue!==se&&!L&&(r.stencilMask(se),ue=se)},setFunc:function(se,Be,Ce){($!==se||me!==Be||ge!==Ce)&&(r.stencilFunc(se,Be,Ce),$=se,me=Be,ge=Ce)},setOp:function(se,Be,Ce){(te!==se||re!==Be||ie!==Ce)&&(r.stencilOp(se,Be,Ce),te=se,re=Be,ie=Ce)},setLocked:function(se){L=se},setClear:function(se){Fe!==se&&(r.clearStencil(se),Fe=se)},reset:function(){L=!1,ue=null,$=null,me=null,ge=null,te=null,re=null,ie=null,Fe=null}}}let s=new t,o=new i,a=new n,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,S=null,A=null,y=null,b=null,w=null,E=null,x=new Ne(0,0,0),T=0,C=!1,I=null,D=null,X=null,W=null,O=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,Z=0,ee=r.getParameter(r.VERSION);ee.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ee)[1]),U=Z>=1):ee.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),U=Z>=2);let P=null,le={},_e=r.getParameter(r.SCISSOR_BOX),je=r.getParameter(r.VIEWPORT),qe=new Tt().fromArray(_e),He=new Tt().fromArray(je);function K(L,ue,$,me){let ge=new Uint8Array(4),te=r.createTexture();r.bindTexture(L,te),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let re=0;re<$;re++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D(ue+re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return te}let oe={};oe[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(r.DEPTH_TEST),o.setFunc(As),Y(!1),ft(wf),ne(r.CULL_FACE),Ye(Pn);function ne(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Ae(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function ke(L,ue){return u[L]!==ue?(r.bindFramebuffer(L,ue),u[L]=ue,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ue),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function Te(L,ue){let $=p,me=!1;if(L){$=f.get(ue),$===void 0&&($=[],f.set(ue,$));let ge=L.textures;if($.length!==ge.length||$[0]!==r.COLOR_ATTACHMENT0){for(let te=0,re=ge.length;te<re;te++)$[te]=r.COLOR_ATTACHMENT0+te;$.length=ge.length,me=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,me=!0);me&&r.drawBuffers($)}function lt(L){return _!==L?(r.useProgram(L),_=L,!0):!1}let Me={[Xr]:r.FUNC_ADD,[mm]:r.FUNC_SUBTRACT,[gm]:r.FUNC_REVERSE_SUBTRACT};Me[_m]=r.MIN,Me[xm]=r.MAX;let Ge={[vm]:r.ZERO,[ym]:r.ONE,[Sm]:r.SRC_COLOR,[pc]:r.SRC_ALPHA,[Am]:r.SRC_ALPHA_SATURATE,[wm]:r.DST_COLOR,[bm]:r.DST_ALPHA,[Mm]:r.ONE_MINUS_SRC_COLOR,[mc]:r.ONE_MINUS_SRC_ALPHA,[Em]:r.ONE_MINUS_DST_COLOR,[Tm]:r.ONE_MINUS_DST_ALPHA,[Cm]:r.CONSTANT_COLOR,[Rm]:r.ONE_MINUS_CONSTANT_COLOR,[Pm]:r.CONSTANT_ALPHA,[Im]:r.ONE_MINUS_CONSTANT_ALPHA};function Ye(L,ue,$,me,ge,te,re,ie,Fe,se){if(L===Pn){m===!0&&(Ae(r.BLEND),m=!1);return}if(m===!1&&(ne(r.BLEND),m=!0),L!==pm){if(L!==g||se!==C){if((S!==Xr||b!==Xr)&&(r.blendEquation(r.FUNC_ADD),S=Xr,b=Xr),se)switch(L){case Es:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jr:r.blendFunc(r.ONE,r.ONE);break;case Ef:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Af:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ve("WebGLState: Invalid blending: ",L);break}else switch(L){case Es:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ef:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Af:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",L);break}A=null,y=null,w=null,E=null,x.set(0,0,0),T=0,g=L,C=se}return}ge=ge||ue,te=te||$,re=re||me,(ue!==S||ge!==b)&&(r.blendEquationSeparate(Me[ue],Me[ge]),S=ue,b=ge),($!==A||me!==y||te!==w||re!==E)&&(r.blendFuncSeparate(Ge[$],Ge[me],Ge[te],Ge[re]),A=$,y=me,w=te,E=re),(ie.equals(x)===!1||Fe!==T)&&(r.blendColor(ie.r,ie.g,ie.b,Fe),x.copy(ie),T=Fe),g=L,C=!1}function Xe(L,ue){L.side===Qi?Ae(r.CULL_FACE):ne(r.CULL_FACE);let $=L.side===yi;ue&&($=!$),Y($),L.blending===Es&&L.transparent===!1?Ye(Pn):Ye(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let me=L.stencilWrite;a.setTest(me),me&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),At(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ne(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Y(L){I!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),I=L)}function ft(L){L!==um?(ne(r.CULL_FACE),L!==D&&(L===wf?r.cullFace(r.BACK):L===fm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),D=L}function xt(L){L!==X&&(U&&r.lineWidth(L),X=L)}function At(L,ue,$){L?(ne(r.POLYGON_OFFSET_FILL),(W!==ue||O!==$)&&(W=ue,O=$,o.getReversed()&&(ue=-ue),r.polygonOffset(ue,$))):Ae(r.POLYGON_OFFSET_FILL)}function Ze(L){L?ne(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function mt(L){L===void 0&&(L=r.TEXTURE0+H-1),P!==L&&(r.activeTexture(L),P=L)}function N(L,ue,$){$===void 0&&(P===null?$=r.TEXTURE0+H-1:$=P);let me=le[$];me===void 0&&(me={type:void 0,texture:void 0},le[$]=me),(me.type!==L||me.texture!==ue)&&(P!==$&&(r.activeTexture($),P=$),r.bindTexture(L,ue||oe[L]),me.type=L,me.texture=ue)}function Vt(){let L=le[P];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function We(){try{r.compressedTexImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function v(){try{r.texSubImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function B(){try{r.texSubImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function V(){try{r.compressedTexSubImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function J(){try{r.compressedTexSubImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function he(){try{r.texStorage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function ae(){try{r.texStorage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function j(){try{r.texImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function Q(){try{r.texImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function de(L){return d[L]!==void 0?d[L]:r.getParameter(L)}function Ee(L,ue){d[L]!==ue&&(r.pixelStorei(L,ue),d[L]=ue)}function pe(L){qe.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),qe.copy(L))}function fe(L){He.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),He.copy(L))}function ce(L,ue){let $=c.get(ue);$===void 0&&($=new WeakMap,c.set(ue,$));let me=$.get(L);me===void 0&&(me=r.getUniformBlockIndex(ue,L.name),$.set(L,me))}function Pe(L,ue){let me=c.get(ue).get(L);l.get(ue)!==me&&(r.uniformBlockBinding(ue,me,L.__bindingPointIndex),l.set(ue,me))}function Ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},P=null,le={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,S=null,A=null,y=null,b=null,w=null,E=null,x=new Ne(0,0,0),T=0,C=!1,I=null,D=null,X=null,W=null,O=null,qe.set(0,0,r.canvas.width,r.canvas.height),He.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:Ae,bindFramebuffer:ke,drawBuffers:Te,useProgram:lt,setBlending:Ye,setMaterial:Xe,setFlipSided:Y,setCullFace:ft,setLineWidth:xt,setPolygonOffset:At,setScissorTest:Ze,activeTexture:mt,bindTexture:N,unbindTexture:Vt,compressedTexImage2D:We,compressedTexImage3D:R,texImage2D:j,texImage3D:Q,pixelStorei:Ee,getParameter:de,updateUBOMapping:ce,uniformBlockBinding:Pe,texStorage2D:he,texStorage3D:ae,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:J,scissor:pe,viewport:fe,reset:Ue}}function Sb(r,e,t,i,n,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return p?new OffscreenCanvas(R,v):ba("canvas")}function m(R,v,B){let V=1,J=We(R);if((J.width>B||J.height>B)&&(V=B/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let he=Math.floor(V*J.width),ae=Math.floor(V*J.height);u===void 0&&(u=_(he,ae));let j=v?_(he,ae):u;return j.width=he,j.height=ae,j.getContext("2d").drawImage(R,0,0,he,ae),ze("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+he+"x"+ae+")."),j}else return"data"in R&&ze("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function g(R){return R.generateMipmaps}function S(R){r.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(R,v,B,V,J,he=!1){if(R!==null){if(r[R]!==void 0)return r[R];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae;V&&(ae=e.get("EXT_texture_norm16"),ae||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=v;if(v===r.RED&&(B===r.FLOAT&&(j=r.R32F),B===r.HALF_FLOAT&&(j=r.R16F),B===r.UNSIGNED_BYTE&&(j=r.R8),B===r.UNSIGNED_SHORT&&ae&&(j=ae.R16_EXT),B===r.SHORT&&ae&&(j=ae.R16_SNORM_EXT)),v===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.R8UI),B===r.UNSIGNED_SHORT&&(j=r.R16UI),B===r.UNSIGNED_INT&&(j=r.R32UI),B===r.BYTE&&(j=r.R8I),B===r.SHORT&&(j=r.R16I),B===r.INT&&(j=r.R32I)),v===r.RG&&(B===r.FLOAT&&(j=r.RG32F),B===r.HALF_FLOAT&&(j=r.RG16F),B===r.UNSIGNED_BYTE&&(j=r.RG8),B===r.UNSIGNED_SHORT&&ae&&(j=ae.RG16_EXT),B===r.SHORT&&ae&&(j=ae.RG16_SNORM_EXT)),v===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.RG8UI),B===r.UNSIGNED_SHORT&&(j=r.RG16UI),B===r.UNSIGNED_INT&&(j=r.RG32UI),B===r.BYTE&&(j=r.RG8I),B===r.SHORT&&(j=r.RG16I),B===r.INT&&(j=r.RG32I)),v===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.RGB8UI),B===r.UNSIGNED_SHORT&&(j=r.RGB16UI),B===r.UNSIGNED_INT&&(j=r.RGB32UI),B===r.BYTE&&(j=r.RGB8I),B===r.SHORT&&(j=r.RGB16I),B===r.INT&&(j=r.RGB32I)),v===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),B===r.UNSIGNED_INT&&(j=r.RGBA32UI),B===r.BYTE&&(j=r.RGBA8I),B===r.SHORT&&(j=r.RGBA16I),B===r.INT&&(j=r.RGBA32I)),v===r.RGB&&(B===r.UNSIGNED_SHORT&&ae&&(j=ae.RGB16_EXT),B===r.SHORT&&ae&&(j=ae.RGB16_SNORM_EXT),B===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),v===r.RGBA){let Q=he?Ma:st.getTransfer(J);B===r.FLOAT&&(j=r.RGBA32F),B===r.HALF_FLOAT&&(j=r.RGBA16F),B===r.UNSIGNED_BYTE&&(j=Q===pt?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT&&ae&&(j=ae.RGBA16_EXT),B===r.SHORT&&ae&&(j=ae.RGBA16_SNORM_EXT),B===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(R,v){let B;return R?v===null||v===Wn||v===Lo?B=r.DEPTH24_STENCIL8:v===Xn?B=r.DEPTH32F_STENCIL8:v===Do&&(B=r.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Wn||v===Lo?B=r.DEPTH_COMPONENT24:v===Xn?B=r.DEPTH_COMPONENT32F:v===Do&&(B=r.DEPTH_COMPONENT16),B}function w(R,v){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==jt&&R.minFilter!==si?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function E(R){let v=R.target;v.removeEventListener("dispose",E),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function x(R){let v=R.target;v.removeEventListener("dispose",x),I(v)}function T(R){let v=i.get(R);if(v.__webglInit===void 0)return;let B=R.source,V=f.get(B);if(V){let J=V[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(R),Object.keys(V).length===0&&f.delete(B)}i.remove(R)}function C(R){let v=i.get(R);r.deleteTexture(v.__webglTexture);let B=R.source,V=f.get(B);delete V[v.__cacheKey],o.memory.textures--}function I(R){let v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let J=0;J<v.__webglFramebuffer[V].length;J++)r.deleteFramebuffer(v.__webglFramebuffer[V][J]);else r.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)r.deleteFramebuffer(v.__webglFramebuffer[V]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=R.textures;for(let V=0,J=B.length;V<J;V++){let he=i.get(B[V]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),o.memory.textures--),i.remove(B[V])}i.remove(R)}let D=0;function X(){D=0}function W(){return D}function O(R){D=R}function H(){let R=D;return R>=n.maxTextures&&ze("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),D+=1,R}function U(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function Z(R,v){let B=i.get(R);if(R.isVideoTexture&&N(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let V=R.image;if(V===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(B,R,v);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+v)}function ee(R,v){let B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Ae(B,R,v);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+v)}function P(R,v){let B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Ae(B,R,v);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+v)}function le(R,v){let B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){ke(B,R,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+v)}let _e={[bc]:r.REPEAT,[Qn]:r.CLAMP_TO_EDGE,[Tc]:r.MIRRORED_REPEAT},je={[jt]:r.NEAREST,[Nm]:r.NEAREST_MIPMAP_NEAREST,[Za]:r.NEAREST_MIPMAP_LINEAR,[si]:r.LINEAR,[jc]:r.LINEAR_MIPMAP_NEAREST,[$r]:r.LINEAR_MIPMAP_LINEAR},qe={[Fm]:r.NEVER,[Hm]:r.ALWAYS,[Bm]:r.LESS,[Oh]:r.LEQUAL,[zm]:r.EQUAL,[Uh]:r.GEQUAL,[km]:r.GREATER,[Vm]:r.NOTEQUAL};function He(R,v){if(v.type===Xn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===si||v.magFilter===jc||v.magFilter===Za||v.magFilter===$r||v.minFilter===si||v.minFilter===jc||v.minFilter===Za||v.minFilter===$r)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,_e[v.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,_e[v.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,_e[v.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,je[v.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,je[v.minFilter]),v.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,qe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===jt||v.minFilter!==Za&&v.minFilter!==$r||v.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function K(R,v){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",E));let V=v.source,J=f.get(V);J===void 0&&(J={},f.set(V,J));let he=U(v);if(he!==R.__cacheKey){J[he]===void 0&&(J[he]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[he].usedTimes++;let ae=J[R.__cacheKey];ae!==void 0&&(J[R.__cacheKey].usedTimes--,ae.usedTimes===0&&C(v)),R.__cacheKey=he,R.__webglTexture=J[he].texture}return B}function oe(R,v,B){return Math.floor(Math.floor(R/B)/v)}function ne(R,v,B,V){let he=R.updateRanges;if(he.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,B,V,v.data);else{he.sort((Ee,pe)=>Ee.start-pe.start);let ae=0;for(let Ee=1;Ee<he.length;Ee++){let pe=he[ae],fe=he[Ee],ce=pe.start+pe.count,Pe=oe(fe.start,v.width,4),Ue=oe(pe.start,v.width,4);fe.start<=ce+1&&Pe===Ue&&oe(fe.start+fe.count-1,v.width,4)===Pe?pe.count=Math.max(pe.count,fe.start+fe.count-pe.start):(++ae,he[ae]=fe)}he.length=ae+1;let j=t.getParameter(r.UNPACK_ROW_LENGTH),Q=t.getParameter(r.UNPACK_SKIP_PIXELS),de=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Ee=0,pe=he.length;Ee<pe;Ee++){let fe=he[Ee],ce=Math.floor(fe.start/4),Pe=Math.ceil(fe.count/4),Ue=ce%v.width,L=Math.floor(ce/v.width),ue=Pe,$=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(r.UNPACK_SKIP_ROWS,L),t.texSubImage2D(r.TEXTURE_2D,0,Ue,L,ue,$,B,V,v.data)}R.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,j),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(r.UNPACK_SKIP_ROWS,de)}}function Ae(R,v,B){let V=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=r.TEXTURE_3D);let J=K(R,v),he=v.source;t.bindTexture(V,R.__webglTexture,r.TEXTURE0+B);let ae=i.get(he);if(he.version!==ae.__version||J===!0){if(t.activeTexture(r.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let $=st.getPrimaries(st.workingColorSpace),me=v.colorSpace===wr?null:st.getPrimaries(v.colorSpace),ge=v.colorSpace===wr||$===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=m(v.image,!1,n.maxTextureSize);Q=Vt(v,Q);let de=s.convert(v.format,v.colorSpace),Ee=s.convert(v.type),pe=y(v.internalFormat,de,Ee,v.normalized,v.colorSpace,v.isVideoTexture);He(V,v);let fe,ce=v.mipmaps,Pe=v.isVideoTexture!==!0,Ue=ae.__version===void 0||J===!0,L=he.dataReady,ue=w(v,Q);if(v.isDepthTexture)pe=b(v.format===es,v.type),Ue&&(Pe?t.texStorage2D(r.TEXTURE_2D,1,pe,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,pe,Q.width,Q.height,0,de,Ee,null));else if(v.isDataTexture)if(ce.length>0){Pe&&Ue&&t.texStorage2D(r.TEXTURE_2D,ue,pe,ce[0].width,ce[0].height);for(let $=0,me=ce.length;$<me;$++)fe=ce[$],Pe?L&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,fe.width,fe.height,de,Ee,fe.data):t.texImage2D(r.TEXTURE_2D,$,pe,fe.width,fe.height,0,de,Ee,fe.data);v.generateMipmaps=!1}else Pe?(Ue&&t.texStorage2D(r.TEXTURE_2D,ue,pe,Q.width,Q.height),L&&ne(v,Q,de,Ee)):t.texImage2D(r.TEXTURE_2D,0,pe,Q.width,Q.height,0,de,Ee,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pe&&Ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,pe,ce[0].width,ce[0].height,Q.depth);for(let $=0,me=ce.length;$<me;$++)if(fe=ce[$],v.format!==In)if(de!==null)if(Pe){if(L)if(v.layerUpdates.size>0){let ge=Gf(fe.width,fe.height,v.format,v.type);for(let te of v.layerUpdates){let re=fe.data.subarray(te*ge/fe.data.BYTES_PER_ELEMENT,(te+1)*ge/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,te,fe.width,fe.height,1,de,re)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,fe.width,fe.height,Q.depth,de,fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,pe,fe.width,fe.height,Q.depth,0,fe.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,fe.width,fe.height,Q.depth,de,Ee,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,pe,fe.width,fe.height,Q.depth,0,de,Ee,fe.data)}else{Pe&&Ue&&t.texStorage2D(r.TEXTURE_2D,ue,pe,ce[0].width,ce[0].height);for(let $=0,me=ce.length;$<me;$++)fe=ce[$],v.format!==In?de!==null?Pe?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,$,pe,fe.width,fe.height,0,fe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?L&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,fe.width,fe.height,de,Ee,fe.data):t.texImage2D(r.TEXTURE_2D,$,pe,fe.width,fe.height,0,de,Ee,fe.data)}else if(v.isDataArrayTexture)if(Pe){if(Ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,pe,Q.width,Q.height,Q.depth),L)if(v.layerUpdates.size>0){let $=Gf(Q.width,Q.height,v.format,v.type);for(let me of v.layerUpdates){let ge=Q.data.subarray(me*$/Q.data.BYTES_PER_ELEMENT,(me+1)*$/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,Q.width,Q.height,1,de,Ee,ge)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,Ee,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,pe,Q.width,Q.height,Q.depth,0,de,Ee,Q.data);else if(v.isData3DTexture)Pe?(Ue&&t.texStorage3D(r.TEXTURE_3D,ue,pe,Q.width,Q.height,Q.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,Ee,Q.data)):t.texImage3D(r.TEXTURE_3D,0,pe,Q.width,Q.height,Q.depth,0,de,Ee,Q.data);else if(v.isFramebufferTexture){if(Ue)if(Pe)t.texStorage2D(r.TEXTURE_2D,ue,pe,Q.width,Q.height);else{let $=Q.width,me=Q.height;for(let ge=0;ge<ue;ge++)t.texImage2D(r.TEXTURE_2D,ge,pe,$,me,0,de,Ee,null),$>>=1,me>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in r){let $=r.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),Q.parentNode!==$){$.appendChild(Q),d.add(v),$.onpaint=me=>{let ge=me.changedElements;for(let te of d)ge.includes(te.image)&&(te.needsUpdate=!0)},$.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Q);else{let ge=r.RGBA,te=r.RGBA,re=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ge,te,re,Q)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ce.length>0){if(Pe&&Ue){let $=We(ce[0]);t.texStorage2D(r.TEXTURE_2D,ue,pe,$.width,$.height)}for(let $=0,me=ce.length;$<me;$++)fe=ce[$],Pe?L&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,de,Ee,fe):t.texImage2D(r.TEXTURE_2D,$,pe,de,Ee,fe);v.generateMipmaps=!1}else if(Pe){if(Ue){let $=We(Q);t.texStorage2D(r.TEXTURE_2D,ue,pe,$.width,$.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,Ee,Q)}else t.texImage2D(r.TEXTURE_2D,0,pe,de,Ee,Q);g(v)&&S(V),ae.__version=he.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ke(R,v,B){if(v.image.length!==6)return;let V=K(R,v),J=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);let he=i.get(J);if(J.version!==he.__version||V===!0){t.activeTexture(r.TEXTURE0+B);let ae=st.getPrimaries(st.workingColorSpace),j=v.colorSpace===wr?null:st.getPrimaries(v.colorSpace),Q=v.colorSpace===wr||ae===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let de=v.isCompressedTexture||v.image[0].isCompressedTexture,Ee=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let te=0;te<6;te++)!de&&!Ee?pe[te]=m(v.image[te],!0,n.maxCubemapSize):pe[te]=Ee?v.image[te].image:v.image[te],pe[te]=Vt(v,pe[te]);let fe=pe[0],ce=s.convert(v.format,v.colorSpace),Pe=s.convert(v.type),Ue=y(v.internalFormat,ce,Pe,v.normalized,v.colorSpace),L=v.isVideoTexture!==!0,ue=he.__version===void 0||V===!0,$=J.dataReady,me=w(v,fe);He(r.TEXTURE_CUBE_MAP,v);let ge;if(de){L&&ue&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ue,fe.width,fe.height);for(let te=0;te<6;te++){ge=pe[te].mipmaps;for(let re=0;re<ge.length;re++){let ie=ge[re];v.format!==In?ce!==null?L?$&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,0,0,ie.width,ie.height,ce,ie.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,Ue,ie.width,ie.height,0,ie.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,0,0,ie.width,ie.height,ce,Pe,ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,Ue,ie.width,ie.height,0,ce,Pe,ie.data)}}}else{if(ge=v.mipmaps,L&&ue){ge.length>0&&me++;let te=We(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ue,te.width,te.height)}for(let te=0;te<6;te++)if(Ee){L?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,pe[te].width,pe[te].height,ce,Pe,pe[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ue,pe[te].width,pe[te].height,0,ce,Pe,pe[te].data);for(let re=0;re<ge.length;re++){let Fe=ge[re].image[te].image;L?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,0,0,Fe.width,Fe.height,ce,Pe,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,Ue,Fe.width,Fe.height,0,ce,Pe,Fe.data)}}else{L?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ce,Pe,pe[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ue,ce,Pe,pe[te]);for(let re=0;re<ge.length;re++){let ie=ge[re];L?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,0,0,ce,Pe,ie.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,Ue,ce,Pe,ie.image[te])}}}g(v)&&S(r.TEXTURE_CUBE_MAP),he.__version=J.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Te(R,v,B,V,J,he){let ae=s.convert(B.format,B.colorSpace),j=s.convert(B.type),Q=y(B.internalFormat,ae,j,B.normalized,B.colorSpace),de=i.get(v),Ee=i.get(B);if(Ee.__renderTarget=v,!de.__hasExternalTextures){let pe=Math.max(1,v.width>>he),fe=Math.max(1,v.height>>he);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,he,Q,pe,fe,v.depth,0,ae,j,null):t.texImage2D(J,he,Q,pe,fe,0,ae,j,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),mt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,J,Ee.__webglTexture,0,Ze(v)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,V,J,Ee.__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(R,v,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),v.depthBuffer){let V=v.depthTexture,J=V&&V.isDepthTexture?V.type:null,he=b(v.stencilBuffer,J),ae=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;mt(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze(v),he,v.width,v.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze(v),he,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,he,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,R)}else{let V=v.textures;for(let J=0;J<V.length;J++){let he=V[J],ae=s.convert(he.format,he.colorSpace),j=s.convert(he.type),Q=y(he.internalFormat,ae,j,he.normalized,he.colorSpace);mt(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze(v),Q,v.width,v.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze(v),Q,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Q,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Me(R,v,B){let V=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",E)),J.__webglTexture===void 0){J.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),He(r.TEXTURE_CUBE_MAP,v.depthTexture);let de=s.convert(v.depthTexture.format),Ee=s.convert(v.depthTexture.type),pe;v.depthTexture.format===$n?pe=r.DEPTH_COMPONENT24:v.depthTexture.format===es&&(pe=r.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,pe,v.width,v.height,0,de,Ee,null)}}else Z(v.depthTexture,0);let he=J.__webglTexture,ae=Ze(v),j=V?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,Q=v.depthTexture.format===es?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===$n)mt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,j,he,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,Q,j,he,0);else if(v.depthTexture.format===es)mt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,j,he,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,Q,j,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ge(R){let v=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let V=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",J)};V.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=V}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let V=0;V<6;V++)Me(v.__webglFramebuffer[V],R,V);else{let V=R.texture.mipmaps;V&&V.length>0?Me(v.__webglFramebuffer[0],R,0):Me(v.__webglFramebuffer,R,0)}else if(B){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=r.createRenderbuffer(),lt(v.__webglDepthbuffer[V],R,!1);else{let J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=v.__webglDepthbuffer[V];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,he)}}else{let V=R.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),lt(v.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,he)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(R,v,B){let V=i.get(R);v!==void 0&&Te(V.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Ge(R)}function Xe(R){let v=R.texture,B=i.get(R),V=i.get(v);R.addEventListener("dispose",x);let J=R.textures,he=R.isWebGLCubeRenderTarget===!0,ae=J.length>1;if(ae||(V.__webglTexture===void 0&&(V.__webglTexture=r.createTexture()),V.__version=v.version,o.memory.textures++),he){B.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[j]=[];for(let Q=0;Q<v.mipmaps.length;Q++)B.__webglFramebuffer[j][Q]=r.createFramebuffer()}else B.__webglFramebuffer[j]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)B.__webglFramebuffer[j]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(ae)for(let j=0,Q=J.length;j<Q;j++){let de=i.get(J[j]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&mt(R)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let j=0;j<J.length;j++){let Q=J[j];B.__webglColorRenderbuffer[j]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[j]);let de=s.convert(Q.format,Q.colorSpace),Ee=s.convert(Q.type),pe=y(Q.internalFormat,de,Ee,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),fe=Ze(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,pe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.RENDERBUFFER,B.__webglColorRenderbuffer[j])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),lt(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture),He(r.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Te(B.__webglFramebuffer[j][Q],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else Te(B.__webglFramebuffer[j],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);g(v)&&S(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let j=0,Q=J.length;j<Q;j++){let de=J[j],Ee=i.get(de),pe=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(pe,Ee.__webglTexture),He(pe,de),Te(B.__webglFramebuffer,R,de,r.COLOR_ATTACHMENT0+j,pe,0),g(de)&&S(pe)}t.unbindTexture()}else{let j=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(j,V.__webglTexture),He(j,v),v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Te(B.__webglFramebuffer[Q],R,v,r.COLOR_ATTACHMENT0,j,Q);else Te(B.__webglFramebuffer,R,v,r.COLOR_ATTACHMENT0,j,0);g(v)&&S(j),t.unbindTexture()}R.depthBuffer&&Ge(R)}function Y(R){let v=R.textures;for(let B=0,V=v.length;B<V;B++){let J=v[B];if(g(J)){let he=A(R),ae=i.get(J).__webglTexture;t.bindTexture(he,ae),S(he),t.unbindTexture()}}}let ft=[],xt=[];function At(R){if(R.samples>0){if(mt(R)===!1){let v=R.textures,B=R.width,V=R.height,J=r.COLOR_BUFFER_BIT,he=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=i.get(R),j=v.length>1;if(j)for(let de=0;de<v.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let Q=R.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let de=0;de<v.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),j){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[de]);let Ee=i.get(v[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,B,V,0,0,B,V,J,r.NEAREST),l===!0&&(ft.length=0,xt.length=0,ft.push(r.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ft.push(he),xt.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,xt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),j)for(let de=0;de<v.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,ae.__webglColorRenderbuffer[de]);let Ee=i.get(v[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let v=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function Ze(R){return Math.min(n.maxSamples,R.samples)}function mt(R){let v=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(R){let v=o.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Vt(R,v){let B=R.colorSpace,V=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Sa&&B!==wr&&(st.getTransfer(B)===pt?(V!==In||J!==$i)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",B)),v}function We(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=X,this.getTextureUnits=W,this.setTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=ee,this.setTexture3D=P,this.setTextureCube=le,this.rebindTextures=Ye,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Mb(r,e){function t(i,n=wr){let s,o=st.getTransfer(n);if(i===$i)return r.UNSIGNED_BYTE;if(i===$c)return r.UNSIGNED_SHORT_4_4_4_4;if(i===eh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Df)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Lf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Pf)return r.BYTE;if(i===If)return r.SHORT;if(i===Do)return r.UNSIGNED_SHORT;if(i===Qc)return r.INT;if(i===Wn)return r.UNSIGNED_INT;if(i===Xn)return r.FLOAT;if(i===oi)return r.HALF_FLOAT;if(i===Nf)return r.ALPHA;if(i===Of)return r.RGB;if(i===In)return r.RGBA;if(i===$n)return r.DEPTH_COMPONENT;if(i===es)return r.DEPTH_STENCIL;if(i===Uf)return r.RED;if(i===th)return r.RED_INTEGER;if(i===ts)return r.RG;if(i===ih)return r.RG_INTEGER;if(i===nh)return r.RGBA_INTEGER;if(i===Ja||i===Ka||i===ja||i===Qa)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rh||i===sh||i===oh||i===ah)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lh||i===ch||i===hh||i===uh||i===fh||i===$a||i===dh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lh||i===ch)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===hh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===uh)return s.COMPRESSED_R11_EAC;if(i===fh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===$a)return s.COMPRESSED_RG11_EAC;if(i===dh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ph||i===mh||i===gh||i===_h||i===xh||i===vh||i===yh||i===Sh||i===Mh||i===bh||i===Th||i===wh||i===Eh||i===Ah)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ph)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_h)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Th)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ah)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ch||i===Rh||i===Ph)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ch)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ph)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ih||i===Dh||i===el||i===Lh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ih)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Dh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===el)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lo?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}var bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,nd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Da(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Nt({vertexShader:bb,fragmentShader:Tb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new Hn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rd=class extends er{constructor(e,t){super();let i=this,n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,_=typeof XRWebGLBinding<"u",m=new nd,g={},S=t.getContextAttributes(),A=null,y=null,b=[],w=[],E=new Oe,x=null,T=new Ci;T.viewport=new Tt;let C=new Ci;C.viewport=new Tt;let I=[T,C],D=new Zc,X=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=b[K];return oe===void 0&&(oe=new To,b[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=b[K];return oe===void 0&&(oe=new To,b[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=b[K];return oe===void 0&&(oe=new To,b[K]=oe),oe.getHandSpace()};function O(K){let oe=w.indexOf(K.inputSource);if(oe===-1)return;let ne=b[oe];ne!==void 0&&(ne.update(K.inputSource,K.frame,c||o),ne.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",U);for(let K=0;K<b.length;K++){let oe=w[K];oe!==null&&(w[K]=null,b[K].disconnect(oe))}X=null,W=null,m.reset();for(let K in g)delete g[K];e.setRenderTarget(A),f=null,u=null,d=null,n=null,y=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(A=e.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",H),n.addEventListener("inputsourceschange",U),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Ae=null,ke=null;S.depth&&(ke=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=S.stencil?es:$n,Ae=S.stencil?Lo:Wn);let Te={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Te),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Wt(u.textureWidth,u.textureHeight,{format:In,type:$i,depthTexture:new Tr(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ne={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,ne),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Wt(f.framebufferWidth,f.framebufferHeight,{format:In,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),He.setContext(n),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(K){for(let oe=0;oe<K.removed.length;oe++){let ne=K.removed[oe],Ae=w.indexOf(ne);Ae>=0&&(w[Ae]=null,b[Ae].disconnect(ne))}for(let oe=0;oe<K.added.length;oe++){let ne=K.added[oe],Ae=w.indexOf(ne);if(Ae===-1){for(let Te=0;Te<b.length;Te++)if(Te>=w.length){w.push(ne),Ae=Te;break}else if(w[Te]===null){w[Te]=ne,Ae=Te;break}if(Ae===-1)break}let ke=b[Ae];ke&&ke.connect(ne)}}let Z=new z,ee=new z;function P(K,oe,ne){Z.setFromMatrixPosition(oe.matrixWorld),ee.setFromMatrixPosition(ne.matrixWorld);let Ae=Z.distanceTo(ee),ke=oe.projectionMatrix.elements,Te=ne.projectionMatrix.elements,lt=ke[14]/(ke[10]-1),Me=ke[14]/(ke[10]+1),Ge=(ke[9]+1)/ke[5],Ye=(ke[9]-1)/ke[5],Xe=(ke[8]-1)/ke[0],Y=(Te[8]+1)/Te[0],ft=lt*Xe,xt=lt*Y,At=Ae/(-Xe+Y),Ze=At*-Xe;if(oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ze),K.translateZ(At),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ke[10]===-1)K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let mt=lt+At,N=Me+At,Vt=ft-Ze,We=xt+(Ae-Ze),R=Ge*Me/N*mt,v=Ye*Me/N*mt;K.projectionMatrix.makePerspective(Vt,We,R,v,mt,N),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function le(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let oe=K.near,ne=K.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),D.near=C.near=T.near=oe,D.far=C.far=T.far=ne,(X!==D.near||W!==D.far)&&(n.updateRenderState({depthNear:D.near,depthFar:D.far}),X=D.near,W=D.far),D.layers.mask=K.layers.mask|6,T.layers.mask=D.layers.mask&-5,C.layers.mask=D.layers.mask&-3;let Ae=K.parent,ke=D.cameras;le(D,Ae);for(let Te=0;Te<ke.length;Te++)le(ke[Te],Ae);ke.length===2?P(D,T,C):D.projectionMatrix.copy(T.projectionMatrix),_e(K,D,Ae)};function _e(K,oe,ne){ne===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(ne.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=So*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(K){return g[K]};let je=null;function qe(K,oe){if(h=oe.getViewerPose(c||o),p=oe,h!==null){let ne=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ae=!1;ne.length!==D.cameras.length&&(D.cameras.length=0,Ae=!0);for(let Me=0;Me<ne.length;Me++){let Ge=ne[Me],Ye=null;if(f!==null)Ye=f.getViewport(Ge);else{let Y=d.getViewSubImage(u,Ge);Ye=Y.viewport,Me===0&&(e.setRenderTargetTextures(y,Y.colorTexture,Y.depthStencilTexture),e.setRenderTarget(y))}let Xe=I[Me];Xe===void 0&&(Xe=new Ci,Xe.layers.enable(Me),Xe.viewport=new Tt,I[Me]=Xe),Xe.matrix.fromArray(Ge.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ge.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Me===0&&(D.matrix.copy(Xe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ae===!0&&D.cameras.push(Xe)}let ke=n.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let Me=d.getDepthInformation(ne[0]);Me&&Me.isValid&&Me.texture&&m.init(Me,n.renderState)}if(ke&&ke.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let Me=0;Me<ne.length;Me++){let Ge=ne[Me].camera;if(Ge){let Ye=g[Ge];Ye||(Ye=new Da,g[Ge]=Ye);let Xe=d.getCameraImage(Ge);Ye.sourceTexture=Xe}}}}for(let ne=0;ne<b.length;ne++){let Ae=w[ne],ke=b[ne];Ae!==null&&ke!==void 0&&ke.update(Ae,oe,c||o)}je&&je(K,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),p=null}let He=new _g;He.setAnimationLoop(qe),this.setAnimationLoop=function(K){je=K},this.dispose=function(){}}},wb=new Pt,bg=new Ke;bg.set(-1,0,0,0,1,0,0,0,1);function Eb(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,kf(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,S,A,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,S,A):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===yi&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===yi&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let S=e.get(g),A=S.envMap,y=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(wb.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=A*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,S){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===yi&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let S=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Ab(r,e,t,i){let n={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let w=b.program;i.uniformBlockBinding(y,w)}function c(y,b){let w=n[y.id];w===void 0&&(m(y),w=h(y),n[y.id]=w,y.addEventListener("dispose",S));let E=b.program;i.updateUBOMapping(y,E);let x=e.render.frame;s[y.id]!==x&&(u(y),s[y.id]=x)}function h(y){let b=d();y.__bindingPointIndex=b;let w=r.createBuffer(),E=y.__size,x=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,E,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,w),w}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let b=n[y.id],w=y.uniforms,E=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let x=0,T=w.length;x<T;x++){let C=w[x];if(Array.isArray(C))for(let I=0,D=C.length;I<D;I++)f(C[I],x,I,E);else f(C,x,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,b,w,E){if(_(y,b,w,E)===!0){let x=y.__offset,T=y.value;if(Array.isArray(T)){let C=0;for(let I=0;I<T.length;I++){let D=T[I],X=g(D);p(D,y.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,y.__data)}}function p(y,b,w){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,w)}function _(y,b,w,E){let x=y.value,T=b+"_"+w;if(E[T]===void 0)return typeof x=="number"||typeof x=="boolean"?E[T]=x:ArrayBuffer.isView(x)?E[T]=x.slice():E[T]=x.clone(),!0;{let C=E[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return E[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(y){let b=y.uniforms,w=0,E=16;for(let T=0,C=b.length;T<C;T++){let I=Array.isArray(b[T])?b[T]:[b[T]];for(let D=0,X=I.length;D<X;D++){let W=I[D],O=Array.isArray(W.value)?W.value:[W.value];for(let H=0,U=O.length;H<U;H++){let Z=O[H],ee=g(Z),P=w%E,le=P%ee.boundary,_e=P+le;w+=le,_e!==0&&E-_e<ee.storage&&(w+=E-_e),W.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=ee.storage}}}let x=w%E;return x>0&&(w+=E-x),y.__size=w,y.__cache={},this}function g(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",y),b}function S(y){let b=y.target;b.removeEventListener("dispose",S);let w=o.indexOf(b.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(n[b.id]),delete n[b.id],delete s[b.id]}function A(){for(let y in n)r.deleteBuffer(n[y]);o=[],n={},s={}}return{bind:l,update:c,dispose:A}}var Cb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),rr=null;function Rb(){return rr===null&&(rr=new Rc(Cb,16,16,ts,oi),rr.name="DFG_LUT",rr.minFilter=si,rr.magFilter=si,rr.wrapS=Qn,rr.wrapT=Qn,rr.generateMipmaps=!1,rr.needsUpdate=!0),rr}var kh=class{constructor(e={}){let{canvas:t=Gm(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=$i}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let _=f,m=new Set([nh,ih,th]),g=new Set([$i,Wn,Do,Lo,$c,eh]),S=new Uint32Array(4),A=new Int32Array(4),y=new z,b=null,w=null,E=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,D=null,X=null,W=null,O=null;this._outputColorSpace=Vi;let H=0,U=0,Z=null,ee=-1,P=null,le=new Tt,_e=new Tt,je=null,qe=new Ne(0),He=0,K=t.width,oe=t.height,ne=1,Ae=null,ke=null,Te=new Tt(0,0,K,oe),lt=new Tt(0,0,K,oe),Me=!1,Ge=new Eo,Ye=!1,Xe=!1,Y=new Pt,ft=new z,xt=new Tt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function mt(){return Z===null?ne:1}let N=i;function Vt(M,F){return t.getContext(M,F)}try{let M={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",Be,!1),N===null){let F="webgl2";if(N=Vt(F,M),N===null)throw Vt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw Ve("WebGLRenderer: "+M.message),M}let We,R,v,B,V,J,he,ae,j,Q,de,Ee,pe,fe,ce,Pe,Ue,L,ue,$,me,ge,te;function re(){We=new US(N),We.init(),me=new Mb(N,We),R=new CS(N,We,e,me),v=new yb(N,We),R.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),X=N.createFramebuffer(),W=N.createFramebuffer(),O=N.createFramebuffer(),B=new zS(N),V=new ob,J=new Sb(N,We,v,V,R,me,B),he=new OS(C),ae=new Gx(N),ge=new ES(N,ae),j=new FS(N,ae,B,ge),Q=new VS(N,j,ae,ge,B),L=new kS(N,R,J),ce=new RS(V),de=new sb(C,he,We,R,ge,ce),Ee=new Eb(C,V),pe=new lb,fe=new pb(We),Ue=new wS(C,he,v,Q,p,l),Pe=new vb(C,Q,R),te=new Ab(N,B,R,v),ue=new AS(N,We,B),$=new BS(N,We,B),B.programs=de.programs,C.capabilities=R,C.extensions=We,C.properties=V,C.renderLists=pe,C.shadowMap=Pe,C.state=v,C.info=B}re(),_!==$i&&(T=new GS(_,t.width,t.height,a,n,s));let ie=new rd(C,N);this.xr=ie,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=We.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=We.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(M){M!==void 0&&(ne=M,this.setSize(K,oe,!1))},this.getSize=function(M){return M.set(K,oe)},this.setSize=function(M,F,q=!0){if(ie.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}K=M,oe=F,t.width=Math.floor(M*ne),t.height=Math.floor(F*ne),q===!0&&(t.style.width=M+"px",t.style.height=F+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(K*ne,oe*ne).floor()},this.setDrawingBufferSize=function(M,F,q){K=M,oe=F,ne=q,t.width=Math.floor(M*q),t.height=Math.floor(F*q),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(_===$i){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(le)},this.getViewport=function(M){return M.copy(Te)},this.setViewport=function(M,F,q,k){M.isVector4?Te.set(M.x,M.y,M.z,M.w):Te.set(M,F,q,k),v.viewport(le.copy(Te).multiplyScalar(ne).round())},this.getScissor=function(M){return M.copy(lt)},this.setScissor=function(M,F,q,k){M.isVector4?lt.set(M.x,M.y,M.z,M.w):lt.set(M,F,q,k),v.scissor(_e.copy(lt).multiplyScalar(ne).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(M){v.setScissorTest(Me=M)},this.setOpaqueSort=function(M){Ae=M},this.setTransparentSort=function(M){ke=M},this.getClearColor=function(M){return M.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,q=!0){let k=0;if(M){let G=!1;if(Z!==null){let xe=Z.texture.format;G=m.has(xe)}if(G){let xe=Z.texture.type,ve=g.has(xe),Se=Ue.getClearColor(),Re=Ue.getClearAlpha(),Ie=Se.r,Qe=Se.g,tt=Se.b;ve?(S[0]=Ie,S[1]=Qe,S[2]=tt,S[3]=Re,N.clearBufferuiv(N.COLOR,0,S)):(A[0]=Ie,A[1]=Qe,A[2]=tt,A[3]=Re,N.clearBufferiv(N.COLOR,0,A))}else k|=N.COLOR_BUFFER_BIT}F&&(k|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),D=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),Ue.dispose(),pe.dispose(),fe.dispose(),V.dispose(),he.dispose(),Q.dispose(),ge.dispose(),te.dispose(),de.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Dt),ie.removeEventListener("sessionend",St),ht.stop()};function Fe(M){M.preventDefault(),Bf("WebGLRenderer: Context Lost."),I=!0}function se(){Bf("WebGLRenderer: Context Restored."),I=!1;let M=B.autoReset,F=Pe.enabled,q=Pe.autoUpdate,k=Pe.needsUpdate,G=Pe.type;re(),B.autoReset=M,Pe.enabled=F,Pe.autoUpdate=q,Pe.needsUpdate=k,Pe.type=G}function Be(M){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ce(M){let F=M.target;F.removeEventListener("dispose",Ce),Je(F)}function Je(M){$t(M),V.remove(M)}function $t(M){let F=V.get(M).programs;F!==void 0&&(F.forEach(function(q){de.releaseProgram(q)}),M.isShaderMaterial&&de.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,q,k,G,xe){F===null&&(F=At);let ve=G.isMesh&&G.matrixWorld.determinantAffine()<0,Se=fi(M,F,q,k,G);v.setMaterial(k,ve);let Re=q.index,Ie=1;if(k.wireframe===!0){if(Re=j.getWireframeAttribute(q),Re===void 0)return;Ie=2}let Qe=q.drawRange,tt=q.attributes.position,Le=Qe.start*Ie,vt=(Qe.start+Qe.count)*Ie;xe!==null&&(Le=Math.max(Le,xe.start*Ie),vt=Math.min(vt,(xe.start+xe.count)*Ie)),Re!==null?(Le=Math.max(Le,0),vt=Math.min(vt,Re.count)):tt!=null&&(Le=Math.max(Le,0),vt=Math.min(vt,tt.count));let Jt=vt-Le;if(Jt<0||Jt===1/0)return;ge.setup(G,k,Se,q,Re);let Gt,Mt=ue;if(Re!==null&&(Gt=ae.get(Re),Mt=$,Mt.setIndex(Gt)),G.isMesh)k.wireframe===!0?(v.setLineWidth(k.wireframeLinewidth*mt()),Mt.setMode(N.LINES)):Mt.setMode(N.TRIANGLES);else if(G.isLine){let wi=k.linewidth;wi===void 0&&(wi=1),v.setLineWidth(wi*mt()),G.isLineSegments?Mt.setMode(N.LINES):G.isLineLoop?Mt.setMode(N.LINE_LOOP):Mt.setMode(N.LINE_STRIP)}else G.isPoints?Mt.setMode(N.POINTS):G.isSprite&&Mt.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(We.get("WEBGL_multi_draw"))Mt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let wi=G._multiDrawStarts,be=G._multiDrawCounts,on=G._multiDrawCount,dt=Re?ae.get(Re).bytesPerElement:1,wn=V.get(k).currentProgram.getUniforms();for(let Jn=0;Jn<on;Jn++)wn.setValue(N,"_gl_DrawID",Jn),Mt.render(wi[Jn]/dt,be[Jn])}else if(G.isInstancedMesh)Mt.renderInstances(Le,Jt,G.count);else if(q.isInstancedBufferGeometry){let wi=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,be=Math.min(q.instanceCount,wi);Mt.renderInstances(Le,Jt,be)}else Mt.render(Le,Jt)};function rt(M,F,q){M.transparent===!0&&M.side===Qi&&M.forceSinglePass===!1?(M.side=yi,M.needsUpdate=!0,Ht(M,F,q),M.side=Mr,M.needsUpdate=!0,Ht(M,F,q),M.side=Qi):Ht(M,F,q)}this.compile=function(M,F,q=null){q===null&&(q=M),w=fe.get(q),w.init(F),x.push(w),q.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),M!==q&&M.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights();let k=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let xe=G.material;if(xe)if(Array.isArray(xe))for(let ve=0;ve<xe.length;ve++){let Se=xe[ve];rt(Se,q,G),k.add(Se)}else rt(xe,q,G),k.add(xe)}),w=x.pop(),k},this.compileAsync=function(M,F,q=null){let k=this.compile(M,F,q);return new Promise(G=>{function xe(){if(k.forEach(function(ve){V.get(ve).currentProgram.isReady()&&k.delete(ve)}),k.size===0){G(M);return}setTimeout(xe,10)}We.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let It=null;function ui(M){It&&It(M)}function Dt(){ht.stop()}function St(){ht.start()}let ht=new _g;ht.setAnimationLoop(ui),typeof self<"u"&&ht.setContext(self),this.setAnimationLoop=function(M){It=M,ie.setAnimationLoop(M),M===null?ht.stop():ht.start()},ie.addEventListener("sessionstart",Dt),ie.addEventListener("sessionend",St),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(M,F);let q=ie.enabled===!0&&ie.isPresenting===!0,k=T!==null&&(Z===null||q)&&T.begin(C,Z);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,F,Z),w=fe.get(M,x.length),w.init(F),w.state.textureUnits=J.getTextureUnits(),x.push(w),Y.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ge.setFromProjectionMatrix(Y,Vn,F.reversedDepth),Xe=this.localClippingEnabled,Ye=ce.init(this.clippingPlanes,Xe),b=pe.get(M,E.length),b.init(),E.push(b),ie.enabled===!0&&ie.isPresenting===!0){let ve=C.xr.getDepthSensingMesh();ve!==null&&Bi(ve,F,-1/0,C.sortObjects)}Bi(M,F,0,C.sortObjects),b.finish(),C.sortObjects===!0&&b.sort(Ae,ke,F.reversedDepth),Ze=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ze&&Ue.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&ce.beginShadows();let G=w.state.shadowsArray;if(Pe.render(G,M,F),Ye===!0&&ce.endShadows(),(k&&T.hasRenderPass())===!1){let ve=b.opaque,Se=b.transmissive;if(w.setupLights(),F.isArrayCamera){let Re=F.cameras;if(Se.length>0)for(let Ie=0,Qe=Re.length;Ie<Qe;Ie++){let tt=Re[Ie];Ti(ve,Se,M,tt)}Ze&&Ue.render(M);for(let Ie=0,Qe=Re.length;Ie<Qe;Ie++){let tt=Re[Ie];Ct(b,M,tt,tt.viewport)}}else Se.length>0&&Ti(ve,Se,M,F),Ze&&Ue.render(M),Ct(b,M,F)}Z!==null&&U===0&&(J.updateMultisampleRenderTarget(Z),J.updateRenderTargetMipmap(Z)),k&&T.end(C),M.isScene===!0&&M.onAfterRender(C,M,F),ge.resetDefaultState(),ee=-1,P=null,x.pop(),x.length>0?(w=x[x.length-1],J.setTextureUnits(w.state.textureUnits),Ye===!0&&ce.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?b=E[E.length-1]:b=null,D!==null&&D.renderEnd()};function Bi(M,F,q,k){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ge.intersectsSprite(M)){k&&xt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Y);let ve=Q.update(M),Se=M.material;Se.visible&&b.push(M,ve,Se,q,xt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ge.intersectsObject(M))){let ve=Q.update(M),Se=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),xt.copy(M.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),xt.copy(ve.boundingSphere.center)),xt.applyMatrix4(M.matrixWorld).applyMatrix4(Y)),Array.isArray(Se)){let Re=ve.groups;for(let Ie=0,Qe=Re.length;Ie<Qe;Ie++){let tt=Re[Ie],Le=Se[tt.materialIndex];Le&&Le.visible&&b.push(M,ve,Le,q,xt.z,tt)}}else Se.visible&&b.push(M,ve,Se,q,xt.z,null)}}let xe=M.children;for(let ve=0,Se=xe.length;ve<Se;ve++)Bi(xe[ve],F,q,k)}function Ct(M,F,q,k){let{opaque:G,transmissive:xe,transparent:ve}=M;w.setupLightsView(q),Ye===!0&&ce.setGlobalState(C.clippingPlanes,q),k&&v.viewport(le.copy(k)),G.length>0&&zi(G,F,q),xe.length>0&&zi(xe,F,q),ve.length>0&&zi(ve,F,q),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ti(M,F,q,k){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let Le=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new Wt(1,1,{generateMipmaps:!0,type:Le?oi:$i,minFilter:$r,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace})}let xe=w.state.transmissionRenderTarget[k.id],ve=k.viewport||le;xe.setSize(ve.z*C.transmissionResolutionScale,ve.w*C.transmissionResolutionScale);let Se=C.getRenderTarget(),Re=C.getActiveCubeFace(),Ie=C.getActiveMipmapLevel();C.setRenderTarget(xe),C.getClearColor(qe),He=C.getClearAlpha(),He<1&&C.setClearColor(16777215,.5),C.clear(),Ze&&Ue.render(q);let Qe=C.toneMapping;C.toneMapping=Gn;let tt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),Ye===!0&&ce.setGlobalState(C.clippingPlanes,k),zi(M,q,k),J.updateMultisampleRenderTarget(xe),J.updateRenderTargetMipmap(xe),We.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let vt=0,Jt=F.length;vt<Jt;vt++){let Gt=F[vt],{object:Mt,geometry:wi,material:be,group:on}=Gt;if(be.side===Qi&&Mt.layers.test(k.layers)){let dt=be.side;be.side=yi,be.needsUpdate=!0,ei(Mt,q,k,wi,be,on),be.side=dt,be.needsUpdate=!0,Le=!0}}Le===!0&&(J.updateMultisampleRenderTarget(xe),J.updateRenderTargetMipmap(xe))}C.setRenderTarget(Se,Re,Ie),C.setClearColor(qe,He),tt!==void 0&&(k.viewport=tt),C.toneMapping=Qe}function zi(M,F,q){let k=F.isScene===!0?F.overrideMaterial:null;for(let G=0,xe=M.length;G<xe;G++){let ve=M[G],{object:Se,geometry:Re,group:Ie}=ve,Qe=ve.material;Qe.allowOverride===!0&&k!==null&&(Qe=k),Se.layers.test(q.layers)&&ei(Se,F,q,Re,Qe,Ie)}}function ei(M,F,q,k,G,xe){M.onBeforeRender(C,F,q,k,G,xe),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(C,F,q,k,M,xe),G.transparent===!0&&G.side===Qi&&G.forceSinglePass===!1?(G.side=yi,G.needsUpdate=!0,C.renderBufferDirect(q,F,k,G,M,xe),G.side=Mr,G.needsUpdate=!0,C.renderBufferDirect(q,F,k,G,M,xe),G.side=Qi):C.renderBufferDirect(q,F,k,G,M,xe),M.onAfterRender(C,F,q,k,G,xe)}function Ht(M,F,q){F.isScene!==!0&&(F=At);let k=V.get(M),G=w.state.lights,xe=w.state.shadowsArray,ve=G.state.version,Se=de.getParameters(M,G.state,xe,F,q,w.state.lightProbeGridArray),Re=de.getProgramCacheKey(Se),Ie=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;let Qe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=he.get(M.envMap||k.environment,Qe),k.envMapRotation=k.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",Ce),Ie=new Map,k.programs=Ie);let tt=Ie.get(Re);if(tt!==void 0){if(k.currentProgram===tt&&k.lightsStateVersion===ve)return Zn(M,Se),tt}else Se.uniforms=de.getUniforms(M),D!==null&&M.isNodeMaterial&&D.build(M,q,Se),M.onBeforeCompile(Se,C),tt=de.acquireProgram(Se,Re),Ie.set(Re,tt),k.uniforms=Se.uniforms;let Le=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=ce.uniform),Zn(M,Se),k.needsLights=Tn(M),k.lightsStateVersion=ve,k.needsLights&&(Le.ambientLightColor.value=G.state.ambient,Le.lightProbe.value=G.state.probe,Le.directionalLights.value=G.state.directional,Le.directionalLightShadows.value=G.state.directionalShadow,Le.spotLights.value=G.state.spot,Le.spotLightShadows.value=G.state.spotShadow,Le.rectAreaLights.value=G.state.rectArea,Le.ltc_1.value=G.state.rectAreaLTC1,Le.ltc_2.value=G.state.rectAreaLTC2,Le.pointLights.value=G.state.point,Le.pointLightShadows.value=G.state.pointShadow,Le.hemisphereLights.value=G.state.hemi,Le.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Le.spotLightMatrix.value=G.state.spotLightMatrix,Le.spotLightMap.value=G.state.spotLightMap,Le.pointShadowMatrix.value=G.state.pointShadowMatrix),k.lightProbeGrid=w.state.lightProbeGridArray.length>0,k.currentProgram=tt,k.uniformsList=null,tt}function ri(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=Uo.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Zn(M,F){let q=V.get(M);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function eo(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let q=0,k=M.length;q<k;q++){let G=M[q];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function fi(M,F,q,k,G){F.isScene!==!0&&(F=At),J.resetTextureUnits();let xe=F.fog,ve=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,Se=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:st.workingColorSpace,Re=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ie=he.get(k.envMap||ve,Re),Qe=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,tt=!!q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Le=!!q.morphAttributes.position,vt=!!q.morphAttributes.normal,Jt=!!q.morphAttributes.color,Gt=Gn;k.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Gt=C.toneMapping);let Mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,wi=Mt!==void 0?Mt.length:0,be=V.get(k),on=w.state.lights;if(Ye===!0&&(Xe===!0||M!==P)){let Rt=M===P&&k.id===ee;ce.setState(k,M,Rt)}let dt=!1;k.version===be.__version?(be.needsLights&&be.lightsStateVersion!==on.state.version||be.outputColorSpace!==Se||G.isBatchedMesh&&be.batching===!1||!G.isBatchedMesh&&be.batching===!0||G.isBatchedMesh&&be.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&be.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&be.instancing===!1||!G.isInstancedMesh&&be.instancing===!0||G.isSkinnedMesh&&be.skinning===!1||!G.isSkinnedMesh&&be.skinning===!0||G.isInstancedMesh&&be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&be.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&be.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&be.instancingMorph===!1&&G.morphTexture!==null||be.envMap!==Ie||k.fog===!0&&be.fog!==xe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ce.numPlanes||be.numIntersection!==ce.numIntersection)||be.vertexAlphas!==Qe||be.vertexTangents!==tt||be.morphTargets!==Le||be.morphNormals!==vt||be.morphColors!==Jt||be.toneMapping!==Gt||be.morphTargetsCount!==wi||!!be.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,be.__version=k.version);let wn=be.currentProgram;dt===!0&&(wn=Ht(k,F,G),D&&k.isNodeMaterial&&D.onUpdateProgram(k,wn,be));let Jn=!1,Ur=!1,to=!1,bt=wn.getUniforms(),Kt=be.uniforms;if(v.useProgram(wn.program)&&(Jn=!0,Ur=!0,to=!0),k.id!==ee&&(ee=k.id,Ur=!0),be.needsLights){let Rt=eo(w.state.lightProbeGridArray,G);be.lightProbeGrid!==Rt&&(be.lightProbeGrid=Rt,Ur=!0)}if(Jn||P!==M){v.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),bt.setValue(N,"projectionMatrix",M.projectionMatrix),bt.setValue(N,"viewMatrix",M.matrixWorldInverse);let Br=bt.map.cameraPosition;Br!==void 0&&Br.setValue(N,ft.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&bt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&bt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),P!==M&&(P=M,Ur=!0,to=!0)}if(be.needsLights&&(on.state.directionalShadowMap.length>0&&bt.setValue(N,"directionalShadowMap",on.state.directionalShadowMap,J),on.state.spotShadowMap.length>0&&bt.setValue(N,"spotShadowMap",on.state.spotShadowMap,J),on.state.pointShadowMap.length>0&&bt.setValue(N,"pointShadowMap",on.state.pointShadowMap,J)),G.isSkinnedMesh){bt.setOptional(N,G,"bindMatrix"),bt.setOptional(N,G,"bindMatrixInverse");let Rt=G.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),bt.setValue(N,"boneTexture",Rt.boneTexture,J))}G.isBatchedMesh&&(bt.setOptional(N,G,"batchingTexture"),bt.setValue(N,"batchingTexture",G._matricesTexture,J),bt.setOptional(N,G,"batchingIdTexture"),bt.setValue(N,"batchingIdTexture",G._indirectTexture,J),bt.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&bt.setValue(N,"batchingColorTexture",G._colorsTexture,J));let Fr=q.morphAttributes;if((Fr.position!==void 0||Fr.normal!==void 0||Fr.color!==void 0)&&L.update(G,q,wn),(Ur||be.receiveShadow!==G.receiveShadow)&&(be.receiveShadow=G.receiveShadow,bt.setValue(N,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(Kt.envMapIntensity.value=F.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=Rb()),Ur){if(bt.setValue(N,"toneMappingExposure",C.toneMappingExposure),be.needsLights&&Zt(Kt,to),xe&&k.fog===!0&&Ee.refreshFogUniforms(Kt,xe),Ee.refreshMaterialUniforms(Kt,k,ne,oe,w.state.transmissionRenderTarget[M.id]),be.needsLights&&be.lightProbeGrid){let Rt=be.lightProbeGrid;Kt.probesSH.value=Rt.texture,Kt.probesMin.value.copy(Rt.boundingBox.min),Kt.probesMax.value.copy(Rt.boundingBox.max),Kt.probesResolution.value.copy(Rt.resolution)}Uo.upload(N,ri(be),Kt,J)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Uo.upload(N,ri(be),Kt,J),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&bt.setValue(N,"center",G.center),bt.setValue(N,"modelViewMatrix",G.modelViewMatrix),bt.setValue(N,"normalMatrix",G.normalMatrix),bt.setValue(N,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){let Rt=k.uniformsGroups;for(let Br=0,io=Rt.length;Br<io;Br++){let Op=Rt[Br];te.update(Op,wn),te.bind(Op,wn)}}return wn}function Zt(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Tn(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(M,F,q){let k=V.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=F,V.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let q=V.get(M);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,q=0){Z=M,H=F,U=q;let k=null,G=!1,xe=!1;if(M){let Se=V.get(M);if(Se.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(N.FRAMEBUFFER,Se.__webglFramebuffer),le.copy(M.viewport),_e.copy(M.scissor),je=M.scissorTest,v.viewport(le),v.scissor(_e),v.setScissorTest(je),ee=-1;return}else if(Se.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(Se.__hasExternalTextures)J.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Qe=M.depthTexture;if(Se.__boundDepthTexture!==Qe){if(Qe!==null&&V.has(Qe)&&(M.width!==Qe.image.width||M.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}let Re=M.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(xe=!0);let Ie=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[F])?k=Ie[F][q]:k=Ie[F],G=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?k=V.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?k=Ie[q]:k=Ie,le.copy(M.viewport),_e.copy(M.scissor),je=M.scissorTest}else le.copy(Te).multiplyScalar(ne).floor(),_e.copy(lt).multiplyScalar(ne).floor(),je=Me;if(q!==0&&(k=X),v.bindFramebuffer(N.FRAMEBUFFER,k)&&v.drawBuffers(M,k),v.viewport(le),v.scissor(_e),v.setScissorTest(je),G){let Se=V.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Se.__webglTexture,q)}else if(xe){let Se=F;for(let Re=0;Re<M.textures.length;Re++){let Ie=V.get(M.textures[Re]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Re,Ie.__webglTexture,q,Se)}}else if(M!==null&&q!==0){let Se=V.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Se.__webglTexture,q)}ee=-1},this.readRenderTargetPixels=function(M,F,q,k,G,xe,ve,Se=0){if(!(M&&M.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(Re=Re[ve]),Re){v.bindFramebuffer(N.FRAMEBUFFER,Re);try{let Ie=M.textures[Se],Qe=Ie.format,tt=Ie.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Se),!R.textureFormatReadable(Qe)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(tt)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-k&&q>=0&&q<=M.height-G&&N.readPixels(F,q,k,G,me.convert(Qe),me.convert(tt),xe)}finally{let Ie=Z!==null?V.get(Z).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(M,F,q,k,G,xe,ve,Se=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(Re=Re[ve]),Re)if(F>=0&&F<=M.width-k&&q>=0&&q<=M.height-G){v.bindFramebuffer(N.FRAMEBUFFER,Re);let Ie=M.textures[Se],Qe=Ie.format,tt=Ie.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Se),!R.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Le=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Le),N.bufferData(N.PIXEL_PACK_BUFFER,xe.byteLength,N.STREAM_READ),N.readPixels(F,q,k,G,me.convert(Qe),me.convert(tt),0);let vt=Z!==null?V.get(Z).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,vt);let Jt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Xm(N,Jt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Le),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,xe),N.deleteBuffer(Le),N.deleteSync(Jt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,q=0){let k=Math.pow(2,-q),G=Math.floor(M.image.width*k),xe=Math.floor(M.image.height*k),ve=F!==null?F.x:0,Se=F!==null?F.y:0;J.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,ve,Se,G,xe),v.unbindTexture()},this.copyTextureToTexture=function(M,F,q=null,k=null,G=0,xe=0){let ve,Se,Re,Ie,Qe,tt,Le,vt,Jt,Gt=M.isCompressedTexture?M.mipmaps[xe]:M.image;if(q!==null)ve=q.max.x-q.min.x,Se=q.max.y-q.min.y,Re=q.isBox3?q.max.z-q.min.z:1,Ie=q.min.x,Qe=q.min.y,tt=q.isBox3?q.min.z:0;else{let Kt=Math.pow(2,-G);ve=Math.floor(Gt.width*Kt),Se=Math.floor(Gt.height*Kt),M.isDataArrayTexture?Re=Gt.depth:M.isData3DTexture?Re=Math.floor(Gt.depth*Kt):Re=1,Ie=0,Qe=0,tt=0}k!==null?(Le=k.x,vt=k.y,Jt=k.z):(Le=0,vt=0,Jt=0);let Mt=me.convert(F.format),wi=me.convert(F.type),be;F.isData3DTexture?(J.setTexture3D(F,0),be=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(J.setTexture2DArray(F,0),be=N.TEXTURE_2D_ARRAY):(J.setTexture2D(F,0),be=N.TEXTURE_2D),v.activeTexture(N.TEXTURE0),v.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);let on=v.getParameter(N.UNPACK_ROW_LENGTH),dt=v.getParameter(N.UNPACK_IMAGE_HEIGHT),wn=v.getParameter(N.UNPACK_SKIP_PIXELS),Jn=v.getParameter(N.UNPACK_SKIP_ROWS),Ur=v.getParameter(N.UNPACK_SKIP_IMAGES);v.pixelStorei(N.UNPACK_ROW_LENGTH,Gt.width),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Gt.height),v.pixelStorei(N.UNPACK_SKIP_PIXELS,Ie),v.pixelStorei(N.UNPACK_SKIP_ROWS,Qe),v.pixelStorei(N.UNPACK_SKIP_IMAGES,tt);let to=M.isDataArrayTexture||M.isData3DTexture,bt=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let Kt=V.get(M),Fr=V.get(F),Rt=V.get(Kt.__renderTarget),Br=V.get(Fr.__renderTarget);v.bindFramebuffer(N.READ_FRAMEBUFFER,Rt.__webglFramebuffer),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,Br.__webglFramebuffer);for(let io=0;io<Re;io++)to&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(M).__webglTexture,G,tt+io),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(F).__webglTexture,xe,Jt+io)),N.blitFramebuffer(Ie,Qe,ve,Se,Le,vt,ve,Se,N.DEPTH_BUFFER_BIT,N.NEAREST);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||V.has(M)){let Kt=V.get(M),Fr=V.get(F);v.bindFramebuffer(N.READ_FRAMEBUFFER,W),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,O);for(let Rt=0;Rt<Re;Rt++)to?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Kt.__webglTexture,G,tt+Rt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Kt.__webglTexture,G),bt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Fr.__webglTexture,xe,Jt+Rt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Fr.__webglTexture,xe),G!==0?N.blitFramebuffer(Ie,Qe,ve,Se,Le,vt,ve,Se,N.COLOR_BUFFER_BIT,N.NEAREST):bt?N.copyTexSubImage3D(be,xe,Le,vt,Jt+Rt,Ie,Qe,ve,Se):N.copyTexSubImage2D(be,xe,Le,vt,Ie,Qe,ve,Se);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else bt?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(be,xe,Le,vt,Jt,ve,Se,Re,Mt,wi,Gt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(be,xe,Le,vt,Jt,ve,Se,Re,Mt,Gt.data):N.texSubImage3D(be,xe,Le,vt,Jt,ve,Se,Re,Mt,wi,Gt):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,xe,Le,vt,ve,Se,Mt,wi,Gt.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,xe,Le,vt,Gt.width,Gt.height,Mt,Gt.data):N.texSubImage2D(N.TEXTURE_2D,xe,Le,vt,ve,Se,Mt,wi,Gt);v.pixelStorei(N.UNPACK_ROW_LENGTH,on),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,dt),v.pixelStorei(N.UNPACK_SKIP_PIXELS,wn),v.pixelStorei(N.UNPACK_SKIP_ROWS,Jn),v.pixelStorei(N.UNPACK_SKIP_IMAGES,Ur),xe===0&&F.generateMipmaps&&N.generateMipmap(be),v.unbindTexture()},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),v.unbindTexture()},this.resetState=function(){H=0,U=0,Z=null,v.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var zo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Gi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ib=new Kr(-1,1,1,-1,0,1),sd=class extends vi{constructor(){super(),this.setAttribute("position",new pi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pi([0,2,0,0,2,0],2))}},Db=new sd,or=class{constructor(e){this._mesh=new Ut(Db,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ib)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ko=class extends Gi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hn.clone(e.uniforms),this.material=new Nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new or(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var rl=class extends Gi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},Gh=class extends Gi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Wh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Oe);this._width=i.width,this._height=i.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:oi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ko(zo),this.copyPass.material.blending=Pn,this.timer=new Fa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}rl!==void 0&&(o instanceof rl?i=!0:o instanceof Gh&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Xh=class extends Gi{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ne}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=n}};var Tg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Vo=class r extends Gi{constructor(e,t=1,i,n){super(),this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Oe(e.x,e.y):new Oe(256,256),this.clearColor=new Ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Wt(s,o,{type:oi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Wt(s,o,{type:oi});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Wt(s,o,{type:oi});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),o=Math.round(o/2)}let a=Tg;this.highPassUniforms=hn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Nt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Oe(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=hn.clone(zo.uniforms),this.blendMaterial=new Nt({uniforms:this.copyUniforms,vertexShader:zo.vertexShader,fragmentShader:zo.fragmentShader,premultipliedAlpha:!0,blending:jr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ne,this._oldClearAlpha=1,this._basic=new Rn,this._fsQuad=new or(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new Oe(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(i*i))/i);return new Nt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Nt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Vo.BlurDirectionX=new Oe(1,0);Vo.BlurDirectionY=new Oe(0,1);var sl={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Oe(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},ol={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Oe(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Yh={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Oe(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};var qh=class extends Gi{constructor(){super(),this._edgesRT=new Wt(1,1,{depthBuffer:!1,type:oi}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Wt(1,1,{depthBuffer:!1,type:oi}),this._weightsRT.texture.name="SMAAPass.weights";let e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new mi,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=si,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;let i=new Image;i.src=this._getSearchTexture(),i.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new mi,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=i,this._searchTexture.magFilter=jt,this._searchTexture.minFilter=jt,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=hn.clone(sl.uniforms),this._materialEdges=new Nt({defines:Object.assign({},sl.defines),uniforms:this._uniformsEdges,vertexShader:sl.vertexShader,fragmentShader:sl.fragmentShader}),this._uniformsWeights=hn.clone(ol.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new Nt({defines:Object.assign({},ol.defines),uniforms:this._uniformsWeights,vertexShader:ol.vertexShader,fragmentShader:ol.fragmentShader}),this._uniformsBlend=hn.clone(Yh.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new Nt({uniforms:this._uniformsBlend,vertexShader:Yh.vertexShader,fragmentShader:Yh.fragmentShader}),this._fsQuad=new or(null)}render(e,t,i){this._uniformsEdges.tDiffuse.value=i.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=i.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}};var al={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Zh=class extends Gi{constructor(){super(),this.isOutputPass=!0,this.uniforms=hn.clone(al.uniforms),this.material=new Ro({name:al.name,uniforms:this.uniforms,vertexShader:al.vertexShader,fragmentShader:al.fragmentShader}),this._fsQuad=new or(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Va?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ha?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ga?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ps?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ya?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Wa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Er(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Lg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},dl={duration:.5,overwrite:!1,delay:0},bd,Si,Ot,Ln=1e8,Et=1/Ln,dd=Math.PI*2,Lb=dd/4,Nb=0,Ng=Math.sqrt,Ob=Math.cos,Ub=Math.sin,ci=function(e){return typeof e=="string"},Xt=function(e){return typeof e=="function"},Cr=function(e){return typeof e=="number"},ru=function(e){return typeof e>"u"},cr=function(e){return typeof e=="object"},nn=function(e){return e!==!1},Td=function(){return typeof window<"u"},Jh=function(e){return Xt(e)||ci(e)},Og=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ii=Array.isArray,Fb=/random\([^)]+\)/g,Bb=/,\s*/g,wg=/(?:-?\.?\d|\.)+/gi,wd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,od=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ed=/[+-]=-?[.\d]+/,zb=/[^,'"\[\]\s]+/gi,kb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,ar,pd,Ad,fn={},$h={},Ug,Fg=function(e){return($h=Go(e,fn))&&Di},su=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},pl=function(e,t){return!t&&console.warn(e)},Bg=function(e,t){return e&&(fn[e]=t)&&$h&&($h[e]=t)||fn},ml=function(){return 0},Vb={suppressEvents:!0,isStart:!0,kill:!1},Kh={suppressEvents:!0,kill:!1},Hb={suppressEvents:!0},Cd={},ss=[],md={},zg,en={},ad={},Eg=30,jh=[],Rd="",Pd=function(e){var t=e[0],i,n;if(cr(t)||Xt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=jh.length;n--&&!jh[n].targetTest(t););i=jh[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Nd(e[n],i)))||e.splice(n,1);return e},os=function(e){return e._gsap||Pd(Nn(e))[0]._gsap},Id=function(e,t,i){return(i=e[t])&&Xt(i)?e[t]():ru(i)&&e.getAttribute&&e.getAttribute(t)||i},Wi=function(e,t){return(e=e.split(",")).forEach(t)||e},Yt=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},Bs=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},Gb=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},eu=function(){var e=ss.length,t=ss.slice(0),i,n;for(md={},ss.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Dd=function(e){return!!(e._initted||e._startAt||e.add)},kg=function(e,t,i,n){ss.length&&!Si&&eu(),e.render(t,i,n||!!(Si&&t<0&&Dd(e))),ss.length&&!Si&&eu()},Vg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(zb).length<2?t:ci(e)?e.trim():e},Hg=function(e){return e},dn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Wb=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Go=function(e,t){for(var i in t)e[i]=t[i];return e},Ag=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=cr(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},tu=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},hl=function(e){var t=e.parent||Bt,i=e.keyframes?Wb(Ii(e.keyframes)):dn;if(nn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Xb=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Gg=function(e,t,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=e[n],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=o,t.parent=t._dp=e,t},ou=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[n]===t&&(e[n]=s),t._next=t._prev=t.parent=null},as=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ns=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Yb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},gd=function(e,t,i,n){return e._startAt&&(Si?e._startAt.revert(Kh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},qb=function r(e){return!e||e._ts&&r(e.parent)},Cg=function(e){return e._repeat?Wo(e._tTime,e=e.duration()+e._rDelay)*e:0},Wo=function(e,t){var i=Math.floor(e=Ft(e/t));return e&&i===e?i-1:i},iu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},au=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},lu=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ft(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),au(e),i._dirty||Ns(i,e)),e},Wg=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=iu(e.rawTime(),t),(!t._dur||xl(0,t.totalDuration(),i)-t._tTime>Et)&&t.render(i,!0)),Ns(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Et}},lr=function(e,t,i,n){return t.parent&&as(t),t._start=Ft((Cr(i)?i:i||e!==Bt?Dn(e,i,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Gg(e,t,"_first","_last",e._sort?"_start":0),_d(t)||(e._recent=t),n||Wg(e,t),e._ts<0&&lu(e,e._tTime),e},Xg=function(e,t){return(fn.ScrollTrigger||su("scrollTrigger",t))&&fn.ScrollTrigger.create(t,e)},Yg=function(e,t,i,n,s){if(Fd(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Si&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&zg!==tn.frame)return ss.push(e),e._lazy=[s,n],1},Zb=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},_d=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Jb=function(e,t,i,n){var s=e.ratio,o=t<0||!t&&(!e._start&&Zb(e)&&!(!e._initted&&_d(e))||(e._ts<0||e._dp._ts<0)&&!_d(e))?0:1,a=e._rDelay,l=0,c,h,d;if(a&&e._repeat&&(l=xl(0,e._tDur,t),h=Wo(l,a),e._yoyo&&h&1&&(o=1-o),h!==Wo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Si||n||e._zTime===Et||!t&&e._zTime){if(!e._initted&&Yg(e,t,n,i,l))return;for(d=e._zTime,e._zTime=t||(i?Et:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&gd(e,t,i,!0),e._onUpdate&&!i&&un(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&un(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&as(e,1),!i&&!Si&&(un(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Kb=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Xo=function(e,t,i,n){var s=e._repeat,o=Ft(t)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ft(o*(s+1)+e._rDelay*s):o,a>0&&!n&&lu(e,e._tTime=e._tDur*a),e.parent&&au(e),i||Ns(e.parent,e),e},Rg=function(e){return e instanceof Pi?Ns(e):Xo(e,e._dur)},jb={_start:0,endTime:ml,totalDuration:ml},Dn=function r(e,t,i){var n=e.labels,s=e._recent||jb,o=e.duration()>=Ln?s.endTime(!1):e._dur,a,l,c;return ci(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in n||(n[t]=o),n[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Ii(i)?i[0]:i).totalDuration()),a>1?r(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},ul=function(e,t,i){var n=Cr(t[1]),s=(n?2:1)+(e<2?0:1),o=t[s],a,l;if(n&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=nn(l.vars.inherit)&&l.parent;o.immediateRender=nn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Qt(t[0],o,t[s+1])},ls=function(e,t){return e||e===0?t(e):t},xl=function(e,t,i){return i<e?e:i>t?t:i},Mi=function(e,t){return!ci(e)||!(t=kb.exec(e))?"":t[1]},Qb=function(e,t,i){return ls(i,function(n){return xl(e,t,n)})},xd=[].slice,qg=function(e,t){return e&&cr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&cr(e[0]))&&!e.nodeType&&e!==ar},$b=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var s;return ci(n)&&!t||qg(n,1)?(s=i).push.apply(s,Nn(n)):i.push(n)})||i},Nn=function(e,t,i){return Ot&&!t&&Ot.selector?Ot.selector(e):ci(e)&&!i&&(pd||!Yo())?xd.call((t||Ad).querySelectorAll(e),0):Ii(e)?$b(e,i):qg(e)?xd.call(e,0):e?[e]:[]},vd=function(e){return e=Nn(e)[0]||pl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Nn(t,i.querySelectorAll?i:i===e?pl("Invalid scope")||Ad.createElement("div"):e)}},Zg=function(e){return e.sort(function(){return .5-Math.random()})},Jg=function(e){if(Xt(e))return e;var t=cr(e)?e:{each:e},i=Os(t.ease),n=t.from||0,s=parseFloat(t.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=t.axis,h=n,d=n;return ci(n)?h=d={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],d=n[1]),function(u,f,p){var _=(p||t).length,m=o[_],g,S,A,y,b,w,E,x,T;if(!m){if(T=t.grid==="auto"?0:(t.grid||[1,Ln])[1],!T){for(E=-Ln;E<(E=p[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(m=o[_]=[],g=l?Math.min(T,_)*h-.5:n%T,S=T===Ln?0:l?_*d/T-.5:n/T|0,E=0,x=Ln,w=0;w<_;w++)A=w%T-g,y=S-(w/T|0),m[w]=b=c?Math.abs(c==="y"?y:A):Ng(A*A+y*y),b>E&&(E=b),b<x&&(x=b);n==="random"&&Zg(m),m.max=E-x,m.min=x,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(n==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Mi(t.amount||t.each)||0,i=i&&_<0?f1(i):i}return _=(m[u]-m.min)/m.max||0,Ft(m.b+(i?i(_):_)*m.v)+m.u}},yd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Ft(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Cr(i)?0:Mi(i))}},Kg=function(e,t){var i=Ii(e),n,s;return!i&&cr(e)&&(n=i=e.radius||Ln,e.values?(e=Nn(e.values),(s=!Cr(e[0]))&&(n*=n)):e=yd(e.increment)),ls(t,i?Xt(e)?function(o){return s=e(o),Math.abs(s-o)<=n?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ln,h=0,d=e.length,u,f;d--;)s?(u=e[d].x-a,f=e[d].y-l,u=u*u+f*f):u=Math.abs(e[d]-a),u<c&&(c=u,h=d);return h=!n||c<=n?e[h]:o,s||h===o||Cr(o)?h:h+Mi(o)}:yd(e))},jg=function(e,t,i,n){return ls(Ii(e)?!t:i===!0?!!(i=0):!n,function(){return Ii(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},e1=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(s,o){return o(s)},n)}},t1=function(e,t){return function(i){return e(parseFloat(i))+(t||Mi(i))}},i1=function(e,t,i){return $g(e,t,0,1,i)},Qg=function(e,t,i){return ls(i,function(n){return e[~~t(n)]})},n1=function r(e,t,i){var n=t-e;return Ii(e)?Qg(e,r(0,e.length),t):ls(i,function(s){return(n+(s-e)%n)%n+e})},r1=function r(e,t,i){var n=t-e,s=n*2;return Ii(e)?Qg(e,r(0,e.length-1),t):ls(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>n?s-o:o)})},qo=function(e){return e.replace(Fb,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Bb);return jg(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},$g=function(e,t,i,n,s){var o=t-e,a=n-i;return ls(s,function(l){return i+((l-e)/o*a||0)})},s1=function r(e,t,i,n){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=ci(e),a={},l,c,h,d,u;if(i===!0&&(n=1)&&(i=null),o)e={p:e},t={p:t};else if(Ii(e)&&!Ii(t)){for(h=[],d=e.length,u=d-2,c=1;c<d;c++)h.push(r(e[c-1],e[c]));d--,s=function(p){p*=d;var _=Math.min(u,~~p);return h[_](p-_)},i=t}else n||(e=Go(Ii(e)?[]:{},e));if(!h){for(l in t)Od.call(a,e,l,"get",t[l]);s=function(p){return kd(p,a)||(o?e.p:e)}}}return ls(i,s)},Pg=function(e,t,i){var n=e.labels,s=Ln,o,a,l;for(o in n)a=n[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},un=function(e,t,i){var n=e.vars,s=n[t],o=Ot,a=e._ctx,l,c,h;if(s)return l=n[t+"Params"],c=n.callbackScope||e,i&&ss.length&&eu(),a&&(Ot=a),h=l?s.apply(c,l):s.call(c),Ot=o,h},ll=function(e){return as(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Si),e.progress()<1&&un(e,"onInterrupt"),e},Ho,e0=[],t0=function(e){if(e)if(e=!e.name&&e.default||e,Td()||e.headless){var t=e.name,i=Xt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,s={init:ml,render:kd,add:Od,kill:M1,modifier:S1,rawVars:0},o={targetTest:0,get:0,getSetter:cu,aliases:{},register:0};if(Yo(),e!==n){if(en[t])return;dn(n,dn(tu(e,s),o)),Go(n.prototype,Go(s,tu(e,o))),en[n.prop=t]=n,e.targetTest&&(jh.push(n),Cd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Bg(t,n),e.register&&e.register(Di,n,Xi)}else e0.push(e)},wt=255,cl={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},ld=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*wt+.5|0},i0=function(e,t,i){var n=e?Cr(e)?[e>>16,e>>8&wt,e&wt]:0:cl.black,s,o,a,l,c,h,d,u,f,p;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),cl[e])n=cl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&wt,n&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(n=p=e.match(wg),!t)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,n.length>3&&(n[3]*=1),n[0]=ld(l+1/3,s,o),n[1]=ld(l,s,o),n[2]=ld(l-1/3,s,o);else if(~e.indexOf("="))return n=e.match(wd),i&&n.length<4&&(n[3]=1),n}else n=e.match(wg)||cl.transparent;n=n.map(Number)}return t&&!p&&(s=n[0]/wt,o=n[1]/wt,a=n[2]/wt,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},n0=function(e){var t=[],i=[],n=-1;return e.split(Ar).forEach(function(s){var o=s.match(Fs)||[];t.push.apply(t,o),i.push(n+=o.length+1)}),t.c=i,t},Ig=function(e,t,i){var n="",s=(e+n).match(Ar),o=t?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return e;if(s=s.map(function(u){return(u=i0(u,t,1))&&o+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),i&&(h=n0(e),l=i.c,l.join(n)!==h.c.join(n)))for(c=e.replace(Ar,"1").split(Fs),d=c.length-1;a<d;a++)n+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!c)for(c=e.split(Ar),d=c.length-1;a<d;a++)n+=c[a]+s[a];return n+c[d]},Ar=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in cl)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),o1=/hsl[a]?\(/,Ld=function(e){var t=e.join(" "),i;if(Ar.lastIndex=0,Ar.test(t))return i=o1.test(t),e[1]=Ig(e[1],i),e[0]=Ig(e[0],i,n0(e[1])),!0},gl,tn=(function(){var r=Date.now,e=500,t=33,i=r(),n=i,s=1e3/240,o=s,a=[],l,c,h,d,u,f,p=function _(m){var g=r()-n,S=m===!0,A,y,b,w;if((g>e||g<0)&&(i+=g-t),n+=g,b=n-i,A=b-o,(A>0||S)&&(w=++d.frame,u=b-d.time*1e3,d.time=b=b/1e3,o+=A+(A>=s?4:s-A),y=1),S||(l=c(_)),y)for(f=0;f<a.length;f++)a[f](b,u,w,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Ug&&(!pd&&Td()&&(ar=pd=window,Ad=ar.document||{},fn.gsap=Di,(ar.gsapVersions||(ar.gsapVersions=[])).push(Di.version),Fg($h||ar.GreenSockGlobals||!ar.gsap&&ar||{}),e0.forEach(t0)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},gl=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),gl=0,c=ml},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,g,S){var A=g?function(y,b,w,E){m(y,b,w,E),d.remove(A)}:m;return d.remove(m),a[S?"unshift":"push"](A),Yo(),A},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),Yo=function(){return!gl&&tn.wake()},ut={},a1=/^[\d.\-M][\d.\-,\s]/,l1=/["']/g,c1=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[n]=isNaN(c)?c.replace(l1,"").trim():+c,n=l.substr(a+1).trim();return t},h1=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},u1=function(e){var t=(e+"").split("("),i=ut[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[c1(t[1])]:h1(e).split(",").map(Vg)):ut._CE&&a1.test(e)?ut._CE("",e):i},f1=function(e){return function(t){return 1-e(1-t)}},Os=function(e,t){return e&&(Xt(e)?e:ut[e]||u1(e))||t},zs=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:n},o;return Wi(e,function(a){ut[a]=fn[a]=s,ut[o=a.toLowerCase()]=i;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},r0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},cd=function r(e,t,i){var n=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/dd*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*Ub((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:r0(a);return s=dd/s,l.config=function(c,h){return r(e,c,h)},l},hd=function r(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},n=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:r0(i);return n.config=function(s){return r(e,s)},n};Wi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;zs(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;zs("Elastic",cd("in"),cd("out"),cd());(function(r,e){var t=1/e,i=2*t,n=2.5*t,s=function(a){return a<t?r*a*a:a<i?r*Math.pow(a-1.5/e,2)+.75:a<n?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};zs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);zs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});zs("Circ",function(r){return-(Ng(1-r*r)-1)});zs("Sine",function(r){return r===1?1:-Ob(r*Lb)+1});zs("Back",hd("in"),hd("out"),hd());ut.SteppedEase=ut.steps=fn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),s=t?1:0,o=1-Et;return function(a){return((n*xl(0,o,a)|0)+s)*i}}};dl.ease=ut["quad.out"];Wi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Rd+=r+","+r+"Params,"});var Nd=function(e,t){this.id=Nb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Id,this.set=t?t.getSetter:cu},_l=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Xo(this,+t.duration,1,1),this.data=t.data,Ot&&(this._ctx=Ot,Ot.data.push(this)),gl||tn.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Xo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Yo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(lu(this,i),!s._dp||s.parent||Wg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&lr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Et||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),kg(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Cg(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Cg(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?Wo(this._tTime,s)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?iu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Et?0:this._rts,this.totalTime(xl(-Math.abs(this._delay),this.totalDuration(),s),n!==!1),au(this),Yb(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Yo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ft(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&lr(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(nn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?iu(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Hb);var n=Si;return Si=i,Dd(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Si=n,this},e.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Rg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Rg(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Dn(this,i),nn(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,nn(n)),this._dur||(this._zTime=-Et),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-Et)},e.eventCallback=function(i,n,s){var o=this.vars;return arguments.length>1?(n?(o[i]=n,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},e.then=function(i){var n=this,s=n._prom;return new Promise(function(o){var a=Xt(i)?i:Hg,l=function(){var h=n.then;n.then=null,s&&s(),Xt(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=h),o(a),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){ll(this)},r})();dn(_l.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var Pi=(function(r){Lg(e,r);function e(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=nn(i.sortChildren),Bt&&lr(i.parent||Bt,Er(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Xg(Er(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(n,s,o){return ul(0,arguments,this),this},t.from=function(n,s,o){return ul(1,arguments,this),this},t.fromTo=function(n,s,o,a){return ul(2,arguments,this),this},t.set=function(n,s,o){return s.duration=0,s.parent=this,hl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(n,s,Dn(this,o),1),this},t.call=function(n,s,o){return lr(this,Qt.delayedCall(0,n,s),o)},t.staggerTo=function(n,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Qt(n,o,Dn(this,l)),this},t.staggerFrom=function(n,s,o,a,l,c,h){return o.runBackwards=1,hl(o).immediateRender=nn(o.immediateRender),this.staggerTo(n,s,o,a,l,c,h)},t.staggerFromTo=function(n,s,o,a,l,c,h,d){return a.startAt=o,hl(a).immediateRender=nn(a.immediateRender),this.staggerTo(n,s,a,l,c,h,d)},t.render=function(n,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:Ft(n),d=this._zTime<0!=n<0&&(this._initted||!c),u,f,p,_,m,g,S,A,y,b,w,E;if(this!==Bt&&h>l&&n>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,n+=this._time-a),u=h,y=this._start,A=this._ts,g=!A,d&&(c||(a=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,s,o);if(u=Ft(h%m),h===l?(_=this._repeat,u=c):(b=Ft(h/m),_=~~b,_&&_===b&&(u=c,_--),u>c&&(u=c)),b=Wo(this._tTime,m),!a&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),w&&_&1&&(u=c-u,E=1),_!==b&&!this._lock){var x=w&&b&1,T=x===(w&&_&1);if(_<b&&(x=!x),a=x?0:h%c?c:h,this._lock=1,this.render(a||(E?0:Ft(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&un(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,b=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Kb(this,Ft(a),Ft(u)),S&&(h-=u-(u=S._start))),this._tTime=h,this._time=u,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&h&&c&&!s&&!b&&(un(this,"onStart"),this._tTime!==h))return this;if(u>=a&&n>=0)for(f=this._first;f;){if(p=f._next,(f._act||u>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(n,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!g){S=0,p&&(h+=this._zTime=-Et);break}}f=p}else{f=this._last;for(var C=n<0?n:u;f;){if(p=f._prev,(f._act||C<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(n,s,o);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,o||Si&&Dd(f)),u!==this._time||!this._ts&&!g){S=0,p&&(h+=this._zTime=C?-Et:Et);break}}f=p}}if(S&&!s&&(this.pause(),S.render(u>=a?0:-Et)._zTime=u>=a?1:-1,this._ts))return this._start=y,au(this),this.render(n,s,o);this._onUpdate&&!s&&un(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&as(this,1),!s&&!(n<0&&!a)&&(h||a||!l)&&(un(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,s){var o=this;if(Cr(s)||(s=Dn(this,s,n)),!(n instanceof _l)){if(Ii(n))return n.forEach(function(a){return o.add(a,s)}),this;if(ci(n))return this.addLabel(n,s);if(Xt(n))n=Qt.delayedCall(0,n);else return this}return this!==n?lr(this,n,s):this},t.getChildren=function(n,s,o,a){n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ln);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qt?s&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(n){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===n)return s[o]},t.remove=function(n){return ci(n)?this.removeLabel(n):Xt(n)?this.killTweensOf(n):(n.parent===this&&ou(this,n),n===this._recent&&(this._recent=this._last),Ns(this))},t.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(tn.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},t.addLabel=function(n,s){return this.labels[n]=Dn(this,s),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,s,o){var a=Qt.delayedCall(0,s||ml,o);return a.data="isPause",this._hasPause=1,lr(this,a,Dn(this,n))},t.removePause=function(n){var s=this._first;for(n=Dn(this,n);s;)s._start===n&&s.data==="isPause"&&as(s),s=s._next},t.killTweensOf=function(n,s,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)rs!==a[l]&&a[l].kill(n,s);return this},t.getTweensOf=function(n,s){for(var o=[],a=Nn(n),l=this._first,c=Cr(s),h;l;)l instanceof Qt?Gb(l._targets,a)&&(c?(!rs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(n,s){s=s||{};var o=this,a=Dn(o,n),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,p=Qt.to(o,dn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Et,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&Xo(p,m,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,d||[])}},s));return u?p.render(0):p},t.tweenFromTo=function(n,s,o){return this.tweenTo(s,dn({startAt:{time:Dn(this,n)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Pg(this,Dn(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Pg(this,Dn(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(n,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(n=Ft(n);a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=n);return Ns(this)},t.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Ns(this)},t.totalDuration=function(n){var s=0,o=this,a=o._last,l=Ln,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,lr(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ft(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Xo(o,o===Bt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(Bt._ts&&(kg(Bt,iu(n,Bt)),zg=tn.frame),tn.frame>=Eg){Eg+=rn.autoSleep||120;var s=Bt._first;if((!s||!s._ts)&&rn.autoSleep&&tn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||tn.sleep()}}},e})(_l);dn(Pi.prototype,{_lock:0,_hasPause:0,_forcing:0});var d1=function(e,t,i,n,s,o,a){var l=new Xi(this._pt,e,t,0,1,zd,null,s),c=0,h=0,d,u,f,p,_,m,g,S;for(l.b=i,l.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=qo(n)),o&&(S=[i,n],o(S,e,t),i=S[0],n=S[1]),u=i.match(od)||[];d=od.exec(n);)p=d[0],_=n.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:p.charAt(1)==="="?Bs(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=od.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(Ed.test(n)||g)&&(l.e=0),this._pt=l,l},Od=function(e,t,i,n,s,o,a,l,c,h){Xt(n)&&(n=n(s||0,e,o));var d=e[t],u=i!=="get"?i:Xt(d)?c?e[t.indexOf("set")||!Xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Xt(d)?c?x1:a0:Bd,p;if(ci(n)&&(~n.indexOf("random(")&&(n=qo(n)),n.charAt(1)==="="&&(p=Bs(u,n)+(Mi(u)||0),(p||p===0)&&(n=p))),!h||u!==n||Sd)return!isNaN(u*n)&&n!==""?(p=new Xi(this._pt,e,t,+u||0,n-(u||0),typeof d=="boolean"?y1:l0,0,f),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!d&&!(t in e)&&su(t,n),d1.call(this,e,t,u,n,f,l||rn.stringFilter,c))},p1=function(e,t,i,n,s){if(Xt(e)&&(e=fl(e,s,t,i,n)),!cr(e)||e.style&&e.nodeType||Ii(e)||Og(e))return ci(e)?fl(e,s,t,i,n):e;var o={},a;for(a in e)o[a]=fl(e[a],s,t,i,n);return o},Ud=function(e,t,i,n,s,o){var a,l,c,h;if(en[e]&&(a=new en[e]).init(s,a.rawVars?t[e]:p1(t[e],n,s,o,i),i,n,o)!==!1&&(i._pt=l=new Xi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ho))for(c=i._ptLookup[i._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},rs,Sd,Fd=function r(e,t,i){var n=e.vars,s=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,d=n.yoyoEase,u=n.keyframes,f=n.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,S=g&&g.data==="nested"?g.vars.targets:m,A=e._overwrite==="auto"&&!bd,y=e.timeline,b=n.easeReverse||d,w,E,x,T,C,I,D,X,W,O,H,U,Z;if(y&&(!u||!s)&&(s="none"),e._ease=Os(s,dl.ease),e._rEase=b&&(Os(b)||e._ease),e._from=!y&&!!n.runBackwards,e._from&&(e.ratio=1),!y||u&&!n.stagger){if(X=m[0]?os(m[0]).harness:0,U=X&&n[X.prop],w=tu(n,Cd),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&p?Kh:Vb),_._lazy=0),o){if(as(e._startAt=Qt.set(m,dn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&nn(l),startAt:null,delay:0,onUpdate:c&&function(){return un(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Si||!a&&!f)&&e._startAt.revert(Kh),a&&p&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&p&&!_){if(t&&(a=!1),x=dn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&nn(l),immediateRender:a,stagger:0,parent:g},w),U&&(x[X.prop]=U),as(e._startAt=Qt.set(m,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Si?e._startAt.revert(Kh):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&nn(l)||l&&!p,E=0;E<m.length;E++){if(C=m[E],D=C._gsap||Pd(m)[E]._gsap,e._ptLookup[E]=O={},md[D.id]&&ss.length&&eu(),H=S===m?E:S.indexOf(C),X&&(W=new X).init(C,U||w,e,H,S)!==!1&&(e._pt=T=new Xi(e._pt,C,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(ee){O[ee]=T}),W.priority&&(I=1)),!X||U)for(x in w)en[x]&&(W=Ud(x,w,e,H,C,S))?W.priority&&(I=1):O[x]=T=Od.call(e,C,x,"get",w[x],H,S,0,n.stringFilter);e._op&&e._op[E]&&e.kill(C,e._op[E]),A&&e._pt&&(rs=e,Bt.killTweensOf(C,O,e.globalTime(t)),Z=!e.parent,rs=0),e._pt&&l&&(md[D.id]=1)}I&&Vd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,u&&t<=0&&y.render(Ln,!0,!0)},m1=function(e,t,i,n,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,u,f;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(h=u[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Sd=1,e.vars[t]="+=0",Fd(e,a),Sd=0,l?pl(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(n||n===0)&&!s?n:h.s+(n||0)+o*h.c,h.c=i-h.s,d.e&&(d.e=Yt(i)+Mi(d.e)),d.b&&(d.b=h.s+Mi(d.b))},g1=function(e,t){var i=e[0]?os(e[0]).harness:0,n=i&&i.aliases,s,o,a,l;if(!n)return t;s=Go({},t);for(o in n)if(o in s)for(l=n[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},_1=function(e,t,i,n){var s=t.ease||n||"power1.inOut",o,a;if(Ii(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},fl=function(e,t,i,n,s){return Xt(e)?e.call(t,i,n,s):ci(e)&&~e.indexOf("random(")?qo(e):e},s0=Rd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",o0={};Wi(s0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return o0[r]=1});var Qt=(function(r){Lg(e,r);function e(i,n,s,o){var a;typeof n=="number"&&(s.duration=n,n=s,s=null),a=r.call(this,o?n:hl(n))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=n.parent||Bt,S=(Ii(i)||Og(i)?Cr(i[0]):"length"in n)?[i]:Nn(i),A,y,b,w,E,x,T,C;if(a._targets=S.length?Pd(S):pl("GSAP target "+i+" not found. https://gsap.com",!rn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||u||Jh(c)||Jh(h)){n=a.vars;var I=n.easeReverse||n.yoyoEase;if(A=a.timeline=new Pi({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:S}),A.kill(),A.parent=A._dp=Er(a),A._start=0,u||Jh(c)||Jh(h)){if(w=S.length,T=u&&Jg(u),cr(u))for(E in u)~s0.indexOf(E)&&(C||(C={}),C[E]=u[E]);for(y=0;y<w;y++)b=tu(n,o0),b.stagger=0,I&&(b.easeReverse=I),C&&Go(b,C),x=S[y],b.duration=+fl(c,Er(a),y,x,S),b.delay=(+fl(h,Er(a),y,x,S)||0)-a._delay,!u&&w===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),A.to(x,b,T?T(y,x,S):0),A._ease=ut.none;A.duration()?c=h=0:a.timeline=0}else if(p){hl(dn(A.vars.defaults,{ease:"none"})),A._ease=Os(p.ease||n.ease||"none");var D=0,X,W,O;if(Ii(p))p.forEach(function(H){return A.to(S,H,">")}),A.duration();else{b={};for(E in p)E==="ease"||E==="easeEach"||_1(E,p[E],b,p.easeEach);for(E in b)for(X=b[E].sort(function(H,U){return H.t-U.t}),D=0,y=0;y<X.length;y++)W=X[y],O={ease:W.e,duration:(W.t-(y?X[y-1].t:0))/100*c},O[E]=W.v,A.to(S,O,D),D+=O.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||a.duration(c=A.duration())}else a.timeline=0;return f===!0&&!bd&&(rs=Er(a),Bt.killTweensOf(S),rs=0),lr(g,Er(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(d||!c&&!p&&a._start===Ft(g._time)&&nn(d)&&qb(Er(a))&&g.data!=="nested")&&(a._tTime=-Et,a.render(Math.max(0,-h)||0)),m&&Xg(Er(a),m),a}var t=e.prototype;return t.render=function(n,s,o){var a=this._time,l=this._tDur,c=this._dur,h=n<0,d=n>l-Et&&!h?l:n<Et?0:n,u,f,p,_,m,g,S,A;if(!c)Jb(this,n,s,o);else if(d!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,A=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+n,s,o);if(u=Ft(d%_),d===l?(p=this._repeat,u=c):(m=Ft(d/_),p=~~m,p&&p===m?(u=c,p--):u>c&&(u=c)),g=this._yoyo&&p&1,g&&(u=c-u),m=Wo(this._tTime,_),u===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Ft(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(Yg(this,h?n:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(n,s,o)}if(this._rEase){var y=u<a;if(y!==this._inv){var b=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(y?-1:1)/b:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(u/c);if(this._from&&(this.ratio=S=1-S),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(un(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;A&&A.render(n<0?n:A._dur*A._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(h&&gd(this,n,s,o),un(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&un(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&gd(this,n,!0,!0),(n||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&as(this,1),!s&&!(h&&!a)&&(d||a||g)&&(un(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},t.resetTo=function(n,s,o,a,l){gl||tn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Fd(this,c),h=this._ease(c/this._dur),m1(this,n,s,o,a,h,c,l)?this.resetTo(n,s,o,a,1):(lu(this,0),this.parent||Gg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ll(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Si),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,rs&&rs.vars.overwrite!==!0)._first||ll(this),this.parent&&o!==this.timeline.totalDuration()&&Xo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Nn(n):a,c=this._ptLookup,h=this._pt,d,u,f,p,_,m,g;if((!s||s==="all")&&Xb(a,l))return s==="all"&&(this._pt=0),ll(this);for(d=this._op=this._op||[],s!=="all"&&(ci(s)&&(_={},Wi(s,function(S){return _[S]=1}),s=_),s=g1(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],s==="all"?(d[g]=s,p=u,f={}):(f=d[g]=d[g]||{},p=s);for(_ in p)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ou(this,m,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&ll(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return ul(1,arguments)},e.delayedCall=function(n,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(n,s,o){return ul(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,o){return Bt.killTweensOf(n,s,o)},e})(_l);dn(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wi("staggerTo,staggerFrom,staggerFromTo",function(r){Qt[r]=function(){var e=new Pi,t=xd.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Bd=function(e,t,i){return e[t]=i},a0=function(e,t,i){return e[t](i)},x1=function(e,t,i,n){return e[t](n.fp,i)},v1=function(e,t,i){return e.setAttribute(t,i)},cu=function(e,t){return Xt(e[t])?a0:ru(e[t])&&e.setAttribute?v1:Bd},l0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},y1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},zd=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},kd=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},S1=function(e,t,i,n){for(var s=this._pt,o;s;)o=s._next,s.p===n&&s.modifier(e,t,i),s=o},M1=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?ou(this,t,"_pt"):t.dep||(i=1),t=n;return!i},b1=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Vd=function(e){for(var t=e._pt,i,n,s,o;t;){for(i=t._next,n=s;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:o)?t._prev._next=t:s=t,(t._next=n)?n._prev=t:o=t,t=i}e._pt=s},Xi=(function(){function r(t,i,n,s,o,a,l,c,h){this.t=i,this.s=s,this.c=o,this.p=n,this.r=a||l0,this.d=l||this,this.set=c||Bd,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=b1,this.m=i,this.mt=s,this.tween=n},r})();Wi(Rd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Cd[r]=1});fn.TweenMax=fn.TweenLite=Qt;fn.TimelineLite=fn.TimelineMax=Pi;Bt=new Pi({sortChildren:!1,defaults:dl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});rn.stringFilter=Ld;var Us=[],Qh={},T1=[],Dg=0,w1=0,ud=function(e){return(Qh[e]||T1).map(function(t){return t()})},Md=function(){var e=Date.now(),t=[];e-Dg>2&&(ud("matchMediaInit"),Us.forEach(function(i){var n=i.queries,s=i.conditions,o,a,l,c;for(a in n)o=ar.matchMedia(n[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),ud("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Dg=e,ud("matchMedia"))},c0=(function(){function r(t,i){this.selector=i&&vd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=w1++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,n,s){Xt(i)&&(s=n,n=i,i=Xt);var o=this,a=function(){var c=Ot,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=vd(s)),Ot=o,d=n.apply(o,arguments),Xt(d)&&o._r.push(d),Ot=c,o.selector=h,o.isReverted=!1,d};return o.last=a,i===Xt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var n=Ot;Ot=null,i(this),Ot=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof Qt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Pi?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qt)&&c.revert&&c.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n)for(var o=Us.length;o--;)Us[o].id===this.id&&Us.splice(o,1)},e.revert=function(i){this.kill(i||{})},r})(),E1=(function(){function r(t){this.contexts=[],this.scope=t,Ot&&Ot.data.push(this)}var e=r.prototype;return e.add=function(i,n,s){cr(i)||(i={matches:i});var o=new c0(0,s||this.scope),a=o.conditions={},l,c,h;Ot&&!o.selector&&(o.selector=Ot.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?h=1:(l=ar.matchMedia(i[c]),l&&(Us.indexOf(o)<0&&Us.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Md):l.addEventListener("change",Md)));return h&&n(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r})(),nu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return t0(n)})},timeline:function(e){return new Pi(e)},getTweensOf:function(e,t){return Bt.getTweensOf(e,t)},getProperty:function(e,t,i,n){ci(e)&&(e=Nn(e)[0]);var s=os(e||{}).get,o=i?Hg:Vg;return i==="native"&&(i=""),e&&(t?o((en[t]&&en[t].get||s)(e,t,i,n)):function(a,l,c){return o((en[a]&&en[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Nn(e),e.length>1){var n=e.map(function(h){return Di.quickSetter(h,t,i)}),s=n.length;return function(h){for(var d=s;d--;)n[d](h)}}e=e[0]||{};var o=en[t],a=os(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var d=new o;Ho._pt=0,d.init(e,i?h+i:h,Ho,0,[e]),d.render(1,d),Ho._pt&&kd(1,Ho)}:a.set(e,l);return o?c:function(h){return c(e,l,i?h+i:h,a,1)}},quickTo:function(e,t,i){var n,s=Di.to(e,dn((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return Bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Os(e.ease,dl.ease)),Ag(dl,e||{})},config:function(e){return Ag(rn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,s=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!en[a]&&!fn[a]&&pl(t+" effect requires "+a+" plugin.")}),ad[t]=function(a,l,c){return i(Nn(a),dn(l||{},s),c)},o&&(Pi.prototype[t]=function(a,l,c){return this.add(ad[t](a,cr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=Os(t)},parseEase:function(e,t){return arguments.length?Os(e,t):ut},getById:function(e){return Bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Pi(e),n,s;for(i.smoothChildTiming=nn(e.smoothChildTiming),Bt.remove(i),i._dp=0,i._time=i._tTime=Bt._time,n=Bt._first;n;)s=n._next,(t||!(!n._dur&&n instanceof Qt&&n.vars.onComplete===n._targets[0]))&&lr(i,n,n._start-n._delay),n=s;return lr(Bt,i,0),i},context:function(e,t){return e?new c0(e,t):Ot},matchMedia:function(e){return new E1(e)},matchMediaRefresh:function(){return Us.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Md()},addEventListener:function(e,t){var i=Qh[e]||(Qh[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Qh[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:n1,wrapYoyo:r1,distribute:Jg,random:jg,snap:Kg,normalize:i1,getUnit:Mi,clamp:Qb,splitColor:i0,toArray:Nn,selector:vd,mapRange:$g,pipe:e1,unitize:t1,interpolate:s1,shuffle:Zg},install:Fg,effects:ad,ticker:tn,updateRoot:Pi.updateRoot,plugins:en,globalTimeline:Bt,core:{PropTween:Xi,globals:Bg,Tween:Qt,Timeline:Pi,Animation:_l,getCache:os,_removeLinkedListItem:ou,reverting:function(){return Si},context:function(e){return e&&Ot&&(Ot.data.push(e),e._ctx=Ot),Ot},suppressOverwrites:function(e){return bd=e}}};Wi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return nu[r]=Qt[r]});tn.add(Pi.updateRoot);Ho=nu.to({},{duration:0});var A1=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},C1=function(e,t){var i=e._targets,n,s,o;for(n in t)for(s=i.length;s--;)o=e._ptLookup[s][n],o&&(o=o.d)&&(o._pt&&(o=A1(o,n)),o&&o.modifier&&o.modifier(t[n],e,i[s],n))},fd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,s,o){o._onInit=function(a){var l,c;if(ci(s)&&(l={},Wi(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}C1(a,s)}}}},Di=nu.registerPlugin({name:"attr",init:function(e,t,i,n,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],n,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Si?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},fd("roundProps",yd),fd("modifiers"),fd("snap",Kg))||nu;Qt.version=Pi.version=Di.version="3.15.0";Ug=1;Td()&&Yo();var R1=ut.Power0,P1=ut.Power1,I1=ut.Power2,D1=ut.Power3,L1=ut.Power4,N1=ut.Linear,O1=ut.Quad,U1=ut.Cubic,F1=ut.Quart,B1=ut.Quint,z1=ut.Strong,k1=ut.Elastic,V1=ut.Back,H1=ut.SteppedEase,G1=ut.Bounce,W1=ut.Sine,X1=ut.Expo,Y1=ut.Circ;var h0,cs,Jo,qd,Gs,q1,u0,Zd,Z1=function(){return typeof window<"u"},Pr={},Hs=180/Math.PI,Ko=Math.PI/180,Zo=Math.atan2,f0=1e8,Jd=/([A-Z])/g,J1=/(left|right|width|margin|padding|x)/i,K1=/[\s,\(]\S/,hr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Gd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},j1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Q1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$1=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},eT=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},y0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},S0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},tT=function(e,t,i){return e.style[t]=i},iT=function(e,t,i){return e.style.setProperty(t,i)},nT=function(e,t,i){return e._gsap[t]=i},rT=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},sT=function(e,t,i,n,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},oT=function(e,t,i,n,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},zt="transform",sn=zt+"Origin",aT=function r(e,t){var i=this,n=this.target,s=n.style,o=n._gsap;if(e in Pr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=hr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Rr(n,a)}):this.tfm[e]=o.x?o[e]:Rr(n,e),e===sn&&(this.tfm.zOrigin=o.zOrigin);else return hr.transform.split(",").forEach(function(a){return r.call(i,a,t)});if(this.props.indexOf(zt)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(sn,t,"")),e=zt}(s||t)&&this.props.push(e,t,s[e])},M0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},lT=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Jd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Zd(),(!s||!s.isStart)&&!i[zt]&&(M0(i),n.zOrigin&&i[sn]&&(i[sn]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},b0=function(e,t){var i={target:e,props:[],revert:lT,save:aT};return e._gsap||Di.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},T0,Wd=function(e,t){var i=cs.createElementNS?cs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):cs.createElement(e);return i&&i.style?i:cs.createElement(e)},pn=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Jd,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,jo(t)||t,1)||""},d0="O,Moz,ms,Ms,Webkit".split(","),jo=function(e,t,i){var n=t||Gs,s=n.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(d0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?d0[o]:"")+e},Xd=function(){Z1()&&window.document&&(h0=window,cs=h0.document,Jo=cs.documentElement,Gs=Wd("div")||{style:{}},q1=Wd("div"),zt=jo(zt),sn=zt+"Origin",Gs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",T0=!!jo("perspective"),Zd=Di.core.reverting,qd=1)},p0=function(e){var t=e.ownerSVGElement,i=Wd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),s;n.style.display="block",i.appendChild(n),Jo.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),Jo.removeChild(i),s},m0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},w0=function(e){var t,i;try{t=e.getBBox()}catch{t=p0(e),i=1}return t&&(t.width||t.height)||i||(t=p0(e)),t&&!t.width&&!t.x&&!t.y?{x:+m0(e,["x","cx","x1"])||0,y:+m0(e,["y","cy","y1"])||0,width:0,height:0}:t},E0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&w0(e))},us=function(e,t){if(t){var i=e.style,n;t in Pr&&t!==sn&&(t=zt),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Jd,"-$1").toLowerCase())):i.removeAttribute(t)}},hs=function(e,t,i,n,s,o){var a=new Xi(e._pt,t,i,0,1,o?S0:y0);return e._pt=a,a.b=n,a.e=s,e._props.push(i),a},g0={deg:1,rad:1,turn:1},cT={grid:1,flex:1},fs=function r(e,t,i,n){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Gs.style,l=J1.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=n==="px",f=n==="%",p,_,m,g;if(n===o||!s||g0[n]||g0[o])return s;if(o!=="px"&&!u&&(s=r(e,t,i,"px")),g=e.getCTM&&E0(e),(f||o==="%")&&(Pr[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[h],Yt(f?s/p*d:s/100*p);if(a[l?"width":"height"]=d+(u?o:n),_=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===cs||!_.appendChild)&&(_=cs.body),m=_._gsap,m&&f&&m.width&&l&&m.time===tn.time&&!m.uncache)return Yt(s/m.width*d);if(f&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=d+n,p=e[h],S?e.style[t]=S:us(e,t)}else(f||o==="%")&&!cT[pn(_,"display")]&&(a.position=pn(e,"position")),_===e&&(a.position="static"),_.appendChild(Gs),p=Gs[h],_.removeChild(Gs),a.position="absolute";return l&&f&&(m=os(_),m.time=tn.time,m.width=_[h]),Yt(u?p*s/d:p&&s?d/p*s:0)},Rr=function(e,t,i,n){var s;return qd||Xd(),t in hr&&t!=="transform"&&(t=hr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Pr[t]&&t!=="transform"?(s=Sl(e,n),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:uu(pn(e,sn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=hu[t]&&hu[t](e,t,i)||pn(e,t)||Id(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?fs(e,t,s,i)+i:s},hT=function(e,t,i,n){if(!i||i==="none"){var s=jo(t,e,1),o=s&&pn(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=pn(e,"borderTopColor"))}var a=new Xi(this._pt,e.style,t,0,1,zd),l=0,c=0,h,d,u,f,p,_,m,g,S,A,y,b;if(a.b=i,a.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=pn(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(_=e.style[t],e.style[t]=n,n=pn(e,t)||n,_?e.style[t]=_:us(e,t)),h=[i,n],Ld(h),i=h[0],n=h[1],u=i.match(Fs)||[],b=n.match(Fs)||[],b.length){for(;d=Fs.exec(n);)m=d[0],S=n.substring(l,d.index),p?p=(p+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(p=1),m!==(_=u[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),m.charAt(1)==="="&&(m=Bs(f,m)+y),g=parseFloat(m),A=m.substr((g+"").length),l=Fs.lastIndex-A.length,A||(A=A||rn.units[t]||y,l===n.length&&(n+=A,a.e+=A)),y!==A&&(f=fs(e,t,_,A)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:f,c:g-f,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=t==="display"&&n==="none"?S0:y0;return Ed.test(n)&&(a.e=0),this._pt=a,a},_0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},uT=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=_0[i]||i,t[1]=_0[n]||n,t.join(" ")},fT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Pr[a]&&(l=1,a=a==="transformOrigin"?sn:zt),us(i,a);l&&(us(i,zt),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Sl(i,1),o.uncache=1,M0(n)))}},hu={clearProps:function(e,t,i,n,s){if(s.data!=="isFromStart"){var o=e._pt=new Xi(e._pt,t,i,0,0,fT);return o.u=n,o.pr=-10,o.tween=s,e._props.push(i),1}}},yl=[1,0,0,1,0,0],A0={},C0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},x0=function(e){var t=pn(e,zt);return C0(t)?yl:t.substr(7).match(wd).map(Yt)},Kd=function(e,t){var i=e._gsap||os(e),n=e.style,s=x0(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?yl:s):(s===yl&&!e.offsetParent&&e!==Jo&&!i.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Jo.appendChild(e)),s=x0(e),l?n.display=l:us(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Jo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Yd=function(e,t,i,n,s,o){var a=e._gsap,l=s||Kd(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],p=l[1],_=l[2],m=l[3],g=l[4],S=l[5],A=t.split(" "),y=parseFloat(A[0])||0,b=parseFloat(A[1])||0,w,E,x,T;i?l!==yl&&(E=f*m-p*_)&&(x=y*(m/E)+b*(-_/E)+(_*S-m*g)/E,T=y*(-p/E)+b*(f/E)-(f*S-p*g)/E,y=x,b=T):(w=w0(e),y=w.x+(~A[0].indexOf("%")?y/100*w.width:y),b=w.y+(~(A[1]||A[0]).indexOf("%")?b/100*w.height:b)),n||n!==!1&&a.smooth?(g=y-c,S=b-h,a.xOffset=d+(g*f+S*_)-g,a.yOffset=u+(g*p+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=b,a.smooth=!!n,a.origin=t,a.originIsAbsolute=!!i,e.style[sn]="0px 0px",o&&(hs(o,a,"xOrigin",c,y),hs(o,a,"yOrigin",h,b),hs(o,a,"xOffset",d,a.xOffset),hs(o,a,"yOffset",u,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},Sl=function(e,t){var i=e._gsap||new Nd(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=pn(e,sn)||"0",h,d,u,f,p,_,m,g,S,A,y,b,w,E,x,T,C,I,D,X,W,O,H,U,Z,ee,P,le,_e,je,qe,He;return h=d=u=_=m=g=S=A=y=0,f=p=1,i.svg=!!(e.getCTM&&E0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[zt]!=="none"?l[zt]:"")),n.scale=n.rotate=n.translate="none"),E=Kd(e,i.svg),i.svg&&(i.uncache?(Z=e.getBBox(),c=i.xOrigin-Z.x+"px "+(i.yOrigin-Z.y)+"px",U=""):U=!t&&e.getAttribute("data-svg-origin"),Yd(e,U||c,!!U||i.originIsAbsolute,i.smooth!==!1,E)),b=i.xOrigin||0,w=i.yOrigin||0,E!==yl&&(I=E[0],D=E[1],X=E[2],W=E[3],h=O=E[4],d=H=E[5],E.length===6?(f=Math.sqrt(I*I+D*D),p=Math.sqrt(W*W+X*X),_=I||D?Zo(D,I)*Hs:0,S=X||W?Zo(X,W)*Hs+_:0,S&&(p*=Math.abs(Math.cos(S*Ko))),i.svg&&(h-=b-(b*I+w*X),d-=w-(b*D+w*W))):(He=E[6],je=E[7],P=E[8],le=E[9],_e=E[10],qe=E[11],h=E[12],d=E[13],u=E[14],x=Zo(He,_e),m=x*Hs,x&&(T=Math.cos(-x),C=Math.sin(-x),U=O*T+P*C,Z=H*T+le*C,ee=He*T+_e*C,P=O*-C+P*T,le=H*-C+le*T,_e=He*-C+_e*T,qe=je*-C+qe*T,O=U,H=Z,He=ee),x=Zo(-X,_e),g=x*Hs,x&&(T=Math.cos(-x),C=Math.sin(-x),U=I*T-P*C,Z=D*T-le*C,ee=X*T-_e*C,qe=W*C+qe*T,I=U,D=Z,X=ee),x=Zo(D,I),_=x*Hs,x&&(T=Math.cos(x),C=Math.sin(x),U=I*T+D*C,Z=O*T+H*C,D=D*T-I*C,H=H*T-O*C,I=U,O=Z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),f=Yt(Math.sqrt(I*I+D*D+X*X)),p=Yt(Math.sqrt(H*H+He*He)),x=Zo(O,H),S=Math.abs(x)>2e-4?x*Hs:0,y=qe?1/(qe<0?-qe:qe):0),i.svg&&(U=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!C0(pn(e,zt)),U&&e.setAttribute("transform",U))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(f*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,S+=S<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=u+o,i.scaleX=Yt(f),i.scaleY=Yt(p),i.rotation=Yt(_)+a,i.rotationX=Yt(m)+a,i.rotationY=Yt(g)+a,i.skewX=S+a,i.skewY=A+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[sn]=uu(c)),i.xOffset=i.yOffset=0,i.force3D=rn.force3D,i.renderTransform=i.svg?pT:T0?R0:dT,i.uncache=0,i},uu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Hd=function(e,t,i){var n=Mi(t);return Yt(parseFloat(t)+parseFloat(fs(e,"x",i+"px",n)))+n},dT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,R0(e,t)},ks="0deg",vl="0px",Vs=") ",R0=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,h=i.rotationY,d=i.rotationX,u=i.skewX,f=i.skewY,p=i.scaleX,_=i.scaleY,m=i.transformPerspective,g=i.force3D,S=i.target,A=i.zOrigin,y="",b=g==="auto"&&e&&e!==1||g===!0;if(A&&(d!==ks||h!==ks)){var w=parseFloat(h)*Ko,E=Math.sin(w),x=Math.cos(w),T;w=parseFloat(d)*Ko,T=Math.cos(w),o=Hd(S,o,E*T*-A),a=Hd(S,a,-Math.sin(w)*-A),l=Hd(S,l,x*T*-A+A)}m!==vl&&(y+="perspective("+m+Vs),(n||s)&&(y+="translate("+n+"%, "+s+"%) "),(b||o!==vl||a!==vl||l!==vl)&&(y+=l!==vl||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Vs),c!==ks&&(y+="rotate("+c+Vs),h!==ks&&(y+="rotateY("+h+Vs),d!==ks&&(y+="rotateX("+d+Vs),(u!==ks||f!==ks)&&(y+="skew("+u+", "+f+Vs),(p!==1||_!==1)&&(y+="scale("+p+", "+_+Vs),S.style[zt]=y||"translate(0, 0)"},pT=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,h=i.skewY,d=i.scaleX,u=i.scaleY,f=i.target,p=i.xOrigin,_=i.yOrigin,m=i.xOffset,g=i.yOffset,S=i.forceCSS,A=parseFloat(o),y=parseFloat(a),b,w,E,x,T;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ko,c*=Ko,b=Math.cos(l)*d,w=Math.sin(l)*d,E=Math.sin(l-c)*-u,x=Math.cos(l-c)*u,c&&(h*=Ko,T=Math.tan(c-h),T=Math.sqrt(1+T*T),E*=T,x*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),b*=T,w*=T)),b=Yt(b),w=Yt(w),E=Yt(E),x=Yt(x)):(b=d,x=u,w=E=0),(A&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(A=fs(f,"x",o,"px"),y=fs(f,"y",a,"px")),(p||_||m||g)&&(A=Yt(A+p-(p*b+_*E)+m),y=Yt(y+_-(p*w+_*x)+g)),(n||s)&&(T=f.getBBox(),A=Yt(A+n/100*T.width),y=Yt(y+s/100*T.height)),T="matrix("+b+","+w+","+E+","+x+","+A+","+y+")",f.setAttribute("transform",T),S&&(f.style[zt]=T)},mT=function(e,t,i,n,s){var o=360,a=ci(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Hs:1),c=l-n,h=n+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*f0)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*f0)%o-~~(c/o)*o)),e._pt=u=new Xi(e._pt,t,i,n,c,j1),u.e=h,u.u="deg",e._props.push(i),u},v0=function(e,t){for(var i in t)e[i]=t[i];return e},gT=function(e,t,i){var n=v0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,h,d,u,f,p;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[zt]=t,a=Sl(i,1),us(i,zt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[zt],o[zt]=t,a=Sl(i,1),o[zt]=c);for(l in Pr)c=n[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=Mi(c),p=Mi(h),d=f!==p?fs(i,l,c,p):parseFloat(c),u=parseFloat(h),e._pt=new Xi(e._pt,a,l,d,u-d,Gd),e._pt.u=p||0,e._props.push(l));v0(a,n)};Wi("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",s="Left",o=(e<3?[t,i,n,s]:[t+s,t+i,n+i,n+s]).map(function(a){return e<2?r+a:"border"+a+r});hu[e>1?"border"+r:r]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(p){return Rr(a,p,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(p,_){return f[p]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var jd={name:"css",register:Xd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,s){var o=this._props,a=e.style,l=i.vars.startAt,c,h,d,u,f,p,_,m,g,S,A,y,b,w,E,x,T;qd||Xd(),this.styles=this.styles||b0(e),x=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(en[_]&&Ud(_,t,i,n,e,s)))){if(f=typeof h,p=hu[_],f==="function"&&(h=h.call(i,n,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=qo(h)),p)p(this,e,_,h,i)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Ar.lastIndex=0,Ar.test(c)||(m=Mi(c),g=Mi(h),g?m!==g&&(c=fs(e,_,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,n,s,0,0,_),o.push(_),x.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,n,e,s):l[_],ci(c)&&~c.indexOf("random(")&&(c=qo(c)),Mi(c+"")||c==="auto"||(c+=rn.units[_]||Mi(Rr(e,_))||""),(c+"").charAt(1)==="="&&(c=Rr(e,_))):c=Rr(e,_),u=parseFloat(c),S=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),d=parseFloat(h),_ in hr&&(_==="autoAlpha"&&(u===1&&Rr(e,"visibility")==="hidden"&&d&&(u=0),x.push("visibility",0,a.visibility),hs(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=hr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in Pr,A){if(this.styles.save(_),T=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=pn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=h,h=pn(e,"perspective"),C?e.style.perspective=C:us(e,"perspective")}d=parseFloat(h)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Sl(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new Xi(this._pt,a,zt,0,1,b.renderTransform,b,0,-1),y.dep=1),_==="scale")this._pt=new Xi(this._pt,b,"scaleY",b.scaleY,(S?Bs(b.scaleY,S+d):d)-b.scaleY||0,Gd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(sn,0,a[sn]),h=uT(h),b.svg?Yd(e,h,0,w,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==b.zOrigin&&hs(this,b,"zOrigin",b.zOrigin,g),hs(this,a,_,uu(c),uu(h)));continue}else if(_==="svgOrigin"){Yd(e,h,1,w,0,this);continue}else if(_ in A0){mT(this,b,_,u,S?Bs(u,S+h):h);continue}else if(_==="smoothOrigin"){hs(this,b,"smooth",b.smooth,h);continue}else if(_==="force3D"){b[_]=h;continue}else if(_==="transform"){gT(this,h,e);continue}}else _ in a||(_=jo(_)||_);if(A||(d||d===0)&&(u||u===0)&&!K1.test(h)&&_ in a)m=(c+"").substr((u+"").length),d||(d=0),g=Mi(h)||(_ in rn.units?rn.units[_]:m),m!==g&&(u=fs(e,_,c,g)),this._pt=new Xi(this._pt,A?b:a,_,u,(S?Bs(u,S+d):d)-u,!A&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?eT:Gd),this._pt.u=g||0,A&&T!==h?(this._pt.b=c,this._pt.e=T,this._pt.r=$1):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Q1);else if(_ in a)hT.call(this,e,_,c,S?S+h:h);else if(_ in e)this.add(e,_,c||e[_],S?S+h:h,n,s);else if(_!=="parseTransform"){su(_,h);continue}A||(_ in a?x.push(_,0,a[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),o.push(_)}}E&&Vd(this)},render:function(e,t){if(t.tween._time||!Zd())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Rr,aliases:hr,getSetter:function(e,t,i){var n=hr[t];return n&&n.indexOf(",")<0&&(t=n),t in Pr&&t!==sn&&(e._gsap.x||Rr(e,"x"))?i&&u0===i?t==="scale"?rT:nT:(u0=i||{})&&(t==="scale"?sT:oT):e.style&&!ru(e.style[t])?tT:~t.indexOf("-")?iT:cu(e,t)},core:{_removeProperty:us,_getMatrix:Kd}};Di.utils.checkPrefix=jo;Di.core.getStyleSaver=b0;(function(r,e,t,i){var n=Wi(r+","+e+","+t,function(s){Pr[s]=1});Wi(e,function(s){rn.units[s]="deg",A0[s]=1}),hr[n[13]]=r+","+e,Wi(i,function(s){var o=s.split(":");hr[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){rn.units[r]="px"});Di.registerPlugin(jd);var ot=Di.registerPlugin(jd)||Di,NR=ot.core.Tween;function P0(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function _T(r,e,t){return e&&P0(r.prototype,e),t&&P0(r,t),r}var bi,pu,xT,mn,ds,ps,$o,D0,Ws,ea,L0,Ir,Yn,N0,O0=function(){return bi||typeof window<"u"&&(bi=window.gsap)&&bi.registerPlugin&&bi},U0=1,Qo=[],it=[],qn=[],bl=Date.now,Qd=function(e,t){return t},vT=function(){var e=ea.core,t=e.bridge||{},i=e._scrollers,n=e._proxies;i.push.apply(i,it),n.push.apply(n,qn),it=i,qn=n,Qd=function(o,a){return t[o](a)}},Lr=function(e,t){return~qn.indexOf(e)&&qn[qn.indexOf(e)+1][t]},Tl=function(e){return!!~L0.indexOf(e)},qi=function(e,t,i,n,s){return e.addEventListener(t,i,{passive:n!==!1,capture:!!s})},Yi=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},fu="scrollLeft",du="scrollTop",$d=function(){return Ir&&Ir.isPressed||it.cache++},mu=function(e,t){var i=function n(s){if(s||s===0){U0&&(mn.history.scrollRestoration="manual");var o=Ir&&Ir.isPressed;s=n.v=Math.round(s)||(Ir&&Ir.iOS?1:0),e(s),n.cacheID=it.cache,o&&Qd("ss",s)}else(t||it.cache!==n.cacheID||Qd("ref"))&&(n.cacheID=it.cache,n.v=e());return n.v+n.offset};return i.offset=0,e&&i},Li={s:fu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:mu(function(r){return arguments.length?mn.scrollTo(r,ii.sc()):mn.pageXOffset||ds[fu]||ps[fu]||$o[fu]||0})},ii={s:du,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Li,sc:mu(function(r){return arguments.length?mn.scrollTo(Li.sc(),r):mn.pageYOffset||ds[du]||ps[du]||$o[du]||0})},Zi=function(e,t){return(t&&t._ctx&&t._ctx.selector||bi.utils.toArray)(e)[0]||(typeof e=="string"&&bi.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},yT=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Dr=function(e,t){var i=t.s,n=t.sc;Tl(e)&&(e=ds.scrollingElement||ps);var s=it.indexOf(e),o=n===ii.sc?1:2;!~s&&(s=it.push(e)-1),it[s+o]||qi(e,"scroll",$d);var a=it[s+o],l=a||(it[s+o]=mu(Lr(e,i),!0)||(Tl(e)?n:mu(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=bi.getProperty(e,"scrollBehavior")==="smooth"),l},gu=function(e,t,i){var n=e,s=e,o=bl(),a=o,l=t||50,c=Math.max(500,l*3),h=function(p,_){var m=bl();_||m-o>l?(s=n,n=p,a=o,o=m):i?n+=p:n=s+(p-s)/(m-a)*(o-a)},d=function(){s=n=i?0:n,a=o=0},u=function(p){var _=a,m=s,g=bl();return(p||p===0)&&p!==n&&h(p),o===a||g-a>c?0:(n+(i?m:-m))/((i?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},Ml=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},I0=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},F0=function(){ea=bi.core.globals().ScrollTrigger,ea&&ea.core&&vT()},B0=function(e){return bi=e||O0(),!pu&&bi&&typeof document<"u"&&document.body&&(mn=window,ds=document,ps=ds.documentElement,$o=ds.body,L0=[mn,ds,ps,$o],xT=bi.utils.clamp,N0=bi.core.context||function(){},Ws="onpointerenter"in $o?"pointer":"mouse",D0=qt.isTouch=mn.matchMedia&&mn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in mn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Yn=qt.eventTypes=("ontouchstart"in ps?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ps?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return U0=0},500),pu=1),ea||F0(),pu};Li.op=ii;it.cache=0;var qt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(i){pu||B0(bi)||console.warn("Please gsap.registerPlugin(Observer)"),ea||F0();var n=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,h=i.preventDefault,d=i.onStop,u=i.onStopDelay,f=i.ignore,p=i.wheelSpeed,_=i.event,m=i.onDragStart,g=i.onDragEnd,S=i.onDrag,A=i.onPress,y=i.onRelease,b=i.onRight,w=i.onLeft,E=i.onUp,x=i.onDown,T=i.onChangeX,C=i.onChangeY,I=i.onChange,D=i.onToggleX,X=i.onToggleY,W=i.onHover,O=i.onHoverEnd,H=i.onMove,U=i.ignoreCheck,Z=i.isNormalizer,ee=i.onGestureStart,P=i.onGestureEnd,le=i.onWheel,_e=i.onEnable,je=i.onDisable,qe=i.onClick,He=i.scrollSpeed,K=i.capture,oe=i.allowClicks,ne=i.lockAxis,Ae=i.onLockAxis;this.target=a=Zi(a)||ps,this.vars=i,f&&(f=bi.utils.toArray(f)),n=n||1e-9,s=s||0,p=p||1,He=He||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(mn.getComputedStyle($o).lineHeight)||22);var ke,Te,lt,Me,Ge,Ye,Xe,Y=this,ft=0,xt=0,At=i.passive||!h&&i.passive!==!1,Ze=Dr(a,Li),mt=Dr(a,ii),N=Ze(),Vt=mt(),We=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Yn[0]==="pointerdown",R=Tl(a),v=a.ownerDocument||ds,B=[0,0,0],V=[0,0,0],J=0,he=function(){return J=bl()},ae=function(ie,Fe){return(Y.event=ie)&&f&&yT(ie.target,f)||Fe&&We&&ie.pointerType!=="touch"||U&&U(ie,Fe)},j=function(){Y._vx.reset(),Y._vy.reset(),Te.pause(),d&&d(Y)},Q=function(){var ie=Y.deltaX=I0(B),Fe=Y.deltaY=I0(V),se=Math.abs(ie)>=n,Be=Math.abs(Fe)>=n;I&&(se||Be)&&I(Y,ie,Fe,B,V),se&&(b&&Y.deltaX>0&&b(Y),w&&Y.deltaX<0&&w(Y),T&&T(Y),D&&Y.deltaX<0!=ft<0&&D(Y),ft=Y.deltaX,B[0]=B[1]=B[2]=0),Be&&(x&&Y.deltaY>0&&x(Y),E&&Y.deltaY<0&&E(Y),C&&C(Y),X&&Y.deltaY<0!=xt<0&&X(Y),xt=Y.deltaY,V[0]=V[1]=V[2]=0),(Me||lt)&&(H&&H(Y),lt&&(m&&lt===1&&m(Y),S&&S(Y),lt=0),Me=!1),Ye&&!(Ye=!1)&&Ae&&Ae(Y),Ge&&(le(Y),Ge=!1),ke=0},de=function(ie,Fe,se){B[se]+=ie,V[se]+=Fe,Y._vx.update(ie),Y._vy.update(Fe),c?ke||(ke=requestAnimationFrame(Q)):Q()},Ee=function(ie,Fe){ne&&!Xe&&(Y.axis=Xe=Math.abs(ie)>Math.abs(Fe)?"x":"y",Ye=!0),Xe!=="y"&&(B[2]+=ie,Y._vx.update(ie,!0)),Xe!=="x"&&(V[2]+=Fe,Y._vy.update(Fe,!0)),c?ke||(ke=requestAnimationFrame(Q)):Q()},pe=function(ie){if(!ae(ie,1)){ie=Ml(ie,h);var Fe=ie.clientX,se=ie.clientY,Be=Fe-Y.x,Ce=se-Y.y,Je=Y.isDragging;Y.x=Fe,Y.y=se,(Je||(Be||Ce)&&(Math.abs(Y.startX-Fe)>=s||Math.abs(Y.startY-se)>=s))&&(lt||(lt=Je?2:1),Je||(Y.isDragging=!0),Ee(Be,Ce))}},fe=Y.onPress=function(re){ae(re,1)||re&&re.button||(Y.axis=Xe=null,Te.pause(),Y.isPressed=!0,re=Ml(re),ft=xt=0,Y.startX=Y.x=re.clientX,Y.startY=Y.y=re.clientY,Y._vx.reset(),Y._vy.reset(),qi(Z?a:v,Yn[1],pe,At,!0),Y.deltaX=Y.deltaY=0,A&&A(Y))},ce=Y.onRelease=function(re){if(!ae(re,1)){Yi(Z?a:v,Yn[1],pe,!0);var ie=!isNaN(Y.y-Y.startY),Fe=Y.isDragging,se=Fe&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),Be=Ml(re);!se&&ie&&(Y._vx.reset(),Y._vy.reset(),h&&oe&&bi.delayedCall(.08,function(){if(bl()-J>300&&!re.defaultPrevented){if(re.target.click)re.target.click();else if(v.createEvent){var Ce=v.createEvent("MouseEvents");Ce.initMouseEvent("click",!0,!0,mn,1,Be.screenX,Be.screenY,Be.clientX,Be.clientY,!1,!1,!1,!1,0,null),re.target.dispatchEvent(Ce)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,d&&Fe&&!Z&&Te.restart(!0),lt&&Q(),g&&Fe&&g(Y),y&&y(Y,se)}},Pe=function(ie){return ie.touches&&ie.touches.length>1&&(Y.isGesturing=!0)&&ee(ie,Y.isDragging)},Ue=function(){return(Y.isGesturing=!1)||P(Y)},L=function(ie){if(!ae(ie)){var Fe=Ze(),se=mt();de((Fe-N)*He,(se-Vt)*He,1),N=Fe,Vt=se,d&&Te.restart(!0)}},ue=function(ie){if(!ae(ie)){ie=Ml(ie,h),le&&(Ge=!0);var Fe=(ie.deltaMode===1?l:ie.deltaMode===2?mn.innerHeight:1)*p;de(ie.deltaX*Fe,ie.deltaY*Fe,0),d&&!Z&&Te.restart(!0)}},$=function(ie){if(!ae(ie)){var Fe=ie.clientX,se=ie.clientY,Be=Fe-Y.x,Ce=se-Y.y;Y.x=Fe,Y.y=se,Me=!0,d&&Te.restart(!0),(Be||Ce)&&Ee(Be,Ce)}},me=function(ie){Y.event=ie,W(Y)},ge=function(ie){Y.event=ie,O(Y)},te=function(ie){return ae(ie)||Ml(ie,h)&&qe(Y)};Te=Y._dc=bi.delayedCall(u||.25,j).pause(),Y.deltaX=Y.deltaY=0,Y._vx=gu(0,50,!0),Y._vy=gu(0,50,!0),Y.scrollX=Ze,Y.scrollY=mt,Y.isDragging=Y.isGesturing=Y.isPressed=!1,N0(this),Y.enable=function(re){return Y.isEnabled||(qi(R?v:a,"scroll",$d),o.indexOf("scroll")>=0&&qi(R?v:a,"scroll",L,At,K),o.indexOf("wheel")>=0&&qi(a,"wheel",ue,At,K),(o.indexOf("touch")>=0&&D0||o.indexOf("pointer")>=0)&&(qi(a,Yn[0],fe,At,K),qi(v,Yn[2],ce),qi(v,Yn[3],ce),oe&&qi(a,"click",he,!0,!0),qe&&qi(a,"click",te),ee&&qi(v,"gesturestart",Pe),P&&qi(v,"gestureend",Ue),W&&qi(a,Ws+"enter",me),O&&qi(a,Ws+"leave",ge),H&&qi(a,Ws+"move",$)),Y.isEnabled=!0,Y.isDragging=Y.isGesturing=Y.isPressed=Me=lt=!1,Y._vx.reset(),Y._vy.reset(),N=Ze(),Vt=mt(),re&&re.type&&fe(re),_e&&_e(Y)),Y},Y.disable=function(){Y.isEnabled&&(Qo.filter(function(re){return re!==Y&&Tl(re.target)}).length||Yi(R?v:a,"scroll",$d),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),Yi(Z?a:v,Yn[1],pe,!0)),Yi(R?v:a,"scroll",L,K),Yi(a,"wheel",ue,K),Yi(a,Yn[0],fe,K),Yi(v,Yn[2],ce),Yi(v,Yn[3],ce),Yi(a,"click",he,!0),Yi(a,"click",te),Yi(v,"gesturestart",Pe),Yi(v,"gestureend",Ue),Yi(a,Ws+"enter",me),Yi(a,Ws+"leave",ge),Yi(a,Ws+"move",$),Y.isEnabled=Y.isPressed=Y.isDragging=!1,je&&je(Y))},Y.kill=Y.revert=function(){Y.disable();var re=Qo.indexOf(Y);re>=0&&Qo.splice(re,1),Ir===Y&&(Ir=0)},Qo.push(Y),Z&&Tl(a)&&(Ir=Y),Y.enable(_)},_T(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();qt.version="3.15.0";qt.create=function(r){return new qt(r)};qt.register=B0;qt.getAll=function(){return Qo.slice()};qt.getById=function(r){return Qo.filter(function(e){return e.vars.id===r})[0]};O0()&&bi.registerPlugin(qt);var we,ra,at,_t,xn,gt,dp,Du,Bl,Il,El,_u,Ni,Ou,op,Ki,z0,k0,sa,i_,ep,n_,Ji,ap,r_,s_,ms,lp,pp,oa,mp,Dl,cp,tp,xu=1,Oi=Date.now,ip=Oi(),Fn=0,Al=0,V0=function(e,t,i){var n=_n(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=n,n?e.substr(6,e.length-7):e},H0=function(e,t){return t&&(!_n(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ST=function r(){return Al&&requestAnimationFrame(r)},G0=function(){return Ou=1},W0=function(){return Ou=0},ur=function(e){return e},Cl=function(e){return Math.round(e*1e5)/1e5||0},o_=function(){return typeof window<"u"},a_=function(){return we||o_()&&(we=window.gsap)&&we.registerPlugin&&we},Ks=function(e){return!!~dp.indexOf(e)},l_=function(e){return(e==="Height"?mp:at["inner"+e])||xn["client"+e]||gt["client"+e]},c_=function(e){return Lr(e,"getBoundingClientRect")||(Ks(e)?function(){return Iu.width=at.innerWidth,Iu.height=mp,Iu}:function(){return Nr(e)})},MT=function(e,t,i){var n=i.d,s=i.d2,o=i.a;return(o=Lr(e,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(t?l_(s):e["client"+s])||0}},bT=function(e,t){return!t||~qn.indexOf(e)?c_(e):function(){return Iu}},fr=function(e,t){var i=t.s,n=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+n)&&(o=Lr(e,i))?o()-c_(e)()[s]:Ks(e)?(xn[i]||gt[i])-l_(n):e[i]-e["offset"+n])},vu=function(e,t){for(var i=0;i<sa.length;i+=3)(!t||~t.indexOf(sa[i+1]))&&e(sa[i],sa[i+1],sa[i+2])},_n=function(e){return typeof e=="string"},Ui=function(e){return typeof e=="function"},Rl=function(e){return typeof e=="number"},Xs=function(e){return typeof e=="object"},wl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},ta=function(e,t,i){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);n&&n.totalTime&&(e.callbackAnimation=n)}},ia=Math.abs,h_="left",u_="top",gp="right",_p="bottom",qs="width",Zs="height",Ll="Right",Nl="Left",Ol="Top",Ul="Bottom",ni="padding",On="margin",la="Width",xp="Height",hi="px",Un=function(e){return at.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},TT=function(e){var t=Un(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},X0=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Nr=function(e,t){var i=t&&Un(e)[op]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),n},Lu=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},f_=function(e){var t=[],i=e.labels,n=e.duration(),s;for(s in i)t.push(i[s]/n);return t},wT=function(e){return function(t){return we.utils.snap(f_(e),t)}},vp=function(e){var t=we.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(n,s){return n-s});return i?function(n,s,o){o===void 0&&(o=.001);var a;if(!s)return t(n);if(s>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,s,o){o===void 0&&(o=.001);var a=t(n);return!s||Math.abs(a-n)<o||a-n<0==s<0?a:t(s<0?n-e:n+e)}},ET=function(e){return function(t,i){return vp(f_(e))(t,i.direction)}},yu=function(e,t,i,n){return i.split(",").forEach(function(s){return e(t,s,n)})},_i=function(e,t,i,n,s){return e.addEventListener(t,i,{passive:!n,capture:!!s})},gi=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Su=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Y0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Mu={toggleActions:"play",anticipatePin:0},Nu={top:0,left:0,center:.5,bottom:1,right:1},Au=function(e,t){if(_n(e)){var i=e.indexOf("="),n=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(n*=t/100),e=e.substr(0,i-1)),e=n+(e in Nu?Nu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},bu=function(e,t,i,n,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,p=_t.createElement("div"),_=Ks(i)||Lr(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=_?gt:i.tagName==="IFRAME"?i.contentDocument.body:i,S=e.indexOf("start")!==-1,A=S?c:h,y="border-color:"+A+";font-size:"+d+";color:"+A+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(n===ii?gp:_p)+":"+(o+parseFloat(u))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=S,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+n.op.d2],Cu(p,0,n,S),p},Cu=function(e,t,i,n){var s={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];e._isFlipped=n,s[i.a+"Percent"]=n?-100:0,s[i.a]=n?"1px":0,s["border"+o+la]=1,s["border"+a+la]=0,s[i.p]=t+"px",we.set(e,s)},nt=[],hp={},zl,q0=function(){return Oi()-Fn>34&&(zl||(zl=requestAnimationFrame(Or)))},na=function(){(!Ji||!Ji.isPressed||Ji.startX>gt.clientWidth)&&(it.cache++,Ji?zl||(zl=requestAnimationFrame(Or)):Or(),Fn||Qs("scrollStart"),Fn=Oi())},np=function(){s_=at.innerWidth,r_=at.innerHeight},Pl=function(e){it.cache++,(e===!0||!Ni&&!n_&&!_t.fullscreenElement&&!_t.webkitFullscreenElement&&(!ap||s_!==at.innerWidth||Math.abs(at.innerHeight-r_)>at.innerHeight*.25))&&Du.restart(!0)},js={},AT=[],d_=function r(){return gi(et,"scrollEnd",r)||Ys(!0)},Qs=function(e){return js[e]&&js[e].map(function(t){return t()})||AT},gn=[],p_=function(e){for(var t=0;t<gn.length;t+=5)(!e||gn[t+4]&&gn[t+4].query===e)&&(gn[t].style.cssText=gn[t+1],gn[t].getBBox&&gn[t].setAttribute("transform",gn[t+2]||""),gn[t+3].uncache=1)},m_=function(){return it.forEach(function(e){return Ui(e)&&++e.cacheID&&(e.rec=e())})},yp=function(e,t){var i;for(Ki=0;Ki<nt.length;Ki++)i=nt[Ki],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Dl=!0,t&&p_(t),t||Qs("revert")},g_=function(e,t){it.cache++,(t||!ji)&&it.forEach(function(i){return Ui(i)&&i.cacheID++&&(i.rec=0)}),_n(e)&&(at.history.scrollRestoration=pp=e)},ji,Js=0,Z0,CT=function(){if(Z0!==Js){var e=Z0=Js;requestAnimationFrame(function(){return e===Js&&Ys(!0)})}},__=function(){gt.appendChild(oa),mp=!Ji&&oa.offsetHeight||at.innerHeight,gt.removeChild(oa)},J0=function(e){return Bl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ys=function(e,t){if(xn=_t.documentElement,gt=_t.body,dp=[at,_t,xn,gt],Fn&&!e&&!Dl){_i(et,"scrollEnd",d_);return}__(),ji=et.isRefreshing=!0,Dl||m_();var i=Qs("refreshInit");i_&&et.sort(),t||yp(),it.forEach(function(n){Ui(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),nt.slice(0).forEach(function(n){return n.refresh()}),Dl=!1,nt.forEach(function(n){if(n._subPinOffset&&n.pin){var s=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[s];n.revert(!0,1),n.adjustPinSpacing(n.pin[s]-o),n.refresh()}}),cp=1,J0(!0),nt.forEach(function(n){var s=fr(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>s,a=n._startClamp&&n.start>=s;(o||a)&&n.setPositions(a?s-1:n.start,o?Math.max(a?s:n.start+1,s):n.end,!0)}),J0(!1),cp=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),it.forEach(function(n){Ui(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),g_(pp,1),Du.pause(),Js++,ji=2,Or(2),nt.forEach(function(n){return Ui(n.vars.onRefresh)&&n.vars.onRefresh(n)}),ji=et.isRefreshing=!1,Qs("refresh")},up=0,Ru=1,Fl,Or=function(e){if(e===2||!ji&&!Dl){et.isUpdating=!0,Fl&&Fl.update(0);var t=nt.length,i=Oi(),n=i-ip>=50,s=t&&nt[0].scroll();if(Ru=up>s?-1:1,ji||(up=s),n&&(Fn&&!Ou&&i-Fn>200&&(Fn=0,Qs("scrollEnd")),El=ip,ip=i),Ru<0){for(Ki=t;Ki-- >0;)nt[Ki]&&nt[Ki].update(0,n);Ru=1}else for(Ki=0;Ki<t;Ki++)nt[Ki]&&nt[Ki].update(0,n);et.isUpdating=!1}zl=0},fp=[h_,u_,_p,gp,On+Ul,On+Ll,On+Ol,On+Nl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Pu=fp.concat([qs,Zs,"boxSizing","max"+la,"max"+xp,"position",On,ni,ni+Ol,ni+Ll,ni+Ul,ni+Nl]),RT=function(e,t,i){aa(i);var n=e._gsap;if(n.spacerIsNative)aa(n.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},rp=function(e,t,i,n){if(!e._gsap.swappedIn){for(var s=fp.length,o=t.style,a=e.style,l;s--;)l=fp[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[_p]=a[gp]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[qs]=Lu(e,Li)+hi,o[Zs]=Lu(e,ii)+hi,o[ni]=a[On]=a[u_]=a[h_]="0",aa(n),a[qs]=a["max"+la]=i[qs],a[Zs]=a["max"+xp]=i[Zs],a[ni]=i[ni],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},PT=/([A-Z])/g,aa=function(e){if(e){var t=e.t.style,i=e.length,n=0,s,o;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;n<i;n+=2)o=e[n+1],s=e[n],o?t[s]=o:t[s]&&t.removeProperty(s.replace(PT,"-$1").toLowerCase())}},Tu=function(e){for(var t=Pu.length,i=e.style,n=[],s=0;s<t;s++)n.push(Pu[s],i[Pu[s]]);return n.t=e,n},IT=function(e,t,i){for(var n=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],n.push(a,a in t?t[a]:e[o+1]);return n.t=e.t,n},Iu={left:0,top:0},K0=function(e,t,i,n,s,o,a,l,c,h,d,u,f,p){Ui(e)&&(e=e(l)),_n(e)&&e.substr(0,3)==="max"&&(e=u+(e.charAt(4)==="="?Au("0"+e.substr(3),i):0));var _=f?f.time():0,m,g,S;if(f&&f.seek(0),isNaN(e)||(e=+e),Rl(e))f&&(e=we.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,e)),a&&Cu(a,i,n,!0);else{Ui(t)&&(t=t(l));var A=(e||"0").split(" "),y,b,w,E;S=Zi(t,l)||gt,y=Nr(S)||{},(!y||!y.left&&!y.top)&&Un(S).display==="none"&&(E=S.style.display,S.style.display="block",y=Nr(S),E?S.style.display=E:S.style.removeProperty("display")),b=Au(A[0],y[n.d]),w=Au(A[1]||"0",i),e=y[n.p]-c[n.p]-h+b+s-w,a&&Cu(a,w,n,i-w<20||a._isStart&&w>20),i-=i-w}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var x=e+i,T=o._isStart;m="scroll"+n.d2,Cu(o,x,n,T&&x>20||!T&&(d?Math.max(gt[m],xn[m]):o.parentNode[m])<=x+1),d&&(c=Nr(a),d&&(o.style[n.op.p]=c[n.op.p]-n.op.m-o._offset+hi))}return f&&S&&(m=Nr(S),f.seek(u),g=Nr(S),f._caScrollDist=m[n.p]-g[n.p],e=e/f._caScrollDist*u),f&&f.seek(_),f?e:Math.round(e)},DT=/(webkit|moz|length|cssText|inset)/i,j0=function(e,t,i,n){if(e.parentNode!==t){var s=e.style,o,a;if(t===gt){e._stOrig=s.cssText,a=Un(e);for(o in a)!+o&&!DT.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=n}else s.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},x_=function(e,t,i){var n=t,s=n;return function(o){var a=Math.round(e());return a!==n&&a!==s&&Math.abs(a-n)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=n,n=Math.round(o),n}},wu=function(e,t,i){var n={};n[t.p]="+="+i,we.set(e,n)},Q0=function(e,t){var i=Dr(e,t),n="_scroll"+t.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,p={};c=c||i();var _=x_(i,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[n]=a,l.inherit=!1,l.modifiers=p,p[n]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){it.cache++,o.tween&&Or()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=we.to(e,l),u};return e[n]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},_i(e,"wheel",i.wheelHandler),et.isTouch&&_i(e,"touchmove",i.wheelHandler),s},et=(function(){function r(t,i){ra||r.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),lp(this),this.init(t,i)}var e=r.prototype;return e.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Al){this.update=this.refresh=this.kill=ur;return}i=X0(_n(i)||Rl(i)||i.nodeType?{trigger:i}:i,Mu);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,S=s.onSnapComplete,A=s.once,y=s.snap,b=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,x=s.fastScrollEnd,T=s.preventOverlaps,C=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Li:ii,I=!d&&d!==0,D=Zi(i.scroller||at),X=we.core.getCache(D),W=Ks(D),O=("pinType"in i?i.pinType:Lr(D,"pinType")||W&&"fixed")==="fixed",H=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],U=I&&i.toggleActions.split(" "),Z="markers"in i?i.markers:Mu.markers,ee=W?0:parseFloat(Un(D)["border"+C.p2+la])||0,P=this,le=i.onRefreshInit&&function(){return i.onRefreshInit(P)},_e=MT(D,W,C),je=bT(D,W),qe=0,He=0,K=0,oe=Dr(D,C),ne,Ae,ke,Te,lt,Me,Ge,Ye,Xe,Y,ft,xt,At,Ze,mt,N,Vt,We,R,v,B,V,J,he,ae,j,Q,de,Ee,pe,fe,ce,Pe,Ue,L,ue,$,me,ge;if(P._startClamp=P._endClamp=!1,P._dir=C,m*=45,P.scroller=D,P.scroll=E?E.time.bind(E):oe,Te=oe(),P.vars=i,n=n||i.animation,"refreshPriority"in i&&(i_=1,i.refreshPriority===-9999&&(Fl=P)),X.tweenScroll=X.tweenScroll||{top:Q0(D,ii),left:Q0(D,Li)},P.tweenTo=ne=X.tweenScroll[C.p],P.scrubDuration=function(se){Pe=Rl(se)&&se,Pe?ce?ce.duration(se):ce=we.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Pe,paused:!0,onComplete:function(){return g&&g(P)}}):(ce&&ce.progress(1).kill(),ce=0)},n&&(n.vars.lazy=!1,n._initted&&!P.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),P.animation=n.pause(),n.scrollTrigger=P,P.scrubDuration(d),pe=0,l||(l=n.vars.id)),y&&((!Xs(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in gt.style&&we.set(W?[gt,xn]:D,{scrollBehavior:"auto"}),it.forEach(function(se){return Ui(se)&&se.target===(W?_t.scrollingElement||xn:D)&&(se.smooth=!1)}),ke=Ui(y.snapTo)?y.snapTo:y.snapTo==="labels"?wT(n):y.snapTo==="labelsDirectional"?ET(n):y.directional!==!1?function(se,Be){return vp(y.snapTo)(se,Oi()-He<500?0:Be.direction)}:we.utils.snap(y.snapTo),Ue=y.duration||{min:.1,max:2},Ue=Xs(Ue)?Il(Ue.min,Ue.max):Il(Ue,Ue),L=we.delayedCall(y.delay||Pe/2||.1,function(){var se=oe(),Be=Oi()-He<500,Ce=ne.tween;if((Be||Math.abs(P.getVelocity())<10)&&!Ce&&!Ou&&qe!==se){var Je=(se-Me)/Ze,$t=n&&!I?n.totalProgress():Je,rt=Be?0:($t-fe)/(Oi()-El)*1e3||0,It=we.utils.clamp(-Je,1-Je,ia(rt/2)*rt/.185),ui=Je+(y.inertia===!1?0:It),Dt,St,ht=y,Bi=ht.onStart,Ct=ht.onInterrupt,Ti=ht.onComplete;if(Dt=ke(ui,P),Rl(Dt)||(Dt=ui),St=Math.max(0,Math.round(Me+Dt*Ze)),se<=Ge&&se>=Me&&St!==se){if(Ce&&!Ce._initted&&Ce.data<=ia(St-se))return;y.inertia===!1&&(It=Dt-Je),ne(St,{duration:Ue(ia(Math.max(ia(ui-$t),ia(Dt-$t))*.185/rt/.05||0)),ease:y.ease||"power3",data:ia(St-se),onInterrupt:function(){return L.restart(!0)&&Ct&&ta(P,Ct)},onComplete:function(){P.update(),qe=oe(),n&&!I&&(ce?ce.resetTo("totalProgress",Dt,n._tTime/n._tDur):n.progress(Dt)),pe=fe=n&&!I?n.totalProgress():P.progress,S&&S(P),Ti&&ta(P,Ti)}},se,It*Ze,St-se-It*Ze),Bi&&ta(P,Bi,ne.tween)}}else P.isActive&&qe!==se&&L.restart(!0)}).pause()),l&&(hp[l]=P),u=P.trigger=Zi(u||f!==!0&&f),ge=u&&u._gsap&&u._gsap.stRevert,ge&&(ge=ge(P)),f=f===!0?u:Zi(f),_n(a)&&(a={targets:u,className:a}),f&&(p===!1||p===On||(p=!p&&f.parentNode&&f.parentNode.style&&Un(f.parentNode).display==="flex"?!1:ni),P.pin=f,Ae=we.core.getCache(f),Ae.spacer?mt=Ae.pinState:(w&&(w=Zi(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ae.spacerIsNative=!!w,w&&(Ae.spacerState=Tu(w))),Ae.spacer=We=w||_t.createElement("div"),We.classList.add("pin-spacer"),l&&We.classList.add("pin-spacer-"+l),Ae.pinState=mt=Tu(f)),i.force3D!==!1&&we.set(f,{force3D:!0}),P.spacer=We=Ae.spacer,Ee=Un(f),he=Ee[p+C.os2],v=we.getProperty(f),B=we.quickSetter(f,C.a,hi),rp(f,We,Ee),Vt=Tu(f)),Z){xt=Xs(Z)?X0(Z,Y0):Y0,Y=bu("scroller-start",l,D,C,xt,0),ft=bu("scroller-end",l,D,C,xt,0,Y),R=Y["offset"+C.op.d2];var te=Zi(Lr(D,"content")||D);Ye=this.markerStart=bu("start",l,te,C,xt,R,0,E),Xe=this.markerEnd=bu("end",l,te,C,xt,R,0,E),E&&(me=we.quickSetter([Ye,Xe],C.a,hi)),!O&&!(qn.length&&Lr(D,"fixedMarkers")===!0)&&(TT(W?gt:D),we.set([Y,ft],{force3D:!0}),j=we.quickSetter(Y,C.a,hi),de=we.quickSetter(ft,C.a,hi))}if(E){var re=E.vars.onUpdate,ie=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),re&&re.apply(E,ie||[])})}if(P.previous=function(){return nt[nt.indexOf(P)-1]},P.next=function(){return nt[nt.indexOf(P)+1]},P.revert=function(se,Be){if(!Be)return P.kill(!0);var Ce=se!==!1||!P.enabled,Je=Ni;Ce!==P.isReverted&&(Ce&&(ue=Math.max(oe(),P.scroll.rec||0),K=P.progress,$=n&&n.progress()),Ye&&[Ye,Xe,Y,ft].forEach(function($t){return $t.style.display=Ce?"none":"block"}),Ce&&(Ni=P,P.update(Ce)),f&&(!b||!P.isActive)&&(Ce?RT(f,We,mt):rp(f,We,Un(f),ae)),Ce||P.update(Ce),Ni=Je,P.isReverted=Ce)},P.refresh=function(se,Be,Ce,Je){if(!((Ni||!P.enabled)&&!Be)){if(f&&se&&Fn){_i(r,"scrollEnd",d_);return}!ji&&le&&le(P),Ni=P,ne.tween&&!Ce&&(ne.tween.kill(),ne.tween=0),ce&&ce.pause(),_&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(ve){return ve.vars.immediateRender&&ve.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var $t=_e(),rt=je(),It=E?E.duration():fr(D,C),ui=Ze<=.01||!Ze,Dt=0,St=Je||0,ht=Xs(Ce)?Ce.end:i.end,Bi=i.endTrigger||u,Ct=Xs(Ce)?Ce.start:i.start||(i.start===0||!u?0:f?"0 0":"0 100%"),Ti=P.pinnedContainer=i.pinnedContainer&&Zi(i.pinnedContainer,P),zi=u&&Math.max(0,nt.indexOf(P))||0,ei=zi,Ht,ri,Zn,eo,fi,Zt,Tn,M,F,q,k,G,xe;for(Z&&Xs(Ce)&&(G=we.getProperty(Y,C.p),xe=we.getProperty(ft,C.p));ei-- >0;)Zt=nt[ei],Zt.end||Zt.refresh(0,1)||(Ni=P),Tn=Zt.pin,Tn&&(Tn===u||Tn===f||Tn===Ti)&&!Zt.isReverted&&(q||(q=[]),q.unshift(Zt),Zt.revert(!0,!0)),Zt!==nt[ei]&&(zi--,ei--);for(Ui(Ct)&&(Ct=Ct(P)),Ct=V0(Ct,"start",P),Me=K0(Ct,u,$t,C,oe(),Ye,Y,P,rt,ee,O,It,E,P._startClamp&&"_startClamp")||(f?-.001:0),Ui(ht)&&(ht=ht(P)),_n(ht)&&!ht.indexOf("+=")&&(~ht.indexOf(" ")?ht=(_n(Ct)?Ct.split(" ")[0]:"")+ht:(Dt=Au(ht.substr(2),$t),ht=_n(Ct)?Ct:(E?we.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Me):Me)+Dt,Bi=u)),ht=V0(ht,"end",P),Ge=Math.max(Me,K0(ht||(Bi?"100% 0":It),Bi,$t,C,oe()+Dt,Xe,ft,P,rt,ee,O,It,E,P._endClamp&&"_endClamp"))||-.001,Dt=0,ei=zi;ei--;)Zt=nt[ei]||{},Tn=Zt.pin,Tn&&Zt.start-Zt._pinPush<=Me&&!E&&Zt.end>0&&(Ht=Zt.end-(P._startClamp?Math.max(0,Zt.start):Zt.start),(Tn===u&&Zt.start-Zt._pinPush<Me||Tn===Ti)&&isNaN(Ct)&&(Dt+=Ht*(1-Zt.progress)),Tn===f&&(St+=Ht));if(Me+=Dt,Ge+=Dt,P._startClamp&&(P._startClamp+=Dt),P._endClamp&&!ji&&(P._endClamp=Ge||-.001,Ge=Math.min(Ge,fr(D,C))),Ze=Ge-Me||(Me-=.01)&&.001,ui&&(K=we.utils.clamp(0,1,we.utils.normalize(Me,Ge,ue))),P._pinPush=St,Ye&&Dt&&(Ht={},Ht[C.a]="+="+Dt,Ti&&(Ht[C.p]="-="+oe()),we.set([Ye,Xe],Ht)),f&&!(cp&&P.end>=fr(D,C)))Ht=Un(f),eo=C===ii,Zn=oe(),V=parseFloat(v(C.a))+St,!It&&Ge>1&&(k=(W?_t.scrollingElement||xn:D).style,k={style:k,value:k["overflow"+C.a.toUpperCase()]},W&&Un(gt)["overflow"+C.a.toUpperCase()]!=="scroll"&&(k.style["overflow"+C.a.toUpperCase()]="scroll")),rp(f,We,Ht),Vt=Tu(f),ri=Nr(f,!0),M=O&&Dr(D,eo?Li:ii)(),p?(ae=[p+C.os2,Ze+St+hi],ae.t=We,ei=p===ni?Lu(f,C)+Ze+St:0,ei&&(ae.push(C.d,ei+hi),We.style.flexBasis!=="auto"&&(We.style.flexBasis=ei+hi)),aa(ae),Ti&&nt.forEach(function(ve){ve.pin===Ti&&ve.vars.pinSpacing!==!1&&(ve._subPinOffset=!0)}),O&&oe(ue)):(ei=Lu(f,C),ei&&We.style.flexBasis!=="auto"&&(We.style.flexBasis=ei+hi)),O&&(fi={top:ri.top+(eo?Zn-Me:M)+hi,left:ri.left+(eo?M:Zn-Me)+hi,boxSizing:"border-box",position:"fixed"},fi[qs]=fi["max"+la]=Math.ceil(ri.width)+hi,fi[Zs]=fi["max"+xp]=Math.ceil(ri.height)+hi,fi[On]=fi[On+Ol]=fi[On+Ll]=fi[On+Ul]=fi[On+Nl]="0",fi[ni]=Ht[ni],fi[ni+Ol]=Ht[ni+Ol],fi[ni+Ll]=Ht[ni+Ll],fi[ni+Ul]=Ht[ni+Ul],fi[ni+Nl]=Ht[ni+Nl],N=IT(mt,fi,b),ji&&oe(0)),n?(F=n._initted,ep(1),n.render(n.duration(),!0,!0),J=v(C.a)-V+Ze+St,Q=Math.abs(Ze-J)>1,O&&Q&&N.splice(N.length-2,2),n.render(0,!0,!0),F||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),ep(0)):J=Ze,k&&(k.value?k.style["overflow"+C.a.toUpperCase()]=k.value:k.style.removeProperty("overflow-"+C.a));else if(u&&oe()&&!E)for(ri=u.parentNode;ri&&ri!==gt;)ri._pinOffset&&(Me-=ri._pinOffset,Ge-=ri._pinOffset),ri=ri.parentNode;q&&q.forEach(function(ve){return ve.revert(!1,!0)}),P.start=Me,P.end=Ge,Te=lt=ji?ue:oe(),!E&&!ji&&(Te<ue&&oe(ue),P.scroll.rec=0),P.revert(!1,!0),He=Oi(),L&&(qe=-1,L.restart(!0)),Ni=0,n&&I&&(n._initted||$)&&n.progress()!==$&&n.progress($||0,!0).render(n.time(),!0,!0),(ui||K!==P.progress||E||_||n&&!n._initted)&&(n&&!I&&(n._initted||K||n.vars.immediateRender!==!1)&&n.totalProgress(E&&Me<-.001&&!K?we.utils.normalize(Me,Ge,0):K,!0),P.progress=ui||(Te-Me)/Ze===K?0:K),f&&p&&(We._pinOffset=Math.round(P.progress*J)),ce&&ce.invalidate(),isNaN(G)||(G-=we.getProperty(Y,C.p),xe-=we.getProperty(ft,C.p),wu(Y,C,G),wu(Ye,C,G-(Je||0)),wu(ft,C,xe),wu(Xe,C,xe-(Je||0))),ui&&!ji&&P.update(),h&&!ji&&!At&&(At=!0,h(P),At=!1)}},P.getVelocity=function(){return(oe()-lt)/(Oi()-El)*1e3||0},P.endAnimation=function(){wl(P.callbackAnimation),n&&(ce?ce.progress(1):n.paused()?I||wl(n,P.direction<0,1):wl(n,n.reversed()))},P.labelToScroll=function(se){return n&&n.labels&&(Me||P.refresh()||Me)+n.labels[se]/n.duration()*Ze||0},P.getTrailing=function(se){var Be=nt.indexOf(P),Ce=P.direction>0?nt.slice(0,Be).reverse():nt.slice(Be+1);return(_n(se)?Ce.filter(function(Je){return Je.vars.preventOverlaps===se}):Ce).filter(function(Je){return P.direction>0?Je.end<=Me:Je.start>=Ge})},P.update=function(se,Be,Ce){if(!(E&&!Ce&&!se)){var Je=ji===!0?ue:P.scroll(),$t=se?0:(Je-Me)/Ze,rt=$t<0?0:$t>1?1:$t||0,It=P.progress,ui,Dt,St,ht,Bi,Ct,Ti,zi;if(Be&&(lt=Te,Te=E?oe():Je,y&&(fe=pe,pe=n&&!I?n.totalProgress():rt)),m&&f&&!Ni&&!xu&&Fn&&(!rt&&Me<Je+(Je-lt)/(Oi()-El)*m?rt=1e-4:rt===1&&Ge>Je+(Je-lt)/(Oi()-El)*m&&(rt=.9999)),rt!==It&&P.enabled){if(ui=P.isActive=!!rt&&rt<1,Dt=!!It&&It<1,Ct=ui!==Dt,Bi=Ct||!!rt!=!!It,P.direction=rt>It?1:-1,P.progress=rt,Bi&&!Ni&&(St=rt&&!It?0:rt===1?1:It===1?2:3,I&&(ht=!Ct&&U[St+1]!=="none"&&U[St+1]||U[St],zi=n&&(ht==="complete"||ht==="reset"||ht in n))),T&&(Ct||zi)&&(zi||d||!n)&&(Ui(T)?T(P):P.getTrailing(T).forEach(function(Zn){return Zn.endAnimation()})),I||(ce&&!Ni&&!xu?(ce._dp._time-ce._start!==ce._time&&ce.render(ce._dp._time-ce._start),ce.resetTo?ce.resetTo("totalProgress",rt,n._tTime/n._tDur):(ce.vars.totalProgress=rt,ce.invalidate().restart())):n&&n.totalProgress(rt,!!(Ni&&(He||se)))),f){if(se&&p&&(We.style[p+C.os2]=he),!O)B(Cl(V+J*rt));else if(Bi){if(Ti=!se&&rt>It&&Ge+1>Je&&Je+1>=fr(D,C),b)if(!se&&(ui||Ti)){var ei=Nr(f,!0),Ht=Je-Me;j0(f,gt,ei.top+(C===ii?Ht:0)+hi,ei.left+(C===ii?0:Ht)+hi)}else j0(f,We);aa(ui||Ti?N:Vt),Q&&rt<1&&ui||B(V+(rt===1&&!Ti?J:0))}}y&&!ne.tween&&!Ni&&!xu&&L.restart(!0),a&&(Ct||A&&rt&&(rt<1||!tp))&&Bl(a.targets).forEach(function(Zn){return Zn.classList[ui||A?"add":"remove"](a.className)}),o&&!I&&!se&&o(P),Bi&&!Ni?(I&&(zi&&(ht==="complete"?n.pause().totalProgress(1):ht==="reset"?n.restart(!0).pause():ht==="restart"?n.restart(!0):n[ht]()),o&&o(P)),(Ct||!tp)&&(c&&Ct&&ta(P,c),H[St]&&ta(P,H[St]),A&&(rt===1?P.kill(!1,1):H[St]=0),Ct||(St=rt===1?1:3,H[St]&&ta(P,H[St]))),x&&!ui&&Math.abs(P.getVelocity())>(Rl(x)?x:2500)&&(wl(P.callbackAnimation),ce?ce.progress(1):wl(n,ht==="reverse"?1:!rt,1))):I&&o&&!Ni&&o(P)}if(de){var ri=E?Je/E.duration()*(E._caScrollDist||0):Je;j(ri+(Y._isFlipped?1:0)),de(ri)}me&&me(-Je/E.duration()*(E._caScrollDist||0))}},P.enable=function(se,Be){P.enabled||(P.enabled=!0,_i(D,"resize",Pl),W||_i(D,"scroll",na),le&&_i(r,"refreshInit",le),se!==!1&&(P.progress=K=0,Te=lt=qe=oe()),Be!==!1&&P.refresh())},P.getTween=function(se){return se&&ne?ne.tween:ce},P.setPositions=function(se,Be,Ce,Je){if(E){var $t=E.scrollTrigger,rt=E.duration(),It=$t.end-$t.start;se=$t.start+It*se/rt,Be=$t.start+It*Be/rt}P.refresh(!1,!1,{start:H0(se,Ce&&!!P._startClamp),end:H0(Be,Ce&&!!P._endClamp)},Je),P.update()},P.adjustPinSpacing=function(se){if(ae&&se){var Be=ae.indexOf(C.d)+1;ae[Be]=parseFloat(ae[Be])+se+hi,ae[1]=parseFloat(ae[1])+se+hi,aa(ae)}},P.disable=function(se,Be){if(se!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Be||ce&&ce.pause(),ue=0,Ae&&(Ae.uncache=1),le&&gi(r,"refreshInit",le),L&&(L.pause(),ne.tween&&ne.tween.kill()&&(ne.tween=0)),!W)){for(var Ce=nt.length;Ce--;)if(nt[Ce].scroller===D&&nt[Ce]!==P)return;gi(D,"resize",Pl),W||gi(D,"scroll",na)}},P.kill=function(se,Be){P.disable(se,Be),ce&&!Be&&ce.kill(),l&&delete hp[l];var Ce=nt.indexOf(P);Ce>=0&&nt.splice(Ce,1),Ce===Ki&&Ru>0&&Ki--,Ce=0,nt.forEach(function(Je){return Je.scroller===P.scroller&&(Ce=1)}),Ce||ji||(P.scroll.rec=0),n&&(n.scrollTrigger=null,se&&n.revert({kill:!1}),Be||n.kill()),Ye&&[Ye,Xe,Y,ft].forEach(function(Je){return Je.parentNode&&Je.parentNode.removeChild(Je)}),Fl===P&&(Fl=0),f&&(Ae&&(Ae.uncache=1),Ce=0,nt.forEach(function(Je){return Je.pin===f&&Ce++}),Ce||(Ae.spacer=0)),i.onKill&&i.onKill(P)},nt.push(P),P.enable(!1,!1),ge&&ge(P),n&&n.add&&!Ze){var Fe=P.update;P.update=function(){P.update=Fe,it.cache++,Me||Ge||P.refresh()},we.delayedCall(.01,P.update),Ze=.01,Me=Ge=0}else P.refresh();f&&CT()},r.register=function(i){return ra||(we=i||a_(),o_()&&window.document&&r.enable(),ra=Al),ra},r.defaults=function(i){if(i)for(var n in i)Mu[n]=i[n];return Mu},r.disable=function(i,n){Al=0,nt.forEach(function(o){return o[n?"kill":"disable"](i)}),gi(at,"wheel",na),gi(_t,"scroll",na),clearInterval(_u),gi(_t,"touchcancel",ur),gi(gt,"touchstart",ur),yu(gi,_t,"pointerdown,touchstart,mousedown",G0),yu(gi,_t,"pointerup,touchend,mouseup",W0),Du.kill(),vu(gi);for(var s=0;s<it.length;s+=3)Su(gi,it[s],it[s+1]),Su(gi,it[s],it[s+2])},r.enable=function(){if(at=window,_t=document,xn=_t.documentElement,gt=_t.body,we){if(Bl=we.utils.toArray,Il=we.utils.clamp,lp=we.core.context||ur,ep=we.core.suppressOverwrites||ur,pp=at.history.scrollRestoration||"auto",up=at.pageYOffset||0,we.core.globals("ScrollTrigger",r),gt){Al=1,oa=document.createElement("div"),oa.style.height="100vh",oa.style.position="absolute",__(),ST(),qt.register(we),r.isTouch=qt.isTouch,ms=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ap=qt.isTouch===1,_i(at,"wheel",na),dp=[at,_t,xn,gt],we.matchMedia?(r.matchMedia=function(h){var d=we.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},we.addEventListener("matchMediaInit",function(){m_(),yp()}),we.addEventListener("matchMediaRevert",function(){return p_()}),we.addEventListener("matchMedia",function(){Ys(0,1),Qs("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return np(),np})):console.warn("Requires GSAP 3.11.0 or later"),np(),_i(_t,"scroll",na);var i=gt.hasAttribute("style"),n=gt.style,s=n.borderTopStyle,o=we.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Nr(gt),ii.m=Math.round(a.top+ii.sc())||0,Li.m=Math.round(a.left+Li.sc())||0,s?n.borderTopStyle=s:n.removeProperty("border-top-style"),i||(gt.setAttribute("style",""),gt.removeAttribute("style")),_u=setInterval(q0,250),we.delayedCall(.5,function(){return xu=0}),_i(_t,"touchcancel",ur),_i(gt,"touchstart",ur),yu(_i,_t,"pointerdown,touchstart,mousedown",G0),yu(_i,_t,"pointerup,touchend,mouseup",W0),op=we.utils.checkPrefix("transform"),Pu.push(op),ra=Oi(),Du=we.delayedCall(.2,Ys).pause(),sa=[_t,"visibilitychange",function(){var h=at.innerWidth,d=at.innerHeight;_t.hidden?(z0=h,k0=d):(z0!==h||k0!==d)&&Pl()},_t,"DOMContentLoaded",Ys,at,"load",Ys,at,"resize",Pl],vu(_i),nt.forEach(function(h){return h.enable(0,1)}),l=0;l<it.length;l+=3)Su(gi,it[l],it[l+1]),Su(gi,it[l],it[l+2])}else if(_t){var c=function h(){r.enable(),_t.removeEventListener("DOMContentLoaded",h)};_t.addEventListener("DOMContentLoaded",c)}}},r.config=function(i){"limitCallbacks"in i&&(tp=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(_u)||(_u=n)&&setInterval(q0,n),"ignoreMobileResize"in i&&(ap=r.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(vu(gi)||vu(_i,i.autoRefreshEvents||"none"),n_=(i.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(i,n){var s=Zi(i),o=it.indexOf(s),a=Ks(s);~o&&it.splice(o,a?6:2),n&&(a?qn.unshift(at,n,gt,n,xn,n):qn.unshift(s,n))},r.clearMatchMedia=function(i){nt.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},r.isInViewport=function(i,n,s){var o=(_n(i)?Zi(i):i).getBoundingClientRect(),a=o[s?qs:Zs]*n||0;return s?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},r.positionInViewport=function(i,n,s){_n(i)&&(i=Zi(i));var o=i.getBoundingClientRect(),a=o[s?qs:Zs],l=n==null?a/2:n in Nu?Nu[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return s?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},r.killAll=function(i){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var n=js.killAll||[];js={},n.forEach(function(s){return s()})}},r})();et.version="3.15.0";et.saveStyles=function(r){return r?Bl(r).forEach(function(e){if(e&&e.style){var t=gn.indexOf(e);t>=0&&gn.splice(t,5),gn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),lp())}}):gn};et.revert=function(r,e){return yp(!r,e)};et.create=function(r,e){return new et(r,e)};et.refresh=function(r){return r?Pl(!0):(ra||et.register())&&Ys(!0)};et.update=function(r){return++it.cache&&Or(r===!0?2:0)};et.clearScrollMemory=g_;et.maxScroll=function(r,e){return fr(r,e?Li:ii)};et.getScrollFunc=function(r,e){return Dr(Zi(r),e?Li:ii)};et.getById=function(r){return hp[r]};et.getAll=function(){return nt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};et.isScrolling=function(){return!!Fn};et.snapDirectional=vp;et.addEventListener=function(r,e){var t=js[r]||(js[r]=[]);~t.indexOf(e)||t.push(e)};et.removeEventListener=function(r,e){var t=js[r],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};et.batch=function(r,e){var t=[],i={},n=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var d=[],u=[],f=we.delayedCall(n,function(){h(d,u),d=[],u=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),u.push(p),s<=d.length&&f.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Ui(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Ui(s)&&(s=s(),_i(et,"refresh",function(){return s=e.batchMax()})),Bl(r).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(et.create(c))}),t};var $0=function(e,t,i,n){return t>n?e(n):t<0&&e(0),i>n?(n-t)/(i-t):i<0?t/(t-i):1},sp=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===xn&&r(gt,t)},Eu={auto:1,scroll:1},LT=function(e){var t=e.event,i=e.target,n=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||we.core.getCache(s),a=Oi(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==gt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Eu[(l=Un(s)).overflowY]||Eu[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Ks(s)&&(Eu[(l=Un(s)).overflowY]||Eu[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},v_=function(e,t,i,n){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&LT,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&_i(_t,qt.eventTypes[0],t_,!1,!0)},onDisable:function(){return gi(_t,qt.eventTypes[0],t_,!0)}})},NT=/(input|label|select|textarea)/i,e_,t_=function(e){var t=NT.test(e.target.tagName);(t||e_)&&(e._gsapAllow=!0,e_=t)},OT=function(e){Xs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,n=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Zi(e.target)||xn,h=we.core.globals().ScrollSmoother,d=h&&h.get(),u=ms&&(e.content&&Zi(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=Dr(c,ii),p=Dr(c,Li),_=1,m=(qt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,g=0,S=Ui(n)?function(){return n(a)}:function(){return n||2.8},A,y,b=v_(c,e.type,!0,s),w=function(){return y=!1},E=ur,x=ur,T=function(){l=fr(c,ii),x=Il(ms?1:0,l),i&&(E=Il(0,fr(c,Li))),A=Js},C=function(){u._gsap.y=Cl(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},I=function(){if(y){requestAnimationFrame(w);var Z=Cl(a.deltaY/2),ee=x(f.v-Z);if(u&&ee!==f.v+f.offset){f.offset=ee-f.v;var P=Cl((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",u._gsap.y=P+"px",f.cacheID=it.cache,Or()}return!0}f.offset&&C(),y=!0},D,X,W,O,H=function(){T(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return u&&we.set(u,{y:"+=0"}),e.ignoreCheck=function(U){return ms&&U.type==="touchmove"&&I(U)||_>1.05&&U.type!=="touchstart"||a.isGesturing||U.touches&&U.touches.length>1},e.onPress=function(){y=!1;var U=_;_=Cl((at.visualViewport&&at.visualViewport.scale||1)/m),D.pause(),U!==_&&sp(c,_>1.01?!0:i?!1:"x"),X=p(),W=f(),T(),A=Js},e.onRelease=e.onGestureStart=function(U,Z){if(f.offset&&C(),!Z)O.restart(!0);else{it.cache++;var ee=S(),P,le;i&&(P=p(),le=P+ee*.05*-U.velocityX/.227,ee*=$0(p,P,le,fr(c,Li)),D.vars.scrollX=E(le)),P=f(),le=P+ee*.05*-U.velocityY/.227,ee*=$0(f,P,le,fr(c,ii)),D.vars.scrollY=x(le),D.invalidate().duration(ee).play(.01),(ms&&D.vars.scrollY>=l||P>=l-1)&&we.to({},{onUpdate:H,duration:ee})}o&&o(U)},e.onWheel=function(){D._ts&&D.pause(),Oi()-g>1e3&&(A=0,g=Oi())},e.onChange=function(U,Z,ee,P,le){if(Js!==A&&T(),Z&&i&&p(E(P[2]===Z?X+(U.startX-U.x):p()+Z-P[1])),ee){f.offset&&C();var _e=le[2]===ee,je=_e?W+U.startY-U.y:f()+ee-le[1],qe=x(je);_e&&je!==qe&&(W+=qe-je),f(qe)}(ee||Z)&&Or()},e.onEnable=function(){sp(c,i?!1:"x"),et.addEventListener("refresh",H),_i(at,"resize",H),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),b.enable()},e.onDisable=function(){sp(c,!0),gi(at,"resize",H),et.removeEventListener("refresh",H),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new qt(e),a.iOS=ms,ms&&!f()&&f(1),ms&&we.ticker.add(ur),O=a._dc,D=we.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:x_(f,f(),function(){return D.pause()})},onUpdate:Or,onComplete:O.vars.onComplete}),a};et.sort=function(r){if(Ui(r))return nt.sort(r);var e=at.pageYOffset||0;return et.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),nt.sort(r||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};et.observe=function(r){return new qt(r)};et.normalizeScroll=function(r){if(typeof r>"u")return Ji;if(r===!0&&Ji)return Ji.enable();if(r===!1){Ji&&Ji.kill(),Ji=r;return}var e=r instanceof qt?r:OT(r);return Ji&&Ji.target===e.target&&Ji.kill(),Ks(e.target)&&(Ji=e),e};et.core={_getVelocityProp:gu,_inputObserver:v_,_scrollers:it,_proxies:qn,bridge:{ss:function(){Fn||Qs("scrollStart"),Fn=Oi()},ref:function(){return Ni}}};a_()&&we.registerPlugin(et);var y_="1.3.25";function b_(r,e,t){return Math.max(r,Math.min(e,t))}function UT(r,e,t){return(1-t)*r+t*e}function FT(r,e,t,i){return UT(r,e,1-Math.exp(-t*i))}function BT(r,e){return(r%e+e)%e}var zT=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;let t=b_(0,this.currentTime/this.duration,1);e=t>=1;let i=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=FT(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:i,easing:n,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function kT(r,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,i)},e)}}var VT=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(r,e,{autoResize:t=!0,debounce:i=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=kT(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},T_=class{events={};emit(r,...e){let t=this.events[r]||[];for(let i=0,n=t.length;i<n;i++)t[i]?.(...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},HT=100/6,gs={passive:!1};function S_(r,e){return r===1?HT:r===2?e:1}var GT=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new T_;constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,gs),this.element.addEventListener("touchstart",this.onTouchStart,gs),this.element.addEventListener("touchmove",this.onTouchMove,gs),this.element.addEventListener("touchend",this.onTouchEnd,gs)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,gs),this.element.removeEventListener("touchstart",this.onTouchStart,gs),this.element.removeEventListener("touchmove",this.onTouchMove,gs),this.element.removeEventListener("touchend",this.onTouchEnd,gs)}onTouchStart=r=>{let{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{let{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,i=-(e-this.touchStart.x)*this.options.touchMultiplier,n=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:i}=r,n=S_(i,this.window.width),s=S_(i,this.window.height);e*=n,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},M_=r=>Math.min(1,1.001-2**(-10*r)),w_=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new zT;emitter=new T_;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:S=!0,autoRaf:A=!1,anchors:y=!1,autoToggle:b=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:x=E,stopInertiaOnNavigate:T=!1}={}){window.lenisVersion=y_,window.lenis||(window.lenis={}),window.lenis.version=y_,d==="horizontal"&&(window.lenis.horizontal=!0),n===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=M_:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:i,syncTouch:n,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:S,autoRaf:A,anchors:y,autoToggle:b,allowNestedScroll:w,naiveDimensions:x,stopInertiaOnNavigate:T},this.dimensions=new VT(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new GT(t,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{let e=r.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){let i=e.find(n=>t.host===n.host&&t.pathname===n.pathname&&n.hash);if(i){let n=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,n);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}};onPointerDown=r=>{r.button===1&&this.reset()};isTouchOnSelectionHandle(r){let e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;let t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;let i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;let n=i[0],s=i[i.length-1],o=40,a=Math.hypot(t.clientX-n.left,t.clientY-n.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:e,deltaY:t,event:i}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;let n=i.type.includes("touch"),s=i.type.includes("wheel");if(n&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";let o=e===0&&t===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||n&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();let u=n&&this.options.syncTouch,f=n&&i.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{let e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:n=!0,lerp:s=n?this.options.lerp:void 0,duration:o=n?this.options.duration:void 0,easing:a=n?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!h)return;let u=r,f=e;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&u?.nodeType&&(p=u),p){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?y.left:y.top}let _=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),S=getComputedStyle(this.rootElement),A=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(A)?0:A)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=b_(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=M_:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),n&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){let i=Date.now();r._lenis||(r._lenis={});let n=r._lenis,s,o,a,l,c,h,d,u,f,p;if(i-(n.time??0)>2e3){n.time=Date.now();let w=window.getComputedStyle(r);if(n.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),h=["auto"].includes(w.overscrollBehaviorY),n.hasOverflowX=s,n.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,p=r.clientHeight,a=d>f,l=u>p,n.isScrollableX=a,n.isScrollableY=l,n.scrollWidth=d,n.scrollHeight=u,n.clientWidth=f,n.clientHeight=p,n.hasOverscrollBehaviorX=c,n.hasOverscrollBehaviorY=h}else a=n.isScrollableX,l=n.isScrollableY,s=n.hasOverflowX,o=n.hasOverflowY,d=n.scrollWidth,u=n.scrollHeight,f=n.clientWidth,p=n.clientHeight,c=n.hasOverscrollBehaviorX,h=n.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical",m,g,S,A,y,b;if(_==="horizontal")m=Math.round(r.scrollLeft),g=d-f,S=e,A=s,y=a,b=c;else if(_==="vertical")m=Math.round(r.scrollTop),g=u-p,S=t,A=o,y=l,b=h;else return!1;return!b&&(m>=g||m<=0)?!0:(S>0?m<g:m>0)&&A&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?BT(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};ot.registerPlugin(et);var WT=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ku=window.matchMedia("(pointer: coarse)").matches,yn={el:document.getElementById("preloader"),pct:document.getElementById("prePercent"),bar:document.getElementById("preBarFill"),status:document.getElementById("preStatus"),target:0,shown:0};function ha(r,e){yn.target=r,e&&(yn.status.textContent=e)}var O_=setInterval(()=>{yn.shown+=(yn.target-yn.shown)*.14;let r=Math.min(100,Math.round(yn.shown*100));yn.pct.textContent=String(r).padStart(2,"0"),yn.bar.style.transform=`scaleX(${yn.shown})`},40);function XT(){try{let r=document.createElement("canvas");return!!(r.getContext("webgl2")||r.getContext("webgl"))}catch{return!1}}if(!XT())throw document.getElementById("webglFallback").hidden=!1,yn.el.style.display="none",clearInterval(O_),new Error("WebGL unavailable");ha(.1,"INITIALIZING RENDERER");var YT=document.getElementById("gl"),vs=new kh({canvas:YT,antialias:!1,powerPreference:"high-performance"}),U_=Math.min(window.devicePixelRatio||1,1.75);vs.setPixelRatio(U_);vs.setSize(window.innerWidth,window.innerHeight);vs.toneMapping=Ps;vs.toneMappingExposure=1.05;var bn=new wo;bn.background=new Ne(328966);bn.fog=new wa(328966,.045);var Sn=new Ci(38,window.innerWidth/window.innerHeight,.1,60),Ap=7.2;Sn.position.set(0,0,Ap);var Cp=[new Ne(11796735),new Ne(58879),new Ne(16758861)],Ip=Cp[Math.floor(Math.random()*Cp.length)];function $s(r,e=.6){return new Ne(1,1,1).lerp(Ip,e).multiplyScalar(r)}function qT(){let r=Cp.filter(e=>e!==Ip);return r[Math.floor(Math.random()*r.length)]}ha(.3,"BUILDING ENVIRONMENT");var Sp=null;function F_(){let r=new Fo(vs),e=new wo,t=new Ut(new nr(24,24,24),new Rn({color:2302758,side:yi}));e.add(t);let i=(o,a,l,c,h,d,u,f)=>{let p=new Ut(new Hn(o,a),new Rn({color:new Ne(f,f,f*1.03),side:Qi}));p.position.set(l,c,h),p.rotation.set(d,u,0),e.add(p)};i(16,10,0,4,-11,.25,0,.7),i(12,12,0,-11,2,Math.PI/2,0,.4);let n=(o,a,l,c,h,d,u,f,p=.6)=>{let _=new Ut(new Hn(o,a),new Rn({color:$s(f,p),side:Qi}));_.position.set(l,c,h),_.rotation.set(d,u,0),e.add(_)};n(14,2.2,-3,10,0,Math.PI/2,0,3.2),n(14,1.6,3.5,10,-2,Math.PI/2,0,2.4),n(1.4,9,-10.5,1,-2,0,Math.PI/2,2),n(1.4,9,10.5,0,2,0,-Math.PI/2,2),n(8,6,-6,3,9,-.3,.5,1.5);let s=r.fromScene(e,.04);bn.environment=s.texture,r.dispose(),Sp&&Sp.dispose(),Sp=s}F_();var B_=new Po(16777215,.6);B_.position.set(4,6,5);bn.add(B_);var Dp=new Po($s(1,.4),.5);Dp.position.set(-6,-2,-4);bn.add(Dp);var ZT=`
vec3 mod289(vec3 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 mod289(vec4 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x){ return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`,ua=6,JT=`
uniform float uTime;
uniform float uMorph;      // 0 sphere -> 1 cube
uniform float uAmp;        // liquid noise amplitude
uniform float uNScale;     // noise spatial scale
uniform float uNSpeed;     // noise time speed
uniform float uBreathe;    // breathing scale factor
uniform float uTension;    // cube micro-deformation
uniform float uMouseStr;   // local cursor dent strength
uniform vec3  uMouseDir;   // object-space unit dir of cursor point
uniform float uPortal;     // portal opening amount
uniform vec3  uPortalAxis; // object-space axis toward camera
uniform vec4  uRipples[${ua}];   // xyz dir, w start time (-1 off)
uniform vec4  uRippleMeta[${ua}];// x type, y strength
uniform float uSweep;      // wipe-transition phase, grows over time
uniform float uSweepOn;    // wipe strength 0..1
uniform float uDispMix;    // displacement-map crossfade 0..1
uniform float uDispOn;     // displacement-map strength 0..1
uniform vec3  uBallDir;    // object-space dir toward nearest metaball
uniform float uBallStr;    // metaball attraction-bulge strength 0..1

vec3 faceNormal(vec3 p) {
  vec3 a = abs(p);
  if (a.x >= a.y && a.x >= a.z) return vec3(sign(p.x), 0.0, 0.0);
  if (a.y >= a.z) return vec3(0.0, sign(p.y), 0.0);
  return vec3(0.0, 0.0, sign(p.z));
}

float surfDisp(vec3 dir, vec3 bp) {
  float d = 0.0;
  // flowing liquid noise (two octaves)
  float n1 = snoise(bp * uNScale + vec3(0.0, uTime * uNSpeed, 0.0));
  float n2 = snoise(bp * uNScale * 1.8 + vec3(uTime * uNSpeed * 0.4, 0.0, 3.71));
  d += (n1 * 0.88 + n2 * 0.14) * uAmp;

  // cursor pressing into the metal
  float ma = acos(clamp(dot(dir, uMouseDir), -1.0, 1.0));
  d -= uMouseStr * 0.14 * exp(-ma * ma * 5.5);

  // portal aperture
  if (uPortal > 0.001) {
    float pa = acos(clamp(dot(dir, uPortalAxis), -1.0, 1.0));
    float pb = acos(clamp(dot(dir, -uPortalAxis), -1.0, 1.0));
    float hole = exp(-pa * pa * 4.5) + exp(-pb * pb * 4.5) * 0.75;
    float lip = exp(-pow(pa - 0.82, 2.0) * 16.0) * 0.22;
    d += uPortal * (lip - hole * 0.85);
    d += uPortal * sin(pa * 13.0 - uTime * 3.0) * exp(-pa * 2.4) * 0.035;
  }

  // marquee ripples
  for (int i = 0; i < ${ua}; i++) {
    float st = uRipples[i].w;
    if (st < 0.0) continue;
    float t = uTime - st;
    if (t > 3.2) continue;
    float a = acos(clamp(dot(dir, uRipples[i].xyz), -1.0, 1.0));
    float ty = uRippleMeta[i].x;
    float s = uRippleMeta[i].y;
    float w = 0.0;
    if (ty < 0.5) {           // soft wave
      w = sin(a * 9.0 - t * 5.0) * exp(-a * 1.8) * exp(-t * 1.4) * 0.11;
    } else if (ty < 1.5) {    // circular inward distortion
      w = -exp(-a * a * 9.0) * sin(min(t * 3.5, 3.14159)) * exp(-t * 1.6) * 0.15;
    } else if (ty < 2.5) {    // expanding pulse ring
      float ring = a - t * 1.45;
      w = exp(-ring * ring * 22.0) * exp(-t * 1.1) * 0.12;
    } else if (ty < 3.5) {    // directional surface shift
      w = sin(a * 4.0 - t * 4.0) * exp(-a * 1.1) * exp(-t * 1.7) * 0.085;
    } else {                  // fine micro ripples
      w = sin(a * 34.0 - t * 9.0) * exp(-a * 2.6) * exp(-t * 1.9) * 0.045;
    }
    d += w * s;
  }

  // resolved-cube micro surface tension
  d += uTension * snoise(bp * 6.0 + vec3(0.0, uTime * 0.35, 0.0)) * 0.012;

  // WebGL distortion transition: a travelling wipe-ridge sweeps the body
  if (uSweepOn > 0.001) {
    float coord = dot(dir, vec3(0.0, 1.0, 0.0)) * 0.5 + 0.5;
    float delta = coord - fract(uSweep);
    delta -= floor(delta + 0.5);
    float ridge = exp(-delta * delta * 90.0);
    d += uSweepOn * ridge * 0.09;
    d += uSweepOn * sin(coord * 40.0 - uSweep * 40.0) * exp(-abs(delta) * 14.0) * 0.02;
  }

  // displacement-map morph: crossfade between two distinct noise "maps"
  if (uDispOn > 0.001) {
    float mapA = snoise(bp * 1.6 + vec3(0.0, uTime * 0.18, 0.0));
    float mapB = (1.0 - abs(snoise(bp * 3.4 - vec3(0.0, uTime * 0.22, 0.0)))) * 2.0 - 1.0;
    d += uDispOn * mix(mapA, mapB, uDispMix) * 0.075;
  }

  // metaball attraction: body swells toward the nearest orbiting ball
  if (uBallStr > 0.001) {
    float mb = acos(clamp(dot(dir, uBallDir), -1.0, 1.0));
    d += uBallStr * 0.16 * exp(-mb * mb * 4.0);
  }

  return d;
}

vec3 surfacePoint(vec3 p) {
  vec3 dir = normalize(p);
  float m = uMorph;
  m = m * m * (3.0 - 2.0 * m);
  vec3 bp = mix(dir, p * 0.80, m) * uBreathe;
  vec3 nb = normalize(mix(dir, faceNormal(p), m));
  return bp + nb * surfDisp(dir, bp);
}

void liquidTransform(in vec3 p, out vec3 outPos, out vec3 outN) {
  outPos = surfacePoint(p);
  vec3 fn = faceNormal(p);
  vec3 t1 = (abs(fn.x) > 0.5) ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
  vec3 t2 = normalize(cross(fn, t1));
  t1 = normalize(cross(t2, fn));
  float e = 0.014;
  vec3 pa = surfacePoint(p + t1 * e);
  vec3 pb = surfacePoint(p + t2 * e);
  vec3 nrm = cross(pa - outPos, pb - outPos);
  float len = length(nrm);
  vec3 approxN = normalize(mix(normalize(p), fn, uMorph));
  nrm = len > 1e-9 ? nrm / len : approxN;
  if (dot(nrm, approxN) < 0.0) nrm = -nrm;
  outN = nrm;
}
`;ha(.5,"FORGING GEOMETRY");var Mp=ku?56:84,KT=new nr(2,2,2,Mp,Mp,Mp),kt={uTime:{value:0},uMorph:{value:0},uAmp:{value:.055},uNScale:{value:1},uNSpeed:{value:.14},uBreathe:{value:1},uTension:{value:0},uMouseStr:{value:0},uMouseDir:{value:new z(0,0,1)},uPortal:{value:0},uPortalAxis:{value:new z(0,0,1)},uRipples:{value:Array.from({length:ua},()=>new Tt(0,0,1,-1))},uRippleMeta:{value:Array.from({length:ua},()=>new Tt(0,1,0,0))},uSweep:{value:0},uSweepOn:{value:0},uDispMix:{value:0},uDispOn:{value:0},uBallDir:{value:new z(0,1,0)},uBallStr:{value:0}},Vu=new Rs({color:4868688,metalness:1,roughness:.09,envMapIntensity:1.35});Vu.onBeforeCompile=r=>{Object.assign(r.uniforms,kt),r.vertexShader=ZT+JT+r.vertexShader,r.vertexShader=r.vertexShader.replace("#include <beginnormal_vertex>",`
      vec3 liqPos, liqN;
      liquidTransform(position, liqPos, liqN);
      vec3 objectNormal = liqN;
    `).replace("#include <begin_vertex>",`
      vec3 transformed = liqPos;
    `)};Vu.customProgramCacheKey=()=>"liquid-chrome";var yt=new Ut(KT,Vu);yt.scale.setScalar(1.35);bn.add(yt);function jT(){let r=document.createElement("canvas");r.width=256,r.height=16;let e=r.getContext("2d"),t=e.createLinearGradient(0,0,256,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.2,"rgba(255,255,255,0.9)"),t.addColorStop(.8,"rgba(255,255,255,0.9)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,256,16);let i=new Ia(r);return i.colorSpace=Vi,i}var QT=jT(),Lp=new An,z_=[],$T=[{w:7,x:-3.4,y:2.6,z:-6.5,r:-.16,o:.3},{w:5.5,x:3.8,y:-1.2,z:-8,r:.1,o:.22},{w:9,x:.5,y:-4.2,z:-10,r:-.05,o:.16},{w:4,x:-4.6,y:-6.5,z:-7,r:.22,o:.25},{w:6.5,x:4.2,y:-9.8,z:-9,r:-.12,o:.2},{w:5,x:-3,y:-13.5,z:-6.8,r:.14,o:.26}];$T.forEach(r=>{let e=new Rn({map:QT,color:$s(1,.7),transparent:!0,opacity:r.o,blending:jr,depthWrite:!1}),t=new Ut(new Hn(r.w,.028),e);t.position.set(r.x,r.y,r.z),t.rotation.z=r.r,t.userData.baseY=r.y,t.userData.baseOpacity=r.o,t.userData.depth=-r.z,Lp.add(t),z_.push(e)});bn.add(Lp);var Np=new An;[[-5,-2,-14,10],[6,-8,-16,12],[0,-18,-13,9]].forEach(([r,e,t,i])=>{let n=new Ut(new Hn(i,i*.62),new Rs({color:657933,roughness:.85,metalness:.4}));n.position.set(r,e,t),Np.add(n)});bn.add(Np);var E_=ku?220:420,k_=new vi;{let r=new Float32Array(E_*3);for(let e=0;e<E_;e++)r[e*3]=(Math.random()-.5)*18,r[e*3+1]=(Math.random()-.5)*30-6,r[e*3+2]=-2-Math.random()*10;k_.setAttribute("position",new Hi(r,3))}var V_=new Co({color:2731,size:.035,sizeAttenuation:!0,transparent:!0,opacity:.32,blending:jr,depthWrite:!1}),Rp=new Ra(k_,V_);bn.add(Rp);var fa=new An;fa.visible=!1;var bp=ku?12:18,ew=new nr(2,2,2,bp,bp,bp),tw=[{baseRadius:1.9,speed:.55,phase:0,size:.3},{baseRadius:1.5,speed:-.42,phase:2.1,size:.24},{baseRadius:2.3,speed:.34,phase:4.4,size:.2}];tw.forEach(r=>{let e=new Ut(ew,Vu);e.userData={...r},fa.add(e)});bn.add(fa);var da=new An;da.visible=!1;var iw=[{w:1.7,h:2.1,x:-1.7,y:.5,z:1.3,rotY:.5,rotZ:-.08,opacity:.85},{w:1.5,h:1.9,x:1.8,y:-.5,z:.5,rotY:-.4,rotZ:.1,opacity:.78},{w:1.3,h:1.7,x:.1,y:1.1,z:2.2,rotY:.15,rotZ:.04,opacity:.7}],H_=[];iw.forEach(r=>{let e=new Na({color:16777215,metalness:0,roughness:.05,transmission:1,thickness:.6,ior:1.4,clearcoat:1,clearcoatRoughness:.1,envMapIntensity:2,transparent:!0,opacity:r.opacity,side:Qi}),t=new Hn(r.w,r.h),i=new Ut(t,e);i.position.set(r.x,r.y,r.z),i.rotation.set(0,r.rotY,r.rotZ),i.userData={baseY:r.y,baseRotY:r.rotY,baseRotZ:r.rotZ};let n=new Ao({color:$s(1,.55),transparent:!0,opacity:.6}),s=new Ca(new La(t),n);H_.push(n),i.add(s),da.add(i)});bn.add(da);var pr=new Wh(vs);pr.setPixelRatio(U_);pr.setSize(window.innerWidth,window.innerHeight);pr.addPass(new Xh(bn,Sn));var nw=new Vo(new Oe(window.innerWidth,window.innerHeight),.34,.75,.86);pr.addPass(nw);pr.addPass(new Zh);var rw={uniforms:{tDiffuse:{value:null},uCA:{value:.0026},uVel:{value:0},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uCA;
    uniform float uVel;
    uniform float uTime;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    void main() {
      vec2 c = vUv - 0.5;
      float r2 = dot(c, c);
      // velocity-scaled radial motion blur (scroll speed)
      vec3 col = vec3(0.0);
      float blur = clamp(uVel, 0.0, 1.0) * 0.02 * r2 * 4.0;
      for (int i = 0; i < 4; i++) {
        float f = float(i) / 3.0 - 0.5;
        vec2 uv = vUv + c * blur * f;
        // chromatic aberration
        vec2 off = c * (uCA + uVel * 0.002) * (1.0 + r2 * 6.0);
        col.r += texture2D(tDiffuse, uv + off).r;
        col.g += texture2D(tDiffuse, uv).g;
        col.b += texture2D(tDiffuse, uv - off).b;
      }
      col *= 0.25;
      // cinematic vignette
      col *= 1.0 - r2 * 0.55;
      // fine grain
      col += (hash(vUv * 1013.0 + fract(uTime) * 91.0) - 0.5) * 0.035;
      gl_FragColor = vec4(col, 1.0);
    }`},Pp=new ko(rw);pr.addPass(Pp);var sw=new qh;pr.addPass(sw);var dr={morph:0,x:0,y:1.55,scale:.62,rotSpeed:.1,tension:0},De={ampMul:1,speedMul:1,mouseStr:1,mouseRot:1,autoMorphOn:0,autoMorph:0,scrollStrict:0,scaleOsc:0,zoom:0,portal:0,orbit:0,parallaxMul:1,barsBoost:0,sweepOn:0,dispOn:0,ballOn:0,glassOn:0,chromeScaleMul:1},Fi={x:0,y:0,sx:0,sy:0},vn={x:0,y:0,vx:0,vy:0},G_=0,W_=0,Uu=0,ca=0,X_=0,Y_={scale:.001};window.addEventListener("pointermove",r=>{Fi.x=r.clientX/window.innerWidth*2-1,Fi.y=-(r.clientY/window.innerHeight)*2+1},{passive:!0});var ow=0,A_=0,Mn=new z,xs=new Cn;function aw(r,e,t,i=1){let n=performance.now();if(n-A_<90)return;A_=n,Mn.set(r*.85,e*.6+.15,.85).normalize(),Mn.applyQuaternion(Sn.quaternion),xs.copy(yt.quaternion).invert(),Mn.applyQuaternion(xs).normalize();let s=ow++%ua;kt.uRipples.value[s].set(Mn.x,Mn.y,Mn.z,kt.uTime.value),kt.uRippleMeta.value[s].set(t,i,0,0)}var zu=new w_({duration:1.25,smoothWheel:!WT,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r))});zu.on("scroll",r=>{G_=r.scroll,W_=r.velocity,et.update()});ot.ticker.lagSmoothing(0);function lw(){let e=(t,i)=>ot.timeline({scrollTrigger:{trigger:t,start:"top bottom",end:"top top",scrub:2.1}}).to(dr,{ease:"none",...i});e("#act2",{y:0,x:-1.55,scale:1}),ot.timeline({scrollTrigger:{trigger:"#act3",start:"top bottom",end:"top top",scrub:2.1}}).to(dr,{ease:"none",morph:.5,x:1.5,tension:.4}),ot.timeline({scrollTrigger:{trigger:"#act4",start:"top bottom",end:"top top",scrub:2.1}}).to(dr,{ease:"none",morph:1,x:-1.35,tension:1,rotSpeed:.22}),e("#act5",{x:0,y:.1,scale:.85}),ot.timeline({scrollTrigger:{trigger:"#act6",start:"top bottom",end:"top top",scrub:2.1}}).to(dr,{ease:"none",morph:1,tension:1,x:-1.45,y:0,scale:1.05,rotSpeed:.12}),e("#act7",{x:0,y:.25,scale:.5,rotSpeed:.06}),et.create({trigger:"#main",start:"top top",end:"bottom bottom",scrub:!0,onUpdate:t=>{X_=t.progress}}),document.querySelectorAll("[data-speed]").forEach(t=>{let i=parseFloat(t.dataset.speed||"1");ot.fromTo(t,{yPercent:(1-i)*90},{yPercent:-(1-i)*90,ease:"none",scrollTrigger:{trigger:t.parentElement,start:"top bottom",end:"bottom top",scrub:!0}})})}function cw(){[["marquee1",60,1],["marquee2",78,-1]].forEach(([r,e,t])=>{let n=document.getElementById(r).querySelector(".marquee-track"),s=n.innerHTML;for(;n.scrollWidth<window.innerWidth*2.2;)n.innerHTML+=s;let o=n.scrollWidth/2;ot.fromTo(n,{x:t===1?0:-o},{x:t===1?-o:0,duration:e,ease:"none",repeat:-1})}),document.querySelectorAll(".mq-item").forEach(r=>{r.addEventListener("pointerenter",()=>{let e=r.getBoundingClientRect(),t=(e.left+e.width/2)/window.innerWidth*2-1,i=-((e.top+e.height/2)/window.innerHeight*2-1);aw(t,i,parseFloat(r.dataset.ripple||"0"),1),ot.to(vn,{vy:`+=${t*.03}`,duration:.3,overwrite:!1})})})}var _s={story:{name:"SCROLL STORY",line:'\u0411\u0430\u0437\u043E\u0432\u0438\u0439 \u0440\u0435\u0436\u0438\u043C: \u0442\u0435 \u0441\u0430\u043C\u0435 \u0445\u0440\u043E\u043C\u043E\u0432\u0435 \u0442\u0456\u043B\u043E \u0440\u0443\u0445\u0430\u0454\u0442\u044C\u0441\u044F \u0456 \u0442\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0443\u0454\u0442\u044C\u0441\u044F \u0432\u0438\u043A\u043B\u044E\u0447\u043D\u043E \u0437\u0430 \u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0441\u043A\u0440\u043E\u043B\u0443 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 \u2014 \u0446\u0435 "\u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u0430" \u0442\u043E\u0447\u043A\u0430 \u0432\u0456\u0434\u043B\u0456\u043A\u0443 \u0434\u043B\u044F \u043F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F \u0437 \u0456\u043D\u0448\u0438\u043C\u0438 \u0435\u0444\u0435\u043A\u0442\u0430\u043C\u0438.',trigger:"\u041F\u0440\u043E\u0441\u0442\u043E \u0441\u043A\u0440\u043E\u043B\u044C\u0442\u0435 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443 \u0432\u0433\u043E\u0440\u0443-\u0432\u043D\u0438\u0437 \u2014 \u0444\u043E\u0440\u043C\u0430 \u0456 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F \u043E\u0431'\u0454\u043A\u0442\u0430 \u0437\u043C\u0456\u043D\u044E\u044E\u0442\u044C\u0441\u044F \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u043E \u0437 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u043E\u043C.",benefit:"\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430 \u0441\u0430\u043C\u0430 \u0441\u0442\u0430\u0454 \u0442\u0430\u0439\u043C\u043B\u0430\u0439\u043D\u043E\u043C \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0457.",best:"\u041D\u0430\u0440\u0430\u0442\u0438\u0432\u043D\u0456 \u043B\u0435\u043D\u0434\u0456\u043D\u0433\u0438 \u043D\u0430 \u0432\u0441\u044E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443."},liquid:{name:"LIQUID MORPHING",line:`\u0422\u043E\u0439 \u0441\u0430\u043C\u0438\u0439 \u043E\u0431'\u0454\u043A\u0442, \u0430\u043B\u0435 \u0448\u0443\u043C\u043E\u0432\u0430 \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u0456 \u043F\u043E\u0441\u0438\u043B\u0435\u043D\u0430 \u043C\u0430\u0439\u0436\u0435 \u0432\u0442\u0440\u0438\u0447\u0456 \u0456 \u0440\u0443\u0445\u0430\u0454\u0442\u044C\u0441\u044F \u0448\u0432\u0438\u0434\u0448\u0435 \u2014 \u043C\u0435\u0442\u0430\u043B \u0441\u0438\u043B\u044C\u043D\u0456\u0448\u0435 "\u043A\u0438\u043F\u0438\u0442\u044C", \u043D\u0430\u0432\u0456\u0442\u044C \u043A\u043E\u043B\u0438 \u0444\u043E\u0440\u043C\u0430 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0454\u0442\u044C\u0441\u044F.`,trigger:"\u041F\u0440\u043E\u0441\u0442\u043E \u0434\u0438\u0432\u0456\u0442\u044C\u0441\u044F \u043D\u0430 \u043E\u0431'\u0454\u043A\u0442 \u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u0435\u043A\u0443\u043D\u0434, \u043D\u0435 \u0440\u0443\u0445\u0430\u044E\u0447\u0438 \u043C\u0438\u0448\u043A\u043E\u044E \u0456 \u043D\u0435 \u0433\u043E\u0440\u0442\u0430\u044E\u0447\u0438 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443 \u2014 \u043F\u043E\u043C\u0456\u0442\u0438\u0442\u0435 \u043D\u0430\u0431\u0430\u0433\u0430\u0442\u043E \u0441\u0438\u043B\u044C\u043D\u0456\u0448\u0456 \u0445\u0432\u0438\u043B\u0456 \u043D\u0430 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u0456, \u043D\u0456\u0436 \u0443 Scroll Story.",benefit:`\u041E\u0431'\u0454\u043A\u0442 \u0432\u0438\u0433\u043B\u044F\u0434\u0430\u0454 \u0444\u0456\u0437\u0438\u0447\u043D\u043E \u0436\u0438\u0432\u0438\u043C \u0456 \u043F\u043B\u0430\u0432\u043D\u043E "\u043F\u0435\u0440\u0435\u0442\u0456\u043A\u0430\u0454" \u0441\u0430\u043C \u0443 \u0441\u043E\u0431\u0456 \u0431\u0435\u0437 \u0440\u0456\u0437\u043A\u0438\u0445 \u0441\u0442\u0438\u043A\u0456\u0432.`,best:"Hero-\u0441\u0435\u043A\u0446\u0456\u0457, \u043D\u0430\u0440\u0430\u0442\u0438\u0432 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0443, \u0431\u0440\u0435\u043D\u0434\u043E\u0432\u0456 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438."},shape:{name:"SHAPE MORPHING",line:"\u0422\u0443\u0442 \u0430\u043A\u0446\u0435\u043D\u0442 \u0441\u0430\u043C\u0435 \u043D\u0430 \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0456\u0457: \u0444\u043E\u0440\u043C\u0430 \u0441\u0430\u043C\u0430, \u0431\u0435\u0437 \u0443\u0447\u0430\u0441\u0442\u0456 \u0441\u043A\u0440\u043E\u043B\u0443 \u0447\u0438 \u043C\u0438\u0448\u0456, \u0431\u0435\u0437\u043F\u0435\u0440\u0435\u0440\u0432\u043D\u043E \u043E\u0441\u0446\u0438\u043B\u044E\u0454 \u043C\u0456\u0436 \u0441\u0444\u0435\u0440\u043E\u044E \u0456 \u043A\u0443\u0431\u043E\u043C \u043F\u043E \u0442\u0430\u0439\u043C\u0435\u0440\u0443.",trigger:"\u041F\u043E\u0447\u0435\u043A\u0430\u0439\u0442\u0435 2\u20133 \u0441\u0435\u043A\u0443\u043D\u0434\u0438, \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0447\u0456\u043F\u0430\u044E\u0447\u0438 \u2014 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0435, \u044F\u043A \u043E\u0431'\u0454\u043A\u0442 \u0441\u0430\u043C \u043F\u043B\u0430\u0432\u043D\u043E \u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u044E\u0454\u0442\u044C\u0441\u044F \u0437 \u043A\u0443\u043B\u0456 \u043D\u0430 \u043A\u0443\u0431 \u0456 \u043D\u0430\u0437\u0430\u0434, \u043F\u043E \u043A\u043E\u043B\u0443.",benefit:"\u0427\u0456\u0442\u043A\u0438\u0439, \u0441\u0430\u043C\u043E\u0441\u0442\u0456\u0439\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u0445\u0456\u0434 \u043C\u0456\u0436 \u0434\u0432\u043E\u043C\u0430 \u0440\u0456\u0437\u043D\u0438\u043C\u0438 \u0444\u043E\u0440\u043C\u0430\u043C\u0438 \u0432 \u043E\u0434\u043D\u043E\u043C\u0443 \u043E\u0431'\u0454\u043A\u0442\u0456.",best:"\u0420\u043E\u0437\u043A\u0440\u0438\u0442\u0442\u044F \u0444\u0456\u0447\u0456, \u043B\u043E\u0433\u043E-\u043C\u043E\u043C\u0435\u043D\u0442\u0438, \u0437\u043C\u0456\u043D\u0430 \u0441\u0442\u0430\u043D\u0443 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0443."},interactive:{name:"INTERACTIVE 3D",line:"\u041D\u0430\u0445\u0438\u043B, \u043F\u0430\u0440\u0430\u043B\u0430\u043A\u0441 \u0456 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043E\u0431'\u0454\u043A\u0442\u0430 \u0437\u0430 \u043A\u0443\u0440\u0441\u043E\u0440\u043E\u043C \u043F\u043E\u0441\u0438\u043B\u0435\u043D\u0456 \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0432\u0442\u0440\u0438\u0447\u0456 \u043F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043E \u0437\u0456 \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0438\u043C \u0440\u0435\u0436\u0438\u043C\u043E\u043C.",trigger:`\u041F\u043E\u0432\u0456\u043B\u044C\u043D\u043E \u043F\u043E\u0432\u043E\u0434\u044C\u0442\u0435 \u043C\u0438\u0448\u043A\u043E\u044E \u043F\u043E \u0435\u043A\u0440\u0430\u043D\u0443 \u0432\u043B\u0456\u0432\u043E-\u0432\u043F\u0440\u0430\u0432\u043E \u0456 \u0432\u0433\u043E\u0440\u0443-\u0432\u043D\u0438\u0437 \u2014 \u043E\u0431'\u0454\u043A\u0442 \u043F\u043E\u043C\u0456\u0442\u043D\u043E \u043D\u0430\u0445\u0438\u043B\u044F\u0454\u0442\u044C\u0441\u044F \u0439 "\u043F\u043B\u0438\u0432\u0435" \u0437\u0430 \u043A\u0443\u0440\u0441\u043E\u0440\u043E\u043C \u0437 \u0456\u043D\u0435\u0440\u0446\u0456\u0454\u044E, \u043D\u0430\u0431\u0430\u0433\u0430\u0442\u043E \u0432\u0438\u0440\u0430\u0437\u043D\u0456\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439.`,benefit:'\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430 \u0432\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F "\u0436\u0438\u0432\u043E\u044E", \u0430 \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u0432\u0456\u0434\u0440\u0435\u043D\u0434\u0435\u0440\u0435\u043D\u043E\u044E.',best:"\u041B\u0435\u043D\u0434\u0456\u043D\u0433\u0438, \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E, \u043A\u043E\u043D\u0444\u0456\u0433\u0443\u0440\u0430\u0442\u043E\u0440\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0443."},scrollmorph:{name:"SCROLL-DRIVEN MORPH",line:"\u041C\u043E\u0440\u0444 \u0441\u0444\u0435\u0440\u0430\u2192\u043A\u0443\u0431 \u0442\u0443\u0442 \u0436\u043E\u0440\u0441\u0442\u043A\u043E \u043F\u0440\u0438\u0432'\u044F\u0437\u0430\u043D\u0438\u0439 \u0434\u043E \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0443 \u0441\u043A\u0440\u043E\u043B\u0443 \u0432\u0441\u0456\u0454\u0457 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 (0\u2013100%), \u0430 \u043D\u0435 \u0434\u043E \u043E\u043A\u0440\u0435\u043C\u0438\u0445 \u0441\u0435\u043A\u0446\u0456\u0439-\u0435\u043A\u0440\u0430\u043D\u0456\u0432, \u044F\u043A \u0443 \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E\u043C\u0443 \u043D\u0430\u0440\u0430\u0442\u0438\u0432\u0456.",trigger:"\u041F\u043E\u0432\u0456\u043B\u044C\u043D\u043E \u0441\u043A\u0440\u043E\u043B\u044C\u0442\u0435 \u0432\u0441\u044E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443 \u0432\u0456\u0434 \u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u0434\u043E \u043A\u0456\u043D\u0446\u044F \u2014 \u0444\u043E\u0440\u043C\u0430 \u0437\u043C\u0456\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u0441\u0442\u0440\u043E\u0433\u043E \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0456\u0439\u043D\u043E \u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0441\u043A\u0440\u043E\u043B\u0443, \u0456 \u0441\u043A\u0440\u043E\u043B \u043D\u0430\u0437\u0430\u0434 \u043C\u0438\u0442\u0442\u0454\u0432\u043E \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0454 \u0444\u043E\u0440\u043C\u0443.",benefit:"\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u043A\u0435\u0440\u0443\u0454 \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0454\u044E \u043D\u0430\u043F\u0440\u044F\u043C\u0443 \u2014 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u0454\u0442\u044C\u0441\u044F \u0441\u0430\u043C\u0435 \u043F\u043E \u0441\u043E\u0431\u0456.",best:"\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0438-\u0456\u0441\u0442\u043E\u0440\u0456\u0457, \u043F\u043E\u043A\u0440\u043E\u043A\u043E\u0432\u0456 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0456\u0457 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0443."},scale:{name:"3D SCALE",line:"\u041E\u0431'\u0454\u043A\u0442 \u0440\u0438\u0442\u043C\u0456\u0447\u043D\u043E \u0439 \u043F\u043E\u043C\u0456\u0442\u043D\u043E \u043D\u0430\u0431\u043B\u0438\u0436\u0430\u0454\u0442\u044C\u0441\u044F \u0434\u043E \u043A\u0430\u043C\u0435\u0440\u0438 \u0442\u0430 \u0432\u0456\u0434\u0434\u0430\u043B\u044F\u0454\u0442\u044C\u0441\u044F \u2014 \u0446\u0435 \u0441\u043F\u0440\u0430\u0432\u0436\u043D\u0456\u0439 \u0440\u0443\u0445 \u0443 3D-\u043F\u0440\u043E\u0441\u0442\u043E\u0440\u0456, \u0430 \u043D\u0435 CSS-\u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438.",trigger:`\u041F\u0440\u043E\u0441\u0442\u043E \u0434\u0438\u0432\u0456\u0442\u044C\u0441\u044F \u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u0435\u043A\u0443\u043D\u0434: \u043E\u0431'\u0454\u043A\u0442 \u0441\u0430\u043C \u0446\u0438\u043A\u043B\u0456\u0447\u043D\u043E "\u043D\u0430\u0431\u043B\u0438\u0436\u0430\u0454\u0442\u044C\u0441\u044F" \u0456 "\u0432\u0456\u0434\u0445\u043E\u0434\u0438\u0442\u044C" \u0432\u0456\u0434 \u0432\u0430\u0441.`,benefit:"\u0420\u0435\u0430\u043B\u044C\u043D\u0430 \u0433\u043B\u0438\u0431\u0438\u043D\u0430 \u2014 \u0440\u0430\u0437\u043E\u043C \u0437 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u043E\u043C \u043C\u0456\u043D\u044F\u0454\u0442\u044C\u0441\u044F \u0439 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u0430, \u043F\u0430\u0440\u0430\u043B\u0430\u043A\u0441 \u0456 \u0444\u043E\u043A\u0443\u0441.",best:"\u0415\u0444\u0435\u043A\u0442\u043D\u0456 \u043F\u043E\u044F\u0432\u0438 \u043E\u0431'\u0454\u043A\u0442\u0430, \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438 \u043C\u0456\u0436 \u0441\u0435\u043A\u0446\u0456\u044F\u043C\u0438."},zoom:{name:"INFINITE ZOOM",line:`\u041A\u0430\u043C\u0435\u0440\u0430 \u0431\u0435\u0437\u043A\u0456\u043D\u0435\u0447\u043D\u043E "\u043F\u0456\u0440\u043D\u0430\u0454" \u0432 \u0445\u0440\u043E\u043C\u043E\u0432\u0443 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u044E \u043E\u0431'\u0454\u043A\u0442\u0430, \u0456 \u0432 \u043C\u043E\u043C\u0435\u043D\u0442, \u043A\u043E\u043B\u0438 \u043C\u0430\u0439\u0436\u0435 \u0432\u043F\u0438\u0440\u0430\u0454\u0442\u044C\u0441\u044F \u0432 \u043D\u0435\u0457 \u2014 \u043C\u0438\u0442\u0442\u0454\u0432\u043E \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0454\u0442\u044C\u0441\u044F \u043D\u0430 \u0441\u0442\u0430\u0440\u0442 \u0456\u0437 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u043C \u0441\u043F\u0430\u043B\u0430\u0445\u043E\u043C, \u0456 \u0446\u0438\u043A\u043B \u043F\u043E\u0432\u0442\u043E\u0440\u044E\u0454\u0442\u044C\u0441\u044F.`,trigger:'\u0414\u0438\u0432\u0456\u0442\u044C\u0441\u044F 5\u20138 \u0441\u0435\u043A\u0443\u043D\u0434 \u2014 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0435 \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0435 \u043D\u0430\u0431\u043B\u0438\u0436\u0435\u043D\u043D\u044F \u043A\u0430\u043C\u0435\u0440\u0438 \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0443 \u043C\u0435\u0442\u0430\u043B\u0443 \u0456 \u0440\u0456\u0437\u043A\u0438\u0439 "\u0441\u0442\u0440\u0438\u0431\u043E\u043A" \u043D\u0430\u0437\u0430\u0434 \u0437\u0456 \u0441\u043F\u0430\u043B\u0430\u0445\u043E\u043C.',benefit:"\u0413\u0456\u043F\u043D\u043E\u0442\u0438\u0447\u043D\u0435 \u0432\u0456\u0434\u0447\u0443\u0442\u0442\u044F \u043D\u0435\u0441\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u043E\u0457 \u0433\u043B\u0438\u0431\u0438\u043D\u0438 \u0432 \u043E\u0434\u043D\u043E\u043C\u0443 \u043E\u0431'\u0454\u043A\u0442\u0456.",best:"\u041F\u0435\u0440\u0435\u0445\u043E\u0434\u0438 \u043C\u0456\u0436 \u0440\u043E\u0437\u0434\u0456\u043B\u0430\u043C\u0438, \u0437\u0430\u043D\u0443\u0440\u044E\u044E\u0447\u0456 \u0456\u043D\u0442\u0440\u043E."},portal:{name:"PORTAL DEFORMATION",line:'\u0423 \u0446\u0435\u043D\u0442\u0440\u0456 \u0442\u0456\u043B\u0430 \u0448\u0435\u0439\u0434\u0435\u0440\u043E\u043C "\u043F\u0440\u043E\u0434\u0430\u0432\u043B\u044E\u0454\u0442\u044C\u0441\u044F" \u0440\u0456\u0434\u043A\u0438\u0439 \u043E\u0442\u0432\u0456\u0440 \u2014 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u044F \u043D\u0456\u0431\u0438 \u0432\u0442\u044F\u0433\u0443\u0454\u0442\u044C\u0441\u044F \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0443, \u043D\u0430\u0447\u0435 \u0434\u0432\u0435\u0440\u0456 \u0432 \u0456\u043D\u0448\u0438\u0439 \u043F\u0440\u043E\u0441\u0442\u0456\u0440.',trigger:`\u0414\u0438\u0432\u0456\u0442\u044C\u0441\u044F \u043D\u0430 \u0446\u0435\u043D\u0442\u0440 \u043E\u0431'\u0454\u043A\u0442\u0430 \u2014 \u0437\u0430 1\u20132 \u0441\u0435\u043A\u0443\u043D\u0434\u0438 \u043F\u0456\u0441\u043B\u044F \u0432\u0438\u0431\u043E\u0440\u0443 \u0435\u0444\u0435\u043A\u0442\u0443 \u0442\u0430\u043C \u0441\u0444\u043E\u0440\u043C\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u043A\u0440\u0443\u0433\u043B\u0430 "\u0432\u043E\u0440\u043E\u043D\u043A\u0430".`,benefit:"\u041D\u0430\u043E\u0447\u043D\u0430 \u043C\u0435\u0442\u0430\u0444\u043E\u0440\u0430 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0443, \u044F\u043A\u0443 \u0433\u043B\u044F\u0434\u0430\u0447 \u043E\u0434\u0440\u0430\u0437\u0443 \u0437\u0447\u0438\u0442\u0443\u0454.",best:'\u041F\u0435\u0440\u0435\u0445\u043E\u0434\u0438 \u043C\u0456\u0436 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430\u043C\u0438, \u043C\u043E\u043C\u0435\u043D\u0442\u0438 "\u0440\u043E\u0437\u043A\u0440\u0438\u0442\u0442\u044F" \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443.'},orbit:{name:"CAMERA ORBIT",line:"\u0421\u0430\u043C \u043E\u0431'\u0454\u043A\u0442 \u043D\u0435 \u0440\u0443\u0445\u0430\u0454\u0442\u044C\u0441\u044F \u0456 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0454 \u0444\u043E\u0440\u043C\u0443 \u2014 \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u043D\u044C\u043E\u0433\u043E \u043F\u043E \u043A\u043E\u043B\u0443 \u043E\u0431\u0435\u0440\u0442\u0430\u0454\u0442\u044C\u0441\u044F \u043A\u0430\u043C\u0435\u0440\u0430, \u044F\u043A \u0443 \u0448\u043E\u0443\u0440\u0443\u043C\u0456.",trigger:"\u041F\u0440\u043E\u0441\u0442\u043E \u043F\u043E\u0447\u0435\u043A\u0430\u0439\u0442\u0435 \u2014 \u0442\u043E\u0447\u043A\u0430 \u0437\u043E\u0440\u0443 \u0441\u0430\u043C\u0430 \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u043E \u043E\u0431\u043B\u0456\u0442\u0430\u0454 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u0438\u0439 \u043E\u0431'\u0454\u043A\u0442 \u043F\u043E \u043A\u043E\u043B\u0443, \u0431\u0435\u0437 \u0436\u043E\u0434\u043D\u0438\u0445 \u0434\u0456\u0439 \u0437 \u0432\u0430\u0448\u043E\u0433\u043E \u0431\u043E\u043A\u0443.",benefit:"\u041A\u043E\u0436\u0435\u043D \u0440\u0430\u043A\u0443\u0440\u0441 \u043E\u0431'\u0454\u043A\u0442\u0430 \u043E\u0442\u0440\u0438\u043C\u0443\u0454 \u0447\u0430\u0441 \u043D\u0430 \u0435\u043A\u0440\u0430\u043D\u0456 \u0431\u0435\u0437 \u0436\u043E\u0434\u043D\u043E\u0433\u043E \u0440\u0443\u0445\u0443 \u0441\u0430\u043C\u043E\u0433\u043E \u043E\u0431'\u0454\u043A\u0442\u0430.",best:"\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0438 \u0442\u043E\u0432\u0430\u0440\u0443, 360\xB0-\u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0456\u0457, \u0430\u0432\u0442\u043E\u0456\u043D\u0434\u0443\u0441\u0442\u0440\u0456\u044F."},parallax:{name:"PARALLAX DEPTH",line:`\u0424\u043E\u043D\u043E\u0432\u0456 \u0441\u0432\u0456\u0442\u043B\u043E\u0432\u0456 \u0441\u043C\u0443\u0433\u0438, \u0442\u0435\u043C\u043D\u0456 \u043F\u043B\u043E\u0449\u0438\u043D\u0438 \u0456 \u043F\u0438\u043B\u0438\u043D\u043A\u0438 \u043D\u0430 \u0437\u0430\u0434\u043D\u044C\u043E\u043C\u0443 \u043F\u043B\u0430\u043D\u0456 \u0440\u0443\u0445\u0430\u044E\u0442\u044C\u0441\u044F \u0456 "\u0440\u043E\u0437\u043A\u0440\u0438\u0432\u0430\u044E\u0442\u044C\u0441\u044F" \u043F\u043E\u043C\u0456\u0442\u043D\u043E \u0430\u043A\u0442\u0438\u0432\u043D\u0456\u0448\u0435 \u0439 \u0448\u0432\u0438\u0434\u0448\u0435 \u0437\u0430 \u0441\u0430\u043C \u043E\u0431'\u0454\u043A\u0442 \u043F\u0456\u0434 \u0447\u0430\u0441 \u0441\u043A\u0440\u043E\u043B\u0443.`,trigger:"\u0421\u043A\u0440\u043E\u043B\u044C\u0442\u0435 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443 \u0456 \u0434\u0438\u0432\u0456\u0442\u044C\u0441\u044F \u043D\u0430 \u0444\u043E\u043D \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u043E\u0431'\u0454\u043A\u0442\u0430 \u2014 \u0441\u043C\u0443\u0433\u0438 \u0441\u0432\u0456\u0442\u043B\u0430 \u0437\u0441\u0443\u0432\u0430\u044E\u0442\u044C\u0441\u044F \u0437\u043D\u0430\u0447\u043D\u043E \u0448\u0432\u0438\u0434\u0448\u0435, \u043D\u0456\u0436 \u0445\u0440\u043E\u043C\u043E\u0432\u0435 \u0442\u0456\u043B\u043E \u0432 \u0446\u0435\u043D\u0442\u0440\u0456.",benefit:"\u0412\u0456\u0434\u0447\u0443\u0442\u0442\u044F \u0444\u0456\u0437\u0438\u0447\u043D\u043E\u0457 \u0433\u043B\u0438\u0431\u0438\u043D\u0438 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 \u043C\u0430\u0439\u0436\u0435 \u0431\u0435\u0437 \u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443.",best:"\u0410\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u043D\u0456 \u043B\u0435\u043D\u0434\u0456\u043D\u0433\u0438, \u0440\u0435\u0434\u0430\u043A\u0446\u0456\u0439\u043D\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D, \u043F\u0456\u0434\u043A\u0430\u0437\u043A\u0438 \u0433\u043B\u0438\u0431\u0438\u043D\u0438."},mousemorph:{name:"MOUSE-REACTIVE MORPH",line:`\u041A\u0443\u0440\u0441\u043E\u0440 \u0431\u0443\u043A\u0432\u0430\u043B\u044C\u043D\u043E "\u0432\u0434\u0430\u0432\u043B\u044E\u0454" \u043C\u0435\u0442\u0430\u043B \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E \u0432 \u0442\u043E\u0447\u0446\u0456, \u043A\u0443\u0434\u0438 \u0432\u0456\u043D \u0432\u043A\u0430\u0437\u0443\u0454 \u043D\u0430 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u0456 \u043E\u0431'\u0454\u043A\u0442\u0430 \u2014 \u0446\u0435 \u043D\u0435 \u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u043D\u0430\u0445\u0438\u043B, \u0430 \u0442\u043E\u0447\u043A\u043E\u0432\u0430 \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F.`,trigger:`\u041F\u0456\u0434\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u0443\u0440\u0441\u043E\u0440 \u0432\u043F\u0440\u0438\u0442\u0443\u043B \u0434\u043E \u043E\u0431'\u0454\u043A\u0442\u0430 \u0439 \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u043E \u0432\u043E\u0434\u0456\u0442\u044C \u043F\u043E \u043D\u044C\u043E\u043C\u0443 \u2014 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0435 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u0443 \u0432\u043C'\u044F\u0442\u0438\u043D\u0443, \u044F\u043A\u0430 \u0441\u043B\u0456\u0434\u0443\u0454 \u0437\u0430 \u0432\u043A\u0430\u0437\u0456\u0432\u043D\u0438\u043A\u043E\u043C \u0456 \u043F\u043B\u0430\u0432\u043D\u043E "\u0437\u0430\u0433\u043E\u044E\u0454\u0442\u044C\u0441\u044F", \u043A\u043E\u043B\u0438 \u0432\u0438 \u0432\u0456\u0434\u0432\u043E\u0434\u0438\u0442\u0435 \u043C\u0438\u0448\u043A\u0443.`,benefit:"\u0406\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043E\u0442\u0440\u0438\u043C\u0443\u0454 \u0432\u0456\u0434\u0447\u0443\u0442\u0442\u044F \u0434\u043E\u0442\u0438\u043A\u0443 \u2014 \u0442\u0430\u043A\u0442\u0438\u043B\u044C\u043D\u0456\u0441\u0442\u044C.",best:"\u0406\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0456 hero-\u0441\u0435\u043A\u0446\u0456\u0457, \u0456\u0433\u0440\u043E\u0432\u0456 \u0431\u0440\u0435\u043D\u0434-\u043C\u043E\u043C\u0435\u043D\u0442\u0438, \u0442\u0430\u043A\u0442\u0438\u043B\u044C\u043D\u0438\u0439 UI."},webgl:{name:"WEBGL DISTORTION TRANSITION",line:"\u0425\u0432\u0438\u043B\u044F-\u0448\u043E\u0432 \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u043E \u0431\u0456\u0436\u0438\u0442\u044C \u043F\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u0456 \u0437\u043D\u0438\u0437\u0443 \u0432\u0433\u043E\u0440\u0443 \u0439 \u043E\u0433\u043E\u0440\u0442\u0430\u0454 \u0442\u0456\u043B\u043E \u2014 \u0446\u0435 \u0441\u0445\u043E\u0436\u0435 \u043D\u0430 \u043F\u0435\u0440\u0435\u0445\u0456\u0434 \u043C\u0456\u0436 \u0441\u043B\u0430\u0439\u0434\u0430\u043C\u0438, \u0442\u0456\u043B\u044C\u043A\u0438 \u0431\u0435\u0437\u043F\u0435\u0440\u0435\u0440\u0432\u043D\u0438\u0439, \u0430 \u043D\u0435 \u043E\u0434\u043D\u043E\u0440\u0430\u0437\u043E\u0432\u0438\u0439.",trigger:'\u0414\u0438\u0432\u0456\u0442\u044C\u0441\u044F \u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u0435\u043A\u0443\u043D\u0434: \u0441\u0432\u0456\u0442\u043B\u0430 "\u0445\u0432\u0438\u043B\u044F-\u0448\u043E\u0432" \u0441\u0430\u043C\u0430 \u0440\u0443\u0445\u0430\u0454\u0442\u044C\u0441\u044F \u043F\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u0456 \u0437\u043D\u0438\u0437\u0443 \u0432\u0433\u043E\u0440\u0443 \u0439 \u0437\u0430\u0446\u0438\u043A\u043B\u044E\u0454\u0442\u044C\u0441\u044F.',benefit:"\u041F\u0435\u0440\u0435\u0445\u0456\u0434 \u0432\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u043E\u0440\u0433\u0430\u043D\u0456\u0447\u043D\u0438\u043C, \u0430 \u043D\u0435 \u0440\u0456\u0437\u043A\u0438\u043C CSS-\u0444\u0435\u0439\u0434\u043E\u043C \u0447\u0438 \u043D\u0430\u0440\u0456\u0437\u043A\u043E\u044E \u043A\u0430\u0434\u0440\u0456\u0432.",best:"\u041F\u0435\u0440\u0435\u043C\u0438\u043A\u0430\u043D\u043D\u044F \u0441\u043B\u0430\u0439\u0434\u0456\u0432, \u0437\u043C\u0456\u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043E\u043A, \u043A\u0440\u043E\u0441\u0444\u0435\u0439\u0434 \u043C\u0456\u0436 \u0441\u0442\u0430\u043D\u0430\u043C\u0438 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443."},dispmap:{name:"DISPLACEMENT MAP MORPH",line:`\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440 \u0441\u0430\u043C\u043E\u0457 \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u0438 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u0456 \u0431\u0435\u0437\u043F\u0435\u0440\u0435\u0440\u0432\u043D\u043E \u043F\u0435\u0440\u0435\u0442\u0456\u043A\u0430\u0454 \u0437 \u043C'\u044F\u043A\u0438\u0445 \u0445\u0432\u0438\u043B\u044C \u0443 \u0440\u0456\u0437\u043A\u0456\u0448\u0438\u0439 "\u043A\u043B\u0456\u0442\u0438\u043D\u043D\u0438\u0439" \u0432\u0456\u0437\u0435\u0440\u0443\u043D\u043E\u043A \u0456 \u043D\u0430\u0437\u0430\u0434 \u2014 \u0444\u043E\u0440\u043C\u0430 \u0442\u0456\u043B\u0430 \u043F\u0440\u0438 \u0446\u044C\u043E\u043C\u0443 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0454\u0442\u044C\u0441\u044F.`,trigger:'\u0414\u0438\u0432\u0456\u0442\u044C\u0441\u044F \u043D\u0430 \u0434\u0440\u0456\u0431\u043D\u0438\u0439 \u043C\u0430\u043B\u044E\u043D\u043E\u043A \u0431\u043B\u0456\u043A\u0456\u0432 \u043D\u0430 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u0456 8\u201310 \u0441\u0435\u043A\u0443\u043D\u0434 \u2014 \u0432\u0456\u0437\u0435\u0440\u0443\u043D\u043E\u043A \u0441\u0430\u043C \u043F\u043E\u0441\u0442\u0443\u043F\u043E\u0432\u043E \u0437\u043C\u0456\u043D\u044E\u0454 "\u043F\u043E\u0447\u0435\u0440\u043A" \u0437 \u043F\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u043D\u0430 \u0440\u0456\u0437\u043A\u0456\u0448\u0438\u0439 \u0456 \u043D\u0430\u0432\u043F\u0430\u043A\u0438.',benefit:'\u041E\u0434\u043D\u0430 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u044F \u043C\u043E\u0436\u0435 \u043C\u0430\u0442\u0438 \u043A\u0456\u043B\u044C\u043A\u0430 \u0437\u043E\u0432\u0441\u0456\u043C \u0440\u0456\u0437\u043D\u0438\u0445 "\u043F\u043E\u0447\u0435\u0440\u043A\u0456\u0432" \u0431\u0435\u0437 \u0437\u043C\u0456\u043D\u0438 \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0456\u0457.',best:"\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E, \u0433\u0430\u043B\u0435\u0440\u0435\u0457, \u0442\u0432\u043E\u0440\u0447\u0456 \u0441\u0430\u0439\u0442\u0438 \u0437 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430\u043C\u0438 \u043C\u0456\u0436 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F\u043C\u0438."},metaball:{name:"METABALL MORPHING",line:"\u041D\u0430\u0432\u043A\u043E\u043B\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0442\u0456\u043B\u0430 \u043B\u0456\u0442\u0430\u044E\u0442\u044C \u043C\u0435\u043D\u0448\u0456 \u0445\u0440\u043E\u043C\u043E\u0432\u0456 \u043A\u0443\u043B\u044C\u043A\u0438; \u043A\u043E\u043B\u0438 \u0432\u043E\u043D\u0438 \u043D\u0430\u0431\u043B\u0438\u0436\u0430\u044E\u0442\u044C\u0441\u044F \u2014 \u0433\u043E\u043B\u043E\u0432\u043D\u0435 \u0442\u0456\u043B\u043E \u0432\u0438\u043F\u0438\u043D\u0430\u0454\u0442\u044C\u0441\u044F \u0457\u043C \u043D\u0430\u0437\u0443\u0441\u0442\u0440\u0456\u0447, \u043D\u0430\u0447\u0435 \u043A\u0440\u0430\u043F\u043B\u0456 \u043D\u0430\u043C\u0430\u0433\u0430\u044E\u0442\u044C\u0441\u044F \u0437\u043B\u0438\u0442\u0438\u0441\u044F.",trigger:`\u0421\u0442\u0435\u0436\u0442\u0435 \u0437\u0430 \u0434\u0440\u0456\u0431\u043D\u0438\u043C\u0438 \u043A\u0443\u043B\u044C\u043A\u0430\u043C\u0438 \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u043E\u0431'\u0454\u043A\u0442\u0430 \u2014 \u043A\u043E\u043B\u0438 \u043E\u0434\u043D\u0430 \u0437 \u043D\u0438\u0445 \u043F\u0456\u0434\u043B\u0456\u0442\u0430\u0454 \u0431\u043B\u0438\u0437\u044C\u043A\u043E, \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u044F \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0433\u043E \u0442\u0456\u043B\u0430 \u0432 \u0446\u044C\u043E\u043C\u0443 \u043C\u0456\u0441\u0446\u0456 \u043F\u043B\u0430\u0432\u043D\u043E "\u043D\u0430\u0434\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F" \u0457\u0439 \u043D\u0430\u0437\u0443\u0441\u0442\u0440\u0456\u0447.`,benefit:"\u0424\u043E\u0440\u043C\u0438 \u0432\u0438\u0433\u043B\u044F\u0434\u0430\u044E\u0442\u044C \u044F\u043A \u0436\u0438\u0432\u0456 \u043A\u0440\u0430\u043F\u043B\u0456 \u0440\u0456\u0434\u0438\u043D\u0438, \u0449\u043E \u043F\u0440\u0438\u0442\u044F\u0433\u0443\u044E\u0442\u044C\u0441\u044F \u0439 \u0437\u043B\u0438\u0432\u0430\u044E\u0442\u044C\u0441\u044F.",best:"\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0456 \u0444\u043E\u043D\u0438, \u0456\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0456 \u0437\u0430\u0441\u0442\u0430\u0432\u043A\u0438, \u0436\u0438\u0432\u0456 \u0431\u0440\u0435\u043D\u0434-\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438."},blob:{name:"BLOB MORPHING",line:`\u041C'\u044F\u043A\u0430 \u0444\u043E\u0440\u043C\u0430 \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u043E "\u0434\u0438\u0445\u0430\u0454" \u0437 \u043F\u0440\u0443\u0436\u0438\u043D\u043D\u0438\u043C \u0435\u0444\u0435\u043A\u0442\u043E\u043C \u2014 \u0430\u043C\u043F\u043B\u0456\u0442\u0443\u0434\u0430 \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0442\u043E \u0440\u0456\u0437\u043A\u043E \u0437\u0440\u043E\u0441\u0442\u0430\u0454 \u0437 \u043F\u0435\u0440\u0435\u0431\u0456\u0433\u043E\u043C (overshoot), \u0442\u043E \u043F\u043B\u0430\u0432\u043D\u043E \u0437\u0430\u0441\u043F\u043E\u043A\u043E\u044E\u0454\u0442\u044C\u0441\u044F, \u0456 \u0442\u0430\u043A \u043F\u043E \u043A\u043E\u043B\u0443.`,trigger:`\u0414\u0438\u0432\u0456\u0442\u044C\u0441\u044F 4\u20135 \u0441\u0435\u043A\u0443\u043D\u0434: \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u044F \u0441\u0430\u043C\u0430 \u0440\u0438\u0442\u043C\u0456\u0447\u043D\u043E "\u043F\u0440\u0443\u0436\u0438\u043D\u0438\u0442\u044C" \u2014 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0440\u0456\u0437\u043A\u0438\u0439 \u0432\u0438\u043A\u0438\u0434 \u0444\u043E\u0440\u043C\u0438, \u043F\u043E\u0442\u0456\u043C \u043C'\u044F\u043A\u0435 \u0437\u0430\u0441\u043F\u043E\u043A\u043E\u0454\u043D\u043D\u044F.`,benefit:"\u0420\u0443\u0445 \u0432\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u043F\u0440\u0443\u0436\u043D\u0438\u043C \u0456 \u0436\u0438\u0432\u0438\u043C, \u0430 \u043D\u0435 \u043C\u0435\u0445\u0430\u043D\u0456\u0447\u043D\u0438\u043C.",best:"\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u0436\u0438\u0432\u0438\u0439 \u0444\u043E\u043D, \u043C'\u044F\u043A\u0456 \u0444\u043E\u043D\u043E\u0432\u0456 \u0430\u043A\u0446\u0435\u043D\u0442\u0438 \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443."},glass:{name:"GLASSMORPHISM 3D",line:"\u041D\u0430\u0432\u043A\u043E\u043B\u043E \u0437\u043C\u0435\u043D\u0448\u0435\u043D\u043E\u0433\u043E \u0445\u0440\u043E\u043C\u043E\u0432\u043E\u0433\u043E \u0442\u0456\u043B\u0430 \u0437'\u044F\u0432\u043B\u044F\u044E\u0442\u044C\u0441\u044F \u043A\u0456\u043B\u044C\u043A\u0430 \u043D\u0430\u043F\u0456\u0432\u043F\u0440\u043E\u0437\u043E\u0440\u0438\u0445 \u0441\u043A\u043B\u044F\u043D\u0438\u0445 \u043F\u0430\u043D\u0435\u043B\u0435\u0439 \u0443 3D-\u043F\u0440\u043E\u0441\u0442\u043E\u0440\u0456 \u2014 \u0437 \u0437\u0430\u043B\u043E\u043C\u043B\u0435\u043D\u043D\u044F\u043C, \u0440\u043E\u0437\u043C\u0438\u0442\u0442\u044F\u043C \u0456 \u0432\u043B\u0430\u0441\u043D\u0438\u043C\u0438 \u0432\u0456\u0434\u0431\u0438\u0442\u043A\u0430\u043C\u0438 \u0441\u0432\u0456\u0442\u043B\u0430.",trigger:`\u041F\u0440\u0438\u0434\u0438\u0432\u0456\u0442\u044C\u0441\u044F \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u043E\u0431'\u0454\u043A\u0442\u0430 \u2014 \u0437'\u044F\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u043A\u0456\u043B\u044C\u043A\u0430 \u043F\u043B\u0430\u0432\u0430\u044E\u0447\u0438\u0445 \u043D\u0430\u043F\u0456\u0432\u043F\u0440\u043E\u0437\u043E\u0440\u0438\u0445 "\u0441\u043A\u043B\u044F\u043D\u0438\u0445" \u043F\u0430\u043D\u0435\u043B\u0435\u0439 \u043D\u0430 \u0440\u0456\u0437\u043D\u0456\u0439 \u0433\u043B\u0438\u0431\u0438\u043D\u0456, \u0449\u043E \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u043E \u0433\u043E\u0439\u0434\u0430\u044E\u0442\u044C\u0441\u044F.`,benefit:'\u0406\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043E\u0442\u0440\u0438\u043C\u0443\u0454 \u043B\u0435\u0433\u043A\u0456\u0441\u0442\u044C, \u0433\u043B\u0438\u0431\u0438\u043D\u0443 \u0456 \u0441\u0443\u0447\u0430\u0441\u043D\u0438\u0439 "\u0441\u043A\u043B\u044F\u043D\u0438\u0439" \u0432\u0438\u0433\u043B\u044F\u0434.',best:"\u041A\u0430\u0440\u0442\u043A\u0438 \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443, \u043F\u0430\u043D\u0435\u043B\u0456 \u043D\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u0457, \u0441\u0443\u0447\u0430\u0441\u043D\u0456 UI-\u0448\u0430\u0440\u0438."}},hw="story",Fu=null,Bu=null;function uw(){Ip=qT(),F_();let r=$s(1,.4);ot.to(Dp.color,{r:r.r,g:r.g,b:r.b,duration:1.1,ease:"power2.out"}),z_.forEach(e=>{let t=$s(1,.7);ot.to(e.color,{r:t.r,g:t.g,b:t.b,duration:1.1,ease:"power2.out"})}),H_.forEach(e=>{let t=$s(1,.55);ot.to(e.color,{r:t.r,g:t.g,b:t.b,duration:1.1,ease:"power2.out"})})}function Tp(r){_s[r]||(r="story"),hw=r,uw(),document.querySelectorAll(".selector-list li").forEach(s=>s.classList.toggle("active",s.dataset.mode===r)),document.querySelectorAll(".demo-chips button").forEach(s=>s.classList.toggle("active",s.dataset.mode===r)),document.getElementById("selectorValue").textContent=_s[r].name,document.getElementById("hudMode").textContent=_s[r].name.replace(/ /g,"\xA0");let e=document.getElementById("fxPanel"),t=()=>{document.getElementById("fxName").textContent=_s[r].name,document.getElementById("fxLine").textContent=_s[r].line,document.getElementById("fxTrigger").textContent=_s[r].trigger,document.getElementById("fxBenefit").textContent=_s[r].benefit,document.getElementById("fxBest").textContent=_s[r].best};r==="story"?ot.to(e,{opacity:0,y:24,duration:.4,ease:"power2.in",onComplete:()=>{e.classList.remove("visible"),e.style.visibility="hidden"}}):(e.style.visibility="visible",e.classList.add("visible"),ot.timeline().to(e,{opacity:0,y:10,duration:.22,ease:"power2.in"}).add(t).to(e,{opacity:1,y:0,duration:.55,ease:"power3.out"})),Fu&&(Fu.kill(),Fu=null),Bu&&(Bu.kill(),Bu=null);let i=1.4,n="power2.inOut";switch(ot.to(De,{ampMul:1,speedMul:1,mouseStr:1,mouseRot:1,autoMorphOn:0,scrollStrict:0,scaleOsc:0,zoom:0,portal:0,orbit:0,parallaxMul:1,barsBoost:0,sweepOn:0,dispOn:0,ballOn:0,glassOn:0,chromeScaleMul:1,duration:i,ease:n,overwrite:"auto"}),r){case"liquid":ot.to(De,{ampMul:2.7,speedMul:1.9,duration:i,ease:n});break;case"shape":ot.to(De,{autoMorphOn:1,duration:i,ease:n}),De.autoMorph=0,Fu=ot.timeline({repeat:-1}).to(De,{autoMorph:0,duration:1.2}).to(De,{autoMorph:1,duration:2.6,ease:"power2.inOut"}).to(De,{autoMorph:1,duration:1.6}).to(De,{autoMorph:0,duration:2.6,ease:"power2.inOut"});break;case"interactive":ot.to(De,{mouseRot:3.2,mouseStr:1.6,parallaxMul:1.5,duration:i,ease:n});break;case"scrollmorph":ot.to(De,{scrollStrict:1,duration:i,ease:n});break;case"scale":ot.to(De,{scaleOsc:1,duration:i,ease:n});break;case"zoom":ca=0,ot.to(De,{zoom:1,duration:i,ease:n});break;case"portal":ot.to(De,{portal:1,duration:2,ease:"power3.inOut"});break;case"orbit":ot.to(De,{orbit:1,duration:1.8,ease:n});break;case"parallax":ot.to(De,{parallaxMul:3.2,barsBoost:1,duration:i,ease:n});break;case"mousemorph":ot.to(De,{mouseStr:3.6,mouseRot:.5,duration:i,ease:n});break;case"webgl":ot.to(De,{sweepOn:1,duration:i,ease:n});break;case"dispmap":ot.to(De,{dispOn:1,duration:i,ease:n});break;case"metaball":ot.to(De,{ballOn:1,duration:i,ease:n});break;case"blob":ot.to(De,{mouseStr:1.3,duration:i,ease:n}),Bu=ot.to(De,{ampMul:3.4,duration:1.6,ease:"elastic.out(1, 0.35)",yoyo:!0,repeat:-1});break;case"glass":ot.to(De,{glassOn:1,chromeScaleMul:.68,duration:1.6,ease:n});break;case"story":ot.to(De,{ampMul:.55,speedMul:.65,duration:i,ease:n});break}if(r!=="story"){let s=document.getElementById("act6"),o=s.offsetTop+s.offsetHeight*.35-window.innerHeight*.5;zu.scrollTo(o,{duration:1.6})}else zu.scrollTo(0,{duration:1.6})}function fw(){let r=document.getElementById("selector"),e=document.getElementById("selectorBtn");e.addEventListener("click",t=>{t.stopPropagation();let i=r.classList.toggle("open");e.setAttribute("aria-expanded",i?"true":"false")}),document.addEventListener("click",()=>r.classList.remove("open")),document.querySelectorAll(".selector-list li").forEach(t=>{t.addEventListener("click",()=>{r.classList.remove("open"),Tp(t.dataset.mode)})}),document.querySelectorAll(".demo-chips button").forEach(t=>{t.addEventListener("click",()=>Tp(t.dataset.mode))}),document.getElementById("fxClose").addEventListener("click",()=>Tp("story"))}function dw(){if(ku)return;let r=document.getElementById("lens"),e=document.getElementById("lensInner"),t=document.getElementById("heroTitleWrap"),i=document.getElementById("heroTitle"),n=1.42,s=95,o=i.cloneNode(!0);o.removeAttribute("id"),o.classList.add("clone"),o.querySelectorAll(".line-inner").forEach(p=>{p.style.transform="none"}),e.appendChild(o);let a=document.getElementById("act1"),l=-300,c=-300,h=-300,d=-300,u=!1,f=0;window.addEventListener("pointermove",p=>{h=p.clientX,d=p.clientY,u||(u=!0,l=h,c=d)},{passive:!0}),ot.ticker.add(()=>{l+=(h-l)*.12,c+=(d-c)*.12;let p=a.getBoundingClientRect(),_=u&&p.bottom>180&&d<p.bottom-40&&d>0;if(f+=((_?1:0)-f)*.08,r.style.opacity=f.toFixed(3),f<.005)return;r.style.transform=`translate(${l}px, ${c}px) translate(-50%,-50%)`;let m=t.getBoundingClientRect();o.style.width=`${m.width}px`;let g=l-m.left,S=c-m.top;o.style.transform=`translate(${s-g*n}px, ${s-S*n}px) scale(${n})`})}var C_=new Ba,R_=new Oe,P_=new tr,I_=new z;function pw(){R_.set(Fi.sx,Fi.sy),C_.setFromCamera(R_,Sn),P_.set(yt.position,yt.scale.x*1.15);let r=C_.ray.intersectSphere(P_,I_),e=0;r&&(Mn.copy(I_).sub(yt.position).normalize(),xs.copy(yt.quaternion).invert(),Mn.applyQuaternion(xs),kt.uMouseDir.value.lerp(Mn,.08).normalize(),e=1);let t=kt.uMouseStr.value;kt.uMouseStr.value=t+(e*De.mouseStr-t)*.06}var D_=new za,wp=document.getElementById("zoomflash"),mw=document.getElementById("hudFill"),gw=document.getElementById("hudMorph"),L_=new z,Ep=0,_w=0,N_=0;function xw(r){let e=Math.min(D_.getDelta(),.05),t=D_.elapsedTime;kt.uTime.value=t,Fi.sx+=(Fi.x-Fi.sx)*.045,Fi.sy+=(Fi.y-Fi.sy)*.045;let i=dr.morph;De.autoMorphOn>.001&&(i=is.lerp(i,De.autoMorph,De.autoMorphOn)),De.scrollStrict>.001&&(i=is.lerp(i,X_,De.scrollStrict)),kt.uMorph.value=i;let n=4*i*(1-i);kt.uAmp.value=.06*De.ampMul*(1+n*1.3)*(1-i*.62),kt.uNSpeed.value=.14*De.speedMul*(1+n*.4),kt.uBreathe.value=1+Math.sin(t*.32)*.02,kt.uTension.value=dr.tension,kt.uPortal.value=De.portal,kt.uSweep.value=t*.16,kt.uSweepOn.value=De.sweepOn,kt.uDispOn.value=De.dispOn,kt.uDispMix.value=Math.sin(t*.35)*.5+.5,De.portal>.001&&(Mn.copy(Sn.position).sub(yt.position).normalize(),xs.copy(yt.quaternion).invert(),kt.uPortalAxis.value.copy(Mn.applyQuaternion(xs)).normalize());let s=Fi.sy*.32*De.mouseRot,o=Fi.sx*.5*De.mouseRot;vn.vx+=(s-vn.x)*.0055,vn.vy+=(o-vn.y)*.0055,vn.vx*=.97,vn.vy*=.97,vn.x+=vn.vx,vn.y+=vn.vy,yt.rotation.x=vn.x+Math.sin(t*.21)*.08,N_+=e*dr.rotSpeed,yt.rotation.y=vn.y+N_;let a=Math.sin(t*.62)*2.6*De.scaleOsc;yt.position.x=dr.x+Fi.sx*.14,yt.position.y=dr.y+Math.sin(t*.8)*.07+Fi.sy*.1,yt.position.z=a;let l=1.35*dr.scale*Y_.scale*De.chromeScaleMul;if(yt.scale.setScalar(l),fa.visible=De.ballOn>.02,fa.visible){let f=1/0,p=null;fa.children.forEach(m=>{let g=m.userData,S=t*g.speed+g.phase,A=.55+.4*Math.sin(t*.35+g.phase),y=g.baseRadius*A;m.position.set(yt.position.x+Math.cos(S)*y,yt.position.y+Math.sin(S*.8)*y*.6,yt.position.z+Math.sin(S)*y),m.rotation.set(t*.25,t*.4,0),m.scale.setScalar(l*g.size);let b=m.position.distanceTo(yt.position);b<f&&(f=b,p=m.position)}),p&&(Mn.copy(p).sub(yt.position).normalize(),xs.copy(yt.quaternion).invert(),kt.uBallDir.value.lerp(Mn.applyQuaternion(xs),.15).normalize());let _=is.clamp(1-(f-l*.9)/(l*1.3),0,1);kt.uBallStr.value+=(_*De.ballOn-kt.uBallStr.value)*.08}else kt.uBallStr.value*=.9;da.visible=De.glassOn>.02,da.visible&&da.children.forEach((f,p)=>{let _=f.userData;f.position.y=_.baseY+Math.sin(t*.4+p*1.7)*.12,f.rotation.y=_.baseRotY+Math.cos(t*.2+p*1.7)*.06,f.rotation.z=_.baseRotZ+Math.sin(t*.25+p*1.7)*.05});let c=Fi.sx*.38*De.parallaxMul,h=Fi.sy*.3*De.parallaxMul,d=Ap;if(De.zoom>.001){ca=(ca+e*.14)%1;let f=Math.pow(Math.min(ca,1),3.2);d=is.lerp(Ap,yt.position.z+l*.62,f*De.zoom);let p=ca>.93?(ca-.93)/.07:0;wp.style.opacity=String(Math.sin(p*Math.PI)*.95*De.zoom)}else parseFloat(wp.style.opacity||"0")>0&&(wp.style.opacity="0");if(Uu+=e*.55*De.orbit,De.orbit>.001){let f=d-yt.position.z,p=yt.position.x+Math.sin(Uu)*f,_=yt.position.z+Math.cos(Uu)*f;Sn.position.x=is.lerp(c,p,De.orbit),Sn.position.z=is.lerp(d,_,De.orbit),Sn.position.y=h+Math.sin(Uu*.7)*.6*De.orbit}else Sn.position.set(c,h,d);L_.set(yt.position.x*.25,yt.position.y*.3,yt.position.z*.5),Sn.lookAt(L_);let u=G_*.0011;Lp.children.forEach((f,p)=>{let _=(.35+f.userData.depth*.055)*De.parallaxMul;f.position.y=f.userData.baseY+u*_*3.2,f.material.opacity=f.userData.baseOpacity*(1+De.barsBoost*1.6)}),Np.position.y=u*1.1*De.parallaxMul,Rp.position.y=u*2.1*De.parallaxMul,Rp.rotation.y=t*.01,V_.opacity=.32*(1+De.barsBoost*.8),pw(),Ep+=(Math.min(Math.abs(W_)/60,1)-Ep)*.08,Pp.uniforms.uVel.value=Ep,Pp.uniforms.uTime.value=t,_w++%3===0&&(mw.style.transform=`scaleY(${i})`,gw.textContent=String(Math.round(i*100)).padStart(3,"0")),pr.render()}window.addEventListener("resize",()=>{let r=window.innerWidth,e=window.innerHeight;Sn.aspect=r/e,Sn.updateProjectionMatrix(),vs.setSize(r,e),pr.setSize(r,e)});function vw(){ot.timeline().to("#preloader",{clipPath:"inset(0 0 100% 0)",duration:1.05,ease:"power4.inOut",onComplete:()=>{yn.el.style.display="none"}}).fromTo("#heroTitle .line-inner",{yPercent:112,y:0},{yPercent:0,y:0,duration:1.35,ease:"power4.out",stagger:.12},"-=0.45").to(Y_,{scale:1,duration:1.6,ease:"expo.out"},"-=1.1").to(".site-header",{opacity:1,duration:.8,ease:"power2.out"},"-=0.9").to(".hud",{opacity:1,duration:.8,ease:"power2.out"},"-=0.7")}async function yw(){ha(.62,"COMPILING SHADERS");try{await vs.compileAsync(bn,Sn)}catch{}ha(.85,"CALIBRATING OPTICS"),lw(),cw(),fw(),dw(),pr.render(),ha(1,"READY"),ot.ticker.add(r=>{zu.raf(r*1e3),xw(r)}),setTimeout(()=>{clearInterval(O_),yn.pct.textContent="100",yn.bar.style.transform="scaleX(1)",vw()},450)}yw();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
