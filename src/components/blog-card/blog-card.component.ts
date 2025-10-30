import { ChangeDetectionStrategy, Component, input } from '@angular/core';
// Fix: Corrected import path for BlogPost.
import { BlogPost } from '../../models/blog-post.model';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-blog-card',
  // Fix: Corrected templateUrl to match component filename.
  templateUrl: './blog-card.component.html',
  imports: [RouterLink, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogCardComponent {
  post = input.required<BlogPost>();
}