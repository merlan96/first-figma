import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LegalConsultant1 } from './legal-consultant1.component'

const routes = [
  {
    path: '',
    component: LegalConsultant1,
  },
]

@NgModule({
  declarations: [LegalConsultant1],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LegalConsultant1],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LegalConsultant1Module {}
