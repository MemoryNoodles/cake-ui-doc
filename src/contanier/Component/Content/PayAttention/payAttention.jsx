import React from "react"

export default ()=>{
    return <div className="attention">
               <h1 style={{fontSize:"22px"}}>开发组件规范</h1>
               <p >组件的写法</p>
               <pre>
                   <code>1、传入的参数要做类型验证</code><br/>
                   <code>2、传入的参数要有默认值</code>
               </pre>  
               <p>组件的注释</p>  
               <pre>
                   <code>1、组件作者是谁要注释</code><br/>
                   <code>2、组件的功能是什么要有注释</code><br/>
                   <code>3、组件的里的函数要有注释</code><br/>
                   <code>4、组件的属性（可以传入配置）要有注释</code>
               </pre>
               <p>组件示列</p>  
               <pre>
                   <code>1、组件示列要让人对组件基本功能的有认识</code>
                </pre>       
           </div>
}