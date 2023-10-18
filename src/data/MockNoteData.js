import uniqid from 'uniqid'

export const YipNotesData = [
    {
        kennel: 'JavaScript stuff I want to study',
        category: 'coding stuff',
        date: Date.now(),
        id: uniqid(),
        yips: [
            {
                yip: 'JavaScript call stack',
                id: uniqid(`JavaScript-call-stack`),
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                yip: 'Methods on methods?',
                id: uniqid('Methods-on-methods?'),
                text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    {
        kennel: 'Dog stuff ha-ha',
        category: 'canines and such ha-ha',
        date: Date.now(),
        id: uniqid(),
        yips: [
            {
                yip: 'What if dogs could talk?',
                id: uniqid(`talk`),
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                yip: 'They are pretty cute',
                id: uniqid('they'),
                text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                yip: 'THey eat a ton i dont know why ',
                id: uniqid('eat'),
                text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            }
        ]
    }
]