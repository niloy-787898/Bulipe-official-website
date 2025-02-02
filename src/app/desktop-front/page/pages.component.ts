import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const currentUrl = this.router.url; 
    const desiredPart = currentUrl.substring(currentUrl.indexOf('/page')); 
    let url = `en${desiredPart}`;
    this.router.navigate([url]);
  }

}
