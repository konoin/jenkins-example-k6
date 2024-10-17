import http from 'k6/http';
import { sleep } from 'k6';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js';
import { Counter, Gauge, Trend, Rate } from 'k6/metrics';

// let successfulLogins = new Counter('successful_logins');
// let responseTime = new Trend('response_time');
// let memoryUsage = new Gauge('memory_usage');
// let errorRate = new Rate('error_rate');

export let options = {
  vus: 5,
  duration: '30s',
  cloud: {
    projectID: 3719611,
    name: 'Learning grafana cloud and K6'
  }
};

export default function () {
  let userId = randomIntBetween(1, 100);
  let res = http.get(`https://jsonplaceholder.typicode.com/posts/${userId}`);

  // if (res.status === 200) {
  //   successfulLogins.add(1)
  // } else {
  //   errorRate.add(1)
  // }

  // responseTime.add(res.timings.duration);
  // memoryUsage.add(__VU);

  console.log(`User ID: ${userId} | Status: ${res.status}`);

  sleep(randomIntBetween(1, 3));
}