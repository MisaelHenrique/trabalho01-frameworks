const express = require ( 'express' );

const authRouter = express.Router();
const authController = require('../../backend/controller/authController');

authRouter.post('/cadastroUser', async (req, res) => {
    try {
        await authController.cadastroUser(req, res)
    } catch (error) {
        res.status(500).json({error})
        console.error(error)
    }
});

authRouter.post('/login', async (req, res) => {
    try {
        await authController.login(req, res)
    } catch (error) {
        res.status(500).json({error})
    }
});

authRouter.post('/logout', async (req, res) => {
    try {
        await authController.logout(req, res)
    } catch (error) {
        res.status(500).json({error})
    }
});

module.exports = authRouter;