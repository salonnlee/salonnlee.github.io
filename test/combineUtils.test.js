import eq from './shared/eq';
import { consumeClassNames } from '../src/utils/combineUtils';

describe('combineUtils', () => {
    describe('consumeClassNames', () => {
        it('should transform classNames `array` to classNames `string`', () => {
            eq(
                consumeClassNames(['button', ['default', true]]),
                'button default'
            );
            eq(
                consumeClassNames(['button', ['primary', () => false]]),
                'button'
            );
        });
    });
});
