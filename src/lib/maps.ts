export function getMapsUrl(address: string) {
  const query = encodeURIComponent(address);
  const userAgent = typeof navigator === "undefined" ? "" : navigator.userAgent;
  const isAppleDevice = /Macintosh|iPhone|iPad|iPod/.test(userAgent);

  return isAppleDevice
    ? `https://maps.apple.com/?q=${query}`
    : `https://www.google.com/maps/search/?api=1&query=${query}`;
}
