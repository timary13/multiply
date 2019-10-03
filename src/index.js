module.exports = function multiply(first, second) {
  return (BigInt(BigInt(first)) * BigInt(second)).toString();
}
