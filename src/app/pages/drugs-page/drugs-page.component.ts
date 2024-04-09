import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';
import { LanguageService } from 'src/app/services/language.service';

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
      'Клопидогрел',
      'Розувастатин',
      'Триметазидин',
      'Амлодипин',
      'Торасемид',
    ],
    'Неврология и психиатрия': [
      'Суматриптана сукцинат',
      'Амитриптилин',
      'Бетагистин',
      'Тизанидин',
      'Хлорпромазин',
    ],
    Онкология: ['Эверолимус', 'Нилотиниб', 'Эрлотиниб'],
    Гастроэнтерология: ['Метоклопрамид', 'Домперидон'],
    Иммунодепрессант: ['Микофенолат натрия', 'Микофенолата мофетил'],
    'Антивирусные и антиретро-вирусные средства': ['Дарунавир', 'Осельтмивир'],
    Астма: ['Сальбутамол', 'Фенотерол HBr'],
    Противотуберкулезные: ['Дигидрат аминосалицилата натрия', 'Изониазид'],
    Антикоагулянт: ['Габапентин'],
    Противорвотное: ['Домперидон'],
    'Трициклический антидепрессант': ['Амитриптилин'],
    Дерматология: ['Орнидазол'],
    'Спазмолитическое средство': ['Дротаверин', 'Мебеверин', 'Питофенон'],
    'Агент эректильной дисфункции': ['Тамсулозин'],
    'Противогрибковое средство': ['Вориконазол', 'Позаконазол'],
    Антибиотики: ['Моксифлоксацин'],
    'Противовоспалительное заболевание': [
      'Ацеклофенак',
      'Диклофенак',
      'Мелоксикам',
      'Ибупрофен',
    ],
    Антидиабетические: ['Метформин'],
    'Антихолинергический агент': ['Фенпивериния бромид'],
    'Аллергия и иммунология': ['Такролимус', ''],
    Остеопороз: ['Алендронат натрия'],
    Кальцимиметики: ['Цинакальцет'],
    Анальгетики: ['Парацетамол'],
  };
  medicationsEn = {
    Cardiology: [
      'Atorvastatin',
      'Clopidogrel',
      'Rosuvastatin',
      'Trimetazidine',
      'Amlodipine',
      'Torasemide',
    ],
    'Neurology and Psychiatry': [
      'Sumatriptan Succinate',
      'Amitriptyline',
      'Betahistine',
      'Tizanidine',
      'Chlorpromazine',
    ],
    Oncology: ['Everolimus', 'Nilotinib', 'Erlotinib'],
    Gastroenterology: ['Metoclopramide', 'Domperidone'],
    Immunodepressants: ['Mycophenolate Sodium', 'Mycophenolate Mofetil'],
    'Antiviral and Antiretroviral Agents': ['Darunavir', 'Oseltamivir'],
    Asthma: ['Salbutamol', 'Phenoterol HBr'],
    'Antituberculosis Agents': [
      'Sodium Aminosalicylate Dihydrate',
      'Isoniazid',
    ],
    Anticoagulant: ['Gabapentin'],
    Antiemetic: ['Domperidone'],
    'Tricyclic Antidepressant': ['Amitriptyline'],
    Dermatology: ['Ornidazole'],
    'Spasmolytic Agent': ['Drotaverine', 'Mebeverine', 'Pitofenone'],
    'Erectile Dysfunction Agent': ['Tamsulosin'],
    'Antifungal Agent': ['Voriconazole', 'Posaconazole'],
    Antibiotics: ['Moxifloxacin'],
    'Anti-inflammatory': [
      'Aceclofenac',
      'Diclofenac',
      'Meloxicam',
      'Ibuprofen',
    ],
    Antidiabetic: ['Metformin'],
    'Anticholinergic Agent': ['Phenpiverinium Bromide'],
    'Allergy and Immunology': ['Tacrolimus'],
    Osteoporosis: ['Alendronate Sodium'],
    Calcimimetics: ['Cinacalcet'],
    Analgesics: ['Paracetamol'],
  };
  medicationsCn = {
    心脏病学: [
      '阿托伐他汀',
      '氯吡格雷',
      '罗伐司汀',
      '曲美他嗪',
      '氨氯地平',
      '托拉塞米德',
    ],
    神经病学和精神病学: [
      '舒马曲坦琥珀酸盐',
      '阿米替林',
      '倍他司汀',
      '替扎尼定',
      '氯丙嗪',
    ],
    肿瘤学: ['依维莫司', '尼洛替尼', '厄洛替尼'],
    胃肠病学: ['多潘立酮', '美洛昔康', '多潘莫汀'],
    免疫抑制剂: ['吡拉酮钠', '吡拉酮酯'],
    抗病毒和抗逆转录病毒药物: ['达芦那韦', '奥司他韦'],
    哮喘: ['沙丁胺醇', '苯托溴铵'],
    抗结核药物: ['二水碳酸氨水杨酸钠', '异烟肼'],
    抗凝血剂: ['加巴喷丁'],
    止吐药: ['多潘立酮'],
    三环抗抑郁药: ['阿米替林'],
    皮肤病学: ['奥尼达唑'],
    解痉药: ['氟马酮', '美伯维林', '匹托妥酮'],
    勃起功能障碍药物: ['坦索洛辛'],
    抗真菌药物: ['伏立康唑', '泊沙康唑'],
    抗生素: ['莫西沙星'],
    抗炎药: ['阿司匹林', '双氯芬酸', '布洛芬'],
    抗糖尿病药物: ['二甲双胍'],
    抗胆碱能药物: ['氟溴芬酸铵'],
    过敏和免疫学: ['他克莫司'],
    骨质疏松症: ['阿伦酸钠'],
    钙调质剂: ['西那卡塞'],
    镇痛药: ['对乙酰氨基酚'],
  };

  selectedCategory: string = 'Кардиология';
  selectedMedication: string = '';

  constructor(public languageService: LanguageService) {}

  changeLanguage(lang: string) {
    this.languageService.setLanguage(lang);
  }
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
