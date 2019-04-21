//cookie是用；分割开的name=value
"name=yuanlei;age=22;hobby=reading"
//在cookie的名或值中不能使用分号（;）、逗号（,）、等号（=）以及空格（需要使用escape()函数进行编码）。
function getCookie(name) {
    let cookie = document.cookie;
    let index = cookie.indexOf(escape(name));
    if (index != -1) {
        let start = index + name.length + 1;
        let end = cookie.indexOf(';', start);
        return unescape(cookie.substring(start, end));
    }
}

//Name\Value\Expires属性\Max-Age属性\Path属性\Domain属性\Secure属性\Same-Site属性\Http属性\Size属性
function setCookie(obj){
    let cookieStr = '';
    for(let prop in obj){
        cookieStr += `${escape(prop)}=${escape(obj[prop])};`;
    }
    let date = new Date();
    document.cookie = `${escape(name)}=${escape(value)};expires=${escape(date)}`;
}
