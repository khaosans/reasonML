'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function Form(Props) {
  var userName = Props.userName;
  var password = Props.password;
  var match = React.useState((function () {
          return password;
        }));
  var setPassword = match[1];
  var password$1 = match[0];
  var match$1 = React.useState((function () {
          return userName;
        }));
  var setUserName = match$1[1];
  var userName$1 = match$1[0];
  var focus = function ($$event) {
    return $$event.target.select();
  };
  React.useEffect((function () {
          Curry._1(setUserName, (function (param) {
                  return userName$1;
                }));
          Curry._1(setPassword, (function (param) {
                  return password$1;
                }));
          return ;
        }), /* array */[
        userName$1,
        password$1
      ]);
  return React.createElement("form", undefined, React.createElement("input", {
                  id: "userName",
                  value: userName$1,
                  onFocus: focus,
                  onChange: (function ($$event) {
                      return Curry._1(setUserName, (function (param) {
                                    return $$event.target.userName;
                                  }));
                    })
                }), React.createElement("input", {
                  id: "password",
                  value: password$1,
                  onFocus: focus,
                  onChange: (function ($$event) {
                      return Curry._1(setPassword, (function (param) {
                                    return $$event.target.password;
                                  }));
                    })
                }));
}

var make = Form;

exports.make = make;
/* react Not a pure module */
