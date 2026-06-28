import { Column, Heading, Meta, Schema, Row, Avatar, Text, Media } from "@once-ui-system/core";
import { Mailchimp, CustomMDX } from "@/components";
import { baseURL, blog, person, newsletter } from "@/resources";
import { getPosts } from "@/utils/utils";
import { formatDate } from "@/utils/formatDate";

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
  const allBlogs = getPosts(["src", "app", "blog", "posts"]);

  // Sort posts by date descending
  const sortedBlogs = allBlogs.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  return (
    <Column fillWidth center maxWidth="s" paddingTop="m" paddingBottom="m" gap="xl">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={blog.path}
        title={blog.title}
        description={blog.description}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <Column fillWidth gap="xs" horizontal="center">
        <Heading variant="heading-strong-xl">
          {blog.title}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {blog.description}
        </Text>
      </Column>

      <Column fillWidth gap="32">
        {sortedBlogs.map((post) => (
          <Column 
            key={post.slug} 
            fillWidth 
            gap="16" 
            padding="24" 
            radius="l" 
            border="neutral-alpha-weak"
            background="surface"
            style={{ position: 'relative' }}
          >
            {/* Header: Author Info */}
            <Row fillWidth style={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Row gap="12" vertical="center">
                <Avatar size="m" src={person.avatar} />
                <Column>
                  <Text variant="label-strong-m">{person.name}</Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
                  </Text>
                </Column>
              </Row>
              {post.metadata.tag && (
                <Text variant="label-strong-s" onBackground="brand-weak" style={{ textTransform: 'capitalize' }}>
                  #{post.metadata.tag}
                </Text>
              )}
            </Row>

            {/* Post Title */}
            <Heading variant="heading-strong-l" marginTop="8">
              {post.metadata.title}
            </Heading>

            {/* Post Image */}
            {post.metadata.image && (
              <Media
                src={post.metadata.image}
                alt={post.metadata.title}
                aspectRatio="16/9"
                sizes="(min-width: 768px) 100vw, 768px"
                border="neutral-alpha-weak"
                radius="m"
                marginTop="4"
              />
            )}

            {/* Post Content */}
            <Column as="article" fillWidth style={{ lineHeight: '1.6' }} gap="12">
              <CustomMDX source={post.content} />
            </Column>
          </Column>
        ))}
      </Column>

      {newsletter.display && <Mailchimp />}
    </Column>
  );
}

