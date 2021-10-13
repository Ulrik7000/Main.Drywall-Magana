import { colors } from '@material-ui/core';

export const breadcrumb = [
  {
    href: '#',
    title: 'Help Center',
    isActive: true,
  },
  // {
  //   href: '#',
  //   title: 'Level 3',
  //   isActive: false,
  // },
  // {
  //   title: 'Level 4',
  //   isActive: false,
  // },
  // {
  //   title: 'Level 5',
  //   isActive: false,
  // },
];

export const questions = {
  title: 'Frequently asked questions about our systems and service specifications',
  subtitle: 'Let’s try to fix your mayor concerns.',
  icon: 'fas fa-question',
  color: colors.amber,
  items: [
    {
      id: 'faq-1',
      title: 'What does the total cost of my project include?',
      subtitle: 'Issues related to the material and number of coats used on each project.',
      text:
        'Every project estimate cost includes labour prices only, we can provide options for material delivery with partners for a fee provided beforehand. Our process includes different number of coats depending the level of finish desired',
      link: '',
    },
    {
      id: 'faq-2',
      title: 'What payment methods are accepted',
      subtitle: 'Issues related to payments',
      text:
        'We accept payments via e-transfer, cheque and cash',
      link: '',
    },
    {
      id: 'faq-3',
      title: "How long will my project take from start to finish?.",
      subtitle: 'Issues related to finishing timeframe',
      text:
        'This varies on each project, but for most of the services . On the first visit, I will start by prepping the area to contain any dywall imperfections. They I will proceed with the first step of the renovation which consists of taping then applying the propper coats of mud. At the end of sanding, I will clean the area before leaving.',
      link: '',
    },
    {
      id: 'faq-4',
      title: "How can I get a more accurate estimate for my project?",
      subtitle: 'Precise quoting issues',
      text:
        'We can start with some basic questions over the phone or text such as home address and the year the home was built. I will then gather as much information as you can give us about your project. Some can include, how high the ceilings are?, is the surface lathe and plaster or drywall? do you have a specific color on your walls that will require a paint match?',
      link: '',
    },
    {
      id: 'faq-5',
      title: "Can I choose a different finish level for my budget margin",
      subtitle: 'Budget alternatives',
      text:
        'We offer different finish levels complying to the Gypsum Association "GA 214 2017 - Levels of Finish Reference Guide". This allows us to provide alternatives that best fit your drywall project, be it firetaping for a basic fire-rated finish, or 100% wall skimming "Level 5" for surfaces with high level of lighting or to prepare for venetian plaster',
      link: '',
      href: 'https://www.usg.com/content/dam/USG_Marketing_Communications/canada/product_promotional_materials/finished_assets/cgc-construction-handbook-ch05-finishing-drywall-systems-can-en.pdf',
    },
    {
      id: 'faq-6',
      title: 'What will my project look like with level 3 finish?',
      subtitle: 'Level 3 system and features',
      text:
        'No marks or ridges will apear on the surface, this will be ready for priming, to be followed by heavy texture (spray or hand applied), not fit for flat surfaces. Typically used where heavy duty wall-coverings are to be applied as the final decoration. This level of finish should not be used where smooth painted surfaces or where lighter weight wall-coverings are specified. The prepared surface shall be coated with a drywall primer prior to the application of final commercial-grade finishes.',
      link: '',
    },
    {
      id: 'faq-7',
      title: 'What will my project look like with level 4 finish?',
      subtitle: 'Level 4 system and features.',
      text:
        'No marks or ridges will apear on the surface, this will be ready for priming, followed by light wall-coverings, non-continuous textures, flat paints or light textures. This level of finish is not recommended where non‐flat or dark/deeptone paints are applied. Critical Lighting ‐ In critical lighting areas, flat paints applied over light continuous textures tend to reduce joint photographing. Wall coverings ‐ The weight, texture, and sheen level of wall coverings applied over this level of finish should be carefully evaluated. Joints and fasteners must be adequately concealed if the wall covering used is of light weight construction, contains limited pattern,has a sheen level other than flat, or any combination thereof. Unbacked vinyl wall-coverings are not recommended over this level of finish.',
      link: '',
    },
    {
      id: 'faq-8',
      title: 'What will my project look like with level 5 finish?',
      subtitle: 'Level 5 system and features.',
      text:
        'Surface ready to prime before decorating with gloss, semigloss, or enamel paint. Typically specified in appearance areas where smooth wall designs are decorated with non‐flat paints(i.e.sheen/gloss) or other glossy decorative finishes, dark/deeptone paints are applied, or critical lighting conditions occur. This level of finish is the most effective method to provide a uniform surface and minimize the possibility of joint photographing and/or fasteners showing through the final decoration.',
      link: '',
    },
  ],
};

  export const categories = [
    {
      title: 'Level 3',
      subtitle: 'Remember to add on this page, at the "Related Help Center Categories" div, articles, description or links to the drywall finishing codes, or official procedure documents.',
      icon: 'fas fa-dice-three',
      color: colors.indigo,
      href: '',
      isActive: true,
     },
    {
      title: 'Level 4',
      subtitle: 'Remember to add on this page, at the "Related Help Center Categories" div, articles, description or links to the drywall finishing codes, or official procedure documents',
      icon: 'fas fa-dice-four',
      color: colors.blue,
    },
    {
      title: 'Level 5',
      subtitle: 'Remember to add on this page, at the "Related Help Center Categories" div, articles, description or links to the drywall finishing codes, or official procedure documents.',
      icon: 'fas fa-dice-five',
      color: colors.deepPurple,
    },
  ];
