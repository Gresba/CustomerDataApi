import { Router } from "express";

import * as controller from "../controllers/customers.js";

const routes = Router();

routes.get("/customers", controller.getCustomers)
routes.get("/customers/:id", controller.getCustomer)
routes.post("/customers", controller.createCustomer)
routes.put("/customers/:id", controller.updateCustomer)
routes.delete("/customers/:id", controller.deleteCustomer)

export default routes;
