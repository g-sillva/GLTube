package com.gabriel.gltube.follower;

import com.gabriel.gltube.user.User;
import com.gabriel.gltube.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class FollowerService {

    private final FollowerRepository followerRepository;
    private final UserRepository userRepository;

    public void handleFollowUser(long user_id, long target_id) {
        User cur_user = userRepository.findById(user_id).get();
        User tar_user = userRepository.findById(target_id).get();

        Follower curFollower = followerRepository.findByUserAndTarget(cur_user, tar_user);

        if (curFollower == null) {
            Follower follower = Follower.builder()
                    .user(cur_user)
                    .target(tar_user)
                    .build();
            followerRepository.save(follower);
        } else {
            followerRepository.delete(curFollower);
        }
    }
}
