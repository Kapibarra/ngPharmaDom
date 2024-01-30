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
  medicationsEn = {
    Cardiology: [
      'Atorvastatin',
      'Rosuvastatin',
      'Clopidogrel',
      'Ibuprofen',
      'Trimetazidine',
      'Amlodipine',
      'Torsemide',
    ],
    'Neurology and Psychiatry': [
      'Sumatriptan succinate',
      'Gabapentin',
      'Amitriptyline',
      'Betahistine',
      'Tizanidine',
      'Chlorpromazine',
    ],
    Oncology: [
      'Everolimus',
      'Darunavir',
      'Meloxicam',
      'Nilotinib',
      'Erlotinib',
    ],
    Gastroenterology: [
      'Metoclopramide',
      'Amino salicylate sodium dihydrate',
      'Domperidone',
      'Mycophenolate sodium',
      'Mycophenolate mofetil',
      'Isoniazid',
      'Domperidone',
      'Meclofenamic acid',
    ],
    Immunosuppressant: ['Mycophenolate sodium', 'Darunavir', 'Oseltamivir'],
    'Antiviral and Antiretroviral Agents': ['Darunavir', 'Oseltamivir'],
    Asthma: ['Salbutamol', 'Fenoterol HBr'],
    'Antitubercular Agents': ['Amino salicylate sodium dihydrate', 'Isoniazid'],
    Anticoagulant: ['Clopidogrel'],
    Antiemetic: ['Metoclopramide', 'Domperidone'],
    'Tricyclic Antidepressant': ['Amitriptyline'],
    Dermatology: ['Ornidazole', 'Posaconazole', 'Diclofenac'],
    Antispasmodic: ['Drotaverine', 'Mebeverine'],
    'Erectile Dysfunction Agent': ['Tamsulosin'],
    'Antifungal Agent': ['Voriconazole', 'Posaconazole'],
    Antibiotics: ['Moxifloxacin'],
    'Anti-Inflammatory Agents': ['Aceclofenac', 'Diclofenac'],
    Antidiabetic: ['Metformin'],
    'Anticholinergic Agent': ['Fenpiverinium bromide'],
    'Allergy and Immunology': ['Pitofenone'],
    Osteoporosis: ['Alendronate sodium'],
    Calcimimetics: ['Cinacalcet'],
    Analgesics: ['Paracetamol'],
  };
  medicationsCn = {
    心脏病学: [
      '阿托伐他汀',
      '瑞舒伐他汀',
      '氯吡格雷',
      '布洛芬',
      '曲美他嗪',
      '氨氯地平',
      '托塞米特',
    ],
    神经病学和精神病学: [
      '舍曲坦琼酸盐',
      '加巴喷丁',
      '阿米替林',
      '贝他组胺',
      '替扎尼丁',
      '氯丙嗪',
    ],
    肿瘤学: ['依维莫司', '达瑞那韦', '美洛昔康', '尼洛替尼', '厄洛替尼'],
    胃肠病学: [
      '多巴胺',
      '氨基水杨酸钠二水合物',
      '多潘立酮',
      '麦考酚酸钠',
      '麦考酚酸酯',
      '异烟肼',
      '多潘立酮',
      '美克洛酚酸',
    ],
    免疫抑制剂: ['麦考酚酸钠', '达瑞那韦', '奥司他韦'],
    抗病毒和抗逆转录病毒药物: ['达瑞那韦', '奥司他韦'],
    哮喘: ['沙丁胺醇', '非诺特罗 HBr'],
    抗结核药物: ['氨基水杨酸钠二水合物', '异烟肼'],
    抗凝血剂: ['氯吡格雷'],
    止吐药: ['多潘立酮', '麦考酚酸钠'],
    三环抗抑郁药: ['阿米替林'],
    皮肤科: ['奥尼达唑', '泊沙康唑', '双氯芬酸'],
    解痉药: ['丙哌酮', '美贝韦林'],
    勃起功能障碍药物: ['坦索洛辛'],
    抗真菌药物: ['伏立康唑', '泊沙康唑'],
    抗生素: ['莫西沙星'],
    抗炎药: ['乙酰氨基酚', '双氯芬酸'],
    抗糖尿病药物: ['二甲双胍'],
    抗胆碱药物: ['溴隐亭溴化物'],
    过敏和免疫学: ['匹托酚酮'],
    骨质疏松症: ['阿伦膦酸钠'],
    钙调素: ['西那卡塞'],
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
