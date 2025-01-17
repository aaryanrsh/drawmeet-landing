// This enables debugging - you'll see any errors in the browser console
window.CMS_MANUAL_INIT = true;

// Initialize the CMS
CMS.init({
  config: {
    backend: {
      name: 'github',
      repo: 'aaryanrsh/drawmeet-landing',
      branch: 'main',
      auth_type: 'pkce',
      site_domain: 'www.drawmeet.com'
    },
    media_folder: "blog/images",
    public_folder: "/blog/images",
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        folder: "blog/posts",
        create: true,
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Publish Date", name: "date", widget: "datetime" },
          { label: "Featured Image", name: "image", widget: "image", required: false },
          { label: "Content", name: "body", widget: "markdown" }
        ]
      }
    ]
  }
});