/*
 * Automatically generated by Magic
 */

import { throwError } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GridComponent } from '@app/base/grid.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

import { EditSakila_paymentComponent } from './modals/edit.sakila_payment.component';
import { HttpService } from 'src/app/services/http-service';
import { AuthService } from 'src/app/services/auth-service';

/**
 * "Datagrid" component for displaying instance of Payment
 * entities from your HTTP REST backend.
 */
@Component({
  selector: 'app-sakila_payment',
  templateUrl: './sakila_payment.component.html',
  styleUrls: ['./sakila_payment.component.scss']
})
export class Sakila_paymentComponent extends GridComponent implements OnInit {

  /**
   * Which columns we should display. Reorder to prioritize columns differently.
   * Notice! 'delete-instance' should always come last.
   */
  public displayedColumns: string[] = [
    'customer_id.first_name',
    'staff_id.first_name',
    'payment_date',
    'last_update',
    'rental_id',
    'amount',
    'delete-instance'
  ];

  // Need to view paginator as a child to update page index of it.
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  // Form control declarations to bind up with reactive form elements.
  public customer_id_first_name: FormControl;
  public staff_id_first_name: FormControl;
  public payment_date: FormControl;
  public last_update: FormControl;
  public payment_id: FormControl;
  public customer_id: FormControl;
  public staff_id: FormControl;
  public rental_id: FormControl;
  public amount: FormControl;


  /**
   * Creates an instance of your CRUD component.
   * 
   * @param httpService Needed to be able to invoke backend during CRUD operations
   * @param authService Needed to check if user has access to invoking CRUD operation
   * @param snackBar Needed to display errror and feedback
   * @param dialog Needed to show modal dialog as user edits or creates new entities
   */
   constructor(
    public httpService: HttpService,
    public authService: AuthService,
    protected snackBar: MatSnackBar,
    protected dialog: MatDialog) {
      super(authService, snackBar, dialog);
  }

  /**
   * Overridde abstract method necessary to return the URL endpoint
   * for CRUD methods to base class.
   */
  public url() {
    return 'magic/modules/sakila/payment';
  }

  /**
   * Overridden abstract method from base class, that returns the Observable
   * necessary to actually retrieve items from backend.
   */
  protected read(filter: any) {
    return this.httpService.sakila_payment.read(filter);
  }

  /**
   * Overridden abstract method from base class, that returns the Observable
   * necessary to actually retrieve count of items from backend.
   */
  protected count(filter: any) {
    return this.httpService.sakila_payment.count(filter);
  }

  /**
   * Overridden abstract method from base class, that returns the Observable
   * necessary to actually delete items in backend.
   */
  protected delete(ids: any) {
    return this.httpService.sakila_payment.delete(ids);
  }

  /**
   * Implementation of abstract base class method, to reset paginator
   * of component.
   */
  protected resetPaginator() {
    this.paginator.pageIndex = 0;
    this.filter.offset = 0;
  }

  /**
   * OnInit implementation. Retrieves initial data (unfiltered),
   * and instantiates our FormControls.
   */
  public ngOnInit() {

    // Retrieves data from our backend, unfiltered, and binds our mat-table accordingly.
    this.getData();

    /*
     * Creating our filtering FormControl instances, which gives us "live filtering"
     * on our columns.
     */
    this.customer_id_first_name = this.createFormControl('customer_id.first_name.like');
    this.staff_id_first_name = this.createFormControl('staff_id.first_name.like');
    this.payment_date = this.createFormControl('payment.payment_date.eq');
    this.last_update = this.createFormControl('payment.last_update.eq');
    this.payment_id = this.createFormControl('payment.payment_id.eq');
    this.customer_id = this.createFormControl('payment.customer_id.eq');
    this.staff_id = this.createFormControl('payment.staff_id.eq');
    this.rental_id = this.createFormControl('payment.rental_id.eq');
    this.amount = this.createFormControl('payment.amount.eq');
  }

  /**
   * Invoked when user wants to edit an entity
   * 
   * This will show a modal dialog, allowing the user to edit his record.
   */
  public editEntity(entity: any) {

    const dialogRef = this.dialog.open(EditSakila_paymentComponent, {
      data: this.getEditData(entity)
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.setEditData(res, entity);
      }
    });
  }

  /**
   * Invoked when user wants to create a new entity
   * 
   * This will show a modal dialog, allowing the user to supply
   * the initial data for the entity.
   */
  public createEntity() {

    const dialogRef = this.dialog.open(EditSakila_paymentComponent, {
      data: {
        isEdit: false,
        entity: {},
      }});
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        this.itemCreated(res);
      }
    });
  }
}