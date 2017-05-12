import app from '../server';
const { db } = app;

let Item = db.Model.extend({
  tableName: 'items'
});

export default Item;