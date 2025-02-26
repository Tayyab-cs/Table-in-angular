import {
  // ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
  ViewChild,
  // OnChanges,
  // SimpleChanges,
  // viewChild,
} from '@angular/core';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  fuel_type: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Automatic' | 'Manual' | 'CVT';
  status: 'Available' | 'Sold';
}

const CAR_DATA: Car[] = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'White',
    mileage: 25000,
    price: 22000,
    fuel_type: 'Gasoline',
    transmission: 'Automatic',
    status: 'Available',
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    color: 'Black',
    mileage: 30000,
    price: 20000,
    fuel_type: 'Gasoline',
    transmission: 'Manual',
    status: 'Sold',
  },
  {
    id: 3,
    make: 'Ford',
    model: 'F-150',
    year: 2021,
    color: 'Blue',
    mileage: 15000,
    price: 35000,
    fuel_type: 'Diesel',
    transmission: 'Automatic',
    status: 'Available',
  },
  {
    id: 4,
    make: 'Chevrolet',
    model: 'Malibu',
    year: 2018,
    color: 'Red',
    mileage: 40000,
    price: 18000,
    fuel_type: 'Gasoline',
    transmission: 'Automatic',
    status: 'Available',
  },
  {
    id: 5,
    make: 'Nissan',
    model: 'Altima',
    year: 2022,
    color: 'Silver',
    mileage: 10000,
    price: 25000,
    fuel_type: 'Hybrid',
    transmission: 'Automatic',
    status: 'Available',
  },
  {
    id: 6,
    make: 'BMW',
    model: 'X5',
    year: 2020,
    color: 'Gray',
    mileage: 22000,
    price: 45000,
    fuel_type: 'Gasoline',
    transmission: 'Automatic',
    status: 'Sold',
  },
  {
    id: 7,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2019,
    color: 'Black',
    mileage: 27000,
    price: 38000,
    fuel_type: 'Gasoline',
    transmission: 'Automatic',
    status: 'Available',
  },
  {
    id: 8,
    make: 'Audi',
    model: 'A4',
    year: 2021,
    color: 'White',
    mileage: 12000,
    price: 40000,
    fuel_type: 'Gasoline',
    transmission: 'Automatic',
    status: 'Available',
  },
  {
    id: 9,
    make: 'Tesla',
    model: 'Model 3',
    year: 2022,
    color: 'Blue',
    mileage: 5000,
    price: 50000,
    fuel_type: 'Electric',
    transmission: 'Automatic',
    status: 'Available',
  },
  {
    id: 10,
    make: 'Hyundai',
    model: 'Elantra',
    year: 2017,
    color: 'Green',
    mileage: 50000,
    price: 15000,
    fuel_type: 'Gasoline',
    transmission: 'Manual',
    status: 'Sold',
  },
  {
    id: 11,
    make: 'Kia',
    model: 'Sorento',
    year: 2019,
    color: 'Silver',
    mileage: 30000,
    price: 27000,
    fuel_type: 'Gasoline',
    transmission: 'Automatic',
    status: 'Available',
  },
  {
    id: 12,
    make: 'Volkswagen',
    model: 'Jetta',
    year: 2020,
    color: 'Gray',
    mileage: 18000,
    price: 22000,
    fuel_type: 'Diesel',
    transmission: 'Automatic',
    status: 'Available',
  },
  {
    id: 13,
    make: 'Subaru',
    model: 'Outback',
    year: 2021,
    color: 'White',
    mileage: 14000,
    price: 29000,
    fuel_type: 'Gasoline',
    transmission: 'CVT',
    status: 'Available',
  },
  {
    id: 14,
    make: 'Mazda',
    model: 'CX-5',
    year: 2018,
    color: 'Red',
    mileage: 35000,
    price: 21000,
    fuel_type: 'Gasoline',
    transmission: 'Automatic',
    status: 'Sold',
  },
  {
    id: 15,
    make: 'Jeep',
    model: 'Wrangler',
    year: 2022,
    color: 'Black',
    mileage: 8000,
    price: 40000,
    fuel_type: 'Gasoline',
    transmission: 'Manual',
    status: 'Available',
  },
  {
    id: 16,
    make: 'Dodge',
    model: 'Charger',
    year: 2019,
    color: 'Blue',
    mileage: 25000,
    price: 33000,
    fuel_type: 'Gasoline',
    transmission: 'Automatic',
    status: 'Sold',
  },
  {
    id: 17,
    make: 'Volvo',
    model: 'XC90',
    year: 2021,
    color: 'Silver',
    mileage: 12000,
    price: 47000,
    fuel_type: 'Hybrid',
    transmission: 'Automatic',
    status: 'Available',
  },
  {
    id: 18,
    make: 'Ford',
    model: 'Mustang',
    year: 2017,
    color: 'Yellow',
    mileage: 60000,
    price: 26000,
    fuel_type: 'Gasoline',
    transmission: 'Manual',
    status: 'Sold',
  },
  {
    id: 19,
    make: 'Chevrolet',
    model: 'Tahoe',
    year: 2020,
    color: 'White',
    mileage: 22000,
    price: 42000,
    fuel_type: 'Diesel',
    transmission: 'Automatic',
    status: 'Available',
  },
  {
    id: 20,
    make: 'Honda',
    model: 'Accord',
    year: 2021,
    color: 'Gray',
    mileage: 17000,
    price: 29000,
    fuel_type: 'Hybrid',
    transmission: 'CVT',
    status: 'Available',
  },
];

const carColumns = [
  'id',
  'make',
  'model',
  'year',
  'color',
  'mileage',
  'price',
  'fuel_type',
  'transmission',
  'status',
];

@Component({
  selector: 'app-root',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  initialSelection = [];
  readonly dialog = inject(MatDialog);

  title = 'table-app';
  carColumns = carColumns;
  displayedColumns = [...carColumns, 'actions'];
  pageSizeOptions = [5, 10, 20];
  newCar = {};
  // dataSource: Car[] = CAR_DATA;
  dataSource = new MatTableDataSource<Car>(CAR_DATA);
  clickedRows = new Set<Car>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Car>;

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.updatePageSizeOptions();
    }
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['dataSource']) {
  //     console.log('DataSource changed:', this.dataSource.data);
  //     this.updatePageSizeOptions();
  //   }
  // }

  getNextId(): number {
    const maxId = Math.max(...this.dataSource.data.map((car) => car.id), 0);
    return maxId + 1;
  }

  updatePageSizeOptions() {
    const totalRecords = this.dataSource.data.length;

    if (!this.pageSizeOptions.includes(totalRecords)) {
      this.pageSizeOptions = [...this.pageSizeOptions, totalRecords].sort(
        (a, b) => a - b
      );
    }

    if (this.paginator) {
      this.paginator.pageSizeOptions = this.pageSizeOptions;
    }
  }

  addCar() {
    const dialogRef = this.dialog.open(AddCarDialog);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(`Dialog result: ${JSON.stringify(result)}`);

        if (typeof result === 'object' && result !== null) {
          result.id = this.getNextId();
          this.dataSource.data = [...this.dataSource.data, result];
          this.updatePageSizeOptions();

          this.table.renderRows();
        }
      }
      console.log('Updated DataSource: ', this.dataSource.data);
    });
  }

  onEdit(row: Car) {
    const dialogRef = this.dialog.open(AddCarDialog, {
      data: { ...row },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(`Dialog result: ${JSON.stringify(result)}`);

        this.dataSource.data = this.dataSource.data.map((car) =>
          car.id === result.id ? result : car
        );
      }
    });
  }

  onDelete(row: any) {
    console.log('Delete clicked', row);
    this.dataSource.data = this.dataSource.data.filter(
      (car) => car.id !== row.id
    );

    this.table.renderRows();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

@Component({
  selector: 'add-car-dialog',
  templateUrl: 'add-car-dialog.html',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCarDialog {
  newCar: Car;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Car,
    private dialogRef: MatDialogRef<AddCarDialog>
  ) {
    // If editing, pre-fill data; otherwise, use default values
    this.newCar = data
      ? { ...data }
      : {
          id: 0,
          make: '',
          model: '',
          year: new Date().getFullYear(),
          color: '',
          mileage: 0,
          price: 0,
          fuel_type: 'Gasoline',
          transmission: 'Automatic',
          status: 'Available',
        };
  }

  save() {
    this.dialogRef.close(this.newCar);
  }

  close() {
    this.dialogRef.close();
  }
}
