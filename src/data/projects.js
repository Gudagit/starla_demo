const img = (path) => `${process.env.PUBLIC_URL}/projects/${path}`

// status: 'live' = full card, 'soon' = placeholder card for a project that is still being polished.
// Draft texts - edit freely.
export const projects = [
  {
    id: 'restaurant-menu',
    status: 'live',
    title: 'Digital QR Menu',
    summary: 'Mobile-first digital menu for an Italian restaurant: guests scan a QR code, browse, customize dishes and build an order.',
    desktop: img('restaurant/desktop.webp'),
    mobile: img('restaurant/mobile.webp'),
    tech: ['HTML', 'CSS', 'JavaScript', 'localStorage', 'Web Share API', 'PWA manifest'],
    liveUrl: 'https://gudagit.github.io/restaurant-menu-app/',
    githubUrl: 'https://github.com/Gudagit/restaurant-menu-app',
    problem:
      'Printed menus are hard to update and slow to browse, and guests want to search, customize dishes and see a total before ordering.',
    built:
      'A framework-free front end with live search across 103 dishes, variants and extras, a cart that survives reloads, favorites, sharing, optimized WebP images and a layout that works from 280 px phones to 2560 px monitors.',
    learned:
      'Vanilla JavaScript state management, responsive and accessible design, image optimization, and checking licenses for third-party photos.',
  },
  {
    id: 'kitchencad',
    status: 'live',
    title: 'KitchenCAD',
    summary: 'Windows desktop app for designing kitchens, from room dimensions to part lists, shop drawings and CNC programs.',
    desktop: img('kitchencad/3d-kuhinja.jpg'),
    mobile: null,
    images: [
      { src: img('kitchencad/3d-kuhinja.jpg'), alt: '3D view of a kitchen' },
      { src: img('kitchencad/izgled-zidova.jpg'), alt: 'Wall elevations with room warnings' },
      { src: img('kitchencad/shop-crtez.jpg'), alt: 'Dimensioned shop drawing' },
      { src: img('kitchencad/eksplodirani-prikaz.jpg'), alt: 'Exploded assembly view' },
      { src: img('kitchencad/teksture.jpg'), alt: 'Wood textures in 3D' },
      { src: img('kitchencad/crtez-dela-cnc.jpg'), alt: 'Part drawing with CNC operations' },
      { src: img('kitchencad/prostorija.jpg'), alt: 'Room layout' },
    ],
    tech: ['C#', '.NET Framework', 'WinForms', 'GDI+', 'DXF / PDF export'],
    liveUrl: null,
    liveLabel: 'Request demo',
    liveMailto: 'mailto:designstarla@gmail.com?subject=KitchenCAD%20demo%20request',
    githubUrl: 'https://github.com/Gudagit/KitchenCAD',
    problem:
      'Building a kitchen means re-typing the same dimensions into several tools, and every copy is a chance for a mistake.',
    built:
      'A parametric model: enter a dimension once and parts, hardware holes, drawings, cut lists and CNC programs are recalculated. Includes a 3D view and a custom path-tracer renderer. The source code is private, the demo is available on request.',
    learned:
      'Turning real cabinet-making rules into software, working with a large codebase (about 15,000 lines), and testing and reviewing results carefully.',
  },
  {
    id: 'project-tracker',
    status: 'live',
    title: 'Client & Project Tracker',
    summary: 'Full-stack app for freelancers to track clients and projects (deadline, status, payment).',
    desktop: img('project-tracker/desktop.png'),
    mobile: img('project-tracker/mobile.png'),
    tech: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    liveUrl: 'https://project-tracker-eight-snowy.vercel.app',
    githubUrl: 'https://github.com/Gudagit/project-tracker',
    problem:
      'Freelancers juggle several clients and projects and easily lose track of deadlines and who has paid.',
    built:
      'A REST API with validation and meaningful errors (400 / 404 / 409), a PostgreSQL database managed with Prisma, and a responsive React interface. A client that still has projects cannot be deleted.',
    learned:
      'How the frontend, API and database fit together, designing a REST API, data integrity rules, and deploying a full-stack app.',
  },
  {
    id: 'homebuild',
    status: 'live',
    title: 'HomeBuild Operations Platform',
    summary: 'Construction and property management system for tracking properties, stages, tasks, inspections and issues.',
    desktop: null, // TODO: add public/projects/homebuild/desktop.png (no real names or addresses in the data)
    mobile: null,
    tech: ['React', 'Vite', 'Tailwind CSS', 'Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Pytest'],
    liveUrl: 'https://homebuild-operations-platform.vercel.app',
    githubUrl: 'https://github.com/Gudagit/homebuild-operations-platform',
    problem:
      'Construction teams need one place to follow properties, stages, contractors, inspections and open defects instead of scattered spreadsheets.',
    built:
      'A FastAPI backend with SQLAlchemy models, JWT login with role checks, and a business rule that a property cannot be marked completed while it has an open issue. React frontend with routing, dashboard and detail pages.',
    learned:
      'Authentication with hashed passwords and JWT, relational data modelling, business rules in queries, and writing API tests with Pytest.',
  },
]
