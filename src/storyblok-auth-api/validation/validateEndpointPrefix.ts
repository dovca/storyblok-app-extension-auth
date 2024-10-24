export const validateEndpointPrefix = (endpointPrefix?: string): boolean =>
  endpointPrefix ? /^[a-z0-9-_/]+$/i.test(endpointPrefix) : true
