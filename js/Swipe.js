class Swipe {
    
    constructor(element, criteria) {
        this.elem = document.querySelector(element);
        this.crit = criteria;
        this.saveShift = null;
    }

    on() {
        this.elem.addEventListener('touchstart', this.touchStartEventHandler.bind(this));
        this.elem.addEventListener('touchmove', this.touchMoveEventHandler.bind(this));
        this.elem.addEventListener('touchend', this.touchEndEventHandler.bind(this));
    }

    off() {
        this.elem.removeEventListener('touchstart', this.touchStartEventHandler.bind(this));
        this.elem.removeEventListener('touchmove', this.touchMoveEventHandler.bind(this));
        this.elem.removeEventListener('touchend', this.touchEndEventHandler.bind(this));
    }

    get shift() {
        return this.elem.getAttribute('style').replace(/--shift: ([+-]?([0-9]*[.])?[0-9]+);/,'$1') * 1;
    }

    set shift(val) {
        this.elem.setAttribute('style', `--shift: ${val};`);
    }

    shiftElement(distance) {
        let changeShift;

        if (distance > this.crit) {
            changeShift = this.saveShift + 1;
        } else if (distance < -this.crit) {
            changeShift = this.saveShift - 1;
        } else {
            changeShift = this.saveShift;
        }

        if (changeShift >= 0 && changeShift < this.elem.children.length)
            this.shift = changeShift;
        else
            this.shift = this.saveShift;
    }

    isScroll(start, end) {
        const x1 = start.pageX;
        const y1 = start.pageY;
        const x2 = end.pageX;
        const y2 = end.pageY;

        const angle = this.getAngle(x1, y1, x2, y2);
        const absAngle = Math.abs(angle);
        
        if (!(absAngle > 75 && absAngle < 105)) {
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

    addClass(ele, cssClass) {
        ele.classList.add(cssClass);
    }

    removeClass(ele, cssClass) {
        ele.classList.remove(cssClass);
    }

    calcDistance(start, end) {
        return {
            X: start.pageX - end.pageX,
            Y: start.pageY - end.pageY
        }
    }

    touchStartEventHandler(event) {
        if (this.saveShift !== null) {
            this.shift = this.saveShift;
        }
        this.startOffset = event.targetTouches[0];
        this.saveShift = this.shift;
        this.removeClass(this.elem, 'transition');
    }

    touchMoveEventHandler(event) {
         this.moveOffset = event.targetTouches[0];
         const dist = this.calcDistance(this.startOffset, this.moveOffset);
         const clientWidth = this.moveOffset.target.clientWidth;
         const widthRatio = dist.X / clientWidth;
         this.shift = this.saveShift + widthRatio;
    }

    touchEndEventHandler(event) {
        this.endOffset = event.changedTouches[0];
        const dist = this.calcDistance(this.startOffset, this.moveOffset);
        const clientWidth = this.endOffset.target.clientWidth;
        const widthRatio = dist.X / clientWidth;
        this.addClass(this.elem, 'transition');

        if (this.isScroll(this.startOffset, this.endOffset)) {
            this.shift = this.saveShift;
        } else {
            this.shiftElement(widthRatio);
        }
        this.saveShift = null;
    }
}