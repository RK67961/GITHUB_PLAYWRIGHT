import {test,expect} from '@playwright/test'
import  {GithubHomePage}  from '../github_pages/GithubHomePage';
import { NewRepository } from '../github_pages/GithubNewRepositoryPage';
import  xlsx from 'xlsx';
// const workbook = xlsx.readFile('tests/test-data/repodata.xlsx');
// const sheet = workbook.Sheets[workbook.SheetNames[0]];
// const testData = xlsx.utils.sheet_to_json(sheet);
const workbook = xlsx.readFile('tests/test-data/repodata.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const testData = xlsx.utils.sheet_to_json(sheet);
for (const data of testData){
    test(`Verify repo creation - ${data.reponame} @other`,async ({ page }) => {
    
    //const { reponame, repodescription } = data;
      const reponame = `${data.reponame}-${Date.now()}`;
    const repodescription = data.repodescription;

    const homepage = new GithubHomePage(page);
    await homepage.openHomePage();
    await homepage.createNewRepo();

    const newrepo = new NewRepository(page);
    await newrepo.validateCreateNewRepositoryPage();
    await newrepo.fillthedetails(reponame, repodescription);
    await newrepo.validateRepositoryCreated(reponame);
});}