(function() {
  var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;

  _generate_text = function() {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 3; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text + ' search';
  };

  function setTextById(id, value) {
    var elem = document.getElementById(id);
    if (elem) {
      nativeInputValueSetter.call(elem, value);
      elem.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

    function setTextByClassName(className, value) {
      var elem = document.getElementById(id);
      if (elem) {
        nativeInputValueSetter.call(elem, value);
        elem.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }

    function clickElementById(id) {
        var elem = document.getElementById(id);
        if (elem) {
          elem.click();
        }
    }

    function clickElementByClassName(className) {
      var elem = document.getElementsByClassName(className);
      if (elem) {
        elem.click();
      }
    }

  if (location.host.indexOf("google.com") > -1) {
// Fill google search field and click button
    clickElsetTextByClassNameement('gLFyf gsfi', _generate_text());
    clickElementByClassName('gNO89b');
  } else {
// Not a google search page
    alert("Not a google.com page");
  }
})();