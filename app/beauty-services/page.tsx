import Link from "next/link"


type categoriesType = {
  categoryTitle: string,
  services: { title: string, description: string }[]
}[]

const categories: categoriesType = [
  {  
    categoryTitle: "Nail & Makeup Services",
    services: [
      { title: "Manicure & Pedicure", description: "Pamper your hands and feet with our luxurious nail care, leaving your nails beautifully polished and your skin soft and refreshed." },
      { title: "Makeup", description: "Enhance your natural beauty with professional makeup, whether you desire a subtle glow or a full-glam transformation." },
    ]
  },
  {  
    categoryTitle: "Traditional & Custom Styling",
    services: [
      { title: "Gele Tying", description: "Elevate your look with expertly tied gele styles that add elegance to any occasion." },
      { title: "Wig Making", description: " Get a custom, natural-looking wig designed to fit your style, preference, and personality." },
    ]
  },
  {  
    categoryTitle: "Accessories & Special Packages",
    services: [
      { title: "Bead Making", description: "Handcrafted beaded jewelry, perfect for adding a unique touch to both traditional and modern outfits." },
      { title: "Bridal Package", description: "Look and feel stunning on your big day with our all-in-one bridal beauty package, including makeup, gele tying, hairstyling, and more." },
    ]
  },
]

function BeautyServices() {
  return (
    <main>
      <h2 className="-mx-[6.80%] font-poppins tracking-[0.125em] text-center py-7 bg-gradient-to-tr from-[#3F2136] to-[#AC117D] text-[#E3E4DB] font-[600] text-4xl max-md:text-3xl max-sm:text-2xl">Beauty Services</h2>
      <p className="font-poppins text-xl max-sm:text-base text-[#50514E] pt-5">Indulge in expert beauty treatments tailored to enhance your look and confidence. Whether for everyday elegance or special occasions, we&apos;ve got you covered!</p>

      <section className="mt-10">
        {categories.map((category, index) =>
          <aside className="mb-10" key={index}>
            <p className="font-poppins text-2xl max-md:text-xl max-sm:text-lg text-[#AC117D] mb-5">{category.categoryTitle}</p>
            <article className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
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

    </main>
  )
}

export default BeautyServices