"use strict";(()=>{var e={};e.id=701,e.ids=[701],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2295:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>c,originalPathname:()=>m,requestAsyncStorage:()=>u,routeModule:()=>n,serverHooks:()=>l,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>p});var r={};a.r(r),a.d(r,{POST:()=>POST});var o=a(884),i=a(6132),s=a(5798);async function POST(e){let{businessName:t,techStack:a,painPoints:r,goals:o}=await e.json();if(!process.env.GEMINI_API_KEY)return s.Z.json({error:"API key not configured. Audit service is temporarily unavailable."},{status:503});try{let e=`
      You are a senior systems architect at DCFB Wellness. 
      Your goal is to provide a calm, minimalist, and deeply professional "Foundational System Audit" for a business.
      
      Business Details:
      - Name: ${t}
      - Current Tools/Tech: ${a}
      - Main Problems: ${r}
      - Future Goals: ${o}

      Please provide an audit structured as follows:
      1. Foundational Health (Current state evaluation)
      2. Connection Gaps (Where systems are disjointed)
      3. Strategic Simplification (What to stop doing or remove)
      4. Immediate Next Steps (The 3 most critical items to fix legitimacy or efficiency)

      Keep the tone calm, encouraging, but direct. Avoid marketing hype. 
      Focus on ownership, connectivity, and legitimacy.
      Format your response in clean Markdown.
    `,i=await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent",{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-key":process.env.GEMINI_API_KEY},body:JSON.stringify({contents:[{parts:[{text:e}]}],generationConfig:{temperature:.7,maxOutputTokens:1024}})});if(!i.ok)return s.Z.json({error:"Failed to generate audit. Please try again."},{status:i.status});let n=await i.json(),u=n.candidates?.[0]?.content?.parts?.[0]?.text||"No response";return s.Z.json({text:u})}catch(e){return console.error("Audit error:",e),s.Z.json({error:"Server error while generating audit."},{status:500})}}let n=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/audit/route",pathname:"/api/audit",filename:"route",bundlePath:"app/api/audit/route"},resolvedPagePath:"D:\\Users\\Chris\\Downloads\\dcfb-build---clean-systems (1)\\DCFB-build\\app\\api\\audit\\route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:u,staticGenerationAsyncStorage:d,serverHooks:l,headerHooks:c,staticGenerationBailout:p}=n,m="/api/audit/route"}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[729,798],()=>__webpack_exec__(2295));module.exports=a})();