import app from '../server';

export default class Controller {
  constructor(dependencies){
    this.app = app;
    this.dependencies = dependencies || [];

    this.dependencies.forEach((dependency)=> {
      try {
        this[dependency] = app.getInjection(dependency);
      } catch(error){
        console.error('Unable to fetch dependency ' + dependency);
      }
    });
  }
}