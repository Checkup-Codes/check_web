import{o as e,f as o,a as l,u as a,b as t,c as i,w as n,g as u,F as g,d as r,Z as m,j as d}from"./app-bipgnaV4.js";const h={class:"relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"},f={key:0,class:"sm:fixed sm:top-0 sm:right-0 p-6 text-end"},p=t("div",{class:"max-w-7xl mx-auto p-6 lg:p-8"},[t("div",{class:"text-white text-2xl"},[r("Siteyi kodlamama "),t("a",{href:"https://discord.gg/9C4JHVjjcd",class:"text-pink-700"}," yardım"),r(" et")])],-1),k={__name:"Welcome",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0}},setup(c){return(s,x)=>(e(),o(g,null,[l(a(m),{title:"Welcome"}),t("div",h,[c.canLogin?(e(),o("div",f,[s.$page.props.auth.user?(e(),i(a(d),{key:0,href:s.route("dashboard"),class:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:n(()=>[r("Dashboard")]),_:1},8,["href"])):(e(),i(a(d),{key:1,href:s.route("login"),class:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:n(()=>[r("Log in")]),_:1},8,["href"]))])):u("",!0),p])],64))}};export{k as default};
