const router = require("express").Router();

const noteRoutes = require("./note");
const leadsRoutes = require("./leads");
// Post routes
router.use("/note", noteRoutes);
router.use("/leads", leadsRoutes);

module.exports = router;
