package com.gabriel.gltube.video;

import com.gabriel.gltube.user.User;
import com.gabriel.gltube.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class VideoService {

    private final VideoRepository videoRepository;
    private final UserRepository userRepository;

    List<Video> getAllVideos() {
        return videoRepository.findAll();
    }

    Video getVideoById(long id) {
        return videoRepository.findById(id).orElse(null);
    }

    List<Video> getVideosByAuthorId(long id) {
        Optional<User> u = userRepository.findById(id);
        return u.map(videoRepository::findByAuthor).orElse(null);
    }

    List<Video> getVideosByAuthorUsername(String username) {
        Optional<User> u = userRepository.findByUsername(username);
        return u.map(videoRepository::findByAuthor).orElse(null);
    }

    List<Video> getVideosByAuthorEmail(String email) {
        Optional<User> u = userRepository.findByEmail(email);
        return u.map(videoRepository::findByAuthor).orElse(null);
    }

    Video uploadVideo(MultipartFile file, String title, String description, long author_id) throws IOException {
        Video v = new Video();
        User u = userRepository.findById(author_id).get();

        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        if (fileName.contains("..")) throw new RuntimeException("ERROR: Invalid file name: " + fileName);

        v.setTitle(title);
        v.setDescription(description);
        v.setDate(LocalDate.now());
        v.setLikes(0);
        v.setViews(0);
        v.setVideo_file(file.getBytes());
        v.setAuthor(u);
        return videoRepository.save(v);
    }
}
