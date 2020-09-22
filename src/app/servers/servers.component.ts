import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Dev Server', 'QA Server'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(): void {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(ev: Event): void {
    this.serverName = (ev.target as HTMLInputElement).value;
  }

}
