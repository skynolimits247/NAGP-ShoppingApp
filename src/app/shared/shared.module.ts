import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { MaterialThemeModule } from './material-theme/material-theme.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { TranslatorComponent } from './components/translator/translator.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NoDataComponent } from './components/no-data/no-data.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    AboutComponent,
    ProgressSpinnerComponent,
    TranslatorComponent,
    LanguageSelectorComponent,
    NoDataComponent,
  ],
  imports: [
    CommonModule,
    MaterialThemeModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    TranslateModule,
    HeaderComponent,
    NotFoundComponent,
    AboutComponent,
    TranslatorComponent,
    CommonModule,
    MaterialThemeModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    LanguageSelectorComponent,
    NoDataComponent,
  ],
})
export class SharedModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
