export class LoginPage {
constructor(page){
    this.page=page;
    this.usernamefield=page.getByRole('textbox', { name: 'Username, email, or mobile' });
    this.passwordfield=page.locator('#login-passwd');
    this.signinbutton=page.locator('#login-signin');
}

async navigate(url)
{
await this.page.goto(url);
await this.page.setViewportSize({ width: 1280, height: 800 });
}

async login(username, password) {
        await this.usernamefield.fill(username);
        await this.signinbutton.click();
        await this.page.waitForTimeout(2000);

        await this.passwordfield.fill(password);
        await this.signinbutton.click();
        //await this.page.waitForLoadState('networkidle');
    }

async getCurrentUrl() {
return this.page.url();
    }
}
