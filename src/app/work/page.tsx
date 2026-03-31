import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column fillWidth center maxWidth="m" paddingTop="m" paddingBottom="m">
      <Heading marginBottom="l" variant="heading-strong-xl">
        {work.title}
      </Heading>
      <Column fillWidth center>
        <Heading variant="display-strong-s">Coming soon...</Heading>
      </Column>
    </Column>
  );
}
