"use strict";

window.onload = function() {
    document.forms[0].onsubmit = function() {
       if (this.checkValidity()) {
          alert("Survey 'Submitted'");
          return false;
       }
    };
 };