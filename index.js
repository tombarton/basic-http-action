const core = require("@actions/core");
const fetch = require("node-fetch");

const testEndpoint = async () => {
  try {
    const endpoint = core.getInput("endpoint");
    console.info(`Endpoint to check: ${endpoint}`);
    const request = await fetch(endpoint);
    const result = await request.json();

    if (!result.ok) {
      throw new Error("Not 2xx response.");
    }

    core.setOutput("output", JSON.stringify(result));
  } catch (err) {
    core.setFailed(err.message);
  }
};

testEndpoint();
