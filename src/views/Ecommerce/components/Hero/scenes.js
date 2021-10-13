/* Icons */
import servicesIcon from "./assets/icons/construction-trowel.png";
import materialIcon from "./assets/icons/material.png";
import toolslIcon from "./assets/icons/trowel.jpg";
import apparelIcon from "./assets/icons/apparel.png";

/* png images */
import services1 from "./assets/images/services/instaimg-circ.png";
import services2 from "./assets/images/services/instbckgrnd-circ.png";
import services3 from "./assets/images/services/instaimg2-circ.png";
import materials1 from "./assets/images/materials/usg-cgc.png";
import materials2 from "./assets/images/materials/sheetrock.jpg";
import materials3 from "./assets/images/materials/trim-tex.jpg";
import tools1 from "./assets/images/tools/columbia.png";
import tools2 from "./assets/images/tools/TapeTech.jpg";
import tools3 from "./assets/images/tools/NorthStar.jpg";
import apparel1 from "./assets/images/apparel/csr.jpg";
import apparel2 from "./assets/images/apparel/PRC.jpg";
import apparel3 from "./assets/images/apparel/tapetech.jpg";

export const servicesScene = {
  icon: { src: servicesIcon, alt: "Service icon" },
  text: "Services",
  linkUrl: "/shop/services",
  image1: { src: services1, alt: "Picture of services" },
  image2: { src: services2, alt: "Picture of services" },
  image3: { src: services3, alt: "Picture of services" },
};

export const materialsScene = {
  icon: { src: materialIcon, alt: "materials icon" },
  text: "Materials",
  linkUrl: "/shop/materials",
  image1: { src: materials1, alt: "Picture of materials" },
  image2: { src: materials2, alt: "Picture of materials" },
  image3: { src: materials3, alt: "Picture of materials" },
};

export const toolsScene = {
  icon: { src: toolslIcon, alt: "tools icon" },
  text: "Tools",
  linkUrl: "/shop/automatictools",
  image1: { src: tools1, alt: "Picture of tools" },
  image2: { src: tools2, alt: "Picture of tools" },
  image3: { src: tools3, alt: "Picture of tools" },
};

export const apparelScene = {
  icon: { src: apparelIcon, alt: "tools icon" },
  text: "Apparel",
  linkUrl: "/shop/apparel",
  image1: { src: apparel1, alt: "Picture of apparel" },
  image2: { src: apparel2, alt: "Picture of apparel" },
  image3: { src: apparel3, alt: "Picture of apparel" },
};
