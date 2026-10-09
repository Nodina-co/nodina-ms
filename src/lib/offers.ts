import type { Locale } from './site';
import fr from '../../content/site/offers.fr.json';
import en from '../../content/site/offers.en.json';
export const offers = (locale: Locale) => ({ fr, en })[locale];
