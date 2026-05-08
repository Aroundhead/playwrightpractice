function parsePrice(priceText) {
  return Number(priceText.replace('$', '').trim());
}

module.exports = { parsePrice };