import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule 
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchTerm: string = ''; // Propiedad para almacenar el término de búsqueda

  onSubmit() {
    // Aquí puedes realizar la lógica para utilizar searchTerm, por ejemplo:

    let partes = this.searchTerm.split('#');
    console.log(partes);
    // Puedes implementar una función para buscar usando this.searchTerm
    // por ejemplo: this.searchService.search(this.searchTerm);
  }
}
