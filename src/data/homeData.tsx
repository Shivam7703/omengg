import {
  banner, banner2, banner3, banner4 , cl1, cl2,cl3,cl4,logo2, 
   pipe,
   drainage,
   road,
   civil,
   horiculture,
   bg,
   bhk,
   pilling,
   landscape,
   rmc,   civil1, civil2, civil3, civil4, civil5, civil6, civil7, civil8, civil9,
  civil10, civil11, civil12, civil13, civil14, civil15, civil16, civil17, civil18,

  // land
  land1, land2, land3, land4, land5, land6,
land7, land8,
  // rd
  rd1, rd2, rd3, rd4, rd5, rd6, rd7,

  // rmc
  rmc1, rmc2, rmc3, rmc4,

  // steel
  steel1, steel2, steel3, steel4,

  // ut
  ut1, ut2, ut3, ut4, ut5, ut6, ut7, ut8, ut9, ut10,
  ut11, ut12, ut13, ut14, ut15, ut16, ut17, ut18, ut19, ut20,
  ut21, ut22,

  // deep
  deep1, deep2, deep3, deep4, deep5, deep6, deep7, deep8,
} from "@/assets";
import { GiConcreteBag,GiPlantRoots, GiTreeBranch,GiFactory,GiDrill, GiSteelClaws} from "react-icons/gi";

import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiPipes } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import { IoIosLeaf } from "react-icons/io";
import { LiaRoadSolid } from "react-icons/lia";
import { LuPhone } from "react-icons/lu";
import { MdOutlineAltRoute } from "react-icons/md";
import { PiCityBold } from "react-icons/pi";
import { RiMailSendLine, RiSofaFill } from "react-icons/ri";

// homepage
export const navItemsArray = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About Us", href: "/about-us" },
  {
    id: 3,
    label: "Services",
    href: "/services",
    subNav: [
  {
    id: 1,
    label: "Drainage & Utilities",
    href: "/services/drainage-utilities",
  },
  {
    id: 2,
    label: "Roads & Footpaths",
    href: "/services/roads-footpaths",
  },
  {
    id: 3,
    label: "Civil Structures & Finishing Works",
    href: "/services/civil-structures-finishing-works",
  },
  {
    id: 4,
    label: "Horticulture",
    href: "/services/horticulture",
  },
  {
    id: 5,
    label: "Landscapes & Hardscapes",
    href: "/services/landscapes-hardscapes",
  },
  {
    id: 6,
    label: "Utility Diversions & Trenches",
    href: "/services/utility-diversions-trenches",
  },
  {
    id: 7,
    label: "Deep Excavations, Piling & Shoring Works",
    href: "/services/deep-excavations-piling-shoring-works",
  },
  {
    id: 8,
    label: "RMC Plant Installation & Operations",
    href: "/services/rmc-plant-installation-operations",
  }, {
    id: 9,
    label: "Mild Steel",
    href: "/services/mild-steel",
  }
],
  },
  { id: 4, label: "Projects", href: "/projects" },
  { id: 5, label: "Privacy Policy", href: "/privacy-policy" },
  { id: 6, label: "Blogs", href: "/blogs" },
  { id: 7, label: "Contact Us", href: "/contact-us" },
];

export const social = [
  {
    icon: <FaFacebookSquare />,
    href: "https://www.facebook.com/omengineersdelhi",
  },
  {
    icon: <FaInstagram />,

    href: "https://www.facebook.com/omengineersdelhi",
  },
  {
    icon: <FaXTwitter />,

    href: "https://www.facebook.com/omengineersdelhi",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.facebook.com/omengineersdelhi",
  },
];
// section1
export const sliderContent = [
  {
    id: 1,
    img: banner,
    welcome: "Om ENGINEERS",
    title: "Turning Blueprints Into Living Landmarks",
    para:
      "Building modern spaces through thoughtful design, engineering strength, and architectural vision.",
    btntext: "Explore More",
    href: "/services",
  },
  {
    id: 2,
    img: banner2,
    welcome: "om ENGINEERS",
    title: "Building Spaces That Last Generations",
    para: "Thoughtfully designed projects combining comfort, durability, and timeless value for families.",
    btntext: "Contact Us",
    href: "/contact-us",
  },
    {
    id: 3,
    img: banner3,
    welcome: "om ENGINEERS",
    title: "Creating Comfortable Spaces that Feel Like Home",
    para: "Designing warm, functional environments that support everyday living and lasting comfort.",
    btntext: "Contact Us",
    href: "/contact-us",
  },
];

export const Servicedata = {
  title1: "OUR SERVICES",
  title2: "Engineering Excellence Across Diverse Infrastructure Domains",
  service: [
   {
  title: "Drainage & Utilities",
  text: "Reliable drainage and utility systems built for efficient urban infrastructure",
  img: drainage,
  imgs:[ut1, ut2, ut3, ut4, ut5, ut6, ut7, ut8, ut9, ut10,
  ut11, ut12, ut13, ut14, ut15, ut16],
  icon: <MdOutlineAltRoute />,
  description: "We deliver well-planned drainage and utility infrastructure that supports modern developments and public services. Our approach focuses on efficient water management, safe installation of underground utilities, and careful coordination with surrounding infrastructure. From planning to execution, every stage is handled with precision to ensure long-term functionality, safety, and minimal disruption to existing networks.",
  how_we_work: [
    {
      id: 1,
      heading: "Site Assessment & System Planning",
      para: "We evaluate ground conditions, drainage flow patterns, and utility requirements to design systems that manage water effectively and support service networks.",
    },
    {
      id: 2,
      heading: "Engineering Design & Coordination",
      para: "Detailed system layouts are developed while coordinating with relevant authorities and service providers to ensure compliance with technical and regulatory standards.",
    },
    {
      id: 3,
      heading: "Installation & Network Development",
      para: "Drainage pipelines, utility conduits, and associated infrastructure are installed using controlled construction methods to ensure durability and operational efficiency.",
    },
    {
      id: 4,
      heading: "Testing & System Commissioning",
      para: "Final testing and inspections verify proper water flow, system stability, and overall performance before the infrastructure becomes fully operational.",
    },
  ],
  faqs: [
    {
      id: 1,
      que: "Why are proper drainage systems important in infrastructure projects?",
      ans: "Efficient drainage systems help manage rainwater and wastewater, preventing flooding, protecting structures, and maintaining safe and functional environments for both urban and residential areas.",
    },
    {
      id: 2,
      que: "How are underground utilities coordinated during construction?",
      ans: "Utilities such as water supply, electrical conduits, and communication lines are carefully mapped and installed according to engineered layouts to avoid conflicts and ensure accessibility for future maintenance.",
    },
    {
      id: 3,
      que: "What factors influence drainage system performance?",
      ans: "Proper gradients, pipe quality, soil conditions, and accurate installation methods all play an important role in maintaining smooth water flow and preventing blockages or system failures.",
    },
    {
      id: 4,
      que: "How is safety ensured during utility installation?",
      ans: "Safety is maintained through controlled excavation, proper equipment handling, protective measures for workers, and adherence to engineering and construction standards.",
    },
    {
      id: 5,
      que: "What ensures long-term reliability of drainage and utility systems?",
      ans: "Reliable systems depend on quality materials, accurate installation, proper system design, and thorough testing to ensure stable performance and minimal maintenance needs over time.",
    },
  ],
},
{
  title: "Roads & Footpaths",
  text: "Durable roads and footpaths built for daily use",
  img: road,
  imgs:[rd1, rd2, rd3, rd4, rd5, rd6, rd7],
  icon: <LiaRoadSolid />,
  description: "We develop high-quality roads and pedestrian pathways designed for safety, durability, and smooth movement. Our team ensures proper coordination between surface works and underlying utilities, delivering infrastructure that performs reliably under daily traffic and long-term usage conditions.",
  how_we_work: [
    {
      id: 1,
      heading: "Site Study & Planning",
      para: "We assess traffic patterns, ground conditions, and service networks to plan durable and efficient road layouts.",
    },
    {
      id: 2,
      heading: "Design & Material Selection",
      para: "Appropriate materials and construction methods are selected to match load requirements and usage intensity.",
    },
    {
      id: 3,
      heading: "Construction & Surface Works",
      para: "Roads and footpaths are constructed with accurate layering, proper drainage, and finishing for long-lasting performance.",
    },
    {
      id: 4,
      heading: "Quality Checks & Completion",
      para: "Final inspections ensure smooth surfaces, safety standards, and readiness for public use.",
    },
  ],
  faqs: [
    {
      id: 1,
      que: "How do you ensure long-term surface durability?",
      ans: "We ensure durability through proper ground preparation, quality materials, accurate layering, controlled compaction, and strict quality checks designed to withstand traffic loads and varying weather conditions.",
    },
    {
      id: 2,
      que: "Are underground utilities considered during construction?",
      ans: "Yes, we carefully map and coordinate existing and planned utilities before construction to avoid damage, ensure accessibility, and maintain seamless integration between surface infrastructure and underground services.",
    },
    {
      id: 3,
      que: "What measures improve pedestrian safety?",
      ans: "Pedestrian safety is enhanced through well-defined walkways, non-slip surfaces, proper kerb heights, clear markings, adequate drainage, and thoughtful design aligned with local safety standards.",
    },
    {
      id: 4,
      que: "Can projects be completed in high-traffic areas?",
      ans: "Yes, we use phased execution, traffic management plans, and efficient scheduling to minimize disruption while ensuring safety and maintaining accessibility during construction in busy zones.",
    },
    {
      id: 5,
      que: "What defines the final quality of roads and footpaths?",
      ans: "Final quality depends on precise execution, proper drainage design, material consistency, finishing accuracy, and continuous monitoring to deliver smooth, durable, and user-friendly infrastructure.",
    },
  ],
},
{
  title: "Civil Structures & Finishing Works",
  text: "Strong civil structures with precise finishing and durability",
  img: civil,
  imgs:[civil1, civil2, civil3, civil4, civil5, civil6, civil7, civil8, civil9,
  civil10, civil11, civil12, civil13, civil14, civil15, civil16, civil17, civil18],
  icon: <GiConcreteBag />,
  description: "We deliver reliable civil structures supported by high-quality finishing that enhances both functionality and appearance. From structural execution to final detailing, every stage is handled with precision, ensuring long-lasting performance and clean, refined outcomes.",
  how_we_work: [
    {
      id: 1,
      heading: "Planning & Structural Assessment",
      para: "We evaluate design requirements, load conditions, and site constraints to plan safe and efficient structural solutions.",
    },
    {
      id: 2,
      heading: "Engineering & Detailing",
      para: "Accurate drawings and specifications are prepared to ensure structural stability and seamless finishing execution.",
    },
    {
      id: 3,
      heading: "Construction & Structural Works",
      para: "Structures are executed using quality materials, skilled workmanship, and strict quality control practices.",
    },
    {
      id: 4,
      heading: "Finishing & Quality Review",
      para: "Finishing works are completed with attention to detail, followed by inspections to ensure durability and visual consistency.",
    },
  ],
  faqs: [
    {
      id: 1,
      que: "What types of civil structures do you execute?",
      ans: "We handle a wide range of civil works, including foundations, retaining structures, chambers, boundary walls, and associated structural elements.",
    },
    {
      id: 2,
      que: "How is structural safety ensured?",
      ans: "Safety is ensured through proper design calculations, approved materials, skilled execution, and continuous quality and safety inspections.",
    },
    {
      id: 3,
      que: "How do finishing works add value to structures?",
      ans: "Finishing enhances usability, protects structural elements, improves appearance, and ensures the structure performs well over time.",
    },
    {
      id: 4,
      que: "Are finishing works coordinated with structural execution?",
      ans: "Yes, finishing works are planned alongside structural construction to avoid rework and ensure smooth project flow.",
    },
    {
      id: 5,
      que: "What ensures the long-term performance of completed works?",
      ans: "Quality materials, accurate execution, protective finishes, and adherence to engineering standards ensure long-term structural performance.",
    },
  ],
},
{
  title: "Horticulture",
  text: "Healthy plant systems developed for sustainable growth and environmental balance",
  img: horiculture,
  imgs:[horiculture, horiculture, horiculture],
  icon: <GiPlantRoots />,
  description: "Our horticulture services focus on the scientific cultivation and management of plants to create healthy, sustainable green environments. We apply horticultural best practices to ensure proper plant growth, soil health, and environmental balance. By combining careful planning, appropriate plant selection, and ongoing care strategies, we develop green spaces that remain vibrant, resilient, and beneficial to the surrounding ecosystem.",
  how_we_work: [
    {
      id: 1,
      heading: "Site Assessment & Soil Evaluation",
      para: "We evaluate soil structure, nutrient levels, sunlight exposure, and moisture conditions to determine the most suitable planting strategy for healthy plant development.",
    },
    {
      id: 2,
      heading: "Plant Selection & Growth Planning",
      para: "Plant species are carefully selected based on climate compatibility, growth patterns, and ecological benefits to ensure sustainable and well-balanced planting.",
    },
    {
      id: 3,
      heading: "Planting & Cultivation",
      para: "Our team performs planting with proper spacing, soil treatment, and support systems to encourage strong root development and healthy plant growth.",
    },
    {
      id: 4,
      heading: "Monitoring & Maintenance Guidance",
      para: "We provide guidance on watering, pruning, fertilization, and seasonal care to maintain plant health and ensure long-term horticultural success.",
    },
  ],
  faqs: [
    {
      id: 1,
      que: "What does horticulture involve?",
      ans: "Horticulture involves the cultivation, care, and management of plants, including trees, shrubs, flowers, and ornamental plants. It focuses on improving plant health, productivity, and visual appeal through proper soil management, planting techniques, and maintenance practices.",
    },
    {
      id: 2,
      que: "How does horticulture support environmental health?",
      ans: "Healthy plant systems improve air quality, regulate temperatures, support biodiversity, and help manage soil stability. Proper horticultural practices contribute to balanced ecosystems and environmentally sustainable green spaces.",
    },
    {
      id: 3,
      que: "Are plants selected according to climate conditions?",
      ans: "Yes, plant species are selected based on climate compatibility, soil conditions, and growth requirements to ensure strong development, minimal stress, and long-term sustainability.",
    },
    {
      id: 4,
      que: "How is plant health maintained over time?",
      ans: "Plant health is maintained through regular monitoring, appropriate irrigation, soil nutrient management, pruning, pest control, and seasonal care practices.",
    },
    {
      id: 5,
      que: "What determines successful horticulture development?",
      ans: "Successful horticulture depends on soil quality, suitable plant selection, proper planting techniques, environmental conditions, and consistent care to support healthy growth and long-term plant stability.",
    },
  ],
},
{
  title: "Landscapes & Hardscapes",
  text: "Functional landscapes and durable hardscapes designed for lasting outdoor spaces",
  img: landscape,
  imgs:[land1, land2, land3, land4, land5, land6,
land7, land8],
  icon: <GiTreeBranch />,
  description: "We create balanced outdoor spaces that integrate natural landscapes with durable hardscape features. Our approach combines aesthetic planning, functional layouts, and quality materials to develop environments that enhance usability, visual appeal, and long-term sustainability for residential, commercial, and public spaces.",
  how_we_work: [
    {
      id: 1,
      heading: "Site Study & Concept Planning",
      para: "We analyze site conditions, climate factors, soil quality, and space usage to develop landscape concepts that align with environmental conditions and project objectives.",
    },
    {
      id: 2,
      heading: "Design & Material Selection",
      para: "Plant species, paving materials, stonework, and structural elements are carefully selected to ensure visual harmony, durability, and low maintenance.",
    },
    {
      id: 3,
      heading: "Installation & Construction",
      para: "Our team installs landscape features, hardscape structures, pathways, retaining elements, and planting systems with precise execution and proper ground preparation.",
    },
    {
      id: 4,
      heading: "Finishing & Quality Review",
      para: "Final checks ensure healthy planting, proper drainage, stable hardscape structures, and overall landscape balance before project completion.",
    },
  ],
  faqs: [
    {
      id: 1,
      que: "What is the difference between landscaping and hardscaping?",
      ans: "Landscaping focuses on natural elements such as plants, lawns, trees, and soil preparation, while hardscaping includes structural features like pathways, patios, retaining walls, stone surfaces, and outdoor seating areas that provide durability and functionality.",
    },
    {
      id: 2,
      que: "How do you ensure long-term landscape sustainability?",
      ans: "We select climate-suitable plants, prepare soil properly, design efficient irrigation systems, and use durable materials to ensure landscapes remain healthy, visually appealing, and easy to maintain over time.",
    },
    {
      id: 3,
      que: "Can landscapes be designed for both aesthetics and functionality?",
      ans: "Yes, well-planned landscapes balance beauty with usability by integrating green areas, walking paths, seating zones, lighting, and drainage systems to create spaces that are both attractive and practical.",
    },
    {
      id: 4,
      que: "What materials are commonly used in hardscape construction?",
      ans: "Hardscape projects typically use materials such as natural stone, concrete pavers, bricks, gravel, and treated wood, chosen based on durability, load requirements, and compatibility with the surrounding landscape design.",
    },
    {
      id: 5,
      que: "What ensures the final quality of landscape and hardscape projects?",
      ans: "Final quality depends on proper ground preparation, correct installation techniques, plant health management, material durability, and thorough inspection to ensure the outdoor space remains stable, functional, and visually appealing for years.",
    },
  ],
},
{
  title: "Utility Diversions & Trenches",
  text: "Safe utility diversions and trenching solutions for uninterrupted infrastructure development",
  img: pipe,
  imgs:[ ut17, ut18, ut19, ut20,
  ut21, ut22],
  icon: <MdOutlineAltRoute />,
  description: "We provide professional utility diversion and trenching services to support infrastructure and development projects. Our work ensures that essential underground utilities such as water lines, electrical cables, communication networks, and drainage systems are safely relocated or installed without disrupting surrounding infrastructure. Through careful planning, precise execution, and strict safety standards, we help maintain service continuity while enabling smooth project progress.",
  how_we_work: [
    {
      id: 1,
      heading: "Site Survey & Utility Identification",
      para: "We conduct detailed surveys to locate existing underground utilities, assess site conditions, and plan safe diversion or trenching routes.",
    },
    {
      id: 2,
      heading: "Planning & Method Selection",
      para: "Appropriate trenching methods, safety measures, and diversion strategies are selected to ensure minimal disruption and efficient execution.",
    },
    {
      id: 3,
      heading: "Excavation & Utility Diversion",
      para: "Trenches are excavated with precision, and utilities are safely relocated, installed, or protected while maintaining structural and service integrity.",
    },
    {
      id: 4,
      heading: "Restoration & Final Checks",
      para: "After completion, trenches are properly refilled, surfaces restored, and final inspections conducted to ensure stability, safety, and service continuity.",
    },
  ],
  faqs: [
    {
      id: 1,
      que: "Why are utility diversions necessary during infrastructure projects?",
      ans: "Utility diversions are required when existing underground services interfere with planned construction. Relocating these utilities ensures infrastructure development can proceed safely without damaging essential public service networks.",
    },
    {
      id: 2,
      que: "How do you locate underground utilities before excavation?",
      ans: "We conduct site surveys, review service maps, and use detection techniques to accurately identify underground utilities before trenching begins, reducing the risk of accidental damage.",
    },
    {
      id: 3,
      que: "What safety measures are followed during trenching work?",
      ans: "Safety measures include controlled excavation, proper trench support, safe equipment operation, and careful monitoring to protect workers, nearby structures, and existing utilities.",
    },
    {
      id: 4,
      que: "How is disruption to public services minimized?",
      ans: "Work is planned in coordination with utility providers, and diversions are executed systematically to maintain continuous service while construction activities are carried out.",
    },
    {
      id: 5,
      que: "What ensures the quality of trenching and diversion work?",
      ans: "Quality is ensured through precise excavation, correct utility installation methods, proper backfilling, compaction, and final inspections to maintain long-term ground stability and service reliability.",
    },
  ],
},
{
  title: "Deep Excavations, Piling & Shoring Works",
  text: "Strong foundation systems engineered for stability and structural safety",
  img: pilling,
  imgs:[  deep1, deep2, deep3, deep4, deep5, deep6, deep7, deep8],
  icon: <GiDrill />,
  description: "We provide specialised services for deep excavations, piling, and shoring to support complex construction and infrastructure projects. Our team focuses on structural stability, soil safety, and precise engineering to ensure that foundations are strong and reliable. Through careful planning, modern construction techniques, and strict safety measures, we deliver groundwork solutions that support long-term structural performance.",
  how_we_work: [
    {
      id: 1,
      heading: "Site Investigation & Soil Analysis",
      para: "We evaluate soil conditions, groundwater levels, and load requirements to determine the most suitable excavation, piling, and shoring methods.",
    },
    {
      id: 2,
      heading: "Engineering Design & Planning",
      para: "Detailed structural and geotechnical designs are prepared to ensure excavation safety, proper load transfer, and ground stability.",
    },
    {
      id: 3,
      heading: "Excavation, Piling & Shoring Execution",
      para: "Deep excavations are carried out with controlled methods while piling and shoring systems are installed to support surrounding soil and structures.",
    },
    {
      id: 4,
      heading: "Monitoring & Structural Safety Checks",
      para: "Continuous monitoring and inspections ensure that excavation depths, pile installations, and support systems maintain stability and meet engineering standards.",
    },
  ],
  faqs: [
    {
      id: 1,
      que: "Why are piling and shoring important in deep excavation projects?",
      ans: "Piling transfers structural loads to deeper, stronger soil layers, while shoring supports surrounding soil during excavation. Together, they ensure stability and prevent ground movement that could affect nearby structures.",
    },
    {
      id: 2,
      que: "How is safety maintained during deep excavation work?",
      ans: "Safety is ensured through soil analysis, engineered support systems, controlled excavation methods, continuous monitoring, and adherence to strict construction safety standards.",
    },
    {
      id: 3,
      que: "What factors determine the type of piling used?",
      ans: "Pile selection depends on soil conditions, groundwater levels, structural load requirements, and project design specifications to ensure optimal foundation strength.",
    },
    {
      id: 4,
      que: "Can deep excavation work be carried out in congested urban areas?",
      ans: "Yes, specialised techniques, careful planning, and protective support systems allow safe execution even in restricted spaces or areas surrounded by existing structures.",
    },
    {
      id: 5,
      que: "What ensures the final quality of foundation work?",
      ans: "Accurate engineering design, precise installation of piles, effective shoring systems, and continuous monitoring ensure long-term structural stability and reliable foundation performance.",
    },
  ],
},
{
  title: "RMC Plant Installation & Operations",
  text: "Efficient ready-mix concrete plants designed for reliable production and supply",
  img: rmc,
  imgs:[  rmc1, rmc2, rmc3, rmc4],
  icon: <GiFactory />,
  description: "We provide professional services for the installation and operation of Ready-Mix Concrete (RMC) plants designed to deliver consistent and high-quality concrete for construction projects. Our approach focuses on efficient plant setup, accurate batching systems, and smooth operational processes to ensure reliable concrete supply for infrastructure and building developments.",
  how_we_work: [
    {
      id: 1,
      heading: "Site Assessment & Layout Planning",
      para: "We assess site space, logistics access, and production capacity requirements to plan the optimal layout for efficient plant operation.",
    },
    {
      id: 2,
      heading: "Equipment Selection & Plant Installation",
      para: "Batching equipment, mixers, storage silos, and conveyor systems are installed with precision to ensure smooth production and material handling.",
    },
    {
      id: 3,
      heading: "System Testing & Operational Setup",
      para: "All machinery and batching systems are tested and calibrated to ensure accurate concrete mixing and reliable production performance.",
    },
    {
      id: 4,
      heading: "Operations Management & Quality Monitoring",
      para: "Daily operations are monitored to maintain production efficiency, material quality, and consistent supply to meet construction demands.",
    },
  ],
  faqs: [
    {
      id: 1,
      que: "What is the purpose of an RMC plant in construction projects?",
      ans: "An RMC plant produces ready-mix concrete in controlled conditions, ensuring consistent quality, accurate proportions, and reliable supply for construction sites.",
    },
    {
      id: 2,
      que: "How is quality maintained during concrete production?",
      ans: "Quality is maintained through precise batching systems, controlled mixing processes, quality raw materials, and regular monitoring to ensure concrete meets required strength and performance standards.",
    },
    {
      id: 3,
      que: "What factors influence the efficiency of an RMC plant?",
      ans: "Plant layout, equipment capacity, raw material handling systems, and effective operational management all contribute to efficient and uninterrupted concrete production.",
    },
    {
      id: 4,
      que: "Can RMC plants support large construction projects?",
      ans: "Yes, RMC plants are designed to handle high production volumes, ensuring consistent concrete supply for large infrastructure and building developments.",
    },
    {
      id: 5,
      que: "What ensures smooth plant operations over time?",
      ans: "Regular equipment maintenance, calibrated batching systems, trained operators, and continuous quality checks ensure reliable and long-term plant performance.",
    },
  ],
},
 {
  title: "Mild Steel",
  text: "High-quality mild steel designed for strength, versatility, and long-term durability.",
  img: steel1,
  imgs: [steel1, steel2, steel3, steel4],
  icon: <GiSteelClaws />,
  description: "We provide expertly fabricated mild steel solutions that support a wide range of construction and industrial applications. Our approach focuses on precision engineering, quality material selection, and efficient fabrication processes to ensure strong, reliable, and cost-effective structures. From initial design to final installation, every stage is managed with accuracy to deliver durability, safety, and seamless integration into projects.",
  
  how_we_work: [
    {
      id: 1,
      heading: "Material Selection & Planning",
      para: "We choose high-grade mild steel based on project requirements, ensuring the right balance of strength, flexibility, and cost-efficiency for optimal performance.",
    },
    {
      id: 2,
      heading: "Design & Fabrication",
      para: "Detailed designs and fabrication processes are carried out using advanced techniques to create accurate and structurally sound components.",
    },
    {
      id: 3,
      heading: "Processing & Finishing",
      para: "Cutting, welding, shaping, and surface treatments are performed to enhance durability, corrosion resistance, and overall finish quality.",
    },
    {
      id: 4,
      heading: "Installation & Quality Check",
      para: "Final installation is executed with precision, followed by thorough inspections to ensure structural stability, safety, and compliance with standards.",
    },
  ],

  faqs: [
    {
      id: 1,
      que: "Why is mild steel widely used in construction?",
      ans: "Mild steel offers excellent strength, flexibility, and affordability, making it suitable for structural frameworks, supports, and various engineering applications.",
    },
    {
      id: 2,
      que: "What makes mild steel durable for long-term use?",
      ans: "Its ability to withstand stress and load, combined with proper coating and finishing, ensures long-lasting performance in different environments.",
    },
    {
      id: 3,
      que: "Where can mild steel be used?",
      ans: "It is commonly used in buildings, bridges, industrial structures, fabrication works, and various mechanical applications.",
    },
    {
      id: 4,
      que: "How is quality maintained in mild steel fabrication?",
      ans: "Quality is ensured through proper material selection, precise fabrication techniques, skilled workmanship, and strict inspection processes.",
    },
    {
      id: 5,
      que: "What ensures safety in mild steel structures?",
      ans: "Safety depends on accurate design, proper welding, load calculations, and adherence to construction and engineering standards.",
    },
  ],
}
  ],
};

// section3
export const crafting = {
  

  title1: "BUILDING THE FUTURE",
  title2: "Designing Innovation with Modern Expertise",

  slides: [
    {
      id: 1,
      heading: "Credibility & Commitment",
      img: banner,
      text:
        "Building confidence through honesty, consistency, and dependable project delivery",
    },
    {
      id: 2,
      heading: "Relationship That Lasts",
      img: banner2,
      text:
        "Strengthening relationships through integrity, transparency, and mutual respect",
    },
    {
      id: 3,
      heading: "Structural Excellence",
      img: banner4,
      text:
        "Creating strong, safe structures with quality materials and expert execution",
    },
    {
      id: 4,
      heading: "Smart City Solutions",
      img: banner3,
      text:
        "Planning sustainable urban spaces for efficient, future-ready communities",
    },
  ],
};

// export const countDown = [
//   {
//     id: 1,
//     para: "Projects Completed Successfully",
//     title: "Projects Completed",
//     Value: "150",
//     value2: "+",
//   },
//   {
//     id: 2,
//     para: "Trusted and Satisfied Clients",
//     title: "Happy Customers",
//     Value: "150",
//     value2: "+",
//   },
//   {
//     id: 3,
//     para: "High Success Rate with Clients",
//     title: "Success Rate",
//     Value: "100",
//     value2: "%",
//   },
//   {
//     id: 4,
//     para: "Expertise Built for Years",
//     title: "Years of Experience",
//     Value: "30",
//     value2: "+",
//   },
// ];

export const testimonialData = {
  title1: "TESTIMONIALS",
  title2: "Here's what our satisfied clients are saying",

  testimonials: [
    {
      id: 1,
      title: "R.M. Mathur",
      text:
        "Working with OM Engineering Constructions Pvt. Ltd. was a smooth experience from start to finish. The team was professional, transparent, and always available to answer our queries. The quality of work and timely delivery truly impressed us. We felt confident throughout the entire construction process.",
      img: cl1,
    },
    {
      id: 2,
      title: "Shivam Goyal",
      text:
        "We were looking for the best builders in Delhi for our commercial project, and choosing OM Engineering was the right decision. Their planning, coordination, and execution were excellent. The final outcome matched exactly what was promised, with no compromise on quality or deadlines.",
      img: cl2,
    },
    {
      id: 3,
      title: "Sageer Ansari",
      text:
        "What I appreciated most was their honesty and attention to detail. Every stage of construction was clearly explained, and updates were shared regularly. The team handled challenges calmly and professionally. It felt reassuring to work with a company that truly values trust and commitment.",
      img: cl3,
    },
    {
      id: 4,
      title: "Prashant",
      text:
        "After comparing several companies, we chose OM Engineering because of their reputation as one of the best builders in Delhi. They delivered high standards, maintained safety at the site, and completed the project on time. We are extremely satisfied with the overall experience.",
      img: cl4,
    },
  ],
};

export const blogData = {
  
  title1: "Blogs & News",
  title2: "Stay Updated With our Latest News And Blogs",
  blogs: [
    {
      id: 1,
      title: "Best Builders in Delhi NCR",
      text:
        "The Delhi National Capital Region (NCR) is one of India’s fastest-growing real estate hubs. With rapid urbanization, infrastructure development, and increasing demand for modern housing and commercial spaces, the need for reliable and high-quality builders has never been greater. Choosing the right builder is critical—not only for securing a property but for...",
      text2: `<div class="blog-content">

  <h1 style="color: #2c3e50;">Best Builders in Delhi NCR</h1>

  <p>The Delhi National Capital Region (NCR) is one of India’s fastest-growing real estate hubs. With rapid urbanization, infrastructure development, and increasing demand for modern housing and commercial spaces, the need for reliable and high-quality builders has never been greater. Choosing the right builder is critical—not only for securing a property but for ensuring that your investment is safe, and your dream home or project is delivered on time with the highest standards.</p>

  <p>Among the many players in this competitive market, OM Engineers stands out as a leading name in the infrastructure and real estate development space in Delhi NCR. Backed by over four decades of engineering legacy, OM Engineers combines experience, innovation, and a client-focused approach to deliver exceptional projects that set benchmarks for quality, safety, and sustainability.</p>

  <h2 style="color: #34495e;">Why OM Engineers is One of the Best Builders in Delhi NCR</h2>

  <p>OM Engineers has carved a niche in the region with its commitment to precision, transparency, and forward-thinking project management. Here's why they are considered among the best:</p>

  <h3 style="color: #3b556e;">1. Legacy and Experience</h3>
  <p>With 42 years of rich legacy in engineering and infrastructure, OM Engineers brings unmatched expertise to every project. This long-standing experience translates into a deep understanding of complex site conditions, regulatory requirements, and advanced construction technologies.</p>

  <h3 style="color: #3b556e;">2. Quality and Safety</h3>
  <p>Quality assurance and safety are non-negotiable pillars at OM Engineers. They strictly adhere to rigorous quality standards and environmental safety norms, ensuring that each project is structurally sound, durable, and environmentally responsible.</p>

  <h3 style="color: #3b556e;">3. Innovative Construction Practices</h3>
  <p>OM Engineers leverage modern engineering techniques and technologies such as trenchless pipeline installation and mechanized construction methods. These innovations enable efficient, less disruptive, and cost-effective project execution even in challenging urban environments.</p>

  <h3 style="color: #3b556e;">4. Client-Centric Approach</h3>
  <p>Understanding client needs and maintaining transparent communication is central to OM Engineers’ philosophy. From planning to execution and post-delivery support, they prioritize customer satisfaction, building long-term trust and relationships.</p>

  <h3 style="color: #3b556e;">5. Diverse Infrastructure Expertise</h3>
  <p>OM Engineers offers comprehensive infrastructure solutions across various verticals:</p>

  <ul>
    <li>Pipeline networks (water, sewer, stormwater)</li>
    <li>Drainage and utility diversions</li>
    <li>Roads and footpaths</li>
    <li>Civil structures and finishing works</li>
    <li>Horticulture and landscaping</li>
  </ul>

  <p>This broad expertise allows them to manage complex, multi-disciplinary projects with precision.</p>

  <h2 style="color: #34495e;">What Sets OM Engineers Apart</h2>

  <p>OM Engineers is not just another builder; they are your strategic partner in building sustainable and future-ready infrastructure. Here's how they add value:</p>

  <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
    <thead>
      <tr>
        <th style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: #f4f6f8;">Feature</th>
        <th style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: #f4f6f8;">OM Engineers’ Strength</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px;">Project Delivery</td>
        <td style="border: 1px solid #ddd; padding: 10px;">Proven track record of timely and on-budget project completions</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px;">Sustainability Focus</td>
        <td style="border: 1px solid #ddd; padding: 10px;">Commitment to green infrastructure and eco-friendly construction methods</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px;">Technological Edge</td>
        <td style="border: 1px solid #ddd; padding: 10px;">Use of advanced machinery and trenchless technology for efficient execution</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px;">Safety Standards</td>
        <td style="border: 1px solid #ddd; padding: 10px;">Comprehensive safety protocols ensuring zero compromise on worker and public safety</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px;">Client Engagement</td>
        <td style="border: 1px solid #ddd; padding: 10px;">Transparent communication and dedicated support throughout the project lifecycle</td>
      </tr>
    </tbody>
  </table>

  <h2 style="color: #34495e;">How OM Engineers Ensure Successful Project Execution</h2>

  <p>OM Engineers follows a structured work process to guarantee excellence at every stage:</p>

  <h3 style="color: #3b556e;">1. Planning and Design</h3>
  <p>Careful assessment of project requirements, site conditions, and client expectations to create detailed and feasible plans.</p>

  <h3 style="color: #3b556e;">2. Engineering and Technology</h3>
  <p>Applying innovative engineering methods and leveraging mechanized equipment to optimize construction efficiency and quality.</p>

  <h3 style="color: #3b556e;">3. Execution and Supervision</h3>
  <p>Strict adherence to quality controls, safety protocols, and regular monitoring to ensure timely, error-free delivery.</p>

  <h3 style="color: #3b556e;">4. Completion and Support</h3>
  <p>Final inspections, handovers, and ongoing client support to maintain lasting relationships and satisfaction.</p>

  <h2 style="color: #34495e;">Why Investing in Quality Builders Matters in Delhi NCR</h2>

  <p>The real estate market in Delhi NCR offers many opportunities, but it also has challenges like delayed projects, substandard construction, and legal hassles with some developers. Choosing a reputed and experienced builder like OM Engineers minimizes these risks.</p>

  <p>Benefits of choosing OM Engineers include:</p>

  <ul>
    <li>Assurance of RERA-compliant projects that protect buyer interests</li>
    <li>Transparent pricing with no hidden costs</li>
    <li>Use of premium-quality materials and modern construction standards</li>
    <li>Projects designed to offer excellent connectivity and amenities</li>
    <li>Emphasis on sustainability and environmental safety</li>
  </ul>

  <h2 style="color: #34495e;">The Growing Real Estate Landscape in Delhi NCR</h2>

  <p>Delhi NCR continues to expand with new infrastructure developments such as metro connectivity, expressways, and commercial hubs. This growth fuels demand for reliable builders who can deliver smart, eco-friendly, and well-planned communities.</p>

  <p>OM Engineers aligns with this vision by embracing sustainability, innovation, and quality as their core values, making them the ideal choice for homebuyers, investors, and government projects alike.</p>

  <h2 style="color: #34495e;">OM Engineers — Building the Future of Delhi NCR</h2>

  <p>When looking for the best builders in Delhi NCR, OM Engineers represents a perfect blend of tradition, innovation, and professionalism. Their decades of experience, client-first approach, and technical expertise make them a trusted partner for infrastructure projects that define modern urban living.</p>

  <p>Whether it’s residential complexes, commercial buildings, or large infrastructure ventures, OM Engineers consistently delivers projects that meet the highest standards of safety, quality, and sustainability.</p>

  <p>Choosing OM Engineers means choosing peace of mind, timely delivery, and a future-ready investment in the heart of India’s most vibrant region.</p>

</div>
`,
      date: "Feb 13, 2026",
      img: civil,
        author: "Admin",
        featured: true
    },
    {
      id: 2,
      title: "How to Choose the Perfect Property in the Ideal Location",
      text:
        "Buying a property is one of the biggest decisions you’ll make, whether it’s for your home, investment, or business. Choosing the perfect property means more than just liking...",
      text2: `<div class="blog-content">

  <h1>How to Choose the Perfect Property in the Ideal Location</h1>

  <p>Buying a property is one of the biggest decisions you’ll make, whether it’s for your home, investment, or business. Choosing the perfect property means more than just liking the building itself — location plays a crucial role in determining your comfort, convenience, and the property’s future value.</p>

  <p>In this blog, we will guide you through the essential factors to consider when selecting a property and provide insights on how to find the right place that fits your needs and budget.</p>

  <h2>Why Location Matters in Property Buying</h2>

  <p>Location affects:</p>

  <ul>
    <li><strong>Resale Value:</strong> Properties in prime locations tend to appreciate faster.</li>
    <li><strong>Lifestyle:</strong> Proximity to work, schools, hospitals, and recreational spots.</li>
    <li><strong>Accessibility:</strong> Ease of commute and availability of public transport.</li>
    <li><strong>Safety:</strong> Neighborhood security and infrastructure.</li>
    <li><strong>Future Development:</strong> Planned infrastructure can boost property value.</li>
  </ul>

  <h2>Key Factors to Consider When Choosing a Property Location</h2>

  <h3>1. Neighborhood and Community</h3>
  <p>Understand the vibe and demographic of the area. Visit at different times to observe noise levels, traffic, and cleanliness. A good neighborhood improves quality of life.</p>

  <h3>2. Connectivity</h3>
  <p>Check accessibility to major roads, highways, metro stations, and public transport. Consider your daily commute and the convenience for family members.</p>

  <h3>3. Amenities and Facilities</h3>
  <p>Look for nearby schools, hospitals, shopping centers, parks, and entertainment options. These amenities add comfort and increase property demand.</p>

  <h3>4. Safety and Security</h3>
  <p>Research crime rates and safety measures in the locality. Gated communities or areas with active neighborhood groups often offer better security.</p>

  <h3>5. Future Growth Potential</h3>
  <p>Investigate upcoming projects like new infrastructure, commercial hubs, or government developments. These can enhance your property’s value.</p>

  <h3>6. Budget and Affordability</h3>
  <p>Balance your dream location with your budget. Sometimes, slightly offbeat areas offer better value for money and good growth prospects.</p>

  <h2>Popular Property Types and Their Suitability</h2>

  <p>Choosing the property type is as important as choosing the location. Below is a table that summarizes common property types, their key specialties, and average price ranges in Delhi NCR. Prices can vary widely based on exact location, size, and amenities.</p>

  <table>
    <thead>
      <tr>
        <th>Property Type</th>
        <th>Specialty</th>
        <th>Price Range (INR)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Apartments</td>
        <td>Security, amenities, and community living</td>
        <td>₹50 Lakh – ₹3 Crore</td>
      </tr>
      <tr>
        <td>Independent Houses</td>
        <td>Privacy, space, customization</td>
        <td>₹1 Crore – ₹10 Crore+</td>
      </tr>
      <tr>
        <td>Villas</td>
        <td>Luxury, exclusivity, gated community</td>
        <td>₹2 Crore – ₹15 Crore+</td>
      </tr>
      <tr>
        <td>Plots / Land</td>
        <td>Custom construction, investment</td>
        <td>₹30 Lakh – ₹5 Crore+</td>
      </tr>
      <tr>
        <td>Commercial Spaces</td>
        <td>Business use, high visibility</td>
        <td>₹1 Crore – ₹20 Crore+</td>
      </tr>
      <tr>
        <td>Studio Apartments</td>
        <td>Affordable, easy maintenance</td>
        <td>₹25 Lakh – ₹70 Lakh</td>
      </tr>
    </tbody>
  </table>

  <h2>How to Narrow Down Your Property Search</h2>

  <ul>
    <li><strong>Set Clear Priorities:</strong> List what matters most — location, price, property type, amenities.</li>
    <li><strong>Research Extensively:</strong> Use online portals, visit sites, and check reviews.</li>
    <li><strong>Consult Real Estate Experts:</strong> Trusted consultants provide insights and verified listings.</li>
    <li><strong>Visit Multiple Properties:</strong> Don’t settle for the first option. Compare locations and features.</li>
    <li><strong>Check Legalities:</strong> Ensure clear titles, no disputes, and compliance with local regulations.</li>
  </ul>

  <h2>Tips for Smart Property Selection</h2>

  <ul>
    <li>Always keep future resale and rental potential in mind.</li>
    <li>Don’t overlook hidden costs like maintenance, property taxes, and association fees.</li>
    <li>Factor in lifestyle needs for all family members.</li>
    <li>Keep an eye on government policies that may impact property prices.</li>
    <li>Trust your instincts, but back decisions with solid research.</li>
  </ul>

  <p>Choosing the perfect property in the ideal location is a balance of smart research, understanding your priorities, and careful planning. Whether you want a cozy apartment near your workplace or a spacious villa in a serene locality, investing time upfront will save you headaches later.</p>

  <p>If you need expert advice or assistance in finding your ideal property, feel free to connect with trusted professionals who understand the Delhi NCR real estate market well and can guide you every step of the way.</p>

</div>
`,
 date: "Feb 01, 2025",
        author: "Developer", 
             img: banner4,
    },
    {
      id: 3,
      title:
        "Why People Are Choosing 4BHK Flats in Delhi",
      text:
        "Delhi’s homebuyers are thinking bigger—and smarter. Over the last few years, the demand for 4BHK flats in Delhi has grown steadi...",
      text2: `<div class="blog-content">

  <h1>Why People Are Choosing 4BHK Flats in Delhi</h1>

  <p>Delhi’s homebuyers are thinking bigger—and smarter. Over the last few years, the demand for 4BHK flats in Delhi has grown steadily, transforming what was once seen as pure luxury into a practical lifestyle choice. Today, space is no longer a privilege; it’s a necessity shaped by evolving family dynamics, work culture, and long-term planning.</p>

  <p>So, what’s driving this shift? Let’s explore why 4BHK flats are becoming the preferred choice for modern Delhi families.</p>

  <h2>Bigger Families, Better Living</h2>

  <p>Family structures in Delhi are changing. Many households now include multiple generations living under one roof. Parents, children, and grandparents sharing a home need space that supports privacy as well as togetherness.</p>

  <p>A 4BHK flat provides that balance. Each member gets a private room, while shared spaces encourage family bonding. This setup makes everyday living smoother and more harmonious—especially for joint families.</p>

  <h2>Homes That Work as Hard as You Do</h2>

  <p>The rise of work-from-home and hybrid work models has completely redefined residential needs. Homes are no longer just places to relax; they are also offices, classrooms, and creative spaces.</p>

  <p>With a 4BHK flat, one room can easily be dedicated as a home office or study without disturbing daily routines. This flexibility is one of the biggest reasons professionals in Delhi are upgrading to larger homes.</p>

  <h2>Privacy Is the New Luxury</h2>

  <p>In a fast-paced city like Delhi, privacy has become invaluable. A 4BHK flat allows family members to maintain individual schedules, hobbies, and lifestyles without constant interruptions.</p>

  <p>Whether it’s hosting guests, managing different work timings, or simply enjoying quiet personal time, larger homes offer freedom that smaller apartments cannot match.</p>

  <h2>A Clear Upgrade in Lifestyle</h2>

  <p>4BHK flats are usually part of premium residential developments. These projects often come with better planning, modern architecture, and thoughtfully designed layouts.</p>

  <p>Residents enjoy benefits such as:</p>

  <ul>
    <li>Spacious living and dining areas</li>
    <li>Better ventilation and natural light</li>
    <li>Dedicated servant or utility rooms</li>
    <li>Enhanced security and parking facilities</li>
  </ul>

  <p>All these features contribute to a more comfortable and refined lifestyle.</p>

  <h2>A Smart Long-Term Investment</h2>

  <p>From an investment perspective, 4BHK flats in Delhi make strong financial sense. Larger homes tend to appreciate better over time, especially in well-connected and established localities.</p>

  <p>They are also highly attractive to:</p>

  <ul>
    <li>Corporate tenants</li>
    <li>Senior executives</li>
    <li>Expatriate families</li>
  </ul>

  <p>This results in higher rental yields and better long-term returns compared to smaller configurations.</p>

  <h2>Planning for the Future, Not Just Today</h2>

  <p>Modern homebuyers are thinking long term. Instead of upgrading every few years, many prefer investing once in a home that can adapt to changing needs.</p>

  <p>A 4BHK flat provides room for:</p>

  <ul>
    <li>Growing families</li>
    <li>Elderly parents</li>
    <li>Home offices or hobby rooms</li>
    <li>Occasional guests</li>
  </ul>

  <p>This future-ready approach makes 4BHK homes a sensible and forward-looking choice.</p>

  <h2>3BHK vs 4BHK: Why Buyers Are Upgrading</h2>

  <table>
    <thead>
      <tr>
        <th>Aspect</th>
        <th>3BHK Flat</th>
        <th>4BHK Flat</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Living Space</td>
        <td>Adequate</td>
        <td>Expansive</td>
      </tr>
      <tr>
        <td>Privacy</td>
        <td>Limited for large families</td>
        <td>High</td>
      </tr>
      <tr>
        <td>Work-from-Home</td>
        <td>Shared arrangements</td>
        <td>Dedicated room</td>
      </tr>
      <tr>
        <td>Guest Comfort</td>
        <td>Restricted</td>
        <td>Comfortable</td>
      </tr>
      <tr>
        <td>Long-Term Value</td>
        <td>Stable</td>
        <td>Strong appreciation</td>
      </tr>
    </tbody>
  </table>

  <h2>Better Design, Smarter Layouts</h2>

  <p>Today’s developers are designing 4BHK flats with intelligent layouts that maximize usable space. Open floor plans, smart storage solutions, and efficient room placement ensure that homes feel spacious yet cozy—not overwhelming.</p>

  <p>Modern architecture has made large homes more functional, elegant, and easy to maintain.</p>

  <h2>Less Clutter, More Calm</h2>

  <p>More space naturally means better organization. With extra rooms and storage, homes feel less crowded and more peaceful. Families can maintain cleaner, calmer environments that positively impact daily life.</p>

  <p>This mental and emotional comfort is a major reason why people are willingly choosing larger homes.</p>

  <h2>More Than a Home, a Statement</h2>

  <p>For many buyers in Delhi, a 4BHK flat represents stability, success, and thoughtful living. It reflects careful planning, lifestyle growth, and a desire for long-term comfort rather than short-term compromises.</p>

  <p>It’s not just about square footage—it’s about how life feels within that space.</p>

  <h2>Key Highlight</h2>

  <p>The rising popularity of 4BHK flats in Delhi is a reflection of changing priorities. With benefits like enhanced privacy, work-from-home flexibility, premium living standards, and strong investment potential, these homes perfectly align with modern urban living.</p>

  <p>As Delhi continues to grow and lifestyles continue to evolve, spacious and well-designed homes like 4BHK flats are no longer an exception—they are becoming the new standard.</p>

</div>
`,
       date: "Jan 18, 2026",
      img: bhk,
        author: "Admin",
    },
    {
      id: 4,
      title:
        "Vastu-Compliant Homes: Are They Worth Investing In?",
      text:
        "In India, buying a home is not just a financial decision—it’s an emotional one. Along with location, budget, and desig...",
      text2: `<div class="blog-content">

  <h1>Vastu-Compliant Homes: Are They Worth Investing In?</h1>

  <p>In India, buying a home is not just a financial decision—it’s an emotional one. Along with location, budget, and design, many homebuyers also consider Vastu Shastra before investing. This ancient Indian science of architecture continues to influence modern real estate, especially in cities like Delhi NCR.</p>

  <p>But the real question is: Are Vastu-compliant homes actually worth investing in, or is it just a belief-driven choice? Let’s explore this in a practical and balanced way.</p>

  <h2>What Does a Vastu-Compliant Home Mean?</h2>

  <p>A Vastu-compliant home is designed according to principles that focus on the balance of natural elements—earth, water, fire, air, and space. These principles guide the placement of rooms, entrances, kitchens, bedrooms, and even windows to promote harmony and positive energy.</p>

  <p>For many buyers, Vastu compliance provides peace of mind and a sense of well-being, even if they don’t strictly follow every rule.</p>

  <h2>Why Vastu Still Matters to Homebuyers</h2>

  <p>Despite modern construction techniques and urban planning, Vastu remains relevant for several reasons:</p>

  <ul>
    <li>Cultural and traditional beliefs</li>
    <li>Emotional comfort and mental satisfaction</li>
    <li>Influence on resale and rental demand</li>
    <li>Perception of positivity and stability</li>
  </ul>

  <p>For many families, a Vastu-compliant home feels “right” from the moment they step in—and that emotional connection plays a big role in decision-making.</p>

  <h2>Impact on Property Value and Demand</h2>

  <p>One of the strongest reasons people consider Vastu-compliant homes is their market demand. In many Indian cities, properties aligned with Vastu principles often attract more buyers and tenants.</p>

  <p>Homes with favorable orientations—such as east-facing entrances or well-placed kitchens—are usually easier to sell and rent. This doesn’t mean non-Vastu homes lack value, but Vastu compliance can offer an added advantage.</p>

  <h2>Practical Benefits Beyond Belief</h2>

  <p>While Vastu is often associated with spiritual beliefs, many of its principles align with practical design logic:</p>

  <ul>
    <li>Better natural light and ventilation</li>
    <li>Efficient space planning</li>
    <li>Comfortable room placements</li>
    <li>Improved airflow and openness</li>
  </ul>

  <p>These factors naturally improve living comfort, energy efficiency, and overall home experience—benefits that even non-believers can appreciate.</p>

  <h2>Common Vastu Features Buyers Look For</h2>

  <p>Here are some Vastu aspects that are commonly preferred and easy to follow in modern homes:</p>

  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Preferred Placement</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Main Entrance</td>
        <td>East or North</td>
      </tr>
      <tr>
        <td>Kitchen</td>
        <td>Southeast</td>
      </tr>
      <tr>
        <td>Master Bedroom</td>
        <td>Southwest</td>
      </tr>
      <tr>
        <td>Living Room</td>
        <td>North or East</td>
      </tr>
      <tr>
        <td>Bathrooms</td>
        <td>Northwest or West</td>
      </tr>
    </tbody>
  </table>

  <p>Many developers now design homes keeping these basics in mind, making it easier for buyers to find partially or fully Vastu-compliant options.</p>

  <h2>Is Vastu a Must or a Preference?</h2>

  <p>It’s important to understand that Vastu is not mandatory for a good home. Many successful, happy families live in homes that don’t strictly follow Vastu guidelines.</p>

  <p>However, for buyers who believe in it, Vastu compliance offers:</p>

  <ul>
    <li>Mental peace</li>
    <li>Emotional assurance</li>
    <li>Greater confidence in their investment</li>
  </ul>

  <p>The key is balance—choosing a home that meets practical needs while respecting personal beliefs.</p>

  <h2>Vastu and Modern Real Estate Projects</h2>

  <p>Today’s builders and architects often integrate Vastu principles without compromising modern design. Instead of rigid rules, they focus on adaptable layouts that suit urban living.</p>

  <p>This approach allows buyers to enjoy the benefits of Vastu while still getting:</p>

  <ul>
    <li>Modern aesthetics</li>
    <li>Efficient floor plans</li>
    <li>Smart use of space</li>
    <li>Contemporary amenities</li>
  </ul>

  <p>As a result, Vastu compliance has become more flexible and buyer-friendly.</p>

  <h2>Investment Perspective: Is It Worth It?</h2>

  <p>From an investment point of view, Vastu-compliant homes can offer certain advantages:</p>

  <ul>
    <li>Higher buyer interest</li>
    <li>Faster resale potential</li>
    <li>Better rental demand</li>
    <li>Wider audience appeal</li>
  </ul>

  <p>However, Vastu alone should never be the sole deciding factor. Location, construction quality, connectivity, and builder credibility remain far more important for long-term returns.</p>

  <h2>Things to Keep in Mind Before Investing</h2>

  <p>Before choosing a Vastu-compliant home, consider these points:</p>

  <ul>
    <li>Don’t compromise on location for Vastu</li>
    <li>Avoid excessive modification costs</li>
    <li>Focus on basic Vastu principles, not extremes</li>
    <li>Choose functionality over superstition</li>
  </ul>

  <p>A well-planned home that feels comfortable and practical will always hold value—Vastu or not.</p>

  <h2>Is It a Good Choice?</h2>

  <p>So, are Vastu-compliant homes worth investing in? The answer depends on personal belief and investment goals. For many buyers, Vastu adds emotional comfort and improves market appeal. For others, good design and location matter more.</p>

  <p>Ideally, the best investment is a home that balances practical living, modern design, and personal peace of mind. When those elements come together, Vastu becomes a value addition—not a limitation.</p>

</div>
`,
       date: "Jan 05, 2026",
      img: bg,
        author: "Admin",
    },
  ],
};

export const footer = {
  logo: logo2,
  text:
    "OM Engineers deliver innovative infrastructure solutions with decades of expertise, committed to quality, safety, and client satisfaction.",
  socials: {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram:
      "https://www.instagram.com/OmEngineers.contracts?igsh=MXh6Y2Q5dWJ6c3pzOA==",
    linkedin: "https://www.linkedin.com/school//",
    youtube: "https://www.youtube.com/c/",
  },
  copyrightText: "Copyrights © 2026 . Designed and Manage by ",
  list1: {
    title: "Quick Links",
    links: [
      { id: 1, label: "About", href: "/about-us" },
      { id: 2, label: "Services & Techs", href: "/services" },
      { id: 3, label: "Projects", href: "/projects" },
      { id: 4, label: "Blogs", href: "/blogs" },
      { id: 5, label: "Contact Us", href: "/contact-us" },
    ],
  },

  list2: {
    title: "Services",
    links: [
  {
    id: 1,
    label: "Drainage & Utilities",
    href: "/services/drainage-utilities",
  },
  {
    id: 2,
    label: "Roads & Footpaths",
    href: "/services/roads-footpaths",
  },
  {
    id: 3,
    label: "Civil Structures & Finishing Works",
    href: "/services/civil-structures-finishing-works",
  },
  {
    id: 4,
    label: "Horticulture",
    href: "/services/horticulture",
  },
  {
    id: 5,
    label: "Landscapes & Hardscapes",
    href: "/services/landscapes-hardscapes",
  },
  {
    id: 6,
    label: "Utility Diversions & Trenches",
    href: "/services/utility-diversions-trenches",
  },
  {
    id: 7,
    label: "Deep Excavations, Piling & Shoring Works",
    href: "/services/deep-excavations-piling-shoring-works",
  },
  {
    id: 8,
    label: "RMC Plant Installation & Operations",
    href: "/services/rmc-plant-installation-operations",
  },
   {
    id: 9,
    label: "Mild Steel ",
    href: "/services/mild-steel",
  },
],
  },
};

// about Page
export const aboutBanner = {
  title: "About Us",
  para:
    "We build strong, reliable spaces with a commitment to quality and trust. Our focus is on delivering every project with precision, safety, and excellence. ",
  slug: "about-us",
  img: banner2,
};

// export const aboutdata2 = {
//   img2: banner,
//   img: about,

//   title1: "WHO ARE WE",
//   title2: "We Create Comfortable & Liable Spaces",
//   para:
//     "The real estate and construction industry recognizes OmEngineers Contracts as its premier excellence-based corporate name. For 30 years the respected company has maintained its dedication to quality as it continues to establish new benchmarks in turning properties into luxurious family residences. If you're looking to turn your vision of a perfect home into reality, OmEngineers Contracts is the builder that will exceed your expectations and deliver a space that is as luxurious as it is functional.",
//   vision: [
//     {
//       id: 1,
//       icon: <RiSofaFill />,

//       heading: "Superior Quality",
//       text: "We build structures that provide long-lasting dependability",
//     },
//     {
//       id: 2,
//       icon: <RiSofaFill />,

//       heading: "On-Time Completion",
//       text:
//         "We meet every project deadline, which we have communicated to clients at the start",
//     },
//     {
//       id: 3,
//       icon: <RiSofaFill />,

//       heading: "Exceeding Expectations",
//       text: "Your satisfaction is our commitment and highest priority.",
//     },
//   ],
// };

export const WhychooseData2 = {
  img2: civil,
  img:banner4,

  title1: " WHY CHOOSE US",
  title2: "Smart Design That Matters ",
  para:
    "We design comfortable environments that look beautiful and serve their purpose to enhance the functional aspects of daily living.",
  faqs: [
    {
      id: 1,
      que: "Unmatched Experience",
      ans:
        "With 30 years of industry expertise, OmEngineers Contracts brings a wealth of knowledge to every project, ensuring seamless construction and exceptional results.",
    },
    {
      id: 2,
      que: "Tailored Solutions",
      ans:
        "The company specializes in customizing homes to suit individual tastes, creating spaces that feel uniquely yours.",
    },
    {
      id: 3,
      que: "Customer-Centric Approach",
      ans:
        "OmEngineers Contracts prides itself on delivering not just a service but a partnership, ensuring that every client is heard and their needs are met.",
    },
  ],
};

// export const thoughts = {
//   img: cl1,
//   title1: " WHY CHOOSE US",
//   title2: "Smart Design That Matters ",
//   para:
//     "We design comfortable environments that look beautiful and serve their purpose to enhance the functional aspects of daily living.",
//   faqs: [
//     {
//       id: 1,
//       que: "Unmatched Experience",
//       ans:
//         "With 30 years of industry expertise, OmEngineers Contracts brings a wealth of knowledge to every project, ensuring seamless construction and exceptional results.",
//     },
//     {
//       id: 2,
//       que: "Tailored Solutions",
//       ans:
//         "The company specializes in customizing homes to suit individual tastes, creating spaces that feel uniquely yours.",
//     },
//     {
//       id: 3,
//       que: "Customer-Centric Approach",
//       ans:
//         "OmEngineers Contracts prides itself on delivering not just a service but a partnership, ensuring that every client is heard and their needs are met.",
//     },
//   ],
// };
// service page


export const serviceBanner = {
  title: "Our Services",
  para:
    "Expert Building and Interior Design Solutions. From Concept to Completion, We Build Comfort For Your Life! ",
  slug: "services",
  img: banner,
};

// contact page
export const contactBanner = {
  title: "Contact Us",
  para:
    "Designing Spaces With Expert Building and Interior Designs. Experience The Best Builders in Delhi!",
  slug: "contact-us",
  img: banner,
};

export const contactData = {
  title: "Reasons to Choose OM Engineers",
  points: [
    {
      id: 1,
      text:
        "Each project receives unique designs made of premium materials at our company to create modern spaces with lasting elegance.",
    },
    {
      id: 2,
      text:
        "Our experienced team has multiple years of expertise in both home designs and construction operations to deliver projects that fulfill all high criteria.",
    },
    {
      id: 3,
      text:
        "We conduct detailed client interaction, which allows us to transform vision into personalized designs compatible with their lifestyle demands.",
    },
    {
      id: 4,
      text:
        "We employ innovative technology along with strategic planning to create living environments that function perfectly while being beautiful and creating comfort.",
    },
    {
      id: 5,
      text:
        "We take full responsibility for planning along with execution to deliver an entirely smooth design and building process that requires no stress and has perfect management.",
    },
    {
      id: 6,
      text:
        "We deliver impressive project outcomes through creative designs with professionalism and strong dedication to building stunning projects that stand out from others in quality and detailed craftsmanship.",
    },
  ],
  details: [
    {
      id: 1,
      icon: <LuPhone />,
      para: "Contact No.",
      data: [
        {
          text: "+91 1234567890",
          slug: "tel:+911234567890",
        },
         {
          text: "+91 1234567890",
          slug: "tel:+911234567890",
        },
       
      ],
    },
    {
      id: 2,
      icon: <RiMailSendLine />,
      para: "E-mail Address",
      data: [
        {
          text: "info@OmEngineers.com",
          slug: "mailto:info@OmEngineers.com",
        },
      ],
    },
    {
      id: 3,
      icon: <GrLocation />,
      para: "Office Address",
      data: [
        {
          text: "FLAT no - 1108 TOWER - I Signature Global Orchard Avenue 2 Sector 93 gurgaon",
          slug:
            "https://maps.app.goo.gl/tKFQdLFjhkFRxsip9",
        },
      
      ],
    },
  ],
};

// export const projectData = {
//   projects: [
//     {
//       id: 1,
//       title: "ENCLAVE 93 FLOORS",
//       text:"CONSTRUCTION OF FLOORS & ROUGH FINISHING WORKS – DLF GARDENCITY ENCLAVE, SECTOR 93",
//       imgs: [enclave931,enclave932,enclave933],
//       para: [
//         "Construction of residential Cluster 19 & 20 floors and rough finishing works, contributing to township-scale housing development.",

//         "The execution contributes directly to the structural readiness and functional framework of the residential units, enabling subsequent finishing, MEP, and interior works, while supporting the overall development objectives of the DLF Gardencity Enclave township.",
//       ],
//       detail: [
//         { heading: "VALUE", info: "RS. 2.00 CR" },
//         { heading: "COMPLETION", info: "2025" },
//         { heading: "CLIENT", info: "DLF LIMITED" },
//       ],
//       cat: "DLF",
//     },

//     {
//       id: 2,
//       title: "1000MM DIA SEWER & 1200MM DIA STORM DIVERSION",
//       text:"DIVERSION OF 1000MM DIA SEWER LINE – SHANKAR CHOWK, GURUGRAM",
//       imgs: [sewer,sewer2,sewer3,sewer4,sewer5,sewer6,sewer7,sewer8,sewer9,sewer10,sewer11,sewer13],
//       para: [
//         "Diversion of GMDA master sewer line at a depth of 7m using the manual jacking trenchless method, executed under live traffic conditions for subway underpass construction.",

//         "The successful execution of this ensures seamless sewer flow continuity, minimal public inconvenience, and timely support for the subway underpass infrastructure development at Shankar Chowk.",
//       ],
//       detail: [
//         { heading: "VALUE", info: "RS. 3.28 CR" },
//         { heading: "COMPLETION", info: "2025" },
//         { heading: "CLIENT", info: "DLF FOUNDATION " },
       
//       ],
//       cat: "DLF",
//     },

//      {
//       id: 3,
//       title: "GMDA PROJECT",
//       text:"EMERGENCY REHABILITATION OF COLLAPSED SEWER LINES – GURUGRAM",
//       imgs: [gmda1,gmda2,gmda3,gmda4,],
//       para: [
//         " Immediate rectification of collapsed master sewer lines across multiple high risk zones, restoring functionality under emergency response timelines.",

//         "The execution of this emergency ensures the swift restoration of sewer functionality, minimized public inconvenience, and safeguarded surrounding infrastructure, reinforcing system reliability under critical conditions.",
//       ],
//       detail: [
//         { heading: "VALUE", info: "RS. 35 LAKHS" },
//         { heading: "COMPLETION", info: "2025" },
//         { heading: "CLIENT", info: "GMDA" },
//       ],
//       cat: "GMDA",
//      },

//      {
//       id: 4,
//       title: "SECTOR-68",
//       text:"INTEGRATED DEVELOPMENT WORKS – DLF ARCADE 68, SCO SECTOR 68, GURUGRAM",
//       imgs: [sec681,sec682,sec683,sec684,sec685,sec686,sec687,sec688,sec689,sec6810,],
//       para: [
//         "End-to-end infrastructure creation comprising roads, footpaths, PHE networks, UGT, STP, LT/HT rooms, and horticulture works, transforming SCO plots into a fully developed commercial hub.",

//         "The successful execution results in a fully developed, service-ready commercial ecosystem with integrated infrastructure, utilities, and landscape elements. It effectively supports retail and office operations while enhancing functionality, accessibility, and the overall urban character of DLF Arcade 68.",
//       ],
//       detail: [
//         { heading: "VALUE", info: "RS. 8.50 CR" },
//         { heading: "COMPLETION", info: "2025" },
//         { heading: "CLIENT", info: "DLF HOME DEVELOPERS LTD." },
       
//       ],
//       cat: "DLF",
//      },

//      {
//       id: 5,
//       title: "SCO-84",
//       text:"BALANCE CIVIL & FINISHING WORKS – DLF SCO 84, SECTOR 84, GURUGRAM",
//       imgs: [sco841,sco842,sco843,],
//       para: [
//         "Completion of civil, UGT, STP, meter room structures, along with finishing works and landscape development.",

//         "The execution ensures completion of all balance civil, utility, and finishing works, delivering a ready-to-operate commercial environment. The development aligns with DLF’s design intent, functional planning, and quality benchmarks, ensuring operational efficiency, safety, and long-term asset value.",
//       ],
//       detail: [
//         { heading: "VALUE", info: "RS. 3.50 CR" },
//         { heading: "COMPLETION", info: "2024" },
//         { heading: "CLIENT", info: "DLF HOME DEVELOPERS LTD." },
       
//       ],
//       cat: "DLF",
//      },

//       {
//       id: 6,
//       title: "DLF SEC-93",
//       text:"PHE WORKS – DLF GARDENCITY ENCLAVE, SECTOR 93, GURUGRAM",
//       imgs: [dlf931,dlf932,dlf933,dlf934,dlf935,dlf936,dlf937],
//       para: [
//         "Installation of complete PHE service networks, RCC boundary walls, feeder pillars, and CSS systems for township expansion.",

//         "The execution ensures robust, reliable, and scalable PHE infrastructure, facilitating uninterrupted water supply, sewerage, and drainage services. This enables efficient service delivery, supports sustainable growth, and ensures long-term operational sustainability for the expanding DLF Gardencity Enclave township.",
//       ],
//       detail: [
//         { heading: "VALUE", info: "RS. 13.00 CR" },
//         { heading: "COMPLETION", info: "2025" },
//         { heading: "CLIENT", info: "DLF LIMITED" },
       
//       ],
//       cat: "DLF",
//       },

//       {
//       id: 7,
//       title: "DLF SEC-91 & SEC-92",
//       text:"PHE AND INFRASTRUCTURE DEVELOPMENT – DLF GARDENCITY,    SECTOR 91 & 92",
//       imgs: [dlf911,dlf912,dlf913,dlf914,dlf915],
//       para: [
//         "Comprehensive PHE works including sewer, stormwater, water supply, and treated water lines, executed through a combination of open-cut excavation and  trenchless techniques across ",

//         "The successful execution delivers a robust, efficient, and future-ready PHE network with reliable water supply, sewerage, and stormwater systems. It supports sustainable urban living through efficient resource management and reduced environmental impact. This infrastructure enhances long-term service reliability across DLF Gardencity, Sector 91 & 92.",
//       ],
//       detail: [
//         { heading: "VALUE", info: "RS. 7.48 CR" },
//         { heading: "COMPLETION", info: "2024" },
//         { heading: "CLIENT", info: "DLF LIMITED" },
       
//       ],
//       cat: "DLF",
//       },

//       {
//       id: 8,
//       title: "MORE PROJECTS",
//       text:"",
//       imgs: [other1,other2,other3],
//       para: [
//         "",
//       ],
//       detail: [],
//       cat: "More",
//       },
//   ],
// };