import { Component, OnInit } from "@angular/core";
import { Router, ActivationEnd } from "@angular/router";
import { Title, Meta } from "@angular/platform-browser";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  routerPage: any;

  constructor(
    private _router: Router,
    private _title: Title,
    private _meta: Meta
  ) {
    this.getDataRoute().subscribe(e => {
      this.routerPage = e;
    });
  }

  ngOnInit() { }

  getDataRoute() {
    return this._router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),

      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }
}
