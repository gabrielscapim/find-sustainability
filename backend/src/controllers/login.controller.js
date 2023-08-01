const { createToken } = require('../security/authFunctions');
const { startupService } = require('../services');

const loginAuthentication = async (req, res) => {
  try {
    const { email, password } = req.body;
    const startup = await startupService.getStartupByEmail(email);

    if (!startup || startup.data.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
  
    const { password: _password, ...userWithoutPassword } = startup.data;
  
    const payload = { data: userWithoutPassword };
    const token = createToken(payload);
  
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno' });
  }
};

module.exports = {
  loginAuthentication,
};