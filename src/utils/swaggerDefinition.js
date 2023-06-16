import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Library API",
        version: "3.0.0",
        desctiption: "Set your description here"
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          }
        }
      },
      security: [{
        bearerAuth: []
      }]
    },
    apis: ["./src/docs/*.js"]
  }

const specs = swaggerJSDoc(options)

export {options,  specs}