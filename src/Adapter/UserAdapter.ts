import { ITarget } from './ITraget';
import UserResource from './UserResource'; 
export class UserAdapter implements ITarget{
    name = '';
    resource: UserResource | null = null; 
    constructor(name: string) {
        this.name   = name;
        this.resource   = new UserResource();
    }
    
    isValidResource() {
        return (this.resource?.isNotEmpty(this.name) && this.resource?.isUnique(this.name) && this.resource?.isGreaterThen40Chars(this.name) && this.resource.isSpecialCharExists(this.name))  
    }

}