const Helper = require('../utils/helper_functions')

describe('Basic test!', () => {
    test('Sanity check', () => {
        expect(5).not.toBe(6)
    })
})

describe('Helper functions work as intended', () => {
    test('Dummy test works to add two parameters and return their value', () => {
        const expected_output = 10
        const actual_output = Helper.dummy_function_to_test(5, 5)
        expect(actual_output).toEqual(expected_output)
    })
    test('Dummy function returns 3 arguements added together', () => {
        const expected_output = 10
        const actual_output = Helper.dummy_function_to_test(1, 4, 5)
        expect(actual_output).toBe(expected_output)
    })
    test('format_to_url returns properly formatted url', () => {
        let url_format = Helper.format_to_url('I love hotdogs and they love me :)')
        let url_proper = 'I-love-hotdogs-and-they-love-me-:)'

        expect(url_format).toEqual(url_proper)

        url_format = Helper.format_to_url('The ashes that bind us')
        url_proper = 'The-ashes-that-bind-us'

        expect(url_format).toEqual(url_proper)
    })
})