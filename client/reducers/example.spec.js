import example from './example'
import * as actions from '../actions/index'

describe('example reducer', () => {
    it('should handle initial state', () => {
        expect(
            example(undefined, {})
        ).toEqual({
            text: 'Example'
        })
    })

    it('should handle EXAMPLE', () => {
        expect(
            example({}, {
                type: actions.EXAMPLE,
                text: 'Example Test'
            })
        ).toEqual({
            text: 'Example Test'
        })

        expect(
            example({
                text: 'Test'
            }, {
                type: actions.EXAMPLE,
                text: 'Tested'
            })
        ).toEqual({
            text: 'Tested'
        })
    })
})
