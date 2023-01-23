import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

//linking Sanity to React project
export const client = sanityClient({
    projectId: 'ax3tmykg',
    dataset: 'production',
    apiVersion: '2023-01-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

//making url for the images present in dataBase for use in img src
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);