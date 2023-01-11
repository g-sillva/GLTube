package com.gabriel.gltube.configuration;

import com.gabriel.gltube.role.ERole;
import com.gabriel.gltube.role.Role;
import com.gabriel.gltube.role.RoleRepository;
import com.gabriel.gltube.user.User;
import com.gabriel.gltube.user.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

@Configuration
public class LoadDatabase {

    @Autowired
    PasswordEncoder passwordEncoder;

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository, RoleRepository roleRepository) {
        Role user_role = new Role(1, ERole.ROLE_USER);
        Role admin_role = new Role(2, ERole.ROLE_ADMIN);

        User user1 = new User(1,
                "Gabriel",
                "Silva",
                "g-sillva",
                "sslg@gmail.com",
                passwordEncoder.encode("1234"),
                new HashSet<>(List.of(user_role)));

        User user2 = new User(2,
                "João",
                "Vitor",
                "vitorjj1",
                "vitor.j10@gmail.com",
                passwordEncoder.encode("1234"),
                new HashSet<>(List.of(user_role, admin_role)));

        return args -> {
            log.info("Preloading " + roleRepository.save(user_role));
            log.info("Preloading " + roleRepository.save(admin_role));
            log.info("Preloading " + userRepository.save(user1));
            log.info("Preloading " + userRepository.save(user2));
        };
    }
}
