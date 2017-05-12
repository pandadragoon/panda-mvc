import Controller from '../lib/controller';
import Item from '../models/Item';

class ItemController extends Controller{
  constructor(dependencies){
    super(dependencies);
  }

  all(req, res){
    Item.fetchAll().then((response)=> {
      res.send(response);
    });
  }
}

export default new ItemController([]);