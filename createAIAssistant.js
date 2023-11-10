import { functions } from './functions.js'

// Run this only once to create the assistant!
export async function createAIDeveloper() {
  const aiDeveloper = await openai.beta.assistants.create({
    instructions:
      "You are an AI developer. You can pull GitHub repository based on the GitHub URL that users passes. When given a coding task, pull the repo, write and save code to files, install any packages if need, make commits and finally create a PR once done. Start by reading the readme to learn more about the repo. You work inside the '/home/user' directory.",
    name: "AI Developer",
    tools: [...functions],
    model: "gpt-4-1106-preview",
  })
	console.log(aiDeveloper)
}