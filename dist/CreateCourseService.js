"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCourseService = /** @class */ (function () {
    function CreateCourseService() {
    }
    CreateCourseService.prototype.execute = function (_a) {
        var name = _a.name, educator = _a.educator, duration = _a.duration;
        console.log(name, educator, duration);
    };
    return CreateCourseService;
}());
exports.default = new CreateCourseService();
