module.exports = {
    methods: {

        /**
         * Every extended promises must be in one of these 3 states
         *
         * Fulfilled : State of a promise that has been resolved and now has it's resolved value.
         * Rejected : State of the promise that has been rejected and now has it's rejected reason.
         * Pending : Pending is the initial promise state. The operation represented by the promise has not yet been fulfilled or rejected.
         *
         * @param promise
         * @returns {*}
         */
        response(promise) {
            if (promise.isResolved) return promise; // If promise is already modified

            // Set initial state
            let isPending = true;
            let isRejected = false;
            let isFulfilled = false;

            // Observe the promise, saving the fulfillment in a closure scope.
            let result = promise.then(
                function(v) {
                    isFulfilled = true;
                    isPending = false;
                    return v;
                },
                function(err) {
                    isRejected = true;
                    isPending = false;
                    throw err;
                }
            );

            result.isFulfilled = function() { return isFulfilled; };
            result.isPending = function() { return isPending; };
            result.isRejected = function() { return isRejected; };
            return result;
        }
    }
};