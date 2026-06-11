const aiService = require('../services/ai.service');

module.exports.getReview = async (req, res) => {
    try {
        const code = req.body.code;

        if (!code) {
            return res.status(400).json({
                success: false,
                message: "Code is required"
            });
        }

        const response = await aiService(code);

        res.status(200).send(response);

    } catch (error) {
        console.error("AI Review Error:", error);

        res.status(error.status || 500).json({
            success: false,
            message: error.message || "Failed to generate review"
        });
    }
};