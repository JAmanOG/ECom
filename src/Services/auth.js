import { Client ,Account} from 'appwrite';

export class AuthServices {
    constructor() {
        this.client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('66a38b39001378ca89df');
        this.account = new Account(this.client);
        
    }
}

export default new AuthServices();
