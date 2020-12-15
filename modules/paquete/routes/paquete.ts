import * as express from "express";
import { paqueteSchema } from "../schemas/paquete";

const router = express.Router();
router.get("/paquete", async (req, res) => {
    try {
      let paquetes = await paqueteSchema.find();
      res.send(paquetes);
    } catch (err) {
      throw err;
    }
  });
  
  router.get("/paqueteId/:id", async (req, res) => {
    let idPaquete = req.params.id;
    try {
      let paquetes = await paqueteSchema.findById(idPaquete);
      res.send(paquetes);
    } catch (err) {
      throw err;
    }
  });
  
  router.post("/paquete", async (req, res) => {
    try {
      const paquete = new paqueteSchema(req.body);
      let pedidoNuevo = await paquete.save();
  
      res.send(pedidoNuevo);
    } catch (err) {
      throw err;
    }
  });
  
  router.put("/paquete/:id", async (req, res, next) => {
    try {
      let paquete = await paqueteSchema.findByIdAndUpdate(req.params.id, req.body);
      res.send(paquete);
    } catch (err) {
      throw err;
    }
  });
  
  router.delete("/paquete/:id", async (req, res, next) => {
    try {
      let paquete = await paqueteSchema.findByIdAndRemove(req.params.id);
      console.log("Pedido Borrado: ", paquete);
    } catch (err) {
      throw err;
    }
  });
  export= router;