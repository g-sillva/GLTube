package com.gabriel.gltube.video;

import com.gabriel.gltube.user.User;
import com.gabriel.gltube.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

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
}
