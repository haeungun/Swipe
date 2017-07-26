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
    
    it ("should return object has X, Y 1", function() {
        const start = { pageX: 50, pageY: 40 }; 
        const end = { pageX: 40, pageY: 30 }; 

        const obj = swipe.calcDistance(start, end);
        assert.equal(obj.X, 10);
        assert.equal(obj.Y, 10);
    });

    it ("should return object has X, Y 2", function() {
        const start = { pageX: 10000000000, pageY: 0 }; 
        const end = { pageX: 10000000000, pageY: 30 }; 

        const obj = swipe.calcDistance(start, end);
        assert.equal(obj.X, 0);
        assert.equal(obj.Y, -30);
    });

    it ("should return object has X, Y 3", function() {
        const start = { pageX: 123123123, pageY: 1000000000000 }; 
        const end = { pageX: 500000000000000, pageY: -1000000000 }; 

        const obj = swipe.calcDistance(start, end);
        assert.equal(obj.X, -499,999,876,876,877);
        assert.equal(obj.Y, 1,001,000,000,000);
    });
});



