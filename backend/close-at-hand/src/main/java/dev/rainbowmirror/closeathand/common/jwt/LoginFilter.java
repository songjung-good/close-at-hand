package dev.rainbowmirror.closeathand.common.jwt;

import dev.rainbowmirror.closeathand.domain.user.login.CustomUserDetails;
import jakarta.servlet.FilterChain;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import java.io.IOException;


public class LoginFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
    private final JWTUtil jwtUtil;

    public LoginFilter(AuthenticationManager auth, JWTUtil jwtUtil){
        this.authenticationManager = auth;
        this.jwtUtil = jwtUtil;
    }
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {
        String account = request.getParameterValues("account")[0];
        String password = request.getParameterValues("password")[0];
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(account, password, null);
        return authenticationManager.authenticate(authToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication){
        CustomUserDetails custumUserDetails = (CustomUserDetails) authentication.getPrincipal();
        String username = custumUserDetails.getUsername();

        String token = jwtUtil.createJwt(username, 60*60*10L);

        response.addHeader("Authorization", "Bearer " + token);
        response.setContentType("application/json");
        try {
            response.getWriter().println("{\"result\" : \""+"SUCCESS"+"\"}");
        }catch (IOException e) { return; }
    }
    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed){
        response.setContentType("application/json");
        try {
            response.getWriter().println("{\"result\" : \""+"FAIL"+"\"}");
        }catch (IOException ignored) { }
        response.setStatus(401);
    }
}
