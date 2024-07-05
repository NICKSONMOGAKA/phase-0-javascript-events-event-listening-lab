const { addingEventListener } = require('../index');
const assert = require('assert');

describe('addingEventListener', function() {
    it('should add an event listener without errors', function() {
        assert.doesNotThrow(() => addingEventListener(), ReferenceError);
    });
});
