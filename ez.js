const log = console.log.bind(console)

const e = (selector) => {
    let element = document.querySelector(selector)
    if (element === null) {
        return null
    } else {
        return element
    }
}

const es = (selector) => {
    let elements = document.querySelectorAll(selector)
    if (elements.length === 0) {
        return []
    } else {
        return elements
    }
}

const appendHtml = (element, html) => {
    element.insertAdjacentHTML('beforeend', html)
}

const bindEvent = (element, eventName, callback) => {
    element.addEventListener(eventName, callback)
}

const removeClassAll = (className) => {
    let selector = '.' + className
    let elements = es(selector)
    for (let i = 0; i < elements.length; i++) {
        let e = elements[i]
        e.classList.remove(className)
    }
}

const bindAll = (selector, eventName, callback) => {
    let elements = es(selector)
    for (let i = 0; i < elements.length; i++) {
        let e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

// find 函数可以查找 element 的所有子元素
const find = (element, selector) => {
    let e = element.querySelector(selector)
    if (e === null) {
        let s = `选择器 ${selector} 写错了, 请仔细检查并且复习三种基本的选择器`
        alert(s)
        return null
    } else {
        return e
    }
}
