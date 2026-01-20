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

                <!-- Name & Email -->
                <div class="flex flex-wrap gap-6">
                    <div class="flex flex-col grow basis-0 gap-2">
                        <label for="name" class="font-medium">Name</label>
                        <input pInputText id="name" type="text" [(ngModel)] = "newRdv.nomClient" placeholder="Enter your name" />
                    </div>

                    <div class="flex flex-col grow basis-0 gap-2">
                        <label for="email" class="font-medium">Email</label>
                        <input pInputText id="email" type="email" [(ngModel)] = "newRdv.emailClient" placeholder="Enter your email" />
                    </div>
                </div>

                

                <div>
                    <label for="name" class="font-medium">Model de voiture</label>
                    <input pInputText id="nom" type="text" placeholder="Constructeur-XXX-XXX" class="w-full md:w-120 mb-8"/>
                
                    <label for="name" class="font-medium">Definir le probleme de votre voiture</label>
                    <textarea
                        pInputTextarea
                        id="description"
                        rows="4"
                        placeholder="Dscription du probleme de voiture"
                        class="w-full md:w-120 mb-8">
                    </textarea>

                     <label class="font-medium">Photo de votre voiture</label>

                    <p-fileupload
                        name="demo[]"
                        (onUpload)="onUpload($event)"
                        [multiple]="true"
                        accept="image/*"
                        maxFileSize="100000000"
                        mode="advanced"
                        url="https://www.primefaces.org/cdn/api/upload.php"
                        class="w-full"
                    >
                        <ng-template #empty>
                            <div class="text-center p-4">
                                Glissez-déposez les fichiers ici
                            </div>
                        </ng-template>
                    </p-fileupload>
                </div>



                <!-- Button -->
                <div class="flex justify-end pt-2">
                    <button pButton label="Submit" icon="pi pi-check"></button>
                </div>

            </div>
        </div>
    </div>
</p-fluid>
`,
providers: [MessageService]
})
export class RendezVousComponent {

    newRdv = {nomClient:'',emailClient:''};

    // uploadedFiles: any[] = [];
    // constructor(private messageService: MessageService) {}
    onUpload(event: any) {
        // for (const file of event.files) {
        //     this.uploadedFiles.push(file);
        // }

        // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

}
