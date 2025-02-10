package com.emailsender.api;

import com.emailsender.payload.EmailRequest;
import com.emailsender.payload.EmailResponse;
import com.emailsender.service.EmailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/email")
public class EmailController {

    private EmailService emailService;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send")
    public ResponseEntity<EmailResponse> sendEmail(@RequestBody EmailRequest request){

        emailService.sendEmailWithHtml(request.getTo(), request.getSubject(), request.getMessage());

        return ResponseEntity.ok(
                EmailResponse.builder().message( "Email Sent Successfully").httpStatus( HttpStatus.OK).success(true)
                .build()
               );
    }

    @PostMapping("/send-with-file")
    public ResponseEntity<EmailResponse> sendEmailWithFile(@RequestPart EmailRequest request,@RequestPart MultipartFile file) throws IOException {

        emailService.sendEmailWithAttachment(request.getTo(), request.getSubject(), request.getMessage(), file.getInputStream());

        return ResponseEntity.ok(
                EmailResponse.builder().message( "Email Sent Successfully").httpStatus( HttpStatus.OK).success(true)
                        .build()
        );
    }
}
