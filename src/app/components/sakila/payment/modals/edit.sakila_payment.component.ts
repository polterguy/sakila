/*
 * Automatically generated by Magic
 */
import { throwError } from 'rxjs';
import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http-service';
import { DialogComponent, DialogData } from '@app/base/dialog.component';

/**
 * Modal dialog for editing your existing Payment entity types, and/or
 * creating new entity types of type Payment.
 */
@Component({
  templateUrl: './edit.sakila_payment.component.html'
})
export class EditSakila_paymentComponent extends DialogComponent {

  /**
   * Constructor taking a bunch of services injected using dependency injection.
   */
  constructor(
    public dialogRef: MatDialogRef<EditSakila_paymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    protected snackBar: MatSnackBar,
    public service: HttpService) {
    super(snackBar);
    this.primaryKeys = ['payment_id'];
    this.createColumns = [
      'customer_id',
      'staff_id',
      'payment_date',
      'last_update',
      'rental_id',
      'amount'
    ];
    this.updateColumns = [
      'customer_id',
      'staff_id',
      'payment_date',
      'payment_id',
      'rental_id',
      'amount'
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
    return this.service.sakila_payment.update(this.data.entity);
  }
  /**
   * Returns a reference to the create method, to create new entities.
   */
  protected getCreateMethod() {
    return this.service.sakila_payment.create(this.data.entity);
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
