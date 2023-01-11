package com.gabriel.gltube.follower;

import com.gabriel.gltube.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FollowerRepository extends JpaRepository<Follower, Long> {
    Follower findByUserAndTarget(User user, User target);
}
