import{u as g,r as Q,j as e,L as b}from"./index-MHuX4VLS.js";import{T as x}from"./themes-BD1xGHSI.js";import{s as v}from"./sky-store-CB1KWhY4.js";import{S as y}from"./AtmosphereUI-CZmWQ84a.js";import{m as o}from"./proxy-B4JgSJTk.js";const j="/assets/choose-BbiKXt75.jpg";function L(){const i=g(),[n,l]=Q.useState(null),r=t=>{l(t),v({theme:t}),setTimeout(()=>{i({to:"/build-sky"})},1200)};return e.jsxs("div",{className:"relative w-full h-screen overflow-hidden",style:{background:"#080c16"},children:[e.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{backgroundImage:`url(${j})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),e.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.34) 75%, rgba(0,0,0,0.5) 100%)"}}),e.jsx("div",{className:"grain absolute inset-0 pointer-events-none opacity-60"}),e.jsx("div",{className:"absolute top-5 left-5 sm:top-6 sm:left-6 z-20",children:e.jsx(b,{to:"/",className:"label-mono hover:text-star transition-colors",children:"← back to home"})}),e.jsxs("div",{className:"relative z-10 h-screen flex flex-col justify-between max-w-[1700px] mx-auto px-6 xl:px-10 pt-8 pb-5 overflow-hidden",children:[e.jsxs(o.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:1.2},className:"text-center shrink-0",children:[e.jsxs("div",{className:"flex items-center justify-center gap-3 mb-1 opacity-60",children:[e.jsx("span",{className:"h-px w-8 bg-foreground/40"}),e.jsx(y,{size:9}),e.jsx("span",{className:"h-px w-8 bg-foreground/40"})]}),e.jsx("h1",{className:"display-distressed",style:{fontSize:"clamp(3.4rem,4.6vw,7rem)",lineHeight:"1.02",paddingTop:"10px",paddingBottom:"0px"},children:"CHOOSE YOUR NIGHT"}),e.jsx("p",{className:"font-serif italic text-foreground/75",style:{marginTop:"-4px",fontSize:"clamp(1rem,1.1vw,1.2rem)"},children:"every sky carries a different feeling"})]}),e.jsx(o.div,{animate:n?{opacity:0,scale:1.05,filter:"blur(10px)"}:{},transition:{duration:1},className:`
    flex-1
    flex
    items-center
    justify-center
    min-h-0
  `,children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:`
        grid
        grid-cols-3
        gap-x-4
        mb-5
      `,children:x.slice(0,3).map((t,s)=>e.jsx("div",{className:"w-[350px] h-[215px]",children:e.jsx(m,{index:s,title:t.title,subtitle:t.subtitle,number:t.number,gradient:t.gradient,starColor:t.starColor,onClick:()=>r(t.id),isSelected:n===t.id})},t.id))}),e.jsx("div",{className:`
        flex
        justify-center
        gap-x-5
      `,children:x.slice(3,5).map((t,s)=>e.jsx("div",{className:"w-[350px] h-[215px]",children:e.jsx(m,{index:s+3,title:t.title,subtitle:t.subtitle,number:t.number,gradient:t.gradient,starColor:t.starColor,onClick:()=>r(t.id),isSelected:n===t.id})},t.id))})]})}),e.jsx("div",{className:"relative opacity-70 pointer-events-none select-none shrink-0 mt-2",children:e.jsx("div",{className:"flex flex-wrap justify-center items-center gap-5 xl:gap-8 text-center",children:["you looked beautiful that night","look up & breathe","the moon is beautiful, isn't it?","if stars could fall, they'd tell your name"].map((t,s)=>e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsx("p",{className:"text-[#f3dfb4]/70",style:{fontFamily:'"La Belle Aurore", cursive',transform:`rotate(${s%2===0?"-1deg":"1deg"})`,filter:"blur(.15px)",fontSize:"clamp(14px,0.9vw,18px)",lineHeight:1},children:t}),s!==3&&e.jsx("span",{className:"text-[#f3dfb4]/60",style:{textShadow:"0 0 8px rgba(243,223,180,.4)",fontSize:"10px"},children:"✦"})]},s))})})]}),n&&e.jsx(o.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},className:"absolute inset-0 bg-black z-30 flex items-center justify-center",children:e.jsx("p",{className:"font-serif italic text-xl text-foreground/80",children:"opening your sky…"})})]})}function m({index:i,title:n,subtitle:l,number:r,gradient:t,starColor:s,onClick:u,isSelected:h}){const c=[-1.1,.6,-.7,.8,-.5][i%5],d=[{outer:`
      M4,7
      Q8,4 17,6
      T35,5
      T54,7
      T72,5
      T90,6
      Q95,8 96,14

      T95,33
      Q94,45 96,58
      T94,82
      Q93,92 87,94

      T65,95
      T42,94
      T20,95
      Q8,94 5,89

      T4,67
      Q5,50 3,36
      T4,7
      `,inner:`
      M5,8
      Q9,5 18,7
      T36,6
      T54,8
      T71,6
      T89,7
      Q94,9 95,15

      T94,33
      Q93,45 95,57
      T93,81
      Q92,91 86,93

      T65,94
      T43,93
      T21,94
      Q9,93 6,88

      T5,67
      Q6,50 4,36
      T5,8
      `},{outer:`
      M3,8
      Q11,5 21,6
      T40,5
      Q50,9 60,5
      T79,6
      T94,8

      Q96,18 95,37
      T96,63
      Q95,78 94,91

      Q80,94 62,93
      T29,94
      Q10,93 5,88

      T4,66
      Q5,51 3,35
      T3,8
      `,inner:`
      M4,9
      Q12,6 22,7
      T40,6
      Q50,10 60,6
      T78,7
      T93,9

      Q95,18 94,37
      T95,63
      Q94,78 93,90

      Q79,93 62,92
      T30,93
      Q11,92 6,87

      T5,66
      Q6,51 4,35
      T4,9
      `},{outer:`
      M5,6
      Q15,4 28,5
      T48,4
      Q58,8 69,5
      T88,6
      Q95,8 96,16

      T95,39
      Q97,53 95,67
      T94,88

      Q85,94 69,93
      T45,94
      T20,93
      Q9,92 6,87

      T5,65
      Q6,51 4,37
      T5,6
      `,inner:`
      M6,7
      Q16,5 28,6
      T48,5
      Q58,9 69,6
      T87,7
      Q94,9 95,17

      T94,39
      Q96,53 94,67
      T93,87

      Q84,93 69,92
      T45,93
      T21,92
      Q10,91 7,86

      T6,65
      Q7,51 5,37
      T6,7
      `},{outer:`
      M4,6
      Q10,5 20,4
      T38,6
      Q51,3 65,6
      T84,5
      Q94,7 95,14

      Q97,30 95,46
      T94,71
      Q96,83 92,92

      Q76,95 58,94
      T32,95
      Q14,94 7,90

      T5,71
      Q7,54 4,37
      T4,6
      `,inner:`
      M5,7
      Q11,6 20,5
      T38,7
      Q51,4 65,7
      T83,6
      Q93,8 94,15

      Q96,30 94,46
      T93,70
      Q95,82 91,91

      Q75,94 58,93
      T32,94
      Q15,93 8,89

      T6,70
      Q8,54 5,37
      T5,7
      `},{outer:`
      M5,7
      Q12,3 24,5
      T45,4
      T67,5
      Q81,4 92,7

      Q96,17 95,32
      Q97,48 94,63
      T93,87

      Q81,94 62,93
      T36,94
      Q18,95 8,91

      T6,68
      Q7,52 5,36
      T5,7
      `,inner:`
      M6,8
      Q13,4 24,6
      T45,5
      T67,6
      Q81,5 91,8

      Q95,17 94,32
      Q96,48 93,63
      T92,86

      Q80,93 62,92
      T36,93
      Q19,94 9,90

      T7,68
      Q8,52 6,36
      T6,8
      `}],p=d[i%d.length];return e.jsxs(o.button,{initial:{opacity:0,y:24,rotate:c},animate:{opacity:1,y:0,rotate:c,scale:h?1.08:1},transition:{duration:1.1,delay:.15+i*.12,ease:"easeOut"},whileHover:{y:-3,rotate:c*.6,scale:1.015},onClick:u,className:"group relative w-full h-full overflow-hidden cursor-pointer",style:{background:t,clipPath:"polygon(1.2% 2.4%, 7% 1.3%, 16% 2%, 28% 1.2%, 42% 2.2%, 57% 1.2%, 71% 2.1%, 84% 1.3%, 96.8% 3.2%, 98.8% 16%, 98.1% 32%, 99% 49%, 98.2% 66%, 99.1% 83%, 96.9% 97%, 83% 98.1%, 67% 97.2%, 50% 98.3%, 34% 97.1%, 18% 98.2%, 4% 97%, 1.3% 91%, 1.9% 74%, 1% 56%, 1.8% 39%, 1.1% 22%)",boxShadow:"0 8px 20px rgba(0,0,0,0.32), inset 0 0 16px rgba(0,0,0,0.14)"},children:[e.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 100",preserveAspectRatio:"none",style:{opacity:.88},children:[e.jsx("path",{d:p.outer,fill:"none",stroke:"rgba(181,146,103,0.72)",strokeWidth:"0.42",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:p.inner,fill:"none",stroke:"rgba(244,214,170,0.18)",strokeWidth:"0.18",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{opacity:.13,mixBlendMode:"soft-light",backgroundImage:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='5'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.75'/></svg>")`}}),e.jsx("div",{className:"absolute inset-0 pointer-events-none",children:Array.from({length:18}).map((N,a)=>{const T=(a*37+i*11)%100,f=(a*23+i*7)%100;return e.jsx("span",{className:"absolute rounded-full",style:{left:`${T}%`,top:`${f}%`,width:1.5,height:1.5,background:s,boxShadow:`0 0 4px ${s}`,animation:`star-twinkle ${3+a%4}s ease-in-out ${a*.2}s infinite`}},a)})}),e.jsx("div",{className:"absolute label-mono opacity-75 text-[10px]",style:{top:"30px",left:"159px"},children:r}),e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center px-4",children:[e.jsx("h3",{className:"display-distressed tracking-[0.06em]",style:{fontSize:"clamp(2.6rem,3vw,3.8rem)",lineHeight:"1",paddingTop:"10px",overflow:"visible",color:"rgba(226,216,195,0.92)"},children:n.toUpperCase()}),e.jsxs("svg",{width:"145",height:"15",viewBox:"0 0 145 16",className:"mt-[-2px] mb-[-1px] opacity-80",children:[e.jsx("path",{d:"M8 5 Q42 10 74 6 T136 5",stroke:"rgba(201,170,125,0.72)",strokeWidth:"1",fill:"none",strokeLinecap:"round"}),e.jsx("path",{d:"M10 9 Q44 13 75 10 T134 9",stroke:"rgba(241,216,177,0.34)",strokeWidth:"0.7",fill:"none",strokeLinecap:"round"})]}),e.jsx("p",{className:"font-serif italic text-[13px] sm:text-sm",style:{marginTop:"-2px",color:"rgba(255,244,220,0.88)"},children:l})]}),e.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",style:{boxShadow:`inset 0 0 50px ${s}18`}})]})}export{L as component};
