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
        endOffset = e.pageX;
        console.log("END ::", e.pageX);
        swipe.shift = saveShift;

        var den = Math.abs(startOffset) - Math.abs(endOffset);
        if (den < -20) {
            element.style.transition = ".5s";
            element.style.transform = "translateX(250px)";
        } else if (den > 20){
            element.style.transform = "translateX(0px)";
        } else {

        }
    });
    
});
