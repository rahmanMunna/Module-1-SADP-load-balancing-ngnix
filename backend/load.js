import http from 'k6/http';
import { check } from 'k6';

export const options = { vus: 50, duration: '30s' };

export default function () {
  const res = http.get('http://127.0.0.1:9090/work');
  const ok = check(res, { 'status is 200': (r) => r.status === 200 });
  if (!ok) console.log(`status=${res.status} body=${String(res.body).slice(0, 80)}`);
}