// DestinationDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const DestinationDetails = () => {
  const { slug } = useParams();

  const details = {
    australia: {
      description: "Australia is renowned for its world-class universities, vibrant cities, and a multicultural environment. With globally recognized degrees, excellent research facilities, and high living standards, Australia is a top destination for international students. Its proximity to Asia also offers strategic career opportunities post-graduation.",
      image: "/src/assets/operaHouse.jpeg",
      whyStudy: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Why Study in Australia from Nepal?</h2>
        <p class="text-lg mb-4">
          Australia's academic excellence, affordable living, and work-study opportunities make it an ideal choice for Nepali students. A strong Nepali community, easy visa processing, and a welcoming environment contribute to its popularity.
        </p>
      `,
      facts: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Facts about Australia</h2>
        <div class="grid grid-cols-3 gap-4">
          <ul class="space-y-2">
            <li class="text-lg">7 of the world’s top 100 universities are in Australia.</li>
            <li class="text-lg">Australia is home to over 700,000 international students.</li>
            <li class="text-lg">5th happiest country in the world.</li>
          </ul>
          <ul class="space-y-2">
            <li class="text-lg">Australia’s education system ranks 8th globally.</li>
            <li class="text-lg">The economy is one of the most stable worldwide.</li>
            <li class="text-lg">Over 2.5 million global alumni from Australian universities.</li>
          </ul>
        </div>
      `,
      reasons: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Reasons to Study in Australia</h2>
        <div class="grid grid-cols-4 gap-4">
          <ul class="space-y-2">
            <li class="text-lg">Globally recognized degrees.</li>
            <li class="text-lg">Post-study work visas available.</li>
            <li class="text-lg">Multicultural society with over 150 nationalities.</li>
            <li class="text-lg">Cutting-edge research facilities.</li>
          </ul>
          <ul class="space-y-2">
            <li class="text-lg">Affordable education with scholarships.</li>
            <li class="text-lg">Work part-time while studying.</li>
            <li class="text-lg">Stunning landscapes and vibrant cities.</li>
            <li class="text-lg">Safe, welcoming environment for students.</li>
          </ul>
        </div>
      `,
      highlights: [
        "Top universities: Australian National University, University of Sydney",
        "Post-study work opportunities",
        "Great for research and innovation in healthcare, tech, and more"
      ]
    },
    usa: {
      description: "The USA is known for its prestigious universities, world-leading research facilities, and diverse academic programs. With a strong focus on innovation and technology, students gain access to some of the best career opportunities globally.",
      image: "/images/usa.jpg",
      whyStudy: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Why Study in the USA from Nepal?</h2>
        <p class="text-lg mb-4">
          The USA offers top-ranked universities and a wide array of courses, attracting Nepali students who seek academic excellence, diverse career options, and scholarships. With vibrant student communities and cultural diversity, the USA provides an enriching experience.
        </p>
      `,
      facts: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Facts about the USA</h2>
        <div class="grid grid-cols-3 gap-4">
          <ul class="space-y-2">
            <li class="text-lg">Home to over 1 million international students.</li>
            <li class="text-lg">Top 3 global universities are located in the USA.</li>
            <li class="text-lg">More than 4,000 accredited higher education institutions.</li>
          </ul>
          <ul class="space-y-2">
            <li class="text-lg">Major fields: STEM, business, arts, and healthcare.</li>
            <li class="text-lg">Largest number of Nobel Prize winners.</li>
            <li class="text-lg">World's largest economy and innovation hub.</li>
          </ul>
        </div>
      `,
      reasons: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Reasons to Study in the USA</h2>
        <div class="grid grid-cols-4 gap-4">
          <ul class="space-y-2">
            <li class="text-lg">World-class universities like Harvard, MIT.</li>
            <li class="text-lg">Extensive research opportunities.</li>
            <li class="text-lg">Wide variety of academic programs.</li>
            <li class="text-lg">Vibrant campus life and extracurriculars.</li>
          </ul>
          <ul class="space-y-2">
            <li class="text-lg">Scholarships and financial aid for international students.</li>
            <li class="text-lg">Post-graduation work opportunities through OPT.</li>
            <li class="text-lg">Diverse student communities from over 150 countries.</li>
            <li class="text-lg">Internships and job placements in top companies.</li>
          </ul>
        </div>
      `,
      highlights: [
        "Top universities: Harvard, MIT, Stanford",
        "Career opportunities in technology, business, and healthcare",
        "Post-study work options through OPT"
      ]
    },
    "new-zealand": {
      description: "New Zealand is famous for its friendly locals, stunning natural landscapes, and high-quality education system. Known for research-based learning, students receive hands-on experience and practical skills.",
      image: "/images/new-zealand.jpg",
      whyStudy: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Why Study in New Zealand from Nepal?</h2>
        <p class="text-lg mb-4">
          Nepali students are drawn to New Zealand's affordable education system, safe environment, and focus on student well-being. With visa policies that allow students to work while studying and excellent post-study opportunities, it’s a great destination for personal and academic growth.
        </p>
      `,
      facts: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Facts about New Zealand</h2>
        <div class="grid grid-cols-3 gap-4">
          <ul class="space-y-2">
            <li class="text-lg">Ranked 2nd in the Global Peace Index.</li>
            <li class="text-lg">World-class universities like the University of Auckland.</li>
            <li class="text-lg">Known for research-based, practical education.</li>
          </ul>
          <ul class="space-y-2">
            <li class="text-lg">More than 20,000 international students annually.</li>
            <li class="text-lg">Affordable tuition and living costs.</li>
            <li class="text-lg">Post-study work visas available for up to 3 years.</li>
          </ul>
        </div>
      `,
      reasons: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Reasons to Study in New Zealand</h2>
        <div class="grid grid-cols-4 gap-4">
          <ul class="space-y-2">
            <li class="text-lg">Practical, research-based learning.</li>
            <li class="text-lg">Affordable tuition fees and living expenses.</li>
            <li class="text-lg">Safe and peaceful environment.</li>
            <li class="text-lg">Post-study work visa options.</li>
          </ul>
          <ul class="space-y-2">
            <li class="text-lg">Rich cultural experiences and stunning landscapes.</li>
            <li class="text-lg">Friendly locals and supportive communities.</li>
            <li class="text-lg">Opportunities for adventure sports and outdoor activities.</li>
            <li class="text-lg">High-quality life with great work-life balance.</li>
          </ul>
        </div>
      `,
      highlights: [
        "Top universities: University of Auckland, University of Otago",
        "Post-study work opportunities",
        "Safe, peaceful, and affordable"
      ]
    },
    canada: {
      description: "Canada offers a blend of affordable education, cultural diversity, and world-class academic institutions. Known for being inclusive and student-friendly, Canada is a top choice for international students looking for both academic and career growth.",
      image: "/images/canada.jpg",
      whyStudy: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Why Study in Canada from Nepal?</h2>
        <p class="text-lg mb-4">
          Nepali students favor Canada due to its affordable tuition, welcoming environment, and high living standards. The easy visa policies, post-study work options, and career opportunities in major industries make Canada a preferred choice.
        </p>
      `,
      facts: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Facts about Canada</h2>
        <div class="grid grid-cols-3 gap-4">
          <ul class="space-y-2">
            <li class="text-lg">Top 10 education system globally.</li>
            <li class="text-lg">Over 640,000 international students annually.</li>
            <li class="text-lg">2 official languages: English and French.</li>
          </ul>
          <ul class="space-y-2">
            <li class="text-lg">High standards of living and quality of life.</li>
            <li class="text-lg">Known for research in fields like AI, healthcare.</li>
            <li class="text-lg">Ranked among the top 5 for safety globally.</li>
          </ul>
        </div>
      `,
      reasons: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Reasons to Study in Canada</h2>
        <div class="grid grid-cols-4 gap-4">
          <ul class="space-y-2">
            <li class="text-lg">World-class universities like University of Toronto.</li>
            <li class="text-lg">Affordable tuition and cost of living.</li>
            <li class="text-lg">Post-study work permit for up to 3 years.</li>
            <li class="text-lg">Diverse, multicultural society.</li>
          </ul>
          <ul class="space-y-2">
            <li class="text-lg">Safe and welcoming environment.</li>
            <li class="text-lg">Thriving job market in fields like technology and healthcare.</li>
            <li class="text-lg">Work part-time while studying to support living costs.</li>
            <li class="text-lg">Focus on research and development in universities.</li>
          </ul>
        </div>
      `,
      highlights: [
        "Top universities: University of Toronto, McGill University",
        "Post-study work opportunities",
        "Safe, affordable, and high quality of life"
      ]
    },
    "united-kingdom": {
      description: "The United Kingdom is home to some of the world’s most prestigious universities, including Oxford and Cambridge. Known for its rich history, cultural diversity, and academic excellence, the UK is a top destination for students worldwide.",
      image: "/images/uk.jpg",
      whyStudy: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Why Study in the UK from Nepal?</h2>
        <p class="text-lg mb-4">
          The UK’s long-standing academic tradition, rich cultural heritage, and globally recognized degrees make it a preferred destination for Nepali students. With ample scholarships and visa options, Nepali students can access some of the best education in the world.
        </p>
      `,
      facts: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Facts about the UK</h2>
        <div class="grid grid-cols-3 gap-4">
          <ul class="space-y-2">
            <li class="text-lg">Home to 4 of the top 10 universities worldwide.</li>
            <li class="text-lg">Over 500,000 international students annually.</li>
            <li class="text-lg">One of the most historic education systems in the world.</li>
          </ul>
          <ul class="space-y-2">
            <li class="text-lg">Scholarships like Chevening, Commonwealth available.</li>
            <li class="text-lg">Post-study work visas for up to 2 years.</li>
            <li class="text-lg">A hub for international students from over 100 countries.</li>
          </ul>
        </div>
      `,
      reasons: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Reasons to Study in the UK</h2>
        <div class="grid grid-cols-4 gap-4">
          <ul class="space-y-2">
            <li class="text-lg">Globally respected universities like Oxford, Cambridge.</li>
            <li class="text-lg">World-leading research facilities.</li>
            <li class="text-lg">Vibrant, diverse cities and campuses.</li>
            <li class="text-lg">Shorter course durations (3-year bachelors).</li>
          </ul>
          <ul class="space-y-2">
            <li class="text-lg">Post-study work visas and job opportunities.</li>
            <li class="text-lg">Scholarships for international students.</li>
            <li class="text-lg">Access to the EU and global job markets.</li>
            <li class="text-lg">Cultural richness and a historic educational system.</li>
          </ul>
        </div>
      `,
      highlights: [
        "Top universities: University of Oxford, University of Cambridge",
        "Post-study work visa for up to 2 years",
        "Rich culture, historic educational excellence"
      ]
    },
    "south-korea": {
      description: "South Korea is rapidly becoming a leading education hub in Asia, known for its cutting-edge technology, research facilities, and a strong emphasis on education. South Korea offers a vibrant and dynamic learning environment.",
      image: "/images/south-korea.jpg",
      whyStudy: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Why Study in South Korea from Nepal?</h2>
        <p class="text-lg mb-4">
          Nepali students are drawn to South Korea's advanced technology, high educational standards, and modern campuses. The affordable tuition fees, scholarships, and proximity to Nepal make it an attractive destination.
        </p>
      `,
      facts: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Facts about South Korea</h2>
        <div class="grid grid-cols-3 gap-4">
          <ul class="space-y-2">
            <li class="text-lg">Top universities include Seoul National University.</li>
            <li class="text-lg">Strong focus on STEM, especially IT and engineering.</li>
            <li class="text-lg">World-class research facilities and technology hubs.</li>
          </ul>
          <ul class="space-y-2">
            <li class="text-lg">Low tuition fees compared to Western countries.</li>
            <li class="text-lg">Vibrant student life in cities like Seoul.</li>
            <li class="text-lg">Strong government support for international students.</li>
          </ul>
        </div>
      `,
      reasons: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Reasons to Study in South Korea</h2>
        <div class="grid grid-cols-4 gap-4">
          <ul class="space-y-2">
            <li class="text-lg">Cutting-edge technology and research.</li>
            <li class="text-lg">Affordable education and living costs.</li>
            <li class="text-lg">Work opportunities during and after studies.</li>
            <li class="text-lg">Rich cultural experiences in a modern setting.</li>
          </ul>
          <ul class="space-y-2">
            <li class="text-lg">Scholarships and government support for international students.</li>
            <li class="text-lg">Opportunities in technology, manufacturing, and business sectors.</li>
            <li class="text-lg">Dynamic city life with access to modern infrastructure.</li>
            <li class="text-lg">World-renowned for K-pop and cultural exports.</li>
          </ul>
        </div>
      `,
      highlights: [
        "Top universities: Seoul National University, KAIST",
        "Focus on STEM, especially tech and engineering",
        "Affordable tuition and scholarships"
      ]
    },
    europe: {
      description: "Europe offers a unique opportunity to study in some of the world's most historic and prestigious universities across multiple countries. With varied cultural experiences, affordable education, and globally recognized degrees, Europe is a prime destination for students worldwide.",
      image: "/images/europe.jpg",
      whyStudy: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Why Study in Europe from Nepal?</h2>
        <p class="text-lg mb-4">
          Nepali students are increasingly looking to Europe for its affordable tuition fees, diverse cultural experiences, and opportunities to study in multiple countries. Many European nations offer scholarships, post-study work opportunities, and world-class research institutions.
        </p>
      `,
      facts: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Facts about Europe</h2>
        <div class="grid grid-cols-3 gap-4">
          <ul class="space-y-2">
            <li class="text-lg">Home to over 4,000 universities across 44 countries.</li>
            <li class="text-lg">Top study destinations: Germany, France, Netherlands.</li>
            <li class="text-lg">Affordable tuition fees compared to the US and UK.</li>
          </ul>
          <ul class="space-y-2">
            <li class="text-lg">Many countries offer free or low-cost education for EU and non-EU students.</li>
            <li class="text-lg">Vibrant, diverse cultures and languages.</li>
            <li class="text-lg">World-leading research and innovation in fields like engineering, arts, and social sciences.</li>
          </ul>
        </div>
      `,
      reasons: `
        <h2 class="text-2xl font-semibold mt-8 mb-4">Reasons to Study in Europe</h2>
        <div class="grid grid-cols-4 gap-4">
          <ul class="space-y-2">
            <li class="text-lg">Affordable tuition fees and scholarships.</li>
            <li class="text-lg">Opportunity to study in multiple countries through Erasmus programs.</li>
            <li class="text-lg">Rich cultural and historical experiences.</li>
            <li class="text-lg">Globally recognized degrees from top universities.</li>
          </ul>
          <ul class="space-y-2">
            <li class="text-lg">Post-study work opportunities in many countries.</li>
            <li class="text-lg">World-leading research institutions.</li>
            <li class="text-lg">Study in English and other languages.</li>
            <li class="text-lg">A strong focus on sustainability and innovation.</li>
          </ul>
        </div>
      `,
      highlights: [
        "Top universities: University of Oxford, University of Copenhagen, ETH Zurich",
        "Affordable education and scholarships",
        "Rich cultural and linguistic diversity"
      ]
    }
  };

  const destination = details[slug];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4 capitalize">{slug.replace('-', ' ')}</h1>
      <img src={destination.image} alt={slug} className="w-full h-64 object-cover mb-6 rounded-lg shadow-md" />
      <p className="text-lg mb-6">{destination.description}</p>
      
      <div dangerouslySetInnerHTML={{ __html: destination.whyStudy }} />
      <div dangerouslySetInnerHTML={{ __html: destination.facts }} />
      <div dangerouslySetInnerHTML={{ __html: destination.reasons }} />
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Highlights</h2>
      <ul className="list-disc ml-6 space-y-2">
        {destination.highlights.map((highlight, index) => (
          <li key={index} className="text-lg">{highlight}</li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationDetails;
