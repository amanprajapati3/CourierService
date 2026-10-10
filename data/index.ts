import courierData from "./siteData.json";

export type RawCourierData = typeof courierData;

export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

const sec = courierData.CourierIndustries.sections;

/* Section data types                                                  */

export type CourierTopbarData = typeof sec.Topbar.variants.CourierTopbar1;
export type CourierHeaderData = typeof sec.Header.variants.CourierHeader1;
export type CourierBannerData = typeof sec.Banner.variants.CourierBanner1;
export type CourierAboutData = typeof sec.About.variants.CourierAbout1;
export type CourierServicesData = typeof sec.Services.variants.CourierServices1;
export type CourierTestimonialData =
  typeof sec.Testimonial.variants.CourierTestimonial1;
export type CourierStatsData = typeof sec.Stats.variants.CourierStats1;
export type CourierChooseData = typeof sec.Choose.variants.CourierChoose1;
export type CourierFaqData = typeof sec.Faq.variants.CourierFaq1;
export type CourierFaqPageData = typeof sec.FaqPage.variants.CourierFaqPage1;
export type CourierBlogData = typeof sec.Blog.variants.CourierBlog1;
export type CourierFooterData = typeof sec.Footer.variants.CourierFooter1;
export type CourierAboutPageData = typeof sec.AboutPage.variants.CourierAbout1;
export type CourierTeamData = typeof sec.Team.variants.CourierTeam1;
export type CourierContactData = typeof sec.Contact.variants.CourierContact1;
/* Header */
export type CourierHeaderNavItem = CourierHeaderData["nav"][number];
export type CourierHeaderButton = CourierHeaderData["buttons"][number];

/* Banner */
export type CourierBannerHighlight = CourierBannerData["highlights"][number];

/* About */
export type CourierAboutFeatureItem = CourierAboutData["features"][number];
export type CourierAboutExperienceBadge = CourierAboutData["experienceBadge"];

/* Services */
export type CourierServiceItem = CourierServicesData["services"][number];

/* Testimonial */
export type CourierTestimonialItem =
  CourierTestimonialData["testimonialItems"][number];

/* Stats */
export type CourierStatItem = CourierStatsData["items"][number];

/* Choose */
export type CourierChooseFeatureItem = CourierChooseData["features"][number];

/* Faq */
export type CourierFaqItem = CourierFaqData["faqs"][number];

/* Faq Page */
export type CourierFaqPageItem = CourierFaqPageData["faqs"][number];

/* Contact */
export type CourierContactInfoCard = CourierContactData["infoCards"][number];

/* Blog */
export type CourierBlogPost = CourierBlogData["posts"][number];

// team
export type CourierTeamMember = CourierTeamData["members"][number];

/* Footer */
export type CourierSocialLink = CourierFooterData["socialLinks"][number];
export type CourierFooterColumn = CourierFooterData["columns"][number];
export type CourierFooterLink = CourierFooterColumn["links"][number];
export type CourierFooterContactItem =
  CourierFooterData["footerContact"]["items"][number];
export type CourierFooterContactLine = CourierFooterContactItem["lines"][number];

/* About Page */
export type CourierAboutPageBanner = CourierAboutPageData["banner"];
export type CourierAboutPageExperienceBadge =
  CourierAboutPageData["experienceBadge"];

/* Site object                                                         */

export const site = {
  topbar: sec.Topbar.variants.CourierTopbar1,
  header: sec.Header.variants.CourierHeader1,
  banner: sec.Banner.variants.CourierBanner1,
  about: sec.About.variants.CourierAbout1,
  services: sec.Services.variants.CourierServices1,
  testimonial: sec.Testimonial.variants.CourierTestimonial1,
  stats: sec.Stats.variants.CourierStats1,
  choose: sec.Choose.variants.CourierChoose1,
  faq: sec.Faq.variants.CourierFaq1,
  blog: sec.Blog.variants.CourierBlog1,
  footer: sec.Footer.variants.CourierFooter1,
  aboutPage: sec.AboutPage.variants.CourierAbout1,
  team: sec.Team.variants.CourierTeam1,
  contact: sec.Contact.variants.CourierContact1,
  faqPage: sec.FaqPage.variants.CourierFaqPage1,
};

export default courierData;