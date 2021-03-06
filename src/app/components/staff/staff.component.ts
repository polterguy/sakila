/*
 * Automatically generated by Magic
 */

import { throwError } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GridComponent } from '../../base/grid.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

import { EditStaffComponent } from './modals/edit.staff.component';
import { HttpService } from 'src/app/services/http-service';
import { AuthService } from 'src/app/services/auth-service';

/**
 * "Datagrid" component for displaying instance of Staff
 * entities from your HTTP REST backend.
 */
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent extends GridComponent implements OnInit {

  /**
   * Which columns we should display. Reorder to prioritize columns differently.
   * Notice! 'delete-instance' should always come last.
   */
  public displayedColumns: string[] = [
    'first_name',
    'last_name',
    'address_id',
    'email',
    'store_id',
    'active',
    'last_update',
    'delete-instance'
  ];

  // Need to view paginator as a child to update page index of it.
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  // Form control declarations to bind up with reactive form elements.
  public staff_id: FormControl;
  public first_name: FormControl;
  public last_name: FormControl;
  public address_id: FormControl;
  public email: FormControl;
  public store_id: FormControl;
  public active: FormControl;
  public last_update: FormControl;


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
    private dialog: MatDialog) {
      super(authService, snackBar);
  }

  /**
   * Overridde abstract method necessary to return the URL endpoint
   * for CRUD methods to base class.
   */
  protected url() {
    return 'magic/modules/sakila/staff';
  }

  /**
   * Overridden abstract method from base class, that returns the Observable
   * necessary to actually retrieve items from backend.
   */
  protected read(filter: any) {
    return this.httpService.staff.read(filter);
  }

  /**
   * Overridden abstract method from base class, that returns the Observable
   * necessary to actually retrieve count of items from backend.
   */
  protected count(filter: any) {
    return this.httpService.staff.count(filter);
  }

  /**
   * Overridden abstract method from base class, that returns the Observable
   * necessary to actually delete items in backend.
   */
  protected delete(ids: any) {
    return this.httpService.staff.delete(ids);
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
    this.staff_id = this.createFormControl('staff_id.eq');
    this.first_name = this.createFormControl('first_name.like');
    this.last_name = this.createFormControl('last_name.like');
    this.address_id = this.createFormControl('address_id.eq');
    this.email = this.createFormControl('email.like');
    this.store_id = this.createFormControl('store_id.eq');
    this.active = this.createFormControl('active.eq');
    this.last_update = this.createFormControl('last_update.eq');
  }

  /**
   * Invoked when user wants to edit an entity
   * 
   * This will show a modal dialog, allowing the user to edit his record.
   */
  public editEntity(entity: any) {

    const dialogRef = this.dialog.open(EditStaffComponent, {
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

    const dialogRef = this.dialog.open(EditStaffComponent, {
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
