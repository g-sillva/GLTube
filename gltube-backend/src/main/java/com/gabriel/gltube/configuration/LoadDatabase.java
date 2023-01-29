package com.gabriel.gltube.configuration;

import com.gabriel.gltube.role.ERole;
import com.gabriel.gltube.role.Role;
import com.gabriel.gltube.role.RoleRepository;
import com.gabriel.gltube.social_media.SocialMedia;
import com.gabriel.gltube.social_media.SocialMediaRepository;
import com.gabriel.gltube.user.User;
import com.gabriel.gltube.user.UserRepository;
import com.gabriel.gltube.video.Video;
import com.gabriel.gltube.video.VideoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.util.*;

@Configuration
public class LoadDatabase {

    @Autowired
    PasswordEncoder passwordEncoder;

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository,
                                   RoleRepository roleRepository,
                                   SocialMediaRepository socialMediaRepository,
                                   VideoRepository videoRepository) {
        Role user_role = new Role(1, ERole.ROLE_USER);
        Role admin_role = new Role(2, ERole.ROLE_ADMIN);

        SocialMedia twitter = new SocialMedia(1L, "Twitter", "fa-brands fa-twitter", "https://twitter.com");
        SocialMedia instagram = new SocialMedia(2L, "Instagram", "fa-brands fa-instagram", "https://www.instagram.com/");
        SocialMedia portfolio = new SocialMedia(3L, "Portfolio", "fa-solid fa-link", "/");

        User user1 = new User(1L,
                "Gabriel",
                "Silva",
                "g-sillva",
                "sslg@gmail.com",
                passwordEncoder.encode("1234"),
                "About here",
                new ArrayList<>(List.of()),
                new ArrayList<>(List.of()),
                new ArrayList<>(List.of(twitter, instagram)),
                new HashSet<>(List.of(user_role)));

        User user2 = new User(2L,
                "João",
                "Vitor",
                "vitorjj1",
                "vitor.j10@gmail.com",
                passwordEncoder.encode("1234"),
                "About here",
                new ArrayList<>(List.of()),
                new ArrayList<>(List.of()),
                new ArrayList<>(List.of(portfolio)),
                new HashSet<>(List.of(user_role, admin_role)));

        Video video1 = new Video(1L,
                "Title from video 1",
                "",
                new byte[]{},
                new byte[]{},
                LocalDate.now(),
                0,
                0,
                new ArrayList<>(List.of("Comedy", "Random")),
                139,
                new ArrayList<>(List.of()),
                user1);

        Video video2 = new Video(2L,
                "Title from video 2",
                "Lorem ipsum dolor asit met.",
                new byte[]{},
                new byte[]{},
                LocalDate.now(),
                10495,
                592,
                new ArrayList<>(List.of("Comedy", "Random")),
                41,
                new ArrayList<>(List.of()),
                user1);

        Video video3 = new Video(3L,
                "Title from video 3",
                "Lorem ipsum dolor asit met.",
                new byte[]{},
                new byte[]{},
                LocalDate.now(),
                9242,
                3012,
                new ArrayList<>(List.of("Random")),
                41,
                new ArrayList<>(List.of()),
                user2);

        return args -> {
            log.info("Preloading " + socialMediaRepository.save(twitter));
            log.info("Preloading " + socialMediaRepository.save(instagram));
            log.info("Preloading " + socialMediaRepository.save(portfolio));
            log.info("Preloading " + roleRepository.save(user_role));
            log.info("Preloading " + roleRepository.save(admin_role));
            log.info("Preloading " + userRepository.save(user1));
            log.info("Preloading " + userRepository.save(user2));
            log.info("Preloading " + videoRepository.save(video1));
            log.info("Preloading " + videoRepository.save(video3));
            log.info("Preloading " + videoRepository.save(video2));
        };
    }
}
