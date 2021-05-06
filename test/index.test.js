const browserslist = require('browserslist');
const config = require('../');

it('should export an array', () => {
    expect(Array.isArray(config)).toBe(true);
});

it('should not contain invalid queries', () => {
    const result = browserslist(config);
    expect(result).toBeTruthy();
});

it('should not support any IE', () => {
    const result = browserslist(config);
    expect(result).not.toContain('ie 11');
});
