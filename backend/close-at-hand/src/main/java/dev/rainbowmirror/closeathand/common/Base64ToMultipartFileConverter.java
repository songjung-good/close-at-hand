package dev.rainbowmirror.closeathand.common;

import org.apache.commons.codec.binary.Base64;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;

public class Base64ToMultipartFileConverter {

    public static MultipartFile convert(String base64ImageString) throws IOException {
        if (StringUtils.isEmpty(base64ImageString)) {
            throw new IllegalArgumentException("Base64 image string cannot be empty or null");
        }

        // Base64 문자열 디코딩
        byte[] imageBytes = Base64.decodeBase64(base64ImageString);

        // MultipartFile 생성
        return new Base64MultipartFile(imageBytes);
    }

    static class Base64MultipartFile implements MultipartFile {

        private final byte[] content;
        private final String name;
        private final String originalFilename;
        private final String contentType;

        public Base64MultipartFile(byte[] content) {
            this.content = content;
            this.name = "file";
            this.originalFilename = "file.jpg"; // 디폴트 파일명 설정
            this.contentType = "image/jpeg"; // 이미지 타입에 따라 적절한 Content-Type 설정
        }

        @Override
        public String getName() {
            return this.name;
        }

        @Override
        public String getOriginalFilename() {
            return this.originalFilename;
        }

        @Override
        public String getContentType() {
            return this.contentType;
        }

        @Override
        public boolean isEmpty() {
            return this.content == null || this.content.length == 0;
        }

        @Override
        public long getSize() {
            return this.content.length;
        }

        @Override
        public byte[] getBytes() throws IOException {
            return this.content;
        }

        @Override
        public InputStream getInputStream() throws IOException {
            return new ByteArrayInputStream(this.content);
        }

        @Override
        public void transferTo(File dest) throws IOException, IllegalStateException {
            try (FileOutputStream outputStream = new FileOutputStream(dest)) {
                outputStream.write(this.content);
            }
        }
    }
}
