const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [authenticate('jwt'),
      async context => {
        context.params.query = {userID:context.params.user._id}; // load owend userID
      },
      // context => console.log(context.params), 
    ],
    get: [],
    create: [
      async context => {
        context.data.userID = context.params.user._id; // replace OwnerID in recipe-type => user._id
        return context;
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
