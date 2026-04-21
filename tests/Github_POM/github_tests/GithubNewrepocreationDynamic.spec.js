import {test,expect} from '@playwright/test';
import  {GithubHomePage}  from '../github_pages/GithubHomePage';
import { NewRepository } from '../github_pages/GithubNewRepositoryPage';
test('Verify user is able to create a new repository @other', async({page})=>{
    const RepositoryNameInput= `${process.env.reponame}-${Date.now()}`;
    const RepositoryDescriptionInput= process.env.repodesc;

 const homepage= new GithubHomePage(page);
  await homepage.openHomePage();
  await homepage.createNewRepo();

  const newrepo= new NewRepository(page);
  await newrepo.validateCreateNewRepositoryPage();
  await newrepo.fillthedetails(RepositoryNameInput,RepositoryDescriptionInput);
  await newrepo.validateRepositoryCreated(RepositoryNameInput);
  //await newrepo.deleteRepository(RepositoryNameInput);

});