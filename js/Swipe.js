class Swipe {
    constructor(element, criteria) {
        this.elem = document.querySelector(element);
        this.crit = criteria;
    }

    on() {
        this.elem.addEventListener("touchstart", touchStartEventHandler);
        this.elem.addEventListener("touchmove", touchMoveEventHandler);
        this.elem.addEventListener("touchend", touchEndEventHandler);
    }

    get shift() {
        return document.querySelector('.viewport').getAttribute('style').replace(/--shift: ([0-9]+);/,'$1') * 1;
    }
    set shift(val) {
        document.querySelector('.viewport').setAttribute('style', `--shift: ${val}`);
    }

    touchStartEventHandler(event) {
        console.log(event);
    }

    touchMoveEventHandler(event) {
  
    }

    touchEndEventHandler(event) {

    }

    setStartOffset(event) {
        this.startOffset = event.pageX;
    }

    setEndOffset(event) {
        this.endOffset = event.pageX;
        this.setDistance();
    }

    setOriginTranslateX() {
        
    }

    setDistance() {
        this.den = Math.abs(this.startOffset) - Math.abs(this.endOffset);
    }

    moveElement(distance) {
        const dis = distance;
        this.elem.style.transform = `translateX(${dis})`;
    }

    isSwiping() {
        if (Math.abs(this.den) > this.crit) {
            return true;
        }
        return false;
    }
}