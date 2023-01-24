const bcrypt = require('bcrypt')

class UserRepository {
    constructor () {}
    saveToDatabase  (newUser)  {
        console.log(newUser)
    }
}

// Bad solution
class UserRegistry {
    constructor(email, password) {
        let salt = bcrypt.genSaltSync(10);
        let encriptedPassword = bcrypt.hashSync(password, salt)
        const newUser = new User(email, encriptedPassword)
        UserRepository.saveToDatabase(newUser)
    }
}

// With Single responsability principle
class UserRegistry2 {
    constructor(email, password) {
        let encriptedPassword = PasswordEncrypter.encrypt(password)
        const newUser = new User(email, encriptedPassword)
        UserRepository.saveToDatabase(newUser)
    }
}

class PasswordEncrypter {
    static  encrypt(password) {
        let salt = bcrypt.genSaltSync(10);
        let encriptedPassword = bcrypt.hashSync(password, salt)
        return encriptedPassword
    }
}