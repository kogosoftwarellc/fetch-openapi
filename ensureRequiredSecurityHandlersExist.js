module.exports = (requiredSecurityHandlers) => {
  for (let i = 0, ilen = requiredSecurityHandlers.length; i < ilen; i++) {
    let requiredSecurityHandler = requiredSecurityHandlers[i];
    if (typeof securityHandlers[requiredSecurityHandler] !== 'function') {
      throw new Error('Expected to see a security handler for scheme "' +
          requiredSecurityHandler + '" in options.securityHandlers');
    }
  }
};
