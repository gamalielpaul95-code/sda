const infoPanel = document.getElementById("infoPanel");

function showZone(zone) {
  const data = {
    core: {
      title: "🌳 Green Core",
      text: "Central park with forests, water systems, and spiritual zones."
    },
    residential: {
      title: "🏡 Smart Residential",
      text: "Vertical forest homes with AI energy & water management."
    },
    education: {
      title: "🎓 Education & Innovation",
      text: "AI schools, research labs, and digital libraries."
    },
    agriculture: {
      title: "🌾 Agriculture Belt",
      text: "Vertical farms, aquaponics, and food security systems."
    },
    energy: {
      title: "⚡ Clean Energy Zone",
      text: "Solar, wind, batteries, and AI-managed grid."
    }
  };

  infoPanel.innerHTML = `
    <h2>${data[zone].title}</h2>
    <p>${data[zone].text}</p>
  `;
}
