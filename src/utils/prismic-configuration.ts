import Prismic from '@prismicio/client';

export const apiEndpoint = process.env.PRISMIC_API_ENDPOINT;
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

export const Client = Prismic.client(apiEndpoint, { accessToken });