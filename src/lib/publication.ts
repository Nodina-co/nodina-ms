import plan from '../../content/publication.json';
import { route, type Locale, type PageId } from './site';

export const siteStage = import.meta.env.PUBLIC_SITE_STAGE?.trim() || 'preview';
if (!['preview', 'release-candidate', 'production'].includes(siteStage)) {
  throw new Error('PUBLIC_SITE_STAGE must be preview, release-candidate or production.');
}
export const isPreview = siteStage === 'preview';
if (siteStage === 'production' && (!plan.launchApprovedOn || plan.pages.some(row => row.status !== 'published' || !row.publishedOn || row.reviewPending))) {
  throw new Error('Production requires published plan rows after explicit launch approval.');
}
export function pageRobots(locale: Locale, page: PageId) {
  const row = plan.pages.find(row => row.locale === locale && row.path === route(locale, page));
  if (!row || (siteStage !== 'preview' && !row.approvedOn)) throw new Error(`Missing approved publication row: ${locale}/${page}`);
  return siteStage === 'production' && row.status === 'published'
    ? 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
    : 'noindex,nofollow,noarchive';
}
