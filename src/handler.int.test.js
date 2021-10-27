const handlertest = require ('./handler')
const eventGenerator = require ('./util_test/EventGenerator')

describe('Handling response integration test',()=> {
    test('HTTPS status testing for a valid input', async () => {
        const event = eventGenerator({
            pathParametersObject: {
                str1: 'ix',
                str2: 'x',
            }

        });
        const res = await handlertest.addition(event);
        expect(res.statusCode).toBe(200);
    })
    test('Https status testing for an invalid input', async () => {
        const event = eventGenerator({
            pathParametersObject: {
                str1: '12',
                str2: 'PO',
            }

        });
        const res = await handlertest.addition(event);
        expect(res.statusCode).toBe(400);
    })
});




