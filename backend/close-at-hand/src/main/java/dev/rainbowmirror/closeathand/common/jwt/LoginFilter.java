package dev.rainbowmirror.closeathand.common.jwt;

import dev.rainbowmirror.closeathand.common.exception.InvalidParamException;
import dev.rainbowmirror.closeathand.domain.user.login.CustomUserDetails;
import jakarta.servlet.FilterChain;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import java.io.IOException;
import java.util.Collection;
import java.util.Enumeration;
import java.util.Iterator;


public class LoginFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
    private final JWTUtil jwtUtil;

    public LoginFilter(AuthenticationManager auth, JWTUtil jwtUtil){
        this.authenticationManager = auth;
        this.jwtUtil = jwtUtil;
    }
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {
        try {
            String account = request.getParameterValues("account")[0];
            String password = request.getParameterValues("password")[0];
            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(account, password, null);
            return authenticationManager.authenticate(authToken);
        } catch (Exception e){
            Enumeration<String> params = request.getParameterNames();
            while(params.hasMoreElements()) {
                String name = params.nextElement();
                System.out.print(name + " : " + request.getParameter(name) + "     ");
            }
            System.out.println();
            throw new InvalidParamException("요청을 확인해 주세요");
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication){
        CustomUserDetails custumUserDetails = (CustomUserDetails) authentication.getPrincipal();
        String username = custumUserDetails.getUsername();

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iter = authorities.iterator();
        GrantedAuthority auth = iter.next();

        String userToken = auth.getAuthority();

        String token = jwtUtil.createJwt(username, userToken, 900*24*60*60*10L);

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
