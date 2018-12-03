import {CreateComponent} from '../publicaciones/create/create.component'
import { DeleteComponent } from '../publicaciones/delete/delete.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { FieldsetModule } from 'primeng/fieldset';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ToastModule,
        InputMaskModule,
        CalendarModule,
        PaginatorModule,
        FieldsetModule
    ],
    declarations: [
        EditComponent,
        ListComponent,
        DeleteComponent,
        CreateComponent
    ],
    exports: [
        // EditComponent,
        // ListComponent,
        DeleteComponent,
        CreateComponent
    ]
})
export class PublicacionesModule { }
