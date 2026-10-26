import { getCollection, type CollectionEntry } from 'astro:content';
import { route, type Locale } from './site';

export type Post = CollectionEntry<'blog'>;

export const postPath = (post: Post) => `${route(post.data.locale, 'blog')}${post.data.slug}/`;

export async function publishedPosts(locale?: Locale) {
  const posts = await getCollection('blog', post => !post.data.draft && (!locale || post.data.locale === locale));
  return posts.sort((a, b) => (a.data.date < b.data.date ? 1 : a.data.date > b.data.date ? -1 : 0));
}

export async function translationOf(post: Post, locale: Locale) {
  if (post.data.locale === locale) return post;
  const all = await publishedPosts(locale);
  return all.find(other => other.data.key === post.data.key);
}

export function readMinutes(body = '') {
  const words = body.replace(/^---[\s\S]*?---/, '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string, locale: Locale) {
  const date = new Date(iso + 'T00:00:00Z');
  return new Intl.DateTimeFormat(locale === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(date);
}
