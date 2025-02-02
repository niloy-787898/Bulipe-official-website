import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { CORE_SERVICES_CONTENT_DATA } from 'src/app-data/data/core-service-content.data';
import { SERVICES_CONTENT_DATA } from 'src/app-data/data/services-content.data';
import { BaseComponent } from '../base/base.component';
import { LanguageSwitcherService } from '../services/language-switcher.service';
import { ActivatedRoute } from '@angular/router';

const SERVICES_TITLE_INFO_KEY = makeStateKey<any>('servicesTitleInfo');
const CORE_SERVICES_KEY = makeStateKey<any>('coreServices');

@Component({
  selector: 'app-core-service',
  templateUrl: './core-service.component.html',
  styleUrls: ['./core-service.component.scss'],
})
export class CoreServiceComponent
  extends BaseComponent
  implements AfterViewInit, OnDestroy, OnInit
{
  @ViewChild('animationCanvas', { static: true }) canvasRef: ElementRef;
  private ctx: CanvasRenderingContext2D;
  private image: HTMLImageElement;
  private animationSpeed = 25;
  private rotationAngle = 0;

  activeId: number | undefined;
  isActive: boolean = false;
  rightCartTop: string = '30%';

  dynamicStateKey = makeStateKey<any>('coreServices');
  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicDatabaseKey = 'core-service-section-data';
  dynamicPageData: any;
  dynamicConstentData: any;

  constructor(
    langService: LanguageSwitcherService,
    @Inject(PLATFORM_ID) platformId: any,
    transferState: TransferState,
    public route: ActivatedRoute
  ) {
    super(langService, platformId, transferState);
    this.component = this;
  }
  onCallNgOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.showRightCart(1);
      this.scrollHandler();
      const line = document.querySelector('.lineMain') as HTMLElement;
      line.style.display = 'block';
      const timeline = document.querySelector('.timeline') as HTMLElement;
      timeline.classList.add('active');
      window.addEventListener('scroll', () => this.scrollHandler());

      // Load the image
      this.image = new Image();
      this.image.src = '../../../../assets/download-_1_.jpg'; // Replace 'your_image.png' with the correct path to your PNG image
    }
    this.onLanguageChange();
  }
  ngOnDestroy() {
    if (isPlatformServer(this.platformId)) {
      this.transferState.remove(this.dynamicStateKey);
      this.transferState.remove(this.dynamicStateConstentKey);
    }
  }

  showRightCart(leftCartId: number): void {
    this.activeId = leftCartId;
    this.isActive = true;
  }
  scrollHandler(): void {
    if (isPlatformBrowser(this.platformId)) {
      const leftCarts = document.querySelectorAll(
        '.left-cart-view .cart'
      ) as NodeListOf<HTMLElement>;
      const rightCarts = document.querySelectorAll(
        '.right-cart-view .cart'
      ) as NodeListOf<HTMLElement>;
      const timeline = document.querySelector('.timeline') as HTMLElement;
      const rightCartView = document.querySelector(
        '.right-cart-view'
      ) as HTMLElement;
      const line = document.querySelector('.lineMain') as HTMLElement;

      line.style.bottom = `calc(100% - 20px)`;
      let prevScrollY = window.scrollY;
      let up: boolean, down: boolean;
      let full = false;
      let set = 0;
      const targetY = window.innerHeight * 0.8;

      const scrollHandler = () => {
        const { scrollY } = window;
        up = scrollY < prevScrollY;
        down = !up;
        const timelineRect = timeline.getBoundingClientRect();
        const lineRect = line.getBoundingClientRect();

        const dist = targetY - timelineRect.top;

        if (down && !full) {
          set = Math.max(set, dist);
          line.style.bottom = `calc(100% - ${set}px)`;
        }

        if (dist > timeline.offsetHeight + 50 && !full) {
          full = true;
          line.style.bottom = `-50px`;
        }

        leftCarts.forEach((item: HTMLElement) => {
          const rect = item.getBoundingClientRect();
          const targetY = window.innerHeight * 0.8;

          if (rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add('show-me');
          }
        });

        const hideRightCarts = () => {
          const lineRect = line.getBoundingClientRect();
          const initialLineHeight = lineRect.height;

          if (initialLineHeight < 500) {
            rightCartView.style.visibility = 'hidden';
            rightCarts.forEach((item: HTMLElement) => {
              item.classList.remove('show-me');
            });
          } else {
            rightCartView.style.visibility = 'visible';
            rightCarts.forEach((item: HTMLElement) => {
              item.classList.add('show-me');
            });
          }
        };

        hideRightCarts();

        // Hide or show the right cart view based on the current timeline section's visibility
        const timelineActive = dist < timeline.offsetHeight + 50;
        if (timelineActive) {
          timeline.classList.add('active');
          this.rightCartTop = '30%'; // Set the top position for the right cart view to 30%
        } else {
          timeline.classList.remove('active');
          this.rightCartTop = '100%'; // Set the top position for the right cart view to 100%
        }

        prevScrollY = window.scrollY;
      };

      scrollHandler();
      window.addEventListener('scroll', scrollHandler);
    }
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // All the code inside this block will be executed in the browser environment
      this.ctx = this.canvasRef.nativeElement.getContext('2d');

      // Start the animation once the image is loaded
      this.image.onload = () => this.drawAnimation();
    }
  }
  drawAnimation() {
    // Clear the canvas
    this.ctx.clearRect(
      0,
      0,
      this.canvasRef.nativeElement.width,
      this.canvasRef.nativeElement.height
    );

    // Calculate the center of the canvas
    const centerX = this.canvasRef.nativeElement.width / 2;
    const centerY = this.canvasRef.nativeElement.height / 2;

    // Save the current context state
    this.ctx.save();

    // Create a circular clipping path to apply the border radius
    const borderRadius = 100; // Adjust the value to set the radius in percentage (0 to 100)
    this.ctx.beginPath();
    this.ctx.arc(
      centerX,
      centerY,
      Math.min(centerX, centerY) * (borderRadius / 100),
      0,
      2 * Math.PI
    );
    this.ctx.clip();

    // Draw the image at the center with the inner element rotated and clipped
    this.ctx.translate(centerX, centerY);
    this.ctx.rotate(this.degToRad(this.rotationAngle));
    this.ctx.drawImage(
      this.image,
      -this.image.width / 2,
      -this.image.height / 2
    );

    // Restore the original context state, which removes the clipping path
    this.ctx.restore();

    // Update the rotation angle for the next frame
    this.rotationAngle = (this.rotationAngle + 1) % 360;

    // Call the function again after a short delay to create the animation loop
    setTimeout(() => this.drawAnimation(), this.animationSpeed);
  }
  // Utility function to convert degrees to radians
  degToRad(degrees: number): number {
    return degrees * (Math.PI / 180);
  }
}
