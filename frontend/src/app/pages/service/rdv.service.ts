import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root',
})

export class RdvService{
    private apiUrl = `http://localhost:5000/rdv`;

    constructor(private http: HttpClient) {}

    rdvClient(rdv: any): Observable<any>{
        return this.http.post(`${this.apiUrl}/rdvClient` , rdv);
    }

   

}