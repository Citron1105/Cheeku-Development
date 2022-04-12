// Export a default client, message and args structure

import { Message } from "discord.js";
import { client } from "..";

export const CommandStructure = {
  client: client,
  message: Message,
  /**
   * @type {string[]} args
   */
  args: [],
};
