import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { LabelService } from 'src/app/services/label.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit
{
  labelForm!: FormGroup;
  private createlabel = new FormControl('');
  labels: any;

  constructor(private formBuilder: FormBuilder, private dataService: DataService, @Inject(MAT_DIALOG_DATA) public data: any, @Optional() private dialogRef: MatDialogRef<DashboardComponent>, private labelService: LabelService) { }

  ngOnInit(): void
  {
    this.labelForm = this.formBuilder.group({
      labelName: ['', [Validators.required, Validators.minLength(1)]]
    });

    this.dataService.receivingSource.subscribe(response =>
    {
      this.labels = response;
    });
    this.labels = this.data;
    console.log(this.data);
  }

  cleartext()
  {
    return this.labelForm.controls['labelName'].setValue('');
  }

  createLabel()
  {
    if (this.labelForm.invalid) 
    {
      return;
    }
    let reqData = {
      lableName: this.labelForm.value.labelName
    }
    console.log(reqData);
    this.labelService.createLabel(reqData).subscribe((response: any) => 
    {
      console.log(response);
      this.dataService.sendMessage(response);
    },
      (error: any) => 
      {
        console.log(error);
      })
  }

  DeleteLabel(LabelId: any)
  {
    this.labelService.deleteLabel(LabelId).subscribe(response => 
    {
      this.createlabel.reset();
    },
      error =>
      {
        console.log(error);
      }
    );
  }
}
