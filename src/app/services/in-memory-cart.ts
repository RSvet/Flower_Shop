import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { Cart } from "../components/models/Cart";

export class InMemoryCart implements InMemoryDbService {
    createDb() {
        const cart : Cart [] = [

        ];
        return {cart}
        
    } 
}