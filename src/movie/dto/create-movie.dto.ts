import { IsNotEmpty } from "class-validator";

export class CreateMovieDto {
    @IsNotEmpty()
    title: string;
    name: string;
    heading: string
}
