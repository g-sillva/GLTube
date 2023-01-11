package com.gabriel.gltube.follower;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/follow")
public class FollowerController {

    private final FollowerService followerService;

    @PostMapping(params = { "u_id", "t_id" })
    void followUser(@RequestParam long u_id, @RequestParam long t_id) {
        followerService.handleFollowUser(u_id, t_id);
    }
}
