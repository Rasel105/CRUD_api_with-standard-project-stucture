const express = require("express");
const toolsController = require("../../controllers/tools.controller");
const { limiter } = require("../../middleware/limiter");
const viewCount = require("../../middleware/viewCount");

const router = express.Router();


router
    .route('/')
    /** 
        * @api {get} /tools all tools
        * @apiDescription Get all the tools 
        * @apiPermistion admin
    */
    .get(toolsController.getAllTools)
    /** 
        * @api {get} /tools save a tools
        * @apiDescription Get all the tools 
        * @apiPermistion admin
    */
    .post(toolsController.saveAtool);


router.route("/test").post(toolsController.test).get(toolsController.testGet);

router
    .route("/:id")
    .get(viewCount, limiter, toolsController.getToolDetail)
    .patch(toolsController.updateTool)
    .delete(toolsController.deleteTool)

module.exports = router;