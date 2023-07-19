"use strict";
exports.__esModule = true;
var dynamic_1 = require("next/dynamic");
var RemoteCart = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("cart/cart"); }); }, {
    ssr: false,
    loading: function () { return (React.createElement("p", { style: { height: "80px", width: "100vw" } }, "Loading cart...")); }
});
function Cart() {
    return React.createElement(RemoteCart, null);
}
exports["default"] = Cart;
