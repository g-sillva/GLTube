package com.gabriel.gltube.comment;

import com.gabriel.gltube.user.User;
import com.gabriel.gltube.video.Video;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Table(name = "comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate date = LocalDate.now();
    private int likes;
    private String content;

    @ManyToOne
    private Video video;

    @OneToMany
    private List<Comment> replies = new ArrayList<>();

    @ManyToOne
    private User author;
}
