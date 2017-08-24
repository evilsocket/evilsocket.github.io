/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2014/02/01/keservicedescriptortable-patching-aka-how-to-hook-win32-api-patching-the-kernel/index.html","efe830f458c205d465fd5a454305c955"],["/2014/02/02/process-introspection-for-fun-and-profit/index.html","24ba3f01108cb2409f328a0169ff5894"],["/2014/02/05/termination-and-injection-self-defense-on-windows/index.html","67ba4c181f5fe1180eb2a876d5ca2bdb"],["/2014/02/11/on-windows-syscall-mechanism-and-syscall-numbers-extraction-methods/index.html","6f8866f78dd9c8b473f7c78ee2401540"],["/2014/02/21/libpe-a-fast-pe32pe32-parsing-library/index.html","e8b69832bb769465ecf2a1f42292e55d"],["/2014/03/11/programmatically-identifying-and-isolating-functions-inside-executables-like-ida-does/index.html","db697ed4e6be12ad0e9517591b4dd9b0"],["/2014/03/25/about-redistributing-open-source-apps-dsploit/index.html","ddb6549c230cabd879c9091577b79c19"],["/2014/04/21/why-reinventing-the-wheel-isnt-always-wrong/index.html","3797120dac59dd596de3beeafe1c22b0"],["/2014/07/15/how-telcos-are-bullying-researchers-an-italian-story/index.html","63017948240ed924c2bd6a5810d97579"],["/2014/07/17/back-from-the-grave-elf32-universal-command-injector/index.html","2f5dc7d04bbee28468f01d1d0d00cdf4"],["/2014/09/22/back-from-the-grave-vmware-host-clipboard-grabber/index.html","cb7932a0717b67136f1180c14216fc1f"],["/2014/11/03/dsploit-merges-with-zimperium-zanti2/index.html","d86f626cd38b11c09f110c61bbd1cf7d"],["/2015/01/16/how-to-install-metasploit-on-os-x-mavericks-and-yosemite-an-updated-guide/index.html","106eae0a0d3362999f16bd385ec1a182"],["/2015/01/29/nike-fuelband-se-ble-protocol-reversed/index.html","fe2bfbfeadacd518953889a39416ffd7"],["/2015/02/01/huawei-usb-modems-authentication-bypass/index.html","f9fdce9ad7c0ad48a360d5e19d33a536"],["/2015/02/11/hackers-phishing-leakers-a-new-bitcoin-phishing-social-technique/index.html","2c153a5601c1b70be5ec004f3b4b5292"],["/2015/02/12/rubertooth-a-complete-ruby-porting-of-the-ubertooth-libraries-and-utilities/index.html","a0110df10982843b99b0cc859ddf8cfe"],["/2015/02/20/superfish-adware-found-inside-x-notifier-extension-code/index.html","f9de8617e72bb887d26094bf7240b7b2"],["/2015/04/30/fuzzing-with-afl-fuzz-a-practical-example-afl-vs-binutils/index.html","353cc50071b201f8f14552903bd3e5da"],["/2015/05/01/dynamically-inject-a-shared-library-into-a-running-process-on-androidarm/index.html","b1dac76e5102aa906edd9b75a6a659db"],["/2015/05/02/using-inline-assembly-and-naked-functions-to-fool-disassemblers/index.html","7200c0feff4be0e3799abc79d99fdc1d"],["/2015/05/04/android-native-api-hooking-with-library-injecto/index.html","4fb94d64e0a88a65089b54a88140e1c1"],["/2015/05/18/introducing-fido-a-minimalistic-cc-project-generator-supporting-templates/index.html","87cb92a074fae3267e5c774b291a5eb9"],["/2015/06/15/how-to-root-the-lg-watch-urbane-b285/index.html","48aaf74f877a6293a1153f7b7990348d"],["/2015/07/25/bettercap-a-complete-modular-portable-and-easily-extensible-mitm-framework/index.html","4d55b970c4bfc7933cf73d8434e8c6a6"],["/2015/07/27/how-to-use-old-gsm-protocolsencodings-know-if-a-user-is-online-on-the-gsm-network-aka-pingsms-2-0/index.html","666b90302a30e0732c45f1586dd27a63"],["/2015/10/26/karma-come-lopen-source-ha-cambiato-la-mia-vita/index.html","3df9178de466466ee8e6d5b987863323"],["/2015/10/27/karma-how-open-source-changed-my-life/index.html","3d2607b6929f8d9858fd9195d88aad14"],["/2015/12/01/past-present-and-future-of-bettercap/index.html","cdc0446a95a875304319719eb3a7c30f"],["/2016/01/10/bettercap-and-the-first-real-icmp-redirect-attack/index.html","0b34f1eecffc4438916e86be989b4a76"],["/2016/01/18/autopwn-every-android-device-on-your-network-using-bettercap-the-and-addjavascriptinterface-vulnerability/index.html","4801ed2cdaaa63d29d9a3ac97a4a47c0"],["/2016/01/28/why-you-shouldnt-trust-cloudflares-flexible-ssl-and-how-to-bypass-it-with-bettercap/index.html","2214056febcc7285851ba6664a1de1e2"],["/2016/01/30/osx-mass-pwning-using-bettercap-and-the-sparkle-updater-vulnerability/index.html","ea50e4ab4681c0e2096539022445865a"],["/2016/03/31/how-to-build-your-own-rogue-gsm-bts-for-fun-and-profit/index.html","748e4cfffda81f4f83cec0f50e759e25"],["/2016/04/18/how-i-defeated-an-obfuscated-and-anti-tamper-apk-with-some-python-and-a-home-made-smali-emulator/index.html","c75a2294cf2d39534680f6978e921236"],["/2016/05/03/is-this-a-declaration-of-cyber-war/index.html","b9dcd2db8663ac5feb4aed3be931f9c5"],["/2016/05/08/Hacking-Yourself-out-of-the-Banking-System-and-Live-only-on-BitCoins/index.html","0e60bfdb934177762cef0dbfc1209e40"],["/2016/05/30/Hacking-Yourself-out-of-the-Banking-System-and-Live-only-on-BitCoins-EPISODE-2/index.html","005fcf4fdb14914cbc07a2a0f4dc7ab7"],["/2016/06/19/presenting-openbank-a-safe-and-easy-to-use-btc-tracker/index.html","961494cd50a391b1a0f510b00b714527"],["/2016/07/27/How-The-United-Arab-Emirates-Intelligence-Tried-to-Hire-me-to-Spy-on-its-People/index.html","bae811982f06ca96e5a741204c423806"],["/2016/08/17/Samsung-Galaxy-Apps-MITM-Vulnerabilities/index.html","1c5f23de2b33c1ed87ed2f8221153ab6"],["/2016/08/24/RCE-against-every-open-source-BTS/index.html","ff8e52fa7e378f0278c89b3475167366"],["/2016/09/15/WiFi-Pineapple-NANO-OS-X-and-BetterCap-setup/index.html","eb8ae2fa7b6d78ae478536e93ac157af"],["/2016/10/02/Un-po-di-consigli-per-aspiranti-professionisti-del-settore-della-sicurezza-informatica/index.html","5a98dacc5e95cfdf7edc781a88d2fd2d"],["/2016/10/09/IoCOFFEE-Reversing-the-Smarter-Coffee-IoT-machine-protocol-to-make-coffee-using-terminal/index.html","61d46578601aaed22bc0b6cfd1800f7c"],["/2017/01/14/Thoughts-on-WhatsApp-E2E-Encryption-AKA-Security-is-real-only-if-it-s-the-default/index.html","e7dfc4f2f1b73afdafc4e67214e1c61e"],["/2017/04/27/Android-Applications-Reversing-101/index.html","13a5e28ce49102728296f6157f37ae2b"],["/2017/05/30/Terramaster-NAS-Unauthenticated-RCE-as-root/index.html","08eed6ebc0f016d5b97664eb7994e87e"],["/2017/06/30/BetterCap-1-6-1-TLS-Server-Name-Indication-and-Why-We-Need-to-Encrypt-It/index.html","42bec686a568705bd73769f46fb4869f"],["/2017/08/15/gpd-pocket-7-impressions-gnulinux-installation-and-offensive-setup/index.html","f46d40c4fe993cb5ead2612189d75b43"],["/archives/2014/02/index.html","379e38bc639a1c36b0488002a73ebf84"],["/archives/2014/03/index.html","85e0fe1e7ca17290fb819854b1320c36"],["/archives/2014/04/index.html","80f2a26b310fa0a283c487549bd0db32"],["/archives/2014/07/index.html","ab2aaa9be93b34c6d69bd168a50e1655"],["/archives/2014/09/index.html","d7b4a0dc0007251fe1d21a7b85c1ce38"],["/archives/2014/11/index.html","d6be7f655429493816298930d6222965"],["/archives/2014/index.html","1f7a52b2b6f85616ac9b3ec9e07a8f89"],["/archives/2014/page/2/index.html","a944ca7a946128ee01d4e1474f2fc9a9"],["/archives/2015/01/index.html","1cf67fbae7738db1388866037be3d472"],["/archives/2015/02/index.html","c59212444127dab640cade80cd217bae"],["/archives/2015/04/index.html","27b4a7090eebfc953400fbf9200a09c7"],["/archives/2015/05/index.html","0cd8430ddf481f5c4b7148ff785316eb"],["/archives/2015/06/index.html","077beb70ac03982625f21b09c8003ae8"],["/archives/2015/07/index.html","240a9627a432a00ddd5ac8d306273640"],["/archives/2015/10/index.html","b2c57438abe7b7d71fb752ce9d64c927"],["/archives/2015/12/index.html","71839e63d87c1554f12f7144315fed1c"],["/archives/2015/index.html","d96384ba587c31810a96cf6f5dc9a0c6"],["/archives/2015/page/2/index.html","bbbf0a57a67fd8120b7039c68976d5d1"],["/archives/2016/01/index.html","f1c26f4f2cf4c85cd11d76692ccfc312"],["/archives/2016/03/index.html","8ef711476bdf0318fd5a789fcdac53c0"],["/archives/2016/04/index.html","e53018785fd8b59cc00d4452d677e9fe"],["/archives/2016/05/index.html","016e7926a46cf2c30882e4564a69cdfa"],["/archives/2016/06/index.html","a9e045626b82ea6465550ba1ef5b6f8e"],["/archives/2016/07/index.html","4c6291820713bceadbc25577662d169a"],["/archives/2016/08/index.html","42e1473f566f21f4b5cd3a5955a7e965"],["/archives/2016/09/index.html","39eff65032195711880e47381fbd98be"],["/archives/2016/10/index.html","9131399d2476b1975cad82564126125c"],["/archives/2016/index.html","dbfb30f443162d0b83653f4684e063ee"],["/archives/2016/page/2/index.html","0e2106231f38c69864ea81456717f6bf"],["/archives/2017/01/index.html","9e815d5916af8eaf92119ea3235231b0"],["/archives/2017/04/index.html","88ee3db030ea34959a7670c86a6edb25"],["/archives/2017/05/index.html","ba8a310bc75c8de6e7cba6dd2f8d32cd"],["/archives/2017/06/index.html","0d1ccf418331e4b5893582b6919c7c66"],["/archives/2017/08/index.html","c404d6f099b7b86f37a2b803b4e70eaf"],["/archives/2017/index.html","0963bcd601be49cb2f597fa38fc56c3c"],["/archives/index.html","7d6448cf007709a814938bd567b8c17d"],["/archives/page/2/index.html","ed337db42d6e0205bac3a1d846f2a6ea"],["/archives/page/3/index.html","afedcd8757a8c0e8d578ae4d61e7b0b1"],["/archives/page/4/index.html","81df2bec61ee8b1c66aed6e577f7f7f4"],["/archives/page/5/index.html","ad07159df646f8ed6223eed9dd9411d7"],["/blog/index.html","88e41424ec7e06cec1ba4d573406dbdc"],["/blog/page/2/index.html","e9f10745ee0bc480e8d1d746b3851296"],["/blog/page/3/index.html","f16b8389fb337556f82d5673e5a0fe6d"],["/blog/page/4/index.html","ad398c76ff5eaa4c015158c515fb5f04"],["/blog/page/5/index.html","a5c1407988cb2746f25edcd04851fb17"],["/books.html","e5a19bd80017e372dc929f9dfe89ff4e"],["/css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["/css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["/css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["/css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["/css/images/banner.jpg","b3afb546511411b6c8765cf017f0d4a3"],["/css/style.css","81a3e524ddd6cb6e6b7f2cfe716254fd"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["/fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["/fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["/fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["/fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["/images/2014/Feb/259477_hi_tech_rabochij_stol_internet_oboi_super_1920x1080__www_GdeFon_ru_-1.jpg","19c9d7ebe62182001493d1e09df7295f"],["/images/2014/Feb/259477_hi_tech_rabochij_stol_internet_oboi_super_1920x1080__www_GdeFon_ru_.jpg","19c9d7ebe62182001493d1e09df7295f"],["/images/2014/Feb/Hacker_Redux_by_HashBox-1.jpg","f5bdadc4fd186443f3caac134cb92c77"],["/images/2014/Feb/Hacker_Redux_by_HashBox.jpg","f5bdadc4fd186443f3caac134cb92c77"],["/images/2014/Feb/KeServiceDescriptorTable_export.png","4c8c586934595f8f44883e5a0b1d60d9"],["/images/2014/Feb/dump.png","a049942d3ce06c22271ef1a02075b2cc"],["/images/2014/Feb/hidden_module_wow.png","3d6f61ad546d9a5138c1f46dcc832282"],["/images/2014/Feb/mainframe_by_morpheuszero_desktop_1600x1200_hd_wallpaper_694501.jpg","dcae7f332a05f65783fba6a3500d3229"],["/images/2014/Feb/me.jpg","c3f37ab8f1b9d9960b023d3dfaf15dd5"],["/images/2014/Feb/neuromancer___chiba_by_phatandy_d3ivwxv.jpg","8a58145b2d667678daf74e29e627b3be"],["/images/2014/Feb/rounded_corners-1.png","ec0ec992fe7c54c373342c9608e6ecf6"],["/images/2014/Feb/rounded_corners-2.png","2a496c997e0063229a54aa4bf64b7146"],["/images/2014/Feb/rounded_corners.png","ec0ec992fe7c54c373342c9608e6ecf6"],["/images/2014/Feb/rounded_corners_2.png","2a496c997e0063229a54aa4bf64b7146"],["/images/2014/Mar/263644_10151251066869223_1271927000_n.jpg","88a8892aedb5bd35c77d0fa82a667a6c"],["/images/2014/May/10341416_10202688874716644_8522481762679271944_n.jpg","6dcfda794acf9de17f267f2311ac6204"],["/images/2015/01/nikeband-1.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/images/2015/01/nikeband-2.jpg","fc484c2e6639d32c5e6ac50b7471d8a6"],["/images/2015/01/nikeband.jpg","fc484c2e6639d32c5e6ac50b7471d8a6"],["/images/2015/02/Huawei-Logo1422524173-1.jpg","5bf1a3027b038b438bcb8e693c4e8af7"],["/images/2015/02/Huawei-Logo1422524173.jpg","5bf1a3027b038b438bcb8e693c4e8af7"],["/images/2015/02/Schermata-2015-02-11-alle-20-46-29.png","fbeb1cb9d0914b76727861676843f0c9"],["/images/2015/02/Schermata-2015-02-11-alle-20-49-14.png","2286131db9d29148ef78b41b865e8a76"],["/images/2015/02/Schermata-2015-02-11-alle-20-51-35.png","d29329ce061d18f174d51546c303d4cf"],["/images/2015/02/Schermata-2015-02-12-alle-20-25-17.png","f96bb667751db1e3171840958079950d"],["/images/2015/02/Schermata-2015-02-20-alle-18-22-05.png","c7e8d4595811dc1b278c3813d548ce93"],["/images/2015/02/Schermata-2015-02-20-alle-18-22-34.png","8756ddac2329205c55d5dfbfa522f085"],["/images/2015/02/bc39fd77b95c22fff332e8bf38ff78b52c88da48826447d3e7d37579740f2cf7.jpg","4f7b6e18f657530b62724007c888c9c2"],["/images/2015/02/ubertooth.jpg","24873c941a37ab20f43f119ae2db2d80"],["/images/2015/04/lop-1.png","0b890caf54eee3ea7b741c1cb8670d75"],["/images/2015/04/lop.png","0b890caf54eee3ea7b741c1cb8670d75"],["/images/2015/05/116572.jpg","03c618cf4b5f5a35ccd8d5e947acef21"],["/images/2015/05/309252_10150321637414223_2120926431_n.jpg","897f3492a58dc48be434a4635e6b4fd7"],["/images/2015/05/FYG.png","504cdeaa4c94910a8c23ac17025298a5"],["/images/2015/05/download.jpg","1f54a798db23a267d2ef8f6727136a2b"],["/images/2015/05/elf.gif","27218e3d0d14bf2ffc8ec7bee4cae69b"],["/images/2015/05/fido.jpg","e5a6f6320404e4f464395df59b03e6a8"],["/images/2015/05/hopper-1.png","a7493df062e623223d1d73608931bcd3"],["/images/2015/05/hopper.png","a7493df062e623223d1d73608931bcd3"],["/images/2015/05/ida.jpg","ab83eb62bf0d7599115d11ea4aba2d9b"],["/images/2015/05/me.jpg","1e14a2a99b49ce61fb4cf2544a5d087c"],["/images/2015/05/sekSFKj1_400x400.jpg","ecc1cf74560b959fdd262ba3e73547f9"],["/images/2015/05/some.jpg","c2c6f3f47346ecd2403cdfa24d9c6940"],["/images/2015/06/LG-Watch-Urbano-9-1280x914.jpg","57f329216e3b1c5b3a4df82290544400"],["/images/2015/07/11701140_10153376221264223_471566864264972972_n-1.jpg","8a14b46b162521322d7904802bff2bc8"],["/images/2015/07/11701140_10153376221264223_471566864264972972_n.jpg","8a14b46b162521322d7904802bff2bc8"],["/images/2015/07/1O4A0617.jpg","9c426457b9ed64b98ff288f6ed3a2809"],["/images/2015/07/315993-iphone-tracking.jpg","1304d6b756fb35c1d3b27fcb485205d6"],["/images/2015/07/quantum_of_solace_james_bond_roll_parody_rick_astley_rickroll_desktop_1680x1050_wallpaper-249024-1.jpg","d69fda4306cb311cfef4e8b6420d43d5"],["/images/2015/07/quantum_of_solace_james_bond_roll_parody_rick_astley_rickroll_desktop_1680x1050_wallpaper-249024.jpg","d69fda4306cb311cfef4e8b6420d43d5"],["/images/2015/08/11886190_10153603252262053_432376360479522282_o-1.jpg","b0079e96ba5be355aaeb1c3856c5d661"],["/images/2015/08/11886190_10153603252262053_432376360479522282_o.jpg","b0079e96ba5be355aaeb1c3856c5d661"],["/images/2015/10/10418552_10152389867564223_419786986_o.jpg","d5df2712eb21fca4b40994ae9ad34dd9"],["/images/2015/10/201138_10151199203439223_1398967788_o.jpg","d7568c1da7a1d46dbeb3c7722b8e5270"],["/images/2015/10/amsterdam.jpg","d5df2712eb21fca4b40994ae9ad34dd9"],["/images/2015/10/dsploit.jpg","d7568c1da7a1d46dbeb3c7722b8e5270"],["/images/2015/12/homepage-logo.png","8527e16962d716f00170b34ca9008fdc"],["/images/2015/Jan/Schermata-2015-01-29-alle-20-53-25.png","021e1365c83e9997efba7df684885c5d"],["/images/2015/Jan/gatto_guerra.jpg","6c4097099af78bc4ba95af5a91eaeeb0"],["/images/2015/Jan/major-facepalm.jpg","2874b20f0da978901aa16d089378a88b"],["/images/2015/Jan/nikeband.jpg","fc484c2e6639d32c5e6ac50b7471d8a6"],["/images/2016/01/10686838_10152650615809223_6942842188173927627_n.jpg","1e14a2a99b49ce61fb4cf2544a5d087c"],["/images/2016/01/Meme-derp.jpg","cd157e5d182a6ed3ed6442e6515bd056"],["/images/2016/01/Schermata-2016-01-28-alle-18-08-27.png","3d49a6d3d370a29013e827a8c1abbef5"],["/images/2016/01/androidpwn-1.png","e7494030a4203b32ee4edf888178f0dd"],["/images/2016/01/avatar_ninja.png","a85820b9b1394da2b54b6cc7732ba09c"],["/images/2016/01/avatar_ninja_whitebg-1.png","7652928ad2274a610e7e06dd8b7f8fac"],["/images/2016/01/avatar_ninja_whitebg.png","7a9e6c05f96ac87be3d02dd95196ad7a"],["/images/2016/01/banner-772x250.png","e9425e9740668f1adb9085301b9b4e42"],["/images/2016/01/bettercap.png","c7fba4353fe457decc2711d9d597ffcc"],["/images/2016/01/bettercap_cloudflare.png","c1a12b4ebe750e531575e63a6add6e76"],["/images/2016/01/flexiblessl.png","887c8f4ae8c066a67cafba832143bd9c"],["/images/2016/01/hacked-1.jpg","e8d5e6c2dc0a95de4378e9ef313ea038"],["/images/2016/01/hacked.jpg","e8d5e6c2dc0a95de4378e9ef313ea038"],["/images/2016/01/hsts.png","1bee4712fe48aa09511dda9426cb0c6a"],["/images/2016/01/pagerule.png","598097317e0d6e7558251a7f1ce1dbb7"],["/images/2016/01/papel-de-parede-meme-freddie-mercury-136608662.jpg","2fead32d3acf461d5cd69f8abe7ed6ba"],["/images/2016/01/pasha.png","f4db2455939d8d6fb19ed434e5711fa2"],["/images/2016/01/photo.jpg","f0ab8f895fb84f1c90a8bb3357b3dde3"],["/images/2016/03/avatar_rounded_corners-2.png","2a496c997e0063229a54aa4bf64b7146"],["/images/2016/03/nibui-1.png","928ce99e93bbfcd1ec79dd6dde74af8d"],["/images/2016/03/nibui-2.png","7a8f663e2be9b55eb2a1fb0127092847"],["/images/2016/04/Okay-Meme-Gif-05.jpg","d37428477abf83b91881cb212b815e21"],["/images/2016/04/apktool.png","920a2a24e686e21653fce1037c712f2a"],["/images/2016/04/barcellona-1.jpg","897f3492a58dc48be434a4635e6b4fd7"],["/images/2016/04/barcellona.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/images/2016/04/challengeaccepted.jpg","32b671e0261adddb1797e556b3afada9"],["/images/2016/04/phase1.png","d16612829243a5600a0afa0bba608ff8"],["/images/2016/04/pwned.png","49a00a2a9b401e285d7a79dd92461450"],["/images/2016/04/thailand.jpg","8a14b46b162521322d7904802bff2bc8"],["/images/2016/04/victory-1.jpg","635f8fda158f44cf3607f222b8b70165"],["/images/2016/04/victory-2.jpg","daee06d692b32e1c484b6919fba1adec"],["/images/2016/04/victory.jpg","daee06d692b32e1c484b6919fba1adec"],["/images/2016/05/account.png","82feaa9db9961b831bbfe6b7c69a9e92"],["/images/2016/05/bitcoinity.png","6c762be68b5845e894eadf99b841d27b"],["/images/2016/05/bitcoins.jpg","5a69abf036afe427d0b876f51ccdf6a0"],["/images/2016/05/bitwage.png","e500f26161662d27d9419802ccb2cb6e"],["/images/2016/05/bitwala.png","bdc2bff44eca972b0696beae73509862"],["/images/2016/05/btc.png","69b693ec95ef8d8001041f501cc04fc4"],["/images/2016/05/btc_setup.png","d5938ded653caeeef9a69613f558ca67"],["/images/2016/05/giftoff.png","3c91f7478a751c1cd5b4cf7104e722eb"],["/images/2016/05/internet-privacy.jpg","13b96d89a4613ca92de8eaa76548447b"],["/images/2016/05/reddit.png","ffef08b2c72325d165cbd955a879b028"],["/images/2016/05/rome.jpg","424415609043b1a093eae330bf37ae3e"],["/images/2016/05/trezor.jpg","503467fa2a617caefbf764f5ea067b67"],["/images/2016/07/albannai.png","0c0c3e0cc390e4f7a7befa3e0d012091"],["/images/2016/07/marinaplaza.jpg","f7e0318b6403be6ac33dd9c16fb72c45"],["/images/2016/08/androidManifestList.png","9daa8d7b7a95bd4037f2244246c3e32a"],["/images/2016/08/galaxyapps.png","f063b9abdee7fe3b6500e12f0ac8ae00"],["/images/2016/08/mail.png","8d08d8fd83a5bdd3f087bfbf4544b135"],["/images/2016/08/productDetailOverview.png","b3aa0fe756f9fecf5b4ad0ccbab8cae9"],["/images/2016/09/ics.png","e20e3362514b18a7774dbe360e207c3b"],["/images/2016/09/ics_working.png","aa8cf96a6267da857b866e49c75515c5"],["/images/2016/09/ip.png","a1ce2dea06c8188f927c7220c42bda66"],["/images/2016/09/nano.jpg","98c504efd0a5dd4ae2328bac21c212d7"],["/images/2016/09/pineap.png","f81e4da9cf419765df79606a6a43a58c"],["/images/2016/09/setup.jpg","868939c62dd0f1eeda8914e318c0f99b"],["/images/2016/10/cat.jpg","cb5eafb205bc2a1914fe240e5d441cf9"],["/images/2016/10/firmware.jpg","0d43ac7e433be803a61850d9f7f00426"],["/images/2016/10/machine.png","594983fa528ad69bd3016340806d2137"],["/images/2016/10/methods.png","674ec74c150903ad14994ef273a5bda5"],["/images/2016/10/oss.jpg","6e7b8815b6a873ae9f8885cab1d522f3"],["/images/2016/10/pill.jpg","f44cc38af60d86a3f9295fa49b3d58cd"],["/images/2016/10/renzi.jpg","5b5cc1df3e0d0b0feb73c4ef3fe81e1a"],["/images/2016/10/social_life.jpg","176124393c6918796c3495b1af2dd24d"],["/images/2016/10/terminal.png","1264928f2f5e39e516441adcdcdcba7f"],["/images/2016/10/vim.png","ed8ce7be53c44b0a5d84990cee379e04"],["/images/2017/04/androidstudio.png","1c887c79a27d0190f1088a9a3b211272"],["/images/2017/04/apk_header.png","b6a70305b679d41dfa54e2e5a3104cee"],["/images/2017/04/bettercap.png","fe5d793155e92625fdba6796f283794a"],["/images/2017/04/cuckoo.png","774a94d1a7a85b8e0465badfdd1fea23"],["/images/2017/04/hopper.jpg","fd8f3cde56172f74e7b2ca217b88be74"],["/images/2017/04/ida.gif","22e0f5d99199cba41dec84f2f1348761"],["/images/2017/04/idadbg.gif","5bac5ac80934bd637096777c1d7e95d7"],["/images/2017/04/jeb.png","364867580748288af692fd53252c9589"],["/images/2017/04/joe.jpg","430c8b9720c1ad0b5ac2e30e373620ca"],["/images/2017/05/bingo.png","2bd5d26aa8c0d05949d416ba1c618be6"],["/images/2017/05/configure.png","bc7a0102c27b2ff186dc3045ade87252"],["/images/2017/05/exploit.png","d8b2c9fc1bd51d532a12e6baf9498dda"],["/images/2017/05/nas.jpg","57299060836698a23cb94ac936db41d7"],["/images/2017/05/obfuscated.png","5aa6db77891da0a11fe5653ee11d641d"],["/images/2017/05/terramaster.png","382fe7f981a8a17583f5def55321841f"],["/images/2017/07/encrypt.png","ec819de6232e053895b2716ab2663cfa"],["/images/2017/07/sni.png","aa2f7e7314445dd5193ca7a25391515b"],["/images/me.png","9f9ddd98fb429a52ec8ddbd939c19f70"],["/index.html","a299aaeeb303bd8dc372c157026f0955"],["/js/script.js","7d18beaed09b6fcd56a4a2a5cc4b885c"],["/page/2/index.html","cb6e5a947ce0d9fc2b60044deed2aaa2"],["/page/3/index.html","c9bc715d94d2f4f62cacfaa06f118024"],["/page/4/index.html","056c29c2e9939ef7291dea58556306eb"],["/page/5/index.html","eba92cf47dae34c35681faab01c5658c"],["/random-facts-about-me.html","9ff459ef1e055ac5f46446a26ecb8677"],["/tags/2007/index.html","f631076f9dcf4c597e576ff6c58d83fb"],["/tags/BLE/index.html","5bd05c3d129c606a0cd6c89bbe68ca0a"],["/tags/Dex2Jar/index.html","393480eb7e2f6797cc25e82d8bd28e8f"],["/tags/Frida/index.html","a0d669b4eda6cac9acd84c522b3b32cf"],["/tags/Hopper/index.html","980553c345d993a7288cfcd8030146e7"],["/tags/IDA/index.html","43850c54c886fdacbb56188f14a66f4e"],["/tags/JADX/index.html","4bbc60710e7e5c3804411ab1f120f14d"],["/tags/JD-GUI/index.html","4dc11074dd2853eab2a2d2b1908bd4b3"],["/tags/LG-G-Watch-R/index.html","d4ace91d297a93221e56ae8f363505b4"],["/tags/LG-Watch-Urbane/index.html","b25b6dad6dd03e3a6350fe8e52df0867"],["/tags/ObRegisterCallbacks/index.html","4b1e3e70ed80f853ea584bf61a39a307"],["/tags/SmsManager-sendDataMessage/index.html","c5665a9f88781bcfaf8e3c6fd28331aa"],["/tags/SmsManager/index.html","b30486cca5c478e5bcd3235cd71f6d7a"],["/tags/SuperSU/index.html","43415da836e3a2d0ff5bda8250c14dfd"],["/tags/TWRP/index.html","7e31a2340df915f3ea277f218412dcb9"],["/tags/UAE/index.html","76fbf1bac28338b2e511c5ceebeae73f"],["/tags/Windows/index.html","9d7671e5f42617317ea59a5a9e394cc3"],["/tags/XDA/index.html","7fec0faef0865b1b6c96ec86cab67ea5"],["/tags/XPosed-Framework/index.html","c96c1c9848518fabf0fa7bdc93956c9a"],["/tags/XPosed/index.html","bb6fdb49e785cee5fae47d8780faba8f"],["/tags/addJavascriptInterface/index.html","9f6f1a5291201af97fb8aede8550411b"],["/tags/adv/index.html","1bae7784acc04ebcfad877fe2721317a"],["/tags/adware/index.html","55eacbe4c151552e639fe6f069a2c6e8"],["/tags/afl/index.html","a45ef7dfc1cff5dbb60a5d820e82a4a0"],["/tags/american-fuzzy-lop/index.html","761666b4dd8555db669f3f4afdbfcdc0"],["/tags/android-wear/index.html","e28cf7db9dc1ff1fda27d7e882926a2a"],["/tags/android/index.html","1b512cd4ededc7e0964c425dd6fec2b7"],["/tags/api-hooking/index.html","1eacb06e62c532934343e3f2f402c238"],["/tags/apk/index.html","0bf38d49d43bb3e5476c5ad6d14f6262"],["/tags/apktool/index.html","820049c359705f48450e5dccc5eb4ccc"],["/tags/arm/index.html","f7291d42e47864917e25887915139fd4"],["/tags/arp-poisoning/index.html","dda91fb68fe51b86f571fc26b3628485"],["/tags/arp-spoofing/index.html","61b15a6b1785825c522af840e832af43"],["/tags/assembly/index.html","028898235684afaecdd907dedc334553"],["/tags/authentication/index.html","abb661b5d33f3bca2b8590bc49244bfd"],["/tags/backdoor/index.html","43577548119ebd2cb868561bfd8e532a"],["/tags/bank/index.html","7ccd34bd3606fe7e88e7e55c201be105"],["/tags/banking/index.html","40b034bfd50a6df444530ee4f42d09da"],["/tags/banks/index.html","79835187bba1be412531531d410dd524"],["/tags/bettercap/index.html","c523cea4aba2649ebfb1e6f7da8d9eab"],["/tags/binary-instrumentation/index.html","8ba8f37e9ebe65857e3e94e62f544099"],["/tags/binary-protocol/index.html","3e1611d9072a23f3878834ed47fc69db"],["/tags/bitcoin/index.html","08a91a07c0c748562449fc3f153a4272"],["/tags/bladerf-x40/index.html","0102d62b0a4de9d790db79412d8a0e52"],["/tags/bladerf/index.html","5156d0c7e4707579820f9b6e15650208"],["/tags/blockchain/index.html","0a62176446d9ae73e95840c79a795e20"],["/tags/bluetooth-low-energy/index.html","76c11891a60efa8b91c6129e48a874e4"],["/tags/bluetooth/index.html","89fd6a04d2114be097f39f5f7d2094ef"],["/tags/bot/index.html","eb41fe607c466756c9a77ea2af7396ec"],["/tags/bots/index.html","cf26dba46b5b98a3ea4fc5dcc4de9986"],["/tags/browser/index.html","99599158ac745b885c6485b5d69064b8"],["/tags/btc/index.html","343fbd3fe6316c2d911f1955fd5e223a"],["/tags/bts/index.html","2cf100f99375b90ae1e43ea28a9d2f62"],["/tags/bullying/index.html","a9c31328a56b8553a22203f8ab469f75"],["/tags/bypass/index.html","b990479c3e53ab67b34c82af298f07a1"],["/tags/c/index.html","d1331d68f02e58270fdc967be0647e30"],["/tags/censorship/index.html","2a24a7a21ab486135efbb38893bddadc"],["/tags/changelog/index.html","e6ec67784dfe2a148055d23bff7531f1"],["/tags/chrome/index.html","b99519b02bdb6d227fb6043671c3700c"],["/tags/clang/index.html","6b7e6de15a99a590aaf3b0a6c4c0df14"],["/tags/clipboard-grabber/index.html","1cd4b5e13d3bd34c4488cf7e325e9bd4"],["/tags/clipboard/index.html","60710954912cbe381e68ade046fa4729"],["/tags/cloudflare/index.html","a904bddbf35c2ba93181e364345bf733"],["/tags/coffee/index.html","bcaec427a66e9a50fc637f8f9ca59260"],["/tags/command/index.html","dc23b962f3a455bfc39286a0e78fc9f9"],["/tags/consigli/index.html","71ab515623d80bc07886a5fdaac86373"],["/tags/corporate/index.html","ad76032e0299a41a44e079be2208322e"],["/tags/cr0/index.html","ad5f7f523fef114d571b8132eecec243"],["/tags/craig-wright/index.html","bba705398676fb34d2dff74a9890e7a2"],["/tags/crash/index.html","bb3192d4808618b44f40c516bd533dd6"],["/tags/cryptography/index.html","be35a2776743f0ab83a8a7de52908d98"],["/tags/cyberbullying/index.html","42d94ee7f75fa3245f3d57f450f51dd9"],["/tags/dalvik/index.html","1d703f2bbf253378ff643b8e2351bb93"],["/tags/delivery-report/index.html","3e3ccfbe9f96d5dcd3de751467c2669b"],["/tags/dex/index.html","5a5bac621d8b433bfc6f87262662982a"],["/tags/disassembler/index.html","f6bc23df067b2d7d177fc74fe60df1b6"],["/tags/disclosure/index.html","3884075ce364556c903ef33cbb227958"],["/tags/distorm/index.html","b0c7677bf48ae7f7495c063f00d63ee4"],["/tags/double-direct/index.html","40a80e34a958b6e29110d931610138ab"],["/tags/doubledirect/index.html","8b97490647e33b5f99385b6361883743"],["/tags/driver/index.html","b327ce2143b62a181dcc965d5237d767"],["/tags/dsploit/index.html","4277b99fc433b750c1105835e245466a"],["/tags/e355/index.html","a80b8df3ce664e5d0ca44128fa38c7bd"],["/tags/e587/index.html","3ba2a95e982bb7037b50c0f1d83dc6e0"],["/tags/elf-command-injection/index.html","33eb56ab69a12e1b4aa5fa61e36dbfe4"],["/tags/elf-relocation/index.html","8fbf7fd6beb84c1368d65a582d704891"],["/tags/elf/index.html","dd6bf2b63dda117eeccb67de80996c63"],["/tags/elf32/index.html","2d3e4af801352127192ff8d3d38dfa47"],["/tags/emulation/index.html","b6d87cd11dbf1fe17438e06ab1dcda3c"],["/tags/emulator/index.html","df072a48657ebf0345b29478bd77d0b3"],["/tags/encryption/index.html","cc2a3316cf141ac65775e4f8c134bc58"],["/tags/end-to-end-encryption/index.html","e38f62cea3c946f4e3d4ba37c2954670"],["/tags/equipment/index.html","1ed2d318c4cdcccd20ee459474ddb21c"],["/tags/ettercap/index.html","a205843fe8e0a152c27fe73f329fe396"],["/tags/evasion/index.html","1dfc777d65097a0d0f26ff9f21869e19"],["/tags/evilbts/index.html","2aacb57a96e4662f2b04ea838f095dda"],["/tags/exploit/index.html","0a03862cae12e81fe47bb6bc3e2de3bf"],["/tags/extension/index.html","2f44eff3b810df6025ce81acdce47799"],["/tags/fido/index.html","7e1a87b2e93d645b28edbe1bc8d0abd1"],["/tags/firewall/index.html","f110c37c1e7341df4f386527310d3f35"],["/tags/flexible-ssl/index.html","36abb7cc50e254b8fb2f3fd55cae0f92"],["/tags/freedom-of-speech/index.html","7e3495349b129568aad80ccfb73f5d70"],["/tags/freedom/index.html","75addec2980091b040db2e626f18d3ba"],["/tags/fuelband/index.html","e2de022b24bea596eff371408359ba85"],["/tags/functions/index.html","0888cd44c8e56ad8a64cd9d2a6c3e36d"],["/tags/fuzzer/index.html","7d04b6467be5ae290dcb7d19f93f0fba"],["/tags/fuzzing/index.html","0e6fd34136c6e8d9911a8d0cd61267e8"],["/tags/galaxy/index.html","f11cf87508fd85ff260670907c713554"],["/tags/gcc/index.html","be600ead3a42556dc34b5701f4a826e7"],["/tags/gem/index.html","902359d0d0cb7b77411a3df73546a1c5"],["/tags/generator/index.html","48172d5839584245304aacfbb8114c81"],["/tags/government/index.html","c898c637856d20d0882ec325dcc1c312"],["/tags/gpd-pocket-7/index.html","cd14c25f682cb26e66ea12970dad241a"],["/tags/gpd/index.html","e2fb45e01f52f4d993f2ee4c2b6b5304"],["/tags/gpl/index.html","3593b6a8e26ee890ea4a628be6135e5d"],["/tags/gplv3/index.html","255cb9bf73c8203616175adada7532e3"],["/tags/gsm-hijacking/index.html","179ee530dac635bf0255a7126953847e"],["/tags/gsm-intercept/index.html","499a1557d7bed2bdd9c25ba5c129c840"],["/tags/gsm-sniffing/index.html","93db77726172efb6136e63b81df20b65"],["/tags/gsm/index.html","47a4bcdada0744ff98748525c9d2d258"],["/tags/guide/index.html","e5102cb3803663a903ade256056704a5"],["/tags/hack/index.html","ce4b1e5e34163c41c777083be24f766e"],["/tags/hacking/index.html","a0602fb49d2d219ef4ba84d3cbcf0eef"],["/tags/hardware/index.html","25fb08ab0f31c6319553741e633634a9"],["/tags/hooking/index.html","d92366fc2e8dd9f50092e0a53931002f"],["/tags/hopper/index.html","d9dcdb464047d45065ef38f7c26bb803"],["/tags/howto/index.html","172ec50686cee1c10ba464932d42609a"],["/tags/hsts/index.html","dd1bb2c0f8fe55362c005e717a5f9d8e"],["/tags/http/index.html","391208fae2f74c209d09eb64276abd7e"],["/tags/https/index.html","28e525f526e41bad9035c4b8e2ff1d89"],["/tags/huawei/index.html","3c5f4e754ae5d9c0401919ee55b38af3"],["/tags/icmp-redirect/index.html","b9929f0f92f5f22a01e894e7700378b1"],["/tags/icmp-spoofing/index.html","f01a9249b481a4e14b3b15df6f5dbd6e"],["/tags/icmp/index.html","4f2c870752e345ac48cb11fc4de91462"],["/tags/ida/index.html","3c5ac1f26bca3ce463d8b8d30ff696ec"],["/tags/identity/index.html","af19a86e30676936b903a93f306a1e18"],["/tags/illegal/index.html","05e1612e22e9f9fa3cc0ade8d4a0bc7a"],["/tags/informatica/index.html","211e74009f69e0d063d0b65af68d0337"],["/tags/inject/index.html","4dc49b6d0439a77fa54697eae1aa71e5"],["/tags/injection/index.html","d6e0a2f1338c7c90f3b126ab69c3b7ce"],["/tags/inline-assembly/index.html","dcd58819a45285750b70edb2b5aef77b"],["/tags/inline/index.html","e2b776c8e626fbd25b0ee3b2a62fbf47"],["/tags/installation/index.html","7c917653ae4ea1d2c31d2397e1a860a8"],["/tags/int-2e/index.html","757ccb1745f92f7b6acc997d986fe7e4"],["/tags/intel/index.html","5409bd703f2f1d8fa9a041acde923184"],["/tags/internet-connection-sharing/index.html","43d4e12b4839a5f2b7d02b66b3476e25"],["/tags/interrupt/index.html","5024e6488cf00272acddf30408611396"],["/tags/italian/index.html","7508d2069770660adfe66881c24d8668"],["/tags/italiano/index.html","4777461a0ebc4e97674b7cf227b2d12c"],["/tags/job/index.html","17d21e99f16c22e011efe14a5e22e03d"],["/tags/kernel/index.html","780c2c417a670288a63d052baf2b717b"],["/tags/lavoro/index.html","53cf1f8d0946d60203d6654f037f548d"],["/tags/law/index.html","fed9d53961d5b00381baf69dbd2c4f9e"],["/tags/lawful-interception/index.html","43094a2535c6dc865a28da70f9ac918d"],["/tags/lcamtuf/index.html","6aae4a24ea0ab5d9208a8c9a76b89312"],["/tags/ldr/index.html","c9e134beb5e76d41f3760b7b0f96e286"],["/tags/libpe/index.html","ce745f1094e00555faee162a7b07f93a"],["/tags/library-injection/index.html","d0e0a66dbfc8f49eaa3402c0a1291aea"],["/tags/library/index.html","ff1d30032f36e02154031e67c2c00910"],["/tags/license/index.html","f7f79d7988885a1453c8d7d421be3d0f"],["/tags/life/index.html","c193e91d76e9c8961d8dd18455666df1"],["/tags/linux/index.html","352c7c56b765c80829fb56d5a9aac0a0"],["/tags/llvm/index.html","810b5abd979e2faf332871e7fcce2c0c"],["/tags/loader/index.html","7360d3dac2d450ebb102739ea100c94d"],["/tags/malware/index.html","e257abce552cc9367c408224e27b2406"],["/tags/man-in-the-middle/index.html","18ee98d8a61a6c9f9dc578ce0ddc5ec8"],["/tags/mana/index.html","6f1b27e5f418998993f14b7db8ab29a5"],["/tags/mavericks/index.html","7c79d8a63d0e2fce2cab491453fb9866"],["/tags/memory-injection/index.html","d3bd0490ffc708ae199e9f63eb91e1f7"],["/tags/metasploit/index.html","70e059c563f3cd8a76f608e7e567ffc4"],["/tags/microsoft/index.html","9f5f5a574186fc1348cc59a4e1d8bd95"],["/tags/mitm/index.html","30d9d415d99f1471e3f3a4d26ee1ab54"],["/tags/mms/index.html","bf35f8ef2aba9fc5242f86ae02e347d7"],["/tags/mobile/index.html","afe2a0fc5e1a32706cad09fc9e5e9458"],["/tags/modem/index.html","1e66d3de8b9899f049a2e77803e9362d"],["/tags/modems/index.html","6eda11f6e1ef0385129a3863852cd364"],["/tags/naked-functions/index.html","eef108c8ba00a0170bcbc97b898c7f92"],["/tags/nas/index.html","fb73721cf35ab85a557770dea74350ad"],["/tags/nerd/index.html","98333b4421b543b7a1d57ee8c9d062e9"],["/tags/nike-fuelband-se/index.html","e2e884fc463177963312484aad3afca7"],["/tags/nike-fuelband/index.html","3a6d18814b1137616c228bc850fe18fb"],["/tags/nike/index.html","c85e7a9e57ba1c335763d167009f2488"],["/tags/nikeband/index.html","fd62ad189a47cbac50490d311c3df4ab"],["/tags/ntdll/index.html","30f33c0851d8cb69b5313f3f3c465325"],["/tags/ntoskrnl/index.html","6f0cc194bf16bc70364bccad9723e9c5"],["/tags/obcallbacks/index.html","e113763f0201ae035ef82aea3c751ca2"],["/tags/obfuscation/index.html","21934944bf697e8ff24610b5979617ee"],["/tags/objdump/index.html","66f26976bb046df6b6e0fa812e54d848"],["/tags/omnitel/index.html","3597e342f98925004ec278c7d6223474"],["/tags/open-source/index.html","d8d40c6b089ba58b65395ba731a32c59"],["/tags/open/index.html","f0ab36e99335eaccb86d80507ae3a3ca"],["/tags/openbank/index.html","04dd8993da66177cdc555dd9b4278c95"],["/tags/openbts/index.html","9f67b6a77a7362381f19b0154da1d267"],["/tags/osmobb/index.html","c33d8864d8d287e8b3ffb077e76b9df5"],["/tags/osmobts/index.html","b71adc6abf682b19c54a9618a827ede0"],["/tags/oss/index.html","070cf78387e56ea3fd6fd36efa7bb6f7"],["/tags/osx/index.html","8064829c3d83849c4a893b20290fdb20"],["/tags/parsing/index.html","4c0334d9e59955f2ee9480b8c2976fea"],["/tags/past/index.html","f58452a3f7d163e82cca2c7068afd930"],["/tags/pastebin/index.html","d0cb9bd3e7a3538a05162fb1865dca20"],["/tags/pastebot/index.html","78d571dc53e6c14db76a1aedfeda4a1d"],["/tags/pdu/index.html","f5f96edaf4bdeaea9626720e3be5e60e"],["/tags/pe/index.html","f20a89c3a49eb7a5ac10a779691f8360"],["/tags/pe32/index.html","172fb8fe7c78502eccd9219a1e598254"],["/tags/peb/index.html","209d5471e7fac7320e6171cf7b46440b"],["/tags/pentest/index.html","0b7d8ccdcd2d3e6de08f755e8f4d8bec"],["/tags/permission-bypass/index.html","52697a2e0397757592143f0090935161"],["/tags/phishing/index.html","74e5358ba6bdad970993698d85349cd6"],["/tags/pineapple-nano/index.html","8b28d702e64959aed6c0eb6a2570866f"],["/tags/ping-sms/index.html","84e2e0fe7c1a7c8fa86b7a4ecca73b5f"],["/tags/play-store/index.html","66939af5728b0bddc5694c46ec66cee2"],["/tags/plt/index.html","31ab0bd95ac8ad6b0c1e243ba7d40f82"],["/tags/poc/index.html","79774f500710c48d7863c1aba6079df3"],["/tags/portable-executable/index.html","dd6c97e289759f4fb2231f3fd13ab27e"],["/tags/porting/index.html","d48c7cbd4e120dee668c5c631abd29f5"],["/tags/privacy/index.html","d4641a7737875f930b9a662311c02c10"],["/tags/process-environment-block/index.html","c467d2ae283f93f885a7ac9577fdb4e3"],["/tags/process-protection/index.html","e79c36733093d3bda3a82b27bd41b8d6"],["/tags/professione/index.html","2b791ea24abce4c3ca1ef4534af40061"],["/tags/progress/index.html","e10a0218d1d12427868f5a4ff3902b1d"],["/tags/project-generator/index.html","6c4b89cf82e2d68a2b64776ac986905a"],["/tags/project/index.html","ba8c2638660561d90877b2cde5944a6c"],["/tags/projects/index.html","3ded55ded7a63ad6dd614d8eb1fcdf2f"],["/tags/protocol/index.html","bd2c8df892f896a5574ca4fd83250e77"],["/tags/proxy-module/index.html","5d6191d8bf5a3ac0d2f54cc16132627e"],["/tags/proxy/index.html","9abb2d4203c77700cbf2629fcc65d2c0"],["/tags/ptrace/index.html","69bb5a7fc4a1af3c5c2120e67b93be95"],["/tags/python/index.html","65095d6c636264c130893203277f5e60"],["/tags/qemu/index.html","07e72c10a221e2a205b07ddb2034828e"],["/tags/rce/index.html","389c186dedeca8d3fc4a4b6d2c4ef0b2"],["/tags/re/index.html","2446bc031547be813435fc80f4671ca8"],["/tags/reboot/index.html","cb24aa8bf65b90eb93ba5317202f2176"],["/tags/red-teaming/index.html","a7ed354445b904a544737cf026642cb7"],["/tags/registers/index.html","b1fd6de2457b4ebbf049a1e056387cc3"],["/tags/relocation-table/index.html","204420b2309701dd50808e66a5d0545a"],["/tags/relocation/index.html","e9684aa780e83fce689c42c0d188de68"],["/tags/remote-injection/index.html","7db145ea90e609988feef5c2f5a109d6"],["/tags/researcher/index.html","5938fc4a0ea3d46f1efafc62b743960a"],["/tags/reversed/index.html","cc34fd026eacd4627b4c5f3ba5cceaaf"],["/tags/reversing/index.html","1a80263e9b1659f74a07ce8b996f5932"],["/tags/rf/index.html","ff706ff83e17fcd2639acc52f523ea52"],["/tags/rogue-ap/index.html","46154874cc8f8a036a69c1a39d2c8ca0"],["/tags/rogue-bts/index.html","7aa88abfc6a40456b3754cc22caaf0a5"],["/tags/root/index.html","dcee7425f516ad0a9b240193eea32719"],["/tags/router/index.html","6f740355c76c631436eb2eef403e6521"],["/tags/routines/index.html","80c61e024dd80472bf8cbb5845670ba2"],["/tags/routing-table/index.html","095cfd3e6542abee5579916fa1702545"],["/tags/routing/index.html","886c6d206b5e991cd381b2e5410f332b"],["/tags/rubertooth/index.html","e1f6127661f38659f278aa1d5fa44b48"],["/tags/ruby/index.html","9e5d2df6bfcc2e23a547909d0c34b653"],["/tags/samsung-galaxy-apps/index.html","6c37ae37664051d2fdbad1b1b84139de"],["/tags/samsung/index.html","4e0037505d3f30020bf1199532048f22"],["/tags/satoshi-nakamoto/index.html","86d15f5a029e6cb0e562dfaa9a957cba"],["/tags/sdr/index.html","b65900adcc7d5df804e5dc114525581c"],["/tags/security/index.html","60f97dfbefd7b7e39f968dc5e29d5819"],["/tags/self-protection/index.html","085750108468c33a1c8d62b08c6cc521"],["/tags/sendDataMessage/index.html","34245d39af3f8b2415451db3e3cc958d"],["/tags/server-name-indication/index.html","b73fe35835fe78ac31f2931511853fce"],["/tags/session-hijacking/index.html","e386cd7509a259be77f69f322ff954ee"],["/tags/setup/index.html","c6d91d686f1f35f93438f9718cbe49ae"],["/tags/sicurezza-informatica/index.html","55ea812b2dffa7862d647b91ab51e66b"],["/tags/sigint/index.html","b3aadf7da510f201ac949b585ce2d83e"],["/tags/smali/index.html","b6a9dd60c5ebea78a24bfe44c66a90b8"],["/tags/smarter-coffee/index.html","09bb8b9e146a89ef6766b4fac4550636"],["/tags/sms/index.html","e2ac585f78e9f4c6ff16211d5b6d8dea"],["/tags/sni/index.html","92045c43e4acbdd32366f86d74105839"],["/tags/social/index.html","7c37ee5b4afe491d79a9c3a0c8a28f7b"],["/tags/sparkle/index.html","053065e1156fcb03760f6d6951237cb7"],["/tags/spoofer/index.html","51a1b22b7a9d99335fb4036ef8e5c7ff"],["/tags/spoofing/index.html","687d2ded6499e5a3cca0b95e66e97821"],["/tags/ssdt/index.html","904751b47da614929a7c74b194eae386"],["/tags/ssl-stripping/index.html","2803a8df440511bd124385dea0dc6cca"],["/tags/ssl/index.html","7fba8c95d5b3dbcd854f916a08069f95"],["/tags/sslstrip/index.html","86641e844e00ccffa24dd515a4663eef"],["/tags/sslstripping/index.html","cf9bc2ffa4a2a3377eddf17dcd6c0c51"],["/tags/static-analysis/index.html","40d96634794adf3507419c5e30afb2fa"],["/tags/store/index.html","82bd83d89c0d16c8a1f0df15a4f9fa7c"],["/tags/strtab/index.html","4ac3e4ae5e45ee112d1fe81d0e497e02"],["/tags/su/index.html","d40635b4a46b5c2ee52970d6805ed0a4"],["/tags/subroutines/index.html","9ace0c18be5c45dbceeb3b09879783fb"],["/tags/superfish/index.html","5db3799a666e89b44d742919b1ad21ed"],["/tags/symtab/index.html","3444ef2ab5df0a7614a7ae8e774f9bc7"],["/tags/syscall/index.html","b76a9479a065b31d97d41be68e385236"],["/tags/sysenter/index.html","693a17d0f10a117f2d9db8e852740a48"],["/tags/telco/index.html","584e0f91fb7735d7f84fef8b3f4d388c"],["/tags/telcos/index.html","cfe396b2875fd3835f029b400a0a3e9a"],["/tags/template/index.html","2da0a9152898daa932f1c1482b5792e1"],["/tags/terramaster/index.html","138f875f3ea63d6491e2cc2cccdfff25"],["/tags/the-guardian/index.html","b37b19928583fdbf4552b31ed445a168"],["/tags/tib/index.html","843c87da334bf3c5bfb7a2faafb72b02"],["/tags/tls/index.html","a678141c9f64e322bfb2a5f5ab0990dd"],["/tags/transparent-proxy/index.html","d9182f2a193c85bed953c3f8d7de1646"],["/tags/trezor/index.html","c8f5374eaa4ebee334b53b1f5b524ed4"],["/tags/trick/index.html","e5335f2b3c2d673d41f4da9675faf197"],["/tags/ubertooth/index.html","50df72ddb446e6b1272e013a7917f53e"],["/tags/united-arab-emirates/index.html","7b21d63d70dd77ce5910dd2ba4d1ec1a"],["/tags/update/index.html","dfc10004fe1a1d22f0df1dcff0db9356"],["/tags/vita/index.html","565db82bd7c4881b8593ca71477737f5"],["/tags/vm/index.html","82887d38ac4fb5070db451673eb1d215"],["/tags/vmware/index.html","ba06edefa113c1e5af3fce91b281d7d5"],["/tags/vodafone/index.html","46c14be6602c47f828c939c2d24ac7e9"],["/tags/vulnerability/index.html","ecccbc23e6c69afb3ea2fa752d6a64a5"],["/tags/wallet/index.html","301635a5798ff0ba58c06cee2bc8d263"],["/tags/wap-push-notifications/index.html","8f95339e5a7a6616e4c45cc1e138fc54"],["/tags/wap-push/index.html","16455b5d11568780abb821d93ff635e7"],["/tags/wap/index.html","85b94db33a45262d45a66c3f48a23d73"],["/tags/wear/index.html","68ab736a4703f9273cb1736f8e7131a0"],["/tags/whatsapp/index.html","674b976cd0c4135f4b7bf0105854a005"],["/tags/wifi-pentesting/index.html","f4dba3e8fc0fa145d4c448770d386f22"],["/tags/wifi-pineapple/index.html","7b81e61461262599af7fad628b24997f"],["/tags/win32/index.html","170ce91db3ecefe4488189f51604df44"],["/tags/windows-internals/index.html","2accdcda93e7073323484934fc0233ed"],["/tags/windows/index.html","c1098529a804d3261f9f5f03d3674e06"],["/tags/wireless/index.html","36b891c5eeea2f4efc409cb22c357ea9"],["/tags/wow64/index.html","d56395f81d17d62bfc066fe83c3bf73a"],["/tags/x-notifier/index.html","5d458b76a57a9a13703cfd30fceb2353"],["/tags/xnotifier/index.html","3c8a492f38bfdb3103dfe964d5f9224b"],["/tags/xpub/index.html","6d9c3fa1555cc3e98c47edc05768d7c8"],["/tags/yate/index.html","dd5a3520b81f96526f1326bb9ab59bfb"],["/tags/yatebts/index.html","667d98d59eea7566667929f897e71a11"],["/tags/yosemite/index.html","93ac588d70a1c678861947cba929cc40"],["/tags/zimperium/index.html","77673879da9b0ffc20b75bc65783866e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







