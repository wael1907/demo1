import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteRoutingModule } from './quote-routing.module';
import { QuoteComponent } from './quote.component';
import {
  DropdownMenusModule,
  WidgetsModule,
} from '../../../_metronic/partials';
import { SharedModule } from '../../../_metronic/shared/shared.module';
import { LanguagesComponent } from './languages/languages.component';
import { QuoteEditComponent } from './edit/edit.component';

import { CardsModule } from "../../../_metronic/partials/content/cards/cards.module";

@NgModule({
    declarations: [QuoteComponent,
        LanguagesComponent,QuoteEditComponent
    ],
    imports: [
        CommonModule,
        QuoteRoutingModule,
        DropdownMenusModule,
        WidgetsModule,
        SharedModule,
        CardsModule
    ]
})
export class QuoteModule {}
