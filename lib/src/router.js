export default class Router {
  constructor(){
    this.routes = [];
  }

  register(method, route, controller, handler = null){
    this.routes.push({
      method: method,
      route: route,
      controller: controller,
      handler: handler
    });
  }

  getRoutes(){
    return this.routes;
  }
}