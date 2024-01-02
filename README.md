<h1>SIMPLE SPA WITH HISTORY API ROUTING</h1>


** Not using hash-based routing.
** Using History API instead
** Using ES6 modules instead of RequireJs
** Still using MVC but read something about Component paterns and investigating if it should be a thing.
** Some decisions had to change based on the way the History API works:
  *** For the refresh button to work, you have to change some server side configurations. You can read more about this here:
    Source: https://krasimirtsonev.com/blog/article/deep-dive-into-client-side-routing-navigo-pushstate-hash

  *** Since you need to always serve the same index.html file and so that you can directly navigate to any of the routes, the anchor tags had to be inserted directly into the index.html file instead of being created with DOM manipulation.

** Ready to consume an external movie API like imdb, decided not to do it so that the students can read about fetch and do it by themselves.
** Using dynamic imports.

  TODOS:
-> Investigate about Component Patterns and understand what it is.
-> Complete more controllers and views.
-> Add some better CSS.
-> Decide if jquery should be used.


