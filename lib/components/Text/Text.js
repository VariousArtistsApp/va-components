"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Placeholder = exports.Title = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Text_module_scss_1 = __importDefault(require("./Text.module.scss"));
exports.Title = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (react_1.default.createElement("div", __assign({ className: classnames_1.default(Text_module_scss_1.default.title, className) }, rest), children));
};
exports.Placeholder = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (react_1.default.createElement("div", __assign({ className: classnames_1.default(Text_module_scss_1.default.placeholder, className) }, rest), children));
};
//# sourceMappingURL=Text.js.map