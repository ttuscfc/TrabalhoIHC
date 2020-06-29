import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DetalheComponent } from './components/detalhe/detalhe.component';
import { LoginComponent } from './components/login/login.component';

registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrinhoComponent,
    DetalheComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgbModule,
    MatSliderModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
