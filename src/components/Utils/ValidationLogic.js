const validateInput = (name, value, form) => {
    switch(name){
        case 'username': 
            return value ? '': "Please enter your name";

        case 'email':
            if (!value) return 'Please enter your email';
            if (!value.includes('@')) return 'Email is missing "@". Please input the correct email format'
            return '';
        
        case 'password':
            if (!value) return 'Please enter your password';
            if (value.length< 7) return 'Password is short! Must be more than 6 characters.'
            const pwRegEx = /(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
            if (!pwRegEx.test(value))return 'You are missing a special character, number and/or uppercase letter. Please include them all.'
            return '';
        
        case 'confirmPassword':
            if(!value) return "Please confirm your password";
            if (value !== form.password) return "Confirmed password and password don't match."
            return '';
        
            default:
            return '';
        }
        
}
export default validateInput;