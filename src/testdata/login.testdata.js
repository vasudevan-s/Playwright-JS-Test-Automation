/*
    Created by Vasudevan Sampath
    This is a test Data class for Login functionality
 */
export class LoginTestData {

    static validLoginCred = {
        username: 'playwright@playwright.com',
        password: 'password1'
    }

    static invalidLoginCred = {
        username: 'playwright@playwright123.com',
        password: 'password123'
    }

}