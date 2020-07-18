export function login_success ( token ) { 
    return { 
        type: '@auth/LOGIN_SUCCESS', 
        payload : { token }
    };
}; 