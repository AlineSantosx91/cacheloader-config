import { element } from 'protractor';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { FileUploader } from 'ng2-file-upload';
import { ModalDialogComponent } from './../common/modal-dialog/modal-dialog.component';
import { Filho } from './../common/model/menu-filho-model'

declare var jQuery: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
@Injectable()
export class MenuComponent implements OnInit {

  files: FileList;
  fileMenu: Object[];
  aplicativos: string[];
  appCombobox: boolean;
  appRadioButton: boolean;
  aplicativo: string;
  opcao: number;

  constructor(private router: Router) {
    this.appCombobox = false;
  }

  ngOnInit() {
  }


  uploadFile(event) {
    this.files = event.target.files;
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.files[0]);

  }

  _handleReaderLoaded(readerEvt) {
    this.fileMenu = Object.assign(new Object(), JSON.parse(readerEvt.target.result));
    this.criarListaAplicativos();
  }

  criarListaAplicativos() {
    this.aplicativos = new Array;

    for (var i = 0; i < 100; i++) {
      var key = Object.keys(this.fileMenu)[i];
      if (key !== undefined) {
        this.aplicativos.push(key);
        // var value = this.fileMenu[key]
      }
    }

    if (this.aplicativos.length > 0) {
      this.appCombobox = true;
    }
  }

  setAplicativo(aplicativo: string) {
    this.aplicativo = aplicativo;
    this.appRadioButton = true;

  }

 public getApplicativo(): string{
    return this.aplicativo;
  }

}
