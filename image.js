// 轮播图
/*
1. 写一个 div 里面有 3 个 img 标签
2. 只显示当前活动的 img 标签
3. 加 1 个按钮，点击的时候切换图片
*/
const bindEventDots = function() {
    let selector = '.ez-slide-dot'

    bindAll(selector, 'mouseover', function(event) {
        log('click dots')
        let self = event.target
        // 找到 slide div
        let slide = self.closest('.ez-slide')
        // 获取被点击dot对应的图片的index
        let index = Number(self.dataset.index)
        // log('index', index)
        showAtIndex(index)

    })
}

const nextIndex = function(offset) {
    log("next Index")
    let slide = e('.ez-slide')
    // 得到图片总数和当前图片下标
    let numberOfImgs = parseInt(slide.dataset.imgs, 10)
    let activeIndex = parseInt(slide.dataset.active, 10)
    // 求出当前点击按钮对应的offset
    // 求出下一张图片的 id
    let nextIndex = (activeIndex + offset + numberOfImgs) % numberOfImgs
    log("nextIndex", nextIndex)
    return nextIndex

}

const showAtIndex = function(index) {
    let slide = e('.ez-slide')
    slide.dataset.active = index
    let nextSelector = '#id-ezimage-' + String(index)
    let className = 'ez-slide-image-active'
    removeClassAll(className)
    let img = e(nextSelector)
    img.classList.add(className)
 
    let nextDot = '#id-ezdot-' + String(index)
    let dotClass = 'ez-dot-active'
   
    removeClassAll(dotClass)
    let dot = e(nextDot)
    dot.classList.add(dotClass)

}

const playNext = function() {

    let offset = 1
    let index = nextIndex(offset)

    showAtIndex(index)
}

const autoPlay = function() {
    let slide = e('.ez-slide')
    // log('bindTimer')
    let id = setInterval(function(){
        playNext()
    }, 2000)

    slide.dataset.timeid = id
}

const bindEventSlide = function() {
    let selector = '.ez-slide-buttons'
    bindAll(selector, 'click', function(event) {
        log('click next')
        let self = event.target
        let offset = Number(self.dataset.offset)

        let index = nextIndex(offset)
        // log('nextIndex', nextIndex)
        showAtIndex(index)

    })
}

const bindProcessTimer = function() {
    // log("bindProcessTimer")
    let slide = e('.ez-slide')
    bindEvent(slide, 'mouseover', function(event) {
        // log("slide mouseover")
        let self = event.target
        let id = slide.dataset.timeid

        clearInterval(id)
    })

    bindEvent(slide, 'mouseout', function(event) {
        // log("slide mouseout")
        autoPlay()        
    })

}

const bindEvents = function() {
    bindEventSlide()
    bindEventDots()
    bindProcessTimer()
}

const demoTimer = function() {

    log('begin', new Date())
    setTimeout(function() {
        log('时间到', new Date())
    }, 2000)
}

const __main = function() {
    bindEvents()
    // demoTimer()
}

__main()