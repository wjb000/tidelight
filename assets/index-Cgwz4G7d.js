(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jc="170",Vf=0,Nl=1,Gf=2,Hu=1,Vu=2,Bn=3,Xn=0,Bt=1,Ot=2,Vn=0,as=1,Xa=2,Ul=3,Ol=4,Wf=5,Ti=100,Xf=101,qf=102,Yf=103,jf=104,Kf=200,Jf=201,Zf=202,Qf=203,qa=204,Ya=205,$f=206,ep=207,tp=208,np=209,ip=210,sp=211,rp=212,op=213,ap=214,ja=0,Ka=1,Ja=2,ds=3,Za=4,Qa=5,$a=6,ec=7,Gu=0,cp=1,lp=2,ci=0,Wu=1,Xu=2,qu=3,Kc=4,hp=5,Yu=6,ju=7,Fl="attached",up="detached",Ku=300,fs=301,ps=302,tc=303,nc=304,Po=306,Ri=1e3,ri=1001,_o=1002,wt=1003,Ju=1004,Js=1005,Gt=1006,co=1007,zn=1008,qn=1009,Zu=1010,Qu=1011,ar=1012,Jc=1013,Ci=1014,pn=1015,mn=1016,Zc=1017,Qc=1018,ms=1020,$u=35902,ed=1021,td=1022,sn=1023,nd=1024,id=1025,cs=1026,gs=1027,$c=1028,el=1029,sd=1030,tl=1031,nl=1033,lo=33776,ho=33777,uo=33778,fo=33779,ic=35840,sc=35841,rc=35842,oc=35843,ac=36196,cc=37492,lc=37496,hc=37808,uc=37809,dc=37810,fc=37811,pc=37812,mc=37813,gc=37814,vc=37815,xc=37816,_c=37817,yc=37818,Mc=37819,Sc=37820,Tc=37821,po=36492,bc=36494,wc=36495,rd=36283,Ac=36284,Ec=36285,Rc=36286,od=2200,dp=2201,fp=2202,cr=2300,lr=2301,Wo=2302,ss=2400,rs=2401,yo=2402,il=2500,pp=2501,mp=0,ad=1,Cc=2,gp=3200,vp=3201,sl=0,xp=1,si="",xt="srgb",Ht="srgb-linear",Lo="linear",it="srgb",Bi=7680,Bl=519,_p=512,yp=513,Mp=514,cd=515,Sp=516,Tp=517,bp=518,wp=519,Pc=35044,kl="300 es",Hn=2e3,Mo=2001;class Ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zl=1234567;const er=Math.PI/180,vs=180/Math.PI;function gn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function rl(i,e){return(i%e+e)%e}function Ap(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ep(i,e,t){return i!==e?(t-i)/(e-i):0}function tr(i,e,t){return(1-t)*i+t*e}function Rp(i,e,t,n){return tr(i,e,1-Math.exp(-t*n))}function Cp(i,e=1){return e-Math.abs(rl(i,e*2)-e)}function Pp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Lp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ip(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Dp(i,e){return i+Math.random()*(e-i)}function Np(i){return i*(.5-Math.random())}function Up(i){i!==void 0&&(zl=i);let e=zl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Op(i){return i*er}function Fp(i){return i*vs}function Bp(i){return(i&i-1)===0&&i!==0}function kp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hp(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function st(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const hr={DEG2RAD:er,RAD2DEG:vs,generateUUID:gn,clamp:_t,euclideanModulo:rl,mapLinear:Ap,inverseLerp:Ep,lerp:tr,damp:Rp,pingpong:Cp,smoothstep:Pp,smootherstep:Lp,randInt:Ip,randFloat:Dp,randFloatSpread:Np,seededRandom:Up,degToRad:Op,radToDeg:Fp,isPowerOfTwo:Bp,ceilPowerOfTwo:kp,floorPowerOfTwo:zp,setQuaternionFromProperEuler:Hp,normalize:st,denormalize:fn};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,s,r,o,a,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],x=s[1],M=s[4],_=s[7],C=s[2],w=s[5],P=s[8];return r[0]=o*v+a*x+c*C,r[3]=o*m+a*M+c*w,r[6]=o*p+a*_+c*P,r[1]=l*v+h*x+u*C,r[4]=l*m+h*M+u*w,r[7]=l*p+h*_+u*P,r[2]=d*v+f*x+g*C,r[5]=d*m+f*M+g*w,r[8]=d*p+f*_+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xo=new ke;function ld(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vp(){const i=ur("canvas");return i.style.display="block",i}const Hl={};function Zs(i){i in Hl||(Hl[i]=!0,console.warn(i))}function Gp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Wp(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Xp(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qe={enabled:!0,workingColorSpace:Ht,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(i.r=ls(i.r),i.g=ls(i.g),i.b=ls(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===si?Lo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Vl=[.64,.33,.3,.6,.15,.06],Gl=[.2126,.7152,.0722],Wl=[.3127,.329],Xl=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ql=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[Ht]:{primaries:Vl,whitePoint:Wl,transfer:Lo,toXYZ:Xl,fromXYZ:ql,luminanceCoefficients:Gl,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:Vl,whitePoint:Wl,transfer:it,toXYZ:Xl,fromXYZ:ql,luminanceCoefficients:Gl,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}});let ki;class qp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=ur("canvas")),ki.width=e.width,ki.height=e.height;const n=ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yp=0;class hd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=gn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qo(s[o].image)):r.push(qo(s[o]))}else r=qo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jp=0;class gt extends Ii{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,n=ri,s=ri,r=Gt,o=zn,a=sn,c=qn,l=gt.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=gn(),this.name="",this.source=new hd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ri:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ri:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=Ku;gt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,s=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,_=(f+1)/2,C=(p+1)/2,w=(h+d)/4,P=(u+v)/4,R=(g+m)/4;return M>_&&M>C?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=P/n):_>C?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=R/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=R/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kp extends Ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new gt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jt extends Kp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ud extends gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jp extends gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*v,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const C=Math.sqrt(M),w=Math.atan2(C,p*x);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const _=a*x;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+v*_,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yo=new L,Yl=new vn;class xn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Rr.subVectors(this.max,Us),zi.subVectors(e.a,Us),Hi.subVectors(e.b,Us),Vi.subVectors(e.c,Us),Jn.subVectors(Hi,zi),Zn.subVectors(Vi,Hi),fi.subVectors(zi,Vi);let t=[0,-Jn.z,Jn.y,0,-Zn.z,Zn.y,0,-fi.z,fi.y,Jn.z,0,-Jn.x,Zn.z,0,-Zn.x,fi.z,0,-fi.x,-Jn.y,Jn.x,0,-Zn.y,Zn.x,0,-fi.y,fi.x,0];return!jo(t,zi,Hi,Vi,Rr)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,zi,Hi,Vi,Rr))?!1:(Cr.crossVectors(Jn,Zn),t=[Cr.x,Cr.y,Cr.z],jo(t,zi,Hi,Vi,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ln=[new L,new L,new L,new L,new L,new L,new L,new L],hn=new L,Er=new xn,zi=new L,Hi=new L,Vi=new L,Jn=new L,Zn=new L,fi=new L,Us=new L,Rr=new L,Cr=new L,pi=new L;function jo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){pi.fromArray(i,r);const a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),c=e.dot(pi),l=t.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Zp=new xn,Os=new L,Ko=new L;class An{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const t=Os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Os,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(Ko)),this.expandByPoint(Os.copy(e.center).sub(Ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new L,Jo=new L,Pr=new L,Qn=new L,Zo=new L,Lr=new L,Qo=new L;class Io{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Jo.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(Jo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Pr),a=Qn.dot(this.direction),c=-Qn.dot(Pr),l=Qn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jo).addScaledVector(Pr,d),f}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,s,r){Zo.subVectors(t,e),Lr.subVectors(n,e),Qo.crossVectors(Zo,Lr);let o=this.direction.dot(Qo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,e);const c=a*this.direction.dot(Lr.crossVectors(Qn,Lr));if(c<0)return null;const l=a*this.direction.dot(Zo.cross(Qn));if(l<0||c+l>o)return null;const h=-a*Qn.dot(Qo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qp,e,$p)}lookAt(e,t,n){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),$n.crossVectors(n,Yt),$n.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),$n.crossVectors(n,Yt)),$n.normalize(),Ir.crossVectors(Yt,$n),s[0]=$n.x,s[4]=Ir.x,s[8]=Yt.x,s[1]=$n.y,s[5]=Ir.y,s[9]=Yt.y,s[2]=$n.z,s[6]=Ir.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],M=n[7],_=n[11],C=n[15],w=s[0],P=s[4],R=s[8],b=s[12],S=s[1],I=s[5],W=s[9],V=s[13],A=s[2],D=s[6],N=s[10],H=s[14],O=s[3],ne=s[7],oe=s[11],B=s[15];return r[0]=o*w+a*S+c*A+l*O,r[4]=o*P+a*I+c*D+l*ne,r[8]=o*R+a*W+c*N+l*oe,r[12]=o*b+a*V+c*H+l*B,r[1]=h*w+u*S+d*A+f*O,r[5]=h*P+u*I+d*D+f*ne,r[9]=h*R+u*W+d*N+f*oe,r[13]=h*b+u*V+d*H+f*B,r[2]=g*w+v*S+m*A+p*O,r[6]=g*P+v*I+m*D+p*ne,r[10]=g*R+v*W+m*N+p*oe,r[14]=g*b+v*V+m*H+p*B,r[3]=x*w+M*S+_*A+C*O,r[7]=x*P+M*I+_*D+C*ne,r[11]=x*R+M*W+_*N+C*oe,r[15]=x*b+M*V+_*H+C*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+v*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],x=u*m*l-v*d*l+v*c*f-a*m*f-u*c*p+a*d*p,M=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,_=h*v*l-g*u*l+g*a*f-o*v*f-h*a*p+o*u*p,C=g*u*c-h*v*c-g*a*d+o*v*d+h*a*m-o*u*m,w=t*x+n*M+s*_+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return e[0]=x*P,e[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*P,e[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*p+n*c*p)*P,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*P,e[4]=M*P,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*P,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*P,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*P,e[8]=_*P,e[9]=(g*u*r-h*v*r-g*n*f+t*v*f+h*n*p-t*u*p)*P,e[10]=(o*v*r-g*a*r+g*n*l-t*v*l-o*n*p+t*a*p)*P,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*P,e[12]=C*P,e[13]=(h*v*s-g*u*s+g*n*d-t*v*d-h*n*m+t*u*m)*P,e[14]=(g*a*s-o*v*s-g*n*c+t*v*c+o*n*m-t*a*m)*P,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,x=c*l,M=c*h,_=c*u,C=n.x,w=n.y,P=n.z;return s[0]=(1-(v+p))*C,s[1]=(f+_)*C,s[2]=(g-M)*C,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(d+p))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(g+M)*P,s[9]=(m-x)*P,s[10]=(1-(d+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Gi.set(s[0],s[1],s[2]).length();const o=Gi.set(s[4],s[5],s[6]).length(),a=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],un.copy(this);const l=1/r,h=1/o,u=1/a;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,t.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Hn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===Hn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Mo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Hn){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,f=(n+s)*h;let g,v;if(a===Hn)g=(o+r)*u,v=-2*u;else if(a===Mo)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gi=new L,un=new Ue,Qp=new L(0,0,0),$p=new L(1,1,1),$n=new L,Ir=new L,Yt=new L,jl=new Ue,Kl=new vn;class bn{constructor(e=0,t=0,n=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class dd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let em=0;const Jl=new L,Wi=new vn,Dn=new Ue,Dr=new L,Fs=new L,tm=new L,nm=new vn,Zl=new L(1,0,0),Ql=new L(0,1,0),$l=new L(0,0,1),eh={type:"added"},im={type:"removed"},Xi={type:"childadded",child:null},$o={type:"childremoved",child:null};class ct extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new L,t=new bn,n=new vn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new ke}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(Zl,e)}rotateY(e){return this.rotateOnAxis(Ql,e)}rotateZ(e){return this.rotateOnAxis($l,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zl,e)}translateY(e){return this.translateOnAxis(Ql,e)}translateZ(e){return this.translateOnAxis($l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dr.copy(e):Dr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Fs,Dr,this.up):Dn.lookAt(Dr,Fs,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eh),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(im),$o.child=e,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eh),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,tm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,nm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ct.DEFAULT_UP=new L(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new L,Nn=new L,ea=new L,Un=new L,qi=new L,Yi=new L,th=new L,ta=new L,na=new L,ia=new L,sa=new Je,ra=new Je,oa=new Je;class tn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),Nn.subVectors(n,t),ea.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(Nn),c=dn.dot(ea),l=Nn.dot(Nn),h=Nn.dot(ea),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Un.x),c.addScaledVector(o,Un.y),c.addScaledVector(a,Un.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return sa.setScalar(0),ra.setScalar(0),oa.setScalar(0),sa.fromBufferAttribute(e,t),ra.fromBufferAttribute(e,n),oa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(sa,r.x),o.addScaledVector(ra,r.y),o.addScaledVector(oa,r.z),o}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),Nn.subVectors(e,t),dn.cross(Nn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),dn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return tn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;qi.subVectors(s,n),Yi.subVectors(r,n),ta.subVectors(e,n);const c=qi.dot(ta),l=Yi.dot(ta);if(c<=0&&l<=0)return t.copy(n);na.subVectors(e,s);const h=qi.dot(na),u=Yi.dot(na);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(qi,o);ia.subVectors(e,r);const f=qi.dot(ia),g=Yi.dot(ia);if(g>=0&&f<=g)return t.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Yi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return th.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(th,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function aa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=rl(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=aa(o,r,e+1/3),this.g=aa(o,r,e),this.b=aa(o,r,e-1/3)}return qe.toWorkingColorSpace(this,s),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const n=fd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return qe.fromWorkingColorSpace(Pt.copy(this),e),Math.round(_t(Pt.r*255,0,255))*65536+Math.round(_t(Pt.g*255,0,255))*256+Math.round(_t(Pt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Pt.copy(this),t);const n=Pt.r,s=Pt.g,r=Pt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=xt){qe.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,s=Pt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Nr);const n=tr(ei.h,Nr.h,t),s=tr(ei.s,Nr.s,t),r=tr(ei.l,Nr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new _e;_e.NAMES=fd;let sm=0;class on extends Ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=gn(),this.name="",this.blending=as,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ya,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ya&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wt extends on{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new L,Ur=new ae;class At{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pc,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pc&&(e.usage=this.usage),e}}class pd extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class md extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rm=0;const $t=new Ue,ca=new ct,ji=new L,jt=new xn,Bs=new xn,St=new L;class Tt extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ld(e)?md:pd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return ca.lookAt(e),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(jt.min,Bs.min),jt.expandByPoint(St),St.addVectors(jt.max,Bs.max),jt.expandByPoint(St)):(jt.expandByPoint(Bs.min),jt.expandByPoint(Bs.max))}jt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)St.fromBufferAttribute(a,l),c&&(ji.fromBufferAttribute(e,l),St.add(ji)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new L,c[R]=new L;const l=new L,h=new L,u=new L,d=new ae,f=new ae,g=new ae,v=new L,m=new L;function p(R,b,S){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[R].add(v),a[b].add(v),a[S].add(v),c[R].add(m),c[b].add(m),c[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,b=x.length;R<b;++R){const S=x[R],I=S.start,W=S.count;for(let V=I,A=I+W;V<A;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const M=new L,_=new L,C=new L,w=new L;function P(R){C.fromBufferAttribute(s,R),w.copy(C);const b=a[R];M.copy(b),M.sub(C.multiplyScalar(C.dot(b))).normalize(),_.crossVectors(w,b);const I=_.dot(c[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,I)}for(let R=0,b=x.length;R<b;++R){const S=x[R],I=S.start,W=S.count;for(let V=I,A=I+W;V<A;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new At(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nh=new Ue,mi=new Io,Or=new An,ih=new L,Fr=new L,Br=new L,kr=new L,la=new L,zr=new L,sh=new L,Hr=new L;class Ee extends ct{constructor(e=new Tt,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(la.fromBufferAttribute(u,e),o?zr.addScaledVector(la,h):zr.addScaledVector(la.sub(t),h))}t.add(zr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(Or.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Or,ih)===null||mi.origin.distanceToSquared(ih)>(e.far-e.near)**2))&&(nh.copy(r).invert(),mi.copy(e.ray).applyMatrix4(nh),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,C=M;_<C;_+=3){const w=a.getX(_),P=a.getX(_+1),R=a.getX(_+2);s=Vr(this,p,e,n,l,h,u,w,P,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=Vr(this,o,e,n,l,h,u,x,M,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,C=M;_<C;_+=3){const w=_,P=_+1,R=_+2;s=Vr(this,p,e,n,l,h,u,w,P,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=m,M=m+1,_=m+2;s=Vr(this,o,e,n,l,h,u,x,M,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function om(i,e,t,n,s,r,o,a){let c;if(e.side===Bt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Xn,a),c===null)return null;Hr.copy(a),Hr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Hr);return l<t.near||l>t.far?null:{distance:l,point:Hr.clone(),object:i}}function Vr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Fr),i.getVertexPosition(c,Br),i.getVertexPosition(l,kr);const h=om(i,e,t,n,Fr,Br,kr,sh);if(h){const u=new L;tn.getBarycoord(sh,Fr,Br,kr,u),s&&(h.uv=tn.getInterpolatedAttribute(s,a,c,l,u,new ae)),r&&(h.uv1=tn.getInterpolatedAttribute(r,a,c,l,u,new ae)),o&&(h.normal=tn.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new L,materialIndex:0};tn.getNormal(Fr,Br,kr,d.normal),h.face=d,h.barycoord=u}return h}class kt extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2));function g(v,m,p,x,M,_,C,w,P,R,b){const S=_/P,I=C/R,W=_/2,V=C/2,A=w/2,D=P+1,N=R+1;let H=0,O=0;const ne=new L;for(let oe=0;oe<N;oe++){const B=oe*I-V;for(let Z=0;Z<D;Z++){const ge=Z*S-W;ne[v]=ge*x,ne[m]=B*M,ne[p]=A,l.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[p]=w>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Z/P),u.push(1-oe/R),H+=1}}for(let oe=0;oe<R;oe++)for(let B=0;B<P;B++){const Z=d+B+D*oe,ge=d+B+D*(oe+1),Y=d+(B+1)+D*(oe+1),re=d+(B+1)+D*oe;c.push(Z,ge,re),c.push(ge,Y,re),O+=6}a.addGroup(f,O,b),f+=O,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Nt(i){const e={};for(let t=0;t<i.length;t++){const n=xs(i[t]);for(const s in n)e[s]=n[s]}return e}function am(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const li={clone:xs,merge:Nt};var cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mt extends on{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vd extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new L,rh=new ae,oh=new ae;class Ut extends vd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,rh,oh),t.subVectors(oh,rh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=-90,Ji=1;class hm extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ut(Ki,Ji,e,t);s.layers=this.layers,this.add(s);const r=new Ut(Ki,Ji,e,t);r.layers=this.layers,this.add(r);const o=new Ut(Ki,Ji,e,t);o.layers=this.layers,this.add(o);const a=new Ut(Ki,Ji,e,t);a.layers=this.layers,this.add(a);const c=new Ut(Ki,Ji,e,t);c.layers=this.layers,this.add(c);const l=new Ut(Ki,Ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class xd extends gt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:fs,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class um extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new xd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kt(5,5,5),r=new mt({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Vn});r.uniforms.tEquirect.value=t;const o=new Ee(s,r),a=t.minFilter;return t.minFilter===zn&&(t.minFilter=Gt),new hm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const ha=new L,dm=new L,fm=new ke;class Mi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ha.subVectors(n,t).cross(dm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ha),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fm.getNormalMatrix(e),s=this.coplanarPoint(ha).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new An,Gr=new L;class ol{constructor(e=new Mi,t=new Mi,n=new Mi,s=new Mi,r=new Mi,o=new Mi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],x=s[13],M=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+o,d+h,m+g,_+x).normalize(),n[3].setComponents(c-o,d-h,m-g,_-x).normalize(),n[4].setComponents(c-a,d-u,m-v,_-M).normalize(),t===Hn)n[5].setComponents(c+a,d+u,m+v,_+M).normalize();else if(t===Mo)n[5].setComponents(a,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Gr.x=s.normal.x>0?e.max.x:e.min.x,Gr.y=s.normal.y>0?e.max.y:e.min.y,Gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _d(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function pm(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Di extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const x=p*d-o;for(let M=0;M<l;M++){const _=M*u-r;g.push(_,-x,0),v.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const M=x+l*p,_=x+l*(p+1),C=x+1+l*(p+1),w=x+1+l*p;f.push(M,_,w),f.push(_,C,w)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.widthSegments,e.heightSegments)}}var mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gm=`#ifdef USE_ALPHAHASH
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
#endif`,vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ym=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mm=`#ifdef USE_AOMAP
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
#endif`,Sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tm=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rm=`#ifdef USE_IRIDESCENCE
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
#endif`,Cm=`#ifdef USE_BUMPMAP
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
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bm=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,km=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zm=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ym=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ng=`#ifdef USE_GRADIENTMAP
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
}`,ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,og=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,ag=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,fg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pg=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,gg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bg=`#if defined( USE_POINTS_UV )
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
#endif`,wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`#ifdef USE_MORPHTARGETS
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
#endif`,Lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fg=`#ifdef USE_NORMALMAP
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
#endif`,Bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,$g=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,e0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t0=`#ifdef USE_SKINNING
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
#endif`,n0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i0=`#ifdef USE_SKINNING
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
#endif`,s0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,l0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m0=`uniform sampler2D t2D;
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`#include <common>
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
}`,M0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,S0=`#define DISTANCE
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
}`,T0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`uniform float scale;
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
}`,E0=`uniform vec3 diffuse;
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
}`,R0=`#include <common>
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
}`,C0=`uniform vec3 diffuse;
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
}`,P0=`#define LAMBERT
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
}`,L0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,I0=`#define MATCAP
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
}`,D0=`#define MATCAP
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
}`,N0=`#define NORMAL
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
}`,U0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,O0=`#define PHONG
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
}`,F0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,B0=`#define STANDARD
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
}`,k0=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,z0=`#define TOON
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
}`,H0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,V0=`uniform float size;
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
}`,G0=`uniform vec3 diffuse;
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
}`,W0=`#include <common>
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
}`,X0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,q0=`uniform float rotation;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:mm,alphahash_pars_fragment:gm,alphamap_fragment:vm,alphamap_pars_fragment:xm,alphatest_fragment:_m,alphatest_pars_fragment:ym,aomap_fragment:Mm,aomap_pars_fragment:Sm,batching_pars_vertex:Tm,batching_vertex:bm,begin_vertex:wm,beginnormal_vertex:Am,bsdfs:Em,iridescence_fragment:Rm,bumpmap_pars_fragment:Cm,clipping_planes_fragment:Pm,clipping_planes_pars_fragment:Lm,clipping_planes_pars_vertex:Im,clipping_planes_vertex:Dm,color_fragment:Nm,color_pars_fragment:Um,color_pars_vertex:Om,color_vertex:Fm,common:Bm,cube_uv_reflection_fragment:km,defaultnormal_vertex:zm,displacementmap_pars_vertex:Hm,displacementmap_vertex:Vm,emissivemap_fragment:Gm,emissivemap_pars_fragment:Wm,colorspace_fragment:Xm,colorspace_pars_fragment:qm,envmap_fragment:Ym,envmap_common_pars_fragment:jm,envmap_pars_fragment:Km,envmap_pars_vertex:Jm,envmap_physical_pars_fragment:ag,envmap_vertex:Zm,fog_vertex:Qm,fog_pars_vertex:$m,fog_fragment:eg,fog_pars_fragment:tg,gradientmap_pars_fragment:ng,lightmap_pars_fragment:ig,lights_lambert_fragment:sg,lights_lambert_pars_fragment:rg,lights_pars_begin:og,lights_toon_fragment:cg,lights_toon_pars_fragment:lg,lights_phong_fragment:hg,lights_phong_pars_fragment:ug,lights_physical_fragment:dg,lights_physical_pars_fragment:fg,lights_fragment_begin:pg,lights_fragment_maps:mg,lights_fragment_end:gg,logdepthbuf_fragment:vg,logdepthbuf_pars_fragment:xg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:yg,map_fragment:Mg,map_pars_fragment:Sg,map_particle_fragment:Tg,map_particle_pars_fragment:bg,metalnessmap_fragment:wg,metalnessmap_pars_fragment:Ag,morphinstance_vertex:Eg,morphcolor_vertex:Rg,morphnormal_vertex:Cg,morphtarget_pars_vertex:Pg,morphtarget_vertex:Lg,normal_fragment_begin:Ig,normal_fragment_maps:Dg,normal_pars_fragment:Ng,normal_pars_vertex:Ug,normal_vertex:Og,normalmap_pars_fragment:Fg,clearcoat_normal_fragment_begin:Bg,clearcoat_normal_fragment_maps:kg,clearcoat_pars_fragment:zg,iridescence_pars_fragment:Hg,opaque_fragment:Vg,packing:Gg,premultiplied_alpha_fragment:Wg,project_vertex:Xg,dithering_fragment:qg,dithering_pars_fragment:Yg,roughnessmap_fragment:jg,roughnessmap_pars_fragment:Kg,shadowmap_pars_fragment:Jg,shadowmap_pars_vertex:Zg,shadowmap_vertex:Qg,shadowmask_pars_fragment:$g,skinbase_vertex:e0,skinning_pars_vertex:t0,skinning_vertex:n0,skinnormal_vertex:i0,specularmap_fragment:s0,specularmap_pars_fragment:r0,tonemapping_fragment:o0,tonemapping_pars_fragment:a0,transmission_fragment:c0,transmission_pars_fragment:l0,uv_pars_fragment:h0,uv_pars_vertex:u0,uv_vertex:d0,worldpos_vertex:f0,background_vert:p0,background_frag:m0,backgroundCube_vert:g0,backgroundCube_frag:v0,cube_vert:x0,cube_frag:_0,depth_vert:y0,depth_frag:M0,distanceRGBA_vert:S0,distanceRGBA_frag:T0,equirect_vert:b0,equirect_frag:w0,linedashed_vert:A0,linedashed_frag:E0,meshbasic_vert:R0,meshbasic_frag:C0,meshlambert_vert:P0,meshlambert_frag:L0,meshmatcap_vert:I0,meshmatcap_frag:D0,meshnormal_vert:N0,meshnormal_frag:U0,meshphong_vert:O0,meshphong_frag:F0,meshphysical_vert:B0,meshphysical_frag:k0,meshtoon_vert:z0,meshtoon_frag:H0,points_vert:V0,points_frag:G0,shadow_vert:W0,shadow_frag:X0,sprite_vert:q0,sprite_frag:Y0},he={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Sn={basic:{uniforms:Nt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Nt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new _e(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Nt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Nt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Nt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new _e(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Nt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Nt([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Nt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Nt([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Nt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Nt([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Nt([he.common,he.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Nt([he.lights,he.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Sn.physical={uniforms:Nt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Wr={r:0,b:0,g:0},vi=new bn,j0=new Ue;function K0(i,e,t,n,s,r,o){const a=new _e(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:e).get(M)),M}function v(x){let M=!1;const _=g(x);_===null?p(a,c):_&&_.isColor&&(p(_,1),M=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,M){const _=g(M);_&&(_.isCubeTexture||_.mapping===Po)?(h===void 0&&(h=new Ee(new kt(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:xs(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vi.copy(M.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(j0.makeRotationFromEuler(vi)),h.material.toneMapped=qe.getTransfer(_.colorSpace)!==it,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ee(new Di(2,2),new mt({name:"BackgroundMaterial",uniforms:xs(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=qe.getTransfer(_.colorSpace)!==it,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,M){x.getRGB(Wr,gd(i)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:v,addToRenderList:m}}function J0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,I,W,V,A){let D=!1;const N=u(V,W,I);r!==N&&(r=N,l(r.object)),D=f(S,V,W,A),D&&g(S,V,W,A),A!==null&&e.update(A,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,_(S,I,W,V),A!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,I,W){const V=W.wireframe===!0;let A=n[S.id];A===void 0&&(A={},n[S.id]=A);let D=A[I.id];D===void 0&&(D={},A[I.id]=D);let N=D[V];return N===void 0&&(N=d(c()),D[V]=N),N}function d(S){const I=[],W=[],V=[];for(let A=0;A<t;A++)I[A]=0,W[A]=0,V[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:V,object:S,attributes:{},index:null}}function f(S,I,W,V){const A=r.attributes,D=I.attributes;let N=0;const H=W.getAttributes();for(const O in H)if(H[O].location>=0){const oe=A[O];let B=D[O];if(B===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(B=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(B=S.instanceColor)),oe===void 0||oe.attribute!==B||B&&oe.data!==B.data)return!0;N++}return r.attributesNum!==N||r.index!==V}function g(S,I,W,V){const A={},D=I.attributes;let N=0;const H=W.getAttributes();for(const O in H)if(H[O].location>=0){let oe=D[O];oe===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor));const B={};B.attribute=oe,oe&&oe.data&&(B.data=oe.data),A[O]=B,N++}r.attributes=A,r.attributesNum=N,r.index=V}function v(){const S=r.newAttributes;for(let I=0,W=S.length;I<W;I++)S[I]=0}function m(S){p(S,0)}function p(S,I){const W=r.newAttributes,V=r.enabledAttributes,A=r.attributeDivisors;W[S]=1,V[S]===0&&(i.enableVertexAttribArray(S),V[S]=1),A[S]!==I&&(i.vertexAttribDivisor(S,I),A[S]=I)}function x(){const S=r.newAttributes,I=r.enabledAttributes;for(let W=0,V=I.length;W<V;W++)I[W]!==S[W]&&(i.disableVertexAttribArray(W),I[W]=0)}function M(S,I,W,V,A,D,N){N===!0?i.vertexAttribIPointer(S,I,W,A,D):i.vertexAttribPointer(S,I,W,V,A,D)}function _(S,I,W,V){v();const A=V.attributes,D=W.getAttributes(),N=I.defaultAttributeValues;for(const H in D){const O=D[H];if(O.location>=0){let ne=A[H];if(ne===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){const oe=ne.normalized,B=ne.itemSize,Z=e.get(ne);if(Z===void 0)continue;const ge=Z.buffer,Y=Z.type,re=Z.bytesPerElement,ve=Y===i.INT||Y===i.UNSIGNED_INT||ne.gpuType===Jc;if(ne.isInterleavedBufferAttribute){const ue=ne.data,Le=ue.stride,Ae=ne.offset;if(ue.isInstancedInterleavedBuffer){for(let De=0;De<O.locationSize;De++)p(O.location+De,ue.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let De=0;De<O.locationSize;De++)m(O.location+De);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let De=0;De<O.locationSize;De++)M(O.location+De,B/O.locationSize,Y,oe,Le*re,(Ae+B/O.locationSize*De)*re,ve)}else{if(ne.isInstancedBufferAttribute){for(let ue=0;ue<O.locationSize;ue++)p(O.location+ue,ne.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ue=0;ue<O.locationSize;ue++)m(O.location+ue);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let ue=0;ue<O.locationSize;ue++)M(O.location+ue,B/O.locationSize,Y,oe,B*re,B/O.locationSize*ue*re,ve)}}else if(N!==void 0){const oe=N[H];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(O.location,oe);break;case 3:i.vertexAttrib3fv(O.location,oe);break;case 4:i.vertexAttrib4fv(O.location,oe);break;default:i.vertexAttrib1fv(O.location,oe)}}}}x()}function C(){R();for(const S in n){const I=n[S];for(const W in I){const V=I[W];for(const A in V)h(V[A].object),delete V[A];delete I[W]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const W in I){const V=I[W];for(const A in V)h(V[A].object),delete V[A];delete I[W]}delete n[S.id]}function P(S){for(const I in n){const W=n[I];if(W[S.id]===void 0)continue;const V=W[S.id];for(const A in V)h(V[A].object),delete V[A];delete W[S.id]}}function R(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Z0(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Q0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==sn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const R=P===mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==qn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==pn&&!R)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:C,maxSamples:w}}function $0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Mi,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,M=x*4;let _=p.clippingState||null;c.value=_,_=h(g,d,M,f);for(let C=0;C!==M;++C)_[C]=t[C];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==v;++M,_+=4)o.copy(u[M]).applyMatrix4(x,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ev(i){let e=new WeakMap;function t(o,a){return a===tc?o.mapping=fs:a===nc&&(o.mapping=ps),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===tc||a===nc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new um(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Do extends vd{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const os=4,ah=[.125,.215,.35,.446,.526,.582],bi=20,ua=new Do,ch=new _e;let da=null,fa=0,pa=0,ma=!1;const Si=(1+Math.sqrt(5))/2,Zi=1/Si,lh=[new L(-Si,Zi,0),new L(Si,Zi,0),new L(-Zi,0,Si),new L(Zi,0,Si),new L(0,Si,-Zi),new L(0,Si,Zi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class hh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){da=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(da,fa,pa),this._renderer.xr.enabled=ma,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),da=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:mn,format:sn,colorSpace:Ht,depthBuffer:!1},s=uh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tv(r)),this._blurMaterial=nv(r,e,t)}return s}_compileMaterial(e){const t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,n,s){const a=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ch),h.toneMapping=ci,h.autoClear=!1;const f=new Wt({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new Ee(new kt,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(ch),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;Xr(s,x*M,p>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===fs||e.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Xr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=lh[(s-r-1)%lh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ee(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*bi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const p=[];let x=0;for(let P=0;P<bi;++P){const R=P/v,b=Math.exp(-R*R/2);p.push(b),P===0?x+=b:P<m&&(x+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const _=this._sizeLods[s],C=3*_*(s>M-os?s-M+os:0),w=4*(this._cubeSize-_);Xr(t,C,w,3*_,2*_),c.setRenderTarget(t),c.render(u,ua)}}function tv(i){const e=[],t=[],n=[];let s=i;const r=i-os+1+ah.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-os?c=ah[o-i+os-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*f),M=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let w=0;w<f;w++){const P=w%3*2/3-1,R=w>2?0:-1,b=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];x.set(b,v*g*w),M.set(d,m*g*w);const S=[w,w,w,w,w,w];_.set(S,p*g*w)}const C=new Tt;C.setAttribute("position",new At(x,v)),C.setAttribute("uv",new At(M,m)),C.setAttribute("faceIndex",new At(_,p)),e.push(C),s>os&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uh(i,e,t){const n=new Jt(i,e,t);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function nv(i,e,t){const n=new Float32Array(bi),s=new L(0,1,0);return new mt({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:al(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function dh(){return new mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:al(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function fh(){return new mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function al(){return`

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
	`}function iv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===tc||c===nc,h=c===fs||c===ps;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new hh(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new hh(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function sv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rv(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let M=0,_=x.length;M<_;M+=3){const C=x[M+0],w=x[M+1],P=x[M+2];d.push(C,w,w,P,P,C)}}else if(g!==void 0){const x=g.array;v=g.version;for(let M=0,_=x.length/3-1;M<_;M+=3){const C=M+0,w=M+1,P=M+2;d.push(C,w,w,P,P,C)}}else return;const m=new(ld(d)?md:pd)(d,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function ov(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*v[x];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function av(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function cv(i,e,t){const n=new WeakMap,s=new Je;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let _=a.attributes.position.count*M,C=1;_>e.maxTextureSize&&(C=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const w=new Float32Array(_*C*4*u),P=new ud(w,_,C,u);P.type=pn,P.needsUpdate=!0;const R=M*4;for(let S=0;S<u;S++){const I=m[S],W=p[S],V=x[S],A=_*C*4*S;for(let D=0;D<I.count;D++){const N=D*R;f===!0&&(s.fromBufferAttribute(I,D),w[A+N+0]=s.x,w[A+N+1]=s.y,w[A+N+2]=s.z,w[A+N+3]=0),g===!0&&(s.fromBufferAttribute(W,D),w[A+N+4]=s.x,w[A+N+5]=s.y,w[A+N+6]=s.z,w[A+N+7]=0),v===!0&&(s.fromBufferAttribute(V,D),w[A+N+8]=s.x,w[A+N+9]=s.y,w[A+N+10]=s.z,w[A+N+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new ae(_,C)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function lv(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class yd extends gt{constructor(e,t,n,s,r,o,a,c,l,h=cs){if(h!==cs&&h!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===cs&&(n=Ci),n===void 0&&h===gs&&(n=ms),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wt,this.minFilter=c!==void 0?c:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Md=new gt,ph=new yd(1,1),Sd=new ud,Td=new Jp,bd=new xd,mh=[],gh=[],vh=new Float32Array(16),xh=new Float32Array(9),_h=new Float32Array(4);function As(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=mh[s];if(r===void 0&&(r=new Float32Array(s),mh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function No(i,e){let t=gh[e];t===void 0&&(t=new Int32Array(e),gh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function pv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;_h.set(n),i.uniformMatrix2fv(this.addr,!1,_h),Mt(t,n)}}function mv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;xh.set(n),i.uniformMatrix3fv(this.addr,!1,xh),Mt(t,n)}}function gv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;vh.set(n),i.uniformMatrix4fv(this.addr,!1,vh),Mt(t,n)}}function vv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function _v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function Mv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function Tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function wv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ph.compareFunction=cd,r=ph):r=Md,t.setTexture2D(e||r,s)}function Av(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Td,s)}function Ev(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||bd,s)}function Rv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sd,s)}function Cv(i){switch(i){case 5126:return hv;case 35664:return uv;case 35665:return dv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return vv;case 35667:case 35671:return xv;case 35668:case 35672:return _v;case 35669:case 35673:return yv;case 5125:return Mv;case 36294:return Sv;case 36295:return Tv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return Rv}}function Pv(i,e){i.uniform1fv(this.addr,e)}function Lv(i,e){const t=As(e,this.size,2);i.uniform2fv(this.addr,t)}function Iv(i,e){const t=As(e,this.size,3);i.uniform3fv(this.addr,t)}function Dv(i,e){const t=As(e,this.size,4);i.uniform4fv(this.addr,t)}function Nv(i,e){const t=As(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Uv(i,e){const t=As(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ov(i,e){const t=As(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fv(i,e){i.uniform1iv(this.addr,e)}function Bv(i,e){i.uniform2iv(this.addr,e)}function kv(i,e){i.uniform3iv(this.addr,e)}function zv(i,e){i.uniform4iv(this.addr,e)}function Hv(i,e){i.uniform1uiv(this.addr,e)}function Vv(i,e){i.uniform2uiv(this.addr,e)}function Gv(i,e){i.uniform3uiv(this.addr,e)}function Wv(i,e){i.uniform4uiv(this.addr,e)}function Xv(i,e,t){const n=this.cache,s=e.length,r=No(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Md,r[o])}function qv(i,e,t){const n=this.cache,s=e.length,r=No(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Td,r[o])}function Yv(i,e,t){const n=this.cache,s=e.length,r=No(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||bd,r[o])}function jv(i,e,t){const n=this.cache,s=e.length,r=No(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Sd,r[o])}function Kv(i){switch(i){case 5126:return Pv;case 35664:return Lv;case 35665:return Iv;case 35666:return Dv;case 35674:return Nv;case 35675:return Uv;case 35676:return Ov;case 5124:case 35670:return Fv;case 35667:case 35671:return Bv;case 35668:case 35672:return kv;case 35669:case 35673:return zv;case 5125:return Hv;case 36294:return Vv;case 36295:return Gv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return jv}}class Jv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cv(t.type)}}class Zv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kv(t.type)}}class Qv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function yh(i,e){i.seq.push(e),i.map[e.id]=e}function $v(i,e,t){const n=i.name,s=n.length;for(ga.lastIndex=0;;){const r=ga.exec(n),o=ga.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){yh(t,l===void 0?new Jv(a,i,e):new Zv(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Qv(a),yh(t,u)),t=u}}}class mo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);$v(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Mh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ex=37297;let tx=0;function nx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Sh=new ke;function ix(i){qe._getMatrix(Sh,qe.workingColorSpace,i);const e=`mat3( ${Sh.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case Lo:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Th(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+nx(i.getShaderSource(e),o)}else return s}function sx(i,e){const t=ix(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rx(i,e){let t;switch(e){case Wu:t="Linear";break;case Xu:t="Reinhard";break;case qu:t="Cineon";break;case Kc:t="ACESFilmic";break;case Yu:t="AgX";break;case ju:t="Neutral";break;case hp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qr=new L;function ox(){qe.getLuminanceCoefficients(qr);const i=qr.x.toFixed(4),e=qr.y.toFixed(4),t=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ax(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function cx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Qs(i){return i!==""}function bh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(i){return i.replace(hx,dx)}const ux=new Map;function dx(i,e){let t=ze[e];if(t===void 0){const n=ux.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Lc(t)}const fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(i){return i.replace(fx,px)}function px(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function gx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fs:case ps:e="ENVMAP_TYPE_CUBE";break;case Po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ps:e="ENVMAP_MODE_REFRACTION";break}return e}function xx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gu:e="ENVMAP_BLENDING_MULTIPLY";break;case cp:e="ENVMAP_BLENDING_MIX";break;case lp:e="ENVMAP_BLENDING_ADD";break}return e}function _x(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function yx(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=mx(t),l=gx(t),h=vx(t),u=xx(t),d=_x(t),f=ax(t),g=cx(r),v=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(m=[Eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[Eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?ze.tonemapping_pars_fragment:"",t.toneMapping!==ci?rx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,sx("linearToOutputTexel",t.outputColorSpace),ox(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),o=Lc(o),o=bh(o,t),o=wh(o,t),a=Lc(a),a=bh(a,t),a=wh(a,t),o=Ah(o),a=Ah(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+o,_=x+p+a,C=Mh(s,s.VERTEX_SHADER,M),w=Mh(s,s.FRAGMENT_SHADER,_);s.attachShader(v,C),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(I){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(v).trim(),V=s.getShaderInfoLog(C).trim(),A=s.getShaderInfoLog(w).trim();let D=!0,N=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,w);else{const H=Th(s,C,"vertex"),O=Th(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+H+`
`+O)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||A==="")&&(N=!1);N&&(I.diagnostics={runnable:D,programLog:W,vertexShader:{log:V,prefix:m},fragmentShader:{log:A,prefix:p}})}s.deleteShader(C),s.deleteShader(w),R=new mo(s,v),b=lx(s,v)}let R;this.getUniforms=function(){return R===void 0&&P(this),R};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,ex)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=w,this}let Mx=0;class Sx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Tx(e),t.set(e,n)),n}}class Tx{constructor(e){this.id=Mx++,this.code=e,this.usedTimes=0}}function bx(i,e,t,n,s,r,o){const a=new dd,c=new Sx,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,I,W,V){const A=W.fog,D=V.geometry,N=b.isMeshStandardMaterial?W.environment:null,H=(b.isMeshStandardMaterial?t:e).get(b.envMap||N),O=H&&H.mapping===Po?H.image.height:null,ne=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const oe=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,B=oe!==void 0?oe.length:0;let Z=0;D.morphAttributes.position!==void 0&&(Z=1),D.morphAttributes.normal!==void 0&&(Z=2),D.morphAttributes.color!==void 0&&(Z=3);let ge,Y,re,ve;if(ne){const nt=Sn[ne];ge=nt.vertexShader,Y=nt.fragmentShader}else ge=b.vertexShader,Y=b.fragmentShader,c.update(b),re=c.getVertexShaderID(b),ve=c.getFragmentShaderID(b);const ue=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),Ae=V.isInstancedMesh===!0,De=V.isBatchedMesh===!0,Ke=!!b.map,We=!!b.matcap,ot=!!H,U=!!b.aoMap,Et=!!b.lightMap,Xe=!!b.bumpMap,He=!!b.normalMap,Re=!!b.displacementMap,Ye=!!b.emissiveMap,Ce=!!b.metalnessMap,E=!!b.roughnessMap,y=b.anisotropy>0,G=b.clearcoat>0,$=b.dispersion>0,se=b.iridescence>0,Q=b.sheen>0,ie=b.transmission>0,J=y&&!!b.anisotropyMap,ee=G&&!!b.clearcoatMap,Pe=G&&!!b.clearcoatNormalMap,K=G&&!!b.clearcoatRoughnessMap,le=se&&!!b.iridescenceMap,be=se&&!!b.iridescenceThicknessMap,Ie=Q&&!!b.sheenColorMap,xe=Q&&!!b.sheenRoughnessMap,Ve=!!b.specularMap,Oe=!!b.specularColorMap,tt=!!b.specularIntensityMap,F=ie&&!!b.transmissionMap,de=ie&&!!b.thicknessMap,j=!!b.gradientMap,te=!!b.alphaMap,me=b.alphaTest>0,fe=!!b.alphaHash,Fe=!!b.extensions;let ft=ci;b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ft=i.toneMapping);const Rt={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:ge,fragmentShader:Y,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:ve,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:De,batchingColor:De&&V._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&V.instanceColor!==null,instancingMorph:Ae&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ht,alphaToCoverage:!!b.alphaToCoverage,map:Ke,matcap:We,envMap:ot,envMapMode:ot&&H.mapping,envMapCubeUVHeight:O,aoMap:U,lightMap:Et,bumpMap:Xe,normalMap:He,displacementMap:d&&Re,emissiveMap:Ye,normalMapObjectSpace:He&&b.normalMapType===xp,normalMapTangentSpace:He&&b.normalMapType===sl,metalnessMap:Ce,roughnessMap:E,anisotropy:y,anisotropyMap:J,clearcoat:G,clearcoatMap:ee,clearcoatNormalMap:Pe,clearcoatRoughnessMap:K,dispersion:$,iridescence:se,iridescenceMap:le,iridescenceThicknessMap:be,sheen:Q,sheenColorMap:Ie,sheenRoughnessMap:xe,specularMap:Ve,specularColorMap:Oe,specularIntensityMap:tt,transmission:ie,transmissionMap:F,thicknessMap:de,gradientMap:j,opaque:b.transparent===!1&&b.blending===as&&b.alphaToCoverage===!1,alphaMap:te,alphaTest:me,alphaHash:fe,combine:b.combine,mapUv:Ke&&v(b.map.channel),aoMapUv:U&&v(b.aoMap.channel),lightMapUv:Et&&v(b.lightMap.channel),bumpMapUv:Xe&&v(b.bumpMap.channel),normalMapUv:He&&v(b.normalMap.channel),displacementMapUv:Re&&v(b.displacementMap.channel),emissiveMapUv:Ye&&v(b.emissiveMap.channel),metalnessMapUv:Ce&&v(b.metalnessMap.channel),roughnessMapUv:E&&v(b.roughnessMap.channel),anisotropyMapUv:J&&v(b.anisotropyMap.channel),clearcoatMapUv:ee&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:be&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(b.sheenRoughnessMap.channel),specularMapUv:Ve&&v(b.specularMap.channel),specularColorMapUv:Oe&&v(b.specularColorMap.channel),specularIntensityMapUv:tt&&v(b.specularIntensityMap.channel),transmissionMapUv:F&&v(b.transmissionMap.channel),thicknessMapUv:de&&v(b.thicknessMap.channel),alphaMapUv:te&&v(b.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(He||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!D.attributes.uv&&(Ke||te),fog:!!A,useFog:b.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Le,skinning:V.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Z,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:Ke&&b.map.isVideoTexture===!0&&qe.getTransfer(b.map.colorSpace)===it,decodeVideoTextureEmissive:Ye&&b.emissiveMap.isVideoTexture===!0&&qe.getTransfer(b.emissiveMap.colorSpace)===it,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ot,flipSided:b.side===Bt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Fe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&b.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)S.push(I),S.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(x(S,b),M(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function x(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const S=g[b.type];let I;if(S){const W=Sn[S];I=li.clone(W.uniforms)}else I=b.uniforms;return I}function C(b,S){let I;for(let W=0,V=h.length;W<V;W++){const A=h[W];if(A.cacheKey===S){I=A,++I.usedTimes;break}}return I===void 0&&(I=new yx(i,S,b,r),h.push(I)),I}function w(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function P(b){c.remove(b)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:C,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:R}}function wx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ax(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Rh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ch(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Ax),n.length>1&&n.sort(d||Rh),s.length>1&&s.sort(d||Rh)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Ex(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ch,i.set(n,[o])):s>=r.length?(o=new Ch,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Rx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new _e};break;case"SpotLight":t={position:new L,direction:new L,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Cx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Px=0;function Lx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ix(i){const e=new Rx,t=Cx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new Ue,o=new Ue;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,x=0,M=0,_=0,C=0,w=0,P=0;l.sort(Lx);for(let b=0,S=l.length;b<S;b++){const I=l[b],W=I.color,V=I.intensity,A=I.distance,D=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=W.r*V,u+=W.g*V,d+=W.b*V;else if(I.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(I.sh.coefficients[N],V);P++}else if(I.isDirectionalLight){const N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const H=I.shadow,O=t.get(I);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=I.shadow.matrix,x++}n.directional[f]=N,f++}else if(I.isSpotLight){const N=e.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(W).multiplyScalar(V),N.distance=A,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,n.spot[v]=N;const H=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,H.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[v]=H.matrix,I.castShadow){const O=t.get(I);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,n.spotShadow[v]=O,n.spotShadowMap[v]=D,_++}v++}else if(I.isRectAreaLight){const N=e.get(I);N.color.copy(W).multiplyScalar(V),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=N,m++}else if(I.isPointLight){const N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),N.distance=I.distance,N.decay=I.decay,I.castShadow){const H=I.shadow,O=t.get(I);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,O.shadowCameraNear=H.camera.near,O.shadowCameraFar=H.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=I.shadow.matrix,M++}n.point[g]=N,g++}else if(I.isHemisphereLight){const N=e.get(I);N.skyColor.copy(I.color).multiplyScalar(V),N.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[p]=N,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==M||R.numSpotShadows!==_||R.numSpotMaps!==C||R.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,R.directionalLength=f,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=M,R.numSpotShadows=_,R.numSpotMaps=C,R.numLightProbes=P,n.version=Px++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const M=l[p];if(M.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(M.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Ph(i){const e=new Ix(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Dx(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ph(i),e.set(s,[a])):r>=o.length?(a=new Ph(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Nx extends on{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ux extends on{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bx(i,e,t){let n=new ol;const s=new ae,r=new ae,o=new Je,a=new Nx({depthPacking:vp}),c=new Ux,l={},h=t.maxTextureSize,u={[Xn]:Bt,[Bt]:Xn,[Ot]:Ot},d=new mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Ox,fragmentShader:Fx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ee(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hu;let p=this.type;this.render=function(w,P,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Vn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const V=p!==Bn&&this.type===Bn,A=p===Bn&&this.type!==Bn;for(let D=0,N=w.length;D<N;D++){const H=w[D],O=H.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const ne=O.getFrameExtents();if(s.multiply(ne),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,O.mapSize.y=r.y)),O.map===null||V===!0||A===!0){const B=this.type!==Bn?{minFilter:wt,magFilter:wt}:{};O.map!==null&&O.map.dispose(),O.map=new Jt(s.x,s.y,B),O.map.texture.name=H.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const oe=O.getViewportCount();for(let B=0;B<oe;B++){const Z=O.getViewport(B);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),W.viewport(o),O.updateMatrices(H,B),n=O.getFrustum(),_(P,R,O.camera,H,this.type)}O.isPointLightShadow!==!0&&this.type===Bn&&x(O,R),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,I)};function x(w,P){const R=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Jt(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,R,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,R,f,v,null)}function M(w,P,R,b){let S=null;const I=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)S=I;else if(S=R.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const W=S.uuid,V=P.uuid;let A=l[W];A===void 0&&(A={},l[W]=A);let D=A[V];D===void 0&&(D=S.clone(),A[V]=D,P.addEventListener("dispose",C)),S=D}if(S.visible=P.visible,S.wireframe=P.wireframe,b===Bn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:u[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=i.properties.get(S);W.light=R}return S}function _(w,P,R,b,S){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Bn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const V=e.update(w),A=w.material;if(Array.isArray(A)){const D=V.groups;for(let N=0,H=D.length;N<H;N++){const O=D[N],ne=A[O.materialIndex];if(ne&&ne.visible){const oe=M(w,ne,b,S);w.onBeforeShadow(i,w,P,R,V,oe,O),i.renderBufferDirect(R,null,V,oe,w,O),w.onAfterShadow(i,w,P,R,V,oe,O)}}}else if(A.visible){const D=M(w,A,b,S);w.onBeforeShadow(i,w,P,R,V,D,null),i.renderBufferDirect(R,null,V,D,w,null),w.onAfterShadow(i,w,P,R,V,D,null)}}const W=w.children;for(let V=0,A=W.length;V<A;V++)_(W[V],P,R,b,S)}function C(w){w.target.removeEventListener("dispose",C);for(const R in l){const b=l[R],S=w.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const kx={[ja]:Ka,[Ja]:$a,[Za]:ec,[ds]:Qa,[Ka]:ja,[$a]:Ja,[ec]:Za,[Qa]:ds};function zx(i,e){function t(){let F=!1;const de=new Je;let j=null;const te=new Je(0,0,0,0);return{setMask:function(me){j!==me&&!F&&(i.colorMask(me,me,me,me),j=me)},setLocked:function(me){F=me},setClear:function(me,fe,Fe,ft,Rt){Rt===!0&&(me*=ft,fe*=ft,Fe*=ft),de.set(me,fe,Fe,ft),te.equals(de)===!1&&(i.clearColor(me,fe,Fe,ft),te.copy(de))},reset:function(){F=!1,j=null,te.set(-1,0,0,0)}}}function n(){let F=!1,de=!1,j=null,te=null,me=null;return{setReversed:function(fe){if(de!==fe){const Fe=e.get("EXT_clip_control");de?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const ft=me;me=null,this.setClear(ft)}de=fe},getReversed:function(){return de},setTest:function(fe){fe?ue(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(fe){j!==fe&&!F&&(i.depthMask(fe),j=fe)},setFunc:function(fe){if(de&&(fe=kx[fe]),te!==fe){switch(fe){case ja:i.depthFunc(i.NEVER);break;case Ka:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case Qa:i.depthFunc(i.GEQUAL);break;case $a:i.depthFunc(i.GREATER);break;case ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=fe}},setLocked:function(fe){F=fe},setClear:function(fe){me!==fe&&(de&&(fe=1-fe),i.clearDepth(fe),me=fe)},reset:function(){F=!1,j=null,te=null,me=null,de=!1}}}function s(){let F=!1,de=null,j=null,te=null,me=null,fe=null,Fe=null,ft=null,Rt=null;return{setTest:function(nt){F||(nt?ue(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(nt){de!==nt&&!F&&(i.stencilMask(nt),de=nt)},setFunc:function(nt,cn,Cn){(j!==nt||te!==cn||me!==Cn)&&(i.stencilFunc(nt,cn,Cn),j=nt,te=cn,me=Cn)},setOp:function(nt,cn,Cn){(fe!==nt||Fe!==cn||ft!==Cn)&&(i.stencilOp(nt,cn,Cn),fe=nt,Fe=cn,ft=Cn)},setLocked:function(nt){F=nt},setClear:function(nt){Rt!==nt&&(i.clearStencil(nt),Rt=nt)},reset:function(){F=!1,de=null,j=null,te=null,me=null,fe=null,Fe=null,ft=null,Rt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,M=null,_=null,C=null,w=null,P=new _e(0,0,0),R=0,b=!1,S=null,I=null,W=null,V=null,A=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,H=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(O)[1]),N=H>=1):O.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),N=H>=2);let ne=null,oe={};const B=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),ge=new Je().fromArray(B),Y=new Je().fromArray(Z);function re(F,de,j,te){const me=new Uint8Array(4),fe=i.createTexture();i.bindTexture(F,fe),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<j;Fe++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(de+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return fe}const ve={};ve[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(i.DEPTH_TEST),o.setFunc(ds),Xe(!1),He(Nl),ue(i.CULL_FACE),U(Vn);function ue(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Le(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Ae(F,de){return u[F]!==de?(i.bindFramebuffer(F,de),u[F]=de,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=de),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=de),!0):!1}function De(F,de){let j=f,te=!1;if(F){j=d.get(de),j===void 0&&(j=[],d.set(de,j));const me=F.textures;if(j.length!==me.length||j[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Fe=me.length;fe<Fe;fe++)j[fe]=i.COLOR_ATTACHMENT0+fe;j.length=me.length,te=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,te=!0);te&&i.drawBuffers(j)}function Ke(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const We={[Ti]:i.FUNC_ADD,[Xf]:i.FUNC_SUBTRACT,[qf]:i.FUNC_REVERSE_SUBTRACT};We[Yf]=i.MIN,We[jf]=i.MAX;const ot={[Kf]:i.ZERO,[Jf]:i.ONE,[Zf]:i.SRC_COLOR,[qa]:i.SRC_ALPHA,[ip]:i.SRC_ALPHA_SATURATE,[tp]:i.DST_COLOR,[$f]:i.DST_ALPHA,[Qf]:i.ONE_MINUS_SRC_COLOR,[Ya]:i.ONE_MINUS_SRC_ALPHA,[np]:i.ONE_MINUS_DST_COLOR,[ep]:i.ONE_MINUS_DST_ALPHA,[sp]:i.CONSTANT_COLOR,[rp]:i.ONE_MINUS_CONSTANT_COLOR,[op]:i.CONSTANT_ALPHA,[ap]:i.ONE_MINUS_CONSTANT_ALPHA};function U(F,de,j,te,me,fe,Fe,ft,Rt,nt){if(F===Vn){v===!0&&(Le(i.BLEND),v=!1);return}if(v===!1&&(ue(i.BLEND),v=!0),F!==Wf){if(F!==m||nt!==b){if((p!==Ti||_!==Ti)&&(i.blendEquation(i.FUNC_ADD),p=Ti,_=Ti),nt)switch(F){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFunc(i.ONE,i.ONE);break;case Ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ol:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,M=null,C=null,w=null,P.set(0,0,0),R=0,m=F,b=nt}return}me=me||de,fe=fe||j,Fe=Fe||te,(de!==p||me!==_)&&(i.blendEquationSeparate(We[de],We[me]),p=de,_=me),(j!==x||te!==M||fe!==C||Fe!==w)&&(i.blendFuncSeparate(ot[j],ot[te],ot[fe],ot[Fe]),x=j,M=te,C=fe,w=Fe),(ft.equals(P)===!1||Rt!==R)&&(i.blendColor(ft.r,ft.g,ft.b,Rt),P.copy(ft),R=Rt),m=F,b=!1}function Et(F,de){F.side===Ot?Le(i.CULL_FACE):ue(i.CULL_FACE);let j=F.side===Bt;de&&(j=!j),Xe(j),F.blending===as&&F.transparent===!1?U(Vn):U(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const te=F.stencilWrite;a.setTest(te),te&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ye(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function He(F){F!==Vf?(ue(i.CULL_FACE),F!==I&&(F===Nl?i.cullFace(i.BACK):F===Gf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),I=F}function Re(F){F!==W&&(N&&i.lineWidth(F),W=F)}function Ye(F,de,j){F?(ue(i.POLYGON_OFFSET_FILL),(V!==de||A!==j)&&(i.polygonOffset(de,j),V=de,A=j)):Le(i.POLYGON_OFFSET_FILL)}function Ce(F){F?ue(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function E(F){F===void 0&&(F=i.TEXTURE0+D-1),ne!==F&&(i.activeTexture(F),ne=F)}function y(F,de,j){j===void 0&&(ne===null?j=i.TEXTURE0+D-1:j=ne);let te=oe[j];te===void 0&&(te={type:void 0,texture:void 0},oe[j]=te),(te.type!==F||te.texture!==de)&&(ne!==j&&(i.activeTexture(j),ne=j),i.bindTexture(F,de||ve[F]),te.type=F,te.texture=de)}function G(){const F=oe[ne];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(F){ge.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ge.copy(F))}function xe(F){Y.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function Ve(F,de){let j=l.get(de);j===void 0&&(j=new WeakMap,l.set(de,j));let te=j.get(F);te===void 0&&(te=i.getUniformBlockIndex(de,F.name),j.set(F,te))}function Oe(F,de){const te=l.get(de).get(F);c.get(de)!==te&&(i.uniformBlockBinding(de,te,F.__bindingPointIndex),c.set(de,te))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ne=null,oe={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,M=null,_=null,C=null,w=null,P=new _e(0,0,0),R=0,b=!1,S=null,I=null,W=null,V=null,A=null,ge.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:Le,bindFramebuffer:Ae,drawBuffers:De,useProgram:Ke,setBlending:U,setMaterial:Et,setFlipSided:Xe,setCullFace:He,setLineWidth:Re,setPolygonOffset:Ye,setScissorTest:Ce,activeTexture:E,bindTexture:y,unbindTexture:G,compressedTexImage2D:$,compressedTexImage3D:se,texImage2D:le,texImage3D:be,updateUBOMapping:Ve,uniformBlockBinding:Oe,texStorage2D:Pe,texStorage3D:K,texSubImage2D:Q,texSubImage3D:ie,compressedTexSubImage2D:J,compressedTexSubImage3D:ee,scissor:Ie,viewport:xe,reset:tt}}function Lh(i,e,t,n){const s=Hx(n);switch(t){case ed:return i*e;case nd:return i*e;case id:return i*e*2;case $c:return i*e/s.components*s.byteLength;case el:return i*e/s.components*s.byteLength;case sd:return i*e*2/s.components*s.byteLength;case tl:return i*e*2/s.components*s.byteLength;case td:return i*e*3/s.components*s.byteLength;case sn:return i*e*4/s.components*s.byteLength;case nl:return i*e*4/s.components*s.byteLength;case lo:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:case oc:return Math.max(i,16)*Math.max(e,8)/4;case ic:case rc:return Math.max(i,8)*Math.max(e,8)/2;case ac:case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case po:case bc:case wc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case rd:case Ac:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ec:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hx(i){switch(i){case qn:case Zu:return{byteLength:1,components:1};case ar:case Qu:case mn:return{byteLength:2,components:1};case Zc:case Qc:return{byteLength:2,components:4};case Ci:case Jc:case pn:return{byteLength:4,components:1};case $u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Vx(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ae,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return f?new OffscreenCanvas(E,y):ur("canvas")}function v(E,y,G){let $=1;const se=Ce(E);if((se.width>G||se.height>G)&&($=G/Math.max(se.width,se.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Q=Math.floor($*se.width),ie=Math.floor($*se.height);u===void 0&&(u=g(Q,ie));const J=y?g(Q,ie):u;return J.width=Q,J.height=ie,J.getContext("2d").drawImage(E,0,0,Q,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Q+"x"+ie+")."),J}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function x(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(E,y,G,$,se=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Q=y;if(y===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8)),y===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),y===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8)),y===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),y===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),y===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),y===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),y===i.RGBA){const ie=se?Lo:qe.getTransfer($);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=ie===it?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(E,y){let G;return E?y===null||y===Ci||y===ms?G=i.DEPTH24_STENCIL8:y===pn?G=i.DEPTH32F_STENCIL8:y===ar&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ci||y===ms?G=i.DEPTH_COMPONENT24:y===pn?G=i.DEPTH_COMPONENT32F:y===ar&&(G=i.DEPTH_COMPONENT16),G}function C(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==wt&&E.minFilter!==Gt?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function w(E){const y=E.target;y.removeEventListener("dispose",w),R(y),y.isVideoTexture&&h.delete(y)}function P(E){const y=E.target;y.removeEventListener("dispose",P),S(y)}function R(E){const y=n.get(E);if(y.__webglInit===void 0)return;const G=E.source,$=d.get(G);if($){const se=$[y.__cacheKey];se.usedTimes--,se.usedTimes===0&&b(E),Object.keys($).length===0&&d.delete(G)}n.remove(E)}function b(E){const y=n.get(E);i.deleteTexture(y.__webglTexture);const G=E.source,$=d.get(G);delete $[y.__cacheKey],o.memory.textures--}function S(E){const y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let se=0;se<y.__webglFramebuffer[$].length;se++)i.deleteFramebuffer(y.__webglFramebuffer[$][se]);else i.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)i.deleteFramebuffer(y.__webglFramebuffer[$]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=E.textures;for(let $=0,se=G.length;$<se;$++){const Q=n.get(G[$]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(G[$])}n.remove(E)}let I=0;function W(){I=0}function V(){const E=I;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),I+=1,E}function A(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function D(E,y){const G=n.get(E);if(E.isVideoTexture&&Re(E),E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,E,y);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+y)}function N(E,y){const G=n.get(E);if(E.version>0&&G.__version!==E.version){Y(G,E,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+y)}function H(E,y){const G=n.get(E);if(E.version>0&&G.__version!==E.version){Y(G,E,y);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+y)}function O(E,y){const G=n.get(E);if(E.version>0&&G.__version!==E.version){re(G,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+y)}const ne={[Ri]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[_o]:i.MIRRORED_REPEAT},oe={[wt]:i.NEAREST,[Ju]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[co]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},B={[_p]:i.NEVER,[wp]:i.ALWAYS,[yp]:i.LESS,[cd]:i.LEQUAL,[Mp]:i.EQUAL,[bp]:i.GEQUAL,[Sp]:i.GREATER,[Tp]:i.NOTEQUAL};function Z(E,y){if(y.type===pn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Gt||y.magFilter===co||y.magFilter===Js||y.magFilter===zn||y.minFilter===Gt||y.minFilter===co||y.minFilter===Js||y.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ne[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ne[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ne[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,oe[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,oe[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,B[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===wt||y.minFilter!==Js&&y.minFilter!==zn||y.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ge(E,y){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",w));const $=y.source;let se=d.get($);se===void 0&&(se={},d.set($,se));const Q=A(y);if(Q!==E.__cacheKey){se[Q]===void 0&&(se[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),se[Q].usedTimes++;const ie=se[E.__cacheKey];ie!==void 0&&(se[E.__cacheKey].usedTimes--,ie.usedTimes===0&&b(y)),E.__cacheKey=Q,E.__webglTexture=se[Q].texture}return G}function Y(E,y,G){let $=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=i.TEXTURE_3D);const se=ge(E,y),Q=y.source;t.bindTexture($,E.__webglTexture,i.TEXTURE0+G);const ie=n.get(Q);if(Q.version!==ie.__version||se===!0){t.activeTexture(i.TEXTURE0+G);const J=qe.getPrimaries(qe.workingColorSpace),ee=y.colorSpace===si?null:qe.getPrimaries(y.colorSpace),Pe=y.colorSpace===si||J===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let K=v(y.image,!1,s.maxTextureSize);K=Ye(y,K);const le=r.convert(y.format,y.colorSpace),be=r.convert(y.type);let Ie=M(y.internalFormat,le,be,y.colorSpace,y.isVideoTexture);Z($,y);let xe;const Ve=y.mipmaps,Oe=y.isVideoTexture!==!0,tt=ie.__version===void 0||se===!0,F=Q.dataReady,de=C(y,K);if(y.isDepthTexture)Ie=_(y.format===gs,y.type),tt&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,Ie,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,Ie,K.width,K.height,0,le,be,null));else if(y.isDataTexture)if(Ve.length>0){Oe&&tt&&t.texStorage2D(i.TEXTURE_2D,de,Ie,Ve[0].width,Ve[0].height);for(let j=0,te=Ve.length;j<te;j++)xe=Ve[j],Oe?F&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,xe.width,xe.height,le,be,xe.data):t.texImage2D(i.TEXTURE_2D,j,Ie,xe.width,xe.height,0,le,be,xe.data);y.generateMipmaps=!1}else Oe?(tt&&t.texStorage2D(i.TEXTURE_2D,de,Ie,K.width,K.height),F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,le,be,K.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,K.width,K.height,0,le,be,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Oe&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Ie,Ve[0].width,Ve[0].height,K.depth);for(let j=0,te=Ve.length;j<te;j++)if(xe=Ve[j],y.format!==sn)if(le!==null)if(Oe){if(F)if(y.layerUpdates.size>0){const me=Lh(xe.width,xe.height,y.format,y.type);for(const fe of y.layerUpdates){const Fe=xe.data.subarray(fe*me/xe.data.BYTES_PER_ELEMENT,(fe+1)*me/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,fe,xe.width,xe.height,1,le,Fe)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,K.depth,le,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Ie,xe.width,xe.height,K.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,K.depth,le,be,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Ie,xe.width,xe.height,K.depth,0,le,be,xe.data)}else{Oe&&tt&&t.texStorage2D(i.TEXTURE_2D,de,Ie,Ve[0].width,Ve[0].height);for(let j=0,te=Ve.length;j<te;j++)xe=Ve[j],y.format!==sn?le!==null?Oe?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,xe.width,xe.height,le,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Ie,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?F&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,xe.width,xe.height,le,be,xe.data):t.texImage2D(i.TEXTURE_2D,j,Ie,xe.width,xe.height,0,le,be,xe.data)}else if(y.isDataArrayTexture)if(Oe){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Ie,K.width,K.height,K.depth),F)if(y.layerUpdates.size>0){const j=Lh(K.width,K.height,y.format,y.type);for(const te of y.layerUpdates){const me=K.data.subarray(te*j/K.data.BYTES_PER_ELEMENT,(te+1)*j/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,K.width,K.height,1,le,be,me)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,le,be,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,K.width,K.height,K.depth,0,le,be,K.data);else if(y.isData3DTexture)Oe?(tt&&t.texStorage3D(i.TEXTURE_3D,de,Ie,K.width,K.height,K.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,le,be,K.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,K.width,K.height,K.depth,0,le,be,K.data);else if(y.isFramebufferTexture){if(tt)if(Oe)t.texStorage2D(i.TEXTURE_2D,de,Ie,K.width,K.height);else{let j=K.width,te=K.height;for(let me=0;me<de;me++)t.texImage2D(i.TEXTURE_2D,me,Ie,j,te,0,le,be,null),j>>=1,te>>=1}}else if(Ve.length>0){if(Oe&&tt){const j=Ce(Ve[0]);t.texStorage2D(i.TEXTURE_2D,de,Ie,j.width,j.height)}for(let j=0,te=Ve.length;j<te;j++)xe=Ve[j],Oe?F&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,le,be,xe):t.texImage2D(i.TEXTURE_2D,j,Ie,le,be,xe);y.generateMipmaps=!1}else if(Oe){if(tt){const j=Ce(K);t.texStorage2D(i.TEXTURE_2D,de,Ie,j.width,j.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,be,K)}else t.texImage2D(i.TEXTURE_2D,0,Ie,le,be,K);m(y)&&p($),ie.__version=Q.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function re(E,y,G){if(y.image.length!==6)return;const $=ge(E,y),se=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+G);const Q=n.get(se);if(se.version!==Q.__version||$===!0){t.activeTexture(i.TEXTURE0+G);const ie=qe.getPrimaries(qe.workingColorSpace),J=y.colorSpace===si?null:qe.getPrimaries(y.colorSpace),ee=y.colorSpace===si||ie===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const Pe=y.isCompressedTexture||y.image[0].isCompressedTexture,K=y.image[0]&&y.image[0].isDataTexture,le=[];for(let te=0;te<6;te++)!Pe&&!K?le[te]=v(y.image[te],!0,s.maxCubemapSize):le[te]=K?y.image[te].image:y.image[te],le[te]=Ye(y,le[te]);const be=le[0],Ie=r.convert(y.format,y.colorSpace),xe=r.convert(y.type),Ve=M(y.internalFormat,Ie,xe,y.colorSpace),Oe=y.isVideoTexture!==!0,tt=Q.__version===void 0||$===!0,F=se.dataReady;let de=C(y,be);Z(i.TEXTURE_CUBE_MAP,y);let j;if(Pe){Oe&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ve,be.width,be.height);for(let te=0;te<6;te++){j=le[te].mipmaps;for(let me=0;me<j.length;me++){const fe=j[me];y.format!==sn?Ie!==null?Oe?F&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,0,0,fe.width,fe.height,Ie,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,Ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,0,0,fe.width,fe.height,Ie,xe,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,Ve,fe.width,fe.height,0,Ie,xe,fe.data)}}}else{if(j=y.mipmaps,Oe&&tt){j.length>0&&de++;const te=Ce(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ve,te.width,te.height)}for(let te=0;te<6;te++)if(K){Oe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,le[te].width,le[te].height,Ie,xe,le[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ve,le[te].width,le[te].height,0,Ie,xe,le[te].data);for(let me=0;me<j.length;me++){const Fe=j[me].image[te].image;Oe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,0,0,Fe.width,Fe.height,Ie,xe,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,Ve,Fe.width,Fe.height,0,Ie,xe,Fe.data)}}else{Oe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ie,xe,le[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ve,Ie,xe,le[te]);for(let me=0;me<j.length;me++){const fe=j[me];Oe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,0,0,Ie,xe,fe.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,Ve,Ie,xe,fe.image[te])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),Q.__version=se.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ve(E,y,G,$,se,Q){const ie=r.convert(G.format,G.colorSpace),J=r.convert(G.type),ee=M(G.internalFormat,ie,J,G.colorSpace),Pe=n.get(y),K=n.get(G);if(K.__renderTarget=y,!Pe.__hasExternalTextures){const le=Math.max(1,y.width>>Q),be=Math.max(1,y.height>>Q);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,Q,ee,le,be,y.depth,0,ie,J,null):t.texImage2D(se,Q,ee,le,be,0,ie,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),He(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,se,K.__webglTexture,0,Xe(y)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,se,K.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(E,y,G){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){const $=y.depthTexture,se=$&&$.isDepthTexture?$.type:null,Q=_(y.stencilBuffer,se),ie=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=Xe(y);He(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,Q,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,Q,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Q,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,E)}else{const $=y.textures;for(let se=0;se<$.length;se++){const Q=$[se],ie=r.convert(Q.format,Q.colorSpace),J=r.convert(Q.type),ee=M(Q.internalFormat,ie,J,Q.colorSpace),Pe=Xe(y);G&&He(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ee,y.width,y.height):He(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,ee,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ee,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(y.depthTexture);$.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),D(y.depthTexture,0);const se=$.__webglTexture,Q=Xe(y);if(y.depthTexture.format===cs)He(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(y.depthTexture.format===gs)He(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ae(E){const y=n.get(E),G=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const se=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",se)};$.addEventListener("dispose",se),y.__depthDisposeCallback=se}y.__boundDepthTexture=$}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Le(y.__webglFramebuffer,E)}else if(G){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=i.createRenderbuffer(),ue(y.__webglDepthbuffer[$],E,!1);else{const se=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ue(y.__webglDepthbuffer,E,!1);else{const $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(E,y,G){const $=n.get(E);y!==void 0&&ve($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ae(E)}function Ke(E){const y=E.texture,G=n.get(E),$=n.get(y);E.addEventListener("dispose",P);const se=E.textures,Q=E.isWebGLCubeRenderTarget===!0,ie=se.length>1;if(ie||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=y.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[J]=[];for(let ee=0;ee<y.mipmaps.length;ee++)G.__webglFramebuffer[J][ee]=i.createFramebuffer()}else G.__webglFramebuffer[J]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)G.__webglFramebuffer[J]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ie)for(let J=0,ee=se.length;J<ee;J++){const Pe=n.get(se[J]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&He(E)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let J=0;J<se.length;J++){const ee=se[J];G.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[J]);const Pe=r.convert(ee.format,ee.colorSpace),K=r.convert(ee.type),le=M(ee.internalFormat,Pe,K,ee.colorSpace,E.isXRRenderTarget===!0),be=Xe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,le,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,G.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(G.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Z(i.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)ve(G.__webglFramebuffer[J][ee],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else ve(G.__webglFramebuffer[J],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let J=0,ee=se.length;J<ee;J++){const Pe=se[J],K=n.get(Pe);t.bindTexture(i.TEXTURE_2D,K.__webglTexture),Z(i.TEXTURE_2D,Pe),ve(G.__webglFramebuffer,E,Pe,i.COLOR_ATTACHMENT0+J,i.TEXTURE_2D,0),m(Pe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,$.__webglTexture),Z(J,y),y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)ve(G.__webglFramebuffer[ee],E,y,i.COLOR_ATTACHMENT0,J,ee);else ve(G.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,J,0);m(y)&&p(J),t.unbindTexture()}E.depthBuffer&&Ae(E)}function We(E){const y=E.textures;for(let G=0,$=y.length;G<$;G++){const se=y[G];if(m(se)){const Q=x(E),ie=n.get(se).__webglTexture;t.bindTexture(Q,ie),p(Q),t.unbindTexture()}}}const ot=[],U=[];function Et(E){if(E.samples>0){if(He(E)===!1){const y=E.textures,G=E.width,$=E.height;let se=i.COLOR_BUFFER_BIT;const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=n.get(E),J=y.length>1;if(J)for(let ee=0;ee<y.length;ee++)t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let ee=0;ee<y.length;ee++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ie.__webglColorRenderbuffer[ee]);const Pe=n.get(y[ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,G,$,0,0,G,$,se,i.NEAREST),c===!0&&(ot.length=0,U.length=0,ot.push(i.COLOR_ATTACHMENT0+ee),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ot.push(Q),U.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ee=0;ee<y.length;ee++){t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,ie.__webglColorRenderbuffer[ee]);const Pe=n.get(y[ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Xe(E){return Math.min(s.maxSamples,E.samples)}function He(E){const y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Re(E){const y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function Ye(E,y){const G=E.colorSpace,$=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||G!==Ht&&G!==si&&(qe.getTransfer(G)===it?($!==sn||se!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function Ce(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.setTexture2D=D,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=O,this.rebindTextures=De,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=He}function Gx(i,e){function t(n,s=si){let r;const o=qe.getTransfer(s);if(n===qn)return i.UNSIGNED_BYTE;if(n===Zc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zu)return i.BYTE;if(n===Qu)return i.SHORT;if(n===ar)return i.UNSIGNED_SHORT;if(n===Jc)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===mn)return i.HALF_FLOAT;if(n===ed)return i.ALPHA;if(n===td)return i.RGB;if(n===sn)return i.RGBA;if(n===nd)return i.LUMINANCE;if(n===id)return i.LUMINANCE_ALPHA;if(n===cs)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===$c)return i.RED;if(n===el)return i.RED_INTEGER;if(n===sd)return i.RG;if(n===tl)return i.RG_INTEGER;if(n===nl)return i.RGBA_INTEGER;if(n===lo||n===ho||n===uo||n===fo)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ic||n===sc||n===rc||n===oc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ac||n===cc||n===lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ac||n===cc)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===vc||n===xc||n===_c||n===yc||n===Mc||n===Sc||n===Tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_c)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===bc||n===wc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===po)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rd||n===Ac||n===Ec||n===Rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Wx extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ut extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xx={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yx=`
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

}`;class jx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new gt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mt({vertexShader:qx,fragmentShader:Yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new Di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kx extends Ii{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new jx,m=t.getContextAttributes();let p=null,x=null;const M=[],_=[],C=new ae;let w=null;const P=new Ut;P.viewport=new Je;const R=new Ut;R.viewport=new Je;const b=[P,R],S=new Wx;let I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let re=M[Y];return re===void 0&&(re=new va,M[Y]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Y){let re=M[Y];return re===void 0&&(re=new va,M[Y]=re),re.getGripSpace()},this.getHand=function(Y){let re=M[Y];return re===void 0&&(re=new va,M[Y]=re),re.getHandSpace()};function V(Y){const re=_.indexOf(Y.inputSource);if(re===-1)return;const ve=M[re];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,l||o),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function A(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",A),s.removeEventListener("inputsourceschange",D);for(let Y=0;Y<M.length;Y++){const re=_[Y];re!==null&&(_[Y]=null,M[Y].disconnect(re))}I=null,W=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,x=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",A),s.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Jt(f.framebufferWidth,f.framebufferHeight,{format:sn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,ve=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?gs:cs,ve=m.stencil?ms:Ci);const Le={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Jt(d.textureWidth,d.textureHeight,{format:sn,type:qn,depthTexture:new yd(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function D(Y){for(let re=0;re<Y.removed.length;re++){const ve=Y.removed[re],ue=_.indexOf(ve);ue>=0&&(_[ue]=null,M[ue].disconnect(ve))}for(let re=0;re<Y.added.length;re++){const ve=Y.added[re];let ue=_.indexOf(ve);if(ue===-1){for(let Ae=0;Ae<M.length;Ae++)if(Ae>=_.length){_.push(ve),ue=Ae;break}else if(_[Ae]===null){_[Ae]=ve,ue=Ae;break}if(ue===-1)break}const Le=M[ue];Le&&Le.connect(ve)}}const N=new L,H=new L;function O(Y,re,ve){N.setFromMatrixPosition(re.matrixWorld),H.setFromMatrixPosition(ve.matrixWorld);const ue=N.distanceTo(H),Le=re.projectionMatrix.elements,Ae=ve.projectionMatrix.elements,De=Le[14]/(Le[10]-1),Ke=Le[14]/(Le[10]+1),We=(Le[9]+1)/Le[5],ot=(Le[9]-1)/Le[5],U=(Le[8]-1)/Le[0],Et=(Ae[8]+1)/Ae[0],Xe=De*U,He=De*Et,Re=ue/(-U+Et),Ye=Re*-U;if(re.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ye),Y.translateZ(Re),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Le[10]===-1)Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ce=De+Re,E=Ke+Re,y=Xe-Ye,G=He+(ue-Ye),$=We*Ke/E*Ce,se=ot*Ke/E*Ce;Y.projectionMatrix.makePerspective(y,G,$,se,Ce,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ne(Y,re){re===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(re.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let re=Y.near,ve=Y.far;v.texture!==null&&(v.depthNear>0&&(re=v.depthNear),v.depthFar>0&&(ve=v.depthFar)),S.near=R.near=P.near=re,S.far=R.far=P.far=ve,(I!==S.near||W!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,W=S.far),P.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,S.layers.mask=P.layers.mask|R.layers.mask;const ue=Y.parent,Le=S.cameras;ne(S,ue);for(let Ae=0;Ae<Le.length;Ae++)ne(Le[Ae],ue);Le.length===2?O(S,P,R):S.projectionMatrix.copy(P.projectionMatrix),oe(Y,S,ue)};function oe(Y,re,ve){ve===null?Y.matrix.copy(re.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(re.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=vs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let B=null;function Z(Y,re){if(h=re.getViewerPose(l||o),g=re,h!==null){const ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ue=!1;ve.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let Ae=0;Ae<ve.length;Ae++){const De=ve[Ae];let Ke=null;if(f!==null)Ke=f.getViewport(De);else{const ot=u.getViewSubImage(d,De);Ke=ot.viewport,Ae===0&&(e.setRenderTargetTextures(x,ot.colorTexture,d.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(x))}let We=b[Ae];We===void 0&&(We=new Ut,We.layers.enable(Ae),We.viewport=new Je,b[Ae]=We),We.matrix.fromArray(De.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(De.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ae===0&&(S.matrix.copy(We.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(We)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Ae=u.getDepthInformation(ve[0]);Ae&&Ae.isValid&&Ae.texture&&v.init(e,Ae,s.renderState)}}for(let ve=0;ve<M.length;ve++){const ue=_[ve],Le=M[ve];ue!==null&&Le!==void 0&&Le.update(ue,re,l||o)}B&&B(Y,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}const ge=new _d;ge.setAnimationLoop(Z),this.setAnimationLoop=function(Y){B=Y},this.dispose=function(){}}}const xi=new bn,Jx=new Ue;function Zx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),M=x.envMap,_=x.envMapRotation;M&&(m.envMap.value=M,xi.copy(_),xi.x*=-1,xi.y*=-1,xi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(xi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qx(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const _=M.program;n.uniformBlockBinding(x,_)}function l(x,M){let _=s[x.id];_===void 0&&(g(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",m));const C=M.program;n.updateUBOMapping(x,C);const w=e.render.frame;r[x.id]!==w&&(d(x),r[x.id]=w)}function h(x){const M=u();x.__bindingPointIndex=M;const _=i.createBuffer(),C=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=s[x.id],_=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,P=_.length;w<P;w++){const R=Array.isArray(_[w])?_[w]:[_[w]];for(let b=0,S=R.length;b<S;b++){const I=R[b];if(f(I,w,b,C)===!0){const W=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let A=0;for(let D=0;D<V.length;D++){const N=V[D],H=v(N);typeof N=="number"||typeof N=="boolean"?(I.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,W+A,I.__data)):N.isMatrix3?(I.__data[0]=N.elements[0],I.__data[1]=N.elements[1],I.__data[2]=N.elements[2],I.__data[3]=0,I.__data[4]=N.elements[3],I.__data[5]=N.elements[4],I.__data[6]=N.elements[5],I.__data[7]=0,I.__data[8]=N.elements[6],I.__data[9]=N.elements[7],I.__data[10]=N.elements[8],I.__data[11]=0):(N.toArray(I.__data,A),A+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,_,C){const w=x.value,P=M+"_"+_;if(C[P]===void 0)return typeof w=="number"||typeof w=="boolean"?C[P]=w:C[P]=w.clone(),!0;{const R=C[P];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[P]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(x){const M=x.uniforms;let _=0;const C=16;for(let P=0,R=M.length;P<R;P++){const b=Array.isArray(M[P])?M[P]:[M[P]];for(let S=0,I=b.length;S<I;S++){const W=b[S],V=Array.isArray(W.value)?W.value:[W.value];for(let A=0,D=V.length;A<D;A++){const N=V[A],H=v(N),O=_%C,ne=O%H.boundary,oe=O+ne;_+=ne,oe!==0&&C-oe<H.storage&&(_+=C-oe),W.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=_,_+=H.storage}}}const w=_%C;return w>0&&(_+=C-w),x.__size=_,x.__cache={},this}function v(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class $x{constructor(e={}){const{canvas:t=Vp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const x=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this.toneMapping=ci,this.toneMappingExposure=1;const _=this;let C=!1,w=0,P=0,R=null,b=-1,S=null;const I=new Je,W=new Je;let V=null;const A=new _e(0);let D=0,N=t.width,H=t.height,O=1,ne=null,oe=null;const B=new Je(0,0,N,H),Z=new Je(0,0,N,H);let ge=!1;const Y=new ol;let re=!1,ve=!1;const ue=new Ue,Le=new Ue,Ae=new L,De=new Je,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function ot(){return R===null?O:1}let U=n;function Et(T,k){return t.getContext(T,k)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jc}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",fe,!1),U===null){const k="webgl2";if(U=Et(k,T),U===null)throw Et(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Xe,He,Re,Ye,Ce,E,y,G,$,se,Q,ie,J,ee,Pe,K,le,be,Ie,xe,Ve,Oe,tt,F;function de(){Xe=new sv(U),Xe.init(),Oe=new Gx(U,Xe),He=new Q0(U,Xe,e,Oe),Re=new zx(U,Xe),He.reverseDepthBuffer&&d&&Re.buffers.depth.setReversed(!0),Ye=new av(U),Ce=new wx,E=new Vx(U,Xe,Re,Ce,He,Oe,Ye),y=new ev(_),G=new iv(_),$=new pm(U),tt=new J0(U,$),se=new rv(U,$,Ye,tt),Q=new lv(U,se,$,Ye),Ie=new cv(U,He,E),K=new $0(Ce),ie=new bx(_,y,G,Xe,He,tt,K),J=new Zx(_,Ce),ee=new Ex,Pe=new Dx(Xe),be=new K0(_,y,G,Re,Q,f,c),le=new Bx(_,Q,He),F=new Qx(U,Ye,He,Re),xe=new Z0(U,Xe,Ye),Ve=new ov(U,Xe,Ye),Ye.programs=ie.programs,_.capabilities=He,_.extensions=Xe,_.properties=Ce,_.renderLists=ee,_.shadowMap=le,_.state=Re,_.info=Ye}de();const j=new Kx(_,U);this.xr=j,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Xe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Xe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(N,H,!1))},this.getSize=function(T){return T.set(N,H)},this.setSize=function(T,k,X=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,H=k,t.width=Math.floor(T*O),t.height=Math.floor(k*O),X===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(N*O,H*O).floor()},this.setDrawingBufferSize=function(T,k,X){N=T,H=k,O=X,t.width=Math.floor(T*X),t.height=Math.floor(k*X),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(B)},this.setViewport=function(T,k,X,q){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,k,X,q),Re.viewport(I.copy(B).multiplyScalar(O).round())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,k,X,q){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,k,X,q),Re.scissor(W.copy(Z).multiplyScalar(O).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(T){Re.setScissorTest(ge=T)},this.setOpaqueSort=function(T){ne=T},this.setTransparentSort=function(T){oe=T},this.getClearColor=function(T){return T.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(T=!0,k=!0,X=!0){let q=0;if(T){let z=!1;if(R!==null){const ce=R.texture.format;z=ce===nl||ce===tl||ce===el}if(z){const ce=R.texture.type,pe=ce===qn||ce===Ci||ce===ar||ce===ms||ce===Zc||ce===Qc,Me=be.getClearColor(),Se=be.getClearAlpha(),Ne=Me.r,Be=Me.g,Te=Me.b;pe?(g[0]=Ne,g[1]=Be,g[2]=Te,g[3]=Se,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=Ne,v[1]=Be,v[2]=Te,v[3]=Se,U.clearBufferiv(U.COLOR,0,v))}else q|=U.COLOR_BUFFER_BIT}k&&(q|=U.DEPTH_BUFFER_BIT),X&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ee.dispose(),Pe.dispose(),Ce.dispose(),y.dispose(),G.dispose(),Q.dispose(),tt.dispose(),F.dispose(),ie.dispose(),j.dispose(),j.removeEventListener("sessionstart",Al),j.removeEventListener("sessionend",El),di.stop()};function te(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=Ye.autoReset,k=le.enabled,X=le.autoUpdate,q=le.needsUpdate,z=le.type;de(),Ye.autoReset=T,le.enabled=k,le.autoUpdate=X,le.needsUpdate=q,le.type=z}function fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Fe(T){const k=T.target;k.removeEventListener("dispose",Fe),ft(k)}function ft(T){Rt(T),Ce.remove(T)}function Rt(T){const k=Ce.get(T).programs;k!==void 0&&(k.forEach(function(X){ie.releaseProgram(X)}),T.isShaderMaterial&&ie.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,X,q,z,ce){k===null&&(k=Ke);const pe=z.isMesh&&z.matrixWorld.determinant()<0,Me=kf(T,k,X,q,z);Re.setMaterial(q,pe);let Se=X.index,Ne=1;if(q.wireframe===!0){if(Se=se.getWireframeAttribute(X),Se===void 0)return;Ne=2}const Be=X.drawRange,Te=X.attributes.position;let je=Be.start*Ne,at=(Be.start+Be.count)*Ne;ce!==null&&(je=Math.max(je,ce.start*Ne),at=Math.min(at,(ce.start+ce.count)*Ne)),Se!==null?(je=Math.max(je,0),at=Math.min(at,Se.count)):Te!=null&&(je=Math.max(je,0),at=Math.min(at,Te.count));const lt=at-je;if(lt<0||lt===1/0)return;tt.setup(z,q,Me,X,Se);let Vt,Ze=xe;if(Se!==null&&(Vt=$.get(Se),Ze=Ve,Ze.setIndex(Vt)),z.isMesh)q.wireframe===!0?(Re.setLineWidth(q.wireframeLinewidth*ot()),Ze.setMode(U.LINES)):Ze.setMode(U.TRIANGLES);else if(z.isLine){let we=q.linewidth;we===void 0&&(we=1),Re.setLineWidth(we*ot()),z.isLineSegments?Ze.setMode(U.LINES):z.isLineLoop?Ze.setMode(U.LINE_LOOP):Ze.setMode(U.LINE_STRIP)}else z.isPoints?Ze.setMode(U.POINTS):z.isSprite&&Ze.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ze.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))Ze.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const we=z._multiDrawStarts,Pn=z._multiDrawCounts,Qe=z._multiDrawCount,ln=Se?$.get(Se).bytesPerElement:1,Fi=Ce.get(q).currentProgram.getUniforms();for(let qt=0;qt<Qe;qt++)Fi.setValue(U,"_gl_DrawID",qt),Ze.render(we[qt]/ln,Pn[qt])}else if(z.isInstancedMesh)Ze.renderInstances(je,lt,z.count);else if(X.isInstancedBufferGeometry){const we=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Pn=Math.min(X.instanceCount,we);Ze.renderInstances(je,lt,Pn)}else Ze.render(je,lt)};function nt(T,k,X){T.transparent===!0&&T.side===Ot&&T.forceSinglePass===!1?(T.side=Bt,T.needsUpdate=!0,Ar(T,k,X),T.side=Xn,T.needsUpdate=!0,Ar(T,k,X),T.side=Ot):Ar(T,k,X)}this.compile=function(T,k,X=null){X===null&&(X=T),p=Pe.get(X),p.init(k),M.push(p),X.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==X&&T.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const q=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ce=z.material;if(ce)if(Array.isArray(ce))for(let pe=0;pe<ce.length;pe++){const Me=ce[pe];nt(Me,X,z),q.add(Me)}else nt(ce,X,z),q.add(ce)}),M.pop(),p=null,q},this.compileAsync=function(T,k,X=null){const q=this.compile(T,k,X);return new Promise(z=>{function ce(){if(q.forEach(function(pe){Ce.get(pe).currentProgram.isReady()&&q.delete(pe)}),q.size===0){z(T);return}setTimeout(ce,10)}Xe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let cn=null;function Cn(T){cn&&cn(T)}function Al(){di.stop()}function El(){di.start()}const di=new _d;di.setAnimationLoop(Cn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(T){cn=T,j.setAnimationLoop(T),T===null?di.stop():di.start()},j.addEventListener("sessionstart",Al),j.addEventListener("sessionend",El),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(k),k=j.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,k,R),p=Pe.get(T,M.length),p.init(k),M.push(p),Le.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(Le),ve=this.localClippingEnabled,re=K.init(this.clippingPlanes,ve),m=ee.get(T,x.length),m.init(),x.push(m),j.enabled===!0&&j.isPresenting===!0){const ce=_.xr.getDepthSensingMesh();ce!==null&&Go(ce,k,-1/0,_.sortObjects)}Go(T,k,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ne,oe),We=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,We&&be.addToRenderList(m,T),this.info.render.frame++,re===!0&&K.beginShadows();const X=p.state.shadowsArray;le.render(X,T,k),re===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,z=m.transmissive;if(p.setupLights(),k.isArrayCamera){const ce=k.cameras;if(z.length>0)for(let pe=0,Me=ce.length;pe<Me;pe++){const Se=ce[pe];Cl(q,z,T,Se)}We&&be.render(T);for(let pe=0,Me=ce.length;pe<Me;pe++){const Se=ce[pe];Rl(m,T,Se,Se.viewport)}}else z.length>0&&Cl(q,z,T,k),We&&be.render(T),Rl(m,T,k);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(_,T,k),tt.resetDefaultState(),b=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],re===!0&&K.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Go(T,k,X,q){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){q&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Le);const pe=Q.update(T),Me=T.material;Me.visible&&m.push(T,pe,Me,X,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const pe=Q.update(T),Me=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),De.copy(pe.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(Le)),Array.isArray(Me)){const Se=pe.groups;for(let Ne=0,Be=Se.length;Ne<Be;Ne++){const Te=Se[Ne],je=Me[Te.materialIndex];je&&je.visible&&m.push(T,pe,je,X,De.z,Te)}}else Me.visible&&m.push(T,pe,Me,X,De.z,null)}}const ce=T.children;for(let pe=0,Me=ce.length;pe<Me;pe++)Go(ce[pe],k,X,q)}function Rl(T,k,X,q){const z=T.opaque,ce=T.transmissive,pe=T.transparent;p.setupLightsView(X),re===!0&&K.setGlobalState(_.clippingPlanes,X),q&&Re.viewport(I.copy(q)),z.length>0&&wr(z,k,X),ce.length>0&&wr(ce,k,X),pe.length>0&&wr(pe,k,X),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Cl(T,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Jt(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?mn:qn,minFilter:zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const ce=p.state.transmissionRenderTarget[q.id],pe=q.viewport||I;ce.setSize(pe.z,pe.w);const Me=_.getRenderTarget();_.setRenderTarget(ce),_.getClearColor(A),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear(),We&&be.render(X);const Se=_.toneMapping;_.toneMapping=ci;const Ne=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),re===!0&&K.setGlobalState(_.clippingPlanes,q),wr(T,X,q),E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Te=0,je=k.length;Te<je;Te++){const at=k[Te],lt=at.object,Vt=at.geometry,Ze=at.material,we=at.group;if(Ze.side===Ot&&lt.layers.test(q.layers)){const Pn=Ze.side;Ze.side=Bt,Ze.needsUpdate=!0,Pl(lt,X,q,Vt,Ze,we),Ze.side=Pn,Ze.needsUpdate=!0,Be=!0}}Be===!0&&(E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce))}_.setRenderTarget(Me),_.setClearColor(A,D),Ne!==void 0&&(q.viewport=Ne),_.toneMapping=Se}function wr(T,k,X){const q=k.isScene===!0?k.overrideMaterial:null;for(let z=0,ce=T.length;z<ce;z++){const pe=T[z],Me=pe.object,Se=pe.geometry,Ne=q===null?pe.material:q,Be=pe.group;Me.layers.test(X.layers)&&Pl(Me,k,X,Se,Ne,Be)}}function Pl(T,k,X,q,z,ce){T.onBeforeRender(_,k,X,q,z,ce),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(_,k,X,q,T,ce),z.transparent===!0&&z.side===Ot&&z.forceSinglePass===!1?(z.side=Bt,z.needsUpdate=!0,_.renderBufferDirect(X,k,q,z,T,ce),z.side=Xn,z.needsUpdate=!0,_.renderBufferDirect(X,k,q,z,T,ce),z.side=Ot):_.renderBufferDirect(X,k,q,z,T,ce),T.onAfterRender(_,k,X,q,z,ce)}function Ar(T,k,X){k.isScene!==!0&&(k=Ke);const q=Ce.get(T),z=p.state.lights,ce=p.state.shadowsArray,pe=z.state.version,Me=ie.getParameters(T,z.state,ce,k,X),Se=ie.getProgramCacheKey(Me);let Ne=q.programs;q.environment=T.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(T.isMeshStandardMaterial?G:y).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",Fe),Ne=new Map,q.programs=Ne);let Be=Ne.get(Se);if(Be!==void 0){if(q.currentProgram===Be&&q.lightsStateVersion===pe)return Il(T,Me),Be}else Me.uniforms=ie.getUniforms(T),T.onBeforeCompile(Me,_),Be=ie.acquireProgram(Me,Se),Ne.set(Se,Be),q.uniforms=Me.uniforms;const Te=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Te.clippingPlanes=K.uniform),Il(T,Me),q.needsLights=Hf(T),q.lightsStateVersion=pe,q.needsLights&&(Te.ambientLightColor.value=z.state.ambient,Te.lightProbe.value=z.state.probe,Te.directionalLights.value=z.state.directional,Te.directionalLightShadows.value=z.state.directionalShadow,Te.spotLights.value=z.state.spot,Te.spotLightShadows.value=z.state.spotShadow,Te.rectAreaLights.value=z.state.rectArea,Te.ltc_1.value=z.state.rectAreaLTC1,Te.ltc_2.value=z.state.rectAreaLTC2,Te.pointLights.value=z.state.point,Te.pointLightShadows.value=z.state.pointShadow,Te.hemisphereLights.value=z.state.hemi,Te.directionalShadowMap.value=z.state.directionalShadowMap,Te.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Te.spotShadowMap.value=z.state.spotShadowMap,Te.spotLightMatrix.value=z.state.spotLightMatrix,Te.spotLightMap.value=z.state.spotLightMap,Te.pointShadowMap.value=z.state.pointShadowMap,Te.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Be,q.uniformsList=null,Be}function Ll(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=mo.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Il(T,k){const X=Ce.get(T);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function kf(T,k,X,q,z){k.isScene!==!0&&(k=Ke),E.resetTextureUnits();const ce=k.fog,pe=q.isMeshStandardMaterial?k.environment:null,Me=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ht,Se=(q.isMeshStandardMaterial?G:y).get(q.envMap||pe),Ne=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Te=!!X.morphAttributes.position,je=!!X.morphAttributes.normal,at=!!X.morphAttributes.color;let lt=ci;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(lt=_.toneMapping);const Vt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ze=Vt!==void 0?Vt.length:0,we=Ce.get(q),Pn=p.state.lights;if(re===!0&&(ve===!0||T!==S)){const Qt=T===S&&q.id===b;K.setState(q,T,Qt)}let Qe=!1;q.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Pn.state.version||we.outputColorSpace!==Me||z.isBatchedMesh&&we.batching===!1||!z.isBatchedMesh&&we.batching===!0||z.isBatchedMesh&&we.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&we.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&we.instancing===!1||!z.isInstancedMesh&&we.instancing===!0||z.isSkinnedMesh&&we.skinning===!1||!z.isSkinnedMesh&&we.skinning===!0||z.isInstancedMesh&&we.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&we.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&we.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&we.instancingMorph===!1&&z.morphTexture!==null||we.envMap!==Se||q.fog===!0&&we.fog!==ce||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==K.numPlanes||we.numIntersection!==K.numIntersection)||we.vertexAlphas!==Ne||we.vertexTangents!==Be||we.morphTargets!==Te||we.morphNormals!==je||we.morphColors!==at||we.toneMapping!==lt||we.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,we.__version=q.version);let ln=we.currentProgram;Qe===!0&&(ln=Ar(q,k,z));let Fi=!1,qt=!1,Ds=!1;const ht=ln.getUniforms(),Mn=we.uniforms;if(Re.useProgram(ln.program)&&(Fi=!0,qt=!0,Ds=!0),q.id!==b&&(b=q.id,qt=!0),Fi||S!==T){Re.buffers.depth.getReversed()?(ue.copy(T.projectionMatrix),Wp(ue),Xp(ue),ht.setValue(U,"projectionMatrix",ue)):ht.setValue(U,"projectionMatrix",T.projectionMatrix),ht.setValue(U,"viewMatrix",T.matrixWorldInverse);const jn=ht.map.cameraPosition;jn!==void 0&&jn.setValue(U,Ae.setFromMatrixPosition(T.matrixWorld)),He.logarithmicDepthBuffer&&ht.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ht.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,qt=!0,Ds=!0)}if(z.isSkinnedMesh){ht.setOptional(U,z,"bindMatrix"),ht.setOptional(U,z,"bindMatrixInverse");const Qt=z.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),ht.setValue(U,"boneTexture",Qt.boneTexture,E))}z.isBatchedMesh&&(ht.setOptional(U,z,"batchingTexture"),ht.setValue(U,"batchingTexture",z._matricesTexture,E),ht.setOptional(U,z,"batchingIdTexture"),ht.setValue(U,"batchingIdTexture",z._indirectTexture,E),ht.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&ht.setValue(U,"batchingColorTexture",z._colorsTexture,E));const Ns=X.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0)&&Ie.update(z,X,ln),(qt||we.receiveShadow!==z.receiveShadow)&&(we.receiveShadow=z.receiveShadow,ht.setValue(U,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Mn.envMap.value=Se,Mn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(Mn.envMapIntensity.value=k.environmentIntensity),qt&&(ht.setValue(U,"toneMappingExposure",_.toneMappingExposure),we.needsLights&&zf(Mn,Ds),ce&&q.fog===!0&&J.refreshFogUniforms(Mn,ce),J.refreshMaterialUniforms(Mn,q,O,H,p.state.transmissionRenderTarget[T.id]),mo.upload(U,Ll(we),Mn,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(mo.upload(U,Ll(we),Mn,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ht.setValue(U,"center",z.center),ht.setValue(U,"modelViewMatrix",z.modelViewMatrix),ht.setValue(U,"normalMatrix",z.normalMatrix),ht.setValue(U,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Qt=q.uniformsGroups;for(let jn=0,Kn=Qt.length;jn<Kn;jn++){const Dl=Qt[jn];F.update(Dl,ln),F.bind(Dl,ln)}}return ln}function zf(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Hf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,k,X){Ce.get(T.texture).__webglTexture=k,Ce.get(T.depthTexture).__webglTexture=X;const q=Ce.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){const X=Ce.get(T);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,X=0){R=T,w=k,P=X;let q=!0,z=null,ce=!1,pe=!1;if(T){const Se=Ce.get(T);if(Se.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(U.FRAMEBUFFER,null),q=!1;else if(Se.__webglFramebuffer===void 0)E.setupRenderTarget(T);else if(Se.__hasExternalTextures)E.rebindTextures(T,Ce.get(T.texture).__webglTexture,Ce.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Te=T.depthTexture;if(Se.__boundDepthTexture!==Te){if(Te!==null&&Ce.has(Te)&&(T.width!==Te.image.width||T.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(T)}}const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(pe=!0);const Be=Ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[k])?z=Be[k][X]:z=Be[k],ce=!0):T.samples>0&&E.useMultisampledRTT(T)===!1?z=Ce.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?z=Be[X]:z=Be,I.copy(T.viewport),W.copy(T.scissor),V=T.scissorTest}else I.copy(B).multiplyScalar(O).floor(),W.copy(Z).multiplyScalar(O).floor(),V=ge;if(Re.bindFramebuffer(U.FRAMEBUFFER,z)&&q&&Re.drawBuffers(T,z),Re.viewport(I),Re.scissor(W),Re.setScissorTest(V),ce){const Se=Ce.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se.__webglTexture,X)}else if(pe){const Se=Ce.get(T.texture),Ne=k||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.__webglTexture,X||0,Ne)}b=-1},this.readRenderTargetPixels=function(T,k,X,q,z,ce,pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){Re.bindFramebuffer(U.FRAMEBUFFER,Me);try{const Se=T.texture,Ne=Se.format,Be=Se.type;if(!He.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-q&&X>=0&&X<=T.height-z&&U.readPixels(k,X,q,z,Oe.convert(Ne),Oe.convert(Be),ce)}finally{const Se=R!==null?Ce.get(R).__webglFramebuffer:null;Re.bindFramebuffer(U.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(T,k,X,q,z,ce,pe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){const Se=T.texture,Ne=Se.format,Be=Se.type;if(!He.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-q&&X>=0&&X<=T.height-z){Re.bindFramebuffer(U.FRAMEBUFFER,Me);const Te=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Te),U.bufferData(U.PIXEL_PACK_BUFFER,ce.byteLength,U.STREAM_READ),U.readPixels(k,X,q,z,Oe.convert(Ne),Oe.convert(Be),0);const je=R!==null?Ce.get(R).__webglFramebuffer:null;Re.bindFramebuffer(U.FRAMEBUFFER,je);const at=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Gp(U,at,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Te),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ce),U.deleteBuffer(Te),U.deleteSync(at),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,k=null,X=0){T.isTexture!==!0&&(Zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);const q=Math.pow(2,-X),z=Math.floor(T.image.width*q),ce=Math.floor(T.image.height*q),pe=k!==null?k.x:0,Me=k!==null?k.y:0;E.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,pe,Me,z,ce),Re.unbindTexture()},this.copyTextureToTexture=function(T,k,X=null,q=null,z=0){T.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1],k=arguments[2],z=arguments[3]||0,X=null);let ce,pe,Me,Se,Ne,Be,Te,je,at;const lt=T.isCompressedTexture?T.mipmaps[z]:T.image;X!==null?(ce=X.max.x-X.min.x,pe=X.max.y-X.min.y,Me=X.isBox3?X.max.z-X.min.z:1,Se=X.min.x,Ne=X.min.y,Be=X.isBox3?X.min.z:0):(ce=lt.width,pe=lt.height,Me=lt.depth||1,Se=0,Ne=0,Be=0),q!==null?(Te=q.x,je=q.y,at=q.z):(Te=0,je=0,at=0);const Vt=Oe.convert(k.format),Ze=Oe.convert(k.type);let we;k.isData3DTexture?(E.setTexture3D(k,0),we=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(E.setTexture2DArray(k,0),we=U.TEXTURE_2D_ARRAY):(E.setTexture2D(k,0),we=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const Pn=U.getParameter(U.UNPACK_ROW_LENGTH),Qe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ln=U.getParameter(U.UNPACK_SKIP_PIXELS),Fi=U.getParameter(U.UNPACK_SKIP_ROWS),qt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,lt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Se),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ne),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Be);const Ds=T.isDataArrayTexture||T.isData3DTexture,ht=k.isDataArrayTexture||k.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Mn=Ce.get(T),Ns=Ce.get(k),Qt=Ce.get(Mn.__renderTarget),jn=Ce.get(Ns.__renderTarget);Re.bindFramebuffer(U.READ_FRAMEBUFFER,Qt.__webglFramebuffer),Re.bindFramebuffer(U.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Kn=0;Kn<Me;Kn++)Ds&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.get(T).__webglTexture,z,Be+Kn),T.isDepthTexture?(ht&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.get(k).__webglTexture,z,at+Kn),U.blitFramebuffer(Se,Ne,ce,pe,Te,je,ce,pe,U.DEPTH_BUFFER_BIT,U.NEAREST)):ht?U.copyTexSubImage3D(we,z,Te,je,at+Kn,Se,Ne,ce,pe):U.copyTexSubImage2D(we,z,Te,je,at+Kn,Se,Ne,ce,pe);Re.bindFramebuffer(U.READ_FRAMEBUFFER,null),Re.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ht?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(we,z,Te,je,at,ce,pe,Me,Vt,Ze,lt.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(we,z,Te,je,at,ce,pe,Me,Vt,lt.data):U.texSubImage3D(we,z,Te,je,at,ce,pe,Me,Vt,Ze,lt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,Te,je,ce,pe,Vt,Ze,lt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,Te,je,lt.width,lt.height,Vt,lt.data):U.texSubImage2D(U.TEXTURE_2D,z,Te,je,ce,pe,Vt,Ze,lt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Pn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ln),U.pixelStorei(U.UNPACK_SKIP_ROWS,Fi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,qt),z===0&&k.generateMipmaps&&U.generateMipmap(we),Re.unbindTexture()},this.copyTextureToTexture3D=function(T,k,X=null,q=null,z=0){return T.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,T=arguments[2],k=arguments[3],z=arguments[4]||0),Zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,k,X,q,z)},this.initRenderTarget=function(T){Ce.get(T).__webglFramebuffer===void 0&&E.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),Re.unbindTexture()},this.resetState=function(){w=0,P=0,R=null,Re.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class cl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=n}clone(){return new cl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class e_ extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pc,this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new L;class dr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new dr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ll extends on{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Qi;const ks=new L,$i=new L,es=new L,ts=new ae,zs=new ae,Ad=new Ue,Yr=new L,Hs=new L,jr=new L,Ih=new ae,xa=new ae,Dh=new ae;class Ed extends ct{constructor(e=new ll){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new Tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wd(t,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new dr(n,3,0,!1)),Qi.setAttribute("uv",new dr(n,2,3,!1))}this.geometry=Qi,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),Ad.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-es.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Kr(Yr.set(-.5,-.5,0),es,o,$i,s,r),Kr(Hs.set(.5,-.5,0),es,o,$i,s,r),Kr(jr.set(.5,.5,0),es,o,$i,s,r),Ih.set(0,0),xa.set(1,0),Dh.set(1,1);let a=e.ray.intersectTriangle(Yr,Hs,jr,!1,ks);if(a===null&&(Kr(Hs.set(-.5,.5,0),es,o,$i,s,r),xa.set(0,1),a=e.ray.intersectTriangle(Yr,jr,Hs,!1,ks),a===null))return;const c=e.ray.origin.distanceTo(ks);c<e.near||c>e.far||t.push({distance:c,point:ks.clone(),uv:tn.getInterpolation(ks,Yr,Hs,jr,Ih,xa,Dh,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Kr(i,e,t,n,s,r){ts.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(zs.x=r*ts.x-s*ts.y,zs.y=s*ts.x+r*ts.y):zs.copy(ts),i.copy(e),i.x+=zs.x,i.y+=zs.y,i.applyMatrix4(Ad)}const Nh=new L,Uh=new Je,Oh=new Je,t_=new L,Fh=new Ue,Jr=new L,_a=new An,Bh=new Ue,ya=new Io;class n_ extends Ee{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fl,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jr),this.boundingBox.expandByPoint(Jr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new An),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jr),this.boundingSphere.expandByPoint(Jr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_a.copy(this.boundingSphere),_a.applyMatrix4(s),e.ray.intersectsSphere(_a)!==!1&&(Bh.copy(s).invert(),ya.copy(e.ray).applyMatrix4(Bh),!(this.boundingBox!==null&&ya.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ya)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===up?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Uh.fromBufferAttribute(s.attributes.skinIndex,e),Oh.fromBufferAttribute(s.attributes.skinWeight,e),Nh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Oh.getComponent(r);if(o!==0){const a=Uh.getComponent(r);Fh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(t_.copy(Nh).applyMatrix4(Fh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Rd extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Cd extends gt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=wt,h=wt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kh=new Ue,i_=new Ue;class hl{constructor(e=[],t=[]){this.uuid=gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:i_;kh.multiplyMatrices(a,t[r]),kh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new hl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Cd(t,e,e,sn,pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Rd),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Ic extends At{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ns=new Ue,zh=new Ue,Zr=[],Hh=new xn,s_=new Ue,Vs=new Ee,Gs=new An;class r_ extends Ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ic(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,s_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),Hh.copy(e.boundingBox).applyMatrix4(ns),this.boundingBox.union(Hh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),Gs.copy(e.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Gs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(n),e.ray.intersectsSphere(Gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ns),zh.multiplyMatrices(n,ns),Vs.matrixWorld=zh,Vs.raycast(e,Zr);for(let o=0,a=Zr.length;o<a;o++){const c=Zr[o];c.instanceId=r,c.object=this,t.push(c)}Zr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ic(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cd(new Float32Array(s*this.count),s,this.count,$c,pn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Pd extends on{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const So=new L,To=new L,Vh=new Ue,Ws=new Io,Qr=new An,Ma=new L,Gh=new L;class ul extends ct{constructor(e=new Tt,t=new Pd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)So.fromBufferAttribute(t,s-1),To.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=So.distanceTo(To);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,e.ray.intersectsSphere(Qr)===!1)return;Vh.copy(s).invert(),Ws.copy(e.ray).applyMatrix4(Vh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=h.getX(v),x=h.getX(v+1),M=$r(this,e,Ws,c,p,x);M&&t.push(M)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=$r(this,e,Ws,c,v,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=$r(this,e,Ws,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=$r(this,e,Ws,c,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $r(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(So.fromBufferAttribute(o,s),To.fromBufferAttribute(o,r),t.distanceSqToSegment(So,To,Ma,Gh)>n)return;Ma.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ma);if(!(c<e.near||c>e.far))return{distance:c,point:Gh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Wh=new L,Xh=new L;class o_ extends ul{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Wh.fromBufferAttribute(t,s),Xh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wh.distanceTo(Xh);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class a_ extends ul{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class bo extends on{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qh=new Ue,Dc=new Io,eo=new An,to=new L;class Nc extends ct{constructor(e=new Tt,t=new bo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;qh.copy(s).invert(),Dc.copy(e.ray).applyMatrix4(qh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);to.fromBufferAttribute(u,m),Yh(to,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)to.fromBufferAttribute(u,g),Yh(to,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Yh(i,e,t,n,s,r,o){const a=Dc.distanceSqToPoint(i);if(a<t){const c=new L;Dc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ld extends gt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ae:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,s=[],r=[],o=[],a=new L,c=new Ue;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(_t(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(_t(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class dl extends En{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ae){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class c_ extends dl{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function fl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const no=new L,Sa=new fl,Ta=new fl,ba=new fl;class l_ extends En{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(no.subVectors(s[0],s[1]).add(s[0]),l=no);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(no.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=no),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Sa.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),Ta.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),ba.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Sa.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ta.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ba.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Sa.calc(c),Ta.calc(c),ba.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function h_(i,e){const t=1-i;return t*t*e}function u_(i,e){return 2*(1-i)*i*e}function d_(i,e){return i*i*e}function nr(i,e,t,n){return h_(i,e)+u_(i,t)+d_(i,n)}function f_(i,e){const t=1-i;return t*t*t*e}function p_(i,e){const t=1-i;return 3*t*t*i*e}function m_(i,e){return 3*(1-i)*i*i*e}function g_(i,e){return i*i*i*e}function ir(i,e,t,n,s){return f_(i,e)+p_(i,t)+m_(i,n)+g_(i,s)}class Id extends En{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(e,s.x,r.x,o.x,a.x),ir(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class v_ extends En{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(e,s.x,r.x,o.x,a.x),ir(e,s.y,r.y,o.y,a.y),ir(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dd extends En{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class x_ extends En{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nd extends En{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(nr(e,s.x,r.x,o.x),nr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class __ extends En{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(nr(e,s.x,r.x,o.x),nr(e,s.y,r.y,o.y),nr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ud extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(jh(a,c.x,l.x,h.x,u.x),jh(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ae().fromArray(s))}return this}}var Kh=Object.freeze({__proto__:null,ArcCurve:c_,CatmullRomCurve3:l_,CubicBezierCurve:Id,CubicBezierCurve3:v_,EllipseCurve:dl,LineCurve:Dd,LineCurve3:x_,QuadraticBezierCurve:Nd,QuadraticBezierCurve3:__,SplineCurve:Ud});class y_ extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Kh[s.type]().fromJSON(s))}return this}}class M_ extends y_{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Dd(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Nd(this.currentPoint.clone(),new ae(e,t),new ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Id(this.currentPoint.clone(),new ae(e,t),new ae(n,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ud(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new dl(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class pl extends Tt{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=_t(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new L,d=new ae,f=new L,g=new L,v=new L;let m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let x=0;x<=t;x++){const M=n+x*h*s,_=Math.sin(M),C=Math.cos(M);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*_,u.y=e[w].y,u.z=e[w].x*C,o.push(u.x,u.y,u.z),d.x=x/t,d.y=w/(e.length-1),a.push(d.x,d.y);const P=c[3*w+0]*_,R=c[3*w+1],b=c[3*w+0]*C;l.push(P,R,b)}}for(let x=0;x<t;x++)for(let M=0;M<e.length-1;M++){const _=M+x*e.length,C=_,w=_+e.length,P=_+e.length+1,R=_+1;r.push(C,w,R),r.push(P,R,w)}this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("uv",new dt(a,2)),this.setAttribute("normal",new dt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.points,e.segments,e.phiStart,e.phiLength)}}class ml extends pl{constructor(e=1,t=1,n=4,s=8){const r=new M_;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new ml(e.radius,e.length,e.capSegments,e.radialSegments)}}class Lt extends Tt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;x(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function x(){const _=new L,C=new L;let w=0;const P=(t-e)/n;for(let R=0;R<=r;R++){const b=[],S=R/r,I=S*(t-e)+e;for(let W=0;W<=s;W++){const V=W/s,A=V*c+a,D=Math.sin(A),N=Math.cos(A);C.x=I*D,C.y=-S*n+m,C.z=I*N,u.push(C.x,C.y,C.z),_.set(D,P,N).normalize(),d.push(_.x,_.y,_.z),f.push(V,1-S),b.push(g++)}v.push(b)}for(let R=0;R<s;R++)for(let b=0;b<r;b++){const S=v[b][R],I=v[b+1][R],W=v[b+1][R+1],V=v[b][R+1];(e>0||b!==0)&&(h.push(S,I,V),w+=3),(t>0||b!==r-1)&&(h.push(I,W,V),w+=3)}l.addGroup(p,w,0),p+=w}function M(_){const C=g,w=new ae,P=new L;let R=0;const b=_===!0?e:t,S=_===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const I=g;for(let W=0;W<=s;W++){const A=W/s*c+a,D=Math.cos(A),N=Math.sin(A);P.x=b*N,P.y=m*S,P.z=b*D,u.push(P.x,P.y,P.z),d.push(0,S,0),w.x=D*.5+.5,w.y=N*.5*S+.5,f.push(w.x,w.y),g++}for(let W=0;W<s;W++){const V=C+W,A=I+W;_===!0?h.push(A,A+1,V):h.push(A+1,A,V),R+=3}l.addGroup(p,R,_===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Uo extends Lt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Uo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sr extends Tt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/s,f=new L,g=new ae;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const x=p+m,M=x,_=x+n+1,C=x+n+2,w=x+1;a.push(M,_,w),a.push(_,C,w)}}this.setIndex(a),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Wn extends Tt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new L,d=new L,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let _=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){const w=C/t;u.x=-e*Math.cos(s+w*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+w*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(w+_,1-M),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const M=h[p][x+1],_=h[p][x],C=h[p+1][x],w=h[p+1][x+1];(p!==0||o>0)&&f.push(M,_,w),(p!==n-1||c<Math.PI)&&f.push(_,C,w)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class S_ extends mt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Es extends on{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yn extends Es{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class bt extends on{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new _e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}function io(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function T_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function b_(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Jh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Od(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Tr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class w_ extends Tr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ss,endingEnd:ss}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case rs:r=e,a=2*t-n;break;case yo:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case rs:o=e,c=2*n-t;break;case yo:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,x=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*v+.5*g,_=f*m-f*v;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+x*o[l+C]+M*o[c+C]+_*o[u+C];return r}}class Fd extends Tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class A_ extends Tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=io(t,this.TimeBufferType),this.values=io(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:io(e.times,Array),values:io(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new A_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new w_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case cr:t=this.InterpolantFactoryMethodDiscrete;break;case lr:t=this.InterpolantFactoryMethodLinear;break;case Wo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return lr;case this.InterpolantFactoryMethodSmooth:return Wo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&T_(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=lr;class Rs extends Rn{constructor(e,t,n){super(e,t,n)}}Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=cr;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Bd extends Rn{}Bd.prototype.ValueTypeName="color";class _s extends Rn{}_s.prototype.ValueTypeName="number";class E_ extends Tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)vn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class ys extends Rn{InterpolantFactoryMethodLinear(e){return new E_(this.times,this.values,this.getValueSize(),e)}}ys.prototype.ValueTypeName="quaternion";ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends Rn{constructor(e,t,n){super(e,t,n)}}Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=cr;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends Rn{}Ms.prototype.ValueTypeName="vector";class Uc{constructor(e="",t=-1,n=[],s=il){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=gn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(C_(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Rn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=b_(c);c=Jh(c,1,h),l=Jh(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new _s(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,v){if(f.length!==0){const m=[],p=[];Od(f,m,p,g),m.length!==0&&v.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const M=d[g];m.push(M.time),p.push(M.morphTarget===v?1:0)}s.push(new _s(".morphTargetInfluence["+v+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(Ms,f+".position",d,"pos",s),n(ys,f+".quaternion",d,"rot",s),n(Ms,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function R_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _s;case"vector":case"vector2":case"vector3":case"vector4":return Ms;case"color":return Bd;case"quaternion":return ys;case"bool":case"boolean":return Rs;case"string":return Cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function C_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=R_(i.type);if(i.times===void 0){const t=[],n=[];Od(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const oi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class P_{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const L_=new P_;class Ps{constructor(e){this.manager=e!==void 0?e:L_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ps.DEFAULT_MATERIAL_NAME="__DEFAULT";const On={};class I_ extends Error{constructor(e,t){super(e),this.response=t}}class kd extends Ps{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=oi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(On[e]!==void 0){On[e].push({onLoad:t,onProgress:n,onError:s});return}On[e]=[],On[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=On[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){x();function x(){u.read().then(({done:M,value:_})=>{if(M)p.close();else{v+=_.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let w=0,P=h.length;w<P;w++){const R=h[w];R.onProgress&&R.onProgress(C)}p.enqueue(_),x()}},M=>{p.error(M)})}}});return new Response(m)}else throw new I_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{oi.add(e,l);const h=On[e];delete On[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=On[e];if(h===void 0)throw this.manager.itemError(e),l;delete On[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class D_ extends Ps{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=oi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ur("img");function c(){h(),oi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class zd extends Ps{constructor(e){super(e)}load(e,t,n,s){const r=new gt,o=new D_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Oo extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class N_ extends Oo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wa=new Ue,Zh=new L,Qh=new L;class gl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ol,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),Qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qh),t.updateMatrixWorld(),wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class U_ extends gl{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=vs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Hd extends Oo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new U_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $h=new Ue,Xs=new L,Aa=new L;class O_ extends gl{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Xs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xs),Aa.copy(n.position),Aa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Aa),n.updateMatrixWorld(),s.makeTranslation(-Xs.x,-Xs.y,-Xs.z),$h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h)}}class Vd extends Oo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new O_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class F_ extends gl{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Oc extends Oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new F_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class B_ extends Ps{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=oi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return oi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),oi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});oi.add(e,c),r.manager.itemStart(e)}}class k_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=eu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function eu(){return performance.now()}class z_{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){vn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;vn.multiplyQuaternionsFlat(e,o,e,t,e,n),vn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const vl="\\[\\]\\.:\\/",H_=new RegExp("["+vl+"]","g"),xl="[^"+vl+"]",V_="[^"+vl.replace("\\.","")+"]",G_=/((?:WC+[\/:])*)/.source.replace("WC",xl),W_=/(WCOD+)?/.source.replace("WCOD",V_),X_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xl),q_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xl),Y_=new RegExp("^"+G_+W_+X_+q_+"$"),j_=["material","materials","bones","map"];class K_{constructor(e,t,n){const s=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(H_,"")}static parseTrackName(e){const t=Y_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);j_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=K_;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class J_{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:ss,endingEnd:ss};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=dp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case pp:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case il:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===fp;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===od){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=rs,s.endingEnd=rs):(e?s.endingStart=this.zeroSlopeAtStart?rs:ss:s.endingStart=yo,t?s.endingEnd=this.zeroSlopeAtEnd?rs:ss:s.endingEnd=yo)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const Z_=new Float32Array(1);class Q_ extends Ii{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=s[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;g=new z_($e.create(n,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Fd(new Float32Array(2),new Float32Array(2),1,Z_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?Uc.findByName(s,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=il),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new J_(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?Uc.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jc);class $_{ctx=null;master=null;started=!1;start(){if(this.started)return;this.started=!0;const e=new AudioContext;this.ctx=e,this.master=e.createGain(),this.master.gain.value=.12,this.master.connect(e.destination),this.drone(110,.35),this.drone(164.8,.18),this.drone(246.9,.1),this.lapping()}drone(e,t){if(!this.ctx||!this.master)return;const n=this.ctx.createOscillator(),s=this.ctx.createGain(),r=this.ctx.createBiquadFilter();n.type="sine",n.frequency.value=e,r.type="lowpass",r.frequency.value=420,s.gain.value=t,n.connect(r),r.connect(s),s.connect(this.master),n.start()}lapping(){if(!this.ctx||!this.master)return;const e=this.ctx.createBuffer(1,this.ctx.sampleRate*2,this.ctx.sampleRate),t=e.getChannelData(0);for(let o=0;o<t.length;o++)t[o]=(Math.random()*2-1)*.18;const n=this.ctx.createBufferSource();n.buffer=e,n.loop=!0;const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=380;const r=this.ctx.createGain();r.gain.value=.22,n.connect(s),s.connect(r),r.connect(this.master),n.start()}blip(e){if(!this.ctx||!this.master)return;const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.value=e==="pick"?520:e==="drop"?330:640,n.gain.value=.12,n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.25),t.connect(n),n.connect(this.master),t.start(),t.stop(this.ctx.currentTime+.26)}}class ey{enabled;worker=null;lastMs=0;lastChecksum=0;lastPoints=null;jobId=1;pending=0;constructor(e){this.enabled=e,e&&this.start()}start(){this.worker||(this.worker=new Worker(new URL(""+new URL("world.worker-KDWXU0ES.js",import.meta.url).href,import.meta.url),{type:"module"}),this.worker.onmessage=e=>{this.pending=0,this.lastMs=e.data.ms??0,this.lastChecksum=e.data.checksum??0,this.lastPoints=e.data.points})}stop(){this.worker?.terminate(),this.worker=null,this.lastPoints=null,this.lastMs=0}setEnabled(e){this.enabled=e,e?this.start():this.stop()}tick(e,t){if(!this.enabled||!this.worker||this.pending)return;const n={id:this.jobId++,slot:t,seed:t*13.7,t:e,kind:"flock"};this.pending=1,this.worker.postMessage(n)}}const fr=12,ty=20,ny=18;/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const Gd=Object.freeze({p:0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,n:0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,h:1n,a:0n,b:7n,Gx:0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Gy:0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n}),{p:hi,n:br,Gx:iy,Gy:sy,b:Wd}=Gd,zt=32,pr=64,Fc={publicKey:zt+1,publicKeyUncompressed:pr+1,seed:zt+zt/2},pt=(i="",e=Error)=>{const t=new e(i),{captureStackTrace:n}=Error;throw typeof n=="function"&&n(t,pt),t},ry=i=>i instanceof Uint8Array||ArrayBuffer.isView(i)&&i.constructor.name==="Uint8Array"&&i.BYTES_PER_ELEMENT===1,an=(i,e,t="")=>{const n=ry(i),s=i?.length,r=e!==void 0;if(!n||r&&s!==e){const o=t&&`"${t}" `,a=r?` of length ${e}`:"",c=n?`length=${s}`:`type=${typeof i}`,l=o+"expected Uint8Array"+a+", got "+c;return n?pt(l,RangeError):pt(l,TypeError)}return i},mr=i=>new Uint8Array(i),Xd=(i,e)=>i.toString(16).padStart(e,"0"),qd=i=>{let e="";for(const t of an(i))e+=Xd(t,2);return e},Fn={_0:48,_9:57,A:65,F:70,a:97,f:102},tu=i=>i>=Fn._0&&i<=Fn._9?i-Fn._0:i>=Fn.A&&i<=Fn.F?i-(Fn.A-10):i>=Fn.a&&i<=Fn.f?i-(Fn.a-10):void 0,Yd=i=>{const e="hex invalid";if(typeof i!="string")return pt(e);const t=i.length,n=t/2;if(t%2)return pt(e);const s=mr(n);for(let r=0,o=0;r<n;r++,o+=2){const a=tu(i.charCodeAt(o)),c=tu(i.charCodeAt(o+1));if(a===void 0||c===void 0)return pt(e);s[r]=a*16+c}return s},nu=()=>globalThis?.crypto?.subtle??pt("crypto.subtle must be defined, consider polyfill"),Ss=(...i)=>{let e=0;for(const s of i)e+=an(s).length;const t=mr(e);let n=0;for(const s of i)t.set(s,n),n+=s.length;return t},_l=(i=zt)=>(globalThis?.crypto).getRandomValues(mr(i)),Bc=BigInt,Pi=(i,e,t,n="bad number: out of range")=>typeof i!="bigint"?pt(n,TypeError):e<=i&&i<t?i:pt(n,RangeError),ye=(i,e=hi)=>{const t=i%e;return t>=0n?t:e+t},Fo=i=>ye(i,br),oy=(i,e)=>{(i===0n||e<=0n)&&pt("no inverse n="+i+" mod="+e);let t=ye(i,e),n=e,s=0n,r=1n;for(;t!==0n;){const o=n/t,a=n%t,c=s-r*o;n=t,t=a,s=r,r=c}return n===1n?ye(s,e):pt("no inverse")},jd=i=>{const e=dy[i];return typeof e!="function"&&pt("hashes."+i+" not set"),e},iu=(i,e,t)=>an(jd(i)(e,t),zt,"digest"),su=(i,e,t)=>Promise.resolve(jd(i)(e,t)).then(n=>an(n,zt,"digest")),Ea=i=>i instanceof Kt?i:pt("Point expected"),Kd=i=>ye(ye(i*i)*i+Wd),ru=i=>Pi(i,0n,hi),go=i=>Pi(i,1n,hi),ay=i=>Pi(i,1n,br),Bo=i=>!(i&1n),Jd=i=>Uint8Array.of(i),cy=i=>Jd(Bo(i)?2:3),Zd=i=>{const e=Kd(go(i));let t=1n;for(let n=e,s=(hi+1n)/4n;s>0n;s>>=1n)s&1n&&(t=t*n%hi),n=n*n%hi;return ye(t*t)!==e&&pt("sqrt invalid"),Bo(t)?t:ye(-t)};class Kt{static BASE;static ZERO;X;Y;Z;constructor(e,t,n){this.X=ru(e),this.Y=go(t),this.Z=ru(n),Object.freeze(this)}static CURVE(){return Gd}static fromAffine(e){const{x:t,y:n}=e;return t===0n&&n===0n?wi:new Kt(t,n,1n)}static fromBytes(e){an(e);const{publicKey:t,publicKeyUncompressed:n}=Fc;let s;const r=e.length,o=e[0],a=e.subarray(1),c=wo(a,0,zt);if(r===t&&(o===2||o===3)){let l=Zd(c);o===3&&(l=ye(-l)),s=new Kt(c,l,1n)}return r===n&&o===4&&(s=new Kt(c,wo(a,zt,pr),1n)),s?s.assertValidity():pt("bad point: not on curve")}static fromHex(e){return Kt.fromBytes(Yd(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){const{X:t,Y:n,Z:s}=this,{X:r,Y:o,Z:a}=Ea(e),c=ye(t*a),l=ye(r*s),h=ye(n*a),u=ye(o*s);return c===l&&h===u}is0(){return this.equals(wi)}negate(){return new Kt(this.X,ye(-this.Y),this.Z)}double(){return this.add(this)}add(e){const{X:t,Y:n,Z:s}=this,{X:r,Y:o,Z:a}=Ea(e),c=0n,l=Wd;let h=0n,u=0n,d=0n;const f=ye(l*3n);let g=ye(t*r),v=ye(n*o),m=ye(s*a),p=ye(t+n),x=ye(r+o);p=ye(p*x),x=ye(g+v),p=ye(p-x),x=ye(t+s);let M=ye(r+a);return x=ye(x*M),M=ye(g+m),x=ye(x-M),M=ye(n+s),h=ye(o+a),M=ye(M*h),h=ye(v+m),M=ye(M-h),d=ye(c*x),h=ye(f*m),d=ye(h+d),h=ye(v-d),d=ye(v+d),u=ye(h*d),v=ye(g+g),v=ye(v+g),m=ye(c*m),x=ye(f*x),v=ye(v+m),m=ye(g-m),m=ye(c*m),x=ye(x+m),g=ye(v*x),u=ye(u+g),g=ye(M*x),h=ye(p*h),h=ye(h-g),g=ye(p*v),d=ye(M*d),d=ye(d+g),new Kt(h,u,d)}subtract(e){return this.add(Ea(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return wi;if(ay(e),e===1n)return this;if(this.equals(Li))return My(e).p;let n=wi,s=Li;for(let r=this;e>0n;r=r.double(),e>>=1n)e&1n?n=n.add(r):t&&(s=s.add(r));return n}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){const{X:e,Y:t,Z:n}=this;if(this.equals(wi))return{x:0n,y:0n};if(n===1n)return{x:e,y:t};const s=oy(n,hi);return ye(n*s)!==1n&&pt("inverse invalid"),{x:ye(e*s),y:ye(t*s)}}assertValidity(){const{x:e,y:t}=this.toAffine();return go(e),go(t),ye(t*t)===Kd(e)?this:pt("bad point: not on curve")}toBytes(e=!0){const{x:t,y:n}=this.assertValidity().toAffine(),s=wn(t);return e?Ss(cy(n),s):Ss(Jd(4),s,wn(n))}toHex(e){return qd(this.toBytes(e))}}const Li=new Kt(iy,sy,1n),wi=new Kt(0n,1n,0n);Kt.BASE=Li;Kt.ZERO=wi;const ly=(i,e,t)=>Li.multiply(e,!1).add(i.multiply(t,!1)).assertValidity(),Ni=i=>Bc("0x"+(qd(i)||"0")),wo=(i,e,t)=>Ni(i.subarray(e,t)),hy=2n**256n,wn=i=>Yd(Xd(Pi(i,0n,hy),pr)),uy=i=>{const e=Ni(an(i,zt,"secret key"));return Pi(e,1n,br,"invalid secret key: outside of range")},ou="SHA-256",dy={hmacSha256Async:async(i,e)=>{const t=nu(),n="HMAC",s=await t.importKey("raw",i,{name:n,hash:{name:ou}},!1,["sign"]);return mr(await t.sign(n,s,e))},hmacSha256:void 0,sha256Async:async i=>mr(await nu().digest(ou,i)),sha256:void 0},fy=i=>{if(i=i===void 0?_l(Fc.seed):i,an(i),i.length<Fc.seed||i.length>1024)return pt("expected 48-1024b",RangeError);const e=ye(Ni(i),br-1n);return wn(e+1n)},py=i=>e=>{const t=fy(e);return{secretKey:t,publicKey:i(t)}},Qd=i=>Uint8Array.from("BIP0340/"+i,e=>e.charCodeAt(0)),$d="aux",ef="nonce",tf="challenge",kc=(i,...e)=>{const t=iu("sha256",Qd(i));return iu("sha256",Ss(t,t,...e))},zc=(i,...e)=>su("sha256Async",Qd(i)).then(t=>su("sha256Async",Ss(t,t,...e))),yl=i=>{const e=uy(i),t=Li.multiply(e),{x:n,y:s}=t.assertValidity().toAffine(),r=Bo(s)?e:Fo(-e),o=wn(n);return{d:r,px:o}},Ml=i=>Fo(Ni(i)),nf=(...i)=>Ml(kc(tf,...i)),sf=async(...i)=>Ml(await zc(tf,...i)),rf=i=>yl(i).px,my=py(rf),of=(i,e,t)=>{const{px:n,d:s}=yl(e);return{m:an(i),px:n,d:s,a:an(t,zt)}},af=i=>{const e=Ml(i);e===0n&&pt("sign failed: k is zero");const{px:t,d:n}=yl(wn(e));return{rx:t,k:n}},cf=(i,e,t,n)=>Ss(e,wn(Fo(i+t*n))),lf="invalid signature produced",gy=(i,e,t=_l(zt))=>{const{m:n,px:s,d:r,a:o}=of(i,e,t),a=kc($d,o),c=wn(r^Ni(a)),l=kc(ef,c,s,n),{rx:h,k:u}=af(l),d=nf(h,s,n),f=cf(u,h,d,r);return uf(f,n,s)||pt(lf),f},vy=async(i,e,t=_l(zt))=>{const{m:n,px:s,d:r,a:o}=of(i,e,t),a=await zc($d,o),c=wn(r^Ni(a)),l=await zc(ef,c,s,n),{rx:h,k:u}=af(l),d=await sf(h,s,n),f=cf(u,h,d,r);return await df(f,n,s)||pt(lf),f},xy=(i,e)=>i instanceof Promise?i.then(e):e(i),hf=(i,e,t,n)=>{const s=an(i,pr,"signature"),r=an(e,void 0,"message"),o=an(t,zt,"publicKey");try{const a=Ni(o),c=Zd(a),l=new Kt(a,c,1n).assertValidity(),h=wn(l.toAffine().x),u=wo(s,0,zt);Pi(u,1n,hi);const d=wo(s,zt,pr);Pi(d,1n,br);const f=Ss(wn(u),h,r);return xy(n(f),g=>{const{x:v,y:m}=ly(l,d,Fo(-g)).toAffine();return!(!Bo(m)||v!==u)})}catch{return!1}},uf=(i,e,t)=>hf(i,e,t,nf),df=async(i,e,t)=>hf(i,e,t,sf),ff=Object.freeze({keygen:my,getPublicKey:rf,sign:gy,verify:uf,signAsync:vy,verifyAsync:df}),Ao=8,_y=256,pf=Math.ceil(_y/Ao)+1,Hc=2**(Ao-1),yy=()=>{const i=[];let e=Li,t=e;for(let n=0;n<pf;n++){t=e,i.push(t);for(let s=1;s<Hc;s++)t=t.add(e),i.push(t);e=t.double()}return i};let au;const cu=(i,e)=>{const t=e.negate();return i?t:e},My=i=>{const e=au||(au=yy());let t=wi,n=Li;const s=2**Ao,r=s,o=Bc(s-1),a=Bc(Ao);for(let c=0;c<pf;c++){let l=Number(i&o);i>>=a,l>Hc&&(l-=r,i+=1n);const h=c*Hc,u=h,d=h+Math.abs(l)-1,f=c%2!==0,g=l<0;l===0?n=n.add(cu(f,e[u])):t=t.add(cu(g,e[d]))}return i!==0n&&pt("invalid wnaf"),{p:t,f:n}},{floor:Vc,min:Sy,sin:Ty}=Math,_n="Trystero",gr=(i,e)=>Array(i).fill(void 0).map(e),by="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",Ls=i=>gr(i,()=>by[Vc(Math.random()*62)]??"").join(""),Xt=Ls(20),Ui=Promise.all.bind(Promise),mf=typeof window<"u",{entries:Ei,fromEntries:gf,keys:nn,values:hs}=Object,Ft=()=>{},vf="candidate",rt=i=>(i!==null&&clearTimeout(i),null),et=i=>new Error(`${_n}: ${i}`),Ts=(i,e)=>i instanceof Error&&i.message?i.message:typeof i=="string"&&i?i:Zt(i??e),ai=(i,e)=>i instanceof Error?i:et(Ts(i,e)),wy=new TextEncoder,Ay=new TextDecoder,ui=i=>wy.encode(i),Ai=i=>Ay.decode(i),vr=i=>i.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),xr=(...i)=>i.join("@"),Ey=(i,e)=>{const t=[...i],n=()=>{const r=Ty(e++)*1e4;return r-Vc(r)};let s=t.length;for(;s;){const r=Vc(n()*s--),o=t[s];t[s]=t[r],t[r]=o}return t},Ry=(i,e,t,n=!1)=>i.relayConfig?.urls||(n?Ey(e,xf(i.appId)):e).slice(0,i.relayConfig?.redundancy??t),Zt=JSON.stringify,_r=i=>{try{return JSON.parse(i)}catch{throw et(`failed to parse JSON: ${i}`)}},xf=(i,e=Number.MAX_SAFE_INTEGER)=>i.split("").reduce((t,n)=>t+n.charCodeAt(0),0)%e,lu=3333,Cy=6e4,Ra={};let or=null,Gc=null;const Py=()=>{or||(or=new Promise(i=>{Gc=i}).finally(()=>{Gc=null,or=null}))},Ly=()=>{Gc?.()},Iy=(i,e,t)=>{const n={};let s=!1,r=!1,o=Ft;n.ready=new Promise(c=>o=c);const a=()=>{r=!1;const c=new WebSocket(i);c.onclose=()=>{if(r)return;if(r=!0,or){or.then(a);return}const l=Ra[i]??=lu;setTimeout(a,Math.random()*l),Ra[i]=Sy(l*2,Cy)},c.onmessage=l=>e(String(l.data)),n.socket=c,n.url=c.url,c.onopen=()=>{const l=s;s=!0,o(n),Ra[i]=lu,l&&t?.()},n.send=l=>{c.readyState===1&&c.send(l)}};return a(),n},Dy=i=>{const e={},t=new WeakMap,n=o=>{const a=t.get(o);if(!a)throw et("relay bookkeeping missing registration for relay client");return a},s=()=>{const o={},a=c=>o[c]??={};return{forKey:a,forRelay:c=>a(n(c))}},r=(o,a)=>(e[o]=a,t.set(a,o),a);return{register:(o,a)=>{const c=e[o];return c||r(o,a())},keyOf:n,scoped:s,getSockets:()=>gf(Ei(e).flatMap(([o,a])=>{const c=i(a);return c?[[o,c]]:[]}))}},Ny=()=>{if(mf){const i=new AbortController;return addEventListener("online",Ly,{signal:i.signal}),addEventListener("offline",Py,{signal:i.signal}),()=>i.abort()}return Ft},Sl="AES-GCM",Uy={},Oy=i=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(i)))),Fy=i=>{const e=atob(i);return new Uint8Array(e.length).map((t,n)=>e.charCodeAt(n)).buffer},ko=async(i,e)=>new Uint8Array(await crypto.subtle.digest(i,ui(e))),yr=async i=>Uy[i]??=Array.from(await ko("SHA-1",i)).map(e=>e.toString(36)).join(""),By=async(i,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},ui(`${i}:${e}:${t}`)),{name:Sl},!1,["encrypt","decrypt"]),ky=async(i,e)=>vr(await ko("SHA-256",`${_n}:${i}:${e}`)),_f="$",yf=",",zy=async(i,e)=>{const t=crypto.getRandomValues(new Uint8Array(16));return t.join(yf)+_f+Oy(await crypto.subtle.encrypt({name:Sl,iv:t},await i,ui(e)))},Hy=async(i,e)=>{const[t,n]=e.split(_f);return Ai(await crypto.subtle.decrypt({name:Sl,iv:new Uint8Array(t?.split(yf).map(Number)??[])},await i,Fy(n??"")))},Tl=57333,Vy=18e4,Gy=20;var Wy=class{makeOffer;pool=[];pooled=new Set;leased=new Map;recycling=new Set;cleanupTimer=null;active=!1;constructor(i){this.makeOffer=i}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),gr(Gy,this.makeOffer).forEach(i=>this.push(i)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(i=>i.isDead?(this.pooled.delete(i),!1):!0)},Tl)}push(i){i.isDead||this.pooled.has(i)||this.leased.has(i)||(this.pool.push(i),this.pooled.add(i))}shift(i){const e=[];for(;e.length<i&&this.pool.length>0;){const t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(i){const e=this.leased.get(i);e&&(rt(e),this.leased.delete(i))}recycle(i){if(!(i.isDead||this.recycling.has(i))){if(i.connection.remoteDescription){i.destroy();return}if(!this.active){i.destroy();return}this.recycling.add(i),i.setHandlers({connect:Ft,close:Ft,error:Ft}),i.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||i.isDead||!this.active){i.destroy();return}this.push(i)}).catch(()=>i.destroy()).finally(()=>this.recycling.delete(i))}}reclaimLeased(i){const e=this.leased.get(i);e&&(rt(e),this.leased.delete(i),this.recycle(i))}lease(i){this.claimLeased(i),this.leased.set(i,setTimeout(()=>{this.leased.delete(i),this.recycle(i)},Vy))}checkout(i,e,t){const n=this.shift(i),s=Math.max(0,i-n.length);s>0&&n.push(...gr(s,this.makeOffer));const r=async(o,a=!1)=>{try{const c=await t(o);return e?(this.lease(o),{peer:o,offer:c,claim:()=>this.claimLeased(o),reclaim:()=>this.reclaimLeased(o)}):{peer:o,offer:c}}catch(c){if(this.claimLeased(o),this.pooled.delete(o),o.destroy(),!a)return r(this.makeOffer(),!0);throw c}};return Ui(n.map(o=>r(o)))}getOffers(i,e){return this.checkout(i,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(i=>i.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((i,e)=>{rt(i),e.destroy()}),this.leased.clear(),this.recycling.forEach(i=>i.destroy()),this.recycling.clear()}};const Ca=et("incorrect password for overlapping room"),Xy=(i,e,t)=>{const n=o=>ko("SHA-256",`${o}:${i}:${e}:${t}`).then(vr),s=async(o,a,c)=>{if(!i)return;if(c){const h=Ls(36);await o({__trystero_pw:"challenge",c:h});const{data:u}=await a();if(!u||typeof u!="object"||u.__trystero_pw!=="response"||typeof u.h!="string")throw Ca;const d=await n(h);if(u.h!==d)throw Ca;return}const{data:l}=await a();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw Ca;await o({__trystero_pw:"response",h:await n(l.c)})};return{run:s,compose:o=>i||o?async(a,c,l,h)=>{await s(c,l,h),await o?.(a,c,l,h)}:void 0}},qy=i=>{const e=Ts(i,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},Yy=({onPeerHandshake:i,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:n,sendHandshakeReady:s,onActivate:r,onFailure:o})=>{const a={},c=(u,d)=>{const f=a[u];!f||d&&f.peer!==d||f.isActive||!f.didLocalHandshakePass||!f.didReceiveRemoteReady||(f.isActive=!0,f.handshakeTimer=rt(f.handshakeTimer),r(u,f.peer))},l=(u,d,f)=>{const g=a[u];if(!g||g.peer!==d)return;const v=qy(f);e?.(u,v),o(u,d,et(v))},h=(u,d)=>{const f=a[u];!f||f.peer!==d||f.isActive||(f.didLocalHandshakePass=!0,s("",u).catch(g=>l(u,d,et(`failed sending handshake readiness: ${Ts(g,"unknown send failure")}`))),c(u,d))};return{addPeer:(u,d)=>{a[u]={peer:d,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(u,d)=>{const f=a[u];f&&(f.handshakeTimer=rt(f.handshakeTimer),f.pendingHandshakePayloads.length=0,f.handshakeWaiters.splice(0).forEach(g=>g.reject(d)),delete a[u])},canReceiveFromPeer:(u,d)=>{const f=a[u];return!!(f&&(f.isActive||d))},start:(u,d)=>{const f=a[u];if(!f||f.peer!==d)return;f.handshakeTimer=setTimeout(()=>l(u,d,et(`handshake timed out after ${t}ms`)),t);const g=async(p,x)=>{await n(p,u,x)},v=()=>new Promise((p,x)=>{const M=a[u];if(!M||M.peer!==d){x(et("peer disconnected during handshake"));return}const _=M.pendingHandshakePayloads.shift();if(_){p(_);return}M.handshakeWaiters.push({resolve:p,reject:C=>x(C)})}),m=Xt<u;Promise.resolve(i?.(u,g,v,m)).then(()=>h(u,d)).catch(p=>l(u,d,ai(p,"handshake failed")))},receiveHandshakeData:(u,d,f)=>{const g=a[d];if(!g||g.isActive)return;const v=f===void 0?{data:u}:{data:u,metadata:f},m=g.handshakeWaiters.shift();if(m){m.resolve(v);return}g.pendingHandshakePayloads.push(v)},receiveHandshakeReady:u=>{const d=a[u];!d||d.isActive||(d.didReceiveRemoteReady=!0,c(u))}}},jy=15e3,Ky=5e3,hu="icegatheringstatechange",Jy="iceconnectionstatechange",qs="offer",Zy="answer",Qy=/out of range/i,uu=i=>i.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host");var du=(i,{trickleIce:e,rtcConfig:t,rtcPolyfill:n,turnConfig:s,_test_only_mdnsHostFallbackToLoopback:r})=>{const o=new(n??RTCPeerConnection)({iceServers:$y.concat(s??[]),...t}),a={},c=[],l=[],h=e!==!1,u=[],d=[];let f=!1,g=!1,v=null,m=null,p=!1;const x=()=>m=rt(m),M=()=>{p||(p=!0,x(),a.close?.())},_=B=>{a.signal?a.signal(B):c.push(B)},C=B=>{const Z=a.signal;a.signal=ge=>{Z?.(ge),B(ge)},c.length>0&&c.splice(0).forEach(ge=>a.signal?.(ge))},w=B=>r?uu(B):B,P=B=>{if(!r||typeof B.candidate!="string")return B;const Z=uu(B.candidate);return Z===B.candidate?B:{...B,candidate:Z}},R=B=>({type:B.localDescription?.type??qs,sdp:w(B.localDescription?.sdp??"")}),b=()=>{const B=o.remoteDescription?.sdp;return B?B.match(/a=ice-ufrag:([^\s]+)/)?.[1]??null:null},S=()=>(o.remoteDescription?.sdp?.match(/^m=/gm)??[]).length,I=B=>{if(!o.remoteDescription)return!1;const Z=S();if(typeof B.sdpMLineIndex=="number"&&Z>0&&B.sdpMLineIndex>=Z)return!1;const ge=b();return!(ge&&B.usernameFragment&&B.usernameFragment!==ge)},W=async B=>{try{return await o.addIceCandidate(B),!0}catch(Z){if(Z instanceof Error&&Qy.test(Z.message)&&typeof B.sdpMLineIndex=="number")return!1;throw Z}},V=async()=>{if(!o.remoteDescription||u.length===0)return;const B=u.splice(0),Z=[];for(const ge of B){if(!I(ge)){Z.push(ge);continue}await W(ge)||Z.push(ge)}Z.length>0&&u.push(...Z)},A=async B=>{if(I(B)){await W(B)||u.push(B);return}u.push(B)},D=B=>{B.binaryType="arraybuffer",B.bufferedAmountLowThreshold=65535,B.onmessage=Z=>{const ge=Z.data;a.data?a.data(ge):l.push(ge)},B.onopen=()=>a.connect?.(),B.onclose=M,B.onerror=({error:Z})=>a.error?.(ai(Z,"data channel error"))},N=async B=>{let Z=null;try{await Promise.race([new Promise(ge=>{const Y=()=>{B.iceGatheringState==="complete"&&(B.removeEventListener(hu,Y),ge())};B.addEventListener(hu,Y),Y()}),new Promise(ge=>{Z=setTimeout(ge,jy)})])}finally{rt(Z)}return R(B)},H=async()=>{const B=h?R(o):await N(o);return _(B),B};i?(v=o.createDataChannel("data"),D(v)):o.ondatachannel=({channel:B})=>{v=B,D(B)};const O=async(B=!1)=>{if(o.connectionState!=="closed")try{return f=!0,B&&(o.signalingState!=="stable"&&o.signalingState!=="closed"&&o.localDescription?.type===qs&&await o.setLocalDescription({type:"rollback"}),typeof o.restartIce=="function"&&o.restartIce()),await o.setLocalDescription(B?await o.createOffer({iceRestart:!0}):void 0),await H()}catch(Z){a.error?.(ai(Z,"failed to create local offer"))}finally{f=!1}};o.onnegotiationneeded=async()=>O(!1),o.onicecandidate=({candidate:B})=>{if(!h||!B)return;const Z=P(typeof B.toJSON=="function"?B.toJSON():{candidate:B.candidate,sdpMid:B.sdpMid,sdpMLineIndex:B.sdpMLineIndex,usernameFragment:B.usernameFragment});_({type:vf,sdp:JSON.stringify(Z)})};const ne=()=>{if(o.connectionState==="failed"||o.connectionState==="closed"||o.iceConnectionState==="failed"||o.iceConnectionState==="closed"){M();return}if(o.connectionState==="connected"||o.connectionState==="connecting"||o.iceConnectionState==="connected"||o.iceConnectionState==="completed"||o.iceConnectionState==="checking"){x();return}if(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected"){m||(m=setTimeout(()=>{m=null,(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected")&&M()},Ky));return}};o.onconnectionstatechange=ne,o.addEventListener(Jy,ne),o.ontrack=B=>{const Z=B.streams[0];if(Z){if(!a.track&&!a.stream){d.push({track:B.track,stream:Z});return}a.track?.(B.track,Z),a.stream?.(Z)}},o.onremovestream=B=>a.stream?.(B.stream);const oe=i?new Promise(B=>C(Z=>{Z.type===qs&&B(Z)})):Promise.resolve();return i&&queueMicrotask(()=>{!f&&o.signalingState==="stable"&&!o.localDescription&&o.connectionState!=="closed"&&o.onnegotiationneeded?.(new Event("negotiationneeded"))}),{created:Date.now(),connection:o,get channel(){return v},get isDead(){return o.connectionState==="closed"},getOffer:async(B=!1)=>{if(i)return B?O(!0):o.localDescription?.type===qs?h?R(o):N(o):oe},async signal(B){if(B.type==="candidate"){try{const Z=JSON.parse(B.sdp);Z&&typeof Z=="object"&&await A(P(Z))}catch(Z){a.error?.(ai(Z,"failed to parse remote candidate"))}return}if(!(v?.readyState==="open"&&!B.sdp?.includes("a=rtpmap")))try{const Z={...B,sdp:w(B.sdp)};if(B.type===qs){if(f||o.signalingState!=="stable"&&!g){if(i)return;await Ui([o.setLocalDescription({type:"rollback"}),o.setRemoteDescription(Z)])}else await o.setRemoteDescription(Z);return await V(),await o.setLocalDescription(),await H()}if(B.type===Zy){g=!0;try{await o.setRemoteDescription(Z),await V()}finally{g=!1}}}catch(Z){a.error?.(ai(Z,"failed to apply remote signal"))}},sendData:B=>v?.send(B),destroy:()=>{x(),v?.close(),o.close(),f=!1,g=!1,M()},setHandlers:B=>{const{signal:Z,...ge}=B;Object.assign(a,ge),a.data&&l.length>0&&l.splice(0).forEach(Y=>a.data?.(Y)),Z&&C(Z),(a.track||a.stream)&&d.length>0&&d.splice(0).forEach(({track:Y,stream:re})=>{a.track?.(Y,re),a.stream?.(re)})},offerPromise:oe,addStream:B=>B.getTracks().forEach(Z=>o.addTrack(Z,B)),removeStream:B=>o.getSenders().filter(Z=>Z.track&&B.getTracks().includes(Z.track)).forEach(Z=>o.removeTrack(Z)),addTrack:(B,Z)=>o.addTrack(B,Z),removeTrack:B=>{const Z=o.getSenders().find(ge=>ge.track===B);Z&&o.removeTrack(Z)},replaceTrack:(B,Z)=>{const ge=o.getSenders().find(Y=>Y.track===B);if(ge)return ge.replaceTrack(Z)}}};const $y=[...gr(3,(i,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(i=>({urls:i})),eM=Object.getPrototypeOf(Uint8Array),Pa=32,tM=0,La=32,fu=34,Ia=35,vo=36,_i=16*2**10-vo,Ys=255,nM=65535,pu="bufferedamountlow",mu="close",gu="error",iM=1e4,sM=i=>i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength),rM=(i,e=iM)=>i.readyState!=="open"||i.bufferedAmount<=i.bufferedAmountLowThreshold?Promise.resolve(i.readyState==="open"):new Promise(t=>{let n=!1,s=null;const r=c=>{n||(n=!0,i.removeEventListener(pu,o),i.removeEventListener(mu,a),i.removeEventListener(gu,a),rt(s),t(c))},o=()=>r(!0),a=()=>r(!1);if(i.addEventListener(pu,o),i.addEventListener(mu,a),i.addEventListener(gu,a),s=setTimeout(()=>r(!1),e),i.readyState!=="open"){r(!1);return}i.bufferedAmount<=i.bufferedAmountLowThreshold&&r(!0)}),oM=({getPeer:i,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:n})=>{const s={},r={},o={},a={},c=(u,d,{includePending:f=!1}={})=>(u?Array.isArray(u)?u:[u]:e(f)).flatMap(g=>{const v=i(g,f);return v?[Promise.resolve(d(g,v))]:(console.warn(`${_n}: no peer with id ${g} found`),[])});return{makeInternalAction:(u,d={})=>{const f=r[u];if(s[u]&&f){const x=s[u].options;if(x.sendToPending!==!!d.sendToPending||x.receiveWhilePending!==!!d.receiveWhilePending)throw et(`action type "${u}" cannot be redefined`);return f}if(!u)throw et("action type argument is required");const g=ui(u);if(g.byteLength>Pa)throw et(`action type string "${u}" (${g.byteLength}b) exceeds byte limit (${Pa}). Hint: choose a shorter name.`);const v={sendToPending:!!d.sendToPending,receiveWhilePending:!!d.receiveWhilePending},m=new Uint8Array(Pa);m.set(g);let p=0;return s[u]={onComplete:Ft,onProgress:Ft,setOnComplete:x=>{s[u].onComplete=x;const M=a[u];M?.length&&(delete a[u],M.forEach(({payload:_,peerId:C,metadata:w})=>x(_,C,w)))},setOnProgress:x=>{s[u].onProgress=x},send:async(x,M,_,C,w)=>{n(w);const P=typeof x;if(P==="undefined")throw et("action data cannot be undefined");const R=P!=="string",b=x instanceof Blob,S=b||x instanceof ArrayBuffer||x instanceof eM,I=_!==void 0,W=S?sM(b?await x.arrayBuffer():x):ui(R?Zt(x):x),V=I?ui(Zt(_)):null,A=Math.ceil(W.byteLength/_i)+(I?1:0)||1,D=gr(A,(N,H)=>{const O=H===A-1,ne=!!(I&&H===0),oe=new Uint8Array(vo+(ne?V?.byteLength??0:O?W.byteLength-_i*(A-(I?2:1)):_i));return oe.set(m),oe.set([p>>8,p&Ys],La),oe.set([Number(O)|Number(ne)<<1|Number(S)<<2|Number(R)<<3],fu),oe.set([Math.round((H+1)/A*Ys)],Ia),oe.set(I?ne?V??new Uint8Array:W.subarray((H-1)*_i,H*_i):W.subarray(H*_i,(H+1)*_i),vo),oe});return p=p+1&nM,await Ui(c(M,async(N,H)=>{const{channel:O}=H;let ne=0;for(;ne<A;){n(w);const oe=D[ne];if(!oe)break;if(O&&O.bufferedAmount>O.bufferedAmountLowThreshold){const ge=await rM(O);if(n(w),!ge)break}const B=i(N,v.sendToPending);if(!B||B!==H)break;H.sendData(oe),ne++;const Z=oe[Ia]??Ys;C?.(Z/Ys,N,_)}},{includePending:v.sendToPending})),[]},options:v},r[u]={send:s[u].send,onMessage:s[u].setOnComplete,onProgress:s[u].setOnProgress}},handleData:(u,d)=>{const f=new Uint8Array(d),g=Ai(f.subarray(tM,La)).replaceAll("\0",""),v=s[g];if(!t(u,!!v?.options.receiveWhilePending))return;const m=(f[La]??0)<<8|(f[33]??0),p=f[fu]??0,x=f[Ia]??0,M=f.subarray(vo),_=!!(p&1),C=!!(p&2),w=!!(p&4),P=!!(p&8);o[u]??={},o[u][g]??={};const R=o[u][g][m]??={chunks:[]};if(C?R.meta=_r(Ai(M)):R.chunks.push(M),v?.onProgress(x/Ys,u,R.meta),!_)return;const b=new Uint8Array(R.chunks.reduce((I,W)=>I+W.byteLength,0));R.chunks.reduce((I,W)=>(b.set(W,I),I+W.byteLength),0),delete o[u][g][m];const S=w?b:P?_r(Ai(b)):Ai(b);if(v){v.onComplete(S,u,R.meta);return}(a[g]??=[]).push({payload:S,peerId:u,...R.meta===void 0?{}:{metadata:R.meta}})},clearPeer:u=>{delete o[u]}}},aM=500,is=(i,e)=>{const t=et(e);return t.kind=i,t.name=i==="aborted"?"AbortError":t.name,t},Da=i=>{if(i?.aborted)throw is("aborted","operation aborted")},vu=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.r=="string"?{r:i.r,...Object.hasOwn(i,"m")?{m:i.m}:{}}:null,cM=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.r=="string"?{r:i.r,...typeof i.e=="string"?{e:i.e}:{}}:null,so=(i,e)=>e===void 0?i:{...i,metadata:e},lM=({getPeer:i,getPeerIds:e,canReceiveFromPeer:t})=>{const n={},s={},r=oM({getPeer:i,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:Da}),o=r.makeInternalAction,a=r.handleData,c=f=>{const g=s[f];g&&(rt(g.timer),g.signal&&g.abortHandler&&g.signal.removeEventListener("abort",g.abortHandler),delete s[f])},l=(f,g)=>{Ei(s).forEach(([v,m])=>{m.peerId===f&&(c(v),m.reject(g))})},h=(f,g)=>{r.clearPeer(f),l(f,is("disconnected",Ts(g,"peer disconnected")))},u=o("@_response");return u.onMessage((f,g,v)=>{const m=cM(v);if(!m)return;const p=s[m.r];if(!(!p||p.peerId!==g)){if(c(m.r),m.e!==void 0){p.reject(is("rejected",m.e));return}p.resolve(f)}}),{makeAction:(f,g)=>{if(g&&"onRequest"in g&&g.kind!=="request")throw et('request actions must use kind: "request"');const v=g?.kind??"message",m=o(f),p=n[f];if(p){if(p.kind!==v)throw et(`action type "${f}" cannot be redefined`);return p.action}const x={kind:v,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:g?.onReceiveProgress??null},M=(A,D)=>A?(N,H)=>A(N,so({peerId:H},D)):void 0,_=A=>{x.onReceiveProgress=A},C=(A,D,N)=>{const H=x.kind==="request"?vu(N):null;x.onReceiveProgress?.(A,so({peerId:D},H?H.m:N))};if(m.onProgress(C),v==="message"){let A=g?.onMessage??null;const D=()=>{if(!A)return;const H=A;x.pendingMessages.splice(0).forEach(({payload:O,peerId:ne,metadata:oe})=>{Promise.resolve().then(()=>H(O,so({peerId:ne},oe))).catch(B=>console.error(`${_n} action handler error:`,B))})},N={send:async(H,O={})=>{await m.send(H,O.target,O.metadata,M(O.onProgress,O.metadata),O.signal)},get onMessage(){return A},set onMessage(H){A=H,D()},get onReceiveProgress(){return x.onReceiveProgress},set onReceiveProgress(H){_(H)}};return m.onMessage((H,O,ne)=>{if(!A){x.pendingMessages.push(ne===void 0?{payload:H,peerId:O}:{payload:H,peerId:O,metadata:ne});return}const oe=A;Promise.resolve().then(()=>oe(H,so({peerId:O},ne))).catch(B=>console.error(`${_n} action handler error:`,B))}),x.action=N,n[f]=x,D(),N}let w=g?.onRequest??null;const P=A=>{rt(A.timer);const D=x.pendingRequests.indexOf(A);D>-1&&x.pendingRequests.splice(D,1)},R=(A,D,N)=>{u.send(null,A,{r:D,e:Ts(N,"request failed")})},b=(A,D)=>{P(A),Promise.resolve().then(()=>D(A.payload,{peerId:A.peerId,...A.metadata===void 0?{}:{metadata:A.metadata},signal:A.controller.signal})).then(async N=>{if(N===void 0)throw et("request handler returned undefined");await u.send(N,A.peerId,{r:A.requestId})}).catch(N=>R(A.peerId,A.requestId,N)).finally(()=>A.controller.abort())},S=()=>{w&&x.pendingRequests.slice().forEach(A=>b(A,w))},I=(A,D,N,H)=>{if(w){b({payload:A,peerId:D,...N===void 0?{}:{metadata:N},requestId:H,controller:new AbortController,timer:null},w);return}const O={payload:A,peerId:D,...N===void 0?{}:{metadata:N},requestId:H,controller:new AbortController,timer:setTimeout(()=>{P(O),O.controller.abort(),R(D,H,"request handler unavailable")},aM)};x.pendingRequests.push(O)},W=async(A,D)=>{const{target:N,metadata:H,onProgress:O,signal:ne,timeoutMs:oe}=D;if(Da(ne),!i(N,!1))throw is("disconnected",`no active peer with id ${N}`);const B=Ls(20),Z=new Promise((ge,Y)=>{const re={peerId:N,resolve:ge,reject:Y,timer:null,...ne===void 0?{}:{signal:ne}},ve=()=>{c(B),Y(is("aborted","operation aborted"))};ne&&(re.abortHandler=ve,ne.addEventListener("abort",ve,{once:!0})),s[B]=re}).catch(ge=>{throw ge});try{await m.send(A,N,H===void 0?{r:B}:{r:B,m:H},M(O,H),ne);const ge=s[B];return ge&&oe!==void 0&&(ge.timer=setTimeout(()=>{c(B),ge.reject(is("timeout","request timed out"))},oe)),await Z}catch(ge){throw c(B),ge}},V={request:W,requestMany:async(A,D)=>(Da(D.signal),await Ui(D.targets.map(async N=>{try{const H={peerId:N,status:"fulfilled",value:await W(A,{target:N,...D.metadata===void 0?{}:{metadata:D.metadata},...D.timeoutMs===void 0?{}:{timeoutMs:D.timeoutMs},...D.onProgress===void 0?{}:{onProgress:D.onProgress},...D.signal===void 0?{}:{signal:D.signal}})};return D.onResult?.(H),H}catch(H){const O=ai(H,"request failed");if(O.kind==="aborted"||!O.kind)throw O;const ne=O.kind==="timeout"?{peerId:N,status:"timeout"}:O.kind==="disconnected"?{peerId:N,status:"disconnected"}:{peerId:N,status:"rejected",error:O};return D.onResult?.(ne),ne}}))),get onRequest(){return w},set onRequest(A){w=A,S()},get onReceiveProgress(){return x.onReceiveProgress},set onReceiveProgress(A){_(A)}};return m.onMessage((A,D,N)=>{const H=vu(N);H&&I(A,D,H.m,H.r)}),x.action=V,n[f]=x,S(),V},makeInternalAction:o,handleData:a,clearPeer:h}},xu=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.k=="string"?{key:i.k,...typeof i.s=="string"?{streamId:i.s}:{},...typeof i.t=="string"?{trackId:i.t}:{},...Object.hasOwn(i,"m")?{metadata:i.m}:{}}:null,_u=i=>e=>{let t=i.get(e);return t||(t=Ls(20),i.set(e,t)),t},Mf=()=>{const i=new WeakMap,e=new WeakMap,t=new Map,n=new Map,s=new Map,r=new Map;return{getStreamKey:_u(i),getTrackKey:_u(e),rememberRemoteStream:(o,a,c)=>{t.set(o,a),c&&n.set(c,a)},getRemoteStream:(o,a)=>t.get(o)??(a?n.get(a):void 0),rememberRemoteTrack:(o,a,c,l,h)=>{const u={track:a,stream:c};s.set(o,u),l&&r.set(l,u),h&&n.set(h,c)},getRemoteTrack:(o,a)=>s.get(o)??(a?r.get(a):void 0),clearRemote:()=>{t.clear(),n.clear(),s.clear(),r.clear()}}},hM=({iterate:i,isActive:e,getSharedMediaPeer:t})=>{const n={},s={},r=Mf(),o={onPeerStream:null,onPeerTrack:null},a=(h,u,d,f)=>{e(h)&&(t(h)?.__trysteroMedia?.rememberRemoteStream(u,d,typeof d.id=="string"?d.id:void 0),o.onPeerStream?.(d,h,f))},c=(h,u,d,f,g)=>{e(h)&&(t(h)?.__trysteroMedia?.rememberRemoteTrack(u,d,f,typeof d.id=="string"?d.id:void 0,typeof f.id=="string"?f.id:void 0),o.onPeerTrack?.(d,f,h,g))},l=(h,u,d,f,g,v={})=>{const m={k:u,...v,...d===void 0?{}:{m:d}};return i(h,async(p,x)=>{await f(m,p),g(x)})};return{addStream:(h,u,d)=>l(u.target,r.getStreamKey(h),u.metadata,d,f=>f.addStream(h),{s:h.id}),removeStream:(h,u)=>{i(u,(d,f)=>f.removeStream(h))},addTrack:(h,u,d,f)=>l(d.target,r.getTrackKey(h),d.metadata,f,g=>g.addTrack(h,u),{s:u.id,t:h.id}),removeTrack:(h,u)=>{i(u,(d,f)=>f.removeTrack(h))},replaceTrack:(h,u,d,f)=>l(d.target,r.getTrackKey(u),d.metadata,f,g=>g.replaceTrack(h,u),{t:h.id}),receiveStreamMeta:(h,u)=>{if(!e(u))return;const d=xu(h);if(!d)return;const f=t(u)?.__trysteroMedia?.getRemoteStream(d.key,d.streamId);if(f){a(u,d.key,f,d.metadata);return}(n[u]??=[]).push(d)},receiveTrackMeta:(h,u)=>{if(!e(u))return;const d=xu(h);if(!d)return;const f=t(u)?.__trysteroMedia?.getRemoteTrack(d.key,d.trackId);if(f){c(u,d.key,f.track,f.stream,d.metadata);return}(s[u]??=[]).push(d)},receiveRemoteStream:(h,u)=>{if(!e(h))return;const d=n[h]?.shift();d&&a(h,d.key,u,d.metadata)},receiveRemoteTrack:(h,u,d)=>{if(!e(h))return;const f=s[h]?.shift();f&&c(h,f.key,u,d,f.metadata)},clearPeer:h=>{delete n[h],delete s[h]},get onPeerStream(){return o.onPeerStream},set onPeerStream(h){o.onPeerStream=h},get onPeerTrack(){return o.onPeerTrack},set onPeerTrack(h){o.onPeerTrack=h}}},yu="beforeunload",uM=1e4,ni=i=>"@_"+i,$s=new Set,Mu=()=>$s.forEach(i=>i()),dM=i=>($s.add(i),$s.size===1&&addEventListener(yu,Mu),()=>{$s.delete(i),$s.size||removeEventListener(yu,Mu)});var fM=(i,e,t,{onPeerHandshake:n,onHandshakeError:s,handshakeTimeoutMs:r=uM,isPassive:o=!1}={})=>{const a={},c={},l={},h={onPeerJoin:null,onPeerLeave:null};let u=Ft,d=null;const f=(A,D,{includePending:N=!1}={})=>(A?Array.isArray(A)?A:[A]:nn(N?a:c)).flatMap(H=>{const O=N?a[H]:c[H];return O?[Promise.resolve(D(H,O))]:(console.warn(`${_n}: no peer with id ${H} found`),[])}),g=hM({iterate:(A,D)=>f(A,(N,H)=>D(N,H)),isActive:A=>!!c[A],getSharedMediaPeer:A=>a[A]??null}),v=lM({getPeer:(A,D)=>(D?a:c)[A],getPeerIds:A=>nn(A?a:c),canReceiveFromPeer:(A,D)=>!!d?.canReceiveFromPeer(A,D)}),m=v.makeInternalAction,p=v.handleData,x=v.makeAction,M=(A,D=et("peer disconnected"))=>{const N=ai(D,"peer disconnected");d?.clearPeer(A,N),delete a[A],delete c[A],v.clearPeer(A,N),l[A]?.splice(0).forEach(H=>H.reject(N)),delete l[A],g.clearPeer(A)},_=(A,D,N)=>{const H=a[A];if(!H||D&&H!==D)return;const O=!!c[A];M(A,N),H.destroy(),O&&h.onPeerLeave?.(A),e(A)},C=async()=>{await I.send(""),await new Promise(A=>setTimeout(A,99)),Ei(a).forEach(([A,D])=>{D.destroy(),M(A,et("room left"))}),u(),t()},w=m(ni("ping")),P=m(ni("pong")),R=m(ni("signal")),b=m(ni("stream")),S=m(ni("track")),I=m(ni("leave"),{sendToPending:!0,receiveWhilePending:!0}),W=m(ni("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),V=m(ni("hsready"),{sendToPending:!0,receiveWhilePending:!0});return d=Yy({...n===void 0?{}:{onPeerHandshake:n},...s===void 0?{}:{onHandshakeError:s},handshakeTimeoutMs:r,sendHandshakeData:W.send,sendHandshakeReady:V.send,onActivate:(A,D)=>{c[A]=D,h.onPeerJoin?.(A)},onFailure:(A,D,N)=>_(A,D,N)}),w.onMessage((A,D)=>P.send("",D)),P.onMessage((A,D)=>{const N=l[D];N?.shift()?.resolve(),N&&!N.length&&delete l[D]}),R.onMessage((A,D)=>{c[D]&&a[D]?.signal(A)}),b.onMessage((A,D)=>g.receiveStreamMeta(A,D)),S.onMessage((A,D)=>g.receiveTrackMeta(A,D)),I.onMessage((A,D)=>_(D,void 0,et("peer left room"))),W.onMessage((A,D,N)=>d?.receiveHandshakeData(A,D,N)),V.onMessage((A,D)=>d?.receiveHandshakeReady(D)),i((A,D)=>{const N=a[D];if(N){if(N===A)return;N.destroy(),M(D,et("peer replaced"))}a[D]=A,d?.addPeer(D,A),A.setHandlers({data:H=>p(D,H),stream:H=>g.receiveRemoteStream(D,H),track:(H,O)=>g.receiveRemoteTrack(D,H,O),signal:H=>{c[D]&&R.send(H,D)},close:()=>_(D,A,et("peer disconnected")),error:H=>{console.error(`${_n} peer error:`,H),_(D,A,H)}}),d?.start(D,A)}),mf&&(u=dM(()=>C().catch(Ft))),{makeAction:x,leave:C,ping:async A=>{if(!c[A])throw et(`no active peer with id ${A}`);const D=Date.now();return await new Promise((N,H)=>{const O=l[A]??=[],ne=()=>{const B=l[A];if(!B)return;const Z=B.indexOf(oe);Z>-1&&B.splice(Z,1),B.length||delete l[A]},oe={resolve:()=>{ne(),N()},reject:B=>{ne(),H(B)}};O.push(oe),w.send("",A).catch(B=>oe.reject(ai(B,"peer disconnected")))}),Date.now()-D},isPassive:()=>o,getPeers:()=>gf(Ei(c).map(([A,D])=>[A,D.connection])),addStream:(A,D={})=>g.addStream(A,D,b.send),removeStream:(A,D={})=>{g.removeStream(A,D.target)},addTrack:(A,D,N={})=>g.addTrack(A,D,N,S.send),removeTrack:(A,D={})=>{g.removeTrack(A,D.target)},replaceTrack:(A,D,N={})=>g.replaceTrack(A,D,N,S.send),get onPeerJoin(){return h.onPeerJoin},set onPeerJoin(A){h.onPeerJoin=A,A&&nn(c).forEach(D=>A(D))},get onPeerLeave(){return h.onPeerLeave},set onPeerLeave(A){h.onPeerLeave=A},get onPeerStream(){return g.onPeerStream},set onPeerStream(A){g.onPeerStream=A},get onPeerTrack(){return g.onPeerTrack},set onPeerTrack(A){g.onPeerTrack=A}}};const Sf=1,Tf=2,Su=(i,e)=>{const t=ui(i),n=new Uint8Array(3+t.byteLength+e.byteLength);return n[0]=Sf,n[1]=t.byteLength>>>8&255,n[2]=t.byteLength&255,n.set(t,3),n.set(e,3+t.byteLength),n},pM=(i,e)=>{const t=ui(i),n=new Uint8Array(4+t.byteLength);return n[0]=Tf,n[1]=Number(e),n[2]=t.byteLength>>>8&255,n[3]=t.byteLength&255,n.set(t,4),n},mM=i=>{const e=new Uint8Array(i);if(e.byteLength<3)return null;if(e[0]===Sf){const s=(e[1]??0)<<8|(e[2]??0),r=3+s;return s<=0||e.byteLength<r?null:{type:"room",roomToken:Ai(e.subarray(3,r)),payload:e.subarray(r).slice().buffer}}if(e[0]!==Tf||e.byteLength<4)return null;const t=(e[2]??0)<<8|(e[3]??0),n=4+t;return t<=0||e.byteLength<n?null:{type:"presence",roomToken:Ai(e.subarray(4,n)),isPresent:e[1]===1}},bf=i=>{const{connection:e,channel:t}=i;return i.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||t?.readyState==="closing"||t?.readyState==="closed"},gM=i=>{if(bf(i))return"stale";const{channel:e}=i;return!e||e.readyState!=="open"?"transient":"live"};var vM=class{byApp={};roomPresenceHandlers={};getMap(i){return this.byApp[i]??={}}get(i,e){return this.byApp[i]?.[e]}isPeerStale(i){return bf(i)}getHealth(i){return this.isPeerStale(i)?"stale":"live"}setRoomPresenceHandler(i,e){return this.roomPresenceHandlers[i]=e,()=>{this.roomPresenceHandlers[i]===e&&delete this.roomPresenceHandlers[i]}}sendRoomPresence(i,e,t){i.isClosing||i.peer.isDead||i.peer.sendData(pM(e,t))}clear(i,e,{destroyPeer:t}){const n=this.byApp[i],s=n?.[e];if(!s||s.isClosing)return;s.idleTimer=rt(s.idleTimer),s.isClosing=!0,t&&!s.peer.isDead&&s.peer.destroy();const r=hs(s.bindings);s.bindings={},s.bindingsByToken={},s.controlRoomId=null,delete n[e],r.forEach(o=>{o.handlers.close?.(),o.pendingData.length=0,o.pendingSendData.length=0,o.pendingTracks.length=0}),s.media.clearRemote(),s.pendingDataByToken.clear(),s.remoteRoomTokens.clear(),nn(n).length===0&&delete this.byApp[i]}register(i,e,t,n){const s=this.getMap(i),r=s[e];if(r){if(r.idleTimer=rt(r.idleTimer),r.peer===t)return r;this.clear(i,e,{destroyPeer:!0})}const o={appId:i,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:Mf(),idleMs:n,isClosing:!1};return t.setHandlers({data:a=>this.dispatchData(o,a),signal:a=>this.dispatchSignal(o,a),close:()=>this.clear(i,e,{destroyPeer:!1}),error:a=>{console.error(`${_n} peer error:`,a),this.clear(i,e,{destroyPeer:!1})},track:(a,c)=>this.dispatchTrack(o,a,c)}),s[e]=o,o}bind(i,e,t,{onDetach:n}){const s=t.bindings[i];if(s)return t.idleTimer=rt(t.idleTimer),{proxy:s.proxy,isNew:!1};const r={roomId:i,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:Ft,proxy:{}},o=()=>{t.bindings[i]&&(this.pruneRoomOwnership(t,i),delete t.bindings[i],r.roomToken&&t.bindingsByToken[r.roomToken]===r&&delete t.bindingsByToken[r.roomToken],t.controlRoomId===i&&(t.controlRoomId=nn(t.bindings)[0]??null),n(),this.scheduleIdleTimer(t))},a={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:c=>t.peer.getOffer(c),signal:c=>t.peer.signal(c),sendData:c=>{if(!r.roomToken){r.pendingSendData.push(c);return}t.peer.sendData(Su(r.roomToken,c))},destroy:()=>o(),setHandlers:c=>{const{signal:l,...h}=c;Object.assign(r.handlers,h),l&&(r.handlers.signal=l),this.flushBindingQueues(r)},offerPromise:t.peer.offerPromise,addStream:c=>{const l=t.streamOwners.get(c)??new Set,h=l.size===0;l.add(i),t.streamOwners.set(c,l),h&&t.peer.addStream(c)},removeStream:c=>{const l=t.streamOwners.get(c);l&&(l.delete(i),l.size===0&&(t.streamOwners.delete(c),t.peer.removeStream(c)))},addTrack:(c,l)=>{const h=t.trackOwners.get(c)??{stream:l,rooms:new Set},u=h.rooms.size===0;return h.stream=l,h.rooms.add(i),t.trackOwners.set(c,h),u?t.peer.addTrack(c,l):t.peer.connection.getSenders().find(d=>d.track===c)??t.peer.addTrack(c,l)},removeTrack:c=>{const l=t.trackOwners.get(c);l&&(l.rooms.delete(i),l.rooms.size===0&&(t.trackOwners.delete(c),t.peer.removeTrack(c)))},replaceTrack:(c,l)=>{const h=t.trackOwners.get(c);if(h){t.trackOwners.delete(c);const u=t.trackOwners.get(l)??{stream:h.stream,rooms:new Set};h.rooms.forEach(d=>u.rooms.add(d)),t.trackOwners.set(l,u)}return t.peer.replaceTrack(c,l)},__trysteroMedia:t.media};return r.proxy=a,r.detach=o,t.bindings[i]=r,t.controlRoomId??=i,t.idleTimer=rt(t.idleTimer),e.then(c=>{if(t.isClosing||t.bindings[i]!==r)return;r.roomToken=c,t.bindingsByToken[c]=r;const l=t.pendingDataByToken.get(c);l?.length&&(r.pendingData.push(...l),t.pendingDataByToken.delete(c)),r.pendingSendData.splice(0).forEach(h=>t.peer.sendData(Su(c,h))),this.flushBindingQueues(r)}),{proxy:a,isNew:!0}}pruneRoomOwnership(i,e){i.streamOwners.forEach((t,n)=>{t.delete(e),t.size===0&&(i.streamOwners.delete(n),i.peer.removeStream(n))}),i.trackOwners.forEach((t,n)=>{t.rooms.delete(e),t.rooms.size===0&&(i.trackOwners.delete(n),i.peer.removeTrack(n))})}scheduleIdleTimer(i){i.isClosing||nn(i.bindings).length>0||(i.idleTimer=rt(i.idleTimer),i.idleTimer=setTimeout(()=>{const e=this.byApp[i.appId]?.[i.peerId];!e||nn(e.bindings).length>0||this.clear(i.appId,i.peerId,{destroyPeer:!0})},i.idleMs))}getSignalBinding(i){if(i.controlRoomId){const t=i.bindings[i.controlRoomId];if(t?.handlers.signal)return t}const e=hs(i.bindings).find(t=>!!t.handlers.signal);return e?(i.controlRoomId=e.roomId,e):null}flushBindingQueues(i){const{handlers:e}=i;e.data&&i.pendingData.length>0&&i.pendingData.splice(0).forEach(t=>e.data?.(t)),(e.track||e.stream)&&i.pendingTracks.length&&i.pendingTracks.splice(0).forEach(({track:t,stream:n})=>{e.track?.(t,n),e.stream?.(n)})}dispatchData(i,e){const t=mM(e);if(!t)return;if(t.type==="presence"){t.isPresent?i.remoteRoomTokens.add(t.roomToken):i.remoteRoomTokens.delete(t.roomToken),this.roomPresenceHandlers[i.appId]?.(i.peerId,t.roomToken,t.isPresent);return}const n=i.bindingsByToken[t.roomToken];if(!n){const s=i.pendingDataByToken.get(t.roomToken)??[];s.push(t.payload),i.pendingDataByToken.set(t.roomToken,s);return}n.handlers.data?n.handlers.data(t.payload):n.pendingData.push(t.payload)}dispatchSignal(i,e){this.getSignalBinding(i)?.handlers.signal?.(e)}dispatchTrack(i,e,t){hs(i.bindings).forEach(n=>{if(n.handlers.track||n.handlers.stream){n.handlers.track?.(e,t),n.handlers.stream?.(t);return}n.pendingTracks.push({track:e,stream:t})})}};const xM=23333,_M=12,yM=7533,MM=23333,Wc="__legacy__",Eo="offer-placeholder",SM=["offer","answer","candidate"],TM=i=>{if(typeof i=="string")try{const e=_r(i);return e&&typeof e=="object"?e:null}catch{return null}return i&&typeof i=="object"?i:null},js=(i,e)=>typeof i[e]=="string"&&i[e]?i[e]:void 0,bM=i=>SM.some(e=>e in i&&(typeof i[e]!="string"||i[e]==="")),wf=(i,e,t,n,s,r)=>{i.toCipher(e).then(o=>{i.isLeaving()||!r()||n(t,Zt(s(o.sdp)))})},wM=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),AM=i=>[...i.turnConfig??[],...i.rtcConfig?.iceServers??[]].some(({urls:e})=>(Array.isArray(e)?e:[e]).some(t=>/^turns?:/i.test(t))),EM=(i,e)=>`could not connect to peer ${i} after exchanging SDP; ${AM(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,zo=(i,e,t)=>{i.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,i.onJoinError?.({error:EM(t,i.config),appId:i.appId,peerId:t,roomId:i.roomId}))},Mr=(i,e)=>i[e]??=wM(),rn=i=>{i.connectedPeer?i.status="connected":i.answeringPeer?i.status="answering":i.offerPeer||i.offerRelays.some(Boolean)?i.status="offering":i.status="idle"},xo=(i,e)=>{i.answeringPeer===e&&(i.answeringExpiryTimer=rt(i.answeringExpiryTimer),i.answeringPeer=null,i.answerSent=!1,rn(i))},Xc=(i,e,t)=>{i.connectedPeer&&(i.connectedPeer.isDead||i.connectedPeer.destroy(),i.connectedPeer=null,i.connectedPeerUnhealthySinceMs=null,rn(i))},bl=(i,e)=>{i.offerRelayTimers[e]=rt(i.offerRelayTimers[e]),i.offerRelays[e]&&(i.offerRelays[e]=void 0,rn(i))},Tu=(i,e)=>{i?.offerRelays[e]===Eo&&bl(i,e)},RM=i=>{if(i.isDead||i.connection.connectionState==="closed")return!0;try{return!!i.connection.remoteDescription}catch{return!0}},Sr=(i,e)=>{const t=i.offerAnswered;i.offerExpiryTimer=rt(i.offerExpiryTimer),i.offerInitPromise=null,i.offerRelays.forEach((n,s)=>bl(i,s)),i.offerRelays=[],i.offerSignalRelays=[],i.offerRelayTimers=[],i.offerSignalBacklog=[],i.offerPeer&&i.offerPeer!==i.connectedPeer&&(t||RM(i.offerPeer)?i.offerPeer.isDead||i.offerPeer.destroy():e.recycle(i.offerPeer)),i.offerPeer=null,i.offerId=null,i.offerSdp=null,i.offerAnswered=!1,i.connectionErrorReported=!1,rn(i)},CM=(i,e,t,n)=>{rt(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{const s=i.peerStates[t];!s||s.connectedPeer||s.answeringPeer!==n||(s.answerSent&&zo(i,s,t),n.destroy(),xo(s,n),i.checkDeactivate())},MM)},PM=async(i,e,t)=>{const n=t?[t,Wc]:[Wc];for(const s of n){const r=i.pendingCandidates[s];if(r?.length){delete i.pendingCandidates[s];for(const o of r)await e.signal(o)}}},Af=(i,e,t,n=Tl)=>{rt(e.offerExpiryTimer);const s=e.offerId;e.offerExpiryTimer=setTimeout(()=>{const r=i.peerStates[t];!r||r.connectedPeer||r.offerId!==s||(r.offerAnswered&&zo(i,r,t),Sr(r,i.offerPool),i.checkDeactivate())},n)},LM=(i,e,t,n)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{const s=(await i.offerPool.checkout(1,!1,i.encryptOffer))[0];if(!s)throw et("failed to allocate offer peer");const{peer:r,offer:o}=s;e.offerPeer=r,e.offerId=Ls(_M),e.offerSdp=o,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],rn(e);const a=()=>{e.offerPeer===r&&!e.connectedPeer&&(e.offerAnswered&&zo(i,e,t),Sr(e,i.offerPool)),i.disconnectPeer(r,t),i.checkDeactivate()};return r.setHandlers({connect:()=>i.connectPeer(r,t,n),signal:c=>{e.offerPeer===r&&(e.offerSignalBacklog.push(c),e.offerSignalRelays.forEach(l=>l?.(c)))},close:a,error:a}),Af(i,e,t),{peer:r,offer:o,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),IM=async(i,e,t,n,s)=>{if(n){i.attachSharedPeerToRoom(t,n);return}const r=i.peerStates[t];if(!r||r.connectedPeer||r.answeringPeer||r.offerAnswered){Tu(r,e);return}if(r.offerRelays[e]!==Eo)return;const[o,a]=await Ui([yr(xr(i.rootTopicPlaintext,t)),LM(i,r,t,e)]);if(i.isLeaving())return;if(r.connectedPeer||r.answeringPeer||r.offerAnswered||r.offerRelays[e]!==Eo){Tu(r,e);return}r.offerRelayTimers[e]=rt(r.offerRelayTimers[e]),r.offerRelays[e]=!0,rn(r),r.offerRelayTimers[e]=setTimeout(()=>OM(i,t,e),(i.announceIntervals[e]??i.announceIntervalMs)*.9);let c=!1;r.offerSignalRelays[e]=l=>{c&&(i.isLeaving()||r.connectedPeer||r.offerPeer!==a.peer||r.offerId!==a.offerId||l.type!=="candidate"||wf(i,l,o,s,h=>({peerId:Xt,offerId:a.offerId,candidate:h,...i.isPassive?{passive:!0}:{}}),()=>!r.connectedPeer&&r.offerPeer===a.peer&&r.offerId===a.offerId))},s(o,Zt({peerId:Xt,offerId:a.offerId,offer:a.offer,...i.isPassive?{passive:!0}:{}})),c=!0,r.offerSignalBacklog.forEach(l=>r.offerSignalRelays[e]?.(l))},DM=async(i,e,t,n,s,r,o)=>{const a=Mr(i.peerStates,t);if(a.answeringPeer||a.offerAnswered)return;const c=!!(a.offerPeer||a.offerRelays.some(Boolean));if((c||r)&&Xt<t)return;c&&Sr(a,i.offerPool);const l=i.initPeer(!1,i.config);a.answeringPeer=l,a.answerSent=!1,a.connectionErrorReported=!1,CM(i,a,t,l),rn(a);const h=()=>{a.answeringPeer===l&&!a.connectedPeer&&a.answerSent&&zo(i,a,t),xo(a,l),i.disconnectPeer(l,t),i.checkDeactivate()};l.setHandlers({connect:()=>i.connectPeer(l,t,e),close:h,error:h});let u;try{u=await i.toPlain({type:"offer",sdp:n})}catch{xo(a,l),i.onJoinError?.({error:"incorrect room password when decrypting offer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(l.isDead){xo(a,l);return}const d=await yr(xr(i.rootTopicPlaintext,t));i.isLeaving()||(l.setHandlers({signal:f=>{i.isLeaving()||a.answeringPeer!==l||l.isDead||f.type!=="answer"&&f.type!=="candidate"||wf(i,f,d,o,g=>{const v={peerId:Xt};return f.type==="answer"?(a.answerSent=!0,v.answer=g):v.candidate=g,s&&(v.offerId=s),i.isPassive&&(v.passive=!0),v},()=>a.answeringPeer===l&&!l.isDead)}}),await l.signal(u),await PM(a,l,s))},NM=async(i,e,t,n,s)=>{let r;try{r=await i.toPlain({type:vf,sdp:t})}catch{return}const o=Mr(i.peerStates,e),a=n&&o?.offerPeer&&o.offerId===n?o.offerPeer:null,c=o?.answeringPeer??null,l=!n&&o?.offerPeer?o.offerPeer:null,h=s&&!s.isDead?s:a??c??l;if(!h||h.isDead){const u=n??Wc;(o.pendingCandidates[u]??=[]).push(r);return}h.signal(r)},UM=async(i,e,t,n,s,r)=>{let o;try{o=await i.toPlain({type:"answer",sdp:n})}catch{i.onJoinError?.({error:"incorrect room password when decrypting answer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(r)i.offerPool.claimLeased(r),r.setHandlers({connect:()=>i.connectPeer(r,t,e),close:()=>i.disconnectPeer(r,t)}),r.signal(o);else{const a=i.peerStates[t];if(!a||!a.offerPeer||a.offerAnswered||s&&a.offerId&&s!==a.offerId||a.offerPeer.isDead)return;a.offerAnswered=!0,Af(i,a,t,xM),a.offerPeer.signal(o)}},OM=(i,e,t)=>{const n=i.peerStates[e];!n||n.connectedPeer||n.offerRelays[t]&&(bl(n,t),i.checkDeactivate())},FM=i=>e=>async(t,n,s)=>{if(i.isLeaving())return;const r=TM(n);if(!r||bM(r))return;const o=js(r,"peerId")??"",a=js(r,"offer"),c=js(r,"answer"),l=js(r,"candidate"),h=js(r,"offerId"),u=r.peer,d=r.hasOutgoingOffer===!0,f=r.passive===!0;if(!o||o===Xt)return;const[g,v]=await Ui([i.rootTopicP,i.selfTopicP]);if(i.isLeaving()||t!==g&&t!==v||i.isPassive&&f||(i.isPassive&&!i.isActive&&!c&&!l&&(i.isActive=!0,i.requeueAnnounce?.()),i.isPassive&&!i.isActive))return;const m=i.peerStates[o],p=m?.connectedPeer;if(p&&m){const _=gM(p);if(_==="live"){m.connectedPeerUnhealthySinceMs=null;return}if(_==="stale")Xc(m);else{const C=Date.now(),w=m.connectedPeerUnhealthySinceMs??C;if(m.connectedPeerUnhealthySinceMs=w,C-w<yM)return;Xc(m)}}let x=i.sharedPeers.get(i.appId,o);x&&i.sharedPeers.getHealth(x.peer)==="stale"&&(i.sharedPeers.clear(i.appId,o,{destroyPeer:!0}),x=void 0);const M=!!(o&&!a&&!c&&!l);if(M&&!x){const _=Mr(i.peerStates,o),C=Xt<o;if(_.answeringPeer||_.connectedPeer||_.offerAnswered)return;if(!C&&!_.offerPeer){const w=await yr(xr(i.rootTopicPlaintext,o));!i.isLeaving()&&!_.connectedPeer&&s(w,Zt({peerId:Xt}));return}if(_.offerRelays[e])return;_.offerRelays[e]=Eo,rn(_)}if(x&&(a||c||l)){if(x.bindings[i.roomId])return;i.attachSharedPeerToRoom(o,x);return}if(M)return IM(i,e,o,x,s);if(a)return DM(i,e,o,a,h,d,s);if(l)return NM(i,o,l,h,u);if(c)return UM(i,e,o,c,h,u)},Na=5333,BM=[233,533,1333],kM=7533,zM=123333;var HM=({init:i,subscribe:e,announce:t,deactivate:n})=>{const s={},r={},o={},a={},c=new vM,l=()=>hs(s).some(C=>nn(C).length>0),h=C=>r[C]??={},u=C=>o[C]??={},d=(C,w,P)=>{c.getHealth(C.peer)==="live"&&c.sendRoomPresence(C,w,P)},f=(C,w)=>{Ei(r[C]??{}).forEach(([P,R])=>{if(!R.shouldAdvertise())return;const{roomToken:b,roomTokenPromise:S}=R;if(b){d(w,b,!0);return}S.then(I=>{r[C]?.[P]===R&&R.roomToken===I&&(c.get(C,w.peerId)!==w||w.isClosing||R.shouldAdvertise()&&d(w,I,!0))})})},g=(C,w,P)=>hs(c.getMap(C)).forEach(R=>d(R,w,P)),v=C=>{a[C]||(a[C]=c.setRoomPresenceHandler(C,(w,P,R)=>{if(!R)return;const b=c.get(C,w),S=o[C]?.[P];!b||!S||r[C]?.[S]?.attachSharedPeerToRoom(w,b)}))},m=C=>{s[C]&&nn(s[C]).length>0||(a[C]?.(),delete a[C],delete r[C],delete o[C])};let p=!1,x=[],M=null,_=Ft;return(C,w,P)=>{if(!C)throw et("requires a config map as the first argument");if(P&&typeof P!="object")throw et("third argument must be a callbacks object");const{appId:R}=C,b=P?.onJoinError,S=P?.onPeerHandshake,I=P?.handshakeTimeoutMs;if(!R)throw et("config map is missing appId field");if(!w)throw et("roomId argument required");if(I!==void 0&&(!Number.isFinite(I)||I<=0))throw et("handshakeTimeoutMs must be a positive number");if(s[R]?.[w])return s[R][w];v(R);const W=xr(_n,R,w),V=yr(W),A=yr(xr(W,Xt)),D=By(C.password??"",R,w),N=ky(R,w),H=C._test_only_sharedPeerIdleMs??zM;let O=!1;const ne=ie=>async J=>({type:J.type,sdp:await ie(D,J.sdp)}),oe=ne(Hy),B=ne(zy),Z=c.getMap(R),ge=()=>du(!0,C);M||=new Wy(ge);const Y=M,re=async ie=>{const J=await ie.getOffer(Date.now()-ie.created>Tl);if(!J||J.type!=="offer")throw et("failed to get offer for peer");return(await B(J)).sdp},ve=(ie,J)=>{const ee=Mr(U.peerStates,ie);ee.answeringExpiryTimer=rt(ee.answeringExpiryTimer),ee.answeringPeer=null;const{proxy:Pe,isNew:K}=c.bind(w,N,J,{onDetach:()=>{const le=U.peerStates[ie];le?.connectedPeer===J.peer&&(le.connectedPeer=null,le.connectedPeerUnhealthySinceMs=null,rn(le))}});ee.connectedPeer=J.peer,ee.connectedPeerUnhealthySinceMs=null,rn(ee),K&&E(Pe,ie),Sr(ee,Y)},ue=(ie,J,ee)=>{if(O){ie.destroy();return}const Pe=Mr(U.peerStates,J);if(Pe.connectedPeer){const be=Z[J];if(be&&Pe.connectedPeer===be.peer&&be.bindings[w])return;Pe.connectedPeer!==ie&&!ie.isDead&&ie.destroy();return}let K=Z[J];if(K&&c.getHealth(K.peer)==="stale"&&(c.clear(R,J,{destroyPeer:!0}),K=void 0),K&&K.peer!==ie){ie.isDead||ie.destroy(),ve(J,K);return}const le=!K;K||=c.register(R,J,ie,H),ve(J,K),le&&f(R,K)},Le=(ie,J)=>{if(O)return;const ee=U.peerStates[J];ee?.connectedPeer===ie&&(Xc(ee),ot())},Ae=!!C.passive;let De=null,Ke,We=Ft;const ot=()=>{if(!Ae||!U.isActive)return;let ie=!1;Ei(U.peerStates).forEach(([J,ee])=>{ee.connectedPeer||ee.answeringPeer||ee.offerInitPromise||ee.offerPeer||ee.offerRelays.some(Boolean)?ie=!0:ee.status==="idle"&&delete U.peerStates[J]}),ie||(U.isActive=!1,Ke=rt(Ke),Ye.forEach(rt),Ye.length=0,We(),De?.roomToken&&g(R,De.roomToken,!1))},U={appId:R,roomId:w,config:C,peerStates:{},rootTopicPlaintext:W,rootTopicP:V,selfTopicP:A,toPlain:oe,toCipher:B,isLeaving:()=>O,isPassive:Ae,isActive:!Ae,onJoinError:b,sharedPeers:c,offerPool:Y,encryptOffer:re,initPeer:du,connectPeer:ue,disconnectPeer:Le,attachSharedPeerToRoom:ve,checkDeactivate:ot,announceIntervals:[],announceIntervalMs:Na},Et={config:C,appId:R,roomId:w,isPassive:Ae},Xe=FM(U);if(!p){const ie=i(C);x=(Array.isArray(ie)?ie:[ie]).map(J=>Promise.resolve(J)),p=!0,_=C.relayConfig?.manualReconnection?Ft:Ny()}!Ae&&!Y.isActive&&Y.warmup(),U.announceIntervals=x.map(()=>Na);const He=x.map(()=>0),Re=x.map(()=>0),Ye=[],Ce=x.map(async(ie,J)=>e(await ie,await V,await A,Xe(J),ee=>Y.getOffers(ee,re),Et));Ui([V,A]).then(([ie,J])=>{if(O)return;const ee=async(Pe,K)=>{if(O||Ae&&!U.isActive)return;const le=Ae?{passive:!0}:void 0;let be;try{be=await t(Pe,ie,J,le,Et),Re[K]=0}catch(Oe){const tt=Re[K]??0;tt===0&&C.relayConfig?.warnOnRelayFailure!==!1&&console.warn(`${_n}: announce failed - ${Ts(Oe,"")}`),Re[K]=tt+1}if(O||Ae&&!U.isActive)return;typeof be=="number"&&(U.announceIntervals[K]=be);const Ie=He[K]??0;He[K]=Ie+1;const xe=U.announceIntervals[K]??Na,Ve=BM[Ie];Ye[K]=setTimeout(()=>{ee(Pe,K)},typeof Ve=="number"?Math.min(xe,Ve):xe)};We=()=>{n&&x.forEach(async Pe=>{const K=await Pe;O||n(K,ie,J,Et)})},U.requeueAnnounce=()=>{Ye.forEach(rt),Ye.length=0,Ke=rt(Ke),Y.isActive||Y.warmup(),De?.roomToken&&g(R,De.roomToken,!0),Ke=setTimeout(ot,kM),x.forEach(async(Pe,K)=>{const le=await Pe;le&&!O&&(He[K]=0,ee(le,K))})},Ce.forEach(async(Pe,K)=>{if(await Pe,O)return;const le=await x[K];le&&!O&&(!Ae||U.isActive)&&ee(le,K)})});let E=Ft;const{compose:y}=Xy(C.password??"",R,w),G=y(S),$={...G?{onPeerHandshake:G}:{},...I===void 0?{}:{handshakeTimeoutMs:I},isPassive:Ae,onHandshakeError:(ie,J)=>b?.({error:J.replace(/^handshake failed: /,""),appId:R,peerId:ie,roomId:w})};s[R]??={};const se=h(R),Q=fM(ie=>E=ie,ie=>{if(O)return;const J=U.peerStates[ie];J?.connectedPeer&&(J.connectedPeer=null,rn(J),ot())},()=>{O=!0,E=Ft;const ie=r[R]?.[w];ie?.roomToken&&(g(R,ie.roomToken,!1),delete o[R]?.[ie.roomToken],o[R]&&!nn(o[R]).length&&delete o[R]),r[R]&&(delete r[R][w],nn(r[R]).length||delete r[R]),Ei(U.peerStates).forEach(([J,ee])=>{if(ee.answeringExpiryTimer=rt(ee.answeringExpiryTimer),ee.connectedPeer&&!ee.connectedPeer.isDead){const Pe=Z[J];(!Pe||Pe.peer!==ee.connectedPeer)&&ee.connectedPeer.destroy()}ee.answeringPeer&&!ee.answeringPeer.isDead&&ee.answeringPeer.destroy(),Sr(ee,Y),ee.connectedPeer=null,ee.answeringPeer=null,rn(ee)}),s[R]&&(delete s[R][w],nn(s[R]).length===0&&delete s[R]),Ye.forEach(rt),Ke=rt(Ke),Ce.forEach(async J=>{(await J)()}),!l()&&(p=!1,Y.destroy(),M=null,_(),m(R))},$);return De={roomToken:null,roomTokenPromise:N,attachSharedPeerToRoom:ve,shouldAdvertise:()=>!Ae||U.isActive},se[w]=De,N.then(ie=>{const J=De;!J||O||r[R]?.[w]!==J||(J.roomToken=ie,u(R)[ie]=w,hs(Z).forEach(ee=>{ee.remoteRoomTokens.has(ie)&&ve(ee.peerId,ee)}),(!Ae||U.isActive)&&g(R,ie,!0))}),s[R][w]=Q}};const VM=["offer","answer","candidate"],GM=i=>{if(typeof i=="string")try{const e=_r(i);return e&&typeof e=="object"?e:null}catch{return null}return i},Ua=(i,e)=>typeof i[e]=="string"&&i[e]?i[e]:void 0,WM=i=>VM.some(e=>e in i&&(typeof i[e]!="string"||i[e]==="")),XM=i=>{const e=GM(i);if(!e||WM(e))return!1;const t=Ua(e,"peerId");return!!(t&&t!==Xt&&e.passive!==!0&&!Ua(e,"answer")&&!Ua(e,"candidate"))},Oa=i=>{if(!i)throw et("topic strategy missing room context");return i},bu=(i,e,t,n)=>({kind:e,appId:i.appId,roomId:i.roomId,rootTopic:t,selfTopic:n}),Fa=(i,e,t,n)=>({kind:e,appId:i.appId,roomId:i.roomId,rootTopic:t,selfTopic:n});var qM=({init:i,subscribeTopic:e,publishTopic:t,unpublishTopic:n})=>HM({init:i,subscribe:async(s,r,o,a,c,l)=>{const h=Oa(l),u=(M,_)=>t(s,M,_,Fa(h,"signal",r,o));let d=null,f=!1,g=null,v=!1;const m=M=>{f||(f=!0,M())},p=()=>(g||(g=Promise.resolve(e(s,o,(M,_)=>{v||a(M,_,u)},bu(h,"self",r,o))).then(M=>{d=M,v&&m(M)})),g);h.isPassive||await p();const x=await e(s,r,async(M,_)=>{v||(h.isPassive&&XM(_)&&await p(),v||await a(M,_,u))},bu(h,"root",r,o));return()=>{v=!0,d&&m(d),x()}},announce:(s,r,o,a,c)=>{const l=Oa(c);return t(s,r,Zt({peerId:Xt,...a}),Fa(l,"announce",r,o))},...n?{deactivate:(s,r,o,a)=>n(s,r,Fa(Oa(a),"announce",r,o))}:{}});const YM=Dy(i=>i.socket),jM=5,Ef="x",Rf="EVENT",{secretKey:KM,publicKey:JM}=ff.keygen(),ZM=vr(JM),QM={},$M={},eS={},wu=250,Cf=()=>Math.floor(Date.now()/1e3),Pf=i=>eS[i]??=xf(i,1e4)+2e4,tS=async(i,e)=>{const t={kind:Pf(i),tags:[[Ef,i]],created_at:Cf(),content:e,pubkey:ZM},n=await ko("SHA-256",Zt([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return Zt([Rf,{...t,id:vr(n),sig:vr(await ff.signAsync(n,KM))}])},bs={},nS=(i,e,t)=>{const n=bs[i.url]??={subIds:[],topics:new Map,updateTimer:null};n.topics.set(e,t),Lf(i,n)},iS=(i,e)=>{const t=bs[i.url];t&&(t.topics.delete(e),t.topics.size===0?(t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),t.subIds.forEach(n=>i.send(Zt(["CLOSE",n]))),delete bs[i.url]):Lf(i,t))},Lf=(i,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null,If(i)},0))},If=i=>{const e=bs[i.url];if(!e||e.topics.size===0)return;const t=[...e.topics.keys()],n=[],s=Cf();for(let r=0;r<t.length;r+=wu)n.push(t.slice(r,r+wu));for(;e.subIds.length>n.length;){const r=e.subIds.pop();r&&i.send(Zt(["CLOSE",r]))}n.forEach((r,o)=>{const a=e.subIds[o]??=Ls(64);i.send(Zt(["REQ",a,{kinds:[...new Set(r.map(Pf))],since:s,"#x":r}]))})},sS=i=>{const e=bs[i.url];e&&e.topics.size>0&&If(i)},rS=qM({init:i=>Ry(i,oS,jM,!0).map(e=>{const t=YM.register(e,()=>Iy(e,n=>{const[s,r,o,a]=_r(n);if(s!==Rf){const c=`${_n}: relay failure from ${t.url} - `;i.relayConfig?.warnOnRelayFailure!==!1&&(s==="NOTICE"?console.warn(c+r):s==="OK"&&!o&&console.warn(c+a));return}if(o&&typeof o=="object"&&"content"in o){const{content:c}=o,l=$M[r];if(l){l(QM[r]??"",c);return}const h=bs[t.url];if(h?.subIds.includes(r)&&o.tags){const u=o.tags.find(d=>d[0]===Ef);u?.[1]&&h.topics.get(u[1])?.(u[1],c)}}},()=>sS(t)));return t.ready}),subscribeTopic:(i,e,t)=>(nS(i,e,(s,r)=>void t(s,r)),()=>{iS(i,e)}),publishTopic:async(i,e,t)=>i.send(await tS(e,typeof t=="string"?t:Zt(t)))}),oS=["basspistol.org","bucket.coracle.social","chorus.almostmachines.dev","chorus.pjv.me","communities.nos.social","ftp.halifax.rwth-aachen.de/nostr","hol.is","hornetstorage.net/relay","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.self-determined.de","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.angor.io","relay.artio.inf.unibe.ch","relay.binaryrobot.com","relay.damus.io","relay.froth.zone","relay.libernet.app","relay.mostr.pub","relay.mostro.network","relay.nostr.place","relay.nostrdice.com","relay.notoshi.win","relay.sigit.io","relay02.lnfi.network","relay2.angor.io","schnorr.me","slick.mjex.me","social.amanah.eblessing.co","staging.yabu.me","strfry.openhoofd.nl","strfry.shock.network","testnet-relay.samt.st","top.testrelay.top","x.kojira.io","yabu.me/v2"].map(i=>"wss://"+i);class aS{id=typeof Xt=="string"&&Xt?Xt.slice(0,12):crypto.randomUUID().slice(0,8);sendAction=null;leaveFn=null;onMessage=()=>{};onJoin=()=>{};onLeave=()=>{};connected=!1;peers=0;constructor(){try{const e=rS({appId:"tidelight-one-harbor"},"the-only-world"),t=e.makeAction("bus");t.onMessage=n=>this.onMessage(n),this.sendAction=n=>{try{t.send(JSON.parse(JSON.stringify(n)))}catch{}},e.onPeerJoin=n=>{this.peers+=1,this.connected=!0,this.onJoin(n)},e.onPeerLeave=n=>{this.peers=Math.max(0,this.peers-1),this.onLeave(n)},this.leaveFn=()=>e.leave(),this.connected=!0}catch(e){console.warn("mesh unavailable, local tabs only",e)}}send(e){this.sendAction?.(e)}leave(){this.leaveFn?.()}}const cS="tidelight-harbor";function Au(){return crypto.randomUUID().slice(0,8)}const Eu=[12868666,15254394,4029035,8031428,13925024,13935180];class lS{id;name;skin;donate;isHost=!1;snapshot;bus=new BroadcastChannel(cS);mesh=new aS;ws=null;hostSeen=0;seenBus=new Set;onToast=()=>{};onChat=()=>{};constructor(e,t){this.name=e.slice(0,16)||"courier",this.donate=t,this.id=this.mesh.id||Au(),this.skin=Math.abs(hS(this.id))%3,this.snapshot=uS(this.id),this.mesh.onMessage=n=>this.ingest(n),this.mesh.onJoin=()=>this.hello(),this.mesh.onLeave=n=>{this.isHost&&this.drop(n)},this.bus.onmessage=n=>this.ingest(n.data),addEventListener("storage",n=>{n.key!=="tidelight-q"||!n.newValue||this.drainQueue(n.newValue)}),setInterval(()=>{this.drainQueue(localStorage.getItem("tidelight-q"))},80),this.trySocket(),setTimeout(()=>{performance.now()-this.hostSeen>350&&this.becomeHost()},380)}trySocket(){const t=`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`;try{this.ws=new WebSocket(t),this.ws.onmessage=n=>this.ingest(JSON.parse(String(n.data))),this.ws.onerror=()=>{this.ws=null}}catch{this.ws=null}}send(e){this.bus.postMessage(e),this.mesh.send(e);try{const t=localStorage.getItem("tidelight-q"),n=t?JSON.parse(t):[];for(n.push({...e,_n:Math.random()});n.length>24;)n.shift();localStorage.setItem("tidelight-q",JSON.stringify(n))}catch{}this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(e))}drainQueue(e){if(e)try{const t=JSON.parse(e);if(!Array.isArray(t))return;for(const n of t){const s=JSON.stringify(n);this.seenBus.has(s)||(this.seenBus.add(s),this.seenBus.size>120&&this.seenBus.clear(),this.ingest(n))}}catch{}}ingest(e){const t=e;if(!(!t||typeof t!="object"||!("type"in t))){if(t.type==="welcome"||t.type==="snapshot"){t.snapshot.hostId!==this.id&&(this.isHost=!1,this.hostSeen=performance.now()),this.snapshot=t.snapshot;return}if(t.type==="toast"){this.onToast(t.text);return}if(t.type==="chat"){this.onChat({from:t.id,name:t.name,text:t.text,t:performance.now()});return}if(t.type==="bye"){this.snapshot.hostId===t.id&&!this.isHost?this.becomeHost():this.isHost&&this.drop(t.id);return}if(this.isHost&&(t.type==="hello"&&this.admit(t.id,t.name,t.donate,t.skin),t.type==="state"&&this.patchPeer(t),t.type==="letter"&&this.upsertLetter(t.letter),t.type==="wave")){const n=this.snapshot.peers.find(s=>s.id===t.id);n&&(n.waving=!0)}}}becomeHost(){this.isHost=!0,this.snapshot.hostId=this.id,this.admit(this.id,this.name,this.donate,this.skin),this.send({type:"welcome",you:this.id,snapshot:this.snapshot})}hello(){this.send({type:"hello",id:this.id,name:this.name,donate:this.donate,skin:this.skin}),setInterval(()=>{this.isHost||this.snapshot.peers.some(e=>e.id===this.id)||this.send({type:"hello",id:this.id,name:this.name,donate:this.donate,skin:this.skin})},600)}admit(e,t,n,s=0){if(this.snapshot.peers.some(c=>c.id===e))return;const r=this.nextSlot(),o=Eu[this.snapshot.peers.length%Eu.length];this.snapshot.peers.push({id:e,name:t,color:o,x:this.snapshot.peers.length===0?0:-3.2,y:1,z:this.snapshot.peers.length===0?30:26,yaw:0,moving:!1,waving:!1,carrying:!1,donate:n,islandSlot:r,lastSeen:performance.now(),skin:s});const a=this.snapshot.islands[r];a&&n&&(a.ownerId=e,a.rise=Math.max(a.rise,.72)),this.maybeSpawnLetter(),this.onToast(`${t} reached the harbor`),this.send({type:"toast",text:`${t} reached the harbor`})}nextSlot(){const e=new Set(this.snapshot.peers.map(t=>t.islandSlot));for(let t=0;t<fr;t++)if(!e.has(t))return t;return this.snapshot.peers.length%fr}drop(e){const t=this.snapshot.peers.find(n=>n.id===e);if(this.snapshot.peers=this.snapshot.peers.filter(n=>n.id!==e),t){const n=this.snapshot.islands[t.islandSlot];n&&n.ownerId===e&&(n.ownerId=null)}}patchPeer(e){const t=this.snapshot.peers.find(n=>n.id===e.id);t&&(t.x=e.x,t.y=e.y,t.z=e.z,t.yaw=e.yaw,t.moving=e.moving,t.waving=e.waving,t.carrying=e.carrying,t.donate=e.donate,t.lastSeen=performance.now())}upsertLetter(e){const t=this.snapshot.letters.findIndex(n=>n.id===e.id);t>=0?this.snapshot.letters[t]=e:this.snapshot.letters.push(e)}maybeSpawnLetter(){if(this.snapshot.letters.filter(t=>!t.delivered).length>=3)return;const e=this.snapshot.peers.filter(t=>t.donate).map(t=>t.islandSlot);e.length===0&&e.push(0),this.snapshot.letters.push({id:Au(),x:1.1,y:1.05,z:29.5,carrierId:null,destSlot:e[Math.floor(Math.random()*e.length)],delivered:!1})}publishSelf(e){this.send({type:"state",id:this.id,x:e.x,y:e.y,z:e.z,yaw:e.yaw,moving:e.moving,waving:e.waving,carrying:e.carrying,donate:this.donate})}publishLetter(e){this.isHost&&this.upsertLetter(e),this.send({type:"letter",letter:e})}wave(){this.send({type:"wave",id:this.id})}chat(e){const t=e.trim().slice(0,140);if(!t)return;const n={type:"chat",id:this.id,name:this.name,text:t};this.onChat({from:this.id,name:this.name,text:t,t:performance.now()}),this.send(n)}tickHost(e,t){if(!this.isHost)return;for(const s of this.snapshot.islands){const r=this.snapshot.peers.some(a=>a.donate&&a.islandSlot===s.slot),o=r?1:0;s.rise+=(o-s.rise)*Math.min(1,e*2.4),s.ownerId=r?this.snapshot.peers.find(a=>a.islandSlot===s.slot)?.id??null:null}this.snapshot.t+=e,this.snapshot.computeMs=t;const n=performance.now();this.snapshot.peers=this.snapshot.peers.filter(s=>s.id===this.id||n-s.lastSeen<4e3),this.snapshot.letters.filter(s=>!s.delivered).length===0&&this.maybeSpawnLetter(),this.send({type:"snapshot",snapshot:this.snapshot})}leave(){this.send({type:"bye",id:this.id}),this.bus.close(),this.ws?.close(),this.mesh.leave()}}function hS(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)|0;return e}function uS(i){const e=Array.from({length:fr},(t,n)=>({slot:n,ownerId:null,rise:0,seed:n*3.17}));return{t:0,hostId:i,peers:[],letters:[],islands:e,computeMs:0}}const Ba=1/ty;function Ru(i,e){if(e===mp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Cc||e===ad){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Cc)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class dS extends Ps{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vS(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new ES(t)}),this.register(function(t){return new RS(t)}),this.register(function(t){return new CS(t)}),this.register(function(t){return new yS(t)}),this.register(function(t){return new MS(t)}),this.register(function(t){return new SS(t)}),this.register(function(t){return new TS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new bS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new AS(t)}),this.register(function(t){return new wS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new PS(t)}),this.register(function(t){return new LS(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=rr.extractUrlBase(e);o=rr.resolveURL(l,this.path)}else o=rr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new kd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Df){try{o[Ge.KHR_BINARY_GLTF]=new IS(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Ge.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new XS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ge.KHR_MATERIALS_UNLIT:o[u]=new mS;break;case Ge.KHR_DRACO_MESH_COMPRESSION:o[u]=new DS(r,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:o[u]=new NS;break;case Ge.KHR_MESH_QUANTIZATION:o[u]=new US;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function fS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pS{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new _e(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ht);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Oc(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Vd(h),l.distance=u;break;case"spot":l=new Hd(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,kn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class mS{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return Wt}extendParams(e,t,n){const s=[];e.color=new _e(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ht),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,xt))}return Promise.all(s)}}class gS{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class vS{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(a,a)}return Promise.all(r)}}class xS{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class _S{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class yS{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ht)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,xt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class MS{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class SS{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(a[0],a[1],a[2],Ht),Promise.all(r)}}class TS{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class bS{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(a[0],a[1],a[2],Ht),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,xt)),Promise.all(r)}}class wS{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class AS{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class ES{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class RS{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class CS{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class PS{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class LS{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==en.TRIANGLES&&l.mode!==en.TRIANGLE_STRIP&&l.mode!==en.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const v=new Ue,m=new L,p=new vn,x=new L(1,1,1),M=new r_(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&x.fromBufferAttribute(c.SCALE,_),M.setMatrixAt(_,v.compose(m,p,x));for(const _ in c)if(_==="_COLOR_0"){const C=c[_];M.instanceColor=new Ic(C.array,C.itemSize,C.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);ct.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Df="glTF",Ks=12,Cu={JSON:1313821514,BIN:5130562};class IS{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ks),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Df)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ks,r=new DataView(e,Ks);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Cu.JSON){const l=new Uint8Array(e,Ks+o,a);this.content=n.decode(l)}else if(c===Cu.BIN){const l=Ks+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class DS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=qc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=qc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=us[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}u(f)},a,l,Ht,d)})})}}class NS{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class US{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class Nf extends Tr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,v=g-l,m=-2*f+3*d,p=f-d,x=1-m,M=p-d+u;for(let _=0;_!==a;_++){const C=o[v+_+a],w=o[v+_+c]*h,P=o[g+_+a],R=o[g+_]*h;r[_]=x*C+M*w+m*P+p*R}return r}}const OS=new vn;class FS extends Nf{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return OS.fromArray(r).normalize().toArray(r),r}}const en={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},us={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pu={9728:wt,9729:Gt,9984:Ju,9985:co,9986:Js,9987:zn},Lu={33071:ri,33648:_o,10497:Ri},ka={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},BS={CUBICSPLINE:void 0,LINEAR:lr,STEP:cr},za={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Es({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xn})),i.DefaultMaterial}function yi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function kn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function zS(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function HS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function VS(i){let e;const t=i.extensions&&i.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ha(t.attributes):e=i.indices+":"+Ha(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ha(i.targets[n]);return e}function Ha(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Yc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function GS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const WS=new Ue;class XS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new zd(this.options.manager):this.textureLoader=new B_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return yi(r,a,s),kn(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(rr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=ka[s.type],a=us[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new At(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=ka[s.type],l=us[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,m;if(f&&f!==u){const p=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let M=t.cache.get(x);M||(v=new l(a,p*f,s.count*f/h),M=new wd(v,f/h),t.cache.add(x,M)),m=new dr(M,c,d%f/h,g)}else a===null?v=new l(s.count*c):v=new l(a,d,s.count*c),m=new At(v,c,g);if(s.sparse!==void 0){const p=ka.SCALAR,x=us[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,C=new x(o[1],M,s.sparse.count*p),w=new l(o[2],_,s.sparse.count*c);a!==null&&(m=new At(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,R=C.length;P<R;P++){const b=C[P];if(m.setX(b,w[P*c]),c>=2&&m.setY(b,w[P*c+1]),c>=3&&m.setZ(b,w[P*c+2]),c>=4&&m.setW(b,w[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Pu[d.magFilter]||Gt,h.minFilter=Pu[d.minFilter]||zn,h.wrapS=Lu[d.wrapS]||Ri,h.wrapT=Lu[d.wrapT]||Ri,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==wt&&h.minFilter!==Gt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new gt(v);m.needsUpdate=!0,d(m)}),t.load(rr.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),kn(u,o),u.userData.mimeType=o.mimeType||GS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new bo,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Pd,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Es}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Ge.KHR_MATERIALS_UNLIT]){const u=s[Ge.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new _e(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ht),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,xt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ot);const h=r.alphaMode||za.OPAQUE;if(h===za.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===za.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Wt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Wt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Wt){const u=r.emissiveFactor;a.emissive=new _e().setRGB(u[0],u[1],u[2],Ht)}return r.emissiveTexture!==void 0&&o!==Wt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,xt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),kn(u,r),t.associations.set(u,{materials:e}),r.extensions&&yi(s,u,r),u})}createUniqueName(e){const t=$e.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Iu(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=VS(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Iu(new Tt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?kS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],m=o[f];let p;const x=l[f];if(m.mode===en.TRIANGLES||m.mode===en.TRIANGLE_STRIP||m.mode===en.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new n_(v,x):new Ee(v,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===en.TRIANGLE_STRIP?p.geometry=Ru(p.geometry,ad):m.mode===en.TRIANGLE_FAN&&(p.geometry=Ru(p.geometry,Cc));else if(m.mode===en.LINES)p=new o_(v,x);else if(m.mode===en.LINE_STRIP)p=new ul(v,x);else if(m.mode===en.LINE_LOOP)p=new a_(v,x);else if(m.mode===en.POINTS)p=new Nc(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&HS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),kn(p,r),m.extensions&&yi(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&yi(s,u[0],r),u[0];const d=new ut;r.extensions&&yi(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(hr.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Do(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),kn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Ue;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new hl(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let x=0,M=d.length;x<M;x++){const _=d[x],C=f[x],w=g[x],P=v[x],R=m[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const b=n._createAnimationTracks(_,C,w,P,R);if(b)for(let S=0;S<b.length;S++)p.push(b[S])}return new Uc(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,WS)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Rd:l.length>1?h=new ut:l.length===1?h=l[0]:h=new ct,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),kn(h,r),r.extensions&&yi(n,h,r),r.matrix!==void 0){const u=new Ue;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new ut;n.name&&(r.name=s.createUniqueName(n.name)),kn(r,n),n.extensions&&yi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof on||d instanceof gt)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];ii[r.path]===ii.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ii[r.path]){case ii.weights:l=_s;break;case ii.rotation:l=ys;break;case ii.position:case ii.scale:l=Ms;break;default:switch(n.itemSize){case 1:l=_s;break;case 2:case 3:default:l=Ms;break}break}const h=s.interpolation!==void 0?BS[s.interpolation]:lr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+ii[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Yc(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof ys?FS:Nf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function qS(i,e,t){const n=e.attributes,s=new xn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){const h=Yc(us[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,c=new L;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=Yc(us[d.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new An;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Iu(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=qc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return qe.workingColorSpace!==Ht&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),kn(i,e),qS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?zS(i,e.targets,t):i})}function YS(i){const e=new Map,t=new Map,n=i.clone();return Uf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Uf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Uf(i.children[n],e.children[n],t)}const Du=["/models/xbot.glb","/models/robot.glb","/models/soldier.glb"],Nu=new Map,jS=new dS;function KS(i){let e=Nu.get(i);return e||(e=jS.loadAsync(i),Nu.set(i,e)),e}function Va(i,e){const t=e.map(n=>n.toLowerCase());return i.find(n=>t.some(s=>n.name.toLowerCase().includes(s)))}class JS{constructor(e,t,n=0){this.color=e,this.tag=$S(t,e),this.tag.position.set(0,2.05,0),this.letter=QS(),this.letter.visible=!1,this.bubble=Uu(""),this.bubble.visible=!1,this.bubble.position.set(0,2.35,0),this.group.add(this.tag,this.letter,this.bubble),this.mount(Du[Math.abs(n)%Du.length],e)}group=new ut;tag;mixer=null;idle=null;walk=null;waveAct=null;letter;bubble;bubbleUntil=0;moving=!1;async mount(e,t){try{const n=await KS(e),s=YS(n.scene);s.traverse(l=>{const h=l;if(!h.isMesh)return;h.castShadow=!0,h.receiveShadow=!0;const u=(Array.isArray(h.material)?h.material:[h.material]).map(d=>{const f=d,g=new bt({color:f.color?f.color.clone():new _e(t),map:f.map??null}),v=(f.name||h.name||"").toLowerCase();return/cloth|shirt|body|suit|robot|armor|hoodie|jacket/.test(v)&&g.color.lerp(new _e(t),.55),g});h.material=u.length===1?u[0]:u}),ZS(s,1.74),this.group.add(s),this.mixer=new Q_(s);const r=n.animations,o=Va(r,["idle","stand","standing"]),a=Va(r,["walk","walking","run"]),c=Va(r,["wave","thumb","yes"]);o&&(this.idle=this.mixer.clipAction(o)),a&&(this.walk=this.mixer.clipAction(a)),c&&(this.waveAct=this.mixer.clipAction(c)),this.idle?.play(),this.letter.position.set(.28,1.05,.22)}catch(n){console.warn("character load failed",e,n)}}pose(e,t,n,s,r=!1){this.letter.visible=r,this.mixer&&(e!==this.moving&&(this.moving=e,e?(this.idle?.fadeOut(.18),this.walk?.reset().fadeIn(.18).play()):(this.walk?.fadeOut(.18),this.idle?.reset().fadeIn(.18).play())),n&&this.waveAct?.reset().setLoop(od,1).play(),this.mixer.update(s)),this.bubble.visible&&performance.now()>this.bubbleUntil&&(this.bubble.visible=!1)}say(e){this.group.remove(this.bubble),this.bubble=Uu(e),this.bubble.position.set(0,2.35,0),this.group.add(this.bubble),this.bubbleUntil=performance.now()+3800}showTag(e){this.tag.visible=e}}function ZS(i,e){const t=new xn().setFromObject(i),n=new L;if(t.getSize(n),n.y<.01)return;const s=e/n.y;i.scale.multiplyScalar(s);const r=new xn().setFromObject(i);i.position.y-=r.min.y}function QS(){const i=new ut,e=new Ee(new kt(.22,.03,.16),new bt({color:16248800})),t=new Ee(new kt(.05,.012,.045),new bt({color:12868666}));return t.position.set(.06,.022,-.04),i.add(e,t),i}function $S(i,e){const t=document.createElement("canvas");t.width=256,t.height=64;const n=t.getContext("2d");n.clearRect(0,0,256,64),n.font="600 26px Outfit, sans-serif",n.textAlign="center",n.fillStyle="rgba(20,16,24,0.28)",n.fillRect(40,16,176,32),n.fillStyle=`#${e.toString(16).padStart(6,"0")}`,n.fillText(i.slice(0,16),128,40);const s=new Ed(new ll({map:new Ld(t),transparent:!0,depthWrite:!1}));return s.scale.set(.9,.22,1),s}function Uu(i){const e=document.createElement("canvas");e.width=512,e.height=128;const t=e.getContext("2d");t.clearRect(0,0,512,128),i&&(t.fillStyle="rgba(244,234,216,0.92)",eT(t,24,16,464,80,18),t.fill(),t.fillStyle="#1a1423",t.font="600 28px Outfit, sans-serif",t.textAlign="center",t.fillText(i.slice(0,42),256,66));const n=new Ed(new ll({map:new Ld(e),transparent:!0,depthWrite:!1}));return n.scale.set(1.8,.45,1),n.visible=!!i,n}function eT(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}class tT{constructor(e){this.camera=e,this.camera.position.set(2,6.4,86)}yaw=0;pitch=-.22;offset=new L;intro=1;update(e,t,n,s){s&&(this.yaw-=n.x*.0022,this.pitch=hr.clamp(this.pitch-n.y*.0016,-1.05,.15));const r=11.2;this.offset.set(Math.sin(this.yaw)*r*Math.cos(this.pitch),4.1-Math.sin(this.pitch)*3.4,Math.cos(this.yaw)*r*Math.cos(this.pitch));const a=t.clone().add(this.offset);if(this.intro>0){this.intro=Math.max(0,this.intro-e*.22);const l=this.intro*this.intro;a.lerp(new L(2,6.8,84),l)}this.camera.position.lerp(a,1-Math.pow(.001,e));const c=t.clone().add(new L(-5.5,1.1,-2.2));this.camera.lookAt(c)}}function ro(i,e){const t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function nT(i,e){const t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=ro(t,n),l=ro(t+1,n),h=ro(t,n+1),u=ro(t+1,n+1);return c+(l-c)*o+(h-c)*a+(c-l-h+u)*o*a}function iT(i,e){let t=0,n=.5,s=1;for(let r=0;r<5;r++)t+=n*nT(i*s,e*s),n*=.5,s*=2.05;return t}function sT(i,e,t){const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)}function Ro(i,e,t=0,n=0,s=56,r=1){const o=i-t,a=e-n,c=Math.hypot(o,a),l=iT((o+r*17.2)*.035,(a-r*9.1)*.035),h=sT(s,s*.42,c),u=(l-.42)*7.5,d=Math.exp(-((o-s*.12)**2)/90-(a+s*.28)**2/110)*s*.22,f=-Math.exp(-((o+s*.2)**2)/140-(a-s*.05)**2/180)*1.4;return(u+d+f+1.1)*h-.85*(1-h)}function Ho(i,e){return Ro(i,e,0,0,40,3.1)}class rT{constructor(e){this.slots=e}position=new L(0,.9,34);velocity=new L;yaw=0;grounded=!1;moving=!1;onGround=0;heightAt(e,t){let n=Ho(e,t);for(const s of this.slots){const r=Ro(e,t,s.x,s.z,s.radius,s.seed);r>n&&(n=r)}return n}update(e,t,n,s){const r=t.axis(),o=t.consumeLook();this.yaw-=o.x*.0022;const a=new L(r.x,0,r.z);a.lengthSq()>0&&a.normalize();const c=(r.sprint?9.2:5.4)*(this.position.y<.35?.45:1),l=new Ue().makeRotationY(n);a.applyMatrix4(l),this.moving=a.lengthSq()>.01,this.velocity.x+=(a.x*c-this.velocity.x)*Math.min(1,e*10),this.velocity.z+=(a.z*c-this.velocity.z)*Math.min(1,e*10),this.velocity.y-=22*e,this.grounded&&r.jump&&(this.velocity.y=7.2,this.grounded=!1),this.position.addScaledVector(this.velocity,e);let h=this.heightAt(this.position.x,this.position.z);this.position.x>-4.2&&this.position.x<4.2&&this.position.z>24&&this.position.z<52&&(h=Math.max(h,.84)),this.slots.forEach((f,g)=>{if(s(g)<.5)return;const v=Ro(this.position.x,this.position.z,f.x,f.z,f.radius,f.seed);v>h&&(h=v)});const d=Math.max(h,.05);this.position.y<=d+.02&&this.velocity.y<=0?(this.position.y=d,this.velocity.y=0,this.grounded=!0,this.onGround=.12):(this.onGround-=e,this.grounded=this.onGround>0),this.moving&&(this.yaw=Math.atan2(this.velocity.x,this.velocity.z))}}const Of={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Oi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const oT=new Do(-1,1,1,-1,0,1);class aT extends Tt{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}}const cT=new aT;class Vo{constructor(e){this._mesh=new Ee(cT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,oT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ff extends Oi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=li.clone(e.uniforms),this.material=new mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Vo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ou extends Oi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class lT extends Oi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hT{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ae);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ff(Of),this.copyPass.material.blending=Vn,this.clock=new k_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ou!==void 0&&(o instanceof Ou?n=!0:o instanceof lT&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class uT extends Oi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _e}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const dT={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ws extends Oi{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new _e(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(r,o,{type:mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Jt(r,o,{type:mn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Jt(r,o,{type:mn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=dT;this.highPassUniforms=li.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ae(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Of;this.copyUniforms=li.clone(h.uniforms),this.blendMaterial=new mt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Xa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new _e,this.oldClearAlpha=1,this.basic=new Wt,this.fsQuad=new Vo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=ws.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ws.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new mt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ws.BlurDirectionX=new ae(1,0);ws.BlurDirectionY=new ae(0,1);const fT={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class pT extends Oi{constructor(){super();const e=fT;this.uniforms=li.clone(e.uniforms),this.material=new S_({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Vo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},qe.getTransfer(this._outputColorSpace)===it&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Kc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ju&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const oo={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new ae(1/1024,1/512)}},vertexShader:`

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

		}`},ao={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new ae(1/1024,1/512)}},vertexShader:`

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

		}`},Ga={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new ae(1/1024,1/512)}},vertexShader:`

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

		}`};class mT extends Oi{constructor(e,t){super(),this.edgesRT=new Jt(e,t,{depthBuffer:!1,type:mn}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new Jt(e,t,{depthBuffer:!1,type:mn}),this.weightsRT.texture.name="SMAAPass.weights";const n=this,s=new Image;s.src=this.getAreaTexture(),s.onload=function(){n.areaTexture.needsUpdate=!0},this.areaTexture=new gt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=s,this.areaTexture.minFilter=Gt,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const r=new Image;r.src=this.getSearchTexture(),r.onload=function(){n.searchTexture.needsUpdate=!0},this.searchTexture=new gt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=r,this.searchTexture.magFilter=wt,this.searchTexture.minFilter=wt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=li.clone(oo.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new mt({defines:Object.assign({},oo.defines),uniforms:this.uniformsEdges,vertexShader:oo.vertexShader,fragmentShader:oo.fragmentShader}),this.uniformsWeights=li.clone(ao.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new mt({defines:Object.assign({},ao.defines),uniforms:this.uniformsWeights,vertexShader:ao.vertexShader,fragmentShader:ao.fragmentShader}),this.uniformsBlend=li.clone(Ga.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new mt({uniforms:this.uniformsBlend,vertexShader:Ga.vertexShader,fragmentShader:Ga.fragmentShader}),this.fsQuad=new Vo(null)}render(e,t,n){this.uniformsEdges.tDiffuse.value=n.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=n.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const gT={uniforms:{tDiffuse:{value:null},uLift:{value:new L(.02,.03,.05)},uGain:{value:new L(1.06,.98,.9)},uSat:{value:1.14},uVignette:{value:.28},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec3 uLift;
    uniform vec3 uGain;
    uniform float uSat;
    uniform float uVignette;
    uniform float uTime;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      c.rgb = c.rgb * uGain + uLift;
      float g = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      c.rgb = mix(vec3(g), c.rgb, uSat);
      float d = distance(vUv, vec2(0.5));
      c.rgb *= 1.0 - smoothstep(0.35, 0.95, d) * uVignette;
      float grain = fract(sin(dot(vUv * vec2(1245.0, 891.0) + uTime, vec2(12.9898, 78.233))) * 43758.5453);
      c.rgb += (grain - 0.5) * 0.018;
      gl_FragColor = c;
    }
  `};class vT{renderer;composer;scene=new e_;camera=new Ut(52,1,.12,1400);grade;constructor(e,t){if(this.renderer=new $x({canvas:e,antialias:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(t.pixelRatio),this.renderer.setSize(innerWidth,innerHeight),this.renderer.outputColorSpace=xt,this.renderer.toneMapping=Kc,this.renderer.toneMappingExposure=1.18,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Vu,this.scene.fog=new cl(15904890,90,320),this.scene.background=new _e(2364474),this.composer=new hT(this.renderer),this.composer.addPass(new uT(this.scene,this.camera)),t.bloom){const n=new ws(new ae(innerWidth,innerHeight),.22,.55,.88);this.composer.addPass(n)}this.grade=new Ff(gT),this.composer.addPass(this.grade),this.composer.addPass(new pT),t.smaa&&this.composer.addPass(new mT(innerWidth,innerHeight)),addEventListener("resize",()=>this.resize()),this.resize()}resize(){const e=innerWidth,t=innerHeight;this.camera.aspect=e/Math.max(t,1),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t)}render(e){this.grade.uniforms.uTime.value=e,this.composer.render()}}class xT{boot=document.getElementById("boot");hud=document.getElementById("hud");peerCount=document.getElementById("peer-count");status=document.getElementById("compute-status");meter=document.getElementById("compute-meter");list=document.getElementById("worker-list");toast=document.getElementById("letter-toast");prompt=document.getElementById("prompt");fps=document.getElementById("fps");donateBtn=document.getElementById("donate-btn");frames=0;lastFps=performance.now();onEnter=()=>{};onDonateToggle=()=>{};onWave=()=>{};onChat=()=>{};log=document.getElementById("chat-log");constructor(){const e=document.getElementById("join-form"),t=document.getElementById("name-input"),n=document.getElementById("donate-input");t.value=localStorage.getItem("tidelight-name")??"",n.checked=localStorage.getItem("tidelight-donate")!=="0",e.addEventListener("submit",o=>{o.preventDefault(),localStorage.setItem("tidelight-name",t.value),localStorage.setItem("tidelight-donate",n.checked?"1":"0"),this.onEnter(t.value||"courier",n.checked)}),document.getElementById("wave-btn").addEventListener("click",()=>this.onWave()),this.donateBtn.addEventListener("click",()=>this.onDonateToggle());const s=document.getElementById("chat-form"),r=document.getElementById("chat-input");s?.addEventListener("submit",o=>{o.preventDefault(),r?.value.trim()&&(this.onChat(r.value),r.value="")})}hideBoot(){this.boot.classList.add("is-gone"),this.hud.classList.remove("hidden")}pushChat(e,t){const n=document.createElement("li");for(n.innerHTML=`<b>${Wa(e)}</b>${Wa(t)}`,this.log.appendChild(n);this.log.children.length>24;)this.log.firstElementChild?.remove();this.log.scrollTop=this.log.scrollHeight}setPrompt(e){if(!e){this.prompt.classList.add("hidden");return}this.prompt.textContent=e,this.prompt.classList.remove("hidden")}toastMsg(e){this.toast.textContent=e,this.toast.classList.remove("hidden"),window.setTimeout(()=>this.toast.classList.add("hidden"),2800)}sync(e,t,n,s){const r=e.peers.filter(o=>o.donate).length;this.peerCount.textContent=String(Math.max(1,e.peers.length)),this.status.textContent=n?`${r} machine${r===1?"":"s"} lighting distant islets`:t?"donating light to this harbor":"watching — compute off",this.meter.style.width=`${Math.min(100,12+r*14+s*4)}%`,this.list.innerHTML=e.peers.map(o=>`<li><span>${Wa(o.name)}</span><span>${o.donate?"islet "+(o.islandSlot+1):"looking"}</span></li>`).join(""),this.donateBtn.textContent=t?"compute on":"compute off"}markFps(){this.frames++;const e=performance.now();if(e-this.lastFps>500){const t=Math.round(this.frames*1e3/(e-this.lastFps));this.fps.textContent=`${t} fps`,this.frames=0,this.lastFps=e}}}function Wa(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}class _T{sun;fill;hemi;lighthouse;group=new ut;constructor(e){this.hemi=new N_(16763040,6981816,1.15),this.sun=new Oc(16769200,2.15),this.sun.position.set(48,22,36),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(e.shadowMap,e.shadowMap),this.sun.shadow.camera.near=4,this.sun.shadow.camera.far=180,this.sun.shadow.camera.left=-70,this.sun.shadow.camera.right=70,this.sun.shadow.camera.top=70,this.sun.shadow.camera.bottom=-70,this.sun.shadow.bias=-25e-5,this.sun.shadow.normalBias=.04,this.fill=new Oc(6987976,.28),this.fill.position.set(-40,18,-20),this.lighthouse=new Hd(16770736,18,160,.18,.45,1.1),this.lighthouse.position.set(8,18.5,-18),this.lighthouse.castShadow=!1;const t=new ct;t.position.set(40,2,10),this.lighthouse.target=t,this.group.add(this.hemi,this.sun,this.sun.target,this.fill,this.lighthouse,t)}update(e){const t=e*.22;this.lighthouse.target.position.set(Math.cos(t)*70,1.5,Math.sin(t)*70-18),this.lighthouse.target.updateMatrixWorld()}}function yT(){const i=[{x:64,z:-22,radius:13,seed:11},{x:-46,z:-6,radius:18,seed:14.2}];for(let e=2;e<fr;e++){const t=e/fr*Math.PI*2-Math.PI*.35,n=78+e%3*10;i.push({x:Math.cos(t)*n,z:Math.sin(t)*n,radius:ny+e%4*2,seed:11+e*3.17})}return i}function MT(i){const e=(t,n)=>(t.wrapS=t.wrapT=Ri,t.repeat.set(n,n),t.colorSpace=xt,t.anisotropy=8,t);return{sand:e(i.load("/textures/sand.jpg"),1),grass:e(i.load("/textures/grass.jpg"),1),rock:e(i.load("/textures/rock.jpg"),1),wood:e(i.load("/textures/wood.jpg"),1),plaster:e(i.load("/textures/plaster.jpg"),1),foam:e(i.load("/textures/foam.jpg"),1)}}function Tn(i,e=16777215){return new bt({map:i,color:e})}function Co(i,e=15914934){return new Es({map:i,color:e,roughness:.9,metalness:0})}function Yn(i,e=.72,t=.38){return new Es({color:i,metalness:e,roughness:t})}function Bf(i){return new yn({color:i,roughness:.08,metalness:0,transmission:.55,transparent:!0,opacity:.85,emissive:i,emissiveIntensity:.55})}class ST{gulls;spray;gullPos;sprayPos;gullVel;constructor(e){this.gullPos=new Float32Array(e.particles*3),this.gullVel=new Float32Array(e.particles*3);for(let s=0;s<e.particles;s++)this.gullPos[s*3]=(Math.random()-.5)*180,this.gullPos[s*3+1]=8+Math.random()*18,this.gullPos[s*3+2]=(Math.random()-.5)*180,this.gullVel[s*3]=(Math.random()-.5)*4,this.gullVel[s*3+2]=(Math.random()-.5)*4;const t=new Tt;t.setAttribute("position",new At(this.gullPos,3)),this.gulls=new Nc(t,new bo({color:16183268,size:.12,sizeAttenuation:!0,transparent:!0,opacity:.35})),this.sprayPos=new Float32Array(480);const n=new Tt;n.setAttribute("position",new At(this.sprayPos,3)),this.spray=new Nc(n,new bo({color:14086382,size:.18,transparent:!0,opacity:.55}))}applyFlock(e){const t=Math.min(e.length,this.gullPos.length);for(let n=0;n<t;n++)this.gullPos[n]=e[n];this.gulls.geometry.getAttribute("position").needsUpdate=!0}update(e,t){const n=this.gullPos.length/3,s=1+t*1.4;for(let r=0;r<n;r++){const o=r*3;this.gullPos[o]+=this.gullVel[o]*.016*s,this.gullPos[o+2]+=this.gullVel[o+2]*.016*s,this.gullPos[o+1]=10+Math.sin(e*.7+r)*2.4,Math.hypot(this.gullPos[o],this.gullPos[o+2])>140&&(this.gullVel[o]*=-1,this.gullVel[o+2]*=-1)}this.gulls.geometry.getAttribute("position").needsUpdate=!0;for(let r=0;r<160;r++){const o=r/160*Math.PI*2,a=58+Math.sin(e*1.4+r)*1.5;this.sprayPos[r*3]=Math.cos(o)*a,this.sprayPos[r*3+1]=.2+Math.abs(Math.sin(e*2+r))*.5,this.sprayPos[r*3+2]=Math.sin(o)*a}this.spray.geometry.getAttribute("position").needsUpdate=!0}}function Is(i){i.traverse(e=>{const t=e;t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)})}function It(i,e,t,n,s=0,r=0,o=0){const a=new Ee(new kt(i,e,t),n);return a.position.set(s,r,o),a}function TT(i,e){const t=new ut,n=Co(i,16247508),s=Co(i,13715510),r=Yn(2761760,.2,.7);t.add(new Ee(new Lt(2.4,3.1,14,16),n));const o=new Ee(new Lt(2.55,2.7,1.2,16),s);o.position.y=2.2,t.add(o);const a=o.clone();a.position.y=-2.4,t.add(a);const c=new Ee(new Lt(3.1,3.1,.35,16),r);c.position.y=7.2,t.add(c);const l=new Ee(new Lt(1.5,1.5,2.4,12,1,!0),Bf(16765562));l.position.y=8.6,t.add(l);const h=new Ee(new Wn(.55,12,10),new Wt({color:16770728}));h.position.y=8.6,t.add(h);const u=new Ee(new Uo(2.1,1.8,12),Yn(3811874,.15,.55));u.position.y=10.4,t.add(u);const d=It(.9,2.1,.12,Tn(e,7029286),0,-5.8,2.55);return t.add(d),t.position.set(8,7.2,-18),Is(t),t}function bT(i,e){const t=new ut,n=Co(i,16051680),s=Tn(e,13715510);t.add(It(14,6.2,9,n,0,3.1,0));const r=new Ee(new kt(15.2,.35,10.2),s);r.position.set(0,6.5,0),r.rotation.z=.04,t.add(r),t.add(It(2.2,3.4,.16,Tn(e,4860956),-4.2,1.7,4.56));for(const o of[-5,-1.5,2,5.4]){const a=It(1.4,1.5,.08,Bf(16763256),o,4.2,4.52);t.add(a)}return t.position.set(22,0,8),Is(t),t}function wT(i){const e=new ut,t=Yn(12868666,.55,.42),n=Yn(2828068,.4,.5);e.add(It(1.4,16,1.4,t,0,8,0));const s=It(22,.7,1.1,t,6,15.4,0);e.add(s),e.add(It(3.2,2.2,2.4,n,-6.5,15.2,0));const r=new Ee(new Lt(.08,.08,6,6),n);r.position.set(14,12,0),e.add(r);const o=It(1.6,1.2,1.6,Tn(i,11565626),14,8.6,0);return e.add(o),e.position.set(-26,0,6),Is(e),e}function AT(i){const e=new ut,t=Tn(i,12886650),n=Tn(i,5913124);e.add(It(8,.28,28,t,0,.7,18)),e.add(It(18,.28,7,t,5,.7,8));for(let r=0;r<7;r++){const o=8+r*4;for(const a of[-3.6,3.6]){const c=new Ee(new Lt(.22,.28,2.4,8),n);c.position.set(a,-.3,o),e.add(c)}}const s=Yn(3024932,.25,.6);for(let r=0;r<8;r++){const o=6+r*3.4;e.add(It(.1,.85,.1,s,-3.85,1.15,o)),e.add(It(.1,.85,.1,s,3.85,1.15,o))}return e.position.set(0,0,22),Is(e),e}function Fu(i,e){const t=new ut,n=new Ee(new ml(.9,3.6,6,10),Tn(i,e));n.rotation.z=Math.PI/2,n.scale.set(1,.55,1.15),t.add(n),t.add(It(1.4,.7,1.6,Tn(i,15258288),0,.55,0));const s=new Ee(new Lt(.05,.07,2.6,6),Tn(i,5913124));s.position.y=1.6,t.add(s);const r=It(.04,1.6,1.3,new Es({color:16050904,roughness:.9}),.05,1.7,.15);return t.add(r),Is(t),t}function ET(i,e){const t=new ut,n=Tn(i,11895626),s=Co(e,9063210),r=[[6,.55,26,.2],[7.4,.55,27.2,-.4],[18,.7,12,.5],[16.6,.7,13,-.2],[-8,.55,20,.1],[10,.9,10,0]];for(const[o,a,c,l]of r){const h=It(1.15,1.1,1.15,n,o,a,c);h.rotation.y=l,t.add(h)}for(const[o,a]of[[4.5,24],[19,10.5],[-6,18]]){const c=new Ee(new Lt(.45,.48,1.15,10),s);c.position.set(o,.7,a),t.add(c)}return Is(t),t}function Bu(i){const e=new ut,t=new Ee(new Lt(.06,.08,2.6,8),Yn(2761760,.3,.55));t.position.y=1.3,e.add(t);const n=new Ee(new Wn(.18,10,8),new Wt({color:i}));n.position.y=2.55,e.add(n);const s=new Vd(i,2.2,14,1.6);return s.position.y=2.55,e.add(s),e}function RT(i){const e=new ut,t=new Ee(new Lt(.05,.06,2.4,8),Yn(16050904,.1,.7));t.position.y=1.2,e.add(t);const n=new Ee(new Uo(1.5,.45,10,1,!0),new bt({color:i,side:Ot}));return n.position.y=2.35,e.add(n),e}function ku(){const i=new ut,e=It(.7,.55,.45,Yn(12868666,.35,.45),0,1.15,0);i.add(e);const t=new Ee(new Lt(.06,.07,.9,8),Yn(2761760,.2,.6));return t.position.y=.45,i.add(t),i.userData.mailbox=!0,i}const wl=`
#define saturate(x) clamp((x), 0.0, 1.0)
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash12(i);
  float b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0));
  float d = hash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.07 + 13.1;
    a *= 0.5;
  }
  return v;
}
`,CT=`
varying vec3 vWorld;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
  gl_Position.z = gl_Position.w;
}
`,PT=`
precision highp float;
uniform float uTime;
uniform vec3 uSunDir;
uniform vec3 uHorizon;
uniform vec3 uZenith;
uniform vec3 uNadir;
uniform vec3 uSunColor;
varying vec3 vWorld;
${wl}

void main() {
  vec3 dir = normalize(vWorld);
  float h = dir.y;
  vec3 zenith = vec3(0.055, 0.04, 0.165);
  vec3 violet = vec3(0.29, 0.125, 0.47);
  vec3 rose = vec3(0.63, 0.19, 0.38);
  vec3 ember = vec3(0.88, 0.42, 0.22);
  vec3 peach = vec3(0.99, 0.82, 0.52);
  vec3 col = peach;
  col = mix(col, ember, smoothstep(-0.02, 0.08, h));
  col = mix(col, rose, smoothstep(0.08, 0.22, h));
  col = mix(col, violet, smoothstep(0.22, 0.48, h));
  col = mix(col, zenith, smoothstep(0.48, 0.85, h));
  col = mix(uNadir, col, smoothstep(-0.32, 0.02, h));

  float sun = pow(max(dot(dir, normalize(uSunDir)), 0.0), 64.0);
  float glow = pow(max(dot(dir, normalize(uSunDir)), 0.0), 5.0);
  col += uSunColor * (sun * 1.6 + glow * 0.42);

  float stars = step(0.992, noise(dir.xz * 80.0 + dir.y * 40.0));
  col += vec3(0.85, 0.9, 1.0) * stars * smoothstep(0.15, 0.55, h) * 0.55;

  vec2 cuv = dir.xz / max(dir.y + 0.15, 0.08);
  float clouds = fbm(cuv * 1.6 + vec2(uTime * 0.012, 0.0));
  clouds = smoothstep(0.48, 0.78, clouds) * smoothstep(0.02, 0.35, h);
  col = mix(col, vec3(1.0, 0.82, 0.72) * 0.95, clouds * 0.45);

  gl_FragColor = vec4(col, 1.0);
}
`;class LT{mesh;sunDir=new L(.62,.18,.42).normalize();sunColor=new _e(1,.62,.32);mat;constructor(){this.mat=new mt({vertexShader:CT,fragmentShader:PT,side:Bt,depthWrite:!1,uniforms:{uTime:{value:0},uSunDir:{value:this.sunDir.clone()},uHorizon:{value:new _e(.99,.88,.63)},uZenith:{value:new _e(.09,.06,.22)},uNadir:{value:new _e(.18,.28,.36)},uSunColor:{value:this.sunColor.clone()}}}),this.mesh=new Ee(new Wn(900,48,32),this.mat),this.mesh.frustumCulled=!1}update(e){this.mat.uniforms.uTime.value=e}}const IT=`
varying vec3 vWorld;
varying vec3 vNormal;
varying vec2 vUv;
void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,DT=`
precision highp float;
uniform sampler2D uSand;
uniform sampler2D uGrass;
uniform sampler2D uRock;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uHemiSky;
uniform vec3 uHemiGnd;
varying vec3 vWorld;
varying vec3 vNormal;
varying vec2 vUv;
${wl}

void main() {
  vec3 n = normalize(vNormal);
  float slope = 1.0 - saturate(n.y);
  float h = vWorld.y;
  float sandW = saturate(1.0 - h * 0.55) * (1.0 - slope * 1.4);
  float grassW = saturate(h * 0.38 - 0.15) * (1.0 - slope * 2.0);
  float rockW = saturate(slope * 2.2 + step(4.8, h) * 0.6);
  float sum = max(sandW + grassW + rockW, 0.0001);
  sandW /= sum; grassW /= sum; rockW /= sum;

  vec2 uv = vWorld.xz * 0.08;
  vec3 sandTex = texture2D(uSand, uv).rgb;
  vec3 grassTex = texture2D(uGrass, uv * 0.85).rgb;
  vec3 rockTex = texture2D(uRock, uv * 0.45).rgb;
  vec3 sandCol = vec3(0.95, 0.78, 0.46) * mix(0.82, 1.08, sandTex.r);
  vec3 grassCol = vec3(0.55, 0.72, 0.38) * mix(0.85, 1.1, grassTex.g);
  vec3 rockCol = vec3(0.62, 0.56, 0.58) * mix(0.75, 1.05, rockTex.r);
  vec3 albedo = sandCol * sandW + grassCol * grassW + rockCol * rockW;

  float wet = saturate(0.85 - h * 2.1) * (1.0 - slope);
  albedo *= mix(1.0, 0.52, wet);
  albedo = mix(albedo, vec3(0.55, 0.42, 0.28), wet * 0.45);
  float foam = saturate(1.0 - abs(h - 0.08) * 7.0) * (1.0 - slope);
  albedo = mix(albedo, vec3(0.95, 0.97, 0.96), foam * 0.85);

  float ndl = saturate(dot(n, normalize(uSunDir)));
  vec3 hemi = mix(uHemiGnd, uHemiSky, n.y * 0.5 + 0.5);
  vec3 light = hemi * 0.55 + uSunColor * ndl * 0.9;
  float wrap = saturate(dot(n, normalize(uSunDir + vec3(0.0, 0.35, 0.0))) * 0.5 + 0.5);
  light += vec3(1.0, 0.45, 0.22) * wrap * 0.08;

  float ao = mix(0.65, 1.0, saturate(h * 0.2 + n.y));
  vec3 col = albedo * light * ao;
  col += vec3(0.55, 0.75, 0.7) * pow(1.0 - saturate(dot(n, vec3(0.0, 1.0, 0.0))), 3.0) * 0.04;

  gl_FragColor = vec4(col, 1.0);
}
`;function zu(i,e,t,n,s,r){const o=new Di(n*2.4,n*2.4,i,i);o.rotateX(-Math.PI/2);const a=o.attributes.position;for(let c=0;c<a.count;c++){const l=a.getX(c)+e,h=a.getZ(c)+t,u=r?Ho(l,h):Ro(l,h,e,t,n,s);a.setY(c,u),a.setX(c,l),a.setZ(c,h)}return o.computeVertexNormals(),o}class NT{group=new ut;main;satellites=[];mat;constructor(e,t,n){this.mat=new mt({vertexShader:IT,fragmentShader:DT,uniforms:{uSand:{value:t.sand},uGrass:{value:t.grass},uRock:{value:t.rock},uSunDir:{value:new L(.62,.18,.42)},uSunColor:{value:new _e(1,.62,.32)},uHemiSky:{value:new _e(.55,.48,.72)},uHemiGnd:{value:new _e(.28,.16,.1)}}});const s=e.terrainSeg;this.main=new Ee(zu(s,0,0,40,3.1,!0),this.mat),this.main.receiveShadow=!0,this.main.castShadow=!0,this.group.add(this.main);const r=Math.max(24,Math.floor(e.terrainSeg*.28));for(const o of n){const a=new Ee(zu(r,o.x,o.z,o.radius,o.seed,!1),this.mat);a.receiveShadow=!0,a.castShadow=!0,a.position.y=-8,this.satellites.push(a),this.group.add(a)}}setSatelliteRise(e,t){const n=this.satellites[e];n&&(n.position.y=hr.lerp(-6.5,.35,t),n.visible=t>.02)}}function UT(i,e,t,n){const s=Math.sin(i*17.13+e*43.77+t*.31+n*.19)*43758.5453;return s-Math.floor(s)}class OT{group=new ut;constructor(e){this.group.add(this.trees())}trees(){const e=new ut,t=new Lt(.12,.21,2.2,8),n=new Wn(1,10,8),s=new bt({color:9132587}),o=[2984526,15239786,15779914,8308810,1731383,6207656].map(c=>new bt({color:c}));return[[12,-8],[16,-14],[4,-26],[-10,-16],[-18,-6],[28,-4],[-22,16],[14,18],[-14,8],[32,12],[-4,-22],[20,-22],[24,2],[-8,-28],[18,-6],[8,14],[-6,16],[18,8],[-16,20],[10,22],[22,-10],[-20,4],[6,-12],[-12,-8],[26,16]].forEach(([c,l],h)=>{const u=Ho(c,l);if(u<.4)return;const d=x=>UT(h,x,c,l),f=new ut,g=new Ee(t,s);g.position.y=1.1,g.scale.set(.88+d(1)*.28,.92+d(2)*.22,.88+d(1)*.28),f.add(g);const v=o[h%o.length],m=d(3)<.38?2:3,p=d(4)*Math.PI*2;for(let x=0;x<m;x++){const M=new Ee(n,v),_=(x===0?1.08:.66)+d(5+x)*.26;M.scale.set(_*(.92+d(8+x)*.16),_*(.76+d(11+x)*.2),_*(.94+d(14+x)*.14));const C=x===0?.16:.6,w=p+x*2.15+d(17+x)*.45;M.position.set(Math.cos(w)*C,2.18+(x===0?.3:x===1?.04:.4)+d(20+x)*.14,Math.sin(w)*C*.86),f.add(M)}f.position.set(c,u,l),f.rotation.x=(d(24)-.5)*.2,f.rotation.y=d(25)*Math.PI*2,f.rotation.z=(d(26)-.5)*.2,f.scale.setScalar(.84+d(27)*.4),f.traverse(x=>{const M=x;M.isMesh&&(M.castShadow=!0,M.receiveShadow=!0)}),e.add(f)}),e}}const FT=`
varying vec3 vWorld;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,BT=`
precision highp float;
uniform float uTime;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec3 uHorizon;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uCam;
varying vec3 vWorld;
${wl}

void main() {
  vec2 uv = vWorld.xz;

  // Two scrolling graphic noise fields — not a Gerstner grid
  float n1 = fbm(uv * 0.040 + vec2(uTime * 0.033, uTime * 0.006));
  float n2 = fbm(uv * 0.104 + vec2(-uTime * 0.026, uTime * 0.019));

  float dist = length(uv);
  float far = smoothstep(50.0, 200.0, dist);

  // Saturated mint/teal lagoon near, deeper teal far
  float depthMix = saturate(far * 0.92 + (n1 - 0.5) * 0.16);
  vec3 water = mix(uShallow, uDeep, depthMix);
  water = mix(water, uHorizon, far * 0.07);

  // Graphic veins / troughs from the two scrolls
  float veins = smoothstep(0.34, 0.62, n1);
  float troughs = smoothstep(0.56, 0.80, n2);
  water = mix(water, uShallow * vec3(0.78, 1.14, 1.08), veins * (1.0 - far) * 0.32);
  water = mix(water, uDeep * vec3(0.62, 0.96, 1.08), troughs * 0.20);

  // Smoothstep foam spots
  float spots = smoothstep(0.70, 0.86, n2) * (1.0 - far);

  // Contact foam on the main island shore (~36–44)
  float shore = smoothstep(36.0, 38.0, dist) * (1.0 - smoothstep(42.0, 44.0, dist));
  shore *= mix(0.38, 1.0, n1);

  vec3 foamCol = vec3(0.84, 0.99, 0.96);
  water = mix(water, foamCol, saturate(spots * 0.52 + shore));

  vec3 view = normalize(uCam - vWorld);
  vec3 nrm = normalize(vec3((n1 - 0.5) * 0.22, 1.0, (n2 - 0.5) * 0.22));

  // Soft fresnel — keep near water teal, peach only far
  float fres = pow(1.0 - saturate(dot(nrm, view)), 3.8);
  water = mix(water, mix(uShallow, uHorizon, far * 0.38), fres * 0.13);

  // Restrained sun spec
  float spec = pow(saturate(dot(nrm, normalize(view + normalize(uSunDir)))), 128.0);
  water += uSunColor * spec * 0.18;

  // Sparkle
  float sparkle = step(0.91, noise(uv * 2.05 + uTime * 0.17)) * (1.0 - far);
  water += foamCol * sparkle * 0.20;

  gl_FragColor = vec4(water, mix(0.94, 0.995, far));
}
`;class kT{mesh;mat;constructor(e,t,n){this.mat=new mt({vertexShader:FT,fragmentShader:BT,transparent:!0,uniforms:{uTime:{value:0},uDeep:{value:new _e(0,.33,.48)},uShallow:{value:new _e(.05,.98,.86)},uHorizon:{value:new _e(1,.74,.46)},uSunDir:{value:new L(.62,.18,.42)},uSunColor:{value:new _e(1,.72,.4)},uCam:{value:n.position}}});const s=new Di(620,620,Math.min(e.waterSeg,48),Math.min(e.waterSeg,48));s.rotateX(-Math.PI/2),this.mesh=new Ee(s,this.mat),this.mesh.position.y=0,this.mesh.renderOrder=1}update(e){this.mat.uniforms.uTime.value=e}}class zT{group=new ut;slots;terrain;water;sky;lighting;particles;boats=[];mailboxes=[];lanterns=[];textures;constructor(e,t){const n=new zd;this.textures=MT(n),this.slots=yT(),this.sky=new LT,this.lighting=new _T(e),this.terrain=new NT(e,this.textures,this.slots),this.water=new kT(e,this.textures.foam,t),this.particles=new ST(e);const s=new OT(e);this.group.add(this.sky.mesh),this.group.add(this.lighting.group),this.group.add(this.terrain.group),this.group.add(this.water.mesh);const r=new Ee(new sr(36,43,80),new Wt({color:16056316,transparent:!0,opacity:.72,side:Ot}));r.rotation.x=-Math.PI/2,r.position.y=.04,this.group.add(r);const o=new Ee(new Di(10,32),new Wt({color:16056316,transparent:!0,opacity:.35,side:Ot}));o.rotation.x=-Math.PI/2,o.position.set(0,.03,28),this.group.add(o);const a=Fu(this.textures.wood,15254394);a.position.set(14,.28,70),a.rotation.y=-.55,this.group.add(a),this.group.add(s.group),this.group.add(this.particles.gulls,this.particles.spray),this.group.add(TT(this.textures.plaster,this.textures.wood)),this.group.add(bT(this.textures.plaster,this.textures.wood)),this.group.add(wT(this.textures.wood)),this.group.add(AT(this.textures.wood)),this.group.add(ET(this.textures.wood,this.textures.plaster));const c=[[8,.2,34,13715510],[11,.25,36,16050904],[14,.2,33,4834742],[-7,.25,30,15254394],[16,.2,28,12868666]];for(const[f,g,v,m]of c){const p=RT(m);p.position.set(f,g,v),this.group.add(p)}const l=new Ee(new kt(3.4,.08,22),new bt({color:15254634}));l.position.set(0,.72,22),this.group.add(l);const h=new Ee(new kt(1.6,.12,.45),new bt({color:12886650}));h.position.set(-5.2,.85,24),this.group.add(h);const u=ku();u.position.set(3.2,.7,26),this.mailboxes.push(u),this.group.add(u);const d=[[-3.6,.7,30],[3.6,.7,34],[18,.2,4],[-12,.4,10],[8,.2,-10]];for(const[f,g,v]of d){const m=Bu(16757575);m.position.set(f,g,v),this.lanterns.push(m),this.group.add(m)}this.slots.forEach((f,g)=>{const v=new Ee(new sr(f.radius*.7,f.radius*.82,32),new Wt({color:16050904,transparent:!0,opacity:.18,side:Ot}));v.rotation.x=-Math.PI/2,v.position.set(f.x,.06,f.z),this.group.add(v);const m=Fu(this.textures.wood,[12868666,15255968,4025210,13935180][g%4]);m.position.set(f.x+f.radius*.7,.25,f.z),m.visible=!1,this.boats.push(m),this.group.add(m);const p=ku();p.position.set(f.x,.6,f.z),p.visible=!1,this.mailboxes.push(p),this.group.add(p);const x=new ut,M=new Ee(new Lt(.18,.26,3.2,6),new bt({color:7229220}));M.position.y=1.6;const _=new Ee(new Wn(1.4,8,6),new bt({color:15239786}));_.position.y=3.3;const C=new Ee(new Wn(1,8,6),new bt({color:15779914}));C.position.set(1.6,2.6,.4);const w=Bu(16757575);w.position.set(-1.4,.2,.8);const P=new Ee(new Wn(1.15,8,6),new bt({color:8308810}));P.position.set(-2.1,2.8,-.6);const R=new Ee(new kt(1.2,.12,3.2),new bt({color:12886650}));R.position.set(2.4,.55,3.2),x.add(M,_,C,P,w,R);const b=new Ee(new sr(f.radius*.85,f.radius*1.05,24),new Wt({color:16056316,transparent:!0,opacity:.55,side:Ot}));b.rotation.x=-Math.PI/2,b.position.y=.08,x.add(b),x.position.set(f.x,-8,f.z),x.visible=!1,x.userData.slotTree=!0,this.group.add(x),this.boats[g].userData.tree=x})}applyIslands(e){for(const t of e){this.terrain.setSatelliteRise(t.slot,t.rise);const n=this.boats[t.slot],s=this.mailboxes[t.slot+1];if(n){n.visible=t.rise>.12,n.position.y=.18+Math.min(t.rise,1)*.12,n.position.x=this.slots[t.slot].x+this.slots[t.slot].radius*.85,n.position.z=this.slots[t.slot].z;const r=n.userData.tree;r&&(r.visible=t.rise>.35,r.position.y=hr.lerp(-6,.4,t.rise))}s&&(s.visible=t.rise>.55,s.position.y=hr.lerp(-2,.6,t.rise))}}update(e,t){this.sky.update(e),this.water.update(e),this.lighting.update(e),this.particles.update(e,t),this.boats.forEach((n,s)=>{n.visible&&(n.rotation.y=Math.sin(e*.3+s)*.08,n.position.y+=Math.sin(e*1.4+s)*.002)})}}class HT{constructor(e){this.canvas=e,addEventListener("keydown",t=>{const n=t.target;n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA")||(this.keys.add(t.code),t.code==="KeyE"&&(this.interact=!0),t.code==="KeyG"&&(this.wave=!0),["Space","KeyW","KeyA","KeyS","KeyD"].includes(t.code)&&t.preventDefault())}),addEventListener("keyup",t=>this.keys.delete(t.code)),this.canvas.addEventListener("click",()=>{this.locked||this.canvas.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas}),addEventListener("mousemove",t=>{this.locked&&(this.mx+=t.movementX,this.my+=t.movementY)})}keys=new Set;mx=0;my=0;locked=!1;interact=!1;wave=!1;axis(){const e=(this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0),t=(this.keys.has("KeyS")?1:0)-(this.keys.has("KeyW")?1:0);return{x:e,z:t,sprint:this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),jump:this.keys.has("Space")}}consumeLook(){const e={x:this.mx,y:this.my};return this.mx=0,this.my=0,e}consumeInteract(){const e=this.interact;return this.interact=!1,e}consumeWave(){const e=this.wave;return this.wave=!1,e}}function VT(i){const t=matchMedia("(max-width: 800px), (pointer: coarse)").matches?"low":"high";return t==="low"?{preset:"low",pixelRatio:Math.min(devicePixelRatio,1.25),shadowMap:1024,waterSeg:80,terrainSeg:96,grass:400,bloom:!0,smaa:!1,particles:80}:t==="med"?{preset:"med",pixelRatio:Math.min(devicePixelRatio,1.5),shadowMap:2048,waterSeg:140,terrainSeg:160,grass:900,bloom:!0,smaa:!0,particles:160}:{preset:"high",pixelRatio:Math.min(devicePixelRatio,2),shadowMap:2048,waterSeg:200,terrainSeg:220,grass:1600,bloom:!0,smaa:!0,particles:260}}const GT=[12868666,15254394,4029035,8031428,13925024,13935180];class WT{renderer;world;input;overlay=new xT;audio=new $_;room=null;donation=null;local=null;cam=null;avatars=new Map;letters=new Map;carrying=null;acc=0;last=performance.now();playing=!1;waving=!1;placed=!1;constructor(e){const t=VT();this.renderer=new vT(e,t),this.world=new zT(t,this.renderer.camera),this.renderer.scene.add(this.world.group),this.input=new HT(e),this.overlay.onEnter=(n,s)=>this.start(n,s),this.overlay.onDonateToggle=()=>this.toggleDonate(),this.overlay.onWave=()=>this.wave(),this.overlay.onChat=n=>this.say(n),this.loop()}start(e,t){this.playing||(this.playing=!0,this.audio.start(),this.overlay.hideBoot(),this.room=new lS(e,t),this.room.onToast=n=>this.overlay.toastMsg(n),this.room.onChat=n=>{this.overlay.pushChat(n.name,n.text),this.avatars.get(n.from)?.say(n.text)},this.donation=new ey(t),this.local=new rT(this.world.slots),this.cam=new tT(this.renderer.camera),this.room.hello(),addEventListener("beforeunload",()=>this.room?.leave()))}toggleDonate(){!this.room||!this.donation||(this.room.donate=!this.room.donate,this.donation.setEnabled(this.room.donate),localStorage.setItem("tidelight-donate",this.room.donate?"1":"0"))}say(e){this.room?.chat(e),this.audio.blip("wave")}wave(){this.waving=!0,this.room?.wave(),this.audio.blip("wave"),window.setTimeout(()=>{this.waving=!1},700)}loop=()=>{requestAnimationFrame(this.loop);const e=performance.now(),t=Math.min(.05,(e-this.last)/1e3);this.last=e,this.world.update(e*.001,this.room?.snapshot.peers.filter(n=>n.donate).length??0),this.playing&&this.room&&this.local&&this.cam&&this.donation?this.tickPlay(t):this.idleCam(e*.001),this.renderer.render(e*.001),this.overlay.markFps()};idleCam(e){const t=this.renderer.camera;t.position.set(Math.sin(e*.06)*10,7.2,88+Math.cos(e*.06)*4),t.lookAt(4,3.2,18)}tickPlay(e){const t=this.room,n=this.local,s=this.cam,r=this.donation;if(!this.placed){const c=t.snapshot.peers.find(l=>l.id===t.id);c&&(n.position.set(c.x,Math.max(c.y,.9),c.z),this.placed=!0)}const o=this.input.consumeLook();s.update(e,n.position,o,this.input.locked),n.update(e,this.input,s.yaw,c=>t.snapshot.islands[c]?.rise??0),this.input.consumeWave()&&this.wave(),this.handleLetters();const a=this.selfPresence(n);for(this.syncAvatars(),this.syncLetterMeshes(),this.world.applyIslands(t.snapshot.islands),r.lastPoints&&this.world.particles.applyFlock(r.lastPoints),r.tick(performance.now()*.001,a.islandSlot),this.acc+=e;this.acc>=Ba;)this.acc-=Ba,t.publishSelf(a),t.tickHost(Ba,r.lastMs);this.overlay.sync(t.snapshot,t.donate,t.isHost,r.lastMs)}selfPresence(e){const t=this.room,n=t.snapshot.peers.find(s=>s.id===t.id);return{id:t.id,name:t.name,color:n?.color??GT[0],x:e.position.x,y:e.position.y,z:e.position.z,yaw:e.yaw,moving:e.moving,waving:this.waving,carrying:!!this.carrying,donate:t.donate,islandSlot:n?.islandSlot??0,lastSeen:performance.now(),skin:n?.skin??t.skin}}syncAvatars(){const e=this.room,t=new Set;for(const n of e.snapshot.peers){t.add(n.id);let s=this.avatars.get(n.id);s||(s=new JS(n.color,n.name,n.skin),this.avatars.set(n.id,s),this.renderer.scene.add(s.group)),n.id===e.id&&this.local?(s.group.position.copy(this.local.position),s.group.rotation.y=this.local.yaw,s.showTag(!1),s.pose(this.local.moving,1,this.waving,.016,!!this.carrying)):(s.showTag(!0),s.group.position.lerp(new L(n.x,n.y,n.z),.25),s.group.rotation.y=n.yaw,s.pose(n.moving,1,n.waving,.016,n.carrying))}for(const[n,s]of this.avatars)t.has(n)||(this.renderer.scene.remove(s.group),this.avatars.delete(n))}syncLetterMeshes(){const e=this.room,t=new Set;for(const n of e.snapshot.letters){t.add(n.id);let s=this.letters.get(n.id);if(!s){s=new Ee(new kt(.85,.12,.55),new bt({color:16248800}));const r=new Ee(new kt(.18,.03,.16),new bt({color:12868666}));r.position.set(.24,.08,-.12),s.add(r);const o=new Ee(new kt(.85,.02,.22),new bt({color:15260868}));o.position.set(0,.07,.16),s.add(o),s.castShadow=!0,this.letters.set(n.id,s),this.renderer.scene.add(s)}if(n.delivered){s.visible=!1;continue}if(s.visible=!0,n.carrierId===e.id&&this.local)s.position.copy(this.local.position).add(new L(.25,1.15,.2));else if(n.carrierId){const r=e.snapshot.peers.find(o=>o.id===n.carrierId);r&&s.position.set(r.x+.25,r.y+1.15,r.z+.2)}else s.position.set(n.x,n.y,n.z),s.rotation.y+=.01}for(const[n,s]of this.letters)t.has(n)||(this.renderer.scene.remove(s),this.letters.delete(n))}handleLetters(){const e=this.room,t=this.local;if(!this.input.consumeInteract()){this.overlay.setPrompt(this.nearPrompt(t.position));return}if(this.carrying){const s=this.world.slots[this.carrying.destSlot],r=s?new L(s.x,1,s.z):null,o=new L(3.2,1,32),a=r&&r.distanceTo(t.position)<4&&(e.snapshot.islands[this.carrying.destSlot]?.rise??0)>.5,c=o.distanceTo(t.position)<3;a||c?(this.carrying.delivered=!0,this.carrying.carrierId=null,e.publishLetter(this.carrying),this.overlay.toastMsg(a?"delivered across donated water":"returned to the dock"),this.audio.blip("drop"),this.carrying=null):(this.carrying.carrierId=null,this.carrying.x=t.position.x,this.carrying.y=Math.max(Ho(t.position.x,t.position.z),.4)+.4,this.carrying.z=t.position.z,e.publishLetter(this.carrying),this.carrying=null,this.audio.blip("drop"));return}const n=e.snapshot.letters.find(s=>!s.delivered&&!s.carrierId&&Math.hypot(s.x-t.position.x,s.z-t.position.z)<2.2);n&&(n.carrierId=e.id,this.carrying=n,e.publishLetter(n),this.overlay.toastMsg(`letter for islet ${n.destSlot+1}`),this.audio.blip("pick"))}nearPrompt(e){return this.carrying?"E  deliver or set down":this.room.snapshot.letters.some(s=>!s.delivered&&!s.carrierId&&Math.hypot(s.x-e.x,s.z-e.z)<2.2)?"E  take the letter":null}}const XT=document.getElementById("gl");new WT(XT);
