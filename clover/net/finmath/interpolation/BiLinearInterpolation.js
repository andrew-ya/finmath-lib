var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":78,"id":2554,"methods":[{"el":38,"sc":2,"sl":33},{"el":43,"sc":2,"sl":40},{"el":77,"sc":2,"sl":45}],"name":"BiLinearInterpolation","sl":27}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_137":{"methods":[{"sl":33},{"sl":40},{"sl":45}],"name":"testCalibration","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":46},{"sl":47},{"sl":50},{"sl":51},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":60},{"sl":61},{"sl":63},{"sl":67},{"sl":68},{"sl":70},{"sl":76}]},"test_141":{"methods":[{"sl":33},{"sl":40},{"sl":45}],"name":"testSABRCubeCalibration","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":46},{"sl":47},{"sl":50},{"sl":51},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":60},{"sl":61},{"sl":63},{"sl":67},{"sl":68},{"sl":70},{"sl":76}]},"test_175":{"methods":[{"sl":33},{"sl":40},{"sl":45}],"name":"b_testBasicPiterbarg","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":46},{"sl":47},{"sl":50},{"sl":51},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":60},{"sl":63},{"sl":67},{"sl":68},{"sl":70},{"sl":76}]},"test_21":{"methods":[{"sl":33},{"sl":40},{"sl":45}],"name":"c_testMultiPiterbarg","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":46},{"sl":47},{"sl":50},{"sl":51},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":60},{"sl":63},{"sl":67},{"sl":68},{"sl":70},{"sl":76}]},"test_34":{"methods":[{"sl":33},{"sl":40},{"sl":45}],"name":"testMulti","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":46},{"sl":47},{"sl":50},{"sl":51},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":60},{"sl":63},{"sl":67},{"sl":68},{"sl":70},{"sl":76}]},"test_478":{"methods":[{"sl":33},{"sl":40},{"sl":45}],"name":"testMultiPiterbarg","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":46},{"sl":47},{"sl":50},{"sl":51},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":60},{"sl":63},{"sl":67},{"sl":68},{"sl":70},{"sl":76}]},"test_498":{"methods":[{"sl":33},{"sl":40},{"sl":45}],"name":"testBasic","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":46},{"sl":47},{"sl":50},{"sl":51},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":60},{"sl":63},{"sl":67},{"sl":68},{"sl":70},{"sl":76}]},"test_539":{"methods":[{"sl":33},{"sl":40},{"sl":45}],"name":"testBasicPiterbarg","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":46},{"sl":47},{"sl":50},{"sl":51},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":60},{"sl":63},{"sl":67},{"sl":68},{"sl":70},{"sl":76}]},"test_552":{"methods":[{"sl":33},{"sl":40},{"sl":45}],"name":"c_testAccessPerformance","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":42},{"sl":46},{"sl":47},{"sl":48},{"sl":50},{"sl":51},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":60},{"sl":61},{"sl":63},{"sl":64},{"sl":67},{"sl":68},{"sl":70},{"sl":76}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [21, 552, 539, 175, 498, 34, 141, 137, 478], [21, 552, 539, 175, 498, 34, 141, 137, 478], [21, 552, 539, 175, 498, 34, 141, 137, 478], [21, 552, 539, 175, 498, 34, 141, 137, 478], [21, 552, 539, 175, 498, 34, 141, 137, 478], [], [], [21, 552, 539, 175, 498, 34, 141, 137, 478], [], [21, 552, 539, 175, 498, 34, 141, 137, 478], [], [], [21, 552, 539, 175, 498, 34, 141, 137, 478], [21, 552, 539, 175, 498, 34, 141, 137, 478], [21, 552, 539, 175, 498, 34, 141, 137, 478], [552], [], [21, 552, 539, 175, 498, 34, 141, 137, 478], [21, 552, 539, 175, 498, 34, 141, 137, 478], [], [21, 552, 539, 175, 498, 34, 141, 137, 478], [21, 552, 539, 175, 498, 34, 141, 137, 478], [21, 552, 539, 175, 498, 34, 141, 137, 478], [], [21, 552, 539, 175, 498, 34, 141, 137, 478], [21, 552, 539, 175, 498, 34, 141, 137, 478], [], [21, 552, 539, 175, 498, 34, 141, 137, 478], [552, 141, 137], [], [21, 552, 539, 175, 498, 34, 141, 137, 478], [552], [], [], [21, 552, 539, 175, 498, 34, 141, 137, 478], [21, 552, 539, 175, 498, 34, 141, 137, 478], [], [21, 552, 539, 175, 498, 34, 141, 137, 478], [], [], [], [], [], [21, 552, 539, 175, 498, 34, 141, 137, 478], [], []]