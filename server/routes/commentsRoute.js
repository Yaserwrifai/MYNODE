import {
    getSpecificComments,
    postComments,
  } from "../controller/commentsController.js";
  
  import express from "express";
  import jwtAuth from "../utils/jwtAuth.js";
  
  const router = express.Router();
  
  router.post("/jwtAuth", postComments);
  router.get("/getSpecificComments/:userId", jwtAuth, getSpecificComments);
  router.post("/", postComments);
  
  export default router;