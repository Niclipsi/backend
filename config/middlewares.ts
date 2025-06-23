
export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
   name:'strapi::cors',
   config: {
      origin: ['http://127.0.0.1:5501','http://localhost:3000','http://127.0.0.1:5500'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: '*',    
   },
  },  
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
