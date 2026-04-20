// data/sectors.ts

export interface Sector {
  id: number;
  title: string;
  slug: string;
  shortText: string;
  description: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
  // For individual sector page
  content?: string;
  subSectors?: SubSector[];
  keyProducts?: string[];
}

export interface SubSector {
  title: string;
  description: string;
}

export const sectorsData: Sector[] = [
  {
    id: 1,
    title: "Raw Materials & Rubber Compounds",
    slug: "raw-materials-and-rubber-compounds",
    shortText: "Natural rubber, synthetic rubber, carbon black, silica, processing oils, and specialty chemicals.",
    description: "Natural rubber, synthetic rubber, carbon black, silica, processing oils, and specialty chemicals for tyre manufacturing.",
    image: "https://cdn.itegroupnews.com/Mining_World_Sectors_Images_6_196fe9e60d.png",
    buttonText: "Explore Raw Materials",
    buttonLink: "/exhibiting-enquiry",
    content: "The Raw Materials & Rubber Compounds sector at ITS Tyre Expo brings together leading suppliers of essential materials for tyre production. From natural and synthetic rubbers to carbon black, silica, processing oils, and advanced specialty chemicals, this sector showcases the building blocks of modern tyre manufacturing. Discover innovations in sustainable materials, enhanced durability compounds, and performance-enhancing additives that are shaping the future of the tyre industry.",
    subSectors: [
      {
        title: "Natural & Synthetic Rubber",
        description: "Premium quality natural rubber grades and synthetic rubber variants including SBR, BR, and IIR for various tyre applications."
      },
      {
        title: "Reinforcing Fillers",
        description: "Carbon black and silica solutions for improved tread wear, rolling resistance, and wet grip performance."
      },
      {
        title: "Processing Oils & Plasticizers",
        description: "Specialty oils and plasticizers that enhance processability and influence final product properties."
      },
      {
        title: "Specialty Chemicals",
        description: "Antioxidants, antiozonants, accelerators, and other performance chemicals for rubber compounding."
      }
    ],
    keyProducts: [
      "Natural Rubber (RSS, SMR, SIR grades)",
      "Synthetic Rubber (SBR, BR, IIR, EPDM)",
      "Carbon Black (all grades)",
      "Precipitated Silica",
      "Processing Oils (aromatic, naphthenic, paraffinic)",
      "Zinc Oxide & Stearic Acid",
      "Sulfur & Accelerators",
      "Antioxidants & Antiozonants"
    ]
  },
  {
    id: 2,
    title: "Tyre Manufacturing Machinery",
    slug: "tyre-manufacturing-machinery",
    shortText: "Banbury mixers, calenders, extruders, tyre building machines, curing presses, and finishing equipment.",
    description: "Banbury mixers, calenders, extruders, tyre building machines, curing presses, and finishing equipment.",
    image: "https://cdn.itegroupnews.com/Mining_World_Sectors_Images_6_196fe9e60d.png",
    buttonText: "Explore Machinery",
    buttonLink: "/exhibiting-enquiry",
    content: "The Tyre Manufacturing Machinery sector showcases state-of-the-art equipment for every stage of tyre production. From Banbury internal mixers and calenders to advanced tyre building machines, curing presses, and finishing equipment, discover the latest innovations in tyre manufacturing technology. Leading machinery manufacturers present solutions that enhance productivity, precision, and energy efficiency.",
    subSectors: [
      {
        title: "Mixing & Compounding",
        description: "Internal mixers, two-roll mills, and batch-off systems for rubber compounding."
      },
      {
        title: "Calendering & Extrusion",
        description: "Calenders for fabric and steel cord coating, extruders for tread and sidewall profiles."
      },
      {
        title: "Tyre Building",
        description: "First and second stage tyre building machines for passenger, truck, and OTR tyres."
      },
      {
        title: "Curing & Vulcanization",
        description: "Mechanical and hydraulic curing presses with advanced control systems."
      }
    ],
    keyProducts: [
      "Banbury Internal Mixers",
      "Two-Roll Mixing Mills",
      "Calenders (fabric & steel cord)",
      "Pin Barrel Extruders",
      "Cold Feed Extruders",
      "Tyre Building Machines (TBM)",
      "Curing Presses",
      "Tyre Finishing & Inspection Lines"
    ]
  },
  {
    id: 3,
    title: "Rubber Processing Equipment",
    slug: "rubber-processing-equipment",
    shortText: "Two-roll mills, internal mixers, strainers, pelletizers, and rubber bale cutters.",
    description: "Two-roll mills, internal mixers, strainers, pelletizers, and rubber bale cutters for efficient processing.",
    image: "https://cdn.itegroupnews.com/Mining_World_Sectors_Images_6_196fe9e60d.png",
    buttonText: "Explore Processing",
    buttonLink: "/exhibiting-enquiry",
    content: "Rubber Processing Equipment forms the backbone of efficient tyre production. This sector features cutting-edge machinery for mixing, milling, straining, and pelletizing rubber compounds. Discover solutions that optimize material handling, reduce waste, and improve overall processing efficiency.",
    subSectors: [
      {
        title: "Mixing & Milling",
        description: "Internal mixers and two-roll mills for compound preparation and blending."
      },
      {
        title: "Straining & Filtering",
        description: "Rubber strainers and screen changers for contaminant removal."
      },
      {
        title: "Pelletizing",
        description: "Underwater and dry pelletizing systems for rubber compound processing."
      },
      {
        title: "Material Preparation",
        description: "Rubber bale cutters, guillotines, and weigh systems for material handling."
      }
    ],
    keyProducts: [
      "Hydraulic Two-Roll Mills",
      "Gear Pump Extruders",
      "Rubber Strainers",
      "Underwater Pelletizers",
      "Rubber Bale Cutters",
      "Batch-Off Systems",
      "Cooling Conveyors",
      "Rubber Slab Cutters"
    ]
  },
  {
    id: 4,
    title: "Tyre Testing & Quality Control",
    slug: "tyre-testing-and-quality-control",
    shortText: "Durability testers, uniformity machines, balance testers, X-ray inspection, and laboratory equipment.",
    description: "Durability testers, uniformity machines, balance testers, X-ray inspection, and laboratory testing equipment.",
    image: "https://cdn.itegroupnews.com/Mining_World_Sectors_Images_6_196fe9e60d.png",
    buttonText: "Explore Testing",
    buttonLink: "/exhibiting-enquiry",
    content: "Quality control is paramount in tyre manufacturing. The Tyre Testing & Quality Control sector presents advanced inspection systems and testing equipment that ensure product safety, performance, and consistency. From laboratory rheometers to high-speed uniformity testers and X-ray inspection systems, discover technologies that maintain the highest quality standards.",
    subSectors: [
      {
        title: "Laboratory Testing",
        description: "Rheometers, Mooney viscometers, and tensile testers for compound characterization."
      },
      {
        title: "Tyre Uniformity",
        description: "High-speed uniformity machines for radial force variation measurement."
      },
      {
        title: "Dynamic Balancing",
        description: "Automatic balancing machines for static and dynamic imbalance correction."
      },
      {
        title: "Non-Destructive Testing",
        description: "X-ray and shearography inspection systems for internal defect detection."
      }
    ],
    keyProducts: [
      "Moving Die Rheometers (MDR)",
      "Mooney Viscometers",
      "Tensile Testers",
      "Tyre Uniformity Machines",
      "Dynamic Balancers",
      "X-Ray Inspection Systems",
      "Shearography Testers",
      "Durability & Endurance Testers"
    ]
  },
  {
    id: 5,
    title: "Retreading & Repair Materials",
    slug: "retreading-and-repair-materials",
    shortText: "Pre-cure and mold cure tread rubber, cushion gum, repair patches, and retreading machinery.",
    description: "Pre-cure and mold cure tread rubber, cushion gum, repair patches, and retreading machinery and accessories.",
    image: "https://cdn.itegroupnews.com/Mining_World_Sectors_Images_6_196fe9e60d.png",
    buttonText: "Explore Retreading",
    buttonLink: "/exhibiting-enquiry",
    content: "Sustainable tyre management through retreading and repair is a growing focus in the industry. This sector showcases advanced retreading systems, high-quality tread rubber, repair materials, and specialized machinery that extend tyre life and reduce environmental impact.",
    subSectors: [
      {
        title: "Pre-Cure Retreading",
        description: "Pre-cure tread rubber, cushion gum, and envelope systems for cold retreading."
      },
      {
        title: "Mold Cure Retreading",
        description: "Matrix systems and mold cure tread rubber for hot retreading processes."
      },
      {
        title: "Repair Materials",
        description: "Repair patches, plugs, and filling compounds for tyre damage repair."
      },
      {
        title: "Retreading Machinery",
        description: "Buffers, builders, extruders, and curing chambers for retreading operations."
      }
    ],
    keyProducts: [
      "Pre-Cure Tread Rubber",
      "Mold Cure Tread Rubber",
      "Cushion Gum",
      "Repair Patches & Plugs",
      "Tyre Buffers",
      "Retreading Builders",
      "Curing Envelopes & Chambers",
      "Tread Strip Extruders"
    ]
  },
  {
    id: 6,
    title: "Recycling & Sustainability Solutions",
    slug: "recycling-and-sustainability-solutions",
    shortText: "Tyre recycling machinery, crumb rubber production, pyrolysis systems, and sustainable innovations.",
    description: "Tyre recycling machinery, crumb rubber production, pyrolysis systems, and sustainable material innovations.",
    image: "https://cdn.itegroupnews.com/Mining_World_Sectors_Images_6_196fe9e60d.png",
    buttonText: "Explore Recycling",
    buttonLink: "/exhibiting-enquiry",
    content: "Environmental responsibility is driving innovation in tyre recycling and sustainability. This sector features advanced recycling technologies, crumb rubber production systems, pyrolysis solutions, and sustainable material alternatives that support circular economy principles in the tyre industry.",
    subSectors: [
      {
        title: "Mechanical Recycling",
        description: "Shredders, granulators, and cryogenic systems for crumb rubber production."
      },
      {
        title: "Pyrolysis",
        description: "Advanced pyrolysis systems for recovering oil, carbon black, and steel from end-of-life tyres."
      },
      {
        title: "Sustainable Materials",
        description: "Bio-based rubbers, recycled carbon black, and eco-friendly compounding solutions."
      },
      {
        title: "Waste Management",
        description: "Collection systems, sorting technology, and tyre derived fuel (TDF) processing."
      }
    ],
    keyProducts: [
      "Tyre Shredders & Granulators",
      "Cryogenic Grinding Systems",
      "Pyrolysis Reactors",
      "Crumb Rubber Separators",
      "Steel & Fiber Separators",
      "Devulcanization Equipment",
      "Recycled Carbon Black",
      "Tyre Derived Fuel (TDF) Systems"
    ]
  },
  {
    id: 7,
    title: "Mold & Tooling Solutions",
    slug: "mold-and-tooling-solutions",
    shortText: "Tyre molds, bladder molds, engraving services, and precision tooling for tyre manufacturing.",
    description: "Tyre molds, bladder molds, engraving services, and precision tooling for tyre manufacturing.",
    image: "https://cdn.itegroupnews.com/Mining_World_Sectors_Images_6_196fe9e60d.png",
    buttonText: "Explore Tooling",
    buttonLink: "/exhibiting-enquiry",
    content: "Precision molds and tooling are critical for tyre quality and performance. This sector showcases advanced mold manufacturing technologies, engraving services, bladder molds, and precision tooling solutions that deliver exceptional tread patterns and sidewall aesthetics.",
    subSectors: [
      {
        title: "Tyre Molds",
        description: "Segment molds, two-piece molds, and container molds for all tyre types."
      },
      {
        title: "Engraving Services",
        description: "Precision engraving for tread patterns, sidewall markings, and tire identification."
      },
      {
        title: "Bladder Molds",
        description: "Curing bladder molds for passenger, truck, and OTR tyre applications."
      },
      {
        title: "Precision Tooling",
        description: "Tooling for bead rings, tread rings, and sidewall plates."
      }
    ],
    keyProducts: [
      "Segment Molds",
      "Two-Piece Molds",
      "Container Molds",
      "Engraving Machines & Services",
      "Bladder Molds",
      "Bead Rings",
      "Tread Rings",
      "Sidewall Plates"
    ]
  },
  {
    id: 8,
    title: "Tyre Reinforcement Materials",
    slug: "tyre-reinforcement-materials",
    shortText: "Steel cord, textile cord (nylon, polyester, rayon), bead wire, and fabric for tyre reinforcement.",
    description: "Steel cord, textile cord (nylon, polyester, rayon), bead wire, and fabric for tyre reinforcement.",
    image: "https://cdn.itegroupnews.com/Mining_World_Sectors_Images_6_196fe9e60d.png",
    buttonText: "Explore Reinforcement",
    buttonLink: "/exhibiting-enquiry",
    content: "Reinforcement materials provide the structural integrity essential for tyre performance and safety. This sector features steel cord, textile cord, bead wire, and reinforcement fabrics that deliver strength, durability, and dimensional stability to modern tyres.",
    subSectors: [
      {
        title: "Steel Cord",
        description: "High-tensile steel cord for belts and carcass reinforcement in radial tyres."
      },
      {
        title: "Textile Cord",
        description: "Nylon, polyester, rayon, and aramid cord for carcass and cap ply applications."
      },
      {
        title: "Bead Wire",
        description: "High-carbon steel bead wire for tyre bead reinforcement."
      },
      {
        title: "Reinforcement Fabrics",
        description: "Dipped fabrics and woven materials for tyre construction."
      }
    ],
    keyProducts: [
      "Steel Cord (various constructions)",
      "Bead Wire",
      "Nylon Cord & Fabric",
      "Polyester Cord",
      "Rayon Cord",
      "Aramid (Kevlar) Cord",
      "Dipping & Adhesion Systems",
      "Calendered Fabric"
    ]
  },
  {
    id: 9,
    title: "Additives & Performance Chemicals",
    slug: "additives-and-performance-chemicals",
    shortText: "Antioxidants, antiozonants, accelerators, activators, adhesion promoters, and specialty additives.",
    description: "Antioxidants, antiozonants, accelerators, activators, adhesion promoters, and specialty additives.",
    image: "https://cdn.itegroupnews.com/Mining_World_Sectors_Images_6_196fe9e60d.png",
    buttonText: "Explore Additives",
    buttonLink: "/exhibiting-enquiry",
    content: "Performance chemicals and additives are the key to achieving desired tyre properties. This sector showcases a comprehensive range of additives that enhance durability, reduce rolling resistance, improve wet grip, and extend tyre life. Discover innovations in vulcanization chemistry, anti-degradants, and adhesion promoters.",
    subSectors: [
      {
        title: "Anti-Degradants",
        description: "Antioxidants and antiozonants for protection against aging and ozone cracking."
      },
      {
        title: "Vulcanization Chemistry",
        description: "Accelerators, activators, and retarders for controlled crosslinking."
      },
      {
        title: "Adhesion Systems",
        description: "Adhesion promoters and bonding agents for rubber-to-metal and rubber-to-textile."
      },
      {
        title: "Specialty Additives",
        description: "Processing aids, dispersing agents, and performance modifiers."
      }
    ],
    keyProducts: [
      "PPD Antioxidants",
      "Waxes (Antiozonants)",
      "Sulfenamide Accelerators",
      "Thiazole Accelerators",
      "Zinc Oxide",
      "Stearic Acid",
      "Cobalt Adhesion Promoters",
      "Resorcinol & HMMM Systems"
    ]
  },
  {
    id: 10,
    title: "Automation & Industry 4.0",
    slug: "automation-and-industry-40",
    shortText: "MES systems, AI quality inspection, predictive maintenance, and smart factory solutions.",
    description: "MES systems, AI quality inspection, predictive maintenance, and smart factory solutions for tyre plants.",
    image: "https://cdn.itegroupnews.com/Mining_World_Sectors_Images_6_196fe9e60d.png",
    buttonText: "Explore Automation",
    buttonLink: "/exhibiting-enquiry",
    content: "The digital transformation of tyre manufacturing is here. This sector presents cutting-edge automation solutions including Manufacturing Execution Systems (MES), AI-powered quality inspection, predictive maintenance platforms, and comprehensive smart factory technologies that optimize production efficiency and quality.",
    subSectors: [
      {
        title: "Manufacturing Execution Systems",
        description: "MES platforms for production tracking, scheduling, and quality management."
      },
      {
        title: "AI Quality Inspection",
        description: "Machine vision and deep learning systems for defect detection."
      },
      {
        title: "Predictive Maintenance",
        description: "IoT sensors and analytics for equipment health monitoring."
      },
      {
        title: "Smart Factory Solutions",
        description: "Integrated Industry 4.0 platforms for connected tyre manufacturing."
      }
    ],
    keyProducts: [
      "MES Software",
      "AI Vision Inspection Systems",
      "IoT Sensors & Gateways",
      "Predictive Analytics Platforms",
      "SCADA Systems",
      "Digital Twin Solutions",
      "Traceability Systems",
      "Robotic Automation"
    ]
  },
  {
    id: 11,
    title: "Material Handling & Logistics",
    slug: "material-handling-and-logistics",
    shortText: "Conveyor systems, automated guided vehicles (AGVs), warehouse solutions, and tyre handling equipment.",
    description: "Conveyor systems, automated guided vehicles (AGVs), warehouse solutions, and tyre handling equipment.",
    image: "https://cdn.itegroupnews.com/Mining_World_Sectors_Images_6_196fe9e60d.png",
    buttonText: "Explore Logistics",
    buttonLink: "/exhibiting-enquiry",
    content: "Efficient material handling is essential for tyre plant productivity. This sector showcases conveyor systems, automated guided vehicles (AGVs), warehouse automation, and specialized tyre handling equipment that streamline material flow from raw material receiving to finished tyre storage and shipping.",
    subSectors: [
      {
        title: "Conveyor Systems",
        description: "Belt conveyors, screw conveyors, and bucket elevators for material transport."
      },
      {
        title: "Automated Guided Vehicles",
        description: "AGVs and autonomous mobile robots for internal logistics."
      },
      {
        title: "Warehouse Solutions",
        description: "Automated storage and retrieval systems (ASRS) for green tyres and finished goods."
      },
      {
        title: "Tyre Handling",
        description: "Specialized equipment for tyre stacking, palletizing, and transport."
      }
    ],
    keyProducts: [
      "Belt Conveyors",
      "Screw Conveyors",
      "Bucket Elevators",
      "Automated Guided Vehicles (AGVs)",
      "ASRS Systems",
      "Tyre Stackers",
      "Tyre Palletizers",
      "Green Tyre Transport Systems"
    ]
  },
  {
    id: 12,
    title: "Curing & Vulcanization Systems",
    slug: "curing-and-vulcanization-systems",
    shortText: "Curing presses, bladder systems, hot water circulation units, and vulcanization control systems.",
    description: "Curing presses, bladder systems, hot water circulation units, and vulcanization control systems.",
    image: "https://cdn.itegroupnews.com/Mining_World_Sectors_Images_6_196fe9e60d.png",
    buttonText: "Explore Curing",
    buttonLink: "/exhibiting-enquiry",
    content: "The curing process determines final tyre properties and performance. This sector features advanced curing presses, bladder systems, hot water circulation units, and precise vulcanization control systems that ensure consistent quality and optimal cure parameters for all tyre types.",
    subSectors: [
      {
        title: "Curing Presses",
        description: "Mechanical, hydraulic, and hybrid curing presses for various tyre sizes."
      },
      {
        title: "Bladder Systems",
        description: "Curing bladders, bladder changers, and bladder storage solutions."
      },
      {
        title: "Heating Systems",
        description: "Hot water circulation units, steam systems, and electric heating solutions."
      },
      {
        title: "Process Control",
        description: "PLC-based vulcanization control systems with data logging and recipe management."
      }
    ],
    keyProducts: [
      "Mechanical Curing Presses",
      "Hydraulic Curing Presses",
      "Hybrid Curing Presses",
      "Curing Bladders",
      "Bladder Changers",
      "Hot Water Circulation Units",
      "Steam Systems",
      "Vulcanization Control Systems"
    ]
  }
];

// Helper function to get sector by slug
export function getSectorBySlug(slug: string): Sector | undefined {
  return sectorsData.find(sector => sector.slug === slug);
}

// Helper function to get all sector slugs for static paths
export function getAllSectorSlugs(): string[] {
  return sectorsData.map(sector => sector.slug);
}