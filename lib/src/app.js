export default class App {
  constructor(app, db, config){
    this.app = app;
    this.db = db;
    this.config = config;
    this.registry = {};
  }

  init(routes, middlewares){
    this.setupMiddleware(middlewares);
    this.setupRoutes(routes);
  }

  inject(key, value){
    this.registry[key] = value;
  }

  getInjection(key){
    return this.registry[key];
  }

  setupMiddleware(middlewares){
    middlewares.forEach((middleware)=> {
      this.app.use(middleware);
    });
  }

  setupRoutes(routes){
    routes.forEach((route)=> {
      let handler = route.controller;

      if(route.handler){
        handler = route.controller[route.handler];
      }

      this.app[route.method](route.route, handler);
    });
  }

  listen(callback, port = this.config.PORT){
    this.app.listen(port, callback);
  }
}