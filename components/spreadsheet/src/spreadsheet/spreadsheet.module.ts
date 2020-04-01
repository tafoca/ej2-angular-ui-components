import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellDirective, CellsDirective } from './cells.directive';
import { RowDirective, RowsDirective } from './rows.directive';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { RangeDirective, RangesDirective } from './range.directive';
import { SheetDirective, SheetsDirective } from './sheets.directive';
import { DefinedNameDirective, DefinedNamesDirective } from './definednames.directive';
import { SpreadsheetComponent } from './spreadsheet.component';

/**
 * NgModule definition for the Spreadsheet component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        SpreadsheetComponent,
        CellDirective,
        CellsDirective,
        RowDirective,
        RowsDirective,
        ColumnDirective,
        ColumnsDirective,
        RangeDirective,
        RangesDirective,
        SheetDirective,
        SheetsDirective,
        DefinedNameDirective,
        DefinedNamesDirective
    ],
    exports: [
        SpreadsheetComponent,
        CellDirective,
        CellsDirective,
        RowDirective,
        RowsDirective,
        ColumnDirective,
        ColumnsDirective,
        RangeDirective,
        RangesDirective,
        SheetDirective,
        SheetsDirective,
        DefinedNameDirective,
        DefinedNamesDirective
    ]
})
export class SpreadsheetModule { }