import http from 'k6/http';
import { sleep } from 'k6';

export default function() {
  http.get('http://localhost:8080/uptos?lat=41.388729386919316&lng=2.168776574948045&radiusInKm=5');
  sleep(1);
}
