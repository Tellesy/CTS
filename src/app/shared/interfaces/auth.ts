
import  { ICustomer } from './customer';
//Object used to 


export interface IAuth {
    status: number ;
    body: {
        message: string,
        accessToken: string
        customer: ICustomer
    };
    
    }
    