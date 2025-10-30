import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
// Fix: Corrected import path for BlogService.
import { BlogService } from '../../services/blog.service';
// Fix: Corrected import path for BlogCardComponent.
import { BlogCardComponent } from '../../components/blog-card/blog-card.component';

@Component({
  selector: 'app-home',
  // Fix: Corrected templateUrl to match component filename.
  templateUrl: './home.component.html',
  imports: [BlogCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private blogService = inject(BlogService);
  posts = this.blogService.getPosts();
}