"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var query, body, selectedFacets, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (req.method !== "POST") {
                        res.status(500).send("Method not allowed");
                    }
                    query = req.query, body = req.body;
                    selectedFacets = body.selectedFacets;
                    if (query.fullText === "" && !selectedFacets) {
                        res.json({ products: [] });
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].post("" + process.env.NEXT_PUBLIC_VTEX_GRAPHQL, {
                            query: "\n          query {\n            productSearch(\n              fullText: \"" + query.fullText + "\", \n              to: 4,\n              selectedFacets: [\n                {\n                  key: \"" + (selectedFacets ? selectedFacets.key : "") + "\"\n                  value: \"" + (selectedFacets ? selectedFacets.value : "") + "\"\n                }\n              ]\n            ) @context(provider: \"vtex.search-graphql\") {\n              products {\n                productId\n                productName\n                brand\n                link,\n                description\n                items {\n                  name\n                  images {\n                    imageUrl\n                    imageTag\n                    imageLabel\n                  }\n                  sellers {\n                    commertialOffer {\n                      Price\n                      ListPrice\n                    }\n                  }\n                }\n              }\n            }\n          }\n        "
                        }, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    res.json(data.data.productSearch);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    res.status(500).json(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports["default"] = handler;
