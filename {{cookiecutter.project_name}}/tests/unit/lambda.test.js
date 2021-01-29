// Import all functions from hello-from-lambda.js
const lambda = require('../../src/lambda.js');

// This includes all tests for helloFromLambdaHandler()
describe('sampleFunctionTest', function () {
    // This test invokes lambda.handler() and compares the result 
    it('Verifies successful response', async () => {
        // Invoke helloFromLambdaHandler()
        const result = await lambda.handler();

        //  Assemble expected result
        const expectedResult = 'Hello from Lambda!';

        // Compare the result with the expected result
        expect(result).toEqual(expectedResult);
    });
});
