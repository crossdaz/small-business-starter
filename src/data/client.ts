/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode a business name or phone number —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const client = {
  name: 'Sparks Electrical',
  email: 'hello@sparkselectrical.co.uk',
  phoneForTel: '01234 567890',
  phoneFormatted: '01234 567 890',
  /** Business / contractor license number. Displayed in the header and footer
   * as a trust signal. Set to an empty string to hide it. */
  license: 'Electrician Lic# 12345678',
  address: {
    lineOne: 'Unit 5, Industrial Estate',
    lineTwo: '',
    city: 'Your Town',
    state: '',
    zip: 'AB12 3CD',
    country: 'UK',
    mapLink: 'https://maps.google.com', // Replace with real Google Maps link
  },
  socials: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    google: 'https://www.google.com/maps', // Google Business Profile
  },
  domain: 'https://sparkselectrical.co.uk',
} as const;

export type Client = typeof client;