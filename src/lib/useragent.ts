const UA_PATTERN = /^(\w+\s?)+\/(\d+\.)*\d+$/;

export function parseUserAgent(ua: string) {
  return UA_PATTERN.exec(ua);
}
