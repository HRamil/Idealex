function after(count, func) {
    let times = 0;

    return function() {
        times++;

        if (times == count) {
            return func();
        }
    };
}

const called = function() { console.log("hello") };
const afterCalled = after(3, called);

afterCalled(); 
afterCalled();
afterCalled();