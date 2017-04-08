export class Profile {

    public tweets: number;
    public following: number;
    public followers: number;

    constructor(
        public name:string,
        public login: string,
        public imgUrl: string
    )
    {
        this.tweets = (Math.random()*50000)+1;
        this.following = (Math.random()*500)+1;
        this.followers = (Math.random()*500)+1;
    }
}
