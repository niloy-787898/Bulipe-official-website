import {
  Directive,
  Input,
  ElementRef,
  Injectable,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { LanguageSwitcherService } from '../services/language-switcher.service';
import { Subscription } from 'rxjs';
import { TranslationModel } from '../_interface/translation.interface';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[voTranslator]',
})
export class VoTranslatorDirective {
  @Input() data: TranslationModel[] = [];
  private subscription: Subscription = new Subscription();
  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private el: ElementRef,
    private langService: LanguageSwitcherService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.subscription = this.langService.ls$.subscribe((res: any) => {
        const translatedContent = this.translateContent(this.data);
        this.el.nativeElement.innerHTML = translatedContent;
      });
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.subscription.unsubscribe();
    }
  }

 public translateContent(data: TranslationModel[]): string {
  if (this.isBrowser) {
    const ln = this.langService.getLanguage();
    if (Array.isArray(data)) {
      const translation = data.find((item) => item.ln === ln);
      if (translation) {
        return translation.content;
      } else {
        // Check if the language is set to English ('en') and return the English content
        const englishTranslation = data.find((item) => item.ln === 'en');
        if (englishTranslation) {
          return englishTranslation.content;
        } else {
          // If English translation is not available, return an empty string
          return '';
        }
      }
    }
  }
  // Return a default value if the translation is not found
  return 'Translation not available';
}

}
