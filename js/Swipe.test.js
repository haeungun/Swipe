const assert = chai.assert;

const swipe = new Swipe();

describe("add and remove class", function() {

    const elem = document.createElement("div");
    const elem2 = document.createElement("ul");
    const elem3 = document.createElement("p");

    const tempClass = "testClass";
    const tempClass2 = "";

    it ("should add class on element 1", function() {
        swipe.addClass(elem, tempClass);
        assert.include(Array.from(elem.classList), tempClass);
    });

    it ("should add class on element 2", function() {
        swipe.addClass(elem2, tempClass);
        assert.include(Array.from(elem.classList), tempClass);
    });

    it ("should add class on element 3", function() {
        swipe.addClass(elem3, tempClass);
        assert.include(Array.from(elem.classList), tempClass2);
    });

    it ("should remove class on element 1", function() {
        swipe.removeClass(elem, tempClass);
        assert.equal(elem.className, "");
    });

    it ("should remove class on element 2", function() {
        swipe.removeClass(elem2, tempClass);
        assert.equal(elem.className, "");
    });

    it ("should remove class on element 3", function() {
        swipe.removeClass(elem3, tempClass2);
        assert.equal(elem.className, "");
    });

});

describe("calculate distance", function() {
    
    var obj;
    var obj2;
    var obj3;

    it ("should return object has X, Y 1", function() {
        const start = { pageX: 50, pageY: 40 }; 
        const end = { pageX: 40, pageY: 30 }; 

        obj = swipe.calcDistance(start, end);
        assert.equal(obj.X, 10);
        assert.equal(obj.Y, 10);
    });

    it ("should return object has X, Y 2", function() {
        const start = { pageX: 10000000000, pageY: 0 }; 
        const end = { pageX: 10000000000, pageY: 30 }; 

        obj2 = swipe.calcDistance(start, end);
        assert.equal(obj2.X, 0);
        assert.equal(obj2.Y, -30);
    });

    it ("should return object has X, Y 3", function() {
        const start = { pageX: 123123123, pageY: 1000000000000 }; 
        const end = { pageX: 500000000000000, pageY: -1000000000 }; 

        obj3 = swipe.calcDistance(start, end);
        assert.equal(obj3.X, -499999876876877);
        assert.equal(obj3.Y, 1001000000000);
    });

    it ("check is scroll event 1", function() {
        assert.equal(swipe.isScroll(obj, obj2), true);
    });

    it ("check is scroll event 2", function() {
        assert.equal(swipe.isScroll(obj, obj3), true);
    });

    it ("check is scroll event 3", function() {
        assert.equal(swipe.isScroll(obj2, obj3), true);
    });
});



