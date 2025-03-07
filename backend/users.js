// ✅ Route pour rafraîchir le token
router.post('/refresh', async (req, res) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            return res.status(403).json({ error: '❌ Refresh token manquant' });
        }

        // Vérifie si le refresh token est valide
        const storedToken = await Token.findOne({ refreshToken });
        if (!storedToken) {
            return res.status(403).json({ error: '❌ Refresh token invalide' });
        }

        // Vérifie et génère un nouveau token
        jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ error: '❌ Token expiré ou invalide' });
            }

            const newAccessToken = jwt.sign(
                { userId: user.userId },
                process.env.JWT_SECRET,
                { expiresIn: '15m' }
            );

            res.json({ accessToken: newAccessToken });
        });
    } catch (error) {
        res.status(500).json({ error: '❌ Erreur lors du rafraîchissement du token' });
    }
});

