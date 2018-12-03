import { FormGroup, Validator, FormBuilder } from "@angular/forms";
import { Publicaciones } from "./../../models/Publicaciones";
import { PublicacionesModule } from "./../../tipoPublicaciones/tipoPublicaciones.module";
import { Component, OnInit, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { catchError, tap } from "rxjs/operators";
import { PublicacionService } from "../../services/publicacion.service";
import swal from "sweetalert2";
import { Title } from "@angular/platform-browser";
@Component({
  selector: "app-list",
  templateUrl: "./List.component.html",
  styleUrls: ["./List.component.css"]
})
export class ListComponent implements OnInit {
  publicaciones: any;
  form: FormGroup;
  date: Date;
  constructor(
    private http: HttpClient,
    private publicacionDataService: PublicacionService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buscarPublicaciones();
  }
  buscarPublicaciones() {
    this.publicacionDataService.buscarPublicaciones().subscribe(respuesta => {
        this.publicaciones = respuesta;
    },
        err => {
        }
    );
  }
  delatePublicaciones(publicacion: Publicaciones) {
    if (publicacion === undefined) {return; }
    this.publicacionDataService.delatePublicaciones(publicacion)
    .subscribe(
        response => {
          const swalWithBootstrapButtons = swal.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false,
          })
          swalWithBootstrapButtons({
            title: '¿Estás seguro?',
            text: '¡No podrás revertir esto!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: '¡Sí, bórralo!',
            cancelButtonText: 'No, cancelalo!',
            reverseButtons: true
          }).then((result) => {
            if (result.value) {
              swalWithBootstrapButtons(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              // Read more about handling dismissals
              result.dismiss === swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
        }
    );
  }
  crearOActualizar(publicacion: Publicaciones) {
    if ( publicacion === undefined) {return; }
    this.publicacionDataService.crearOActualizar( publicacion )
    .subscribe()
  //         swal({
  //     position: 'top-end',
  //     type: 'success',
  //     title: 'Your work has been saved',
  //     showConfirmButton: false,
  //     timer: 1500
  //   })
  //       )
  //   }
  // }
}
}
