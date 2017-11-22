import { Titleable } from './titleable.model';
import { Interest } from './interest.model';

export class Interests extends Titleable {
    description: string;
    interests: Interest[];
}
