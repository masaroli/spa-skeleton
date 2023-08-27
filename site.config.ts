// Site Infomation
const siteData = {
  root: 'src',
  locale: 'en',
  siteName: 'SPA Skeleton Docs',
  shortName: 'SPA Skeleton',
  description: 'Boilerplate for creating a single-page application (SPA). It is built with Vite, featuring Handlebars and SCSS',
  url: 'https://vitam.pages.dev/',
  ogpImage: 'ogp.jpg',
  ogType: 'website',
  fbAppId: '',
  fbAdmins: '',
  twitterCard: 'summary_large_image',
  twitterSite: '@SiteAccount',
  themeColor: '#FFA800',
  backgroundColor: '#fff',
};

// Page Infomation
const pagesData = {
  '/index.html': {
    locale: siteData.locale,
    title: `Development template | ${siteData.siteName}`,
    description: `You can start coding ${siteData.description}`,
    url: `${siteData.url}`,
    ogpImage: siteData.ogpImage,
    ogType: siteData.ogType,
    fbAppId: siteData.fbAppId,
    fbAdmins: siteData.fbAdmins,
    twitterCard: siteData.twitterCard,
    twitterSite: siteData.twitterSite,
  },
};

export { siteData, pagesData };
