import { Octokit } from "octokit";

const token = useRuntimeConfig().public.GITHUB_TOKEN;

export const octokitCLI = new Octokit({
  auth: token
});


export async function getPinnedRepos(query: string) {
  const response = await octokitCLI.graphql(query, {
    headers: {
      authorization: `token ${token}`
    }
  })

  return response;
}