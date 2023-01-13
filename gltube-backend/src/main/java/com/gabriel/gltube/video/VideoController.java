package com.gabriel.gltube.video;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/videos")
@AllArgsConstructor
public class VideoController {

    private final VideoService videoService;

    // GET ALL
    @GetMapping("")
    ResponseEntity<?> getAllVideos() {
        return new ResponseEntity<>(videoService.getAllVideos(), HttpStatus.OK);
    }

    // GET VIDEO BY HIS ID
    @GetMapping(params = { "id" })
    ResponseEntity<?> getVideoById(@RequestParam long id) {
        Video v = videoService.getVideoById(id);
        if (v == null) return new ResponseEntity<>("Video with ID '" + id + "' not found.", HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(v, HttpStatus.OK);
    }

    // GET VIDEOS BY AUTHOR ID
    @RequestMapping(method = RequestMethod.GET,value = "/author", params = {"id"})
    ResponseEntity<?> getVideosByAuthorId(@RequestParam long id) {
        List<Video> videos = videoService.getVideosByAuthorId(id);
        if (videos == null) return new ResponseEntity<>("User with ID '" + id + "' not found.", HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(videos, HttpStatus.OK);
    }

    // GET VIDEOS BY AUTHOR USERNAME
    @RequestMapping(method = RequestMethod.GET, value = "/author", params = {"username"})
    ResponseEntity<?> getVideosByAuthorUsername(@RequestParam String username) {
        List<Video> videos = videoService.getVideosByAuthorUsername(username);
        if (videos == null) return new ResponseEntity<>("User with username '" + username + "' not found.", HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(videos, HttpStatus.OK);
    }

    // GET VIDEOS BY AUTHOR EMAIL
    @RequestMapping(method = RequestMethod.GET, value = "/author", params = {"email"})
    ResponseEntity<?> getVideosByAuthorEmail(@RequestParam String email) {
        List<Video> videos = videoService.getVideosByAuthorEmail(email);
        if (videos == null) return new ResponseEntity<>("User with email '" + email + "' not found.", HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(videos, HttpStatus.OK);
    }

    // ADD VIDEO
    @RequestMapping(method = RequestMethod.POST, value = "")
    ResponseEntity<?> handleVideoUpload(@RequestParam MultipartFile file) {
        return null;
    }

}
