import Item from '../models/Item';

class ItemController {
  all(req, res){
    Item.fetchAll().then((response)=> {
      res.send(response);
    });
  }
}

export default new ItemController();