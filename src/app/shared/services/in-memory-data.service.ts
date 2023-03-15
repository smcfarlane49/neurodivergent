import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const pages = [
      {
        id: 1,
        name: "header",
        tagline: "What does it mean when a person is neurodivergent",
        paragraph1:
          "The term “neurodivergent” describes people whose brain differences affect how their brain works. That means they have different strengths and challenges from people whose brains don’t have those differences. The possible differences include medical disorders, learning disabilities and other conditions. The possible strengths include better memory, being able to mentally picture three-dimensional (3D) objects easily, the ability to solve complex mathematical calculations in their head, and many more.",
        paragraph2:  "Neurodivergent isn’t a medical term. Instead, it’s a way to describe people using words other than “normal” and “abnormal.” That’s important because there’s no single definition of “normal” for how the human brain works.",
        paragraph3: "The word for people who aren’t neurodivergent is “neurotypical.” That means their strengths and challenges aren't affected by any kind of difference that changes how their brains work.",
        source: "Cleveland Clinic, Neurodivergent",
        url: "https://my.clevelandclinic.org/health/symptoms/23154-neurodivergent",
      },
      {
        id: 2,
        header: "Individuals Who Are Neurodivergent",
        description:
          "Neurodivergent looks differently for a lot of people, and unfortunately is it usually looked at negatively \n" +
          "in society today. This page is looking to provide resources to help individuals understand their rights \n" +
          "and find ways to help educate themselves and more importantly others.",
        name: "Individuals",
        tagline: "Individuals",
        title: "The need for Resources",
      },
      {
        id: 3,
        header: "Families With Neurodivergent Members",
        description:
          "Understanding family members who are neurodivergent is critical to communicating with them and helping \n" +
          "them navigate life. The resources on this page are meant to help you understand, teach others, and \n" +
          "stand up for your family members rights.",
        name: "clients",
        tagline: "TRUST",
        title: "Companies who use our services",
      },
      {
        id: 4,
        header: "Schools With Neurodivergent Students",
        description:
          "Working with students can be challenging in general, but understanding students who are neurodivergent \n" +
          "can challenge the best teachers and school administration. This page is to help provide resources that \n" +
          "will help school staff find techniques to communicate better and teach more effectively for those \n" +
          "individuals.",
        name: "families",
        tagline: "BELIEVING",
        title: "Focusing On What Matters Most",
      },
      {
        id: 5,
        header: "Employers With Neurodivergent Employees",
        description:
          "Working with people can be challenging in general, but working people who are neurodivergent can be \n" +
          "hard if the employees, especially managers, are not trained or educated on the topic. This page is to help \n" +
          "provide resources that will help a company to train employees and provide a friendlier work environment \n" +
          "for individuals who are neurodiverse.",
        name: "testimonials",
        tagline: "FEEDBACK",
        title: "What our customers are saying",
      },
      {
        id: 6,
        name: "footer",
        tagline: "Made with ❤ by",
        developer: "Stephen McFarlane",
        developerlink: "",
      },
    ];
    const individualResources = [
      {
        id: 1,
        title: "Neurodiversity Network",
        subtitle: "Neurodivergent Strengths",
        description:
          "This site enables a person to identify which neurodivergent strenghts one\n" +
          "has and to take an assessment to understand interests and skills. This can\n" +
          "help identify which careers might work for you.",
        url: "https://www.neurodiversitynetwork.net/neurodivergent-strengths",
      },
      {
        id: 2,
        title: "Individual Resource 2",
        description:
          "Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi",
        url: "",
      },
      {
        id: 3,
        title: "Individual Resource 3",
        description:
          "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
        url: "",
      },
      {
        id: 4,
        title: "Individual Resource 4",
        description:
          "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
        url: "",
      },
    ];
    const familyResources = [
      {
        id: 1,
        title: "Family Resource 1",
        description:
          "Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico",
        url: "",
      },
      {
        id: 2,
        title: "Family Resource 2",
        description:
          "Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi",
        url: "",
      },
      {
        id: 3,
        title: "Family Resource 3",
        description:
          "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
        url: "",
      },
      {
        id: 4,
        title: "Family Resource 4",
        description:
          "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
        url: "",
      },
    ];
    const schoolResources = [
      {
        id: 1,
        title: "School Resource 1",
        description:
          "Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico",
        url: "",
      },
      {
        id: 2,
        title: "School Resource 2",
        description:
          "Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi",
        url: "",
      },
      {
        id: 3,
        title: "School Resource 3",
        description:
          "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
        url: "",
      },
      {
        id: 4,
        title: "School Resource 4",
        description:
          "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
        url: "",
      },
    ];
    const employerResources = [
      {
        id: 1,
        title: "Employer Resource 1",
        description:
          "Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico",
        url: "",
      },
      {
        id: 2,
        title: "Employer Resource 2",
        description:
          "Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi",
        url: "",
      },
      {
        id: 3,
        title: "Employer Resource 3",
        description:
          "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
        url: "",
      },
      {
        id: 4,
        title: "Employer Resource 4",
        description:
          "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
        url: "",
      },
    ];
    const images = [
      { id: 1, name: "gallery-image-1.jpg" },
      { id: 2, name: "gallery-image-2.jpg" },
      { id: 3, name: "gallery-image-3.jpg" },
      { id: 4, name: "gallery-image-4.jpg" },
      { id: 5, name: "gallery-image-5.jpg" },
      { id: 6, name: "gallery-image-6.jpg" },
    ];
    const menu = [
      { id: 1, title: "Home", link: "/home"},
      { id: 2, title: "Individuals", link: "/individuals"},
      { id: 3, title: "Families", link: "/families"},
      { id: 5, title: "Schools", link: "/schools"},
      { id: 6, title: "Employers", link: "/employers"},
    ];
    const quotes = [
      {
        id: 1,
        name: "quotes",
        tagline: "Neurodiversity Quotes",
        quote:
          "“The world will benefit significantly from talents such as empathy, emotional intensity, certitude, sensitivity, ability to detect details, depth of thought, will to embrace, and many other things that we need in a time where alienation, coldness, superficiality, and emotional hardness are predominating.”",
        author:  "Jenara Nerenberg",
        source: "Divergent Mind: Thriving in a World That Wasn't Designed for You",
        url: "https://www.goodreads.com/work/quotes/68802181",
      },
      {
        id: 2,
        name: "quotes",
        tagline: "Neurodiversity Quotes",
        quote:
          "“You’re not defective, Ewan,’ she continued. ‘You’re not broken. You’re not the wrong kind of person. And don’t let anyone in this world tell you otherwise. You and your friends are exactly who they’re meant to be.”",
        author:  "Chris Bonnello",
        source: "Underdogs",
        url: "https://www.goodreads.com/work/quotes/69751786",
      },
      {
        id: 3,
        name: "quotes",
        tagline: "Neurodiversity Quotes",
        quote:
          "“One of the cruelest tricks our culture plays on autistic people is that it makes us strangers to ourselves. We grow up knowing we're different, but that difference is defined for us in terms of an absence of neurotypicality, not as the presence of another equally valid way of being.”",
        author:  "Julia Bascom",
        source: "Loud Hands: Autistic People, Speaking",
        url: "https://www.goodreads.com/work/quotes/22469292",
      },
    ];
    const companies = [
      {
        id: 1,
        name: "Tree",
        weblink: "company-logo1.png",
        logo: "company-logo1.png",
      },
      {
        id: 2,
        name: "Fingerprint",
        weblink: "company-logo2.png",
        logo: "company-logo2.png",
      },
      {
        id: 3,
        name: "The Man",
        weblink: "company-logo3.png",
        logo: "company-logo3.png",
      },
      {
        id: 4,
        name: "Mustache",
        weblink: "company-logo4.png",
        logo: "company-logo4.png",
      },
      {
        id: 5,
        name: "Goat",
        weblink: "company-logo5.png",
        logo: "company-logo5.png",
      },
      {
        id: 6,
        name: "Justice",
        weblink: "company-logo6.png",
        logo: "company-logo6.png",
      },
      {
        id: 7,
        name: "Ball",
        weblink: "company-logo7.png",
        logo: "company-logo7.png",
      },
      {
        id: 8,
        name: "Cold",
        weblink: "company-logo8.png",
        logo: "company-logo8.png",
      },
      {
        id: 9,
        name: "Cold",
        weblink: "company-logo9.png",
        logo: "company-logo9.png",
      },
    ];
    const feedback = [
      {
        id: 1,
        name: "John Doe",
        userimage: "user-1.jpg",
        comments:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        company: "ABC",
      },
      {
        id: 2,
        name: "Roslyn Doe",
        userimage: "user-2.jpg",
        comments:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        company: "Happy Customer",
      },
      {
        id: 3,
        name: "Thomas Doe",
        userimage: "user-3.jpg",
        comments:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        company: "Happy Customer",
      },
    ];
    const plans = [
      {
        id: 1,
        title: "PERSONAL",
        subtitle: "The standard version",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "19",
        currency: "₹",
        downloads: "5 Downloads",
        extensions: "2 Extensions",
        tutorials: "Tutorials",
        support: "Forum Support",
        updates: "1 year free updates",
        buttontext: "BUY TODAY",
        buttonlink: "#",
        featured: false,
      },
      {
        id: 2,
        title: "STUDENT",
        subtitle: "Most popular choice",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "29",
        currency: "₹",
        downloads: "15 Downloads",
        extensions: "5 Extensions",
        tutorials: "Tutorials with files",
        support: "Forum Support",
        updates: "2 year free updates",
        buttontext: "BUY TODAY",
        buttonlink: "#",
        featured: true,
      },
      {
        id: 3,
        title: "BUSINESS",
        subtitle: "For the whole team",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "49",
        currency: "₹",
        downloads: "Unlimited Downloads",
        extensions: "Unlimited Downloads",
        tutorials: "HD Video Tutorials",
        support: "Chat Support",
        updates: "Lifetime free updates",
        buttontext: "BUY TODAY",
        buttonlink: "#",
        featured: false,
      },
    ];
    const websites = [
      {
        id: 1,
        link: "https://facebook.com/",
        title: "Facebook",
        target: "_blank",
        username: "Thor",
        icon: "facebook",
      },
      // {
      //   id: 2,
      //   link: "https://googleplus.com/",
      //   title: "Google+",
      //   target: "_blank",
      //   username: "+jagmohan",
      //   icon: "google-plus",
      // },
      {
        id: 3,
        link: "https://twitter.com/",
        title: "Twitter",
        target: "_blank",
        username: "joker",
        icon: "twitter",
      },
      {
        id: 4,
        link: "https://instagram.com/",
        title: "Instagram",
        target: "_blank",
        username: "superman",
        icon: "instagram",
      },
      // {
      //   id: 5,
      //   link: "https://behance.com/",
      //   title: "Behance",
      //   target: "_blank",
      //   username: "jagmohan",
      //   icon: "behance",
      // },
    ];

    return {
      menu,
      pages,
      individualResources,
      familyResources,
      schoolResources,
      employerResources,
      images,
      quotes,
      companies,
      feedback,
      plans,
      websites,
    };
  }
}
