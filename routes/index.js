import { Router } from "express";
import cardRoutes from "./Cards.js";
import customerRoutes from "./Customers.js";

const router = Router();

// Default page
router.get("/", (req, res) => res.send("API ROOT"))

// Get routes from other sections of the API
router.use("/", cardRoutes);
router.use("/", customerRoutes);

export default router;
