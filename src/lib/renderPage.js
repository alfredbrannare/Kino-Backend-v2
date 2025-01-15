import fs from 'fs/promises'

const headerMenu = [
    {
        label: 'BILJETTER',
        id: 'biljetter',
        link: '#',
    },
    {
        label: 'EVENEMANG',
        id: 'evenemang',
        link: '#',
    },
    {
        label: 'FILMER',
        id: 'filmer',
        link: 'movies',
    },
    {
        label: 'MEDLEMSKAP',
        id: 'medlemskap',
        link: '#',
    },
    {
        label: 'OM OSS',
        id: 'omoss',
        link: 'about',
    },
];

const footerSection1 = [
    { label: 'OM KINO', link: 'about' },
    { label: 'FRÅGOR SVAR', link: '#' },
    { label: 'KONTAKTA OSS', link: '#' },
];

const footerSection2 = [
    { label: 'PRESENTKORT', link: '#' },
    { label: 'TILLGÄNGLIGHET', link: '#' },
    { label: 'MEDLEMSKAP', link: '#' },
    { label: 'BISTRO-BIO', link: '#' },
    { label: 'EVENEMANG', link: '#' },
];

const footerSection3 = [
    { label: 'FACEBOOK', link: '#' },
    { label: 'INSTAGRAM', link: '#' },
];


export default function getHeaderFooterData(page) {
    return {
        headerItems: headerMenu.map((item) => {
            return { label: item.label, link: item.link };
        }),
        footerSection1,
        footerSection2,
        footerSection3,
    };
}