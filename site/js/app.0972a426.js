(function(e){function t(t){for(var r,i,a=t[0],l=t[1],c=t[2],f=0,d=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},"1a4e":function(e,t,n){"use strict";n("bd18")},2:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"is-flex is-flex-direction-row is-align-items-center is-justify-content-space-evenly"},[n("div",{staticClass:"is-flex is-flex-direction-row is-align-items-center is-justify-content-start gap-1"},[n("label",{attrs:{for:"loadfile"}},[e._v("Search course")]),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search_text,expression:"search_text"}],staticClass:"input",domProps:{value:e.search_text},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchCourse.apply(null,arguments)},input:function(t){t.target.composing||(e.search_text=t.target.value)}}})]),n("button",{staticClass:"button",attrs:{disabled:e.search_text.length<3},on:{click:e.searchCourse}},[e._v("Search")]),n("button",{staticClass:"button is-small",on:{click:function(t){return e.$refs.load_file.click()}}},[e._v("Upload file")]),n("input",{ref:"load_file",staticClass:"input",staticStyle:{display:"none"},attrs:{type:"file",accept:"application/json",id:"loadfile"},on:{change:e.handleFileChange}})])]),n("div",{staticClass:"is-flex is-flex-direction-column gap-1",attrs:{id:"app"}},[e.question_data?e._e():n("div",{staticClass:"is-hoverable is-flex is-flex-direction-column "},e._l(e.course_list,(function(t,r){return n("a",{key:r,staticClass:"p-2 is-pointer",on:{click:function(n){return e.select_course(t)}}},[n("p",[e._v(e._s(t.name))])])})),0),e.question_data?n("ul",{staticClass:"is-flex is-flex-direction-column "},e._l(e.question_data,(function(t,r){return n("li",{key:r,staticClass:"question"},[n("p",{},[e._v(e._s(e.get_question(t)))]),n("ol",{staticClass:"options"},e._l(e.get_options(t),(function(t){return n("li",{key:t.$$hashKey,staticClass:"option",class:t.isCorrect?"is-success":""},[e._v(e._s(e.removeTags(t.text))+" ")])})),0)])})),0):e.course_list.length<=0?n("div",{staticClass:"is-flex is-flex-direction-column "},e._l(e.file_data,(function(t,r){return n("div",{key:r,staticClass:"question"},[e.flag_filter&&e.filter_keys(r)?n("a",{on:{click:function(t){return e.select_key(r)}}},[e._v(" "+e._s(r)+" ")]):e._e()])})),0):e._e()])])},s=[],i=(n("ac1f"),n("00b4"),n("5319"),n("d3b7"),n("25f0"),n("ddb0"),n("b0c0"),n("4de4"),n("b64b"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])}),a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],l={name:"HelloWorld",props:{msg:String}},c=l,u=(n("1a4e"),n("2877")),f=Object(u["a"])(c,i,a,!1,null,"776ca2e7",null),d=f.exports,p=n("4a5d"),v=n.n(p),h=n("bc3a"),_=n.n(h),g=n("d9cd"),m={name:"App",components:{HelloWorld:d},data:function(){return{search_text:"",course_list:[],file_data:{},flag_filter:!0,question_data:void 0}},methods:{filter_keys:function(e){return/^.*(org\.ekstep\.questionset)(\[[0-9]+])?(\.data\.__?cdata)?$/.test(e)},xmlToJson:function(e){var t=n("c51a"),r=t.xml2json(e,{compact:!0,spaces:0});return r},decodeHTMLEntities:function(e){var t=document.createElement("div");return e&&"string"===typeof e&&(e=e.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim,""),e=e.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim,""),t.innerHTML=e,e=t.textContent,t.textContent=""),e},removeTags:function(e){return null!==e&&""!==e&&(e=e.toString(),this.decodeHTMLEntities(e.replace(/(<([^>]+)>)/gi,"")))},get_question:function(e){var t=e.body.data.data.question.text;return this.removeTags(t)},get_options:function(e){return e.body.data.data.options},traverseCourse:function(e){var t=this;console.log("Traversing course id: ",e);var n=function e(t){if("Course Assessment"===t.primaryCategory)return console.log("Course Assessment found, ",t),t.artifactUrl;var n="";return t.children&&t.children.every((function(t){return n=e(t),""===n})),n};_.a.get("https://diksha.gov.in/api/course/v1/hierarchy/"+e).then((function(e){var r=n(e.data.result.content);console.log("Assessment link",r),""===r?(console.log("Failed to find quiz: "+r),alert("Course does not contain quiz")):Object(g["a"])(r).then((function(e){e.entries["/index.json"]?(console.log("index.json present, parsing it"),e.entries["/index.json"].json().then((function(e){t.file_data=Object.flatten(e),t.select_keys()}))):(console.log("index.json not present"),e.entries["/index.ecml"]||(console.log("index.ecml also not present"),alert("Currently this course format is not supported, this this course name to me!")),console.log("index.ecml present, converting it into json"),e.entries["/index.ecml"].text().then((function(e){var n=JSON.parse(t.xmlToJson(e));t.file_data=Object.flatten(n),console.log("Flattened json: ",t.file_data),t.select_keys()})))}))}))},select_course:function(e){console.log("Course selected: ",e.identifier," ",e.name),this.traverseCourse(e.identifier)},select_keys:function(){var e=this,t=Object.keys(this.file_data).filter(this.filter_keys);t.every((function(t){e.select_key(t)}))},select_key:function(e){console.log("Key selected: ",e);var t=this.file_data[e];try{var n=JSON.parse(t);return n.forEach((function(e){e.body=JSON.parse(e.body)})),this.question_data=n,!0}catch(r){return this.question_data=void 0,!1}},searchCourse:function(){var e=this;console.log("Searching :",this.search_text),this.question_data=void 0,_.a.post("https://diksha.gov.in/api/content/v1/search?orgdetails=orgName,email",{request:{filters:{channel:"ORG_001",primaryCategory:["Course"],visibility:["Default","Parent"]},limit:100,query:this.search_text,fields:["name","appIcon","mimeType","gradeLevel","identifier","medium","pkgVersion","board","subject","resourceType","primaryCategory","contentType","channel","organisation","trackable"],softConstraints:{badgeAssertions:98,channel:100},mode:"soft",facets:["se_boards","se_gradeLevels","se_subjects","se_mediums","primaryCategory"],offset:0}},{headers:{"Content-Type":"application/json"}}).then((function(t){e.course_list=t.data.result.content})).catch((function(e){return window.alert("Error searching")}))},handleFileChange:function(e){var t=this,n=e.target.files,r=n[0];r&&(console.log("Handling file: ",r.name),v()(r).then((function(e){e[0].blob.text().then((function(e){t.file_data=Object.flatten(JSON.parse(e)),t.select_keys()}))})))}},mounted:function(){Object.flatten=function(e){var t={};function n(e,r){if(Object(e)!==e)t[r]=e;else if(Array.isArray(e)){for(var o=0,s=e.length;o<s;o++)n(e[o],r+"["+o+"]");0==s&&(t[r]=[])}else{var i=!0;for(var a in e)i=!1,n(e[a],r?r+"."+a:a);i&&r&&(t[r]={})}}return n(e,""),t}}},b=m,y=(n("034f"),Object(u["a"])(b,o,s,!1,null,null,null)),k=y.exports,x=n("9483");Object(x["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("6597");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(k)}}).$mount("#app")},"85ec":function(e,t,n){},bd18:function(e,t,n){}});
//# sourceMappingURL=app.0972a426.js.map