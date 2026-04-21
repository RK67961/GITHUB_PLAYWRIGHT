
import { Given, When, Then } from '@cucumber/cucumber';
Given('user is on GitHub homepage', async function () {
  await this.homepage.openHomePage();
});
When('user creates a new repository', async function () {
  await this.homepage.createNewRepo();
  await this.newRepo.validateCreateNewRepositoryPage();
});
Then('repository should be created successfully', async function () {
  const repoName = `bdd-repo-${Date.now()}`;

  await this.newRepo.fillthedetails(repoName, 'BDD Repo');
  await this.newRepo.validateRepositoryCreated(repoName);
});