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
    this.form.statusChanges.subscribe((value) => {
      if (value === 'VALID') {
        this.isFormValid = true;
      }
    });
  }

  sendMessage(form: NgForm) {
    //console.log(form.value);
    //[TODO]
    if (form.value.name && form.value.email && form.value.message) {
      console.log(form.value);
      this.contactService.postMessage(form.value).subscribe(
        (response) => {
          location.href = 'https://mailthis.to/confirm';
          console.log(response);
        },
        (error) => {
          console.warn(error.responseText);
          console.log({ error });
        }
      );
    } else {
      this.isFormValid = false;
    }
  }

  auto_grow(event) {
    event.srcElement.style.height = '8rem';
    event.srcElement.style.height = event.srcElement.scrollHeight + 'px';
  }
}
