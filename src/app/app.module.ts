import { routing } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './common/header/header.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { MenuCadastroComponent } from './menu-cadastro/menu-cadastro.component';
import { ModalDialogComponent } from './common/modal-dialog/modal-dialog.component';
import { AlertsComponent } from './common/alerts/alerts.component';
import { MenuOpcoesComponent } from './menu-opcoes/menu-opcoes.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FileSelectDirective,
    MenuCadastroComponent,
    ModalDialogComponent,
    AlertsComponent,
    MenuOpcoesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule
  ],
  exports: [
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
