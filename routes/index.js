import { Router } from "express";
import cardRoutes from "./cards.js";
import customerRoutes from "./customers.js";

const router = Router();

router.get("/", (req, res) => res.send("Root!"))
// Default page
router.get("/api", (req, res) => res.send("API ROOT"))

// Get routes from other sections of the API
router.use("/api/", cardRoutes);
router.use("/api/", customerRoutes);

export default router;
