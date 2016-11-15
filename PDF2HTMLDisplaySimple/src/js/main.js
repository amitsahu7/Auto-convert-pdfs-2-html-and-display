$(document).ready(function() {
    console.log( "ready!" );
    // Start from scratch on page load
    if(window.location.hash) {
        window.location = "index.html";
    }

    // Feature tests and settings
    var hasLocalStorage = "localStorage" in window,
        maxHistory = 10;

    // List of elements we'll use
    var $locationForm = $("#PDFForm"),
        $locationInput = $("#PDFInput");

    // Hold last request jqXHR's so we can cancel to prevent multiple requests
    var lastRequest;

    app = {
        // App initialization
        init: function() {
            var self = this;

            // Focus on the search box
            focusOnLocationBox();

            // Add the form submission event
            $locationForm.on("submit", onFormSubmit);
        }
    };



    // Search submission
    function onFormSubmit(e) {
        if(e) e.preventDefault();
        // Trim the value
        var value = $.trim($locationInput.val());

        loadIframe("ifrm","../PDFs/convolution.html");

        //$("#HTMLcontent").load("../PDFs/convolution.html");
        //load_home();

        // Move to the tweets pane
        if(value) {

            console.log( value );
            // If there's another request at the moment, cancel it
            if(lastRequest && lastRequest.readyState != 4) {
                lastRequest.abort();
            }

            loadIframe("ifrm","../PDFs/" + value);

            // Use later to call web service
            /*lastRequest = $.ajax("http://search.twitter.com/search.json", {
                cache: false,
                crossDomain: true,
                data: {
                    q: value
                },
                dataType: "jsonp",
                jsonpCallback: "twitterCallback",
                timeout: 3000
            });*/
        }
        else {
            // Focus on the search box
            focusOnLocationBox();
        }

        return false;
    }

    // Focuses on the input box
    function focusOnLocationBox() {
        $locationInput[0].focus();
    }

    function loadIframe(iframeName, url) {
        var $iframe = $('#' + iframeName);
        if ( $iframe.length ) {
            $iframe.attr('src',url);
            return false;
        }
        return true;
    }

    // Initialize the app
    app.init();
});
