import Admin from '../models/adminModel.mjs';

export const getUsers = async (req, res) => {
  try {
    const users = await Admin.find().select('_id email role');
    res.status(200).json(users);
  } catch (err) {
    console.error('❌ Erreur récupération users :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Admin.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Utilisateur introuvable' });
    res.status(200).json({ message: 'Utilisateur supprimé' });
  } catch (err) {
    console.error('❌ Erreur suppression user :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
