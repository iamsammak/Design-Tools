Addressing the Sass webpack issue

    <%= stylesheet_link_tag    'application', media: 'all' %>
    Above is written in html.erb
     - http://stackoverflow.com/questions/15805810/stylesheet-link-tag-all-versus-media-all

     It means that rails will compile the css file with the right stylesheet engine and serve the application.css file


    Added to package.json
    npm install --save-dev sass-loader css-loader style-loader
    npm install --save node-sass

    https://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html

4/20 9:24am
  Have not solved the problem yet but maybe once I use rails, the above meta tag will solve my scss problems. For now I'll just include the css file in a link tag in the index.html


If I want to play around with localStorage and sessionStorage
  - http://stackoverflow.com/questions/2326943/when-do-items-in-html5-local-storage-expire
  - adding a timestamp to objects stored, and then create a remove function to clear localStorage after designated time

  - sessionStorage: data stored here gets cleared when the page session ends. A page session lasts for as long as the browser is open and survives over page reloads and restores
  - to be noted: Opening a page in a new tab or window will cause a new session to be initiated


Big Arrow Functions
  - https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/
