import { Component,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'blog'
  constructor(
    private vcf: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {

  }

  async loadAdmin(){
    this.vcf.clear();
    const { AdminlistComponent} = await import('./adminlist/adminlist.component');
    this.vcf.createComponent(
      this.cfr.resolveComponentFactory(AdminlistComponent)
    )
  }

  async loadUser(){
    this.vcf.clear();
    const { UserlistComponent}  = await import('./userlist/userlist.component');
    this.vcf.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent)
    )
  }

}
