import { Injectable, computed, signal } from '@angular/core';
// Fix: Corrected import path for BlogPost.
import { BlogPost } from '../models/blog-post.model';

const MOCK_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'the-art-of-email-segmentation',
    title: 'The Art of Email Segmentation: A Deep Dive',
    description: 'Discover how to boost engagement and conversions by sending the right message to the right people at the right time.',
    content: `
      <p>Email segmentation is no longer a "nice-to-have" in the world of digital marketing; it's a fundamental necessity. The one-size-fits-all approach to email blasts is dead. Today's consumers expect personalized, relevant content that speaks directly to their needs and interests.</p>
      <h2 class="text-2xl font-bold mt-6 mb-4 text-white">Why Segment Your Email List?</h2>
      <p>The benefits are numerous:</p>
      <ul class="list-disc list-inside space-y-2 my-4">
        <li><strong>Higher Open Rates:</strong> A relevant subject line is more likely to be clicked.</li>
        <li><strong>Increased Click-Through Rates:</strong> Content tailored to a segment's interest drives more engagement.</li>
        <li><strong>Lower Unsubscribe Rates:</strong> When you send relevant content, people are less likely to opt out.</li>
        <li><strong>Improved Deliverability:</strong> Higher engagement signals to ISPs that your content is valuable.</li>
      </ul>
      <h2 class="text-2xl font-bold mt-6 mb-4 text-white">Getting Started with Segmentation</h2>
      <p>You can segment your audience based on various criteria:</p>
      <blockquote class="border-l-4 border-slate-700 pl-4 py-2 my-4 italic">
        "The key is to start simple. Don't try to create a hundred segments on day one. Begin with the most impactful data points you have."
      </blockquote>
      <pre class="bg-slate-800 rounded-md p-4 my-4 overflow-x-auto"><code class="text-sm text-sky-300">
// Example data structure for a subscriber
const subscriber = {
  email: 'jane.doe@example.com',
  location: 'New York, USA',
  lastPurchaseDate: '2023-10-26',
  interests: ['content-strategy', 'seo']
};
      </code></pre>
      <p>By leveraging data like location, purchase history, and stated interests, you can create powerful campaigns that resonate deeply with your audience and drive real business results.</p>
    `,
    author: 'Jane Doe',
    date: '2023-10-28',
    readingTime: 8,
    thumbnailUrl: 'https://picsum.photos/seed/email/800/600',
  },
  {
    id: 2,
    slug: 'crafting-irresistible-subject-lines',
    title: 'Crafting Irresistible Subject Lines That Get Opened',
    description: 'Your subject line is the gatekeeper to your email. Learn the psychological tricks and best practices to maximize your open rates.',
    content: '<p>Content for crafting irresistible subject lines...</p>',
    author: 'Jane Doe',
    date: '2023-10-15',
    readingTime: 6,
    thumbnailUrl: 'https://picsum.photos/seed/subject/800/600',
  },
  {
    id: 3,
    slug: 'content-strategy-for-marketers',
    title: 'Beyond the Blog: A Holistic Content Strategy for Marketers',
    description: 'Explore how to build a content ecosystem that nurtures leads at every stage of the funnel, from awareness to advocacy.',
    content: '<p>Content for holistic content strategy...</p>',
    author: 'Jane Doe',
    date: '2023-09-30',
    readingTime: 12,
    thumbnailUrl: 'https://picsum.photos/seed/strategy/800/600',
  },
];

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts = signal<BlogPost[]>(MOCK_POSTS);

  getPosts() {
    return this.posts.asReadonly();
  }

  getPostBySlug(slug: string) {
    return computed(() => this.posts().find(p => p.slug === slug));
  }
}