class App
{
    runApplication()
    {
        this.Mario();
        console.log(this.BWAHAHA());
        console.log(this.rekenen());
        
    }

    Mario()
    {
        let Mario = "MARIO!";
        console.log(Mario);
    }
    BWAHAHA()
    {
        let lachen = "BWAHAHA!!!";
        return console.log(lachen);

    }
    rekenen()
    {
        
    }
    
}

let app = new App();
app.runApplication();
