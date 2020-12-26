var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":463,"id":32036,"methods":[{"el":94,"sc":2,"sl":80},{"el":141,"sc":2,"sl":130},{"el":262,"sc":4,"sl":157},{"el":269,"sc":2,"sl":148},{"el":304,"sc":2,"sl":275},{"el":316,"sc":2,"sl":313},{"el":323,"sc":2,"sl":321},{"el":331,"sc":2,"sl":329},{"el":346,"sc":2,"sl":341},{"el":353,"sc":2,"sl":351},{"el":360,"sc":2,"sl":358},{"el":367,"sc":2,"sl":365},{"el":374,"sc":2,"sl":372},{"el":381,"sc":2,"sl":379},{"el":388,"sc":2,"sl":386},{"el":395,"sc":2,"sl":393},{"el":402,"sc":2,"sl":400},{"el":410,"sc":2,"sl":408}],"name":"AbstractCubeCalibration","sl":38},{"el":462,"id":32163,"methods":[{"el":435,"sc":3,"sl":431},{"el":456,"sc":3,"sl":447},{"el":461,"sc":3,"sl":458}],"name":"AbstractCubeCalibration.SwaptionInfo","sl":419}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_338":{"methods":[{"sl":80},{"sl":130},{"sl":148},{"sl":157},{"sl":275},{"sl":313},{"sl":341},{"sl":379},{"sl":386},{"sl":393},{"sl":400},{"sl":408},{"sl":431},{"sl":458}],"name":"testStaticCubeCalibration","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":92},{"sl":93},{"sl":133},{"sl":136},{"sl":138},{"sl":140},{"sl":150},{"sl":161},{"sl":164},{"sl":165},{"sl":166},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":188},{"sl":189},{"sl":190},{"sl":191},{"sl":194},{"sl":195},{"sl":198},{"sl":200},{"sl":201},{"sl":204},{"sl":206},{"sl":210},{"sl":211},{"sl":212},{"sl":213},{"sl":214},{"sl":215},{"sl":216},{"sl":218},{"sl":219},{"sl":220},{"sl":221},{"sl":224},{"sl":225},{"sl":226},{"sl":228},{"sl":230},{"sl":231},{"sl":234},{"sl":237},{"sl":265},{"sl":266},{"sl":268},{"sl":281},{"sl":282},{"sl":285},{"sl":286},{"sl":287},{"sl":288},{"sl":289},{"sl":294},{"sl":295},{"sl":296},{"sl":297},{"sl":298},{"sl":303},{"sl":314},{"sl":315},{"sl":342},{"sl":343},{"sl":344},{"sl":345},{"sl":380},{"sl":387},{"sl":394},{"sl":401},{"sl":409},{"sl":432},{"sl":433},{"sl":434},{"sl":460}]},"test_596":{"methods":[{"sl":80},{"sl":130},{"sl":148},{"sl":157},{"sl":275},{"sl":313},{"sl":341},{"sl":379},{"sl":386},{"sl":393},{"sl":400},{"sl":408},{"sl":431},{"sl":458}],"name":"testCalibration","pass":true,"statements":[{"sl":82},{"sl":83},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":92},{"sl":93},{"sl":133},{"sl":136},{"sl":138},{"sl":140},{"sl":150},{"sl":161},{"sl":164},{"sl":165},{"sl":166},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":188},{"sl":189},{"sl":190},{"sl":191},{"sl":194},{"sl":195},{"sl":198},{"sl":200},{"sl":201},{"sl":204},{"sl":206},{"sl":210},{"sl":211},{"sl":212},{"sl":213},{"sl":214},{"sl":215},{"sl":216},{"sl":218},{"sl":219},{"sl":220},{"sl":221},{"sl":224},{"sl":225},{"sl":226},{"sl":228},{"sl":230},{"sl":231},{"sl":234},{"sl":237},{"sl":265},{"sl":266},{"sl":268},{"sl":281},{"sl":282},{"sl":285},{"sl":286},{"sl":287},{"sl":288},{"sl":289},{"sl":294},{"sl":295},{"sl":296},{"sl":297},{"sl":298},{"sl":303},{"sl":314},{"sl":315},{"sl":342},{"sl":343},{"sl":344},{"sl":345},{"sl":380},{"sl":387},{"sl":394},{"sl":401},{"sl":409},{"sl":432},{"sl":433},{"sl":434},{"sl":460}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [338, 596], [], [338, 596], [338, 596], [], [], [338, 596], [338, 596], [338, 596], [338, 596], [338, 596], [], [338, 596], [338, 596], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [338, 596], [], [], [338, 596], [], [], [338, 596], [], [338, 596], [], [338, 596], [], [], [], [], [], [], [], [338, 596], [], [338, 596], [], [], [], [], [], [], [338, 596], [], [], [], [338, 596], [], [], [338, 596], [338, 596], [338, 596], [], [], [338, 596], [338, 596], [338, 596], [338, 596], [338, 596], [338, 596], [338, 596], [338, 596], [], [338, 596], [], [338, 596], [338, 596], [338, 596], [338, 596], [338, 596], [338, 596], [338, 596], [], [338, 596], [338, 596], [338, 596], [338, 596], [], [], [338, 596], [338, 596], [], [], [338, 596], [], [338, 596], [338, 596], [], [], [338, 596], [], [338, 596], [], [], [], [338, 596], [338, 596], [338, 596], [338, 596], [338, 596], [338, 596], [338, 596], [], [338, 596], [338, 596], [338, 596], [338, 596], [], [], [338, 596], [338, 596], [338, 596], [], [338, 596], [], [338, 596], [338, 596], [], [], [338, 596], [], [], [338, 596], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [338, 596], [338, 596], [], [338, 596], [], [], [], [], [], [], [338, 596], [], [], [], [], [], [338, 596], [338, 596], [], [], [338, 596], [338, 596], [338, 596], [338, 596], [338, 596], [], [], [], [], [338, 596], [338, 596], [338, 596], [338, 596], [338, 596], [], [], [], [], [338, 596], [], [], [], [], [], [], [], [], [], [338, 596], [338, 596], [338, 596], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [338, 596], [338, 596], [338, 596], [338, 596], [338, 596], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [338, 596], [338, 596], [], [], [], [], [], [338, 596], [338, 596], [], [], [], [], [], [338, 596], [338, 596], [], [], [], [], [], [338, 596], [338, 596], [], [], [], [], [], [], [338, 596], [338, 596], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [338, 596], [338, 596], [338, 596], [338, 596], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [338, 596], [], [338, 596], [], [], []]