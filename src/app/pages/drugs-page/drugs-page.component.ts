import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

interface Medications {
  Кардиология: string[];
  'Неврология и психиатрия': string[];
  Онкология: string[];
  Гастроэнтерология: string[];
  Иммунодепрессант: string[];
  'Антивирусные и антиретро-вирусные средства': string[];
  Астма: string[];
  Противотуберкулезные: string[];
  Антикоагулянт: string[];
  Противорвотное: string[];
  'Трициклический антидепрессант': string[];
  Дерматология: string[];
  'Спазмолитическое средство': string[];
  'Агент эректильной дисфункции': string[];
  'Противогрибковое средство': string[];
  Антибиотики: string[];
  'Противовоспалительное заболевание': string[];
  Антидиабетические: string[];
  'Антихолинергический агент': string[];
  'Аллергия и иммунология': string[];
  Остеопороз: string[];
  Кальцимиметики: string[];
  Анальгетики: string[];
  [key: string]: string[];
}
@Component({
  selector: 'app-drugs-page',
  templateUrl: './drugs-page.component.html',
  styleUrls: ['./drugs-page.component.scss'],
})
export class DrugsPageComponent {
  medications: Medications = {
    Кардиология: [
      'Аторвастатин',
      'Розувастатин',
      'Клопидогрел',
      'Ибупрофен',
      'Триметазидин',
      'Амлодипин',
      'Торсемид',
    ],
    'Неврология и психиатрия': [
      'Суматриптана сукцинат',
      'Габапентин',
      'Амитриптилин',
      'Бетагистин',
      'Тизанидин',
      'Хлорпромазин',
    ],
    Онкология: [
      'Эверолимус',
      'Дарунавир',
      'Мелоксикам',
      'Нилотиниб',
      'Эрлотиниб',
    ],
    Гастроэнтерология: [
      'Метоклопрамид',
      'Дигидрат аминосалицилата натрия',
      'Домперидон',
      'Микофенолат натрия',
      'Микофенолата мофетила',
      'Изониазид',
      'Домперидон',
      'Меклофенамовая кислота',
    ],
    Иммунодепрессант: ['Микофенолат натрия', 'Дарунавир', 'Осельтмивир'],
    'Антивирусные и антиретро-вирусные средства': ['Дарунавир', 'Осельтмивир'],
    Астма: ['Сальбутамол', 'Фенотерол HBr'],
    Противотуберкулезные: ['Дигидрат аминосалицилата натрия', 'Изониазид'],
    Антикоагулянт: ['Клопидогрел'],
    Противорвотное: ['Метоклопрамид', 'Домперидон'],
    'Трициклический антидепрессант': ['Амитриптилин'],
    Дерматология: ['Орнидазол', 'Позаконазол', 'Диклофенак'],
    'Спазмолитическое средство': ['Дротаверин', 'Мебеверин'],
    'Агент эректильной дисфункции': ['Тамсулозин'],
    'Противогрибковое средство': ['Вориконазол', 'Позаконазол'],
    Антибиотики: ['Моксифлоксацин'],
    'Противовоспалительное заболевание': ['Ацеклофенак', 'Диклофенак'],
    Антидиабетические: ['Метформин'],
    'Антихолинергический агент': ['Фенпивериния бромид'],
    'Аллергия и иммунология': ['Питофенон'],
    Остеопороз: ['Алендронат натрия'],
    Кальцимиметики: ['Цинакальцет'],
    Анальгетики: ['Парацетамол'],
  };

  selectedCategory: string = 'Кардиология';

  selectedMedication: string = '';

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
  getCategories(): SelectItem[] {
    return Object.keys(this.medications).map((category) => ({
      label: category,
      value: category,
    }));
  }
  getMedicationsInCategory(): string[] {
    return this.selectedCategory ? this.medications[this.selectedCategory] : [];
  }
  getMedications(): SelectItem[] {
    return this.selectedCategory
      ? this.medications[this.selectedCategory].map((medication) => ({
          label: medication,
          value: medication,
        }))
      : [];
  }
}
