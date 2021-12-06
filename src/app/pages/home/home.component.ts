import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Link } from 'src/app/models/link';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';
import { LinkService } from 'src/app/service/link.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private link: Link = {} as Link;
  public linkList: Link[] = [];
  public user: User = {} as User;
  form: FormGroup = this.formBuilder.group({
    id: this.formBuilder.control(null, null),
    title: this.formBuilder.control(null, Validators.required),
    url: this.formBuilder.control(null, Validators.required),
  });
  visibleForm: boolean = false;
  constructor(
    private linkService: LinkService,
    private userService: UserService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.findUserById(+params['id']);
      this.list(+params['id']);
    });
  }

  findUserById(id: number) {
    this.userService.findUserById(id).subscribe((data) => {
      this.user = data;
    });
  }

  new() {
    this.visibleForm = true;
  }

  update(id: number) {
    this.findById(id);
    this.visibleForm = true;
  }

  list(id: number) {
    this.linkService.listByUserId(id).subscribe((data) => {
      this.linkList = data;
    });
  }

  saveOrUpdate(): void {
    if (this.form.get('id')?.value == null) {
      const linkForm = {
        idUser: this.user.id,
        title: this.form.get('title')?.value,
        url: this.form.get('url')?.value,
      };
      this.linkService.save(linkForm).subscribe(() => {
        this.form.reset();
        this.list(this.user.id);
      });
    } else {
      this.link.id = this.form.get('id')?.value;
      this.link.title = this.form.get('title')?.value;
      this.link.url = this.form.get('url')?.value;

      this.linkService.update(this.link).subscribe(() => {
        this.form.reset();
        this.list(this.user.id);
      });
    }
  }

  findById(id: number) {
    this.linkService.findById(id).subscribe((link: Link) => {
      this.form.controls['id'].setValue(link.id);
      this.form.controls['title'].setValue(link.title);
      this.form.controls['url'].setValue(link.url);
    });
  }

  delete(id: number) {
    this.linkService.delete(id).subscribe(() => this.list(this.user.id));
  }

  logout() {
    this.authService.logout();
  }
}
