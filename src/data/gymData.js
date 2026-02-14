export const gymData = {
  
  stats: [
    { number: '6+', label: 'Années d\'Expérience' },
    { number: '500+', label: 'Membres Actifs' },
    { number: '3', label: 'Coachs Certifiés' },
    { number: '100%', label: 'Satisfaction Client' }
  ],

  owner: {
    name: 'Ibtissam',
    role: 'Propriétaire & Nutritionniste',
    image: '👩‍💼',
    bio: 'Passionnée par la nutrition sportive et le bien-être, Ibtissam a fondé Fire Fit avec la vision de créer un espace où chaque personne peut transformer sa vie. Avec plus de 10 ans d\'expérience en nutrition et coaching, elle accompagne personnellement les membres dans leur parcours de transformation.',
    specialties: ['Nutrition Sportive', 'Coaching Personnalisé', 'Motivation'],
    instagram: '@ibtissamdiet'
  },

  coaches: [
    {
      name: 'Hicham',
      role: 'Coach Principal',
      gender: 'male',
      image: '💪',
      specialties: ['Musculation', 'Force Athlétique', 'Technique'],
      certifications: [
        'Certificat de coaching sportif niveau 1',
        'Formation en fitness avancée'
      ],
      instagram: '@hicham_of_down'
    },
    {
      name: 'Zakaria',
      role: 'Coach Fitness',
      gender: 'male',
      specialties: ['Cardio Training', 'HIIT', 'Endurance'],
      certifications: [
        'Certificat de fitness professionnel',
        'Formation en cardio training'
      ],
      instagram: '@coach_zaari'
    },
    {
      name: 'Aicha',
      role: 'Coach Fitness',
      gender: 'female',
      specialties: ['Yoga', 'Pilates'],
      certifications: [
        'Certificat de fitness professionnel',
        'Formation en yoga training'
      ],
      instagram: '@aicha_fitness'
    }
  ],

  schedule: [
    { 
      day: 'Lundi - Vendredi',
      hours: '07h00 - 22h30',
      status: 'Ouvert'
    },
    { 
      day: 'Samedi',
      hours: '9h00 - 18h00',
      status: 'Ouvert'
    },
    { 
      day: 'Dimanche',
      hours: '12h00 - 18h00',
      status: 'Ouvert'
    }
  ],

  peakHours: {
    calm: [
      '07h00 - 12h (matinée)',
      '14h - 16h (après-midi)',
      '21h - 22h (soirée)'
    ],
    peak: [
      '17h - 21h (fin de journée)',
      '12h - 14h (matin)'
    ]
  },

  contactInfo: {
    address: {
      street: 'Centre ville Hassan en face SNRT',
      street2: 'Rue Moulay Abdelaziz',
      city: 'Rabat',
      country: 'Maroc',
      mapUrl: 'https://maps.google.com/?q=Rue+Moulay+Abdelaziz+Rabat'
    },
    phones: ['0537735052', '0658943859'],
    instagram: {
      handle: '@firefit.ma',
      url: 'https://instagram.com/firefit.ma',
      followers: '6.4K'
    }
  },

  testimonials: [
    {
      name: 'Sarah M.',
      text: 'Transformation incroyable ! Fire Fit a changé ma vie. Les coachs sont à l\'écoute et les équipements sont top.',
      rating: 5,
      result: '-12kg en 3 mois'
    },
    {
      name: 'Ahmed K.',
      text: 'Les coachs sont exceptionnels et l\'ambiance est motivante. Je recommande vivement !',
      rating: 5,
      result: '+8kg de muscle'
    },
    {
      name: 'Leila B.',
      text: 'Meilleure décision de ma vie ! L\'équipe est professionnelle et les résultats sont au rendez-vous.',
      rating: 5,
      result: 'Transformation complète'
    }
  ],

  pricing: [
    {
      name: 'OFFRE CLASSIQUE',
      badge: 'TOP VENTE',
      price: '150DHS',
      period: '/mois',
      prelevement: '150DHS',
      adhesion: '0DHS',
      engagement: '1 mois',
      highlight: true,
      features: [
        'Accès illimité 7j/7',
        'Tous les équipements',
        'Vestiaires & douches',
        'Programme d\'entraînement'
      ],
      options: [
        'Coaching personnalisé',
        'Accès prioritaire'
      ]
    },
    {
      name: 'SANS ENGAGEMENT',
      badge: null,
      price: '200DHS',
      period: '/mois*',
      prelevement: '200DHS',
      adhesion: '0DHS',
      engagement: 'Sans engagement',
      highlight: false,
      features: [
        'Accès illimité 7j/7',
        'Tous les équipements',
        'Vestiaires & douches',
        'Programme d\'entraînement',
        'Flexibilité totale'
      ],
      options: [
        'Coaching personnalisé',
        'Accès prioritaire'
      ]
    },
    {
      name: 'OFFRE JEUNE',
      badge: null,
      price: '120DHS',
      period: '/mois',
      prelevement: '120DHS',
      adhesion: '0DHS',
      engagement: '12 mois',
      highlight: false,
      features: [
        'Accès illimité 7j/7',
        'Tous les équipements',
        'Vestiaires & douches',
        'Programme d\'entraînement',
        'Spécial -26 ans'
      ],
      options: [
        'Coaching personnalisé',
        'Accès prioritaire'
      ]
    }
  ]
};