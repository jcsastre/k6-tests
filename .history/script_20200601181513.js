import http from 'k6/http';
import { sleep } from 'k6';
import { Trend } from 'k6/metrics';
import { check } from "k6";

let uptosCount = new Trend('uptos_count');

export default function() {
  let lat = 41.388729386919316 + Math.random() * (max - min) + min
  let res = http.get('http://localhost:8080/uptos?lat=41.388729386919316&lng=2.168776574948045&radiusInKm=1');
  check(res, {
    "is status 200": (r) => r.status === 200
  });
  uptosCount.add(JSON.parse(res.body).count);
  sleep(1);
}
