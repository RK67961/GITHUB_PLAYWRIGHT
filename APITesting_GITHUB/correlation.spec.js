import { test, expect } from '@playwright/test';
import { GithubLogin } from '../tests/Github_POM/github_pages/GithubLogin';

test('@correlation Create issue and validate using issue ID', async ({ request }) => {
const baseURL = process.env.GITHUB_baseurl;
  const headers = {
    Authorization: `Bearer ${process.env.GHUB_Accesstoken}`,
    Accept: 'application/vnd.github+json'
  };
  const createRes = await request.post(
    `${baseURL}/repos/priyankakesamsetty1504-hue/Hello-World/issues`,
    {
      headers: headers,
      data: {
        title: `Test Issue - ${Date.now()}`
      }
    }
  );
  expect(createRes.status()).toBe(201);
  const createBody = await createRes.json();
  const issueNumber = createBody.number;
  console.log('Created Issue Number:', issueNumber);
  const getRes = await request.get(
    `${baseURL}/repos/priyankakesamsetty1504-hue/Hello-World/issues/${issueNumber}`,
    {
      headers: headers
    }
  );
  expect(getRes.status()).toBe(200);
  const getBody = await getRes.json();
  expect(getBody.number).toBe(issueNumber);
  expect(getBody.title).toContain('Test Issue');
console.log('Fetched Issue:', getBody);
});