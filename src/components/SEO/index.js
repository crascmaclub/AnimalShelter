import React from "react";
import Head from "next/head";

const socialTags = ({
    openGraphType,
    url,
    title,
    description,
    image,
    createdAt,
    updatedAt,
}) => {
    const metaTags = [
        { name: "twitter:card", content: "summary_large_image" },
        {
            name: "twitter:site",
            content:'AnimalShelter',
        },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        {
            name: "twitter:creator",
            content: '@NhtMinh09692640',
        },
        { name: "twitter:image:src", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "og:title", content: title },
        { name: "og:type", content: openGraphType },
        { name: "og:url", content: url },
        { name: "og:image", content: image },
        { name: "og:description", content: description },
        {
            name: "og:site_name",
            content: 'AnimalShelter',
        },
        {
            name: "og:published_time",
            content: createdAt || new Date().toISOString(),
        },
        {
            name: "og:modified_time",
            content: updatedAt || new Date().toISOString(),
        },
    ];

    return metaTags;
};

export const SEO = (props) => {
    const { url, title, description, image, schemaType } = props;

    return (
        <Head>
            <title>{title + ' | AnimalShelter'}</title>
            <meta name="description" content={description} />
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
            <meta itemProp="image" content={image} />
            {socialTags(props).map(({ name, content }) => {
                return <meta key={name} name={name} content={content} />;
            })}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": schemaType,
                        name: title,
                        about: description,
                        url: url,
                    }),
                }}
            />
        </Head>
    );
};

SEO.defaultProps = {
    url: "/",
    openGraphType: "website",
    schemaType: "Article",
    title: 'AnimalShelter',
    description: 'AnimalShelter là một dự án nhằm nâng cao nhận thức của người dùng về các loài động vật nói chung và các loài động vật đỗi mặt với tuyệt chủng nói riêng',
    image: 'https://www.aspca.org/sites/default/files/behind-the-scenes-of-an-animal-rescue-main.jpg',
};


