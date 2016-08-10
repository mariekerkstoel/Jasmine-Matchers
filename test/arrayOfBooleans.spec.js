'use strict';

var callSpy = require('./lib/callSpy');

describe('any.arrayOfBooleans', function() {
    var shared = {};
    beforeEach(function() {
        shared.spy = callSpy([true, false, new Boolean(true), new Boolean(false)]);
    });
    it('should confirm', function() {
        expect(shared.spy).toHaveBeenCalledWith(any.arrayOfBooleans());
    });
});
