let CACHE_NAME = "investar-new-cache";

let urlsToCache = [
  "/"
]

self.addEventListener("install",function(event){
  //open cache
  //cache files
  //confirm whether required files are cached or not
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache){
        return cache.addAll(urlsToCache);
      })
    )
  
})