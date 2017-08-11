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

var precacheConfig = [["/2014/02/01/keservicedescriptortable-patching-aka-how-to-hook-win32-api-patching-the-kernel/index.html","d01cf36d17220be0fda075d9b7d02d91"],["/2014/02/02/process-introspection-for-fun-and-profit/index.html","548c6666fc447b7d7ac9fa0f2e408481"],["/2014/02/05/termination-and-injection-self-defense-on-windows/index.html","d8441cd927e69f68022a1a11f0966109"],["/2014/02/11/on-windows-syscall-mechanism-and-syscall-numbers-extraction-methods/index.html","1716ea14993a477ab003c23fdd859b33"],["/2014/02/21/libpe-a-fast-pe32pe32-parsing-library/index.html","1ca8b5f8f0962112a231df805efad774"],["/2014/03/11/programmatically-identifying-and-isolating-functions-inside-executables-like-ida-does/index.html","84d1d351788485d7d2e65fa7817298da"],["/2014/03/25/about-redistributing-open-source-apps-dsploit/index.html","f3a8906f2b9123afb8e239e5c38432ff"],["/2014/04/21/why-reinventing-the-wheel-isnt-always-wrong/index.html","fc7455406624a8bfb5e1cb3401e2d2be"],["/2014/07/15/how-telcos-are-bullying-researchers-an-italian-story/index.html","1f7de3075ad9ab8d181ea8e4e5001c07"],["/2014/07/17/back-from-the-grave-elf32-universal-command-injector/index.html","40cedabc0ce3bcc2d684456c18c99d26"],["/2014/09/22/back-from-the-grave-vmware-host-clipboard-grabber/index.html","bb60f5485245342b6cd02b38777ed523"],["/2014/11/03/dsploit-merges-with-zimperium-zanti2/index.html","e6d9a602162c036e1cd1304a9ba6ab4a"],["/2015/01/16/how-to-install-metasploit-on-os-x-mavericks-and-yosemite-an-updated-guide/index.html","d3057283c792f5c211b3b6bd993ed337"],["/2015/01/29/nike-fuelband-se-ble-protocol-reversed/index.html","6c4219cf1ff08b3f026a948e5d2bdc8e"],["/2015/02/01/huawei-usb-modems-authentication-bypass/index.html","26d9278c74723ddb72b666ba521fa0df"],["/2015/02/11/hackers-phishing-leakers-a-new-bitcoin-phishing-social-technique/index.html","7cad3c896270e3e3c36ffc29c2bce566"],["/2015/02/12/rubertooth-a-complete-ruby-porting-of-the-ubertooth-libraries-and-utilities/index.html","b2b43daa92a15cf5e96e12c92f2be37d"],["/2015/02/20/superfish-adware-found-inside-x-notifier-extension-code/index.html","4be5e6b43fc1ab6938961077d204c591"],["/2015/04/30/fuzzing-with-afl-fuzz-a-practical-example-afl-vs-binutils/index.html","5027c34fcb978014a60e087f1c2cab4d"],["/2015/05/01/dynamically-inject-a-shared-library-into-a-running-process-on-androidarm/index.html","998ba745eff52dfb5dc6e9d906964822"],["/2015/05/02/using-inline-assembly-and-naked-functions-to-fool-disassemblers/index.html","895cdd83967fcc2675cc4626de6ff8cc"],["/2015/05/04/android-native-api-hooking-with-library-injecto/index.html","5237ba435730931d862a8a2c974cd38c"],["/2015/05/18/introducing-fido-a-minimalistic-cc-project-generator-supporting-templates/index.html","d3e065e2e6d2971724a52d1619321a71"],["/2015/06/15/how-to-root-the-lg-watch-urbane-b285/index.html","6d91ea304aaa1cc36e36624c23e12382"],["/2015/07/25/bettercap-a-complete-modular-portable-and-easily-extensible-mitm-framework/index.html","a3cdedd400b307cf4ade88e22fcbffb7"],["/2015/07/27/how-to-use-old-gsm-protocolsencodings-know-if-a-user-is-online-on-the-gsm-network-aka-pingsms-2-0/index.html","c500bcc6284a9db361cd6aefaff4914f"],["/2015/10/26/karma-come-lopen-source-ha-cambiato-la-mia-vita/index.html","af706c49b1b5495d8a6f2c729d8bf298"],["/2015/10/27/karma-how-open-source-changed-my-life/index.html","723f1d0ade30d65b65687601b5a7c791"],["/2015/12/01/past-present-and-future-of-bettercap/index.html","bcf5f92092dc2453650145e7d5461323"],["/2016/01/10/bettercap-and-the-first-real-icmp-redirect-attack/index.html","e22877aff7a7fa0578ac1197074bd243"],["/2016/01/18/autopwn-every-android-device-on-your-network-using-bettercap-the-and-addjavascriptinterface-vulnerability/index.html","7ea3e19ad135ef37efe383a227549c1c"],["/2016/01/28/why-you-shouldnt-trust-cloudflares-flexible-ssl-and-how-to-bypass-it-with-bettercap/index.html","f3f43f18c370f99549396d1fab44d900"],["/2016/01/30/osx-mass-pwning-using-bettercap-and-the-sparkle-updater-vulnerability/index.html","e7cde9e2b5ea452c00edb4bfd8265172"],["/2016/03/31/how-to-build-your-own-rogue-gsm-bts-for-fun-and-profit/index.html","f7c1edafa6e720acb65a53dbd37e1644"],["/2016/04/18/how-i-defeated-an-obfuscated-and-anti-tamper-apk-with-some-python-and-a-home-made-smali-emulator/index.html","4bde710f1edd4f114bc187755779c13a"],["/2016/05/03/is-this-a-declaration-of-cyber-war/index.html","8baf840504b380e6289dcfe5404eee2e"],["/2016/05/08/Hacking-Yourself-out-of-the-Banking-System-and-Live-only-on-BitCoins/index.html","eb02cf469fce8d8291f20f8bd2a413ed"],["/2016/05/30/Hacking-Yourself-out-of-the-Banking-System-and-Live-only-on-BitCoins-EPISODE-2/index.html","59881d2c909f113bbe85dc9be6604818"],["/2016/06/19/presenting-openbank-a-safe-and-easy-to-use-btc-tracker/index.html","cec7cd0d7d59b1b60c6ff6be8db9c2a8"],["/2016/07/27/How-The-United-Arab-Emirates-Intelligence-Tried-to-Hire-me-to-Spy-on-its-People/index.html","0660a44cafbf38faa1ed4f329ce8c60d"],["/2016/08/17/Samsung-Galaxy-Apps-MITM-Vulnerabilities/index.html","beeb6e71f6d99401b7f8f4cb697344fe"],["/2016/08/24/RCE-against-every-open-source-BTS/index.html","d47346f0748616f2f185f355f19d9a57"],["/2016/09/15/WiFi-Pineapple-NANO-OS-X-and-BetterCap-setup/index.html","734e9e08e8db39ca7c31bafa175321e2"],["/2016/10/02/Un-po-di-consigli-per-aspiranti-professionisti-del-settore-della-sicurezza-informatica/index.html","c03645631739c36e5c8a031825998422"],["/2016/10/09/IoCOFFEE-Reversing-the-Smarter-Coffee-IoT-machine-protocol-to-make-coffee-using-terminal/index.html","6602496b0d3cb1ffabf98befea80a04e"],["/2017/01/14/Thoughts-on-WhatsApp-E2E-Encryption-AKA-Security-is-real-only-if-it-s-the-default/index.html","53fe7884bc34efd79a71969ee4e88283"],["/2017/04/27/Android-Applications-Reversing-101/index.html","e30055971edb19d1120c733c79189c94"],["/2017/05/30/Terramaster-NAS-Unauthenticated-RCE-as-root/index.html","3867b9841e2e158728997f782dd0d4da"],["/2017/06/30/BetterCap-1-6-1-TLS-Server-Name-Indication-and-Why-We-Need-to-Encrypt-It/index.html","a5153c7518291762072556ada7bce9b5"],["/archives/2014/02/index.html","af349cb4518b0e645fee8f551c8423b5"],["/archives/2014/03/index.html","17707f5b08bd2c97b1cc4bb76bb3b249"],["/archives/2014/04/index.html","6a6f8e54e748fd2624b4cedef28ae25a"],["/archives/2014/07/index.html","402155fadace12fbea04a8c2d46a53e6"],["/archives/2014/09/index.html","e0d1901d3ef1dc777cdbf358da25d75a"],["/archives/2014/11/index.html","5abfa0463cb2b251c54e6feb106d7c23"],["/archives/2014/index.html","9e5c98f74272d67ad99476fe8fc94549"],["/archives/2014/page/2/index.html","6dd1c69c55db126c2f812e57a9c255ed"],["/archives/2015/01/index.html","5240941ff8732411f60844e22c4578d6"],["/archives/2015/02/index.html","3f0dc507bbd8d26999b6a3dd31a10728"],["/archives/2015/04/index.html","7d665f69f181ba2c8ce4d95609b21be0"],["/archives/2015/05/index.html","2693a0798a15638cf195c25d64752ceb"],["/archives/2015/06/index.html","1ccdf55166d532a078748b1ee4b6bbe1"],["/archives/2015/07/index.html","250a8fc8e2ba26aae6e5e2131f5ec2a1"],["/archives/2015/10/index.html","fd95b4788dc5399b9c1e94cf4b48cd32"],["/archives/2015/12/index.html","e81df01777cdb2b1559924f63e8ab084"],["/archives/2015/index.html","b83cb3130aa63a6f3cf963a7d325c6ce"],["/archives/2015/page/2/index.html","ffcfb0cdf50e89af7ca225c2e49f9672"],["/archives/2016/01/index.html","f5d92ce55820f54152ccce0f4313681d"],["/archives/2016/03/index.html","00c7b91c24c7aed6d16daa1705cd7c01"],["/archives/2016/04/index.html","17acb2bf4675627ada3db9390bdcb61b"],["/archives/2016/05/index.html","5d8b14eb0fc43da933bc1d57ac271394"],["/archives/2016/06/index.html","c9540a4d592a6cdadf92871457d672bf"],["/archives/2016/07/index.html","31b845ccc9c9313403cb84fe33b947da"],["/archives/2016/08/index.html","4228624a5d1d0928c81e08c85c854f6e"],["/archives/2016/09/index.html","72496d070b116417bf6a08414d4f49ff"],["/archives/2016/10/index.html","2fc795147faa6adaf80d59536bcb79fb"],["/archives/2016/index.html","bb044ec5f286d7a9107c47f163f5fc01"],["/archives/2016/page/2/index.html","fa01dfd74ebeff8993bdbc8ca94ecfd8"],["/archives/2017/01/index.html","e1f84e43f2a12ad5471d35c976ba86f6"],["/archives/2017/04/index.html","d2d90d2243e7ea92dc2cb9c25af41bde"],["/archives/2017/05/index.html","7587e0a6ec43f3cafd4e4d5904e0b83b"],["/archives/2017/06/index.html","2c405b18bc43c3eba0c79b54ac921d48"],["/archives/2017/index.html","e60b8e0feddd5bf96de0870e0d4dbcde"],["/archives/index.html","9ed6452c49100f9b86d367323ae36857"],["/archives/page/2/index.html","c037c355c4683881f9ddc58d01b97429"],["/archives/page/3/index.html","c54953ff6d789aa0412731f5645abb68"],["/archives/page/4/index.html","6bd4b81f9004d9d1666b694c098f03fd"],["/archives/page/5/index.html","d356cc6456cc0e7e4d532e4e36bc9141"],["/blog/index.html","3585fed3724daf64abd32fb42e660549"],["/blog/page/2/index.html","a4be0e674d192e0c75dff2a74dac2447"],["/blog/page/3/index.html","f0620c85538d472cd883960358ad6e60"],["/blog/page/4/index.html","5ed4ec2dff7a0f55be1e942708baadda"],["/blog/page/5/index.html","5378ac814b6479216701169eedcfa9cd"],["/books.html","12e8a2e2b06ec7bbe67dbb850aeeeaa8"],["/css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["/css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["/css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["/css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["/css/images/banner.jpg","b3afb546511411b6c8765cf017f0d4a3"],["/css/style.css","81a3e524ddd6cb6e6b7f2cfe716254fd"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["/fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["/fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["/fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["/fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["/images/2014/Feb/259477_hi_tech_rabochij_stol_internet_oboi_super_1920x1080__www_GdeFon_ru_-1.jpg","19c9d7ebe62182001493d1e09df7295f"],["/images/2014/Feb/259477_hi_tech_rabochij_stol_internet_oboi_super_1920x1080__www_GdeFon_ru_.jpg","19c9d7ebe62182001493d1e09df7295f"],["/images/2014/Feb/Hacker_Redux_by_HashBox-1.jpg","f5bdadc4fd186443f3caac134cb92c77"],["/images/2014/Feb/Hacker_Redux_by_HashBox.jpg","f5bdadc4fd186443f3caac134cb92c77"],["/images/2014/Feb/KeServiceDescriptorTable_export.png","4c8c586934595f8f44883e5a0b1d60d9"],["/images/2014/Feb/dump.png","a049942d3ce06c22271ef1a02075b2cc"],["/images/2014/Feb/hidden_module_wow.png","3d6f61ad546d9a5138c1f46dcc832282"],["/images/2014/Feb/mainframe_by_morpheuszero_desktop_1600x1200_hd_wallpaper_694501.jpg","dcae7f332a05f65783fba6a3500d3229"],["/images/2014/Feb/me.jpg","c3f37ab8f1b9d9960b023d3dfaf15dd5"],["/images/2014/Feb/neuromancer___chiba_by_phatandy_d3ivwxv.jpg","8a58145b2d667678daf74e29e627b3be"],["/images/2014/Feb/rounded_corners-1.png","ec0ec992fe7c54c373342c9608e6ecf6"],["/images/2014/Feb/rounded_corners-2.png","2a496c997e0063229a54aa4bf64b7146"],["/images/2014/Feb/rounded_corners.png","ec0ec992fe7c54c373342c9608e6ecf6"],["/images/2014/Feb/rounded_corners_2.png","2a496c997e0063229a54aa4bf64b7146"],["/images/2014/Mar/263644_10151251066869223_1271927000_n.jpg","88a8892aedb5bd35c77d0fa82a667a6c"],["/images/2014/May/10341416_10202688874716644_8522481762679271944_n.jpg","6dcfda794acf9de17f267f2311ac6204"],["/images/2015/01/nikeband-1.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/images/2015/01/nikeband-2.jpg","fc484c2e6639d32c5e6ac50b7471d8a6"],["/images/2015/01/nikeband.jpg","fc484c2e6639d32c5e6ac50b7471d8a6"],["/images/2015/02/Huawei-Logo1422524173-1.jpg","5bf1a3027b038b438bcb8e693c4e8af7"],["/images/2015/02/Huawei-Logo1422524173.jpg","5bf1a3027b038b438bcb8e693c4e8af7"],["/images/2015/02/Schermata-2015-02-11-alle-20-46-29.png","fbeb1cb9d0914b76727861676843f0c9"],["/images/2015/02/Schermata-2015-02-11-alle-20-49-14.png","2286131db9d29148ef78b41b865e8a76"],["/images/2015/02/Schermata-2015-02-11-alle-20-51-35.png","d29329ce061d18f174d51546c303d4cf"],["/images/2015/02/Schermata-2015-02-12-alle-20-25-17.png","f96bb667751db1e3171840958079950d"],["/images/2015/02/Schermata-2015-02-20-alle-18-22-05.png","c7e8d4595811dc1b278c3813d548ce93"],["/images/2015/02/Schermata-2015-02-20-alle-18-22-34.png","8756ddac2329205c55d5dfbfa522f085"],["/images/2015/02/bc39fd77b95c22fff332e8bf38ff78b52c88da48826447d3e7d37579740f2cf7.jpg","4f7b6e18f657530b62724007c888c9c2"],["/images/2015/02/ubertooth.jpg","24873c941a37ab20f43f119ae2db2d80"],["/images/2015/04/lop-1.png","0b890caf54eee3ea7b741c1cb8670d75"],["/images/2015/04/lop.png","0b890caf54eee3ea7b741c1cb8670d75"],["/images/2015/05/116572.jpg","03c618cf4b5f5a35ccd8d5e947acef21"],["/images/2015/05/309252_10150321637414223_2120926431_n.jpg","897f3492a58dc48be434a4635e6b4fd7"],["/images/2015/05/FYG.png","504cdeaa4c94910a8c23ac17025298a5"],["/images/2015/05/download.jpg","1f54a798db23a267d2ef8f6727136a2b"],["/images/2015/05/elf.gif","27218e3d0d14bf2ffc8ec7bee4cae69b"],["/images/2015/05/fido.jpg","e5a6f6320404e4f464395df59b03e6a8"],["/images/2015/05/hopper-1.png","a7493df062e623223d1d73608931bcd3"],["/images/2015/05/hopper.png","a7493df062e623223d1d73608931bcd3"],["/images/2015/05/ida.jpg","ab83eb62bf0d7599115d11ea4aba2d9b"],["/images/2015/05/me.jpg","1e14a2a99b49ce61fb4cf2544a5d087c"],["/images/2015/05/sekSFKj1_400x400.jpg","ecc1cf74560b959fdd262ba3e73547f9"],["/images/2015/05/some.jpg","c2c6f3f47346ecd2403cdfa24d9c6940"],["/images/2015/06/LG-Watch-Urbano-9-1280x914.jpg","57f329216e3b1c5b3a4df82290544400"],["/images/2015/07/11701140_10153376221264223_471566864264972972_n-1.jpg","8a14b46b162521322d7904802bff2bc8"],["/images/2015/07/11701140_10153376221264223_471566864264972972_n.jpg","8a14b46b162521322d7904802bff2bc8"],["/images/2015/07/1O4A0617.jpg","9c426457b9ed64b98ff288f6ed3a2809"],["/images/2015/07/315993-iphone-tracking.jpg","1304d6b756fb35c1d3b27fcb485205d6"],["/images/2015/07/quantum_of_solace_james_bond_roll_parody_rick_astley_rickroll_desktop_1680x1050_wallpaper-249024-1.jpg","d69fda4306cb311cfef4e8b6420d43d5"],["/images/2015/07/quantum_of_solace_james_bond_roll_parody_rick_astley_rickroll_desktop_1680x1050_wallpaper-249024.jpg","d69fda4306cb311cfef4e8b6420d43d5"],["/images/2015/08/11886190_10153603252262053_432376360479522282_o-1.jpg","b0079e96ba5be355aaeb1c3856c5d661"],["/images/2015/08/11886190_10153603252262053_432376360479522282_o.jpg","b0079e96ba5be355aaeb1c3856c5d661"],["/images/2015/10/10418552_10152389867564223_419786986_o.jpg","d5df2712eb21fca4b40994ae9ad34dd9"],["/images/2015/10/201138_10151199203439223_1398967788_o.jpg","d7568c1da7a1d46dbeb3c7722b8e5270"],["/images/2015/10/amsterdam.jpg","d5df2712eb21fca4b40994ae9ad34dd9"],["/images/2015/10/dsploit.jpg","d7568c1da7a1d46dbeb3c7722b8e5270"],["/images/2015/12/homepage-logo.png","8527e16962d716f00170b34ca9008fdc"],["/images/2015/Jan/Schermata-2015-01-29-alle-20-53-25.png","021e1365c83e9997efba7df684885c5d"],["/images/2015/Jan/gatto_guerra.jpg","6c4097099af78bc4ba95af5a91eaeeb0"],["/images/2015/Jan/major-facepalm.jpg","2874b20f0da978901aa16d089378a88b"],["/images/2015/Jan/nikeband.jpg","fc484c2e6639d32c5e6ac50b7471d8a6"],["/images/2016/01/10686838_10152650615809223_6942842188173927627_n.jpg","1e14a2a99b49ce61fb4cf2544a5d087c"],["/images/2016/01/Meme-derp.jpg","cd157e5d182a6ed3ed6442e6515bd056"],["/images/2016/01/Schermata-2016-01-28-alle-18-08-27.png","3d49a6d3d370a29013e827a8c1abbef5"],["/images/2016/01/androidpwn-1.png","e7494030a4203b32ee4edf888178f0dd"],["/images/2016/01/avatar_ninja.png","a85820b9b1394da2b54b6cc7732ba09c"],["/images/2016/01/avatar_ninja_whitebg-1.png","7652928ad2274a610e7e06dd8b7f8fac"],["/images/2016/01/avatar_ninja_whitebg.png","7a9e6c05f96ac87be3d02dd95196ad7a"],["/images/2016/01/banner-772x250.png","e9425e9740668f1adb9085301b9b4e42"],["/images/2016/01/bettercap.png","c7fba4353fe457decc2711d9d597ffcc"],["/images/2016/01/bettercap_cloudflare.png","c1a12b4ebe750e531575e63a6add6e76"],["/images/2016/01/flexiblessl.png","887c8f4ae8c066a67cafba832143bd9c"],["/images/2016/01/hacked-1.jpg","e8d5e6c2dc0a95de4378e9ef313ea038"],["/images/2016/01/hacked.jpg","e8d5e6c2dc0a95de4378e9ef313ea038"],["/images/2016/01/hsts.png","1bee4712fe48aa09511dda9426cb0c6a"],["/images/2016/01/pagerule.png","598097317e0d6e7558251a7f1ce1dbb7"],["/images/2016/01/papel-de-parede-meme-freddie-mercury-136608662.jpg","2fead32d3acf461d5cd69f8abe7ed6ba"],["/images/2016/01/pasha.png","f4db2455939d8d6fb19ed434e5711fa2"],["/images/2016/01/photo.jpg","f0ab8f895fb84f1c90a8bb3357b3dde3"],["/images/2016/03/avatar_rounded_corners-2.png","2a496c997e0063229a54aa4bf64b7146"],["/images/2016/03/nibui-1.png","928ce99e93bbfcd1ec79dd6dde74af8d"],["/images/2016/03/nibui-2.png","7a8f663e2be9b55eb2a1fb0127092847"],["/images/2016/04/Okay-Meme-Gif-05.jpg","d37428477abf83b91881cb212b815e21"],["/images/2016/04/apktool.png","920a2a24e686e21653fce1037c712f2a"],["/images/2016/04/barcellona-1.jpg","897f3492a58dc48be434a4635e6b4fd7"],["/images/2016/04/barcellona.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/images/2016/04/challengeaccepted.jpg","32b671e0261adddb1797e556b3afada9"],["/images/2016/04/phase1.png","d16612829243a5600a0afa0bba608ff8"],["/images/2016/04/pwned.png","49a00a2a9b401e285d7a79dd92461450"],["/images/2016/04/thailand.jpg","8a14b46b162521322d7904802bff2bc8"],["/images/2016/04/victory-1.jpg","635f8fda158f44cf3607f222b8b70165"],["/images/2016/04/victory-2.jpg","daee06d692b32e1c484b6919fba1adec"],["/images/2016/04/victory.jpg","daee06d692b32e1c484b6919fba1adec"],["/images/2016/05/account.png","82feaa9db9961b831bbfe6b7c69a9e92"],["/images/2016/05/bitcoinity.png","6c762be68b5845e894eadf99b841d27b"],["/images/2016/05/bitcoins.jpg","5a69abf036afe427d0b876f51ccdf6a0"],["/images/2016/05/bitwage.png","e500f26161662d27d9419802ccb2cb6e"],["/images/2016/05/bitwala.png","bdc2bff44eca972b0696beae73509862"],["/images/2016/05/btc.png","69b693ec95ef8d8001041f501cc04fc4"],["/images/2016/05/btc_setup.png","d5938ded653caeeef9a69613f558ca67"],["/images/2016/05/giftoff.png","3c91f7478a751c1cd5b4cf7104e722eb"],["/images/2016/05/internet-privacy.jpg","13b96d89a4613ca92de8eaa76548447b"],["/images/2016/05/reddit.png","ffef08b2c72325d165cbd955a879b028"],["/images/2016/05/rome.jpg","424415609043b1a093eae330bf37ae3e"],["/images/2016/05/trezor.jpg","503467fa2a617caefbf764f5ea067b67"],["/images/2016/07/albannai.png","0c0c3e0cc390e4f7a7befa3e0d012091"],["/images/2016/07/marinaplaza.jpg","f7e0318b6403be6ac33dd9c16fb72c45"],["/images/2016/08/androidManifestList.png","9daa8d7b7a95bd4037f2244246c3e32a"],["/images/2016/08/galaxyapps.png","f063b9abdee7fe3b6500e12f0ac8ae00"],["/images/2016/08/mail.png","8d08d8fd83a5bdd3f087bfbf4544b135"],["/images/2016/08/productDetailOverview.png","b3aa0fe756f9fecf5b4ad0ccbab8cae9"],["/images/2016/09/ics.png","e20e3362514b18a7774dbe360e207c3b"],["/images/2016/09/ics_working.png","aa8cf96a6267da857b866e49c75515c5"],["/images/2016/09/ip.png","a1ce2dea06c8188f927c7220c42bda66"],["/images/2016/09/nano.jpg","98c504efd0a5dd4ae2328bac21c212d7"],["/images/2016/09/pineap.png","f81e4da9cf419765df79606a6a43a58c"],["/images/2016/09/setup.jpg","868939c62dd0f1eeda8914e318c0f99b"],["/images/2016/10/cat.jpg","cb5eafb205bc2a1914fe240e5d441cf9"],["/images/2016/10/firmware.jpg","0d43ac7e433be803a61850d9f7f00426"],["/images/2016/10/machine.png","594983fa528ad69bd3016340806d2137"],["/images/2016/10/methods.png","674ec74c150903ad14994ef273a5bda5"],["/images/2016/10/oss.jpg","6e7b8815b6a873ae9f8885cab1d522f3"],["/images/2016/10/pill.jpg","f44cc38af60d86a3f9295fa49b3d58cd"],["/images/2016/10/renzi.jpg","5b5cc1df3e0d0b0feb73c4ef3fe81e1a"],["/images/2016/10/social_life.jpg","176124393c6918796c3495b1af2dd24d"],["/images/2016/10/terminal.png","1264928f2f5e39e516441adcdcdcba7f"],["/images/2016/10/vim.png","ed8ce7be53c44b0a5d84990cee379e04"],["/images/2017/04/androidstudio.png","1c887c79a27d0190f1088a9a3b211272"],["/images/2017/04/apk_header.png","b6a70305b679d41dfa54e2e5a3104cee"],["/images/2017/04/bettercap.png","fe5d793155e92625fdba6796f283794a"],["/images/2017/04/cuckoo.png","774a94d1a7a85b8e0465badfdd1fea23"],["/images/2017/04/hopper.jpg","fd8f3cde56172f74e7b2ca217b88be74"],["/images/2017/04/ida.gif","22e0f5d99199cba41dec84f2f1348761"],["/images/2017/04/idadbg.gif","5bac5ac80934bd637096777c1d7e95d7"],["/images/2017/04/jeb.png","364867580748288af692fd53252c9589"],["/images/2017/04/joe.jpg","430c8b9720c1ad0b5ac2e30e373620ca"],["/images/2017/05/bingo.png","2bd5d26aa8c0d05949d416ba1c618be6"],["/images/2017/05/configure.png","bc7a0102c27b2ff186dc3045ade87252"],["/images/2017/05/exploit.png","d8b2c9fc1bd51d532a12e6baf9498dda"],["/images/2017/05/nas.jpg","57299060836698a23cb94ac936db41d7"],["/images/2017/05/obfuscated.png","5aa6db77891da0a11fe5653ee11d641d"],["/images/2017/05/terramaster.png","382fe7f981a8a17583f5def55321841f"],["/images/2017/07/encrypt.png","ec819de6232e053895b2716ab2663cfa"],["/images/2017/07/sni.png","aa2f7e7314445dd5193ca7a25391515b"],["/images/me.png","9f9ddd98fb429a52ec8ddbd939c19f70"],["/index.html","efd4566d5695ac940ed4e8e42ba7eb7e"],["/js/script.js","7d18beaed09b6fcd56a4a2a5cc4b885c"],["/page/2/index.html","3ae08b6a483dece346e643a87d312325"],["/page/3/index.html","b0ecb4743f43904d515a1c8bcf1d095e"],["/page/4/index.html","74575dcc0beed7879b485665e4676df1"],["/page/5/index.html","7a70c150bb8b637ae622960f313a2a24"],["/random-facts-about-me.html","14c54c6f495df66ef26eeee9cbd00fa9"],["/tags/2007/index.html","a016bb14fc3331be4a179c28608b8619"],["/tags/BLE/index.html","bc11cbba01f8110cfd11f0d0d6f25b30"],["/tags/Dex2Jar/index.html","feb8c2671696fb251ba1748eefda2176"],["/tags/Frida/index.html","40196e67413e2cbe724a20d69cbc8bfe"],["/tags/Hopper/index.html","08da7a4ec25306048d60d2b987c55762"],["/tags/IDA/index.html","238debe12c58b7170884742ccdc56003"],["/tags/JADX/index.html","f9f73b72425139f5fdad82d7ae42fffb"],["/tags/JD-GUI/index.html","0a1ff496e5c52294fa77e17da3bbc4da"],["/tags/LG-G-Watch-R/index.html","0fb8a4f87fd380e334c9702bae5cc852"],["/tags/LG-Watch-Urbane/index.html","9264b393e4cbac9e3ecfe05579bd06b6"],["/tags/ObRegisterCallbacks/index.html","a17957699d5e57ddc8338a0c5c4636d3"],["/tags/SmsManager-sendDataMessage/index.html","e6765e9cc5dee5af8ddfde0e6d4b335b"],["/tags/SmsManager/index.html","3e03aaf848cddbcd8b4094e1567521a6"],["/tags/SuperSU/index.html","ddd751a0d88113b01165a911226ab43f"],["/tags/TWRP/index.html","39e17bc82ed28c416762d316e5c6588a"],["/tags/UAE/index.html","577db42c60aef541861a222fa9f4cd28"],["/tags/Windows/index.html","2d05a46b48da62210a28004212bcbb6a"],["/tags/XDA/index.html","023bf6f0b329f7b697ee7714eae2fe2b"],["/tags/XPosed-Framework/index.html","b79aea2921df97c7b9cd2032799aea09"],["/tags/XPosed/index.html","32bbd0fa08a08060edd30761b3370d5a"],["/tags/addJavascriptInterface/index.html","02fba8937ae250bbaab264fc58b6f43e"],["/tags/adv/index.html","634c210d6e445c8afabc8d2d11f9b56a"],["/tags/adware/index.html","a682bee962009aff62e7e8c69079416e"],["/tags/afl/index.html","f408b9db6b7c0991dbd65b4770cb4766"],["/tags/american-fuzzy-lop/index.html","4fc1714854182067cdb8ee6aa5259284"],["/tags/android-wear/index.html","a2df496b3d0216bcc7adb056e700ecdf"],["/tags/android/index.html","e4d1cf2ecc20bd345a4a53cca027da97"],["/tags/api-hooking/index.html","975ffb6ded291f7cabee14bc79463bcd"],["/tags/apk/index.html","e6a4494155c835fbdeec31a5446db61d"],["/tags/apktool/index.html","36723a133195f2eb5f0ffd17cee2d59e"],["/tags/arm/index.html","0d6fc289aef6b8ecf8498d90c2dfec34"],["/tags/arp-poisoning/index.html","e711162bbeb24ad50243ccb71d6ba9df"],["/tags/arp-spoofing/index.html","088d8d0988dd01409b6cc3a9d30c7a8a"],["/tags/assembly/index.html","0bce0433fd0409a8eea1300d52e9b80e"],["/tags/authentication/index.html","0ab7bcb0ec4aaf28a3cc943b05434c26"],["/tags/backdoor/index.html","e1f1bd6558c8c3ab3d3dd09df41d9c5e"],["/tags/bank/index.html","707986091d003c1068c9d90998927e78"],["/tags/banking/index.html","818f4119cf841a850f8121ef01ccf8e7"],["/tags/banks/index.html","98ebdd8ea1e9b6b5b6f296483c9abe81"],["/tags/bettercap/index.html","afaa80c27a35e10a2cb40554ca20d4eb"],["/tags/binary-instrumentation/index.html","194e6a471f37066b0887e129a91fab20"],["/tags/binary-protocol/index.html","4b366ca69803cdb9cb7f6174529cf352"],["/tags/bitcoin/index.html","994ba52cea2e6c6bf39e0dfc42fee4ac"],["/tags/bladerf-x40/index.html","5db09e146d2e5665d365336a4e5cc560"],["/tags/bladerf/index.html","8e21e8394577043b1d16f27b520bb298"],["/tags/blockchain/index.html","112e67e32e2917bb6e310337b406bff6"],["/tags/bluetooth-low-energy/index.html","c86efbea496337c8218af65675bdb228"],["/tags/bluetooth/index.html","9f9e30194ca243e5a61c7c082d4530d8"],["/tags/bot/index.html","7cdff448a5119799fdf611bbbe00e505"],["/tags/bots/index.html","ba2b1d2fcd3cef615ccf8ef30073bc6d"],["/tags/browser/index.html","1ec6da2345d47fa1bf62413c19c70f67"],["/tags/btc/index.html","e08ce3b41c7c665a799363b9b8dda249"],["/tags/bts/index.html","5609ba519b6ff8887b719b6379632b23"],["/tags/bullying/index.html","01d97ba30b6356e2aa0eecd17201fea0"],["/tags/bypass/index.html","a17e379a4e6553f6a1307b7288582313"],["/tags/c/index.html","7aed066890223802c8003cc1b35bb635"],["/tags/censorship/index.html","7f90d0d8f02091a86f7effba1178ae4a"],["/tags/changelog/index.html","e3135242e4800f1c4620c725edc30263"],["/tags/chrome/index.html","ddf2c00f568b63914e8e1ce8afbddc0d"],["/tags/clang/index.html","25212e0513da240dc331214a8597c760"],["/tags/clipboard-grabber/index.html","0307cdc683076f89e8685fe0004c949c"],["/tags/clipboard/index.html","d77c6e9f414bcc21b4d537729b895a51"],["/tags/cloudflare/index.html","78c52196a44e65a160faa90152e34696"],["/tags/coffee/index.html","b8e46b0bd976a4270fc78710b6c6fe59"],["/tags/command/index.html","f53b12a49aa47bc021c7218310bf0a81"],["/tags/consigli/index.html","f65ec27471b26cb4e558155041074706"],["/tags/corporate/index.html","db1dc5d57df76cc21e82932cc304bb14"],["/tags/cr0/index.html","2d738b864d8d0b3030e6610db97479ff"],["/tags/craig-wright/index.html","be30f450a89d5f04f5b328e5fcc06781"],["/tags/crash/index.html","337a912cfc953ec429130a3ed650a288"],["/tags/cryptography/index.html","87a4e07b651499b4141b9d0b342160be"],["/tags/cyberbullying/index.html","99e0b0b7c0452e42d9eb469f7fa16e97"],["/tags/dalvik/index.html","ea8c1c3d1b1b17416606469cb3402530"],["/tags/delivery-report/index.html","084260b588ea6f273ba26cb37b40715b"],["/tags/dex/index.html","2a5bd782b607c22fa8270c920aa095d3"],["/tags/disassembler/index.html","eceb4d620ff930e17830223eb26a3763"],["/tags/disclosure/index.html","a6f3289fa523177775d789bb578c6d96"],["/tags/distorm/index.html","66247df7c06e26fe4153b446a96d714b"],["/tags/double-direct/index.html","63cd671f44b272b98dc895999d2df4b1"],["/tags/doubledirect/index.html","8d45f20fbf6049e530159d8020cfac41"],["/tags/driver/index.html","cbe376006e80a5fe97130f3c23c76135"],["/tags/dsploit/index.html","d07db5e10190e7770f9d8e75dbd11996"],["/tags/e355/index.html","139df0a85a1062dd932ff649c54b3ca7"],["/tags/e587/index.html","2da0e57db6ce853fb946cfd071c6d328"],["/tags/elf-command-injection/index.html","e560037f5bd1bf87f577c25b0bd5a716"],["/tags/elf-relocation/index.html","105e6efcd7f0215ce1be50825e62624a"],["/tags/elf/index.html","15de79c16d3b6f62172c21fa4aba62af"],["/tags/elf32/index.html","36729439a8187872fcdd17e18235a398"],["/tags/emulation/index.html","d53eae277234c1b3501e23f67732045e"],["/tags/emulator/index.html","945646b338b5aea329f0cb07f3878e4d"],["/tags/encryption/index.html","ae20122732117475f0a2b191c48ca070"],["/tags/end-to-end-encryption/index.html","5bc56a5bd1b6613061e09ec6554e2929"],["/tags/ettercap/index.html","f5ba8c2304bdb293bdeea2c2d4ff9ab8"],["/tags/evasion/index.html","0ef15787b4094fe0703e16d1e5505fd7"],["/tags/evilbts/index.html","803d8d9daa8f4a3acacdf0c362a972c7"],["/tags/exploit/index.html","c0b133d3acc399294d046efeeb32c64b"],["/tags/extension/index.html","aba453c40d17e79acf0801cd2bd49ca2"],["/tags/fido/index.html","eccf86efc30e3e861dbe6ce73770f047"],["/tags/firewall/index.html","b6f305cc3cf9589a29fee4c72afb9656"],["/tags/flexible-ssl/index.html","e3199ff1717b78bcea7655ec57309567"],["/tags/freedom-of-speech/index.html","59400a07185741774e18eb941ad09c28"],["/tags/freedom/index.html","db96f25abbb26d23a9f30e3ac0d4edd6"],["/tags/fuelband/index.html","510e1b49d278b0c926b9cd1f7765034f"],["/tags/functions/index.html","cfd1eb81744502a875a6b2979a8ef8be"],["/tags/fuzzer/index.html","13bbdbb3535183e07850614da7ce9062"],["/tags/fuzzing/index.html","78bb204625017f68262223ede8131dce"],["/tags/galaxy/index.html","0a7ec63dd0e5662b8ea146077dbffe03"],["/tags/gcc/index.html","7ceffa3fc2cba48111fad10dc72958f5"],["/tags/gem/index.html","b4161d904d4db55df874ebbc7314e809"],["/tags/generator/index.html","f2bd4253afc225056437b003f95eac86"],["/tags/government/index.html","665423b5f0ee727063094776798648ce"],["/tags/gpl/index.html","864a8778fe16186d9252be4018d2671f"],["/tags/gplv3/index.html","0adfd0b9b855baf3102d23ef65842f40"],["/tags/gsm-hijacking/index.html","692ae0a703a206ad8d0e127d9cabfcd9"],["/tags/gsm-intercept/index.html","412d5d8a8af6e74b1c15d023861e41b2"],["/tags/gsm-sniffing/index.html","38e3c0691d41a8672f365f52e0400968"],["/tags/gsm/index.html","2bd61598fae06b77da95361180318588"],["/tags/guide/index.html","0863e113ef8e74dbb6ab0fbae5e5b13b"],["/tags/hack/index.html","c8507e9eb80dea00c86d7cb5925596c0"],["/tags/hacking/index.html","8b6f6685538269454ca6a6791ea3959e"],["/tags/hooking/index.html","eff1a852a485a57b09e2a1893c69f758"],["/tags/hopper/index.html","04460ba1d31eb89ea63af98c25829e45"],["/tags/howto/index.html","daeaae4f356b2c7c8d2e10117bed25cb"],["/tags/hsts/index.html","eb7a463facd5068bc1e4e05b16b4f02c"],["/tags/http/index.html","b1b0623b3fc036c43a3a4e10a48eff5e"],["/tags/https/index.html","a3cda1e8962d1d68c1c597ef8f33baec"],["/tags/huawei/index.html","59abe115ead2ab27a28de7239bcd0d8f"],["/tags/icmp-redirect/index.html","e0ec3ffe274d8cfe3f50152c468ce157"],["/tags/icmp-spoofing/index.html","e1e8fa15b5a8c492131d64e85dc5b45b"],["/tags/icmp/index.html","342e6c6a2ec3524388adcf5f2dccac36"],["/tags/ida/index.html","870e2b8e4972548a7ddcea145b7bcd75"],["/tags/identity/index.html","f6c9ce43aa222375df56e25bb56762eb"],["/tags/illegal/index.html","7d2ec51b06cbeba362dac291f68d7ddc"],["/tags/informatica/index.html","89219f4c32b07bd2b6f0481a59838dac"],["/tags/inject/index.html","1884606082e106ee1ec2bfdeefa187e4"],["/tags/injection/index.html","0fcf3dfae2cfd3d63eb5b8d2adef3d77"],["/tags/inline-assembly/index.html","4a1e579de28286536b6da1d1c138c30a"],["/tags/inline/index.html","316a8103c04ab432c5fd23c97dbf82f5"],["/tags/installation/index.html","1b138028c7a38d82de02343753e41589"],["/tags/int-2e/index.html","a9c4470f9718bca8fa7558021d7d1066"],["/tags/intel/index.html","f5bb927da14a2aa15c7be43f72ee3d6f"],["/tags/internet-connection-sharing/index.html","d4305fc68101d86a2617259ecd2fd77f"],["/tags/interrupt/index.html","c18260015cd71234c59f5ed51112a6ef"],["/tags/italian/index.html","ca2ce7dc8545b6b73e52a1c8b9bf5c46"],["/tags/italiano/index.html","cd01b8223ea3dc1decf3752c661299fc"],["/tags/job/index.html","eb59763ba2511d8e0ed668d505a23d34"],["/tags/kernel/index.html","051fb45764a60e83651cd06bb9c2565f"],["/tags/lavoro/index.html","3002f79aba07ae668631d9d59ee961db"],["/tags/law/index.html","aaea669b47549161cdad94e8475b414a"],["/tags/lawful-interception/index.html","ce8c4f462b4b6174b2050cce24eba450"],["/tags/lcamtuf/index.html","70f7d3bd9acbf19b3efe7fe4dff5b5d4"],["/tags/ldr/index.html","1f4c503110d1eab3307cab2754653a21"],["/tags/libpe/index.html","8111b98692497a096d15bbf6e410e1ae"],["/tags/library-injection/index.html","2812567bf2100e3b23e7cec9d11331e3"],["/tags/library/index.html","177bb976e3d8a58eb138a3da93849891"],["/tags/license/index.html","a0582e2c1c34656ec7809a9c527a4824"],["/tags/life/index.html","5baa1d270373ca701b54b8d524883bfb"],["/tags/linux/index.html","085721fc3a9b1bd41ecf718fb3b2decd"],["/tags/llvm/index.html","fd715f8675b9586b4ba2b6b24d0deef5"],["/tags/loader/index.html","d810af4767313c519724eccbca5fa33d"],["/tags/malware/index.html","15ad779d9ca3103d97dae452006cb129"],["/tags/man-in-the-middle/index.html","e64b51f65736f97bc54d5c2df32e6842"],["/tags/mavericks/index.html","a250cb3fc4d04a8f710da5c0e1b7695a"],["/tags/memory-injection/index.html","60ecbbb65617eadedb7eec25af6288d4"],["/tags/metasploit/index.html","9124412a8ea7639313fb879ffcc1bfe2"],["/tags/microsoft/index.html","ae3cd49ad16f7f7c7bc2dab48a216c4a"],["/tags/mitm/index.html","681e14b864298c0b7b6a3c754e135cdc"],["/tags/mms/index.html","1506c70e0a96655e02687ba668e7d83f"],["/tags/mobile/index.html","89bd55bc5a4f382b920124d95615daf4"],["/tags/modem/index.html","5ebb263380db25501237dabe32c439e9"],["/tags/modems/index.html","ee6fe715f33463753c47c3e77580e849"],["/tags/naked-functions/index.html","6a1133225bf8b2482b044059a6b79239"],["/tags/nas/index.html","f4f20b318f141e917f03eec65df25381"],["/tags/nerd/index.html","d3c61fd6e820d0a13cd5029d88eb633a"],["/tags/nike-fuelband-se/index.html","9b026de8d5e651a94e3ddfc425c2408f"],["/tags/nike-fuelband/index.html","f8bc52faec42646f3129e3cae17d404f"],["/tags/nike/index.html","42480779fd893f19bb586d950446a58c"],["/tags/nikeband/index.html","ec668d78ada2df6922496552d4af0d13"],["/tags/ntdll/index.html","b0fdea69bdd9179ecc08793018c5eefa"],["/tags/ntoskrnl/index.html","9706a4ce97961121ab3e85696a576bcf"],["/tags/obcallbacks/index.html","3b8b1aeaa390bc8c2c04944a2ecb6033"],["/tags/obfuscation/index.html","e3152c236198e75eed56c05ee73ae37f"],["/tags/objdump/index.html","6aae6fabcf7b46e857f9290f23b0daf5"],["/tags/omnitel/index.html","b4620946c30a1bf8e9f9287d39bf6981"],["/tags/open-source/index.html","d2bda20c40eb1ca5b724fcc2e0ac4038"],["/tags/open/index.html","b1d28f2a29343c1fd035461830b7205b"],["/tags/openbank/index.html","5015279a30ad9389fb842b2e1b34c69e"],["/tags/openbts/index.html","b2dd5558baacd540777397335b0b27ea"],["/tags/osmobb/index.html","d5641bc955ffff15b102a81aa37f3751"],["/tags/osmobts/index.html","2bad1d4f91991adcf3d1e9276a656e0a"],["/tags/oss/index.html","d4da83683f782641ccf072c284226620"],["/tags/osx/index.html","407e3e2f38f296e8891e497f358baea0"],["/tags/parsing/index.html","c673a5e83b3149634e5013f403df0740"],["/tags/past/index.html","f7c51d21af5c72d187a19c5f00c3e838"],["/tags/pastebin/index.html","73085ba826d9d2281f0ce5239ac79d8e"],["/tags/pastebot/index.html","19c1b08cdf307ca3c048e34b45163215"],["/tags/pdu/index.html","763e785077dccb52856aad4b7f14e277"],["/tags/pe/index.html","167fb27ab9106f1c33707fd4d89a91b4"],["/tags/pe32/index.html","ed8fa8889dc8ba9f886dc9d86976a613"],["/tags/peb/index.html","abe032767a5504540bb7445eb9ceadfc"],["/tags/permission-bypass/index.html","963bc3d8935322d25fc53632c8074fb7"],["/tags/phishing/index.html","1f6ff2c791f00d3a4c4169dd07d96aa0"],["/tags/pineapple-nano/index.html","32b75e412ceddcb6339b696d1ebb3bc0"],["/tags/ping-sms/index.html","8e13a04d9a46033c164f6478dc63990d"],["/tags/play-store/index.html","149d5f6652436aca943c76a451bc1b95"],["/tags/plt/index.html","68d376c6bfdb95ed1a78060e44c4c1c7"],["/tags/poc/index.html","2d1b3b2e8c4fb9f8985f73e2c79234ba"],["/tags/portable-executable/index.html","534b815a4ddd0e807f7b9ee1782ce726"],["/tags/porting/index.html","6429afc625dde87d57f86fc99a09fd0e"],["/tags/privacy/index.html","38a8adabdd0ddf60f1d6777bb5b4cdd7"],["/tags/process-environment-block/index.html","b4b7b1205acbd7ddb74f8e503f839345"],["/tags/process-protection/index.html","0652bf380db2428a7b0928d527ea6568"],["/tags/professione/index.html","1adf23232fdd030ed3d18ed40b6c70d5"],["/tags/progress/index.html","9638c0dc9d1ccb576ad389404930b9de"],["/tags/project-generator/index.html","8bb1a9ba6089dbe10580066099385a81"],["/tags/project/index.html","72f839cd842eee264f9d6611a0c30f35"],["/tags/projects/index.html","f913e8355b953c84c2c580d7d6a55b8a"],["/tags/protocol/index.html","e6d1ff479dc95731856576e9aa104e2c"],["/tags/proxy-module/index.html","9dad935bdafbdc1cbdfb21ca6556b356"],["/tags/proxy/index.html","b086331fb7cd8400bb581f062629f8f3"],["/tags/ptrace/index.html","0b50765c4ae0781a5f623c565b717ddb"],["/tags/python/index.html","ef160f8ac6433c63b0f4ab9edfb9f7db"],["/tags/qemu/index.html","aa183dcfa373ea0561d7948aa45a6010"],["/tags/rce/index.html","2c1e3af093b430665a854fba406a172e"],["/tags/re/index.html","57fe3a8ec9b00db644a42a46a99c8a3f"],["/tags/reboot/index.html","24aadf9575bc3e3f59115ed619e27278"],["/tags/registers/index.html","b4def6dce46f494384370e0855514962"],["/tags/relocation-table/index.html","1edf977d0ce3ed29e2f048f2e25f8b26"],["/tags/relocation/index.html","e63578ec056f3598c5dfc129ba75e826"],["/tags/remote-injection/index.html","758c3ae5439aba81b878de0e8e3ab657"],["/tags/researcher/index.html","8ce1fb9d8f9d79cf9ecd6d1a4037ccf2"],["/tags/reversed/index.html","9609ac3dbe859ce899e97a549ddd6b31"],["/tags/reversing/index.html","1a0c365ad0741be1984aae63857d0d90"],["/tags/rf/index.html","48f95729d5e66423f2b67b61c7167e00"],["/tags/rogue-bts/index.html","3f5ff50aa3e13f5429b3be715dcbf297"],["/tags/root/index.html","708af1263cea56e16b6c92967a13edfe"],["/tags/router/index.html","f26549ba1d83841f17d8e58ad09cd8fb"],["/tags/routines/index.html","99b832d230ff0d0255f784def760be23"],["/tags/routing-table/index.html","0b4241dbbd5d03666b4ca716bf86050c"],["/tags/routing/index.html","c70cd45c5a2eb39fac2e25823e0f4dfe"],["/tags/rubertooth/index.html","04a23e163df63e3ed7a2f4310396ef70"],["/tags/ruby/index.html","c33f23c5c8642f9b2e8991d742037b2c"],["/tags/samsung-galaxy-apps/index.html","53594cebe74d095928119b8066e16b4d"],["/tags/samsung/index.html","2df237f744a4c35b854329565adbc14c"],["/tags/satoshi-nakamoto/index.html","2e79203c07e937a0648befb95932f3db"],["/tags/security/index.html","5ed79000af5fa5a457905b4370f16c07"],["/tags/self-protection/index.html","f556d97ab31d5667379ed9d2fe14995b"],["/tags/sendDataMessage/index.html","382889b44b3f9e213b5e4b4c1e87a3a5"],["/tags/server-name-indication/index.html","71913d56506bd70685ceb89450602cf2"],["/tags/session-hijacking/index.html","56657b971a15fe851448f6788b72124e"],["/tags/setup/index.html","00bcae4404048ef3abbf25f192494ce7"],["/tags/sicurezza-informatica/index.html","827ed70662031e7766671b39281433ce"],["/tags/smali/index.html","5a1b7bdfe21cc1b4770ebeff87404fb4"],["/tags/smarter-coffee/index.html","d781ec3fcdae4c44843284599b7f2661"],["/tags/sms/index.html","478c0e957df47a482e726c02504c40a3"],["/tags/sni/index.html","387d0edd70fe158e459ebb18e0a345d6"],["/tags/social/index.html","90778f293ed0c82538a125ad5d9cfb34"],["/tags/sparkle/index.html","41b04353ab3cdacc1409731a523abb94"],["/tags/spoofer/index.html","04984c0c412ce562c0e021cd442fb74e"],["/tags/spoofing/index.html","7f40a80d55ed1608d7c511cb86fde3e9"],["/tags/ssdt/index.html","886669bcb98de43c2b104a05d15e4dfc"],["/tags/ssl-stripping/index.html","cca6247e0f155a9ef51e7b9d8c63ed03"],["/tags/ssl/index.html","f7ee47cbf987e635c3828591b3778165"],["/tags/sslstrip/index.html","3aef717eb45686bcc4c50d14827c0077"],["/tags/sslstripping/index.html","ff50737871158c74ff934cf8e3a096df"],["/tags/static-analysis/index.html","8821f12eb13c04d43b7c1a4d386a0f72"],["/tags/store/index.html","15e8af52a2167ae72756536ef553105f"],["/tags/strtab/index.html","b79895ef53c708d710b4688566ba5ef9"],["/tags/su/index.html","812627fba3d44f44c74ec59ba86716b6"],["/tags/subroutines/index.html","8815f8cc1ae655a7d156c1b9cd8e1f59"],["/tags/superfish/index.html","dfd39cdffaa2aebd8ddb6003a4a18080"],["/tags/symtab/index.html","aef000997334bb25b8f4e4d6428797e1"],["/tags/syscall/index.html","35982783d800392fdfc902d71855b899"],["/tags/sysenter/index.html","451ffb9829873edfcf8073d569c171b5"],["/tags/telco/index.html","13b0844b01bfcdaba444de4e60fe4104"],["/tags/telcos/index.html","66bf61062fc7391e154e5862c461a806"],["/tags/template/index.html","00c032baba2392f5f7335ae77249e08b"],["/tags/terramaster/index.html","3df8bfd2b6d113a450ad9b682053b915"],["/tags/the-guardian/index.html","1a79d2789aa32865c6c1f496a39cd7a7"],["/tags/tib/index.html","80d80afa04f82acdfadae419bdb038fb"],["/tags/tls/index.html","2162ff2d0bd8d062f32b62892bdc4e85"],["/tags/transparent-proxy/index.html","3469fff0dae613e1c0f973f139fcf6c3"],["/tags/trezor/index.html","14647f411875c85e73c5eaa112e966d1"],["/tags/trick/index.html","29f5bf1961c0b59c1c03c7ebb6c519b2"],["/tags/ubertooth/index.html","337cc9220e9a30453c5be1383fd1e0e2"],["/tags/united-arab-emirates/index.html","123f87e00f492376997e4cbc11d19127"],["/tags/update/index.html","6d626446ef116e0c7cb0edc25457378c"],["/tags/vita/index.html","2b195830cff0e6a6e8e21503a8939353"],["/tags/vm/index.html","8010f3521942baf15bd737a143dfd06f"],["/tags/vmware/index.html","e68ceb44b33c8a9be2d59e2c52e25dbf"],["/tags/vodafone/index.html","26aac47f1c87874fbdd2cea16c9cfbfe"],["/tags/vulnerability/index.html","e9bad698985d9e9f9a96e5345f06b2da"],["/tags/wallet/index.html","9a539db3a94e93c49aac225016013aaa"],["/tags/wap-push-notifications/index.html","30f8d38113fa54aa241d8f14df8656c9"],["/tags/wap-push/index.html","a4582676a1d624f74473c805efa2bf3b"],["/tags/wap/index.html","ce40e7d377756b7c6884c56810e60071"],["/tags/wear/index.html","0c502147ab25220c7d8ad9c3bca4f87b"],["/tags/whatsapp/index.html","fac3181b96aeaccdd164e9cd8d22fef1"],["/tags/wifi-pentesting/index.html","fa6cd8648602138f2bb69cac5f47281c"],["/tags/wifi-pineapple/index.html","be9a8a652f0cb60a4d256a2d7dd1980b"],["/tags/win32/index.html","eb20f4621bfdd827f61cd4a8f5dfc6ce"],["/tags/windows-internals/index.html","4e08fc86f793ac9022c6d99c6002200b"],["/tags/windows/index.html","6338d462c7d858554f209a9ef3f55b2b"],["/tags/wow64/index.html","e28621815dd1092f229a636f04cf797a"],["/tags/x-notifier/index.html","f38b86174a55ee8550c456f09c57d5ba"],["/tags/xnotifier/index.html","b19d1933c00a2ee150ec046eceaadd6d"],["/tags/xpub/index.html","4e81088d545d8e5a274bd4df12c47add"],["/tags/yate/index.html","a70c29a7c4046226e658f7df74daabf0"],["/tags/yatebts/index.html","ff39106d4ab45a145d6e1afe4f898b8f"],["/tags/yosemite/index.html","33d76afa849d53f1a78bbb69a93d26a0"],["/tags/zimperium/index.html","ee54c404072d8e369d24ffa42c6548fe"]];
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







