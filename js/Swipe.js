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
        this.startXOffset = event.pageX;
        this.startYOffset = event.pageY;
    }

    set endOffset(event) {
        this.endXffset = event.pageX;
        this.endYOffset = event.pageY;
    }

    set originTranslateX() {
        
    }

    set distance() {
        this.den = Math.abs(this.startXOffset) - Math.abs(this.endXffset);
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

    isScroll() {

    }

    getAngle(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;

        const radius = Math.atan2(dx, dy);
        const degree = (radius * 180) / Math.PI;

        return degree;
    }
}