const getInfo = (req, res) => {
    const staticInfo = {
        name: "Express Backend",
        version: "1.0.0",
        description: "A simple Express backend project."
    };
    res.json(staticInfo);
};

module.exports = { getInfo };