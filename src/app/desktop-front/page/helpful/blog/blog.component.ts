import { Component, OnInit, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { BlogCartContent } from 'src/app-data/model/blog-cart-content.model';
import { BaseComponent } from 'src/app/_shared/base/base.component';
import { LanguageSwitcherService } from 'src/app/_shared/services/language-switcher.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})

export class BlogComponent  extends BaseComponent
implements OnDestroy, OnInit{

  dynamicStateKey = makeStateKey<any>('blogCartContentData');
  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicDatabaseKey = 'blog-cart-data';
  dynamicPageData: any;
  dynamicFullPageData: any;
  dynamicConstentData: any;
  socialInfos: any ;

  constructor(
    langService: LanguageSwitcherService,
    @Inject(PLATFORM_ID) platformId: any,
    transferState: TransferState,
    public route: ActivatedRoute,
  ) {
    super(langService, platformId, transferState);
    this.component = this;
  }
  onCallNgOnInit() {
    this.onLanguageChange();
    this.socialInfos = this.dynamicFullPageData['social-data'];
    this.updateDisplayedPosts('recent');
  }
  ngOnDestroy() {
    if (isPlatformServer(this.platformId)) {
      this.transferState.remove(this.dynamicStateKey);
      this.transferState.remove(this.dynamicStateConstentKey);
    }
  }
  // Variables to hold the recent and popular blog posts
  recentPosts: BlogCartContent[] = [];
  popularPosts: BlogCartContent[] = [];

  // Variable to keep track of the active tab
  activeTab: 'recent' | 'popular' = 'recent';

  // Variable to keep track of how many posts to show initially
  postsToShow = 6;
  // Variable to keep track of whether we are loading more posts
  loadingMore = false;

  // Function to update displayed blog posts based on the selected tab
  updateDisplayedPosts(key: 'recent' | 'popular'): void {
    // Reset the postsToShow to 6 whenever a tab is switched
    this.postsToShow = 6;

    // Update the activeTab based on the clicked button
    this.activeTab = key;

    if (key === 'recent') {
      this.recentPosts = this.dynamicPageData
        .filter((post: BlogCartContent) => post.key === 'recent')
        .slice(0, this.postsToShow);
      this.popularPosts = []; // Clear popular posts
    } else if (key === 'popular') {
      this.popularPosts = this.dynamicPageData
        .filter((post: BlogCartContent) => post.key === 'popular')
        .slice(0, this.postsToShow);
      this.recentPosts = []; // Clear recent posts
    }
  }

  // Function to check if the posts array exists and is not empty
  postsExist(posts: BlogCartContent[] | undefined): boolean {
    return !!posts && posts.length > 0;
  }

  // Function to load more blog posts
  loadMorePosts(): void {
    // Set loadingMore to true before loading more posts
    this.loadingMore = true;

    // Simulate an asynchronous operation (e.g., fetching data from the server)
    // In a real scenario, you would fetch data from an API using HTTP request.
    setTimeout(() => {
      this.postsToShow += 6;
      // Update displayed posts based on the current active tab
      if (this.activeTab === 'recent') {
        this.recentPosts = this.dynamicPageData
          .filter((post: BlogCartContent) => post.key === 'recent')
          .slice(0, this.postsToShow);
      } else if (this.activeTab === 'popular') {
        this.popularPosts = this.dynamicPageData
          .filter((post: BlogCartContent) => post.key === 'popular')
          .slice(0, this.postsToShow);
      }

      // Set loadingMore back to false after loading more posts
      this.loadingMore = false;
    }, 1500); // Simulate a 1.5-second delay to demonstrate the loading animation
  }
  
}
