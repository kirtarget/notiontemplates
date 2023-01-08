import { z } from "zod";
import { notion, databaseId } from "../../notionClient";
import type { RichText } from "../../../utils/formatText";

import { createTRPCRouter, publicProcedure } from "../trpc";

interface Properties {
  [key: string]: {
    id: string;
    type: string;
    url: string;
    rich_text?: RichText[];
  };
}

interface NotionPage {
  id: string;
  parent: {
    type: string;
    database_id: string;
  };
  properties: Properties;
  url: string;
}

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getItems: publicProcedure.query(async () => {
    const response = await notion.databases.retrieve({
      database_id: databaseId as string,
    });

    console.log(response);
    return response;
  }),

  getNames: publicProcedure.query(async () => {
    const response = (await notion.databases.query({
      database_id: databaseId as string,
    })) as { results: NotionPage[] };

    return response.results.map(fromNotionObject);
  }),
});

function notionPropertiesById(properties: Properties): Properties {
  return Object.values(properties).reduce((acc, key) => {
    const { id, ...rest } = key;
    return { ...acc, [id]: rest };
  }, {});
}

function fromNotionObject(notionPage: NotionPage) {
  const propertiesById = notionPropertiesById(notionPage.properties);

  return {
    id: notionPage.id,
    cover: propertiesById[process.env.NOTION_COVER_URL as string],
    title: propertiesById[process.env.NOTION_TITLE_ID as string],
    instruction: propertiesById[process.env.NOTION_INSTRUCTIONS_ID as string],
    description: propertiesById[process.env.NOTION_DESCRIPTION_ID as string],
    link: propertiesById[process.env.NOTION_LINK_ID as string],
  };
}
