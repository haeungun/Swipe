const assert = chai.assert;

describe("add and remove class", function() {

    const swipe = new Swipe();
    const elem = document.createElement("div");
    const tempClass = "testClass";

    it ("should add class on element", function() {
        swipe.addClass(elem, tempClass);
        assert.include(Array.from(elem.classList), tempClass);
    });

    it ("should remove class on element", function() {
        swipe.removeClass(elem, tempClass);
        assert.equal(elem.className, "");
    });
});
