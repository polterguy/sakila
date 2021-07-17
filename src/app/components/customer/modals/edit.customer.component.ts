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
 * Modal dialog for editing your existing Customer entity types, and/or
 * creating new entity types of type Customer.
 */
@Component({
  templateUrl: './edit.customer.component.html',
  styleUrls: ['./edit.customer.component.scss']
})
export class EditCustomerComponent extends DialogComponent {

  /**
   * Constructor taking a bunch of services injected using dependency injection.
   */
  constructor(
    public dialogRef: MatDialogRef<EditCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    protected snackBar: MatSnackBar,
    private service: HttpService) {
    super(snackBar);
    this.primaryKeys = ['customer_id'];
    this.createColumns = [
      'store_id',
      'first_name',
      'last_name',
      'email',
      'address_id',
      'create_date'
    ];
    this.updateColumns = [
      'customer_id',
      'store_id',
      'first_name',
      'last_name',
      'email',
      'address_id',
      'create_date'
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
    return this.service.customer.update(this.data.entity);
  }
  /**
   * Returns a reference to the create method, to create new entities.
   */
  protected getCreateMethod() {
    return this.service.customer.create(this.data.entity);
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
