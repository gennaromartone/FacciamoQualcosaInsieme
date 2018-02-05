import User from './../config/user'

export default {
        user: {
            isLogginIng: false,
            isLoggedIn: false,
            user: User,
            receivedAt: ''
        },
        chat: {
            messages: [
                {
                    user: '',
                    message: 'Benvenuto nella Chat'
                }
            ]
        },
        dataFormSearch: {
            lookingFor: '',
            locationFor: 'latLng',
            categoriesById: [{
                id: 0,
                categoryName: 'All Categories'
            },
            {
                id: 1,
                categoryName: 'Gourmet'
            }
            ],

        },
        resultSetFormSearch: {
            resultObject: [{ id: '', name: '', description: '', location: '', category: '' }]
        }

}