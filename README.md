detect-adblocker
================

Small, simple and effective ad blocker detection. Absolutely no dependencies. Detect-adblocker features callbacks for case of adblocker detected, for the error case and even for the case of ads run fine (no ad blocker).

It works by checking the number of child nodes in the node (usually a DIV), which should contain one or more ads. Tested on desktop and notebook Windows PCs in IE 10, IE 11, Firefox 29, Chrome 34 and Opera 12,  with AdBlockPlus and Ghostery.
