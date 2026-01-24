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
        const formData = new FormData();
        formData.append('nom_client', rdv.nom_client);
        formData.append('email_client', rdv.email_client);
        formData.append('model_voiture', rdv.model_voiture);
        formData.append('probleme_voiture', rdv.probleme_voiture);
        formData.append('date_rendez_vous',rdv.date_rendez_vous);

        rdv.photo_voiture.forEach((file:File) => {
            formData.append('photo_voiture',rdv.photo_voiture)
        });

        return this.http.post(`${this.apiUrl}/rdvClient` , rdv);
    }

   

}