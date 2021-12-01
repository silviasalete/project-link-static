import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private item: Item = {} as Item;
  public itemList: Item[] = [];
  form: FormGroup = this.formBuilder.group({
    id: this.formBuilder.control(null, null),
    title: this.formBuilder.control(null, Validators.required),
    description: this.formBuilder.control(null, Validators.required),
  });
  visibleForm: boolean = false;
  constructor(private service: ItemService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.list();
  }

  new() {
    this.visibleForm = true;
  }

  update(id: number) {
    this.findById(id);
    this.visibleForm = true;
  }

  list() {
    this.service.list().subscribe((data) => {
      this.itemList = data.content;
    });
  }

  saveOrUpdate(): void {
    if (this.form.get('id')?.value == null) {
      console.log('save');

      this.item.title = this.form.get('title')?.value;
      this.item.description = this.form.get('description')?.value;

      this.service.save(this.item).subscribe(() => this.list());
    } else {
      console.log('update');
      this.item.id = this.form.get('id')?.value;
      this.item.title = this.form.get('title')?.value;
      this.item.description = this.form.get('description')?.value;

      this.service.update(this.item).subscribe(() => this.list());
    }
  }

  findById(id: number) {
    this.service.findById(id).subscribe((item: Item) => {
      this.form.controls['id'].setValue(item.id);
      this.form.controls['title'].setValue(item.title);
      this.form.controls['description'].setValue(item.description);
    });
  }

  delete(id: number) {
    this.service.delete(id).subscribe(() => this.list());
  }
}
