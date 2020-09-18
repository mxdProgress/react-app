//state
const config = {
    status: [
        { label: '禁用', value: false },
        { label: '启用', value: true }
    ],
    name: 'zhangsan',
    age: '23'
}

//reducer
const configReducer = (state = config, action) => {
    switch (action.type) {
        case 'ADD_STATUS':
            {
                return {
                    ...state,
                    status: [...state.status, action.payload]
                }
            }
        default:
            return state
    }

}

export default configReducer