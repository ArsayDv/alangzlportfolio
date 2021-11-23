export class Project{
    
    constructor(url:string, repoGithub:string, image:string, title:string, description:string, technologies: string[]){
        this.url = url;
        this.repoGithub = repoGithub;
        this.image = image;
        this.title = title;
        this.description = description;
        this.technologies = technologies;
    }
    
    url:string = "";
    repoGithub = "";
    image:string = "";
    title:string = "";
    description:string = "";
    technologies: string[] = [];
}