import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '539cb3a2a9cef3b0ad29e85265f1645918ba6d8f', queries,  });
export default client;
  