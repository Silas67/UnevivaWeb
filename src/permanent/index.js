import FacebookIcon from '/src/assets/icons/facebook.svg';
import TwitterIcon from '/src/assets/icons/twitter.svg';
import InstagramIcon from '/src/assets/icons/instagram.svg';
import f2 from "../assets/images/f2.png"
import f3 from "../assets/images/f3.png"
import f4 from "../assets/images/f4.png"
import f5 from "../assets/images/f5.png"
import f6 from "../assets/images/f6.png"
import a4 from "../assets/images/a4.png"
import r5 from "../assets/images/r5.png"
import R2 from "../assets/images/R2.png"
import r7 from "../assets/images/r7.png"
import r8 from "../assets/images/r8.png"





export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
    {label: "New account", href: "#signup", onlyMobile: true },
    {label: "Sign in", href: "#login", onlyMobile: true },
];

export const ddbLinks = [
    { href: "#dashboard", label: "Dashboard", id: "menu-item-0"},
    { href: "#myposts", label: "My Account", id: "menu-item-1"},
    { href: "#myorders", label: "Sign Out", id: "menu-item-2"},
];

export const navigation = [
    {id: "0", title: "Home", url: "/" },
    {id: "1", title: "Shop", url: "/shop"},
    {id: "2", title: "About Us", url: "/about"},
    {id: "3", title: "Contact Us", url: "/contact"},
  ];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const footerLinks = [
    {
        title: "Contact",
        links: [
            { name: "Address: Bingham University, Karu, Nassawara" },
            { name: "Phone: (+234)-810-488-4845, (+234)-904-775-3744" },
            { name: "Email: unevivasales@gmail.com" }
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "#about-us" },
            { name: "FAQs", link: "/" },
            { name: "Delivery Information", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Terms And Conditions", link: "/" },
        ],
    },
    {
        title: "Account",
        links: [
            { name: "Sign Up/Sign In", link: "#about-us" },
            { name: "Check Cart", link: "/" },
            { name: "Manage Posts", link: "/" },
            { name: "Track My Orders", link: "/" },
        ],
    },
];

export const socialMedia = [
    { src: FacebookIcon, alt: "facebook logo" },
    { src: TwitterIcon, alt: "twitter logo" },
    { src: InstagramIcon, alt: "instagram logo" },
];

export const benefits = [
    {
        imgURL: f2,
        label: "Order preview",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: f3,
        label: "Save Money",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
    {
        imgURL: f4,
        label: "Promotions",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
    {
        imgURL: f5,
        label: "Happy Sale",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
    {
        imgURL: f6,
        label: "Support",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const products = [
    {
        imgURL: a4,
        profile: "@Amycare",
        description: "L'oreal Body Cream"
    },
    {
        imgURL: r5,
        profile: "@Judithessence",
        description: "Scented Oil Perfumes Set 9 Pieces"
    },
    {
        imgURL: R2,
        profile: "@feran_accersories",
        description: "Cuban Gold"
    },
    {
        imgURL: r7,
        profile: "@sarahfashion",
        description: "Ladies Elegant Heel Sandals For Women (Shoe Only)- Black"
    },
    {
        imgURL: r8,
        profile: "@jane",
        description: "9 Pieces Copper Plated Nose Clippers Fashion Jewelry."
    },
    {
        imgURL: a4,
        profile: "@Amycare",
        description: "L'oreal Body Cream"
    },
    {
        imgURL: r5,
        profile: "@Judithessence",
        description: "Scented Oil Perfumes Set 9 Pieces"
    },
];

export const contactmsg = [
    { type: "text", placeholder: "Name" },
    { type: "email", placeholder: "Email" },
    { type: "text", placeholder: "Subject" },
];