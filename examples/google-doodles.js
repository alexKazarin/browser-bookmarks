(function() {
  var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;

  _generate_text = function() {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 3; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text + ' cat';
  };

  function setTextById(id, value) {
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

    if (location.host.indexOf("www.google.com/doodles") > -1) {
        setTextById('searchinput', _generate_text());
        clickElementById('searchbtn');
    } else {
        alert("Not a www.google.com/doodles page");
    }
})();