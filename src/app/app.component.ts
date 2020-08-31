import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { IStoreApp } from './Interfaces/istore-app';
import {DATA} from './storeData';
import {MatSort} from '@angular/material/sort';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'name', 'price', 'inStock'];
  dataSource: MatTableDataSource<IStoreApp>;
  @ViewChild(MatSort, {static: true})sort: MatSort;

  ngOnInit(): void{
    this.dataSource = new MatTableDataSource(DATA);
    this.dataSource.sort = this.sort;
  }

  applyFilter(filter:any): void{
    this.dataSource.filter = filter.trim().toLowerCase();
  }
  
}
