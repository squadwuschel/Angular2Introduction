//import {Injectable} from 'angular2/core';
"use strict";
//@Injectable()
var CourseService = (function () {
    function CourseService() {
    }
    CourseService.prototype.getCourses = function () {
        var courses = ["Course 1", "Course 2", "Course 3"];
        return courses;
    };
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map