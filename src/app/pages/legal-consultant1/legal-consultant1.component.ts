import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'legal-consultant1',
  templateUrl: 'legal-consultant1.component.html',
  styleUrls: ['legal-consultant1.component.css'],
})
export class LegalConsultant1 {
  rawj6rl: string = ' '
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
