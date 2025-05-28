const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8125170055:AAEaMUqlK66D9_kmLO-Rge052oYjxPCowrQ',
  id: isNaN(parsedId) ? 1251238638 : parsedId // replace 12345.. with your telegram chat id
};
