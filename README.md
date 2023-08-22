# Description

Blog example using Next.js and Contentful CMS.

## Live Demo

You can see a live demo at [https://contentful-blog.gabrielmoraes.dev](https://contentful-blog.gabrielmoraes.dev)

## Requirements

`node` and `pnpm` must be installed on your system.

## Installation

Clone this repository:

```bash
git clone https://github.com/gabrielnafuzi/nextjs-contentful-blog.git
```

Move into the project directory:

```bash
cd nextjs-contentful-blog
```

Install dependencies:

```bash
pnpm install
```

## Configuration

### Step 1. Create an account and a space on Contentful

First, [create an account on Contentful](https://www.contentful.com/sign-up/).

After creating an account, create a new empty **space** from the [dashboard](https://app.contentful.com/) and assign to it any name of your liking.

### Step 2. Create a content model

The [content model](https://www.contentful.com/developers/docs/concepts/data-model/) defines the data structures of your application/websites. The structures are flexible and you can tailor them to your needs.

For this example you need to create a content model that defines an author and a post content type. **You can create these two by running a script**.

#### Run a script to create the content model

This project includes a setup script which you can use to set up the content model expected by the source code.

In your Contentful dashboard go to **Settings > General Settings** and copy the **Space ID**.

Next, go to **Settings > API > Content management tokens** and create a new token by clicking **Generate personal token**. This token has the same access rights as the logged in user. **Do not share it publicly**, you will only use it to set up your space and can delete it afterwards.

With the space ID and management access token, create a `.env` file in the root of the project and add the following:

```bash
CONTENTFUL_SPACE_ID=""
CONTENTFUL_ACCESS_TOKEN=""
CONTENTFUL_MANAGEMENT_TOKEN="CFPAT-..."
```

- `CONTENTFUL_SPACE_ID` should be the **Space ID** field of your API Key
- `CONTENTFUL_ACCESS_TOKEN` should be the **[Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) - access token** field of your API key
- `CONTENTFUL_MANAGEMENT_TOKEN` should be the **[Content Management API](https://www.contentful.com/developers/docs/references/content-management-api/) - personal access token** field of your API key

And then run the following command:

```bash
pnpm run contentful:import
```

This command will create the needed content structures and set up your Contentful space ready to use. The output should look as follows:

```
> contentful-blog@0.1.0 contentful:import /Users/gabriel/www/contentful-blog
> dotenv -- cross-var contentful space import --space-id=%CONTENTFUL_SPACE_ID% --management-token=%CONTENTFUL_MANAGEMENT_TOKEN% --content-file=src/lib/contentful/__generated/export.json


┌──────────────────────────────────────────────────┐
│ The following entities are going to be imported: │
├─────────────────────────────────┬────────────────┤
│ Content Types                   │ 2              │
├─────────────────────────────────┼────────────────┤
│ Tags                            │ 0              │
├─────────────────────────────────┼────────────────┤
│ Editor Interfaces               │ 2              │
├─────────────────────────────────┼────────────────┤
│ Entries                         │ 0              │
├─────────────────────────────────┼────────────────┤
│ Assets                          │ 0              │
├─────────────────────────────────┼────────────────┤
│ Locales                         │ 1              │
├─────────────────────────────────┼────────────────┤
│ Webhooks                        │ 0              │
└─────────────────────────────────┴────────────────┘
 ✔ Validating content-file
 ✔ Initialize client (1s)
 ✔ Checking if destination space already has any content and retrieving it (2s)
 ✔ Apply transformations to source data (1s)
 ✔ Push content to destination space
   ✔ Connecting to space (1s)
   ...
   ...
   ...
```

### Step 3. Validate your content model

After setting up the content model, it should look as follows.

**Content model overview**

![Content model overview](https://github.com/gabrielnafuzi/nextjs-contentful-blog/assets/58908279/57016ba2-e2e8-47de-bf94-7c7760029baf)

### Step 4. Populate Content

Go to the **Content** section in your space, then click on **Add entry** and select the **Page** content type:

- Add a title, for example: `About`
- Add a description, for example: `About this site`
- Add a body using the rich text editor, for example: `This is a blog example using Next.js and Contentful CMS.`

You can also create posts, go to the **Content** section in your space, then click on **Add entry** and select the **Post** content type:

- Add a title, for example: `Hello World`
- Add a description, for example: `My first post`
- Add a content using the rich text editor, for example: `This is my first post using Next.js and Contentful CMS.`

### Step 5. Run in development mode

```bash
pnpm dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)!
