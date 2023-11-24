import { Component } from '@angular/core';

@Component({
  selector: 'app-drugs-page',
  templateUrl: './drugs-page.component.html',
  styleUrls: ['./drugs-page.component.scss'],
})
export class DrugsPageComponent {
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
