import conf from './conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client;
    account;

    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            }
        } catch (error) {
            console.error("Error creating account:", error);
            throw new Error('Unable to create account. Please try again.');
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.error("Error logging in:", error);
            throw new Error('Invalid email or password. Please try again.');
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Error fetching current user:", error);
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("Error logging out:", error);
        }
    }

    async getCurrentSession() {
        try {
            const session = await this.account.getSession('current');
            return session;
        } catch (error) {
            console.error("Error fetching current session:", error);
            return null;
        }
    }
}

const AuthServices = new AuthService();

export default AuthServices;
