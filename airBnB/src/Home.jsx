import React from "react";
import Contact from "./Contact";
import image1 from "./assets/astrohouse.jpg";
import image2 from "./assets/dessertguy.jpg";
import image3 from "./assets/italycs1.6.jpg";
import image4 from "./assets/kevin.jpg";
import image5 from "./assets/lakehouse.jpg";
import image6 from "./assets/mancavehouse.jpg";
import image7 from "./assets/psychohouse.jpg";
import image8 from "./assets/flathouse.jpg";

export default function HomePage() {
  const contactData = [
    {
      img: image1,
      name: "John Doe",
      number: "(555) 123-4567",
      price: "$1200",
      desc: "This celestial hideaway is a night sky enthusiast's dream. As darkness falls, the world's grandest spectacle unfolds above you. Step out onto the expansive deck and witness a canvas of stars, constellations, and the Milky Way stretching endlessly across the night sky.",
      linkUrl: "",
    },
    {
      img: image2,
      name: "Sarah Smith",
      number: "(555) 987-6543",
      price: "$1500",
      desc: "A charming beachfront bungalow, featuring a spacious deck overlooking the ocean, where you can enjoy breathtaking sunsets and the sound of crashing waves.",
      linkUrl: "",
    },
    {
      img: image3,
      name: "Toby Urban",
      number: "(555) 789-1234",
      price: "$1800",
      desc: "An elegant Victorian-era mansion with a grand staircase, stained glass windows, and a beautifully landscaped garden, perfect for hosting lavish garden parties.",
      linkUrl: "",
    },
    {
      img: image4,
      name: "Emily Jones",
      number: "(555) 234-5678",
      price: "$2500",
      desc: "A Southwestern adobe home with terracotta tiles, arched doorways, and a private courtyard, offering a taste of the American Southwest's architectural charm.",
      linkUrl: "",
    },
    {
      img: image5,
      name: "Lisa Anderson",
      number: "(555) 876-5432",
      price: "$3000",
      desc: "Nestled along the tranquil shores of a pristine lake, this lakeside retreat offers the epitome of tranquility. Wake up to the soft ripples of the water and enjoy your morning coffee on the private dock.",
      linkUrl: "",
    },
    {
      img: image6,
      name: "David Wilson",
      number: "(555) 345-6789",
      price: "$1700",
      desc: "A cozy cottage nestled in the heart of a picturesque forest, with a stone fireplace and a large bay window that offers stunning views of the surrounding woods.",
      linkUrl: "",
    },
    {
      img: image7,
      name: "Amy Johnson",
      number: "(555) 432-1098",
      price: "$700",
      desc: "A modern, minimalist townhouse with sleek lines, large windows, and an open-concept design, offering a stylish and functional urban living space.",
      linkUrl: "",
    },
    {
      img: image8,
      name: "Kevin Miller",
      number: "(555) 210-9876",
      price: "$1600",
      desc: "A futuristic smart home with automated features, including voice-controlled lighting, climate control, and security systems, making daily life highly efficient and comfortable.",
      linkUrl: "",
    },
  ];

  return (
    <div className="container-sm">
      <div class="d-flex flex-wrap justify-content-center ">
        {contactData.map((contact, index) => (
          <Contact key={index} {...contact} />
        ))}
      </div>
    </div>
  );
}
