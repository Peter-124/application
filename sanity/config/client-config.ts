// @ts-nocheck
const config: {
  projectId: string;
  dataset: string;
  apiVersion: string;
} = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
};

export default config;
