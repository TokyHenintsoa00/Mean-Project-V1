import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ButtonModule } from "primeng/button";
import { SelectModule  } from "primeng/select";
import { FluidModule } from "primeng/fluid";
import { InputTextModule } from "primeng/inputtext";
import { TextareaModule } from "primeng/textarea";
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from "primeng/api";
import { RdvService } from "../service/rdv.service";
import { UserService } from "../service/user.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-rdv-demo',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        SelectModule,
        FluidModule,
        TextareaModule,
        FileUploadModule
    ],
    
    template: `
<p-fluid>
    <div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-1/1 ">
            <div class="card flex flex-col gap-6 shadow-2 border-round-xl">
                <div class="font-semibold text-xl text-primary">
                    Demande de rendez-vous
                </div>
                
                <form (ngSubmit) = "addRdv()">
                    <div class="flex flex-wrap gap-6">
                        <div class="flex flex-col grow basis-0 gap-2">
                            <label for="name" class="font-medium">Name</label>
                            <input pInputText id="name" type="text" [(ngModel)] = "newRdv.nomClient" [ngModelOptions]="{standalone: true}" placeholder="Enter your name" />
                        </div>

                        <div class="flex flex-col grow basis-0 gap-2">
                            <label for="email" class="font-medium">Email</label>
                            <input pInputText id="email" type="email" [(ngModel)] = "newRdv.emailClient" [ngModelOptions]="{standalone: true}" placeholder="Enter your email" />
                        </div>
                    </div>

                    <div>
                    <br>
                        <label for="name" class="font-medium">Model de voiture</label>
                        <input pInputText id="nom" type="text" [(ngModel)] = "newRdv.modelVoiture" [ngModelOptions]="{standalone: true}" placeholder="Constructeur-XXX-XXX" class="w-full md:w-120 mb-8"/>
                    
                        <label for="name" class="font-medium">Definir le probleme de votre voiture</label>
                        <textarea
                            pInputTextarea
                            id="description"
                            [(ngModel)] = "newRdv.problemeVoiture"
                            [ngModelOptions]="{standalone: true}"
                            rows="4"
                            placeholder="Dscription du probleme de voiture"
                            class="w-full md:w-120 mb-8">
                        </textarea>
        
                        <label class="font-medium">Photo de votre voiture</label>

                        <p-fileupload
                            (change)="onFileSelected($event)"
                            type = "file"
                            [ngModelOptions]="{standalone: true}"
                            [(ngModel)] = "newRdv.photoVoiture"
                            [multiple]="true"
                            accept="image/*"
                            maxFileSize="100000000"
                            mode="advanced"
                            url="https://www.primefaces.org/cdn/api/upload.php"
                            class="w-full">
                            <ng-template #empty>
                                <div class="text-center p-4">
                                    Glissez-déposez les fichiers ici
                                </div>
                            </ng-template>
                        </p-fileupload>
                    </div>
                    <br>
                    <!-- Button -->
                    <div class="flex justify-end pt-2">
                        <button pButton label="Submit" icon="pi pi-check"></button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</p-fluid>
`,
providers: [MessageService]
})
export class RendezVousComponent {

    newRdv = {nomClient:'',emailClient:'',modelVoiture:'',problemeVoiture:'',photoVoiture:[] as File[]};
    
    onFileSelected(event:any){

        let getFile = event.target.files;
        //this.newRdv.photoVoiture = Array.from(getFile);
        this.newRdv.photoVoiture = [];
        getFile.forEach((getFiles: any) => {
            this.newRdv.photoVoiture.push(getFiles)
        });
        // getFile.forEach((file:File) => {
        //     this.newRdv.photoVoiture.push(file)
        // });

    }
    constructor(private userservice:UserService , private rdvService:RdvService,private router:Router){};

    

    addRdv(){
        
        //console.log("click btn");
        try 
        {
            const rdv = {
                nomClient:this.newRdv.nomClient,
                emailClient:this.newRdv.emailClient,
                modelVoiture:this.newRdv.modelVoiture,
                problemeVoiture:this.newRdv.problemeVoiture,
                photoVoiture: this.newRdv.photoVoiture
            }
            this.rdvService.rdvClient(rdv).subscribe({

                next:(res) =>{
                    console.log("mety");
                    this.newRdv = {nomClient:'',emailClient:'',modelVoiture:'',
                    problemeVoiture:'',photoVoiture:[] as File[]};
                    // this.router.navigate(['/homePage/homeClient/rdvClient']);
                }
                
            });    
        } catch (error) {
            console.log(error);
               
        }
        
    }

 

}
