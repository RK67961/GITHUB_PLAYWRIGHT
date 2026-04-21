
import { test, expect } from '../fixtures';
test.beforeEach(async ({ homepage }) => {
  await homepage.openHomePage();
});
test('Verify Github homepage has no accessibility violations @accessibility',async ({ axe }) => {
  //const results = await new AxeBuilder({page}).analyze();
  const results = await axe();
  console.log(`Total violations found: ${results.violations.length}`);
  results.violations.forEach((violation,index) => {
    console.log(`Violation ${index + 1}:`);
    console.log(`ID:${violation.id}`);
    console.log(`Severity:${violation.impact}`);
    console.log(`Description:${violation.description}`);
  });
expect(results.violations).toHaveLength(0);
});