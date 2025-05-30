const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7864580478:AAEX0oRO_DCisG9sGCmH-yPAa--czD9aozw',
  id: isNaN(parsedId) ? 1603022382 : parsedId // replace 12345.. with your telegram chat id
};
