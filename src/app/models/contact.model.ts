import { Titleable } from './titleable.model';

export class Contact extends Titleable {
    public address: string;
    public phone: string;
    public email: string;
    public skype: string;
    public maps: { latitude: number, longitude: number, zoom: number };
}
