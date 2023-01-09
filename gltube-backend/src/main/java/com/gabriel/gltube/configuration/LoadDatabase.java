package com.gabriel.gltube.configuration;

import com.gabriel.gltube.user.User;
import com.gabriel.gltube.user.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(UserRepository repository) {

        return args -> {
            log.info("Preloading " + repository.save(new User(1, "Gabriel", "Silva", "g-sillva", "sslg@gmail.com", "1234")));
            log.info("Preloading " + repository.save(new User(2, "João", "Vitor", "vitorjj1", "vitor.j10@gmail.com", "1234")));
        };
    }
}
