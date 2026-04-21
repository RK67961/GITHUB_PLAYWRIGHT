import { test, expect } from '../fixtures';
import  xlsx from 'xlsx';
const workbook = xlsx.readFile('tests/test-data/repodata.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const testData = xlsx.utils.sheet_to_json(sheet);
for (const data of testData){
    test(`Verify repo creation - ${data.reponame} @other`,async ({ homepage,newrepo }) => {
    const reponame = `${data.reponame}-${Date.now()}`;
    const repodescription = data.repodescription;

    await homepage.openHomePage();
    await homepage.createNewRepo();
    await newrepo.validateCreateNewRepositoryPage();
    await newrepo.fillthedetails(reponame, repodescription);
    await newrepo.validateRepositoryCreated(reponame);
});}