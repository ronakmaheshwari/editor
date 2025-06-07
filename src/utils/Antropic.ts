import Anthropic from "@anthropic-ai/sdk";
import { Api_Key } from "./utils";

export const anthropic = new Anthropic({
  apiKey: Api_Key,
  dangerouslyAllowBrowser: true 
});
