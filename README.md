<h1>SIMPLE SPA WITH HISTORY API ROUTING</h1>


## Changes
**Not using hash-based routing.** 
**Using the History API instead.**
**Using ES6 modules instead of RequireJS.**
**Still using MVC, but I read about Component patterns and am investigating if it should be a thing.**
**Ready to consume an external movie API like IMDb** , but decided not to do it so that students can read about fetch and do it themselves. 
**Using dynamic imports.**

Some decisions had to change based on the way the History API works:

-   For the refresh button to work, you need to change some server-side configurations. You can read more about this [here](https://krasimirtsonev.com/blog/article/deep-dive-into-client-side-routing-navigo-pushstate-hash)
    
-   Since the server always serves the same index.html file and to be able to directly navigate to any of the routes, the anchor tags had to be inserted directly into the index.html file instead of being created with DOM manipulation.
    

## TODOS
**Investigate about Component Patterns and understand if it should be implemented**
**Complete more controllers and views.** 
**Add some better CSS**
**Decide if jQuery should be used.**


