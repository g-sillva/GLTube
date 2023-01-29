package com.gabriel.gltube.comment;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/comment")
@AllArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @PostMapping(value = "/publish", params = { "videoId" })
    ResponseEntity<?> addComment(@RequestParam Long videoId, @RequestBody Comment comment) {
        if (commentService.addCommentToVideo(videoId, comment)) {
            return new ResponseEntity<>("Comment published!", HttpStatus.OK);
        }
        return new ResponseEntity<>("Comment error!", HttpStatus.EXPECTATION_FAILED);
    }

}
