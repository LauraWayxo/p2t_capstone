import express from "express"; 
import { param } from "express-validation"; 
import RestaurantController from "../controllers/RestaurantController"

const router = express.Router(); 

router.get("/:restaurantId", param("restaurantId").isString().trim().notEmpty().withMessage("RestaurantId parameter must be valid string"))

router.get("/search/:city", param("city").isString().trim().notEmpty().withMessage("City parameter must be valid string"), RestaurantController.searchRestaurant);

export default router; 