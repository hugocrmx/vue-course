const initUsers = () => {
    let users = []
    return users
}

export default {
    state:{
        users: initUsers()
    },
    actions: {
        register({commit}, userObj){
            console.log("username:" + userObj.name)
            commit('addUser', userObj)
        }
    },
    mutations:{
        addUser(state, userObj) {
            state.users.push(userObj)
            console.log("users array:" + state.users)
        }
    },
    getters: {
        countUsers(state) {
            return state.users.length
        },
        usersRegistered(state) {
            return state.users
        }
    }
} 