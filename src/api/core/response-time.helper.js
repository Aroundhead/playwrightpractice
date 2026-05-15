async function measureResponseTime(requestAction) {
  const startTime = Date.now();
  const response = await requestAction();
  const responseTime = Date.now() - startTime;

  return {
    response,
    responseTime,
  };
}

module.exports = {
  measureResponseTime,
};