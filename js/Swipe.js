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
        return this.elem.getAttribute('style').replace(/--current: ([0-9]+);/,'$1') * 1;
    }

    set shift(val) {
        this.elem.setAttribute('style', `--current: ${val}`);
    }

    touchStartEventHandler(event) {
        console.log(event);
    }

    touchMoveEventHandler(event) {
  
    }

    touchEndEventHandler(event) {

    }

    set startOffset(event) {
        this.startOffset = event.pageX;
    }

    set endOffset(event) {
        this.endOffset = event.pageX;
    }

    set originTranslateX() {
        
    }

    set distance() {
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