module.exports = {
  async redirects() {
    return [
      {
        source: '/d/resume',
        destination:
          'https://drive.google.com/file/d/1acKX5RhWBtU51rprALCkctZ8ihFIkYcO/view?usp=sharing',
        permanent: false,
      },
    ];
  },
  images: {
    domains: [
      'raw.githubusercontent.com',
      'user-images.githubusercontent.com',
      'upload.wikimedia.org',
      'img.icons8.com',
      'seeklogo.com',
      'cdn.worldvectorlogo.com',
    ],
  },
};
