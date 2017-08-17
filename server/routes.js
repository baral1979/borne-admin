/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';
import multipart from 'connect-multiparty';
import fs from 'fs';
import jsonfile from 'jsonfile';
import Product from './api/product/product.model';


export default function(app) {


  var multipartMiddleware = multipart();

  // Insert routes below
  app.use('/api/products', require('./api/product'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth').default);

  app.route('/uploads/product')
    .all(multipartMiddleware)
    .post((req, res) => {
      console.log('uploading', req.files);

      if (req.files && req.files.file && req.files.file.path) {
        var filename = req.files && req.files.file && req.files.file.path;

        // read file
        jsonfile.readFile(filename, function(err, obj) {
          if (err) throw console.error(err);

          if (obj && obj.data && obj.data.length > 0) {

            var products = obj.data.map(function(rec) {
              return {
                code: rec[0],
                upc: rec[8],
                active: true,
                name: rec[3]
              }
            });


            Product.find({}).remove()
              .then(() => {
                let product = Product.create(products);
                return product;
              })
              .then(() => console.log('finished populating products'))
              .catch(err => console.log('error populating products', err));
          }

          fs.unlink(filename, function() {});
        });
      }


      res.end(200);
    });

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
    });
}
