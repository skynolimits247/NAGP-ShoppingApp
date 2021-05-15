import { Component, OnInit } from '@angular/core';
import { LoaderServiceService } from '../../shared/services/loader-service/loader-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { LoginService } from '../shared/services/login.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [LoaderServiceService],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  browserLang: string;
  constructor(
    public loader: LoaderServiceService,
    private fb: FormBuilder,
    public translate: TranslateService,
    private loginService: LoginService,
    private router: Router
  ) {}
  ngOnInit() {
    this.createLoginForm();
  }

  private createLoginForm() {
    this.loginForm = this.fb.group({
      loginId: '',
      password: '',
    });
  }

  login() {
    const login = 'loginId';
    const pass = 'password';
    this.loginForm.disable();
    this.loader.show();
    const { loginId, password } = this.loginForm.value;
    const temp = this.loginService.login(loginId, password);
    if (temp !== null && temp !== undefined) {
      localStorage.setItem('user-info', JSON.stringify(temp));
      this.loader.hide();
      this.router.navigate(['home']);
    } else {
      this.reset();
      this.loginForm.enable();
      this.loginForm.controls[login].setErrors({ invalid: true });
      this.loginForm.controls[pass].setErrors({ invalid: true });
      this.loader.hide();
    }
    // this.loginService.login(loginId, password).subscribe(
    //   (data: any) => {
    //     if (data.length > 0) {
    //       localStorage.setItem('user-info', data[0]);
    //       this.loader.hide();
    //       this.router.navigate(['home']);
    //     } else {
    //       this.loginForm.enable();
    //       this.loginForm.controls['loginId'].setErrors({ invalid: true });
    //       this.loginForm.controls['password'].setErrors({ invalid: true });
    //       this.loader.hide();
    //     }
    //   },
    //   (err) => {
    //     this.loginForm.enable();
    //     this.loginForm.setErrors({ 'no-response': true });
    //     this.loader.hide();
    //   }
    // );
  }

  reset() {
    this.loginForm.reset();
  }

  langSelect(langselect) {
    this.translate.use(langselect.value);
    localStorage.setItem('localeLang', langselect.value);
  }
}
