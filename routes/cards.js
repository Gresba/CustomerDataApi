import { Router } from "express";
import * as controllers from "../controllers/cards.js";

const router = Router();

router.get("/cards", controller.getCards);
router.get("/cards/:id", controller.getCard);
router.post("/cards", controller.createCard);
router.put("/cards/:id", controller.updateCard);
router.delete("/cards/:id", controller.deleteCard);

export default router;
