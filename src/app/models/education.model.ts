import { Titleable } from './titleable.model';
import { Course } from './course.model';

export class Education extends Titleable {
    courses: Course[];
}
