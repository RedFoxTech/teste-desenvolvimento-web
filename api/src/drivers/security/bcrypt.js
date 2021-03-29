const bcrypt = require('bcryptjs');

async function encrypt(password, salt) {  
  const userSalt = salt > 10 ? 10 : salt;
  const saltResult = await bcrypt.genSalt(userSalt);
  const result = await bcrypt.hash(password, saltResult);

  return result;
}

async function isValidHash(currentHash, originalHash) {
  const isValid = await bcrypt.compare(currentHash, originalHash);
  return isValid;
}

module.exports = {
  encrypt,
  isValidHash,
}