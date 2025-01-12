import { Component, Input, OnChanges, SimpleChanges, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, BarController } from 'chart.js'; 

// Registrar las escalas y controladores necesarios
Chart.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend);
Chart.defaults.plugins.legend.display = false; // Desactiva la leyenda globalmente
@Component({
    selector: 'app-histogram',
    templateUrl: './histogram.component.html',
    styleUrls: ['./histogram.component.scss'],
    imports: [CommonModule]
})
export class HistogramComponent implements OnChanges, AfterViewInit {
  @Input() data: any;  // Recibe los datos del componente padre (DashboardComponent)
  @Input() playerName: string = ''; // Nombre del jugador
  @Input() playerRole: string = ''; // Rol del jugador
  @Input() selectedMinute: number = 0;  // Minuto seleccionado
  @Input() selectedStat: string = '';  // Minuto seleccionado
  @ViewChild('histogramCanvas') chartCanvas: ElementRef | undefined;  // Usamos ViewChild para obtener la referencia al canvas
  private chart: any;

  ngAfterViewInit(): void {
    if (this.data && this.chartCanvas) {
      this.createChart();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data && this.chartCanvas) {
      this.createChart();
    }
  }

  private createChart(): void {
    const ctx = this.chartCanvas?.nativeElement.getContext('2d');  // Usar el contexto del canvas

    if (!ctx) {
      console.error('No canvas context found');
      return;
    }

    if (this.chart) {
      this.chart.destroy();  // Destruir gráfico anterior
    }
    // Calcular el valor medio en el eje X
    const xValues = this.data.labels.map((label: string) => parseFloat(label));
    const meanXValue = xValues.reduce((sum: number, val: number) => sum + val, 0) / xValues.length;

    const config: any = {
    type: 'bar',
    data: {
      labels: this.data.labels, // Etiquetas de los intervalos
      datasets: [
        {
          label: 'Frequency',
          data: this.data.datasets[0].data, // Datos de las frecuencias
          backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color de las barras
          borderColor: 'rgba(75, 192, 192, 1)', // Color del borde
          borderWidth: 1, // Ancho del borde
          borderRadius: 5, // Bordes redondeados en las barras
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          legend: { display: false }, // Oculta la leyenda de la gráfica
          title: { display: false },  // Oculta el título de la gráfica
            
        },
        tooltip: {
          enabled: true,
          bodyFont: {
            color: '#ffffff',
            family: 'Arial, sans-serif',
          },
        },

      },
      interaction: {
        mode: null,  // Desactiva el hover (sin interacción)
      },
      scales: {
        x: {
          type:'linear',
          beginAtZero: true,
          ticks: {
            color: '#ffffff',
            font: {
              size: 12,
              family: 'Arial, sans-serif',
            },
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: '#ffffff',
            font: {
              size: 12,
              family: 'Arial, sans-serif',
            },
          },
        },
      },
    },
    plugins: [
      {
        id: 'meanLineXPlugin',
        beforeDraw: (chart: any) => {
          const ctx = chart.ctx;
          const xScale = chart.scales.x;
          const yScale = chart.scales.y;
          const xValue = xScale.getPixelForValue(meanXValue);
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(xValue, yScale.top);
          ctx.lineTo(xValue, yScale.bottom);
          ctx.lineWidth = 2;
          ctx.strokeStyle = 'red';
          ctx.stroke();
          ctx.fillStyle = 'red';
          ctx.font = '12px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(`Mean: ${meanXValue.toFixed(2)}`, xValue, yScale.top - 10);
          ctx.restore();
        },
      },
    ],
  };

    this.chart = new Chart(ctx, config);  // Crear el gráfico
    this.chart.update();
  }
}
