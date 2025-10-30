import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Fix: Corrected import path for BlogService.
import { BlogService } from '../../services/blog.service';
// Fix: Corrected import path for BlogPost.
import { BlogPost } from '../../models/blog-post.model';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  // Fix: Corrected templateUrl to match component filename.
  templateUrl: './post.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  private slug = signal(this.route.snapshot.paramMap.get('slug'));
  post = computed(() => {
    const slug = this.slug();
    if (slug) {
      return this.blogService.getPostBySlug(slug)();
    }
    return undefined;
  });

  constructor() {
    effect(() => {
      const currentPost = this.post();
      if (currentPost) {
        const pageTitle = `${currentPost.title} | Marketer's Insight`;
        this.titleService.setTitle(pageTitle);
        this.metaService.updateTag({ name: 'description', content: currentPost.description });
        // Add other meta tags like Open Graph
        this.metaService.updateTag({ property: 'og:title', content: currentPost.title });
        this.metaService.updateTag({ property: 'og:description', content: currentPost.description });
        this.metaService.updateTag({ property: 'og:image', content: currentPost.thumbnailUrl });
      }
    });
  }
}