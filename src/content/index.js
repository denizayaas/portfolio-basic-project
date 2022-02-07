export default {
  nav: {
    logo: 'DNZ',
    links: [
      { text: 'Work', to: 'mywork' },
      { text: 'Contact', to: 'mycontact' },
    ],
  },
  header: {
    img:
      'https://i.ibb.co/HPCdpk6/ben.jpg',
    text: ['Hi!', "It's me Deniz.", 'I am'],
    typical: [
      'Web Frontend Developer. 🖥',
      2000,
      'Mobile Frontend Developer. 📹',
      2000,
      'Computer Programmer',
      2000,
    ],
    btnText: 'Discover More',
  },

  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/html.jpg',
        alt: 'html',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/csss.png',
        alt: 'css',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/js.png',
        alt: 'javascript',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/react.svg',
        alt: 'react',
      },
    ],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
  },
};
