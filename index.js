const core = require("@actions/core");
const fetch = require("node-fetch");

const testEndpoint = async () => {
  try {
    const endpoint = core.getInput("endpoint");
    console.info(`Endpoint to check: ${endpoint}`);

    const request = await fetch(endpoint);

    // Throw an error if the request is anything other than 2xx.
    if (!request.ok) {
      throw new Error("Not 2xx response.");
    }

    const result = await request.json();
    core.setOutput("output", JSON.stringify(result));
  } catch (err) {
    core.setFailed(err.message);
  }
};

testEndpoint();
