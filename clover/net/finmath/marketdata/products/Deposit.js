var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":132,"id":6400,"methods":[{"el":48,"sc":2,"sl":38},{"el":78,"sc":2,"sl":50},{"el":104,"sc":2,"sl":86},{"el":108,"sc":2,"sl":106},{"el":112,"sc":2,"sl":110},{"el":116,"sc":2,"sl":114},{"el":121,"sc":2,"sl":118},{"el":126,"sc":2,"sl":123},{"el":131,"sc":2,"sl":128}],"name":"Deposit","sl":27}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1114":{"methods":[{"sl":38},{"sl":50},{"sl":86}],"name":"testRateValueConsistency","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":42},{"sl":45},{"sl":52},{"sl":56},{"sl":57},{"sl":61},{"sl":63},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":76},{"sl":87},{"sl":91},{"sl":92},{"sl":96},{"sl":97},{"sl":98},{"sl":100},{"sl":101},{"sl":103}]},"test_1141":{"methods":[{"sl":38},{"sl":50}],"name":"testMultiCurveCalibration","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":42},{"sl":45},{"sl":52},{"sl":56},{"sl":57},{"sl":61},{"sl":63},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":76}]},"test_424":{"methods":[{"sl":38},{"sl":50}],"name":"testDepositValue","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":42},{"sl":45},{"sl":52},{"sl":56},{"sl":57},{"sl":61},{"sl":63},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":76}]},"test_448":{"methods":[{"sl":38},{"sl":50},{"sl":86}],"name":"testEvaluationTime","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":42},{"sl":45},{"sl":52},{"sl":56},{"sl":57},{"sl":61},{"sl":63},{"sl":64},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":73},{"sl":76},{"sl":87},{"sl":91},{"sl":92},{"sl":96},{"sl":97},{"sl":98},{"sl":100},{"sl":101},{"sl":103}]},"test_530":{"methods":[{"sl":38},{"sl":50}],"name":"testDepositValue","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":42},{"sl":45},{"sl":52},{"sl":56},{"sl":57},{"sl":61},{"sl":63},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":76}]},"test_646":{"methods":[{"sl":38},{"sl":50},{"sl":86}],"name":"testEvaluationTime","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":42},{"sl":45},{"sl":52},{"sl":56},{"sl":57},{"sl":61},{"sl":63},{"sl":64},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":73},{"sl":76},{"sl":87},{"sl":91},{"sl":92},{"sl":96},{"sl":97},{"sl":98},{"sl":100},{"sl":101},{"sl":103}]},"test_7":{"methods":[{"sl":38},{"sl":50}],"name":"testMultiCurveCalibration","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":42},{"sl":45},{"sl":52},{"sl":56},{"sl":57},{"sl":61},{"sl":63},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":76}]},"test_71":{"methods":[{"sl":38},{"sl":50},{"sl":86}],"name":"testRateValueConsistency","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":42},{"sl":45},{"sl":52},{"sl":56},{"sl":57},{"sl":61},{"sl":63},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":76},{"sl":87},{"sl":91},{"sl":92},{"sl":96},{"sl":97},{"sl":98},{"sl":100},{"sl":101},{"sl":103}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [646, 448, 7, 424, 1141, 71, 530, 1114], [646, 448, 7, 424, 1141, 71, 530, 1114], [646, 448, 7, 424, 1141, 71, 530, 1114], [646, 448, 7, 424, 1141, 71, 530, 1114], [646, 448, 7, 424, 1141, 71, 530, 1114], [], [], [646, 448, 7, 424, 1141, 71, 530, 1114], [], [], [], [], [646, 448, 7, 424, 1141, 71, 530, 1114], [], [646, 448, 7, 424, 1141, 71, 530, 1114], [], [], [], [646, 448, 7, 424, 1141, 71, 530, 1114], [646, 448, 7, 424, 1141, 71, 530, 1114], [], [], [], [646, 448, 7, 424, 1141, 71, 530, 1114], [], [646, 448, 7, 424, 1141, 71, 530, 1114], [646, 448], [], [], [646, 448, 7, 424, 1141, 71, 530, 1114], [646, 448, 7, 424, 1141, 71, 530, 1114], [646, 448, 7, 424, 1141, 71, 530, 1114], [646, 448, 7, 424, 1141, 71, 530, 1114], [], [646, 448, 7, 424, 1141, 71, 530, 1114], [646, 448], [], [], [646, 448, 7, 424, 1141, 71, 530, 1114], [], [], [], [], [], [], [], [], [], [646, 448, 71, 1114], [646, 448, 71, 1114], [], [], [], [646, 448, 71, 1114], [646, 448, 71, 1114], [], [], [], [646, 448, 71, 1114], [646, 448, 71, 1114], [646, 448, 71, 1114], [], [646, 448, 71, 1114], [646, 448, 71, 1114], [], [646, 448, 71, 1114], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]