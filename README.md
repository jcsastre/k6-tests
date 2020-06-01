# k6-tests

```console
 $ k6 run --vus 500 --duration 60s script.js

          /\      |‾‾|  /‾‾/  /‾/   
     /\  /  \     |  |_/  /  / /    
    /  \/    \    |      |  /  ‾‾\  
   /          \   |  |‾\  \ | (_) | 
  / __________ \  |__|  \__\ \___/ .io

  execution: local
     output: -
     script: script.js

    duration: 1m0s, iterations: -
         vus: 500,  max: 500

    done [==========================================================] 1m0s / 1m0s

    ✓ is status 200

    checks.....................: 100.00% ✓ 313   ✗ 0
    data_received..............: 5.5 MB  92 kB/s
    data_sent..................: 43 kB   720 B/s
    http_req_blocked...........: avg=43.16ms   min=151.6µs  med=38.97ms  max=91.34ms p(90)=71.65ms p(95)=83.28ms
    http_req_connecting........: avg=42.77ms   min=115.46µs med=38.76ms  max=88.03ms p(90)=71.34ms p(95)=83.05ms
    http_req_duration..........: avg=32.59s    min=13.61s   med=31.08s   max=59.71s  p(90)=47.46s  p(95)=55.39s 
    http_req_receiving.........: avg=775.39µs  min=47.92µs  med=137.36µs max=21.25ms p(90)=1.45ms  p(95)=3.69ms 
    http_req_sending...........: avg=4.34ms    min=19.21µs  med=3.11ms   max=13.59ms p(90)=9.84ms  p(95)=11.23ms
    http_req_tls_handshaking...: avg=0s        min=0s       med=0s       max=0s      p(90)=0s      p(95)=0s     
    http_req_waiting...........: avg=32.58s    min=13.61s   med=31.07s   max=59.7s   p(90)=47.45s  p(95)=55.39s 
    http_reqs..................: 313     5.216642/s
    iteration_duration.........: avg=32.76s    min=14.65s   med=32.02s   max=59.8s   p(90)=48.47s  p(95)=48.97s 
    iterations.................: 303     5.049976/s
    uptos_count................: avg=82.645367 min=40       med=84       max=122     p(90)=98      p(95)=100    
    vus........................: 500     min=500 max=500
    vus_max....................: 500     min=500 max=500

```
