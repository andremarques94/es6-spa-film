const routes = {
  home: { 
    path: "/", 
    controller: "homeController" 
  },
  authors: { 
    path: "/authors", 
    controller: "authorController" 
  },
  films: { 
    path: "/films", 
    controller: "filmController"
  },
  map: { 
    path: "/map", 
    controller: "mapController" 
  },
  about: { 
    path: "/about", 
    controller: "aboutController" 
  },
  currentPath: {
    path: "",
    controller: ""
  }
};


const launchController = (controllerName) => {

  import(`./controler/${controllerName}.js`)
    .then(module => module.default.init())
      .catch(e => console.log(e));
}

const setCurrentRoute = ({path, controller}) => {
  
  routes.currentPath.path = path;
  routes.currentPath.controller = controller;
}


const handlePopState = ({state}) => {

  const route = state || routes.home;

  //Setting the current route
  setCurrentRoute(route)
  launchController(route.controller);
}

const navigate = (path) => {

  if(path === routes.currentPath.path) {
    return;
  }

  const routeKey = Object.keys(routes).find((key) => routes[key].path === path);
  const route = (routes[routeKey] || routes.home);
  
  //Setting the current route
  setCurrentRoute(route); 
  
  history.pushState(route, '', route.path);
  launchController(route.controller);
}


const setAnchorEventListener = () => {

  const anchors = document.querySelectorAll('a');

  anchors.forEach(elem => {
    elem.addEventListener('click', (e) => {

      e.preventDefault();
      navigate(elem.pathname);
    })
  }) 
}


const init = () => {

  const path = window.location.pathname;

  navigate(path);
  addEventListener('popstate', handlePopState);
  setAnchorEventListener();
};

export default { init };
