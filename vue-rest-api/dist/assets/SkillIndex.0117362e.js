import{u as x}from"./skills.8a5e7d48.js";import{o as u,r as g,a as s,c as o,b as e,d as r,w as l,F as h,e as y,u as d,f as n,t as c}from"./index.6f4b9fd7.js";const m={class:"mt-12"},b={class:"flex justify-end m-2 p-2"},k={class:"overflow-x-auto relative"},f={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},v=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"py-3 px-6"},"Name"),e("th",{scope:"col",class:"py-3 px-6"},"Slug"),e("th",{scope:"col",class:"py-3 px-6"})])],-1),w={class:"py-4 px-6"},S={class:"py-4 px-6"},C={class:"py-4 px-6 space-x-2"},N=["onClick"],R={__name:"SkillIndex",setup(B){const{skills:i,getSkills:p,destroySkill:_}=x();return u(()=>p()),(E,L)=>{const a=g("RouterLink");return s(),o("div",m,[e("div",b,[r(a,{to:{name:"SkillCreate"},class:"px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded"},{default:l(()=>[n("New Skill")]),_:1})]),e("div",k,[e("table",f,[v,e("tbody",null,[(s(!0),o(h,null,y(d(i),t=>(s(),o("tr",{key:t.id,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},[e("td",w,c(t.name),1),e("td",S,c(t.skill),1),e("td",C,[r(a,{to:{name:"SkillEdit",params:{id:t.id}},class:"px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded"},{default:l(()=>[n(" Edit ")]),_:2},1032,["to"]),e("button",{onClick:V=>d(_)(t.id),class:"px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded"}," Delete ",8,N)])]))),128))])])])])}}};export{R as default};
