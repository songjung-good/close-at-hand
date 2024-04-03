package dev.rainbowmirror.closeathand.interfaces;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;

@RestController
public class ApkController {

    private static final String APK_DIRECTORY = "classpath:/apk";

    @GetMapping("/download")
    public ResponseEntity<byte[]> downloadApk() throws IOException {
        ClassPathResource resource = new ClassPathResource("apk/v1/app-release.apk");
        byte[] apkBytes = Files.readAllBytes(resource.getFile().toPath());

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header("Content-Disposition", "attachment; filename=app-release.apk")
                .body(apkBytes);
    }
}
