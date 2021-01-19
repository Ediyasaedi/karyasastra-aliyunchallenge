const route = require("express").Router();
const KaryaController = require("../controllers/KaryaController");

route.get("/category/:id", KaryaController.readAllKaryaByCategory);
route.get("/user/:id", KaryaController.readAllKaryaByUser);
route.get("/:id", KaryaController.readOneKarya);
route.post("/", KaryaController.createKarya);
route.post("/:id", KaryaController.reportedKarya);
route.put("/:id", KaryaController.updateKarya);
route.delete("/:id", KaryaController.deleteKarya);

module.exports = route;
