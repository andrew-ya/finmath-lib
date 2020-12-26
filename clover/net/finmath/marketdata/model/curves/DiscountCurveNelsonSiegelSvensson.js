var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":178,"id":4588,"methods":[{"el":55,"sc":2,"sl":50},{"el":61,"sc":2,"sl":57},{"el":91,"sc":2,"sl":69},{"el":96,"sc":2,"sl":93},{"el":112,"sc":2,"sl":105},{"el":129,"sc":2,"sl":120},{"el":137,"sc":4,"sl":134},{"el":142,"sc":4,"sl":139},{"el":144,"sc":2,"sl":131},{"el":149,"sc":2,"sl":146},{"el":156,"sc":2,"sl":151},{"el":160,"sc":2,"sl":158},{"el":165,"sc":2,"sl":162},{"el":170,"sc":2,"sl":167},{"el":177,"sc":2,"sl":172}],"name":"DiscountCurveNelsonSiegelSvensson","sl":35}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_10":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-2,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_101":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-4,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_104":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-100,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_123":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-1,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_144":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-40,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_160":{"methods":[{"sl":50},{"sl":69},{"sl":158}],"name":"test","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":54},{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_167":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-80,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_171":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-8,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_175":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-200,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_221":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-1,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_229":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-40,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_258":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-100,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_264":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-2,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_278":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-100,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_281":{"methods":[{"sl":50},{"sl":69},{"sl":146},{"sl":167}],"name":"testCalibration","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":54},{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":148},{"sl":169}]},"test_3":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-20,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_300":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-20,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_350":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-8,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_353":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-40,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_386":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-1,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_405":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-2,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_465":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-80,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_493":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-4,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_523":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-20,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_542":{"methods":[{"sl":50},{"sl":69},{"sl":146},{"sl":158},{"sl":172}],"name":"testVolatilityCalibration[VOLATILITYLOGNORMAL]","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":54},{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":148},{"sl":159},{"sl":174}]},"test_568":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-10,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_575":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-200,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_580":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-4,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_589":{"methods":[{"sl":69},{"sl":158}],"name":"testSinglePeriods[NSS-200,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_611":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-8,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_622":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-10,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_629":{"methods":[{"sl":69},{"sl":158}],"name":"testUnalignedPeriods[NSS-80,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]},"test_636":{"methods":[{"sl":50},{"sl":57},{"sl":69},{"sl":146},{"sl":158},{"sl":172}],"name":"testVolatilityCalibration[VOLATILITYNORMAL]","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":54},{"sl":60},{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":148},{"sl":159},{"sl":174}]},"test_78":{"methods":[{"sl":50},{"sl":57},{"sl":69}],"name":"test","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":54},{"sl":60},{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90}]},"test_98":{"methods":[{"sl":69},{"sl":158}],"name":"testMultiPeriodFloater[NSS-10,000]","pass":true,"statements":[{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":85},{"sl":86},{"sl":88},{"sl":90},{"sl":159}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [281, 542, 636, 160, 78], [281, 542, 636, 160, 78], [281, 542, 636, 160, 78], [], [281, 542, 636, 160, 78], [], [], [636, 78], [], [], [636, 78], [], [], [], [], [], [], [], [], [523, 493, 465, 144, 300, 386, 171, 575, 353, 221, 101, 580, 229, 98, 278, 281, 589, 350, 629, 611, 3, 10, 104, 175, 542, 636, 160, 264, 622, 405, 123, 258, 167, 78, 568], [], [], [], [523, 493, 465, 144, 300, 386, 171, 575, 353, 221, 101, 580, 229, 98, 278, 281, 589, 350, 629, 611, 3, 10, 104, 175, 542, 636, 160, 264, 622, 405, 123, 258, 167, 78, 568], [], [523, 493, 465, 144, 300, 386, 171, 575, 353, 221, 101, 580, 229, 98, 278, 281, 589, 350, 629, 611, 3, 10, 104, 175, 542, 636, 160, 264, 622, 405, 123, 258, 167, 78, 568], [523, 493, 465, 144, 300, 386, 171, 575, 353, 221, 101, 580, 229, 98, 278, 281, 589, 350, 629, 611, 3, 10, 104, 175, 542, 636, 160, 264, 622, 405, 123, 258, 167, 78, 568], [523, 493, 465, 144, 300, 386, 171, 575, 353, 221, 101, 580, 229, 98, 278, 281, 589, 350, 629, 611, 3, 10, 104, 175, 542, 636, 160, 264, 622, 405, 123, 258, 167, 78, 568], [523, 493, 465, 144, 300, 386, 171, 575, 353, 221, 101, 580, 229, 98, 278, 281, 589, 350, 629, 611, 3, 10, 104, 175, 542, 636, 160, 264, 622, 405, 123, 258, 167, 78, 568], [523, 493, 465, 144, 300, 386, 171, 575, 353, 221, 101, 580, 229, 98, 278, 281, 589, 350, 629, 611, 3, 10, 104, 175, 542, 636, 160, 264, 622, 405, 123, 258, 167, 78, 568], [523, 493, 465, 144, 300, 386, 171, 575, 353, 221, 101, 580, 229, 98, 278, 281, 589, 350, 629, 611, 3, 10, 104, 175, 542, 636, 160, 264, 622, 405, 123, 258, 167, 78, 568], [], [523, 493, 465, 144, 300, 386, 171, 575, 353, 221, 101, 580, 229, 98, 278, 281, 589, 350, 629, 611, 3, 10, 104, 175, 542, 636, 160, 264, 622, 405, 123, 258, 167, 78, 568], [523, 493, 465, 144, 300, 386, 171, 575, 353, 221, 101, 580, 229, 98, 278, 281, 589, 350, 629, 611, 3, 10, 104, 175, 542, 636, 160, 264, 622, 405, 123, 258, 167, 78, 568], [], [523, 493, 465, 144, 300, 386, 171, 575, 353, 221, 101, 580, 229, 98, 278, 281, 589, 350, 629, 611, 3, 10, 104, 175, 542, 636, 160, 264, 622, 405, 123, 258, 167, 78, 568], [523, 493, 465, 144, 300, 386, 171, 575, 353, 221, 101, 580, 229, 98, 278, 281, 589, 350, 629, 611, 3, 10, 104, 175, 542, 636, 160, 264, 622, 405, 123, 258, 167, 78, 568], [], [523, 493, 465, 144, 300, 386, 171, 575, 353, 221, 101, 580, 229, 98, 278, 281, 589, 350, 629, 611, 3, 10, 104, 175, 542, 636, 160, 264, 622, 405, 123, 258, 167, 78, 568], [], [523, 493, 465, 144, 300, 386, 171, 575, 353, 221, 101, 580, 229, 98, 278, 281, 589, 350, 629, 611, 3, 10, 104, 175, 542, 636, 160, 264, 622, 405, 123, 258, 167, 78, 568], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [281, 542, 636], [], [281, 542, 636], [], [], [], [], [], [], [], [], [], [523, 493, 465, 144, 300, 386, 171, 575, 353, 221, 101, 580, 229, 98, 278, 589, 350, 629, 611, 3, 10, 104, 175, 542, 636, 160, 264, 622, 405, 123, 258, 167, 568], [523, 493, 465, 144, 300, 386, 171, 575, 353, 221, 101, 580, 229, 98, 278, 589, 350, 629, 611, 3, 10, 104, 175, 542, 636, 160, 264, 622, 405, 123, 258, 167, 568], [], [], [], [], [], [], [], [281], [], [281], [], [], [542, 636], [], [542, 636], [], [], [], []]