webpackJsonp([0xe3772388b58],{74:function(e,r){"use strict";e.exports={colorPrimary:"rgb(218, 55, 67)",colorPrimaryActive:"rgb(184, 34, 45)",colorGrayPrimary:"rgb(51, 51, 51)",colorGraySecondary:"rgb(113, 113, 113)",colorGrayUtility:"rgb(225, 225, 225)",colorGrayActive:"rgb(247, 247, 247)",colorWhite:"rgb(255, 255, 255)"}},89:function(e,r,n){var t,f;(function(e){(function(){var n,a,u,o,c,l,i,s,d,b,h,p,g,m,y,v,k,w,_,N,x,M,A,O,j,G,P,E,q,L,B,R,S,Y,z,C,U,X,F,V,I,K,Z,D,$,J,T,W,H,Q,ee,re,ne,te,fe,ae,ue,oe,ce,le,ie,se,de,be,he,pe,ge,ye,ve,ke,we,_e,Ne,xe,Me,Ae,Oe,je,Ge,Pe,Ee,qe,Le=[].slice;je=function(){var e,r,n,t,f;for(e={},f="Boolean Number String Function Array Date RegExp Undefined Null".split(" "),t=0,r=f.length;t<r;t++)n=f[t],e["[object "+n+"]"]=n.toLowerCase();return function(r){var n;return n=Object.prototype.toString.call(r),e[n]||"object"}}(),W=function(e,r,n){return null==r&&(r=0),null==n&&(n=1),e<r&&(e=r),e>n&&(e=n),e},Ge=function(e){return e.length>=3?[].slice.call(e):e[0]},x=function(e){var r,n;for(e._clipped=!1,e._unclipped=e.slice(0),r=n=0;n<3;r=++n)r<3?((e[r]<0||e[r]>255)&&(e._clipped=!0),e[r]<0&&(e[r]=0),e[r]>255&&(e[r]=255)):3===r&&(e[r]<0&&(e[r]=0),e[r]>1&&(e[r]=1));return e._clipped||delete e._unclipped,e},o=Math.PI,Ne=Math.round,O=Math.cos,q=Math.floor,ue=Math.pow,H=Math.log,Me=Math.sin,Ae=Math.sqrt,m=Math.atan2,re=Math.max,g=Math.abs,i=2*o,c=o/3,a=o/180,l=180/o,N=function(){return arguments[0]instanceof n?arguments[0]:function(e,r,n){n.prototype=e.prototype;var t=new n,f=e.apply(t,r);return Object(f)===f?f:t}(n,arguments,function(){})},N.default=N,p=[],"undefined"!=typeof e&&null!==e&&null!=e.exports&&(e.exports=N),t=[],f=function(){return N}.apply(r,t),!(void 0!==f&&(e.exports=f)),N.version="1.3.5",h={},d=[],b=!1,n=function(){function e(){var e,r,n,t,f,a,u,o,c;for(a=this,r=[],o=0,t=arguments.length;o<t;o++)e=arguments[o],null!=e&&r.push(e);if(r.length>1&&(u=r[r.length-1]),null!=h[u])a._rgb=x(h[u](Ge(r.slice(0,-1))));else{for(b||(d=d.sort(function(e,r){return r.p-e.p}),b=!0),c=0,f=d.length;c<f&&(n=d[c],!(u=n.test.apply(n,r)));c++);u&&(a._rgb=x(h[u].apply(h,r)))}null==a._rgb&&console.warn("unknown format: "+r),null==a._rgb&&(a._rgb=[0,0,0]),3===a._rgb.length&&a._rgb.push(1)}return e.prototype.toString=function(){return this.hex()},e.prototype.clone=function(){return N(me._rgb)},e}(),N._input=h,N.brewer=w={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},function(){var e,r;r=[];for(e in w)r.push(w[e.toLowerCase()]=w[e]);return r}(),Pe={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},N.colors=A=Pe,Z=function(){var e,r,n,t,f,a,o,c,l;return r=Ge(arguments),f=r[0],e=r[1],n=r[2],c=(f+16)/116,o=isNaN(e)?c:c+e/500,l=isNaN(n)?c:c-n/200,c=u.Yn*D(c),o=u.Xn*D(o),l=u.Zn*D(l),a=qe(3.2404542*o-1.5371385*c-.4985314*l),t=qe(-.969266*o+1.8760108*c+.041556*l),n=qe(.0556434*o-.2040259*c+1.0572252*l),[a,t,n,r.length>3?r[3]:1]},qe=function(e){return 255*(e<=.00304?12.92*e:1.055*ue(e,1/2.4)-.055)},D=function(e){return e>u.t1?e*e*e:u.t2*(e-u.t0)},u={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},he=function(){var e,r,n,t,f,a,u,o;return t=Ge(arguments),n=t[0],r=t[1],e=t[2],f=ke(n,r,e),a=f[0],u=f[1],o=f[2],[116*u-16,500*(a-u),200*(u-o)]},we=function(e){return(e/=255)<=.04045?e/12.92:ue((e+.055)/1.055,2.4)},Ee=function(e){return e>u.t3?ue(e,1/3):e/u.t2+u.t0},ke=function(){var e,r,n,t,f,a,o;return t=Ge(arguments),n=t[0],r=t[1],e=t[2],n=we(n),r=we(r),e=we(e),f=Ee((.4124564*n+.3575761*r+.1804375*e)/u.Xn),a=Ee((.2126729*n+.7151522*r+.072175*e)/u.Yn),o=Ee((.0193339*n+.119192*r+.9503041*e)/u.Zn),[f,a,o]},N.lab=function(){return function(e,r,n){n.prototype=e.prototype;var t=new n,f=e.apply(t,r);return Object(f)===f?f:t}(n,Le.call(arguments).concat(["lab"]),function(){})},h.lab=Z,n.prototype.lab=function(){return he(this._rgb)},y=function(e){var r,n,t,f,a,u,o,c,l,i,s;return e=function(){var r,n,t;for(t=[],n=0,r=e.length;n<r;n++)f=e[n],t.push(N(f));return t}(),2===e.length?(l=function(){var r,n,t;for(t=[],n=0,r=e.length;n<r;n++)f=e[n],t.push(f.lab());return t}(),a=l[0],u=l[1],r=function(e){var r,n;return n=function(){var n,t;for(t=[],r=n=0;n<=2;r=++n)t.push(a[r]+e*(u[r]-a[r]));return t}(),N.lab.apply(N,n)}):3===e.length?(i=function(){var r,n,t;for(t=[],n=0,r=e.length;n<r;n++)f=e[n],t.push(f.lab());return t}(),a=i[0],u=i[1],o=i[2],r=function(e){var r,n;return n=function(){var n,t;for(t=[],r=n=0;n<=2;r=++n)t.push((1-e)*(1-e)*a[r]+2*(1-e)*e*u[r]+e*e*o[r]);return t}(),N.lab.apply(N,n)}):4===e.length?(s=function(){var r,n,t;for(t=[],n=0,r=e.length;n<r;n++)f=e[n],t.push(f.lab());return t}(),a=s[0],u=s[1],o=s[2],c=s[3],r=function(e){var r,n;return n=function(){var n,t;for(t=[],r=n=0;n<=2;r=++n)t.push((1-e)*(1-e)*(1-e)*a[r]+3*(1-e)*(1-e)*e*u[r]+3*(1-e)*e*e*o[r]+e*e*e*c[r]);return t}(),N.lab.apply(N,n)}):5===e.length&&(n=y(e.slice(0,3)),t=y(e.slice(2,5)),r=function(e){return e<.5?n(2*e):t(2*(e-.5))}),r},N.bezier=function(e){var r;return r=y(e),r.scale=function(){return N.scale(r)},r},N.cubehelix=function(e,r,n,t,f){var a,u,o;return null==e&&(e=300),null==r&&(r=-1.5),null==n&&(n=1),null==t&&(t=1),null==f&&(f=[0,1]),a=0,"array"===je(f)?u=f[1]-f[0]:(u=0,f=[f,f]),o=function(o){var c,l,s,d,b,h,p,g,m;return c=i*((e+120)/360+r*o),p=ue(f[0]+u*o,t),h=0!==a?n[0]+o*a:n,l=h*p*(1-p)/2,d=O(c),m=Me(c),g=p+l*(-.14861*d+1.78277*m),b=p+l*(-.29227*d-.90649*m),s=p+l*(1.97294*d),N(x([255*g,255*b,255*s]))},o.start=function(r){return null==r?e:(e=r,o)},o.rotations=function(e){return null==e?r:(r=e,o)},o.gamma=function(e){return null==e?t:(t=e,o)},o.hue=function(e){return null==e?n:(n=e,"array"===je(n)?(a=n[1]-n[0],0===a&&(n=n[1])):a=0,o)},o.lightness=function(e){return null==e?f:("array"===je(e)?(f=e,u=e[1]-e[0]):(f=[e,e],u=0),o)},o.scale=function(){return N.scale(o)},o.hue(n),o},N.random=function(){var e,r,t,f;for(r="0123456789abcdef",e="#",t=f=0;f<6;t=++f)e+=r.charAt(q(16*Math.random()));return new n(e)},p=[],C=function(e,r,n,t){var f,a,u,o;for(null==n&&(n=.5),null==t&&(t="rgb"),"object"!==je(e)&&(e=N(e)),"object"!==je(r)&&(r=N(r)),u=0,a=p.length;u<a;u++)if(f=p[u],t===f[0]){o=f[1](e,r,n,t);break}if(null==o)throw"color mode "+t+" is not supported";return o.alpha(e.alpha()+n*(r.alpha()-e.alpha()))},N.interpolate=C,n.prototype.interpolate=function(e,r,n){return C(this,e,r,n)},N.mix=C,n.prototype.mix=n.prototype.interpolate,h.rgb=function(){var e,r,n,t;r=Ge(arguments),n=[];for(e in r)t=r[e],n.push(t);return n},N.rgb=function(){return function(e,r,n){n.prototype=e.prototype;var t=new n,f=e.apply(t,r);return Object(f)===f?f:t}(n,Le.call(arguments).concat(["rgb"]),function(){})},n.prototype.rgb=function(e){return null==e&&(e=!0),e?this._rgb.map(Math.round).slice(0,3):this._rgb.slice(0,3)},n.prototype.rgba=function(e){return null==e&&(e=!0),e?[Math.round(this._rgb[0]),Math.round(this._rgb[1]),Math.round(this._rgb[2]),this._rgb[3]]:this._rgb.slice(0)},d.push({p:3,test:function(e){var r;return r=Ge(arguments),"array"===je(r)&&3===r.length?"rgb":4===r.length&&"number"===je(r[3])&&r[3]>=0&&r[3]<=1?"rgb":void 0}}),h.lrgb=h.rgb,F=function(e,r,t,f){var a,u;return a=e._rgb,u=r._rgb,new n(Ae(ue(a[0],2)*(1-t)+ue(u[0],2)*t),Ae(ue(a[1],2)*(1-t)+ue(u[1],2)*t),Ae(ue(a[2],2)*(1-t)+ue(u[2],2)*t),f)},s=function(e){var r,t,f,a,u,o;for(t=1/e.length,o=[0,0,0,0],a=0,f=e.length;a<f;a++)r=e[a],u=r._rgb,o[0]+=ue(u[0],2)*t,o[1]+=ue(u[1],2)*t,o[2]+=ue(u[2],2)*t,o[3]+=u[3]*t;return o[0]=Ae(o[0]),o[1]=Ae(o[1]),o[2]=Ae(o[2]),new n(o)},p.push(["lrgb",F]),N.average=function(e,r){var n,t,f,a,u,c,l,i,d,b,h,p,g;if(null==r&&(r="rgb"),d=e.length,e=e.map(function(e){return N(e)}),l=e.splice(0,1)[0],"lrgb"===r)return s(e);p=l.get(r),a=[],u=0,c=0;for(i in p)p[i]=p[i]||0,a.push(isNaN(p[i])?0:1),"h"!==r.charAt(i)||isNaN(p[i])||(n=p[i]/180*o,u+=O(n),c+=Me(n));for(t=l.alpha(),h=0,b=e.length;h<b;h++){f=e[h],g=f.get(r),t+=f.alpha();for(i in p)isNaN(g[i])||(p[i]+=g[i],a[i]+=1,"h"===r.charAt(i)&&(n=p[i]/180*o,u+=O(n),c+=Me(n)))}for(i in p)if(p[i]=p[i]/a[i],"h"===r.charAt(i)){for(n=m(c/a[i],u/a[i])/o*180;n<0;)n+=360;for(;n>=360;)n-=360;p[i]=n}return N(p,r).alpha(t/d)},B=function(e){var r,n,t,f,a,u;if(e.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))return 4!==e.length&&7!==e.length||(e=e.substr(1)),3===e.length&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),u=parseInt(e,16),f=u>>16,t=u>>8&255,n=255&u,[f,t,n,1];if(e.match(/^#?([A-Fa-f0-9]{8})$/))return 9===e.length&&(e=e.substr(1)),u=parseInt(e,16),f=u>>24&255,t=u>>16&255,n=u>>8&255,r=Ne((255&u)/255*100)/100,[f,t,n,r];if(null!=h.css&&(a=h.css(e)))return a;throw"unknown color: "+e},ie=function(e,r){var n,t,f,a,u,o,c;return null==r&&(r="rgb"),u=e[0],f=e[1],t=e[2],n=e[3],u=Math.round(u),f=Math.round(f),t=Math.round(t),c=u<<16|f<<8|t,o="000000"+c.toString(16),o=o.substr(o.length-6),a="0"+Ne(255*n).toString(16),a=a.substr(a.length-2),"#"+function(){switch(r.toLowerCase()){case"rgba":return o+a;case"argb":return a+o;default:return o}}()},h.hex=function(e){return B(e)},N.hex=function(){return function(e,r,n){n.prototype=e.prototype;var t=new n,f=e.apply(t,r);return Object(f)===f?f:t}(n,Le.call(arguments).concat(["hex"]),function(){})},n.prototype.hex=function(e){return null==e&&(e="rgb"),ie(this._rgb,e)},d.push({p:4,test:function(e){if(1===arguments.length&&"string"===je(e))return"hex"}}),Y=function(){var e,r,n,t,f,a,u,o,c,l,i,s,d,b;if(e=Ge(arguments),f=e[0],i=e[1],u=e[2],0===i)c=t=r=255*u;else{for(b=[0,0,0],n=[0,0,0],d=u<.5?u*(1+i):u+i-u*i,s=2*u-d,f/=360,b[0]=f+1/3,b[1]=f,b[2]=f-1/3,a=o=0;o<=2;a=++o)b[a]<0&&(b[a]+=1),b[a]>1&&(b[a]-=1),6*b[a]<1?n[a]=s+6*(d-s)*b[a]:2*b[a]<1?n[a]=d:3*b[a]<2?n[a]=s+(d-s)*(2/3-b[a])*6:n[a]=s;l=[Ne(255*n[0]),Ne(255*n[1]),Ne(255*n[2])],c=l[0],t=l[1],r=l[2]}return e.length>3?[c,t,r,e[3]]:[c,t,r]},de=function(e,r,n){var t,f,a,u,o;return void 0!==e&&e.length>=3&&(u=e,e=u[0],r=u[1],n=u[2]),e/=255,r/=255,n/=255,a=Math.min(e,r,n),re=Math.max(e,r,n),f=(re+a)/2,re===a?(o=0,t=Number.NaN):o=f<.5?(re-a)/(re+a):(re-a)/(2-re-a),e===re?t=(r-n)/(re-a):r===re?t=2+(n-e)/(re-a):n===re&&(t=4+(e-r)/(re-a)),t*=60,t<0&&(t+=360),[t,o,f]},N.hsl=function(){return function(e,r,n){n.prototype=e.prototype;var t=new n,f=e.apply(t,r);return Object(f)===f?f:t}(n,Le.call(arguments).concat(["hsl"]),function(){})},h.hsl=Y,n.prototype.hsl=function(){return de(this._rgb)},z=function(){var e,r,n,t,f,a,u,o,c,l,i,s,d,b,h,p,g,m;if(e=Ge(arguments),f=e[0],p=e[1],m=e[2],m*=255,0===p)c=t=r=m;else switch(360===f&&(f=0),f>360&&(f-=360),f<0&&(f+=360),f/=60,a=q(f),n=f-a,u=m*(1-p),o=m*(1-p*n),g=m*(1-p*(1-n)),a){case 0:l=[m,g,u],c=l[0],t=l[1],r=l[2];break;case 1:i=[o,m,u],c=i[0],t=i[1],r=i[2];break;case 2:s=[u,m,g],c=s[0],t=s[1],r=s[2];break;case 3:d=[u,o,m],c=d[0],t=d[1],r=d[2];break;case 4:b=[g,u,m],c=b[0],t=b[1],r=b[2];break;case 5:h=[m,u,o],c=h[0],t=h[1],r=h[2]}return[c,t,r,e.length>3?e[3]:1]},be=function(){var e,r,n,t,f,a,u,o,c;return u=Ge(arguments),a=u[0],n=u[1],e=u[2],f=Math.min(a,n,e),re=Math.max(a,n,e),r=re-f,c=re/255,0===re?(t=Number.NaN,o=0):(o=r/re,a===re&&(t=(n-e)/r),n===re&&(t=2+(e-a)/r),e===re&&(t=4+(a-n)/r),t*=60,t<0&&(t+=360)),[t,o,c]},N.hsv=function(){return function(e,r,n){n.prototype=e.prototype;var t=new n,f=e.apply(t,r);return Object(f)===f?f:t}(n,Le.call(arguments).concat(["hsv"]),function(){})},h.hsv=z,n.prototype.hsv=function(){return be(this._rgb)},fe=function(e){var r,n,t;return"number"===je(e)&&e>=0&&e<=16777215?(t=e>>16,n=e>>8&255,r=255&e,[t,n,r,1]):(console.warn("unknown num color: "+e),[0,0,0,1])},ye=function(){var e,r,n,t;return t=Ge(arguments),n=t[0],r=t[1],e=t[2],(n<<16)+(r<<8)+e},N.num=function(e){return new n(e,"num")},n.prototype.num=function(e){return null==e&&(e="rgb"),ye(this._rgb,e)},h.num=fe,d.push({p:1,test:function(e){if(1===arguments.length&&"number"===je(e)&&e>=0&&e<=16777215)return"num"}}),L=function(){var e,r,n,t,f,a,u,o,c,l,i,s,d,b,h,p,g,m,y,v;if(n=Ge(arguments),o=n[0],f=n[1],r=n[2],f/=100,u=u/100*255,e=255*f,0===f)s=u=t=r;else switch(360===o&&(o=0),o>360&&(o-=360),o<0&&(o+=360),o/=60,c=q(o),a=o-c,l=r*(1-f),i=l+e*(1-a),y=l+e*a,v=l+e,c){case 0:d=[v,y,l],s=d[0],u=d[1],t=d[2];break;case 1:b=[i,v,l],s=b[0],u=b[1],t=b[2];break;case 2:h=[l,v,y],s=h[0],u=h[1],t=h[2];break;case 3:p=[l,i,v],s=p[0],u=p[1],t=p[2];break;case 4:g=[y,l,v],s=g[0],u=g[1],t=g[2];break;case 5:m=[v,l,i],s=m[0],u=m[1],t=m[2]}return[s,u,t,n.length>3?n[3]:1]},le=function(){var e,r,n,t,f,a,u,o,c;return c=Ge(arguments),o=c[0],f=c[1],r=c[2],u=Math.min(o,f,r),re=Math.max(o,f,r),t=re-u,n=100*t/255,e=u/(255-t)*100,0===t?a=Number.NaN:(o===re&&(a=(f-r)/t),f===re&&(a=2+(r-o)/t),r===re&&(a=4+(o-f)/t),a*=60,a<0&&(a+=360)),[a,n,e]},N.hcg=function(){return function(e,r,n){n.prototype=e.prototype;var t=new n,f=e.apply(t,r);return Object(f)===f?f:t}(n,Le.call(arguments).concat(["hcg"]),function(){})},h.hcg=L,n.prototype.hcg=function(){return le(this._rgb)},j=function(e){var r,n,t,f,a,u,o,c;if(e=e.toLowerCase(),null!=N.colors&&N.colors[e])return B(N.colors[e]);if(a=e.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)){for(o=a.slice(1,4),f=u=0;u<=2;f=++u)o[f]=+o[f];o[3]=1}else if(a=e.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/))for(o=a.slice(1,5),f=c=0;c<=3;f=++c)o[f]=+o[f];else if(a=e.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)){for(o=a.slice(1,4),f=r=0;r<=2;f=++r)o[f]=Ne(2.55*o[f]);o[3]=1}else if(a=e.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)){for(o=a.slice(1,5),f=n=0;n<=2;f=++n)o[f]=Ne(2.55*o[f]);o[3]=+o[3]}else(a=e.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/))?(t=a.slice(1,4),t[1]*=.01,t[2]*=.01,o=Y(t),o[3]=1):(a=e.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/))&&(t=a.slice(1,4),t[1]*=.01,t[2]*=.01,o=Y(t),o[3]=+a[4]);return o},ce=function(e){var r;return r=e[3]<1?"rgba":"rgb","rgb"===r?r+"("+e.slice(0,3).map(Ne).join(",")+")":"rgba"===r?r+"("+e.slice(0,3).map(Ne).join(",")+","+e[3]+")":void 0},_e=function(e){return Ne(100*e)/100},S=function(e,r){var n;return n=r<1?"hsla":"hsl",e[0]=_e(e[0]||0),e[1]=_e(100*e[1])+"%",e[2]=_e(100*e[2])+"%","hsla"===n&&(e[3]=r),n+"("+e.join(",")+")"},h.css=function(e){return j(e)},N.css=function(){return function(e,r,n){n.prototype=e.prototype;var t=new n,f=e.apply(t,r);return Object(f)===f?f:t}(n,Le.call(arguments).concat(["css"]),function(){})},n.prototype.css=function(e){return null==e&&(e="rgb"),"rgb"===e.slice(0,3)?ce(this._rgb):"hsl"===e.slice(0,3)?S(this.hsl(),this.alpha()):void 0},h.named=function(e){return B(Pe[e])},d.push({p:5,test:function(e){if(1===arguments.length&&null!=Pe[e])return"named"}}),n.prototype.name=function(e){var r,n;arguments.length&&(Pe[e]&&(this._rgb=B(Pe[e])),this._rgb[3]=1),r=this.hex();for(n in Pe)if(r===Pe[n])return n;return r},$=function(){var e,r,n,t;return t=Ge(arguments),n=t[0],e=t[1],r=t[2],r*=a,[n,O(r)*e,Me(r)*e]},J=function(){var e,r,n,t,f,a,u,o,c,l,i;return n=Ge(arguments),o=n[0],f=n[1],u=n[2],l=$(o,f,u),e=l[0],r=l[1],t=l[2],i=Z(e,r,t),c=i[0],a=i[1],t=i[2],[c,a,t,n.length>3?n[3]:1]},K=function(){var e,r,n,t,f,a;return a=Ge(arguments),f=a[0],e=a[1],r=a[2],n=Ae(e*e+r*r),t=(m(r,e)*l+360)%360,0===Ne(1e4*n)&&(t=Number.NaN),[f,n,t]},pe=function(){var e,r,n,t,f,a,u;return a=Ge(arguments),f=a[0],n=a[1],r=a[2],u=he(f,n,r),t=u[0],e=u[1],r=u[2],K(t,e,r)},N.lch=function(){var e;return e=Ge(arguments),new n(e,"lch")},N.hcl=function(){var e;return e=Ge(arguments),new n(e,"hcl")},h.lch=J,h.hcl=function(){var e,r,n,t;return t=Ge(arguments),r=t[0],e=t[1],n=t[2],J([n,e,r])},n.prototype.lch=function(){return pe(this._rgb)},n.prototype.hcl=function(){return pe(this._rgb).reverse()},oe=function(e){var r,n,t,f,a,u,o,c,l;return null==e&&(e="rgb"),c=Ge(arguments),o=c[0],f=c[1],r=c[2],o/=255,f/=255,r/=255,a=1-Math.max(o,Math.max(f,r)),t=a<1?1/(1-a):0,n=(1-o-a)*t,u=(1-f-a)*t,l=(1-r-a)*t,[n,u,l,a]},M=function(){var e,r,n,t,f,a,u,o,c;return r=Ge(arguments),t=r[0],u=r[1],c=r[2],a=r[3],e=r.length>4?r[4]:1,1===a?[0,0,0,e]:(o=t>=1?0:255*(1-t)*(1-a),f=u>=1?0:255*(1-u)*(1-a),n=c>=1?0:255*(1-c)*(1-a),[o,f,n,e])},h.cmyk=function(){return M(Ge(arguments))},N.cmyk=function(){return function(e,r,n){n.prototype=e.prototype;var t=new n,f=e.apply(t,r);return Object(f)===f?f:t}(n,Le.call(arguments).concat(["cmyk"]),function(){})},n.prototype.cmyk=function(){return oe(this._rgb)},h.gl=function(){var e,r,n,t,f;for(t=function(){var e,n;e=Ge(arguments),n=[];for(r in e)f=e[r],n.push(f);return n}.apply(this,arguments),e=n=0;n<=2;e=++n)t[e]*=255;return t},N.gl=function(){return function(e,r,n){n.prototype=e.prototype;var t=new n,f=e.apply(t,r);return Object(f)===f?f:t}(n,Le.call(arguments).concat(["gl"]),function(){})},n.prototype.gl=function(){var e;return e=this._rgb,[e[0]/255,e[1]/255,e[2]/255,e[3]]},ge=function(e,r,n){var t;return t=Ge(arguments),e=t[0],r=t[1],n=t[2],e=Q(e),r=Q(r),n=Q(n),.2126*e+.7152*r+.0722*n},Q=function(e){return e/=255,e<=.03928?e/12.92:ue((e+.055)/1.055,2.4)},I=function(e,r,t,f){var a,u;return a=e._rgb,u=r._rgb,new n(a[0]+t*(u[0]-a[0]),a[1]+t*(u[1]-a[1]),a[2]+t*(u[2]-a[2]),f)},p.push(["rgb",I]),n.prototype.luminance=function(e,r){var n,t,f,a;return null==r&&(r="rgb"),arguments.length?(0===e?this._rgb=[0,0,0,this._rgb[3]]:1===e?this._rgb=[255,255,255,this._rgb[3]]:(t=1e-7,f=20,a=function(n,u){var o,c;return c=n.interpolate(u,.5,r),o=c.luminance(),Math.abs(e-o)<t||!f--?c:o>e?a(n,c):a(c,u)},n=ge(this._rgb),this._rgb=(n>e?a(N("black"),this):a(this,N("white"))).rgba()),this):ge(this._rgb)},Oe=function(e){var r,n,t,f;return f=e/100,f<66?(t=255,n=-155.25485562709179-.44596950469579133*(n=f-2)+104.49216199393888*H(n),r=f<20?0:-254.76935184120902+.8274096064007395*(r=f-10)+115.67994401066147*H(r)):(t=351.97690566805693+.114206453784165*(t=f-55)-40.25366309332127*H(t),n=325.4494125711974+.07943456536662342*(n=f-50)-28.0852963507957*H(n),r=255),[t,n,r]},ve=function(){var e,r,n,t,f,a,u,o,c;for(u=Ge(arguments),a=u[0],n=u[1],e=u[2],f=1e3,t=4e4,r=.4;t-f>r;)c=.5*(t+f),o=Oe(c),o[2]/o[0]>=e/a?t=c:f=c;return Ne(c)},N.temperature=N.kelvin=function(){return function(e,r,n){n.prototype=e.prototype;var t=new n,f=e.apply(t,r);return Object(f)===f?f:t}(n,Le.call(arguments).concat(["temperature"]),function(){})},h.temperature=h.kelvin=h.K=Oe,n.prototype.temperature=function(){return ve(this._rgb)},n.prototype.kelvin=n.prototype.temperature,N.contrast=function(e,r){var t,f,a,u;return"string"!==(a=je(e))&&"number"!==a||(e=new n(e)),"string"!==(u=je(r))&&"number"!==u||(r=new n(r)),t=e.luminance(),f=r.luminance(),t>f?(t+.05)/(f+.05):(f+.05)/(t+.05)},N.distance=function(e,r,t){var f,a,u,o,c,l,i;null==t&&(t="lab"),"string"!==(c=je(e))&&"number"!==c||(e=new n(e)),"string"!==(l=je(r))&&"number"!==l||(r=new n(r)),u=e.get(t),o=r.get(t),i=0;for(a in u)f=(u[a]||0)-(o[a]||0),i+=f*f;return Math.sqrt(i)},N.deltaE=function(e,r,t,f){var a,u,c,l,i,s,d,b,h,p,y,v,k,w,_,N,x,M,A,j,G,P,E,q,L,B,R;for(null==t&&(t=1),null==f&&(f=1),"string"!==(x=je(e))&&"number"!==x||(e=new n(e)),"string"!==(M=je(r))&&"number"!==M||(r=new n(r)),A=e.lab(),a=A[0],c=A[1],i=A[2],j=r.lab(),u=j[0],l=j[1],s=j[2],d=Ae(c*c+i*i),b=Ae(l*l+s*s),E=a<16?.511:.040975*a/(1+.01765*a),G=.0638*d/(1+.0131*d)+.638,N=d<1e-6?0:180*m(i,c)/o;N<0;)N+=360;for(;N>=360;)N-=360;return q=N>=164&&N<=345?.56+g(.2*O(o*(N+168)/180)):.36+g(.4*O(o*(N+35)/180)),h=d*d*d*d,_=Ae(h/(h+1900)),P=G*(_*q+1-_),w=a-u,k=d-b,y=c-l,v=i-s,p=y*y+v*v-k*k,L=w/(t*E),B=k/(f*G),R=P,Ae(L*L+B*B+p/(R*R))},n.prototype.get=function(e){var r,n,t,f,a,u;return t=this,a=e.split("."),f=a[0],r=a[1],u=t[f](),r?(n=f.indexOf(r),n>-1?u[n]:console.warn("unknown channel "+r+" in mode "+f)):u},n.prototype.set=function(e,r){var n,t,f,a,u,o;if(f=this,u=e.split("."),a=u[0],n=u[1],n)if(o=f[a](),t=a.indexOf(n),t>-1)if("string"===je(r))switch(r.charAt(0)){case"+":o[t]+=+r;break;case"-":o[t]+=+r;break;case"*":o[t]*=+r.substr(1);break;case"/":o[t]/=+r.substr(1);break;default:o[t]=+r}else o[t]=r;else console.warn("unknown channel "+n+" in mode "+a);else o=r;return N(o,a).alpha(f.alpha())},n.prototype.clipped=function(){return this._rgb._clipped||!1},n.prototype.alpha=function(e){return arguments.length?N.rgb([this._rgb[0],this._rgb[1],this._rgb[2],e]):this._rgb[3]},n.prototype.darken=function(e){var r,n;return null==e&&(e=1),n=this,r=n.lab(),r[0]-=u.Kn*e,N.lab(r).alpha(n.alpha())},n.prototype.brighten=function(e){return null==e&&(e=1),this.darken(-e)},n.prototype.darker=n.prototype.darken,n.prototype.brighter=n.prototype.brighten,n.prototype.saturate=function(e){var r,n;return null==e&&(e=1),n=this,r=n.lch(),r[1]+=e*u.Kn,r[1]<0&&(r[1]=0),N.lch(r).alpha(n.alpha())},n.prototype.desaturate=function(e){return null==e&&(e=1),this.saturate(-e)},n.prototype.premultiply=function(){var e,r;return r=this.rgb(),e=this.alpha(),N(r[0]*e,r[1]*e,r[2]*e,e)},v=function(e,r,n){if(!v[n])throw"unknown blend mode "+n;return v[n](e,r)},k=function(e){return function(r,n){var t,f;return t=N(n).rgb(),f=N(r).rgb(),N(e(t,f),"rgb")}},E=function(e){return function(r,n){var t,f,a;for(a=[],t=f=0;f<=3;t=++f)a[t]=e(r[t],n[t]);return a}},te=function(e,r){return e},ne=function(e,r){return e*r/255},G=function(e,r){return e>r?r:e},T=function(e,r){return e>r?e:r},xe=function(e,r){return 255*(1-(1-e/255)*(1-r/255))},ae=function(e,r){return r<128?2*e*r/255:255*(1-2*(1-e/255)*(1-r/255))},_=function(e,r){return 255*(1-(1-r/255)/(e/255))},P=function(e,r){return 255===e?255:(e=255*(r/255)/(1-e/255),e>255?255:e)},v.normal=k(E(te)),v.multiply=k(E(ne)),v.screen=k(E(xe)),v.overlay=k(E(ae)),v.darken=k(E(G)),v.lighten=k(E(T)),v.dodge=k(E(P)),v.burn=k(E(_)),N.blend=v,N.analyze=function(e){var r,n,t,f;for(t={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0},n=0,r=e.length;n<r;n++)f=e[n],null==f||isNaN(f)||(t.values.push(f),t.sum+=f,f<t.min&&(t.min=f),f>t.max&&(t.max=f),t.count+=1);return t.domain=[t.min,t.max],t.limits=function(e,r){return N.limits(t,e,r)},t},N.scale=function(e,r){var n,t,f,a,u,o,c,l,i,s,d,b,h,p,g,m,y,v,k,w,_,x,M;return s="rgb",d=N("#ccc"),g=0,o=!1,u=[0,1],p=[],h=[0,0],n=!1,f=[],b=!1,i=0,l=1,a=!1,t={},m=!0,c=1,x=function(e){var r,n,t,a,u,o;if(null==e&&(e=["#fff","#000"]),null!=e&&"string"===je(e)&&null!=N.brewer&&(e=N.brewer[e]||N.brewer[e.toLowerCase()]||e),"array"===je(e)){for(e=e.slice(0),r=t=0,a=e.length-1;0<=a?t<=a:t>=a;r=0<=a?++t:--t)n=e[r],"string"===je(n)&&(e[r]=N(n));for(p.length=0,r=o=0,u=e.length-1;0<=u?o<=u:o>=u;r=0<=u?++o:--o)p.push(r/(e.length-1))}return _(),f=e},k=function(e){var r,t;if(null!=n){for(t=n.length-1,r=0;r<t&&e>=n[r];)r++;return r-1}return 0},M=function(e){return e},y=function(e){var r,t,f,a,u;return u=e,n.length>2&&(a=n.length-1,r=k(e),f=n[0]+(n[1]-n[0])*(0+.5*g),t=n[a-1]+(n[a]-n[a-1])*(1-.5*g),u=i+(n[r]+.5*(n[r+1]-n[r])-f)/(t-f)*(l-i)),u},w=function(e,r){var a,u,o,b,g,y,v,w;if(null==r&&(r=!1),isNaN(e))return d;if(r?w=e:n&&n.length>2?(a=k(e),w=a/(n.length-2)):w=l!==i?(e-i)/(l-i):1,r||(w=M(w)),1!==c&&(w=ue(w,c)),w=h[0]+w*(1-h[0]-h[1]),w=Math.min(1,Math.max(0,w)),b=Math.floor(1e4*w),m&&t[b])u=t[b];else{if("array"===je(f))for(o=g=0,v=p.length-1;0<=v?g<=v:g>=v;o=0<=v?++g:--g){if(y=p[o],w<=y){u=f[o];break}if(w>=y&&o===p.length-1){u=f[o];break}if(w>y&&w<p[o+1]){w=(w-y)/(p[o+1]-y),u=N.interpolate(f[o],f[o+1],w,s);break}}else"function"===je(f)&&(u=f(w));m&&(t[b]=u)}return u},_=function(){return t={}},x(e),v=function(e){var r;return r=N(w(e)),b&&r[b]?r[b]():r},v.classes=function(e){var r;return null!=e?("array"===je(e)?(n=e,u=[e[0],e[e.length-1]]):(r=N.analyze(u),n=0===e?[r.min,r.max]:N.limits(r,"e",e)),v):n},v.domain=function(e){var r,n,t,a,o,c,s;if(!arguments.length)return u;if(i=e[0],l=e[e.length-1],p=[],t=f.length,e.length===t&&i!==l)for(o=0,a=e.length;o<a;o++)n=e[o],p.push((n-i)/(l-i));else for(r=s=0,c=t-1;0<=c?s<=c:s>=c;r=0<=c?++s:--s)p.push(r/(t-1));return u=[i,l],v},v.mode=function(e){return arguments.length?(s=e,_(),v):s},v.range=function(e,r){return x(e,r),v},v.out=function(e){return b=e,v},v.spread=function(e){return arguments.length?(g=e,v):g},v.correctLightness=function(e){return null==e&&(e=!0),a=e,_(),M=a?function(e){var r,n,t,f,a,u,o,c,l;for(r=w(0,!0).lab()[0],n=w(1,!0).lab()[0],o=r>n,t=w(e,!0).lab()[0],a=r+(n-r)*e,f=t-a,c=0,l=1,u=20;Math.abs(f)>.01&&u-- >0;)!function(){return o&&(f*=-1),f<0?(c=e,e+=.5*(l-e)):(l=e,e+=.5*(c-e)),t=w(e,!0).lab()[0],f=t-a}();return e}:function(e){return e},v},v.padding=function(e){return null!=e?("number"===je(e)&&(e=[e,e]),h=e,v):h},v.colors=function(r,t){var a,o,c,l,i,s,d,b;if(arguments.length<2&&(t="hex"),i=[],0===arguments.length)i=f.slice(0);else if(1===r)i=[v(.5)];else if(r>1)o=u[0],a=u[1]-o,i=function(){s=[];for(var e=0;0<=r?e<r:e>r;0<=r?e++:e--)s.push(e);return s}.apply(this).map(function(e){return v(o+e/(r-1)*a)});else{if(e=[],d=[],n&&n.length>2)for(c=b=1,l=n.length;1<=l?b<l:b>l;c=1<=l?++b:--b)d.push(.5*(n[c-1]+n[c]));else d=u;i=d.map(function(e){return v(e)})}return N[t]&&(i=i.map(function(e){return e[t]()})),i},v.cache=function(e){return null!=e?(m=e,v):m},v.gamma=function(e){return null!=e?(c=e,v):c},v},null==N.scales&&(N.scales={}),N.scales.cool=function(){return N.scale([N.hsl(180,1,.9),N.hsl(250,.7,.4)])},N.scales.hot=function(){return N.scale(["#000","#f00","#ff0","#fff"],[0,.25,.75,1]).mode("rgb")},N.analyze=function(e,r,n){var t,f,a,u,o,c,l;if(o={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],
count:0},null==n&&(n=function(){return!0}),t=function(e){null==e||isNaN(e)||(o.values.push(e),o.sum+=e,e<o.min&&(o.min=e),e>o.max&&(o.max=e),o.count+=1)},l=function(e,f){if(n(e,f))return t(null!=r&&"function"===je(r)?r(e):null!=r&&"string"===je(r)||"number"===je(r)?e[r]:e)},"array"===je(e))for(u=0,a=e.length;u<a;u++)c=e[u],l(c);else for(f in e)c=e[f],l(c,f);return o.domain=[o.min,o.max],o.limits=function(e,r){return N.limits(o,e,r)},o},N.limits=function(e,r,n){var t,f,a,u,o,c,l,i,s,d,b,h,p,m,y,v,k,w,_,x,M,A,O,j,G,P,E,L,B,R,S,Y,z,C,U,X,F,V,I,K,Z,D,$,J,T,W,Q,ee,ne,te,fe,ae,oe,ce,le,ie;if(null==r&&(r="equal"),null==n&&(n=7),"array"===je(e)&&(e=N.analyze(e)),G=e.min,re=e.max,fe=e.sum,le=e.values.sort(function(e,r){return e-r}),1===n)return[G,re];if(O=[],"c"===r.substr(0,1)&&(O.push(G),O.push(re)),"e"===r.substr(0,1)){for(O.push(G),x=S=1,U=n-1;1<=U?S<=U:S>=U;x=1<=U?++S:--S)O.push(G+x/n*(re-G));O.push(re)}else if("l"===r.substr(0,1)){if(G<=0)throw"Logarithmic scales are only possible for values > 0";for(P=Math.LOG10E*H(G),j=Math.LOG10E*H(re),O.push(G),x=ie=1,X=n-1;1<=X?ie<=X:ie>=X;x=1<=X?++ie:--ie)O.push(ue(10,P+x/n*(j-P)));O.push(re)}else if("q"===r.substr(0,1)){for(O.push(G),x=t=1,D=n-1;1<=D?t<=D:t>=D;x=1<=D?++t:--t)Y=(le.length-1)*x/n,z=q(Y),z===Y?O.push(le[z]):(C=Y-z,O.push(le[z]*(1-C)+le[z+1]*C));O.push(re)}else if("k"===r.substr(0,1)){for(L=le.length,m=new Array(L),w=new Array(n),te=!0,B=0,v=null,v=[],v.push(G),x=f=1,$=n-1;1<=$?f<=$:f>=$;x=1<=$?++f:--f)v.push(G+x/n*(re-G));for(v.push(re);te;){for(M=a=0,J=n-1;0<=J?a<=J:a>=J;M=0<=J?++a:--a)w[M]=0;for(x=u=0,T=L-1;0<=T?u<=T:u>=T;x=0<=T?++u:--u){for(ce=le[x],E=Number.MAX_VALUE,M=o=0,W=n-1;0<=W?o<=W:o>=W;M=0<=W?++o:--o)_=g(v[M]-ce),_<E&&(E=_,y=M);w[y]++,m[x]=y}for(R=new Array(n),M=c=0,Q=n-1;0<=Q?c<=Q:c>=Q;M=0<=Q?++c:--c)R[M]=null;for(x=l=0,ee=L-1;0<=ee?l<=ee:l>=ee;x=0<=ee?++l:--l)k=m[x],null===R[k]?R[k]=le[x]:R[k]+=le[x];for(M=i=0,ne=n-1;0<=ne?i<=ne:i>=ne;M=0<=ne?++i:--i)R[M]*=1/w[M];for(te=!1,M=s=0,F=n-1;0<=F?s<=F:s>=F;M=0<=F?++s:--s)if(R[M]!==v[x]){te=!0;break}v=R,B++,B>200&&(te=!1)}for(A={},M=d=0,V=n-1;0<=V?d<=V:d>=V;M=0<=V?++d:--d)A[M]=[];for(x=b=0,I=L-1;0<=I?b<=I:b>=I;x=0<=I?++b:--b)k=m[x],A[k].push(le[x]);for(ae=[],M=h=0,K=n-1;0<=K?h<=K:h>=K;M=0<=K?++h:--h)ae.push(A[M][0]),ae.push(A[M][A[M].length-1]);for(ae=ae.sort(function(e,r){return e-r}),O.push(ae[0]),x=p=1,Z=ae.length-1;p<=Z;x=p+=2)oe=ae[x],isNaN(oe)||O.indexOf(oe)!==-1||O.push(oe)}return O},R=function(e,r,n){var t,f,a,u;return t=Ge(arguments),e=t[0],r=t[1],n=t[2],isNaN(e)&&(e=0),e/=360,e<1/3?(f=(1-r)/3,u=(1+r*O(i*e)/O(c-i*e))/3,a=1-(f+u)):e<2/3?(e-=1/3,u=(1-r)/3,a=(1+r*O(i*e)/O(c-i*e))/3,f=1-(u+a)):(e-=2/3,a=(1-r)/3,f=(1+r*O(i*e)/O(c-i*e))/3,u=1-(a+f)),u=W(n*u*3),a=W(n*a*3),f=W(n*f*3),[255*u,255*a,255*f,t.length>3?t[3]:1]},se=function(){var e,r,n,t,f,a,u,o;return u=Ge(arguments),a=u[0],r=u[1],e=u[2],i=2*Math.PI,a/=255,r/=255,e/=255,f=Math.min(a,r,e),t=(a+r+e)/3,o=1-f/t,0===o?n=0:(n=(a-r+(a-e))/2,n/=Math.sqrt((a-r)*(a-r)+(a-e)*(r-e)),n=Math.acos(n),e>r&&(n=i-n),n/=i),[360*n,o,t]},N.hsi=function(){return function(e,r,n){n.prototype=e.prototype;var t=new n,f=e.apply(t,r);return Object(f)===f?f:t}(n,Le.call(arguments).concat(["hsi"]),function(){})},h.hsi=R,n.prototype.hsi=function(){return se(this._rgb)},U=function(e,r,n,t){var f,a,u,o,c,l,i,s,d,b,h,p,g;return"hsl"===t?(p=e.hsl(),g=r.hsl()):"hsv"===t?(p=e.hsv(),g=r.hsv()):"hcg"===t?(p=e.hcg(),g=r.hcg()):"hsi"===t?(p=e.hsi(),g=r.hsi()):"lch"!==t&&"hcl"!==t||(t="hcl",p=e.hcl(),g=r.hcl()),"h"===t.substr(0,1)&&(u=p[0],b=p[1],l=p[2],o=g[0],h=g[1],i=g[2]),isNaN(u)||isNaN(o)?isNaN(u)?isNaN(o)?a=Number.NaN:(a=o,1!==l&&0!==l||"hsv"===t||(d=h)):(a=u,1!==i&&0!==i||"hsv"===t||(d=b)):(f=o>u&&o-u>180?o-(u+360):o<u&&u-o>180?o+360-u:o-u,a=u+n*f),null==d&&(d=b+n*(h-b)),c=l+n*(i-l),s=N[t](a,d,c)},p=p.concat(function(){var e,r,n,t;for(n=["hsv","hsl","hsi","hcl","lch","hcg"],t=[],r=0,e=n.length;r<e;r++)ee=n[r],t.push([ee,U]);return t}()),V=function(e,r,n,t){var f,a;return f=e.num(),a=r.num(),N.num(f+(a-f)*n,"num")},p.push(["num",V]),X=function(e,r,t,f){var a,u,o;return u=e.lab(),o=r.lab(),a=new n(u[0]+t*(o[0]-u[0]),u[1]+t*(o[1]-u[1]),u[2]+t*(o[2]-u[2]),f)},p.push(["lab",X])}).call(this)}).call(r,n(143)(e))},82:function(e,r,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}r.__esModule=!0;var f=n(2),a=t(f),u=n(11),o=t(u),c=n(89),l=t(c),i=n(9),s=t(i),d=n(74),b=t(d),h=n(115),p=t(h),g=function(e){var r=l.default.contrast(e,"white");return r>4?"#FFF":(0,l.default)(e).darken(3).hex()},m=function(){var e=o.default.toPairsIn(b.default);return e=e.map(function(e,r){var n=e[1],t=l.default.contrast(n,"white")>4?"color-block":"color-block-border";return a.default.createElement("div",{className:p.default.card,key:r},a.default.createElement("div",{className:p.default[t],style:{backgroundColor:n,color:g(n)}},a.default.createElement("div",{className:p.default["color-hex"]},(0,l.default)(n).hex()),a.default.createElement("div",{className:p.default["color-rgb"]},n)),a.default.createElement("div",{className:p.default["color-name"]},o.default.kebabCase(e[0])))}),a.default.createElement("section",null,a.default.createElement(s.default,{text:"Colors"}),a.default.createElement("div",{className:p.default["section-color"]},e))};r.default=m,e.exports=r.default},115:function(e,r){e.exports={"spacing-xsmall":"4px","spacing-small":"8px","spacing-medium":"16px","font-size-xsmall":"undefined","font-weight-medium":"500","border-radius-small":"2px","color-gray-utility":"rgb(225, 225, 225)","section-color":"src-styles----otkit-colors-module---section-color---20MAg",card:"src-styles----otkit-colors-module---card---lA_pp","color-block":"src-styles----otkit-colors-module---color-block---NzphN","color-block-border":"src-styles----otkit-colors-module---color-block-border---2hGcA src-styles----otkit-colors-module---color-block---NzphN","color-name":"src-styles----otkit-colors-module---color-name---2-obi","color-hex":"src-styles----otkit-colors-module---color-hex---3UT0c","color-rgb":"src-styles----otkit-colors-module---color-rgb---30n2t"}}});
//# sourceMappingURL=component---src-pages-otkit-colors-js-7028f5e235e965963d6d.js.map