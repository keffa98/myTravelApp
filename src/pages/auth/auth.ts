import {Component, OnInit} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabsPage} from "../tabs/tabs";


@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage implements OnInit{
  mode: string;
  authForm: FormGroup;
  errorMessage: string;
  constructor(public navCtrl: NavController,
              private authService: AuthService,
              public navParams: NavParams,
              private menuCtrl: MenuController,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
      this.mode = this.navParams.get('mode');
      this.initForm();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  initForm() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmitForm() {
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;
    if (this.mode === 'new') {
      this.authService.signUpUser(email, password).then(
        () => {
          this.navCtrl.setRoot(TabsPage);
          console.log(email,password);
        }
      );
    } else if (this.mode === 'connect') {
      this.authService.signInUser(email, password).then(
        () => {
          this.navCtrl.setRoot(TabsPage);
          console.log(email,password);
        },
        (error) => {
          console.log(error) ;
          this.errorMessage = error;
        }
      );
    }
  }
}
