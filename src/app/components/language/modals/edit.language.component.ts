/*
 * Automatically generated by Magic
 */

import { throwError } from 'rxjs';
import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http-service';
import { DialogComponent, DialogData } from '../../../base/dialog.component';

/**
 * Modal dialog for editing your existing Language entity types, and/or
 * creating new entity types of type Language.
 */
@Component({
  templateUrl: './edit.language.component.html',
  styleUrls: ['./edit.language.component.scss']
})
export class EditLanguageComponent extends DialogComponent {

  /**
   * Constructor taking a bunch of services injected using dependency injection.
   */
  constructor(
    public dialogRef: MatDialogRef<EditLanguageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    protected snackBar: MatSnackBar,
    private service: HttpService) {
    super(snackBar);
    this.primaryKeys = ['language_id'];
    this.createColumns = [
      'name'
    ];
    this.updateColumns = [
      'language_id',
      'name'
    ];
  }

  /**
   * Returns a reference to ths DialogData that was dependency injected
   * into component during creation.
   */
  protected getData() {
    return this.data;
  }
  
  /**
   * Returns a reference to the update method, to update entity.
   */
  protected getUpdateMethod() {
    return this.service.language.update(this.data.entity);
  }
  /**
   * Returns a reference to the create method, to create new entities.
   */
  protected getCreateMethod() {
    return this.service.language.create(this.data.entity);
  }

  /**
   * Closes dialog.
   * 
   * @param data Entity that was created or updated
   */
  public close(data: any) {
    if (data) {
      this.dialogRef.close(data);
    } else {
      this.dialogRef.close();
    }
  }
}