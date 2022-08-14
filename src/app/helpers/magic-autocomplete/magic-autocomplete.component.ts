/*
 * Automatically generated by Magic
 */
/*
 * Automatically generated by Magic
 */

// Angular imports.
import { FormControl } from '@angular/forms';
import { IREntity } from '@app/services/interfaces/crud-interfaces';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';

/**
 * Autocomplete component allowing you to have an autocomplete
 * during editing/creating of items, for items where you have a foreign key,
 * which is a lookup into another database table. Usage would be
 * something like the following in your HTML.

  <app-magic-autocomplete
    *ngIf="canEditColumn('locale_id')"
    [model]="data.entity"
    field="locale_id"
    key="id"
    table="languages"
    value="language"
    placeholder="Choose a language"
    class="entity-edit-field"
    (change)="changed('locale_id')"
    [getItems]="service.languages">
  </app-magic-autocomplete>

 * The above would create an autocomplete for you, allowing you to
 * select from a popdown, declared in a database table, instead
 * of having user to manually type in the correct key.
 *
 * In the above example the main table has a field called 'locale_id',
 * which is a foreign key leading into the 'languages' 'id' column,
 * and you want to display the 'language' field to the end user.
 * 
 * The (change) part is an output emitter, invoked as the currently selected
 * value has been changed.
 * 
 * The difference between this component and the magic selector, is that
 * this component does not need to retrieve all items from the linked table,
 * which is useful for cases when you have thousands of records in your linked
 * table, and retrieving all of these simultaneously would require huge
 * amounts of bandwidth. However, logically these are similar in functionality,
 * and overlapping, and the threshold of linked database items requiring
 * you to choose one over the other, is up to you to decide. A good number
 * is typically if the linked table has more than 50/100 items, you should
 * probably choose the autocompleter, and vice versa.
 */
@Component({
  selector: 'app-magic-autocomplete',
  templateUrl: './magic-autocomplete.component.html',
  styleUrls: ['./magic-autocomplete.component.scss'],
})
export class MagicAutocompleteComponent implements OnInit {

  /**
   * Model you're databinding towards.
   */
  @Input() public model: any;

  /**
   * Field in the model that is databound towards the selected key.
   */
  @Input() public field: string;

  /**
   * Key in the referenced table that the field is changed to as
   * an item is selected.
   */
  @Input() public key: string;

  /**
   * Name of table which we need to retrieve items from.
   * Needed as we query for existing values.
   */
   @Input() public table: string;

  /**
   * Field in the referenced table that is displayed to the user
   * allowing him to select a specific item.
   */
  @Input() public value: string;

  /**
   * Placeholder value (tooltip) of selector component.
   */
  @Input() public placeholder: string;

  /**
   * Observable callback for component to retrieve items
   * to databound towards from backend HTTP service.
   */
  @Input() public getItems: IREntity;

  /**
   * Callback to invoke once item is changed.
   */
  @Output() public change: EventEmitter<any> = new EventEmitter();

  /**
   * Needed to programmatically set selected value during init if existing item is edited.
   */
  @ViewChild(MatAutocompleteTrigger) matAutocomplete: MatAutocompleteTrigger;

  /**
   * The control wrapping the input field.
   */
  public control = new FormControl();

  /**
   * Contains actual databound items, after having fetched
   * them from the backend.
   */
  public items: any[] = [];

  /**
   * If true, we're fetching items from backend.
   */
  public loading = false;

  /*
   * If false, the control will not fetch items as its value changes.
   */
  private fetch = true;

  /**
   * OnInit implementation.
   */
  public ngOnInit() {

    // Checking if model has a value already, at which point we display it by default.
    if (this.model[this.field]) {

      // Wee need to fetch the currently selected item and set the value of our autocomplete.
      this.loading = true;
      this.getItems.read({
        [this.table + '.' + this.key + '.eq']: this.model[this.field],
        limit: 1,
      }).subscribe((result: any[]) => {

        // Assigning model.
        this.items = result;
        setTimeout(() => {
          const options = this.matAutocomplete.autocomplete.options.toArray();
          this.fetch = false;
          this.control.setValue(options[0].value);
        }, 1);

        // Making sure we subscribe to changes to input field, such that we can retrieve items from backend.
        this.control.valueChanges
          .pipe(debounceTime(400), distinctUntilChanged())
          .subscribe(() => {
            if (this.fetch) {
              this.model[this.field] = null;
              this.change?.emit();
              this.getData();
            }
            this.fetch = true;
          });
          this.loading = false;
        });
    } else {

      // Making sure we subscribe to changes to input field, such that we can retrieve items from backend.
      this.control.valueChanges
        .pipe(debounceTime(400), distinctUntilChanged())
        .subscribe(() => {
          if (this.fetch) {
            this.model[this.field] = null;
            this.change?.emit();
            this.getData();
        }
          this.fetch = true;
      });

      // Retrieving items from IREntity instance provided by consumer.
      this.getData();
    }
  }

  /**
   * Returns display text for specified entity.
   * 
   * @param entity Entity to display
   */
  public displayFn(entity: any): string {
    return entity && entity[this.value] ? (entity[this.value] ?? '') : '';
  }

  /**
   * Invoked when the currently selected item in the autocompleter changes.
   * 
   * @param e Event data
   */
  public selectionChanged(e: MatAutocompleteSelectedEvent) {

    // Preventing debounce to fetch data.
    this.fetch = false;

    // Assigning model.
    this.model[this.field] = e.option.value[this.key];

    // Notifying subscribers.
    this.change?.emit();
  }

  /*
   * Private helper methods.
   */

  /*
   * Invoked as control needs new data from backend.
   */
  private getData() {

    // Retrieving items from IREntity instance provided by consumer.
    this.loading = true;
    const filter: any = {
      limit: 25,
    };
    if (this.control.value && this.control.value !== '') {
      filter[this.table + '.' + this.value + '.like'] = this.control.value;
    }
    this.getItems.read(filter).subscribe(res => {

      // Assigning model.
      this.items = res || [];
      this.items.sort((lhs, rhs) => {
        if (lhs[this.value] < rhs[this.value]) {
          return -1;
        } else if (lhs[this.value] > rhs[this.value]) {
          return 1;
        }
        return 0;
      });
      this.loading = false;
    });
  }
}
