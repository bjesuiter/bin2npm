import { decode } from "https://deno.land/std@0.97.0/encoding/base64.ts";

const bundledObject = {
  files:{
    ".gitignore":{
      content:decode("bm9kZV9tb2R1bGVzCg=="),
      extension: "gitignore"
    },
    "index.mjs":{
      content:decode("dGhyb3cgbmV3IEVycm9yKAogICJUaGlzIG1vZHVsZSBzaG91bGRuJ3QgYmUgcmVxdWlyZWQgb3IgaW1wb3J0ZWQgYnkgb3RoZXIgbW9kdWxlcy4gVXNlIHRoaXMgbW9kdWxlIGFzIGEgQ0xJLiIKKTsK"),
      extension: "mjs"
    },
    "bin/entrypoint.mjs":{
      content:decode("IyEvdXNyL2Jpbi9lbnYgbm9kZQoKaW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMvcHJvbWlzZXMnOwppbXBvcnQge2pvaW59IGZyb20gJ25vZGU6cGF0aCc7CmltcG9ydCB7ZmlsZVVSTFRvUGF0aH0gZnJvbSAnbm9kZTp1cmwnOwppbXBvcnQge2V4ZWNhfSBmcm9tICdleGVjYSc7Ci8vIGltcG9ydCB7c3Bhd25TeW5jfSBmcm9tICdub2RlOmNoaWxkX3Byb2Nlc3MnOwoKLy8gX19kaXJuYW1lIHBvaW50cyB0byBkaXN0L2JpbiwgYmVjYXVzZSBpdCB3aWxsIGJlIGNhbGN1bGF0ZWQgYXMgdGhlIGJhc2VwYXRoIGZvciBkaXN0L2Jpbi9lbnRyeXBvaW50Lm1qcwpjb25zdCBfX2Rpcm5hbWUgPSBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4nLCBpbXBvcnQubWV0YS51cmwpKTsKCihhc3luYyBmdW5jdGlvbiAoKSB7CgkvLyByZWFkIGV4ZWN1dGFibGVzCgljb25zdCBleGVjdXRhYmxlc0pTT04gPSBhd2FpdCBmcy5yZWFkRmlsZShqb2luKF9fZGlybmFtZSwgJ2V4ZWN1dGFibGVzLmpzb24nKSk7Cgljb25zdCBleGVjdXRhYmxlcyA9IEpTT04ucGFyc2UoZXhlY3V0YWJsZXNKU09OKTsKCgkvLyBleGVjdXRhYmxlIHdpbGwgYmUgdW5kZWZpbmVkIHdoZW4gdGhpcyBwcm9wZXJ0eSBrZXkgY291bGQgbm90IGJlIGZvdW5kIDopCgljb25zdCBleGVjdXRhYmxlID0gZXhlY3V0YWJsZXNbYCR7cHJvY2Vzcy5wbGF0Zm9ybX0tJHtwcm9jZXNzLmFyY2h9YF07CgoJLy8gVG9kbzogRXh0ZW5kIGxhdGVyIHdpdGggaXNzdWUgaGFuZGxpbmcgc3lzdGVtIQoJLy8gY29uc3QgaXNzdWVzVVJMID0gImh0dHBzOi8vZ2l0aHViLmNvbS9jb2RlbW9udW1lbnQvZGVuby1iaW4tb2ZmbGluZS9pc3N1ZXMiOwoKCWlmICghZXhlY3V0YWJsZSkgewoJCWNvbnN0IHN1cHBvcnRlZFBsYXRmb3JtcyA9IE9iamVjdC5rZXlzKGV4ZWN1dGFibGVzKS5qb2luKCcsICcpOwoJCXRocm93IG5ldyBFcnJvcigKCQkJYFlvdXIgcGxhdGZvcm0gKCR7cHJvY2Vzcy5wbGF0Zm9ybX0sICR7cHJvY2Vzcy5hcmNofSkgaXMgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQhCiAgICAgIFBsYXRmb3JtcyBzdXBwb3J0ZWQ6ICR7c3VwcG9ydGVkUGxhdGZvcm1zfS4KICAgICAgWW91IGNvdWxkIGdvIHRvIHRoZSBnaXRodWIgcmVwbyBvZiB0aGUgbWFpbnRhaW5lciBvZiB0aGlzIHBhY2thZ2UgYW5kIGZpbGUgYW4gaXNzdWUuYAoJCQkvLyArIGBZb3UgY2FuIHJhaXNlIGFuIGlzc3VlIGhlcmUgYW5kIGFzayBmb3Igc3VwcG9ydDogJHtpc3N1ZXNVUkx9YAoJCSk7Cgl9CgoJY29uc3QgZXhlY3V0YWJsZVBhdGggPSBqb2luKF9fZGlybmFtZSwgZXhlY3V0YWJsZS5wYXRoKTsKCglhd2FpdCBleGVjYShleGVjdXRhYmxlUGF0aCwgcHJvY2Vzcy5hcmd2LnNsaWNlKDIpLCB7CgkJc3RkaW86ICdpbmhlcml0JywKCX0pLmNhdGNoKHByb2Nlc3NSZXN1bHQgPT4gewoJCS8vIHdlIGNhbiBpbnNwZWN0IGVycm9ybmVvdXMgcHJvY2VzcyByZXN1bHRzIGhlcmUKCX0pOwoKCS8vIGlmICghZnMuZXhpc3RzU3luYyhleGVjdXRhYmxlUGF0aCkpCgkvLyAJdGhyb3cgbmV3IEVycm9yKGBFeGVjdXRhYmxlIG5vdCBmb3VuZCBhdCAke2V4ZWN1dGFibGVQYXRofS4KCS8vICAgU29tZXRoaW5nIGlzIHdyb25nIHdpdGggdGhpcyBpbnN0YWxsLgoJLy8gICBQbGVhc2UgcmFpc2UgYW4gaXNzdWUgYXQgdGhlIGdpdGh1YiByZXBvIG9mIHRoZSBtYWludGFpbmVyIG9mIHRoaXMgcGFja2FnZS5gKTsKCgkvLyBjb25zdCBwID0gc3Bhd25TeW5jKGV4ZWN1dGFibGVQYXRoLCBwcm9jZXNzLmFyZ3Yuc2xpY2UoMiksIHsKCS8vIAljd2Q6IHByb2Nlc3MuY3dkKCksCgkvLyAJc3RkaW86ICdpbmhlcml0JywKCS8vIAlzaGVsbDogZmFsc2UsCgkvLyB9KTsKCgkvLyBpZiAocC5lcnJvcikgdGhyb3cgbmV3IEVycm9yKHAuZXJyb3IpOwp9KSgpOwo="),
      extension: "mjs"
    }
  }
} 

export default bundledObject