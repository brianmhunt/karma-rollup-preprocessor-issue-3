
import {
    dep_var, main_var
} from '../src/entry.js';


describe("The test", function () {
    it("should recompile when changes happen", function () {
        // This is really a meta- test.
        console.log("DV:", dep_var, "MV:", main_var)
    })
})
