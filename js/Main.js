document.addEventListener("DOMContentLoaded", () => {
    
    var startOffset;
    var endOffset;
    var originOffset;

    const element = document.querySelector("div");

    element.addEventListener("touchstart", (e) => {
        startOffset = e.pageX;
        console.log("START ::", e.pageX);
    });
    element.addEventListener("touchmove", (e) => {
        const moveOffset = e.pageX;
        console.log(element.style.transform);
        element.style.transform = `translateX(${moveOffset}px)`;
    });
    element.addEventListener("touchend", (e) => {
        endOffset = e.pageX;
        console.log("END ::", e.pageX);

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
