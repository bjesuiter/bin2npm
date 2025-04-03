
  import { decodeBase64 } from "jsr:@std/encoding@~1.0.8";
  
  const bundledObject = {
    files:{
      ".gitignore":{
      content:decodeBase64("bm9kZV9tb2R1bGVzCg=="),
      extension: "gitignore"
    },
    "index.mjs":{
      content:decodeBase64("dGhyb3cgbmV3IEVycm9yKAoJIlRoaXMgcGFja2FnZSBzaG91bGRuJ3QgYmUgcmVxdWlyZWQgb3IgaW1wb3J0ZWQgYnkgb3RoZXIgcGFja2FnZXMuIFRoaXMgcGFja2FnZSBvbmx5IGV4cG9zZXMgb25lIG9yIG1vcmUgQ0xJIHRvb2xzLiIKKTsK"),
      extension: "mjs"
    },
    "bin/entrypoint.mjs":{
      content:decodeBase64("IyEvdXNyL2Jpbi9lbnYgbm9kZQoKaW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMvcHJvbWlzZXMnOwppbXBvcnQge2pvaW59IGZyb20gJ25vZGU6cGF0aCc7CmltcG9ydCB7ZmlsZVVSTFRvUGF0aH0gZnJvbSAnbm9kZTp1cmwnOwppbXBvcnQge2V4ZWNhfSBmcm9tICdleGVjYSc7Ci8vIGltcG9ydCB7c3Bhd25TeW5jfSBmcm9tICdub2RlOmNoaWxkX3Byb2Nlc3MnOwoKLy8gX19kaXJuYW1lIHBvaW50cyB0byBkaXN0L2JpbiwgYmVjYXVzZSBpdCB3aWxsIGJlIGNhbGN1bGF0ZWQgYXMgdGhlIGJhc2VwYXRoIGZvciBkaXN0L2Jpbi9lbnRyeXBvaW50Lm1qcwpjb25zdCBfX2Rpcm5hbWUgPSBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4nLCBpbXBvcnQubWV0YS51cmwpKTsKCihhc3luYyBmdW5jdGlvbiAoKSB7CgkvLyByZWFkIGV4ZWN1dGFibGVzCgljb25zdCBleGVjdXRhYmxlc0pTT04gPSBhd2FpdCBmcy5yZWFkRmlsZShqb2luKF9fZGlybmFtZSwgJ2V4ZWN1dGFibGVzLmpzb24nKSk7Cgljb25zdCBleGVjdXRhYmxlcyA9IEpTT04ucGFyc2UoZXhlY3V0YWJsZXNKU09OKTsKCgkvLyBleGVjdXRhYmxlIHdpbGwgYmUgdW5kZWZpbmVkIHdoZW4gdGhpcyBwcm9wZXJ0eSBrZXkgY291bGQgbm90IGJlIGZvdW5kIDopCgljb25zdCBleGVjdXRhYmxlID0gZXhlY3V0YWJsZXNbYCR7cHJvY2Vzcy5wbGF0Zm9ybX0tJHtwcm9jZXNzLmFyY2h9YF07CgoJLy8gVG9kbzogRXh0ZW5kIGxhdGVyIHdpdGggaXNzdWUgaGFuZGxpbmcgc3lzdGVtIQoJLy8gY29uc3QgaXNzdWVzVVJMID0gImh0dHBzOi8vZ2l0aHViLmNvbS9jb2RlbW9udW1lbnQvZGVuby1iaW4tb2ZmbGluZS9pc3N1ZXMiOwoKCWlmICghZXhlY3V0YWJsZSkgewoJCWNvbnN0IHN1cHBvcnRlZFBsYXRmb3JtcyA9IE9iamVjdC5rZXlzKGV4ZWN1dGFibGVzKS5qb2luKCcsICcpOwoJCXRocm93IG5ldyBFcnJvcigKCQkJYFlvdXIgcGxhdGZvcm0gKCR7cHJvY2Vzcy5wbGF0Zm9ybX0sICR7cHJvY2Vzcy5hcmNofSkgaXMgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQhCiAgICAgIFBsYXRmb3JtcyBzdXBwb3J0ZWQ6ICR7c3VwcG9ydGVkUGxhdGZvcm1zfS4KICAgICAgWW91IGNvdWxkIGdvIHRvIHRoZSBnaXRodWIgcmVwbyBvZiB0aGUgbWFpbnRhaW5lciBvZiB0aGlzIHBhY2thZ2UgYW5kIGZpbGUgYW4gaXNzdWUuYAoJCQkvLyArIGBZb3UgY2FuIHJhaXNlIGFuIGlzc3VlIGhlcmUgYW5kIGFzayBmb3Igc3VwcG9ydDogJHtpc3N1ZXNVUkx9YAoJCSk7Cgl9CgoJY29uc3QgZXhlY3V0YWJsZVBhdGggPSBqb2luKF9fZGlybmFtZSwgZXhlY3V0YWJsZS5wYXRoKTsKCglhd2FpdCBleGVjYShleGVjdXRhYmxlUGF0aCwgcHJvY2Vzcy5hcmd2LnNsaWNlKDIpLCB7CgkJc3RkaW86ICdpbmhlcml0JywKCX0pLmNhdGNoKHByb2Nlc3NSZXN1bHQgPT4gewoJCS8vIHdlIGNhbiBpbnNwZWN0IGVycm9ybmVvdXMgcHJvY2VzcyByZXN1bHRzIGhlcmUKCQljb25zb2xlLmVycm9yKHByb2Nlc3NSZXN1bHQpOwoJfSk7CgoJLy8gaWYgKCFmcy5leGlzdHNTeW5jKGV4ZWN1dGFibGVQYXRoKSkKCS8vIAl0aHJvdyBuZXcgRXJyb3IoYEV4ZWN1dGFibGUgbm90IGZvdW5kIGF0ICR7ZXhlY3V0YWJsZVBhdGh9LgoJLy8gICBTb21ldGhpbmcgaXMgd3Jvbmcgd2l0aCB0aGlzIGluc3RhbGwuCgkvLyAgIFBsZWFzZSByYWlzZSBhbiBpc3N1ZSBhdCB0aGUgZ2l0aHViIHJlcG8gb2YgdGhlIG1haW50YWluZXIgb2YgdGhpcyBwYWNrYWdlLmApOwoKCS8vIGNvbnN0IHAgPSBzcGF3blN5bmMoZXhlY3V0YWJsZVBhdGgsIHByb2Nlc3MuYXJndi5zbGljZSgyKSwgewoJLy8gCWN3ZDogcHJvY2Vzcy5jd2QoKSwKCS8vIAlzdGRpbzogJ2luaGVyaXQnLAoJLy8gCXNoZWxsOiBmYWxzZSwKCS8vIH0pOwoKCS8vIGlmIChwLmVycm9yKSB0aHJvdyBuZXcgRXJyb3IocC5lcnJvcik7Cn0pKCk7Cg=="),
      extension: "mjs"
    }
    }
  } 
  export default bundledObject;

