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
        link: 'about-us',
    },
];

const footerMenu = [
    {
        label: '',
        id: '',
        link: '#',
    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
]

export default async function renderHeader(response, page) {
    response.render(page, {
        headerItems: headerMenu.map((item) => {
            return {
                label: item.label,
                link: item.link,
            };
        }),
        footerItems: footerMenu,
    });
}