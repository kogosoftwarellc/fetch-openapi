module.exports = (security, headers, params, operationId) => {
  for (let i = 0, ilen = security.length; i < ilen; i++) {
    let scheme = security[i];
    let schemeParts = Object.keys(scheme);
    for (let j = 0, jlen = schemeParts.length; j < jlen; j++) {
      let schemePart = schemeParts[j];
      let fulfilsSecurityRequirements = securityHandlers[schemePart](
          headers, params, schemePart);
      if (fulfilsSecurityRequirements) {
        return;
      }

    }
  }
  throw new Error('No security scheme was fulfilled by the provided securityHandlers for operation ' + operationId);
};
