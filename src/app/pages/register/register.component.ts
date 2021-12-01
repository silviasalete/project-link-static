import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  private user: User = {} as User;

  form: FormGroup = this.formBuilder.group({
    name: this.formBuilder.control(null, Validators.required),
    email: this.formBuilder.control(null, Validators.required),
    password: this.formBuilder.control(null, Validators.required),
  });

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  onSubmit(): void {
    if (this.form.valid) {
      this.userService.createAccount(this.form.value).subscribe((response) => {
        console.log('Usuário salvo: ', response);
      });

      this.form.reset();
    }
  }
}
