const teamMembers = [
  {
    id: 1,
    name: "Mrs. Samanthi Ramanayake",
    position: "Director Sales",
    image: "/team/p1.webp"
  },
  {
    id: 2,
    name: "Mrs. Samanthi Ramanayake",
    position: "Director Sales",
    image: "/team/p2.webp"
  },
  {
    id: 3,
    name: "Mrs. Samanthi Ramanayake",
    position: "Director Sales",
    image: "/team/p3.webp"
  },
  {
    id: 4,
    name: "Mrs. Samanthi Ramanayake",
    position: "Director Sales",
    image: "/team/p4.webp"
  },
  {
    id: 5,
    name: "Mrs. Samanthi Ramanayake",
    position: "Director Sales",
    image: "/team/p5.webp"
  },
  {
    id: 6,
    name: "Mrs. Samanthi Ramanayake",
    position: "Director Sales",
    image: "/team/p6.webp"
  },
  {
    id: 7,
    name: "Mrs. Samanthi Ramanayake",
    position: "Director Sales",
    image: "/team/p7.webp"
  },
  {
    id: 8,
    name: "Mrs. Samanthi Ramanayake",
    position: "Director Sales",
    image: "/team/p8.webp"
  },
  {
    id: 9,
    name: "Mrs. Samanthi Ramanayake",
    position: "Director Sales",
    image: "/team/p9.webp"
  },
  {
    id: 10,
    name: "Mrs. Samanthi Ramanayake",
    position: "Director Sales",
    image: "/team/p10.webp"
  },
  {
    id: 11,
    name: "Mrs. Samanthi Ramanayake",
    position: "Director Sales",
    image: "/team/p11.webp"
  }
]

export function Team() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-gray-100 font-anybody">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-gray-800">
          Team
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gradient-to-b from-red-600 to-red-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 will-change-transform"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-auto object-contain -mb-[50px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Member Info */}
              <div className="p-3 text-left">
                <h3 className="text-white font-semibold text-xs md:text-sm mb-0.5">
                  {member.name}
                </h3>
                <p className="text-red-200 text-[10px] md:text-xs">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
