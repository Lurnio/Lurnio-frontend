
import MentorProfile from "./_components/MentorProfile";
import { getMockMentor } from "./mock";

export default function MentorPublicPage({
  params,
}: {
  params: { slug: string };
}) {
  const { mentor, courses, products, schedule, reviews } = getMockMentor(
    decodeURIComponent(params.slug)
  );

  return (
    <MentorProfile
      mentor={mentor}
      courses={courses}
      products={products}
      schedule={schedule}
      reviews={reviews}
    />
  );
}
