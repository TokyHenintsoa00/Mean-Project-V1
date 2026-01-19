import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { FluidModule } from "primeng/fluid";
import { InputTextModule } from "primeng/inputtext";
import { SelectModule } from "primeng/select";
import { TextareaModule } from "primeng/textarea";
import { DropdownModule } from '.';
@Component({
    selector: 'app-rdv-demo',
    standalone: true,
    imports: [InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule,
             CommonModule,
        FormsModule,
        InputTextModule,
        DropdownModule,
        ButtonModule
    ],
    template: `<p-fluid>
    <div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-1/2">
            <div class="card flex flex-col gap-6 shadow-2 border-round-xl">

                <div class="font-semibold text-xl text-primary">
                    Vertical Grid
                </div>

                <!-- Name & Email -->
                <div class="flex flex-wrap gap-6">
                    <div class="flex flex-col grow basis-0 gap-2">
                        <label for="name2" class="font-medium">Name</label>
                        <input pInputText id="name2" type="text" placeholder="Enter your name" />
                    </div>

                    <div class="flex flex-col grow basis-0 gap-2">
                        <label for="email2" class="font-medium">Email</label>
                        <input pInputText id="email2" type="email" placeholder="Enter your email" />
                    </div>
                </div>

                <!-- Select -->
                <div class="flex flex-col gap-2">
                    <label for="role" class="font-medium">Role</label>
                    <p-dropdown
                        id="role"
                        [options]="roles"
                        optionLabel="label"
                        placeholder="Select a role"
                        class="w-full">
                    </p-dropdown>
                </div>

                <!-- File -->
                <div class="flex flex-col gap-2">
                    <label for="file" class="font-medium">Upload file</label>
                    <input type="file" id="file" class="w-full" />
                </div>

                <!-- Button -->
                <div class="flex justify-end pt-2">
                    <button pButton label="Submit" icon="pi pi-check"></button>
                </div>

            </div>
        </div>
    </div>
</p-fluid>
`
})

export class RendezVousComponent{
    roles = null;
}
