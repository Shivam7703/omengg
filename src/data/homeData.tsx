import {
  about,
  about2,
  about3,
  about5,
  about4,
  banner,
  banner2,
  banner3,
  banner4,
  cl1,
  logo2,
  about8,
  about7,
  pro116,
  man,
  cl2,
  cl3,
  cl4,
} from "@/assets";
import { AiFillOpenAI } from "react-icons/ai";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  FcAcceptDatabase,
  FcFinePrint,
  FcHome,
  FcServices,
} from "react-icons/fc";
import {
  GiAbstract052,
  GiAqueduct,
  GiDiceTwentyFacesTwenty,
  GiOilPump,
  GiTakeMyMoney,
} from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import { IoDiamondSharp } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";

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
        label: "Pipeline Networks",
        href: "/services/pipeline-networks",
      },
      {
        id: 2,
        label: "Drainage & Utility Diversions",
        href: "/services/drainage-&-utility-diversions",
      },
      { id: 3,  label: "Roads & Footpaths",
        href: "/services/roads-&-footpaths", },
      {
        id: 4,
        label: "Civil Structure & Finishing Works",
        href: "/services/civil-structure-&-finishing-works",
      },
      { id: 5, label: "Horticulture & Landscaping", href: "/services/horticulture-&-landscaping" },
    
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
    img: banner4,
    welcome: "Om ENGINEERS",
    title: "Turning Blueprints Into Living Landmarks",
    para:
      "Building modern spaces through thoughtful design, engineering strength, and architectural vision.",
    btntext: "Explore More",
    href: "/services",
  },
  {
    id: 2,
    img: banner,
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


// section3
export const crafting = {
  

  title1: "BUILDING THE FUTURE",
  title2: "Experts in Innovative & Modern Design",

  slides: [
    {
      id: 1,
      heading: "Trust & Reliable Quality",
      img: banner,
      text:
        "We provide reliable, professional, and high-quality services, ensuring consistency, and accuracy in everything we do.",
    },
    {
      id: 2,
      heading: "Construction",
      img: banner2,
      text:
        "Construction classes and subjects are about buildings stand up, how they keep us dry and comfortable.",
    },
    {
      id: 3,
      heading: "Relationship & Integrity",
      img: banner4,
      text:
        "We build caring, honest, and trustworthy relationships, always acting with empathy, warmth, and client-focused integrity.",
    },
    {
      id: 4,
      heading: "City Planning",
      img: banner3,
      text:
        "We support sustainable and inclusive planning and design of cities by developing normative work.",
    },
  ],
};

export const countDown = [
  {
    id: 1,
    para: "Projects Completed Successfully",
    title: "Projects Completed",
    Value: "150",
    value2: "+",
  },
  {
    id: 2,
    para: "Trusted and Satisfied Clients",
    title: "Happy Customers",
    Value: "150",
    value2: "+",
  },
  {
    id: 3,
    para: "High Success Rate with Clients",
    title: "Success Rate",
    Value: "100",
    value2: "%",
  },
  {
    id: 4,
    para: "Expertise Built for Years",
    title: "Years of Experience",
    Value: "30",
    value2: "+",
  },
];


export const testimonialData = {
  title1: "TESTIMONIALS",
  title2: "Here's what our satisfied clients are saying",

  testimonials: [
    {
      id: 1,
      title: "R.M. Mathur",
      text:
        "OmEngineers perfected the design of our home that we truly love. The group implemented our vision to build the perfect outcome. The complete process moved without trouble, leading to a result that satisfied us highly. ",
      img: cl1,
    },
    {
      id: 2,
      title: "Shivam Goyal",
      text:
        "The project finished on time without causing any problems for us. The interior design elements present a beautiful appearance. The finished design of OmEngineers transformed our house into a perfect residence. They are the best interior designers in Delhi. Highly recommended for quality work! ",
      img: cl2,
    },
    {
      id: 3,
      title: "Sageer Ansari",
      text:
        "Through their work, OmEngineers created elegant, functional interior designs for our house. The team members demonstrated professionalism throughout while giving full attention to all specified details. We have achieved a comfortable area that welcomes everyone. They truly are the best builders in Delhi.",
      img: cl3,
    },
    {
      id: 3,
      title: "Prashant",
      text:
        "The construction process, along with design delivery, was executed with excellence by OmEngineers. Our house now combines spaciousness and modern design characteristics, which perfectly meet our family needs. Great experience with a highly skilled team! Truly the best builders in Delhi.",
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
        "The Delhi National Capital Region (NCR) is one of India’s fastest-growing real estate hubs. With rapid urbanization, infrastructure development, and ...",
      text2: `<div style="max-width: 900px; margin: 40px auto; padding: 30px; background-color: #fff;">

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
      img: banner2,
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
             img: banner,
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
      img: banner4,
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
      img: banner4,
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
        label: "Pipeline Networks",
        href: "/services/in-house-residential-development",
      },
      {
        id: 2,
        label: "Drainage & Utility Diversions",
        href: "/services/architecture-&-interior-design",
      },
      { id: 3, label: "Property Sale", href: "/services/property-sale" },
      {
        id: 4,
        label: "Roads & Footpaths",
        href: "/services/building-renovation",
      },
      { id: 5, label: "Exterior Design", href: "/services/exterior-design" },
      {
        id: 6,
        label: "Property Purchase",
        href: "/services/property-purchase",
      },
    ],
  },
};

// about Page
export const aboutBanner = {
  title: "About Us",
  para:
    "OmEngineers Contracts has been the best builder in Delhi for over 30 years. Surpassing the first design outline to finalize the end product. ",
  slug: "about-us",
  img: banner2,
};

export const aboutdata2 = {
  img2: banner,
  img: about,

  title1: "WHO ARE WE",
  title2: "We Create Comfortable & Liable Spaces",
  para:
    "The real estate and construction industry recognizes OmEngineers Contracts as its premier excellence-based corporate name. For 30 years the respected company has maintained its dedication to quality as it continues to establish new benchmarks in turning properties into luxurious family residences. If you're looking to turn your vision of a perfect home into reality, OmEngineers Contracts is the builder that will exceed your expectations and deliver a space that is as luxurious as it is functional.",
  vision: [
    {
      id: 1,
      icon: <RiSofaFill />,

      heading: "Superior Quality",
      text: "We build structures that provide long-lasting dependability",
    },
    {
      id: 2,
      icon: <RiSofaFill />,

      heading: "On-Time Completion",
      text:
        "We meet every project deadline, which we have communicated to clients at the start",
    },
    {
      id: 3,
      icon: <RiSofaFill />,

      heading: "Exceeding Expectations",
      text: "Your satisfaction is our commitment and highest priority.",
    },
  ],
};

export const WhychooseData2 = {
  img2: about2,
  img: about3,

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

export const thoughts = {
  img: cl1,
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
// service page
export const serviceBanner = {
  title: "Our Services",
  para:
    "Expert Building and Interior Design Solutions. From Concept to Completion, We Build Comfort For Your Life! ",
  slug: "services",
  img: banner,
};

export const serviceData = {
  
  title1: "Services We Offer",
  title2: "Creating Spaces That Give You Peace & Comfort",
  para:
    "OmEngineers Contracts has built a reputation for delivering homes that are not just structures but masterpieces.",
  services: [
    {
      id: 1,
      title: "Pipeline Networks",
      banner:
        "Creating beautiful and practical spaces that reflect your style perfectly.",
      description:
        "Our in-house development team brings your vision to life by delivering high-quality builder floors designed for comfort, functionality, and long-term value. From planning and construction to finishing details, we manage every stage with precision and care. Each builder floor is developed with smart layouts, quality materials, and contemporary aesthetics—ensuring spaces that are practical, durable, and aligned with modern lifestyle needs.",
      img: banner,
      how_we_work: [
        {
          id: 1,
          heading: "Planning & Feasibility",
          para:
            "We evaluate the plot, local regulations, and lifestyle requirements to ensure optimal floor planning and efficient space utilization.",
        },
        {
          id: 2,
          heading: "Design & Layout Development",
          para:
            "Our experts create practical floor plans that balance ventilation, natural light, privacy, and aesthetics.",
        },
        {
          id: 3,
          heading: "Construction & Execution",
          para:
            "Skilled professionals execute the project using quality materials, modern construction techniques, and strict quality control.",
        },
        {
          id: 4,
          heading: "Final Inspection & Handover",
          para:
            "Each builder floor is thoroughly inspected to ensure it meets quality standards before a smooth handover.",
        },
      ],
      faqs: [
        {
          id: 1,
          que:
            "How is Pipeline Networks different from regular construction?",
          ans:
            "All planning, design, and execution are handled internally, resulting in smoother coordination, faster decisions, and better quality control.",
        },
        {
          id: 2,
          que: "Can buyers be involved during the development process?",
          ans:
            "Yes, buyers can review progress at key stages and provide input early, helping ensure the final outcome matches expectations.",
        },
        {
          id: 3,
          que: "Are modern construction techniques used?",
          ans:
            "Yes, projects follow updated building practices, efficient layouts, and durable materials to meet today’s lifestyle needs.",
        },
        {
          id: 4,
          que: "What ensures long-term durability of the property?",
          ans:
            "Careful material selection, skilled execution, and multiple quality checks help ensure strength, safety, and longevity.",
        },
        {
          id: 5,
          que: "Does in-house development affect project timelines?",
          ans:
            "Yes, managing everything under one team helps reduce delays and keeps the project moving as per planned schedules.",
        },
      ],
    },
    {
      id: 2,
      title: "Drainage & Utility Diversions",
      banner:
        "We design innovative, functional, and timeless structures for every unique need.",
      description:
        "We offer a seamless blend of architecture and interior design, creating spaces that are innovative, functional, and timeless. From concept planning to final execution, our team manages the entire journey with a strong focus on durability, usability, and visual harmony. Every project is designed to balance aesthetics with practicality while meeting safety standards and environmental considerations—resulting in spaces that are both beautiful and purpose-driven.",
      img: banner2,
      how_we_work: [
        {
          id: 1,
          heading: "Planning & Consultation",
          para:
            "We analyze the site and understand your functional needs, lifestyle preferences, and design expectations before initiating layouts.",
        },
        {
          id: 2,
          heading: "Design Development",
          para:
            "Detailed architectural drawings, 3D models, and interior concepts are created, including layouts, material selection, and color schemes.",
        },
        {
          id: 3,
          heading: "Approvals & Compliance",
          para:
            "All designs are reviewed to ensure they meet legal regulations, safety norms, and structural standards.",
        },
        {
          id: 4,
          heading: "Execution & Supervision",
          para:
            "Expert professionals execute the design with precision, while continuous supervision ensures quality, accuracy, and durability.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "Why combine architecture and interior design services?",
          ans:
            "Combining both ensures design consistency, better coordination, and a smoother transition from structure to finished space.",
        },
        {
          id: 2,
          que: "Can I customize both the layout and the interiors?",
          ans:
            "Yes, layouts, finishes, materials, and design elements can be customized during the planning and design stages.",
        },
        {
          id: 3,
          que: "How do you ensure functionality along with aesthetics?",
          ans:
            "Each design focuses on space utilization, movement flow, lighting, and practicality without compromising visual appeal.",
        },
        {
          id: 4,
          que: "Do you handle both residential and commercial projects?",
          ans:
            "Yes, services are available for homes, offices, retail spaces, and mixed-use developments.",
        },
        {
          id: 5,
          que: "What makes this approach beneficial for clients?",
          ans:
            "It reduces delays, avoids design conflicts, improves quality control, and delivers a cohesive outcome.",
        },
      ],
    },
    {
      id: 3,
      title: "Exterior Design",
      banner:
        "Increase your property's charm with stunning, durable, and unique exteriors.",
      description:
        "We, the best exterior designers in Delhi, build exterior designs that combine spectacular looks with exceptional durability to enhance property aesthetics. Your preferences guide our team, allowing them to design solutions that perfectly blend with environmental elements. Each detail, including landscape design and materials, stands at the center of our attention for durability combined with style. Our professional mission is to improve the exterior beauty of your property through an external design that matches your personality and creates a welcoming environment.",
      img: banner3,
      how_we_work: [
        {
          id: 1,
          heading: "Consultation",
          para: "We discuss your desired exterior appearance.",
        },
        {
          id: 2,
          heading: "Design Concepts",
          para: "We provide 3D renders and material suggestions.",
        },
        {
          id: 3,
          heading: "Implementation",
          para: "The implementation includes durable and appealing materials.",
        },
        {
          id: 4,
          heading: "Final Inspection",
          para: "Ensuring the exterior meets expectations.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "Can you design landscaping as part of the exterior design?",
          ans:
            "Despite being considered essential, our exterior design solutions include landscaping establishment as a fundamental component.",
        },
        {
          id: 2,
          que: "Do you work with weather-resistant materials?",
          ans:
            "Our company commits to selecting exterior materials that perform best in regional weather conditions.",
        },
        {
          id: 3,
          que: "How long does exterior design take?",
          ans:
            "Project duration depends on project complexity and size but we supply estimates after discussing with the client.",
        },
        {
          id: 4,
          que: "Can you renovate old exteriors?",
          ans:
            "The company excels at redesigning traditional exteriors into contemporary structures.",
        },
        {
          id: 5,
          que: "Do you design exteriors for commercial buildings?",
          ans:
            "Our company provides exterior design solutions that serve residential buildings along with business-owned properties.",
        },
      ],
    },
    {
      id: 4,
      title: "Roads & Footpaths",
      banner:
        "We convert old spaces into modern, functional, and stylish ones effortlessly.",
      description:
        "Our renovation projects transform whatever space you have by providing it with fresh vitality through both partial and full-scale remodels. Our evaluation of the building locates all necessary improvement zones, whether they focus on structural elements or visual aspects. Our team develops complete renovation programming that satisfies your requirements regarding design preferences, together with schedule length and cost needs. The company applies quality materials and expert craftsmanship to produce spaces that harmonize modern functionality with lasting durability and original architecture.",
      img: banner4,
      how_we_work: [
        {
          id: 1,
          heading: "Inspection",
          para:
            "The first step involves evaluating present conditions together with identifying regions that require development.",
        },
        {
          id: 2,
          heading: "Planning",
          para:
            "We develop renovation roadmaps that include both time details and spending limits for the project.",
        },
        {
          id: 3,
          heading: "Execution",
          para:
            "Moving things forward with both expert personnel and quality materials.",
        },
        {
          id: 4,
          heading: "Finishing",
          para:
            "The team takes responsibility to present a fully finished, renovated space.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "Do you renovate both homes and offices?",
          ans:
            "The remodeling of residential buildings as well as commercial operations is a core service at our company.",
        },
        {
          id: 2,
          que: "Can renovations be done while the building is occupied?",
          ans:
            "Our work planning activities help reduce disturbances caused to building occupants.",
        },
        {
          id: 3,
          que: "Do you handle structural changes in renovations?",
          ans:
            "Our team can execute both structural enhancement tasks and structural improvement tasks.",
        },
        {
          id: 4,
          que: "How long does a renovation take?",
          ans:
            "Our project timeline is determined based on the final scope assessment we perform after completing inspections.",
        },
        {
          id: 5,
          que: "Can I include eco-friendly upgrades?",
          ans:
            "Yes, we offer green renovation options for a sustainable living space.",
        },
      ],
    },
    {
      id: 5,
      title: "Property Sale",
      banner: "Sell properties easily with trusted support and guidance.",
      description:
        "Our professional guidance makes the property-selling process flow easily for you. Our initial step involves inspecting the property value by examining both market changes and its distinctive characteristics. Our team uses online advertising and qualifies audience contact to discover suitable purchasers. Our team helps you secure optimal prices through price negotiation services. Our team takes care of every requirement and formal procedure to deliver you a convenient and clear, plus stress-free, sales process.",
      img: about4,
      how_we_work: [
        {
          id: 1,
          heading: "Valuation",
          para: "The market trend analysis determines the property's worth.",
        },
        {
          id: 2,
          heading: "Marketing",
          para:
            "Different promotional channels are used to market this property.",
        },
        {
          id: 3,
          heading: "Negotiation",
          para:
            "Our service provides you with the most advantageous terms for your property sale.",
        },
        {
          id: 4,
          heading: "Closure",
          para:
            "The transaction benefits from our organization and management of essential paperwork.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "Do you handle both residential and commercial properties?",
          ans:
            "The company helps clients with selling residential homes and apartments together with commercial business properties.",
        },
        {
          id: 2,
          que: "How do you determine the property’s value?",
          ans:
            "Our company analyzes local market patterns together with location variables along with property condition to determine estimated values.",
        },
        {
          id: 3,
          que: "Can you help with the paperwork for the sale?",
          ans:
            "Our company guarantees the complete lawful handling of every document.",
        },
        {
          id: 4,
          que: "Do you offer marketing services for property sales?",
          ans:
            "Our company employs both internet-based platforms and alternative promotional tools to market your real estate property.",
        },
        {
          id: 5,
          que: "How long does it take to sell a property?",
          ans:
            "Our process duration differs based on factors yet we work on securing both speed and convenience throughout the transaction.",
        },
      ],
    },
    {
      id: 6,
      title: "Property Purchase",
      banner: "Find your dream property with ease and expert guidance today.",
      description:
        "Our team helps property buyers through a seamless and pleasant journey by delivering personalized market information that matches your unique needs. Our team supports clients from start to finish, whether they purchase their dream residence or want to achieve an intelligent property investment. The team provides continuous support, from helping you understand your choices to budgeting, and takes part in every stage of your purchasing journey.",
      img: about5,
      how_we_work: [
        {
          id: 1,
          heading: "Requirement Analysis",
          para:
            "You need to explain your property needs while sharing your spending plan and specific requirements.",
        },
        {
          id: 2,
          heading: "Property Search",
          para:
            "You need to select possibilities that comply with your specification requirements.",
        },
        {
          id: 3,
          heading: "Site Visits",
          para: "You will schedule tours for properties that you select.",
        },
        {
          id: 4,
          heading: "Deal Finalization",
          para: "Helping with negotiations and paperwork.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "Can you help with budget-friendly options?",
          ans:
            "The service matches properties that match your budget along with your specific requirements.",
        },
        {
          id: 2,
          que: "Do you assist with home loans?",
          ans: "The process of securing a loan receives our complete guidance.",
        },
        {
          id: 3,
          que: "How do I know if the property is legally clear?",
          ans:
            "We verify documentation so you can verify complete accuracy from the property.",
        },
        {
          id: 4,
          que: "Do you handle commercial property purchases?",
          ans:
            "Our company assists buyers in purchasing homes along with business facilities.",
        },
        {
          id: 5,
          que: "Can you help with investment properties?",
          ans:
            "The company delivers market data to assist clients in their investment decisions.",
        },
      ],
    },
  ],
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
          text: "2nd Floor, M Block Market, Greater Kailash 2, M 32,",
          slug:
            "https://www.google.com/maps/place/OmEngineers/@28.5330789,77.2413416,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce1905d089649:0x1b43338513750efe!8m2!3d28.5330789!4d77.2413416!16s%2Fg%2F11wxqn0h78",
        },
      
      ],
    },
  ],
};
