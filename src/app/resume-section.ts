export class ResumeSection {
  name: string;
  url: string;
  enabled: boolean;

  constructor(name: string, url: string, enabled: boolean = true) {
    this.name = name;
    this.url = url;
    this.enabled = enabled;
  }
}
