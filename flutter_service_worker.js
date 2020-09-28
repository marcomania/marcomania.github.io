'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1feffad66875ae381568d2cb480a3127",
".git/config": "ff561ecec8f34f38fe8d75fc858ae02d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "abbd44a324c16187552678d6de710509",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "c6041d5ec40821960966a0a82a82a426",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0da72a42351649dae13e92224c29c2e2",
".git/logs/refs/heads/master": "32859955d3c70071641d77e6dca7e5d0",
".git/logs/refs/remotes/origin/master": "e39d9e9f392fbda01c6336c218736a3a",
".git/objects/0a/f838e3eb9cc46fa712b422d5bd3b50f2f6bf27": "a017cee27ededc38ed7e5e381125dc04",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/13/885d8527437fc475188478e7793e57d6e81c28": "560e70c7cbd8eb967e1bf31d2e7e69d8",
".git/objects/13/fa69ec3bf7c83d0f56b7d6ad0475a786bafc17": "4ca763ae76040affba292f647ea5b1c2",
".git/objects/15/1cd41437650b6b93604686e8432d9c86b40f53": "8bf7be1b131a0ff4772db84d34ccdd68",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1c/5236751f5ff29847cd3a2c0db96c279dc39be4": "9fab8c74c4040b05acf11f8275e95d97",
".git/objects/1c/9e258c76f5ac49e6bd0409fe0b7bbd4e533b0e": "d4b7692220e9aa4172d42f72468f068c",
".git/objects/1d/2c752bbe2084abd569ff4403df1735e008513d": "c1fedc6ca29e573197ec9427fa75e98b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/926f1a03cccd33ecceca301bda76df9e8cf00b": "ba9222c395c698d405484173d98bb835",
".git/objects/23/aa6ccbe21f70d6e1be242735ceff0222d2382c": "7e4cd924b87d6e969836db99af652367",
".git/objects/24/a8f9f140facad9a832fe4cc1ffb86d7412c00c": "51d24cb56b43425f7b049b6080e58573",
".git/objects/27/c283a8922f4519890b681ed7b01c1efd80cf36": "76acd683a4fb44965835cd6f9bc2ecff",
".git/objects/27/d7727f73f2f8e9f996ed13bc50fe7784412cc4": "c78ae68077e0cd2013047d199c86f857",
".git/objects/28/4d7e2c1cf6d92de952fbf8ef17848b7769f54a": "1eb34adad6de2f7351322d671b713e14",
".git/objects/29/c7475d6118ce9e60bc7e4e5516525d0450d2de": "cf762d4d4ee625f5bb540aff5716b450",
".git/objects/2a/37d52c50810572d44bad35f5804e3804e71f21": "905f746387efd5bad88e140f94ef7014",
".git/objects/2b/4531ef418388beb8b1b3bbc64a78c0ad31ad79": "26dd2c98730c316a0c6d5719c9c0298a",
".git/objects/39/5a91168db93041df83992e58ef38326fc3b68f": "579d0a0847589d1877ad712cb94ce154",
".git/objects/3e/f9e4db7aefcedb7ee4df1b9bc2b09708e84d04": "d247b8b7aa6b31e5fab40fa0cd6e8d6c",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/46/7842e966eb0c637dc0ccc6a57680e72198ec89": "25977ea90dcee3f6c5205bae1994edf2",
".git/objects/48/5cd1321c7429b06168f26030cc3f7195ac9b3b": "9616d5656254fea53f4361ed570c8477",
".git/objects/49/6b6a8dbe19a932080229726046d980f782267a": "f17f8ddcc790b8f9a9ab66638ab8ca0a",
".git/objects/49/d8c93e0061238709c89fedddf618ff43c1a294": "342293fbe31f89a9991cd14f6fa33bdb",
".git/objects/4c/3fa296c739d95ee86045cdef7a23e4e718f270": "9d510cead2fde6678ad3878b76ff5ab4",
".git/objects/4c/b1703057ab6e99b15c6d4c731a76c149b30a00": "afc474b4c8813330aee303de3aa07e0d",
".git/objects/50/0c8db76f1739ad3553f26d4b5331839c2d68d6": "df67fc903ee2830b3a68fdddc06819f1",
".git/objects/50/acc5eb8eeb5284e989e19eb4242d4f4891eb7a": "be7f9b78f0b4986190f52678739270fc",
".git/objects/51/2ba080edbb6d56a3d407994cc18775d42b7d3b": "d215d8d79a4bdece063c2a58363237de",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/56/e182bdcb222caaad0ecfa602b94e21cb35b2ff": "bb5be8fce991b2c99b1493dd426aa084",
".git/objects/5b/9a92075ff701846663e846e82507c6ee707110": "32e1214d5ef1f5ada269bb72c1cf2271",
".git/objects/60/d3d3c0fe28ab0b20fffbaa7695fe3519186a3e": "4d04bd56f4192fc0566b30a6c48f827a",
".git/objects/61/711b22aceb4dc7cb4dd86a3f143edfbbb15d0a": "cbdae05513b8dda65a5d0192efd36c3f",
".git/objects/62/6824bbe2a4e4b4d546f42f2abf8746e94e9cf9": "3faae6f46782dbf1faebc9a4f219b771",
".git/objects/62/e1fd9f675e1ba9fc683548eef76fce6778902b": "2fa1693dcedb6aa9cec7d01e85f11cc7",
".git/objects/62/fcef677e005fe4478075347e0551693840eb0c": "4389da8fa68a76b34e6d77298b0818da",
".git/objects/64/080d4c6075a55e9b32835aa6ae21751729e36e": "6a079112a545af78eae97c1d2a706d7b",
".git/objects/64/8aab088f6f1007581563ab72bdf1fe89ccf935": "0d77fffbf4076c3fc5a288c10663063a",
".git/objects/6a/65d5caada5f909cfcd64ae756163eafd7f5346": "69c0b216bceccc4e9024d94cf4d5b24c",
".git/objects/6c/a9506d475b1156858358124f23cd6bedd3ae16": "cc15fb9bf4ea4fd68db66e41b8559413",
".git/objects/6f/66ae7d9fae8152e16487d332142ad657d78264": "237c6438498e4df6da91e8e83fd7cf7d",
".git/objects/70/c682f3da2825be52eed5592122f75b5339055a": "78cb239ca11722ca592ea43c3eda911a",
".git/objects/71/589a8d1dd6b5e32db935fc34d1a92f60317d5b": "7747e58e4f0ca5b6df6ef3ade48bb4de",
".git/objects/71/bca81616552a46712d7ce5b9995f57cf4e835b": "6a0b29a660c9ba42a647555b21148f60",
".git/objects/74/337824e42a1dd3907d0dbc03900ff977ae6532": "17dacb3b18271f00152658955886871e",
".git/objects/74/b32b8c3d837f2f45e960b06e788746da819de3": "203231479554938355b9001c6e9680c1",
".git/objects/77/ed5f6f9755edb34d7059d2990875e288fe6faf": "931098b8cf9e8a5fb2430355bff831fa",
".git/objects/78/80d6381927753a9934a29cd97f17ad69e35957": "b9ed5f17b430ee55c615368e9029d364",
".git/objects/79/20f667df9f268bd2186c790583a78f0ebb8e2e": "2504de402f5bebded395e486e5db08f0",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/80/dbf1cdb43bbbde784fa971a3fafa1f835da853": "4b87f318470d4b45a1ae5449cc35612a",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/76dc37bb41da6c94b9a85a94c214ed1a487a01": "6253a46ed17c677fe992aa7f1721c08f",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/85/24f23cb401aee77ce806775f0848905a35eb68": "c4b03c6f2d6be240e0ea98d9d03b5eb0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/608c994735349c2544186050452c268e7e8dfc": "b4161cd391ea4b3a8286beb879c6578b",
".git/objects/93/76aa222e6d5ff869bd11d06bcd826611fefdf2": "ffabaf67fa5335462b426aa25bba0e22",
".git/objects/93/cf3e66108edddc5b4b8efca47fc416eb178281": "b1c3bc0b5ca60916dbabb77e53e48e13",
".git/objects/95/4736a74b57f2609cb853c0d19e1dbdedac6dad": "8d6b3113cf7835b0a166020d0d7fb4ac",
".git/objects/95/74c12d9252f1695fbbf853f90a969900e4b065": "2eedae27f43b578d1cb98983db5dd714",
".git/objects/95/ee45450ae073951c11f7c41c7ba69355aa84d9": "6234c843de908d2bb9dfe30289323474",
".git/objects/98/dcc53d2bf768aa28e30e92e1c98181c60ee76e": "ae436a71f7e6c78927705888b3438629",
".git/objects/9a/e5870f810fd22e00f7b6853931d48e1021de57": "de4cdfb41b73b36938734a03a75b2428",
".git/objects/9f/1d7bb59c0cc78fb8c391c97e22c7dd61eb6c4f": "fd6431c228b1c7b4c3b6732cdf87ffbb",
".git/objects/9f/d4d37857613f5218d396e705e7079ced9b8f77": "bc8282cbc522256b67cbf3d273752b15",
".git/objects/a1/119aef137e187c3bdb5eb92b7df0ee2c70553d": "3cd23413f35ddf46777eb68cac80d13b",
".git/objects/a1/b026b0cacca22d74114496d039b424d9c1c336": "77ff81751f99ac889a5fd707ca4fd690",
".git/objects/a8/dec83ac5fad0c08480538ee9727ade5757317c": "460b3dc0d775a80617db626518c063fe",
".git/objects/ab/16a7a9caf6fba7d97e1b32598e350b06a72b9b": "863532ed2f12bf620a17d0d1183fd5ba",
".git/objects/b0/3225ce28986df47d9cd34d5d6e0801e02b330c": "535f20866a7d6eebc6144f7266307eb3",
".git/objects/b1/4c5486ea53eec7634b3a5c097b711695173e01": "0ab8834f768df6774341df355348a2d3",
".git/objects/b1/913b25b79b8664ac483e47d1c3a37b0fb311c8": "b700b5b27c4a339ccc6f15d99ab740cd",
".git/objects/b6/f66ebead2ccde9083b0bc277f1ee8c134aa0e1": "1e640093db0a12ade1271875532bef36",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5ba4c82020f52bbcd52159e3e57c0c6e645467": "06684e067a8de3b740b2d5f45bf5b009",
".git/objects/c2/c377d03b82e1a001481749a7a540d6a723f6ba": "9fdfc6bc159700d72efeac4e6c18a2d9",
".git/objects/c3/b49fec6d02ab7ed4cf118571780bd9e4fd08ed": "29fa2caba0c387ef9053771e665027a2",
".git/objects/c5/c53581315eca7dbd68299369feb3be9f62373a": "96e1855ed45ba5960dcd6737c324b912",
".git/objects/ca/cc265872579b98da5138d4132e8d7b0f330bdd": "5bbfd6e4d9488ded69e0ff831a1a73ea",
".git/objects/d0/71341f769427a1bac9466014004a3d58dcf207": "0f7319547a5fcc9d57c3f862662fccc9",
".git/objects/dc/31c6d149227aa82e6a7c33a091d11f32a20667": "db95b2f13106d3498927e99e40cff08d",
".git/objects/dd/44b2b793c7eec242ea7adc00c39ec3baf51d94": "19d809c441a8416bc20927535dd23f81",
".git/objects/e2/ae013ace91272187df6e2b0e534b33a8654f44": "8467890e1d2c21a324b4f81387a4b6fb",
".git/objects/e6/95b5f759eba6ab9cfba21c5ed27edea601ff5e": "964055b276179fb1a9e7846de4059482",
".git/objects/f0/7e7d9126d5725084584b5c88b6d067d57bafe8": "c30fa25e248f31b71b2f76d70f3aaa3c",
".git/objects/f2/c58e740eb9c377a619df83a0d3c4aa1a478ba2": "2fd9c5377f59993b924f4e0381e66900",
".git/objects/f5/6bcea9b521a9c83c8553f9844efcd72da75b9f": "af0da976706e0b430b03f774ef407525",
".git/objects/f5/df03f3a6cb6ed2fed21e3dad608b73403ccc60": "e45176fc7535df973508dbf0a563710a",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/fc/87e5739c7e3a9d3682063cf5ecf4d5775eccde": "b5e464230aeb1a4eb5fb3cc934bb4db0",
".git/objects/fd/726e0afc24f2bd545db2245152bade344bbcd6": "c2d1a4aa5460f4fc642a23a121aa3e3c",
".git/objects/ff/ba7fa7f48f8d1b5809792bf0da1570b4ed536f": "53c6cc4183897939b9a9388c0b8256e8",
".git/ORIG_HEAD": "5847583ca1074b5407ba8db7c5d02851",
".git/refs/heads/master": "b48cc6d9a8045c542635957cb9a2345b",
".git/refs/remotes/origin/master": "b48cc6d9a8045c542635957cb9a2345b",
"assets/AssetManifest.json": "5fd398e663907f999226a92cfcf0ae19",
"assets/assets/bg.png": "7a41307c7f7dc0e2a1999028b217e082",
"assets/assets/logounmsm.png": "c99d8827168fc9d17f30e4e5d4894dca",
"assets/assets/portada_fisi.jpg": "26d6d82e40ee51252027330255219d2b",
"assets/assets/sigap.png": "df0b8e8485170b6cf76248ea7eea3541",
"assets/assets/sigap_logo.png": "0d599cadaa8a986ecb99339c4bef7002",
"assets/assets/tipGrado03.png": "a8375f1b75c1037ba0109ea27ee84022",
"assets/assets/tipGrado05.png": "e0b6dd6ced479b0c6b9778cdc6bd8815",
"assets/assets/tipGrado06.png": "4abde1a5cd6916f116e0b7916abeacd3",
"assets/assets/tipoConcepto1.png": "a8375f1b75c1037ba0109ea27ee84022",
"assets/assets/tipoConcepto2.png": "e0b6dd6ced479b0c6b9778cdc6bd8815",
"assets/assets/tipoConcepto3.png": "4abde1a5cd6916f116e0b7916abeacd3",
"assets/assets/tipoConcepto4.png": "91108898b0eaa5af8ed406b684ee134d",
"assets/assets/tipoConcepto5.png": "cc632129c54e3be5444592d939df333f",
"assets/assets/types_files/FileType.png": "54eb6ec9a704d6b00def42331813f4ac",
"assets/assets/types_files/type_pdf.png": "5043478821fd6b0edad21633b5dd7c8d",
"assets/assets/usuario.png": "a91056ab1ad3c4da24594028a022b635",
"assets/assets/white_logo.png": "ede35ee697365daf48f56f5fe31c7cd6",
"assets/FontManifest.json": "cee2e44ae214499465baeb2c6bd2d32b",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "446fad686eeb3457db0708807e518abd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/line_awesome_flutter/lib/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/load_toast/assets/cancel.png": "d0668370caa00c902733cd1d5c3bbfeb",
"assets/packages/load_toast/assets/success.png": "f40e1aa6a91ef1d66f96f88970412111",
"assets/packages/load_toast/assets/warning.png": "49c603bcfd3726d65478161dfbf167d5",
"debug.log": "720981889e3675aa162f50272c37c079",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "44a64c0b3bc9966f3101ca93f4087f97",
"/": "44a64c0b3bc9966f3101ca93f4087f97",
"main.dart.js": "08385c0a0eb6ee2a7230c4169d123ab7",
"manifest.json": "8e793f7b100004e97e94dfa6436b3f4f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
