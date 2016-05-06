"use strict";
var Post = (function () {
    function Post() {
    }
    return Post;
}());
exports.Post = Post;
var Geo = (function () {
    function Geo() {
    }
    return Geo;
}());
exports.Geo = Geo;
var Address = (function () {
    function Address() {
    }
    return Address;
}());
exports.Address = Address;
var Company = (function () {
    function Company() {
    }
    return Company;
}());
exports.Company = Company;
var User = (function () {
    function User() {
        this.address = new Address();
        this.company = new Company();
        this.name = "";
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=JsonPlaceHolderClasses.js.map