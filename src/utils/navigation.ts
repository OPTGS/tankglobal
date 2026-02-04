// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Company",
    links: [
      { name: "Services", url: "/services" },
      { name: "Products", url: "/products" },
    ],
  },
  {
    section: "Support",
    links: [
      { name: "Contact", url: "/contact" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "#",
  x: "#",
  google: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};