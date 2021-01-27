const router = require("express").Router();

const noteRoutes = require("./note");
const leadsRoutes = require("./leads");
const datesRoutes = require("./dates");
// Post routes
router.use("/note", noteRoutes);
router.use("/leads", leadsRoutes);
router.use("/dates", datesRoutes);

module.exports = router;
