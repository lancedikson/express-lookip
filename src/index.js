import LookIP from 'lookip';

function init(config = {}) {
  const lookip = new LookIP(config);

  return function expressLookIP(req, res, next) {
    try {
      req.ipinfo = lookip.lookup(req.ip);
    } catch (e) {
      console.error("There is some problem with LookIP: ", { error: e, stack: e.stack });
    }
    next();
  }
}

export default init;
