import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { HistogramComponent } from '../histogram/histogram.component'; // Importa el componente del histograma
import { AuthService } from '../../services/auth.service';
import { PlayerDTO } from '../../DTO/PlayerDTO';

// Definir los tipos para los elementos
interface ElementStat {
  gd: number;
  cs: number;
  csj: number;
  xp: number;
}

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule, FormsModule, HistogramComponent],
})
export class DashboardComponent {
  playerObjects: PlayerDTO[] = []; // Para guardar los datos completos de los jugadores
  players: string[] = [];         // Para guardar los nicks de los jugadores

  minutes = Array.from({ length: 3 }, (_, i) => (i + 1) * 10); // Minutos: 10, 20, 30
  selectedPlayer = '';
  selectedRole = '';
  selectedMinute = 10;
  selectedHistogramType: string = 'gd'; // Tipo de histograma por defecto
  histogramData: any = null;
  isLoading = false;

  // Opciones para el tipo de histograma
  histogramTypes = [
    { value: 'gd', label: 'Gold Difference (GD)' },
    { value: 'xp', label: 'Experience (XP)' },
    { value: 'cs', label: 'Creep Score (CS)' },
    { value: 'csj', label: 'Jungle Creep Score (JCS)' },
  ];

  constructor(private dataService: ApiService, private authService: AuthService) {
    this.authService.authenticateAndGetToken();
  }

  getPlayerRole(playerNick: string): string {
    const player = this.playerObjects.find(p => p.nick === playerNick);
    return player ? player.role : ''; // Asegúrate de que 'role' exista en PlayerDTO
  }

  ngOnInit(): void {
    this.loadPlayers();
  }
  private getBinSize(): number {
    switch (this.selectedHistogramType) {
      case 'gd':
        return this.selectedMinute <= 10 ? 200 : this.selectedMinute <= 20 ? 500 : 600;
      case 'xp':
        return this.selectedMinute <= 10 ? 200 : this.selectedMinute <= 20 ? 500 : 500;
      case 'cs':
        return this.selectedMinute <= 10 ? 5 : this.selectedMinute <= 20 ? 10 : 20;
      case 'csj':
        return this.selectedMinute <= 10 ? 5 : this.selectedMinute <= 20 ? 10 : 10;
      default:
        return 100; // Bin por defecto si no se encuentra un tipo válido
    }
  }
  

  loadPlayers(): void {
    this.dataService.getPlayers().subscribe(
      (data) => {
        this.playerObjects = data; // Guarda los datos completos
        this.players = this.playerObjects.map((player) => player.nick); // Extrae los nicks
        console.log(this.players); // Verifica que los nicks se cargaron correctamente
      },
      (error) => {
        console.error('Error al cargar los jugadores:', error);
      }
    );
  }
  onHistogramTypeChange(): void {
    console.log(`Selected histogram type changed to: ${this.selectedHistogramType}`);
    this.loadData(); // Recarga los datos con el nuevo tipo de histograma
  }

  loadData() {
    if (!this.selectedPlayer || !this.selectedMinute) {
      console.warn('Player or Minute not selected');
      return;
    }

    this.isLoading = true;

    this.dataService.getData(this.selectedPlayer, this.selectedMinute).subscribe(
      (response) => {
        console.log(response);
        this.isLoading = false;
        this.selectedRole = this.getPlayerRole(this.selectedPlayer);
        const selectedStat = this.selectedHistogramType; // Tipo de estadística seleccionada (GD, XP, etc.)
        const statValues = response.element.map((item: ElementStat) => item[selectedStat as keyof ElementStat]);

        const binSize = this.getBinSize(); // Tamaño de cada intervalo (bin)
        const intervals = this.calculateIntervals(statValues, binSize);

        // Configurar los datos para el histograma
        this.histogramData = {
          labels: intervals.map((interval) => {
            const mean = (interval.min + interval.max) / 2; // Calcula la media del intervalo
            return mean.toFixed(2); // Redondea la media a dos decimales
          }),
          datasets: [
            {
              label: `Frequency of ${selectedStat.toUpperCase()}`,
              data: intervals.map((interval) => interval.count), // Frecuencias de cada intervalo
              backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo de las barras
              borderColor: 'rgba(54, 162, 235, 1)', // Color del borde de las barras
              borderWidth: 1,
            },
          ],
        };
      },
      (error) => {
        console.error('Error loading data:', error);
        this.isLoading = false;
      }
    );
  }

  // Función para calcular los intervalos y las frecuencias
  private calculateIntervals(values: number[], binSize: number): { min: number; max: number; count: number }[] {
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const intervals = [];

    // Calcular los intervalos en función del tamaño de los bins
    for (let start = minValue; start <= maxValue; start += binSize) {
      const end = start + binSize;
      const count = values.filter((value) => value >= start && value < end).length;
      intervals.push({ min: start, max: end, count });
    }

    return intervals;
  }
}
