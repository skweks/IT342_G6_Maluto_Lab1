package IT342_G6_Maluto_Lab1;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @GetMapping("/me")
    public String getCurrentUser() {
        return "This is a protected route: User profile data would go here.";
    }
}