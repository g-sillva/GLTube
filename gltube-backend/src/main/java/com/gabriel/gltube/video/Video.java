package com.gabriel.gltube.video;

import com.gabriel.gltube.comment.Comment;
import com.gabriel.gltube.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.NonNull;

import java.sql.Clob;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "videos")
public class Video {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    private String title;
    private String description;

    @Lob
    private byte[] thumbnail_file;

    @Lob
    private byte[] video_file;

    private LocalDate date = LocalDate.now();
    private int views;
    private int likes;
    private List<String> tags;
    private int length;

    @OneToMany(mappedBy = "video")
    private List<Comment> comments = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    private User author;

    public void addComment(Comment comment) {
        comment.setVideo(this);
        this.comments.add(comment);
    }
}
