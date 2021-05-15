import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  browserLang = 'en';
  constructor(
    public translate: TranslateService,
    private router: Router
  ) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    if (
      localStorage.getItem('localeLang') === null ||
      localStorage.getItem('localeLang') === undefined
    ) {
      this.browserLang = 'en';
      localStorage.setItem('localeLang', this.browserLang);
      translate.use(this.browserLang);
    } else {
      this.browserLang = localStorage.getItem('localeLang');
      translate.use(this.browserLang.match(/en|de/) ? this.browserLang : 'en');
    }
  }

  ngOnInit() {}

  langSelect(langselect) {
    this.translate.use(langselect.value);
    localStorage.setItem('localeLang', langselect.value);
    this.router.navigate(['/']);
  }
}
