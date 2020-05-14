getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            //JSON.parse 把符合json语法的字符串变成JS对应类型的数据
            console.log(request.response)
            const bool = JSON.parse(request.response)
            console.log(bool)
            myName.textContent = bool.name
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => { }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => { }
    request.send()
}

getCSS.onclick = () => {
    //创建一个请求对象
    const request = new XMLHttpRequest() //readystate = 0
    // 打开获取路径
    request.open('GET', '/style.css') //readystate = 1
    //监听 成功/失败
    request.onreadystatechange = () => {
        console.log(request.readyState)
        if (request.readyState === 4) {
            console.log('下载完成')
            //下载完成，以2xx开头的表示成功，4xx/5xx 表示失败，300多会再发请求可以不用管
            if (request.status >= 200 && request.status < 300) {
                //创建style标签
                const style = document.createElement('style')
                //填写style内容
                style.innerHTML = request.response
                //插到头里面
                document.head.appendChild(style)
            } else {
                alert('加载 CSS 失败')
            }
        }
    }
    //发送
    request.send()
}
