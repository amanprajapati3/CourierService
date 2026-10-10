import PageBanner from "../components/shared/PageBanner";
import CourierBlog1 from "../components/homelayout/BlogSection";
import { site } from "@/data";

export default function BlogPage() {
  return (
    <div className="bg-white">
      <PageBanner {...site.blog.banner} />
      <CourierBlog1 paginate />
    </div>
  );
}
