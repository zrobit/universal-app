var config = {
  dir: './models',

  adapters: {
    'memory': require('sails-memory')
  },

  connections: {
    default: {
      adapter: 'memory'
    }
  }
};

var WaterlineLighter = require('waterline-lighter')

WaterlineLighter(config)
.then(function(waterline) {
  /*
    waterline.orm           // waterline instance created by `new Waterline()`
    waterline.config        // config passed to orm.initialize (with some extra opts)
    waterline.collections   // collections loaded on the orm after inited
    waterline.connections   // connections used by the orm after inited
    // The module also loads the connections and collections into the global object
    global.collections      // same as waterline.collections
    global.connections      // same as waterline.connections
*/
})
.then(function() {
    require('./app.js')
})

