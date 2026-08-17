(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dl="170",jp=0,Ah=1,Zp=2,Bd=1,kd=2,Vn=3,xi=0,Yt=1,Lt=2,Yn=0,Rs=1,jo=2,Rh=3,Ph=4,Kp=5,Ii=100,Jp=101,Qp=102,$p=103,em=104,tm=200,nm=201,im=202,sm=203,Pc=204,Cc=205,rm=206,om=207,am=208,cm=209,lm=210,hm=211,um=212,dm=213,fm=214,Lc=0,Dc=1,Ic=2,Os=3,Uc=4,Nc=5,Oc=6,Fc=7,Hd=0,pm=1,mm=2,di=0,Gd=1,Vd=2,Wd=3,Il=4,gm=5,Xd=6,qd=7,Yd=300,Fs=301,zs=302,zc=303,Bc=304,oa=306,Zo=1e3,Oi=1001,kc=1002,jt=1003,vm=1004,$r=1005,qt=1006,wa=1007,Fi=1008,Zn=1009,jd=1010,Zd=1011,Ir=1012,Ul=1013,ki=1014,An=1015,wn=1016,Nl=1017,Ol=1018,Bs=1020,Kd=35902,Jd=1021,Qd=1022,un=1023,$d=1024,ef=1025,Ps=1026,ks=1027,aa=1028,Fl=1029,tf=1030,zl=1031,Bl=1033,Bo=33776,ko=33777,Ho=33778,Go=33779,Hc=35840,Gc=35841,Vc=35842,Wc=35843,Xc=36196,qc=37492,Yc=37496,jc=37808,Zc=37809,Kc=37810,Jc=37811,Qc=37812,$c=37813,el=37814,tl=37815,nl=37816,il=37817,sl=37818,rl=37819,ol=37820,al=37821,Vo=36492,cl=36494,ll=36495,nf=36283,hl=36284,ul=36285,dl=36286,xm=3200,ym=3201,kl=0,Mm=1,hi="",Wt="srgb",Ks="srgb-linear",ca="linear",ut="srgb",Qi=7680,Ch=519,_m=512,wm=513,Sm=514,sf=515,bm=516,Tm=517,Em=518,Am=519,fl=35044,Lh=35048,Dh="300 es",Xn=2e3,Ko=2001;class Js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ih=1234567;const Ar=Math.PI/180,Hs=180/Math.PI;function Rn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function Hl(i,e){return(i%e+e)%e}function Rm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Pm(i,e,t){return i!==e?(t-i)/(e-i):0}function Rr(i,e,t){return(1-t)*i+t*e}function Cm(i,e,t,n){return Rr(i,e,1-Math.exp(-t*n))}function Lm(i,e=1){return e-Math.abs(Hl(i,e*2)-e)}function Dm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Im(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Um(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Nm(i,e){return i+Math.random()*(e-i)}function Om(i){return i*(.5-Math.random())}function Fm(i){i!==void 0&&(Ih=i);let e=Ih+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zm(i){return i*Ar}function Bm(i){return i*Hs}function km(i){return(i&i-1)===0&&i!==0}function Hm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vm(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vt={DEG2RAD:Ar,RAD2DEG:Hs,generateUUID:Rn,clamp:Ct,euclideanModulo:Hl,mapLinear:Rm,inverseLerp:Pm,lerp:Rr,damp:Cm,pingpong:Lm,smoothstep:Dm,smootherstep:Im,randInt:Um,randFloat:Nm,randFloatSpread:Om,seededRandom:Fm,degToRad:zm,radToDeg:Bm,isPowerOfTwo:km,ceilPowerOfTwo:Hm,floorPowerOfTwo:Gm,setQuaternionFromProperEuler:Vm,normalize:dt,denormalize:_n};class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,s,r,o,a,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],v=s[0],g=s[3],p=s[6],M=s[1],y=s[4],x=s[7],R=s[2],b=s[5],C=s[8];return r[0]=o*v+a*M+c*R,r[3]=o*g+a*y+c*b,r[6]=o*p+a*x+c*C,r[1]=l*v+h*M+u*R,r[4]=l*g+h*y+u*b,r[7]=l*p+h*x+u*C,r[2]=f*v+d*M+m*R,r[5]=f*g+d*y+m*b,r[8]=f*p+d*x+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,m=t*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=f*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Sa.makeScale(e,t)),this}rotate(e){return this.premultiply(Sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new Ze;function rf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wm(){const i=Ur("canvas");return i.style.display="block",i}const Uh={};function br(i){i in Uh||(Uh[i]=!0,console.warn(i))}function Xm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function qm(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ym(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nt={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ut&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ut&&(i.r=Cs(i.r),i.g=Cs(i.g),i.b=Cs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hi?ca:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Nh=[.64,.33,.3,.6,.15,.06],Oh=[.2126,.7152,.0722],Fh=[.3127,.329],zh=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bh=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[Ks]:{primaries:Nh,whitePoint:Fh,transfer:ca,toXYZ:zh,fromXYZ:Bh,luminanceCoefficients:Oh,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:Nh,whitePoint:Fh,transfer:ut,toXYZ:zh,fromXYZ:Bh,luminanceCoefficients:Oh,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}});let $i;class jm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$i===void 0&&($i=Ur("canvas")),$i.width=e.width,$i.height=e.height;const n=$i.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zm=0;class of{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ba(s[o].image)):r.push(ba(s[o]))}else r=ba(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Km=0;class Dt extends Js{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=Oi,s=Oi,r=qt,o=Fi,a=un,c=Zn,l=Dt.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Rn(),this.name="",this.source=new of(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zo:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zo:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Yd;Dt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(d+1)/2,R=(p+1)/2,b=(h+f)/4,C=(u+v)/4,E=(m+g)/4;return y>x&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=b/n,r=C/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=E/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=E/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-v)/M,this.z=(f-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jm extends Js{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Dt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new of(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends Jm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class af extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qm extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],m=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=v;return}if(u!==v||c!==f||l!==d||h!==m){let g=1-a;const p=c*f+l*d+h*m+u*v,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const R=Math.sqrt(y),b=Math.atan2(R,p*M);g=Math.sin(g*b)/R,a=Math.sin(a*b)/R}const x=a*M;if(c=c*g+f*x,l=l*g+d*x,h=h*g+m*x,u=u*g+v*x,g===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+c*d-l*f,e[t+1]=c*m+h*f+l*u-a*d,e[t+2]=l*m+h*d+a*f-c*u,e[t+3]=h*m-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ta.copy(this).projectOnVector(e),this.sub(Ta)}reflect(e){return this.sub(Ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new D,kh=new fi;class Xi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),to.subVectors(this.max,sr),es.subVectors(e.a,sr),ts.subVectors(e.b,sr),ns.subVectors(e.c,sr),$n.subVectors(ts,es),ei.subVectors(ns,ts),wi.subVectors(es,ns);let t=[0,-$n.z,$n.y,0,-ei.z,ei.y,0,-wi.z,wi.y,$n.z,0,-$n.x,ei.z,0,-ei.x,wi.z,0,-wi.x,-$n.y,$n.x,0,-ei.y,ei.x,0,-wi.y,wi.x,0];return!Ea(t,es,ts,ns,to)||(t=[1,0,0,0,1,0,0,0,1],!Ea(t,es,ts,ns,to))?!1:(no.crossVectors($n,ei),t=[no.x,no.y,no.z],Ea(t,es,ts,ns,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new D,new D,new D,new D,new D,new D,new D,new D],xn=new D,eo=new Xi,es=new D,ts=new D,ns=new D,$n=new D,ei=new D,wi=new D,sr=new D,to=new D,no=new D,Si=new D;function Ea(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Si.fromArray(i,r);const a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),c=e.dot(Si),l=t.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const $m=new Xi,rr=new D,Aa=new D;class Qs{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$m.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);const t=rr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(rr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(Aa)),this.expandByPoint(rr.copy(e.center).sub(Aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new D,Ra=new D,io=new D,ti=new D,Pa=new D,so=new D,Ca=new D;class cf{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ra.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(Ra);const r=e.distanceTo(t)*.5,o=-this.direction.dot(io),a=ti.dot(this.direction),c=-ti.dot(io),l=ti.lengthSq(),h=Math.abs(1-o*o);let u,f,d,m;if(h>0)if(u=o*c-a,f=o*a-c,m=r*h,u>=0)if(f>=-m)if(f<=m){const v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ra).addScaledVector(io,f),d}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,s,r){Pa.subVectors(t,e),so.subVectors(n,e),Ca.crossVectors(Pa,so);let o=this.direction.dot(Ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,e);const c=a*this.direction.dot(so.crossVectors(ti,so));if(c<0)return null;const l=a*this.direction.dot(Pa.cross(ti));if(l<0||c+l>o)return null;const h=-a*ti.dot(Ca);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,s,r,o,a,c,l,h,u,f,d,m,v,g){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,d,m,v,g)}set(e,t,n,s,r,o,a,c,l,h,u,f,d,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,m=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+m*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,m=l*h,v=l*u;t[0]=f+v*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,m=l*h,v=l*u;t[0]=f-v*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,d=o*u,m=a*h,v=a*u;t[0]=c*h,t[4]=m*l-d,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,m=a*c,v=a*l;t[0]=c*h,t[4]=v-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+m,t[10]=f-v*u}else if(e.order==="XZY"){const f=o*c,d=o*l,m=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e0,e,t0)}lookAt(e,t,n){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ni.crossVectors(n,tn),ni.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ni.crossVectors(n,tn)),ni.normalize(),ro.crossVectors(tn,ni),s[0]=ni.x,s[4]=ro.x,s[8]=tn.x,s[1]=ni.y,s[5]=ro.y,s[9]=tn.y,s[2]=ni.z,s[6]=ro.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],M=n[3],y=n[7],x=n[11],R=n[15],b=s[0],C=s[4],E=s[8],w=s[12],_=s[1],I=s[5],k=s[9],O=s[13],A=s[2],L=s[6],N=s[10],z=s[14],F=s[3],K=s[7],le=s[11],B=s[15];return r[0]=o*b+a*_+c*A+l*F,r[4]=o*C+a*I+c*L+l*K,r[8]=o*E+a*k+c*N+l*le,r[12]=o*w+a*O+c*z+l*B,r[1]=h*b+u*_+f*A+d*F,r[5]=h*C+u*I+f*L+d*K,r[9]=h*E+u*k+f*N+d*le,r[13]=h*w+u*O+f*z+d*B,r[2]=m*b+v*_+g*A+p*F,r[6]=m*C+v*I+g*L+p*K,r[10]=m*E+v*k+g*N+p*le,r[14]=m*w+v*O+g*z+p*B,r[3]=M*b+y*_+x*A+R*F,r[7]=M*C+y*I+x*L+R*K,r[11]=M*E+y*k+x*N+R*le,r[15]=M*w+y*O+x*z+R*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+v*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+g*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],v=e[13],g=e[14],p=e[15],M=u*g*l-v*f*l+v*c*d-a*g*d-u*c*p+a*f*p,y=m*f*l-h*g*l-m*c*d+o*g*d+h*c*p-o*f*p,x=h*v*l-m*u*l+m*a*d-o*v*d-h*a*p+o*u*p,R=m*u*c-h*v*c-m*a*f+o*v*f+h*a*g-o*u*g,b=t*M+n*y+s*x+r*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=M*C,e[1]=(v*f*r-u*g*r-v*s*d+n*g*d+u*s*p-n*f*p)*C,e[2]=(a*g*r-v*c*r+v*s*l-n*g*l-a*s*p+n*c*p)*C,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*C,e[4]=y*C,e[5]=(h*g*r-m*f*r+m*s*d-t*g*d-h*s*p+t*f*p)*C,e[6]=(m*c*r-o*g*r-m*s*l+t*g*l+o*s*p-t*c*p)*C,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*C,e[8]=x*C,e[9]=(m*u*r-h*v*r-m*n*d+t*v*d+h*n*p-t*u*p)*C,e[10]=(o*v*r-m*a*r+m*n*l-t*v*l-o*n*p+t*a*p)*C,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*C,e[12]=R*C,e[13]=(h*v*s-m*u*s+m*n*f-t*v*f-h*n*g+t*u*g)*C,e[14]=(m*a*s-o*v*s-m*n*c+t*v*c+o*n*g-t*a*g)*C,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,m=r*u,v=o*h,g=o*u,p=a*u,M=c*l,y=c*h,x=c*u,R=n.x,b=n.y,C=n.z;return s[0]=(1-(v+p))*R,s[1]=(d+x)*R,s[2]=(m-y)*R,s[3]=0,s[4]=(d-x)*b,s[5]=(1-(f+p))*b,s[6]=(g+M)*b,s[7]=0,s[8]=(m+y)*C,s[9]=(g-M)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=is.set(s[0],s[1],s[2]).length();const o=is.set(s[4],s[5],s[6]).length(),a=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yn.copy(this);const l=1/r,h=1/o,u=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Xn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let d,m;if(a===Xn)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Ko)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Xn){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,d=(n+s)*h;let m,v;if(a===Xn)m=(o+r)*u,v=-2*u;else if(a===Ko)m=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const is=new D,yn=new tt,e0=new D(0,0,0),t0=new D(1,1,1),ni=new D,ro=new D,tn=new D,Hh=new tt,Gh=new fi;class Ln{constructor(e=0,t=0,n=0,s=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class lf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n0=0;const Vh=new D,ss=new fi,Bn=new tt,oo=new D,or=new D,i0=new D,s0=new fi,Wh=new D(1,0,0),Xh=new D(0,1,0),qh=new D(0,0,1),Yh={type:"added"},r0={type:"removed"},rs={type:"childadded",child:null},La={type:"childremoved",child:null};class Et extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new D,t=new Ln,n=new fi,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ze}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Wh,e)}rotateY(e){return this.rotateOnAxis(Xh,e)}rotateZ(e){return this.rotateOnAxis(qh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wh,e)}translateY(e){return this.translateOnAxis(Xh,e)}translateZ(e){return this.translateOnAxis(qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oo.copy(e):oo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(or,oo,this.up):Bn.lookAt(oo,or,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Bn),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yh),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r0),La.child=e,this.dispatchEvent(La),La.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yh),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,i0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,s0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Et.DEFAULT_UP=new D(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new D,kn=new D,Da=new D,Hn=new D,os=new D,as=new D,jh=new D,Ia=new D,Ua=new D,Na=new D,Oa=new mt,Fa=new mt,za=new mt;class hn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Mn.subVectors(e,t),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Mn.subVectors(s,t),kn.subVectors(n,t),Da.subVectors(e,t);const o=Mn.dot(Mn),a=Mn.dot(kn),c=Mn.dot(Da),l=kn.dot(kn),h=kn.dot(Da),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,m=(o*h-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Oa.setScalar(0),Fa.setScalar(0),za.setScalar(0),Oa.fromBufferAttribute(e,t),Fa.fromBufferAttribute(e,n),za.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Oa,r.x),o.addScaledVector(Fa,r.y),o.addScaledVector(za,r.z),o}static isFrontFacing(e,t,n,s){return Mn.subVectors(n,t),kn.subVectors(e,t),Mn.cross(kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),Mn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;os.subVectors(s,n),as.subVectors(r,n),Ia.subVectors(e,n);const c=os.dot(Ia),l=as.dot(Ia);if(c<=0&&l<=0)return t.copy(n);Ua.subVectors(e,s);const h=os.dot(Ua),u=as.dot(Ua);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(os,o);Na.subVectors(e,r);const d=os.dot(Na),m=as.dot(Na);if(m>=0&&d<=m)return t.copy(r);const v=d*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(as,a);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return jh.subVectors(r,s),a=(u-h)/(u-h+(d-m)),t.copy(s).addScaledVector(jh,a);const p=1/(g+v+f);return o=v*p,a=f*p,t.copy(n).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Ba(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=Hl(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ba(o,r,e+1/3),this.g=Ba(o,r,e),this.b=Ba(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=hf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return nt.fromWorkingColorSpace(kt.copy(this),e),Math.round(Ct(kt.r*255,0,255))*65536+Math.round(Ct(kt.g*255,0,255))*256+Math.round(Ct(kt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(kt.copy(this),t);const n=kt.r,s=kt.g,r=kt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Wt){nt.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,s=kt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(ao);const n=Rr(ii.h,ao.h,t),s=Rr(ii.s,ao.s,t),r=Rr(ii.l,ao.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new xe;xe.NAMES=hf;let o0=0;class Mi extends Js{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Rn(),this.name="",this.blending=Rs,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pc,this.blendDst=Cc,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pc&&(n.blendSrc=this.blendSrc),this.blendDst!==Cc&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ch&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pi extends Mi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new D,co=new ce;class xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fl,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fl&&(e.usage=this.usage),e}}class uf extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class df extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class it extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let a0=0;const cn=new tt,ka=new Et,cs=new D,nn=new Xi,ar=new Xi,Nt=new D;class bt extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rf(e)?df:uf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return ka.lookAt(e),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ar.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(nn.min,ar.min),nn.expandByPoint(Nt),Nt.addVectors(nn.max,ar.max),nn.expandByPoint(Nt)):(nn.expandByPoint(ar.min),nn.expandByPoint(ar.max))}nn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Nt.fromBufferAttribute(a,l),c&&(cs.fromBufferAttribute(e,l),Nt.add(cs)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let E=0;E<n.count;E++)a[E]=new D,c[E]=new D;const l=new D,h=new D,u=new D,f=new ce,d=new ce,m=new ce,v=new D,g=new D;function p(E,w,_){l.fromBufferAttribute(n,E),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,_),h.sub(l),u.sub(l),d.sub(f),m.sub(f);const I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(I),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(I),a[E].add(v),a[w].add(v),a[_].add(v),c[E].add(g),c[w].add(g),c[_].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let E=0,w=M.length;E<w;++E){const _=M[E],I=_.start,k=_.count;for(let O=I,A=I+k;O<A;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new D,x=new D,R=new D,b=new D;function C(E){R.fromBufferAttribute(s,E),b.copy(R);const w=a[E];y.copy(w),y.sub(R.multiplyScalar(R.dot(w))).normalize(),x.crossVectors(b,w);const I=x.dot(c[E])<0?-1:1;o.setXYZW(E,y.x,y.y,y.z,I)}for(let E=0,w=M.length;E<w;++E){const _=M[E],I=_.start,k=_.count;for(let O=I,A=I+k;O<A;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let p=0;p<h;p++)f[m++]=l[d++]}return new xt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zh=new tt,bi=new cf,lo=new Qs,Kh=new D,ho=new D,uo=new D,fo=new D,Ha=new D,po=new D,Jh=new D,mo=new D;class ee extends Et{constructor(e=new bt,t=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Ha.fromBufferAttribute(u,e),o?po.addScaledVector(Ha,h):po.addScaledVector(Ha.sub(t),h))}t.add(po)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),bi.copy(e.ray).recast(e.near),!(lo.containsPoint(bi.origin)===!1&&(bi.intersectSphere(lo,Kh)===null||bi.origin.distanceToSquared(Kh)>(e.far-e.near)**2))&&(Zh.copy(r).invert(),bi.copy(e.ray).applyMatrix4(Zh),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=M,R=y;x<R;x+=3){const b=a.getX(x),C=a.getX(x+1),E=a.getX(x+2);s=go(this,p,e,n,l,h,u,b,C,E),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const M=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);s=go(this,o,e,n,l,h,u,M,y,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let x=M,R=y;x<R;x+=3){const b=x,C=x+1,E=x+2;s=go(this,p,e,n,l,h,u,b,C,E),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const M=g,y=g+1,x=g+2;s=go(this,o,e,n,l,h,u,M,y,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function c0(i,e,t,n,s,r,o,a){let c;if(e.side===Yt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===xi,a),c===null)return null;mo.copy(a),mo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(mo);return l<t.near||l>t.far?null:{distance:l,point:mo.clone(),object:i}}function go(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ho),i.getVertexPosition(c,uo),i.getVertexPosition(l,fo);const h=c0(i,e,t,n,ho,uo,fo,Jh);if(h){const u=new D;hn.getBarycoord(Jh,ho,uo,fo,u),s&&(h.uv=hn.getInterpolatedAttribute(s,a,c,l,u,new ce)),r&&(h.uv1=hn.getInterpolatedAttribute(r,a,c,l,u,new ce)),o&&(h.normal=hn.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new D,materialIndex:0};hn.getNormal(ho,uo,fo,f.normal),h.face=f,h.barycoord=u}return h}class Qt extends bt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function m(v,g,p,M,y,x,R,b,C,E,w){const _=x/C,I=R/E,k=x/2,O=R/2,A=b/2,L=C+1,N=E+1;let z=0,F=0;const K=new D;for(let le=0;le<N;le++){const B=le*I-O;for(let J=0;J<L;J++){const Me=J*_-k;K[v]=Me*M,K[g]=B*y,K[p]=A,l.push(K.x,K.y,K.z),K[v]=0,K[g]=0,K[p]=b>0?1:-1,h.push(K.x,K.y,K.z),u.push(J/C),u.push(1-le/E),z+=1}}for(let le=0;le<E;le++)for(let B=0;B<C;B++){const J=f+B+L*le,Me=f+B+L*(le+1),j=f+(B+1)+L*(le+1),he=f+(B+1)+L*le;c.push(J,Me,he),c.push(Me,j,he),F+=6}a.addGroup(d,F,w),d+=F,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Vt(i){const e={};for(let t=0;t<i.length;t++){const n=Gs(i[t]);for(const s in n)e[s]=n[s]}return e}function l0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ff(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const mi={clone:Gs,merge:Vt};var h0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _t extends Mi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h0,this.fragmentShader=u0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=l0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pf extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new D,Qh=new ce,$h=new ce;class Jt extends pf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Qh,$h),t.subVectors($h,Qh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ls=-90,hs=1;class d0 extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Jt(ls,hs,e,t);s.layers=this.layers,this.add(s);const r=new Jt(ls,hs,e,t);r.layers=this.layers,this.add(r);const o=new Jt(ls,hs,e,t);o.layers=this.layers,this.add(o);const a=new Jt(ls,hs,e,t);a.layers=this.layers,this.add(a);const c=new Jt(ls,hs,e,t);c.layers=this.layers,this.add(c);const l=new Jt(ls,hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class mf extends Dt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class f0 extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new mf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qt(5,5,5),r=new _t({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Yn});r.uniforms.tEquirect.value=t;const o=new ee(s,r),a=t.minFilter;return t.minFilter===Fi&&(t.minFilter=qt),new d0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Ga=new D,p0=new D,m0=new Ze;class Li{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ga.subVectors(n,t).cross(p0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ga),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||m0.getNormalMatrix(e),s=this.coplanarPoint(Ga).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Qs,vo=new D;class Gl{constructor(e=new Li,t=new Li,n=new Li,s=new Li,r=new Li,o=new Li){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],m=s[9],v=s[10],g=s[11],p=s[12],M=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,f-l,g-d,x-p).normalize(),n[1].setComponents(c+r,f+l,g+d,x+p).normalize(),n[2].setComponents(c+o,f+h,g+m,x+M).normalize(),n[3].setComponents(c-o,f-h,g-m,x-M).normalize(),n[4].setComponents(c-a,f-u,g-v,x-y).normalize(),t===Xn)n[5].setComponents(c+a,f+u,g+v,x+y).normalize();else if(t===Ko)n[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(vo.x=s.normal.x>0?e.max.x:e.min.x,vo.y=s.normal.y>0?e.max.y:e.min.y,vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function g0(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],v=u[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const v=u[d];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Pn extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const M=p*f-o;for(let y=0;y<l;y++){const x=y*u-r;m.push(x,-M,0),v.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const y=M+l*p,x=M+l*(p+1),R=M+1+l*(p+1),b=M+1+l*p;d.push(y,x,b),d.push(x,R,b)}this.setIndex(d),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.width,e.height,e.widthSegments,e.heightSegments)}}var v0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x0=`#ifdef USE_ALPHAHASH
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
#endif`,y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S0=`#ifdef USE_AOMAP
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
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T0=`#ifdef USE_BATCHING
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
#endif`,E0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,C0=`#ifdef USE_IRIDESCENCE
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
#endif`,L0=`#ifdef USE_BUMPMAP
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
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,k0=`#define PI 3.141592653589793
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
} // validated`,H0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G0=`vec3 transformedNormal = objectNormal;
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
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,eg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sg=`#ifdef USE_GRADIENTMAP
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
}`,rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cg=`uniform bool receiveShadow;
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
#endif`,lg=`#ifdef USE_ENVMAP
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
#endif`,hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pg=`PhysicalMaterial material;
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
#endif`,mg=`struct PhysicalMaterial {
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
}`,gg=`
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
#endif`,vg=`#if defined( RE_IndirectDiffuse )
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
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bg=`#ifdef USE_MAP
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
#endif`,Eg=`#if defined( USE_POINTS_UV )
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
#endif`,Ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bg=`#ifdef USE_NORMALMAP
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
#endif`,kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ev=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tv=`float getShadowMask() {
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
}`,nv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iv=`#ifdef USE_SKINNING
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
#endif`,sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rv=`#ifdef USE_SKINNING
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
#endif`,ov=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,av=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hv=`#ifdef USE_TRANSMISSION
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
#endif`,uv=`#ifdef USE_TRANSMISSION
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
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vv=`uniform sampler2D t2D;
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
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`#include <common>
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
}`,Sv=`#if DEPTH_PACKING == 3200
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
}`,bv=`#define DISTANCE
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
}`,Tv=`#define DISTANCE
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
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Av=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`uniform float scale;
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
}`,Pv=`uniform vec3 diffuse;
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
}`,Cv=`#include <common>
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Dv=`#define LAMBERT
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
}`,Iv=`#define LAMBERT
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
}`,Uv=`#define MATCAP
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
}`,Nv=`#define MATCAP
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
}`,Ov=`#define NORMAL
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
}`,Fv=`#define NORMAL
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
}`,zv=`#define PHONG
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
}`,Bv=`#define PHONG
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
}`,kv=`#define STANDARD
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
}`,Hv=`#define STANDARD
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
}`,Gv=`#define TOON
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
}`,Vv=`#define TOON
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
}`,Wv=`uniform float size;
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
}`,Xv=`uniform vec3 diffuse;
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
}`,qv=`#include <common>
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
}`,Yv=`uniform vec3 color;
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
}`,jv=`uniform float rotation;
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:v0,alphahash_pars_fragment:x0,alphamap_fragment:y0,alphamap_pars_fragment:M0,alphatest_fragment:_0,alphatest_pars_fragment:w0,aomap_fragment:S0,aomap_pars_fragment:b0,batching_pars_vertex:T0,batching_vertex:E0,begin_vertex:A0,beginnormal_vertex:R0,bsdfs:P0,iridescence_fragment:C0,bumpmap_pars_fragment:L0,clipping_planes_fragment:D0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:U0,clipping_planes_vertex:N0,color_fragment:O0,color_pars_fragment:F0,color_pars_vertex:z0,color_vertex:B0,common:k0,cube_uv_reflection_fragment:H0,defaultnormal_vertex:G0,displacementmap_pars_vertex:V0,displacementmap_vertex:W0,emissivemap_fragment:X0,emissivemap_pars_fragment:q0,colorspace_fragment:Y0,colorspace_pars_fragment:j0,envmap_fragment:Z0,envmap_common_pars_fragment:K0,envmap_pars_fragment:J0,envmap_pars_vertex:Q0,envmap_physical_pars_fragment:lg,envmap_vertex:$0,fog_vertex:eg,fog_pars_vertex:tg,fog_fragment:ng,fog_pars_fragment:ig,gradientmap_pars_fragment:sg,lightmap_pars_fragment:rg,lights_lambert_fragment:og,lights_lambert_pars_fragment:ag,lights_pars_begin:cg,lights_toon_fragment:hg,lights_toon_pars_fragment:ug,lights_phong_fragment:dg,lights_phong_pars_fragment:fg,lights_physical_fragment:pg,lights_physical_pars_fragment:mg,lights_fragment_begin:gg,lights_fragment_maps:vg,lights_fragment_end:xg,logdepthbuf_fragment:yg,logdepthbuf_pars_fragment:Mg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:wg,map_fragment:Sg,map_pars_fragment:bg,map_particle_fragment:Tg,map_particle_pars_fragment:Eg,metalnessmap_fragment:Ag,metalnessmap_pars_fragment:Rg,morphinstance_vertex:Pg,morphcolor_vertex:Cg,morphnormal_vertex:Lg,morphtarget_pars_vertex:Dg,morphtarget_vertex:Ig,normal_fragment_begin:Ug,normal_fragment_maps:Ng,normal_pars_fragment:Og,normal_pars_vertex:Fg,normal_vertex:zg,normalmap_pars_fragment:Bg,clearcoat_normal_fragment_begin:kg,clearcoat_normal_fragment_maps:Hg,clearcoat_pars_fragment:Gg,iridescence_pars_fragment:Vg,opaque_fragment:Wg,packing:Xg,premultiplied_alpha_fragment:qg,project_vertex:Yg,dithering_fragment:jg,dithering_pars_fragment:Zg,roughnessmap_fragment:Kg,roughnessmap_pars_fragment:Jg,shadowmap_pars_fragment:Qg,shadowmap_pars_vertex:$g,shadowmap_vertex:ev,shadowmask_pars_fragment:tv,skinbase_vertex:nv,skinning_pars_vertex:iv,skinning_vertex:sv,skinnormal_vertex:rv,specularmap_fragment:ov,specularmap_pars_fragment:av,tonemapping_fragment:cv,tonemapping_pars_fragment:lv,transmission_fragment:hv,transmission_pars_fragment:uv,uv_pars_fragment:dv,uv_pars_vertex:fv,uv_vertex:pv,worldpos_vertex:mv,background_vert:gv,background_frag:vv,backgroundCube_vert:xv,backgroundCube_frag:yv,cube_vert:Mv,cube_frag:_v,depth_vert:wv,depth_frag:Sv,distanceRGBA_vert:bv,distanceRGBA_frag:Tv,equirect_vert:Ev,equirect_frag:Av,linedashed_vert:Rv,linedashed_frag:Pv,meshbasic_vert:Cv,meshbasic_frag:Lv,meshlambert_vert:Dv,meshlambert_frag:Iv,meshmatcap_vert:Uv,meshmatcap_frag:Nv,meshnormal_vert:Ov,meshnormal_frag:Fv,meshphong_vert:zv,meshphong_frag:Bv,meshphysical_vert:kv,meshphysical_frag:Hv,meshtoon_vert:Gv,meshtoon_frag:Vv,points_vert:Wv,points_frag:Xv,shadow_vert:qv,shadow_frag:Yv,sprite_vert:jv,sprite_frag:Zv},ye={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},En={basic:{uniforms:Vt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Vt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Vt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Vt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Vt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Vt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Vt([ye.points,ye.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Vt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Vt([ye.common,ye.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Vt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Vt([ye.sprite,ye.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Vt([ye.common,ye.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Vt([ye.lights,ye.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};En.physical={uniforms:Vt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const xo={r:0,b:0,g:0},Ei=new Ln,Kv=new tt;function Jv(i,e,t,n,s,r,o){const a=new xe(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function m(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function v(M){let y=!1;const x=m(M);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,y){const x=m(y);x&&(x.isCubeTexture||x.mapping===oa)?(h===void 0&&(h=new ee(new Qt(1,1,1),new _t({name:"BackgroundCubeMaterial",uniforms:Gs(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ei.copy(y.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(Ei)),h.material.toneMapped=nt.getTransfer(x.colorSpace)!==ut,(u!==x||f!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ee(new Pn(2,2),new _t({name:"BackgroundMaterial",uniforms:Gs(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=nt.getTransfer(x.colorSpace)!==ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,y){M.getRGB(xo,ff(i)),n.buffers.color.setClear(xo.r,xo.g,xo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:v,addToRenderList:g}}function Qv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(_,I,k,O,A){let L=!1;const N=u(O,k,I);r!==N&&(r=N,l(r.object)),L=d(_,O,k,A),L&&m(_,O,k,A),A!==null&&e.update(A,i.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,x(_,I,k,O),A!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,I,k){const O=k.wireframe===!0;let A=n[_.id];A===void 0&&(A={},n[_.id]=A);let L=A[I.id];L===void 0&&(L={},A[I.id]=L);let N=L[O];return N===void 0&&(N=f(c()),L[O]=N),N}function f(_){const I=[],k=[],O=[];for(let A=0;A<t;A++)I[A]=0,k[A]=0,O[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:O,object:_,attributes:{},index:null}}function d(_,I,k,O){const A=r.attributes,L=I.attributes;let N=0;const z=k.getAttributes();for(const F in z)if(z[F].location>=0){const le=A[F];let B=L[F];if(B===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(B=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(B=_.instanceColor)),le===void 0||le.attribute!==B||B&&le.data!==B.data)return!0;N++}return r.attributesNum!==N||r.index!==O}function m(_,I,k,O){const A={},L=I.attributes;let N=0;const z=k.getAttributes();for(const F in z)if(z[F].location>=0){let le=L[F];le===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(le=_.instanceColor));const B={};B.attribute=le,le&&le.data&&(B.data=le.data),A[F]=B,N++}r.attributes=A,r.attributesNum=N,r.index=O}function v(){const _=r.newAttributes;for(let I=0,k=_.length;I<k;I++)_[I]=0}function g(_){p(_,0)}function p(_,I){const k=r.newAttributes,O=r.enabledAttributes,A=r.attributeDivisors;k[_]=1,O[_]===0&&(i.enableVertexAttribArray(_),O[_]=1),A[_]!==I&&(i.vertexAttribDivisor(_,I),A[_]=I)}function M(){const _=r.newAttributes,I=r.enabledAttributes;for(let k=0,O=I.length;k<O;k++)I[k]!==_[k]&&(i.disableVertexAttribArray(k),I[k]=0)}function y(_,I,k,O,A,L,N){N===!0?i.vertexAttribIPointer(_,I,k,A,L):i.vertexAttribPointer(_,I,k,O,A,L)}function x(_,I,k,O){v();const A=O.attributes,L=k.getAttributes(),N=I.defaultAttributeValues;for(const z in L){const F=L[z];if(F.location>=0){let K=A[z];if(K===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(K=_.instanceColor)),K!==void 0){const le=K.normalized,B=K.itemSize,J=e.get(K);if(J===void 0)continue;const Me=J.buffer,j=J.type,he=J.bytesPerElement,_e=j===i.INT||j===i.UNSIGNED_INT||K.gpuType===Ul;if(K.isInterleavedBufferAttribute){const de=K.data,Fe=de.stride,Le=K.offset;if(de.isInstancedInterleavedBuffer){for(let Ie=0;Ie<F.locationSize;Ie++)p(F.location+Ie,de.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ie=0;Ie<F.locationSize;Ie++)g(F.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Ie=0;Ie<F.locationSize;Ie++)y(F.location+Ie,B/F.locationSize,j,le,Fe*he,(Le+B/F.locationSize*Ie)*he,_e)}else{if(K.isInstancedBufferAttribute){for(let de=0;de<F.locationSize;de++)p(F.location+de,K.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let de=0;de<F.locationSize;de++)g(F.location+de);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let de=0;de<F.locationSize;de++)y(F.location+de,B/F.locationSize,j,le,B*he,B/F.locationSize*de*he,_e)}}else if(N!==void 0){const le=N[z];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(F.location,le);break;case 3:i.vertexAttrib3fv(F.location,le);break;case 4:i.vertexAttrib4fv(F.location,le);break;default:i.vertexAttrib1fv(F.location,le)}}}}M()}function R(){E();for(const _ in n){const I=n[_];for(const k in I){const O=I[k];for(const A in O)h(O[A].object),delete O[A];delete I[k]}delete n[_]}}function b(_){if(n[_.id]===void 0)return;const I=n[_.id];for(const k in I){const O=I[k];for(const A in O)h(O[A].object),delete O[A];delete I[k]}delete n[_.id]}function C(_){for(const I in n){const k=n[I];if(k[_.id]===void 0)continue;const O=k[_.id];for(const A in O)h(O[A].object),delete O[A];delete k[_.id]}}function E(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function $v(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)o(l[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*f[v];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ex(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==un&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const E=C===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Zn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==An&&!E)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:R,maxSamples:b}}function tx(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Li,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const M=r?0:n,y=M*4;let x=p.clippingState||null;c.value=x,x=h(m,f,y,d);for(let R=0;R!==y;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=d+v*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=d;y!==v;++y,x+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function nx(i){let e=new WeakMap;function t(o,a){return a===zc?o.mapping=Fs:a===Bc&&(o.mapping=zs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===zc||a===Bc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new f0(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Vl extends pf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Es=4,eu=[.125,.215,.35,.446,.526,.582],Ui=20,Va=new Vl,tu=new xe;let Wa=null,Xa=0,qa=0,Ya=!1;const Di=(1+Math.sqrt(5))/2,us=1/Di,nu=[new D(-Di,us,0),new D(Di,us,0),new D(-us,0,Di),new D(us,0,Di),new D(0,Di,-us),new D(0,Di,us),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class iu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wa,Xa,qa),this._renderer.xr.enabled=Ya,e.scissorTest=!1,yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:wn,format:un,colorSpace:Ks,depthBuffer:!1},s=su(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ix(r)),this._blurMaterial=sx(r,e,t)}return s}_compileMaterial(e){const t=new ee(this._lodPlanes[0],e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,n,s){const a=new Jt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(tu),h.toneMapping=di,h.autoClear=!1;const d=new pi({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),m=new ee(new Qt,d);let v=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(tu),v=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;yo(s,M*y,p>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Fs||e.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ru());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;yo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nu[(s-r-1)%nu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ee(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ui-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):Ui;g>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ui}`);const p=[];let M=0;for(let C=0;C<Ui;++C){const E=C/v,w=Math.exp(-E*E/2);p.push(w),C===0?M+=w:C<g&&(M+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-n;const x=this._sizeLods[s],R=3*x*(s>y-Es?s-y+Es:0),b=4*(this._cubeSize-x);yo(t,R,b,3*x,2*x),c.setRenderTarget(t),c.render(u,Va)}}function ix(i){const e=[],t=[],n=[];let s=i;const r=i-Es+1+eu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Es?c=eu[o-i+Es-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,v=3,g=2,p=1,M=new Float32Array(v*m*d),y=new Float32Array(g*m*d),x=new Float32Array(p*m*d);for(let b=0;b<d;b++){const C=b%3*2/3-1,E=b>2?0:-1,w=[C,E,0,C+2/3,E,0,C+2/3,E+1,0,C,E,0,C+2/3,E+1,0,C,E+1,0];M.set(w,v*m*b),y.set(f,g*m*b);const _=[b,b,b,b,b,b];x.set(_,p*m*b)}const R=new bt;R.setAttribute("position",new xt(M,v)),R.setAttribute("uv",new xt(y,g)),R.setAttribute("faceIndex",new xt(x,p)),e.push(R),s>Es&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function su(i,e,t){const n=new rn(i,e,t);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function sx(i,e,t){const n=new Float32Array(Ui),s=new D(0,1,0);return new _t({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ru(){return new _t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ou(){return new _t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Wl(){return`

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
	`}function rx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===zc||c===Bc,h=c===Fs||c===zs;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new iu(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new iu(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ox(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&br("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ax(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const v=f.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const m in d){const v=d[m];for(let g=0,p=v.length;g<p;g++)e.update(v[g],i.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,m=u.attributes.position;let v=0;if(d!==null){const M=d.array;v=d.version;for(let y=0,x=M.length;y<x;y+=3){const R=M[y+0],b=M[y+1],C=M[y+2];f.push(R,b,b,C,C,R)}}else if(m!==void 0){const M=m.array;v=m.version;for(let y=0,x=M.length/3-1;y<x;y+=3){const R=y+0,b=y+1,C=y+2;f.push(R,b,b,C,C,R)}}else return;const g=new(rf(f)?df:uf)(f,1);g.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function cx(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*o,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function u(f,d,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*v[M];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function lx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hx(i,e,t){const n=new WeakMap,s=new mt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),m===!0&&(y=2),v===!0&&(y=3);let x=a.attributes.position.count*y,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const b=new Float32Array(x*R*4*u),C=new af(b,x,R,u);C.type=An,C.needsUpdate=!0;const E=y*4;for(let _=0;_<u;_++){const I=g[_],k=p[_],O=M[_],A=x*R*4*_;for(let L=0;L<I.count;L++){const N=L*E;d===!0&&(s.fromBufferAttribute(I,L),b[A+N+0]=s.x,b[A+N+1]=s.y,b[A+N+2]=s.z,b[A+N+3]=0),m===!0&&(s.fromBufferAttribute(k,L),b[A+N+4]=s.x,b[A+N+5]=s.y,b[A+N+6]=s.z,b[A+N+7]=0),v===!0&&(s.fromBufferAttribute(O,L),b[A+N+8]=s.x,b[A+N+9]=s.y,b[A+N+10]=s.z,b[A+N+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new ce(x,R)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];const m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ux(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class vf extends Dt{constructor(e,t,n,s,r,o,a,c,l,h=Ps){if(h!==Ps&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ps&&(n=ki),n===void 0&&h===ks&&(n=Bs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xf=new Dt,au=new vf(1,1),yf=new af,Mf=new Qm,_f=new mf,cu=[],lu=[],hu=new Float32Array(16),uu=new Float32Array(9),du=new Float32Array(4);function $s(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=cu[s];if(r===void 0&&(r=new Float32Array(s),cu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function la(i,e){let t=lu[e];t===void 0&&(t=new Int32Array(e),lu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function mx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function gx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;du.set(n),i.uniformMatrix2fv(this.addr,!1,du),Ut(t,n)}}function vx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;uu.set(n),i.uniformMatrix3fv(this.addr,!1,uu),Ut(t,n)}}function xx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;hu.set(n),i.uniformMatrix4fv(this.addr,!1,hu),Ut(t,n)}}function yx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Mx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function _x(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function wx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function Sx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function bx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function Tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function Ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function Ax(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(au.compareFunction=sf,r=au):r=xf,t.setTexture2D(e||r,s)}function Rx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Mf,s)}function Px(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_f,s)}function Cx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||yf,s)}function Lx(i){switch(i){case 5126:return dx;case 35664:return fx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return vx;case 35676:return xx;case 5124:case 35670:return yx;case 35667:case 35671:return Mx;case 35668:case 35672:return _x;case 35669:case 35673:return wx;case 5125:return Sx;case 36294:return bx;case 36295:return Tx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Cx}}function Dx(i,e){i.uniform1fv(this.addr,e)}function Ix(i,e){const t=$s(e,this.size,2);i.uniform2fv(this.addr,t)}function Ux(i,e){const t=$s(e,this.size,3);i.uniform3fv(this.addr,t)}function Nx(i,e){const t=$s(e,this.size,4);i.uniform4fv(this.addr,t)}function Ox(i,e){const t=$s(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Fx(i,e){const t=$s(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zx(i,e){const t=$s(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bx(i,e){i.uniform1iv(this.addr,e)}function kx(i,e){i.uniform2iv(this.addr,e)}function Hx(i,e){i.uniform3iv(this.addr,e)}function Gx(i,e){i.uniform4iv(this.addr,e)}function Vx(i,e){i.uniform1uiv(this.addr,e)}function Wx(i,e){i.uniform2uiv(this.addr,e)}function Xx(i,e){i.uniform3uiv(this.addr,e)}function qx(i,e){i.uniform4uiv(this.addr,e)}function Yx(i,e,t){const n=this.cache,s=e.length,r=la(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||xf,r[o])}function jx(i,e,t){const n=this.cache,s=e.length,r=la(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Mf,r[o])}function Zx(i,e,t){const n=this.cache,s=e.length,r=la(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||_f,r[o])}function Kx(i,e,t){const n=this.cache,s=e.length,r=la(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||yf,r[o])}function Jx(i){switch(i){case 5126:return Dx;case 35664:return Ix;case 35665:return Ux;case 35666:return Nx;case 35674:return Ox;case 35675:return Fx;case 35676:return zx;case 5124:case 35670:return Bx;case 35667:case 35671:return kx;case 35668:case 35672:return Hx;case 35669:case 35673:return Gx;case 5125:return Vx;case 36294:return Wx;case 36295:return Xx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Kx}}class Qx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lx(t.type)}}class $x{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jx(t.type)}}class ey{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function fu(i,e){i.seq.push(e),i.map[e.id]=e}function ty(i,e,t){const n=i.name,s=n.length;for(ja.lastIndex=0;;){const r=ja.exec(n),o=ja.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){fu(t,l===void 0?new Qx(a,i,e):new $x(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new ey(a),fu(t,u)),t=u}}}class Wo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ty(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function pu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ny=37297;let iy=0;function sy(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const mu=new Ze;function ry(i){nt._getMatrix(mu,nt.workingColorSpace,i);const e=`mat3( ${mu.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case ca:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+sy(i.getShaderSource(e),o)}else return s}function oy(i,e){const t=ry(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ay(i,e){let t;switch(e){case Gd:t="Linear";break;case Vd:t="Reinhard";break;case Wd:t="Cineon";break;case Il:t="ACESFilmic";break;case Xd:t="AgX";break;case qd:t="Neutral";break;case gm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Mo=new D;function cy(){nt.getLuminanceCoefficients(Mo);const i=Mo.x.toFixed(4),e=Mo.y.toFixed(4),t=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ly(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function hy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Tr(i){return i!==""}function vu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(i){return i.replace(dy,py)}const fy=new Map;function py(i,e){let t=Ke[e];if(t===void 0){const n=fy.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pl(t)}const my=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(i){return i.replace(my,gy)}function gy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function vy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function xy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case zs:e="ENVMAP_TYPE_CUBE";break;case oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function My(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hd:e="ENVMAP_BLENDING_MULTIPLY";break;case pm:e="ENVMAP_BLENDING_MIX";break;case mm:e="ENVMAP_BLENDING_ADD";break}return e}function _y(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function wy(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=vy(t),l=xy(t),h=yy(t),u=My(t),f=_y(t),d=ly(t),m=hy(r),v=s.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Tr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Tr).join(`
`),p.length>0&&(p+=`
`)):(g=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),p=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?Ke.tonemapping_pars_fragment:"",t.toneMapping!==di?ay("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,oy("linearToOutputTexel",t.outputColorSpace),cy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),o=pl(o),o=vu(o,t),o=xu(o,t),a=pl(a),a=vu(a,t),a=xu(a,t),o=yu(o),a=yu(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+g+o,x=M+p+a,R=pu(s,s.VERTEX_SHADER,y),b=pu(s,s.FRAGMENT_SHADER,x);s.attachShader(v,R),s.attachShader(v,b),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(I){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(R).trim(),A=s.getShaderInfoLog(b).trim();let L=!0,N=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(L=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,b);else{const z=gu(s,R,"vertex"),F=gu(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+z+`
`+F)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||A==="")&&(N=!1);N&&(I.diagnostics={runnable:L,programLog:k,vertexShader:{log:O,prefix:g},fragmentShader:{log:A,prefix:p}})}s.deleteShader(R),s.deleteShader(b),E=new Wo(s,v),w=uy(s,v)}let E;this.getUniforms=function(){return E===void 0&&C(this),E};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,ny)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iy++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=b,this}let Sy=0;class by{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ty(e),t.set(e,n)),n}}class Ty{constructor(e){this.id=Sy++,this.code=e,this.usedTimes=0}}function Ey(i,e,t,n,s,r,o){const a=new lf,c=new by,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,_,I,k,O){const A=k.fog,L=O.geometry,N=w.isMeshStandardMaterial?k.environment:null,z=(w.isMeshStandardMaterial?t:e).get(w.envMap||N),F=z&&z.mapping===oa?z.image.height:null,K=m[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const le=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,B=le!==void 0?le.length:0;let J=0;L.morphAttributes.position!==void 0&&(J=1),L.morphAttributes.normal!==void 0&&(J=2),L.morphAttributes.color!==void 0&&(J=3);let Me,j,he,_e;if(K){const ht=En[K];Me=ht.vertexShader,j=ht.fragmentShader}else Me=w.vertexShader,j=w.fragmentShader,c.update(w),he=c.getVertexShaderID(w),_e=c.getFragmentShaderID(w);const de=i.getRenderTarget(),Fe=i.state.buffers.depth.getReversed(),Le=O.isInstancedMesh===!0,Ie=O.isBatchedMesh===!0,We=!!w.map,X=!!w.matcap,ie=!!z,U=!!w.aoMap,Ee=!!w.lightMap,ue=!!w.bumpMap,Se=!!w.normalMap,pe=!!w.displacementMap,ke=!!w.emissiveMap,Ae=!!w.metalnessMap,P=!!w.roughnessMap,S=w.anisotropy>0,W=w.clearcoat>0,$=w.dispersion>0,ae=w.iridescence>0,te=w.sheen>0,re=w.transmission>0,ne=S&&!!w.anisotropyMap,se=W&&!!w.clearcoatMap,He=W&&!!w.clearcoatNormalMap,Q=W&&!!w.clearcoatRoughnessMap,ge=ae&&!!w.iridescenceMap,ze=ae&&!!w.iridescenceThicknessMap,Ge=te&&!!w.sheenColorMap,Pe=te&&!!w.sheenRoughnessMap,Je=!!w.specularMap,qe=!!w.specularColorMap,lt=!!w.specularIntensityMap,H=re&&!!w.transmissionMap,we=re&&!!w.thicknessMap,Z=!!w.gradientMap,oe=!!w.alphaMap,Re=w.alphaTest>0,be=!!w.alphaHash,Ye=!!w.extensions;let At=di;w.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(At=i.toneMapping);const zt={shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:Me,fragmentShader:j,defines:w.defines,customVertexShaderID:he,customFragmentShaderID:_e,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Ie,batchingColor:Ie&&O._colorsTexture!==null,instancing:Le,instancingColor:Le&&O.instanceColor!==null,instancingMorph:Le&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Ks,alphaToCoverage:!!w.alphaToCoverage,map:We,matcap:X,envMap:ie,envMapMode:ie&&z.mapping,envMapCubeUVHeight:F,aoMap:U,lightMap:Ee,bumpMap:ue,normalMap:Se,displacementMap:f&&pe,emissiveMap:ke,normalMapObjectSpace:Se&&w.normalMapType===Mm,normalMapTangentSpace:Se&&w.normalMapType===kl,metalnessMap:Ae,roughnessMap:P,anisotropy:S,anisotropyMap:ne,clearcoat:W,clearcoatMap:se,clearcoatNormalMap:He,clearcoatRoughnessMap:Q,dispersion:$,iridescence:ae,iridescenceMap:ge,iridescenceThicknessMap:ze,sheen:te,sheenColorMap:Ge,sheenRoughnessMap:Pe,specularMap:Je,specularColorMap:qe,specularIntensityMap:lt,transmission:re,transmissionMap:H,thicknessMap:we,gradientMap:Z,opaque:w.transparent===!1&&w.blending===Rs&&w.alphaToCoverage===!1,alphaMap:oe,alphaTest:Re,alphaHash:be,combine:w.combine,mapUv:We&&v(w.map.channel),aoMapUv:U&&v(w.aoMap.channel),lightMapUv:Ee&&v(w.lightMap.channel),bumpMapUv:ue&&v(w.bumpMap.channel),normalMapUv:Se&&v(w.normalMap.channel),displacementMapUv:pe&&v(w.displacementMap.channel),emissiveMapUv:ke&&v(w.emissiveMap.channel),metalnessMapUv:Ae&&v(w.metalnessMap.channel),roughnessMapUv:P&&v(w.roughnessMap.channel),anisotropyMapUv:ne&&v(w.anisotropyMap.channel),clearcoatMapUv:se&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:He&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(w.sheenRoughnessMap.channel),specularMapUv:Je&&v(w.specularMap.channel),specularColorMapUv:qe&&v(w.specularColorMap.channel),specularIntensityMapUv:lt&&v(w.specularIntensityMap.channel),transmissionMapUv:H&&v(w.transmissionMap.channel),thicknessMapUv:we&&v(w.thicknessMap.channel),alphaMapUv:oe&&v(w.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Se||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!L.attributes.uv&&(We||oe),fog:!!A,useFog:w.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Fe,skinning:O.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:J,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:We&&w.map.isVideoTexture===!0&&nt.getTransfer(w.map.colorSpace)===ut,decodeVideoTextureEmissive:ke&&w.emissiveMap.isVideoTexture===!0&&nt.getTransfer(w.emissiveMap.colorSpace)===ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Lt,flipSided:w.side===Yt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ye&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&w.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function p(w){const _=[];if(w.shaderID?_.push(w.shaderID):(_.push(w.customVertexShaderID),_.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)_.push(I),_.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(M(_,w),y(_,w),_.push(i.outputColorSpace)),_.push(w.customProgramCacheKey),_.join()}function M(w,_){w.push(_.precision),w.push(_.outputColorSpace),w.push(_.envMapMode),w.push(_.envMapCubeUVHeight),w.push(_.mapUv),w.push(_.alphaMapUv),w.push(_.lightMapUv),w.push(_.aoMapUv),w.push(_.bumpMapUv),w.push(_.normalMapUv),w.push(_.displacementMapUv),w.push(_.emissiveMapUv),w.push(_.metalnessMapUv),w.push(_.roughnessMapUv),w.push(_.anisotropyMapUv),w.push(_.clearcoatMapUv),w.push(_.clearcoatNormalMapUv),w.push(_.clearcoatRoughnessMapUv),w.push(_.iridescenceMapUv),w.push(_.iridescenceThicknessMapUv),w.push(_.sheenColorMapUv),w.push(_.sheenRoughnessMapUv),w.push(_.specularMapUv),w.push(_.specularColorMapUv),w.push(_.specularIntensityMapUv),w.push(_.transmissionMapUv),w.push(_.thicknessMapUv),w.push(_.combine),w.push(_.fogExp2),w.push(_.sizeAttenuation),w.push(_.morphTargetsCount),w.push(_.morphAttributeCount),w.push(_.numDirLights),w.push(_.numPointLights),w.push(_.numSpotLights),w.push(_.numSpotLightMaps),w.push(_.numHemiLights),w.push(_.numRectAreaLights),w.push(_.numDirLightShadows),w.push(_.numPointLightShadows),w.push(_.numSpotLightShadows),w.push(_.numSpotLightShadowsWithMaps),w.push(_.numLightProbes),w.push(_.shadowMapType),w.push(_.toneMapping),w.push(_.numClippingPlanes),w.push(_.numClipIntersection),w.push(_.depthPacking)}function y(w,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const _=m[w.type];let I;if(_){const k=En[_];I=mi.clone(k.uniforms)}else I=w.uniforms;return I}function R(w,_){let I;for(let k=0,O=h.length;k<O;k++){const A=h[k];if(A.cacheKey===_){I=A,++I.usedTimes;break}}return I===void 0&&(I=new wy(i,_,w,r),h.push(I)),I}function b(w){if(--w.usedTimes===0){const _=h.indexOf(w);h[_]=h[h.length-1],h.pop(),w.destroy()}}function C(w){c.remove(w)}function E(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:b,releaseShaderCache:C,programs:h,dispose:E}}function Ay(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ry(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _u(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,m,v,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),e++,p}function a(u,f,d,m,v,g){const p=o(u,f,d,m,v,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(u,f,d,m,v,g){const p=o(u,f,d,m,v,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||Ry),n.length>1&&n.sort(f||_u),s.length>1&&s.sort(f||_u)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Py(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new wu,i.set(n,[o])):s>=r.length?(o=new wu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new xe};break;case"SpotLight":t={position:new D,direction:new D,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Ly(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Dy=0;function Iy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Uy(i){const e=new Cy,t=Ly(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new tt,o=new tt;function a(l){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,M=0,y=0,x=0,R=0,b=0,C=0;l.sort(Iy);for(let w=0,_=l.length;w<_;w++){const I=l[w],k=I.color,O=I.intensity,A=I.distance,L=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=k.r*O,u+=k.g*O,f+=k.b*O;else if(I.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(I.sh.coefficients[N],O);C++}else if(I.isDirectionalLight){const N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const z=I.shadow,F=t.get(I);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,n.directionalShadow[d]=F,n.directionalShadowMap[d]=L,n.directionalShadowMatrix[d]=I.shadow.matrix,M++}n.directional[d]=N,d++}else if(I.isSpotLight){const N=e.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(k).multiplyScalar(O),N.distance=A,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,n.spot[v]=N;const z=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,z.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[v]=z.matrix,I.castShadow){const F=t.get(I);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,n.spotShadow[v]=F,n.spotShadowMap[v]=L,x++}v++}else if(I.isRectAreaLight){const N=e.get(I);N.color.copy(k).multiplyScalar(O),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=N,g++}else if(I.isPointLight){const N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),N.distance=I.distance,N.decay=I.decay,I.castShadow){const z=I.shadow,F=t.get(I);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,F.shadowCameraNear=z.camera.near,F.shadowCameraFar=z.camera.far,n.pointShadow[m]=F,n.pointShadowMap[m]=L,n.pointShadowMatrix[m]=I.shadow.matrix,y++}n.point[m]=N,m++}else if(I.isHemisphereLight){const N=e.get(I);N.skyColor.copy(I.color).multiplyScalar(O),N.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[p]=N,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const E=n.hash;(E.directionalLength!==d||E.pointLength!==m||E.spotLength!==v||E.rectAreaLength!==g||E.hemiLength!==p||E.numDirectionalShadows!==M||E.numPointShadows!==y||E.numSpotShadows!==x||E.numSpotMaps!==R||E.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+R-b,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,E.directionalLength=d,E.pointLength=m,E.spotLength=v,E.rectAreaLength=g,E.hemiLength=p,E.numDirectionalShadows=M,E.numPointShadows=y,E.numSpotShadows=x,E.numSpotMaps=R,E.numLightProbes=C,n.version=Dy++)}function c(l,h){let u=0,f=0,d=0,m=0,v=0;const g=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(y.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function Su(i){const e=new Uy(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Ny(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Su(i),e.set(s,[a])):r>=o.length?(a=new Su(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Oy extends Mi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fy extends Mi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,By=`uniform sampler2D shadow_pass;
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
}`;function ky(i,e,t){let n=new Gl;const s=new ce,r=new ce,o=new mt,a=new Oy({depthPacking:ym}),c=new Fy,l={},h=t.maxTextureSize,u={[xi]:Yt,[Yt]:xi,[Lt]:Lt},f=new _t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:zy,fragmentShader:By}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new bt;m.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ee(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bd;let p=this.type;this.render=function(b,C,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const w=i.getRenderTarget(),_=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Yn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=p!==Vn&&this.type===Vn,A=p===Vn&&this.type!==Vn;for(let L=0,N=b.length;L<N;L++){const z=b[L],F=z.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const K=F.getFrameExtents();if(s.multiply(K),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,F.mapSize.y=r.y)),F.map===null||O===!0||A===!0){const B=this.type!==Vn?{minFilter:jt,magFilter:jt}:{};F.map!==null&&F.map.dispose(),F.map=new rn(s.x,s.y,B),F.map.texture.name=z.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const le=F.getViewportCount();for(let B=0;B<le;B++){const J=F.getViewport(B);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),k.viewport(o),F.updateMatrices(z,B),n=F.getFrustum(),x(C,E,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===Vn&&M(F,E),F.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,_,I)};function M(b,C){const E=e.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new rn(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,E,f,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,E,d,v,null)}function y(b,C,E,w){let _=null;const I=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)_=I;else if(_=E.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=_.uuid,O=C.uuid;let A=l[k];A===void 0&&(A={},l[k]=A);let L=A[O];L===void 0&&(L=_.clone(),A[O]=L,C.addEventListener("dispose",R)),_=L}if(_.visible=C.visible,_.wireframe=C.wireframe,w===Vn?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:u[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,E.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const k=i.properties.get(_);k.light=E}return _}function x(b,C,E,w,_){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&_===Vn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const O=e.update(b),A=b.material;if(Array.isArray(A)){const L=O.groups;for(let N=0,z=L.length;N<z;N++){const F=L[N],K=A[F.materialIndex];if(K&&K.visible){const le=y(b,K,w,_);b.onBeforeShadow(i,b,C,E,O,le,F),i.renderBufferDirect(E,null,O,le,b,F),b.onAfterShadow(i,b,C,E,O,le,F)}}}else if(A.visible){const L=y(b,A,w,_);b.onBeforeShadow(i,b,C,E,O,L,null),i.renderBufferDirect(E,null,O,L,b,null),b.onAfterShadow(i,b,C,E,O,L,null)}}const k=b.children;for(let O=0,A=k.length;O<A;O++)x(k[O],C,E,w,_)}function R(b){b.target.removeEventListener("dispose",R);for(const E in l){const w=l[E],_=b.target.uuid;_ in w&&(w[_].dispose(),delete w[_])}}}const Hy={[Lc]:Dc,[Ic]:Oc,[Uc]:Fc,[Os]:Nc,[Dc]:Lc,[Oc]:Ic,[Fc]:Uc,[Nc]:Os};function Gy(i,e){function t(){let H=!1;const we=new mt;let Z=null;const oe=new mt(0,0,0,0);return{setMask:function(Re){Z!==Re&&!H&&(i.colorMask(Re,Re,Re,Re),Z=Re)},setLocked:function(Re){H=Re},setClear:function(Re,be,Ye,At,zt){zt===!0&&(Re*=At,be*=At,Ye*=At),we.set(Re,be,Ye,At),oe.equals(we)===!1&&(i.clearColor(Re,be,Ye,At),oe.copy(we))},reset:function(){H=!1,Z=null,oe.set(-1,0,0,0)}}}function n(){let H=!1,we=!1,Z=null,oe=null,Re=null;return{setReversed:function(be){if(we!==be){const Ye=e.get("EXT_clip_control");we?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);const At=Re;Re=null,this.setClear(At)}we=be},getReversed:function(){return we},setTest:function(be){be?de(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(be){Z!==be&&!H&&(i.depthMask(be),Z=be)},setFunc:function(be){if(we&&(be=Hy[be]),oe!==be){switch(be){case Lc:i.depthFunc(i.NEVER);break;case Dc:i.depthFunc(i.ALWAYS);break;case Ic:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case Uc:i.depthFunc(i.EQUAL);break;case Nc:i.depthFunc(i.GEQUAL);break;case Oc:i.depthFunc(i.GREATER);break;case Fc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=be}},setLocked:function(be){H=be},setClear:function(be){Re!==be&&(we&&(be=1-be),i.clearDepth(be),Re=be)},reset:function(){H=!1,Z=null,oe=null,Re=null,we=!1}}}function s(){let H=!1,we=null,Z=null,oe=null,Re=null,be=null,Ye=null,At=null,zt=null;return{setTest:function(ht){H||(ht?de(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(ht){we!==ht&&!H&&(i.stencilMask(ht),we=ht)},setFunc:function(ht,gn,Nn){(Z!==ht||oe!==gn||Re!==Nn)&&(i.stencilFunc(ht,gn,Nn),Z=ht,oe=gn,Re=Nn)},setOp:function(ht,gn,Nn){(be!==ht||Ye!==gn||At!==Nn)&&(i.stencilOp(ht,gn,Nn),be=ht,Ye=gn,At=Nn)},setLocked:function(ht){H=ht},setClear:function(ht){zt!==ht&&(i.clearStencil(ht),zt=ht)},reset:function(){H=!1,we=null,Z=null,oe=null,Re=null,be=null,Ye=null,At=null,zt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,M=null,y=null,x=null,R=null,b=null,C=new xe(0,0,0),E=0,w=!1,_=null,I=null,k=null,O=null,A=null;const L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,z=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=z>=1):F.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=z>=2);let K=null,le={};const B=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),Me=new mt().fromArray(B),j=new mt().fromArray(J);function he(H,we,Z,oe){const Re=new Uint8Array(4),be=i.createTexture();i.bindTexture(H,be),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<Z;Ye++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(we+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return be}const _e={};_e[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(Os),ue(!1),Se(Ah),de(i.CULL_FACE),U(Yn);function de(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function Fe(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function Le(H,we){return u[H]!==we?(i.bindFramebuffer(H,we),u[H]=we,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=we),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=we),!0):!1}function Ie(H,we){let Z=d,oe=!1;if(H){Z=f.get(we),Z===void 0&&(Z=[],f.set(we,Z));const Re=H.textures;if(Z.length!==Re.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let be=0,Ye=Re.length;be<Ye;be++)Z[be]=i.COLOR_ATTACHMENT0+be;Z.length=Re.length,oe=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,oe=!0);oe&&i.drawBuffers(Z)}function We(H){return m!==H?(i.useProgram(H),m=H,!0):!1}const X={[Ii]:i.FUNC_ADD,[Jp]:i.FUNC_SUBTRACT,[Qp]:i.FUNC_REVERSE_SUBTRACT};X[$p]=i.MIN,X[em]=i.MAX;const ie={[tm]:i.ZERO,[nm]:i.ONE,[im]:i.SRC_COLOR,[Pc]:i.SRC_ALPHA,[lm]:i.SRC_ALPHA_SATURATE,[am]:i.DST_COLOR,[rm]:i.DST_ALPHA,[sm]:i.ONE_MINUS_SRC_COLOR,[Cc]:i.ONE_MINUS_SRC_ALPHA,[cm]:i.ONE_MINUS_DST_COLOR,[om]:i.ONE_MINUS_DST_ALPHA,[hm]:i.CONSTANT_COLOR,[um]:i.ONE_MINUS_CONSTANT_COLOR,[dm]:i.CONSTANT_ALPHA,[fm]:i.ONE_MINUS_CONSTANT_ALPHA};function U(H,we,Z,oe,Re,be,Ye,At,zt,ht){if(H===Yn){v===!0&&(Fe(i.BLEND),v=!1);return}if(v===!1&&(de(i.BLEND),v=!0),H!==Kp){if(H!==g||ht!==w){if((p!==Ii||x!==Ii)&&(i.blendEquation(i.FUNC_ADD),p=Ii,x=Ii),ht)switch(H){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFunc(i.ONE,i.ONE);break;case Rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}M=null,y=null,R=null,b=null,C.set(0,0,0),E=0,g=H,w=ht}return}Re=Re||we,be=be||Z,Ye=Ye||oe,(we!==p||Re!==x)&&(i.blendEquationSeparate(X[we],X[Re]),p=we,x=Re),(Z!==M||oe!==y||be!==R||Ye!==b)&&(i.blendFuncSeparate(ie[Z],ie[oe],ie[be],ie[Ye]),M=Z,y=oe,R=be,b=Ye),(At.equals(C)===!1||zt!==E)&&(i.blendColor(At.r,At.g,At.b,zt),C.copy(At),E=zt),g=H,w=!1}function Ee(H,we){H.side===Lt?Fe(i.CULL_FACE):de(i.CULL_FACE);let Z=H.side===Yt;we&&(Z=!Z),ue(Z),H.blending===Rs&&H.transparent===!1?U(Yn):U(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const oe=H.stencilWrite;a.setTest(oe),oe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ke(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(H){_!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),_=H)}function Se(H){H!==jp?(de(i.CULL_FACE),H!==I&&(H===Ah?i.cullFace(i.BACK):H===Zp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),I=H}function pe(H){H!==k&&(N&&i.lineWidth(H),k=H)}function ke(H,we,Z){H?(de(i.POLYGON_OFFSET_FILL),(O!==we||A!==Z)&&(i.polygonOffset(we,Z),O=we,A=Z)):Fe(i.POLYGON_OFFSET_FILL)}function Ae(H){H?de(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function P(H){H===void 0&&(H=i.TEXTURE0+L-1),K!==H&&(i.activeTexture(H),K=H)}function S(H,we,Z){Z===void 0&&(K===null?Z=i.TEXTURE0+L-1:Z=K);let oe=le[Z];oe===void 0&&(oe={type:void 0,texture:void 0},le[Z]=oe),(oe.type!==H||oe.texture!==we)&&(K!==Z&&(i.activeTexture(Z),K=Z),i.bindTexture(H,we||_e[H]),oe.type=H,oe.texture=we)}function W(){const H=le[K];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function re(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(H){Me.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Me.copy(H))}function Pe(H){j.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),j.copy(H))}function Je(H,we){let Z=l.get(we);Z===void 0&&(Z=new WeakMap,l.set(we,Z));let oe=Z.get(H);oe===void 0&&(oe=i.getUniformBlockIndex(we,H.name),Z.set(H,oe))}function qe(H,we){const oe=l.get(we).get(H);c.get(we)!==oe&&(i.uniformBlockBinding(we,oe,H.__bindingPointIndex),c.set(we,oe))}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,le={},u={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,M=null,y=null,x=null,R=null,b=null,C=new xe(0,0,0),E=0,w=!1,_=null,I=null,k=null,O=null,A=null,Me.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Fe,bindFramebuffer:Le,drawBuffers:Ie,useProgram:We,setBlending:U,setMaterial:Ee,setFlipSided:ue,setCullFace:Se,setLineWidth:pe,setPolygonOffset:ke,setScissorTest:Ae,activeTexture:P,bindTexture:S,unbindTexture:W,compressedTexImage2D:$,compressedTexImage3D:ae,texImage2D:ge,texImage3D:ze,updateUBOMapping:Je,uniformBlockBinding:qe,texStorage2D:He,texStorage3D:Q,texSubImage2D:te,texSubImage3D:re,compressedTexSubImage2D:ne,compressedTexSubImage3D:se,scissor:Ge,viewport:Pe,reset:lt}}function bu(i,e,t,n){const s=Vy(n);switch(t){case Jd:return i*e;case $d:return i*e;case ef:return i*e*2;case aa:return i*e/s.components*s.byteLength;case Fl:return i*e/s.components*s.byteLength;case tf:return i*e*2/s.components*s.byteLength;case zl:return i*e*2/s.components*s.byteLength;case Qd:return i*e*3/s.components*s.byteLength;case un:return i*e*4/s.components*s.byteLength;case Bl:return i*e*4/s.components*s.byteLength;case Bo:case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ho:case Go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gc:case Wc:return Math.max(i,16)*Math.max(e,8)/4;case Hc:case Vc:return Math.max(i,8)*Math.max(e,8)/2;case Xc:case qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $c:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case tl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ol:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case al:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Vo:case cl:case ll:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nf:case hl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ul:case dl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vy(i){switch(i){case Zn:case jd:return{byteLength:1,components:1};case Ir:case Zd:case wn:return{byteLength:2,components:1};case Nl:case Ol:return{byteLength:2,components:4};case ki:case Ul:case An:return{byteLength:4,components:1};case Kd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Wy(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,S){return d?new OffscreenCanvas(P,S):Ur("canvas")}function v(P,S,W){let $=1;const ae=Ae(P);if((ae.width>W||ae.height>W)&&($=W/Math.max(ae.width,ae.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const te=Math.floor($*ae.width),re=Math.floor($*ae.height);u===void 0&&(u=m(te,re));const ne=S?m(te,re):u;return ne.width=te,ne.height=re,ne.getContext("2d").drawImage(P,0,0,te,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+te+"x"+re+")."),ne}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,S,W,$,ae=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let te=S;if(S===i.RED&&(W===i.FLOAT&&(te=i.R32F),W===i.HALF_FLOAT&&(te=i.R16F),W===i.UNSIGNED_BYTE&&(te=i.R8)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.R8UI),W===i.UNSIGNED_SHORT&&(te=i.R16UI),W===i.UNSIGNED_INT&&(te=i.R32UI),W===i.BYTE&&(te=i.R8I),W===i.SHORT&&(te=i.R16I),W===i.INT&&(te=i.R32I)),S===i.RG&&(W===i.FLOAT&&(te=i.RG32F),W===i.HALF_FLOAT&&(te=i.RG16F),W===i.UNSIGNED_BYTE&&(te=i.RG8)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.RG8UI),W===i.UNSIGNED_SHORT&&(te=i.RG16UI),W===i.UNSIGNED_INT&&(te=i.RG32UI),W===i.BYTE&&(te=i.RG8I),W===i.SHORT&&(te=i.RG16I),W===i.INT&&(te=i.RG32I)),S===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.RGB8UI),W===i.UNSIGNED_SHORT&&(te=i.RGB16UI),W===i.UNSIGNED_INT&&(te=i.RGB32UI),W===i.BYTE&&(te=i.RGB8I),W===i.SHORT&&(te=i.RGB16I),W===i.INT&&(te=i.RGB32I)),S===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),W===i.UNSIGNED_INT&&(te=i.RGBA32UI),W===i.BYTE&&(te=i.RGBA8I),W===i.SHORT&&(te=i.RGBA16I),W===i.INT&&(te=i.RGBA32I)),S===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),S===i.RGBA){const re=ae?ca:nt.getTransfer($);W===i.FLOAT&&(te=i.RGBA32F),W===i.HALF_FLOAT&&(te=i.RGBA16F),W===i.UNSIGNED_BYTE&&(te=re===ut?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(P,S){let W;return P?S===null||S===ki||S===Bs?W=i.DEPTH24_STENCIL8:S===An?W=i.DEPTH32F_STENCIL8:S===Ir&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ki||S===Bs?W=i.DEPTH_COMPONENT24:S===An?W=i.DEPTH_COMPONENT32F:S===Ir&&(W=i.DEPTH_COMPONENT16),W}function R(P,S){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==jt&&P.minFilter!==qt?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function b(P){const S=P.target;S.removeEventListener("dispose",b),E(S),S.isVideoTexture&&h.delete(S)}function C(P){const S=P.target;S.removeEventListener("dispose",C),_(S)}function E(P){const S=n.get(P);if(S.__webglInit===void 0)return;const W=P.source,$=f.get(W);if($){const ae=$[S.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(P),Object.keys($).length===0&&f.delete(W)}n.remove(P)}function w(P){const S=n.get(P);i.deleteTexture(S.__webglTexture);const W=P.source,$=f.get(W);delete $[S.__cacheKey],o.memory.textures--}function _(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let ae=0;ae<S.__webglFramebuffer[$].length;ae++)i.deleteFramebuffer(S.__webglFramebuffer[$][ae]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=P.textures;for(let $=0,ae=W.length;$<ae;$++){const te=n.get(W[$]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(W[$])}n.remove(P)}let I=0;function k(){I=0}function O(){const P=I;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),I+=1,P}function A(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function L(P,S){const W=n.get(P);if(P.isVideoTexture&&pe(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(W,P,S);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function N(P,S){const W=n.get(P);if(P.version>0&&W.__version!==P.version){j(W,P,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function z(P,S){const W=n.get(P);if(P.version>0&&W.__version!==P.version){j(W,P,S);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function F(P,S){const W=n.get(P);if(P.version>0&&W.__version!==P.version){he(W,P,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}const K={[Zo]:i.REPEAT,[Oi]:i.CLAMP_TO_EDGE,[kc]:i.MIRRORED_REPEAT},le={[jt]:i.NEAREST,[vm]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[wa]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},B={[_m]:i.NEVER,[Am]:i.ALWAYS,[wm]:i.LESS,[sf]:i.LEQUAL,[Sm]:i.EQUAL,[Em]:i.GEQUAL,[bm]:i.GREATER,[Tm]:i.NOTEQUAL};function J(P,S){if(S.type===An&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===qt||S.magFilter===wa||S.magFilter===$r||S.magFilter===Fi||S.minFilter===qt||S.minFilter===wa||S.minFilter===$r||S.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,K[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,K[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,K[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,le[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,le[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,B[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===jt||S.minFilter!==$r&&S.minFilter!==Fi||S.type===An&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Me(P,S){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",b));const $=S.source;let ae=f.get($);ae===void 0&&(ae={},f.set($,ae));const te=A(S);if(te!==P.__cacheKey){ae[te]===void 0&&(ae[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ae[te].usedTimes++;const re=ae[P.__cacheKey];re!==void 0&&(ae[P.__cacheKey].usedTimes--,re.usedTimes===0&&w(S)),P.__cacheKey=te,P.__webglTexture=ae[te].texture}return W}function j(P,S,W){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);const ae=Me(P,S),te=S.source;t.bindTexture($,P.__webglTexture,i.TEXTURE0+W);const re=n.get(te);if(te.version!==re.__version||ae===!0){t.activeTexture(i.TEXTURE0+W);const ne=nt.getPrimaries(nt.workingColorSpace),se=S.colorSpace===hi?null:nt.getPrimaries(S.colorSpace),He=S.colorSpace===hi||ne===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Q=v(S.image,!1,s.maxTextureSize);Q=ke(S,Q);const ge=r.convert(S.format,S.colorSpace),ze=r.convert(S.type);let Ge=y(S.internalFormat,ge,ze,S.colorSpace,S.isVideoTexture);J($,S);let Pe;const Je=S.mipmaps,qe=S.isVideoTexture!==!0,lt=re.__version===void 0||ae===!0,H=te.dataReady,we=R(S,Q);if(S.isDepthTexture)Ge=x(S.format===ks,S.type),lt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Ge,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Ge,Q.width,Q.height,0,ge,ze,null));else if(S.isDataTexture)if(Je.length>0){qe&&lt&&t.texStorage2D(i.TEXTURE_2D,we,Ge,Je[0].width,Je[0].height);for(let Z=0,oe=Je.length;Z<oe;Z++)Pe=Je[Z],qe?H&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Pe.width,Pe.height,ge,ze,Pe.data):t.texImage2D(i.TEXTURE_2D,Z,Ge,Pe.width,Pe.height,0,ge,ze,Pe.data);S.generateMipmaps=!1}else qe?(lt&&t.texStorage2D(i.TEXTURE_2D,we,Ge,Q.width,Q.height),H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,ge,ze,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Ge,Q.width,Q.height,0,ge,ze,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Ge,Je[0].width,Je[0].height,Q.depth);for(let Z=0,oe=Je.length;Z<oe;Z++)if(Pe=Je[Z],S.format!==un)if(ge!==null)if(qe){if(H)if(S.layerUpdates.size>0){const Re=bu(Pe.width,Pe.height,S.format,S.type);for(const be of S.layerUpdates){const Ye=Pe.data.subarray(be*Re/Pe.data.BYTES_PER_ELEMENT,(be+1)*Re/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,be,Pe.width,Pe.height,1,ge,Ye)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Pe.width,Pe.height,Q.depth,ge,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Ge,Pe.width,Pe.height,Q.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Pe.width,Pe.height,Q.depth,ge,ze,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,Ge,Pe.width,Pe.height,Q.depth,0,ge,ze,Pe.data)}else{qe&&lt&&t.texStorage2D(i.TEXTURE_2D,we,Ge,Je[0].width,Je[0].height);for(let Z=0,oe=Je.length;Z<oe;Z++)Pe=Je[Z],S.format!==un?ge!==null?qe?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Pe.width,Pe.height,ge,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,Ge,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?H&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Pe.width,Pe.height,ge,ze,Pe.data):t.texImage2D(i.TEXTURE_2D,Z,Ge,Pe.width,Pe.height,0,ge,ze,Pe.data)}else if(S.isDataArrayTexture)if(qe){if(lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Ge,Q.width,Q.height,Q.depth),H)if(S.layerUpdates.size>0){const Z=bu(Q.width,Q.height,S.format,S.type);for(const oe of S.layerUpdates){const Re=Q.data.subarray(oe*Z/Q.data.BYTES_PER_ELEMENT,(oe+1)*Z/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,Q.width,Q.height,1,ge,ze,Re)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ge,ze,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,Q.width,Q.height,Q.depth,0,ge,ze,Q.data);else if(S.isData3DTexture)qe?(lt&&t.texStorage3D(i.TEXTURE_3D,we,Ge,Q.width,Q.height,Q.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ge,ze,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,Q.width,Q.height,Q.depth,0,ge,ze,Q.data);else if(S.isFramebufferTexture){if(lt)if(qe)t.texStorage2D(i.TEXTURE_2D,we,Ge,Q.width,Q.height);else{let Z=Q.width,oe=Q.height;for(let Re=0;Re<we;Re++)t.texImage2D(i.TEXTURE_2D,Re,Ge,Z,oe,0,ge,ze,null),Z>>=1,oe>>=1}}else if(Je.length>0){if(qe&&lt){const Z=Ae(Je[0]);t.texStorage2D(i.TEXTURE_2D,we,Ge,Z.width,Z.height)}for(let Z=0,oe=Je.length;Z<oe;Z++)Pe=Je[Z],qe?H&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ge,ze,Pe):t.texImage2D(i.TEXTURE_2D,Z,Ge,ge,ze,Pe);S.generateMipmaps=!1}else if(qe){if(lt){const Z=Ae(Q);t.texStorage2D(i.TEXTURE_2D,we,Ge,Z.width,Z.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,ze,Q)}else t.texImage2D(i.TEXTURE_2D,0,Ge,ge,ze,Q);g(S)&&p($),re.__version=te.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function he(P,S,W){if(S.image.length!==6)return;const $=Me(P,S),ae=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);const te=n.get(ae);if(ae.version!==te.__version||$===!0){t.activeTexture(i.TEXTURE0+W);const re=nt.getPrimaries(nt.workingColorSpace),ne=S.colorSpace===hi?null:nt.getPrimaries(S.colorSpace),se=S.colorSpace===hi||re===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const He=S.isCompressedTexture||S.image[0].isCompressedTexture,Q=S.image[0]&&S.image[0].isDataTexture,ge=[];for(let oe=0;oe<6;oe++)!He&&!Q?ge[oe]=v(S.image[oe],!0,s.maxCubemapSize):ge[oe]=Q?S.image[oe].image:S.image[oe],ge[oe]=ke(S,ge[oe]);const ze=ge[0],Ge=r.convert(S.format,S.colorSpace),Pe=r.convert(S.type),Je=y(S.internalFormat,Ge,Pe,S.colorSpace),qe=S.isVideoTexture!==!0,lt=te.__version===void 0||$===!0,H=ae.dataReady;let we=R(S,ze);J(i.TEXTURE_CUBE_MAP,S);let Z;if(He){qe&&lt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Je,ze.width,ze.height);for(let oe=0;oe<6;oe++){Z=ge[oe].mipmaps;for(let Re=0;Re<Z.length;Re++){const be=Z[Re];S.format!==un?Ge!==null?qe?H&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re,0,0,be.width,be.height,Ge,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re,Je,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re,0,0,be.width,be.height,Ge,Pe,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re,Je,be.width,be.height,0,Ge,Pe,be.data)}}}else{if(Z=S.mipmaps,qe&&lt){Z.length>0&&we++;const oe=Ae(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Je,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Q){qe?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ge[oe].width,ge[oe].height,Ge,Pe,ge[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Je,ge[oe].width,ge[oe].height,0,Ge,Pe,ge[oe].data);for(let Re=0;Re<Z.length;Re++){const Ye=Z[Re].image[oe].image;qe?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re+1,0,0,Ye.width,Ye.height,Ge,Pe,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re+1,Je,Ye.width,Ye.height,0,Ge,Pe,Ye.data)}}else{qe?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ge,Pe,ge[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Je,Ge,Pe,ge[oe]);for(let Re=0;Re<Z.length;Re++){const be=Z[Re];qe?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re+1,0,0,Ge,Pe,be.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re+1,Je,Ge,Pe,be.image[oe])}}}g(S)&&p(i.TEXTURE_CUBE_MAP),te.__version=ae.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function _e(P,S,W,$,ae,te){const re=r.convert(W.format,W.colorSpace),ne=r.convert(W.type),se=y(W.internalFormat,re,ne,W.colorSpace),He=n.get(S),Q=n.get(W);if(Q.__renderTarget=S,!He.__hasExternalTextures){const ge=Math.max(1,S.width>>te),ze=Math.max(1,S.height>>te);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,te,se,ge,ze,S.depth,0,re,ne,null):t.texImage2D(ae,te,se,ge,ze,0,re,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Se(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ae,Q.__webglTexture,0,ue(S)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ae,Q.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(P,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){const $=S.depthTexture,ae=$&&$.isDepthTexture?$.type:null,te=x(S.stencilBuffer,ae),re=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=ue(S);Se(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,te,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,te,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,te,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,P)}else{const $=S.textures;for(let ae=0;ae<$.length;ae++){const te=$[ae],re=r.convert(te.format,te.colorSpace),ne=r.convert(te.type),se=y(te.internalFormat,re,ne,te.colorSpace),He=ue(S);W&&Se(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,se,S.width,S.height):Se(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,se,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,se,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),L(S.depthTexture,0);const ae=$.__webglTexture,te=ue(S);if(S.depthTexture.format===Ps)Se(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(S.depthTexture.format===ks)Se(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Le(P){const S=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const $=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const ae=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",ae)};$.addEventListener("dispose",ae),S.__depthDisposeCallback=ae}S.__boundDepthTexture=$}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Fe(S.__webglFramebuffer,P)}else if(W){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),de(S.__webglDepthbuffer[$],P,!1);else{const ae=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,te)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),de(S.__webglDepthbuffer,P,!1);else{const $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(P,S,W){const $=n.get(P);S!==void 0&&_e($.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Le(P)}function We(P){const S=P.texture,W=n.get(P),$=n.get(S);P.addEventListener("dispose",C);const ae=P.textures,te=P.isWebGLCubeRenderTarget===!0,re=ae.length>1;if(re||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,o.memory.textures++),te){W.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[ne]=[];for(let se=0;se<S.mipmaps.length;se++)W.__webglFramebuffer[ne][se]=i.createFramebuffer()}else W.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let ne=0;ne<S.mipmaps.length;ne++)W.__webglFramebuffer[ne]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(re)for(let ne=0,se=ae.length;ne<se;ne++){const He=n.get(ae[ne]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Se(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ne=0;ne<ae.length;ne++){const se=ae[ne];W.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ne]);const He=r.convert(se.format,se.colorSpace),Q=r.convert(se.type),ge=y(se.internalFormat,He,Q,se.colorSpace,P.isXRRenderTarget===!0),ze=ue(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,ge,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,W.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),de(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),J(i.TEXTURE_CUBE_MAP,S);for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)_e(W.__webglFramebuffer[ne][se],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se);else _e(W.__webglFramebuffer[ne],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);g(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let ne=0,se=ae.length;ne<se;ne++){const He=ae[ne],Q=n.get(He);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),J(i.TEXTURE_2D,He),_e(W.__webglFramebuffer,P,He,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,0),g(He)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ne=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,$.__webglTexture),J(ne,S),S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)_e(W.__webglFramebuffer[se],P,S,i.COLOR_ATTACHMENT0,ne,se);else _e(W.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,ne,0);g(S)&&p(ne),t.unbindTexture()}P.depthBuffer&&Le(P)}function X(P){const S=P.textures;for(let W=0,$=S.length;W<$;W++){const ae=S[W];if(g(ae)){const te=M(P),re=n.get(ae).__webglTexture;t.bindTexture(te,re),p(te),t.unbindTexture()}}}const ie=[],U=[];function Ee(P){if(P.samples>0){if(Se(P)===!1){const S=P.textures,W=P.width,$=P.height;let ae=i.COLOR_BUFFER_BIT;const te=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(P),ne=S.length>1;if(ne)for(let se=0;se<S.length;se++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let se=0;se<S.length;se++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[se]);const He=n.get(S[se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,W,$,0,0,W,$,ae,i.NEAREST),c===!0&&(ie.length=0,U.length=0,ie.push(i.COLOR_ATTACHMENT0+se),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ie.push(te),U.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let se=0;se<S.length;se++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,re.__webglColorRenderbuffer[se]);const He=n.get(S[se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ue(P){return Math.min(s.maxSamples,P.samples)}function Se(P){const S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pe(P){const S=o.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function ke(P,S){const W=P.colorSpace,$=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Ks&&W!==hi&&(nt.getTransfer(W)===ut?($!==un||ae!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}function Ae(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=L,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=F,this.rebindTextures=Ie,this.setupRenderTarget=We,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Se}function Xy(i,e){function t(n,s=hi){let r;const o=nt.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===Nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ol)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jd)return i.BYTE;if(n===Zd)return i.SHORT;if(n===Ir)return i.UNSIGNED_SHORT;if(n===Ul)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===wn)return i.HALF_FLOAT;if(n===Jd)return i.ALPHA;if(n===Qd)return i.RGB;if(n===un)return i.RGBA;if(n===$d)return i.LUMINANCE;if(n===ef)return i.LUMINANCE_ALPHA;if(n===Ps)return i.DEPTH_COMPONENT;if(n===ks)return i.DEPTH_STENCIL;if(n===aa)return i.RED;if(n===Fl)return i.RED_INTEGER;if(n===tf)return i.RG;if(n===zl)return i.RG_INTEGER;if(n===Bl)return i.RGBA_INTEGER;if(n===Bo||n===ko||n===Ho||n===Go)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hc||n===Gc||n===Vc||n===Wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xc||n===qc||n===Yc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xc||n===qc)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jc||n===Zc||n===Kc||n===Jc||n===Qc||n===$c||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$c)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===el)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===il)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ol)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===al)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===cl||n===ll)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Vo)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nf||n===hl||n===ul||n===dl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ul)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class qy extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ve extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yy={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zy=`
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

}`;class Ky{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Dt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _t({vertexShader:jy,fragmentShader:Zy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ee(new Pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jy extends Js{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null;const v=new Ky,g=t.getContextAttributes();let p=null,M=null;const y=[],x=[],R=new ce;let b=null;const C=new Jt;C.viewport=new mt;const E=new Jt;E.viewport=new mt;const w=[C,E],_=new qy;let I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let he=y[j];return he===void 0&&(he=new Za,y[j]=he),he.getTargetRaySpace()},this.getControllerGrip=function(j){let he=y[j];return he===void 0&&(he=new Za,y[j]=he),he.getGripSpace()},this.getHand=function(j){let he=y[j];return he===void 0&&(he=new Za,y[j]=he),he.getHandSpace()};function O(j){const he=x.indexOf(j.inputSource);if(he===-1)return;const _e=y[he];_e!==void 0&&(_e.update(j.inputSource,j.frame,l||o),_e.dispatchEvent({type:j.type,data:j.inputSource}))}function A(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",A),s.removeEventListener("inputsourceschange",L);for(let j=0;j<y.length;j++){const he=x[j];he!==null&&(x[j]=null,y[j].disconnect(he))}I=null,k=null,v.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,M=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",A),s.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){const he={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new rn(d.framebufferWidth,d.framebufferHeight,{format:un,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let he=null,_e=null,de=null;g.depth&&(de=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=g.stencil?ks:Ps,_e=g.stencil?Bs:ki);const Fe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Fe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new rn(f.textureWidth,f.textureHeight,{format:un,type:Zn,depthTexture:new vf(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function L(j){for(let he=0;he<j.removed.length;he++){const _e=j.removed[he],de=x.indexOf(_e);de>=0&&(x[de]=null,y[de].disconnect(_e))}for(let he=0;he<j.added.length;he++){const _e=j.added[he];let de=x.indexOf(_e);if(de===-1){for(let Le=0;Le<y.length;Le++)if(Le>=x.length){x.push(_e),de=Le;break}else if(x[Le]===null){x[Le]=_e,de=Le;break}if(de===-1)break}const Fe=y[de];Fe&&Fe.connect(_e)}}const N=new D,z=new D;function F(j,he,_e){N.setFromMatrixPosition(he.matrixWorld),z.setFromMatrixPosition(_e.matrixWorld);const de=N.distanceTo(z),Fe=he.projectionMatrix.elements,Le=_e.projectionMatrix.elements,Ie=Fe[14]/(Fe[10]-1),We=Fe[14]/(Fe[10]+1),X=(Fe[9]+1)/Fe[5],ie=(Fe[9]-1)/Fe[5],U=(Fe[8]-1)/Fe[0],Ee=(Le[8]+1)/Le[0],ue=Ie*U,Se=Ie*Ee,pe=de/(-U+Ee),ke=pe*-U;if(he.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ke),j.translateZ(pe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Fe[10]===-1)j.projectionMatrix.copy(he.projectionMatrix),j.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ae=Ie+pe,P=We+pe,S=ue-ke,W=Se+(de-ke),$=X*We/P*Ae,ae=ie*We/P*Ae;j.projectionMatrix.makePerspective(S,W,$,ae,Ae,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function K(j,he){he===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(he.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let he=j.near,_e=j.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(_e=v.depthFar)),_.near=E.near=C.near=he,_.far=E.far=C.far=_e,(I!==_.near||k!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),I=_.near,k=_.far),C.layers.mask=j.layers.mask|2,E.layers.mask=j.layers.mask|4,_.layers.mask=C.layers.mask|E.layers.mask;const de=j.parent,Fe=_.cameras;K(_,de);for(let Le=0;Le<Fe.length;Le++)K(Fe[Le],de);Fe.length===2?F(_,C,E):_.projectionMatrix.copy(C.projectionMatrix),le(j,_,de)};function le(j,he,_e){_e===null?j.matrix.copy(he.matrixWorld):(j.matrix.copy(_e.matrixWorld),j.matrix.invert(),j.matrix.multiply(he.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(he.projectionMatrix),j.projectionMatrixInverse.copy(he.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Hs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let B=null;function J(j,he){if(h=he.getViewerPose(l||o),m=he,h!==null){const _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let de=!1;_e.length!==_.cameras.length&&(_.cameras.length=0,de=!0);for(let Le=0;Le<_e.length;Le++){const Ie=_e[Le];let We=null;if(d!==null)We=d.getViewport(Ie);else{const ie=u.getViewSubImage(f,Ie);We=ie.viewport,Le===0&&(e.setRenderTargetTextures(M,ie.colorTexture,f.ignoreDepthValues?void 0:ie.depthStencilTexture),e.setRenderTarget(M))}let X=w[Le];X===void 0&&(X=new Jt,X.layers.enable(Le),X.viewport=new mt,w[Le]=X),X.matrix.fromArray(Ie.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(Ie.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(We.x,We.y,We.width,We.height),Le===0&&(_.matrix.copy(X.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),de===!0&&_.cameras.push(X)}const Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Le=u.getDepthInformation(_e[0]);Le&&Le.isValid&&Le.texture&&v.init(e,Le,s.renderState)}}for(let _e=0;_e<y.length;_e++){const de=x[_e],Fe=y[_e];de!==null&&Fe!==void 0&&Fe.update(de,he,l||o)}B&&B(j,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),m=null}const Me=new gf;Me.setAnimationLoop(J),this.setAnimationLoop=function(j){B=j},this.dispose=function(){}}}const Ai=new Ln,Qy=new tt;function $y(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ff(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,M,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Yt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Yt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,x=M.envMapRotation;y&&(g.envMap.value=y,Ai.copy(x),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),g.envMapRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(Ai)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function eM(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const x=y.program;n.uniformBlockBinding(M,x)}function l(M,y){let x=s[M.id];x===void 0&&(m(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",g));const R=y.program;n.updateUBOMapping(M,R);const b=e.render.frame;r[M.id]!==b&&(f(M),r[M.id]=b)}function h(M){const y=u();M.__bindingPointIndex=y;const x=i.createBuffer(),R=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=s[M.id],x=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,C=x.length;b<C;b++){const E=Array.isArray(x[b])?x[b]:[x[b]];for(let w=0,_=E.length;w<_;w++){const I=E[w];if(d(I,b,w,R)===!0){const k=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let A=0;for(let L=0;L<O.length;L++){const N=O[L],z=v(N);typeof N=="number"||typeof N=="boolean"?(I.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,k+A,I.__data)):N.isMatrix3?(I.__data[0]=N.elements[0],I.__data[1]=N.elements[1],I.__data[2]=N.elements[2],I.__data[3]=0,I.__data[4]=N.elements[3],I.__data[5]=N.elements[4],I.__data[6]=N.elements[5],I.__data[7]=0,I.__data[8]=N.elements[6],I.__data[9]=N.elements[7],I.__data[10]=N.elements[8],I.__data[11]=0):(N.toArray(I.__data,A),A+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,y,x,R){const b=M.value,C=y+"_"+x;if(R[C]===void 0)return typeof b=="number"||typeof b=="boolean"?R[C]=b:R[C]=b.clone(),!0;{const E=R[C];if(typeof b=="number"||typeof b=="boolean"){if(E!==b)return R[C]=b,!0}else if(E.equals(b)===!1)return E.copy(b),!0}return!1}function m(M){const y=M.uniforms;let x=0;const R=16;for(let C=0,E=y.length;C<E;C++){const w=Array.isArray(y[C])?y[C]:[y[C]];for(let _=0,I=w.length;_<I;_++){const k=w[_],O=Array.isArray(k.value)?k.value:[k.value];for(let A=0,L=O.length;A<L;A++){const N=O[A],z=v(N),F=x%R,K=F%z.boundary,le=F+K;x+=K,le!==0&&R-le<z.storage&&(x+=R-le),k.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=z.storage}}}const b=x%R;return b>0&&(x+=R-b),M.__size=x,M.__cache={},this}function v(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){const y=M.target;y.removeEventListener("dispose",g);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class tM{constructor(e={}){const{canvas:t=Wm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=di,this.toneMappingExposure=1;const x=this;let R=!1,b=0,C=0,E=null,w=-1,_=null;const I=new mt,k=new mt;let O=null;const A=new xe(0);let L=0,N=t.width,z=t.height,F=1,K=null,le=null;const B=new mt(0,0,N,z),J=new mt(0,0,N,z);let Me=!1;const j=new Gl;let he=!1,_e=!1;const de=new tt,Fe=new tt,Le=new D,Ie=new mt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let X=!1;function ie(){return E===null?F:1}let U=n;function Ee(T,G){return t.getContext(T,G)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dl}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",be,!1),U===null){const G="webgl2";if(U=Ee(G,T),U===null)throw Ee(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ue,Se,pe,ke,Ae,P,S,W,$,ae,te,re,ne,se,He,Q,ge,ze,Ge,Pe,Je,qe,lt,H;function we(){ue=new ox(U),ue.init(),qe=new Xy(U,ue),Se=new ex(U,ue,e,qe),pe=new Gy(U,ue),Se.reverseDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),ke=new lx(U),Ae=new Ay,P=new Wy(U,ue,pe,Ae,Se,qe,ke),S=new nx(x),W=new rx(x),$=new g0(U),lt=new Qv(U,$),ae=new ax(U,$,ke,lt),te=new ux(U,ae,$,ke),Ge=new hx(U,Se,P),Q=new tx(Ae),re=new Ey(x,S,W,ue,Se,lt,Q),ne=new $y(x,Ae),se=new Py,He=new Ny(ue),ze=new Jv(x,S,W,pe,te,d,c),ge=new ky(x,te,Se),H=new eM(U,ke,Se,pe),Pe=new $v(U,ue,ke),Je=new cx(U,ue,ke),ke.programs=re.programs,x.capabilities=Se,x.extensions=ue,x.properties=Ae,x.renderLists=se,x.shadowMap=ge,x.state=pe,x.info=ke}we();const Z=new Jy(x,U);this.xr=Z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=ue.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ue.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(T){T!==void 0&&(F=T,this.setSize(N,z,!1))},this.getSize=function(T){return T.set(N,z)},this.setSize=function(T,G,q=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,z=G,t.width=Math.floor(T*F),t.height=Math.floor(G*F),q===!0&&(t.style.width=T+"px",t.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(N*F,z*F).floor()},this.setDrawingBufferSize=function(T,G,q){N=T,z=G,F=q,t.width=Math.floor(T*q),t.height=Math.floor(G*q),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(B)},this.setViewport=function(T,G,q,Y){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,G,q,Y),pe.viewport(I.copy(B).multiplyScalar(F).round())},this.getScissor=function(T){return T.copy(J)},this.setScissor=function(T,G,q,Y){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,G,q,Y),pe.scissor(k.copy(J).multiplyScalar(F).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(T){pe.setScissorTest(Me=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){le=T},this.getClearColor=function(T){return T.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(T=!0,G=!0,q=!0){let Y=0;if(T){let V=!1;if(E!==null){const fe=E.texture.format;V=fe===Bl||fe===zl||fe===Fl}if(V){const fe=E.texture.type,Te=fe===Zn||fe===ki||fe===Ir||fe===Bs||fe===Nl||fe===Ol,Ue=ze.getClearColor(),Ne=ze.getClearAlpha(),Xe=Ue.r,je=Ue.g,Oe=Ue.b;Te?(m[0]=Xe,m[1]=je,m[2]=Oe,m[3]=Ne,U.clearBufferuiv(U.COLOR,0,m)):(v[0]=Xe,v[1]=je,v[2]=Oe,v[3]=Ne,U.clearBufferiv(U.COLOR,0,v))}else Y|=U.COLOR_BUFFER_BIT}G&&(Y|=U.DEPTH_BUFFER_BIT),q&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",be,!1),se.dispose(),He.dispose(),Ae.dispose(),S.dispose(),W.dispose(),te.dispose(),lt.dispose(),H.dispose(),re.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",yh),Z.removeEventListener("sessionend",Mh),_i.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=ke.autoReset,G=ge.enabled,q=ge.autoUpdate,Y=ge.needsUpdate,V=ge.type;we(),ke.autoReset=T,ge.enabled=G,ge.autoUpdate=q,ge.needsUpdate=Y,ge.type=V}function be(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ye(T){const G=T.target;G.removeEventListener("dispose",Ye),At(G)}function At(T){zt(T),Ae.remove(T)}function zt(T){const G=Ae.get(T).programs;G!==void 0&&(G.forEach(function(q){re.releaseProgram(q)}),T.isShaderMaterial&&re.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,q,Y,V,fe){G===null&&(G=We);const Te=V.isMesh&&V.matrixWorld.determinant()<0,Ue=Xp(T,G,q,Y,V);pe.setMaterial(Y,Te);let Ne=q.index,Xe=1;if(Y.wireframe===!0){if(Ne=ae.getWireframeAttribute(q),Ne===void 0)return;Xe=2}const je=q.drawRange,Oe=q.attributes.position;let rt=je.start*Xe,gt=(je.start+je.count)*Xe;fe!==null&&(rt=Math.max(rt,fe.start*Xe),gt=Math.min(gt,(fe.start+fe.count)*Xe)),Ne!==null?(rt=Math.max(rt,0),gt=Math.min(gt,Ne.count)):Oe!=null&&(rt=Math.max(rt,0),gt=Math.min(gt,Oe.count));const yt=gt-rt;if(yt<0||yt===1/0)return;lt.setup(V,Y,Ue,q,Ne);let Kt,ot=Pe;if(Ne!==null&&(Kt=$.get(Ne),ot=Je,ot.setIndex(Kt)),V.isMesh)Y.wireframe===!0?(pe.setLineWidth(Y.wireframeLinewidth*ie()),ot.setMode(U.LINES)):ot.setMode(U.TRIANGLES);else if(V.isLine){let Be=Y.linewidth;Be===void 0&&(Be=1),pe.setLineWidth(Be*ie()),V.isLineSegments?ot.setMode(U.LINES):V.isLineLoop?ot.setMode(U.LINE_LOOP):ot.setMode(U.LINE_STRIP)}else V.isPoints?ot.setMode(U.POINTS):V.isSprite&&ot.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ot.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Be=V._multiDrawStarts,On=V._multiDrawCounts,at=V._multiDrawCount,vn=Ne?$.get(Ne).bytesPerElement:1,Ji=Ae.get(Y).currentProgram.getUniforms();for(let en=0;en<at;en++)Ji.setValue(U,"_gl_DrawID",en),ot.render(Be[en]/vn,On[en])}else if(V.isInstancedMesh)ot.renderInstances(rt,yt,V.count);else if(q.isInstancedBufferGeometry){const Be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,On=Math.min(q.instanceCount,Be);ot.renderInstances(rt,yt,On)}else ot.render(rt,yt)};function ht(T,G,q){T.transparent===!0&&T.side===Lt&&T.forceSinglePass===!1?(T.side=Yt,T.needsUpdate=!0,Qr(T,G,q),T.side=xi,T.needsUpdate=!0,Qr(T,G,q),T.side=Lt):Qr(T,G,q)}this.compile=function(T,G,q=null){q===null&&(q=T),p=He.get(q),p.init(G),y.push(p),q.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==q&&T.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const Y=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const fe=V.material;if(fe)if(Array.isArray(fe))for(let Te=0;Te<fe.length;Te++){const Ue=fe[Te];ht(Ue,q,V),Y.add(Ue)}else ht(fe,q,V),Y.add(fe)}),y.pop(),p=null,Y},this.compileAsync=function(T,G,q=null){const Y=this.compile(T,G,q);return new Promise(V=>{function fe(){if(Y.forEach(function(Te){Ae.get(Te).currentProgram.isReady()&&Y.delete(Te)}),Y.size===0){V(T);return}setTimeout(fe,10)}ue.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let gn=null;function Nn(T){gn&&gn(T)}function yh(){_i.stop()}function Mh(){_i.start()}const _i=new gf;_i.setAnimationLoop(Nn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(T){gn=T,Z.setAnimationLoop(T),T===null?_i.stop():_i.start()},Z.addEventListener("sessionstart",yh),Z.addEventListener("sessionend",Mh),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(G),G=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,G,E),p=He.get(T,y.length),p.init(G),y.push(p),Fe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),j.setFromProjectionMatrix(Fe),_e=this.localClippingEnabled,he=Q.init(this.clippingPlanes,_e),g=se.get(T,M.length),g.init(),M.push(g),Z.enabled===!0&&Z.isPresenting===!0){const fe=x.xr.getDepthSensingMesh();fe!==null&&_a(fe,G,-1/0,x.sortObjects)}_a(T,G,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(K,le),X=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,X&&ze.addToRenderList(g,T),this.info.render.frame++,he===!0&&Q.beginShadows();const q=p.state.shadowsArray;ge.render(q,T,G),he===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,V=g.transmissive;if(p.setupLights(),G.isArrayCamera){const fe=G.cameras;if(V.length>0)for(let Te=0,Ue=fe.length;Te<Ue;Te++){const Ne=fe[Te];wh(Y,V,T,Ne)}X&&ze.render(T);for(let Te=0,Ue=fe.length;Te<Ue;Te++){const Ne=fe[Te];_h(g,T,Ne,Ne.viewport)}}else V.length>0&&wh(Y,V,T,G),X&&ze.render(T),_h(g,T,G);E!==null&&(P.updateMultisampleRenderTarget(E),P.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(x,T,G),lt.resetDefaultState(),w=-1,_=null,y.pop(),y.length>0?(p=y[y.length-1],he===!0&&Q.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function _a(T,G,q,Y){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){Y&&Ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Fe);const Te=te.update(T),Ue=T.material;Ue.visible&&g.push(T,Te,Ue,q,Ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){const Te=te.update(T),Ue=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ie.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ie.copy(Te.boundingSphere.center)),Ie.applyMatrix4(T.matrixWorld).applyMatrix4(Fe)),Array.isArray(Ue)){const Ne=Te.groups;for(let Xe=0,je=Ne.length;Xe<je;Xe++){const Oe=Ne[Xe],rt=Ue[Oe.materialIndex];rt&&rt.visible&&g.push(T,Te,rt,q,Ie.z,Oe)}}else Ue.visible&&g.push(T,Te,Ue,q,Ie.z,null)}}const fe=T.children;for(let Te=0,Ue=fe.length;Te<Ue;Te++)_a(fe[Te],G,q,Y)}function _h(T,G,q,Y){const V=T.opaque,fe=T.transmissive,Te=T.transparent;p.setupLightsView(q),he===!0&&Q.setGlobalState(x.clippingPlanes,q),Y&&pe.viewport(I.copy(Y)),V.length>0&&Jr(V,G,q),fe.length>0&&Jr(fe,G,q),Te.length>0&&Jr(Te,G,q),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function wh(T,G,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new rn(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?wn:Zn,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const fe=p.state.transmissionRenderTarget[Y.id],Te=Y.viewport||I;fe.setSize(Te.z,Te.w);const Ue=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(A),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear(),X&&ze.render(q);const Ne=x.toneMapping;x.toneMapping=di;const Xe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),he===!0&&Q.setGlobalState(x.clippingPlanes,Y),Jr(T,q,Y),P.updateMultisampleRenderTarget(fe),P.updateRenderTargetMipmap(fe),ue.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Oe=0,rt=G.length;Oe<rt;Oe++){const gt=G[Oe],yt=gt.object,Kt=gt.geometry,ot=gt.material,Be=gt.group;if(ot.side===Lt&&yt.layers.test(Y.layers)){const On=ot.side;ot.side=Yt,ot.needsUpdate=!0,Sh(yt,q,Y,Kt,ot,Be),ot.side=On,ot.needsUpdate=!0,je=!0}}je===!0&&(P.updateMultisampleRenderTarget(fe),P.updateRenderTargetMipmap(fe))}x.setRenderTarget(Ue),x.setClearColor(A,L),Xe!==void 0&&(Y.viewport=Xe),x.toneMapping=Ne}function Jr(T,G,q){const Y=G.isScene===!0?G.overrideMaterial:null;for(let V=0,fe=T.length;V<fe;V++){const Te=T[V],Ue=Te.object,Ne=Te.geometry,Xe=Y===null?Te.material:Y,je=Te.group;Ue.layers.test(q.layers)&&Sh(Ue,G,q,Ne,Xe,je)}}function Sh(T,G,q,Y,V,fe){T.onBeforeRender(x,G,q,Y,V,fe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(x,G,q,Y,T,fe),V.transparent===!0&&V.side===Lt&&V.forceSinglePass===!1?(V.side=Yt,V.needsUpdate=!0,x.renderBufferDirect(q,G,Y,V,T,fe),V.side=xi,V.needsUpdate=!0,x.renderBufferDirect(q,G,Y,V,T,fe),V.side=Lt):x.renderBufferDirect(q,G,Y,V,T,fe),T.onAfterRender(x,G,q,Y,V,fe)}function Qr(T,G,q){G.isScene!==!0&&(G=We);const Y=Ae.get(T),V=p.state.lights,fe=p.state.shadowsArray,Te=V.state.version,Ue=re.getParameters(T,V.state,fe,G,q),Ne=re.getProgramCacheKey(Ue);let Xe=Y.programs;Y.environment=T.isMeshStandardMaterial?G.environment:null,Y.fog=G.fog,Y.envMap=(T.isMeshStandardMaterial?W:S).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",Ye),Xe=new Map,Y.programs=Xe);let je=Xe.get(Ne);if(je!==void 0){if(Y.currentProgram===je&&Y.lightsStateVersion===Te)return Th(T,Ue),je}else Ue.uniforms=re.getUniforms(T),T.onBeforeCompile(Ue,x),je=re.acquireProgram(Ue,Ne),Xe.set(Ne,je),Y.uniforms=Ue.uniforms;const Oe=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=Q.uniform),Th(T,Ue),Y.needsLights=Yp(T),Y.lightsStateVersion=Te,Y.needsLights&&(Oe.ambientLightColor.value=V.state.ambient,Oe.lightProbe.value=V.state.probe,Oe.directionalLights.value=V.state.directional,Oe.directionalLightShadows.value=V.state.directionalShadow,Oe.spotLights.value=V.state.spot,Oe.spotLightShadows.value=V.state.spotShadow,Oe.rectAreaLights.value=V.state.rectArea,Oe.ltc_1.value=V.state.rectAreaLTC1,Oe.ltc_2.value=V.state.rectAreaLTC2,Oe.pointLights.value=V.state.point,Oe.pointLightShadows.value=V.state.pointShadow,Oe.hemisphereLights.value=V.state.hemi,Oe.directionalShadowMap.value=V.state.directionalShadowMap,Oe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Oe.spotShadowMap.value=V.state.spotShadowMap,Oe.spotLightMatrix.value=V.state.spotLightMatrix,Oe.spotLightMap.value=V.state.spotLightMap,Oe.pointShadowMap.value=V.state.pointShadowMap,Oe.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=je,Y.uniformsList=null,je}function bh(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=Wo.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function Th(T,G){const q=Ae.get(T);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.batchingColor=G.batchingColor,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.instancingMorph=G.instancingMorph,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function Xp(T,G,q,Y,V){G.isScene!==!0&&(G=We),P.resetTextureUnits();const fe=G.fog,Te=Y.isMeshStandardMaterial?G.environment:null,Ue=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ks,Ne=(Y.isMeshStandardMaterial?W:S).get(Y.envMap||Te),Xe=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Oe=!!q.morphAttributes.position,rt=!!q.morphAttributes.normal,gt=!!q.morphAttributes.color;let yt=di;Y.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(yt=x.toneMapping);const Kt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ot=Kt!==void 0?Kt.length:0,Be=Ae.get(Y),On=p.state.lights;if(he===!0&&(_e===!0||T!==_)){const an=T===_&&Y.id===w;Q.setState(Y,T,an)}let at=!1;Y.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==On.state.version||Be.outputColorSpace!==Ue||V.isBatchedMesh&&Be.batching===!1||!V.isBatchedMesh&&Be.batching===!0||V.isBatchedMesh&&Be.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Be.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Be.instancing===!1||!V.isInstancedMesh&&Be.instancing===!0||V.isSkinnedMesh&&Be.skinning===!1||!V.isSkinnedMesh&&Be.skinning===!0||V.isInstancedMesh&&Be.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Be.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Be.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Be.instancingMorph===!1&&V.morphTexture!==null||Be.envMap!==Ne||Y.fog===!0&&Be.fog!==fe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Q.numPlanes||Be.numIntersection!==Q.numIntersection)||Be.vertexAlphas!==Xe||Be.vertexTangents!==je||Be.morphTargets!==Oe||Be.morphNormals!==rt||Be.morphColors!==gt||Be.toneMapping!==yt||Be.morphTargetsCount!==ot)&&(at=!0):(at=!0,Be.__version=Y.version);let vn=Be.currentProgram;at===!0&&(vn=Qr(Y,G,V));let Ji=!1,en=!1,nr=!1;const Mt=vn.getUniforms(),bn=Be.uniforms;if(pe.useProgram(vn.program)&&(Ji=!0,en=!0,nr=!0),Y.id!==w&&(w=Y.id,en=!0),Ji||_!==T){pe.buffers.depth.getReversed()?(de.copy(T.projectionMatrix),qm(de),Ym(de),Mt.setValue(U,"projectionMatrix",de)):Mt.setValue(U,"projectionMatrix",T.projectionMatrix),Mt.setValue(U,"viewMatrix",T.matrixWorldInverse);const Jn=Mt.map.cameraPosition;Jn!==void 0&&Jn.setValue(U,Le.setFromMatrixPosition(T.matrixWorld)),Se.logarithmicDepthBuffer&&Mt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Mt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),_!==T&&(_=T,en=!0,nr=!0)}if(V.isSkinnedMesh){Mt.setOptional(U,V,"bindMatrix"),Mt.setOptional(U,V,"bindMatrixInverse");const an=V.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Mt.setValue(U,"boneTexture",an.boneTexture,P))}V.isBatchedMesh&&(Mt.setOptional(U,V,"batchingTexture"),Mt.setValue(U,"batchingTexture",V._matricesTexture,P),Mt.setOptional(U,V,"batchingIdTexture"),Mt.setValue(U,"batchingIdTexture",V._indirectTexture,P),Mt.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&Mt.setValue(U,"batchingColorTexture",V._colorsTexture,P));const ir=q.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&Ge.update(V,q,vn),(en||Be.receiveShadow!==V.receiveShadow)&&(Be.receiveShadow=V.receiveShadow,Mt.setValue(U,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(bn.envMap.value=Ne,bn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&G.environment!==null&&(bn.envMapIntensity.value=G.environmentIntensity),en&&(Mt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&qp(bn,nr),fe&&Y.fog===!0&&ne.refreshFogUniforms(bn,fe),ne.refreshMaterialUniforms(bn,Y,F,z,p.state.transmissionRenderTarget[T.id]),Wo.upload(U,bh(Be),bn,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Wo.upload(U,bh(Be),bn,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Mt.setValue(U,"center",V.center),Mt.setValue(U,"modelViewMatrix",V.modelViewMatrix),Mt.setValue(U,"normalMatrix",V.normalMatrix),Mt.setValue(U,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const an=Y.uniformsGroups;for(let Jn=0,Qn=an.length;Jn<Qn;Jn++){const Eh=an[Jn];H.update(Eh,vn),H.bind(Eh,vn)}}return vn}function qp(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Yp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,G,q){Ae.get(T.texture).__webglTexture=G,Ae.get(T.depthTexture).__webglTexture=q;const Y=Ae.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,G){const q=Ae.get(T);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,q=0){E=T,b=G,C=q;let Y=!0,V=null,fe=!1,Te=!1;if(T){const Ne=Ae.get(T);if(Ne.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1;else if(Ne.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(Ne.__hasExternalTextures)P.rebindTextures(T,Ae.get(T.texture).__webglTexture,Ae.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Oe=T.depthTexture;if(Ne.__boundDepthTexture!==Oe){if(Oe!==null&&Ae.has(Oe)&&(T.width!==Oe.image.width||T.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Te=!0);const je=Ae.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(je[G])?V=je[G][q]:V=je[G],fe=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?V=Ae.get(T).__webglMultisampledFramebuffer:Array.isArray(je)?V=je[q]:V=je,I.copy(T.viewport),k.copy(T.scissor),O=T.scissorTest}else I.copy(B).multiplyScalar(F).floor(),k.copy(J).multiplyScalar(F).floor(),O=Me;if(pe.bindFramebuffer(U.FRAMEBUFFER,V)&&Y&&pe.drawBuffers(T,V),pe.viewport(I),pe.scissor(k),pe.setScissorTest(O),fe){const Ne=Ae.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ne.__webglTexture,q)}else if(Te){const Ne=Ae.get(T.texture),Xe=G||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ne.__webglTexture,q||0,Xe)}w=-1},this.readRenderTargetPixels=function(T,G,q,Y,V,fe,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Ue=Ue[Te]),Ue){pe.bindFramebuffer(U.FRAMEBUFFER,Ue);try{const Ne=T.texture,Xe=Ne.format,je=Ne.type;if(!Se.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-Y&&q>=0&&q<=T.height-V&&U.readPixels(G,q,Y,V,qe.convert(Xe),qe.convert(je),fe)}finally{const Ne=E!==null?Ae.get(E).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(T,G,q,Y,V,fe,Te){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Ue=Ue[Te]),Ue){const Ne=T.texture,Xe=Ne.format,je=Ne.type;if(!Se.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=T.width-Y&&q>=0&&q<=T.height-V){pe.bindFramebuffer(U.FRAMEBUFFER,Ue);const Oe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Oe),U.bufferData(U.PIXEL_PACK_BUFFER,fe.byteLength,U.STREAM_READ),U.readPixels(G,q,Y,V,qe.convert(Xe),qe.convert(je),0);const rt=E!==null?Ae.get(E).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,rt);const gt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Xm(U,gt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Oe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,fe),U.deleteBuffer(Oe),U.deleteSync(gt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,G=null,q=0){T.isTexture!==!0&&(br("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1]);const Y=Math.pow(2,-q),V=Math.floor(T.image.width*Y),fe=Math.floor(T.image.height*Y),Te=G!==null?G.x:0,Ue=G!==null?G.y:0;P.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Te,Ue,V,fe),pe.unbindTexture()},this.copyTextureToTexture=function(T,G,q=null,Y=null,V=0){T.isTexture!==!0&&(br("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,T=arguments[1],G=arguments[2],V=arguments[3]||0,q=null);let fe,Te,Ue,Ne,Xe,je,Oe,rt,gt;const yt=T.isCompressedTexture?T.mipmaps[V]:T.image;q!==null?(fe=q.max.x-q.min.x,Te=q.max.y-q.min.y,Ue=q.isBox3?q.max.z-q.min.z:1,Ne=q.min.x,Xe=q.min.y,je=q.isBox3?q.min.z:0):(fe=yt.width,Te=yt.height,Ue=yt.depth||1,Ne=0,Xe=0,je=0),Y!==null?(Oe=Y.x,rt=Y.y,gt=Y.z):(Oe=0,rt=0,gt=0);const Kt=qe.convert(G.format),ot=qe.convert(G.type);let Be;G.isData3DTexture?(P.setTexture3D(G,0),Be=U.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(P.setTexture2DArray(G,0),Be=U.TEXTURE_2D_ARRAY):(P.setTexture2D(G,0),Be=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const On=U.getParameter(U.UNPACK_ROW_LENGTH),at=U.getParameter(U.UNPACK_IMAGE_HEIGHT),vn=U.getParameter(U.UNPACK_SKIP_PIXELS),Ji=U.getParameter(U.UNPACK_SKIP_ROWS),en=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,yt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,yt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ne),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,je);const nr=T.isDataArrayTexture||T.isData3DTexture,Mt=G.isDataArrayTexture||G.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const bn=Ae.get(T),ir=Ae.get(G),an=Ae.get(bn.__renderTarget),Jn=Ae.get(ir.__renderTarget);pe.bindFramebuffer(U.READ_FRAMEBUFFER,an.__webglFramebuffer),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Qn=0;Qn<Ue;Qn++)nr&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.get(T).__webglTexture,V,je+Qn),T.isDepthTexture?(Mt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.get(G).__webglTexture,V,gt+Qn),U.blitFramebuffer(Ne,Xe,fe,Te,Oe,rt,fe,Te,U.DEPTH_BUFFER_BIT,U.NEAREST)):Mt?U.copyTexSubImage3D(Be,V,Oe,rt,gt+Qn,Ne,Xe,fe,Te):U.copyTexSubImage2D(Be,V,Oe,rt,gt+Qn,Ne,Xe,fe,Te);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Mt?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Be,V,Oe,rt,gt,fe,Te,Ue,Kt,ot,yt.data):G.isCompressedArrayTexture?U.compressedTexSubImage3D(Be,V,Oe,rt,gt,fe,Te,Ue,Kt,yt.data):U.texSubImage3D(Be,V,Oe,rt,gt,fe,Te,Ue,Kt,ot,yt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,V,Oe,rt,fe,Te,Kt,ot,yt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,V,Oe,rt,yt.width,yt.height,Kt,yt.data):U.texSubImage2D(U.TEXTURE_2D,V,Oe,rt,fe,Te,Kt,ot,yt);U.pixelStorei(U.UNPACK_ROW_LENGTH,On),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,at),U.pixelStorei(U.UNPACK_SKIP_PIXELS,vn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ji),U.pixelStorei(U.UNPACK_SKIP_IMAGES,en),V===0&&G.generateMipmaps&&U.generateMipmap(Be),pe.unbindTexture()},this.copyTextureToTexture3D=function(T,G,q=null,Y=null,V=0){return T.isTexture!==!0&&(br("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,T=arguments[2],G=arguments[3],V=arguments[4]||0),br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,G,q,Y,V)},this.initRenderTarget=function(T){Ae.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),pe.unbindTexture()},this.resetState=function(){b=0,C=0,E=null,pe.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class Xl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new Xl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nM extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class iM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fl,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new D;class Jo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wf extends Mi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ds;const cr=new D,fs=new D,ps=new D,ms=new ce,lr=new ce,Sf=new tt,_o=new D,hr=new D,wo=new D,Tu=new ce,Ka=new ce,Eu=new ce;class sM extends Et{constructor(e=new wf){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new iM(t,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new Jo(n,3,0,!1)),ds.setAttribute("uv",new Jo(n,2,3,!1))}this.geometry=ds,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),Sf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ps.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;So(_o.set(-.5,-.5,0),ps,o,fs,s,r),So(hr.set(.5,-.5,0),ps,o,fs,s,r),So(wo.set(.5,.5,0),ps,o,fs,s,r),Tu.set(0,0),Ka.set(1,0),Eu.set(1,1);let a=e.ray.intersectTriangle(_o,hr,wo,!1,cr);if(a===null&&(So(hr.set(-.5,.5,0),ps,o,fs,s,r),Ka.set(0,1),a=e.ray.intersectTriangle(_o,wo,hr,!1,cr),a===null))return;const c=e.ray.origin.distanceTo(cr);c<e.near||c>e.far||t.push({distance:c,point:cr.clone(),uv:hn.getInterpolation(cr,_o,hr,wo,Tu,Ka,Eu,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function So(i,e,t,n,s,r){ms.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(lr.x=r*ms.x-s*ms.y,lr.y=s*ms.x+r*ms.y):lr.copy(ms),i.copy(e),i.x+=lr.x,i.y+=lr.y,i.applyMatrix4(Sf)}class ql extends Dt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=jt,h=jt,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ls extends xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gs=new tt,Au=new tt,bo=[],Ru=new Xi,rM=new tt,ur=new ee,dr=new Qs;class Ds extends ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ls(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,rM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),Ru.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(Ru)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),dr.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(n),e.ray.intersectsSphere(dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gs),Au.multiplyMatrices(n,gs),ur.matrixWorld=Au,ur.raycast(e,bo);for(let o=0,a=bo.length;o<a;o++){const c=bo[o];c.instanceId=r,c.object=this,t.push(c)}bo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ls(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ql(new Float32Array(s*this.count),s,this.count,aa,An));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class oM extends Mi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pu=new tt,ml=new cf,To=new Qs,Eo=new D;class Ja extends Et{constructor(e=new bt,t=new oM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),To.radius+=r,e.ray.intersectsSphere(To)===!1)return;Pu.copy(s).invert(),ml.copy(e.ray).applyMatrix4(Pu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,v=d;m<v;m++){const g=l.getX(m);Eo.fromBufferAttribute(u,g),Cu(Eo,g,c,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,v=d;m<v;m++)Eo.fromBufferAttribute(u,m),Cu(Eo,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Cu(i,e,t,n,s,r,o){const a=ml.distanceSqToPoint(i);if(a<t){const c=new D;ml.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class aM extends Dt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ce:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,s=[],r=[],o=[],a=new D,c=new tt;for(let d=0;d<=e;d++){const m=d/e;s[d]=this.getTangentAt(m,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Ct(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ct(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Yl extends In{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ce){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class cM extends Yl{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function jl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Ao=new D,Qa=new jl,$a=new jl,ec=new jl;class Zl extends In{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ao.subVectors(s[0],s[1]).add(s[0]),l=Ao);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ao.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ao),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Qa.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,v,g),$a.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,v,g),ec.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Qa.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),$a.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),ec.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Qa.calc(c),$a.calc(c),ec.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Lu(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function lM(i,e){const t=1-i;return t*t*e}function hM(i,e){return 2*(1-i)*i*e}function uM(i,e){return i*i*e}function Pr(i,e,t,n){return lM(i,e)+hM(i,t)+uM(i,n)}function dM(i,e){const t=1-i;return t*t*t*e}function fM(i,e){const t=1-i;return 3*t*t*i*e}function pM(i,e){return 3*(1-i)*i*i*e}function mM(i,e){return i*i*i*e}function Cr(i,e,t,n,s){return dM(i,e)+fM(i,t)+pM(i,n)+mM(i,s)}class bf extends In{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,s.x,r.x,o.x,a.x),Cr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gM extends In{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,s.x,r.x,o.x,a.x),Cr(e,s.y,r.y,o.y,a.y),Cr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Tf extends In{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vM extends In{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ef extends In{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Pr(e,s.x,r.x,o.x),Pr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kl extends In{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Pr(e,s.x,r.x,o.x),Pr(e,s.y,r.y,o.y),Pr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Af extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Lu(a,c.x,l.x,h.x,u.x),Lu(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ce().fromArray(s))}return this}}var Qo=Object.freeze({__proto__:null,ArcCurve:cM,CatmullRomCurve3:Zl,CubicBezierCurve:bf,CubicBezierCurve3:gM,EllipseCurve:Yl,LineCurve:Tf,LineCurve3:vM,QuadraticBezierCurve:Ef,QuadraticBezierCurve3:Kl,SplineCurve:Af});class xM extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Qo[s.type]().fromJSON(s))}return this}}class gl extends xM{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Tf(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Ef(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new bf(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Af(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Yl(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Jl extends bt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ct(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new D,f=new ce,d=new D,m=new D,v=new D;let g=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,d.x=p*1,d.y=-g,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(m)}for(let M=0;M<=t;M++){const y=n+M*h*s,x=Math.sin(y),R=Math.cos(y);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*x,u.y=e[b].y,u.z=e[b].x*R,o.push(u.x,u.y,u.z),f.x=M/t,f.y=b/(e.length-1),a.push(f.x,f.y);const C=c[3*b+0]*x,E=c[3*b+1],w=c[3*b+0]*R;l.push(C,E,w)}}for(let M=0;M<t;M++)for(let y=0;y<e.length-1;y++){const x=y+M*e.length,R=x,b=x+e.length,C=x+e.length+1,E=x+1;r.push(R,b,E),r.push(C,E,b)}this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("uv",new it(a,2)),this.setAttribute("normal",new it(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.points,e.segments,e.phiStart,e.phiLength)}}class Is extends Jl{constructor(e=1,t=1,n=4,s=8){const r=new gl;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Is(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ql extends bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new D,h=new ce;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ce extends bt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let m=0;const v=[],g=n/2;let p=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(d,2));function M(){const x=new D,R=new D;let b=0;const C=(t-e)/n;for(let E=0;E<=r;E++){const w=[],_=E/r,I=_*(t-e)+e;for(let k=0;k<=s;k++){const O=k/s,A=O*c+a,L=Math.sin(A),N=Math.cos(A);R.x=I*L,R.y=-_*n+g,R.z=I*N,u.push(R.x,R.y,R.z),x.set(L,C,N).normalize(),f.push(x.x,x.y,x.z),d.push(O,1-_),w.push(m++)}v.push(w)}for(let E=0;E<s;E++)for(let w=0;w<r;w++){const _=v[w][E],I=v[w+1][E],k=v[w+1][E+1],O=v[w][E+1];(e>0||w!==0)&&(h.push(_,I,O),b+=3),(t>0||w!==r-1)&&(h.push(I,k,O),b+=3)}l.addGroup(p,b,0),p+=b}function y(x){const R=m,b=new ce,C=new D;let E=0;const w=x===!0?e:t,_=x===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,g*_,0),f.push(0,_,0),d.push(.5,.5),m++;const I=m;for(let k=0;k<=s;k++){const A=k/s*c+a,L=Math.cos(A),N=Math.sin(A);C.x=w*N,C.y=g*_,C.z=w*L,u.push(C.x,C.y,C.z),f.push(0,_,0),b.x=L*.5+.5,b.y=N*.5*_+.5,d.push(b.x,b.y),m++}for(let k=0;k<s;k++){const O=R+k,A=I+k;x===!0?h.push(A,A+1,O):h.push(A+1,A,O),E+=3}l.addGroup(p,E,x===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ce(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kn extends Ce{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Kn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $l extends gl{constructor(e){super(e),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new gl().fromJSON(s))}return this}}const yM={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Rf(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=bM(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let m=t;m<s;m+=t)u=i[m],f=i[m+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Nr(r,o,t,a,c,d,0),o}};function Rf(i,e,t,n,s){let r,o;if(s===NM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Du(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Du(r,i[r],i[r+1],o);return o&&ha(o,o.next)&&(Fr(o),o=o.next),o}function Hi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ha(t,t.next)||Tt(t.prev,t,t.next)===0)){if(Fr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Nr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&PM(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?_M(i,n,s,r):MM(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Fr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=wM(Hi(i),e,t),Nr(i,e,t,n,s,r,2)):o===2&&SM(i,e,t,n,s,r):Nr(Hi(i),e,t,n,s,r,1);break}}}function MM(i){const e=i.prev,t=i,n=i.next;if(Tt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&As(s,a,r,c,o,l,m.x,m.y)&&Tt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function _M(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Tt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,m=h<u?h<f?h:f:u<f?u:f,v=a>c?a>l?a:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,p=vl(d,m,e,t,n),M=vl(v,g,e,t,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=M;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&As(a,h,c,u,l,f,y.x,y.y)&&Tt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&As(a,h,c,u,l,f,x.x,x.y)&&Tt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&As(a,h,c,u,l,f,y.x,y.y)&&Tt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=M;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&As(a,h,c,u,l,f,x.x,x.y)&&Tt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function wM(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!ha(s,r)&&Pf(s,n,n.next,r)&&Or(s,r)&&Or(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Fr(n),Fr(n.next),n=i=r),n=n.next}while(n!==i);return Hi(n)}function SM(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&DM(o,a)){let c=Cf(o,a);o=Hi(o,o.next),c=Hi(c,c.next),Nr(o,e,t,n,s,r,0),Nr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function bM(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Rf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(LM(l));for(s.sort(TM),r=0;r<s.length;r++)t=EM(s[r],t);return t}function TM(i,e){return i.x-e.x}function EM(i,e){const t=AM(i,e);if(!t)return e;const n=Cf(t,i);return Hi(n,n.next),Hi(t,t.next)}function AM(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&As(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Or(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&RM(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function RM(i,e){return Tt(i.prev,i,e.prev)<0&&Tt(e.next,i,i.next)<0}function PM(i,e,t,n){let s=i;do s.z===0&&(s.z=vl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,CM(s)}function CM(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function vl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function LM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function As(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function DM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!IM(i,e)&&(Or(i,e)&&Or(e,i)&&UM(i,e)&&(Tt(i.prev,i,e.prev)||Tt(i,e.prev,e))||ha(i,e)&&Tt(i.prev,i,i.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ha(i,e){return i.x===e.x&&i.y===e.y}function Pf(i,e,t,n){const s=Po(Tt(i,e,t)),r=Po(Tt(i,e,n)),o=Po(Tt(t,n,i)),a=Po(Tt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ro(i,t,e)||r===0&&Ro(i,n,e)||o===0&&Ro(t,i,n)||a===0&&Ro(t,e,n))}function Ro(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Po(i){return i>0?1:i<0?-1:0}function IM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Pf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Or(i,e){return Tt(i.prev,i,i.next)<0?Tt(i,e,i.next)>=0&&Tt(i,i.prev,e)>=0:Tt(i,e,i.prev)<0||Tt(i,i.next,e)<0}function UM(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Cf(i,e){const t=new xl(i.i,i.x,i.y),n=new xl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Du(i,e,t,n){const s=new xl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function NM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Lr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Lr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Iu(e),Uu(n,e);let o=e.length;t.forEach(Iu);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Uu(n,t[c]);const a=yM.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Iu(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Uu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ua extends bt{constructor(e=new $l([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new it(s,3)),this.setAttribute("uv",new it(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:OM;let y,x=!1,R,b,C,E;p&&(y=p.getSpacedPoints(h),x=!0,f=!1,R=p.computeFrenetFrames(h,!1),b=new D,C=new D,E=new D),f||(g=0,d=0,m=0,v=0);const w=a.extractPoints(l);let _=w.shape;const I=w.holes;if(!Lr.isClockWise(_)){_=_.reverse();for(let X=0,ie=I.length;X<ie;X++){const U=I[X];Lr.isClockWise(U)&&(I[X]=U.reverse())}}const O=Lr.triangulateShape(_,I),A=_;for(let X=0,ie=I.length;X<ie;X++){const U=I[X];_=_.concat(U)}function L(X,ie,U){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(ie,U)}const N=_.length,z=O.length;function F(X,ie,U){let Ee,ue,Se;const pe=X.x-ie.x,ke=X.y-ie.y,Ae=U.x-X.x,P=U.y-X.y,S=pe*pe+ke*ke,W=pe*P-ke*Ae;if(Math.abs(W)>Number.EPSILON){const $=Math.sqrt(S),ae=Math.sqrt(Ae*Ae+P*P),te=ie.x-ke/$,re=ie.y+pe/$,ne=U.x-P/ae,se=U.y+Ae/ae,He=((ne-te)*P-(se-re)*Ae)/(pe*P-ke*Ae);Ee=te+pe*He-X.x,ue=re+ke*He-X.y;const Q=Ee*Ee+ue*ue;if(Q<=2)return new ce(Ee,ue);Se=Math.sqrt(Q/2)}else{let $=!1;pe>Number.EPSILON?Ae>Number.EPSILON&&($=!0):pe<-Number.EPSILON?Ae<-Number.EPSILON&&($=!0):Math.sign(ke)===Math.sign(P)&&($=!0),$?(Ee=-ke,ue=pe,Se=Math.sqrt(S)):(Ee=pe,ue=ke,Se=Math.sqrt(S/2))}return new ce(Ee/Se,ue/Se)}const K=[];for(let X=0,ie=A.length,U=ie-1,Ee=X+1;X<ie;X++,U++,Ee++)U===ie&&(U=0),Ee===ie&&(Ee=0),K[X]=F(A[X],A[U],A[Ee]);const le=[];let B,J=K.concat();for(let X=0,ie=I.length;X<ie;X++){const U=I[X];B=[];for(let Ee=0,ue=U.length,Se=ue-1,pe=Ee+1;Ee<ue;Ee++,Se++,pe++)Se===ue&&(Se=0),pe===ue&&(pe=0),B[Ee]=F(U[Ee],U[Se],U[pe]);le.push(B),J=J.concat(B)}for(let X=0;X<g;X++){const ie=X/g,U=d*Math.cos(ie*Math.PI/2),Ee=m*Math.sin(ie*Math.PI/2)+v;for(let ue=0,Se=A.length;ue<Se;ue++){const pe=L(A[ue],K[ue],Ee);de(pe.x,pe.y,-U)}for(let ue=0,Se=I.length;ue<Se;ue++){const pe=I[ue];B=le[ue];for(let ke=0,Ae=pe.length;ke<Ae;ke++){const P=L(pe[ke],B[ke],Ee);de(P.x,P.y,-U)}}}const Me=m+v;for(let X=0;X<N;X++){const ie=f?L(_[X],J[X],Me):_[X];x?(C.copy(R.normals[0]).multiplyScalar(ie.x),b.copy(R.binormals[0]).multiplyScalar(ie.y),E.copy(y[0]).add(C).add(b),de(E.x,E.y,E.z)):de(ie.x,ie.y,0)}for(let X=1;X<=h;X++)for(let ie=0;ie<N;ie++){const U=f?L(_[ie],J[ie],Me):_[ie];x?(C.copy(R.normals[X]).multiplyScalar(U.x),b.copy(R.binormals[X]).multiplyScalar(U.y),E.copy(y[X]).add(C).add(b),de(E.x,E.y,E.z)):de(U.x,U.y,u/h*X)}for(let X=g-1;X>=0;X--){const ie=X/g,U=d*Math.cos(ie*Math.PI/2),Ee=m*Math.sin(ie*Math.PI/2)+v;for(let ue=0,Se=A.length;ue<Se;ue++){const pe=L(A[ue],K[ue],Ee);de(pe.x,pe.y,u+U)}for(let ue=0,Se=I.length;ue<Se;ue++){const pe=I[ue];B=le[ue];for(let ke=0,Ae=pe.length;ke<Ae;ke++){const P=L(pe[ke],B[ke],Ee);x?de(P.x,P.y+y[h-1].y,y[h-1].x+U):de(P.x,P.y,u+U)}}}j(),he();function j(){const X=s.length/3;if(f){let ie=0,U=N*ie;for(let Ee=0;Ee<z;Ee++){const ue=O[Ee];Fe(ue[2]+U,ue[1]+U,ue[0]+U)}ie=h+g*2,U=N*ie;for(let Ee=0;Ee<z;Ee++){const ue=O[Ee];Fe(ue[0]+U,ue[1]+U,ue[2]+U)}}else{for(let ie=0;ie<z;ie++){const U=O[ie];Fe(U[2],U[1],U[0])}for(let ie=0;ie<z;ie++){const U=O[ie];Fe(U[0]+N*h,U[1]+N*h,U[2]+N*h)}}n.addGroup(X,s.length/3-X,0)}function he(){const X=s.length/3;let ie=0;_e(A,ie),ie+=A.length;for(let U=0,Ee=I.length;U<Ee;U++){const ue=I[U];_e(ue,ie),ie+=ue.length}n.addGroup(X,s.length/3-X,1)}function _e(X,ie){let U=X.length;for(;--U>=0;){const Ee=U;let ue=U-1;ue<0&&(ue=X.length-1);for(let Se=0,pe=h+g*2;Se<pe;Se++){const ke=N*Se,Ae=N*(Se+1),P=ie+Ee+ke,S=ie+ue+ke,W=ie+ue+Ae,$=ie+Ee+Ae;Le(P,S,W,$)}}}function de(X,ie,U){c.push(X),c.push(ie),c.push(U)}function Fe(X,ie,U){Ie(X),Ie(ie),Ie(U);const Ee=s.length/3,ue=M.generateTopUV(n,s,Ee-3,Ee-2,Ee-1);We(ue[0]),We(ue[1]),We(ue[2])}function Le(X,ie,U,Ee){Ie(X),Ie(ie),Ie(Ee),Ie(ie),Ie(U),Ie(Ee);const ue=s.length/3,Se=M.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);We(Se[0]),We(Se[1]),We(Se[3]),We(Se[1]),We(Se[2]),We(Se[3])}function Ie(X){s.push(c[X*3+0]),s.push(c[X*3+1]),s.push(c[X*3+2])}function We(X){r.push(X.x),r.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return FM(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Qo[s.type]().fromJSON(s)),new ua(n,e.options)}}const OM={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ce(r,o),new ce(a,c),new ce(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],m=e[s*3+2],v=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ce(o,1-c),new ce(l,1-u),new ce(f,1-m),new ce(v,1-p)]:[new ce(a,1-c),new ce(h,1-u),new ce(d,1-m),new ce(g,1-p)]}};function FM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class et extends bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new D,f=new D,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const M=[],y=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const b=R/t;u.x=-e*Math.cos(s+b*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+b*r)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(b+x,1-y),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const y=h[p][M+1],x=h[p][M],R=h[p+1][M],b=h[p+1][M+1];(p!==0||o>0)&&d.push(y,x,b),(p!==n-1||c<Math.PI)&&d.push(x,R,b)}this.setIndex(d),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new et(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sn extends bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){const v=m/s*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){const v=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,M=(s+1)*d+m;o.push(v,g,M),o.push(g,p,M)}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class jr extends bt{constructor(e=new Kl(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,c=new D,l=new ce;let h=new D;const u=[],f=[],d=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(d,2));function v(){for(let y=0;y<t;y++)g(y);g(r===!1?t:0),M(),p()}function g(y){h=e.getPointAt(y/t,h);const x=o.normals[y],R=o.binormals[y];for(let b=0;b<=s;b++){const C=b/s*Math.PI*2,E=Math.sin(C),w=-Math.cos(C);c.x=w*x.x+E*R.x,c.y=w*x.y+E*R.y,c.z=w*x.z+E*R.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let x=1;x<=s;x++){const R=(s+1)*(y-1)+(x-1),b=(s+1)*y+(x-1),C=(s+1)*y+x,E=(s+1)*(y-1)+x;m.push(R,b,E),m.push(b,C,E)}}function M(){for(let y=0;y<=t;y++)for(let x=0;x<=s;x++)l.x=y/t,l.y=x/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new jr(new Qo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class zM extends _t{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class er extends Mi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class BM extends er{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class $e extends Mi{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nu={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class kM{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}}const HM=new kM;class eh{constructor(e){this.manager=e!==void 0?e:HM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}eh.DEFAULT_MATERIAL_NAME="__DEFAULT";class GM extends eh{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Nu.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ur("img");function c(){h(),Nu.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class VM extends eh{constructor(e){super(e)}load(e,t,n,s){const r=new Dt,o=new GM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class da extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class WM extends da{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const tc=new tt,Ou=new D,Fu=new D;class th{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gl,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ou),Fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fu),t.updateMatrixWorld(),tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class XM extends th{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Hs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class qM extends da{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new XM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zu=new tt,fr=new D,nc=new D;class YM extends th{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fr.setFromMatrixPosition(e.matrixWorld),n.position.copy(fr),nc.copy(n.position),nc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nc),n.updateMatrixWorld(),s.makeTranslation(-fr.x,-fr.y,-fr.z),zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zu)}}class Zr extends da{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new YM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jM extends th{constructor(){super(new Vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bu extends da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new jM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ZM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ku(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ku();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ku(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dl);class KM{ctx=null;master=null;noise=null;started=!1;start(){if(!this.started){this.started=!0;try{const e=new AudioContext;this.ctx=e;const t=e.createDynamicsCompressor();t.threshold.value=-20,t.knee.value=14,t.ratio.value=5,t.attack.value=.01,t.release.value=.28,t.connect(e.destination),this.master=e.createGain(),this.master.gain.value=.125,this.master.connect(t),this.noise=this.makeNoise(4),this.ocean(),this.lapping(),this.wind(),this.gullLoop(),this.armResume()}catch{this.ctx=null,this.master=null}}}armResume(){const e=this.ctx;if(!e)return;const t=()=>{e.resume().then(()=>{e.state==="running"&&(window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t),window.removeEventListener("touchstart",t))}).catch(()=>{})};try{e.state!=="running"&&(window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),window.addEventListener("touchstart",t),t())}catch{}}makeNoise(e){const t=this.ctx,n=t.createBuffer(1,Math.floor(t.sampleRate*e),t.sampleRate),s=n.getChannelData(0);let r=0,o=0,a=0;for(let c=0;c<s.length;c++){const l=Math.random()*2-1;r=.99765*r+l*.099,o=.963*o+l*.2965,a=.57*a+l*1.0526,s[c]=(r+o+a+l*.1848)*.22}return n}noiseSource(){const e=this.ctx.createBufferSource();return e.buffer=this.noise,e.loop=!0,e.start(),e}lfo(e,t,n){const s=this.ctx,r=s.createOscillator();r.type="sine",r.frequency.value=e;const o=s.createGain();o.gain.value=t,r.connect(o),o.connect(n),r.start()}ocean(){const e=this.ctx;if(!e||!this.master||!this.noise)return;const t=this.noiseSource(),n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=340,n.Q.value=.6;const s=e.createGain();s.gain.value=.24,t.connect(n),n.connect(s),s.connect(this.master),this.lfo(.08,.14,s.gain),this.lfo(.031,.07,s.gain),this.lfo(.08,160,n.frequency);const r=()=>{try{s.gain.setTargetAtTime(.18+Math.random()*.16,e.currentTime,3.2)}catch{}setTimeout(r,6e3+Math.random()*9e3)};setTimeout(r,5e3)}lapping(){const e=this.ctx;if(!e||!this.master||!this.noise)return;const t=this.noiseSource(),n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=950,n.Q.value=.9;const s=e.createGain();s.gain.value=.05,t.connect(n),n.connect(s),s.connect(this.master),this.lfo(.19,.035,s.gain),this.lfo(.07,240,n.frequency)}wind(){const e=this.ctx;if(!e||!this.master||!this.noise)return;const t=this.noiseSource(),n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=2400,n.Q.value=1.4;const s=e.createGain();s.gain.value=.018,t.connect(n),n.connect(s),s.connect(this.master),this.lfo(.05,.012,s.gain),this.lfo(.023,600,n.frequency)}gullLoop(){const e=()=>{this.gull(),setTimeout(e,8e3+Math.random()*12e3)};setTimeout(e,5e3+Math.random()*8e3)}gull(){const e=this.ctx;if(!e||!this.master||e.state!=="running")return;const t=1+Math.floor(Math.random()*3);let n=e.currentTime+.05;const s=e.createStereoPanner();s.pan.value=Math.random()*1.6-.8;const r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=2100,r.Q.value=1.8;const o=e.createGain();o.gain.value=.045+Math.random()*.035,r.connect(o),o.connect(s),s.connect(this.master);for(let a=0;a<t;a++){const c=e.createOscillator(),l=e.createGain();c.type="sawtooth";const h=1100+Math.random()*280;c.frequency.setValueAtTime(h,n),c.frequency.exponentialRampToValueAtTime(h*1.5,n+.09),c.frequency.exponentialRampToValueAtTime(h*.7,n+.32),l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(1,n+.05),l.gain.exponentialRampToValueAtTime(1e-4,n+.34),c.connect(l),l.connect(r),c.start(n),c.stop(n+.38),n+=.4+Math.random()*.22}}tone(e,t,n,s,r,o,a=0){const c=this.ctx;if(!c||!this.master)return;const l=c.currentTime+a,h=c.createOscillator(),u=c.createGain();h.type=e,h.frequency.setValueAtTime(t,l),n!==t&&h.frequency.exponentialRampToValueAtTime(n,l+o*.85),u.gain.setValueAtTime(1e-4,l),u.gain.exponentialRampToValueAtTime(s,l+r),u.gain.exponentialRampToValueAtTime(1e-4,l+o),h.connect(u),u.connect(this.master),h.start(l),h.stop(l+o+.02)}burst(e,t,n,s,r,o=0){const a=this.ctx;if(!a||!this.master||!this.noise)return;const c=a.currentTime+o,l=a.createBufferSource();l.buffer=this.noise,l.playbackRate.value=.6+Math.random()*.8;const h=a.createBiquadFilter();h.type="bandpass",h.frequency.setValueAtTime(e,c),t!==e&&h.frequency.exponentialRampToValueAtTime(t,c+r),h.Q.value=n;const u=a.createGain();u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(s,c+r*.25),u.gain.exponentialRampToValueAtTime(1e-4,c+r),l.connect(h),h.connect(u),u.connect(this.master),l.start(c),l.stop(c+r+.02)}blip(e){const t=this.ctx;if(!(!t||!this.master||t.state!=="running"))switch(e){case"wave":{const n=[523.25,587.33,659.25,783.99,880],s=n[Math.floor(Math.random()*n.length)];this.tone("sine",s,s,.16,.006,.42),this.tone("sine",s*4,s*4,.045,.004,.09);break}case"pick":this.burst(750,2600,2.2,.12,.13);break;case"drop":this.tone("sine",135,52,.28,.008,.22),this.tone("sine",2093,2093,.035,.005,.12,.05),this.tone("sine",2637,2637,.028,.005,.12,.1);break;case"chat":this.tone("sine",950,620,.09,.005,.07);break;case"join":this.tone("triangle",523.25,523.25,.13,.02,.55),this.tone("triangle",659.25,659.25,.13,.02,.6,.16);break;case"step":this.tone("sine",82+Math.random()*14,54,.06,.006,.09),this.burst(680,480,1.4,.02,.055);break}}step(){this.blip("step")}}class JM{enabled;worker=null;lastMs=0;lastChecksum=0;lastPoints=null;jobId=1;pending=0;constructor(e){this.enabled=e,e&&this.start()}start(){this.worker||(this.worker=new Worker(new URL(""+new URL("world.worker-KDWXU0ES.js",import.meta.url).href,import.meta.url),{type:"module"}),this.worker.onmessage=e=>{this.pending=0,this.lastMs=e.data.ms??0,this.lastChecksum=e.data.checksum??0,this.lastPoints=e.data.points})}stop(){this.worker?.terminate(),this.worker=null,this.lastPoints=null,this.lastMs=0}setEnabled(e){this.enabled=e,e?this.start():this.stop()}tick(e,t){if(!this.enabled||!this.worker||this.pending)return;const n={id:this.jobId++,slot:t,seed:t*13.7,t:e,kind:"flock"};this.pending=1,this.worker.postMessage(n)}}const $o=16,QM=20,$M=40;let Ri=null;function e_(){if(Ri)return Ri;const i=new Uint8Array([82,86,112,255,142,140,152,255,216,200,176,255,255,244,218,255]);return Ri=new ql(i,4,1,un),Ri.minFilter=qt,Ri.magFilter=qt,Ri.needsUpdate=!0,Ri}function t_(i){const e=(t,n)=>(t.wrapS=t.wrapT=Zo,t.repeat.set(n,n),t.colorSpace=Wt,t.anisotropy=8,t);return{sand:e(i.load("/textures/sand.jpg"),1),grass:e(i.load("/textures/grass.jpg"),1),rock:e(i.load("/textures/rock.jpg"),1),wood:e(i.load("/textures/wood.jpg"),1),plaster:e(i.load("/textures/plaster.jpg"),1),foam:e(i.load("/textures/foam.jpg"),1)}}function st(i,e=16777215){return new $e({map:i,color:e,gradientMap:e_()})}function dn(i,e=16045232){return new er({map:i,color:e,roughness:.82,metalness:0})}function St(i,e=.74,t=.32){return new er({color:i,metalness:e,roughness:t})}function Lf(i){return new BM({color:i,roughness:.06,metalness:0,transmission:.55,transparent:!0,opacity:.85,emissive:i,emissiveIntensity:1.05})}function Co(i,e){const t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function n_(i,e){const t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=Co(t,n),l=Co(t+1,n),h=Co(t,n+1),u=Co(t+1,n+1);return c+(l-c)*o+(h-c)*a+(c-l-h+u)*o*a}function Hu(i,e){let t=0,n=.5,s=1;for(let r=0;r<5;r++)t+=n*n_(i*s,e*s),n*=.5,s*=2.05;return t}function pr(i,e,t){const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)}function zr(i,e,t=0,n=0,s=56,r=1){const o=i-t,a=e-n,c=Math.hypot(o,a),l=Hu((o+r*17.2)*.035,(a-r*9.1)*.035),h=pr(s,s*.42,c),u=(l-.42)*7.5,f=Math.exp(-((o-s*.12)**2)/90-(a+s*.28)**2/110)*s*.22,d=-Math.exp(-((o+s*.2)**2)/140-(a-s*.05)**2/180)*1.4;let m=(u+f+d+1.1)*h;const v=pr(1.1,2.6,m);m+=(Hu(o*.14+r*3.3,a*.14-r*5.1)-.5)*1.7*v;const g=pr(.08,.4,m)*pr(1.15,.62,m);m+=(.52-m)*g*.42;const p=pr(s*1.18,s*.92,c);return m-(1-h)*(.55+(1-p)*1.9)}function Ht(i,e){return zr(i,e,0,0,40,3.1)}const fa=7.6,yi=6.8,i_=3.35,Wn=1.75,ri=2.25,Gu=[16181455,15980740,15200228,16248022,15654856,15262962],Vu=[12731694,4025210,12088115,7029286,9056806,3104080],Wu=[12868666,15254394,4029035,8031428,13925024,13935180];function nh(i){i.traverse(e=>{const t=e;t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)})}function me(i,e,t,n,s=0,r=0,o=0){const a=new ee(new Qt(i,e,t),n);return a.position.set(s,r,o),a}function pa(i){return Math.atan2(-i.x,-i.z)}function qi(i){const e=pa(i),t=i.radius*.12;return{x:i.x-Math.sin(e)*t,z:i.z-Math.cos(e)*t,yaw:e}}function ea(i){const e=pa(i),t=e+Math.PI/2;return{x:i.x+Math.sin(t)*i.radius*.42+Math.sin(e)*i.radius*.08,z:i.z+Math.cos(t)*i.radius*.42+Math.cos(e)*i.radius*.08,yaw:e}}function ih(i){const e=pa(i);return{x:i.x+Math.sin(e)*(i.radius*1.12),z:i.z+Math.cos(e)*(i.radius*1.12),yaw:e+Math.PI/2}}function Br(i){const e=qi(i),t=yi/2+1.35;return{x:e.x+Math.sin(e.yaw)*t,z:e.z+Math.cos(e.yaw)*t,yaw:e.yaw+Math.PI}}function qn(i,e,t){return Math.max(.35,zr(e,t,i.x,i.z,i.radius,i.seed))}function sh(i,e,t){const n=qi(i),s=e-n.x,r=t-n.z,o=Math.cos(n.yaw),a=Math.sin(n.yaw);return{x:s*o-r*a,z:s*a+r*o}}function s_(i,e,t){const n=qi(i),s=Math.cos(n.yaw),r=Math.sin(n.yaw);return{x:n.x+e*s+t*r,z:n.z-e*r+t*s}}function r_(i,e,t,n=!1){const s=sh(i,e,t),r=n?.08:.42;return Math.abs(s.x)<fa/2-r&&s.z>-yi/2+r&&s.z<yi/2-r*.45}function o_(i,e,t){const n=sh(i,e,t);return Math.abs(n.x)<Wn*.95&&n.z>yi/2-1.15&&n.z<yi/2+2.4}function rh(i){const e=qi(i);return qn(i,e.x,e.z)+.28}function a_(i,e,t,n,s,r=!1){const o=sh(i,n,s),a=fa/2,c=yi/2,l=.4,h=r?.35:1.6,u=Math.abs(o.x)<a+.12,f=o.z>-c-.12&&o.z<c+h;if(!u||!f)return{x:n,z:s};const d=!r&&Math.abs(o.x)<Wn/2-.12&&o.z>c-.55;let m=o.x,v=o.z;return d||(o.x>a-l&&o.x<a+.45&&(m=a-l),o.x<-a+l&&o.x>-a-.45&&(m=-a+l)),o.z<-c+l&&o.z>-c-.45&&Math.abs(o.x)<a&&(v=-c+l),!d&&o.z>c-l&&o.z<c+.5&&Math.abs(o.x)<a&&(v=c-l),s_(i,m,v)}function c_(i,e,t){const n=new Ve,s=dn(e,Gu[t%Gu.length]),r=st(i,5913124),o=st(i,Vu[t%Vu.length]),a=st(i,12886122),c=st(i,7029286),l=new pi({color:16763256,toneMapped:!1}),h=fa,u=yi,f=i_,d=.22;n.add(me(h+1.6,.22,u+2.4,r,0,.08,.35)),n.add(me(h-.2,.12,u-.2,a,0,.22,0));const m=.22+f/2;n.add(me(h,f,d,s,0,m,-u/2+d/2)),n.add(me((h-Wn)/2,f,d,s,-9.35/4,m,u/2-d/2)),n.add(me((h-Wn)/2,f,d,s,(h+Wn)/4,m,u/2-d/2)),n.add(me(Wn+.15,f-ri,d,s,0,.22+ri+(f-ri)/2,u/2-d/2)),n.add(me(d,f,u,s,-h/2+d/2,m,0)),n.add(me(d,f,u,s,h/2-d/2,m,0)),n.add(me(Wn+.3,.16,.2,c,0,.22+ri+.02,u/2+.02)),n.add(me(.12,ri,.12,c,-Wn/2,.22+ri/2,u/2+.02)),n.add(me(.12,ri,.12,c,Wn/2,.22+ri/2,u/2+.02));const v=Math.atan2(2.15,u/2+.35),g=new Ve;g.name="roofs",g.userData.roof=!0;for(const X of[-1,1]){const ie=me(h+1.3,.2,u/2+1.05,o,0,f+1.22,X*(u/4+.15));ie.rotation.x=X*v,g.add(ie)}g.add(me(h+1.4,.18,.32,r,0,f+2.28,0)),g.add(me(.7,1.8,.7,dn(e,12159592),-h/2+1.3,f+2.1,-.8)),g.add(me(.9,.16,.9,St(3813930,.3,.55),-h/2+1.3,f+3.05,-.8)),n.add(g);for(const X of[-2.2,2.2])n.add(me(1.15,1.15,.08,l,X,1.85,u/2+.02)),n.add(me(1.28,.08,.12,c,X,2.46,u/2+.04)),n.add(me(1.28,.08,.12,c,X,1.24,u/2+.04));n.add(me(1.2,1.1,.08,l,-h/2-.01,1.9,-.4)),n.add(me(1.2,1.1,.08,l,h/2+.01,1.9,.6));for(const X of[-1,1]){const ie=new ee(new Ce(.09,.11,2.15,8),r);ie.position.set(X*2.4,1.18,u/2+.85),n.add(ie)}n.add(me(5.4,.12,1.5,r,0,2.28,u/2+.85));const p=new $e({color:16248800}),M=new $e({color:15914176}),y=new $e({color:12868666}),x=new $e({color:9056806}),R=new $e({color:4025210}),b=new $e({color:15258288}),C=new $e({color:15254394}),E=St(2761760,.3,.55),w=St(12865582,.4,.4),_=new pi({color:16756822,toneMapped:!1}),I=new pi({color:16742962,toneMapped:!1}),k=[9056806,4025210,12865582,15254394,7029286,3104080].map(X=>new $e({color:X})),O=(X,ie,U)=>{const Ee=new Ve;Ee.add(me(.5,.08,.5,r,0,.42,0)),Ee.add(me(.48,.06,.48,M,0,.49,0)),Ee.add(me(.5,.46,.07,r,0,.68,-.22));for(const[ue,Se]of[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]])Ee.add(me(.06,.4,.06,r,ue,.2,Se));Ee.position.set(X,0,ie),Ee.rotation.y=U,n.add(Ee)};n.add(me(3.15,.035,2.55,x,.1,.29,.15)),n.add(me(1.15,.03,.7,R,-2.15,.29,-.15)),n.add(me(2.05,.16,2.55,r,-2.15,.36,-1.4)),n.add(me(1.88,.28,2.38,M,-2.12,.56,-1.4)),n.add(me(1.86,.1,1.55,y,-2.12,.72,-1.05)),n.add(me(.72,.16,.42,p,-2.48,.82,-2.38)),n.add(me(.68,.14,.4,p,-1.78,.8,-2.36)),n.add(me(.12,.72,2.5,r,-3.12,.68,-1.4)),n.add(me(.55,.48,.55,r,-1.15,.5,-2.45)),n.add(me(.52,.04,.52,r,-1.15,.76,-2.45));const A=new ee(new Ce(.018,.022,.22,6),E);A.position.set(-1.15,.9,-2.45),n.add(A);const L=new ee(new Ce(.1,.14,.14,8),C);L.position.set(-1.15,1.08,-2.45),n.add(L);const N=new ee(new et(.055,6,5),_);N.position.set(-1.15,1.04,-2.45),n.add(N),n.add(me(1.15,1.25,.42,dn(e,12159592),.2,.9,-u/2+.38)),n.add(me(.72,.52,.1,I,.2,.72,-u/2+.58)),n.add(me(1.28,.08,.48,r,.2,1.56,-u/2+.4)),n.add(me(.22,.18,.16,w,-.18,1.7,-u/2+.42)),n.add(me(.18,.22,.14,k[2],.42,1.72,-u/2+.42));for(let X=0;X<4;X++)n.add(me(.08,.2+X%2*.05,.14,k[X],-.22+X*.14,1.72,-u/2+.48));n.add(me(1.15,1.35,.42,r,2.55,.96,-2.4));for(const X of[.55,.95,1.35])n.add(me(1.05,.04,.38,c,2.55,X,-2.38));for(let X=0;X<5;X++)n.add(me(.1,.26+X%3*.04,.2,k[X%k.length],2.15+X*.16,1.52,-2.28));n.add(me(.28,.18,.22,b,2.7,1.14,-2.22)),n.add(me(1.62,.08,1.12,r,1.95,.86,.35)),n.add(me(1.5,.02,.28,y,1.95,.91,.35));for(const[X,ie]of[[-.62,-.42],[.62,-.42],[-.62,.42],[.62,.42]])n.add(me(.07,.76,.07,r,1.95+X,.46,.35+ie));n.add(me(.28,.03,.28,b,1.62,.92,.12)),n.add(me(.28,.03,.28,b,2.28,.92,.12)),n.add(me(.22,.08,.22,R,1.95,.96,.58));const z=new ee(new Ce(.06,.08,.16,8),b);z.position.set(1.95,1.02,.08),n.add(z),O(1.95,1.28,0),O(1.95,-.55,Math.PI),O(2.85,.35,-Math.PI/2);const F=new ee(new Ce(.02,.025,.26,6),E);F.position.set(2.48,1.05,.72),n.add(F);const K=new ee(new Ce(.11,.15,.15,8),C);K.position.set(2.48,1.24,.72),n.add(K);const le=new ee(new et(.06,6,5),_);le.position.set(2.48,1.2,.72),n.add(le),n.add(me(.72,.48,.7,r,2.55,.52,2.05)),n.add(me(.68,.1,.66,y,2.55,.8,2.05)),n.add(me(.7,.42,.1,r,2.55,1,1.74)),n.add(me(.42,.06,.42,r,2.55,.86,2.55));const B=new ee(new Ce(.05,.045,.08,8),x);B.position.set(2.55,.94,2.55),n.add(B),n.add(me(2.15,.12,.62,r,-2.45,.96,2.05));for(const[X,ie]of[[-3.2,1.82],[-1.72,1.82],[-3.2,2.28],[-1.72,2.28]])n.add(me(.07,.72,.07,r,X,.58,ie));n.add(me(2.05,.7,.14,r,-2.45,1.5,1.78));const J=me(.78,.88,.62,St(3813930,.35,.5),-2.85,.74,2.05);n.add(J),n.add(me(.55,.12,.08,I,-2.85,.62,2.34));const Me=new ee(new et(.13,8,6),w);Me.position.set(-2.85,1.28,2.05),n.add(Me);const j=new ee(new Ce(.06,.07,.04,8),w);j.position.set(-2.85,1.42,2.05),n.add(j),n.add(me(.38,.08,.32,E,-1.95,1.04,2.12));const he=new ee(new Ce(.14,.12,.08,10),St(9083552,.45,.35));he.position.set(-1.95,1.08,2.12),n.add(he);for(const X of[-2.55,-2.2]){const ie=new ee(new Ce(.06,.07,.14,8),k[X<-2.4?1:3]);ie.position.set(X,1.1,1.88),n.add(ie)}for(const[X,ie]of[[-3.05,7029286],[-2.75,3813930],[-2.48,12865582]]){const U=new ee(new Ce(.09,.08,.05,8),St(ie,.35,.45));U.position.set(X,1.72,1.82),n.add(U)}for(const X of[-2.2,2.2])n.add(me(1.32,.06,.14,c,X,1.22,u/2-d-.05)),n.add(me(.2,1.2,.05,C,X-.5,1.86,u/2-d-.07)),n.add(me(.2,1.2,.05,C,X+.5,1.86,u/2-d-.07));n.add(me(.06,1.15,1.22,C,-h/2+d+.04,1.9,-.4)),n.add(me(.06,1.15,1.22,C,h/2-d-.04,1.9,.6)),n.add(me(.55,.42,.04,r,-1.15,2.15,-u/2+.14)),n.add(me(.45,.32,.02,R,-1.15,2.15,-u/2+.16)),n.add(me(.48,.38,.04,r,1.55,2.2,-u/2+.14)),n.add(me(.38,.28,.02,b,1.55,2.2,-u/2+.16)),n.add(me(1.05,.06,.2,r,-2.55,2.05,u/2-d-.12));for(const X of[-2.9,-2.55,-2.2]){const ie=new ee(new Ce(.02,.02,.1,5),E);ie.rotation.x=Math.PI/2,ie.position.set(X,1.95,u/2-d-.16),n.add(ie)}n.add(me(.22,.35,.08,x,-2.55,1.72,u/2-d-.2));const _e=new ee(new Ce(.12,.1,.22,8),R);_e.position.set(.85,.4,-2.15),n.add(_e);const de=new ee(new et(.16,7,6),new $e({color:4029035}));de.position.set(.85,.62,-2.15),de.scale.set(1,.7,1),n.add(de),n.add(me(h-.6,.1,.16,r,0,2.92,0)),n.add(me(.16,.1,u-.8,r,-1.6,2.92,.1)),n.add(me(.16,.1,u-.8,r,1.6,2.92,.1));const Fe=new ee(new Ce(.014,.014,.4,5),E);Fe.position.set(0,2.78,.1),n.add(Fe);const Le=new ee(new Ce(.2,.3,.24,8),y);Le.position.set(0,2.52,.1),n.add(Le);const Ie=new ee(new et(.11,8,6),_);Ie.position.set(0,2.46,.1),n.add(Ie);const We=new Zr(16751176,0,11.5,1.25);return We.name="interiorLight",We.position.set(0,2.48,.1),n.add(We),nh(n),n}function ic(i,e){i.traverse(t=>{(t.userData.roof||t.userData.shell)&&(t.visible=!e),t.name==="interiorLight"&&t instanceof Zr&&(t.intensity=e?3.4:0)})}function l_(){const i=new Ve,e=new ee(new Ce(2.6,2.75,.14,20),St(3817528,.25,.7));e.position.y=.07,i.add(e);const t=new ee(new Sn(2.15,.06,6,24),new $e({color:16182748}));t.rotation.x=Math.PI/2,t.position.y=.15,i.add(t);const n=me(1.35,.04,.22,new $e({color:16182748}),0,.16,0);return i.add(n),i.add(me(.22,.04,1.35,new $e({color:16182748}),-.56,.16,0)),i.add(me(.22,.04,1.35,new $e({color:16182748}),.56,.16,0)),nh(i),i}function h_(i){const e=new Ve,t=Wu[i%Wu.length],n=St(t,.35,.45),s=St(2762276,.4,.45),r=Lf(11064552),o=new ee(new Is(.55,1.55,6,12),n);o.rotation.z=Math.PI/2,o.position.set(.1,.95,0),o.scale.set(1,.85,1.05),e.add(o);const a=new ee(new et(.42,12,10),r);a.position.set(1.05,.98,0),a.scale.set(1.05,.85,.95),e.add(a);const c=me(.9,.55,1.15,r,.15,1.22,0);e.add(c);const l=new ee(new Ce(.08,.16,2.4,8),n);l.rotation.z=Math.PI/2,l.position.set(-1.85,1.05,0),e.add(l);const h=me(.12,.7,.35,s,-2.95,1.35,0);e.add(h);const u=p=>{const M=new ee(new Ce(.05,.05,2.4,6),s);M.rotation.z=Math.PI/2,M.position.set(.05,.22,p),e.add(M);for(const y of[-.55,.7]){const x=new ee(new Ce(.04,.04,.7,5),s);x.position.set(y,.55,p),e.add(x)}};u(-.55),u(.55);const f=new ee(new Ce(.06,.08,.45,8),s);f.position.set(0,1.62,0),e.add(f);const d=new Ve;d.name="rotor",d.position.set(0,1.86,0);const m=new ee(new Ce(.12,.12,.08,10),s);d.add(m);for(let p=0;p<2;p++){const M=me(4.6,.04,.22,s,0,0,0);M.rotation.y=p*Math.PI/2,d.add(M)}e.add(d);const v=new Ve;v.name="tailRotor",v.position.set(-3,1.55,.18);for(let p=0;p<2;p++){const M=me(.9,.04,.1,s);M.rotation.z=p*Math.PI/2,v.add(M)}e.add(v);const g=new ee(new et(.07,8,6),new pi({color:16757575,toneMapped:!1}));return g.position.set(1.35,.72,0),e.add(g),nh(e),e}function u_(i,e,t){const n=i.getObjectByName("rotor"),s=i.getObjectByName("tailRotor"),r=e?28:1.6;n&&(n.rotation.y+=r*t),s&&(s.rotation.z+=r*1.4*t)}const d_=104;function f_(i){if(i<=0)return{x:0,z:0};let e=1,t=1;for(;t+e*6<=i;)t+=e*6,e+=1;const n=i-t,s=Math.floor(n/e),r=n%e,o=s/6*Math.PI*2,a=(s+1)/6*Math.PI*2,c=r/e,l=e*d_;return{x:(Math.cos(o)*(1-c)+Math.cos(a)*c)*l,z:(Math.sin(o)*(1-c)+Math.sin(a)*c)*l}}function oh(){return Array.from({length:$o},(i,e)=>{const{x:t,z:n}=f_(e);return{x:t,z:n,radius:$M+e%3*1.4,seed:e===0?3.1:11+e*3.17}})}const{floor:yl,min:p_,sin:m_}=Math,mn="Trystero",kr=(i,e)=>Array(i).fill(void 0).map(e),g_="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",Yi=i=>kr(i,()=>g_[yl(Math.random()*62)]??"").join(""),on=Yi(20),ji=Promise.all.bind(Promise),Df=typeof window<"u",{entries:Cn,fromEntries:If,keys:Ft,values:Us}=Object,Xt=()=>{},Uf="candidate",ft=i=>(i!==null&&clearTimeout(i),null),ct=i=>new Error(`${mn}: ${i}`),Vs=(i,e)=>i instanceof Error&&i.message?i.message:typeof i=="string"&&i?i:$t(i??e),ui=(i,e)=>i instanceof Error?i:ct(Vs(i,e)),v_=new TextEncoder,x_=new TextDecoder,gi=i=>v_.encode(i),zi=i=>x_.decode(i),Hr=i=>i.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),Gr=(...i)=>i.join("@"),y_=(i,e)=>{const t=[...i],n=()=>{const r=m_(e++)*1e4;return r-yl(r)};let s=t.length;for(;s;){const r=yl(n()*s--),o=t[s];t[s]=t[r],t[r]=o}return t},Nf=(i,e,t,n=!1)=>i.relayConfig?.urls||(n?y_(e,Of(i.appId)):e).slice(0,i.relayConfig?.redundancy??t),$t=JSON.stringify,Gi=i=>{try{return JSON.parse(i)}catch{throw ct(`failed to parse JSON: ${i}`)}},Of=(i,e=Number.MAX_SAFE_INTEGER)=>i.split("").reduce((t,n)=>t+n.charCodeAt(0),0)%e,Xu=3333,M_=6e4,sc={};let Dr=null,Ml=null;const __=()=>{Dr||(Dr=new Promise(i=>{Ml=i}).finally(()=>{Ml=null,Dr=null}))},w_=()=>{Ml?.()},Ff=(i,e,t)=>{const n={};let s=!1,r=!1,o=Xt;n.ready=new Promise(c=>o=c);const a=()=>{r=!1;const c=new WebSocket(i);c.onclose=()=>{if(r)return;if(r=!0,Dr){Dr.then(a);return}const l=sc[i]??=Xu;setTimeout(a,Math.random()*l),sc[i]=p_(l*2,M_)},c.onmessage=l=>e(String(l.data)),n.socket=c,n.url=c.url,c.onopen=()=>{const l=s;s=!0,o(n),sc[i]=Xu,l&&t?.()},n.send=l=>{c.readyState===1&&c.send(l)}};return a(),n},zf=i=>{const e={},t=new WeakMap,n=o=>{const a=t.get(o);if(!a)throw ct("relay bookkeeping missing registration for relay client");return a},s=()=>{const o={},a=c=>o[c]??={};return{forKey:a,forRelay:c=>a(n(c))}},r=(o,a)=>(e[o]=a,t.set(a,o),a);return{register:(o,a)=>{const c=e[o];return c||r(o,a())},keyOf:n,scoped:s,getSockets:()=>If(Cn(e).flatMap(([o,a])=>{const c=i(a);return c?[[o,c]]:[]}))}},S_=()=>{if(Df){const i=new AbortController;return addEventListener("online",w_,{signal:i.signal}),addEventListener("offline",__,{signal:i.signal}),()=>i.abort()}return Xt},ah="AES-GCM",b_={},T_=i=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(i)))),E_=i=>{const e=atob(i);return new Uint8Array(e.length).map((t,n)=>e.charCodeAt(n)).buffer},ma=async(i,e)=>new Uint8Array(await crypto.subtle.digest(i,gi(e))),Ws=async i=>b_[i]??=Array.from(await ma("SHA-1",i)).map(e=>e.toString(36)).join(""),A_=async(i,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},gi(`${i}:${e}:${t}`)),{name:ah},!1,["encrypt","decrypt"]),R_=async(i,e)=>Hr(await ma("SHA-256",`${mn}:${i}:${e}`)),Bf="$",kf=",",P_=async(i,e)=>{const t=crypto.getRandomValues(new Uint8Array(16));return t.join(kf)+Bf+T_(await crypto.subtle.encrypt({name:ah,iv:t},await i,gi(e)))},C_=async(i,e)=>{const[t,n]=e.split(Bf);return zi(await crypto.subtle.decrypt({name:ah,iv:new Uint8Array(t?.split(kf).map(Number)??[])},await i,E_(n??"")))},ch=57333,L_=18e4,D_=20;var I_=class{makeOffer;pool=[];pooled=new Set;leased=new Map;recycling=new Set;cleanupTimer=null;active=!1;constructor(i){this.makeOffer=i}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),kr(D_,this.makeOffer).forEach(i=>this.push(i)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(i=>i.isDead?(this.pooled.delete(i),!1):!0)},ch)}push(i){i.isDead||this.pooled.has(i)||this.leased.has(i)||(this.pool.push(i),this.pooled.add(i))}shift(i){const e=[];for(;e.length<i&&this.pool.length>0;){const t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(i){const e=this.leased.get(i);e&&(ft(e),this.leased.delete(i))}recycle(i){if(!(i.isDead||this.recycling.has(i))){if(i.connection.remoteDescription){i.destroy();return}if(!this.active){i.destroy();return}this.recycling.add(i),i.setHandlers({connect:Xt,close:Xt,error:Xt}),i.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||i.isDead||!this.active){i.destroy();return}this.push(i)}).catch(()=>i.destroy()).finally(()=>this.recycling.delete(i))}}reclaimLeased(i){const e=this.leased.get(i);e&&(ft(e),this.leased.delete(i),this.recycle(i))}lease(i){this.claimLeased(i),this.leased.set(i,setTimeout(()=>{this.leased.delete(i),this.recycle(i)},L_))}checkout(i,e,t){const n=this.shift(i),s=Math.max(0,i-n.length);s>0&&n.push(...kr(s,this.makeOffer));const r=async(o,a=!1)=>{try{const c=await t(o);return e?(this.lease(o),{peer:o,offer:c,claim:()=>this.claimLeased(o),reclaim:()=>this.reclaimLeased(o)}):{peer:o,offer:c}}catch(c){if(this.claimLeased(o),this.pooled.delete(o),o.destroy(),!a)return r(this.makeOffer(),!0);throw c}};return ji(n.map(o=>r(o)))}getOffers(i,e){return this.checkout(i,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(i=>i.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((i,e)=>{ft(i),e.destroy()}),this.leased.clear(),this.recycling.forEach(i=>i.destroy()),this.recycling.clear()}};const rc=ct("incorrect password for overlapping room"),U_=(i,e,t)=>{const n=o=>ma("SHA-256",`${o}:${i}:${e}:${t}`).then(Hr),s=async(o,a,c)=>{if(!i)return;if(c){const h=Yi(36);await o({__trystero_pw:"challenge",c:h});const{data:u}=await a();if(!u||typeof u!="object"||u.__trystero_pw!=="response"||typeof u.h!="string")throw rc;const f=await n(h);if(u.h!==f)throw rc;return}const{data:l}=await a();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw rc;await o({__trystero_pw:"response",h:await n(l.c)})};return{run:s,compose:o=>i||o?async(a,c,l,h)=>{await s(c,l,h),await o?.(a,c,l,h)}:void 0}},N_=i=>{const e=Vs(i,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},O_=({onPeerHandshake:i,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:n,sendHandshakeReady:s,onActivate:r,onFailure:o})=>{const a={},c=(u,f)=>{const d=a[u];!d||f&&d.peer!==f||d.isActive||!d.didLocalHandshakePass||!d.didReceiveRemoteReady||(d.isActive=!0,d.handshakeTimer=ft(d.handshakeTimer),r(u,d.peer))},l=(u,f,d)=>{const m=a[u];if(!m||m.peer!==f)return;const v=N_(d);e?.(u,v),o(u,f,ct(v))},h=(u,f)=>{const d=a[u];!d||d.peer!==f||d.isActive||(d.didLocalHandshakePass=!0,s("",u).catch(m=>l(u,f,ct(`failed sending handshake readiness: ${Vs(m,"unknown send failure")}`))),c(u,f))};return{addPeer:(u,f)=>{a[u]={peer:f,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(u,f)=>{const d=a[u];d&&(d.handshakeTimer=ft(d.handshakeTimer),d.pendingHandshakePayloads.length=0,d.handshakeWaiters.splice(0).forEach(m=>m.reject(f)),delete a[u])},canReceiveFromPeer:(u,f)=>{const d=a[u];return!!(d&&(d.isActive||f))},start:(u,f)=>{const d=a[u];if(!d||d.peer!==f)return;d.handshakeTimer=setTimeout(()=>l(u,f,ct(`handshake timed out after ${t}ms`)),t);const m=async(p,M)=>{await n(p,u,M)},v=()=>new Promise((p,M)=>{const y=a[u];if(!y||y.peer!==f){M(ct("peer disconnected during handshake"));return}const x=y.pendingHandshakePayloads.shift();if(x){p(x);return}y.handshakeWaiters.push({resolve:p,reject:R=>M(R)})}),g=on<u;Promise.resolve(i?.(u,m,v,g)).then(()=>h(u,f)).catch(p=>l(u,f,ui(p,"handshake failed")))},receiveHandshakeData:(u,f,d)=>{const m=a[f];if(!m||m.isActive)return;const v=d===void 0?{data:u}:{data:u,metadata:d},g=m.handshakeWaiters.shift();if(g){g.resolve(v);return}m.pendingHandshakePayloads.push(v)},receiveHandshakeReady:u=>{const f=a[u];!f||f.isActive||(f.didReceiveRemoteReady=!0,c(u))}}},F_=15e3,z_=5e3,qu="icegatheringstatechange",B_="iceconnectionstatechange",mr="offer",k_="answer",H_=/out of range/i,Yu=i=>i.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host");var ju=(i,{trickleIce:e,rtcConfig:t,rtcPolyfill:n,turnConfig:s,_test_only_mdnsHostFallbackToLoopback:r})=>{const o=new(n??RTCPeerConnection)({iceServers:G_.concat(s??[]),...t}),a={},c=[],l=[],h=e!==!1,u=[],f=[];let d=!1,m=!1,v=null,g=null,p=!1;const M=()=>g=ft(g),y=()=>{p||(p=!0,M(),a.close?.())},x=B=>{a.signal?a.signal(B):c.push(B)},R=B=>{const J=a.signal;a.signal=Me=>{J?.(Me),B(Me)},c.length>0&&c.splice(0).forEach(Me=>a.signal?.(Me))},b=B=>r?Yu(B):B,C=B=>{if(!r||typeof B.candidate!="string")return B;const J=Yu(B.candidate);return J===B.candidate?B:{...B,candidate:J}},E=B=>({type:B.localDescription?.type??mr,sdp:b(B.localDescription?.sdp??"")}),w=()=>{const B=o.remoteDescription?.sdp;return B?B.match(/a=ice-ufrag:([^\s]+)/)?.[1]??null:null},_=()=>(o.remoteDescription?.sdp?.match(/^m=/gm)??[]).length,I=B=>{if(!o.remoteDescription)return!1;const J=_();if(typeof B.sdpMLineIndex=="number"&&J>0&&B.sdpMLineIndex>=J)return!1;const Me=w();return!(Me&&B.usernameFragment&&B.usernameFragment!==Me)},k=async B=>{try{return await o.addIceCandidate(B),!0}catch(J){if(J instanceof Error&&H_.test(J.message)&&typeof B.sdpMLineIndex=="number")return!1;throw J}},O=async()=>{if(!o.remoteDescription||u.length===0)return;const B=u.splice(0),J=[];for(const Me of B){if(!I(Me)){J.push(Me);continue}await k(Me)||J.push(Me)}J.length>0&&u.push(...J)},A=async B=>{if(I(B)){await k(B)||u.push(B);return}u.push(B)},L=B=>{B.binaryType="arraybuffer",B.bufferedAmountLowThreshold=65535,B.onmessage=J=>{const Me=J.data;a.data?a.data(Me):l.push(Me)},B.onopen=()=>a.connect?.(),B.onclose=y,B.onerror=({error:J})=>a.error?.(ui(J,"data channel error"))},N=async B=>{let J=null;try{await Promise.race([new Promise(Me=>{const j=()=>{B.iceGatheringState==="complete"&&(B.removeEventListener(qu,j),Me())};B.addEventListener(qu,j),j()}),new Promise(Me=>{J=setTimeout(Me,F_)})])}finally{ft(J)}return E(B)},z=async()=>{const B=h?E(o):await N(o);return x(B),B};i?(v=o.createDataChannel("data"),L(v)):o.ondatachannel=({channel:B})=>{v=B,L(B)};const F=async(B=!1)=>{if(o.connectionState!=="closed")try{return d=!0,B&&(o.signalingState!=="stable"&&o.signalingState!=="closed"&&o.localDescription?.type===mr&&await o.setLocalDescription({type:"rollback"}),typeof o.restartIce=="function"&&o.restartIce()),await o.setLocalDescription(B?await o.createOffer({iceRestart:!0}):void 0),await z()}catch(J){a.error?.(ui(J,"failed to create local offer"))}finally{d=!1}};o.onnegotiationneeded=async()=>F(!1),o.onicecandidate=({candidate:B})=>{if(!h||!B)return;const J=C(typeof B.toJSON=="function"?B.toJSON():{candidate:B.candidate,sdpMid:B.sdpMid,sdpMLineIndex:B.sdpMLineIndex,usernameFragment:B.usernameFragment});x({type:Uf,sdp:JSON.stringify(J)})};const K=()=>{if(o.connectionState==="failed"||o.connectionState==="closed"||o.iceConnectionState==="failed"||o.iceConnectionState==="closed"){y();return}if(o.connectionState==="connected"||o.connectionState==="connecting"||o.iceConnectionState==="connected"||o.iceConnectionState==="completed"||o.iceConnectionState==="checking"){M();return}if(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected"){g||(g=setTimeout(()=>{g=null,(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected")&&y()},z_));return}};o.onconnectionstatechange=K,o.addEventListener(B_,K),o.ontrack=B=>{const J=B.streams[0];if(J){if(!a.track&&!a.stream){f.push({track:B.track,stream:J});return}a.track?.(B.track,J),a.stream?.(J)}},o.onremovestream=B=>a.stream?.(B.stream);const le=i?new Promise(B=>R(J=>{J.type===mr&&B(J)})):Promise.resolve();return i&&queueMicrotask(()=>{!d&&o.signalingState==="stable"&&!o.localDescription&&o.connectionState!=="closed"&&o.onnegotiationneeded?.(new Event("negotiationneeded"))}),{created:Date.now(),connection:o,get channel(){return v},get isDead(){return o.connectionState==="closed"},getOffer:async(B=!1)=>{if(i)return B?F(!0):o.localDescription?.type===mr?h?E(o):N(o):le},async signal(B){if(B.type==="candidate"){try{const J=JSON.parse(B.sdp);J&&typeof J=="object"&&await A(C(J))}catch(J){a.error?.(ui(J,"failed to parse remote candidate"))}return}if(!(v?.readyState==="open"&&!B.sdp?.includes("a=rtpmap")))try{const J={...B,sdp:b(B.sdp)};if(B.type===mr){if(d||o.signalingState!=="stable"&&!m){if(i)return;await ji([o.setLocalDescription({type:"rollback"}),o.setRemoteDescription(J)])}else await o.setRemoteDescription(J);return await O(),await o.setLocalDescription(),await z()}if(B.type===k_){m=!0;try{await o.setRemoteDescription(J),await O()}finally{m=!1}}}catch(J){a.error?.(ui(J,"failed to apply remote signal"))}},sendData:B=>v?.send(B),destroy:()=>{M(),v?.close(),o.close(),d=!1,m=!1,y()},setHandlers:B=>{const{signal:J,...Me}=B;Object.assign(a,Me),a.data&&l.length>0&&l.splice(0).forEach(j=>a.data?.(j)),J&&R(J),(a.track||a.stream)&&f.length>0&&f.splice(0).forEach(({track:j,stream:he})=>{a.track?.(j,he),a.stream?.(he)})},offerPromise:le,addStream:B=>B.getTracks().forEach(J=>o.addTrack(J,B)),removeStream:B=>o.getSenders().filter(J=>J.track&&B.getTracks().includes(J.track)).forEach(J=>o.removeTrack(J)),addTrack:(B,J)=>o.addTrack(B,J),removeTrack:B=>{const J=o.getSenders().find(Me=>Me.track===B);J&&o.removeTrack(J)},replaceTrack:(B,J)=>{const Me=o.getSenders().find(j=>j.track===B);if(Me)return Me.replaceTrack(J)}}};const G_=[...kr(3,(i,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(i=>({urls:i})),V_=Object.getPrototypeOf(Uint8Array),oc=32,W_=0,ac=32,Zu=34,cc=35,Xo=36,Pi=16*2**10-Xo,gr=255,X_=65535,Ku="bufferedamountlow",Ju="close",Qu="error",q_=1e4,Y_=i=>i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength),j_=(i,e=q_)=>i.readyState!=="open"||i.bufferedAmount<=i.bufferedAmountLowThreshold?Promise.resolve(i.readyState==="open"):new Promise(t=>{let n=!1,s=null;const r=c=>{n||(n=!0,i.removeEventListener(Ku,o),i.removeEventListener(Ju,a),i.removeEventListener(Qu,a),ft(s),t(c))},o=()=>r(!0),a=()=>r(!1);if(i.addEventListener(Ku,o),i.addEventListener(Ju,a),i.addEventListener(Qu,a),s=setTimeout(()=>r(!1),e),i.readyState!=="open"){r(!1);return}i.bufferedAmount<=i.bufferedAmountLowThreshold&&r(!0)}),Z_=({getPeer:i,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:n})=>{const s={},r={},o={},a={},c=(u,f,{includePending:d=!1}={})=>(u?Array.isArray(u)?u:[u]:e(d)).flatMap(m=>{const v=i(m,d);return v?[Promise.resolve(f(m,v))]:(console.warn(`${mn}: no peer with id ${m} found`),[])});return{makeInternalAction:(u,f={})=>{const d=r[u];if(s[u]&&d){const M=s[u].options;if(M.sendToPending!==!!f.sendToPending||M.receiveWhilePending!==!!f.receiveWhilePending)throw ct(`action type "${u}" cannot be redefined`);return d}if(!u)throw ct("action type argument is required");const m=gi(u);if(m.byteLength>oc)throw ct(`action type string "${u}" (${m.byteLength}b) exceeds byte limit (${oc}). Hint: choose a shorter name.`);const v={sendToPending:!!f.sendToPending,receiveWhilePending:!!f.receiveWhilePending},g=new Uint8Array(oc);g.set(m);let p=0;return s[u]={onComplete:Xt,onProgress:Xt,setOnComplete:M=>{s[u].onComplete=M;const y=a[u];y?.length&&(delete a[u],y.forEach(({payload:x,peerId:R,metadata:b})=>M(x,R,b)))},setOnProgress:M=>{s[u].onProgress=M},send:async(M,y,x,R,b)=>{n(b);const C=typeof M;if(C==="undefined")throw ct("action data cannot be undefined");const E=C!=="string",w=M instanceof Blob,_=w||M instanceof ArrayBuffer||M instanceof V_,I=x!==void 0,k=_?Y_(w?await M.arrayBuffer():M):gi(E?$t(M):M),O=I?gi($t(x)):null,A=Math.ceil(k.byteLength/Pi)+(I?1:0)||1,L=kr(A,(N,z)=>{const F=z===A-1,K=!!(I&&z===0),le=new Uint8Array(Xo+(K?O?.byteLength??0:F?k.byteLength-Pi*(A-(I?2:1)):Pi));return le.set(g),le.set([p>>8,p&gr],ac),le.set([Number(F)|Number(K)<<1|Number(_)<<2|Number(E)<<3],Zu),le.set([Math.round((z+1)/A*gr)],cc),le.set(I?K?O??new Uint8Array:k.subarray((z-1)*Pi,z*Pi):k.subarray(z*Pi,(z+1)*Pi),Xo),le});return p=p+1&X_,await ji(c(y,async(N,z)=>{const{channel:F}=z;let K=0;for(;K<A;){n(b);const le=L[K];if(!le)break;if(F&&F.bufferedAmount>F.bufferedAmountLowThreshold){const Me=await j_(F);if(n(b),!Me)break}const B=i(N,v.sendToPending);if(!B||B!==z)break;z.sendData(le),K++;const J=le[cc]??gr;R?.(J/gr,N,x)}},{includePending:v.sendToPending})),[]},options:v},r[u]={send:s[u].send,onMessage:s[u].setOnComplete,onProgress:s[u].setOnProgress}},handleData:(u,f)=>{const d=new Uint8Array(f),m=zi(d.subarray(W_,ac)).replaceAll("\0",""),v=s[m];if(!t(u,!!v?.options.receiveWhilePending))return;const g=(d[ac]??0)<<8|(d[33]??0),p=d[Zu]??0,M=d[cc]??0,y=d.subarray(Xo),x=!!(p&1),R=!!(p&2),b=!!(p&4),C=!!(p&8);o[u]??={},o[u][m]??={};const E=o[u][m][g]??={chunks:[]};if(R?E.meta=Gi(zi(y)):E.chunks.push(y),v?.onProgress(M/gr,u,E.meta),!x)return;const w=new Uint8Array(E.chunks.reduce((I,k)=>I+k.byteLength,0));E.chunks.reduce((I,k)=>(w.set(k,I),I+k.byteLength),0),delete o[u][m][g];const _=b?w:C?Gi(zi(w)):zi(w);if(v){v.onComplete(_,u,E.meta);return}(a[m]??=[]).push({payload:_,peerId:u,...E.meta===void 0?{}:{metadata:E.meta}})},clearPeer:u=>{delete o[u]}}},K_=500,bs=(i,e)=>{const t=ct(e);return t.kind=i,t.name=i==="aborted"?"AbortError":t.name,t},lc=i=>{if(i?.aborted)throw bs("aborted","operation aborted")},$u=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.r=="string"?{r:i.r,...Object.hasOwn(i,"m")?{m:i.m}:{}}:null,J_=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.r=="string"?{r:i.r,...typeof i.e=="string"?{e:i.e}:{}}:null,Lo=(i,e)=>e===void 0?i:{...i,metadata:e},Q_=({getPeer:i,getPeerIds:e,canReceiveFromPeer:t})=>{const n={},s={},r=Z_({getPeer:i,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:lc}),o=r.makeInternalAction,a=r.handleData,c=d=>{const m=s[d];m&&(ft(m.timer),m.signal&&m.abortHandler&&m.signal.removeEventListener("abort",m.abortHandler),delete s[d])},l=(d,m)=>{Cn(s).forEach(([v,g])=>{g.peerId===d&&(c(v),g.reject(m))})},h=(d,m)=>{r.clearPeer(d),l(d,bs("disconnected",Vs(m,"peer disconnected")))},u=o("@_response");return u.onMessage((d,m,v)=>{const g=J_(v);if(!g)return;const p=s[g.r];if(!(!p||p.peerId!==m)){if(c(g.r),g.e!==void 0){p.reject(bs("rejected",g.e));return}p.resolve(d)}}),{makeAction:(d,m)=>{if(m&&"onRequest"in m&&m.kind!=="request")throw ct('request actions must use kind: "request"');const v=m?.kind??"message",g=o(d),p=n[d];if(p){if(p.kind!==v)throw ct(`action type "${d}" cannot be redefined`);return p.action}const M={kind:v,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:m?.onReceiveProgress??null},y=(A,L)=>A?(N,z)=>A(N,Lo({peerId:z},L)):void 0,x=A=>{M.onReceiveProgress=A},R=(A,L,N)=>{const z=M.kind==="request"?$u(N):null;M.onReceiveProgress?.(A,Lo({peerId:L},z?z.m:N))};if(g.onProgress(R),v==="message"){let A=m?.onMessage??null;const L=()=>{if(!A)return;const z=A;M.pendingMessages.splice(0).forEach(({payload:F,peerId:K,metadata:le})=>{Promise.resolve().then(()=>z(F,Lo({peerId:K},le))).catch(B=>console.error(`${mn} action handler error:`,B))})},N={send:async(z,F={})=>{await g.send(z,F.target,F.metadata,y(F.onProgress,F.metadata),F.signal)},get onMessage(){return A},set onMessage(z){A=z,L()},get onReceiveProgress(){return M.onReceiveProgress},set onReceiveProgress(z){x(z)}};return g.onMessage((z,F,K)=>{if(!A){M.pendingMessages.push(K===void 0?{payload:z,peerId:F}:{payload:z,peerId:F,metadata:K});return}const le=A;Promise.resolve().then(()=>le(z,Lo({peerId:F},K))).catch(B=>console.error(`${mn} action handler error:`,B))}),M.action=N,n[d]=M,L(),N}let b=m?.onRequest??null;const C=A=>{ft(A.timer);const L=M.pendingRequests.indexOf(A);L>-1&&M.pendingRequests.splice(L,1)},E=(A,L,N)=>{u.send(null,A,{r:L,e:Vs(N,"request failed")})},w=(A,L)=>{C(A),Promise.resolve().then(()=>L(A.payload,{peerId:A.peerId,...A.metadata===void 0?{}:{metadata:A.metadata},signal:A.controller.signal})).then(async N=>{if(N===void 0)throw ct("request handler returned undefined");await u.send(N,A.peerId,{r:A.requestId})}).catch(N=>E(A.peerId,A.requestId,N)).finally(()=>A.controller.abort())},_=()=>{b&&M.pendingRequests.slice().forEach(A=>w(A,b))},I=(A,L,N,z)=>{if(b){w({payload:A,peerId:L,...N===void 0?{}:{metadata:N},requestId:z,controller:new AbortController,timer:null},b);return}const F={payload:A,peerId:L,...N===void 0?{}:{metadata:N},requestId:z,controller:new AbortController,timer:setTimeout(()=>{C(F),F.controller.abort(),E(L,z,"request handler unavailable")},K_)};M.pendingRequests.push(F)},k=async(A,L)=>{const{target:N,metadata:z,onProgress:F,signal:K,timeoutMs:le}=L;if(lc(K),!i(N,!1))throw bs("disconnected",`no active peer with id ${N}`);const B=Yi(20),J=new Promise((Me,j)=>{const he={peerId:N,resolve:Me,reject:j,timer:null,...K===void 0?{}:{signal:K}},_e=()=>{c(B),j(bs("aborted","operation aborted"))};K&&(he.abortHandler=_e,K.addEventListener("abort",_e,{once:!0})),s[B]=he}).catch(Me=>{throw Me});try{await g.send(A,N,z===void 0?{r:B}:{r:B,m:z},y(F,z),K);const Me=s[B];return Me&&le!==void 0&&(Me.timer=setTimeout(()=>{c(B),Me.reject(bs("timeout","request timed out"))},le)),await J}catch(Me){throw c(B),Me}},O={request:k,requestMany:async(A,L)=>(lc(L.signal),await ji(L.targets.map(async N=>{try{const z={peerId:N,status:"fulfilled",value:await k(A,{target:N,...L.metadata===void 0?{}:{metadata:L.metadata},...L.timeoutMs===void 0?{}:{timeoutMs:L.timeoutMs},...L.onProgress===void 0?{}:{onProgress:L.onProgress},...L.signal===void 0?{}:{signal:L.signal}})};return L.onResult?.(z),z}catch(z){const F=ui(z,"request failed");if(F.kind==="aborted"||!F.kind)throw F;const K=F.kind==="timeout"?{peerId:N,status:"timeout"}:F.kind==="disconnected"?{peerId:N,status:"disconnected"}:{peerId:N,status:"rejected",error:F};return L.onResult?.(K),K}}))),get onRequest(){return b},set onRequest(A){b=A,_()},get onReceiveProgress(){return M.onReceiveProgress},set onReceiveProgress(A){x(A)}};return g.onMessage((A,L,N)=>{const z=$u(N);z&&I(A,L,z.m,z.r)}),M.action=O,n[d]=M,_(),O},makeInternalAction:o,handleData:a,clearPeer:h}},ed=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.k=="string"?{key:i.k,...typeof i.s=="string"?{streamId:i.s}:{},...typeof i.t=="string"?{trackId:i.t}:{},...Object.hasOwn(i,"m")?{metadata:i.m}:{}}:null,td=i=>e=>{let t=i.get(e);return t||(t=Yi(20),i.set(e,t)),t},Hf=()=>{const i=new WeakMap,e=new WeakMap,t=new Map,n=new Map,s=new Map,r=new Map;return{getStreamKey:td(i),getTrackKey:td(e),rememberRemoteStream:(o,a,c)=>{t.set(o,a),c&&n.set(c,a)},getRemoteStream:(o,a)=>t.get(o)??(a?n.get(a):void 0),rememberRemoteTrack:(o,a,c,l,h)=>{const u={track:a,stream:c};s.set(o,u),l&&r.set(l,u),h&&n.set(h,c)},getRemoteTrack:(o,a)=>s.get(o)??(a?r.get(a):void 0),clearRemote:()=>{t.clear(),n.clear(),s.clear(),r.clear()}}},$_=({iterate:i,isActive:e,getSharedMediaPeer:t})=>{const n={},s={},r=Hf(),o={onPeerStream:null,onPeerTrack:null},a=(h,u,f,d)=>{e(h)&&(t(h)?.__trysteroMedia?.rememberRemoteStream(u,f,typeof f.id=="string"?f.id:void 0),o.onPeerStream?.(f,h,d))},c=(h,u,f,d,m)=>{e(h)&&(t(h)?.__trysteroMedia?.rememberRemoteTrack(u,f,d,typeof f.id=="string"?f.id:void 0,typeof d.id=="string"?d.id:void 0),o.onPeerTrack?.(f,d,h,m))},l=(h,u,f,d,m,v={})=>{const g={k:u,...v,...f===void 0?{}:{m:f}};return i(h,async(p,M)=>{await d(g,p),m(M)})};return{addStream:(h,u,f)=>l(u.target,r.getStreamKey(h),u.metadata,f,d=>d.addStream(h),{s:h.id}),removeStream:(h,u)=>{i(u,(f,d)=>d.removeStream(h))},addTrack:(h,u,f,d)=>l(f.target,r.getTrackKey(h),f.metadata,d,m=>m.addTrack(h,u),{s:u.id,t:h.id}),removeTrack:(h,u)=>{i(u,(f,d)=>d.removeTrack(h))},replaceTrack:(h,u,f,d)=>l(f.target,r.getTrackKey(u),f.metadata,d,m=>m.replaceTrack(h,u),{t:h.id}),receiveStreamMeta:(h,u)=>{if(!e(u))return;const f=ed(h);if(!f)return;const d=t(u)?.__trysteroMedia?.getRemoteStream(f.key,f.streamId);if(d){a(u,f.key,d,f.metadata);return}(n[u]??=[]).push(f)},receiveTrackMeta:(h,u)=>{if(!e(u))return;const f=ed(h);if(!f)return;const d=t(u)?.__trysteroMedia?.getRemoteTrack(f.key,f.trackId);if(d){c(u,f.key,d.track,d.stream,f.metadata);return}(s[u]??=[]).push(f)},receiveRemoteStream:(h,u)=>{if(!e(h))return;const f=n[h]?.shift();f&&a(h,f.key,u,f.metadata)},receiveRemoteTrack:(h,u,f)=>{if(!e(h))return;const d=s[h]?.shift();d&&c(h,d.key,u,f,d.metadata)},clearPeer:h=>{delete n[h],delete s[h]},get onPeerStream(){return o.onPeerStream},set onPeerStream(h){o.onPeerStream=h},get onPeerTrack(){return o.onPeerTrack},set onPeerTrack(h){o.onPeerTrack=h}}},nd="beforeunload",e1=1e4,oi=i=>"@_"+i,Er=new Set,id=()=>Er.forEach(i=>i()),t1=i=>(Er.add(i),Er.size===1&&addEventListener(nd,id),()=>{Er.delete(i),Er.size||removeEventListener(nd,id)});var n1=(i,e,t,{onPeerHandshake:n,onHandshakeError:s,handshakeTimeoutMs:r=e1,isPassive:o=!1}={})=>{const a={},c={},l={},h={onPeerJoin:null,onPeerLeave:null};let u=Xt,f=null;const d=(A,L,{includePending:N=!1}={})=>(A?Array.isArray(A)?A:[A]:Ft(N?a:c)).flatMap(z=>{const F=N?a[z]:c[z];return F?[Promise.resolve(L(z,F))]:(console.warn(`${mn}: no peer with id ${z} found`),[])}),m=$_({iterate:(A,L)=>d(A,(N,z)=>L(N,z)),isActive:A=>!!c[A],getSharedMediaPeer:A=>a[A]??null}),v=Q_({getPeer:(A,L)=>(L?a:c)[A],getPeerIds:A=>Ft(A?a:c),canReceiveFromPeer:(A,L)=>!!f?.canReceiveFromPeer(A,L)}),g=v.makeInternalAction,p=v.handleData,M=v.makeAction,y=(A,L=ct("peer disconnected"))=>{const N=ui(L,"peer disconnected");f?.clearPeer(A,N),delete a[A],delete c[A],v.clearPeer(A,N),l[A]?.splice(0).forEach(z=>z.reject(N)),delete l[A],m.clearPeer(A)},x=(A,L,N)=>{const z=a[A];if(!z||L&&z!==L)return;const F=!!c[A];y(A,N),z.destroy(),F&&h.onPeerLeave?.(A),e(A)},R=async()=>{await I.send(""),await new Promise(A=>setTimeout(A,99)),Cn(a).forEach(([A,L])=>{L.destroy(),y(A,ct("room left"))}),u(),t()},b=g(oi("ping")),C=g(oi("pong")),E=g(oi("signal")),w=g(oi("stream")),_=g(oi("track")),I=g(oi("leave"),{sendToPending:!0,receiveWhilePending:!0}),k=g(oi("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),O=g(oi("hsready"),{sendToPending:!0,receiveWhilePending:!0});return f=O_({...n===void 0?{}:{onPeerHandshake:n},...s===void 0?{}:{onHandshakeError:s},handshakeTimeoutMs:r,sendHandshakeData:k.send,sendHandshakeReady:O.send,onActivate:(A,L)=>{c[A]=L,h.onPeerJoin?.(A)},onFailure:(A,L,N)=>x(A,L,N)}),b.onMessage((A,L)=>C.send("",L)),C.onMessage((A,L)=>{const N=l[L];N?.shift()?.resolve(),N&&!N.length&&delete l[L]}),E.onMessage((A,L)=>{c[L]&&a[L]?.signal(A)}),w.onMessage((A,L)=>m.receiveStreamMeta(A,L)),_.onMessage((A,L)=>m.receiveTrackMeta(A,L)),I.onMessage((A,L)=>x(L,void 0,ct("peer left room"))),k.onMessage((A,L,N)=>f?.receiveHandshakeData(A,L,N)),O.onMessage((A,L)=>f?.receiveHandshakeReady(L)),i((A,L)=>{const N=a[L];if(N){if(N===A)return;N.destroy(),y(L,ct("peer replaced"))}a[L]=A,f?.addPeer(L,A),A.setHandlers({data:z=>p(L,z),stream:z=>m.receiveRemoteStream(L,z),track:(z,F)=>m.receiveRemoteTrack(L,z,F),signal:z=>{c[L]&&E.send(z,L)},close:()=>x(L,A,ct("peer disconnected")),error:z=>{console.error(`${mn} peer error:`,z),x(L,A,z)}}),f?.start(L,A)}),Df&&(u=t1(()=>R().catch(Xt))),{makeAction:M,leave:R,ping:async A=>{if(!c[A])throw ct(`no active peer with id ${A}`);const L=Date.now();return await new Promise((N,z)=>{const F=l[A]??=[],K=()=>{const B=l[A];if(!B)return;const J=B.indexOf(le);J>-1&&B.splice(J,1),B.length||delete l[A]},le={resolve:()=>{K(),N()},reject:B=>{K(),z(B)}};F.push(le),b.send("",A).catch(B=>le.reject(ui(B,"peer disconnected")))}),Date.now()-L},isPassive:()=>o,getPeers:()=>If(Cn(c).map(([A,L])=>[A,L.connection])),addStream:(A,L={})=>m.addStream(A,L,w.send),removeStream:(A,L={})=>{m.removeStream(A,L.target)},addTrack:(A,L,N={})=>m.addTrack(A,L,N,_.send),removeTrack:(A,L={})=>{m.removeTrack(A,L.target)},replaceTrack:(A,L,N={})=>m.replaceTrack(A,L,N,_.send),get onPeerJoin(){return h.onPeerJoin},set onPeerJoin(A){h.onPeerJoin=A,A&&Ft(c).forEach(L=>A(L))},get onPeerLeave(){return h.onPeerLeave},set onPeerLeave(A){h.onPeerLeave=A},get onPeerStream(){return m.onPeerStream},set onPeerStream(A){m.onPeerStream=A},get onPeerTrack(){return m.onPeerTrack},set onPeerTrack(A){m.onPeerTrack=A}}};const Gf=1,Vf=2,sd=(i,e)=>{const t=gi(i),n=new Uint8Array(3+t.byteLength+e.byteLength);return n[0]=Gf,n[1]=t.byteLength>>>8&255,n[2]=t.byteLength&255,n.set(t,3),n.set(e,3+t.byteLength),n},i1=(i,e)=>{const t=gi(i),n=new Uint8Array(4+t.byteLength);return n[0]=Vf,n[1]=Number(e),n[2]=t.byteLength>>>8&255,n[3]=t.byteLength&255,n.set(t,4),n},s1=i=>{const e=new Uint8Array(i);if(e.byteLength<3)return null;if(e[0]===Gf){const s=(e[1]??0)<<8|(e[2]??0),r=3+s;return s<=0||e.byteLength<r?null:{type:"room",roomToken:zi(e.subarray(3,r)),payload:e.subarray(r).slice().buffer}}if(e[0]!==Vf||e.byteLength<4)return null;const t=(e[2]??0)<<8|(e[3]??0),n=4+t;return t<=0||e.byteLength<n?null:{type:"presence",roomToken:zi(e.subarray(4,n)),isPresent:e[1]===1}},Wf=i=>{const{connection:e,channel:t}=i;return i.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||t?.readyState==="closing"||t?.readyState==="closed"},r1=i=>{if(Wf(i))return"stale";const{channel:e}=i;return!e||e.readyState!=="open"?"transient":"live"};var o1=class{byApp={};roomPresenceHandlers={};getMap(i){return this.byApp[i]??={}}get(i,e){return this.byApp[i]?.[e]}isPeerStale(i){return Wf(i)}getHealth(i){return this.isPeerStale(i)?"stale":"live"}setRoomPresenceHandler(i,e){return this.roomPresenceHandlers[i]=e,()=>{this.roomPresenceHandlers[i]===e&&delete this.roomPresenceHandlers[i]}}sendRoomPresence(i,e,t){i.isClosing||i.peer.isDead||i.peer.sendData(i1(e,t))}clear(i,e,{destroyPeer:t}){const n=this.byApp[i],s=n?.[e];if(!s||s.isClosing)return;s.idleTimer=ft(s.idleTimer),s.isClosing=!0,t&&!s.peer.isDead&&s.peer.destroy();const r=Us(s.bindings);s.bindings={},s.bindingsByToken={},s.controlRoomId=null,delete n[e],r.forEach(o=>{o.handlers.close?.(),o.pendingData.length=0,o.pendingSendData.length=0,o.pendingTracks.length=0}),s.media.clearRemote(),s.pendingDataByToken.clear(),s.remoteRoomTokens.clear(),Ft(n).length===0&&delete this.byApp[i]}register(i,e,t,n){const s=this.getMap(i),r=s[e];if(r){if(r.idleTimer=ft(r.idleTimer),r.peer===t)return r;this.clear(i,e,{destroyPeer:!0})}const o={appId:i,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:Hf(),idleMs:n,isClosing:!1};return t.setHandlers({data:a=>this.dispatchData(o,a),signal:a=>this.dispatchSignal(o,a),close:()=>this.clear(i,e,{destroyPeer:!1}),error:a=>{console.error(`${mn} peer error:`,a),this.clear(i,e,{destroyPeer:!1})},track:(a,c)=>this.dispatchTrack(o,a,c)}),s[e]=o,o}bind(i,e,t,{onDetach:n}){const s=t.bindings[i];if(s)return t.idleTimer=ft(t.idleTimer),{proxy:s.proxy,isNew:!1};const r={roomId:i,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:Xt,proxy:{}},o=()=>{t.bindings[i]&&(this.pruneRoomOwnership(t,i),delete t.bindings[i],r.roomToken&&t.bindingsByToken[r.roomToken]===r&&delete t.bindingsByToken[r.roomToken],t.controlRoomId===i&&(t.controlRoomId=Ft(t.bindings)[0]??null),n(),this.scheduleIdleTimer(t))},a={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:c=>t.peer.getOffer(c),signal:c=>t.peer.signal(c),sendData:c=>{if(!r.roomToken){r.pendingSendData.push(c);return}t.peer.sendData(sd(r.roomToken,c))},destroy:()=>o(),setHandlers:c=>{const{signal:l,...h}=c;Object.assign(r.handlers,h),l&&(r.handlers.signal=l),this.flushBindingQueues(r)},offerPromise:t.peer.offerPromise,addStream:c=>{const l=t.streamOwners.get(c)??new Set,h=l.size===0;l.add(i),t.streamOwners.set(c,l),h&&t.peer.addStream(c)},removeStream:c=>{const l=t.streamOwners.get(c);l&&(l.delete(i),l.size===0&&(t.streamOwners.delete(c),t.peer.removeStream(c)))},addTrack:(c,l)=>{const h=t.trackOwners.get(c)??{stream:l,rooms:new Set},u=h.rooms.size===0;return h.stream=l,h.rooms.add(i),t.trackOwners.set(c,h),u?t.peer.addTrack(c,l):t.peer.connection.getSenders().find(f=>f.track===c)??t.peer.addTrack(c,l)},removeTrack:c=>{const l=t.trackOwners.get(c);l&&(l.rooms.delete(i),l.rooms.size===0&&(t.trackOwners.delete(c),t.peer.removeTrack(c)))},replaceTrack:(c,l)=>{const h=t.trackOwners.get(c);if(h){t.trackOwners.delete(c);const u=t.trackOwners.get(l)??{stream:h.stream,rooms:new Set};h.rooms.forEach(f=>u.rooms.add(f)),t.trackOwners.set(l,u)}return t.peer.replaceTrack(c,l)},__trysteroMedia:t.media};return r.proxy=a,r.detach=o,t.bindings[i]=r,t.controlRoomId??=i,t.idleTimer=ft(t.idleTimer),e.then(c=>{if(t.isClosing||t.bindings[i]!==r)return;r.roomToken=c,t.bindingsByToken[c]=r;const l=t.pendingDataByToken.get(c);l?.length&&(r.pendingData.push(...l),t.pendingDataByToken.delete(c)),r.pendingSendData.splice(0).forEach(h=>t.peer.sendData(sd(c,h))),this.flushBindingQueues(r)}),{proxy:a,isNew:!0}}pruneRoomOwnership(i,e){i.streamOwners.forEach((t,n)=>{t.delete(e),t.size===0&&(i.streamOwners.delete(n),i.peer.removeStream(n))}),i.trackOwners.forEach((t,n)=>{t.rooms.delete(e),t.rooms.size===0&&(i.trackOwners.delete(n),i.peer.removeTrack(n))})}scheduleIdleTimer(i){i.isClosing||Ft(i.bindings).length>0||(i.idleTimer=ft(i.idleTimer),i.idleTimer=setTimeout(()=>{const e=this.byApp[i.appId]?.[i.peerId];!e||Ft(e.bindings).length>0||this.clear(i.appId,i.peerId,{destroyPeer:!0})},i.idleMs))}getSignalBinding(i){if(i.controlRoomId){const t=i.bindings[i.controlRoomId];if(t?.handlers.signal)return t}const e=Us(i.bindings).find(t=>!!t.handlers.signal);return e?(i.controlRoomId=e.roomId,e):null}flushBindingQueues(i){const{handlers:e}=i;e.data&&i.pendingData.length>0&&i.pendingData.splice(0).forEach(t=>e.data?.(t)),(e.track||e.stream)&&i.pendingTracks.length&&i.pendingTracks.splice(0).forEach(({track:t,stream:n})=>{e.track?.(t,n),e.stream?.(n)})}dispatchData(i,e){const t=s1(e);if(!t)return;if(t.type==="presence"){t.isPresent?i.remoteRoomTokens.add(t.roomToken):i.remoteRoomTokens.delete(t.roomToken),this.roomPresenceHandlers[i.appId]?.(i.peerId,t.roomToken,t.isPresent);return}const n=i.bindingsByToken[t.roomToken];if(!n){const s=i.pendingDataByToken.get(t.roomToken)??[];s.push(t.payload),i.pendingDataByToken.set(t.roomToken,s);return}n.handlers.data?n.handlers.data(t.payload):n.pendingData.push(t.payload)}dispatchSignal(i,e){this.getSignalBinding(i)?.handlers.signal?.(e)}dispatchTrack(i,e,t){Us(i.bindings).forEach(n=>{if(n.handlers.track||n.handlers.stream){n.handlers.track?.(e,t),n.handlers.stream?.(t);return}n.pendingTracks.push({track:e,stream:t})})}};const a1=23333,c1=12,l1=7533,h1=23333,_l="__legacy__",ta="offer-placeholder",u1=["offer","answer","candidate"],d1=i=>{if(typeof i=="string")try{const e=Gi(i);return e&&typeof e=="object"?e:null}catch{return null}return i&&typeof i=="object"?i:null},vr=(i,e)=>typeof i[e]=="string"&&i[e]?i[e]:void 0,f1=i=>u1.some(e=>e in i&&(typeof i[e]!="string"||i[e]==="")),Xf=(i,e,t,n,s,r)=>{i.toCipher(e).then(o=>{i.isLeaving()||!r()||n(t,$t(s(o.sdp)))})},p1=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),m1=i=>[...i.turnConfig??[],...i.rtcConfig?.iceServers??[]].some(({urls:e})=>(Array.isArray(e)?e:[e]).some(t=>/^turns?:/i.test(t))),g1=(i,e)=>`could not connect to peer ${i} after exchanging SDP; ${m1(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,ga=(i,e,t)=>{i.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,i.onJoinError?.({error:g1(t,i.config),appId:i.appId,peerId:t,roomId:i.roomId}))},Vr=(i,e)=>i[e]??=p1(),fn=i=>{i.connectedPeer?i.status="connected":i.answeringPeer?i.status="answering":i.offerPeer||i.offerRelays.some(Boolean)?i.status="offering":i.status="idle"},qo=(i,e)=>{i.answeringPeer===e&&(i.answeringExpiryTimer=ft(i.answeringExpiryTimer),i.answeringPeer=null,i.answerSent=!1,fn(i))},wl=(i,e,t)=>{i.connectedPeer&&(i.connectedPeer.isDead||i.connectedPeer.destroy(),i.connectedPeer=null,i.connectedPeerUnhealthySinceMs=null,fn(i))},lh=(i,e)=>{i.offerRelayTimers[e]=ft(i.offerRelayTimers[e]),i.offerRelays[e]&&(i.offerRelays[e]=void 0,fn(i))},rd=(i,e)=>{i?.offerRelays[e]===ta&&lh(i,e)},v1=i=>{if(i.isDead||i.connection.connectionState==="closed")return!0;try{return!!i.connection.remoteDescription}catch{return!0}},Wr=(i,e)=>{const t=i.offerAnswered;i.offerExpiryTimer=ft(i.offerExpiryTimer),i.offerInitPromise=null,i.offerRelays.forEach((n,s)=>lh(i,s)),i.offerRelays=[],i.offerSignalRelays=[],i.offerRelayTimers=[],i.offerSignalBacklog=[],i.offerPeer&&i.offerPeer!==i.connectedPeer&&(t||v1(i.offerPeer)?i.offerPeer.isDead||i.offerPeer.destroy():e.recycle(i.offerPeer)),i.offerPeer=null,i.offerId=null,i.offerSdp=null,i.offerAnswered=!1,i.connectionErrorReported=!1,fn(i)},x1=(i,e,t,n)=>{ft(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{const s=i.peerStates[t];!s||s.connectedPeer||s.answeringPeer!==n||(s.answerSent&&ga(i,s,t),n.destroy(),qo(s,n),i.checkDeactivate())},h1)},y1=async(i,e,t)=>{const n=t?[t,_l]:[_l];for(const s of n){const r=i.pendingCandidates[s];if(r?.length){delete i.pendingCandidates[s];for(const o of r)await e.signal(o)}}},qf=(i,e,t,n=ch)=>{ft(e.offerExpiryTimer);const s=e.offerId;e.offerExpiryTimer=setTimeout(()=>{const r=i.peerStates[t];!r||r.connectedPeer||r.offerId!==s||(r.offerAnswered&&ga(i,r,t),Wr(r,i.offerPool),i.checkDeactivate())},n)},M1=(i,e,t,n)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{const s=(await i.offerPool.checkout(1,!1,i.encryptOffer))[0];if(!s)throw ct("failed to allocate offer peer");const{peer:r,offer:o}=s;e.offerPeer=r,e.offerId=Yi(c1),e.offerSdp=o,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],fn(e);const a=()=>{e.offerPeer===r&&!e.connectedPeer&&(e.offerAnswered&&ga(i,e,t),Wr(e,i.offerPool)),i.disconnectPeer(r,t),i.checkDeactivate()};return r.setHandlers({connect:()=>i.connectPeer(r,t,n),signal:c=>{e.offerPeer===r&&(e.offerSignalBacklog.push(c),e.offerSignalRelays.forEach(l=>l?.(c)))},close:a,error:a}),qf(i,e,t),{peer:r,offer:o,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),_1=async(i,e,t,n,s)=>{if(n){i.attachSharedPeerToRoom(t,n);return}const r=i.peerStates[t];if(!r||r.connectedPeer||r.answeringPeer||r.offerAnswered){rd(r,e);return}if(r.offerRelays[e]!==ta)return;const[o,a]=await ji([Ws(Gr(i.rootTopicPlaintext,t)),M1(i,r,t,e)]);if(i.isLeaving())return;if(r.connectedPeer||r.answeringPeer||r.offerAnswered||r.offerRelays[e]!==ta){rd(r,e);return}r.offerRelayTimers[e]=ft(r.offerRelayTimers[e]),r.offerRelays[e]=!0,fn(r),r.offerRelayTimers[e]=setTimeout(()=>T1(i,t,e),(i.announceIntervals[e]??i.announceIntervalMs)*.9);let c=!1;r.offerSignalRelays[e]=l=>{c&&(i.isLeaving()||r.connectedPeer||r.offerPeer!==a.peer||r.offerId!==a.offerId||l.type!=="candidate"||Xf(i,l,o,s,h=>({peerId:on,offerId:a.offerId,candidate:h,...i.isPassive?{passive:!0}:{}}),()=>!r.connectedPeer&&r.offerPeer===a.peer&&r.offerId===a.offerId))},s(o,$t({peerId:on,offerId:a.offerId,offer:a.offer,...i.isPassive?{passive:!0}:{}})),c=!0,r.offerSignalBacklog.forEach(l=>r.offerSignalRelays[e]?.(l))},w1=async(i,e,t,n,s,r,o)=>{const a=Vr(i.peerStates,t);if(a.answeringPeer||a.offerAnswered)return;const c=!!(a.offerPeer||a.offerRelays.some(Boolean));if((c||r)&&on<t)return;c&&Wr(a,i.offerPool);const l=i.initPeer(!1,i.config);a.answeringPeer=l,a.answerSent=!1,a.connectionErrorReported=!1,x1(i,a,t,l),fn(a);const h=()=>{a.answeringPeer===l&&!a.connectedPeer&&a.answerSent&&ga(i,a,t),qo(a,l),i.disconnectPeer(l,t),i.checkDeactivate()};l.setHandlers({connect:()=>i.connectPeer(l,t,e),close:h,error:h});let u;try{u=await i.toPlain({type:"offer",sdp:n})}catch{qo(a,l),i.onJoinError?.({error:"incorrect room password when decrypting offer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(l.isDead){qo(a,l);return}const f=await Ws(Gr(i.rootTopicPlaintext,t));i.isLeaving()||(l.setHandlers({signal:d=>{i.isLeaving()||a.answeringPeer!==l||l.isDead||d.type!=="answer"&&d.type!=="candidate"||Xf(i,d,f,o,m=>{const v={peerId:on};return d.type==="answer"?(a.answerSent=!0,v.answer=m):v.candidate=m,s&&(v.offerId=s),i.isPassive&&(v.passive=!0),v},()=>a.answeringPeer===l&&!l.isDead)}}),await l.signal(u),await y1(a,l,s))},S1=async(i,e,t,n,s)=>{let r;try{r=await i.toPlain({type:Uf,sdp:t})}catch{return}const o=Vr(i.peerStates,e),a=n&&o?.offerPeer&&o.offerId===n?o.offerPeer:null,c=o?.answeringPeer??null,l=!n&&o?.offerPeer?o.offerPeer:null,h=s&&!s.isDead?s:a??c??l;if(!h||h.isDead){const u=n??_l;(o.pendingCandidates[u]??=[]).push(r);return}h.signal(r)},b1=async(i,e,t,n,s,r)=>{let o;try{o=await i.toPlain({type:"answer",sdp:n})}catch{i.onJoinError?.({error:"incorrect room password when decrypting answer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(r)i.offerPool.claimLeased(r),r.setHandlers({connect:()=>i.connectPeer(r,t,e),close:()=>i.disconnectPeer(r,t)}),r.signal(o);else{const a=i.peerStates[t];if(!a||!a.offerPeer||a.offerAnswered||s&&a.offerId&&s!==a.offerId||a.offerPeer.isDead)return;a.offerAnswered=!0,qf(i,a,t,a1),a.offerPeer.signal(o)}},T1=(i,e,t)=>{const n=i.peerStates[e];!n||n.connectedPeer||n.offerRelays[t]&&(lh(n,t),i.checkDeactivate())},E1=i=>e=>async(t,n,s)=>{if(i.isLeaving())return;const r=d1(n);if(!r||f1(r))return;const o=vr(r,"peerId")??"",a=vr(r,"offer"),c=vr(r,"answer"),l=vr(r,"candidate"),h=vr(r,"offerId"),u=r.peer,f=r.hasOutgoingOffer===!0,d=r.passive===!0;if(!o||o===on)return;const[m,v]=await ji([i.rootTopicP,i.selfTopicP]);if(i.isLeaving()||t!==m&&t!==v||i.isPassive&&d||(i.isPassive&&!i.isActive&&!c&&!l&&(i.isActive=!0,i.requeueAnnounce?.()),i.isPassive&&!i.isActive))return;const g=i.peerStates[o],p=g?.connectedPeer;if(p&&g){const x=r1(p);if(x==="live"){g.connectedPeerUnhealthySinceMs=null;return}if(x==="stale")wl(g);else{const R=Date.now(),b=g.connectedPeerUnhealthySinceMs??R;if(g.connectedPeerUnhealthySinceMs=b,R-b<l1)return;wl(g)}}let M=i.sharedPeers.get(i.appId,o);M&&i.sharedPeers.getHealth(M.peer)==="stale"&&(i.sharedPeers.clear(i.appId,o,{destroyPeer:!0}),M=void 0);const y=!!(o&&!a&&!c&&!l);if(y&&!M){const x=Vr(i.peerStates,o),R=on<o;if(x.answeringPeer||x.connectedPeer||x.offerAnswered)return;if(!R&&!x.offerPeer){const b=await Ws(Gr(i.rootTopicPlaintext,o));!i.isLeaving()&&!x.connectedPeer&&s(b,$t({peerId:on}));return}if(x.offerRelays[e])return;x.offerRelays[e]=ta,fn(x)}if(M&&(a||c||l)){if(M.bindings[i.roomId])return;i.attachSharedPeerToRoom(o,M);return}if(y)return _1(i,e,o,M,s);if(a)return w1(i,e,o,a,h,f,s);if(l)return S1(i,o,l,h,u);if(c)return b1(i,e,o,c,h,u)},hc=5333,A1=[233,533,1333],R1=7533,P1=123333;var Yf=({init:i,subscribe:e,announce:t,deactivate:n})=>{const s={},r={},o={},a={},c=new o1,l=()=>Us(s).some(R=>Ft(R).length>0),h=R=>r[R]??={},u=R=>o[R]??={},f=(R,b,C)=>{c.getHealth(R.peer)==="live"&&c.sendRoomPresence(R,b,C)},d=(R,b)=>{Cn(r[R]??{}).forEach(([C,E])=>{if(!E.shouldAdvertise())return;const{roomToken:w,roomTokenPromise:_}=E;if(w){f(b,w,!0);return}_.then(I=>{r[R]?.[C]===E&&E.roomToken===I&&(c.get(R,b.peerId)!==b||b.isClosing||E.shouldAdvertise()&&f(b,I,!0))})})},m=(R,b,C)=>Us(c.getMap(R)).forEach(E=>f(E,b,C)),v=R=>{a[R]||(a[R]=c.setRoomPresenceHandler(R,(b,C,E)=>{if(!E)return;const w=c.get(R,b),_=o[R]?.[C];!w||!_||r[R]?.[_]?.attachSharedPeerToRoom(b,w)}))},g=R=>{s[R]&&Ft(s[R]).length>0||(a[R]?.(),delete a[R],delete r[R],delete o[R])};let p=!1,M=[],y=null,x=Xt;return(R,b,C)=>{if(!R)throw ct("requires a config map as the first argument");if(C&&typeof C!="object")throw ct("third argument must be a callbacks object");const{appId:E}=R,w=C?.onJoinError,_=C?.onPeerHandshake,I=C?.handshakeTimeoutMs;if(!E)throw ct("config map is missing appId field");if(!b)throw ct("roomId argument required");if(I!==void 0&&(!Number.isFinite(I)||I<=0))throw ct("handshakeTimeoutMs must be a positive number");if(s[E]?.[b])return s[E][b];v(E);const k=Gr(mn,E,b),O=Ws(k),A=Ws(Gr(k,on)),L=A_(R.password??"",E,b),N=R_(E,b),z=R._test_only_sharedPeerIdleMs??P1;let F=!1;const K=re=>async ne=>({type:ne.type,sdp:await re(L,ne.sdp)}),le=K(C_),B=K(P_),J=c.getMap(E),Me=()=>ju(!0,R);y||=new I_(Me);const j=y,he=async re=>{const ne=await re.getOffer(Date.now()-re.created>ch);if(!ne||ne.type!=="offer")throw ct("failed to get offer for peer");return(await B(ne)).sdp},_e=(re,ne)=>{const se=Vr(U.peerStates,re);se.answeringExpiryTimer=ft(se.answeringExpiryTimer),se.answeringPeer=null;const{proxy:He,isNew:Q}=c.bind(b,N,ne,{onDetach:()=>{const ge=U.peerStates[re];ge?.connectedPeer===ne.peer&&(ge.connectedPeer=null,ge.connectedPeerUnhealthySinceMs=null,fn(ge))}});se.connectedPeer=ne.peer,se.connectedPeerUnhealthySinceMs=null,fn(se),Q&&P(He,re),Wr(se,j)},de=(re,ne,se)=>{if(F){re.destroy();return}const He=Vr(U.peerStates,ne);if(He.connectedPeer){const ze=J[ne];if(ze&&He.connectedPeer===ze.peer&&ze.bindings[b])return;He.connectedPeer!==re&&!re.isDead&&re.destroy();return}let Q=J[ne];if(Q&&c.getHealth(Q.peer)==="stale"&&(c.clear(E,ne,{destroyPeer:!0}),Q=void 0),Q&&Q.peer!==re){re.isDead||re.destroy(),_e(ne,Q);return}const ge=!Q;Q||=c.register(E,ne,re,z),_e(ne,Q),ge&&d(E,Q)},Fe=(re,ne)=>{if(F)return;const se=U.peerStates[ne];se?.connectedPeer===re&&(wl(se),ie())},Le=!!R.passive;let Ie=null,We,X=Xt;const ie=()=>{if(!Le||!U.isActive)return;let re=!1;Cn(U.peerStates).forEach(([ne,se])=>{se.connectedPeer||se.answeringPeer||se.offerInitPromise||se.offerPeer||se.offerRelays.some(Boolean)?re=!0:se.status==="idle"&&delete U.peerStates[ne]}),re||(U.isActive=!1,We=ft(We),ke.forEach(ft),ke.length=0,X(),Ie?.roomToken&&m(E,Ie.roomToken,!1))},U={appId:E,roomId:b,config:R,peerStates:{},rootTopicPlaintext:k,rootTopicP:O,selfTopicP:A,toPlain:le,toCipher:B,isLeaving:()=>F,isPassive:Le,isActive:!Le,onJoinError:w,sharedPeers:c,offerPool:j,encryptOffer:he,initPeer:ju,connectPeer:de,disconnectPeer:Fe,attachSharedPeerToRoom:_e,checkDeactivate:ie,announceIntervals:[],announceIntervalMs:hc},Ee={config:R,appId:E,roomId:b,isPassive:Le},ue=E1(U);if(!p){const re=i(R);M=(Array.isArray(re)?re:[re]).map(ne=>Promise.resolve(ne)),p=!0,x=R.relayConfig?.manualReconnection?Xt:S_()}!Le&&!j.isActive&&j.warmup(),U.announceIntervals=M.map(()=>hc);const Se=M.map(()=>0),pe=M.map(()=>0),ke=[],Ae=M.map(async(re,ne)=>e(await re,await O,await A,ue(ne),se=>j.getOffers(se,he),Ee));ji([O,A]).then(([re,ne])=>{if(F)return;const se=async(He,Q)=>{if(F||Le&&!U.isActive)return;const ge=Le?{passive:!0}:void 0;let ze;try{ze=await t(He,re,ne,ge,Ee),pe[Q]=0}catch(qe){const lt=pe[Q]??0;lt===0&&R.relayConfig?.warnOnRelayFailure!==!1&&console.warn(`${mn}: announce failed - ${Vs(qe,"")}`),pe[Q]=lt+1}if(F||Le&&!U.isActive)return;typeof ze=="number"&&(U.announceIntervals[Q]=ze);const Ge=Se[Q]??0;Se[Q]=Ge+1;const Pe=U.announceIntervals[Q]??hc,Je=A1[Ge];ke[Q]=setTimeout(()=>{se(He,Q)},typeof Je=="number"?Math.min(Pe,Je):Pe)};X=()=>{n&&M.forEach(async He=>{const Q=await He;F||n(Q,re,ne,Ee)})},U.requeueAnnounce=()=>{ke.forEach(ft),ke.length=0,We=ft(We),j.isActive||j.warmup(),Ie?.roomToken&&m(E,Ie.roomToken,!0),We=setTimeout(ie,R1),M.forEach(async(He,Q)=>{const ge=await He;ge&&!F&&(Se[Q]=0,se(ge,Q))})},Ae.forEach(async(He,Q)=>{if(await He,F)return;const ge=await M[Q];ge&&!F&&(!Le||U.isActive)&&se(ge,Q)})});let P=Xt;const{compose:S}=U_(R.password??"",E,b),W=S(_),$={...W?{onPeerHandshake:W}:{},...I===void 0?{}:{handshakeTimeoutMs:I},isPassive:Le,onHandshakeError:(re,ne)=>w?.({error:ne.replace(/^handshake failed: /,""),appId:E,peerId:re,roomId:b})};s[E]??={};const ae=h(E),te=n1(re=>P=re,re=>{if(F)return;const ne=U.peerStates[re];ne?.connectedPeer&&(ne.connectedPeer=null,fn(ne),ie())},()=>{F=!0,P=Xt;const re=r[E]?.[b];re?.roomToken&&(m(E,re.roomToken,!1),delete o[E]?.[re.roomToken],o[E]&&!Ft(o[E]).length&&delete o[E]),r[E]&&(delete r[E][b],Ft(r[E]).length||delete r[E]),Cn(U.peerStates).forEach(([ne,se])=>{if(se.answeringExpiryTimer=ft(se.answeringExpiryTimer),se.connectedPeer&&!se.connectedPeer.isDead){const He=J[ne];(!He||He.peer!==se.connectedPeer)&&se.connectedPeer.destroy()}se.answeringPeer&&!se.answeringPeer.isDead&&se.answeringPeer.destroy(),Wr(se,j),se.connectedPeer=null,se.answeringPeer=null,fn(se)}),s[E]&&(delete s[E][b],Ft(s[E]).length===0&&delete s[E]),ke.forEach(ft),We=ft(We),Ae.forEach(async ne=>{(await ne)()}),!l()&&(p=!1,j.destroy(),y=null,x(),g(E))},$);return Ie={roomToken:null,roomTokenPromise:N,attachSharedPeerToRoom:_e,shouldAdvertise:()=>!Le||U.isActive},ae[b]=Ie,N.then(re=>{const ne=Ie;!ne||F||r[E]?.[b]!==ne||(ne.roomToken=re,u(E)[re]=b,Us(J).forEach(se=>{se.remoteRoomTokens.has(re)&&_e(se.peerId,se)}),(!Le||U.isActive)&&m(E,re,!0))}),s[E][b]=te}};const C1=["offer","answer","candidate"],L1=i=>{if(typeof i=="string")try{const e=Gi(i);return e&&typeof e=="object"?e:null}catch{return null}return i},uc=(i,e)=>typeof i[e]=="string"&&i[e]?i[e]:void 0,D1=i=>C1.some(e=>e in i&&(typeof i[e]!="string"||i[e]==="")),I1=i=>{const e=L1(i);if(!e||D1(e))return!1;const t=uc(e,"peerId");return!!(t&&t!==on&&e.passive!==!0&&!uc(e,"answer")&&!uc(e,"candidate"))},dc=i=>{if(!i)throw ct("topic strategy missing room context");return i},od=(i,e,t,n)=>({kind:e,appId:i.appId,roomId:i.roomId,rootTopic:t,selfTopic:n}),fc=(i,e,t,n)=>({kind:e,appId:i.appId,roomId:i.roomId,rootTopic:t,selfTopic:n});var U1=({init:i,subscribeTopic:e,publishTopic:t,unpublishTopic:n})=>Yf({init:i,subscribe:async(s,r,o,a,c,l)=>{const h=dc(l),u=(y,x)=>t(s,y,x,fc(h,"signal",r,o));let f=null,d=!1,m=null,v=!1;const g=y=>{d||(d=!0,y())},p=()=>(m||(m=Promise.resolve(e(s,o,(y,x)=>{v||a(y,x,u)},od(h,"self",r,o))).then(y=>{f=y,v&&g(y)})),m);h.isPassive||await p();const M=await e(s,r,async(y,x)=>{v||(h.isPassive&&I1(x)&&await p(),v||await a(y,x,u))},od(h,"root",r,o));return()=>{v=!0,f&&g(f),M()}},announce:(s,r,o,a,c)=>{const l=dc(c);return t(s,r,$t({peerId:on,...a}),fc(l,"announce",r,o))},...n?{deactivate:(s,r,o,a)=>n(s,r,fc(dc(a),"announce",r,o))}:{}});const tr=zf(i=>i.socket),pc={},jf={},Do=tr.scoped(),xr=tr.scoped(),N1=tr.scoped(),vs={},Io={},ad=tr.scoped(),mc=tr.scoped(),va={},Ts={},Tn={},O1="announce",Zf=20,Sl=3,cd=1e4,ld=12e4,F1=2e4,z1=12e4,hd=4e3,B1=3,k1=async i=>{if(pc[i])return pc[i];const e=(await Ws(i)).slice(0,Zf);return pc[i]=e,jf[e]=i,e},gc=async(i,e,t)=>i.send($t({action:O1,info_hash:await k1(e),peer_id:on,...t})),ud=(i,e,t=!1)=>console.warn(`${mn}: torrent tracker ${t?"failure":"warning"} from ${i} - ${e}`),Xr=i=>va[i]??={},hh=i=>{delete va[i],delete Ts[i]},H1=(i,e)=>{const t=va[i],n=t?.[e];if(n)return delete t[e],n.claim?.(),!Ft(t).length&&!Tn[i]&&hh(i),n},Kf=(i,e)=>{const t=va[i],n=t?.[e];n&&(delete t[e],n.reclaim?.(),!Ft(t).length&&!Tn[i]&&hh(i))},vc=i=>{Ft(Xr(i)).forEach(e=>Kf(i,e)),hh(i)},G1=i=>{const e=Date.now();Cn(Xr(i)).forEach(([t,n])=>{e-n.createdAt>z1&&Kf(i,t)})},V1=async(i,e)=>{for(;Ts[i];)await Ts[i];const t=(async()=>{G1(i);const n=Xr(i),s=Ft(n).length,r=Math.max(0,Sl-s);r>0&&(await e(r)).forEach(o=>{n[Yi(Zf)]={...o,createdAt:Date.now()}})})().finally(()=>{Ts[i]===t&&delete Ts[i]});return Ts[i]=t,await t,Xr(i)},W1=Yf({init:i=>Nf(i,q1,B1).map(e=>{const t=tr.register(e,()=>Ff(e,n=>{const s=Gi(n),r=s["failure reason"],o=s["warning message"],{interval:a}=s,c=s.info_hash?jf[s.info_hash]:void 0;if(r){i.relayConfig?.warnOnRelayFailure!==!1&&ud(t.url,r,!0);return}if(o&&i.relayConfig?.warnOnRelayFailure!==!1&&ud(t.url,o),a&&a*1e3>(vs[t.url]??cd)&&c&&xr.forKey(e)[c]){const l=Math.min(a*1e3,F1),h=Do.forKey(e),u=xr.forKey(e);h[c]&&clearInterval(h[c]),vs[t.url]=l;const f=u[c];f&&(h[c]=setInterval(()=>{f()},l))}if((s.offer||s.answer)&&c&&s.offer_id){if(s.peer_id===on)return;const l=`${c}:${s.offer?"offer":"answer"}:${s.offer_id}:${s.peer_id??""}`,h=Date.now(),u=Io[l];if(typeof u=="number"&&h-u<hd)return;Io[l]=h,Cn(Io).forEach(([f,d])=>{h-d>hd*6&&delete Io[f]}),ad.forKey(e)[c]?.(s)}}));return t.ready}),subscribe:(i,e,t,n,s,r)=>{const o=ad.forRelay(i),a=xr.forRelay(i),c=Do.forRelay(i),l=N1.forRelay(i),h=mc.forRelay(i),u=Symbol(e);l[e]=u,Tn[e]=(Tn[e]??0)+1;const f=g=>{if(g.offer&&g.peer_id&&g.offer_id)n(e,{offer:g.offer.sdp,peerId:g.peer_id,hasOutgoingOffer:Ft(Xr(e)).length>0},(p,M)=>void gc(i,e,{answer:{type:"answer",sdp:Gi(M).answer},offer_id:g.offer_id,to_peer_id:g.peer_id}));else if(g.answer&&g.offer_id&&g.peer_id){const p=H1(e,g.offer_id);p&&n(e,{answer:g.answer.sdp,peerId:g.peer_id,peer:p.peer},()=>{})}};o[e]=f;const d={announce:async()=>{if(l[e]===u){if(!d.isActive){gc(i,e,{left:0,numwant:Sl,offers:[]});return}gc(i,e,{numwant:Sl,offers:Cn(await V1(e,s)).map(([g,{offer:p}])=>({offer_id:g,offer:{type:"offer",sdp:p}}))})}},isActive:!r?.isPassive};vs[i.url]=cd;const{announce:m}=d;a[e]=m,h[e]=d;const v=d.isActive?vs[i.url]:ld;return c[e]=setInterval(m,v),m(),()=>{if(Tn[e]=Math.max(0,(Tn[e]??1)-1),Tn[e]||delete Tn[e],l[e]!==u){Tn[e]||(vc(e),delete h[e]);return}const g=c[e];g&&(clearInterval(g),delete c[e]),o[e]===f&&delete o[e],a[e]===m&&delete a[e],delete l[e],h[e]===d&&delete h[e],Tn[e]||vc(e)}},announce:(i,e)=>{const t=mc.forRelay(i)[e],n=Do.forRelay(i),s=xr.forRelay(i)[e];return t&&(t.isActive=!0),s&&n[e]&&(clearInterval(n[e]),n[e]=setInterval(()=>{s()},vs[i.url]),s()),vs[i.url]},deactivate:(i,e)=>{const t=mc.forRelay(i)[e],n=Do.forRelay(i),s=xr.forRelay(i)[e];t&&(t.isActive=!1),vc(e),s&&n[e]&&(clearInterval(n[e]),n[e]=setInterval(()=>{s()},ld),s())}}),X1=(i,e,t)=>W1({...i,trickleIce:i.trickleIce??!1},e,t),q1=["open.ftorrent.com","tracker.webtorrent.dev","tracker.openwebtorrent.com","tracker.btorrent.xyz","tracker.files.fm:7073/announce"].map(i=>"wss://"+i);/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const Jf=Object.freeze({p:0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,n:0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,h:1n,a:0n,b:7n,Gx:0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Gy:0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n}),{p:vi,n:Kr,Gx:Y1,Gy:j1,b:Qf}=Jf,Zt=32,qr=64,bl={publicKey:Zt+1,publicKeyUncompressed:qr+1,seed:Zt+Zt/2},Rt=(i="",e=Error)=>{const t=new e(i),{captureStackTrace:n}=Error;throw typeof n=="function"&&n(t,Rt),t},Z1=i=>i instanceof Uint8Array||ArrayBuffer.isView(i)&&i.constructor.name==="Uint8Array"&&i.BYTES_PER_ELEMENT===1,pn=(i,e,t="")=>{const n=Z1(i),s=i?.length,r=e!==void 0;if(!n||r&&s!==e){const o=t&&`"${t}" `,a=r?` of length ${e}`:"",c=n?`length=${s}`:`type=${typeof i}`,l=o+"expected Uint8Array"+a+", got "+c;return n?Rt(l,RangeError):Rt(l,TypeError)}return i},Yr=i=>new Uint8Array(i),$f=(i,e)=>i.toString(16).padStart(e,"0"),ep=i=>{let e="";for(const t of pn(i))e+=$f(t,2);return e},Gn={_0:48,_9:57,A:65,F:70,a:97,f:102},dd=i=>i>=Gn._0&&i<=Gn._9?i-Gn._0:i>=Gn.A&&i<=Gn.F?i-(Gn.A-10):i>=Gn.a&&i<=Gn.f?i-(Gn.a-10):void 0,tp=i=>{const e="hex invalid";if(typeof i!="string")return Rt(e);const t=i.length,n=t/2;if(t%2)return Rt(e);const s=Yr(n);for(let r=0,o=0;r<n;r++,o+=2){const a=dd(i.charCodeAt(o)),c=dd(i.charCodeAt(o+1));if(a===void 0||c===void 0)return Rt(e);s[r]=a*16+c}return s},fd=()=>globalThis?.crypto?.subtle??Rt("crypto.subtle must be defined, consider polyfill"),Xs=(...i)=>{let e=0;for(const s of i)e+=pn(s).length;const t=Yr(e);let n=0;for(const s of i)t.set(s,n),n+=s.length;return t},uh=(i=Zt)=>(globalThis?.crypto).getRandomValues(Yr(i)),Tl=BigInt,Vi=(i,e,t,n="bad number: out of range")=>typeof i!="bigint"?Rt(n,TypeError):e<=i&&i<t?i:Rt(n,RangeError),De=(i,e=vi)=>{const t=i%e;return t>=0n?t:e+t},xa=i=>De(i,Kr),K1=(i,e)=>{(i===0n||e<=0n)&&Rt("no inverse n="+i+" mod="+e);let t=De(i,e),n=e,s=0n,r=1n;for(;t!==0n;){const o=n/t,a=n%t,c=s-r*o;n=t,t=a,s=r,r=c}return n===1n?De(s,e):Rt("no inverse")},np=i=>{const e=nw[i];return typeof e!="function"&&Rt("hashes."+i+" not set"),e},pd=(i,e,t)=>pn(np(i)(e,t),Zt,"digest"),md=(i,e,t)=>Promise.resolve(np(i)(e,t)).then(n=>pn(n,Zt,"digest")),xc=i=>i instanceof sn?i:Rt("Point expected"),ip=i=>De(De(i*i)*i+Qf),gd=i=>Vi(i,0n,vi),Yo=i=>Vi(i,1n,vi),J1=i=>Vi(i,1n,Kr),ya=i=>!(i&1n),sp=i=>Uint8Array.of(i),Q1=i=>sp(ya(i)?2:3),rp=i=>{const e=ip(Yo(i));let t=1n;for(let n=e,s=(vi+1n)/4n;s>0n;s>>=1n)s&1n&&(t=t*n%vi),n=n*n%vi;return De(t*t)!==e&&Rt("sqrt invalid"),ya(t)?t:De(-t)};class sn{static BASE;static ZERO;X;Y;Z;constructor(e,t,n){this.X=gd(e),this.Y=Yo(t),this.Z=gd(n),Object.freeze(this)}static CURVE(){return Jf}static fromAffine(e){const{x:t,y:n}=e;return t===0n&&n===0n?Ni:new sn(t,n,1n)}static fromBytes(e){pn(e);const{publicKey:t,publicKeyUncompressed:n}=bl;let s;const r=e.length,o=e[0],a=e.subarray(1),c=na(a,0,Zt);if(r===t&&(o===2||o===3)){let l=rp(c);o===3&&(l=De(-l)),s=new sn(c,l,1n)}return r===n&&o===4&&(s=new sn(c,na(a,Zt,qr),1n)),s?s.assertValidity():Rt("bad point: not on curve")}static fromHex(e){return sn.fromBytes(tp(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){const{X:t,Y:n,Z:s}=this,{X:r,Y:o,Z:a}=xc(e),c=De(t*a),l=De(r*s),h=De(n*a),u=De(o*s);return c===l&&h===u}is0(){return this.equals(Ni)}negate(){return new sn(this.X,De(-this.Y),this.Z)}double(){return this.add(this)}add(e){const{X:t,Y:n,Z:s}=this,{X:r,Y:o,Z:a}=xc(e),c=0n,l=Qf;let h=0n,u=0n,f=0n;const d=De(l*3n);let m=De(t*r),v=De(n*o),g=De(s*a),p=De(t+n),M=De(r+o);p=De(p*M),M=De(m+v),p=De(p-M),M=De(t+s);let y=De(r+a);return M=De(M*y),y=De(m+g),M=De(M-y),y=De(n+s),h=De(o+a),y=De(y*h),h=De(v+g),y=De(y-h),f=De(c*M),h=De(d*g),f=De(h+f),h=De(v-f),f=De(v+f),u=De(h*f),v=De(m+m),v=De(v+m),g=De(c*g),M=De(d*M),v=De(v+g),g=De(m-g),g=De(c*g),M=De(M+g),m=De(v*M),u=De(u+m),m=De(y*M),h=De(p*h),h=De(h-m),m=De(p*v),f=De(y*f),f=De(f+m),new sn(h,u,f)}subtract(e){return this.add(xc(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return Ni;if(J1(e),e===1n)return this;if(this.equals(Wi))return uw(e).p;let n=Ni,s=Wi;for(let r=this;e>0n;r=r.double(),e>>=1n)e&1n?n=n.add(r):t&&(s=s.add(r));return n}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){const{X:e,Y:t,Z:n}=this;if(this.equals(Ni))return{x:0n,y:0n};if(n===1n)return{x:e,y:t};const s=K1(n,vi);return De(n*s)!==1n&&Rt("inverse invalid"),{x:De(e*s),y:De(t*s)}}assertValidity(){const{x:e,y:t}=this.toAffine();return Yo(e),Yo(t),De(t*t)===ip(e)?this:Rt("bad point: not on curve")}toBytes(e=!0){const{x:t,y:n}=this.assertValidity().toAffine(),s=Dn(t);return e?Xs(Q1(n),s):Xs(sp(4),s,Dn(n))}toHex(e){return ep(this.toBytes(e))}}const Wi=new sn(Y1,j1,1n),Ni=new sn(0n,1n,0n);sn.BASE=Wi;sn.ZERO=Ni;const $1=(i,e,t)=>Wi.multiply(e,!1).add(i.multiply(t,!1)).assertValidity(),Zi=i=>Tl("0x"+(ep(i)||"0")),na=(i,e,t)=>Zi(i.subarray(e,t)),ew=2n**256n,Dn=i=>tp($f(Vi(i,0n,ew),qr)),tw=i=>{const e=Zi(pn(i,Zt,"secret key"));return Vi(e,1n,Kr,"invalid secret key: outside of range")},vd="SHA-256",nw={hmacSha256Async:async(i,e)=>{const t=fd(),n="HMAC",s=await t.importKey("raw",i,{name:n,hash:{name:vd}},!1,["sign"]);return Yr(await t.sign(n,s,e))},hmacSha256:void 0,sha256Async:async i=>Yr(await fd().digest(vd,i)),sha256:void 0},iw=i=>{if(i=i===void 0?uh(bl.seed):i,pn(i),i.length<bl.seed||i.length>1024)return Rt("expected 48-1024b",RangeError);const e=De(Zi(i),Kr-1n);return Dn(e+1n)},sw=i=>e=>{const t=iw(e);return{secretKey:t,publicKey:i(t)}},op=i=>Uint8Array.from("BIP0340/"+i,e=>e.charCodeAt(0)),ap="aux",cp="nonce",lp="challenge",El=(i,...e)=>{const t=pd("sha256",op(i));return pd("sha256",Xs(t,t,...e))},Al=(i,...e)=>md("sha256Async",op(i)).then(t=>md("sha256Async",Xs(t,t,...e))),dh=i=>{const e=tw(i),t=Wi.multiply(e),{x:n,y:s}=t.assertValidity().toAffine(),r=ya(s)?e:xa(-e),o=Dn(n);return{d:r,px:o}},fh=i=>xa(Zi(i)),hp=(...i)=>fh(El(lp,...i)),up=async(...i)=>fh(await Al(lp,...i)),dp=i=>dh(i).px,rw=sw(dp),fp=(i,e,t)=>{const{px:n,d:s}=dh(e);return{m:pn(i),px:n,d:s,a:pn(t,Zt)}},pp=i=>{const e=fh(i);e===0n&&Rt("sign failed: k is zero");const{px:t,d:n}=dh(Dn(e));return{rx:t,k:n}},mp=(i,e,t,n)=>Xs(e,Dn(xa(i+t*n))),gp="invalid signature produced",ow=(i,e,t=uh(Zt))=>{const{m:n,px:s,d:r,a:o}=fp(i,e,t),a=El(ap,o),c=Dn(r^Zi(a)),l=El(cp,c,s,n),{rx:h,k:u}=pp(l),f=hp(h,s,n),d=mp(u,h,f,r);return xp(d,n,s)||Rt(gp),d},aw=async(i,e,t=uh(Zt))=>{const{m:n,px:s,d:r,a:o}=fp(i,e,t),a=await Al(ap,o),c=Dn(r^Zi(a)),l=await Al(cp,c,s,n),{rx:h,k:u}=pp(l),f=await up(h,s,n),d=mp(u,h,f,r);return await yp(d,n,s)||Rt(gp),d},cw=(i,e)=>i instanceof Promise?i.then(e):e(i),vp=(i,e,t,n)=>{const s=pn(i,qr,"signature"),r=pn(e,void 0,"message"),o=pn(t,Zt,"publicKey");try{const a=Zi(o),c=rp(a),l=new sn(a,c,1n).assertValidity(),h=Dn(l.toAffine().x),u=na(s,0,Zt);Vi(u,1n,vi);const f=na(s,Zt,qr);Vi(f,1n,Kr);const d=Xs(Dn(u),h,r);return cw(n(d),m=>{const{x:v,y:g}=$1(l,f,xa(-m)).toAffine();return!(!ya(g)||v!==u)})}catch{return!1}},xp=(i,e,t)=>vp(i,e,t,hp),yp=async(i,e,t)=>vp(i,e,t,up),Mp=Object.freeze({keygen:rw,getPublicKey:dp,sign:ow,verify:xp,signAsync:aw,verifyAsync:yp}),ia=8,lw=256,_p=Math.ceil(lw/ia)+1,Rl=2**(ia-1),hw=()=>{const i=[];let e=Wi,t=e;for(let n=0;n<_p;n++){t=e,i.push(t);for(let s=1;s<Rl;s++)t=t.add(e),i.push(t);e=t.double()}return i};let xd;const yd=(i,e)=>{const t=e.negate();return i?t:e},uw=i=>{const e=xd||(xd=hw());let t=Ni,n=Wi;const s=2**ia,r=s,o=Tl(s-1),a=Tl(ia);for(let c=0;c<_p;c++){let l=Number(i&o);i>>=a,l>Rl&&(l-=r,i+=1n);const h=c*Rl,u=h,f=h+Math.abs(l)-1,d=c%2!==0,m=l<0;l===0?n=n.add(yd(d,e[u])):t=t.add(yd(m,e[f]))}return i!==0n&&Rt("invalid wnaf"),{p:t,f:n}},dw=zf(i=>i.socket),fw=5,wp="x",Sp="EVENT",{secretKey:pw,publicKey:mw}=Mp.keygen(),gw=Hr(mw),vw={},xw={},yw={},Md=250,bp=()=>Math.floor(Date.now()/1e3),Tp=i=>yw[i]??=Of(i,1e4)+2e4,Mw=async(i,e)=>{const t={kind:Tp(i),tags:[[wp,i]],created_at:bp(),content:e,pubkey:gw},n=await ma("SHA-256",$t([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return $t([Sp,{...t,id:Hr(n),sig:Hr(await Mp.signAsync(n,pw))}])},qs={},_w=(i,e,t)=>{const n=qs[i.url]??={subIds:[],topics:new Map,updateTimer:null};n.topics.set(e,t),Ep(i,n)},ww=(i,e)=>{const t=qs[i.url];t&&(t.topics.delete(e),t.topics.size===0?(t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),t.subIds.forEach(n=>i.send($t(["CLOSE",n]))),delete qs[i.url]):Ep(i,t))},Ep=(i,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null,Ap(i)},0))},Ap=i=>{const e=qs[i.url];if(!e||e.topics.size===0)return;const t=[...e.topics.keys()],n=[],s=bp();for(let r=0;r<t.length;r+=Md)n.push(t.slice(r,r+Md));for(;e.subIds.length>n.length;){const r=e.subIds.pop();r&&i.send($t(["CLOSE",r]))}n.forEach((r,o)=>{const a=e.subIds[o]??=Yi(64);i.send($t(["REQ",a,{kinds:[...new Set(r.map(Tp))],since:s,"#x":r}]))})},Sw=i=>{const e=qs[i.url];e&&e.topics.size>0&&Ap(i)},bw=U1({init:i=>Nf(i,Tw,fw,!0).map(e=>{const t=dw.register(e,()=>Ff(e,n=>{const[s,r,o,a]=Gi(n);if(s!==Sp){const c=`${mn}: relay failure from ${t.url} - `;i.relayConfig?.warnOnRelayFailure!==!1&&(s==="NOTICE"?console.warn(c+r):s==="OK"&&!o&&console.warn(c+a));return}if(o&&typeof o=="object"&&"content"in o){const{content:c}=o,l=xw[r];if(l){l(vw[r]??"",c);return}const h=qs[t.url];if(h?.subIds.includes(r)&&o.tags){const u=o.tags.find(f=>f[0]===wp);u?.[1]&&h.topics.get(u[1])?.(u[1],c)}}},()=>Sw(t)));return t.ready}),subscribeTopic:(i,e,t)=>(_w(i,e,(s,r)=>void t(s,r)),()=>{ww(i,e)}),publishTopic:async(i,e,t)=>i.send(await Mw(e,typeof t=="string"?t:$t(t)))}),Tw=["basspistol.org","bucket.coracle.social","chorus.almostmachines.dev","chorus.pjv.me","communities.nos.social","ftp.halifax.rwth-aachen.de/nostr","hol.is","hornetstorage.net/relay","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.self-determined.de","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.angor.io","relay.artio.inf.unibe.ch","relay.binaryrobot.com","relay.damus.io","relay.froth.zone","relay.libernet.app","relay.mostr.pub","relay.mostro.network","relay.nostr.place","relay.nostrdice.com","relay.notoshi.win","relay.sigit.io","relay02.lnfi.network","relay2.angor.io","schnorr.me","slick.mjex.me","social.amanah.eblessing.co","staging.yabu.me","strfry.openhoofd.nl","strfry.shock.network","testnet-relay.samt.st","top.testrelay.top","x.kojira.io","yabu.me/v2"].map(i=>"wss://"+i);function Ew(){try{const i=sessionStorage.getItem("tidelight-peer-id");if(i)return i;const e=crypto.randomUUID().replace(/-/g,"").slice(0,12);return sessionStorage.setItem("tidelight-peer-id",e),e}catch{return crypto.randomUUID().replace(/-/g,"").slice(0,12)}}class Aw{id=Ew();senders=[];leavers=[];onMessage=()=>{};onJoin=()=>{};onLeave=()=>{};connected=!1;peers=0;constructor(){this.attach("torrent",()=>X1({appId:"tidelight-one-harbor"},"the-only-world")),this.attach("nostr",()=>bw({appId:"tidelight-one-harbor"},"the-only-world"))}attach(e,t){try{const n=t(),s=n.makeAction("bus");s.onMessage=r=>this.onMessage(r),this.senders.push(r=>{try{s.send(JSON.parse(JSON.stringify(r)))}catch{}}),n.onPeerJoin=r=>{this.peers+=1,this.connected=!0,this.onJoin(r)},n.onPeerLeave=r=>{this.peers=Math.max(0,this.peers-1),this.onLeave(r.slice(0,12))},this.leavers.push(()=>n.leave()),this.connected=!0}catch(n){console.warn(`mesh ${e} unavailable`,n)}}send(e){for(const t of this.senders)t(e)}leave(){for(const e of this.leavers)e()}}const ci=oh(),Rw="tidelight-harbor";function _d(){return crypto.randomUUID().slice(0,8)}const yr=[12868666,15254394,4029035,8031428,13925024,13935180,4834742,14711357,9071556,5940058,13921131,4890824];class Pw{id;name;skin;donate;isHost=!1;snapshot;bus=new BroadcastChannel(Rw);mesh=new Aw;ws=null;hostSeen=0;seenBus=new Set;onToast=()=>{};onChat=()=>{};closed=!1;pendingHellos=[];heardIds=new Set;constructor(e,t){this.name=e.slice(0,16)||"courier",this.donate=t,this.id=this.mesh.id||_d(),this.skin=Math.abs(Rp(this.id))%8,this.snapshot=Lw(this.id),this.mesh.onMessage=n=>this.ingest(n),this.mesh.onJoin=()=>this.hello(),this.mesh.onLeave=()=>{},this.bus.onmessage=n=>this.ingest(n.data),addEventListener("storage",n=>{n.key!=="tidelight-q"||!n.newValue||this.drainQueue(n.newValue)}),setInterval(()=>{this.drainQueue(localStorage.getItem("tidelight-q"))},80),this.trySocket(),this.heardIds.add(this.id),this.hello(),setTimeout(()=>{performance.now()-this.hostSeen>350&&this.becomeHost()},420),setInterval(()=>{if(this.isHost){this.hostSeen=performance.now();return}performance.now()-this.hostSeen>5e3&&this.becomeHost()},700),setInterval(()=>{!this.isHost||this.closed||this.send({type:"snapshot",snapshot:this.snapshot})},450)}trySocket(){const t=`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`;try{this.ws=new WebSocket(t),this.ws.onmessage=n=>this.ingest(JSON.parse(String(n.data))),this.ws.onerror=()=>{this.ws=null}}catch{this.ws=null}}send(e){this.bus.postMessage(e),this.mesh.send(e);try{const t=localStorage.getItem("tidelight-q"),n=t?JSON.parse(t):[];for(n.push({...e,_n:Math.random()});n.length>24;)n.shift();localStorage.setItem("tidelight-q",JSON.stringify(n))}catch{}this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(e))}drainQueue(e){if(e)try{const t=JSON.parse(e);if(!Array.isArray(t))return;for(const n of t){const s=JSON.stringify(n);if(!this.seenBus.has(s)){if(this.seenBus.add(s),this.seenBus.size>240){const r=[...this.seenBus].slice(0,80);for(const o of r)this.seenBus.delete(o)}this.ingest(n)}}}catch{}}ingest(e){const t=e;if(!(!t||typeof t!="object"||!("type"in t))){if(t.type==="welcome"||t.type==="snapshot"){if(this.isHost&&t.snapshot.hostId!==this.id){const n=t.snapshot.peers.length,s=this.snapshot.peers.length;if(s>n||s===n&&this.snapshot.t>=t.snapshot.t)return}t.snapshot.hostId!==this.id&&(this.isHost=!1,this.hostSeen=performance.now()),(!t.snapshot.vehicles||t.snapshot.vehicles.length===0)&&(t.snapshot.vehicles=li());for(const n of t.snapshot.peers)n.vehicle||(n.vehicle="none"),n.vehicleSlot==null&&(n.vehicleSlot=n.islandSlot);this.snapshot=t.snapshot;return}if(t.type==="toast"){this.onToast(t.text);return}if(t.type==="chat"){this.onChat({from:t.id,name:t.name,text:t.text,t:performance.now()});return}if(t.type==="bye"){this.snapshot.hostId===t.id&&!this.isHost?(this.drop(t.id,"left the harbor"),this.becomeHost()):this.isHost&&this.drop(t.id,"left the harbor");return}if(t.type==="state"){this.applyRemoteRide(t),this.isHost&&this.patchPeer(t);return}if(t.type==="hello"){this.heardIds.add(t.id),this.isHost?this.admit(t.id,t.name,t.donate,t.skin):this.pendingHellos.push({id:t.id,name:t.name,donate:t.donate,skin:t.skin});return}if(this.isHost&&(t.type==="letter"&&this.upsertLetter(t.letter),t.type==="wave")){const n=this.snapshot.peers.find(s=>s.id===t.id);n&&(n.waving=!0)}}}becomeHost(){if(!this.isHost&&performance.now()-this.hostSeen<1600&&this.hostSeen>0)return;const e=this.snapshot.peers.map(n=>n.id);e.includes(this.id)||e.push(this.id),e.sort();const t=[...this.heardIds];if(t.sort(),!(t[0]&&t[0]!==this.id)&&!(e[0]&&e[0]!==this.id&&this.snapshot.peers.length>0)){this.isHost=!0,this.snapshot.hostId=this.id,this.hostSeen=performance.now(),this.admit(this.id,this.name,this.donate,this.skin);for(const n of this.pendingHellos)this.admit(n.id,n.name,n.donate,n.skin);this.pendingHellos.length=0,this.send({type:"welcome",you:this.id,snapshot:this.snapshot})}}helloTimer=0;hello(){this.send({type:"hello",id:this.id,name:this.name,donate:this.donate,skin:this.skin}),!this.helloTimer&&(this.helloTimer=window.setInterval(()=>{this.closed||this.isHost||this.snapshot.peers.some(e=>e.id===this.id)||this.send({type:"hello",id:this.id,name:this.name,donate:this.donate,skin:this.skin})},600))}admit(e,t,n,s=0){if(this.snapshot.peers.some(u=>u.id===e))return;const r=this.nextSlot(),o=Cw(this.snapshot.peers.map(u=>u.color),e),a=Br(ci[r]),c=qn(ci[r],a.x,a.z);this.snapshot.peers.push({id:e,name:t,color:o,x:a.x,y:c+.2,z:a.z,yaw:a.yaw,moving:!1,waving:!1,carrying:!1,donate:n,islandSlot:r,lastSeen:Date.now(),skin:s,vehicle:"none",vehicleSlot:r,inside:!1});const l=this.snapshot.islands[r];l&&(l.ownerId=e,l.rise=1);const h=this.snapshot.islands[0];h&&(h.ownerId=null,h.rise=1),this.maybeSpawnLetter(),this.onToast(`${t} reached the harbor`),this.send({type:"toast",text:`${t} reached the harbor`})}nextSlot(){const e=new Set(this.snapshot.peers.map(t=>t.islandSlot));for(let t=1;t<$o;t++)if(!e.has(t))return t;return 1+this.snapshot.peers.length%Math.max(1,$o-1)}drop(e,t="drifted away"){const n=this.snapshot.peers.find(r=>r.id===e);if(!n)return;this.snapshot.peers=this.snapshot.peers.filter(r=>r.id!==e);const s=this.snapshot.islands[n.islandSlot];s&&s.ownerId===e&&(s.ownerId=null),this.parkPeerVehicles(e);for(const r of this.snapshot.letters)r.carrierId===e&&(r.carrierId=null,r.x=n.x,r.y=n.y+.4,r.z=n.z);this.onToast(`${n.name} ${t}`),this.send({type:"toast",text:`${n.name} ${t}`}),this.isHost&&this.send({type:"snapshot",snapshot:this.snapshot})}parkPeerVehicles(e){this.snapshot.vehicles||(this.snapshot.vehicles=li());for(const t of this.snapshot.vehicles)t.riderId===e&&(t.riderId=null,this.returnVehicleHome(t))}returnVehicleHome(e){const t=ci[e.slot];if(t)if(e.kind==="boat"){const n=ih(t);e.x=n.x,e.y=.28,e.z=n.z,e.yaw=n.yaw}else{const n=ea(t);e.x=n.x,e.y=qn(t,n.x,n.z)+.85,e.z=n.z,e.yaw=n.yaw}}claimVehicle(e,t,n,s,r,o){this.snapshot.vehicles||(this.snapshot.vehicles=li());const a=this.snapshot.vehicles.find(l=>l.kind===e&&l.slot===t);if(!a||a.riderId&&a.riderId!==this.id)return!1;for(const l of this.snapshot.vehicles)l.riderId===this.id&&(l.riderId=null);a.riderId=this.id,a.x=n,a.y=s,a.z=r,a.yaw=o;const c=this.snapshot.peers.find(l=>l.id===this.id);return c&&(c.vehicle=e,c.vehicleSlot=t,c.x=n,c.y=s,c.z=r,c.yaw=o),this.isHost&&this.send({type:"snapshot",snapshot:this.snapshot}),!0}releaseVehicle(e,t,n,s,r,o){if(e==="none")return;this.snapshot.vehicles||(this.snapshot.vehicles=li());const a=this.snapshot.vehicles.find(l=>l.kind===e&&l.slot===t);if(!a||a.riderId&&a.riderId!==this.id)return;a.riderId=null,a.x=n,a.y=s,a.z=r,a.yaw=o;const c=this.snapshot.peers.find(l=>l.id===this.id);c&&(c.vehicle="none",c.x=n,c.y=s,c.z=r,c.yaw=o),this.isHost&&this.send({type:"snapshot",snapshot:this.snapshot})}heartbeat(e){e&&this.publishSelf(e)}patchPeer(e){const t=this.snapshot.peers.find(n=>n.id===e.id);t&&(t.x=e.x,t.y=e.y,t.z=e.z,t.yaw=e.yaw,t.moving=e.moving,t.waving=e.waving,t.carrying=e.carrying,t.donate=e.donate,t.vehicle=e.vehicle??"none",t.vehicleSlot=e.vehicleSlot??t.islandSlot,t.inside=!!e.inside,t.lastSeen=Date.now(),this.patchVehicle(t))}applyRemoteRide(e){if(e.id===this.id)return;(!this.snapshot.vehicles||this.snapshot.vehicles.length===0)&&(this.snapshot.vehicles=li());const t=this.snapshot.peers.find(s=>s.id===e.id);if(t&&(t.x=e.x,t.y=e.y,t.z=e.z,t.yaw=e.yaw,t.vehicle=e.vehicle??"none",t.vehicleSlot=e.vehicleSlot??t.islandSlot,t.inside=!!e.inside,t.lastSeen=Date.now()),e.vehicle==="none"){for(const s of this.snapshot.vehicles)s.riderId===e.id&&(s.riderId=null);return}const n=this.snapshot.vehicles.find(s=>s.kind===e.vehicle&&s.slot===e.vehicleSlot);n&&(n.riderId=e.id,n.x=e.x,n.y=e.y,n.z=e.z,n.yaw=e.yaw)}patchVehicle(e){(!this.snapshot.vehicles||this.snapshot.vehicles.length===0)&&(this.snapshot.vehicles=li());for(const n of this.snapshot.vehicles)n.riderId===e.id&&(e.vehicle==="none"||n.kind!==e.vehicle||n.slot!==e.vehicleSlot)&&(n.riderId=null);if(e.vehicle==="none")return;const t=this.snapshot.vehicles.find(n=>n.kind===e.vehicle&&n.slot===e.vehicleSlot);t&&(t.riderId=e.id,t.x=e.x,t.y=e.y,t.z=e.z,t.yaw=e.yaw)}upsertLetter(e){const t=this.snapshot.letters.findIndex(n=>n.id===e.id);t>=0?this.snapshot.letters[t]=e:this.snapshot.letters.push(e)}maybeSpawnLetter(){if(this.snapshot.letters.filter(r=>!r.delivered).length>=3)return;const e=this.snapshot.peers.filter(r=>r.donate).map(r=>r.islandSlot);e.length===0&&e.push(0);const t=e[Math.floor(Math.random()*e.length)],n=this.snapshot.peers[0]?.islandSlot??0,s=Br(ci[n]??ci[0]);this.snapshot.letters.push({id:_d(),x:s.x+1.2,y:qn(ci[n]??ci[0],s.x,s.z)+.45,z:s.z+.6,carrierId:null,destSlot:t,delivered:!1})}publishSelf(e){const t={type:"state",id:this.id,x:e.x,y:e.y,z:e.z,yaw:e.yaw,moving:e.moving,waving:e.waving,carrying:e.carrying,donate:this.donate,vehicle:e.vehicle,vehicleSlot:e.vehicleSlot,inside:e.inside};if(this.isHost)this.patchPeer(t);else{const n=this.snapshot.peers.find(s=>s.id===this.id);n&&(n.x=e.x,n.y=e.y,n.z=e.z,n.yaw=e.yaw,n.vehicle=e.vehicle,n.vehicleSlot=e.vehicleSlot,n.inside=e.inside,n.lastSeen=Date.now())}this.send(t)}publishLetter(e){this.isHost&&this.upsertLetter(e),this.send({type:"letter",letter:e})}wave(){this.send({type:"wave",id:this.id})}chat(e){const t=e.trim().slice(0,140);if(!t)return;const n={type:"chat",id:this.id,name:this.name,text:t};this.onChat({from:this.id,name:this.name,text:t,t:performance.now()}),this.send(n)}tickHost(e,t){if(!this.isHost)return;const n=this.snapshot.peers.length>0;for(const a of this.snapshot.islands){if(a.slot===0){a.rise+=((n?1:0)-a.rise)*Math.min(1,e*2.4),a.ownerId=null;continue}const c=this.snapshot.peers.find(h=>h.islandSlot===a.slot),l=c?1:0;a.rise+=(l-a.rise)*Math.min(1,e*2.4),a.ownerId=c?.id??null}this.snapshot.t+=e,this.snapshot.computeMs=t;const s=Date.now(),r=this.snapshot.peers.filter(a=>a.id!==this.id&&s-a.lastSeen>=4e3);for(const a of r)this.drop(a.id,"drifted away");const o=new Set(this.snapshot.peers.map(a=>a.id));this.snapshot.vehicles||(this.snapshot.vehicles=li());for(const a of this.snapshot.vehicles){a.riderId&&!o.has(a.riderId)&&(a.riderId=null,this.returnVehicleHome(a));const c=this.snapshot.peers.find(l=>l.id===a.riderId);c?(a.x=c.x,a.y=c.y,a.z=c.z,a.yaw=c.yaw):!a.riderId&&(this.snapshot.islands[a.slot]?.rise??0)<.2&&this.returnVehicleHome(a)}this.snapshot.letters.filter(a=>!a.delivered).length===0&&this.maybeSpawnLetter(),this.send({type:"snapshot",snapshot:this.snapshot})}leave(){if(!this.closed){this.closed=!0;try{this.send({type:"bye",id:this.id})}catch{}try{this.bus.close()}catch{}this.helloTimer&&window.clearInterval(this.helloTimer),this.helloTimer=0,this.ws?.close(),this.mesh.leave()}}}function Rp(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)|0;return e}function Cw(i,e){const t=Math.abs(Rp(e))%yr.length;for(let n=0;n<yr.length;n++){const s=yr[(t+n)%yr.length];if(!i.includes(s))return s}return yr[t]}function Lw(i){const e=Array.from({length:$o},(t,n)=>({slot:n,ownerId:null,rise:0,seed:n*3.17}));return{t:0,hostId:i,peers:[],letters:[],islands:e,vehicles:li(),computeMs:0}}function li(){const i=[];return ci.forEach((e,t)=>{if(t===0)return;const n=ih(e),s=ea(e);i.push({kind:"boat",slot:t,x:n.x,y:.28,z:n.z,yaw:n.yaw,riderId:null}),i.push({kind:"heli",slot:t,x:s.x,y:qn(e,s.x,s.z)+.85,z:s.z,yaw:s.yaw,riderId:null})}),i}const yc=1/QM,Mr=new D;function ln(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Mr.copy(e),Mr[n]=0,Mr.normalize();const l=.5*o/(o+a),h=1-Mr.angleTo(i)/c;return Math.sign(Mr[t])===1?h*l:a/(o+a)+l+l*(1-h)}class Mc extends Qt{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new D,c=new D,l=new D(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,m=new D,v=.5/s;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(a.fromArray(h,g),c.copy(a),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),h[g+0]=l.x*Math.sign(a.x)+c.x*r,h[g+1]=l.y*Math.sign(a.y)+c.y*r,h[g+2]=l.z*Math.sign(a.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/d)){case 0:m.set(1,0,0),f[p+0]=ln(m,c,"z","y",r,n),f[p+1]=1-ln(m,c,"y","z",r,t);break;case 1:m.set(-1,0,0),f[p+0]=1-ln(m,c,"z","y",r,n),f[p+1]=1-ln(m,c,"y","z",r,t);break;case 2:m.set(0,1,0),f[p+0]=1-ln(m,c,"x","z",r,e),f[p+1]=ln(m,c,"z","x",r,n);break;case 3:m.set(0,-1,0),f[p+0]=1-ln(m,c,"x","z",r,e),f[p+1]=1-ln(m,c,"z","x",r,n);break;case 4:m.set(0,0,1),f[p+0]=1-ln(m,c,"x","y",r,e),f[p+1]=1-ln(m,c,"y","x",r,t);break;case 5:m.set(0,0,-1),f[p+0]=ln(m,c,"x","y",r,e),f[p+1]=1-ln(m,c,"y","x",r,t);break}}}let xs=null;function Dw(){if(!xs){const i=new Uint8Array([96,126,178,228,255]);xs=new ql(i,5,1,aa),xs.minFilter=qt,xs.magFilter=qt,xs.needsUpdate=!0}return xs}function Ot(i,e=.3){const t=new $e({color:i,gradientMap:Dw()});return e>0&&(t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <fog_fragment>",`float tlRim = pow(1.0 - abs(dot(normalize(vNormal), normalize(vViewPosition))), 3.0);
	gl_FragColor.rgb += vec3(1.0, 0.83, 0.6) * tlRim * ${e.toFixed(3)};
	#include <fog_fragment>`)},t.customProgramCacheKey=()=>`tl-rim-${e.toFixed(3)}`),t}const Qe={body:new Is(.3,.28,8,24),belly:new et(.24,20,14),head:new et(.31,26,18),panel:new et(.24,20,14),eye:new et(.048,12,10),glint:new et(.016,8,6),smile:new Sn(.055,.012,6,16,Math.PI*.62),cheek:new et(.04,10,8),arm:new Is(.085,.2,6,14),hand:new et(.09,14,10),leg:new Is(.095,.14,6,14),foot:new et(.11,14,10),capBand:new Ce(.2,.215,.1,20),capTop:new Ce(.245,.245,.055,20),capTrim:new Sn(.205,.018,8,24),pom:new et(.045,10,8),hood:new et(.345,22,14,0,Math.PI*2,0,Math.PI*.62),beanie:new et(.3,22,14,0,Math.PI*2,0,Math.PI*.55),brim:new Sn(.275,.05,10,24),pack:new Mc(.36,.42,.18,3,.07),flap:new Mc(.31,.16,.2,3,.05),strap:new Qt(.055,.32,.03),env:new Mc(.26,.045,.18,2,.015),stamp:new Qt(.055,.02,.05),seal:new Ce(.026,.026,.02,10)},Iw=16049860,Uw=2761264;class Nw{constructor(e,t,n=0){this.color=e,this.build(e,Math.abs(n)%8),this.held=Ow(),this.held.visible=!1,this.torso.add(this.held),this.tag=zw(t,e),this.tag.position.set(0,2.05,0),this.bubble=wd(""),this.bubble.visible=!1,this.bubble.position.set(0,2.42,0),this.group.add(this.rig,this.tag,this.bubble)}group=new Ve;tag;rig=new Ve;torso=new Ve;armL=new Ve;armR=new Ve;legL=new Ve;legR=new Ve;held;bubble;bubbleUntil=0;t=Math.random()*10;phase=Math.random()*Math.PI*2;walkW=0;waveW=0;carryW=0;build(e,t){const n=new xe(e),s=n.clone().offsetHSL(.01,.04,-.17),r=Ot(n),o=Ot(s),a=Ot(Iw),c=Ot(Uw,0),l=Ot(16644850,0),h=Ot(15702143,0),u=Ot(9067068),f=Ot(15242588),d=(L,N)=>{const z=new ee(L,N);return z.castShadow=!0,z},m=d(Qe.body,r);m.position.y=.78,m.scale.set(1,1.05,.92);const v=d(Qe.belly,a);v.position.set(0,.67,.12),v.scale.set(.95,1.08,.62);const g=d(Qe.head,r);g.position.y=1.26,g.scale.set(1,.94,.96);const p=d(Qe.panel,a);p.position.set(0,1.25,.205),p.scale.set(.95,.82,.5);const M=d(Qe.eye,c);M.position.set(-.095,1.31,.3);const y=M.clone();y.position.x=.095;const x=d(Qe.glint,l);x.position.set(-.08,1.33,.343);const R=x.clone();R.position.x=.11;const b=d(Qe.smile,c);b.position.set(0,1.2,.302),b.rotation.z=Math.PI*1.19;const C=d(Qe.cheek,h);C.position.set(-.155,1.225,.275),C.scale.set(1,.68,.4);const E=C.clone();if(E.position.x=.155,this.torso.add(m,v,g,p,M,y,x,R,b,C,E),t===0){const L=new Ve;L.position.set(0,1.51,.01),L.rotation.set(-.1,0,.09);const N=d(Qe.capBand,l),z=d(Qe.capTop,l);z.position.y=.07;const F=d(Qe.capTrim,Ot(3820172,0));F.rotation.x=Math.PI/2,F.position.y=-.02;const K=d(Qe.pom,Ot(14242639,0));K.position.y=.115,L.add(N,z,F,K),this.torso.add(L)}else if(t===1){const L=d(Qe.hood,o);L.position.set(0,1.3,-.03),L.rotation.x=-.22;const N=d(Qe.pom,o);N.position.set(0,1.62,-.18),this.torso.add(L,N)}else if(t===2){const L=d(Qe.beanie,f);L.position.y=1.4,L.scale.set(1.03,.92,1.03);const N=d(Qe.brim,f);N.rotation.x=Math.PI/2,N.position.y=1.41,N.scale.z=.55;const z=d(Qe.pom,a);z.position.y=1.68,z.scale.setScalar(1.35),this.torso.add(L,N,z)}else if(t===3){const L=d(Qe.brim,Ot(15254394,0));L.rotation.x=Math.PI/2,L.position.y=1.48,L.scale.set(1.15,1.15,.4);const N=d(Qe.capTop,Ot(15979658,0));N.position.y=1.56,N.scale.set(1.1,1.4,1.1),this.torso.add(L,N)}else if(t===4){const L=d(Qe.capBand,f);L.position.set(0,1.48,.02),L.scale.set(1.05,.7,1.05);const N=d(Qe.stamp,f);N.position.set(-.22,1.42,-.12),N.scale.set(2.2,1.4,.6),this.torso.add(L,N)}else if(t===5){const L=d(Qe.beanie,o);L.position.y=1.42,L.scale.set(1.08,.72,1.08);const N=d(Qe.brim,Ot(2762276,0));N.rotation.x=Math.PI/2,N.position.set(0,1.4,.08),N.scale.set(.85,.85,.35),this.torso.add(L,N)}else if(t===6){const L=d(Qe.pom,Ot(13925024,0));L.position.set(.2,1.52,.1),L.scale.setScalar(1.6);const N=d(Qe.stamp,Ot(4029035,0));N.position.set(.14,1.5,.08),this.torso.add(L,N)}else{const L=d(Qe.pom,r);L.position.set(-.18,1.55,-.02),L.scale.set(1.1,1.6,.7);const N=L.clone();N.position.x=.18,this.torso.add(L,N)}const w=d(Qe.pack,u);w.position.set(0,.84,-.34);const _=d(Qe.flap,f);_.position.set(0,1,-.33);const I=d(Qe.strap,u);I.position.set(-.14,.95,.265),I.rotation.x=.12;const k=I.clone();k.position.x=.14,this.torso.add(w,_,I,k);const O=L=>{const N=new Ve;N.position.set(.3*L,1,0);const z=d(Qe.arm,r);z.position.y=-.15;const F=d(Qe.hand,a);return F.position.y=-.3,N.add(z,F),N};this.armL=O(-1),this.armR=O(1),this.torso.add(this.armL,this.armR);const A=L=>{const N=new Ve;N.position.set(.13*L,.44,0);const z=d(Qe.leg,o);z.position.y=-.14;const F=d(Qe.foot,o);return F.position.set(0,-.28,.045),F.scale.set(1.05,.55,1.4),N.add(z,F),N};this.legL=A(-1),this.legR=A(1),this.rig.add(this.legL,this.legR,this.torso)}pose(e,t,n,s,r=!1,o=!1){s=Math.min(s,.05),this.t+=s;const a=1-Math.exp(-10*s);this.walkW+=((e&&!o?1:0)-this.walkW)*a,this.waveW+=((n?1:0)-this.waveW)*a,this.carryW+=((r?1:0)-this.carryW)*a,this.phase+=s*(5.5+3.5*Math.min(t,2))*this.walkW;const c=this.t,l=this.walkW,h=Math.sin(this.phase),u=1-l;this.rig.position.y=o?-.42:l*Math.abs(Math.sin(this.phase))*.05,this.rig.rotation.x=.085*l,this.rig.rotation.z=h*.035*l+Math.sin(c*1.4)*.022*u,this.torso.rotation.y=h*.09*l;const f=Math.sin(c*2.3)*.02*u;this.torso.scale.set(1-f*.5,1+f,1-f*.5),this.legL.rotation.x=o?-1.25:h*.8*l,this.legR.rotation.x=o?-1.15:-h*.8*l;const d=this.carryW,m=Math.sin(c*2.3)*.045*u,v=ys(-h*.55*l+m,-1.2,d),g=ys(h*.55*l+m,-1.2,d),p=ys(-.18-Math.sin(c*2.3+1)*.03*u,.35,d),M=ys(.18+Math.sin(c*2.3+1)*.03*u,-.35,d),y=2.45+Math.sin(c*9)*.4;this.armL.rotation.x=v,this.armL.rotation.z=p,this.armR.rotation.x=ys(g,-.15,this.waveW),this.armR.rotation.z=ys(M,y,this.waveW),this.held.visible=r,this.bubble.visible&&performance.now()>this.bubbleUntil&&(this.bubble.visible=!1)}say(e){this.group.remove(this.bubble),Fw(this.bubble),this.bubble=wd(e),this.bubble.position.set(0,2.42,0),this.group.add(this.bubble),this.bubbleUntil=performance.now()+4e3}showTag(e){this.tag.visible=e}}function ys(i,e,t){return i+(e-i)*t}function Ow(){const i=new Ve,e=new ee(Qe.env,Ot(16248796,0)),t=new ee(Qe.stamp,Ot(12868666,0));t.position.set(.07,.028,-.045);const n=new ee(Qe.seal,Ot(11549242,0));return n.position.set(-.03,.028,.02),e.castShadow=!0,i.add(e,t,n),i.position.set(0,.92,.42),i.rotation.x=-.55,i}function Pp(i){const e=new aM(i);e.colorSpace=Wt,e.anisotropy=4;const t=new sM(new wf({map:e,transparent:!0,depthWrite:!1}));return t.renderOrder=10,t}function Fw(i){i.material.map?.dispose(),i.material.dispose()}function zw(i,e){const t=document.createElement("canvas");t.width=512,t.height=128;const n=t.getContext("2d"),s=i.slice(0,16);n.font="600 46px Outfit, sans-serif";const r=n.measureText(s).width,o=Math.min(480,r+110),a=(512-o)/2;n.fillStyle="rgba(20, 17, 36, 0.66)",sa(n,a,30,o,68,34),n.fill(),n.lineWidth=3,n.strokeStyle=`#${e.toString(16).padStart(6,"0")}cc`,sa(n,a+1.5,31.5,o-3,65,32),n.stroke(),n.fillStyle=`#${e.toString(16).padStart(6,"0")}`,n.beginPath(),n.arc(a+40,64,13,0,Math.PI*2),n.fill(),n.fillStyle="#fff6e8",n.textAlign="center",n.textBaseline="middle",n.fillText(s,a+40+(o-50)/2,66);const c=Pp(t);return c.scale.set(1.05,.2625,1),c}function wd(i){const e=document.createElement("canvas");e.width=1024,e.height=320;const t=e.getContext("2d");if(i){t.font="600 52px Outfit, sans-serif";const s=Bw(t,i.slice(0,96),840),r=60,o=52+s.length*r,a=Math.min(920,Math.max(220,...s.map(h=>t.measureText(h).width))+90),c=(1024-a)/2,l=250-o;t.fillStyle="rgba(255, 250, 238, 0.96)",sa(t,c,l,a,o,34),t.fill(),t.beginPath(),t.moveTo(486,l+o-2),t.lineTo(538,l+o-2),t.lineTo(512,l+o+40),t.closePath(),t.fill(),t.lineWidth=4,t.strokeStyle="rgba(110, 123, 208, 0.55)",sa(t,c+2,l+2,a-4,o-4,32),t.stroke(),t.fillStyle="#2a2436",t.textAlign="center",t.textBaseline="middle",s.forEach((h,u)=>t.fillText(h,512,l+32+r*(u+.5)))}const n=Pp(e);return n.scale.set(1.9,.594,1),n.visible=!!i,n}function Bw(i,e,t){const n=e.split(/\s+/).filter(Boolean),s=[];let r="";for(const o of n){const a=r?`${r} ${o}`:o;if(i.measureText(a).width>t&&r?(s.push(r),r=o):r=a,s.length===2)break}return r&&s.length<3&&s.push(r),s.length?s:[e]}function sa(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}const Sd=.05;function Uo(i,e){return 1-Math.exp(-i*e)}class kw{constructor(e){this.camera=e,this.camera.position.set(2,6.4,86),addEventListener("wheel",t=>{if(this.mode==="inside"){this.distTarget=vt.clamp(this.distTarget+t.deltaY*.004,1.6,3.2);return}const n=this.mode==="none"?4:8,s=this.mode==="heli"?22:16;this.distTarget=vt.clamp(this.distTarget+t.deltaY*.008,n,s)},{passive:!0})}yaw=0;pitch=-.24;intro=1;firstPerson=!1;dist=9.6;distTarget=9.6;lookHeight=1.35;pivot=new D;lookPoint=new D;prevTarget=new D;offset=new D;swayPhase=0;started=!1;mode="none";room=null;setRoom(e){this.room=e}enterInterior(e){this.mode=e?"inside":"none",this.intro=0,this.firstPerson=!1,e?(this.dist=2.35,this.distTarget=2.35,this.lookHeight=1.28,this.camera.fov=46,this.pitch=-.08):(this.dist=8.4,this.distTarget=9.6,this.lookHeight=1.38,this.camera.fov=52),this.camera.updateProjectionMatrix(),this.started=!1}setTravel(e,t){this.mode=t?"inside":e,t?(this.distTarget=vt.clamp(this.distTarget,1.6,3.2),this.lookHeight=1.28,this.camera.fov+=(46-this.camera.fov)*.16):e==="heli"?(this.distTarget=Math.max(this.distTarget,14.5),this.lookHeight=1.05,this.camera.fov+=(56-this.camera.fov)*.08):e==="boat"?(this.distTarget=Math.max(this.distTarget,10.4),this.lookHeight=1.15,this.camera.fov+=(50-this.camera.fov)*.08):((this.distTarget<4||this.distTarget>14)&&(this.distTarget=9.2),this.lookHeight=1.38,this.camera.fov+=(50-this.camera.fov)*.08),this.camera.updateProjectionMatrix()}update(e,t,n,s){e=Math.min(e,.05),this.yaw-=n.x*.0022;const r=this.mode==="inside"?-.45:-1.05,o=this.mode==="inside"?.28:.32;this.pitch=vt.clamp(this.pitch-n.y*.0016,r,o),this.dist+=(this.distTarget-this.dist)*Uo(this.mode==="inside"?12:8,e),this.firstPerson=!1,this.started||(this.pivot.copy(t),this.prevTarget.copy(t),this.lookPoint.copy(t).add(new D(0,this.lookHeight,0)),this.started=!0);const a=this.prevTarget.distanceTo(t)/Math.max(e,1e-4);this.prevTarget.copy(t);const c=t.clone();if(this.mode!=="inside"){const p=vt.clamp(a*.22,0,4.5);c.x+=Math.sin(this.yaw+Math.PI)*p*.15,c.z+=Math.cos(this.yaw+Math.PI)*p*.15}this.pivot.lerp(c,Uo(this.mode==="inside"?16:9,e));const l=Math.max(0,-this.pitch),h=Math.cos(this.pitch),u=this.mode==="heli"?2.2:this.mode==="boat"?1.2:this.mode==="inside"?.35:0,f=this.mode==="inside"?.32:0;this.offset.set(Math.sin(this.yaw)*this.dist*h+Math.cos(this.yaw)*f,1.7-Math.sin(this.pitch)*this.dist*.72+l*.7+u,Math.cos(this.yaw)*this.dist*h-Math.sin(this.yaw)*f);const d=this.pivot.clone().add(this.offset);this.mode==="inside"&&this.room&&this.clampInRoom(d,t);const m=vt.clamp(a/9,0,1)*(this.mode==="none"?.055:.02);if(this.swayPhase+=e*(4.2+a*.4),this.mode!=="inside"&&(d.x+=Math.cos(this.yaw)*Math.sin(this.swayPhase)*m,d.z+=-Math.sin(this.yaw)*Math.sin(this.swayPhase)*m,d.y+=Math.sin(this.swayPhase*2)*m*.45),this.intro>0&&this.mode==="none"){this.intro=Math.max(0,this.intro-e*.7);const p=this.intro*this.intro;d.lerp(new D(2,6.8,84),p)}else this.intro=0;if(this.mode!=="inside"){const p=Math.max(Ht(d.x,d.z),Sd)+.6;d.y<p&&(d.y=p)}this.camera.position.lerp(d,Uo(this.mode==="inside"?14:7.5,e)),this.mode==="inside"&&this.room&&this.clampInRoom(this.camera.position,t);const v=this.camera.position;if(this.mode!=="inside"){const p=Math.max(Ht(v.x,v.z),Sd)+.6;v.y<p&&(v.y=p)}const g=this.pivot.clone().add(new D(0,this.lookHeight-l*.4,0));this.lookPoint.lerp(g,Uo(14,e)),this.camera.lookAt(this.lookPoint)}clampInRoom(e,t){const n=this.room,s=e.x-n.x,r=e.z-n.z,o=Math.cos(n.yaw),a=Math.sin(n.yaw);let c=s*o-r*a,l=s*a+r*o;const h=.55;c=vt.clamp(c,-n.w/2+h,n.w/2-h),l=vt.clamp(l,-n.d/2+h,n.d/2-h),e.x=n.x+c*o+l*a,e.z=n.z-c*a+l*o,e.y=vt.clamp(e.y,n.floor+1.05,n.floor+n.h-.45);const u=Math.hypot(e.x-t.x,e.z-t.z);if(u<1.15){const f=1.15/Math.max(u,.05);e.x=t.x+(e.x-t.x)*f,e.z=t.z+(e.z-t.z)*f;const d=e.x-n.x,m=e.z-n.z;c=d*o-m*a,l=d*a+m*o,c=vt.clamp(c,-n.w/2+h,n.w/2-h),l=vt.clamp(l,-n.d/2+h,n.d/2-h),e.x=n.x+c*o+l*a,e.z=n.z-c*a+l*o}}}const pt={x:22,z:8,w:13,d:9,floor:.88,doorX:-3.6,doorW:2.55},wt={x:8,z:-18,innerR:2.28,outerR:3.05,floor:1.4};function ph(i,e){return{x:i-pt.x,z:e-pt.z}}function Hw(i,e){const t=ph(i,e);return Math.abs(t.x)<pt.w/2-.35&&Math.abs(t.z)<pt.d/2-.32}function Gw(i,e){const t=ph(i,e);return Math.abs(t.x-pt.doorX)<pt.doorW*.7&&t.z>pt.d/2-.85&&t.z<pt.d/2+2.1}function Vw(i,e,t,n){const s=ph(t,n),r=pt.w/2,o=pt.d/2,a=.34;if(Math.abs(s.x)>r+.45||Math.abs(s.z)>o+1.8)return{x:t,z:n};const c=Math.abs(s.x-pt.doorX)<pt.doorW/2-.08&&s.z>o-.7;let l=s.x,h=s.z;return s.x>r-a&&s.x<r+.4&&(l=r-a),s.x<-r+a&&s.x>-r-.4&&(l=-r+a),s.z<-o+a&&s.z>-o-.45&&(h=-o+a),!c&&s.z>o-a&&s.z<o+.45&&Math.abs(s.x)<r&&(h=o-a),{x:pt.x+l,z:pt.z+h}}function Ww(){return{x:pt.x+pt.doorX,y:pt.floor,z:pt.z+pt.d/2+1.45,yaw:Math.PI}}function Xw(){return{x:pt.x+pt.doorX,y:pt.floor,z:pt.z+1.1,yaw:Math.PI}}function mh(i,e){return{x:i-wt.x,z:e-wt.z}}function qw(i,e){const t=mh(i,e);return Math.hypot(t.x,t.z)<wt.innerR-.18}function Yw(i,e){const t=mh(i,e),n=wt.outerR+.15;return Math.abs(t.x)<1.05&&t.z>n-1.1&&t.z<n+1.9}function jw(i,e,t,n){const s=mh(t,n),r=Math.hypot(s.x,s.z);if(r>wt.outerR+1.6)return{x:t,z:n};const o=Math.atan2(s.x,s.z),a=Math.abs(o)<.42&&s.z>0;if(r<wt.innerR-.22||a)return{x:t,z:n};if(r<wt.innerR+.55||r<wt.outerR+.35&&!a){const l=(r>wt.innerR?wt.outerR+.4:wt.innerR-.24)/Math.max(r,1e-4);return{x:wt.x+s.x*l,z:wt.z+s.z*l}}return{x:t,z:n}}function Zw(){return{x:wt.x,y:wt.floor,z:wt.z+wt.outerR+1.55,yaw:Math.PI}}function Kw(){return{x:wt.x,y:wt.floor,z:wt.z+.85,yaw:Math.PI}}function Jw(i){const e=qi(i),t=-.35;return{x:e.x+Math.sin(e.yaw)*t,y:rh(i),z:e.z+Math.cos(e.yaw)*t,yaw:e.yaw+Math.PI}}function Cp(i){const e=Br(i);return{x:e.x+Math.sin(e.yaw+Math.PI)*.15,y:rh(i),z:e.z+Math.cos(e.yaw+Math.PI)*.15,yaw:e.yaw+Math.PI}}function bd(i,e,t,n,s=!1){if(Hw(e,t))return{id:"warehouse",kind:"warehouse",label:"the cannery"};if(qw(e,t))return{id:"lighthouse",kind:"lighthouse",label:"the lighthouse"};for(let r=1;r<i.length;r++)if(!(n(r)<=.12)&&r_(i[r],e,t,s))return{id:`house-${r}`,kind:"house",slot:r,label:"home"};return null}function Td(i,e,t,n){if(Gw(e,t))return{id:"warehouse",kind:"warehouse",label:"the cannery"};if(Yw(e,t))return{id:"lighthouse",kind:"lighthouse",label:"the lighthouse"};for(let s=1;s<i.length;s++)if(!(n(s)<=.12)&&o_(i[s],e,t))return{id:`house-${s}`,kind:"house",slot:s,label:"home"};return null}function Lp(i,e){return i.kind==="warehouse"?pt.floor:i.kind==="lighthouse"?wt.floor:i.slot!=null?rh(e[i.slot]):.9}function Ed(i,e){return i.kind==="warehouse"?Xw():i.kind==="lighthouse"?Kw():Jw(e[i.slot??0])}function _c(i,e){return i.kind==="warehouse"?Ww():i.kind==="lighthouse"?Zw():Cp(e[i.slot??0])}function Qw(i,e,t,n,s,r,o=null){let a=n,c=s;const l=Vw(e,t,a,c);a=l.x,c=l.z;const h=jw(e,t,a,c);a=h.x,c=h.z;for(let u=1;u<i.length;u++){if(r(u)<=.4)continue;const f=a_(i[u],e,t,a,c,o===u);a=f.x,c=f.z}return{x:a,z:c}}const _r=.05,No=.8,$w=22,eS=7.5;function wc(i){const e=Math.PI*2;return((i+Math.PI)%e+e)%e-Math.PI}function Ci(i,e){return 1-Math.exp(-i*e)}class tS{constructor(e){this.slots=e;const t=Br(e[1]??e[0]);this.position.set(t.x,1.2,t.z),this.yaw=t.yaw}position=new D;velocity=new D;yaw=0;grounded=!0;moving=!1;verticalVel=0;wadeDepth=0;landImpact=0;mode="none";vehicleSlot=0;inside=!1;place=null;stay=null;onGround=0;applyPose(e,t,n,s){this.position.set(e,t,n),this.yaw=s,this.velocity.set(0,0,0)}setStay(e){this.stay=e,this.place=e,this.inside=!!e}heightAt(e,t){let n=-1.6;for(const s of this.slots){const r=zr(e,t,s.x,s.z,s.radius,s.seed);r>n&&(n=r)}return n}groundAt(e,t,n){let s=-1.6;return this.slots.forEach((r,o)=>{if(n(o)<.45)return;const a=zr(e,t,r.x,r.z,r.radius,r.seed);a>s&&(s=a)}),n(0)>.45&&e>-4.2&&e<4.2&&t>24&&t<52&&(s=Math.max(s,.84)),s}update(e,t,n,s){if(e=Math.min(e,.05),this.mode==="heli"){this.updateHeli(e,t,n,s);return}if(this.mode==="boat"){this.updateBoat(e,t,n,s);return}const r=t.axis(),o=new D(r.x,0,r.z);o.lengthSq()>0&&o.normalize(),o.applyMatrix4(new tt().makeRotationY(n)),this.moving=o.lengthSq()>.01;const a=this.position.x,c=this.position.z,l=this.groundAt(a,c,s);this.wadeDepth=Math.max(0,Math.min(_r-l,No));const h=1-.62*(this.wadeDepth/No);let u=(r.sprint?9.2:5.4)*h;if(this.moving){const b=this.groundAt(a+o.x*1.1,c+o.z*1.1,s),C=(Math.max(b,_r)-Math.max(l,_r))/1.1;C>0?u/=1+C*.55:u*=Math.min(1.12,1-C*.08)}const f=this.grounded?this.moving?11:9:this.moving?3.4:1.4,d=Ci(f,e);this.velocity.x+=(o.x*u-this.velocity.x)*d,this.velocity.z+=(o.z*u-this.velocity.z)*d,this.grounded&&t.consumeJump()&&!this.stay&&(this.velocity.y=eS,this.grounded=!1,this.onGround=0),this.velocity.y=Math.max(this.velocity.y-$w*e,-30);const m=(b,C)=>this.groundAt(b,C,s)>_r-No;let v=a+this.velocity.x*e,g=c+this.velocity.z*e;const p=this.slideHomes(a,c,v,g,s);v=p.x,g=p.z,m(v,g)||this.placeHere(v,g,s)?(this.position.x=v,this.position.z=g):m(v,c)||this.placeHere(v,c,s)?(this.position.x=v,this.velocity.z=0):m(a,g)||this.placeHere(a,g,s)?(this.position.z=g,this.velocity.x=0):(this.velocity.x=0,this.velocity.z=0),this.position.y+=this.velocity.y*e;const M=bd(this.slots,this.position.x,this.position.z,s);this.stay?(this.place=this.stay,this.inside=!0):(this.place=M,this.inside=!1);const y=this.place?Lp(this.place,this.slots):this.groundAt(this.position.x,this.position.z,s),x=Math.max(y,_r-No);if(this.stay)this.position.y=x,this.velocity.y=0,this.grounded=!0,this.onGround=.2,this.verticalVel=0;else if(this.position.y<=x+.02&&this.velocity.y<=0){if(!this.grounded&&this.velocity.y<-8){this.landImpact=Math.min(1,(-this.velocity.y-8)/10);const b=1-this.landImpact*.45;this.velocity.x*=b,this.velocity.z*=b}this.position.y=x,this.velocity.y=0,this.grounded=!0,this.onGround=.12}else this.onGround>0&&this.velocity.y<=0&&this.position.y-x<.45?(this.position.y=x,this.velocity.y=0,this.grounded=!0,this.onGround=.12):(this.onGround-=e,this.grounded=this.onGround>0,this.landImpact=Math.max(0,this.landImpact-e*3));if(this.verticalVel=this.velocity.y,Math.hypot(this.velocity.x,this.velocity.z)>.5){const b=Math.atan2(this.velocity.x,this.velocity.z);this.yaw+=wc(b-this.yaw)*Ci(12,e)}}placeHere(e,t,n){return!!bd(this.slots,e,t,n)}slideHomes(e,t,n,s,r){const o=this.stay?.kind==="house"?this.stay.slot??null:null;return Qw(this.slots,e,t,n,s,r,o)}updateBoat(e,t,n,s){const r=t.axis(),o=new D(r.x,0,r.z);o.lengthSq()>0&&o.normalize(),o.applyMatrix4(new tt().makeRotationY(n)),this.moving=o.lengthSq()>.01;const a=r.sprint?16:11,c=Ci(this.moving?5:3.2,e);this.velocity.x+=(o.x*a-this.velocity.x)*c,this.velocity.z+=(o.z*a-this.velocity.z)*c,this.velocity.y=0;const l=this.position.x+this.velocity.x*e,h=this.position.z+this.velocity.z*e,u=this.groundAt(l,h,s),f=this.groundAt(this.position.x,this.position.z,s);u<1.05||f>=1.05?(this.position.x=l,this.position.z=h):(this.velocity.x*=.45,this.velocity.z*=.45);const d=Math.sin(this.position.x*.21+this.position.z*.17+performance.now()*.0016);if(this.position.y=.34+d*.09,this.velocity.y=Math.cos(this.position.x*.21+this.position.z*.17+performance.now()*.0016)*.14,this.grounded=!0,this.setStay(null),this.wadeDepth=0,Math.hypot(this.velocity.x,this.velocity.z)>.4){const v=Math.atan2(this.velocity.x,this.velocity.z);this.yaw+=wc(v-this.yaw)*Ci(6,e)}}updateHeli(e,t,n,s){const r=t.axis(),o=new D(r.x,0,r.z);o.lengthSq()>0&&o.normalize(),o.applyMatrix4(new tt().makeRotationY(n)),this.moving=o.lengthSq()>.01||Math.abs(t.vertical())>.1;const a=r.sprint?24:16,c=Ci(4.2,e);this.velocity.x+=(o.x*a-this.velocity.x)*c,this.velocity.z+=(o.z*a-this.velocity.z)*c;const l=t.vertical();this.velocity.y+=(l*9-this.velocity.y)*Ci(3.6,e),this.position.x+=this.velocity.x*e,this.position.z+=this.velocity.z*e,this.position.y+=this.velocity.y*e;const h=this.groundAt(this.position.x,this.position.z,s)+.85;if(this.position.y<h?(this.position.y=h,this.velocity.y<0&&(this.velocity.y=0),this.grounded=Math.hypot(this.velocity.x,this.velocity.z)<2.2):this.grounded=!1,this.position.y>46&&(this.position.y=46,this.velocity.y=Math.min(0,this.velocity.y)),this.setStay(null),this.wadeDepth=0,Math.hypot(this.velocity.x,this.velocity.z)>.6){const f=Math.atan2(this.velocity.x,this.velocity.z);this.yaw+=wc(f-this.yaw)*Ci(5,e)}}}const Dp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ki{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const nS=new Vl(-1,1,1,-1,0,1);class iS extends bt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}}const sS=new iS;class Ma{constructor(e){this._mesh=new ee(sS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,nS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ip extends Ki{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof _t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mi.clone(e.uniforms),this.material=new _t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ma(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ad extends Ki{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class rS extends Ki{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class oS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ip(Dp),this.copyPass.material.blending=Yn,this.clock=new ZM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ad!==void 0&&(o instanceof Ad?n=!0:o instanceof rS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class aS extends Ki{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const cS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ys extends Ki{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new rn(r,o,{type:wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new rn(r,o,{type:wn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new rn(r,o,{type:wn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=cS;this.highPassUniforms=mi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _t({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Dp;this.copyUniforms=mi.clone(h.uniforms),this.blendMaterial=new _t({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:jo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xe,this.oldClearAlpha=1,this.basic=new pi,this.fsQuad=new Ma(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Ys.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Ys.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new _t({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new _t({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ys.BlurDirectionX=new ce(1,0);Ys.BlurDirectionY=new ce(0,1);const lS={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class hS extends Ki{constructor(){super();const e=lS;this.uniforms=mi.clone(e.uniforms),this.material=new zM({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ma(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Gd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Il?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Oo={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new ce(1/1024,1/512)}},vertexShader:`

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

		}`},Fo={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new ce(1/1024,1/512)}},vertexShader:`

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

		}`},Sc={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new ce(1/1024,1/512)}},vertexShader:`

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

		}`};class uS extends Ki{constructor(e,t){super(),this.edgesRT=new rn(e,t,{depthBuffer:!1,type:wn}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new rn(e,t,{depthBuffer:!1,type:wn}),this.weightsRT.texture.name="SMAAPass.weights";const n=this,s=new Image;s.src=this.getAreaTexture(),s.onload=function(){n.areaTexture.needsUpdate=!0},this.areaTexture=new Dt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=s,this.areaTexture.minFilter=qt,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const r=new Image;r.src=this.getSearchTexture(),r.onload=function(){n.searchTexture.needsUpdate=!0},this.searchTexture=new Dt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=r,this.searchTexture.magFilter=jt,this.searchTexture.minFilter=jt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=mi.clone(Oo.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new _t({defines:Object.assign({},Oo.defines),uniforms:this.uniformsEdges,vertexShader:Oo.vertexShader,fragmentShader:Oo.fragmentShader}),this.uniformsWeights=mi.clone(Fo.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new _t({defines:Object.assign({},Fo.defines),uniforms:this.uniformsWeights,vertexShader:Fo.vertexShader,fragmentShader:Fo.fragmentShader}),this.uniformsBlend=mi.clone(Sc.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new _t({uniforms:this.uniformsBlend,vertexShader:Sc.vertexShader,fragmentShader:Sc.fragmentShader}),this.fsQuad=new Ma(null)}render(e,t,n){this.uniformsEdges.tDiffuse.value=n.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=n.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const Up=`
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
`,Np=`
vec3 duskRamp(float h, vec3 horizon, vec3 rose, vec3 zenith) {
  vec3 zenithDeep = zenith * vec3(0.30, 0.32, 0.52);
  vec3 mid = mix(rose, zenith, 0.38);
  vec3 col = mix(horizon, rose, smoothstep(-0.02, 0.11, h));
  col = mix(col, mid, smoothstep(0.07, 0.26, h));
  col = mix(col, zenith, smoothstep(0.20, 0.52, h));
  col = mix(col, zenithDeep, smoothstep(0.48, 0.96, h));
  return col;
}
`,dS=`
varying vec3 vWorld;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
  gl_Position.z = gl_Position.w;
}
`,fS=`
precision highp float;
uniform float uTime;
uniform vec3 uSunDir;
uniform vec3 uHorizon;
uniform vec3 uRose;
uniform vec3 uZenith;
uniform vec3 uNadir;
uniform vec3 uSunColor;
varying vec3 vWorld;
${Up}
${Np}

void main() {
  vec3 dir = normalize(vWorld);
  float h = dir.y;
  vec3 sunDir = normalize(uSunDir);
  float mu = clamp(dot(dir, sunDir), -1.0, 1.0);
  vec2 az = normalize(dir.xz + vec2(1e-4, 0.0));
  vec2 sunAzDir = normalize(sunDir.xz);
  float sunAz = dot(az, sunAzDir); // 1 facing the sun, -1 opposite

  // --- multi-stop dusk: gold horizon -> rose -> periwinkle -> deep indigo ---
  vec3 col = duskRamp(h, uHorizon, uRose, uZenith);

  // warm wash hugging the horizon on the sun side — peach, not fireball
  float warmSide = smoothstep(-0.32, 1.0, sunAz);
  float horizonBand = pow(saturate(1.0 - abs(h) * 2.05), 2.8);
  vec3 gold = vec3(1.02, 0.56, 0.26);
  vec3 amber = vec3(1.06, 0.46, 0.16);
  col = mix(col, mix(gold, amber, saturate(sunAz)), warmSide * horizonBand * 0.48);

  // opposite the sun the sky sits cooler and a touch darker
  float coolSide = 1.0 - smoothstep(-0.85, 0.22, sunAz);
  col *= 1.0 - coolSide * 0.16 * smoothstep(-0.04, 0.42, h);
  col = mix(col, uZenith * 0.50, coolSide * horizonBand * 0.30);

  // atmospheric haze so the sea line melts into the sky (matches 30–180 fog)
  float haze = exp(-abs(h) * 6.2);
  col = mix(col, mix(uHorizon, gold, warmSide * 0.38), haze * 0.46);

  // faint sun pillar along the azimuth
  float pillar = pow(saturate(sunAz), 22.0) * pow(saturate(1.0 - abs(h) * 3.1), 2.0);
  col += gold * pillar * 0.16;

  // below the horizon: dusk sea tone, catching a little gold
  vec3 sea = mix(uNadir, gold * 0.16, warmSide * 0.32);
  col = mix(sea, col, smoothstep(-0.28, 0.018, h));

  // --- sun: hot HDR core + chromatic corona + Mie glow (bloom source) ---
  float disc = smoothstep(0.99905, 0.99962, mu);
  float core = smoothstep(0.99958, 0.99988, mu);
  float coronaR = pow(saturate(mu), 70.0);
  float coronaG = pow(saturate(mu), 130.0);
  float coronaB = pow(saturate(mu), 210.0);
  float g = 0.78;
  float g2 = g * g;
  float mie = (1.0 - g2) / max(pow(1.0 + g2 - 2.0 * g * mu, 1.5), 1e-4);
  float mieWide = pow(saturate(mu), 2.4);

  col += uSunColor * (core * 8.5 + disc * 3.4);
  col += vec3(coronaR * 0.95, coronaG * 0.42, coronaB * 0.12);
  col += uSunColor * mie * 0.036 * vec3(1.05, 0.64, 0.30);
  col += gold * mieWide * 0.20 * (0.40 + 0.60 * horizonBand);

  // --- big soft stylized clouds: domain-warped fbm bands, lit from the sun ---
  float cloudA = 0.0;
  if (h > 0.015) {
    vec2 cuv = dir.xz / (h + 0.22);
    vec2 p = cuv * 0.55 + vec2(uTime * 0.0055, uTime * 0.0021);
    vec2 q = vec2(fbm(p * 0.85), fbm(p * 0.85 + vec2(4.7, 9.2)));
    vec2 wp = p * vec2(1.35, 1.9) + (q - 0.5) * 1.7;
    float d = fbm(wp);
    float band = smoothstep(0.03, 0.15, h) * (1.0 - smoothstep(0.30, 0.78, h));
    float cov = smoothstep(0.51, 0.74, d) * band;
    if (cov > 0.001) {
      float dSun = fbm(wp + sunAzDir * 0.30);
      float lit = saturate((d - dSun) * 3.6 + 0.32);
      vec3 shade = vec3(0.125, 0.112, 0.33);
      vec3 cream = vec3(0.94, 0.60, 0.42);
      vec3 hot = vec3(1.22, 0.56, 0.24);
      vec3 cloudCol = mix(shade, mix(cream, hot, warmSide * 0.72), lit);
      cloudA = cov * 0.80;
      col = mix(col, cloudCol, cloudA);
    }
  }

  // --- faint early stars near the zenith, twinkling, hidden by clouds ---
  vec2 sp = dir.xz / (1.0 + h) * 42.0;
  vec2 cell = floor(sp);
  float hs = hash12(cell);
  vec2 off = vec2(hash12(cell + 7.1), hash12(cell + 3.7)) - 0.5;
  float star = (1.0 - smoothstep(0.0, 0.16, length(fract(sp) - 0.5 + off * 0.55))) * step(0.93, hs);
  float twinkle = 0.55 + 0.45 * sin(uTime * (1.2 + hs * 2.6) + hs * 41.0);
  float starMask = smoothstep(0.28, 0.68, h) * (1.0 - warmSide * 0.55) * (1.0 - cloudA);
  col += vec3(0.72, 0.84, 1.18) * star * twinkle * starMask * 0.72;

  gl_FragColor = vec4(col, 1.0);
}
`,Ns=new D(-.45,.22,-.82).normalize(),Op=16762010,Fp=15634090,zp=6056898,pS=1190452,gh=16760952,Bp=15709856,kp=72,Hp=280;class mS{mesh;sunDir=Ns;sunColor=new xe(gh);mat;constructor(){this.mat=new _t({vertexShader:dS,fragmentShader:fS,side:Yt,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uSunDir:{value:Ns},uHorizon:{value:new xe(Op)},uRose:{value:new xe(Fp)},uZenith:{value:new xe(zp)},uNadir:{value:new xe(pS)},uSunColor:{value:this.sunColor}}}),this.mesh=new ee(new et(480,48,32),this.mat),this.mesh.frustumCulled=!1}update(e){this.mat.uniforms.uTime.value=e}}const gS={uniforms:{tDiffuse:{value:null},uLift:{value:new D(-.008,-.006,-.003)},uGain:{value:new D(1.025,1,.975)},uContrast:{value:1.06},uSat:{value:1.08},uCool:{value:new D(.94,.97,1.05)},uWarm:{value:new D(1.04,1.01,.95)},uVignette:{value:.16},uGrain:{value:.005},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec3 uLift;
    uniform vec3 uGain;
    uniform float uContrast;
    uniform float uSat;
    uniform vec3 uCool;
    uniform vec3 uWarm;
    uniform float uVignette;
    uniform float uGrain;
    uniform float uTime;
    varying vec2 vUv;
    void main() {
      vec4 tex = texture2D(tDiffuse, vUv);
      vec3 c = tex.rgb;
      // gain + lift: warmer highlights, slightly crushed cool shadows
      c = max(c * uGain + uLift, vec3(0.0));
      // punchier S-curve pivoted at linear mid grey
      c = 0.18 * pow(c / 0.18, vec3(uContrast));
      // split toning: cooler shadows, warmer highlights
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      float t = smoothstep(0.025, 0.58, l / (1.0 + l) * 2.0);
      c *= mix(uCool, uWarm, t);
      // saturation
      float g = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = max(mix(vec3(g), c, uSat), vec3(0.0));
      // warm-dark vignette so the falloff stays dusk, not grey
      float d = distance(vUv, vec2(0.5));
      float vig = smoothstep(0.38, 0.98, d) * uVignette;
      c *= mix(vec3(1.0), vec3(0.90, 0.84, 0.78), vig);
      // barely-visible grain
      float grain = fract(sin(dot(vUv * vec2(1245.0, 891.0) + fract(uTime) * 7.31, vec2(12.9898, 78.233))) * 43758.5453);
      c += (grain - 0.5) * uGrain;
      gl_FragColor = vec4(c, tex.a);
    }
  `};class vS{renderer;composer;scene=new nM;camera=new Jt(50,1,.12,560);grade;constructor(e,t){if(this.renderer=new tM({canvas:e,antialias:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(t.pixelRatio),this.renderer.setSize(innerWidth,innerHeight),this.renderer.outputColorSpace=Wt,this.renderer.toneMapping=Il,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=kd,this.scene.fog=new Xl(Bp,kp,Hp),this.composer=new oS(this.renderer),this.composer.addPass(new aS(this.scene,this.camera)),t.bloom){const n=new Ys(new ce(innerWidth,innerHeight),.3,.42,.85);this.composer.addPass(n)}this.grade=new Ip(gS),this.composer.addPass(this.grade),this.composer.addPass(new hS),t.smaa&&this.composer.addPass(new uS(innerWidth,innerHeight)),addEventListener("resize",()=>this.resize()),this.resize()}resize(){const e=innerWidth,t=innerHeight;this.camera.aspect=e/Math.max(t,1),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t)}render(e){this.grade.uniforms.uTime.value=e,this.composer.render()}}const Rd=["amber","dusk","tide","coral","salt","drift","pearl","wharf","gull","kelp","fog","ember"],Pd=["otter","heron","skiff","buoy","lantern","anchor","sailor","pilot","keeper","courier","swift","wren"],xS=12e3,yS=8;function MS(){const i=`${Rd[Math.floor(Math.random()*Rd.length)]}-${Pd[Math.floor(Math.random()*Pd.length)]}`;try{const e=sessionStorage.getItem("tidelight-name");if(e)return e;sessionStorage.setItem("tidelight-name",i)}catch{}return i}function _S(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return`hsl(${e%360} 62% 72%)`}class wS{hud=document.getElementById("hud");peerCount=document.getElementById("peer-count");status=document.getElementById("compute-status");meter=document.getElementById("compute-meter");list=document.getElementById("worker-list");toast=document.getElementById("letter-toast");hint=document.getElementById("hint");prompt=document.getElementById("prompt");fps=document.getElementById("fps");donateBtn=document.getElementById("donate-btn");input=document.getElementById("chat-input");colors=new Map;frames=0;lastFps=performance.now();toastTimer=0;onEnter=()=>{};onDonateToggle=()=>{};onWave=()=>{};onChat=()=>{};log=document.getElementById("chat-log");constructor(){const e=localStorage.getItem("tidelight-donate")!=="0";setTimeout(()=>this.onEnter(MS(),e),0),document.getElementById("wave-btn").addEventListener("click",()=>this.onWave()),this.donateBtn.addEventListener("click",()=>this.onDonateToggle());const t=document.getElementById("players");t?.addEventListener("click",()=>t.classList.toggle("is-open"));const n=document.getElementById("touch"),s=document.getElementById("look-pad"),r=()=>{n?.classList.remove("hidden"),s?.classList.remove("hidden"),s?.setAttribute("aria-hidden","false"),document.body.classList.add("is-touch")};matchMedia("(pointer: coarse), (max-width: 820px)").matches&&r(),addEventListener("touchstart",r,{once:!0,passive:!0}),document.getElementById("chat-form")?.addEventListener("submit",a=>{a.preventDefault();const c=this.input.value.trim();this.input.value="",this.input.blur(),c&&this.onChat(c)}),this.input.addEventListener("keydown",a=>{a.key==="Escape"&&(a.preventDefault(),this.input.value="",this.input.blur())}),addEventListener("keydown",a=>{if(a.key!=="Enter")return;const c=document.activeElement;c&&(c.tagName==="INPUT"||c.tagName==="TEXTAREA"||c.isContentEditable)||(a.preventDefault(),document.pointerLockElement&&document.exitPointerLock(),this.input.focus())})}hideBoot(){this.hud.classList.remove("hidden"),this.showHint()}showHint(){let e=!1;try{e=localStorage.getItem("tidelight-hinted")==="1",localStorage.setItem("tidelight-hinted","1")}catch{}const t=matchMedia("(pointer: coarse), (max-width: 820px)").matches;this.hint.textContent=t?"stick walk · drag look · use to enter your house or board · each visitor raises a new island":"WASD walk · mouse look · E enter home / board · Enter chat · each visitor raises a new island",this.hint.classList.toggle("hint-toast--small",e),this.hint.classList.remove("hidden"),window.setTimeout(()=>this.hint.classList.add("is-fading"),e?4500:8e3),window.setTimeout(()=>this.hint.classList.add("hidden"),e?5800:9300)}pushChat(e,t,n){const s=document.createElement("li"),r=n??this.colors.get(e)??_S(e);s.innerHTML=`<b style="color:${r}">${bc(e)}</b>${bc(t)}`,this.appendChat(s)}pushSystem(e){const t=document.createElement("li");t.className="sys",t.textContent=e,this.appendChat(t)}appendChat(e){for(this.log.appendChild(e),window.setTimeout(()=>e.classList.add("is-old"),xS);this.log.children.length>yS;)this.log.firstElementChild?.remove();this.log.scrollTop=this.log.scrollHeight}setPrompt(e){if(!e){this.prompt.classList.add("hidden");return}this.prompt.textContent=e,this.prompt.classList.remove("hidden")}toastMsg(e){if(/reached the harbor|left the harbor|drifted away/.test(e)){this.pushSystem(e);return}this.toast.textContent=e,this.toast.classList.remove("hidden"),window.clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toast.classList.add("hidden"),2800)}sync(e,t,n,s){const r=e.peers.filter(o=>o.donate).length;for(const o of e.peers)this.colors.set(o.name,"#"+o.color.toString(16).padStart(6,"0"));this.peerCount.textContent=String(Math.max(1,e.peers.length)),this.status.textContent=n?`${r} machine${r===1?"":"s"} lighting islets`:t?"donating light":"compute off",this.meter.style.width=`${Math.min(100,12+r*14+s*4)}%`,this.list.innerHTML=e.peers.map(o=>`<li><span class="dot" style="background:#${o.color.toString(16).padStart(6,"0")}"></span><span class="who">${bc(o.name)}</span><span class="where">${o.donate?"home "+o.islandSlot:"looking"}</span></li>`).join(""),this.donateBtn.classList.toggle("is-on",t),this.donateBtn.setAttribute("aria-pressed",t?"true":"false"),this.donateBtn.title=t?"compute on — click to pause":"compute off — click to donate"}setTravel(e){document.getElementById("down-btn")?.classList.toggle("hidden",e!=="heli"),document.getElementById("up-btn")?.classList.toggle("hidden",e!=="heli"),document.getElementById("jump-btn")?.classList.toggle("hidden",e==="heli");const t=document.getElementById("use-btn");t&&(t.textContent=e==="none"?"use":"out")}setUseLabel(e){const t=document.getElementById("use-btn");t&&(t.textContent=e)}markFps(){this.frames++;const e=performance.now();if(e-this.lastFps>500){const t=Math.round(this.frames*1e3/(e-this.lastFps));this.fps.textContent=`${t} fps`,this.frames=0,this.lastFps=e}}}function bc(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}const Tc=new D(0,0,15);class SS{sun;fill;hemi;lighthouse;group=new Ve;constructor(e){this.hemi=new WM(7241928,4862502,.62),this.sun=new Bu(gh,1.38),this.sun.target.position.copy(Tc),this.sun.position.copy(Tc).addScaledVector(Ns,160),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(e.shadowMap,e.shadowMap);const t=this.sun.shadow.camera;t.near=30,t.far=300,t.left=-95,t.right=95,t.top=95,t.bottom=-95,t.updateProjectionMatrix(),this.sun.shadow.bias=-2e-4,this.sun.shadow.normalBias=.055,this.fill=new Bu(9086166,.34),this.fill.position.copy(Tc).addScaledVector(Ns,-90),this.fill.position.y=Math.max(this.fill.position.y,32),this.lighthouse=new qM(16760954,9,140,.13,.65,1.3),this.lighthouse.position.set(8,18.5,-18),this.lighthouse.castShadow=!1;const n=new Et;n.position.set(40,2,10),this.lighthouse.target=n,this.group.add(this.hemi,this.sun,this.sun.target,this.fill,this.lighthouse,n)}update(e,t){const n=e*.22;if(this.lighthouse.target.position.set(Math.cos(n)*70,1.5,Math.sin(n)*70-18),this.lighthouse.target.updateMatrixWorld(),!t)return;this.sun.target.position.lerp(t,.08),this.sun.target.updateMatrixWorld(),this.sun.position.copy(this.sun.target.position).addScaledVector(Ns,160);const s=this.sun.shadow.camera;s.left=-42,s.right=42,s.top=42,s.bottom=-42,s.near=20,s.far=240,s.updateProjectionMatrix()}}const wr=Math.PI*2,Ms=240,Cd={x:8,z:-18},bS=`
uniform float uTime;
attribute float aTip;
attribute float iPhase;
varying float vLit;
varying float vFade;
void main() {
  float amp = 0.45 + 0.55 * smoothstep(-0.2, 0.4, sin(uTime * 0.37 + iPhase * 61.0));
  float flap = sin(uTime * (6.5 + iPhase * 2.5) + iPhase * 40.0) * amp;
  vec3 p = position;
  p.y += aTip * flap * 0.46;
  p.x -= p.x * aTip * abs(flap) * 0.22;
  vec4 wp = modelMatrix * instanceMatrix * vec4(p, 1.0);
  vec4 mv = viewMatrix * wp;
  vLit = flap;
  vFade = clamp(1.0 - (-mv.z - 70.0) / 120.0, 0.0, 1.0);
  gl_Position = projectionMatrix * mv;
}
`,TS=`
varying float vLit;
varying float vFade;
void main() {
  if (vFade < 0.02) discard;
  vec3 top = vec3(0.72, 0.74, 0.90);
  vec3 under = vec3(1.08, 0.82, 0.52);
  vec3 c = mix(top, under, clamp(0.52 + vLit * 0.55, 0.0, 1.0));
  gl_FragColor = vec4(c, vFade * 0.95);
}
`,ES=`
uniform float uTime;
attribute float aPhase;
attribute float aSize;
varying float vTw;
void main() {
  vec3 p = position;
  float t = uTime * 0.4 + aPhase * 6.2831;
  p.x += sin(t * 1.7 + aPhase * 12.0) * 0.7 + sin(t * 0.53) * 1.1;
  p.y += sin(t * 1.13 + aPhase * 9.0) * 0.5;
  p.z += cos(t * 1.41 + aPhase * 7.0) * 0.7 + cos(t * 0.61) * 1.1;
  float tw = 0.3 + 0.7 * pow(0.5 + 0.5 * sin(uTime * (1.6 + aPhase * 1.8) + aPhase * 50.0), 2.0);
  vTw = tw;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = min(aSize * (0.55 + tw) * (240.0 / max(-mv.z, 6.0)), 48.0);
  gl_Position = projectionMatrix * mv;
}
`,AS=`
varying float vTw;
void main() {
  vec2 q = gl_PointCoord - 0.5;
  float d = length(q) * 2.0;
  float a = smoothstep(1.0, 0.12, d);
  vec3 c = mix(vec3(1.05, 0.52, 0.14), vec3(1.45, 1.05, 0.55), smoothstep(0.62, 0.0, d));
  gl_FragColor = vec4(c * (0.7 + vTw * 1.35), a * vTw);
}
`,RS=`
uniform float uTime;
attribute float aPhase;
varying float vA;
varying float vLife;
void main() {
  float life = fract(uTime * 0.075 + aPhase);
  vec3 p = position;
  p.y += life * 7.5;
  p.x += life * 2.2 + sin(life * 7.0 + aPhase * 31.0) * 0.35 * life;
  p.z += life * 1.1 + cos(life * 6.0 + aPhase * 17.0) * 0.35 * life;
  vLife = life;
  vA = smoothstep(0.0, 0.12, life) * (1.0 - smoothstep(0.45, 1.0, life)) * 0.32;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = min((0.7 + life * 3.0) * (720.0 / max(-mv.z, 6.0)), 220.0);
  gl_Position = projectionMatrix * mv;
}
`,PS=`
varying float vA;
varying float vLife;
void main() {
  vec2 q = gl_PointCoord - 0.5;
  float d = length(q) * 2.0;
  float a = smoothstep(1.0, 0.25, d) * vA;
  if (a < 0.003) discard;
  vec3 c = mix(vec3(0.40, 0.36, 0.48), vec3(0.92, 0.76, 0.64), smoothstep(0.15, 0.9, vLife));
  gl_FragColor = vec4(c, a);
}
`,CS=`
uniform float uTime;
attribute vec3 aAnchor;
attribute float aPhase;
attribute float aTint;
varying float vShade;
varying float vTint;
void main() {
  float T = uTime * 0.55 + aPhase * 39.0;
  float flap = sin(uTime * 13.0 + aPhase * 50.0);
  vec3 p = position;
  p.y += abs(p.x) * flap * 2.2;
  p.x *= 0.75 + 0.25 * (1.0 - abs(flap));
  float yaw = aPhase * 6.2831 + T * 0.8;
  float cy = cos(yaw);
  float sy = sin(yaw);
  p = vec3(p.x * cy + p.z * sy, p.y, -p.x * sy + p.z * cy);
  vec3 off = vec3(
    sin(T * 0.9) * 1.2 + sin(T * 2.3) * 0.25,
    0.5 + sin(T * 1.4) * 0.4 + abs(flap) * 0.06,
    cos(T * 0.7) * 1.2 + cos(T * 1.9) * 0.25
  );
  vShade = 0.68 + 0.32 * abs(flap);
  vTint = aTint;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(aAnchor + off + p, 1.0);
}
`,LS=`
varying float vShade;
varying float vTint;
void main() {
  vec3 a = vec3(0.94, 0.56, 0.30);
  vec3 b = vec3(0.97, 0.62, 0.70);
  gl_FragColor = vec4(mix(a, b, vTint) * vShade, 1.0);
}
`,DS=`
uniform float uTime;
attribute float aPhase;
attribute float aSize;
varying float vA;
void main() {
  float c = fract(uTime * 0.45 + aPhase);
  vec3 p = position;
  p.y = 0.08 + c * (0.5 + aSize * 0.9);
  p.xz *= 1.0 + c * 0.02;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float fade = clamp(1.0 - (-mv.z - 80.0) / 180.0, 0.0, 1.0);
  vA = smoothstep(0.0, 0.1, c) * (1.0 - c) * 0.68 * fade;
  gl_PointSize = min(aSize * (0.6 + c) * (200.0 / max(-mv.z, 6.0)), 40.0);
  gl_Position = projectionMatrix * mv;
}
`,IS=`
varying float vA;
void main() {
  vec2 q = gl_PointCoord - 0.5;
  float d = length(q) * 2.0;
  float a = smoothstep(1.0, 0.2, d) * vA;
  if (a < 0.004) discard;
  gl_FragColor = vec4(mix(vec3(0.96, 0.88, 0.76), vec3(1.0, 0.97, 0.90), 1.0 - d), a);
}
`;function US(i){const e=new bt,t=new Float32Array([0,0,.42,0,0,-.16,-.62,.06,-.08,0,0,.42,.62,.06,-.08,0,0,-.16]),n=new Float32Array([0,0,1,0,1,0]);e.setAttribute("position",new xt(t,3)),e.setAttribute("aTip",new xt(n,1));const s=new Float32Array(i);for(let r=0;r<i;r++)s[r]=Math.random();return e.setAttribute("iPhase",new Ls(s,1)),e}const _s=()=>{};class NS{gulls;spray;uTime={value:0};dummy=new Et;flock;extraFlock;flockN;ang;rad;spd;hgt;scl;cenX;cenZ;extraPrev=new Float32Array(Ms*3);extraYaw=new Float32Array(Ms);extraRoll=new Float32Array(Ms);extraLevel=0;constructor(e){this.gulls=new Ve,this.dummy.rotation.order="YXZ",this.flockN=Math.min(e.particles,96);const t=US(Ms),n=new _t({uniforms:{uTime:this.uTime},vertexShader:bS,fragmentShader:TS,transparent:!0,side:Lt});this.flock=new Ds(t,n,this.flockN),this.flock.instanceMatrix.setUsage(Lh),this.flock.frustumCulled=!1,this.flock.raycast=_s,this.extraFlock=new Ds(t,n,Ms),this.extraFlock.instanceMatrix.setUsage(Lh),this.extraFlock.frustumCulled=!1,this.extraFlock.raycast=_s,this.extraFlock.count=0,this.gulls.add(this.flock,this.extraFlock),this.ang=new Float32Array(this.flockN),this.rad=new Float32Array(this.flockN),this.spd=new Float32Array(this.flockN),this.hgt=new Float32Array(this.flockN),this.scl=new Float32Array(this.flockN),this.cenX=new Float32Array(this.flockN),this.cenZ=new Float32Array(this.flockN);for(let O=0;O<this.flockN;O++){this.ang[O]=Math.random()*wr,this.scl[O]=.8+Math.random()*.5;const A=O%10<7,L=A?10+Math.random()*16:30+Math.random()*18;this.rad[O]=L,this.cenX[O]=A?Cd.x:2,this.cenZ[O]=A?Cd.z:2,this.hgt[O]=A?13+Math.random()*7:10+Math.random()*6;const N=5.5+Math.random()*3.5;this.spd[O]=N/L*(A||Math.random()<.5?1:-1)}const s=[[-3.6,3.25,30],[3.6,3.25,34],[18,2.75,4],[-12,2.95,10],[8,2.75,-10]],r=[[12,-8],[16,-14],[-10,-16],[14,18],[8,14],[-6,16],[10,22],[-14,8],[18,8],[-16,20]];for(const[O,A]of r){const L=Ht(O,A);L>=.4&&s.push([O,L+2.1,A])}const o=Math.round(e.particles*.55),a=new Float32Array(o*3),c=new Float32Array(o),l=new Float32Array(o);for(let O=0;O<o;O++){const[A,L,N]=s[O%s.length],z=Math.random()*wr,F=.4+Math.random()*1.9;a[O*3]=A+Math.cos(z)*F,a[O*3+1]=L+(Math.random()-.4)*1.4,a[O*3+2]=N+Math.sin(z)*F,c[O]=Math.random(),l[O]=.5+Math.random()*.6}const h=new bt;h.setAttribute("position",new xt(a,3)),h.setAttribute("aPhase",new xt(c,1)),h.setAttribute("aSize",new xt(l,1));const u=new Ja(h,new _t({uniforms:{uTime:this.uTime},vertexShader:ES,fragmentShader:AS,transparent:!0,depthWrite:!1,blending:jo}));u.frustumCulled=!1,u.raycast=_s,this.gulls.add(u);const f=26,d=new Float32Array(f*3),m=new Float32Array(f);for(let O=0;O<f;O++)d[O*3]=26.5+(Math.random()-.5)*.5,d[O*3+1]=6.8,d[O*3+2]=10.4+(Math.random()-.5)*.5,m[O]=O/f;const v=new bt;v.setAttribute("position",new xt(d,3)),v.setAttribute("aPhase",new xt(m,1));const g=new Ja(v,new _t({uniforms:{uTime:this.uTime},vertexShader:RS,fragmentShader:PS,transparent:!0,depthWrite:!1}));g.frustumCulled=!1,g.raycast=_s,this.gulls.add(g);const p=e.particles>=160?14:8,M=new Pn(.3,.22,2,1);M.rotateX(-Math.PI/2);const y=new Float32Array(p*3),x=new Float32Array(p),R=new Float32Array(p),b=[[8,14],[-6,16],[10,22],[-5.2,24],[3,26],[14,18],[6,-12],[-14,8]];for(let O=0;O<p;O++){const[A,L]=b[O%b.length],N=Ht(A,L);y[O*3]=A+(Math.random()-.5)*2,y[O*3+1]=(N>=.4?N:.7)+.9,y[O*3+2]=L+(Math.random()-.5)*2,x[O]=Math.random(),R[O]=Math.random()}M.setAttribute("aAnchor",new Ls(y,3)),M.setAttribute("aPhase",new Ls(x,1)),M.setAttribute("aTint",new Ls(R,1));const C=new Ds(M,new _t({uniforms:{uTime:this.uTime},vertexShader:CS,fragmentShader:LS,side:Lt}),p);C.frustumCulled=!1,C.raycast=_s,this.gulls.add(C);const E=160,w=new Float32Array(E*3),_=new Float32Array(E),I=new Float32Array(E);for(let O=0;O<E;O++){const A=O/E*wr+Math.random()*.06,L=43.5+(Math.random()-.5)*4;w[O*3]=Math.cos(A)*L,w[O*3+1]=.1,w[O*3+2]=Math.sin(A)*L,_[O]=Math.random(),I[O]=.6+Math.random()*.7}const k=new bt;k.setAttribute("position",new xt(w,3)),k.setAttribute("aPhase",new xt(_,1)),k.setAttribute("aSize",new xt(I,1)),this.spray=new Ja(k,new _t({uniforms:{uTime:this.uTime},vertexShader:DS,fragmentShader:IS,transparent:!0,depthWrite:!1})),this.spray.frustumCulled=!1,this.spray.raycast=_s}applyFlock(e){const t=Math.min(Math.floor(e.length/3),Ms),n=Math.min(t,60+this.extraLevel*90),s=this.dummy;for(let r=0;r<n;r++){const o=r*3,a=e[o],c=e[o+1],l=e[o+2],h=a-this.extraPrev[o],u=l-this.extraPrev[o+2];if(h*h+u*u>1e-6){const f=Math.atan2(h,u);let d=f-this.extraYaw[r];d>Math.PI?d-=wr:d<-Math.PI&&(d+=wr);const m=Math.max(-.55,Math.min(.55,d*6));this.extraRoll[r]+=(m-this.extraRoll[r])*.15,this.extraYaw[r]=f,this.extraPrev[o]=a,this.extraPrev[o+1]=c,this.extraPrev[o+2]=l}s.position.set(a,c,l),s.rotation.set(0,this.extraYaw[r],this.extraRoll[r]),s.scale.setScalar(.85),s.updateMatrix(),this.extraFlock.setMatrixAt(r,s.matrix)}this.extraFlock.count=n,this.extraFlock.instanceMatrix.needsUpdate=!0}update(e,t){this.uTime.value=e,this.extraLevel=t;const n=1+Math.min(t,6)*.25,s=this.dummy;for(let r=0;r<this.flockN;r++){const o=this.spd[r];this.ang[r]+=o*.016*n;const a=this.ang[r],c=this.rad[r]+Math.sin(e*.4+r*1.93)*2.4,l=Math.sin(a),h=Math.cos(a);s.position.set(this.cenX[r]+h*c,this.hgt[r]+Math.sin(e*.6+r*2.31)*1.6,this.cenZ[r]+l*c);const u=o>0?1:-1;s.rotation.set(Math.cos(e*.6+r*2.31)*.08,Math.atan2(-l*u,h*u),-u*.38+Math.sin(e*2.1+r*3.7)*.09),s.scale.setScalar(this.scl[r]),s.updateMatrix(),this.flock.setMatrixAt(r,s.matrix)}this.flock.instanceMatrix.needsUpdate=!0}}function Un(i){i.traverse(e=>{const t=e;t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)})}function ve(i,e,t,n,s=0,r=0,o=0){const a=new ee(new Qt(i,e,t),n);return a.position.set(s,r,o),a}function Bi(i){return new pi({color:i,toneMapped:!1})}const Gp=13213802,js=5913124;function Vp(i,e=1.6,t=.16){const n=new Ve,s=new ee(new Ce(t,t*1.18,e,8),st(i,js));s.position.y=e/2,n.add(s);const r=new ee(new et(t*1.12,8,6),st(i,7227948));r.position.y=e,r.scale.y=.6,n.add(r);const o=new $e({color:Gp});for(let a=0;a<3;a++){const c=new ee(new Sn(t*1.08,.035,5,12),o);c.rotation.x=Math.PI/2,c.position.y=e-.28-a*.09,n.add(c)}return n}function ra(){const i=new Ve,e=new $e({color:Gp});for(let t=0;t<3;t++){const n=new ee(new Sn(.34-t*.055,.065,6,14),e);n.rotation.x=Math.PI/2,n.position.y=.06+t*.1,i.add(n)}return i}function Pl(i,e=9063210){const t=new Ve,n=new ee(new Ce(.42,.42,1.05,12),dn(i,e));n.scale.x=1.08,n.position.y=.55,t.add(n);const s=St(3813930,.4,.5);for(const o of[.28,.85]){const a=new ee(new Sn(.44,.03,5,14),s);a.rotation.x=Math.PI/2,a.position.y=o,a.scale.x=1.08,t.add(a)}const r=new ee(new Ce(.36,.36,.05,12),dn(i,11104574));return r.position.y=1.08,t.add(r),t}function Zs(i,e=1.1,t=11895626){const n=new Ve;n.add(ve(e,e*.92,e,st(i,t),0,e*.46,0));const s=st(i,9067568),r=.07;for(const o of[-1,1])n.add(ve(e+r,r,r,s,0,e*.92,o*e*.5)),n.add(ve(e+r,r,r,s,0,.02,o*e*.5)),n.add(ve(r,e*.94,r,s,o*e*.5,e*.46,e*.5)),n.add(ve(r,e*.94,r,s,o*e*.5,e*.46,-e*.5));return n}function OS(i,e){const t=new Ve,n=dn(i,16643040),s=dn(i,14173487),r=St(3089952,.25,.6),o=2.15,a=3.05,c=13.5,l=new ee(new Ce(o,a,c,20),n);l.userData.shell=!0,t.add(l);const h=z=>a+(o-a)*((z+c/2)/c);for(const[z,F]of[[-3.4,1.5],[.6,1.4],[4.4,1.3]]){const K=new ee(new Ce(h(z+F/2)+.05,h(z-F/2)+.05,F,20),s);K.position.y=z,t.add(K)}const u=new ee(new Ce(a+.55,a+1.1,1.6,20),dn(i,13350296));u.position.y=-c/2+.5,t.add(u);const f=new ee(new Ce(3.15,2.7,.42,20),r);f.position.y=c/2+.2,t.add(f);const d=c/2+1.25,m=new ee(new Sn(2.95,.05,5,24),r);m.rotation.x=Math.PI/2,m.position.y=d,t.add(m);for(let z=0;z<10;z++){const F=z/10*Math.PI*2,K=new ee(new Ce(.04,.04,.85,5),r);K.position.set(Math.cos(F)*2.95,c/2+.82,Math.sin(F)*2.95),t.add(K)}const v=new ee(new Ce(1.45,1.45,2.3,12,1,!0),Lf(16765562));v.position.y=c/2+1.6,t.add(v);const g=new ee(new et(.62,12,10),Bi(16772536));g.position.y=c/2+1.6,t.add(g);const p=new ee(new Ce(1.85,1.85,.3,12),r);p.position.y=c/2+2.85,t.add(p);const M=new ee(new Kn(1.95,1.9,12),St(9056806,.2,.55));M.position.y=c/2+3.9,t.add(M);const y=new ee(new et(.16,8,6),r);y.position.y=c/2+4.95,t.add(y);const x=ve(1,2.2,.14,st(e,7029286),0,-c/2+1.4,h(-c/2+1.4)+.02);x.userData.shell=!0,t.add(x);const R=new Ve;R.name="interior";const b=dn(i,15258292),C=new ee(new Ce(2.15,2.15,.16,16),st(e,11895626));C.position.y=-c/2+.95,R.add(C);const E=new ee(new Ce(2.2,2.2,4.4,16,1,!0),b);E.position.y=-c/2+3.15,E.scale.x=-1,R.add(E);const w=ve(1.15,2.3,.08,st(e,7029286),0,-c/2+1.95,2.16);R.add(w);const _=ve(1.4,.12,.7,st(e,9067568),-.85,-c/2+1.55,-.35);R.add(_),R.add(ve(.1,.72,.1,st(e,js),-1.4,-c/2+1.16,-.6)),R.add(ve(.1,.72,.1,st(e,js),-.3,-c/2+1.16,-.1));const I=ve(.55,.02,.4,new $e({color:16248022}),-.85,-c/2+1.63,-.35);R.add(I);const k=new ee(new et(.12,8,6),Bi(16763256));k.position.set(.7,-c/2+2.1,-.9),R.add(k);const O=new Zr(16763256,0,8,1.5);O.name="interiorLight",O.position.set(0,-c/2+3.4,0),R.add(O);const A=ve(1.1,.28,2,new $e({color:14206112}),1.05,-c/2+1.22,.15);R.add(A),t.add(R);const L=ve(1.5,.1,.7,st(e,14173487),0,-c/2+2.7,h(-c/2+2.7)+.3);L.rotation.x=.35,t.add(L);const N=new ee(new Ql(.28,10),Bi(16763256));return N.position.set(0,2.6,h(2.6)+.03),t.add(N),t.position.set(8,7.2,-18),t.userData.place="lighthouse",Un(t),t}function FS(i,e){const t=new Ve,n=dn(i,16181455),s=st(e,4860956),r=st(e,12731694),o=13,a=5.2,c=9,l=.22,h=-3.6,u=2.6,f=3.5;t.add(ve(o-.4,.14,c-.4,st(e,12886122),0,.78,0)),t.add(ve(o,a,l,n,0,a/2,-c/2+l/2)),t.add(ve(l,a,c,n,-o/2+l/2,a/2,0)),t.add(ve(l,a,c,n,o/2-l/2,a/2,0));const d=h-u/2- -o/2,m=o/2-(h+u/2);t.add(ve(d,a,l,n,-o/2+d/2,a/2,c/2-l/2)),t.add(ve(m,a,l,n,o/2-m/2,a/2,c/2-l/2)),t.add(ve(u+.1,a-f,l,n,h,f+(a-f)/2,c/2-l/2)),t.add(ve(o+.5,.7,c+.5,dn(i,13350296),0,.35,0));const v=new Ve;v.userData.roof=!0;const g=new $l;g.moveTo(-c/2-.1,0),g.lineTo(c/2+.1,0),g.lineTo(0,2.9);const p=new ua(g,{depth:o,bevelEnabled:!1});p.rotateY(Math.PI/2),p.translate(-o/2,a,0),v.add(new ee(p,n));const M=Math.atan2(2.9,4.7);for(const O of[-1,1]){const A=ve(o+1.6,.28,6.3,r,0,a+1.59,O*2.44);A.rotation.x=O*M,v.add(A)}v.add(ve(o+1.8,.26,.55,s,0,a+3.02,0)),t.add(v);for(const O of[-o/2,o/2])for(const A of[-c/2,c/2])t.add(ve(.28,a,.28,s,O,a/2,A));t.add(ve(o+.1,.24,.24,s,0,a-.15,c/2+.04)),t.add(ve(o+.1,.24,.24,s,0,2.6,c/2+.04));const y=ve(.9,2.6,.9,dn(i,12159592),-o/2+2.2,a+3.1,-1.2);t.add(y),t.add(ve(1.15,.22,1.15,St(3813930,.3,.55),-o/2+2.2,a+4.4,-1.2)),t.add(ve(.16,f,.16,s,h-u/2,f/2,c/2+.04)),t.add(ve(.16,f,.16,s,h+u/2,f/2,c/2+.04)),t.add(ve(u+.3,.2,.24,s,h,f+.08,c/2+.08));const x=ve(2.4,.12,.8,s,2.2,1.02,-1.4);t.add(x),t.add(ve(.1,.78,.1,s,1.3,.61,-1.7)),t.add(ve(.1,.78,.1,s,3.1,.61,-1.1));const R=Zs(e,.95);R.position.set(-1.1,.84,-2.6),R.rotation.y=.3,t.add(R);const b=Zs(e,.75,13212252);b.position.set(4.4,.84,1.8),b.rotation.y=-.4,t.add(b);const C=ve(1.8,.04,1.1,new $e({color:14206112}),2.15,1.1,-1.35);t.add(C);const E=new Zr(16760938,0,11,1.4);E.name="interiorLight",E.position.set(.2,3.6,.2),t.add(E);const w=Bi(16760938);for(const O of[-.4,2.2,4.6])t.add(ve(1.3,1.4,.1,w,O,3.6,c/2+.05)),t.add(ve(1.5,.12,.16,s,O,4.36,c/2+.07)),t.add(ve(1.5,.12,.16,s,O,2.84,c/2+.07));for(const O of[-2.6,.6])t.add(ve(.1,1.3,1.2,w,o/2+.05,3.4,O));const _=ve(1.5,.12,.12,s,-5.6,4.7,c/2+.8);t.add(_);const I=ve(1.35,.75,.08,st(e,15254394),-5.6,4,c/2+1.15);t.add(I);const k=new ee(new et(.24,8,6),new $e({color:4025210}));k.scale.set(1.7,.7,.4),k.position.set(-5.6,4,c/2+1.2),t.add(k);for(const O of[-6.1,-5.1]){const A=new ee(new Ce(.025,.025,.34,5),St(2761760,.3,.5));A.position.set(O,4.5,c/2+1.15),t.add(A)}return t.position.set(22,0,8),t.userData.place="warehouse",Un(t),t}function zS(i){const e=new Ve,t=St(12865582,.5,.45),n=St(2828068,.4,.5),s=St(1841173,.3,.6);e.add(ve(5.4,1,5.4,St(9063218,.4,.55),0,.5,0)),e.add(ve(4.2,.7,4.2,n,0,1.3,0)),e.add(ve(1.25,14.5,1.25,t,0,8.6,0));for(let u=0;u<4;u++){const f=ve(.14,2.4,1.35,t,0,3.4+u*3.2,0);f.rotation.z=u%2?.62:-.62,e.add(f)}e.add(ve(2.2,1.8,1.9,n,.4,14.6,0));const r=ve(1,.9,1.7,Bi(16763256),1.55,14.8,0);e.add(r);const o=ve(19,.75,1,t,6.5,16.2,0);e.add(o),e.add(ve(1.5,.5,.8,t,16.2,16.2,0)),e.add(ve(3.2,2.3,2.5,St(5325882,.35,.6),-4.6,15.6,0));const a=new D(0,18.4,0);e.add(ve(.5,2.6,.5,t,0,17.4,0));for(const u of[8,14]){const f=new D(u,16.55,0),d=a.distanceTo(f),m=new ee(new Ce(.05,.05,d,4),s);m.position.copy(a.clone().add(f).multiplyScalar(.5)),m.rotation.z=Math.atan2(f.x-a.x,a.y-f.y),e.add(m)}const c=new ee(new Ce(.05,.05,6.4,4),s);c.position.set(13,12.6,0),e.add(c);const l=new ee(new Kn(.22,.5,6),n);l.rotation.x=Math.PI,l.position.set(13,9.2,0),e.add(l);const h=Zs(i,1.7,11565626);return h.position.set(13,7.3,0),h.rotation.y=.35,e.add(h),e.position.set(-26,0,6),Un(e),e}function BS(i){const e=new Ve,t=st(i,12886650),n=st(i,10123858),s=st(i,js);e.add(ve(8,.28,28,t,0,.7,18)),e.add(ve(18,.28,7,t,5,.7,8));for(const d of[-4.05,4.05])e.add(ve(.34,.4,28,n,d,.7,18));e.add(ve(8.6,.4,.34,n,0,.7,32.1));for(let d=0;d<7;d++){const m=8+d*4;for(const v of[-3.6,3.6]){const g=new ee(new Ce(.22,.3,3,8),s);g.position.set(v,-.6,m),e.add(g)}}const r=st(i,7227948),o=[6,12.5,19,25.5,31.5];for(const d of[-3.7,3.7]){for(const m of o){const v=Vp(i,1.5);v.position.set(d,.84,m),e.add(v)}for(let m=0;m<o.length-1;m++){const v=o[m],g=o[m+1],p=new ee(new Ce(.055,.055,g-v,6),r);p.rotation.x=Math.PI/2,p.position.set(d,2,(v+g)/2),e.add(p)}}const a=Pl(t.map,9063210);a.position.set(-2.9,.84,10),e.add(a);const c=Pl(t.map,7227948);c.position.set(-2.2,.84,10.6),e.add(c);const l=Zs(i,1);l.position.set(2.8,.84,14),l.rotation.y=.4,e.add(l);const h=Zs(i,.72,13212252);h.position.set(2.9,1.78,14.1),h.rotation.y=-.2,e.add(h);const u=ra();u.position.set(-2.6,.84,22),e.add(u);const f=ra();return f.position.set(11.5,.84,8.5),f.scale.setScalar(.8),e.add(f),e.position.set(0,0,22),Un(e),e}function kS(){const i=[[2.62,.03,.2,.5],[2.18,.32,-.02,.58],[1.48,.76,-.18,.64],[.45,.98,-.24,.68],[-.55,1,-.22,.68],[-1.52,.9,-.12,.63],[-2.42,.78,0,.56]],e=(c,l,h)=>[[h,-c],[h*.42+l*.58,-c],[l+.1,-c*.84],[l,-c*.1],[l,c*.1],[l+.1,c*.84],[h*.42+l*.58,c],[h,c]],t=i.length,n=8,s=[],r=[];for(let c=0;c<t;c++){const[l,h,u,f]=i[c],d=e(h,u,f);for(let m=0;m<n;m++)s.push(d[m][1],d[m][0],l),r.push(c/(t-1),m/(n-1))}const o=[];for(let c=0;c<t-1;c++)for(let l=0;l<n-1;l++){const h=c*n+l,u=h+n,f=h+1,d=u+1;o.push(h,f,u,f,d,u)}const a=new bt;return a.setAttribute("position",new it(s,3)),a.setAttribute("uv",new it(r,2)),a.setIndex(o),a.computeVertexNormals(),a}function Ld(i,e){const t=new Ve,n=st(i,e);n.side=Lt;const s=st(i,js),r=st(i,12886650),o=st(i,7227948),a=st(i,15258288),c=new ee(kS(),n);t.add(c);const l=ve(.16,.16,3.7,s,0,-.26,.05);t.add(l);const h=E=>new Zl([new D(E*.02,.5,2.58),new D(E*.32,.58,2.16),new D(E*.76,.64,1.46),new D(E*.98,.68,.44),new D(E*1,.68,-.54),new D(E*.9,.63,-1.5),new D(E*.78,.56,-2.4)]);for(const E of[-1,1])t.add(new ee(new jr(h(E),12,.045,5,!1),o));t.add(ve(1.58,.07,.08,o,0,.56,-2.4));const u=new ee(new Ce(.035,.05,.78,6),s);u.position.set(0,.36,2.5),u.rotation.x=-.42,t.add(u),t.add(ve(1.56,.58,.08,n,0,.28,-2.42));const f=new $l;f.moveTo(-.62,2.05),f.lineTo(.62,2.05),f.lineTo(.78,.55),f.lineTo(.74,-.55),f.lineTo(.48,-1.45),f.lineTo(.16,-2.05),f.lineTo(-.16,-2.05),f.lineTo(-.48,-1.45),f.lineTo(-.74,-.55),f.lineTo(-.78,.55),f.closePath();const d=new ua(f,{depth:.05,bevelEnabled:!1,curveSegments:1});d.rotateX(-Math.PI/2);const m=new ee(d,a);m.position.y=.2,t.add(m);for(const E of[-.28,0,.28])t.add(ve(.08,.015,3.7,r,E,.232,.05));const v=(E,w,_,I=.5)=>{t.add(ve(_,.07,w,r,0,I,E)),t.add(ve(_+.04,.03,w+.03,o,0,I+.045,E));for(const k of[-_*.38,_*.38])t.add(ve(.06,.28,.06,s,k,I-.16,E))};v(-.12,.34,1.62),v(.95,.28,1.48,.52),v(-1.72,.3,1.38,.48),t.add(ve(.72,.08,.7,r,0,.54,2.02)),t.add(ve(.78,.22,.08,o,0,.62,1.7));for(const E of[-1.05,.42,1.35]){t.add(ve(1.72,.05,.05,s,0,.42,E));for(const w of[-.82,.82])t.add(ve(.04,.38,.05,s,w,.42,E))}const g=new ee(new Ce(.05,.07,3.05,6),s);g.position.set(0,1.92,.95),t.add(g);const p=new er({color:16248022,roughness:.9,side:Lt}),M=ve(1.55,1.85,.04,p,.72,2.05,.98);M.rotation.y=.08,t.add(M);const y=new ee(new Ce(.035,.035,1.7,5),s);y.rotation.z=Math.PI/2,y.position.set(.78,1.1,.98),t.add(y);const x=ve(.42,.16,.02,new $e({color:14173487,side:Lt}),.22,3.48,.95);t.add(x),t.add(ve(.06,.52,.28,s,0,.12,-2.58));const R=new ee(new Ce(.03,.03,.95,5),s);R.rotation.x=Math.PI/2,R.position.set(0,.62,-1.95),t.add(R);const b=new ee(new et(.045,6,5),o);b.position.set(0,.62,-1.5),t.add(b);for(const E of[-.72,.72]){const w=new ee(new Ce(.022,.028,2.35,5),s);w.rotation.x=Math.PI/2,w.position.set(E,.58,.15),t.add(w),t.add(ve(.08,.015,.42,r,E,.575,1.28));const _=new ee(new Sn(.045,.012,4,8,Math.PI),o);_.rotation.z=E<0?Math.PI/2:-Math.PI/2,_.position.set(E*1.12,.7,-.12),t.add(_)}const C=ra();return C.scale.setScalar(.42),C.position.set(-.42,.26,1.55),t.add(C),Un(t),t}function HS(i,e){const t=new Ve,n=[[6,.5,26,.2,1.1],[7.3,.5,27.1,-.4,.85],[6.4,1.5,26.4,.55,.7],[18,.9,12,.5,1.15],[16.6,.9,13,-.2,.9],[-8,.55,20,.1,1]];for(const[o,a,c,l,h]of n){const u=Zs(i,h);u.position.set(o,a,c),u.rotation.y=l,t.add(u)}const s=[[4.5,.55,24,9063210],[5.3,.55,24.7,7227948],[19,.95,10.5,9063210],[-6,.6,18,10116146]];for(const[o,a,c,l]of s){const h=Pl(e,l);h.position.set(o,a,c),t.add(h)}const r=ra();return r.position.set(-7,.62,19.2),t.add(r),Un(t),t}function Cl(i,e=!0){const t=new Ve,n=St(2761760,.3,.55),s=new ee(new Ce(.18,.24,.16,8),n);s.position.y=.08,t.add(s);const r=new ee(new Ce(.055,.085,2.5,8),n);r.position.y=1.33,t.add(r);const o=new ee(new Ce(.04,.04,.5,6),n);o.rotation.z=Math.PI/2,o.position.set(.22,2.56,0),t.add(o);const a=new ee(new Ce(.15,.19,.34,6),n);a.position.set(.42,2.32,0),t.add(a);const c=new ee(new et(.14,8,6),Bi(i));c.position.set(.42,2.32,0),t.add(c);const l=new ee(new Kn(.22,.16,6),n);if(l.position.set(.42,2.53,0),t.add(l),r.castShadow=!0,e){const h=new Zr(i,2.4,13,1.7);h.position.set(.42,2.3,0),t.add(h)}return t}function GS(i,e=16763251){const t=new Ve,n=new er({color:2366488,roughness:.8,metalness:.2}),s=7,r=i.length-1,o=new et(.09,6,5),a=new Ds(o,Bi(e),r*s),c=new tt;let l=0;for(let h=0;h<r;h++){const u=i[h],f=i[h+1],d=u.distanceTo(f)*.13,m=u.clone().add(f).multiplyScalar(.5);m.y-=d*2;const v=new Kl(u,m,f),g=new ee(new jr(v,12,.022,4),n);t.add(g);for(let p=0;p<s;p++){const M=v.getPoint((p+.5)/s);c.setPosition(M.x,M.y-.09,M.z),a.setMatrixAt(l++,c)}}return a.instanceMatrix.needsUpdate=!0,t.add(a),t}function Dd(i){const e=new Ve,t=st(i,7229220),n=new Zl([new D(0,0,0),new D(.22,1.3,.08),new D(.62,2.5,.22),new D(1.1,3.5,.38)]),s=new ee(new jr(n,8,.2,6),t);e.add(s);const r=new ee(new Ce(.26,.4,.7,7),t);r.position.y=.3,e.add(r);const o=new D(1.1,3.5,.38),a=new ee(new et(.26,7,6),t);a.position.copy(o),e.add(a);const c=[8106842,13222734,9420626,15242588,8106842,13222734,7185230,9420626];for(let d=0;d<8;d++){const m=d/8*Math.PI*2+.4,v=.55+d%3*.18,g=2.3+d%2*.4,p=new ee(new Kn(.34,g,4),new $e({color:c[d]}));p.geometry.translate(0,g/2,0),p.scale.set(1,1,.28),p.position.copy(o);const M=new D(Math.cos(m),.9-v,Math.sin(m)).normalize();p.quaternion.setFromUnitVectors(new D(0,1,0),M),e.add(p)}const l=new ee(new Kn(.3,1.4,4),new $e({color:8106842}));l.geometry.translate(0,.7,0),l.scale.set(1,1,.28),l.position.copy(o),e.add(l);for(const[d,m]of[[.22,.1],[-.1,.24]]){const v=new ee(new et(.15,7,6),st(i,4860956));v.position.set(o.x+d,o.y-.25,o.z+m),e.add(v)}const h=Cl(16757575,!1);h.position.set(-1.4,0,.8),h.scale.setScalar(.85),e.add(h);const u=new Ve;u.add(ve(1.4,.16,3.4,st(i,12886650),0,.5,0));for(const[d,m]of[[-.55,1.45],[.55,1.45],[-.55,-1.45],[.55,-1.45]]){const v=new ee(new Ce(.09,.12,1.3,6),st(i,js));v.position.set(d,-.05,m),u.add(v)}const f=Vp(i,.8,.1);return f.position.set(.55,.58,1.3),u.add(f),u.position.set(2.4,0,3.2),u.rotation.y=.3,e.add(u),Un(e),e}function VS(i){const e=new Ve,t=st(i,12886650),n=St(3090724,.3,.55);for(const s of[-.14,.06,.26])e.add(ve(1.7,.06,.17,t,0,.46,s));for(const s of[.72,.92]){const r=ve(1.7,.06,.16,t,0,s,-.28);r.rotation.x=-.25,e.add(r)}for(const s of[-.72,.72]){e.add(ve(.08,.46,.08,n,s,.23,.2)),e.add(ve(.08,.46,.08,n,s,.23,-.16));const r=ve(.08,.62,.08,n,s,.72,-.24);r.rotation.x=-.25,e.add(r)}return Un(e),e}function WS(i){const e=new Ve,t=new ee(new Ce(.05,.065,2.5,8),new $e({color:15258288}));t.position.y=1.25,e.add(t);const n=new ee(new Kn(1.7,.72,10,1,!0),new $e({color:i,side:Lt}));n.position.y=2.28,e.add(n);const s=new ee(new Ce(1.7,1.74,.14,10,1,!0),new $e({color:16248022,side:Lt}));s.position.y=1.9,e.add(s);const r=new ee(new et(.08,6,5),new $e({color:16248022}));return r.position.y=2.68,e.add(r),e.rotation.z=.09,Un(e),e}function Id(){const i=new Ve,e=St(12865582,.35,.45),t=ve(.66,.42,.44,e,0,1.08,0);i.add(t);const n=new ee(new Ce(.22,.22,.66,10,1,!1,0,Math.PI),e);n.rotation.z=Math.PI/2,n.position.y=1.29,i.add(n);const s=ve(.05,.26,.07,St(15779914,.3,.5),.36,1.32,.12);i.add(s);const r=new ee(new Ce(.06,.08,1,8),St(2761760,.2,.6));return r.position.y=.5,i.add(r),Un(i),i.userData.mailbox=!0,i}const XS=`
varying vec3 vTWorld;
varying vec3 vTNormal;
`,qS=`
vTWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
vTNormal = normalize(mat3(modelMatrix) * objectNormal);
`,YS=`
varying vec3 vTWorld;
varying vec3 vTNormal;
uniform sampler2D uSand;
uniform sampler2D uGrass;
uniform sampler2D uRock;
float tWetness;

float tnHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float tnNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = tnHash(i);
  float b = tnHash(i + vec2(1.0, 0.0));
  float c = tnHash(i + vec2(0.0, 1.0));
  float d = tnHash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float tnFbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * tnNoise(p);
    p = p * 2.07 + 13.1;
    a *= 0.5;
  }
  return v;
}
// two-scale sampling blended by a noise mask kills visible tiling
vec3 tnDetile(sampler2D tex, vec2 uv, float scale) {
  vec3 a = texture2D(tex, uv * scale).rgb;
  vec3 b = texture2D(tex, uv * scale * 0.27 + vec2(0.37, 0.71)).rgb;
  float m = smoothstep(0.32, 0.68, tnNoise(uv * 0.045 + 13.1));
  return mix(a, b, m);
}
`,jS=`
vec3 tN = normalize(vTNormal);
float tSlope = 1.0 - saturate(tN.y);
float tH = vTWorld.y;
vec2 tUv = vTWorld.xz;

// painterly macro variation (low-freq value/hue drift)
float tMacro = tnFbm(tUv * 0.045);
float tMacro2 = tnNoise(tUv * 0.013 + 4.2);

vec3 sandTex = tnDetile(uSand, tUv, 0.11);
vec3 grassTex = tnDetile(uGrass, tUv, 0.085);
vec3 rockTex = tnDetile(uRock, tUv, 0.055);

// palette (linear space): warmer dusk sand, richer wet band,
// grass green-gold, muted warm rock
vec3 drySand = vec3(0.90, 0.655, 0.375);
vec3 wetSand = vec3(0.355, 0.238, 0.145);
vec3 grassGreen = vec3(0.155, 0.335, 0.078);
vec3 grassGold = vec3(0.60, 0.495, 0.095);
vec3 rockTone = vec3(0.325, 0.268, 0.275);

// zone weights from height + slope, wobbled by noise so lines feel drawn
float wetLine = 0.35 + tnNoise(tUv * 0.09) * 0.16;
float tWet = 1.0 - smoothstep(wetLine - 0.30, wetLine + 0.10, tH);
float grassLine = 1.45 + tMacro2 * 1.1;
float wGrass = smoothstep(grassLine - 0.5, grassLine + 0.6, tH + tMacro * 0.9)
             * (1.0 - smoothstep(0.30, 0.55, tSlope));
float wRock = smoothstep(0.34, 0.58, tSlope + tMacro * 0.08);

vec3 sandCol = drySand * mix(0.86, 1.12, sandTex.r);
sandCol = mix(sandCol, wetSand * mix(0.85, 1.14, sandTex.r), tWet);
// bleached dry line just above the wet band
sandCol *= 1.0 + smoothstep(0.14, 0.0, abs(tH - wetLine - 0.20)) * (1.0 - tWet) * 0.18;
vec3 grassCol = mix(grassGreen, grassGold, saturate(tMacro * 1.7 - 0.3 + tMacro2 * 0.45));
grassCol *= mix(0.80, 1.20, grassTex.g);
vec3 rockCol = rockTone * mix(0.70, 1.16, rockTex.r);

vec3 tAlbedo = mix(sandCol, grassCol, wGrass);
tAlbedo = mix(tAlbedo, rockCol, wRock);

// warm/cool macro tint drift for the hand-painted feel
tAlbedo *= mix(vec3(0.92, 0.875, 0.90), vec3(1.08, 1.03, 0.93), tMacro);
// scattered warm autumn accents in the grass (#e8955c family)
tAlbedo = mix(tAlbedo, vec3(0.82, 0.30, 0.095),
  wGrass * smoothstep(0.70, 0.92, tnNoise(tUv * 0.06 + 27.0)) * 0.40);

// baked dusk key: sun-facing slopes go warm, backs stay a touch cooler
float tSun = saturate(dot(tN, normalize(vec3(-0.45, 0.22, -0.82))));
tAlbedo *= mix(vec3(0.96, 0.975, 1.035), vec3(1.07, 1.015, 0.93), tSun);

// occlusion: darken into the waterline so shore reads grounded
float tAo = mix(0.38, 1.0, smoothstep(-0.6, 0.55, tH));
tAo *= mix(1.0, 0.78, tWet * 0.65);
// dock grounding shadow (pier x in [-4,4], z 26..44 + cross arm near z 30)
vec2 tDp = vec2(clamp(vTWorld.x, -3.6, 3.6), clamp(vTWorld.z, 26.0, 44.0));
vec2 tCp = vec2(clamp(vTWorld.x, -3.0, 13.0), clamp(vTWorld.z, 28.0, 32.0));
float tDockD = min(distance(vTWorld.xz, tDp), distance(vTWorld.xz, tCp));
tAo *= mix(0.58, 1.0, smoothstep(0.0, 5.5, tDockD));
// crevice shading on rock for value contrast
tAo *= mix(1.0, 0.70, wRock * (1.0 - rockTex.r));

tWetness = tWet;
vec4 diffuseColor = vec4( tAlbedo * tAo, opacity );
`,ZS=`
roughnessFactor = mix( roughnessFactor, 0.20, tWetness * 0.90 );
`;function Ud(i,e,t,n,s,r){const o=new Pn(n*2.4,n*2.4,i,i);o.rotateX(-Math.PI/2);const a=o.attributes.position;for(let c=0;c<a.count;c++){const l=a.getX(c)+e,h=a.getZ(c)+t,u=r?Ht(l,h):zr(l,h,e,t,n,s);a.setY(c,u),a.setX(c,l),a.setZ(c,h)}return o.computeVertexNormals(),o}function KS(i){const e=new er({roughness:.94,metalness:0});return e.onBeforeCompile=t=>{t.uniforms.uSand={value:i.sand},t.uniforms.uGrass={value:i.grass},t.uniforms.uRock={value:i.rock},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
`+XS).replace("#include <begin_vertex>",`#include <begin_vertex>
`+qS),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
`+YS).replace("vec4 diffuseColor = vec4( diffuse, opacity );",jS).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
`+ZS)},e.customProgramCacheKey=()=>"tidelight-terrain",e}class JS{group=new Ve;main;satellites=[];mat;constructor(e,t,n){this.mat=KS(t),this.main=new ee(Ud(8,0,0,4,3.1,!0),this.mat),this.main.visible=!1,n.forEach((s,r)=>{const o=r===0?e.terrainSeg:Math.max(48,Math.floor(e.terrainSeg*.55)),a=new ee(Ud(o,s.x,s.z,s.radius,s.seed,r===0),this.mat);a.receiveShadow=!0,a.castShadow=r===0,a.position.y=-8,a.visible=!1,this.satellites.push(a),this.group.add(a)})}setSatelliteRise(e,t){const n=this.satellites[e];n&&(n.position.y=vt.lerp(-6.5,0,t),n.visible=t>.02)}}function Ec(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new bt;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Nd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][f]);const m=Nd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Nd(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new xt(o,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){const v=h.getComponent(f,m);a.setComponent(f+u,m,v)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const vh=new D(-.45,.35,-.82).normalize(),Wp=new xe(2769206),xh=new xe(16767392),Od=new xe(8017203),Sr=new xe(4600093),QS=new xe(10123854),Fd=[new xe(8106842),new xe(13222734),new xe(15242588)],$S=new xe(3502923),e2=new xe(6988882),t2=new xe(7317583),n2=new xe(8696656),i2=new xe(13217358),ws=new xe(3038003),s2=new xe(10993738),zd=[16767462,16757575,16643071,15237018,15917706],r2=`#include <begin_vertex>
{
  float vph = position.x * 0.55 + position.z * 0.41;
  float vg = sin(uTime * 1.25 + vph) + 0.45 * sin(uTime * 2.63 + vph * 1.7);
  transformed.x += vg * aSway;
  transformed.z += (cos(uTime * 1.02 + vph) + 0.35 * sin(uTime * 3.1 + vph * 2.3)) * aSway * 0.65;
  transformed.y += sin(uTime * 2.2 + vph * 1.3) * aSway * 0.2;
}`,o2=`#include <begin_vertex>
#ifdef USE_INSTANCING
{
  float vph = instanceMatrix[3][0] * 0.8 + instanceMatrix[3][2] * 0.63;
  float vw = position.y * position.y * 1.3;
  transformed.x += (sin(uTime * 2.1 + vph) + 0.5 * sin(uTime * 3.7 + vph * 1.9)) * vw * 0.45;
  transformed.z += cos(uTime * 1.7 + vph) * vw * 0.3;
}
#endif`;function a2(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ai(i,e,t){const n=i.attributes.position,s=i.attributes.normal;i.computeBoundingBox();const r=i.boundingBox,o=Math.max(r.max.y-r.min.y,1e-5),a=new Float32Array(n.count*3),c=new Float32Array(n.count),l=new D,h=new D;for(let u=0;u<n.count;u++){l.fromBufferAttribute(n,u),h.fromBufferAttribute(s,u);const f=e(l,h,(l.y-r.min.y)/o);a[u*3]=f.r,a[u*3+1]=f.g,a[u*3+2]=f.b,c[u]=t(l)}return i.setAttribute("color",new xt(a,3)),i.setAttribute("aSway",new xt(c,1)),i}function Ac(i){return(e,t,n)=>{const s=i.clone();s.lerp(Wp,(1-n)*.55);const r=Math.max(t.dot(vh),0);return s.lerp(xh,r*r*.42),s}}function zo(i,e){return(t,n,s)=>{const r=i.clone();r.lerp(e,(1-s)*.6);const o=Math.max(n.dot(vh),0);return r.lerp(xh,o*o*.22),r}}function Rc(i,e,t){return n=>{const s=Math.min(Math.max((n.y-i)/e,0),1);return t*Math.pow(s,1.5)}}class c2{group=new Ve;time={value:0};external=!1;constructor(e){const t=[],n=[],s=a2(1337),r=[[12,-4,1.15,0],[15.5,-8,1,1],[10.5,-12,.9,0],[18,-3,.85,2],[13.5,-14,.95,0],[8.5,-5,1.05,0],[16.5,-12,.8,1],[-14,-8,1.1,0],[-17.5,-2,.9,1],[-11,-14,.85,0],[-19,8,1,2],[-14.5,14,.9,0],[-8,-20,.8,0],[26,0,.9,1],[23,-6,.85,0],[-4,-24,.9,0],[3,-26,.8,2],[-5.6,19,1.2,0],[5.8,17.5,1.1,1],[-7.5,13,.7,0],[7,11,.65,0]];for(const[f,d,m,v]of r)this.canopyTree(t,f,d,m,v,s);const o=[[4,-10,1.1],[6.5,-12.5,.9],[2.5,-13.5,1],[5.5,-8,.8],[2.8,-7,.9],[7.6,-10.5,.7],[.8,-11,1.05],[4.5,-15,.75]];for(const[f,d,m]of o)this.pine(t,f,d,m,s);const a=[[6.8,31.5],[17,30.5],[-9,26.5],[21,22],[-14,19],[12.5,24.5],[25,12]];for(const[f,d]of a)this.palm(t,n,f,d,s);const c=[[-3.8,27],[4.6,21.5],[-6.8,16],[9,8],[18.5,5],[6,-16],[-12,4],[14,16],[-16,-12],[20,-10],[3,-21],[-9,-17]];for(const[f,d]of c)this.bush(t,f,d,s);const l=new $e({vertexColors:!0});this.windify(l,!1);const h=Ec(t,!1),u=new ee(h,l);if(u.castShadow=!0,u.receiveShadow=!0,u.onBeforeRender=()=>{this.external||(this.time.value=performance.now()*.001)},this.group.add(u),n.length){const f=new $e({vertexColors:!0,side:Lt});this.windify(f,!1);const d=new ee(Ec(n,!1),f);d.castShadow=!0,d.receiveShadow=!0,this.group.add(d)}this.group.add(this.grass(e.grass,s)),this.group.add(this.flowers(Math.max(48,Math.floor(e.grass*.18)),s))}update(e){this.external=!0,this.time.value=e}windify(e,t){e.onBeforeCompile=n=>{n.uniforms.uTime=this.time,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;
${t?"":"attribute float aSway;"}`).replace("#include <begin_vertex>",t?o2:r2)},e.customProgramCacheKey=()=>t?"veg-wind-i":"veg-wind-m"}canopyTree(e,t,n,s,r,o){const a=Ht(t,n);if(a<.55)return;const c=(1.7+o()*.6)*s,l=c+2.2*s,h=Rc(a,l,.075*s),u=o()*Math.PI*2,f=.05+o()*.12,d=new Ce(.09*s,.21*s,c,7);d.translate(0,c*.5,0),d.rotateZ(f),d.rotateY(u),d.translate(t,a-.15,n),e.push(ai(d,zo(Od,Sr),h));const m=Fd[r%Fd.length],v=o()<.35?2:3,g=o()*Math.PI*2,p=Math.cos(u)*f*c,M=-Math.sin(u)*f*c;let y=a+c*.88;for(let x=0;x<v;x++){const R=s*[1.2,.92,.64][x]*(.88+o()*.24),b=new et(1,9,7);b.scale(R*(.95+o()*.1),R*.68,R*(.9+o()*.14));const C=x===0?.1*s:(.34-x*.08)*s,E=g+x*2.4+o()*.5;y+=x===0?R*.36:R*.62,b.translate(t+p+Math.cos(E)*C,y,n+M+Math.sin(E)*C);const w=m.clone().offsetHSL((o()-.5)*.045,(o()-.5)*.1,(o()-.5)*.07);e.push(ai(b,Ac(w),h))}}pine(e,t,n,s,r){const o=Ht(t,n);if(o<.55)return;const a=2.9*s,c=Rc(o,a,.05*s),l=new Ce(.06*s,.14*s,.9*s,6);l.translate(t,o+.35*s,n),e.push(ai(l,zo(Od,Sr),c));const h=[[.85,1.35,.75],[.62,1.1,1.5],[.4,.95,2.15]],u=(r()-.5)*.03;for(const[f,d,m]of h){const v=new Kn(f*s*(.92+r()*.16),d*s,8);v.rotateY(r()*Math.PI),v.translate(t+(r()-.5)*.08,o+m*s,n+(r()-.5)*.08);const g=$S.clone().lerp(e2,m/2.4).offsetHSL(u,0,(r()-.5)*.05);e.push(ai(v,Ac(g),c))}}palm(e,t,n,s,r){const o=Ht(n,s);if(o<.02)return;const a=Math.max(o,.22)-.12,c=3.1+r()*1.3,l=Math.hypot(n,s)||1,h=n/l,u=s/l,f=.7+r()*.7,d=new D(0,1,0),m=Rc(a,c+1,.06),v=x=>new D(n+h*f*x*x,a+c*x,s+u*f*x*x),g=5;for(let x=0;x<g;x++){const R=v(x/g),b=v((x+1)/g),C=b.clone().sub(R),E=C.length(),w=new Ce(vt.lerp(.2,.1,(x+1)/g),vt.lerp(.2,.1,x/g)*1.12,E*1.06,6),_=new fi().setFromUnitVectors(d,C.normalize());w.applyQuaternion(_);const I=R.clone().lerp(b,.5);w.translate(I.x,I.y,I.z),e.push(ai(w,zo(QS,Sr),m))}const p=v(1);for(let x=0;x<2;x++){const R=new et(.13,6,5);R.translate(p.x+(r()-.5)*.3,p.y-.12,p.z+(r()-.5)*.3),e.push(ai(R,zo(Sr,Sr),()=>.05))}const M=7,y=2.2+r()*.5;for(let x=0;x<M;x++){const R=new Pn(.5,y,1,5);R.translate(0,y*.5,0);const b=R.attributes.position;for(let w=0;w<b.count;w++){const _=b.getY(w)/y;b.setX(w,b.getX(w)*(1-.68*_)),b.setZ(w,b.getZ(w)+_*_*1.05)}R.computeVertexNormals(),R.rotateX(1.05+r()*.4),R.rotateY(x/M*Math.PI*2+r()*.5),R.translate(p.x,p.y,p.z);const C=n2.clone().offsetHSL((r()-.5)*.04,0,(r()-.5)*.06),E=p.clone();t.push(ai(R,(w,_)=>{const I=Math.min(w.distanceTo(E)/y,1),k=C.clone().lerp(i2,I*I);k.lerp(Wp,.18);const O=Math.max(_.dot(vh),0);return k.lerp(xh,O*O*.5),k},w=>{const _=Math.min(w.distanceTo(E)/y,1);return .05+_*_*.13}))}}bush(e,t,n,s){const r=Ht(t,n);if(r<.5)return;const o=1+(s()<.5?1:0);for(let a=0;a<=o;a++){const c=.42+s()*.4,l=new et(1,8,6);l.scale(c,c*.62,c*(.85+s()*.3)),l.rotateY(s()*Math.PI),l.translate(t+(s()-.5)*c*1.4,r+c*.32,n+(s()-.5)*c*1.4);const h=t2.clone().offsetHSL((s()-.5)*.05,(s()-.5)*.12,(s()-.5)*.08);e.push(ai(l,Ac(h),()=>.015+s()*.02))}}open(e,t,n){return!(n<.68||n>7.2||Math.abs(e)<3.6&&t>8&&t<36||Math.hypot(e-22,t-8)<6.5||Math.hypot(e+26,t-6)<5||Math.hypot(e-8,t+18)<3.2)}grass(e,t){const n=this.tuftGeometry(t),s=new $e({vertexColors:!0,side:Lt});this.windify(s,!0);const r=new Ds(n,s,e),o=new tt,a=new fi,c=new D(0,1,0),l=new xe;let h=0;for(let u=0;u<e*6&&h<e;u++){const f=t()*Math.PI*2,d=Math.sqrt(t())*36,m=Math.cos(f)*d,v=Math.sin(f)*d,g=Ht(m,v);if(!this.open(m,v,g))continue;a.setFromAxisAngle(c,t()*Math.PI*2);const p=.7+t()*.7;o.compose(new D(m,g-.03,v),a,new D(p,p*(.8+t()*.5),p)),r.setMatrixAt(h,o),l.setHSL(.19+t()*.09,.5+t()*.2,.5+t()*.16),r.setColorAt(h,l),h++}return r.count=h,r.receiveShadow=!0,r.frustumCulled=!1,r}tuftGeometry(e){const n=[],s=[],r=[];for(let a=0;a<6;a++){const c=a/6*Math.PI*2+e()*.9,l=.02+e()*.07,h=Math.cos(c)*l,u=Math.sin(c)*l,f=.3+e()*.28,d=.035+e()*.02,m=Math.cos(c)*(.08+e()*.14),v=Math.sin(c)*(.08+e()*.14),g=-Math.sin(c)*d,p=Math.cos(c)*d;n.push(h-g,0,u-p,h+g,0,u+p,h+m,f,u+v);for(let y=0;y<3;y++)s.push(.15,.98,.15);const M=s2.clone().offsetHSL((e()-.5)*.06,0,(e()-.5)*.1);r.push(ws.r,ws.g,ws.b,ws.r,ws.g,ws.b,M.r,M.g,M.b)}const o=new bt;return o.setAttribute("position",new it(n,3)),o.setAttribute("normal",new it(s,3)),o.setAttribute("color",new it(r,3)),o}flowers(e,t){const n=new Pn(.035,.3);n.translate(0,.15,0);const s=new Pn(.18,.18);s.rotateX(-Math.PI/2),s.translate(0,.3,0);const r=s.clone();r.rotateY(Math.PI/4),r.translate(0,.015,0);const o=new xe(3099180);for(const g of[n,s,r]){const p=g===n,M=new Float32Array(g.attributes.position.count*3);for(let y=0;y<M.length;y+=3)M[y]=p?o.r:1,M[y+1]=p?o.g:1,M[y+2]=p?o.b:1;g.setAttribute("color",new xt(M,3))}const a=Ec([n,s,r],!1),c=new $e({vertexColors:!0,side:Lt});this.windify(c,!0);const l=new Ds(a,c,e),h=new tt,u=new fi,f=new D(0,1,0),d=new xe,m=[];for(;m.length<9;){const g=t()*Math.PI*2,p=6+Math.sqrt(t())*28,M=Math.cos(g)*p,y=Math.sin(g)*p;this.open(M,y,Ht(M,y))&&m.push([M,y])}let v=0;for(let g=0;g<e*6&&v<e;g++){const[p,M]=m[Math.floor(t()*m.length)],y=p+(t()-.5)*5,x=M+(t()-.5)*5,R=Ht(y,x);if(!this.open(y,x,R))continue;u.setFromAxisAngle(f,t()*Math.PI*2);const b=.75+t()*.6;h.compose(new D(y,R-.02,x),u,new D(b,b,b)),l.setMatrixAt(v,h),d.set(zd[Math.floor(t()*zd.length)]),l.setColorAt(v,d),v++}return l.count=v,l.receiveShadow=!0,l.frustumCulled=!1,l}}const l2=`
uniform float uTime;
varying vec3 vWorld;
varying vec3 vWaveN;
varying float vCrest;
varying float vFogDepth;

// Long painted swell — small amp, long wavelength, low steepness.
// Not a Gerstner storm: just enough motion so the harbor breathes.
vec3 wave(vec2 dir, float amp, float waveLen, float speed, vec2 p, float t, inout vec3 nrm, inout float crest) {
  float k = 6.2831853 / waveLen;
  float f = k * dot(dir, p) - speed * t;
  float s = sin(f);
  float c = cos(f);
  nrm.x -= dir.x * amp * k * c;
  nrm.z -= dir.y * amp * k * c;
  crest += s * amp;
  float steep = 0.34;
  return vec3(dir.x * steep * amp * c, amp * s, dir.y * steep * amp * c);
}

void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vec3 nrm = vec3(0.0, 1.0, 0.0);
  float crest = 0.0;
  vec3 d = vec3(0.0);
  d += wave(normalize(vec2( 0.78,  0.62)), 0.065, 46.0, 0.52, world.xz, uTime, nrm, crest);
  d += wave(normalize(vec2(-0.52,  0.85)), 0.030, 24.0, 0.78, world.xz, uTime, nrm, crest);
  d += wave(normalize(vec2( 0.22, -0.97)), 0.012, 11.0, 1.15, world.xz, uTime, nrm, crest);
  world.xyz += d;
  vWorld = world.xyz;
  vWaveN = normalize(nrm);
  vCrest = crest * 5.2;
  vec4 mv = viewMatrix * world;
  vFogDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,h2=`
precision highp float;
uniform float uTime;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec3 uSky;
uniform vec3 uHorizon;
uniform vec3 uRose;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uFoamColor;
uniform vec3 uFogColor;
uniform vec2 uFogRange;
uniform vec3 uCam;
uniform vec3 uIslands[ISLAND_COUNT]; // x, z, shoreline radius
uniform float uRise[ISLAND_COUNT];   // 0..1 emergence per circle
uniform sampler2D uFoam;
varying vec3 vWorld;
varying vec3 vWaveN;
varying float vCrest;
varying float vFogDepth;
${Up}
${Np}

void main() {
  vec2 uv = vWorld.xz;

  // --- signed distance to nearest shoreline (analytic circles) ---
  float sd = 1e5;
  float riseN = 0.0;
  for (int i = 0; i < ISLAND_COUNT; i++) {
    float rise = uRise[i];
    float er = uIslands[i].z * mix(0.25, 1.0, saturate(rise));
    float di = length(uv - uIslands[i].xy) - er;
    if (di < sd) { sd = di; riseN = rise; }
  }
  float shoreFade = smoothstep(0.18, 0.55, riseN);

  // --- detail normal: two slow noise scrolls, kept shallow so it stays painted ---
  float e = 1.15;
  vec2 p1 = uv * 0.07 + vec2(uTime * 0.028, uTime * 0.014);
  vec2 p2 = uv * 0.16 + vec2(-uTime * 0.018, uTime * 0.032);
  float hn  = noise(p1) * 0.68 + noise(p2) * 0.32;
  float hx = noise(p1 + vec2(e * 0.07, 0.0)) * 0.68 + noise(p2 + vec2(e * 0.16, 0.0)) * 0.32;
  float hz = noise(p1 + vec2(0.0, e * 0.07)) * 0.68 + noise(p2 + vec2(0.0, e * 0.16)) * 0.32;
  vec3 nrm = normalize(vWaveN + vec3((hn - hx) * 0.85, 0.0, (hn - hz) * 0.85));

  vec3 view = normalize(uCam - vWorld);
  vec3 sunDir = normalize(uSunDir);

  // --- depth-based color: dusk teal -> warm sea-glass, not tropical mint ---
  float shallowMix = 1.0 - smoothstep(0.0, 16.0, sd);
  shallowMix = max(shallowMix * shoreFade, shallowMix * 0.22);
  vec3 water = mix(uDeep, uShallow, shallowMix);
  float drift = fbm(uv * 0.014 + vec2(uTime * 0.006, -uTime * 0.004));
  water = mix(water, uDeep * vec3(0.78, 0.96, 1.12), smoothstep(0.40, 0.74, drift) * 0.22);
  water += uShallow * saturate(vCrest) * 0.035;
  water += vec3(0.28, 0.12, 0.04) * shallowMix * 0.16;

  // wrap: thin crests pick up a little key warmth
  float wrap = saturate(dot(nrm, sunDir) * 0.5 + 0.5);
  water += vec3(1.02, 0.58, 0.22) * wrap * saturate(vCrest + 0.12) * 0.06;

  // --- fresnel: the water is a painted sky, not a plastic sheet ---
  vec3 refl = reflect(-view, nrm);
  vec3 skyRefl = duskRamp(refl.y, uHorizon, uRose, uSky);
  float rSun = pow(saturate(dot(normalize(refl), sunDir)), 48.0);
  skyRefl += uSunColor * rSun * 0.55;
  float fres = pow(1.0 - saturate(dot(nrm, view)), 3.6);
  vec2 toFrag = normalize(vWorld.xz - uCam.xz);
  float facingSun = saturate(dot(toFrag, normalize(sunDir.xz)));
  water = mix(water, skyRefl, fres * 0.74);
  water = mix(water, mix(uSky, uHorizon, facingSun * facingSun), fres * facingSun * 0.10);

  // --- sun path: soft anisotropic sheen, kept under bloom threshold ---
  vec3 hv = normalize(view + sunDir);
  float ndh = saturate(dot(nrm, hv));
  float specTight = pow(ndh, 90.0);
  float specMid = pow(ndh, 22.0);
  float specBroad = pow(ndh, 6.0);
  float pathMask = pow(facingSun, 1.8);
  float glit = smoothstep(0.66, 0.92, noise(uv * 1.6 + vec2(uTime * 0.38, -uTime * 0.26)));
  float aniso = pow(saturate(1.0 - abs(dot(toFrag, vec2(-sunDir.z, sunDir.x)))), 1.8);
  water += uSunColor * specTight * (0.22 + glit * 0.55) * (0.40 + 0.60 * aniso);
  water += uSunColor * specMid * 0.14 * (0.30 + 0.70 * pathMask);
  water += uSunColor * specBroad * 0.09 * pathMask;

  // --- shore foam: contact edge + two lapping bands, broken up by the foam map ---
  float foamTex = texture2D(uFoam, uv * 0.085 + vec2(uTime * 0.010, -uTime * 0.006)).r;
  foamTex = mix(foamTex, texture2D(uFoam, uv * 0.19 - vec2(uTime * 0.014, uTime * 0.009)).g, 0.45);
  if (sd < 14.0 && shoreFade > 0.01) {
    float nb = noise(uv * 0.42 + uTime * 0.07);
    float nf = noise(uv * 1.6 - uTime * 0.16);
    float edge = 1.0 - smoothstep(0.0, 1.15 + nb * 0.7, sd);
    float lap1 = sd - 1.7 - sin(uTime * 0.62 + nb * 4.2) * 0.85;
    float band1 = 1.0 - smoothstep(0.0, 1.15, abs(lap1));
    float lap2 = sd - 4.4 - sin(uTime * 0.44 + 2.1 + nb * 5.0) * 1.25;
    float band2 = (1.0 - smoothstep(0.0, 1.55, abs(lap2))) * 0.48;
    float breakup = smoothstep(0.24, 0.74, nf * 0.55 + nb * 0.22 + foamTex * 0.45);
    float foam = saturate(edge * 1.05 + (band1 + band2) * breakup) * shoreFade;
    foam *= mix(0.58, 1.12, foamTex);
    vec3 foamCol = mix(uFoamColor, uHorizon, 0.22);
    water = mix(water, foamCol, foam * 0.90);
  }

  // almost no open-water crest foam — this is a dusk harbor, not a storm
  float crestFoam = saturate(vCrest * 2.2 - 0.62) * smoothstep(0.48, 0.82, foamTex);
  water = mix(water, uFoamColor, crestFoam * 0.08);

  // --- distance fog matches THREE.Fog (view-space z, same 30–180 near/far) ---
  float fogF = smoothstep(uFogRange.x, uFogRange.y, vFogDepth);
  vec3 fogCol = mix(uFogColor, uHorizon, saturate(-view.y * 0.70 + 0.28) * 0.62);
  water = mix(water, fogCol, fogF);

  gl_FragColor = vec4(water, mix(0.972, 1.0, fogF));
}
`;class u2{mesh;mat;rise;constructor(e,t,n){const r=oh().map(c=>new D(c.x,c.z,c.radius*.96));this.rise=new Float32Array(r.length),this.mat=new _t({vertexShader:l2,fragmentShader:h2,transparent:!0,fog:!1,toneMapped:!0,defines:{ISLAND_COUNT:r.length},uniforms:{uTime:{value:0},uDeep:{value:new xe(1457740)},uShallow:{value:new xe(6991264)},uSky:{value:new xe(zp)},uHorizon:{value:new xe(Op)},uRose:{value:new xe(Fp)},uSunDir:{value:Ns},uSunColor:{value:new xe(gh)},uFoamColor:{value:new xe(16773604)},uFogColor:{value:new xe(Bp)},uFogRange:{value:new ce(kp,Hp)},uIslands:{value:r},uRise:{value:this.rise},uCam:{value:n.position},uFoam:{value:t}}});const o=Math.min(e.waterSeg,160),a=new Pn(980,980,o,o);a.rotateX(-Math.PI/2),this.mesh=new ee(a,this.mat),this.mesh.position.y=0,this.mesh.renderOrder=1}setRise(e,t){e<0||e>=this.rise.length||(this.rise[e]=vt.clamp(t,0,1))}update(e){this.mat.uniforms.uTime.value=e}}class d2{group=new Ve;slots;terrain;water;sky;lighting;particles;boats=[];helis=[];houses=[];pads=[];mailboxes=[];lanterns=[];warehouse=null;lighthouse=null;harbor=new Ve;textures;lastRide="";constructor(e,t){const n=new VM;this.textures=t_(n),this.slots=oh(),this.sky=new mS,this.lighting=new SS(e),this.terrain=new JS(e,this.textures,this.slots),this.water=new u2(e,this.textures.foam,t),this.particles=new NS(e);const s=new c2(e);this.group.add(this.sky.mesh),this.group.add(this.lighting.group),this.group.add(this.terrain.group),this.group.add(this.water.mesh),this.harbor.name="harbor",this.harbor.visible=!1;const r=Ld(this.textures.wood,15254394);r.position.set(14,.28,70),r.rotation.y=-.55,this.harbor.add(r),this.harbor.add(s.group),this.group.add(this.particles.gulls,this.particles.spray),this.lighthouse=OS(this.textures.plaster,this.textures.wood),this.warehouse=FS(this.textures.plaster,this.textures.wood),this.harbor.add(this.lighthouse),this.harbor.add(this.warehouse),this.harbor.add(zS(this.textures.wood)),this.harbor.add(BS(this.textures.wood)),this.harbor.add(HS(this.textures.wood,this.textures.plaster));const o=[[8,34,14173487],[11,36,16248022],[14,33,4834742],[-7,30,15254394],[16,28,12865582]];for(const[f,d,m]of o){const v=WS(m);v.position.set(f,Math.max(.12,Ht(f,d))+.02,d),this.harbor.add(v)}const a=new ee(new Qt(3.4,.08,22),new $e({color:15254634}));a.position.set(0,.72,22),a.receiveShadow=!0,this.harbor.add(a);for(const[f,d,m]of[[-5.2,24,.35],[5.6,20,-2.4]]){const v=VS(this.textures.wood);v.position.set(f,Math.max(.3,Ht(f,d))+.02,d),v.rotation.y=m,this.harbor.add(v)}const c=Id();c.position.set(3.2,.7,26),this.mailboxes.push(c),this.harbor.add(c);const l=[[-3.1,.84,30,!0],[3.1,.84,34,!1],[-3.1,.84,38.5,!0],[3.1,.84,43,!1],[-3.1,.84,47.5,!0]],h=[];for(const[f,d,m,v]of l){const g=Cl(16757575,v);g.position.set(f,d,m),g.rotation.y=f<0?0:Math.PI,this.lanterns.push(g),this.harbor.add(g),h.push(new D(f+(f<0?.42:-.42),d+2.62,m))}this.harbor.add(GS(h));const u=[[18,4,!0],[-12,10,!0],[8,-10,!1]];for(const[f,d,m]of u){const v=Cl(16757575,m);v.position.set(f,Math.max(.2,Ht(f,d))+.02,d),this.lanterns.push(v),this.harbor.add(v)}this.group.add(this.harbor),this.slots.forEach((f,d)=>{const m=pa(f),v=qi(f),g=c_(this.textures.wood,this.textures.plaster,d);g.position.set(v.x,-8,v.z),g.rotation.y=v.yaw,g.visible=!1,g.userData.baseY=qn(f,v.x,v.z),this.houses.push(g),this.group.add(g);const p=ea(f),M=l_();M.position.set(p.x,-8,p.z),M.visible=!1,M.userData.baseY=qn(f,p.x,p.z),this.pads.push(M),this.group.add(M);const y=h_(d);y.position.set(p.x,qn(f,p.x,p.z)+.85,p.z),y.rotation.y=p.yaw,y.visible=!1,this.helis.push(y),this.group.add(y);const x=ih(f),R=Ld(this.textures.wood,[12865582,15255968,4025210,13935180][d%4]);R.position.set(x.x,.25,x.z),R.rotation.y=x.yaw,R.visible=!1,this.boats.push(R),this.group.add(R);const b=Id(),C=Br(f);b.position.set(C.x+Math.sin(m+.7)*1.4,.6,C.z+Math.cos(m+.7)*1.4),b.visible=!1,this.mailboxes.push(b),this.group.add(b);const E=m-Math.PI/2,w=Dd(this.textures.wood);w.rotation.y=f.seed*2.3,w.position.set(f.x+Math.sin(E)*f.radius*.32,-8,f.z+Math.cos(E)*f.radius*.32),w.visible=!1,w.userData.slotTree=!0,this.group.add(w),this.boats[d].userData.tree=w;for(let _=0;_<4;_++){const I=m+.8+_*1.15,k=f.radius*(.38+_%2*.14),O=Dd(this.textures.wood);O.rotation.y=f.seed*2.3+_,O.scale.setScalar(.82+_%3*.12),O.position.set(f.x+Math.sin(I)*k,-8,f.z+Math.cos(I)*k),O.visible=!1,O.userData.slotTree=!0,this.group.add(O),w.userData.grove||(w.userData.grove=[]),w.userData.grove.push(O)}})}applyIslands(e){const t=e[0]?.rise??0;this.harbor.visible=t>.28,this.harbor.position.y=t>.55?0:vt.lerp(-7,0,t/.55);for(const n of e){this.terrain.setSatelliteRise(n.slot,n.rise),this.water.setRise(n.slot,n.rise);const s=this.boats[n.slot],r=this.mailboxes[n.slot+1],o=this.houses[n.slot],a=this.pads[n.slot],c=n.rise;if(n.slot===0){if(o&&(o.visible=!1),a&&(a.visible=!1),this.helis[n.slot]&&!this.helis[n.slot].userData.ridden&&(this.helis[n.slot].visible=!1),s&&!s.userData.ridden){s.visible=!1;const h=s.userData.tree;h&&(h.visible=!1,h.userData.grove?.forEach(f=>{f.visible=!1}))}r&&(r.visible=!1);continue}if(o){const h=o.userData.baseY;o.visible=c>.22,o.position.y=c>.4?h:vt.lerp(-8,h,c/.4)}if(a){const h=a.userData.baseY;a.visible=c>.28,a.position.y=c>.4?h:vt.lerp(-8,h,c/.4)}const l=this.helis[n.slot];if(l&&!l.userData.ridden){const h=ea(this.slots[n.slot]),u=qn(this.slots[n.slot],h.x,h.z)+.85;l.visible=c>.22,l.position.x=h.x,l.position.z=h.z,l.position.y=c>.4?u:vt.lerp(-8,u,c/.4),l.rotation.y=h.yaw}if(s){s.visible=s.userData.ridden||c>.12;const h=s.userData.tree;h&&(h.visible=c>.35,h.position.y=vt.lerp(-6,.4,c),h.userData.grove?.forEach((f,d)=>{f.visible=c>.38,f.position.y=vt.lerp(-6,.35,c)+d*.02}))}r&&(r.visible=c>.55,r.position.y=vt.lerp(-2,.6,c))}}syncVehicles(e,t,n){for(const s of e){const r=s.kind==="heli"?this.helis[s.slot]:this.boats[s.slot];if(!r)continue;const o=(n?.(s.slot)??1)>.18,a=t.mode===s.kind&&t.slot===s.slot,c=a||!!s.riderId;if(r.userData.ridden=c,r.visible=o||c,!r.visible)continue;const l=new D;let h=s.yaw;if(a){l.copy(t.pos),s.kind==="boat"&&(l.y=t.pos.y-.06),s.kind==="heli"&&(l.y=t.pos.y-.18),h=t.yaw,r.position.copy(l),r.rotation.y=h;const u=Math.cos(h),f=-Math.sin(h),d=Math.sin(h),m=Math.cos(h),v=t.vel.x*u+t.vel.z*f,g=t.vel.x*d+t.vel.z*m,p=vt.clamp(-v*.045,-.32,.32),M=vt.clamp(g*.012+(s.kind==="heli"?-t.vel.y*.03:0),-.18,.2);r.rotation.z+=(p-r.rotation.z)*.12,r.rotation.x+=(M-r.rotation.x)*.1}else{l.set(s.x,s.y,s.z),s.kind==="boat"&&!c&&(l.y=.28+Math.sin(performance.now()*.002+s.slot)*.05),r.position.lerp(l,c?.35:.18);const u=h-r.rotation.y,f=Math.atan2(Math.sin(u),Math.cos(u));r.rotation.y+=f*.2,r.rotation.x+=(0-r.rotation.x)*.08,r.rotation.z+=(0-r.rotation.z)*.08}}}forceRide(e,t,n,s,r){if(e==="none")return;const o=e==="heli"?this.helis[t]:this.boats[t];if(!o)return;o.userData.ridden=!0,o.visible=!0,o.position.copy(n),e==="boat"&&(o.position.y=n.y-.04),e==="heli"&&(o.position.y=n.y-.16),o.rotation.y=s;const a=Math.cos(s),c=-Math.sin(s),l=Math.sin(s),h=Math.cos(s),u=r.x*a+r.z*c,f=r.x*l+r.z*h,d=vt.clamp(-u*.05,-.34,.34),m=vt.clamp(f*.014+(e==="heli"?-r.y*.03:0),-.2,.22);o.rotation.z+=(d-o.rotation.z)*.16,o.rotation.x+=(m-o.rotation.x)*.14}setInterior(e){const t=e??"";this.lastRide!==t&&(this.lastRide=t,this.houses.forEach((n,s)=>ic(n,e===`house-${s}`)),this.warehouse&&ic(this.warehouse,e==="warehouse"),this.lighthouse&&ic(this.lighthouse,e==="lighthouse"))}update(e,t,n){this.sky.update(e),this.water.update(e),this.lighting.update(e,n),this.particles.update(e,t),this.boats.forEach((s,r)=>{!s.visible||s.userData.ridden||(s.rotation.y+=Math.sin(e*.3+r)*4e-4,s.position.y+=Math.sin(e*1.4+r)*.002)}),this.helis.forEach(s=>{s.visible&&u_(s,!!s.userData.ridden,1/60)})}}function Ss(){const i=document.activeElement;return!!i&&(i.tagName==="INPUT"||i.tagName==="TEXTAREA"||i.isContentEditable)}function Ll(){return matchMedia("(pointer: coarse), (max-width: 820px)").matches}class f2{constructor(e){this.canvas=e,addEventListener("keydown",t=>{Ss()||(this.keys.add(t.code),t.code==="KeyE"&&(this.interact=!0),t.code==="KeyG"&&(this.wave=!0),t.code==="Space"&&!t.repeat&&(this.jump=!0,this.jumpHeld=!0),["Space","KeyW","KeyA","KeyS","KeyD"].includes(t.code)&&t.preventDefault())}),addEventListener("keyup",t=>{this.keys.delete(t.code),t.code==="Space"&&(this.jumpHeld=!1)}),addEventListener("blur",()=>{this.keys.clear(),this.dragging=!1,this.jump=!1,this.jumpHeld=!1,this.touchX=0,this.touchZ=0,this.climb=0}),this.canvas.addEventListener("click",()=>{if(!(this.locked||Ll()))try{const t=this.canvas.requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.mx=0,this.my=0}),this.canvas.addEventListener("mousedown",t=>{!this.locked&&t.button===0&&!Ll()&&(this.dragging=!0)}),addEventListener("mouseup",()=>{this.dragging=!1}),addEventListener("mousemove",t=>{(this.locked||this.dragging)&&(this.mx+=t.movementX,this.my+=t.movementY)}),this.bindTouch()}keys=new Set;mx=0;my=0;locked=!1;interact=!1;wave=!1;touchX=0;touchZ=0;climb=0;jump=!1;jumpHeld=!1;dragging=!1;lookId=null;stickId=null;lastLookX=0;lastLookY=0;bindTouch(){const e=document.getElementById("stick"),t=document.getElementById("stick-knob"),n=document.getElementById("look-pad"),s=document.getElementById("jump-btn"),r=document.getElementById("use-btn"),o=document.getElementById("down-btn"),a=document.getElementById("up-btn");if(!e||!n)return;const c=(d,m)=>{t&&(t.style.transform=`translate(${d*28}px, ${m*28}px)`)},l=(d,m)=>{const v=e.getBoundingClientRect(),g=(d-(v.left+v.width/2))/(v.width*.42),p=(m-(v.top+v.height/2))/(v.height*.42),M=Math.hypot(g,p),y=M>1?1/M:1;this.touchX=g*y,this.touchZ=p*y,c(this.touchX,this.touchZ)};e.addEventListener("pointerdown",d=>{d.preventDefault(),e.setPointerCapture(d.pointerId),this.stickId=d.pointerId,l(d.clientX,d.clientY)},{passive:!1}),e.addEventListener("pointermove",d=>{this.stickId===d.pointerId&&(d.preventDefault(),l(d.clientX,d.clientY))},{passive:!1});const h=d=>{this.stickId===d.pointerId&&(this.stickId=null,this.touchX=0,this.touchZ=0,c(0,0))};e.addEventListener("pointerup",h),e.addEventListener("pointercancel",h),n.addEventListener("pointerdown",d=>{d.target.closest("button, input, a, .stick, .touch__actions, .chat, .hud__actions, .players")||(d.preventDefault(),n.setPointerCapture(d.pointerId),this.lookId=d.pointerId,this.lastLookX=d.clientX,this.lastLookY=d.clientY)},{passive:!1}),n.addEventListener("pointermove",d=>{if(this.lookId!==d.pointerId)return;d.preventDefault();const m=d.movementX||d.clientX-this.lastLookX,v=d.movementY||d.clientY-this.lastLookY;this.mx+=m*1.35,this.my+=v*1.35,this.lastLookX=d.clientX,this.lastLookY=d.clientY},{passive:!1});const u=d=>{this.lookId===d.pointerId&&(this.lookId=null)};n.addEventListener("pointerup",u),n.addEventListener("pointercancel",u);const f=(d,m,v)=>{if(!d)return;const g=M=>{M.preventDefault(),d.setPointerCapture(M.pointerId),m()},p=()=>v();d.addEventListener("pointerdown",g,{passive:!1}),d.addEventListener("pointerup",p),d.addEventListener("pointercancel",p),d.addEventListener("pointerleave",p)};f(s,()=>{this.jump=!0,this.jumpHeld=!0,this.climb=1},()=>{this.jumpHeld=!1,this.climb>0&&(this.climb=0)}),f(a,()=>{this.jump=!0,this.jumpHeld=!0,this.climb=1},()=>{this.jumpHeld=!1,this.climb>0&&(this.climb=0)}),f(o,()=>{this.climb=-1},()=>{this.climb<0&&(this.climb=0)}),r?.addEventListener("pointerdown",d=>{d.preventDefault(),this.interact=!0},{passive:!1})}axis(){if(Ss())return{x:0,z:0,sprint:!1,jump:!1};const e=(this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0),t=(this.keys.has("KeyS")?1:0)-(this.keys.has("KeyW")?1:0),n=Math.max(-1,Math.min(1,e+this.touchX)),s=Math.max(-1,Math.min(1,t+this.touchZ));return{x:n,z:s,sprint:this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||Math.hypot(this.touchX,this.touchZ)>.88,jump:this.keys.has("Space")||this.jumpHeld}}vertical(){if(Ss())return 0;const e=(this.keys.has("Space")||this.keys.has("KeyR")?1:0)-(this.keys.has("ControlLeft")||this.keys.has("KeyF")||this.keys.has("KeyC")?1:0);return Math.max(-1,Math.min(1,e+this.climb))}consumeJump(){const e=this.jump&&!Ss();return this.jump=!1,e}consumeLook(){const e={x:this.mx,y:this.my};return this.mx=0,this.my=0,e}consumeInteract(){return this.interact?(this.interact=!1,Ss()?(document.activeElement?.blur(),!1):!0):!1}consumeWave(){const e=this.wave&&!Ss();return this.wave=!1,e}}function p2(i){const t=matchMedia("(max-width: 800px), (pointer: coarse)").matches?"low":"high";return t==="low"?{preset:"low",pixelRatio:Math.min(devicePixelRatio,1.25),shadowMap:1024,waterSeg:80,terrainSeg:96,grass:400,bloom:!1,smaa:!1,particles:80}:t==="med"?{preset:"med",pixelRatio:Math.min(devicePixelRatio,1.5),shadowMap:2048,waterSeg:140,terrainSeg:160,grass:900,bloom:!0,smaa:!0,particles:160}:{preset:"high",pixelRatio:Math.min(devicePixelRatio,2),shadowMap:2048,waterSeg:200,terrainSeg:220,grass:1600,bloom:!0,smaa:!0,particles:260}}const m2=[12868666,15254394,4029035,8031428,13925024,13935180];class g2{renderer;world;input;overlay=new wS;audio=new KM;room=null;donation=null;local=null;cam=null;avatars=new Map;letters=new Map;carrying=null;acc=0;last=performance.now();playing=!1;waving=!1;placed=!1;placedSlot=-1;left=!1;constructor(e){const t=p2();this.renderer=new vS(e,t),this.world=new d2(t,this.renderer.camera),this.renderer.scene.add(this.world.group),this.input=new f2(e),this.overlay.onEnter=(n,s)=>this.start(n,s),this.overlay.onDonateToggle=()=>this.toggleDonate(),this.overlay.onWave=()=>this.wave(),this.overlay.onChat=n=>this.say(n),globalThis.__tide={dump:()=>this.probe(),home:()=>this.debugHome(),enter:()=>{const n=this.local;if(!n)return{error:"no local"};const s=this.nearPlace(n)??{id:`house-${this.room?.snapshot.peers.find(r=>r.id===this.room?.id)?.islandSlot??0}`,kind:"house",slot:this.room?.snapshot.peers.find(r=>r.id===this.room?.id)?.islandSlot??0,label:"home"};return this.togglePlace(s),this.probe()},board:(n="boat")=>{const s=this.local,r=this.room;if(!s||!r)return{error:"no local"};const o=r.snapshot.peers.find(a=>a.id===r.id)?.islandSlot??0;return this.enterVehicle(n,o),this.probe()}},this.loop()}debugHome(){const e=this.room,t=this.local;if(!e||!t)return{error:"not playing"};const n=e.snapshot.peers.find(a=>a.id===e.id);if(!this.world.slots[n?.islandSlot??0])return{error:"no slot"};const r=Ed({id:`house-${n?.islandSlot??0}`,kind:"house",slot:n?.islandSlot??0},this.world.slots),o=_c({id:`house-${n?.islandSlot??0}`,kind:"house",slot:n?.islandSlot??0},this.world.slots);return t.applyPose(o.x,o.y,o.z,o.yaw),this.cam&&(this.cam.yaw=o.yaw+Math.PI),this.placed=!0,{slot:n?.islandSlot??0,state:this.probe(),door:o,in:r}}probe(){const e=this.local,t=this.room,n=e?.vehicleSlot??0,s=e?.mode==="heli"?this.world.helis[n]:e?.mode==="boat"?this.world.boats[n]:null;return{playing:this.playing,placed:this.placed,mode:e?.mode??"none",inside:!!e?.inside,place:e?.place?.id??null,x:e?.position.x??0,y:e?.position.y??0,z:e?.position.z??0,yaw:e?.yaw??0,firstPerson:!!this.cam?.firstPerson,peers:t?.snapshot.peers.length??0,vehicle:s?{x:s.position.x,y:s.position.y,z:s.position.z,slot:n}:null,rise:t?.snapshot.islands.map(r=>Number(r.rise.toFixed(2)))??[],near:e?Td(this.world.slots,e.position.x,e.position.z,this.riseOf)?.id??null:null}}start(e,t){if(this.playing)return;this.playing=!0,this.audio.start(),this.overlay.hideBoot(),this.room=new Pw(e,t),this.room.onToast=s=>this.overlay.toastMsg(s),this.room.onChat=s=>{this.overlay.pushChat(s.name,s.text),this.avatars.get(s.from)?.say(s.text)},this.donation=new JM(t),this.local=new tS(this.world.slots),this.cam=new kw(this.renderer.camera),this.room.hello();const n=()=>{this.left||(this.left=!0,this.room?.leave())};addEventListener("beforeunload",n),addEventListener("pagehide",n),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&this.room?.heartbeat(this.local?this.selfPresence(this.local):null)}),this.overlay.toastMsg("your home, boat, and helicopter are on your islet"),window.setInterval(()=>{this.room&&this.local&&this.room.heartbeat(this.selfPresence(this.local))},800)}toggleDonate(){!this.room||!this.donation||(this.room.donate=!this.room.donate,this.donation.setEnabled(this.room.donate),localStorage.setItem("tidelight-donate",this.room.donate?"1":"0"))}say(e){this.room?.chat(e),this.audio.blip("wave")}wave(){this.waving=!0,this.room?.wave(),this.audio.blip("wave"),window.setTimeout(()=>{this.waving=!1},700)}loop=()=>{requestAnimationFrame(this.loop);const e=performance.now(),t=Math.min(.05,(e-this.last)/1e3);this.last=e,this.world.update(e*.001,this.room?.snapshot.peers.filter(n=>n.donate).length??0,this.local?.position),this.playing&&this.room&&this.local&&this.cam&&this.donation?this.tickPlay(t):this.idleCam(e*.001),this.renderer.render(e*.001),this.overlay.markFps()};idleCam(e){const t=this.renderer.camera;t.position.set(Math.sin(e*.06)*10,7.2,88+Math.cos(e*.06)*4),t.lookAt(4,3.2,18)}tickPlay(e){const t=this.room,n=this.local,s=this.cam,r=this.donation,o=t.snapshot.peers.find(l=>l.id===t.id);if(!o){this.idleCam(performance.now()*.001);return}if(!this.placed||this.placedSlot!==o.islandSlot){const l=this.world.slots[o.islandSlot]??this.world.slots[0],h=Cp(l);n.position.set(h.x,h.y,h.z),n.yaw=h.yaw,n.vehicleSlot=o.islandSlot,s.yaw=h.yaw+Math.PI,s.intro=0,this.placed=!0,this.placedSlot=o.islandSlot}this.handleUse();const a=this.input.consumeLook();s.setTravel(n.mode,n.inside),s.setRoom(n.inside&&n.place?this.roomFrame(n.place):null),s.update(e,n.position,a,this.input.locked),n.update(e,this.input,s.yaw,l=>t.snapshot.islands[l]?.rise??0),this.input.consumeWave()&&this.wave();const c=this.selfPresence(n);for(this.syncAvatars(),this.syncLetterMeshes(),this.world.applyIslands(t.snapshot.islands),this.world.syncVehicles(t.snapshot.vehicles??[],{id:t.id,mode:n.mode,slot:n.vehicleSlot,pos:n.position,yaw:n.yaw,vel:n.velocity},l=>t.snapshot.islands[l]?.rise??0),this.world.forceRide(n.mode,n.vehicleSlot,n.position,n.yaw,n.velocity),this.world.setInterior(n.inside&&n.place?n.place.id:null),r.lastPoints&&this.world.particles.applyFlock(r.lastPoints),r.tick(performance.now()*.001,c.islandSlot),this.overlay.setTravel(n.mode),n.mode!=="none"?this.overlay.setUseLabel("out"):n.inside?this.overlay.setUseLabel("out"):this.nearPlace(n)?this.overlay.setUseLabel("in"):this.overlay.setUseLabel("use"),this.acc+=e;this.acc>=yc;)this.acc-=yc,t.publishSelf(c),t.tickHost(yc,r.lastMs);this.overlay.sync(t.snapshot,t.donate,t.isHost,r.lastMs)}selfPresence(e){const t=this.room,n=t.snapshot.peers.find(s=>s.id===t.id);return{id:t.id,name:t.name,color:n?.color??m2[0],x:e.position.x,y:e.position.y,z:e.position.z,yaw:e.yaw,moving:e.moving,waving:this.waving,carrying:!!this.carrying,donate:t.donate,islandSlot:n?.islandSlot??0,lastSeen:performance.now(),skin:n?.skin??t.skin,vehicle:e.mode,vehicleSlot:e.mode==="none"?n?.islandSlot??0:e.vehicleSlot,inside:e.inside}}syncAvatars(){const e=this.room,t=new Set;for(const n of e.snapshot.peers){t.add(n.id);let s=this.avatars.get(n.id);s||(s=new Nw(n.color,n.name,n.skin),this.avatars.set(n.id,s),this.renderer.scene.add(s.group)),n.id===e.id&&this.local?(s.group.position.copy(this.local.position),this.local.mode==="boat"&&(s.group.position.y+=.18),this.local.mode==="heli"&&(s.group.position.y+=.22),s.group.rotation.y=this.local.yaw,s.group.visible=!0,s.showTag(!1),s.pose(this.local.moving,1,this.waving,.016,!!this.carrying,this.local.mode!=="none")):(s.showTag(!0),s.group.position.lerp(new D(n.x,n.y,n.z),.25),s.group.rotation.y=n.yaw,s.pose(n.moving,1,n.waving,.016,n.carrying,n.vehicle!=="none"))}for(const[n,s]of this.avatars)t.has(n)||(this.renderer.scene.remove(s.group),this.avatars.delete(n))}syncLetterMeshes(){const e=this.room,t=new Set;for(const n of e.snapshot.letters){t.add(n.id);let s=this.letters.get(n.id);if(!s){s=new ee(new Qt(.85,.12,.55),new $e({color:16248800}));const r=new ee(new Qt(.18,.03,.16),new $e({color:12868666}));r.position.set(.24,.08,-.12),s.add(r);const o=new ee(new Qt(.85,.02,.22),new $e({color:15260868}));o.position.set(0,.07,.16),s.add(o),s.castShadow=!0,this.letters.set(n.id,s),this.renderer.scene.add(s)}if(n.delivered){s.visible=!1;continue}if(s.visible=!0,n.carrierId===e.id&&this.local)s.position.copy(this.local.position).add(new D(.25,1.15,.2));else if(n.carrierId){const r=e.snapshot.peers.find(o=>o.id===n.carrierId);r&&s.position.set(r.x+.25,r.y+1.15,r.z+.2)}else s.position.set(n.x,n.y,n.z),s.rotation.y+=.01}for(const[n,s]of this.letters)t.has(n)||(this.renderer.scene.remove(s),this.letters.delete(n))}handleUse(){const e=this.local;if(!this.input.consumeInteract()){this.overlay.setPrompt(this.nearPrompt(e.position));return}if(e.mode!=="none"){this.exitVehicle();return}const t=this.nearVehicle(e.position),n=this.nearPlace(e),s=t?this.vehicleDistance(t.kind,t.slot,e.position):1/0,r=n?this.doorDistance(n,e.position):1/0;if(t&&s<=r&&s<4.2){this.enterVehicle(t.kind,t.slot);return}if(n&&(e.inside||r<3.4)){this.togglePlace(n);return}if(t){this.enterVehicle(t.kind,t.slot);return}this.handleLetters()}vehicleDistance(e,t,n){const s=e==="heli"?this.world.helis[t]:this.world.boats[t];if(s?.visible)return Math.hypot(s.position.x-n.x,s.position.z-n.z);const r=this.room?.snapshot.vehicles?.find(o=>o.kind===e&&o.slot===t);return r?Math.hypot(r.x-n.x,r.z-n.z):99}doorDistance(e,t){const n=_c(e,this.world.slots);return Math.hypot(n.x-t.x,n.z-t.z)}roomFrame(e){if(e.kind==="warehouse")return{x:pt.x,z:pt.z,yaw:0,w:pt.w-.6,d:pt.d-.6,floor:pt.floor,h:4.6};if(e.kind==="lighthouse")return{x:wt.x,z:wt.z,yaw:0,w:3.6,d:3.6,floor:wt.floor,h:4.2};const t=this.world.slots[e.slot??0],n=qi(t);return{x:n.x,z:n.z,yaw:n.yaw,w:fa-.5,d:yi-.5,floor:Lp(e,this.world.slots),h:3.05}}riseOf=e=>this.room?.snapshot.islands[e]?.rise??0;nearPlace(e){return e.inside&&e.place?e.place:Td(this.world.slots,e.position.x,e.position.z,this.riseOf)}togglePlace(e){const t=this.local,n=!t.inside||t.place?.id!==e.id,s=n?Ed(e,this.world.slots):_c(e,this.world.slots);t.applyPose(s.x,s.y,s.z,s.yaw),t.setStay(n?e:null),this.cam&&(this.cam.yaw=s.yaw+Math.PI,this.cam.enterInterior(n)),this.overlay.toastMsg(n?`inside ${e.label}`:`left ${e.label}`),this.audio.blip(n?"pick":"drop")}enterVehicle(e,t){const n=this.room,s=this.local,r=(n.snapshot.vehicles??[]).find(a=>a.kind===e&&a.slot===t);if(r?.riderId&&r.riderId!==n.id){this.overlay.toastMsg("already taken");return}const o=n.snapshot.peers.find(a=>a.id===n.id);o&&(o.vehicleSlot=t),r&&(s.position.set(r.x,r.y,r.z),s.yaw=r.yaw),s.mode=e,s.vehicleSlot=t,s.velocity.set(0,0,0),n.claimVehicle(e,t,s.position.x,s.position.y,s.position.z,s.yaw),this.world.forceRide(e,t,s.position,s.yaw,s.velocity),this.overlay.toastMsg(e==="heli"?"helicopter — space up · F down":"boat — sail the harbor"),this.audio.blip("pick")}exitVehicle(){const e=this.local;if(e.mode==="heli"&&!e.grounded){this.overlay.toastMsg("land first");return}const t=e.mode;e.mode="none",this.room?.releaseVehicle(t,e.vehicleSlot,e.position.x,e.position.y,e.position.z,e.yaw);const n=t==="boat"?1.8:2.2;e.position.x+=Math.sin(e.yaw+1.2)*n,e.position.z+=Math.cos(e.yaw+1.2)*n,e.velocity.set(0,0,0),this.overlay.toastMsg(t==="heli"?"back on the sand":"hopped off"),this.audio.blip("drop")}nearVehicle(e){const t=this.room;let n=null;const s=(r,o,a,c,l)=>{if(l&&l!==t.id)return;const h=Math.hypot(a-e.x,c-e.z);h>(r==="heli"?5.2:5.6)||(!n||h<n.d)&&(n={kind:r,slot:o,d:h})};this.world.boats.forEach((r,o)=>{if(!r.visible)return;const a=t.snapshot.vehicles?.find(c=>c.kind==="boat"&&c.slot===o);s("boat",o,r.position.x,r.position.z,a?.riderId??null)}),this.world.helis.forEach((r,o)=>{if(!r.visible)return;const a=t.snapshot.vehicles?.find(c=>c.kind==="heli"&&c.slot===o);s("heli",o,r.position.x,r.position.z,a?.riderId??null)});for(const r of t.snapshot.vehicles??[])s(r.kind,r.slot,r.x,r.z,r.riderId);return n}handleLetters(){const e=this.room,t=this.local;if(this.carrying){const s=this.world.slots[this.carrying.destSlot],r=s?new D(s.x,1,s.z):null,o=new D(3.2,1,32),a=r&&r.distanceTo(t.position)<4&&(e.snapshot.islands[this.carrying.destSlot]?.rise??0)>.5,c=o.distanceTo(t.position)<3;a||c?(this.carrying.delivered=!0,this.carrying.carrierId=null,e.publishLetter(this.carrying),this.overlay.toastMsg(a?"delivered across donated water":"returned to the dock"),this.audio.blip("drop"),this.carrying=null):(this.carrying.carrierId=null,this.carrying.x=t.position.x,this.carrying.y=Math.max(Ht(t.position.x,t.position.z),.4)+.4,this.carrying.z=t.position.z,e.publishLetter(this.carrying),this.carrying=null,this.audio.blip("drop"));return}const n=e.snapshot.letters.find(s=>!s.delivered&&!s.carrierId&&Math.hypot(s.x-t.position.x,s.z-t.position.z)<2.2);n&&(n.carrierId=e.id,this.carrying=n,e.publishLetter(n),this.overlay.toastMsg(`letter for islet ${n.destSlot+1}`),this.audio.blip("pick"))}nearPrompt(e){const t=Ll()?"use":"E";if(this.local?.mode==="heli")return this.local.grounded?`${t}  hop out`:"land to hop out · space up · F down";if(this.local?.mode==="boat")return`${t}  hop out`;const n=this.nearVehicle(e);if(n)return n.kind==="heli"?`${t}  fly helicopter`:`${t}  board boat`;if(this.carrying)return`${t}  deliver or set down`;const s=this.local;if(s){const o=this.nearPlace(s);if(o)return s.inside&&s.place?.id===o.id?`${t}  leave ${o.label}`:`${t}  enter ${o.label}`}return this.room.snapshot.letters.some(o=>!o.delivered&&!o.carrierId&&Math.hypot(o.x-e.x,o.z-e.z)<2.2)?`${t}  take the letter`:null}}const v2=document.getElementById("gl");new g2(v2);
