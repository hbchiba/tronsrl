(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61367cf2"],{"04d8":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("uni-layout",{attrs:{"class-name":"home-container","has-footer":""}},[s("uni-view",{staticClass:"bodydiv"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:t.appConfig.appIcon}})]),s("uni-view",{staticClass:"main_box"},[t.bannerList.length?s("van-swipe",{staticClass:"banner-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.bannerList,(function(t,e){return s("van-swipe-item",{key:e,staticClass:"banner-swipe-item"},[s("a",{staticClass:"banner-swipe-content",style:{backgroundImage:"url("+t.src+")"}})])})),1):s("uni-view",{staticClass:"main_title"},[s("p",[t._v(t._s(t.$t("TotalBalance")))]),s("uni-view",{staticClass:"amount"},[t._v(t._s(t._f("formatMoney")(t.totalWealth))),s("uni-label",{staticClass:"uni-label-pointer"},[t._v(t._s(t.$currencySymbol))])],1),s("uni-view",{staticClass:"balance_img"},[s("uni-image",[s("img",{attrs:{src:a("25f7")}})])],1)],1),t.notice?s("van-notice-bar",{staticClass:"contact flex alcenter",staticStyle:{padding:"0 10px"},attrs:{"left-icon":"volume"},on:{click:function(e){return t.$router.push("announcement")}}},[s("div",{domProps:{innerHTML:t._s(t.notice)}})]):t._e(),s("uni-view",{staticClass:"navbar"},[699==t.appConfig.sid?s("uni-navigator",{staticClass:"nav-item",nativeOn:{click:function(e){return t.$router.push({name:"guide"})}}},[s("uni-image",[s("img",{attrs:{src:a("de3b")}})]),s("uni-view",{staticClass:"ft22 text-center c_2a2a2a"},[t._v(t._s(t.$t("Activity")))])],1):t._e(),s("uni-navigator",{staticClass:"nav-item",nativeOn:{click:function(e){return t.goDeposit(e)}}},[s("uni-image",[s("img",{attrs:{src:a("c090")}})]),s("uni-view",{staticClass:"ft22 text-center c_2a2a2a"},[t._v(t._s(t.$t("Deposit")))])],1),s("uni-navigator",{staticClass:"nav-item",nativeOn:{click:function(e){return t.clickApproveBtn({pathName:"withdrawal"})}}},[s("uni-image",[s("img",{attrs:{src:a("2eb0")}})]),s("uni-view",{staticClass:"ft22 text-center c_2a2a2a"},[t._v(t._s(t.$t("Withdrawal")))])],1),s("uni-navigator",{staticClass:"nav-item",nativeOn:{click:function(e){return t.$router.push({name:"share"})}}},[s("uni-image",[s("img",{attrs:{src:a("e550")}})]),s("uni-view",{staticClass:"ft22 text-center c_2a2a2a"},[t._v(t._s(t.$t("Share")))])],1),s("uni-navigator",{staticClass:"nav-item",nativeOn:{click:function(e){return t.$router.push({name:"promotion"})}}},[s("uni-image",[s("img",{attrs:{src:a("50d5")}})]),s("uni-view",{staticClass:"ft22 text-center c_2a2a2a"},[t._v(t._s(t.$t("Team")))])],1),t.$root.hasDownloadBar?[""==t.$root.ifNotOpenSafariTip?s("a",{staticClass:"nav-item",attrs:{href:t.appConfig.download.apkUrl,target:t.$root.anchorTarget}},[s("uni-image",[s("img",{attrs:{src:a("5a1c")}})]),s("uni-view",{staticClass:"ft22 text-center c_2a2a2a"},[t._v(t._s(t.$t("App")))])],1):t._e(),""!=t.$root.ifNotOpenSafariTip?s("a",{staticClass:"nav-item",on:{click:function(e){return t.$toast(t.$root.ifNotOpenSafariTip)}}},[s("uni-image",[s("img",{attrs:{src:a("5a1c")}})]),s("uni-view",{staticClass:"ft22 text-center c_2a2a2a"},[t._v(t._s(t.$t("App")))])],1):t._e()]:t._e(),699!=t.appConfig.sid?s("uni-navigator",{staticClass:"nav-item",nativeOn:{click:function(e){return t.$router.push({name:"guide"})}}},[s("uni-image",[s("img",{attrs:{src:a("8b8c")}})]),s("uni-view",{staticClass:"ft22 text-center c_2a2a2a"},[t._v(t._s(t.$t("Guide")))])],1):t._e(),t.appConfig.hasRedRain?s("router-link",{staticClass:"treasure-banner42",attrs:{to:"/redRain"}},[s("img",{attrs:{src:a("60ab")}})]):t._e()],2)],1),t.is723?[t.showInvestList?s("div",{staticClass:"invest-list-container"},[s("div",{staticClass:"h3"},[t._v(t._s(t.$t("Productlist")))]),s("InvestList",{on:{changeShowInvestList:t.changeShowInvestList}}),s("router-link",{staticClass:"view-more",attrs:{to:{name:"investList"}}},[t._v(t._s(t.$t("Viewmore")))])],1):t._e(),s("uni-view",{staticClass:"label"},[s("uni-view",[s("uni-view",{staticClass:"ft26 font-bold"},[t._v(t._s(t.$t("Basic"))),s("uni-text",{staticClass:"ft20 c_a9acb2 ml10"},[s("span",[t._v(t._s(t.$t("Account")))])])],1),s("uni-view",{staticClass:"font-bold mt20 c_ef5079 ft30"},[t._v(t._s(t._f("formatMoney")(t.totalWealth))),s("uni-text",{staticClass:"ft20 c_2a2a2a ml10 mr10"},[t._v(t._s(t.$currencySymbol))]),s("uni-text",[s("span",[t._v("≈ $ "+t._s(t._f("formatMoney")(t.convertTotalWealth)))])])],1)],1)],1),s("uni-view",{staticClass:"label on"},[s("uni-view",[s("uni-view",{staticClass:"ft26 font-bold"},[t._v(t._s(t.$t("Promotion"))),s("uni-text",{staticClass:"ft20 c_a9acb2 ml10"},[s("span",[t._v(t._s(t.$t("Account")))])])],1),s("uni-view",{staticClass:"font-bold mt20 c_ef5079 ft30"},[t._v(t._s(t._f("formatMoney")(t.wealth))),s("uni-text",{staticClass:"ft20 c_2a2a2a ml10 mr10"},[t._v(t._s(t.$currencySymbol))]),s("uni-text",[s("span",[t._v("≈ $ "+t._s(t._f("formatMoney")(t.convertWealth)))])])],1)],1)],1)]:[s("uni-view",{staticClass:"label"},[s("uni-view",[s("uni-view",{staticClass:"ft26 font-bold"},[t._v(t._s(t.$t("Basic"))),s("uni-text",{staticClass:"ft20 c_a9acb2 ml10"},[s("span",[t._v(t._s(t.$t("Account")))])])],1),s("uni-view",{staticClass:"font-bold mt20 c_ef5079 ft30"},[t._v(t._s(t._f("formatMoney")(t.totalWealth))),s("uni-text",{staticClass:"ft20 c_2a2a2a ml10 mr10"},[t._v(t._s(t.$currencySymbol))]),s("uni-text",[s("span",[t._v("≈ $ "+t._s(t._f("formatMoney")(t.convertTotalWealth)))])])],1)],1)],1),s("uni-view",{staticClass:"label on"},[s("uni-view",[s("uni-view",{staticClass:"ft26 font-bold"},[t._v(t._s(t.$t("Promotion"))),s("uni-text",{staticClass:"ft20 c_a9acb2 ml10"},[s("span",[t._v(t._s(t.$t("Account")))])])],1),s("uni-view",{staticClass:"font-bold mt20 c_ef5079 ft30"},[t._v(t._s(t._f("formatMoney")(t.wealth))),s("uni-text",{staticClass:"ft20 c_2a2a2a ml10 mr10"},[t._v(t._s(t.$currencySymbol))]),s("uni-text",[s("span",[t._v("≈ $ "+t._s(t._f("formatMoney")(t.convertWealth)))])])],1)],1)],1),t.showInvestList?s("div",{staticClass:"invest-list-container"},[s("div",{staticClass:"h3"},[t._v(t._s(t.$t("Productlist")))]),s("InvestList",{on:{changeShowInvestList:t.changeShowInvestList}}),s("router-link",{staticClass:"view-more",attrs:{to:{name:"investList"}}},[t._v(t._s(t.$t("Viewmore")))])],1):t._e()],t.is731?s("div",{staticClass:"comment-wrap"},[s("swiper",{ref:"swipers",staticClass:"swiper-wrap",attrs:{options:t.swiperOptions}},[t._l(t.commentList731,(function(e,a){return s("swiper-slide",{key:a,staticClass:"comment-item"},[s("div",{staticClass:"item-body"},[s("div",{staticClass:"people-name"},[t._v(t._s(e.name))]),s("p",{staticClass:"people-content",domProps:{innerHTML:t._s(e.content)}})])])})),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1):s("div",{staticClass:"comment-wrap"},[s("div",{staticClass:"h3"},[t._v(t._s(t.commentTitle))]),s("swiper",{ref:"swipers",staticClass:"swiper-wrap",attrs:{options:t.swiperOptions}},[t._l(t.commentList,(function(e){return s("swiper-slide",{key:e.id,staticClass:"comment-item"},[s("div",{staticClass:"item-left"},[s("img",{attrs:{src:e.src}})]),s("div",{staticClass:"item-body"},[s("div",{staticClass:"people-name"},[t._v(t._s(e.name))]),s("p",{staticClass:"people-content"},[t._v(t._s(e.content))])])])})),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),Object.keys(this.gameMap).length?s("uni-view",{staticClass:"main_join"},[s("uni-view",{staticClass:"h3"},[t._v(t._s(t.$t("InstantQuotes")))]),s("ul",{staticClass:"game-list"},t._l(t.gameMap,(function(e){return s("li",{key:e.alias,staticClass:"game-item"},[s("div",{staticClass:"icon"},[s("img",{attrs:{src:e.icon}})]),s("div",{staticClass:"info"},[s("span",{staticClass:"title"},[t._v(t._s(e.name)+" / USDT")]),s("span",{staticClass:"time"},[t._v("1:"+t._s(e.rate)+" "+t._s(t.$currencySymbol))])]),s("div",{staticClass:"price",class:[e._zd>0?"mine-rise":"mine-fall"]},[t._v(t._s(e.price))]),s("div",{staticClass:"zd",class:[e._zd>0?"mine-rise":"mine-fall"]},[t._v(t._s(e.zd))])])})),0)],1):t._e(),s("uni-view",{staticClass:"main_about"},[s("uni-view",{staticClass:"about"},[s("h3",{staticClass:"about-title"},[t._v(t._s(t.$t("Profitwithdrawal")))]),s("div",{staticClass:"notice_content",staticStyle:{height:"300px"}},[s("div",{staticClass:"notice_list"},[s("div",{staticClass:"notice_item"},[s("div",{staticClass:"name gray"},[t._v(t._s(t.$t("Username")))]),s("div",{staticClass:"value gray"},[t._v(t._s(t.$t("withdraw")))])])]),s("ul",{ref:"noticeList",staticClass:"notice_list"},t._l(t.noticeList,(function(e,a){return s("li",{key:a,staticClass:"notice_item",class:!a&&t.play?"toUp":""},[s("div",{staticClass:"name"},[t._v(t._s(e.userName))]),s("div",{staticClass:"value"},[t._v(t._s(t._f("formatMoney")(e.money))+" "+t._s(t.$currencySymbol))])])})),0)])]),s("Partners")],1)],2),s("UserMessage"),s("AnnouncementModel"),s("modal-wallet",{attrs:{show:t.showModalWallet,dappUrl:t.dappUrl},on:{handerClose:function(e){return t.handerClose()}}})],1)},i=[],n=a("db12"),r=a("fc03"),c=a("ed08"),o={691:{facebook:"https://www.facebook.com/profile.php?id=100080045710455",instagram:"https://www.instagram.com/doublewin20/",telegram:"https://t.me/DoubleWin20",twitter:"https://twitter.com/DoubleWin20",youtube:"https://www.youtube.com/channel/UCtQLj3tloSYpUh_nsMVLM8w/featured"}},l={name:"Theme44Index",mixins:[n["a"],r["a"]],data:function(){return{commentList731:[{name:"公司简介：",content:"喜鹊（LuckyBird）DAO是⼀个致⼒于使⽤NFT和链游等⼯具赋能流量⽣产⼒的智能 Web3孵化器。\n喜鹊（LuckyBird）依托元宇宙3D开运财神为叙事背景，深度优化NFT功能，开拓实体经济、社群经济、加密社交通证的权益创新、升级、组合、拆分、租赁、转售服务，为⽤户提供平台币、稳定币、主流币三⼤收益结构，⼀站式智能化资产托管和收益理财配置，保障⽤户投资权益，助⼒消费市场的产业升级，促进数字艺术赋能实体经济。\n喜鹊（LuckyBird）让各⾏各业和⾏业⼤V通过DID身份、NFT域名、NFT、链游、交互协议等⼯具便捷进⼊Web3，在元宇宙空间延伸⾃⼰的商业价值，完成商业权益的再⽣分配，打造真正的消费者、创作者、⽣产者、运营者利益共同体。\n其初始团队分布于⽇本、北欧、美国、中国，具有超6年以上区块链通证经济研究、技术开发、加密投资和项⽬孵化、创投、全球合规经验。"},{name:"核心产品：",content:"喜鹊DAO（LuckyBird）是一个致力于使用NFT功能赋能流量生产力的智能Web3孵化器，喜鹊将深度优化NFT的功能，开拓实体经济，社群经济，加密社交通证的权益创新，升级、组合、拆分、租赁、转售服务，助力消费市场的产业升级，推动数字艺术经济赋能实体，让各行各业通过DID身份、NFT、链游、交互协议等工具便捷进入Web3，元宇宙空间延伸自己的商业价值，完成商业权益的再生分配，打造真正的消费者、创作者、生产者、运营者利益共同体。"},{name:"用户协议：",content:'用户直接或通过各类方式间接使用Lucky Bird凭条服务和数据的行为，都将视作已无条件接受本声明所涉及全部内容；若用户对本声明的任何条款有异议，请停止使用Lucky Bird平台所提供的全部服务；<br><br>\n第一条<br>\n    1.不得干扰、损害和侵犯Lucky Bird平台的各种合法权利与利益；<br>\n    2.遵守Lucky Bird平台以及与之相关的网络服务的协议、指导原则、管理细则等。<br><br>\n\n第二条<br>\n\n    1.用户在Lucky Bird平台发布侵犯他人知识产权或其他合法权益的内容，平台有权予以删除，并保留移交司法机关处理的权力；<br>\n    2.个人或单位如认为平台上存在侵犯自身合法权益的内容，应准备好具有法律效应的证明材料，及时与平台取得联系，以便平台迅速做出处理。"<br>'}]}},computed:{is731:function(){return/^(?:731)$/.test(this.appConfig.sid)},is723:function(){return/^(?:723)$/.test(this.appConfig.sid)},socialList:function(){var t=["facebook","instagram","telegram","twitter","youtube"],e=this.appConfig.sid;return 691==e&&t.pop(),t}},methods:{clickShare:function(t){var e=this.appConfig.sid,a=o[e];return!!a&&Object(c["g"])(a[t])},viewAbout:function(t){this.$router.push({name:"about",params:{id:t}})},goDeposit:function(){var t={name:"investRecharge"};731==this.appConfig.sid&&(t="/recharge?pledge=0"),this.$router.push(t)}}},u=l,m=(a("35ae"),a("0c7c")),p=Object(m["a"])(u,s,i,!1,null,"06f382d4",null);e["default"]=p.exports},"25f7":function(t,e,a){t.exports=a.p+"assets/img/banner_icon.aa59ee62.png"},"35ae":function(t,e,a){"use strict";var s=a("cd87"),i=a.n(s);i.a},cd87:function(t,e,a){},fc03:function(t,e,a){"use strict";a("4de4"),a("c740"),a("d81d"),a("a434"),a("b0c0"),a("b680"),a("ac1f"),a("1276"),a("96cf");var s=a("1da1"),i=a("5530"),n=a("7212"),r=(a("a7a3"),a("365c")),c=a("2f62"),o={trc20:1,erc20:2,bep20:3,doge:4,trx:5,eth:6,bnb:7},l={trx:1,eth:2,bnb:3,doge:4};e["a"]={name:"IndexExtend",components:{Swiper:n["Swiper"],SwiperSlide:n["SwiperSlide"]},directives:{swiper:n["directive"]},data:function(){return{gameMap:{},noticeList:[],play:!1,timer:null,cycleTimer:null,startPlayState:!1,startCycleState:!1,swiperOptions:{slidesPerView:1,loop:!0,navigation:{nextEl:".btn-next",prevEl:".btn-prev"},pagination:{el:".swiper-pagination"}}}},computed:Object(i["a"])(Object(i["a"])({},Object(c["c"])(["socketMessage"])),{},{commentTitle:function(){var t={DOGE:"SuccessfulpeoplewhosupportDOGE",TRX:"Founderoftron",USD:"CofounderofTether"},e=t[this.$currencySymbol]||"Founderoftron";return this.$t(e)},commentList:function(){var t={DOGE:[{id:1,name:"Elon Musk",src:a("183f"),content:this.$t("SuccessfulpeoplewhosupportDOGE1")},{id:2,name:"Vitalik Buterin",src:a("79d7"),content:this.$t("SuccessfulpeoplewhosupportDOGE2")},{id:3,name:"Mark Cuban",src:a("5765"),content:this.$t("SuccessfulpeoplewhosupportDOGE3")}],TRX:[{id:1,name:"Jack Ma",src:a("9996"),content:this.$t("Teaminvestmentisrunning1")},{id:2,name:"Kobe Bean Bryant",src:a("f8dc"),content:this.$t("Teaminvestmentisrunning2")},{id:3,name:"Warren Edward Buffett",src:a("4797"),content:this.$t("Teaminvestmentisrunning3")}],USD:[{id:1,name:"Craig Sellars",src:a("1e30"),content:this.$t("usdtcreator1")}]};return t[this.$currencySymbol]||t["TRX"]}}),created:function(){this.fetchRechargeCurrency(),this.startCycleState=!0,this.startCycle()},mounted:function(){var t=this;setTimeout((function(){t.startPlayState=!0,t.startPlay()}),2e3)},beforeDestroy:function(){this.startPlayState=!1,this.startCycleState=!1},methods:{fetchRechargeCurrency:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,s,i,n,c,u,m,p,v;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(r["fetchRechargeCurrency2"])();case 3:if(a=e.sent,s=a.code,a.msg,i=a.data,0==s){e.next=7;break}return e.abrupt("return");case 7:if(n=i.list,c=void 0===n?[]:n,42==t.themeIndex&&(u=c.findIndex((function(t){return 7==t.id})),-1!=u&&(m=c.splice(u,1),c.unshift(m[0]))),p=t.appConfig.sid,v=725==p?l:o,c=c.sort((function(t,e){return v[t.name.toLowerCase()]-v[e.name.toLowerCase()]})),c=c.filter((function(t){return!/20$/.test(t.name)})),0!=c.length){e.next=15;break}return e.abrupt("return");case 15:t.getGameMap(c),e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))()},fetchWithdrawlist:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(r["fetchWithdrawlist"])();case 3:if(a=e.sent,s=a.code,a.msg,i=a.data,0==s){e.next=7;break}return e.abrupt("return");case 7:t.noticeList=i,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},getGameMap:function(t){var e={};t.map((function(t){var a=t.name;return t.price=0,t.zd=0,e[a]=t,t})),this.gameMap=e},startPlay:function(){var t=this;if(0!=this.startPlayState){this.play=!0;var e=this.noticeList,a=e.length;this.timer=setTimeout((function(){e.unshift(e[a-1]),e.pop(e[e.length-1]),t.play=!1}),500),setTimeout(this.startPlay,2e3)}else clearTimeout(this.timer)},startCycle:function(){0!=this.startCycleState?(this.fetchWithdrawlist(),this.cycleTimer=setTimeout(this.startCycle,3e5)):clearTimeout(this.cycleTimer)}},watch:{socketMessage:function(t){if(null!=t.ch){var e=t.ch.split(".");if(3==e.length){var a=e[1],s=t.tick,i=(s.id,s.close),n=s.open,r=(s.high,s.low,s.amount),c=(1*i).toFixed(4),o=((i-n)/n*100).toFixed(2),l=o;o=(o>0?"+"+o:o)+"%";var u=this.gameMap[a];null!=u&&(u.price=c,u.zd=o,u._zd=l,u.vol=r*i,u._zd=l,this.$forceUpdate())}}}}}}}]);