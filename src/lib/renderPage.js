import fs from 'fs/promises'

const headerMenu = [{
    label:  'Home page',
    id: 'index',
    link: '/kino-bio-projekt/index.html',
},
{
    label:  'BILJETTER',
    id: 'biljetter',
    link: '#',
},
{
    label:  'EVENEMANG',
    id: 'evenemang',
    link: '#',
},
{
    label:  'FILMER',
    id: 'filmer',
    link: '/movies.html',
},
{
    label:  'MEDLEMSKAP',
    id: 'medlemskap',
    link: '#',
},
{
    label:  'OM OSS',
    id: 'omoss',
    link: '/about-us.html',
},
];

export default async function renderHeader(response, page) {
    response.render({
        headerItems: headerMenu.map((item) => {
            return {
                label: item.label,
                link: item.link,
            };
        })
    });
}