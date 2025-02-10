package com.emailsender.payload;

import lombok.*;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmailResponse {
    private String message;

    private HttpStatus httpStatus;

    private Boolean success = false;
}
