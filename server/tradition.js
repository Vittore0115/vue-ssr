const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send(`
        <html>
            <div>
                <div id="app">
                    <h1>欢迎光临</h1>
                    <p class="demo">传统服务端渲染</p>
                </div>
            </body>
        </html> 
    `)
})

app.listen(3000, ()=>{
    console.log('启动成功')
})