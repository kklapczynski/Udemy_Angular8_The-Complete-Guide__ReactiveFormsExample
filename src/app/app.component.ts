import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { CustomValidators } from './custom-validators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl('', [Validators.required, CustomValidators.isForbiddenName], CustomValidators.asyncIsBadName),
      email: new FormControl('', [Validators.required, Validators.email]),
      projectStatus: new FormControl('Critical')
    });
    
    this.projectForm.get('projectName').statusChanges.subscribe(
      (status) => console.log(status)
    );
    // this.projectForm.statusChanges.subscribe(
    //   (status) => console.log(`Form status: ${status}`)
    // )
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  
}
