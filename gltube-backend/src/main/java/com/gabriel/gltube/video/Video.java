package com.gabriel.gltube.video;

import com.gabriel.gltube.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.NonNull;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "videos")
public class Video {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NonNull
    private String title;
    private String description;
    private byte[] thumbnail_file;

    @NonNull
    private byte[] video_file;

    @NonNull
    private Date date;
    private int views;
    private int likes;

    @NonNull
    @ManyToOne(fetch = FetchType.LAZY)
    private User author;
}
