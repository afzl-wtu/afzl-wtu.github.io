'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2554d2c4d12930ea17fb320b372e9791",
".git/config": "90efe2093e0f7c54bcaf5f0efd215707",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c50dfac7fa0c6ddd296e20d9fdb7e33a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d300cb34e76c93d4646165341b14ce00",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fe77a448e8398616642a9d529cb50e89",
".git/logs/refs/heads/main": "fe77a448e8398616642a9d529cb50e89",
".git/logs/refs/remotes/origin/HEAD": "f3f03f6e6a9509f55068abbb9b776ee9",
".git/logs/refs/remotes/origin/main": "dd638cd96f335e2b03dafefed1c610cf",
".git/objects/0d/fd6c03093d3c69938cc5c85ef33ffaace72ccc": "bd6335e0fcb942168a0d0850693116a5",
".git/objects/10/206dc0ef3b760013d5916bc879553cb6ebf042": "2cc8bbd043461c85a19be49e40848acf",
".git/objects/17/0b9d132e480b7a3d4d88edb1e742eabae6ecc4": "a85da66c4989aedcc988398edfde3bda",
".git/objects/19/38455167ef11c289ee9afcb225a48b1e146d90": "b0fe5221505b777ec969f8d14f56de0a",
".git/objects/23/083b37073a6d0718a3730d1ef026e2381032d7": "5931131638c416bdee837da910bde2f1",
".git/objects/45/5a8df812b34aa1cd5a25e739e765903d542c9e": "def71e4a6f47289d128a526c094d12c8",
".git/objects/47/1ea221dc464fee79987cdd2ba663e149219c39": "6b40a0d37b42026a72d7f1fc36fd91aa",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/52/1f23c69b3e07a3f0eee54d9d1f97c97c8f6d9f": "408e0281096365424ce6a1c32d14e387",
".git/objects/63/56eeeb52439e2a42d15d51f22424d72fd0944b": "02dfb206a25b97a17c7e600f625079f6",
".git/objects/65/c422f003247f57d8db44e9954d65f03f33314a": "b6c93029259daf1fc933dfe6098fb382",
".git/objects/69/422c963da12012f75d29752643d9d3d4b2e590": "ab9ec965a863232d50b2ac857488a109",
".git/objects/6a/fff6f5c327d2424418f99bf8a48e00a2348c5b": "eaa62c90602c789c300f37248135d59e",
".git/objects/7a/27d3fc6490ac0e768050837da76aec5490b4a8": "5a75f3735721021ed92d7a32173e9e1e",
".git/objects/86/30d92633c696c609da2221709ba5e050d27ff7": "5517cbc50e9eb4e0c4aa8f700159ae9d",
".git/objects/91/137a3e6398957eb6c980fdbd08af246f9e7e40": "d349a666ac23df71b10986cda0f2a521",
".git/objects/92/e691782f7c84ec543bb525e220e45cc39b49db": "ea79802c8b6c14bb71c8999fb0f3e27f",
".git/objects/98/b122b37f73a1c0e27e5ed1a923781183a5afb4": "06cafcdae862cff1135baaa1ac1aa143",
".git/objects/b3/9593ce5807af621fae3799b34315b820824697": "50a345e7614cbcbfd7c26b260a471e9e",
".git/objects/c0/64d57a1ba98b9cc28496cc03d670d8b02dbef6": "387cbf103ecdcd871f46c7d983eac022",
".git/objects/cb/c64d49c4552f8a1b4661a1622e8b5bb6ac454e": "d108019e94d9abbb148bb936c61917d1",
".git/objects/cf/98f0d890a40fc146b75c9b35f0e780127de9de": "bf7887ab85de33af680afa213212d41e",
".git/objects/d7/ac5b273743bca68ce155888d90a2570454c9b8": "72c67141d976da1fab270092c2443287",
".git/objects/eb/cb5b2f67bc6d86b23984bde98bba15514b63c3": "bb7f0d2ab23e1611307da7d98b1d882b",
".git/objects/f5/f0c7cdbd4832888bd97b0caf1421d0dfd610be": "1e2071776606089f7394a8f1aa700c06",
".git/objects/pack/pack-ffc4611a7446e495e24ee388098a17ade5d92659.idx": "d218b2810f8441b80f4eadfb067aa1d9",
".git/objects/pack/pack-ffc4611a7446e495e24ee388098a17ade5d92659.pack": "9591c1e82eb26360a11f04491a47d4ca",
".git/ORIG_HEAD": "a4d031afc3d141ab2e0dfab128cc3faf",
".git/packed-refs": "3e1bb7bee8ae2b43ba050dbc5d64f64d",
".git/refs/heads/main": "3751b2657470a37071cffa9fdd3fadd4",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3751b2657470a37071cffa9fdd3fadd4",
"assets/AssetManifest.json": "88366b6282e578bae25c824a058132fc",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/photos/black-white.png": "a5bf29dedb9d8b0f16eb38b183444348",
"assets/assets/photos/colored.png": "d83ba40b4ff5de2bb0057a759f9985a5",
"assets/assets/photos/mobile.png": "1ec6937b113a6cbebb39c8a07368cb38",
"assets/assets/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/projects/covid.png": "27c600501d335324e8fce4c5d6c22b76",
"assets/assets/projects/covidB.png": "1884ac58a9de5d81e995f1e46e4b7398",
"assets/assets/projects/earbender.png": "64099d76f6c7df0fac39c222293fd473",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/hereiam.png": "cbb5a77a5e19e1224080dcaf0e3b5407",
"assets/assets/projects/hereiamB.png": "16ee68a57fbf0eae5c50e1b8376064df",
"assets/assets/projects/java.png": "62be9fb6e1d7166e9cbeeed913096752",
"assets/assets/projects/medkit.png": "915431d4f438d5bc7c642fed8dbfb419",
"assets/assets/projects/medkitB.png": "058d00d54c3ee8a953442d0cf3bfb866",
"assets/assets/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"assets/assets/projects/quran.png": "55e8a0c928bc192f682ca0e61cb61ce3",
"assets/assets/projects/quranB.png": "3cf070457b64cf93d11ad2073bff88e2",
"assets/assets/projects/snackbar.png": "426d7d3320b4207468e1dec6322b3b08",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/work/cui.png": "b5608c4d79345ca955f990a24a454554",
"assets/assets/work/dsc.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/work/flutterIsl.png": "aaaeddae163a2e71636d9d494e16f2db",
"assets/assets/work/st.png": "0957bd1682c5a518247a1844656c0f7e",
"assets/data.json": "0745d81242b8bb174ef94301613e2225",
"assets/FontManifest.json": "6d7bf0d7c489d6724ff0c728629cbd1b",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/NOTICES": "a5afd549756e7cd713082030479fdeeb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"CNAME": "146f56bff8bdf76e5f6ded82c20d12e1",
"favicon.png": "61b493df9635f221d909421e8769acb0",
"icons/Icon-192.png": "002516a4b23f153b7ac2928347c377b1",
"icons/Icon-512.png": "84780d2dfe97536ad1b68213079cc78b",
"index.html": "86fb609a76a13732a870a2172aa2b6d1",
"/": "86fb609a76a13732a870a2172aa2b6d1",
"main.dart.js": "09af6c4f592bf8a985fe6ac35f9f69e8",
"manifest.json": "fb052efd80449fb4233d4a78c6b3d582",
"version.json": "a29e8b22a08aa0274b027931eec216c4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
