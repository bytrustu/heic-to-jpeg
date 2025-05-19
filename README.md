# HEIC to JPEG Converter

This repository provides a small Node.js script to convert all `.heic` files in a given folder to JPEG images.
The extension check is case-insensitive, so files like `example.HEIC` are also converted.

## 사용법 (Usage)

1. 필요한 패키지를 설치합니다.
   ```bash
   npm install
   ```

   이 단계에서 변환에 필요한 `heic-convert` 모듈이 함께 설치됩니다.
2. 변환하고자 하는 폴더 경로를 지정하여 스크립트를 실행합니다.
   ```bash
   node convert.js /path/to/heic-folder
   ```

스크립트는 지정된 폴더 내의 모든 `.heic` 파일을 찾아 `convert` 하위 폴더에 같은 이름의 `.jpg` 파일로 저장합니다.
