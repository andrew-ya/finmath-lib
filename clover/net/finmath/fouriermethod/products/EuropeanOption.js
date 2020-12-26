var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":73,"id":1099,"methods":[{"el":37,"sc":2,"sl":32},{"el":46,"sc":2,"sl":44},{"el":56,"sc":2,"sl":48},{"el":61,"sc":2,"sl":58},{"el":66,"sc":2,"sl":63},{"el":71,"sc":2,"sl":68}],"name":"EuropeanOption","sl":26}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_102":{"methods":[{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test[net.finmath.fouriermethod.products.EuropeanOption@dd05255]","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_184":{"methods":[{"sl":32},{"sl":44},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":45},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_208":{"methods":[{"sl":32},{"sl":44},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test[xi=0}]","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":45},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_22":{"methods":[{"sl":32},{"sl":44},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":45},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_249":{"methods":[{"sl":32},{"sl":44},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test[xi=0.5}]","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":45},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_261":{"methods":[{"sl":32},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_293":{"methods":[{"sl":32},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_369":{"methods":[{"sl":32},{"sl":44},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":45},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_544":{"methods":[{"sl":32},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_560":{"methods":[{"sl":32},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]},"test_68":{"methods":[{"sl":32},{"sl":44},{"sl":48},{"sl":58},{"sl":63},{"sl":68}],"name":"test","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":45},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":60},{"sl":65},{"sl":70}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [184, 293, 22, 261, 544, 208, 560, 68, 369, 249], [184, 293, 22, 261, 544, 208, 560, 68, 369, 249], [184, 293, 22, 261, 544, 208, 560, 68, 369, 249], [184, 293, 22, 261, 544, 208, 560, 68, 369, 249], [184, 293, 22, 261, 544, 208, 560, 68, 369, 249], [], [], [], [], [], [], [], [184, 22, 208, 68, 369, 249], [184, 22, 208, 68, 369, 249], [], [], [184, 293, 22, 544, 208, 560, 68, 369, 102, 249], [], [184, 293, 22, 261, 544, 208, 560, 68, 369, 102, 249], [184, 293, 22, 261, 544, 208, 560, 68, 369, 102, 249], [184, 293, 22, 261, 544, 208, 560, 68, 369, 102, 249], [184, 293, 22, 261, 544, 208, 560, 68, 369, 102, 249], [], [184, 293, 22, 261, 544, 208, 560, 68, 369, 102, 249], [], [], [184, 293, 22, 261, 544, 208, 560, 68, 369, 102, 249], [], [184, 293, 22, 261, 544, 208, 560, 68, 369, 102, 249], [], [], [184, 293, 22, 261, 544, 208, 560, 68, 369, 102, 249], [], [184, 293, 22, 261, 544, 208, 560, 68, 369, 102, 249], [], [], [184, 293, 22, 261, 544, 208, 560, 68, 369, 102, 249], [], [184, 293, 22, 261, 544, 208, 560, 68, 369, 102, 249], [], [], []]