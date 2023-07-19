"use strict";
exports.__esModule = true;
var dynamic_1 = require("next/dynamic");
var RemotePlp = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require('plp/plp'); }); }, {
    ssr: false,
    loading: function () { return (React.createElement("p", { style: { height: '80px', width: '100vw' } }, "Loading pdp...")); }
});
var PlpCategory = function () {
    return (React.createElement("div", null,
        React.createElement(RemotePlp, null),
        React.createElement("h1", null, "+ By Category")));
};
exports["default"] = PlpCategory;
