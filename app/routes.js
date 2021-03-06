import Router from './lib/Router';
import ItemController from './controllers/ItemController';

let router = new Router();

router.register('get', '/', ItemController, 'all');

export default router.getRoutes();