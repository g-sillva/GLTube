package com.gabriel.gltube.user;

import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // READ (ALL)
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // READ (ID)
    User getUserByID(long id) {
        return userRepository.findById(id).orElse(null);
    }

    // READ (USERNAME)
    User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    // READ (EMAIL)
    User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    // DELETE
    boolean deleteUser(long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            userRepository.delete(user.get());
            return true;
        }
        return false;
    }

    // UPDATE
    User updateUser(long id, User userData) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            User u = user.get();
            u.setEmail(userData.getEmail());
            u.setPassword(passwordEncoder.encode(userData.getPassword()));
            u.setFirst_name(userData.getFirst_name());
            u.setLast_name(userData.getLast_name());
            u.setUsername(userData.getUsername());
            return userRepository.save(u);
        }
        return null;
    }

    // FOLLOW OTHER USER
    void followUser(long u_id, long t_id) {
        User cur_user = userRepository.findById(u_id).get();
        User tar_user = userRepository.findById(t_id).get();
    }
}
