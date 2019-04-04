import React from "react"

export default ()=>{
    return <div>
               <h1>安装</h1>
               <pre>
                   <code>npm i cake-react-cli -g</code>
               </pre>
               <h1>使用</h1>
               <p>增加模板:统一由一个人上传，其他人不使用此命令</p>
               <pre>
                   <code>cake-react a</code>
               </pre>
               <p>下载模板：输入模板名字就可以了，不清楚可以先查看模板列表</p>
               <pre>
                   <code>cake-react d</code>
               </pre>
               <p>查看模板列表</p>
               <pre>
                   <code>cake-react l</code>
               </pre>
           </div>
}