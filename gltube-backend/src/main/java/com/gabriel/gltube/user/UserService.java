package com.gabriel.gltube.user;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    // READ (ALL)
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // READ (ID)
    User getUserByID(long id) {
        return userRepository.findById(id).get();
    }

    // READ (USERNAME)
    User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    // READ (EMAIL)
    User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    // CREATE
    User createUser(User user) {
        return userRepository.save(user);
    }

    // DELETE
    void deleteUser(long id) {
        userRepository.deleteById(id);
    }

    // UPDATE
    User updateUser(long id, User userData) {
        User user = userRepository.findById(id).get();
        user.setEmail(userData.getEmail());
        user.setPassword(userData.getPassword());
        user.setFirst_name(userData.getFirst_name());
        user.setLast_name(userData.getLast_name());
        user.setUsername(userData.getUsername());

        return userRepository.save(user);
    }
}
