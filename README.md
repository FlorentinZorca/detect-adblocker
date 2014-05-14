detect-adblocker
================

Small, simple and effective ad blocker detection. Absolutely no dependencies. Detect-adblocker features callbacks for case of adblocker detected, for the error case and even for the case of ads run fine (no ad blocker).

It works by checking the number of child nodes in the node (usually a DIV), which should contain one or more ads. Tested on desktop and notebook Windows PCs in IE 10, IE 11, Firefox 29, Chrome 34 and Opera 12,  with AdBlockPlus and Ghostery.

# Usage

First, include detect-adblocker.js, preferably late and preferably minimized in your page:

    <script src="./detect-adblocker.js"></script>

Find your container for the ads, usually a DIV with the advertising JavaScript snippet. Something like this:

    <div id="myGoodAds">
        <script>
            /// HERE-IS-YOUR-ADVERTISING-CODE
        </script>
    </div>

Then call the global scope function detectAdBlocker, passing a container node (usually DIV) or just its ID, the number of child elements in that container, without the advertising injected code (usually 1 (one), because that is the one script triggering the advertising) and at least one callback function for the case of detected ad blocker.

    // ad blocker callback
    detectAdBlocker('myGoodAds', // this is the ID of the DIV which should contain the advertising
                    1, // initially this myGoodAds DIV contains a single script tag
                    function(){ // here you can do anything you need (track/warn user or even block access to content).
                        console.warn('Ad blocker detected'); // example just to see it working
                    });

See the demo.html for a working example with a real doubleclick tag. You should use your own tags on your site though :).
