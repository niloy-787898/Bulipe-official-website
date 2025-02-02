import {  Meta, Title } from '@angular/platform-browser';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-desktop-front',
  templateUrl: './desktop-front.component.html',
  styleUrls: ['./desktop-front.component.scss'],
})
export class DesktopFrontComponent implements OnInit {
  private isMobileResolution!: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private title: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth < 800) {
        this.isMobileResolution = true;
      } else {
        this.isMobileResolution = false;
      }
    }
  }

  public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }
}
