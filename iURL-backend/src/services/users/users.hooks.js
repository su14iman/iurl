const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

module.exports = {
  before: {
    all: [],
    find: [ 
      authenticate('jwt'),
      async context => {
        await (context.params.query.email ? 
          context.params.query = {email:context.params.query.email} :
          context.params.query = {_id:context.params.user._id} );
        //  check user if he have accessToken or he want new authentication
        
      },
    ],
    get: [ authenticate('jwt'),],
    create: [ hashPassword('password')],
    update: [ hashPassword('password'),  authenticate('jwt') ],
    patch: [ hashPassword('password'),  authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
