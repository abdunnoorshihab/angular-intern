import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit {
  dataForm: FormGroup;
  aboutUs: string = null;

  title: string = null;


  // Inject
  private readonly fb = inject(FormBuilder)

  ngOnInit() {
    // Init
    this.initForm();

    setTimeout(() => {
      this.updateTitle();
    }, 1000)

  }

  updateTitle() {
    this.title = 'Md Sazib'
  }


  private initForm() {
    this.dataForm = this.fb.group({
      name: [null, Validators.required],
      age: [null, [Validators.required, Validators.min(18)]],
      about: [null],
    })

    // this.dataForm = new FormGroup({
    //   name: new FormControl(),
    //   about: new FormControl(),
    // })
  }

  onSubmit() {
    if (this.dataForm.invalid) {
      console.log('Invalid form.')
      this.dataForm.markAllAsTouched();
      return;
    }
    console.log('onSubmit -> ', this.dataForm.value)
    console.log('aboutUs', this.aboutUs)
  }
}
