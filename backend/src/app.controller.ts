import { Controller, Get } from '@nestjs/common';
import { hostname } from 'os';

let visits = 0; // in-memory state: the bug on purpose

@Controller()
export class AppController {
  @Get('whoami')
  whoami() { return { instance: hostname() }; }

  @Get('work') // simulates CPU-heavy work
  work() {
    let x = 0;
    for (let i = 0; i < 5e7; i++) x += i;
    return { instance: hostname() };
  }

  @Get('visit')
  visit() { return { instance: hostname(), visits: ++visits }; }
}