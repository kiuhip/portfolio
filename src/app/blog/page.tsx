import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column fillWidth center maxWidth="m" paddingTop="m" paddingBottom="m">
      <Heading marginBottom="l" variant="heading-strong-xl">
        {blog.title}
      </Heading>
      <Column fillWidth center>
        <Heading variant="display-strong-s">Coming soon...</Heading>
      </Column>
    </Column>
  );
}
