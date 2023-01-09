package com.gabriel.gltube.user;

import jakarta.websocket.server.PathParam;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping(value = "")
    List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(value = "/{id}")
    User getUserById(@PathVariable long id) {
        return userService.getUserByID(id);
    }

    @GetMapping(value = "/{username}")
    User getUserByUsername(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }

    @GetMapping(value = "/{email}")
    User getUserByEmail(@PathVariable String email) {
        return userService.getUserByEmail(email);
    }

    @PostMapping
    User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @DeleteMapping
    void deleteUserById(@PathVariable long id) {
        userService.deleteUser(id);
    }

    @PutMapping(value = "/{id}")
    User updateUser(@PathVariable long id, @RequestBody User userData) {
        return userService.updateUser(id, userData);
    }
}
