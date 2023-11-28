import { Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

export interface Product {
  name: string;
  category: string;
}

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent {
  constructor() {}
  ngOnInit() {}

  downloadFile(fileName: string): void {
    const fileUrl = `assets/downloads/${fileName}`;

    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();
        link.addEventListener('click', () => {
          window.URL.revokeObjectURL(url);
        });
      });
  }
}
