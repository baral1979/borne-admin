'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './product.events';

var ProductSchema = new mongoose.Schema({
  name: String,
  active: Boolean,
  code: String,
  upc: String


});

registerEvents(ProductSchema);
export default mongoose.model('Product', ProductSchema);
