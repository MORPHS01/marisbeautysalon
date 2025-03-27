import Link from "next/link"




type categoriesType = {
  categoryTitle: string,
  services: { title: string, description: string }[]
}[]

const categories: categoriesType = [
  {  
    categoryTitle: "Hair Treatments & Styling",
    services: [
      { title: "Fixing", description: "Get a flawless and natural-looking hair installation with expert wig and weave fixing." },
      { title: "Retouching", description: "Keep your relaxed or dyed hair fresh and healthy with professional touch-ups." },
      { title: "Washing & Setting", description: "Cleanse and style your hair with precision for a sleek, long-lasting finish." },
      { title: "Steaming", description: "Revitalize dry or damaged hair with deep-conditioning steam treatments." },
      { title: "Hair Straightening", description: "Achieve a sleek, smooth, and frizz-free look with expert straightening techniques." },
      { title: "Hair Tonging", description: "Add soft, bouncy curls or elegant waves with our professional hair tonging service." },
      { title: "Hair Dyeing", description: "Transform your look with vibrant, rich, and long-lasting hair color." },
    ]
  },
  {  
    categoryTitle: "Protective & Braided Styles",
    services: [
      { title: "Braids", description: "A classic protective style that offers durability, beauty, and versatility." },
      { title: "Twisting", description: "A stylish, low-maintenance option that enhances your natural hair texture." },
      { title: "Weaving", description: "Seamlessly add volume and length with expertly installed weaves" },
      { title: "Ghana Weaving", description: "Beautifully crafted cornrow patterns blending tradition with modern elegance." },
      { title: "Crochet", description: "A quick, lightweight, and versatile protective style with endless styling possibilities." },
    ]
  },
  {  
    categoryTitle: "Specialty Hairstyles",
    services: [
      { title: "Watermelon", description: "A unique and eye-catching braided style that makes a bold statement." },
      { title: "Bantu Knots", description: "A cultural and stylish protective hairstyle that doubles as a curl-defining technique." },
      { title: "Ponytail", description: "A sleek and effortless style, perfect for any occasion." },
    ]
  },
]

function Services() {


  return (
    <main>
      <h2 className="-mx-[6.80%] font-poppins tracking-[0.125em] text-center py-7 bg-gradient-to-tr from-[#3F2136] to-[#AC117D] text-[#E3E4DB] font-[600] text-4xl max-md:text-3xl max-sm:text-2xl">Hair Services</h2>
      <p className="font-poppins text-xl max-sm:text-base text-[#50514E] pt-5">Explore our range of expert hair services designed to keep your hair looking flawless, healthy, and stylish. Our hair services include but not limited to;</p>

      <section className="mt-10">
        {categories.map((category, index) =>
          <aside className="mb-10" key={index}>
            <p className="font-poppins text-2xl max-md:text-xl max-sm:text-lg text-[#AC117D] mb-5">{category.categoryTitle}</p>
            <article className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4">
              {category.services.map((service, i) =>
                <Link key={i} className="px-[10px]" href={{pathname: "/booking", query: {Service: service.title}}}>
                  <div className="group cursor-pointer shadow-lg rounded-[10px] px-5 py-4 bg-transparent border border-[#2A2B2A]/40 hover:bg-[#2A2B2A]/95 hover:scale-105 transition-all duration-350 ease-in-out">
                    <p className="font-poppins text-[#2A2B2A] group-hover:text-[#E3E4DB] text-lg max-sm:text-base font-bold mb-[5px] tracking-widest">{service.title}</p>
                    <p className="font-poppins text-[#50514E] max-sm:text-sm group-hover:text-[#BFC0B8]">{service.description}</p>
                  </div>
                </Link>
              )}
            </article>
          </aside>
        )}
      </section>

      <p className="font-poppins text-xl max-sm:text-base text-[#50514E] pt-5">Children aged 5 to 10 years qualify for a special discount.</p>
    </main>
  )
}

export default Services