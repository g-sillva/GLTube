package com.gabriel.gltube.user;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    @PreAuthorize("hasRole('USER')")
    ResponseEntity<?> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @GetMapping(params = { "id" })
    ResponseEntity<?> getUserById(@RequestParam long id) {
        User user = userService.getUserByID(id);
        if (user != null) return new ResponseEntity<>(user, HttpStatus.OK);
        return new ResponseEntity<>("User with ID '" + id + "' not found.", HttpStatus.NOT_FOUND);
    }

    @GetMapping(params = { "username" })
    ResponseEntity<?> getUserByUsername(@RequestParam String username) {
        User user = userService.getUserByUsername(username);
        if (user != null) return new ResponseEntity<>(user, HttpStatus.OK);
        return new ResponseEntity<>("User '" + username + "' not found.", HttpStatus.NOT_FOUND);
    }

    @GetMapping(params = { "email" })
    ResponseEntity<?> getUserByEmail(@RequestParam String email) {
        User user = userService.getUserByEmail(email);
        if (user != null) return new ResponseEntity<>(user, HttpStatus.OK);
        return new ResponseEntity<>("User '" + email + "' not found.", HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(params = { "id" })
    @PreAuthorize("hasRole('ADMIN')")
    ResponseEntity<?> deleteUser(@RequestParam long id) {
        if (userService.deleteUser(id)) return new ResponseEntity<>("Successfully deleted user!", HttpStatus.OK);
        return new ResponseEntity<>("User with ID '" + id + "' not found.", HttpStatus.NOT_FOUND);
    }

    @PutMapping(params = { "id" })
    @PreAuthorize("hasRole('ADMIN')")
        ResponseEntity<?> updateUser(@RequestParam long id, @RequestBody User userData) {
        User user = userService.updateUser(id, userData);
        if (user != null) return new ResponseEntity<>(user, HttpStatus.OK);
        return new ResponseEntity<>("User with ID '" + id + "' not found.", HttpStatus.NOT_FOUND);
    }

    @PostMapping(value = "/follow", params = { "u_id", "t_id" })
    @PreAuthorize("hasRole('USER')")
    ResponseEntity<?> followUser(@RequestParam long u_id, @RequestParam long t_id) {

        return new ResponseEntity<>(u_id + ", " + t_id, HttpStatus.OK);
    }
}
