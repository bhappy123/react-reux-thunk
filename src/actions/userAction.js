export const userAction = (user) => {
    if (user.email === 'a@gmail.com' && user.password === 'a') {
        return { type: 'LOGIN_SUCCESS' }
    } else {
        return {
            type: 'LOGIN_FAIL'
        }
    }
}

export const logout = () => {
    return {
        type: 'LOGIN_FAIL'
    }
}