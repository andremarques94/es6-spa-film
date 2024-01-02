<h1>SIMPLE SPA WITH HISTORY API ROUTING</h1>

Source: https://krasimirtsonev.com/blog/article/deep-dive-into-client-side-routing-navigo-pushstate-hash

Client-side routing is not exactly only client-side

Client-side routing means using JavaScript to switch the pages in our application. It’s tempting because we don’t have to send a request to the server. The whole process happen in the same session. However, this is kind of problematic if we don’t have an access to the server and its configuration. Or at least some option to forward requests.

If we shift the routing to the front-end then we should have all the request landing in one place. Otherwise we have to create a HTML file for every single route.

                                  ----- server ------
              http://site.com --> |                 |
                                  |   /index.html   |
                   index.html <-- |                 |
                                  -------------------

                                  ----- server ------

http://site.com/products/list --> | |
| /index.html |
404 page not found <-- | |

---

We know that most servers open index.html file if physically exists at the requested path. In the image above we requested http://site.com and we receive /index.html. Let’s say that at some point we click on a link and we use the History API to change the URL with http://site.com/products/list. We update the content of the page and everything seems ok. The problem is that if we refresh the browser or copy and paste the new URL we’ll get nothing (probably 404 page not found error). It’s like that because there is no (physically) /products/list/index.html file on the server.

<strong>The problem could be solved if we amend the configuration of the server and forward all the requests to the same index.html file. JavaScript has an access to the current page’s URL so we may resolve the path and map it to some logic in our app.</strong>

TLDR; you can emulate this behavior with your liveserver extension:
Live-server settings > File > index.html

!!! it even says : When set, serve this file (server root relative) for every 404 <strong>(useful for single-page applications) </strong>
