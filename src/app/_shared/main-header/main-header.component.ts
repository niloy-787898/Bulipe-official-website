import {
  AfterViewInit,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LanguageSwitcherService } from '../services/language-switcher.service';
import { Language } from '../_interface/language.interface';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent
  extends BaseComponent
  implements AfterViewInit, OnDestroy, OnInit
{
  dynamicStateKey = makeStateKey<any>('appMenus');
  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicDatabaseKey = 'app-main-menu';
  dynamicPageData: any;
  dynamicConstentData: any;

  isHamburgerActive: boolean = false;
  // Language accordian
  isAccordionOpen = false;
  selectedLanguage: any = ''; // Track the selected language
  languages: Language[] = [
    {
      key: 'en',
      icon: '',
      label: 'English',
      direction: 'ltr',
    },
    {
      key: 'bn',
      icon: '',
      label: 'বাংলা',
      direction: 'ltr',
    },
    {
      key: 'ar',
      icon: '',
      label: 'عربي',
      direction: 'rtl',
    },
  ];

  constructor(
    langService: LanguageSwitcherService,
    @Inject(PLATFORM_ID) platformId: any,
    transferState: TransferState,
    public route: ActivatedRoute,
    private router: Router
  ) {
    super(langService, platformId, transferState);
    this.component = this;
  }
  onCallNgOnInit() {
    this.onLanguageChange();
  }
  ngOnDestroy() {
    if (isPlatformServer(this.platformId)) {
      this.transferState.remove(this.dynamicStateKey);
      this.transferState.remove(this.dynamicStateConstentKey);
    }
  }

  onHamburgerAction(): boolean {
    return (this.isHamburgerActive = !this.isHamburgerActive);
  }
  toggleAccordions(index: number) {
    this.dynamicPageData.forEach(
      (appMenu: { expanded: boolean }, i: number) => {
        if (i === index) {
          appMenu.expanded = !appMenu.expanded;
        } else {
          appMenu.expanded = false;
        }
      }
    );
  }
  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }
  selectLanguage(language: any) {
    this.selectedLanguage = language;
    this.isAccordionOpen = false;
    this.langService.setLanguage(language);

    // Navigate to the route with the selected language key
    const navigationExtras: NavigationExtras = {
      queryParams: {}, // Add query parameters here if needed
      fragment: undefined,    // Add fragment if needed
      relativeTo: null, // If you're navigating relatively, specify the component here
      skipLocationChange: false // Change this to true if you want to skip adding the URL to history
    };

    const currentUrl = this.router.url; 
    const desiredPart = currentUrl.substring(3); 
    let url = `${language.key}/${desiredPart}`;
    this.router.navigate([url],navigationExtras);
    this.onLanguageChange();
  }
  navigateToSlugLink(slug: string) {
    if (slug.startsWith('http')) {
      window.location.href = slug; // External link, open in a new tab
    } else {
      this.router.navigateByUrl(slug); // Internal route, use Angular's Router
    }
  }
  //up down arrow code
  ngAfterViewInit(): void {
    // Only execute this on the browser
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollToTop();
    }
  }
  setupScrollToTop(): void {
    const scrollToTopElement = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
      if (scrollToTopElement) {
        if (window.scrollY > 300) {
          scrollToTopElement.classList.add('show');
        } else {
          scrollToTopElement.classList.remove('show');
        }
      }
    });

    scrollToTopElement?.addEventListener('click', () => {
      this.scrollToTop();
    });
  }
  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
 
}
