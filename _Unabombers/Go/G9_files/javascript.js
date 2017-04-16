function popup(url) {
  var h=Math.min(600,screen.height-50);
  window.open(url,'popup','width=500,height='+h+',toolbar=0,scrollbars=1,location=0,statusbar=1,menubar=0,resizable=1');
  return false;
}

function focusField(name) {
  for(i=0; i < document.forms.length; ++i) {
    var obj = document.forms[i].elements[name];
    if (obj && obj.focus) {obj.focus();}
  }
}

function selectField(name) {
  for(i=0; i < document.forms.length; ++i) {
    var obj = document.forms[i].elements[name];
    if (obj && obj.focus){obj.focus();} 
    if (obj && obj.select){obj.select();}
  }
}
