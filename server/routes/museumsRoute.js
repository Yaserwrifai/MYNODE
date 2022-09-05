import express from "express";
import {
  getAllMuseums,
  uploadPicture,
  newMuseum,
  updateMuseum,
  addComment
} from "../controller/museumsController.js";
import { multerUploads } from "../middlewares/multer.js";
const router = express.Router();

router.post("/imageUploads", multerUploads.single("image"), uploadPicture);

// Create new signup route
router.post("/newMuseum", newMuseum);
router.get("/all", getAllMuseums);
router.put("/updateMuseum", updateMuseum);
router.put("/addComment", addComment)
export default router;
