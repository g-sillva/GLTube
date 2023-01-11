package com.gabriel.gltube.user;

import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(params = { "id" })
    User getUserById(@RequestParam long id) {
        return userService.getUserByID(id);
    }

    @GetMapping(params = { "username" })
    User getUserByUsername(@RequestParam String username) {
        return userService.getUserByUsername(username);
    }

    @GetMapping(params = { "email" })
    User getUserByEmail(@RequestParam String email) {
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
