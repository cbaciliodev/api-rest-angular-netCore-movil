/**
 * Modulos
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/**
 * Componentes
 */
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    RightSidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    RightSidebarComponent,
    FooterComponent
  ]
})
export class SharesModule { }