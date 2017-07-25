document.addEventListener("DOMContentLoaded", () => {
    var swipe = new Swipe('.viewport');
    var saveShift = 0;
    var startOffset;
    var moveOffset;
    var endOffset;
    var originOffset;

    const element = document.querySelector("div");

    element.addEventListener("touchstart", (e) => {
        startOffset = e.targetTouches[0];
        console.log("START ::", e.targetTouches[0]);
        saveShift = swipe.shift;
    });
    element.addEventListener("touchmove", (e) => {
        const moveOffset = e.targetTouches[0];
        console.log("MOVE ::", e.targetTouches[0]);
        var distX = startOffset.pageX - moveOffset.pageX;
        var distY = startOffset.pageY - moveOffset.pageY;
        var clientWidth = e.targetTouches[0].target.clientWidth;
        var widthRatio = distX / clientWidth;
        console.info(saveShift );
        swipe.shift = saveShift + widthRatio;
        
        element.style.transform = `translateX(${moveOffset}px)`;
    });
    element.addEventListener("touchend", (e) => {
        const endOffset = e.changedTouches[0];
        var clientWidth = e.changedTouches[0].target.clientWidth;
        var distX = startOffset.pageX - endOffset.pageX;
        var widthRatio = distX / clientWidth;
        console.warn(widthRatio);
        if (widthRatio > 0.2)
            swipe.shift = ++saveShift;
        else if (widthRatio < -0.2)
            swipe.shift = --saveShift;
        else
            swipe.shift = saveShift;
    });
    
});
