"use strict";
exports.__esModule = true;
exports.StudentClass = void 0;
var printTeacher = function (firstName, lastName) {
    return firstName[0] + ". " + lastName;
};
exports.StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return "" + this.firstName;
    };
    return StudentClass;
}());
