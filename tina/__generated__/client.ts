import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/e99646fb-1133-4d5b-8c62-ec401a155fa1/github/main', token: '539cb3a2a9cef3b0ad29e85265f1645918ba6d8f', queries,  });
export default client;
  