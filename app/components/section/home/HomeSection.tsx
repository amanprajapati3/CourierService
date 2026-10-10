import CourierAbout1 from "../../homelayout/AboutSection";
import CourierBanner1 from "../../homelayout/Banner";
import CourierBlog1 from "../../homelayout/BlogSection";
import CourierChoose1 from "../../homelayout/ChooseSection";
import CourierFaq1 from "../../homelayout/FaqSection";
import CourierServices1 from "../../homelayout/ServicesSection";
import CourierStats1 from "../../homelayout/Stats";
import CourierTestimonial1 from "../../homelayout/TestimonialSection";

export default function HomeSection(){
    return(
        <>
        <CourierBanner1/>
        <CourierAbout1/>
        <CourierServices1/>
        <CourierTestimonial1/>
        <CourierStats1/>
        <CourierChoose1/>
        <CourierFaq1/>
        <CourierBlog1 limit={3} />
        </>
    )
}