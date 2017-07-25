class Swipe {
    constructor(element, criteria) {
        this.elem = document.querySelector(element);
        this.crit = criteria;
    }

    on() {
        this.elem.addEventListener("touchstart", this.touchStartEventHandler.bind(this));
        this.elem.addEventListener("touchmove", this.touchMoveEventHandler.bind(this));
        this.elem.addEventListener("touchend", this.touchEndEventHandler.bind(this));
    }

    get shift() {
        return this.elem.getAttribute('style').replace(/--shift: ([+-]?([0-9]*[.])?[0-9]+);/,'$1') * 1;
    }

    set shift(val) {
        this.elem.setAttribute('style', `--shift: ${val};`);
    }

    touchStartEventHandler(event) {
        this.startOffset = event;
    }

    touchMoveEventHandler(event) {
    }

    touchEndEventHandler(event) {
        this.endOffset = event;
        console.log(this.isScroll());
    }

    set startOffset(event) {
        this.startXOffset = event.pageX;
        this.startYOffset = event.pageY;
    }

    set endOffset(event) {
        this.endXffset = event.pageX;
        this.endYOffset = event.pageY;
    }
    /*
    set originTranslateX(event) {
        
    }
    */
    setDistance() {
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
        const angle = this.getAngle(this.startXOffset, this.startYOffset, this.endXffset, this.endYOffset);
        if (!(angle > 75 && angle < 105) || (angle > 165 && angle < 225)) {
            return true;
        }
        return false;
    }

    getAngle(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        const radius = Math.atan2(dx, dy);
        const degree = (radius * 180) / Math.PI;

        return degree;
    }
}