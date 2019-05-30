class AuthenticationService {

    registerSuccessfulLogin(username,password){
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if(user===null){
            console.log('UserLoggedIn==false(Au-SErvice');
            return false;
        } 
        
        console.log('UserLoggedIn==true+AU-Serivce');
        return true;
    };

}

export default new AuthenticationService()