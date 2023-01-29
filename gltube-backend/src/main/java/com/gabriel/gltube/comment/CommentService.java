package com.gabriel.gltube.comment;

import com.gabriel.gltube.user.User;
import com.gabriel.gltube.user.UserRepository;
import com.gabriel.gltube.video.Video;
import com.gabriel.gltube.video.VideoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final VideoRepository videoRepository;

    boolean addCommentToVideo(Long videoId, Comment comment) {
        Optional<Video> v = videoRepository.findById(videoId);
        Optional<User> u = userRepository.findById(comment.getAuthor().getId());

        if (v.isPresent() && u.isPresent()) {
            comment.setAuthor(u.get());
            v.get().addComment(comment);

            commentRepository.save(comment);
            return true;
        }
        return false;
    }
}
