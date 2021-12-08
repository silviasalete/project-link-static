import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  private user: User = {} as User;
  public message = {
    visible: false,
    text: '',
  };

  form: FormGroup = this.formBuilder.group({
    name: this.formBuilder.control(null, Validators.required),
    email: this.formBuilder.control(null, Validators.required),
    password: this.formBuilder.control(null, Validators.required),
    domain: this.formBuilder.control(null, Validators.required),
  });

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit(): void {
    if (this.form.valid) {
      this.userService.createAccount(this.form.value).subscribe((response) => {
        if (response) {
          this.router.navigate(['/login', response.email]);
        } else {
          let domain = this.form.controls['domain'].value;
          this.message.visible = true;
          this.message.text = `O dominio <strong>${domain}</strong> já existe!`;
        }
      });
    }
  }
}
