import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.scss'],
})

export class TranslatorComponent implements OnInit {
  @Input() Text: string;
  lang = 'en';
  constructor(
    public translate: TranslateService
  ) {}

  ngOnInit() {
    if (
      localStorage.getItem('localeLang') === null ||
      localStorage.getItem('localeLang') === undefined
    ) {
      // console.log('in if TTB');
      this.lang = 'en';
      localStorage.setItem('localeLang', this.lang);
      this.translate.use(this.lang.match(/en|de/) ? this.lang : 'en');
    } else {
      // console.log('in else TTB');
      this.lang = localStorage.getItem('localeLang');
      this.translate.use(this.lang.match(/en|de/) ? this.lang : 'en');
    }
  }
}
