const browserslist = require('browserslist');
const config = require('../');

it('should export an array', () => {
    expect(Array.isArray(config)).toBe(true);
});

it('should not contain invalid queries', () => {
    const result = browserslist(config);
    expect(result).toBeTruthy();
});

it('should match the Q3 2026 browser support minimums', () => {
    expect(config).toEqual([
        'Chrome >= 109',
        'Firefox >= 115',
        'Safari >= 15.6',
        'Edge >= 149',
        'Opera >= 133',
        'ChromeAndroid >= 138',
        'ios_saf >= 15.6'
    ]);
});
