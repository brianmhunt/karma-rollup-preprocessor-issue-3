
import {
    dep_var, main_var
} from '../src/entry.js';


describe("The test", function () {
    it("should recompile when changes happen", function () {
        // This is really a meta- test. It will never actually fail.

        // When you change the dep_var and main_var in src/entry.js and 
        // src/dependency.js the tests should re-run with the new values.
        console.log("DV:", dep_var, "MV:", main_var)
    })
})
