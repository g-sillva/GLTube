package com.gabriel.gltube.user;

import com.gabriel.gltube.comment.Comment;
import com.gabriel.gltube.follower.Follower;
import com.gabriel.gltube.role.Role;
import com.gabriel.gltube.social_media.SocialMedia;
import com.gabriel.gltube.video.Video;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String first_name;
    private String last_name;
    private String username;

    @Column(unique = true)
    private String email;
    private String password;
    private String about;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
    private List<Follower> followers = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "author")
    private List<Video> videos = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "author")
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY)
    private List<SocialMedia> socialMedia = new ArrayList<>();

    //////////////////////////////////////////

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
