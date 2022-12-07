const app = require("../app")
const request = require("supertest")
const model = require("../models/UsfModel")
//const jwt = require('jsonwebtoken');
//const SECRET= process.env.SECRET
 
describe("Usf Controllers", () => {
  test('Deve retornar todos os postos, status(200)', (done) => {
    req(app)
      .get("/postos/buscar")
      //.set("authorization", token)
      .expect(200)
      .expect(res => {
         expect(res.body.menssage).toBe("Postos encontrados")
        
      })
      .end(err => {
         if (err) return done(err)
         return done()
      })
   })
})