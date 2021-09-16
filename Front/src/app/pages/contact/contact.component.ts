import { ContactService } from './../../shared/services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['./contact.component.scss', '../../shared/scss/global.scss'],
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  isFormValid = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  auto_grow(event) {
    event.srcElement.style.height = '8rem';
    event.srcElement.style.height = event.srcElement.scrollHeight + 'px';
  }
}
