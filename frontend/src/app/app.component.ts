import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Traduzir pdf';
  selectedFiled: any = null;
  selectedFilePath: string = '';
  selectedFileB64: string = '';
  isFileImage = false;
  isFileDocument = false;

  onChooseFile(): void {
    const fileInput = document.querySelector<HTMLInputElement>('input[type="file"]');
    fileInput?.click();
  }

  oFileSelected(event: any): void {
    this.selectedFiled = event.target.files[0] ?? null;
    if (this.selectedFiled) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFiled);

      reader.onload = (e: any) => {
        const path = e.target?.result || '';
        this.selectedFilePath = path;
        this.selectedFileB64 = path.split(',')[1];

        if (path.includes('image')) {
          this.isFileImage = true;
          this.isFileDocument = false;
        } else {
          this.isFileImage = false;
          this.isFileDocument = true;
        }
      };
    }
  }
}

