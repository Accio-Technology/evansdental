import type { FeatureItem, SolutionCard } from '@common/components/types';

export const hero = {
    title: 'Compassionate Care, Healthy Smiles.',
    subhead:
        '<strong>General Dentist Serving Northern Virginia</strong>Chantilly · Fairfax · Centreville · South Riding · Herndon · Sterling · Ashburn · Fair Oaks · Brambleton',
};

export const features: FeatureItem[] = [
    {
        title: 'Honesty and Integrity',
        text: 'We promise to never push any unnecessary procedures. Our providers will explain your care plan thoroughly and discuss all options with you.',
    },
    {
        title: 'We Keep You Smiling',
        text: 'We believe a healthy smile is a beautiful smile. Our team is committed to evidence based treatments and using the latest research to treat your dental needs.',
    },
    {
        title: 'Patient-First Approach',
        text: 'Everything we do is built around providing excellent patient centered care. You can feel at home while we care for you like family.',
    },
];

export const services: SolutionCard[] = [
    {
        icon: 'sparkle',
        title: 'General Dentistry',
        text: 'Routine care for healthy smiles at every stage of life.',
        bullets: ['Checkups and cleanings', 'Restorative care', 'Personalized treatment plans'],
    },
    {
        icon: 'shield',
        title: 'Preventive Care',
        text: 'Preventive visits and guidance to keep small problems from becoming bigger ones.',
        bullets: ['Exams', 'Cleanings', 'Patient education'],
    },
    {
        icon: 'users',
        title: 'Family Dentistry',
        text: 'Comfortable, patient-first care for individuals and families.',
        bullets: ['Family appointments', 'Gentle approach', 'Clear treatment discussions'],
    },
];
