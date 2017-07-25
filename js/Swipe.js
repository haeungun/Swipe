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

    touchStartEventHandler(event) {

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