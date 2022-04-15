import { Stack } from "../add-project/stacks.model";

export interface Project {
    id?:number,
    owner: string,
    name: string,
    track: Stack,
    description: string,
    github_link: string,
    technologies: string,
    image: string
}