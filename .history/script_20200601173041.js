import http from 'k6/http';
import { sleep } from 'k6';
import { Trend } from 'k6/metrics';

let uptos_received = new Trend('uptos_received');

export default function() {
  let res = http.get('http://localhost:8080/uptos?lat=41.388729386919316&lng=2.168776574948045&radiusInKm=1');
  sleep(1);
  uptos_received.add(JSON.parse(res.body).count);
}
