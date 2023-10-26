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
  products: Product[] = [
    { name: 'Midostaurin', category: 'ONCOLOGY' },
    { name: 'Dactinomycin', category: 'ONCOLOGY' },
    { name: 'Doxorubicin', category: 'ONCOLOGY' },
    { name: 'Epirubicin', category: 'ONCOLOGY' },
    { name: 'Eribulin', category: 'ONCOLOGY' },
    { name: 'Ixabepilone/ Epothilone B', category: 'ONCOLOGY' },
    { name: 'Mitomycin', category: 'ONCOLOGY' },
    { name: 'Ridaforolimus', category: 'ONCOLOGY' },
    { name: 'Romidepsin', category: 'ONCOLOGY' },
    { name: 'Bleomycin', category: 'ONCOLOGY' },
    { name: 'Everolimus', category: 'ONCOLOGY' },
    { name: 'Temsirolimus', category: 'ONCOLOGY' },
    { name: 'Gemcitabine Hydrochloride', category: 'ONCOLOGY' },
    { name: 'Hydroxyurea', category: 'ONCOLOGY' },
    { name: 'IRINOTECAN HYDROCHLORIDE', category: 'ONCOLOGY' },
    { name: 'TEMOZOLAMIDE', category: 'ONCOLOGY' },
    { name: 'Cyclophosphamide (Sterile / NON STERILE)', category: 'ONCOLOGY' },
    { name: 'OXALAPLATIN', category: 'ONCOLOGY' },
    { name: 'PACLITAXEL', category: 'ONCOLOGY' },
    { name: 'Capacitabine', category: 'ONCOLOGY' },
    { name: 'Carboplatin', category: 'ONCOLOGY' },
    { name: 'Cisplatin', category: 'ONCOLOGY' },
    { name: 'DACARBAZINE', category: 'ONCOLOGY' },
    { name: 'Anastrozole', category: 'ONCOLOGY' },
    { name: 'Tamoxifen Citrate', category: 'ONCOLOGY' },
    { name: 'Letrozole', category: 'ONCOLOGY' },
    { name: 'Bicalutamide', category: 'ONCOLOGY' },
    { name: 'Methotrexate', category: 'ONCOLOGY' },
    { name: 'Gefitinib', category: 'ONCOLOGY' },
    { name: 'Imatinib Mesylate', category: 'ONCOLOGY' },
    { name: 'Bortezomib', category: 'ONCOLOGY' },
    { name: 'Erlotinib hydrochloride', category: 'ONCOLOGY' },
    { name: 'Capecitabine', category: 'ONCOLOGY' },
    { name: 'Regorafenib', category: 'ONCOLOGY' },
    { name: 'Bosutinib Monohydrate', category: 'ONCOLOGY' },
    { name: 'Lapatinib Ditosylate Monohydrate', category: 'ONCOLOGY' },
    { name: 'Sorafenib Hemi-Tosylate', category: 'ONCOLOGY' },
    { name: 'Imatinib Mesylate Form-A and B', category: 'ONCOLOGY' },
    { name: 'Ruxolitinib', category: 'ONCOLOGY' },
    { name: 'Pazopanib', category: 'ONCOLOGY' },
    { name: 'CabazitaxeL', category: 'ONCOLOGY' },
    { name: 'Afatinib Dimaleate', category: 'ONCOLOGY' },
    { name: 'Erlotinib', category: 'ONCOLOGY' },
    { name: 'Nilotinib', category: 'ONCOLOGY' },
    { name: 'Dabrafenib Mesylate', category: 'ONCOLOGY' },
    { name: 'Palbociclib', category: 'ONCOLOGY' },
    { name: 'Pemetrexed Disodium Heptahydrate', category: 'ONCOLOGY' },
    { name: 'Thiotepa', category: 'ONCOLOGY' },
    { name: 'Dasatinib', category: 'ONCOLOGY' },
    { name: 'Trabectedin', category: 'ONCOLOGY' },
    { name: 'Afatinib Dimaleate Monohydrate', category: 'ONCOLOGY' },
    { name: 'Axitinib', category: 'ONCOLOGY' },
    { name: 'Alectinib hydrochloride', category: 'ONCOLOGY' },
    { name: 'Abiraterone Acetate', category: 'ONCOLOGY' },
    { name: 'Bendamustine HCL', category: 'ONCOLOGY' },
    { name: 'Bicalutamide', category: 'ONCOLOGY' },
    { name: 'Carmustine', category: 'ONCOLOGY' },
    { name: 'Clofarabine', category: 'ONCOLOGY' },
    { name: 'Crizotinib', category: 'ONCOLOGY' },
    { name: 'Cyclophospamide Monohydrate', category: 'ONCOLOGY' },
    { name: 'Cyclophospamide', category: 'ONCOLOGY' },
    { name: 'Decitabine', category: 'ONCOLOGY' },
    { name: 'Docetaxel Anhydrous', category: 'ONCOLOGY' },
    { name: 'Docetaxel Trihydrate', category: 'ONCOLOGY' },
    { name: 'Erlotinib HCL', category: 'ONCOLOGY' },
    { name: 'Gefitinib', category: 'ONCOLOGY' },
    { name: 'Gemcitabine HCl', category: 'ONCOLOGY' },
    { name: 'Imatinib Mesylate', category: 'ONCOLOGY' },
    { name: 'Irinotechan HCL', category: 'ONCOLOGY' },
    { name: 'Irinotechan HCL trihydrate', category: 'ONCOLOGY' },
    { name: 'Ixabepilone', category: 'ONCOLOGY' },
    { name: 'Lenalidomide', category: 'ONCOLOGY' },
    { name: 'Nilotinib HCL', category: 'ONCOLOGY' },
    { name: 'Pazopanib HCL', category: 'ONCOLOGY' },
    { name: 'Pemetrexed Disodium Hemipentahydrate', category: 'ONCOLOGY' },
    { name: 'Plerixafor', category: 'ONCOLOGY' },
    { name: 'Pomalidomide', category: 'ONCOLOGY' },
    { name: 'Ruxolitinib Phosphate', category: 'ONCOLOGY' },
    { name: 'Sorafenib', category: 'ONCOLOGY' },
    { name: 'Topotecan HCL', category: 'ONCOLOGY' },
    { name: 'Lapatinib', category: 'ONCOLOGY' },
    { name: 'Lenvatinib', category: 'ONCOLOGY' },
    { name: 'Ribociclib Succinate', category: 'ONCOLOGY' },
    { name: 'Azacitidine', category: 'ONCOLOGY' },
    { name: 'Levothyroxine', category: 'ONCOLOGY' },
    { name: 'Idelalisib AMP', category: 'ONCOLOGY' },
    { name: 'Neratinib AMP.', category: 'ONCOLOGY' },
    { name: 'Olaparib-M', category: 'ONCOLOGY' },
    { name: 'Palbociclib-A', category: 'ONCOLOGY' },
    { name: 'Relugolix', category: 'ONCOLOGY' },
    { name: 'Ribociclib-Novel', category: 'ONCOLOGY' },
  ];
  filteredProducts: Product[] = [];
  searchText: string = '';
  first: number = 0;
  rows: number = 10;

  constructor() {}
  ngOnInit() {
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
