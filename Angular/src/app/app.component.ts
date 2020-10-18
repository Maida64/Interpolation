import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";
import {
  HermiteInterpolation,
  LinearInterpolation,
  Lagrange
} from "interpolations";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public lineChartData: ChartDataSets[] = [
    { data: [], label: "hermite" },
    { data: [], label: "linear" },
    { data: [], label: "lagrange" }
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: "black",
      backgroundColor: "rgba(255,0,0,0.3)"
    }
  ];
  public lineChartLegend = true;
  public lineChartType = "line";
  public lineChartPlugins = [];

  constructor() {}

  ngOnInit() {
    const hermite = new HermiteInterpolation(0, 5, 1, 10, 0, -30);
    const linear = new LinearInterpolation(0, 5, 3, 7);
    const lagrange = new Lagrange([0,3,4,5], [0,-3,3,0]);
    for (let i = 0; i < 5; i += 0.1) {
      this.lineChartLabels.push(i + "");
      this.lineChartData[0].data.push(hermite.eval(i));
      this.lineChartData[1].data.push(linear.eval(i));
      this.lineChartData[2].data.push(lagrange.eval(i));
    }
  }
}
