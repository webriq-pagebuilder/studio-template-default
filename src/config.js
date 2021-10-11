export const {
  // Site Netlify app used for web preview
  SANITY_STUDIO_PRODUCTION_NETLIFY_SITE_URL,

  // Site LIVE domain URL
  SANITY_STUDIO_PRODUCTION_SITE_URL,

  // Defaults to `localhost:3000` but can be override as per your local settings
  SANITY_STUDIO_DEV_SITE_URL = "http://localhost:3000",

  // Preview secret key both shared by site and studio. Randomly generated in production
  SANITY_STUDIO_PREVIEW_SECRET = "secret",

  // LIVE App URL
  SANITY_STUDIO_APP_URL = "http://localhost:9000",
} = process.env;
