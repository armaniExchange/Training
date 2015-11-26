import {streamV1, streamV2, streamLatestVersion} from './mod4';
improt * as myMod4 from './mod4';

streamV1();
streamLatestVersion();
streamV2();
console.log(typeof streamV2);
console.log('-----------');


myMod4.streamV1();
myMod4.streamLatestVersion();
myMod4.streamV2();
console.log(typeof myMod4.streamV2);