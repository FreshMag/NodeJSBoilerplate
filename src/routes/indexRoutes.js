import express from 'express';
import * as indexController from "../controllers/indexController.js";
export const router = express.Router();


router.route('/')
    .get(indexController.showMainPage);

router.get('/data', indexController.showData);

