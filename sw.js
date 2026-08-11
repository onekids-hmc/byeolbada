// 별바다 - 홈 화면 설치를 위한 최소 서비스 워커 (캐시하지 않음: 항상 최신 버전 사용)
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
