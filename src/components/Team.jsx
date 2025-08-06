import React from "react";

const teamMembers = [
  {
    name: "Vishal Patil",
    role: "Founder, Director, Post-Production Head ",
    image: "/vishal-2.webp",
    description:
      "With over 12 years of experience in the field of cinematography, I bring a deep passion for visual storytelling to every frame. Originally a mechanical engineer by qualification, my creative instincts led me to pursue my true calling - photography and filmmaking. Today, I proudly serve as the Founder, Director, and Post-Production Head of my creative venture, where I lead projects with a strong focus on cinematography and storytelling excellence. My journey from engineering to the lens reflects a blend of technical precision and artistic vision, driving impactful narratives across every project I undertake.",
  },
  {
    name: "Pratik Dethe",
    role: "Lead photograpgher",
    image: "/pratik.webp",
    description:
      "With 7 years of hands-on experience in photography, I serve as the Lead Photographer, known for my creative eye and quick adaptability. Originally a mechanical engineer, my passion for photography led me to follow my true calling - capturing moments that tell powerful stories. Often described as the \"man behind the camera,\" I’m the go-to person for high-energy shoots, even on short notice. My dedication, enthusiasm, and commitment to delivering standout visuals make me a reliable and dynamic force on any project.",
  },
  {
    name: "Ranjeet Manohar Pawar ",
    role: "Visual aerial head, Editor-in-chief",
    image: "/ranjeet.webp",
    description: "With over 15 years of experience in visual aerial cinematographer , I am a Aerial Specialist and Video Editor with a deep-rooted passion for photography and filmmaking. My journey began as a professional camera photographer, which eventually led me to pursue a specialist degree in drone technology from Droneworld. This transition marked the evolution of my passion—taking creativity to new heights, quite literally. As an all-round visual enthusiast, I bring a unique blend of ground and aerial perspectives to every project. I am skilled in Film Production, Ad Film Production, Corporate Film Production, and Documentary Filmmaking. My work is driven by precision, creativity, and a commitment to excellence. Hardworking and career-focused, I bring strong leadership qualities, a keen eye for detail, and a grounded, observant nature to every project I undertake. Whether on the ground or in the air, I strive to capture moments that speak volumes."

  },
  {
    name: "Mayur Kulkarni",
    role: "Customer Relationship Manager",
    image: "/mayur.webp",
    description:
      "With 6 years of professional experience and a Master’s degree in Engineering, I specialize in managing end-to-end operations across the business cycle. From order booking and billing to delivery and post-sales support, I ensure seamless execution and customer satisfaction at every stage.As a Customer Relationship Manager, I focus on building strong client connections while optimizing operational efficiency. My approach is detail-oriented, process-driven, and dedicated to delivering results that align with both business goals and customer expectations.",
  },
  {
    name: "Anand Lokluche",
    role: "Lead Photographer & Album Designer",
    image: "/anand.webp",
    description:
      "With 6 years of experience in photography and VFX animation, I bring a creative blend of visual artistry and technical expertise to every project. Holding a B.Sc. in VFX and Animation, I specialize as a Lead Photographer and Album Designer, crafting visually compelling stories both behind the camera and through post-production. My work is driven by a passion for detail, color, and composition—transforming moments into lasting memories with a cinematic touch.",
  },
];

export default function OurTeam() {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6 sm:px-10 lg:px-24 mt-10">
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-500 mb-2">Our Team</h1>
        <p className="text-gray-600 text-lg">
          Meet the people behind the lens who bring your stories to life.
        </p>
      </div>

      {/* Top Row - 3 Members */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-10">
        {teamMembers.slice(0, 3).map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>

      {/* Bottom Row - 2 Members Centered */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
        {teamMembers.slice(3).map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
}

const TeamCard = ({ member }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
    <div className="relative w-24 h-24 mx-auto mb-4">
      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        className="rounded-full w-24 h-24 object-cover"
      />
    </div>
    <h3 className="text-xl font-semibold text-yellow-600">{member.name}</h3>
    <p className="text-sm text-gray-500 mb-2">{member.role}</p>
    <p className="text-gray-600 text-sm leading-relaxed">
      {member.description}
    </p>
  </div>
);


 

 


