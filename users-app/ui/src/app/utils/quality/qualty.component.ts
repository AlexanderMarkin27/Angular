import { Component, Input } from "@angular/core";
import { Quality } from "src/app/models/quality.model";

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html'
})
export class QualityComponent {

  @Input()
  quality: Quality | undefined;

}