(function () {
    "use strict";
    let x= 3;
    console.log("IIFE!");
})();

(() => {
    y = 2;
    console.log("Dos!");
})();

(function () {
    z = 3;
    console.log("Tres!");
})();