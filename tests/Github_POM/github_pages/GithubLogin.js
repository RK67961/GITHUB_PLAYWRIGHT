export class GithubLogin{
    constructor(page)
    {
        this.page=page;
        this.usernamefield=page.getByRole('textbox',{name:'Username or email address' });
        this.passwordfield=page.getByRole('textbox',{name:'Password' });;
        this.signinbutton=page.getByRole('button',{name:'Sign in', exact: true })
    }

    async navigate(url)
{
await this.page.goto(url);
await this.page.setViewportSize({ width: 1280, height: 800 });
}

async login(username, password) {
        await this.usernamefield.fill(username);
        await this.page.waitForTimeout(2000);

        await this.passwordfield.fill(password);
        await this.signinbutton.click();
       
    }
    async getCurrentUrl(){
     return this.page.url();   
    }
}