import type { Cta, SiteConfig } from '@common/components/types';

interface EvansDentalConfig extends SiteConfig {
    logo: string;
    favicon: string;
    headerCta: Cta;
    googleReviewUrl: string;
    googleMapsUrl: string;
    hours: { label: string; value: string }[];
    images: {
        horizontalLogo: string;
    };
}

export const site: EvansDentalConfig = {
    name: 'Evans Dental',
    legalName: 'Evans Dental LLC',
    domain: 'https://evansdentalnova.com',
    locale: 'en',
    tagline: 'Compassionate Care, Healthy Smiles.',
    logo: '/images/logo-secondary.png',
    favicon: '/favicon.png',
    images: {
        horizontalLogo: '/images/logo-horizontal.png',
    },
    description:
        'General dentist serving Northern Virginia, including Chantilly, Fairfax, Centreville, South Riding, Herndon, Sterling, Ashburn, Fair Oaks, and Brambleton.',
    themeColor: '#6EA670',
    contact: {
        email: 'drjevansoffice@gmail.com',
        phone: '(703) 378-1010',
        address: '4501 Daly Drive Suite 310, Chantilly, VA 20151',
        hours: 'Mon–Thu 8am–3pm · Fri by appointment · Sat–Sun closed',
    },
    nav: [
        { href: '/services', label: 'Services' },
        { href: '/our-history', label: 'Our History' },
        { href: '/about', label: 'Meet the Team' },
        { href: '/new-patients', label: 'New Patients' },
        { href: '/faq', label: 'FAQ' },
        { href: '/contact', label: 'Contact Us' },
    ],
    headerCta: { href: '/contact', label: 'Contact Us' },
    googleReviewUrl: 'https://g.page/r/CdWVGhlio5tDEBM/review',
    googleMapsUrl:
        'https://www.google.com/maps/search/?api=1&query=4501+Daly+Drive+Suite+310+Chantilly+VA+20151',
    hours: [
        { label: 'Monday', value: '8am - 3pm' },
        { label: 'Tuesday', value: '8am - 3pm' },
        { label: 'Wednesday', value: '8am - 3pm' },
        { label: 'Thursday', value: '8am - 3pm' },
        { label: 'Friday', value: 'By Appointment' },
        { label: 'Saturday / Sunday', value: 'Closed' },
    ],
    social: [],
    jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Dentist',
        name: 'Evans Dental',
        url: 'https://evansdentalnova.com',
        telephone: '(703) 378-1010',
        email: 'drjevansoffice@gmail.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '4501 Daly Drive Suite 310',
            addressLocality: 'Chantilly',
            addressRegion: 'VA',
            postalCode: '20151',
            addressCountry: 'US',
        },
        areaServed: [
            'Chantilly',
            'Fairfax',
            'Centreville',
            'South Riding',
            'Herndon',
            'Sterling',
            'Ashburn',
            'Fair Oaks',
            'Brambleton',
        ],
    },
};
