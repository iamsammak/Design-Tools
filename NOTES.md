npm install
webpack --watch
rails s


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


rake tasks
  db:create creates the database for the current env
  db:create:all creates the databases for all envs
  db:drop drops the database for the current env
  db:drop:all drops the databases for all envs
  db:migrate runs migrations for the current env that have not run yet
  db:migrate:up runs one specific migration
  db:migrate:down rolls back one specific migration
  db:migrate:status shows current migration status
  db:rollback rolls back the last migration
  db:forward advances the current schema version to the next one
  db:seed (only) runs the db/seed.rb file
  db:schema:load loads the schema into the current env's database
  db:schema:dump dumps the current env's schema (and seems to create the db as well)
  db:setup runs db:schema:load, db:seed
  db:reset runs db:drop db:setup
  db:migrate:redo runs (db:migrate:down db:migrate:up) or (db:rollback db:migrate) depending on the specified migration
  db:migrate:reset runs db:drop db:create db:migrate


The controller files is where the http request are being routed to. Then the controller functions point the request to the correct view or you can just render json within that function.
The latter is what Todo_2 solution was doing, which is why that app didn't have any view files
